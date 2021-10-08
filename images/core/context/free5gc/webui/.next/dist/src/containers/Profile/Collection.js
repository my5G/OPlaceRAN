'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _profile = require('../../modules/crud/profile');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Profile/Collection.js';


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
        _id: ''
      },
      view: {
        visible: false,
        disableOnClickOutside: false,
        _id: ''
      }
    }, _this.documentHandler = {
      show: function show(action, payload) {
        _this.setState({
          document: (0, _extends3.default)({
            action: action,
            visible: true,
            dimmed: true
          }, payload),
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: true
          })
        });
      },
      hide: function hide() {
        _this.setState({
          document: {
            action: '',
            visible: false,
            dimmed: false
          },
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: false
          })
        });
      },
      actions: {
        create: function create() {
          _this.documentHandler.show('create');
        },
        update: function update(_id) {
          _this.documentHandler.show('update', { _id: _id });
        }
      }
    }, _this.confirmHandler = {
      show: function show(_id) {
        _this.setState({
          confirm: {
            visible: true,
            _id: _id
          },
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: true
          })
        });
      },
      hide: function hide() {
        _this.setState({
          confirm: (0, _extends3.default)({}, _this.state.confirm, {
            visible: false
          }),
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: false
          })
        });
      },
      actions: {
        delete: function _delete() {
          var dispatch = _this.props.dispatch;

          if (_this.state.confirm.visible === true) {
            _this.confirmHandler.hide();
            _this.documentHandler.hide();
            _this.viewHandler.hide();

            dispatch((0, _profile.deleteProfile)(_this.state.confirm._id));
          }
        }
      }
    }, _this.viewHandler = {
      show: function show(_id) {
        _this.setState({
          view: {
            _id: _id,
            visible: true,
            disableOnClickOutside: false
          }
        });
      },
      hide: function hide() {
        _this.setState({
          view: (0, _extends3.default)({}, _this.state.view, {
            visible: false
          })
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collection, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          profiles = _props.profiles,
          dispatch = _props.dispatch;

      if (profiles.needsFetch) {
        dispatch(profiles.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var profiles = nextProps.profiles,
          status = nextProps.status;
      var dispatch = this.props.dispatch;

      if (profiles.needsFetch) {
        dispatch(profiles.fetch);
      }

      if (status.response) {
        dispatch(Notification.success({
          title: 'Profile',
          //        message: `${status.id} has been deleted`
          message: 'This profile has been deleted'
        }));
        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, 'delete'));
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
        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, 'delete'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var documentHandler = this.documentHandler,
          viewHandler = this.viewHandler,
          confirmHandler = this.confirmHandler;
      var document = this.state.document;
      var _props2 = this.props,
          profiles = _props2.profiles,
          status = _props2.status;
      var isLoading = profiles.isLoading,
          data = profiles.data;

      return _react2.default.createElement(_components.Layout.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement(_components.Profile.List, {
        profiles: data,
        deletedId: status.id,
        onView: viewHandler.show,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }), isLoading && _react2.default.createElement(_components.Spinner, { md: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), _react2.default.createElement(_components.Blank, {
        visible: !isLoading && !((0, _keys2.default)(data).length > 0),
        title: 'ADD A PROFILE',
        body: 'You have no profiles... yet!',
        onTitle: documentHandler.actions.create,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), _react2.default.createElement(_components.FloatingButton, { onClick: documentHandler.actions.create, __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), _react2.default.createElement(_components.Profile.View, {
        visible: this.state.view.visible,
        profile: data.filter(function (profile) {
          return profile._id === _this2.state.view._id;
        })[0],
        disableOnClickOutside: this.state.view.disableOnClickOutside,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: viewHandler.hide, __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), _react2.default.createElement(_Document2.default, (0, _extends3.default)({}, document, {
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: documentHandler.hide, __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      })), _react2.default.createElement(_components.Dimmed, { visible: document.dimmed, __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }), _react2.default.createElement(_components.Confirm, {
        visible: this.state.confirm.visible,
        message: 'Delete this profile?',
        onOutside: confirmHandler.hide,
        buttons: [{ text: "CANCEL", action: confirmHandler.hide, info: true }, { text: "DELETE", action: confirmHandler.actions.delete, danger: true }], __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }));
    }
  }]);

  return Collection;
}(_react.Component);

Collection = (0, _reactRedux.connect)(function (state) {
  return {
    profiles: (0, _selectors.select)((0, _profile.fetchProfiles)(), state.crud),
    status: (0, _selectors.selectActionStatus)(_profile.MODEL, state.crud, 'delete')
  };
})(Collection);

exports.default = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL1Byb2ZpbGUvQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb25uZWN0IiwiTU9ERUwiLCJmZXRjaFByb2ZpbGVzIiwiZGVsZXRlUHJvZmlsZSIsImNsZWFyQWN0aW9uU3RhdHVzIiwic2VsZWN0Iiwic2VsZWN0QWN0aW9uU3RhdHVzIiwiTm90aWZpY2F0aW9uIiwiTGF5b3V0IiwiUHJvZmlsZSIsIlNwaW5uZXIiLCJGbG9hdGluZ0J1dHRvbiIsIkJsYW5rIiwiRGltbWVkIiwiQ29uZmlybSIsIkRvY3VtZW50IiwiQ29sbGVjdGlvbiIsInN0YXRlIiwiZG9jdW1lbnQiLCJhY3Rpb24iLCJ2aXNpYmxlIiwiZGltbWVkIiwiY29uZmlybSIsIl9pZCIsInZpZXciLCJkaXNhYmxlT25DbGlja091dHNpZGUiLCJkb2N1bWVudEhhbmRsZXIiLCJzaG93IiwicGF5bG9hZCIsInNldFN0YXRlIiwiaGlkZSIsImFjdGlvbnMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJjb25maXJtSGFuZGxlciIsImRlbGV0ZSIsImRpc3BhdGNoIiwicHJvcHMiLCJ2aWV3SGFuZGxlciIsInByb2ZpbGVzIiwibmVlZHNGZXRjaCIsImZldGNoIiwibmV4dFByb3BzIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwidGl0bGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJkYXRhIiwibmFtZSIsInN0YXR1c1RleHQiLCJhdXRvRGlzbWlzcyIsImxhYmVsIiwiaXNMb2FkaW5nIiwiaWQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJwcm9maWxlIiwidGV4dCIsImluZm8iLCJkYW5nZXIiLCJjcnVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQVMsQUFBTyxBQUFlOztBQUMvQixBQUFTOztBQUNULEFBQVMsQUFBUTs7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