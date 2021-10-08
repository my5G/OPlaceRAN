'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Tooltip.js';


// ============================

var tooltipArrowHeight = 6;

// const TooltipWrapperButton = styled.button`
//   display: inline-block;
//   outline: none;
//   border: none;
//   background: none;
//   padding: 0;
// `;
var TooltipWrapperDiv = _styledComponents2.default.div.withConfig({
  componentId: 's4fpeyu-0'
})(['display:inline-block;outline:none;border:none;background:none;padding:0;']);
var TooltipContainer = _styledComponents2.default.div.withConfig({
  componentId: 's4fpeyu-1'
})(['display:block;position:relative;']);
var TooltipBubble = _styledComponents2.default.div.withConfig({
  componentId: 's4fpeyu-2'
})(['position:absolute;text-align:center;left:', ';', ';', ';', ';display:inline-block;border-radius:3px;min-height:', ';min-width:', ';padding:', ';z-index:999;line-height:1.5;font-size:0.8rem;box-sizing:border-box;box-shadow:0px 2px 10px rgba(0,0,0,0.2);color:', ';background-color:', ';border-color:', ';visibility:', ';', ' transition:transform 0.2s ease,opacity 0.3s ease;transform:', ';opacity:', ';'], function (props) {
  return props.leftPosition + 'px';
}, function (props) {
  return props.top && 'bottom: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return props.bottom && 'top: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return !props.top && !props.bottom && 'bottom: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return props.height ? props.height : "30px";
}, function (props) {
  return props.width ? props.width : "100px";
}, function (props) {
  return props.padding ? props.padding : "8px";
}, function (props) {
  return props.textColor || '#fff';
}, function (props) {
  return props.bgColor || 'rgba(0,0,0,0.8)';
}, function (props) {
  return props.bgColor || 'rgba(0,0,0,0.8)';
}, function (props) {
  return props.show ? 'visible' : 'hidden';
}, function (props) {
  return !props.show && 'pointer-events: none;';
}, function (props) {
  return props.show ? 'translateY(0px)' : 'translateY(' + (props.bottom ? -10 : 10) + 'px)';
}, function (props) {
  return props.show ? 1 : 0;
});

