'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _styleUtils = require('../../helpers/style-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Modal.js';


var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1n2s8h7-0'
})(['position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:', ';.modal-enter{animation:', ';animation-fill-mode:forwards;}.modal-leave{animation:', ';animation-fill-mode:forwards;}'], function (p) {
  return p.zindex;
}, function (p) {
  return p.transitionEnter;
}, function (p) {
  return p.transitionLeave;
});

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickOutside = function (e) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          onOutside = _this$props.onOutside;

      if (!visible) return null;
      onOutside();
    }, _this.handleKeyUp = function (e) {
      var onOutside = _this.props.onOutside;

      if (e.keyCode === 27) {
        onOutside();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.visible !== this.props.visible) {
        if (this.props.visible) {
          document.body.addEventListener('keyup', this.handleKeyUp);
        } else {
          document.body.removeEventListener('keyup', this.handleKeyUp);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          children = _props.children,
          zindex = _props.zindex,
          transitionEnter = _props.transitionEnter,
          transitionLeave = _props.transitionLeave,
          transitionEnterTimeout = _props.transitionEnterTimeout,
          transitionLeaveTimeout = _props.transitionLeaveTimeout;

      return _react2.default.createElement(Wrapper, {
        zindex: zindex,
        transitionEnter: transitionEnter,
        transitionLeave: transitionLeave, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_CSSTransitionGroup2.default, {
        transitionName: 'modal',
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, visible && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, children)));
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  visible: _propTypes2.default.bool,
  onOutside: _propTypes2.default.func,
  zindex: _propTypes2.default.string,
  transitionEnter: _propTypes2.default.string,
  transitionLeave: _propTypes2.default.string,
  transitionEnterTimeout: _propTypes2.default.number,
  transitionLeaveTimeout: _propTypes2.default.number
};
Modal.defaultProps = {
  zindex: '500',
  transitionEnter: _styleUtils.transitions.stretchOut + ' .25s ease-in',
  transitionLeave: _styleUtils.transitions.shrinkIn + ' .25s ease-in',
  transitionEnterTimeout: 300,
  transitionLeaveTimeout: 150
};

exports.default = (0, _reactOnclickoutside2.default)(Modal);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvbkNsaWNrT3V0c2lkZSIsIkNTU1RyYW5zaXRpb25Hcm91cCIsIm1lZGlhIiwidHJhbnNpdGlvbnMiLCJXcmFwcGVyIiwiZGl2IiwicCIsInppbmRleCIsInRyYW5zaXRpb25FbnRlciIsInRyYW5zaXRpb25MZWF2ZSIsIk1vZGFsIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZSIsInByb3BzIiwidmlzaWJsZSIsIm9uT3V0c2lkZSIsImhhbmRsZUtleVVwIiwia2V5Q29kZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsInByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwic3RyZXRjaE91dCIsInNocmlua0luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPOzs7Ozs7O0FBRWhCLElBQU0scUNBQUEsQUFBaUI7ZUFBakI7QUFBQSxDQUFVLHdNQU1ILGFBQUE7U0FBSyxFQUFMLEFBQU87QUFOZCxHQVNXLGFBQUE7U0FBSyxFQUFMLEFBQU87QUFUbEIsR0FjVyxhQUFBO1NBQUssRUFBTCxBQUFPO0FBZHhCLEFBQU07O0ksQUFtQkE7Ozs7Ozs7Ozs7Ozs7OzBNQW1CSixBLHFCQUFxQixVQUFBLEFBQUMsR0FBTTt3QkFDSyxNQURMLEFBQ1U7VUFEVixBQUNsQixzQkFEa0IsQUFDbEI7VUFEa0IsQUFDVCx3QkFEUyxBQUNULEFBRWpCOztVQUFJLENBQUosQUFBSyxTQUFTLE9BQUEsQUFBTyxBQUNyQjtBQUNEO0EsYSxBQUVELGNBQWMsVUFBQSxBQUFDLEdBQU07VUFBQSxBQUNYLFlBQWMsTUFESCxBQUNRLE1BRFIsQUFDWCxBQUNSOztVQUFJLEVBQUEsQUFBRSxZQUFOLEFBQWtCLElBQUksQUFDcEI7QUFDRDtBQUNGO0E7Ozs7O3VDLEFBRWtCLFdBQVcsQSxXQUFXLEFBQ3ZDO1VBQUcsVUFBQSxBQUFVLFlBQVksS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFNBQVMsQUFDM0M7WUFBRyxLQUFBLEFBQUssTUFBUixBQUFjLFNBQVMsQUFDckI7bUJBQUEsQUFBUyxLQUFULEFBQWMsaUJBQWQsQUFBK0IsU0FBUyxLQUF4QyxBQUE2QyxBQUM5QztBQUZELGVBRU8sQUFDTDttQkFBQSxBQUFTLEtBQVQsQUFBYyxvQkFBZCxBQUFrQyxTQUFTLEtBQTNDLEFBQWdELEFBQ2pEO0FBQ0Y7QUFDRjs7Ozs2QkFFUTttQkFVSCxLQVZHLEFBVUU7VUFWRixBQUdMLGlCQUhLLEFBR0w7VUFISyxBQUlMLGtCQUpLLEFBSUw7VUFKSyxBQUtMLGdCQUxLLEFBS0w7VUFMSyxBQU1MLHlCQU5LLEFBTUw7VUFOSyxBQU9MLHlCQVBLLEFBT0w7VUFQSyxBQVFMLGdDQVJLLEFBUUw7VUFSSyxBQVNMLGdDQVRLLEFBU0wsQUFHRjs7NkJBQ0csY0FBRDtnQkFBQSxBQUNVLEFBQ1I7eUJBRkYsQUFFbUIsQUFDakI7eUJBSEYsQUFHbUI7b0JBSG5CO3NCQUFBLEFBSUU7QUFKRjtBQUNFLE9BREYsa0JBSUUsQUFBQzt3QkFBRCxBQUNpQixBQUNmO2dDQUZGLEFBRTBCLEFBQ3hCO2dDQUhGLEFBRzBCO29CQUgxQjtzQkFBQSxBQUtJO0FBTEo7QUFDRSxvQ0FJYyxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxPQUFBLEVBVnBCLEFBQ0UsQUFJRSxBQUtnQixBQUtyQjs7Ozs7QUF0RWlCLEE7O0FBQWQsQSxNLEFBQ0c7V0FDSSxvQkFEUSxBQUNFLEFBQ25CO2FBQVcsb0JBRk0sQUFFSSxBQUNyQjtVQUFRLG9CQUhTLEFBR0MsQUFDbEI7bUJBQWlCLG9CQUpBLEFBSVUsQUFDM0I7bUJBQWlCLG9CQUxBLEFBS1UsQUFDM0I7MEJBQXdCLG9CQU5QLEFBTWlCLEFBQ2xDOzBCQUF3QixvQkFQUCxBQU9pQixBO0FBUGpCLEFBQ2pCO0FBRkUsQSxNLEFBV0c7VUFBZSxBQUNaLEFBQ1I7bUJBQW9CLHdCQUFwQixBQUFnQyxhQUZaLEFBR3BCO21CQUFvQix3QkFBcEIsQUFBZ0MsV0FIWixBQUlwQjswQkFKb0IsQUFJSSxBQUN4QjswQkFMb0IsQUFLSSxBLEFBeUQ1QjtBQTlEd0IsQUFDcEI7O2tCQTZEVyxtQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=