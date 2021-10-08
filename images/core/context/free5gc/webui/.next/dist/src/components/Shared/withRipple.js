'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/withRipple.js';


function getAlignement(props) {
  if (props.align === 'center') return '0px auto';
  if (props.align === 'right') return '0px 0px 0px auto';
  if (props.align === 'left') return '0px auto 0px 0px';
  return '0px';
}

var RippleWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'n8o7ui-0'
})(['position:relative;overflow:hidden;transform:translate3d(0,0,0);display:inline-block;align-self:flex-start;margin:', ';&:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#000 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s;}&:active:after{transform:scale(0,0);opacity:.2;transition:0s;}'], function (props) {
  return getAlignement(props);
});

/* eslint-disable react/prefer-stateless-function */
var withRipple = function withRipple(Comp) {
  return function (_Component) {
    (0, _inherits3.default)(RippleProvider, _Component);

    function RippleProvider() {
      (0, _classCallCheck3.default)(this, RippleProvider);

      return (0, _possibleConstructorReturn3.default)(this, (RippleProvider.__proto__ || (0, _getPrototypeOf2.default)(RippleProvider)).apply(this, arguments));
    }

    (0, _createClass3.default)(RippleProvider, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(RippleWrapper, { align: this.props.align, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement(Comp, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        })));
      }
    }]);

    return RippleProvider;
  }(_react.Component);
};
/* eslint-enable react/prefer-stateless-function */

exports.default = withRipple;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC93aXRoUmlwcGxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiZ2V0QWxpZ25lbWVudCIsInByb3BzIiwiYWxpZ24iLCJSaXBwbGVXcmFwcGVyIiwiZGl2Iiwid2l0aFJpcHBsZSIsIkNvbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7QUFFUCxTQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFPLEFBQzVCO01BQUksTUFBQSxBQUFNLFVBQVYsQUFBb0IsVUFBVSxPQUFBLEFBQU8sQUFDckM7TUFBSSxNQUFBLEFBQU0sVUFBVixBQUFvQixTQUFTLE9BQUEsQUFBTyxBQUNwQztNQUFJLE1BQUEsQUFBTSxVQUFWLEFBQW9CLFFBQVEsT0FBQSxBQUFPLEFBQ25DO1NBQUEsQUFBTyxBQUNSOzs7QUFFRCxJQUFNLDJDQUFBLEFBQXVCO2VBQXZCO0FBQUEsQ0FBZ0Isc2VBTVYsaUJBQUE7U0FBUyxjQUFULEFBQVMsQUFBYztBQU5uQyxBQUFNOztBQWlDTjtBQUNBLElBQU0sYUFBYSxTQUFiLEFBQWEsV0FBQSxBQUFDLE1BQVMsQUFDM0I7K0JBQUE7NENBQUE7OzhCQUFBOzBDQUFBOztvSkFBQTtBQUFBOzs7V0FBQTsrQkFDVyxBQUNQOytCQUNHLGNBQUQsaUJBQWUsT0FBTyxLQUFBLEFBQUssTUFBM0IsQUFBaUM7c0JBQWpDO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGdDQUNFLEFBQUMsaUNBQVMsS0FBVixBQUFlOztzQkFBZjt3QkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLO0FBQUE7QUFKUjtBQUFBOztXQUFBO0FBQUEsQUFBb0MsQUFTckM7QUFWRDtBQVdBLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2l0aFJpcHBsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==