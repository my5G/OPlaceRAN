'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _account = require('../../modules/crud/account');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _traverse = require('traverse');

var _traverse2 = _interopRequireDefault(_traverse);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Account/Document.js';


var formData = {
  "roles": ["user"]
};

var Document = function (_Component) {
  (0, _inherits3.default)(Document, _Component);

  function Document() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Document);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formData: formData
    }, _this.validate = function (formData, errors) {
      var _this$props = _this.props,
          accounts = _this$props.accounts,
          action = _this$props.action,
          status = _this$props.status;
      var username = formData.username,
          password1 = formData.password1,
          password2 = formData.password2;

      if (action === 'create' && accounts && accounts.data && accounts.data.filter(function (account) {
        return account.username === username;
      }).length > 0) {
        errors.username.addError('\'' + username + '\' is duplicated');
      }

      if (action === 'create') {
        if (password1 === undefined) {
          errors.password1.addError('is required');
        }
        if (password2 === undefined) {
          errors.password2.addError('is required');
        }
      }

      if (password1 != password2) {
        if ((0, _keys2.default)(errors.password1.__errors).length == 0) errors.password1.addError('is not matched');
        if ((0, _keys2.default)(errors.password2.__errors).length == 0) errors.password2.addError('is not matched');
      }

      return errors;
    }, _this.generatePassword = function (password, cb) {
      _crypto2.default.randomBytes(32, function (randomBytesErr, buf) {
        if (randomBytesErr) {
          return cb(randomBytesErr);
        }
        var salt = buf.toString('hex');

        _crypto2.default.pbkdf2(password, salt, 25000, 512, 'sha256', function (pbkdf2Err, hashRaw) {
          if (pbkdf2Err) {
            return cb(pbkdf2Err);
          }
          var hash = new Buffer(hashRaw, 'binary').toString('hex');

          cb(null, salt, hash);
        });
      });
    }, _this.submit = function (formData) {
      var _this$props2 = _this.props,
          dispatch = _this$props2.dispatch,
          action = _this$props2.action;

      _nprogress2.default.configure({
        parent: '#nprogress-base-form',
        trickleSpeed: 5
      });
      _nprogress2.default.start();

      if (action === 'create') {
        dispatch((0, _account.createAccount)({}, formData));
      } else if (action === 'update') {
        dispatch((0, _account.updateAccount)(formData.username, {}, formData));
      } else {
        throw new Error('Action type \'' + action + '\' is invalid.');
      }
    }, _this.handleSubmit = function (formData) {
      if (formData.password1 === undefined) {
        _this.submit(formData);
      } else {
        _this.generatePassword(formData.password1, function (err, salt, hash) {
          if (err) throw err;

          formData = (0, _assign2.default)(formData, {
            salt: salt,
            hash: hash
          });

          _this.submit(formData);
        });
      }
    }, _this.handleError = function (errors) {
      var dispatch = _this.props.dispatch;

      errors.map(function (error) {
        return dispatch(Notification.error({
          title: 'Validation Error',
          message: error.stack
        }));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Document, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          account = _props.account,
          dispatch = _props.dispatch;

      if (account.needsFetch) {
        dispatch(account.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var account = nextProps.account,
          status = nextProps.status;
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          action = _props2.action,
          onHide = _props2.onHide;

      if (account.needsFetch) {
        dispatch(account.fetch);
      }

      if (account.data) {
        this.setState({ formData: account.data });
      } else {
        this.setState({ formData: formData });
      }

      if (status.response) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var message = action === 'create' ? "New account created" : status.id + ' account updated';

        dispatch(Notification.success({
          title: 'Account',
          message: message
        }));

        dispatch((0, _actions.clearActionStatus)(_account.MODEL, action));
        onHide();
      }

      if (status.error) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var response = ((status || {}).error || {}).response || {};

        var title = 'Unknown Code';
        var _message = 'Unknown Error';
        if (response.data && response.data.name && response.data.message) {
          title = response.data.name;
          _message = response.data.message;
        } else {
          title = response.status;
          _message = response.statusText;
        }

        dispatch(Notification.error({
          title: title,
          message: _message,
          autoDismiss: 0,
          action: {
            label: 'Dismiss',
            callback: function callback() {
              return onHide();
            }
          }
        }));
        dispatch((0, _actions.clearActionStatus)(_account.MODEL, action));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var validate = this.validate,
          handleSubmit = this.handleSubmit,
          handleError = this.handleError;
      var _props3 = this.props,
          session = _props3.session,
          visible = _props3.visible,
          action = _props3.action,
          status = _props3.status,
          account = _props3.account,
          onHide = _props3.onHide;

      return _react2.default.createElement(_components.Account.Edit, {
        session: session,
        visible: visible,
        action: action,
        formData: this.state.formData,
        isLoading: account.isLoading && !status.pending,
        validate: validate,
        onHide: onHide,
        onSubmit: handleSubmit,
        onError: handleError, __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      });
    }
  }]);

  return Document;
}(_react.Component);

