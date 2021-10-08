'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _session = require('../modules/auth/session');

var _session2 = _interopRequireDefault(_session);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Auth.js';


var Auth = function (_Component) {
  (0, _inherits3.default)(Auth, _Component);

  function Auth() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Auth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null,
      form: {
        username: '',
        password: ''
      },
      session: {}
    }, _this.setInnerRef = function (comp) {
      _this.input = comp;
    }, _this.handleChange = function (e) {
      _this.setState({
        form: (0, _extends3.default)({}, _this.state.form, (0, _defineProperty3.default)({}, e.target.name, e.target.value))
      });
    }, _this.handleKeyPress = function (e) {
      if (e.charCode === 13) {
        _this.handleSubmit();
      }
    }, _this.handleSubmit = function (e) {
      var _this$state$form = _this.state.form,
          username = _this$state$form.username,
          password = _this$state$form.password;
      var loginRequest = _this.props.loginRequest;

      _nprogress2.default.configure({
        parent: '#nprogress-base-login',
        trickleSpeed: 5
      });
      _nprogress2.default.start();

      var session = new _session2.default();
      session.signin(username, password).then(function () {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done();

        _index2.default.push('/');
      }).catch(function (err) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done();

        _this.setState({
          error: {
            message: err.message
          }
        });

        _this.input.focus();
      });
    }, _this.handleErrorReset = function (e) {
      _this.setState({
        error: null
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Auth, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var session;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                session = new _session2.default();
                _context.t0 = this;
                _context.next = 4;
                return session.getSession(true);

              case 4:
                _context.t1 = _context.sent;
                _context.t2 = {
                  session: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                this.input.focus();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          form = _state.form,
          error = _state.error;
      var setInnerRef = this.setInnerRef,
          handleChange = this.handleChange,
          handleSubmit = this.handleSubmit,
          handleKeyPress = this.handleKeyPress,
          handleErrorReset = this.handleErrorReset;

      return _react2.default.createElement(_components.Login, {
        form: form,
        error: error,
        innerRef: setInnerRef,
        onChange: handleChange,
        onSubmit: handleSubmit,
        onKeyPress: handleKeyPress,
        onErrorReset: handleErrorReset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
        var req = _ref3.req;
        var session;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                session = new _session2.default({ req: req });
                _context2.next = 3;
                return session.getSession(true);

              case 3:
                _context2.t0 = _context2.sent;
                return _context2.abrupt('return', {
                  session: _context2.t0
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Auth;
}(_react.Component);

exports.default = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL0F1dGguanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIlNlc3Npb24iLCJMb2dpbiIsIkF1dGgiLCJzdGF0ZSIsImVycm9yIiwiZm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXNzaW9uIiwic2V0SW5uZXJSZWYiLCJjb21wIiwiaW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVLZXlQcmVzcyIsImNoYXJDb2RlIiwiaGFuZGxlU3VibWl0IiwibG9naW5SZXF1ZXN0IiwicHJvcHMiLCJjb25maWd1cmUiLCJwYXJlbnQiLCJ0cmlja2xlU3BlZWQiLCJzdGFydCIsInNpZ25pbiIsInRoZW4iLCJkb25lIiwicHVzaCIsImNhdGNoIiwibWVzc2FnZSIsImVyciIsImZvY3VzIiwiaGFuZGxlRXJyb3JSZXNldCIsImdldFNlc3Npb24iLCJyZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQVM7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7Ozs7Ozt3TSxBQUNKO2FBQVEsQUFDQyxBQUNQOztrQkFBTSxBQUNNLEFBQ1Y7a0JBSkksQUFFQSxBQUVNLEFBRVo7QUFKTSxBQUNKO2VBSEksQSxBQU1HO0FBTkgsQUFDTixhLEFBc0JGLGNBQWMsVUFBQSxBQUFDLE1BQVMsQUFDdEI7WUFBQSxBQUFLLFFBQUwsQUFBYSxBQUNkO0EsYUFFRCxBLGVBQWUsVUFBQSxBQUFDLEdBQU0sQUFDcEI7WUFBQSxBQUFLO3lDQUVFLE1BQUEsQUFBSyxNQURWLEFBQ2dCLHdDQUNiLEVBQUEsQUFBRSxPQUZMLEFBRVksTUFBTyxFQUFBLEFBQUUsT0FIdkIsQUFBYyxBQUNaLEFBRTRCLEFBRy9CO0FBTmUsQUFDWjtBLGEsQUFPSixpQkFBaUIsVUFBQSxBQUFDLEdBQU0sQUFDdEI7VUFBSSxFQUFBLEFBQUUsYUFBTixBQUFtQixJQUFJLEFBQ25CO2NBQUEsQUFBSyxBQUNSO0FBQ0Y7QSxhQUVELEEsZUFBZSxVQUFBLEFBQUMsR0FBTTs2QkFJaEIsTUFBQSxBQUFLLE1BSlcsQUFJTDtVQUpLLEFBRWxCLDRCQUZrQixBQUVsQjtVQUZrQixBQUdsQiw0QkFIa0IsQUFHbEI7VUFIa0IsQUFPbEIsZUFDRSxNQVJnQixBQVFYLE1BUlcsQUFPbEIsQUFHRjs7MEJBQUEsQUFBVTtnQkFBVSxBQUNWLEFBQ1I7c0JBRkYsQUFBb0IsQUFFSixBQUVoQjtBQUpvQixBQUNsQjswQkFHRixBQUFVLEFBRVY7O1VBQU0sVUFBTixBQUFnQixBQUFJLEFBQ3BCO2NBQUEsQUFBUSxPQUFSLEFBQWUsVUFBZixBQUF5QixVQUF6QixBQUNHLEtBQUssWUFBTSxBQUNWOzRCQUFBLEFBQVU7a0JBQVUsQUFDVixBQUNSO3dCQUZGLEFBQW9CLEFBRUosQUFFaEI7QUFKb0IsQUFDbEI7NEJBR0YsQUFBVSxBQUVWOzt3QkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBVEgsU0FBQSxBQVVHLE1BQU0sZUFBTyxBQUNaOzRCQUFBLEFBQVU7a0JBQVUsQUFDVixBQUNSO3dCQUZGLEFBQW9CLEFBRUosQUFFaEI7QUFKb0IsQUFDbEI7NEJBR0YsQUFBVSxBQUVWOztjQUFBLEFBQUs7O3FCQUVRLElBRmIsQUFBYyxBQUNMLEFBQ1EsQUFJakI7QUFMUyxBQUNMO0FBRlUsQUFDWjs7Y0FLRixBQUFLLE1BQUwsQUFBVyxBQUNaO0FBeEJILEFBeUJEO0EsYSxBQUVELG1CQUFtQixVQUFBLEFBQUMsR0FBTSxBQUN4QjtZQUFBLEFBQUs7ZUFBTCxBQUFjLEFBQ0wsQUFFVjtBQUhlLEFBQ1o7QTs7Ozs7Ozs7Ozs7bUJBekVJO0EsMEJBQVUsQSxBQUFJOzhCQUNwQixBOzt1QkFDaUIsUUFBQSxBQUFRLFdBQVIsQUFBbUIsQTs7Ozs7QTtBQUFsQzs7NEJBREcsQSxvQ0FJTDs7cUJBQUEsQUFBSyxNQUFMLEFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkF3RUo7bUJBSUgsS0FKRyxBQUlFO1VBSkYsQUFFTCxjQUZLLEFBRUw7VUFGSyxBQUdMLGVBSEssQUFHTDtVQUhLLEFBT0wsY0FQSyxBQVlILEtBWkcsQUFPTDtVQVBLLEFBUUwsZUFSSyxBQVlILEtBWkcsQUFRTDtVQVJLLEFBU0wsZUFUSyxBQVlILEtBWkcsQUFTTDtVQVRLLEFBVUwsaUJBVkssQUFZSCxLQVpHLEFBVUw7VUFWSyxBQVdMLG1CQVhLLEFBWUgsS0FaRyxBQVdMLEFBR0Y7OzZCQUNFLEFBQUM7Y0FBRCxBQUNRLEFBQ047ZUFGRixBQUVTLEFBQ1A7a0JBSEYsQUFHWSxBQUNWO2tCQUpGLEFBSVksQUFDVjtrQkFMRixBQUtZLEFBQ1Y7b0JBTkYsQUFNYyxBQUNaO3NCQVBGLEFBT2dCOztvQkFQaEI7c0JBREYsQUFDRSxBQVVIO0FBVkc7QUFDRSxPQURGOzs7Ozs7WUFsRzBCLEEsWSxBQUFBOzs7OzttQkFDdEI7QSwwQkFBVSxBQUFJLHNCQUFRLEVBQUMsS0FBYixBLEFBQVk7O3VCQUNMLFFBQUEsQUFBUSxXQUFSLEFBQW1CLEE7Ozs7O0E7QUFBbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaTyxBLEFBeUhuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBdXRoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9