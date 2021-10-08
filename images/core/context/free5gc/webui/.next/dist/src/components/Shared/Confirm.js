'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dimmed = require('./Dimmed');

var _Dimmed2 = _interopRequireDefault(_Dimmed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Confirm.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'nla5sz-0'
})(['display:flex;flex-direction:column;postion:relative;width:300px;', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], _styleUtils.media.mobile(_templateObject));

var Message = _styledComponents2.default.div.withConfig({
  componentId: 'nla5sz-1'
})(['padding:2rem;']);

var Buttons = _styledComponents2.default.div.withConfig({
  componentId: 'nla5sz-2'
})(['display:flex;justify-content:flex-end;padding:1rem;']);

var Confirm = function Confirm(_ref) {
  var visible = _ref.visible,
      onOutside = _ref.onOutside,
      message = _ref.message,
      buttons = _ref.buttons;

  var buttonList = buttons.map(function (button) {
    return _react2.default.createElement(_Button2.default, {
      key: button.text,
      clear: true,
      danger: button.danger === true,
      info: button.info === true,
      onClick: button.action, __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, button.text);
  });
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_Modal2.default, {
    visible: visible,
    onOutside: onOutside,
    zindex: '1000',
    transitionEnterTimeout: 10,
    transitionLeaveTimeout: 30, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(Message, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, message), _react2.default.createElement(Buttons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, buttonList))), _react2.default.createElement(_Dimmed2.default, { visible: visible, zindex: '999', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }));
};

Confirm.propTypes = {
  visible: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onOutside: _propTypes2.default.func
};

Confirm.defaultProps = {
  visible: false,
  disabled: true,
  onOutside: function onOutside() {}
};

exports.default = Confirm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Db25maXJtLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwibWVkaWEiLCJ0cmFuc2l0aW9ucyIsIk1vZGFsIiwiQnV0dG9uIiwiRGltbWVkIiwiV3JhcHBlciIsImRpdiIsIm1vYmlsZSIsIk1lc3NhZ2UiLCJCdXR0b25zIiwiQ29uZmlybSIsInZpc2libGUiLCJvbk91dHNpZGUiLCJtZXNzYWdlIiwiYnV0dG9ucyIsImJ1dHRvbkxpc3QiLCJtYXAiLCJidXR0b24iLCJ0ZXh0IiwiZGFuZ2VyIiwiaW5mbyIsImFjdGlvbiIsInByb3BUeXBlcyIsImJvb2wiLCJkaXNhYmxlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFPOztBQUVoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLHFDQUFBLEFBQWlCO2VBQWpCO0FBQUEsQ0FBVSxpS0FNWixrQkFORSxBQU1JLE9BTlY7O0FBY0EsSUFBTSxxQ0FBQSxBQUFpQjtlQUFqQjtBQUFBLENBQVUsR0FBaEI7O0FBSUEsSUFBTSxxQ0FBQSxBQUFpQjtlQUFqQjtBQUFBLENBQVUsR0FBaEI7O0FBT0EsSUFBTSxVQUFVLFNBQVYsQUFBVSxjQUE4QztNQUEzQyxBQUEyQyxlQUEzQyxBQUEyQztNQUFsQyxBQUFrQyxpQkFBbEMsQUFBa0M7TUFBdkIsQUFBdUIsZUFBdkIsQUFBdUI7TUFBZCxBQUFjLGVBQWQsQUFBYyxBQUM1RDs7TUFBTSxxQkFBYSxBQUNoQixJQUFJLGtCQUFBOzJCQUNILEFBQUM7V0FDTSxPQURQLEFBQ2MsQUFDWjthQUZGLEFBRVMsQUFDUDtjQUFRLE9BQUEsQUFBTyxXQUhqQixBQUc0QixBQUMxQjtZQUFNLE9BQUEsQUFBTyxTQUpmLEFBSXdCLEFBQ3RCO2VBQVMsT0FMWCxBQUtrQjtrQkFMbEI7b0JBQUEsQUFNRztBQU5IO0FBQ0UsS0FERixTQURHLEFBQ0gsQUFNVTtBQVJkLEFBQW1CLEFBV25CLEdBWG1CO3lCQVlqQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7YUFBRCxBQUNXLEFBQ1Q7ZUFGRixBQUVhLEFBQ1g7WUFIRixBQUdTLEFBQ1A7NEJBSkYsQUFJMEIsQUFDeEI7NEJBTEYsQUFLMEI7Z0JBTDFCO2tCQUFBLEFBTUU7QUFORjtBQUNFLHFCQUtDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQVU7QUFBVjtBQUFBLEtBREYsQUFDRSxBQUNBLDBCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQVU7QUFBVjtBQUFBLEtBVE4sQUFDRSxBQU1FLEFBRUUsQUFHSiwrQkFBQSxBQUFDLGtDQUFPLFNBQVIsQUFBaUIsU0FBUyxRQUExQixBQUFpQztnQkFBakM7a0JBYkosQUFDRSxBQVlFLEFBR0w7QUFISzs7QUF6Qk47O0FBOEJBLFFBQUEsQUFBUTtXQUNHLG9CQURTLEFBQ0MsQUFDbkI7WUFBVSxvQkFGUSxBQUVFLEFBQ3BCO2FBQVcsb0JBSGIsQUFBb0IsQUFHRztBQUhILEFBQ2xCOztBQUtGLFFBQUEsQUFBUTtXQUFlLEFBQ1osQUFDVDtZQUZxQixBQUVYLEFBQ1Y7YUFBVyxxQkFBTSxBQUFFLENBSHJCLEFBQXVCLEFBTXZCO0FBTnVCLEFBQ3JCOztrQkFLRixBQUFlIiwiZmlsZSI6IkNvbmZpcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=