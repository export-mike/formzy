'use strict';

var _jsxFileName = 'src/formzy/index.test.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

test('Form should render with no errors', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Form should render with initialValue', function () {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_2.default, {
    initialValue: initialValue,
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref) {
      var fields = _ref.fields;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        },
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Form should render with updated value', function () {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
    initialValue: initialValue,
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref2) {
      var fields = _ref2.fields;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: undefined
        },
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }));

  var input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('change', { target: { value: '10000' } });

  expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
});

test('Form should render as expected after focus', function () {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
    initialValue: initialValue,
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref3) {
      var fields = _ref3.fields;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: undefined
        },
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }));

  var input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('focus', { target: { value: '10000' } });

  expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
});

test('Form should render as expected after blur', function () {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
    initialValue: initialValue,
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref4) {
      var fields = _ref4.fields;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: undefined
        },
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }));

  var input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('blur', { target: { value: '10000' } });

  expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
});

test('Form should render with initial values from fetch with loading state', function () {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
    fetch: function fetch() {
      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve(Object.assign({}, initialValue));
        });
      }, 500);
    },
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref5) {
      var fields = _ref5.fields,
          loading = _ref5.loading;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: undefined
        },
        loading && _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: undefined
          },
          'Loading...'
        ),
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }));

  var input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('change', { target: { value: '10000' } });
  expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
});

test('Form should render with initial values from fetch without loading state', function (cb) {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
    fetch: function fetch() {
      return new Promise(function (resolve) {
        return resolve(Object.assign({}, initialValue));
      });
    },
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref6) {
      var fields = _ref6.fields,
          loading = _ref6.loading;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: undefined
        },
        loading && _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 334
            },
            __self: undefined
          },
          'Loading...'
        ),
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: undefined
  }));
  setTimeout(function () {
    var input = tree.find('input[placeholder="Mileage (Miles)"]');
    input.simulate('change', { target: { value: '10000' } });
    expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
    cb();
  }, 0);
});
test('Form should render with date field', function () {
  var initialValue = {
    created: new Date('10-10-1990 10:10:10'),
    make: 'rover',
    model: '200',
    mileage: 97000
  };
  var wrapper = _reactTestRenderer2.default.create(_react2.default.createElement(_2.default, {
    initialValue: initialValue,
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        created: {
          label: 'Created',
          value: car.created,
          type: 'date'
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref7) {
      var fields = _ref7.fields,
          loading = _ref7.loading;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: undefined
        },
        loading && _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: undefined
          },
          'Loading...'
        ),
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.created.type,
          onChange: fields.created.onChange,
          onBlur: fields.created.onBlur,
          onFocus: fields.created.onFocus,
          value: fields.created.value,
          placeholder: fields.created.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: undefined
  })).toJSON();
  expect(wrapper).toMatchSnapshot();
});

test('Form should render with submit correct render props and call submit callback', function () {
  var _React$createElement;

  var initialValue = {
    created: new Date('10-10-1990 10:10:10'),
    make: 'rover',
    model: '200',
    mileage: 97000
  };
  var submitSpy = jest.fn();
  var renderSpy = jest.fn();
  var renders = 0;
  var renderPropsSpy = function renderPropsSpy(Component) {
    return function (args) {
      renders++;
      if (renders === 4) {
        expect(submitSpy).toBeCalled();
        expect(args.submitting).toEqual(true);
      }
      if (renders === 5) {
        expect(submitSpy).toBeCalled();
        expect(args.submitting).toEqual(false);
      }
      //TODO Reduce wasted Render Cycles
      expect(renders).toBeLessThan(6);
      return _react2.default.createElement(Component, Object.assign({}, args, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: undefined
      }));
    };
  };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, (_React$createElement = {
    initialValue: initialValue,
    submit: function submit() {
      return new Promise(function (resolve) {
        return setTimeout(function () {
          resolve();
          submitSpy();
        });
      }, 400);
    },
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        created: {
          label: 'Created',
          value: car.created,
          type: 'date'
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    }
  }, _defineProperty(_React$createElement, 'submit', submitSpy), _defineProperty(_React$createElement, 'render', renderPropsSpy(function (_ref8) {
    var loading = _ref8.loading,
        fields = _ref8.fields,
        submit = _ref8.submit,
        submitting = _ref8.submitting;
    return _react2.default.createElement(
      'form',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: undefined
      },
      loading && _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 504
          },
          __self: undefined
        },
        'Loading...'
      ),
      _react2.default.createElement('input', {
        type: fields.make.type,
        onChange: fields.make.onChange,
        onBlur: fields.make.onBlur,
        onFocus: fields.make.onFocus,
        value: fields.make.value,
        placeholder: fields.make.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: undefined
      }),
      _react2.default.createElement('input', {
        type: fields.created.type,
        onChange: fields.created.onChange,
        onBlur: fields.created.onBlur,
        onFocus: fields.created.onFocus,
        value: fields.created.value,
        placeholder: fields.created.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: undefined
      }),
      _react2.default.createElement('input', {
        type: fields.model.type,
        onChange: fields.model.onChange,
        onBlur: fields.model.onBlur,
        onFocus: fields.model.onFocus,
        value: fields.model.value,
        placeholder: fields.model.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: undefined
      }),
      _react2.default.createElement('input', {
        type: fields.mileage.type,
        onChange: fields.mileage.onChange,
        onBlur: fields.mileage.onBlur,
        onFocus: fields.mileage.onFocus,
        value: fields.mileage.value,
        placeholder: fields.mileage.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: undefined
      }),
      _react2.default.createElement(
        'button',
        { onClick: submit, __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          },
          __self: undefined
        },
        'Save'
      )
    );
  })), _defineProperty(_React$createElement, '__source', {
    fileName: _jsxFileName,
    lineNumber: 469
  }), _defineProperty(_React$createElement, '__self', undefined), _React$createElement)));
  var input = tree.find('input[placeholder="Mileage (Miles)"]');
  input.simulate('change', { target: { value: '10000' } });
  expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
  var button = tree.find('button');
  button.simulate('click');
});

