'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Form.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: calc(100vh - 16rem);\n  '], ['\n    height: calc(100vh - 16rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's7pvd1b-0'
})(['display:flex;flex-direction:column;postion:relative;width:', ';', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], function (p) {
  return p.width || '1050px';
}, _styleUtils.media.mobile(_templateObject));

var Header = _styledComponents2.default.div.withConfig({
  componentId: 's7pvd1b-1'
})(['display:flex;justify-content:flex-start;padding:1rem;font-size:1.5rem;background:', ';'], _openColor2.default.gray[1]);

var Body = _styledComponents2.default.div.withConfig({
  componentId: 's7pvd1b-2'
})(['padding:2rem;font-size:14px;height:', ';', ' overflow:scroll;'], function (p) {
  return p.height || '500px';
}, _styleUtils.media.mobile(_templateObject2));

var Footer = _styledComponents2.default.div.withConfig({
  componentId: 's7pvd1b-3'
})(['display:flex;justify-content:flex-end;padding:1rem;']);

/* We can UI design with styled-componented. Later! */
var REQUIRED_FIELD_SYMBOL = "*";

var CustomTitleField = function CustomTitleField(props) {
  var id = props.id,
      title = props.title,
      required = props.required;

  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return _react2.default.createElement('legend', { id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, legend);
};

var fields = {
  TitleField: CustomTitleField
};

function Label(props) {
  var label = props.label,
      required = props.required,
      id = props.id;

  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    });
  }
  return _react2.default.createElement('label', { className: 'control-label', htmlFor: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, required ? label + REQUIRED_FIELD_SYMBOL : label);
}

var CustomFieldTemplate = function CustomFieldTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel;

  if (hidden) {
    return children;
  }

  return _react2.default.createElement('div', { className: classNames, __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, displayLabel && _react2.default.createElement(Label, { label: label, required: required, id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }), displayLabel && description ? description : null, children, errors, help);
};

