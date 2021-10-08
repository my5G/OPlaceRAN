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

var _ = require('..');

var _styleUtils = require('../../helpers/style-utils');

var _person = require('react-icons/lib/md/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Base/Logout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border: 1px solid ', ';\n  color: white;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n'], ['\n  border: 1px solid ', ';\n  color: white;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  border: 1px solid ', ';\n  color: black;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n'], ['\n  border: 1px solid ', ';\n  color: black;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1xvr41p-0'
})(['width:300px;', ''], _styleUtils.media.mobile(_templateObject));

var TitleWrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1xvr41p-1'
})(['padding-left:1rem;line-height:3rem;font-size:1.2rem;color:white;background-color:', ';'], _openColor2.default.red[7]);

var ContentWrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1xvr41p-2'
})(['padding:1rem 0 0 1rem;height:5rem;font-size:1rem;color:', ';background-color:', ';'], _openColor2.default.gray[7], _openColor2.default.gray[1]);

var ButtonWrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1xvr41p-3'
})(['display:flex;justify-content:flex-end;background-color:', ';'], _openColor2.default.gray[2]);

var Button = _styledComponents2.default.button.withConfig({
  componentId: 's1xvr41p-4'
})(['margin:0.5rem;padding:0.3rem;width:4rem;text-align:center;font-size:0.9rem;border-radius:3px;outline:none;cursor:pointer;transition:all .3s;']);

var YesButton = Button.extend(_templateObject2, _openColor2.default.red[9], _openColor2.default.red[7], _openColor2.default.red[5], _openColor2.default.red[8]);

var NoButton = Button.extend(_templateObject3, _openColor2.default.gray[5], _openColor2.default.gray[3], _openColor2.default.gray[2], _openColor2.default.gray[4]);

var propTypes = {
  visible: _propTypes2.default.bool,
  onHide: _propTypes2.default.func,
  onLogout: _propTypes2.default.func
};

var Logout = function Logout(_ref) {
  var visible = _ref.visible,
      onHide = _ref.onHide,
      onLogout = _ref.onLogout;
  return _react2.default.createElement(_.Modal, {
    visible: visible,
    onOutside: onHide,
    transitionEnter: _styleUtils.transitions.slideDown + ' .5s ease-in-out',
    transitionLeave: _styleUtils.transitions.slideUp + ' .5s ease-in-out',
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500, __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement(TitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, 'Logout'), _react2.default.createElement(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, 'Are you sure you want to logout?'), _react2.default.createElement(ButtonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, _react2.default.createElement(YesButton, {
    onClick: onLogout, __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, 'Yes'), _react2.default.createElement(NoButton, {
    onClick: onHide, __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, 'No'))));
};

Logout.propTypes = propTypes;

exports.default = Logout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Jhc2UvTG9nb3V0LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwiTW9kYWwiLCJtZWRpYSIsInRyYW5zaXRpb25zIiwiUGVyc29uSWNvbiIsIldyYXBwZXIiLCJkaXYiLCJtb2JpbGUiLCJUaXRsZVdyYXBwZXIiLCJyZWQiLCJDb250ZW50V3JhcHBlciIsImdyYXkiLCJCdXR0b25XcmFwcGVyIiwiQnV0dG9uIiwiYnV0dG9uIiwiWWVzQnV0dG9uIiwiZXh0ZW5kIiwiTm9CdXR0b24iLCJwcm9wVHlwZXMiLCJ2aXNpYmxlIiwiYm9vbCIsIm9uSGlkZSIsImZ1bmMiLCJvbkxvZ291dCIsIkxvZ291dCIsInNsaWRlRG93biIsInNsaWRlVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFTLEFBQU87O0FBRWhCLEFBQU87Ozs7Ozs7Ozs7OztBQUVQLElBQU0scUNBQUEsQUFBaUI7ZUFBakI7QUFBQSxDQUFVLHdCQUdaLGtCQUhFLEFBR0ksT0FIVjs7QUFRQSxJQUFNLDBDQUFBLEFBQXNCO2VBQXRCO0FBQUEsQ0FBZSw4RkFPQyxvQkFBQSxBQUFHLElBUHpCLEFBQU0sQUFPZ0IsQUFBTzs7QUFHN0IsSUFBTSw0Q0FBQSxBQUF3QjtlQUF4QjtBQUFBLENBQWlCLDBGQUtaLG9CQUFBLEFBQUcsS0FMUixBQUtLLEFBQVEsSUFFRyxvQkFBQSxBQUFHLEtBUHpCLEFBQU0sQUFPZ0IsQUFBUTs7QUFHOUIsSUFBTSwyQ0FBQSxBQUF1QjtlQUF2QjtBQUFBLENBQWdCLG9FQUdBLG9CQUFBLEFBQUcsS0FIekIsQUFBTSxBQUdnQixBQUFROztBQUc5QixJQUFNLG9DQUFBLEFBQWdCO2VBQWhCO0FBQUEsQ0FBUyxHQUFmOztBQWVBLElBQU0sWUFBWSxPQUFaLEFBQW1CLHlCQUNILG9CQUFBLEFBQUcsSUFEbkIsQUFDZ0IsQUFBTyxJQUViLG9CQUFBLEFBQUcsSUFIYixBQUdVLEFBQU8sSUFFTCxvQkFBQSxBQUFHLElBTGYsQUFLWSxBQUFPLElBR1Asb0JBQUEsQUFBRyxJQVJyQixBQUFNLEFBUVksQUFBTzs7QUFJekIsSUFBTSxXQUFXLE9BQVgsQUFBa0IseUJBQ0Ysb0JBQUEsQUFBRyxLQURuQixBQUNnQixBQUFRLElBRWQsb0JBQUEsQUFBRyxLQUhiLEFBR1UsQUFBUSxJQUVOLG9CQUFBLEFBQUcsS0FMZixBQUtZLEFBQVEsSUFHUixvQkFBQSxBQUFHLEtBUnJCLEFBQU0sQUFRWSxBQUFROztBQUkxQixJQUFNO1dBQ0ssb0JBRE8sQUFDRyxBQUNuQjtVQUFRLG9CQUZRLEFBRUUsQUFDbEI7WUFBVSxvQkFIWixBQUFrQixBQUdJO0FBSEosQUFDaEI7O0FBS0YsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxlQUFILEFBQUc7TUFBSCxBQUFZLGNBQVosQUFBWTtNQUFaLEFBQW9CLGdCQUFwQixBQUFvQjt5QkFDakMsQUFBQzthQUFELEFBQ1csQUFDVDtlQUZGLEFBRWEsQUFDWDtxQkFBb0Isd0JBQXBCLEFBQWdDLFlBSGxDLEFBSUU7cUJBQW9CLHdCQUFwQixBQUFnQyxVQUpsQyxBQUtFOzRCQUxGLEFBSzBCLEFBQ3hCOzRCQU5GLEFBTTBCO2dCQU4xQjtrQkFBQSxBQU9FO0FBUEY7QUFDRSxHQURGLGtCQU9HLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFHQSwyQkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FKRixBQUlFLEFBR0EscURBQUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDthQUFBLEFBQ1c7Z0JBRFg7a0JBQUE7QUFBQTtBQUNFLEtBRkosQUFDRSxBQUlBLHdCQUFDLGNBQUQ7YUFBQSxBQUNXO2dCQURYO2tCQUFBO0FBQUE7QUFDRSxLQXJCSyxBQUNiLEFBT0UsQUFPRSxBQUtFO0FBcEJSOztBQTZCQSxPQUFBLEFBQU8sWUFBUCxBQUFtQixBQUVuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2dvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=