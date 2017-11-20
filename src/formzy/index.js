import {PureComponent} from 'react';

const GET_VALUES = {
  text: e => e.target.value,
  email: e => e.target.value,
  password: e => e.target.value,
  number: e => parseInt(e.target.value, 10),
  float: e => parseFloat(e.target.value),
  date: e => new Date(e.target.value),
  radio: e => e.target.value === 'on',
  object: e => e,
  custom: e => e
}
const DEFAULT_FIELD_VALUE = '';
const DEFAULT_FIELD_TYPE = 'text';
const isDirty = v => v === 0 || v || v.length;
const isFunction = fn => typeof(fn) === 'function';
class Formzy extends PureComponent {
  static defaultProps = {
    validate: () => ({}),
    fields: {},
    render: () => null,
    rethrow: false
  };
  constructor(props) {
    super(props);
    const fields = this.constructFields(this.fields(props.initialValue || {}));
    this.state = {
      fields,
      formTouched: false,
      errorLoading: false,
      loading: false,
      submitting: false,
      errorSubmitting: false
    }
  }
  constructFields = fields => {
    return Object.keys(fields).reduce((_fields, fieldKey) => {
      const field = fields[fieldKey];
      field.value = field.value || DEFAULT_FIELD_VALUE;
      field.type = field.type || DEFAULT_FIELD_TYPE;
      field.getValue = GET_VALUES[field.type];
      field.touched = field.touched || false;
      field.dirty = isDirty(field.value);
      field.error = undefined;
      field.onChange = this.onChange(field);
      field.onBlur = this.onBlur(field);
      field.onFocus = this.onFocus(field);
      field.key = fieldKey;
      return {..._fields, [fieldKey]: field}
    }, {});
  }
  onBlur = field => e => {
    const value = field.getValue(e);
    this.setState({
     ...this.state,
     fields: {
        ...this.state.fields,
        [field.key]: {
         ...field,
         touched: true,
         dirty: isDirty(value),
         value
        }
     }
    }, this.validate);
  }
  onFocus = field => e => {
    const value = field.getValue(e);
    this.setState({
     ...this.state,
     fields: {
       ...this.state.fields,
       [field.key]: {
        ...field,
        touched: true,
        value
      },
    },
    formTouched: true,
  }, this.validate);
  }
  fields = d => {
    let fieldMapper = this.props.fields;
    if (!isFunction(this.props.fields)){
      fieldMapper = () => this.props.fields;
    }
    return fieldMapper(d);
  }
  onChange = field => e => {
    const value = field.getValue(e);
    this.setState({
       ...this.state,
       fields: {
         ...this.state.fields,
         [field.key]: {
          ...field,
          touched: true,
          value
         },
       }
     }, this.validate);
  }
  validate = () => {
    const errors = this.props.validate(this.stateToData());
    const isFormValid = Object.keys(errors).length ? false : true;
    this.setState({
      ...this.state,
      fields: Object.keys(this.state.fields).reduce((acc, k) => {
        if (!this.state.fields[k]) return acc;
        return {
          ...acc,
          [k]: {
            ...this.state.fields[k],
            error: errors[k]
          }
        }
      }, {}),
      isFormValid
    });
  }
  consumerProps = () => ({
    fields: this.toConsumerFields(this.state.fields),
    isFormValid: this.state.isFormValid,
    formTouched: this.state.formTouched,
    submitting: this.state.submitting,
    errorSubmitting: this.state.errorSubmitting,
    loading: this.state.loading,
    errorLoading: this.state.errorLoading,
    submit: this.submit,
    fetch: fetch
  });
  toConsumerFields = fields => {
    return Object.keys(fields).reduce((acc, key) => {
      const field = fields[key];
      if (!field) return acc;
      const { getValue, ...rest } = field;
      return {
        ...acc,
        [key]: rest
      };
    }, {});
  }
  componentWillMount() {
    if (this.props.fetch) {
      this.fetch(this.props.fetch);
    }
  }
  fetch = async fn => {
    if (!isFunction(fn)) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Formzy: fetch prop requires an async/promise function');
      }
      return;
    }
    try {
      this.setState({
        ...this.state,
        errorLoading: false,
        loading: true
      });
      const fields = this.fields((await fn(this.consumerProps())));
      this.setState({
        ...this.state,
        loading: false,
        fields: this.constructFields(fields)
      }, this.validate);
    } catch (e) {
      this.setState({
        ...this.state,
        errorLoading: true
      });
    }
  }
  stateToData = () => {
    const data = Object.keys(this.state.fields).reduce((acc, k) => {
      if (!this.state.fields[k]) return acc;
      return {...acc, [k]: this.state.fields[k].value};
    }, {});
    return data;
  }
  submit = async (e) => {
    e && e.preventDefault();
    if (!isFunction(this.props.submit)) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Formzy: submit prop requires an async/promise function');
      }
      return;
    }
    try {
      this.setState({
        ...this.state,
        submitting: true,
        errorSubmitting: false
      });
      const fields = this.fields((await this.props.submit(this.stateToData(), this.consumerProps())));
      this.setState({
        ...this.state,
        submitting: false,
        fields: this.constructFields(fields)
      });
    } catch (e) {
      this.setState({
        ...this.state,
        errorSubmitting: true,
      });
    }
  }
  render() {
    return this.props.render(this.consumerProps());
  }
}

export const isEmail = email => {
  /* eslint no-useless-escape: 0 */
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default Formzy;
