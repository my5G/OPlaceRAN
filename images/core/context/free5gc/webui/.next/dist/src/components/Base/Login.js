'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _ = require('..');

var _person = require('react-icons/lib/md/person');

var _person2 = _interopRequireDefault(_person);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Base/Login.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    top: 0;\n    left: 0;\n    transform: translate(0, 0);\n\n    width: 100%;\n  '], ['\n    top: 0;\n    left: 0;\n    transform: translate(0, 0);\n\n    width: 100%;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-0'
})(['position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid ', ';box-shadow:1px 1px 2px ', ';width:', ';', ''], _openColor2.default.gray[4], _openColor2.default.gray[4], function (props) {
  return props.width;
}, _styleUtils.media.mobile(_templateObject));

Wrapper.propTypes = {
  width: _propTypes2.default.string
};

var ErrorWrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-1'
})(['display:flex;align-items:center;font-size:1rem;line-height:3rem;color:', ';background-color:', ';border-bottom:1px solid ', ';box-shadow:1px 1px 2px ', ';'], _openColor2.default.gray[7], _openColor2.default.pink[2], _openColor2.default.pink[3], _openColor2.default.pink[3]);

var ErrorMessage = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-2'
})(['padding-left:1rem;']);

var ErrorClose = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-3'
})(['position:absolute;right:1rem;']);

var ErrorBar = function ErrorBar(_ref) {
  var visible = _ref.visible,
      message = _ref.message,
      onClose = _ref.onClose;
  return visible ? _react2.default.createElement(ErrorWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(ErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, message), _react2.default.createElement(ErrorClose, { onClick: onClose, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_close2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }))) : null;
};

ErrorBar.propTypes = {
  visible: _propTypes2.default.bool,
  message: _propTypes2.default.string,
  onClose: _propTypes2.default.func
};

var Thumbnail = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-4'
})(['display:flex;justify-content:center;padding:3rem 0;background:white;']);

var Form = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-5'
})(['padding:1rem;background:', ';'], _openColor2.default.gray[0]);

var InputWrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-6'
})(['padding:0.5rem 0;']);

var Title = _styledComponents2.default.div.withConfig({
  componentId: 's1z0gkog-7'
})(['margin-bottom:0.5rem;text-align:left;font-size:1rem;font-weight:bold;color:', ';'], _openColor2.default.gray[8]);

var Input = _styledComponents2.default.input.withConfig({
  componentId: 's1z0gkog-8'
})(['padding:0.5rem;width:100%;border:1px solid ', ';font-size:1rem;line-height:1.5rem;transition:all .25s;outline:none;&:focus{border:1px solid ', ';}'], _openColor2.default.gray[2], _openColor2.default.blue[7]);

Input.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

var Button = _styledComponents2.default.button.withConfig({
  componentId: 's1z0gkog-9'
})(['margin-top:1rem;padding:1rem 0;width:100%;text-align:center;font-weight:500;font-size:1.2rem;color:white;background:', ';border:1px solid ', ';outline:none;cursor:pointer;transition:all .3s;&:hover{background:', ';}&:active{background:', ';border:1px solid ', ';}'], function (props) {
  return _openColor2.default[props.color][7];
}, function (props) {
  return _openColor2.default[props.color][10];
}, function (props) {
  return _openColor2.default[props.color][6];
}, function (props) {
  return _openColor2.default[props.color][8];
}, _openColor2.default.blue[7]);

Button.propTypes = {
  color: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

var Login = function Login(_ref2) {
  var width = _ref2.width,
      form = _ref2.form,
      error = _ref2.error,
      _innerRef = _ref2.innerRef,
      onChange = _ref2.onChange,
      onSubmit = _ref2.onSubmit,
      onKeyPress = _ref2.onKeyPress,
      onErrorReset = _ref2.onErrorReset;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  }, 'free5GC - Login')), _react2.default.createElement(Wrapper, { id: 'nprogress-base-login', width: width, __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    }
  }, _react2.default.createElement(ErrorBar, {
    visible: error !== null,
    message: error && error.message,
    onClose: onErrorReset, __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }), _react2.default.createElement(Thumbnail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, _react2.default.createElement(_.CircleIcon, { size: '8rem', background: _openColor2.default['blue'][6], __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, _react2.default.createElement(_person2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    }
  }))), _react2.default.createElement(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    }
  }, _react2.default.createElement(InputWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, 'Username'), _react2.default.createElement(Input, {
    name: 'username',
    type: 'text',
    placeholder: '',
    value: form.username,
    onChange: onChange,
    onKeyPress: onKeyPress,
    innerRef: function innerRef(comp) {
      _innerRef(comp);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  })), _react2.default.createElement(InputWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    }
  }, 'Password'), _react2.default.createElement(Input, {
    name: 'password',
    type: 'password',
    placeholder: '',
    value: form.password,
    onChange: onChange,
    onKeyPress: onKeyPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  })), _react2.default.createElement(Button, { color: 'teal', onClick: onSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, 'Login'))));
};