var TooltipArrow = _styledComponents2.default.span.withConfig({
  componentId: 's4fpeyu-3'
})(['width:0px;height:0px;border-left:', ';border-right:', ';border-top:', ';border-top-color:inherit;position:absolute;', ' ', ' ', ' ', ' left:', ';'], tooltipArrowHeight + 'px solid transparent', tooltipArrowHeight + 'px solid transparent', tooltipArrowHeight + 'px solid', function (props) {
  return props.top && 'bottom: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return props.bottom && 'top: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return !props.top && !props.bottom && 'bottom: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return props.bottom && 'transform: rotate(180deg);';
}, 'calc(50% - ' + tooltipArrowHeight + 'px)');

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip(props) {
    (0, _classCallCheck3.default)(this, Tooltip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, props));

    _this.showTooltip = _this.showTooltip.bind(_this);
    _this.hideTooltip = _this.hideTooltip.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);

    var disableHoverChanges = props.show != null;

    _this.state = {
      showTooltip: false,
      lPos: null,
      disableHoverChanges: disableHoverChanges
    };
    return _this;
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.show !== this.props.show) {
      if (nextProps.show) this.showTooltip();else this.hideTooltip();
      // }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var showTooltip = this.state.showTooltip;

      return nextState.showTooltip !== showTooltip;
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      if (!this.state.disableHoverChanges) this.showTooltip();
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      if (!this.state.disableHoverChanges) this.hideTooltip();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      var tipNode = this.tooltipRef;
      var tipWrapNode = this.tooltipWrapRef;
      var lPos = -(tipNode.offsetWidth / 2) + tipWrapNode.offsetWidth / 2;

      this.setState({ showTooltip: true, lPos: lPos });
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      this.setState({ showTooltip: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          children = _props.children,
          bg = _props.bg,
          color = _props.color,
          rest = (0, _objectWithoutProperties3.default)(_props, ['content', 'children', 'bg', 'color']);

      var _state = this.state,
          showTooltip = _state.showTooltip,
          lPos = _state.lPos;

      // NOTE: Use `button` wrapper when we need to control tooltip visibility
      // with focus / blur.
      // const Wrapper = disableHoverChanges ?
      //   TooltipWrapperButton :
      //   TooltipWrapperDiv;

      return _react2.default.createElement(TooltipWrapperDiv, (0, _extends3.default)({}, rest, { tabIndex: '0', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), _react2.default.createElement(TooltipContainer, {
        innerRef: function innerRef(ref) {
          _this2.tooltipWrapRef = ref;
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement(TooltipBubble, (0, _extends3.default)({}, rest, {
        innerRef: function innerRef(ref) {
          _this2.tooltipRef = ref;
        },
        leftPosition: lPos || 0,
        show: showTooltip,
        bgColor: bg,
        textColor: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), _react2.default.createElement(TooltipArrow, (0, _extends3.default)({}, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      })), content), children));
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
  children: _propTypes2.default.any.isRequired,
  content: _propTypes2.default.any,
  color: _propTypes2.default.string,
  bg: _propTypes2.default.string,
  show: _propTypes2.default.bool
};
Tooltip.defaultProps = {
  content: 'tooltip content',
  show: null
};

exports.default = Tooltip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwidG9vbHRpcEFycm93SGVpZ2h0IiwiVG9vbHRpcFdyYXBwZXJEaXYiLCJkaXYiLCJUb29sdGlwQ29udGFpbmVyIiwiVG9vbHRpcEJ1YmJsZSIsInByb3BzIiwibGVmdFBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwidGV4dENvbG9yIiwiYmdDb2xvciIsInNob3ciLCJUb29sdGlwQXJyb3ciLCJzcGFuIiwiVG9vbHRpcCIsInNob3dUb29sdGlwIiwiYmluZCIsImhpZGVUb29sdGlwIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJkaXNhYmxlSG92ZXJDaGFuZ2VzIiwic3RhdGUiLCJsUG9zIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwidGlwTm9kZSIsInRvb2x0aXBSZWYiLCJ0aXBXcmFwTm9kZSIsInRvb2x0aXBXcmFwUmVmIiwib2Zmc2V0V2lkdGgiLCJzZXRTdGF0ZSIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImJnIiwiY29sb3IiLCJyZXN0IiwicmVmIiwicHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztBQUVQOztBQUVBLElBQU0scUJBQU4sQUFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTSwrQ0FBQSxBQUEyQjtlQUEzQjtBQUFBLENBQW9CLEdBQTFCO0FBT0EsSUFBTSw4Q0FBQSxBQUEwQjtlQUExQjtBQUFBLENBQW1CLEdBQXpCO0FBSUEsSUFB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QUssTUFBVixBQUFnQixxQkFBcUIsS0FBQSxBQUFLLEFBQzNDOzs7O2tDQUVhLEFBQ1o7VUFBTSxVQUFVLEtBQWhCLEFBQXFCLEFBQ3JCO1VBQU0sY0FBYyxLQUFwQixBQUF5QixBQUN6QjtVQUFNLE9BQU8sRUFBRSxRQUFBLEFBQVEsY0FBVixBQUF3QixLQUFNLFlBQUEsQUFBWSxjQUF2RCxBQUFxRSxBQUVyRTs7V0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFGLEFBQWUsTUFBTSxNQUFuQyxBQUFjLEFBQ2Y7Ozs7a0NBRWEsQUFDWjtXQUFBLEFBQUssU0FBUyxFQUFFLGFBQWhCLEFBQWMsQUFBZSxBQUM5Qjs7Ozs2QkFFUTttQkFBQTs7bUJBQzJDLEtBRDNDLEFBQ2dEO1VBRGhELEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1Usa0JBRFYsQUFDVTtVQURWLEFBQ29CLFlBRHBCLEFBQ29CO1VBRHBCLEFBQ3dCLGVBRHhCLEFBQ3dCO1VBRHhCLEFBQ2tDLG9GQURsQzs7bUJBRXVCLEtBRnZCLEFBRTRCO1VBRjVCLEFBRUMscUJBRkQsQUFFQztVQUZELEFBRWMsY0FGZCxBQUVjLEFBRXJCOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OzZCQUNHLGNBQUQsOENBQUEsQUFBdUIsUUFBTSxVQUE3QixBQUFzQztvQkFBdEM7c0JBQUEsQUFDRTtBQURGO1FBQUEsa0JBQ0csY0FBRDtrQkFDWSxrQkFBQSxBQUFDLEtBQVEsQUFBRTtpQkFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQU07QUFEbkQsQUFFRTtzQkFBYyxLQUZoQixBQUVxQixBQUNuQjtzQkFBYyxLQUhoQixBQUdxQjs7b0JBSHJCO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlDLGNBQUQsMENBQUEsQUFDTTtrQkFDTSxrQkFBQSxBQUFDLEtBQVEsQUFBRTtpQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFBTTtBQUYvQyxBQUdFO3NCQUFjLFFBSGhCLEFBR3dCLEFBQ3RCO2NBSkYsQUFJUSxBQUNOO2lCQUxGLEFBS1csQUFDVDttQkFORixBQU1hOztvQkFOYjtzQkFBQSxBQVFFO0FBUkY7QUFFRSx3Q0FNQSxBQUFDLHlDQUFELEFBQWtCOztvQkFBbEI7c0JBUkYsQUFRRSxBQUNDO0FBREQ7QUFBQSxXQWJKLEFBS0UsQUFXQyxVQWxCUCxBQUNFLEFBQ0UsQUFvQkw7Ozs7O0FBOUZtQixBOztBLEFBQWhCLFFBQ0csQTtZQUNLLG9CQUFBLEFBQVUsSUFESCxBQUNPLEFBQ3hCO1dBQVMsb0JBRlEsQUFFRSxBQUNuQjtTQUFPLG9CQUhVLEFBR0EsQUFDakI7TUFBSSxvQkFKYSxBQUlILEFBQ2Q7UUFBTSxvQkFBVSxBLEFBTEM7QUFBQSxBQUNqQjtBLEFBRkUsUUFTRyxBO1dBQWUsQUFDWCxBQUNUO1FBRm9CLEFBRWQsQSxBQXNGVjtBQXhGd0IsQUFDcEI7O2tCQXVGSixBQUFlIiwiZmlsZSI6IlRvb2x0aXAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=