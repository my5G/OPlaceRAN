'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _session = require('../modules/auth/session');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/helpers/with-session.js';

exports.default = function (Component) {
  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var session, initialProps, sessionData, isLoggedIn;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  session = new _session2.default({ req: ctx.req });
                  initialProps = {};

                  if (Component.getInitialProps) {
                    initialProps = Component.getInitialProps((0, _extends3.default)({}, ctx, { session: session }));
                  }

                  _context.next = 5;
                  return session.getSession();

                case 5:
                  sessionData = _context.sent;
                  isLoggedIn = false;

                  if (sessionData.user && sessionData.user.username) {
                    isLoggedIn = true;
                  }

                  return _context.abrupt('return', (0, _extends3.default)({ session: sessionData, isLoggedIn: isLoggedIn }, initialProps));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return _class;
  }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWxwZXJzL3dpdGgtc2Vzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlc3Npb24iLCJDb21wb25lbnQiLCJwcm9wcyIsImN0eCIsInNlc3Npb24iLCJyZXEiLCJpbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRTZXNzaW9uIiwic2Vzc2lvbkRhdGEiLCJpc0xvZ2dlZEluIiwidXNlciIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxXQUFEO3FDQUFBO29DQUFBOztzQkFBQTswQ0FBQTs7b0lBQUE7QUFBQTs7O1dBQUE7K0JBa0JILEFBQ1I7NkNBQU8sQUFBQyxzQ0FBYyxLQUFmLEFBQW9COztzQkFBcEI7d0JBQVAsQUFBTyxBQUNSO0FBRFE7QUFBQSxVQUFBO0FBbkJJO0FBQUE7V0FBQTt5QkFBQTs2R0FBQSxBQUNpQixLQURqQjtrREFBQTt3RUFBQTtzQkFBQTsrQ0FBQTtxQkFFTDtBQUZLLDRCQUVLLEFBQUksc0JBQVEsRUFBQyxLQUFLLElBRnZCLEFBRUssQUFBWSxBQUFVLEFBRWxDO0FBSk8saUNBQUEsQUFJUSxBQUNuQjs7c0JBQUksVUFBSixBQUFjLGlCQUFpQixBQUM3QjttQ0FBZSxVQUFBLEFBQVUsMkNBQVYsQUFBOEIsT0FBSyxTQUFsRCxBQUFlLEFBQ2hCO0FBUFU7O2tDQUFBO3lCQVNlLFFBVGYsQUFTZSxBQUFROztxQkFBNUI7QUFUSyx5Q0FVUDtBQVZPLCtCQUFBLEFBVU0sQUFDakI7O3NCQUFJLFlBQUEsQUFBWSxRQUFRLFlBQUEsQUFBWSxLQUFwQyxBQUF5QyxVQUFVLEFBQ2pEO2lDQUFBLEFBQWEsQUFDZDtBQWJVOzs0RUFlSCxTQWZHLEFBZU0sYUFBYSxZQWZuQixjQUFBLEFBZWtDOztxQkFmbEM7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBQTs7cUNBQUE7a0NBQUE7QUFBQTs7ZUFBQTtBQUFBO0FBQUE7O1dBQUE7SUFBNkIsZ0JBQTdCLEFBQW1DO0FBQWxEIiwiZmlsZSI6IndpdGgtc2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==