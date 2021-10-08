'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _withRipple = require('./withRipple');

var _withRipple2 = _interopRequireDefault(_withRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Button.js';


function getBgColor(props) {
  var color = _openColor2.default.indigo[7];
  var colorDark = _openColor2.default.indigo[8];

  // Determine color based on props
  if (props.secondary) {
    color = _openColor2.default.violet[7];
    colorDark = _openColor2.default.violet[8];
  }
  if (props.info) {
    color = _openColor2.default.gray[7];
    colorDark = _openColor2.default.gray[8];
  }
  if (props.danger) {
    color = _openColor2.default.red[7];
    colorDark = _openColor2.default.red[8];
  }
  if (props.success) {
    color = _openColor2.default.lime[7];
    colorDark = _openColor2.default.lime[8];
  }
  if (props.outline || props.clear) {
    color = 'transparent';
    colorDark = 'transparent';
  }

  /* eslint-disable max-len */
  return 'background: ' + color + '; background: linear-gradient(to bottom, ' + color + ' 0%, ' + colorDark + ' 100%);';
  /* eslint-enable max-len */
}

function getHoverColor(props) {
  var color = _openColor2.default.indigo[8];
  if (props.secondary) color = _openColor2.default.violet[8];
  if (props.info) color = _openColor2.default.gray[8];
  if (props.danger) color = _openColor2.default.red[8];
  if (props.success) color = _openColor2.default.lime[8];
  if (props.clear) color = 'transparent';

  return color;
}

function getActiveColor(props) {
  var color = _openColor2.default.indigo[9];
  if (props.secondary) color = _openColor2.default.violet[9];
  if (props.info) color = _openColor2.default.gray[9];
  if (props.danger) color = _openColor2.default.red[9];
  if (props.success) color = _openColor2.default.lime[9];

  return color;
}

function getColor(props) {
  if (props.primary) return _openColor2.default.indigo[7];
  if (props.secondary) return _openColor2.default.violet[7];
  if (props.info) return _openColor2.default.gray[7];
  if (props.danger) return _openColor2.default.red[7];
  if (props.success) return _openColor2.default.lime[7];
  return _openColor2.default.indigo[7]; // default
}

var ButtonWrapper = _styledComponents2.default.button.withConfig({
  componentId: 's12c1wa1-0'
})(['outline:none;font-size:1rem;padding:8px 16px;font-weight:normal;width:', ';text-shadow:1px 1px 2px rgba(0,0,0,0.1);border-style:solid;border-width:', ';border-radius:4px;border-color:', ';color:', ';', ' ', ';', ';', ' ', ' ', ' ', ' &:hover{background:', ';', ' ', '}&:active{background:', ';color:', ';}'], function (props) {
  return props.w || 'auto';
}, function (props) {
  return props.outline && !props.clear ? '1px' : '0px';
}, function (props) {
  return getColor(props);
}, function (props) {
  return props.outline || props.clear ? getColor(props) : '#fff';
}, function (props) {
  return !props.outline && !props.clear && !props.flat && 'box-shadow: 1px 3px 6px rgba(0,0,0,0.1);';
}, function (props) {
  return getBgColor(props);
}, function (props) {
  return props.disabled && 'opacity: 0.5; cursor: not-allowed;';
}, function (props) {
  return props.small && 'padding: 4px 8px;';
}, function (props) {
  return props.large && 'padding: 12px 20px;';
}, function (props) {
  return props.small && 'font-size: 0.8rem;';
}, function (props) {
  return props.large && 'font-size: 1.5rem;';
}, function (props) {
  return getHoverColor(props);
}, function (props) {
  return !props.clear && 'color: #fff;';
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return !props.clear && getActiveColor(props);
}, function (props) {
  return props.clear && getActiveColor(props);
});

var ButtonContent = _styledComponents2.default.div.withConfig({
  componentId: 's12c1wa1-1'
})(['display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;', ';'], function (props) {
  return props.disabled && 'pointer-events: none;';
});

var Button = function Button(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement(ButtonWrapper, (0, _extends3.default)({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }), _react2.default.createElement(ButtonContent, { disabled: rest.disabled, __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, children));
};

Button.propTypes = {
  children: _propTypes2.default.any
};

exports.default = (0, _withRipple2.default)(Button);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIndpdGhSaXBwbGUiLCJnZXRCZ0NvbG9yIiwicHJvcHMiLCJjb2xvciIsImluZGlnbyIsImNvbG9yRGFyayIsInNlY29uZGFyeSIsInZpb2xldCIsImluZm8iLCJncmF5IiwiZGFuZ2VyIiwicmVkIiwic3VjY2VzcyIsImxpbWUiLCJvdXRsaW5lIiwiY2xlYXIiLCJnZXRIb3ZlckNvbG9yIiwiZ2V0QWN0aXZlQ29sb3IiLCJnZXRDb2xvciIsInByaW1hcnkiLCJCdXR0b25XcmFwcGVyIiwiYnV0dG9uIiwidyIsImZsYXQiLCJkaXNhYmxlZCIsInNtYWxsIiwibGFyZ2UiLCJCdXR0b25Db250ZW50IiwiZGl2IiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJyZXN0IiwicHJvcFR5cGVzIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7Ozs7Ozs7QUFFUCxTQUFBLEFBQVMsV0FBVCxBQUFvQixPQUFPLEFBQ3pCO01BQUksUUFBUSxvQkFBQSxBQUFHLE9BQWYsQUFBWSxBQUFVLEFBQ3RCO01BQUksWUFBWSxvQkFBQSxBQUFHLE9BQW5CLEFBQWdCLEFBQVUsQUFFMUI7O0FBQ0E7TUFBSSxNQUFKLEFBQVUsV0FBVyxBQUNuQjtZQUFRLG9CQUFBLEFBQUcsT0FBWCxBQUFRLEFBQVUsQUFDbEI7Z0JBQVksb0JBQUEsQUFBRyxPQUFmLEFBQVksQUFBVSxBQUN2QjtBQUNEO01BQUksTUFBSixBQUFVLE1BQU0sQUFDZDtZQUFRLG9CQUFBLEFBQUcsS0FBWCxBQUFRLEFBQVEsQUFDaEI7Z0JBQVksb0JBQUEsQUFBRyxLQUFmLEFBQVksQUFBUSxBQUNyQjtBQUNEO01BQUksTUFBSixBQUFVLFFBQVEsQUFDaEI7WUFB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