Login.propTypes = {
  width: _propTypes2.default.string
};

Login.defaultProps = {
  width: '360px'
};

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Jhc2UvTG9naW4uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSGVhZCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwibWVkaWEiLCJDaXJjbGVJY29uIiwiUGVyc29uSWNvbiIsIkNsb3NlSWNvbiIsIldyYXBwZXIiLCJkaXYiLCJncmF5IiwicHJvcHMiLCJ3aWR0aCIsIm1vYmlsZSIsInByb3BUeXBlcyIsInN0cmluZyIsIkVycm9yV3JhcHBlciIsInBpbmsiLCJFcnJvck1lc3NhZ2UiLCJFcnJvckNsb3NlIiwiRXJyb3JCYXIiLCJ2aXNpYmxlIiwibWVzc2FnZSIsIm9uQ2xvc2UiLCJib29sIiwiZnVuYyIsIlRodW1ibmFpbCIsIkZvcm0iLCJJbnB1dFdyYXBwZXIiLCJUaXRsZSIsIklucHV0IiwiaW5wdXQiLCJibHVlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJCdXR0b24iLCJidXR0b24iLCJjb2xvciIsIm9uQ2xpY2siLCJMb2dpbiIsImZvcm0iLCJlcnJvciIsImlubmVyUmVmIiwib25TdWJtaXQiLCJvbktleVByZXNzIiwib25FcnJvclJlc2V0IiwidXNlcm5hbWUiLCJjb21wIiwicGFzc3dvcmQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQUVQLElBQU0scUNBQUEsQUFBaUI7ZUFBakI7QUFBQSxDQUFVLHdJQU1NLG9CQUFBLEFBQUcsS0FObkIsQUFNZ0IsQUFBUSxJQUNGLG9CQUFBLEFBQUcsS0FQekIsQUFPc0IsQUFBUSxJQUV6QixpQkFBQTtTQUFTLE1BQVQsQUFBZTtBQVRwQixHQVVGLGtCQVZFLEFBVUksT0FWVjs7QUFt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QTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0E7QUFEQTtBQUFBLHFCQUNBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBQ0UsQUFDQSxBQUVBLHFDQUFDLGNBQUQsV0FBUyxJQUFULEFBQVksd0JBQXVCLE9BQW5DLEFBQTBDO2dCQUExQztrQkFBQSxBQUNFO0FBREY7bUNBQ0UsQUFBQzthQUNVLFVBRFgsQUFDcUIsQUFDbkI7YUFBUyxTQUFTLE1BRnBCLEFBRTBCLEFBQ3hCO2FBSEYsQUFHVztnQkFIWDtrQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLHNCQUdELGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsOEJBQVcsTUFBWixBQUFpQixRQUFPLFlBQVksb0JBQUEsQUFBRyxRQUF2QyxBQUFvQyxBQUFXO2dCQUEvQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBUE4sQUFLRSxBQUNFLEFBQ0UsQUFHSjtBQUhJO0FBQUEsd0JBR0gsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDJDQUFBLEFBQUM7VUFBRCxBQUNPLEFBQ0w7VUFGRixBQUVPLEFBQ0w7aUJBSEYsQUFHYyxBQUNaO1dBQU8sS0FKVCxBQUljLEFBQ1o7Y0FMRixBQUtZLEFBQ1Y7Z0JBTkYsQUFNYyxBQUNaO2NBQVUsa0JBQUEsQUFBQyxNQUFTLEFBQUM7Z0JBQUEsQUFBUyxBQUFNO0FBUHRDOztnQkFBQTtrQkFISixBQUNFLEFBRUUsQUFVRjtBQVZFO0FBQ0UsdUJBU0gsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDJDQUFBLEFBQUM7VUFBRCxBQUNPLEFBQ0w7VUFGRixBQUVPLEFBQ0w7aUJBSEYsQUFHYyxBQUNaO1dBQU8sS0FKVCxBQUljLEFBQ1o7Y0FMRixBQUtZLEFBQ1Y7Z0JBTkYsQUFNYzs7Z0JBTmQ7a0JBZkosQUFhRSxBQUVFLEFBU0Y7QUFURTtBQUNFLHVCQVFILGNBQUQsVUFBUSxPQUFSLEFBQWMsUUFBTyxTQUFyQixBQUE4QjtnQkFBOUI7a0JBQUE7QUFBQTtLQWhETSxBQVVaLEFBSUUsQUFVRSxBQXdCRTtBQWhEUjs7QUF3REEsTUFBQSxBQUFNO1NBQ0csb0JBRFQsQUFBa0IsQUFDQztBQURELEFBQ2hCOztBQUdGLE1BQUEsQUFBTTtTQUFOLEFBQXFCLEFBQ1osQUFHVDtBQUpxQixBQUNuQjs7a0JBR0YsQUFBZSIsImZpbGUiOiJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==