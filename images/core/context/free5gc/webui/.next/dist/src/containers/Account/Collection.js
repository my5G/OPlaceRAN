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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _account = require('../../modules/crud/account');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Account/Collection.js';


var Collection = function (_Component) {
  (0, _inherits3.default)(Collection, _Component);

  function Collection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collection.__proto__ || (0, _getPrototypeOf2.default)(Collection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      document: {
        action: '',
        visible: false,
        dimmed: false
      },
      confirm: {
        visible: false,
        username: ''
      }
    }, _this.documentHandler = {
      show: function show(action, payload) {
        _this.setState({
          document: (0, _extends3.default)({
            action: action,
            visible: true,
            dimmed: true
          }, payload)
        });
      },
      hide: function hide() {
        _this.setState({
          document: {
            action: '',
            visible: false,
            dimmed: false
          }
        });
      },
      actions: {
        create: function create() {
          _this.documentHandler.show('create');
        },
        update: function update(username) {
          _this.documentHandler.show('update', { username: username });
        }
      }
    }, _this.confirmHandler = {
      show: function show(username) {
        _this.setState({
          confirm: {
            visible: true,
            username: username
          }
        });
      },
      hide: function hide() {
        _this.setState({
          confirm: (0, _extends3.default)({}, _this.state.confirm, {
            visible: false
          })
        });
      },
      actions: {
        delete: function _delete() {
          var dispatch = _this.props.dispatch;

          if (_this.state.confirm.visible === true) {
            _this.confirmHandler.hide();
            _this.documentHandler.hide();

            dispatch((0, _account.deleteAccount)(_this.state.confirm.username));
          }
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collection, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          accounts = _props.accounts,
          dispatch = _props.dispatch;

      if (accounts.needsFetch) {
        dispatch(accounts.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var accounts = nextProps.accounts,
          status = nextProps.status;
      var dispatch = this.props.dispatch;

      if (accounts.needsFetch) {
        dispatch(accounts.fetch);
      }

      if (status.response) {
        dispatch(Notification.success({
          title: 'Account',
          message: status.id + ' has been deleted'
        }));
        dispatch((0, _actions.clearActionStatus)(_account.MODEL, 'delete'));
      }

      if (status.error) {
        var title = 'Unknown Code';
        var message = 'Unknown Error';
        if (response.data && response.data.name && response.data.message) {
          title = response.data.name;
          message = response.data.message;
        } else {
          title = response.status;
          message = response.statusText;
        }

        dispatch(Notification.error({
          title: title,
          message: message,
          autoDismiss: 0,
          action: {
            label: 'Dismiss'
          }
        }));
        dispatch((0, _actions.clearActionStatus)(_account.MODEL, 'delete'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSearchChange = this.handleSearchChange,
          handleSearchClear = this.handleSearchClear,
          documentHandler = this.documentHandler,
          confirmHandler = this.confirmHandler;
      var document = this.state.document;
      var _props2 = this.props,
          session = _props2.session,
          accounts = _props2.accounts,
          status = _props2.status;
      var _session$user = session.user,
          username = _session$user.username,
          roles = _session$user.roles;
      var isLoading = accounts.isLoading,
          data = accounts.data;

      return _react2.default.createElement(_components.Layout.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement(_components.Account.List, {
        session: session,
        accounts: data,
        deletedId: status.id,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), isLoading && _react2.default.createElement(_components.Spinner, { md: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), roles.indexOf('admin') !== -1 && _react2.default.createElement(_components.FloatingButton, { onClick: documentHandler.actions.create, __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), _react2.default.createElement(_Document2.default, (0, _extends3.default)({}, document, {
        session: session,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: documentHandler.hide, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), _react2.default.createElement(_components.Dimmed, { visible: document.dimmed, __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }), _react2.default.createElement(_components.Confirm, {
        visible: this.state.confirm.visible,
        message: 'Delete this account?',
        onOutside: confirmHandler.hide,
        buttons: [{ text: "CANCEL", action: confirmHandler.hide, info: true }, { text: "DELETE", action: confirmHandler.actions.delete, danger: true }], __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }));
    }
  }]);

  return Collection;
}(_react.Component);

Collection = (0, _reactRedux.connect)(function (state) {
  return {
    accounts: (0, _selectors.select)((0, _account.fetchAccounts)(), state.crud),
    status: (0, _selectors.selectActionStatus)(_account.MODEL, state.crud, 'delete')
  };
})(Collection);

exports.default = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL0FjY291bnQvQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb25uZWN0IiwiTU9ERUwiLCJmZXRjaEFjY291bnRzIiwiZGVsZXRlQWNjb3VudCIsImNsZWFyQWN0aW9uU3RhdHVzIiwic2VsZWN0Iiwic2VsZWN0QWN0aW9uU3RhdHVzIiwiTm90aWZpY2F0aW9uIiwiTGF5b3V0IiwiQWNjb3VudCIsIlNwaW5uZXIiLCJGbG9hdGluZ0J1dHRvbiIsIkJsYW5rIiwiRGltbWVkIiwiQ29uZmlybSIsIkRvY3VtZW50IiwiQ29sbGVjdGlvbiIsInN0YXRlIiwiZG9jdW1lbnQiLCJhY3Rpb24iLCJ2aXNpYmxlIiwiZGltbWVkIiwiY29uZmlybSIsInVzZXJuYW1lIiwiZG9jdW1lbnRIYW5kbGVyIiwic2hvdyIsInBheWxvYWQiLCJzZXRTdGF0ZSIsImhpZGUiLCJhY3Rpb25zIiwiY3JlYXRlIiwidXBkYXRlIiwiY29uZmlybUhhbmRsZXIiLCJkZWxldGUiLCJkaXNwYXRjaCIsInByb3BzIiwiYWNjb3VudHMiLCJuZWVkc0ZldGNoIiwiZmV0Y2giLCJuZXh0UHJvcHMiLCJzdGF0dXMiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJpZCIsImVycm9yIiwiZGF0YSIsIm5hbWUiLCJzdGF0dXNUZXh0IiwiYXV0b0Rpc21pc3MiLCJsYWJlbCIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNlYXJjaENsZWFyIiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlcyIsImlzTG9hZGluZyIsImluZGV4T2YiLCJ0ZXh0IiwiaW5mbyIsImRhbmdlciIsImNydWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFTLEFBQU8sQUFBZTs7QUFDL0IsQUFBUzs7QUFDVCxBQUFTLEFB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