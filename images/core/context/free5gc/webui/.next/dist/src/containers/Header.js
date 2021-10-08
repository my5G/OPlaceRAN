'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _session = require('../modules/auth/session');

var _session2 = _interopRequireDefault(_session);

var _components = require('../components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Header.js';


var HeaderContainer = function (_Component) {
  (0, _inherits3.default)(HeaderContainer, _Component);

  function HeaderContainer() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeaderContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderContainer.__proto__ || (0, _getPrototypeOf2.default)(HeaderContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      logout: {
        visible: false,
        dimmed: false
      }
    }, _this.logoutHandler = {
      show: function show() {
        _this.setState({
          logout: {
            visible: true,
            dimmed: true
          }
        });
      },
      hide: function hide() {
        _this.setState({
          logout: {
            visible: false,
            dimmed: false
          }
        });
      },
      logout: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var session;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    logout: {
                      visible: false
                    }
                  });

                  session = new _session2.default();
                  _context.next = 4;
                  return session.signout();

                case 4:

                  // @FIXME next/router not working reliably so using window.location
                  window.location = '/';

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        function logout() {
          return _ref2.apply(this, arguments);
        }

        return logout;
      }()
    }, _this.handleSidebarToggle = function () {
      var SidebarActions = _this.props.SidebarActions;

      SidebarActions.toggle();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeaderContainer, [{
    key: 'render',
    value: function render() {
      var handleSidebarToggle = this.handleSidebarToggle,
          logoutHandler = this.logoutHandler;
      var logout = this.state.logout;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_components.Header, {
        onSidebarToggle: handleSidebarToggle,
        onLogoutRequest: logoutHandler.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement(_components.Logout, {
        visible: logout.visible,
        onHide: logoutHandler.hide,
        onLogout: logoutHandler.logout, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_components.Dimmed, { visible: logout.dimmed, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }));
    }
  }]);

  return HeaderContainer;
}(_react.Component);

HeaderContainer = (0, _reactRedux.connect)(null, function (dispatch) {
  return {
    SidebarActions: (0, _redux.bindActionCreators)(sidebarActions, dispatch)
  };
})(HeaderContainer);

exports.default = HeaderContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwic2lkZWJhckFjdGlvbnMiLCJTZXNzaW9uIiwiSGVhZGVyIiwiTG9nb3V0IiwiRGltbWVkIiwiSGVhZGVyQ29udGFpbmVyIiwic3RhdGUiLCJsb2dvdXQiLCJ2aXNpYmxlIiwiZGltbWVkIiwibG9nb3V0SGFuZGxlciIsInNob3ciLCJzZXRTdGF0ZSIsImhpZGUiLCJzZXNzaW9uIiwic2lnbm91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFuZGxlU2lkZWJhclRvZ2dsZSIsIlNpZGViYXJBY3Rpb25zIiwicHJvcHMiLCJ0b2dnbGUiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQU87O0lBQVAsQUFBWTs7QUFFWixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQVE7Ozs7Ozs7OztJLEFBRW5COzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0osQTs7aUJBQ1UsQUFDRyxBQUNUO2dCQUhJLEFBQ0UsQUFFRSxBO0FBRkYsQUFDTjtBQUZJLEFBQ04sYUFNRixBO1lBQ1EsZ0JBQU0sQUFDVjtjQUFBLEFBQUs7O3FCQUNLLEFBQ0csQUFDVDtvQkFISixBQUFjLEFBQ0osQUFFRSxBQUdiO0FBTFcsQUFDTjtBQUZVLEFBQ1o7QUFIVSxBQVNkO1lBQU0sZ0JBQU0sQUFDVjtjQUFBLEFBQUs7O3FCQUNLLEFBQ0csQUFDVDtvQkFISixBQUFjLEFBQ0osQUFFRSxBQUdiO0FBTFcsQUFDTjtBQUZVLEFBQ1o7QUFYVSxBQWlCZDswQkFBQTs2RkFBUSxtQkFBQTtjQUFBO3dFQUFBO3NCQUFBOytDQUFBO3FCQUNOO3dCQUFBLEFBQUs7OytCQUFMLEFBQWMsQUFDSixBQUNHLEFBSVA7QUFMSSxBQUNOO0FBRlUsQUFDWjs7QUFGSSw0QkFBQSxBQU9VLEFBQUk7a0NBUGQ7eUJBUUEsUUFSQSxBQVFBLEFBQVE7O3FCQUVkOztBQUNBO3lCQUFBLEFBQU8sV0FYRCxBQVdOLEFBQWtCOztxQkFYWjtxQkFBQTtrQ0FBQTs7QUFBQTtzQkFBQTtBQUFSOzswQkFBQTttQ0FBQTtBQUFBOztlQUFBO0FBakJjLEE7QUFBQSxBQUNkLGFBK0JGLEEsc0JBQXNCLFlBQU07VUFBQSxBQUNsQixpQkFBbUIsTUFERCxBQUNNLE1BRE4sQUFDbEIsQUFDUjs7cUJBQUEsQUFBZSxBQUNoQjtBOzs7Ozs2QkFFUTtVQUFBLEFBRUwsc0JBRkssQUFJSCxLQUpHLEFBRUw7VUFGSyxBQUdMLGdCQUhLLEFBSUgsS0FKRyxBQUdMO1VBSEssQUFPTCxTQUNFLEtBUkcsQUFRRSxNQVJGLEFBT0wsQUFHRjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO3lCQUFELEFBQ21CLEFBQ2pCO3lCQUFpQixjQUZuQixBQUVpQzs7b0JBRmpDO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsQUFBQztpQkFDVSxPQURYLEFBQ2tCLEFBQ2hCO2dCQUFRLGNBRlYsQUFFd0IsQUFDdEI7a0JBQVUsY0FIWixBQUcwQjtvQkFIMUI7c0JBTEYsQUFLRSxBQUlBO0FBSkE7QUFDRSwwQkFHRixBQUFDLG9DQUFPLFNBQVMsT0FBakIsQUFBd0I7b0JBQXhCO3NCQVZKLEFBQ0UsQUFTRSxBQUdMO0FBSEs7Ozs7OztBLEFBakVzQjs7QUF1RTlCLDJDQUFrQixBQUNoQixNQUNBLFVBQUEsQUFBQyxVQUFEOztvQkFDa0IsK0JBQUEsQUFBbUIsZ0JBRHJDLEFBQWUsQUFDRyxBQUFtQztBQUR0QyxBQUNiO0FBSGMsQ0FBQSxFQUFsQixBQUFrQixBQUtoQixBQUVGOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==