var transformErrors = function transformErrors(errors) {
  return errors.map(function (error) {
    // use error messages from JSON schema if any
    if (error.schema.messages && error.schema.messages[error.name]) {
      return (0, _extends3.default)({}, error, {
        message: error.schema.messages[error.name]
      });
    }
    return error;
  });
};

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (data) {
      var onChange = _this.props.onChange;

      var formDataChanged = null;
      if (onChange) {
        formDataChanged = onChange(data.formData);
      }
      _this.setState({
        editing: true,
        disableSubmitButton: (0, _keys2.default)(data.errors).length > 0,
        formData: formDataChanged ? formDataChanged : data.formData
      });
    }, _this.handleSubmit = function (data) {
      var onSubmit = _this.props.onSubmit;

      onSubmit(data.formData);
    }, _this.handleSubmitButton = function () {
      _this.setState({
        disabled: true,
        disableSubmitButton: true
      });
      _this.submitButton.click();
    }, _this.handleOutside = function () {
      var onHide = _this.props.onHide;

      if (_this.state.editing === true) {
        _this.setState({ confirm: true });
      } else {
        onHide();
      }
    }, _this.handleClose = function () {
      var onHide = _this.props.onHide;

      _this.setState({ confirm: false });
      onHide();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible === false && nextProps.visible === true) {
        // Initialize State Variable when form view is visible for the first time
        this.setState({
          formData: nextProps.formData,
          disabled: false,
          editing: false,
          confirm: false,
          disableSubmitButton: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleChange = this.handleChange,
          handleSubmit = this.handleSubmit,
          handleSubmitButton = this.handleSubmitButton,
          handleOutside = this.handleOutside,
          handleClose = this.handleClose;
      var _props = this.props,
          visible = _props.visible,
          title = _props.title,
          schema = _props.schema,
          uiSchema = _props.uiSchema,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onSubmit = _props.onSubmit,
          onError = _props.onError;
      var _state = this.state,
          disabled = _state.disabled,
          disableSubmitButton = _state.disableSubmitButton,
          formData = _state.formData;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement(_Modal2.default, {
        visible: visible,
        onOutside: handleOutside,
        disableOnClickOutside: this.state.confirm, __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement(Wrapper, { id: 'nprogress-base-form', width: this.props.width, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, title), _react2.default.createElement(Body, { height: this.props.height, __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, isLoading && _react2.default.createElement(_Spinner2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }), !isLoading && _react2.default.createElement(_reactJsonschemaForm2.default, {
        schema: schema,
        uiSchema: disabled ? (0, _extends3.default)({
          "ui:disabled": true
        }, uiSchema) : (0, _extends3.default)({}, uiSchema),
        formData: formData,
        disableSubmitButton: disableSubmitButton,
        fields: fields,
        FieldTemplate: CustomFieldTemplate,
        liveValidate: true,
        validate: validate,
        showErrorList: false,
        transformErrors: transformErrors,
        autocomplete: 'off',
        onChange: handleChange,
        onSubmit: handleSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement('div', {
        'data-jsx': 301980644,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement('button', { type: 'submit', ref: function ref(el) {
          return _this2.submitButton = el;
        }, 'data-jsx': 301980644,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 301980644,
        css: 'button[data-jsx="301980644"]{display:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1SZ0MsQUFHc0MsYUFDZiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TaGFyZWQvRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBvYyBmcm9tICdvcGVuLWNvbG9yJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAnaGVscGVycy9zdHlsZS11dGlscyc7XG5cbmltcG9ydCBKc29uU2NoZW1hRm9ybSBmcm9tICdyZWFjdC1qc29uc2NoZW1hLWZvcm0nO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgQ29uZmlybSBmcm9tICcuL0NvbmZpcm0nO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3AgPT4gcC53aWR0aCB8fCBgMTA1MHB4YH07XG5cbiAgJHttZWRpYS5tb2JpbGVgXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgYH1cblxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogJHtvYy5ncmF5WzFdfTtcbmBcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodCB8fCBgNTAwcHhgfTtcbiAgJHttZWRpYS5tb2JpbGVgXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZyZW0pO1xuICBgfVxuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG5gXG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZzogMXJlbTtcbmBcblxuLyogV2UgY2FuIFVJIGRlc2lnbiB3aXRoIHN0eWxlZC1jb21wb25lbnRlZC4gTGF0ZXIhICovXG5jb25zdCBSRVFVSVJFRF9GSUVMRF9TWU1CT0wgPSBcIipcIjtcblxuY29uc3QgQ3VzdG9tVGl0bGVGaWVsZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHJlcXVpcmVkIH0gPSBwcm9wcztcbiAgY29uc3QgbGVnZW5kID0gcmVxdWlyZWQgPyB0aXRsZSArIFJFUVVJUkVEX0ZJRUxEX1NZTUJPTCA6IHRpdGxlO1xuICByZXR1cm4gPGxlZ2VuZCBpZD17aWR9PntsZWdlbmR9PC9sZWdlbmQ+O1xuXG59O1xuXG5jb25zdCBmaWVsZHMgPSB7XG4gIFRpdGxlRmllbGQ6IEN1c3RvbVRpdGxlRmllbGQsXG59O1xuXG5mdW5jdGlvbiBMYWJlbChwcm9wcykge1xuICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgaWQgfSA9IHByb3BzO1xuICBpZiAoIWxhYmVsKSB7XG4gICAgLy8gU2VlICMzMTI6IEVuc3VyZSBjb21wYXRpYmlsaXR5IHdpdGggb2xkIHZlcnNpb25zIG9mIFJlYWN0LlxuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPXtpZH0+XG4gICAgICB7cmVxdWlyZWQgPyBsYWJlbCArIFJFUVVJUkVEX0ZJRUxEX1NZTUJPTCA6IGxhYmVsfVxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmNvbnN0IEN1c3RvbUZpZWxkVGVtcGxhdGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBjbGFzc05hbWVzLFxuICAgIGxhYmVsLFxuICAgIGNoaWxkcmVuLFxuICAgIGVycm9ycyxcbiAgICBoZWxwLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGhpZGRlbixcbiAgICByZXF1aXJlZCxcbiAgICBkaXNwbGF5TGFiZWwsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoaGlkZGVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICB7ZGlzcGxheUxhYmVsICYmIDxMYWJlbCBsYWJlbD17bGFiZWx9IHJlcXVpcmVkPXtyZXF1aXJlZH0gaWQ9e2lkfSAvPn1cbiAgICAgIHtkaXNwbGF5TGFiZWwgJiYgZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IG51bGx9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7ZXJyb3JzfVxuICAgICAge2hlbHB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHRyYW5zZm9ybUVycm9ycyA9IGVycm9ycyA9PiB7XG4gIHJldHVybiBlcnJvcnMubWFwKGVycm9yID0+IHtcbiAgICAvLyB1c2UgZXJyb3IgbWVzc2FnZXMgZnJvbSBKU09OIHNjaGVtYSBpZiBhbnlcbiAgICBpZiAoZXJyb3Iuc2NoZW1hLm1lc3NhZ2VzICYmIGVycm9yLnNjaGVtYS5tZXNzYWdlc1tlcnJvci5uYW1lXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZXJyb3IsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLnNjaGVtYS5tZXNzYWdlc1tlcnJvci5uYW1lXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9KTtcbn07XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1aVNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb3JtRGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB0aXRsZTogXCJcIlxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlID09PSBmYWxzZSAmJiBuZXh0UHJvcHMudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSBTdGF0ZSBWYXJpYWJsZSB3aGVuIGZvcm0gdmlldyBpcyB2aXNpYmxlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICBmb3JtRGF0YTogbmV4dFByb3BzLmZvcm1EYXRhLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGVkaXRpbmc6IGZhbHNlLFxuICAgICAgICBjb25maXJtOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBkYXRhID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNoYW5nZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGZvcm1EYXRhQ2hhbmdlZCA9IG51bGw7ICBcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICBmb3JtRGF0YUNoYW5nZWQgPSBvbkNoYW5nZShkYXRhLmZvcm1EYXRhKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0aW5nOiB0cnVlLFxuICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogKE9iamVjdC5rZXlzKGRhdGEuZXJyb3JzKS5sZW5ndGggPiAwKSxcbiAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YUNoYW5nZWQgPyBmb3JtRGF0YUNoYW5nZWQgOiBkYXRhLmZvcm1EYXRhXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uU3VibWl0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvblN1Ym1pdChkYXRhLmZvcm1EYXRhKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5zdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25IaWRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lZGl0aW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29uZmlybTogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvbkhpZGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb25maXJtOiBmYWxzZSB9KVxuICAgIG9uSGlkZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGhhbmRsZVN1Ym1pdEJ1dHRvbixcbiAgICAgIGhhbmRsZU91dHNpZGUsXG4gICAgICBoYW5kbGVDbG9zZVxuICAgIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdmlzaWJsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgc2NoZW1hLFxuICAgICAgdWlTY2hlbWEsXG4gICAgICBpc0xvYWRpbmcsXG4gICAgICB2YWxpZGF0ZSxcbiAgICAgIG9uU3VibWl0LFxuICAgICAgb25FcnJvclxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlU3VibWl0QnV0dG9uLFxuICAgICAgZm9ybURhdGFcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TW9kYWwgXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX0gXG4gICAgICAgICAgb25PdXRzaWRlPXtoYW5kbGVPdXRzaWRlfVxuICAgICAgICAgIGRpc2FibGVPbkNsaWNrT3V0c2lkZT17dGhpcy5zdGF0ZS5jb25maXJtfT5cbiAgICAgICAgICA8V3JhcHBlciBpZD0nbnByb2dyZXNzLWJhc2UtZm9ybScgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9PlxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Qm9keSBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fT5cbiAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8U3Bpbm5lci8+fVxuICAgICAgICAgICAgICB7IWlzTG9hZGluZyAmJiBcbiAgICAgICAgICAgICAgICA8SnNvblNjaGVtYUZvcm1cbiAgICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxuICAgICAgICAgICAgICAgICAgdWlTY2hlbWE9e1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBcInVpOmRpc2FibGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgLi4udWlTY2hlbWFcbiAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi51aVNjaGVtYVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YT17Zm9ybURhdGF9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlU3VibWl0QnV0dG9uPXtkaXNhYmxlU3VibWl0QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgICBGaWVsZFRlbXBsYXRlPXtDdXN0b21GaWVsZFRlbXBsYXRlfVxuICAgICAgICAgICAgICAgICAgbGl2ZVZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICAgICAgICBzaG93RXJyb3JMaXN0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybUVycm9ycz17dHJhbnNmb3JtRXJyb3JzfVxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgb25FcnJvcj17b25FcnJvcn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiByZWY9eyhlbCA9PiB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGVsKX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0pzb25TY2hlbWFGb3JtPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsZWFyIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGVhciBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgZGlzYWJsZVN1Ym1pdEJ1dHRvbn0gb25DbGljaz17aGFuZGxlU3VibWl0QnV0dG9ufT5cbiAgICAgICAgICAgICAgICBTQVZFXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgICAgPC9XcmFwcGVyPiAgXG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDxDb25maXJtIFxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuY29uZmlybX0gXG4gICAgICAgICAgbWVzc2FnZT1cIllvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsb3NlP1wiXG4gICAgICAgICAgYnV0dG9ucz17W1xuICAgICAgICAgICAgeyB0ZXh0OiBcIkNMT1NFXCIsIGFjdGlvbjogaGFuZGxlQ2xvc2UsIGluZm86dHJ1ZSB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBcIk5PXCIsIGFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm06IGZhbHNlIH0pfVxuICAgICAgICAgIF19Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdfQ== */\n/*@ sourceURL=src/components/Shared/Form.js */'
      })))), _react2.default.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled, onClick: handleClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, 'CANCEL'), _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled || disableSubmitButton, onClick: handleSubmitButton, __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, 'SAVE')))), _react2.default.createElement(_Confirm2.default, {
        visible: this.state.confirm,
        message: 'You have unsaved changes. Are you sure you want to close?',
        buttons: [{ text: "CLOSE", action: handleClose, info: true }, { text: "NO", action: function action() {
            return _this2.setState({ confirm: false });
          } }], __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }));
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  visible: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  schema: _propTypes2.default.object,
  uiSchema: _propTypes2.default.object,
  formData: _propTypes2.default.object,
  isLoading: _propTypes2.default.bool,
  valdate: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onError: _propTypes2.default.func
};
Form.defaultProps = {
  visible: false,
  title: ""
};

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Gb3JtLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwibWVkaWEiLCJKc29uU2NoZW1hRm9ybSIsIk1vZGFsIiwiQnV0dG9uIiwiU3Bpbm5lciIsIkNvbmZpcm0iLCJXcmFwcGVyIiwiZGl2IiwicCIsIndpZHRoIiwibW9iaWxlIiwiSGVhZGVyIiwiZ3JheSIsIkJvZHkiLCJoZWlnaHQiLCJGb290ZXIiLCJSRVFVSVJFRF9GSUVMRF9TWU1CT0wiLCJDdXN0b21UaXRsZUZpZWxkIiwiaWQiLCJwcm9wcyIsInRpdGxlIiwicmVxdWlyZWQiLCJsZWdlbmQiLCJmaWVsZHMiLCJUaXRsZUZpZWxkIiwiTGFiZWwiLCJsYWJlbCIsIkN1c3RvbUZpZWxkVGVtcGxhdGUiLCJjbGFzc05hbWVzIiwiY2hpbGRyZW4iLCJlcnJvcnMiLCJoZWxwIiwiZGVzY3JpcHRpb24iLCJoaWRkZW4iLCJkaXNwbGF5TGFiZWwiLCJ0cmFuc2Zvcm1FcnJvcnMiLCJtYXAiLCJlcnJvciIsInNjaGVtYSIsIm1lc3NhZ2VzIiwibmFtZSIsIm1lc3NhZ2UiLCJGb3JtIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJvbkNoYW5nZSIsImZvcm1EYXRhQ2hhbmdlZCIsImRhdGEiLCJmb3JtRGF0YSIsInNldFN0YXRlIiwiZWRpdGluZyIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwic3VibWl0QnV0dG9uIiwiY2xpY2siLCJoYW5kbGVPdXRzaWRlIiwib25IaWRlIiwiY29uZmlybSIsImhhbmRsZUNsb3NlIiwibmV4dFByb3BzIiwidmlzaWJsZSIsInVpU2NoZW1hIiwiaXNMb2FkaW5nIiwidmFsaWRhdGUiLCJvbkVycm9yIiwiZWwiLCJ0ZXh0IiwiYWN0aW9uIiwiaW5mbyIsInByb3BUeXBlcyIs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