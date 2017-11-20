'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GET_VALUES = {
  text: function text(e) {
    return e.target.value;
  },
  email: function email(e) {
    return e.target.value;
  },
  password: function password(e) {
    return e.target.value;
  },
  number: function number(e) {
    return parseInt(e.target.value, 10);
  },
  float: function float(e) {
    return parseFloat(e.target.value);
  },
  date: function date(e) {
    return new Date(e.target.value);
  },
  radio: function radio(e) {
    return e.target.value === 'on';
  },
  object: function object(e) {
    return e;
  },
  custom: function custom(e) {
    return e;
  }
};
var DEFAULT_FIELD_VALUE = '';
var DEFAULT_FIELD_TYPE = 'text';
var isDirty = function isDirty(v) {
  return v === 0 || v || v.length;
};
var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};

var Formzy = function (_PureComponent) {
  _inherits(Formzy, _PureComponent);

  function Formzy(props) {
    _classCallCheck(this, Formzy);

    var _this = _possibleConstructorReturn(this, (Formzy.__proto__ || Object.getPrototypeOf(Formzy)).call(this, props));

    _initialiseProps.call(_this);

    var fields = _this.constructFields(_this.fields(props.initialValue || {}));
    _this.state = {
      fields: fields,
      formTouched: false,
      errorLoading: false,
      loading: false,
      submitting: false,
      errorSubmitting: false
    };
    return _this;
  }

  _createClass(Formzy, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.fetch) {
        this.fetch(this.props.fetch);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render(this.consumerProps());
    }
  }]);

  return Formzy;
}(_react.PureComponent);

Formzy.defaultProps = {
  validate: function validate() {
    return {};
  },
  fields: {},
  render: function render() {
    return null;
  },
  rethrow: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.constructFields = function (fields) {
    return Object.keys(fields).reduce(function (_fields, fieldKey) {
      var field = fields[fieldKey];
      field.value = field.value || DEFAULT_FIELD_VALUE;
      field.type = field.type || DEFAULT_FIELD_TYPE;
      field.getValue = GET_VALUES[field.type];
      field.touched = field.touched || false;
      field.dirty = isDirty(field.value);
      field.error = undefined;
      field.onChange = _this2.onChange(field);
      field.onBlur = _this2.onBlur(field);
      field.onFocus = _this2.onFocus(field);
      field.key = fieldKey;
      return Object.assign({}, _fields, _defineProperty({}, fieldKey, field));
    }, {});
  };

  this.onBlur = function (field) {
    return function (e) {
      var value = field.getValue(e);
      _this2.setState(Object.assign({}, _this2.state, {
        fields: Object.assign({}, _this2.state.fields, _defineProperty({}, field.key, Object.assign({}, field, {
          touched: true,
          dirty: isDirty(value),
          value: value
        })))
      }), _this2.validate);
    };
  };

  this.onFocus = function (field) {
    return function (e) {
      var value = field.getValue(e);
      _this2.setState(Object.assign({}, _this2.state, {
        fields: Object.assign({}, _this2.state.fields, _defineProperty({}, field.key, Object.assign({}, field, {
          touched: true,
          value: value
        }))),
        formTouched: true
      }), _this2.validate);
    };
  };

  this.fields = function (d) {
    var fieldMapper = _this2.props.fields;
    if (!isFunction(_this2.props.fields)) {
      fieldMapper = function fieldMapper() {
        return _this2.props.fields;
      };
    }
    return fieldMapper(d);
  };

  this.onChange = function (field) {
    return function (e) {
      var value = field.getValue(e);
      console.log('value', e.target.value);
      _this2.setState(Object.assign({}, _this2.state, {
        fields: Object.assign({}, _this2.state.fields, _defineProperty({}, field.key, Object.assign({}, field, {
          touched: true,
          value: value
        })))
      }), _this2.validate);
    };
  };

  this.validate = function () {
    var errors = _this2.props.validate(_this2.stateToData());
    var isFormValid = Object.keys(errors).length ? false : true;
    _this2.setState(Object.assign({}, _this2.state, {
      fields: Object.keys(_this2.state.fields).reduce(function (acc, k) {
        if (!_this2.state.fields[k]) return acc;
        return Object.assign({}, acc, _defineProperty({}, k, Object.assign({}, _this2.state.fields[k], {
          error: errors[k]
        })));
      }, {}),
      isFormValid: isFormValid
    }));
  };

  this.consumerProps = function () {
    return {
      fields: _this2.toConsumerFields(_this2.state.fields),
      isFormValid: _this2.state.isFormValid,
      formTouched: _this2.state.formTouched,
      submitting: _this2.state.submitting,
      errorSubmitting: _this2.state.errorSubmitting,
      loading: _this2.state.loading,
      errorLoading: _this2.state.errorLoading,
      submit: _this2.submit,
      fetch: fetch
    };
  };

  this.toConsumerFields = function (fields) {
    return Object.keys(fields).reduce(function (acc, key) {
      var field = fields[key];
      if (!field) return acc;

      var getValue = field.getValue,
          rest = _objectWithoutProperties(field, ['getValue']);

      return Object.assign({}, acc, _defineProperty({}, key, rest));
    }, {});
  };

  this.fetch = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(fn) {
      var fields;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isFunction(fn)) {
                _context.next = 3;
                break;
              }

              if (process.env.NODE_ENV !== 'production') {
                console.error('Formzy: fetch prop requires an async/promise function');
              }
              return _context.abrupt('return');

            case 3:
              _context.prev = 3;

              _this2.setState(Object.assign({}, _this2.state, {
                errorLoading: false,
                loading: true
              }));
              _context.t0 = _this2;
              _context.next = 8;
              return fn(_this2.consumerProps());

            case 8:
              _context.t1 = _context.sent;
              fields = _context.t0.fields.call(_context.t0, _context.t1);

              _this2.setState(Object.assign({}, _this2.state, {
                loading: false,
                fields: _this2.constructFields(fields)
              }), _this2.validate);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t2 = _context['catch'](3);

              _this2.setState(Object.assign({}, _this2.state, {
                errorLoading: true
              }));

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[3, 13]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.stateToData = function () {
    var data = Object.keys(_this2.state.fields).reduce(function (acc, k) {
      if (!_this2.state.fields[k]) return acc;
      return Object.assign({}, acc, _defineProperty({}, k, _this2.state.fields[k].value));
    }, {});
    return data;
  };

  this.submit = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
      var fields;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e && e.preventDefault();

              if (isFunction(_this2.props.submit)) {
                _context2.next = 4;
                break;
              }

              if (process.env.NODE_ENV !== 'production') {
                console.error('Formzy: submit prop requires an async/promise function');
              }
              return _context2.abrupt('return');

            case 4:
              _context2.prev = 4;

              _this2.setState(Object.assign({}, _this2.state, {
                submitting: true,
                errorSubmitting: false
              }));
              _context2.t0 = _this2;
              _context2.next = 9;
              return _this2.props.submit(_this2.stateToData(), _this2.consumerProps());

            case 9:
              _context2.t1 = _context2.sent;
              fields = _context2.t0.fields.call(_context2.t0, _context2.t1);

              _this2.setState(Object.assign({}, _this2.state, {
                submitting: false,
                fields: _this2.constructFields(fields)
              }));
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t2 = _context2['catch'](4);

              _this2.setState(Object.assign({}, _this2.state, {
                errorSubmitting: true
              }));

            case 17:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[4, 14]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var isEmail = exports.isEmail = function isEmail(email) {
  /* eslint no-useless-escape: 0 */
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

exports.default = Formzy;