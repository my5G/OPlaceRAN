'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Dimmed.js';


var Black = _styledComponents2.default.div.withConfig({
  componentId: 's2h23ye-0'
})(['position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:', ';background:rgba(0,0,0,0.3);'], function (p) {
  return p.zindex;
});

var Dimmed = function Dimmed(_ref) {
  var visible = _ref.visible,
      zindex = _ref.zindex;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, visible && _react2.default.createElement(Black, { zindex: zindex, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }));
};

Dimmed.propTypes = {
  visible: _propTypes2.default.bool,
  zindex: _propTypes2.default.string
};

Dimmed.defaultProps = {
  visible: false,
  zindex: '300'
};

exports.default = Dimmed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9EaW1tZWQuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiUHJvcFR5cGVzIiwiQmxhY2siLCJkaXYiLCJwIiwiemluZGV4IiwiRGltbWVkIiwidmlzaWJsZSIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxtQ0FBQSxBQUFlO2VBQWY7QUFBQSxDQUFRLHFHQU1ELGFBQUE7U0FBSyxFQUFMLEFBQU87QUFOcEIsQUFBTTs7QUFXTixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLGVBQUgsQUFBRztNQUFILEFBQVksY0FBWixBQUFZO3lCQUN6QixjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLDJDQUNjLEFBQUMsU0FBTSxRQUFQLEFBQWU7Z0JBQWY7a0JBRkQsQUFDYixBQUNjO0FBQUE7R0FBQTtBQUZoQjs7QUFNQSxPQUFBLEFBQU87V0FDSSxvQkFEUSxBQUNFLEFBQ25CO1VBQVEsb0JBRlYsQUFBbUIsQUFFQztBQUZELEFBQ2pCOztBQUlGLE9BQUEsQUFBTztXQUFlLEFBQ1gsQUFDVDtVQUZGLEFBQXNCLEFBRVosQUFHVjtBQUxzQixBQUNwQjs7a0JBSUYsQUFBZSIsImZpbGUiOiJEaW1tZWQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=