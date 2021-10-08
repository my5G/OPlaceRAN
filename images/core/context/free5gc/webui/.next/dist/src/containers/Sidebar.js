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

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _withWidth = require('../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _sidebar = require('../modules/sidebar');

var sidebarActions = _interopRequireWildcard(_sidebar);

var _components = require('../components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Sidebar.js';


var SidebarContainer = function (_Component) {
  (0, _inherits3.default)(SidebarContainer, _Component);

  function SidebarContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SidebarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SidebarContainer.__proto__ || (0, _getPrototypeOf2.default)(SidebarContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectView = function (view) {
      var _this$props = _this.props,
          width = _this$props.width,
          SidebarActions = _this$props.SidebarActions;

      SidebarActions.selectView(view);
      if (width === _withWidth.SMALL) {
        SidebarActions.toggle();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SidebarContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          view = _props.view;
      var handleSelectView = this.handleSelectView;

      return _react2.default.createElement(_components.Sidebar, {
        isOpen: isOpen,
        selectedView: view,
        onSelectView: handleSelectView, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      });
    }
  }]);

  return SidebarContainer;
}(_react.Component);

SidebarContainer.propTypes = {
  width: _propTypes2.default.number.isRequired,
  isOpen: _propTypes2.default.bool.isRequired,
  view: _propTypes2.default.string.isRequired
};

var enhance = (0, _redux.compose)((0, _withWidth2.default)(), (0, _reactRedux.connect)(function (state) {
  return {
    isOpen: state.sidebar.isOpen,
    view: state.sidebar.view
  };
}, function (dispatch) {
  return {
    SidebarActions: (0, _redux.bindActionCreators)(sidebarActions, dispatch)
  };
}));

exports.default = enhance(SidebarContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL1NpZGViYXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbXBvc2UiLCJ3aXRoV2lkdGgiLCJTTUFMTCIsInNpZGViYXJBY3Rpb25zIiwiU2lkZWJhciIsIlNpZGViYXJDb250YWluZXIiLCJoYW5kbGVTZWxlY3RWaWV3IiwidmlldyIsInByb3BzIiwid2lkdGgiLCJTaWRlYmFyQWN0aW9ucyIsInNlbGVjdFZpZXciLCJ0b2dnbGUiLCJpc09wZW4iLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyIsImVuaGFuY2UiLCJzdGF0ZSIsInNpZGViYXIiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxBQUFvQjs7QUFFN0IsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87O0lBQVAsQUFBWTs7QUFFWixBQUFTOzs7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7Ozs7OztnT0FPSixBLG1CQUFtQixVQUFBLEFBQUMsTUFBUzt3QkFJdkIsTUFKdUIsQUFJbEI7VUFKa0IsQUFFekIsb0JBRnlCLEFBRXpCO1VBRnlCLEFBR3pCLDZCQUh5QixBQUd6QixBQUdGOztxQkFBQSxBQUFlLFdBQWYsQUFBMEIsQUFDMUI7VUFBQSxBQUFJLEFBQVUsNEJBQU8sQUFDbkI7dUJBQUEsQUFBZSxBQUNoQjtBQUNGO0E7Ozs7OzZCQUVRO21CQUlILEtBSkcsQUFJRTtVQUpGLEFBRUwsZ0JBRkssQUFFTDtVQUZLLEFBR0wsY0FISyxBQUdMO1VBSEssQUFPTCxtQkFQSyxBQVFILEtBUkcsQUFPTCxBQUdGOzs2QkFDRSxBQUFDO2dCQUFELEFBQ1UsQUFDUjtzQkFGRixBQUVnQixBQUNkO3NCQUhGLEFBR2dCO29CQUhoQjtzQkFERixBQUNFLEFBS0g7QUFMRztBQUNFLE9BREY7Ozs7O0FBOUJ5QixBOztBQUF6QixBLGlCLEFBQ0c7U0FDRSxvQkFBQSxBQUFVLE9BREEsQUFDTyxBQUN4QjtVQUFRLG9CQUFBLEFBQVUsS0FGRCxBQUVNLEFBQ3ZCO1FBQU0sb0JBQUEsQUFBVSxPQUhDLEEsQUFHTTtBQUhOLEFBQ2pCOztBQW9DSixJQUFNLDhCQUFVLEFBQ2QscURBRUUsVUFBQSxBQUFDLE9BQUQ7O1lBQ1UsTUFBQSxBQUFNLFFBREosQUFDWSxBQUN0QjtVQUFNLE1BQUEsQUFBTSxRQUZkLEFBQVksQUFFVTtBQUZWLEFBQ1Y7QUFGSixDQUFBLEVBS0UsVUFBQSxBQUFDLFVBQUQ7O29CQUNrQiwrQkFBQSxBQUFtQixnQkFEckMsQUFBZSxBQUNHLEFBQW1DO0FBRHRDLEFBQ2I7QUFSTixBQUFnQixBQUVkLEFBV0YsRUFiZ0I7O2tCQWFELFFBQWYsQUFBZSxBQUFRIiwiZmlsZSI6IlNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=