test('Form should render with initial values from fail fetch loading state', function (cb) {
  var initialValue = { make: 'rover', model: '200', mileage: 97000 };
  var tree = (0, _enzyme.mount)(_react2.default.createElement(_2.default, {
    fetch: function fetch() {
      return new Promise(function (resolve, reject) {
        return reject(Object.assign({}, initialValue));
      });
    },
    fields: function fields(car) {
      return {
        make: {
          label: 'Make',
          value: car.make
        },
        model: {
          label: 'Model',
          value: car.model
        },
        mileage: {
          label: 'Mileage (Miles)',
          value: car.mileage,
          type: 'number'
        }
      };
    },
    render: function render(_ref9) {
      var fields = _ref9.fields,
          loading = _ref9.loading,
          errorLoading = _ref9.errorLoading;
      return _react2.default.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576
          },
          __self: undefined
        },
        loading && _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 577
            },
            __self: undefined
          },
          'Loading...'
        ),
        errorLoading && _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 578
            },
            __self: undefined
          },
          'Error Loading :( ...'
        ),
        _react2.default.createElement('input', {
          type: fields.make.type,
          onChange: fields.make.onChange,
          onBlur: fields.make.onBlur,
          onFocus: fields.make.onFocus,
          value: fields.make.value,
          placeholder: fields.make.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 579
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.model.type,
          onChange: fields.model.onChange,
          onBlur: fields.model.onBlur,
          onFocus: fields.model.onFocus,
          value: fields.model.value,
          placeholder: fields.model.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 587
          },
          __self: undefined
        }),
        _react2.default.createElement('input', {
          type: fields.mileage.type,
          onChange: fields.mileage.onChange,
          onBlur: fields.mileage.onBlur,
          onFocus: fields.mileage.onFocus,
          value: fields.mileage.value,
          placeholder: fields.mileage.label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: undefined
        })
      );
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: undefined
  }));
  setTimeout(function () {
    var input = tree.find('input[placeholder="Mileage (Miles)"]');
    input.simulate('change', { target: { value: '10000' } });
    expect((0, _enzymeToJson2.default)(tree)).toMatchSnapshot();
    cb();
  }, 0);
});

test('is invalid email', function () {
  var cases = ['plainaddress', '#@%^%#$@#$@#.com', '@domain.com', 'Joe Smith <email@domain.com>', 'email.domain.com', 'email@domain@domain.com', '.email@domain.com', 'email.@domain.com', 'email..email@domain.com', 'email@domain.com (Joe Smith)', 'email@domain', 'email@111.222.333.44444', 'email@domain..com'];
  cases.forEach(function (a) {
    expect((0, _.isEmail)(a)).toBeFalsy();
  });
});

test.skip('ignore? "あいうえお@domain.com", "email@-domain.com"', function () {
  expect((0, _.isEmail)('あいうえお@domain.com')).toBeFalsy();
  expect((0, _.isEmail)('email@-domain.com')).toBeFalsy();
});