Document.propTypes = {
  action: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  onHide: _propTypes2.default.func
};

Document = (0, _reactRedux.connect)(function (state, props) {
  return {
    accounts: (0, _selectors.select)((0, _account.fetchAccounts)(), state.crud),
    account: (0, _selectors.select)((0, _account.fetchAccount)(props.username), state.crud),
    status: (0, _selectors.selectActionStatus)(_account.MODEL, state.crud, props.action)
  };
})(Document);

exports.default = Document;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL0FjY291bnQvRG9jdW1lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29ubmVjdCIsIk5Qcm9ncmVzcyIsIk1PREVMIiwiZmV0Y2hBY2NvdW50cyIsImZldGNoQWNjb3VudCIsImNyZWF0ZUFjY291bnQiLCJ1cGRhdGVBY2NvdW50IiwiY2xlYXJBY3Rpb25TdGF0dXMiLCJzZWxlY3QiLCJzZWxlY3RBY3Rpb25TdGF0dXMiLCJOb3RpZmljYXRpb24iLCJBY2NvdW50IiwidHJhdmVyc2UiLCJjcnlwdG8iLCJmb3JtRGF0YSIsIkRvY3VtZW50Iiwic3RhdGUiLCJ2YWxpZGF0ZSIsImVycm9ycyIsInByb3BzIiwiYWNjb3VudHMiLCJhY3Rpb24iLCJzdGF0dXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkMSIsInBhc3N3b3JkMiIsImRhdGEiLCJmaWx0ZXIiLCJhY2NvdW50IiwibGVuZ3RoIiwiYWRkRXJyb3IiLCJ1bmRlZmluZWQiLCJfX2Vycm9ycyIsImdlbmVyYXRlUGFzc3dvcmQiLCJwYXNzd29yZCIsImNiIiwicmFuZG9tQnl0ZXMiLCJyYW5kb21CeXRlc0VyciIsImJ1ZiIsInNhbHQiLCJ0b1N0cmluZyIsInBia2RmMiIsInBia2RmMkVyciIsImhhc2hSYXciLCJoYXNoIiwiQnVmZmVyIiwic3VibWl0IiwiZGlzcGF0Y2giLCJjb25maWd1cmUiLCJwYXJlbnQiLCJ0cmlja2xlU3BlZWQiLCJzdGFydCIsIkVycm9yIiwiaGFuZGxlU3VibWl0IiwiZXJyIiwiaGFuZGxlRXJyb3IiLCJtYXAiLCJlcnJvciIsInRpdGxlIiwibWVzc2FnZSIsInN0YWNrIiwibmVlZHNGZXRjaCIsImZldGNoIiwibmV4dFByb3BzIiwib25IaWRlIiwic2V0U3RhdGUiLCJyZXNwb25zZSIsImRvbmUiLCJpZCIsInN1Y2Nlc3MiLCJuYW1lIiwic3RhdHVzVGV4dCIsImF1dG9EaXNtaXNzIiwibGFiZWwiLCJjYWxsYmFjayIsInNlc3Npb24iLCJ2aXNpYmxlIiwiaXNMb2FkaW5nIiwicGVuZGluZyIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiY3J1ZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFPLEFBQWUsQUFBYyxBQUFlOztBQUM1RCxBQUFTOztBQUNULEFBQVMsQUFBUTs7QUFDakIsQUFBTzs7SUFBUCxBQUFZOztBQUVaLEFBQVM7O0FBRVQsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7O0FBRVAsSUFBTTtXQUNLLENBRFgsQUFBaUIsQUFDTixBQUFFO0FBREksQUFDZjs7SUFHSSxBOzs7Ozs7Ozs7Ozs7OztnTixBQU9KO2dCQUFRLEE7QUFBQSxBQUNOLGFBMkVGLEEsV0FBVyxVQUFBLEFBQUMsVUFBRCxBQUFXLFFBQVc7d0JBQ00sTUFETixBQUNXO1VBRFgsQUFDdkIsdUJBRHVCLEFBQ3ZCO1VBRHVCLEFBQ2IscUJBRGEsQUFDYjtVQURhLEFBQ0wscUJBREssQUFDTDtVQURLLEFBRXZCLFdBRnVCLEFBRVksU0FGWixBQUV2QjtVQUZ1QixBQUViLFlBRmEsQUFFWSxTQUZaLEFBRWI7VUFGYSxBQUVGLFlBRkUsQUFFWSxTQUZaLEFBRUYsQUFFN0I7O1VBQUksV0FBQSxBQUFXLFlBQVgsQUFBdUIsWUFBWSxTQUFuQyxBQUE0QyxpQkFDOUMsQUFBUyxLQUFULEFBQWMsT0FBTyxtQkFBQTtlQUFXLFFBQUEsQUFBUSxhQUFuQixBQUFnQztBQUFyRCxPQUFBLEVBQUEsQUFBK0QsU0FEakUsQUFDMEUsR0FBRyxBQUMzRTtlQUFBLEFBQU8sU0FBUCxBQUFnQixnQkFBaEIsQUFBNkIsV0FDOUI7QUFFRDs7VUFBSSxXQUFKLEFBQWUsVUFBVSxBQUN0QjtZQUFJLGNBQUosQUFBa0IsV0FBVyxBQUMxQjtpQkFBQSxBQUFPLFVBQVAsQUFBaUIsU0FDbkI7QUFDRDtZ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Ozs7OztBLEFBL0xpQjs7QUFBakIsQSxTQUNHLEE7VUFDRyxvQkFEUyxBQUNDLEFBQ2xCO1dBQVMsb0JBRlEsQUFFRSxBQUNuQjtVQUFRLG9CLEFBSFMsQUFHQztBQUhELEFBQ2pCOztBQTJNSixvQ0FDRSxVQUFBLEFBQUMsT0FBRCxBQUFRLE9BQVI7O2NBQ1ksdUJBQUEsQUFBTywrQkFBaUIsTUFEakIsQUFDUCxBQUE4QixBQUN4QzthQUFTLHVCQUFPLDJCQUFhLE1BQXBCLEFBQU8sQUFBbUIsV0FBVyxNQUY3QixBQUVSLEFBQTJDLEFBQ3BEO1lBQVEsQUFBbUIsbURBQU8sTUFBMUIsQUFBZ0MsTUFBTSxNQUhoRCxBQUFtQixBQUdULEFBQTRDO0FBSG5DLEFBQ2pCO0FBRk8sQ0FBQSxFQUFYLEFBQVcsQUFNVCxBQUVGOztrQkFBQSxBQUFlIiwiZmlsZSI6IkRvY3VtZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9