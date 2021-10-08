'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Spinner.js';


var circleAnim = (0, _styledComponents.keyframes)(['0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(360deg);}']);

var getIconSize = function getIconSize(_ref) {
  var small = _ref.small,
      medium = _ref.medium,
      large = _ref.large;

  if (small) return '16px';
  if (medium) return '64px';
  if (large) return '96px';
  return '32px';
};

var getBorderWidth = function getBorderWidth(_ref2) {
  var small = _ref2.small,
      medium = _ref2.medium,
      large = _ref2.large;

  if (small) return '1px';
  if (medium) return '4px';
  if (large) return '6px';
  return '2px';
};

var Circle = _styledComponents2.default.div.withConfig({
  componentId: 'jcmc6q-0'
})(['width:', ';height:', ';position:relative;display:inline-block;box-sizing:border-box;font-size:0px;color:', ';'], function (props) {
  return getIconSize(props);
}, function (props) {
  return getIconSize(props);
}, function (props) {
  return props.color || _openColor2.default.indigo[8];
});

var CircleInner = _styledComponents2.default.div.withConfig({
  componentId: 'jcmc6q-1'
})(['position:relative;box-sizing:border-box;display:inline-block;float:none;width:', ';height:', ';background:transparent;border:', ' solid currentColor;border-bottom-color:transparent;border-Radius:100%;animation:', ' 0.75s linear infinite;'], function (props) {
  return getIconSize(props);
}, function (props) {
  return getIconSize(props);
}, function (props) {
  return getBorderWidth(props);
}, circleAnim);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'jcmc6q-2'
})(['text-align:', ';padding:', ';'], function (props) {
  return props.align || 'center';
}, function (props) {
  return props.padding || '2rem';
});

var Spinner = function Spinner(_ref3) {
  var sm = _ref3.sm,
      md = _ref3.md,
      lg = _ref3.lg,
      color = _ref3.color,
      align = _ref3.align,
      padding = _ref3.padding;
  return _react2.default.createElement(Wrapper, { align: align, padding: padding, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(Circle, {
    small: sm,
    medium: md,
    large: lg,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(CircleInner, {
    small: sm,
    medium: md,
    large: lg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  })));
};

Spinner.propTypes = {
  sm: _propTypes2.default.bool,
  md: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  color: _propTypes2.default.string
};

exports.default = Spinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9TcGlubmVyLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInN0eWxlZCIsImtleWZyYW1lcyIsIm9jIiwiY2lyY2xlQW5pbSIsImdldEljb25TaXplIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImdldEJvcmRlcldpZHRoIiwiQ2lyY2xlIiwiZGl2IiwicHJvcHMiLCJjb2xvciIsImluZGlnbyIsIkNpcmNsZUlubmVyIiwiV3JhcHBlciIsImFsaWduIiwicGFkZGluZyIsIlNwaW5uZXIiLCJzbSIsIm1kIiwibGciLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGFBQUEsQUFBYSxrQ0FBbkI7O0FBTUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxrQkFBOEI7TUFBM0IsQUFBMkIsYUFBM0IsQUFBMkI7TUFBcEIsQUFBb0IsY0FBcEIsQUFBb0I7TUFBWixBQUFZLGFBQVosQUFBWSxBQUNoRDs7TUFBQSxBQUFJLE9BQU8sT0FBQSxBQUFPLEFBQ2xCO01BQUEsQUFBSSxRQUFRLE9BQUEsQUFBTyxBQUNuQjtNQUFBLEFBQUksT0FBTyxPQUFBLEFBQU8sQUFDbEI7U0FBQSxBQUFPLEFBQ1I7QUFMRDs7QUFPQSxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixzQkFBOEI7TUFBM0IsQUFBMkIsY0FBM0IsQUFBMkI7TUFBcEIsQUFBb0IsZUFBcEIsQUFBb0I7TUFBWixBQUFZLGNBQVosQUFBWSxBQUNuRDs7TUFBQSxBQUFJLE9BQU8sT0FBQSxBQUFPLEFBQ2xCO01BQUEsQUFBSSxRQUFRLE9BQUEsQUFBTyxBQUNuQjtNQUFBLEFBQUksT0FBTyxPQUFBLEFBQU8sQUFDbEI7U0FBQSxBQUFPLEFBQ1I7QUFMRDs7QUFPQSxJQUFNLG9DQUFBLEFBQWdCO2VBQWhCO0FBQUEsQ0FBUyxxSEFDSixpQkFBQTtTQUFTLFlBQVQsQUFBUyxBQUFZO0FBRDFCLEdBRU0saUJBQUE7U0FBUyxZQUFULEFBQVMsQUFBWTtBQUYzQixHQU9LLGlCQUFBO1NBQVMsTUFBQSxBQUFNLFNBQVMsb0JBQUEsQUFBRyxPQUEzQixBQUF3QixBQUFVO0FBUDdDLEFBQU07O0FBVU4sSUFBTSx5Q0FBQSxBQUFxQjtlQUFyQjtBQUFBLENBQWMscVBBS1QsaUJBQUE7U0FBUyxZQUFULEFBQVMsQUFBWTtBQUwxQixHQU1NLGlCQUFBO1NBQVMsWUFBVCxBQUFTLEFBQVk7QUFOM0IsR0FRTSxpQkFBQTtTQUFTLGVBQVQsQUFBUyxBQUFlO0FBUjlCLEdBQU4sQUFBTSxBQVdTOztBQUdmLElBQU0scUNBQUEsQUFBaUI7ZUFBakI7QUFBQSxDQUFVLHFDQUNBLGlCQUFBO1NBQVMsTUFBQSxBQUFNLFNBQWYsQUFBd0I7QUFEbEMsR0FFTyxpQkFBQTtTQUFTLE1BQUEsQUFBTSxXQUFmLEFBQTBCO0FBRnZDLEFBQU07O0FBS04sSUFBTSxVQUFVLFNBQVYsQUFBVSxlQUFBO01BQUEsQUFBRyxXQUFILEFBQUc7TUFBSCxBQUFPLFdBQVAsQUFBTztNQUFQLEFBQVcsV0FBWCxBQUFXO01BQVgsQUFBZSxjQUFmLEFBQWU7TUFBZixBQUFzQixjQUF0QixBQUFzQjtNQUF0QixBQUE2QixnQkFBN0IsQUFBNkI7eUJBQzFDLGNBQUQsV0FBUyxPQUFULEFBQWdCLE9BQU8sU0FBdkIsQUFBZ0M7Z0JBQWhDO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNHLGNBQUQ7V0FBQSxBQUNTLEFBQ1A7WUFGRixBQUVVLEFBQ1I7V0FIRixBQUdTLEFBQ1A7V0FKRixBQUlTOztnQkFKVDtrQkFBQSxBQU1FO0FBTkY7QUFDRSxtQ0FLQSxBQUFDO1dBQUQsQUFDUyxBQUNQO1lBRkYsQUFFVSxBQUNSO1dBSEYsQUFHUzs7Z0JBSFQ7a0JBUlUsQUFDZCxBQUNFLEFBTUU7QUFBQTtBQUNFO0FBVFI7O0FBaUJBLFFBQUEsQUFBUTtNQUNGLG9CQURjLEFBQ0osQUFDZDtNQUFJLG9CQUZjLEFBRUosQUFDZDtNQUFJLG9CQUhjLEFBR0osQUFDZDtTQUFPLG9CQUpULEFBQW9CLEFBSUQsQUFHbkI7QUFQb0IsQUFDbEI7O2tCQU1GLEFBQWUiLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==