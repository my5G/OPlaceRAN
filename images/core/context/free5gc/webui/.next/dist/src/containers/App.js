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

var _sidebar = require('../modules/sidebar');

var sidebarActions = _interopRequireWildcard(_sidebar);

var _withWidth = require('../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _components = require('../components');

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Subscriber = require('./Subscriber');

var Subscriber = _interopRequireWildcard(_Subscriber);

var _Profile = require('./Profile');

var Profile = _interopRequireWildcard(_Profile);

var _Account = require('./Account');

var Account = _interopRequireWildcard(_Account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/App.js';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          width = _props.width,
          SidebarActions = _props.SidebarActions;

      if (width !== _withWidth.SMALL) {
        SidebarActions.setVisibility(true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          view = _props2.view,
          session = _props2.session;

      if (view === "subscriber") {
        document.body.style.backgroundColor = "#e9ecef";
      } else {
        document.body.style.backgroundColor = "white";
      }

      return _react2.default.createElement(_components.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_components.Layout.Container, { visible: view === "subscriber", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(Subscriber.Collection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement(_components.Layout.Container, { visible: view === "profile", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Profile.Collection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_components.Layout.Container, { visible: view === "account", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(Account.Collection, { session: session, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement(_Notification2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }));
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  session: _propTypes2.default.object.isRequired,
  view: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired
};

var enhance = (0, _redux.compose)((0, _withWidth2.default)(), (0, _reactRedux.connect)(function (state) {
  return {
    view: state.sidebar.view
  };
}, function (dispatch) {
  return {
    SidebarActions: (0, _redux.bindActionCreators)(sidebarActions, dispatch)
  };
}));

exports.default = enhance(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL0FwcC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29tcG9zZSIsInNpZGViYXJBY3Rpb25zIiwid2l0aFdpZHRoIiwiU01BTEwiLCJMYXlvdXQiLCJOb3RpZmljYXRpb24iLCJTdWJzY3JpYmVyIiwiUHJvZmlsZSIsIkFjY291bnQiLCJBcHAiLCJwcm9wcyIsIndpZHRoIiwiU2lkZWJhckFjdGlvbnMiLCJzZXRWaXNpYmlsaXR5IiwidmlldyIsInNlc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJudW1iZXIiLCJlbmhhbmNlIiwic3RhdGUiLCJzaWRlYmFyIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBb0I7O0FBRTdCLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOztJQUFQLEFBQVk7Ozs7Ozs7OztJLEFBRU47Ozs7Ozs7Ozs7O3lDQU9pQjttQkFJZixLQUplLEFBSVY7VUFKVSxBQUVqQixlQUZpQixBQUVqQjtVQUZpQixBQUdqQix3QkFIaUIsQUFHakIsQUFHRjs7VUFBQSxBQUFJLEFBQVUsNEJBQU8sQUFDbkI7dUJBQUEsQUFBZSxjQUFmLEFBQTZCLEFBQzlCO0FBQ0Y7Ozs7NkJBRVE7b0JBSUgsS0FKRyxBQUlFO1VBSkYsQUFFTCxlQUZLLEFBRUw7VUFGSyxBQUdMLGtCQUhLLEFBR0wsQUFHRjs7VUFBSSxTQUFKLEFBQWEsY0FBYyxBQUN6QjtpQkFBQSxBQUFTLEtBQVQsQUFBYyxNQUFkLEFBQW9CLGtCQUFwQixBQUFzQyxBQUN2QztBQUZELGFBRU8sQUFDTDtpQkFBQSxBQUFTLEtBQVQsQUFBYyxNQUFkLEFBQW9CLGtCQUFwQixBQUFzQyxBQUN2QztBQUVEOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQsbUJBQUEsQUFBUSxhQUFVLFNBQVMsU0FBM0IsQUFBb0M7b0JBQXBDO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFdBQUQsQUFBWTs7b0JBQVo7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLDJCQUVELGNBQUQsbUJBQUEsQUFBUSxhQUFVLFNBQVMsU0FBM0IsQUFBb0M7b0JBQXBDO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFFBQUQsQUFBUzs7b0JBQVQ7c0JBTEosQUFJRSxBQUNFLEFBRUY7QUFGRTtBQUFBLDJCQUVELGNBQUQsbUJBQUEsQUFBUSxhQUFVLFNBQVMsU0FBM0IsQUFBb0M7b0JBQXBDO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFFBQUQsQUFBUyxjQUFXLFNBQXBCLEFBQTZCO29CQUE3QjtzQkFSSixBQU9FLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLEFBQUM7O29CQUFEO3NCQVhKLEFBQ0UsQUFVRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QSxBQXpDVTs7QUFBWixBLElBQ0csQTtXQUNJLG9CQUFBLEFBQVUsT0FERixBQUNTLEFBQzFCO1FBQU0sb0JBQUEsQUFBVSxPQUZDLEFBRU0sQUFDdkI7U0FBTyxvQkFBQSxBQUFVLE9BSEEsQUFHTyxBO0FBSFAsQUFDakI7O0FBNkNKLElBQU0sOEJBQVUsQUFDZCxxREFFRSxVQUFBLEFBQUMsT0FBRDs7VUFDUSxNQUFBLEFBQU0sUUFEZCxBQUFZLEFBQ1U7QUFEVixBQUNWO0FBRkosQ0FBQSxFQUlFLFVBQUEsQUFBQyxVQUFEOztvQkFDa0IsK0JBQUEsQUFBbUIsZ0JBRHJDLEFBQWUsQUFDRyxBQUFtQztBQUR0QyxBQUNiO0FBUE4sQUFBZ0IsQUFFZCxBQVVGLEVBWmdCOztrQkFZRCxRQUFmLEFBQWUsQUFBUSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=