import { PureComponent } from 'react';

const GET_VALUES = {
  text: (field, e) => e.target.value,
  email: (field, e) => e.target.value,
  password: (field, e) => e.target.value,
  number: (field, e) => parseInt(e.target.value, 10),
  float: (field, e) => parseFloat(e.target.value),
  date: (field, e) => new Date(e.target.value),
  radio: (field, e) =>
    field.value.map(option => ({
      ...option,
      checked: option.id === e.id,
    })),
  object: (field, e) => e,
  array: (field, e) =>
    field.value.map(option => ({
      ...option,
      checked: option.id === e.id ? !option.checked : option.checked,
    })),
};
const TO_DATA = {
  text: field => field.value,
  email: field => field.value,
  password: field => field.value,
  number: field => field.value,
  float: field => field.value,
  date: field => field.value,
  radio: field => field.value.filter(option => option.checked),
  object: field => field.value,
  array: field => field.value.filter(option => option.checked),
};
const toData = field => {
  return TO_DATA[field.type](field);
};

const getValue = (field, e) => GET_VALUES[field.type](field, e);

const DEFAULT_FIELD_VALUES = {
  text: '',
  email: '',
  password: '',
  number: '',
  float: '',
  date: '',
  checkbox: undefined,
  radio: undefined,
  object: undefined,
  array: [],
};

const DEFAULT_FIELD_TYPE = 'text';
const isDirty = v => !!v;
const isFunction = fn => typeof fn === 'function';
class Formzy extends PureComponent {
  static defaultProps = {
    validate: () => ({}),
    fields: {},
    render: () => null,
    onChange: () => {},
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
      errorSubmitting: false,
    };
  }
  constructFields = fields => {
    return Object.keys(fields).reduce((_fields, fieldKey) => {
      const field = fields[fieldKey];
      field.type = field.type || DEFAULT_FIELD_TYPE;
      field.value = field.value || DEFAULT_FIELD_VALUES[field.type];
      field.touched = field.touched || false;
      field.dirty = isDirty(field.value);
      field.error = undefined;
      field.key = fieldKey;
      return { ..._fields, [fieldKey]: field };
    }, {});
  };
  onBlur = field => e => {
    const value = getValue(field, e);
    this.setState(
      {
        ...this.state,
        fields: {
          ...this.state.fields,
          [field.key]: {
            ...field,
            touched: true,
            dirty: isDirty(value),
            value,
          },
        },
      },
      this.validate
    );
  };
  onFocus = field => e => {
    const value = getValue(field, e);
    this.setState(
      {
        ...this.state,
        fields: {
          ...this.state.fields,
          [field.key]: {
            ...field,
            touched: true,
            value,
          },
        },
        formTouched: true,
      },
      this.validate
    );
  };
  fields = d => {
    let fieldMapper = this.props.fields;
    if (!isFunction(this.props.fields)) {
      fieldMapper = () => this.props.fields;
    }
    return fieldMapper(d);
  };
  onChange = field => e => {
    const value = getValue(field, e);
    this.setState(
      {
        ...this.state,
        fields: {
          ...this.state.fields,
          [field.key]: {
            ...field,
            touched: true,
            value,
          },
        },
      },
      this.validate
    );
  };
  validate = () => {
    const errors = this.props.validate(this.stateToData());
    const isFormValid = Object.keys(errors).length ? false : true;
    this.setState(
      {
        ...this.state,
        fields: Object.keys(this.state.fields).reduce((acc, k) => {
          if (!this.state.fields[k]) return acc;
          return {
            ...acc,
            [k]: {
              ...this.state.fields[k],
              error: errors[k],
            },
          };
        }, {}),
        isFormValid,
      },
      () => this.props.onChange(this.stateToData())
    );
  };
  consumerProps = () => ({
    fields: this.toConsumerFields(this.state.fields),
    isFormValid: this.state.isFormValid,
    formTouched: this.state.formTouched,
    submitting: this.state.submitting,
    errorSubmitting: this.state.errorSubmitting,
    loading: this.state.loading,
    errorLoading: this.state.errorLoading,
    submit: this.submit,
    fetch: fetch,
  });
  toConsumerFields = fields => {
    return Object.keys(fields).reduce((acc, key) => {
      const field = fields[key];
      if (!field) return acc;
      const { getValue, ...rest } = field;
      return {
        ...acc,
        [key]: {
          ...rest,
          onChange: this.onChange(field),
          onBlur: this.onBlur(field),
          onFocus: this.onFocus(field),
        },
      };
    }, {});
  };
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
        loading: true,
      });
      const fields = this.fields(await fn(this.consumerProps()));
      this.setState(
        {
          ...this.state,
          loading: false,
          fields: this.constructFields(fields),
        },
        this.validate
      );
    } catch (e) {
      this.setState({
        ...this.state,
        loading: false,
        errorLoading: true,
      });
    }
  };
  stateToData = () => {
    const data = Object.keys(this.state.fields).reduce((acc, k) => {
      if (!this.state.fields[k]) return acc;
      return { ...acc, [k]: toData(this.state.fields[k]) };
    }, {});
    return {
      ...data,
      isFormValid: this.state.isFormValid,
    };
  };
  submit = async e => {
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
        errorSubmitting: false,
      });
      const fields = this.fields(
        await this.props.submit(this.stateToData(), this.consumerProps())
      );
      this.setState({
        ...this.state,
        submitting: false,
        fields: this.constructFields(fields),
      });
    } catch (e) {
      this.setState({
        ...this.state,
        submitting: false,
        errorSubmitting: true,
      });
    }
  };
  render() {
    return this.props.render(this.consumerProps());
  }
}

export const isEmail = email => {
  /* eslint no-useless-escape: 0 */
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default Formzy;
