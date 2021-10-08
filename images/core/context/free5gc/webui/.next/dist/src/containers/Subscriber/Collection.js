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

var _subscriber = require('../../modules/crud/subscriber');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Subscriber/Collection.js';


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
      search: '',
      document: {
        action: '',
        visible: false,
        dimmed: false
      },
      confirm: {
        visible: false,
        imsi: ''
      },
      view: {
        visible: false,
        disableOnClickOutside: false,
        imsi: ''
      }
    }, _this.handleSearchChange = function (e) {
      _this.setState({
        search: e.target.value
      });
    }, _this.handleSearchClear = function (e) {
      _this.setState({
        search: ''
      });
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
        update: function update(imsi) {
          _this.documentHandler.show('update', { imsi: imsi });
        }
      }
    }, _this.confirmHandler = {
      show: function show(imsi) {
        _this.setState({
          confirm: {
            visible: true,
            imsi: imsi
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

            dispatch((0, _subscriber.deleteSubscriber)(_this.state.confirm.imsi));
          }
        }
      }
    }, _this.viewHandler = {
      show: function show(imsi) {
        _this.setState({
          view: {
            imsi: imsi,
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
          subscribers = _props.subscribers,
          dispatch = _props.dispatch;

      if (subscribers.needsFetch) {
        dispatch(subscribers.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var subscribers = nextProps.subscribers,
          status = nextProps.status;
      var dispatch = this.props.dispatch;

      if (subscribers.needsFetch) {
        dispatch(subscribers.fetch);
      }

      if (status.response) {
        dispatch(Notification.success({
          title: 'Subscriber',
          message: status.id + ' has been deleted'
        }));
        dispatch((0, _actions.clearActionStatus)(_subscriber.MODEL, 'delete'));
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
        dispatch((0, _actions.clearActionStatus)(_subscriber.MODEL, 'delete'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleSearchChange = this.handleSearchChange,
          handleSearchClear = this.handleSearchClear,
          documentHandler = this.documentHandler,
          viewHandler = this.viewHandler,
          confirmHandler = this.confirmHandler;
      var _state = this.state,
          search = _state.search,
          document = _state.document;
      var _props2 = this.props,
          subscribers = _props2.subscribers,
          status = _props2.status;
      var isLoading = subscribers.isLoading,
          data = subscribers.data;

      return _react2.default.createElement(_components.Layout.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, (0, _keys2.default)(data).length > 0 && _react2.default.createElement(_components.Subscriber.Search, {
        onChange: handleSearchChange,
        value: search,
        onClear: handleSearchClear, __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }), _react2.default.createElement(_components.Subscriber.List, {
        subscribers: data,
        deletedImsi: status.id,
        onView: viewHandler.show,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        search: search,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), isLoading && _react2.default.createElement(_components.Spinner, { md: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), _react2.default.createElement(_components.Blank, {
        visible: !isLoading && !((0, _keys2.default)(data).length > 0),
        title: 'ADD A SUBSCRIBER',
        body: 'You have no subscribers... yet!',
        onTitle: documentHandler.actions.create,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }), _react2.default.createElement(_components.FloatingButton, { onClick: documentHandler.actions.create, __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }), _react2.default.createElement(_components.Subscriber.View, {
        visible: this.state.view.visible,
        subscriber: data.filter(function (subscriber) {
          return subscriber.imsi === _this2.state.view.imsi;
        })[0],
        disableOnClickOutside: this.state.view.disableOnClickOutside,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: viewHandler.hide, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), _react2.default.createElement(_Document2.default, (0, _extends3.default)({}, document, {
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: documentHandler.hide, __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      })), _react2.default.createElement(_components.Dimmed, { visible: document.dimmed, __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }), _react2.default.createElement(_components.Confirm, {
        visible: this.state.confirm.visible,
        message: 'Delete this subscriber?',
        onOutside: confirmHandler.hide,
        buttons: [{ text: "CANCEL", action: confirmHandler.hide, info: true }, { text: "DELETE", action: confirmHandler.actions.delete, danger: true }], __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }));
    }
  }]);

  return Collection;
}(_react.Component);

Collection = (0, _reactRedux.connect)(function (state) {
  return {
    subscribers: (0, _selectors.select)((0, _subscriber.fetchSubscribers)(), state.crud),
    status: (0, _selectors.selectActionStatus)(_subscriber.MODEL, state.crud, 'delete')
  };
})(Collection);

exports.default = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL1N1YnNjcmliZXIvQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb25uZWN0IiwiTU9ERUwiLCJmZXRjaFN1YnNjcmliZXJzIiwiZGVsZXRlU3Vic2NyaWJlciIsImNsZWFyQWN0aW9uU3RhdHVzIiwic2VsZWN0Iiwic2VsZWN0QWN0aW9uU3RhdHVzIiwiTm90aWZpY2F0aW9uIiwiTGF5b3V0IiwiU3Vic2NyaWJlciIsIlNwaW5uZXIiLCJGbG9hdGluZ0J1dHRvbiIsIkJsYW5rIiwiRGltbWVkIiwiQ29uZmlybSIsIkRvY3VtZW50IiwiQ29sbGVjdGlvbiIsInN0YXRlIiwic2VhcmNoIiwiZG9jdW1lbnQiLCJhY3Rpb24iLCJ2aXNpYmxlIiwiZGltbWVkIiwiY29uZmlybSIsImltc2kiLCJ2aWV3IiwiZGlzYWJsZU9uQ2xpY2tPdXRzaWRlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2hDbGVhciIsImRvY3VtZW50SGFuZGxlciIsInNob3ciLCJwYXlsb2FkIiwiaGlkZSIsImFjdGlvbnMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJjb25maXJtSGFuZGxlciIsImRlbGV0ZSIsImRpc3BhdGNoIiwicHJvcHMiLCJ2aWV3SGFuZGxlciIsInN1YnNjcmliZXJzIiwibmVlZHNGZXRjaCIsImZldGNoIiwibmV4dFByb3BzIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwidGl0bGUiLCJtZXNzYWdlIiwiaWQiLCJlcnJvciIsImRhdGEiLCJuYW1lIiwic3RhdHVzVGV4dCIsImF1dG9EaXNtaXNzIiwibGFiZWwiLCJpc0xvYWRpbmciLCJsZW5ndGgiLCJmaWx0ZXIiLCJzdWJzY3JpYmVyIiwidGV4dCIsImluZm8iLCJkYW5nZXIiLCJjcnVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQURBOzBCQUNBLEFBQUM7aUJBQ1UsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUR0QixBQUM4QixBQUM1QjtpQkFGRixBQUVVLEFBQ1I7bUJBQVcsZUFIYixBQUc0QixBQUMxQjtpQkFBUyxDQUNQLEVBQUUsTUFBRixBQUFRLFVBQVUsUUFBUSxlQUExQixBQUF5QyxNQUFNLE1BRHhDLEFBQ1AsQUFBb0QsUUFDcEQsRUFBRSxNQUFGLEFBQVEsVUFBVSxRQUFRLGVBQUEsQUFBZSxRQUF6QyxBQUFpRCxRQUFRLFFBTjdELEFBSVcsQUFFUCxBQUFnRTtvQkFOcEU7c0JBcENKLEFBQ0UsQUFtQ0UsQUFVTDtBQVZLO0FBQ0U7Ozs7O0FBOU9lLEE7O0FBMFB6QixzQ0FDRSxVQUFBLEFBQUMsT0FBRDs7aUJBQ2UsdUJBQUEsQUFBTyxxQ0FBb0IsTUFEOUIsQUFDRyxBQUFpQyxBQUM5QztZQUFRLEFBQW1CLHNEQUFPLE1BQTFCLEFBQWdDLE1BRjFDLEFBQVksQUFFRixBQUFzQztBQUZwQyxBQUNWO0FBRlMsQ0FBQSxFQUFiLEFBQWEsQUFLWCxBQUVGOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=