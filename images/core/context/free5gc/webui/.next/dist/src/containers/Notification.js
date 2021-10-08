'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactNotificationSystem = require('react-notification-system');

var _reactNotificationSystem2 = _interopRequireDefault(_reactNotificationSystem);

var _actions = require('../modules/notification/actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Notification.js';


var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);

    return (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).apply(this, arguments));
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var dispatch = this.props.dispatch;
      var notifications = nextProps.notifications;

      var notificationIds = notifications.map(function (notification) {
        return notification.uid;
      });
      var systemNotifications = this.system.state.notifications || [];

      if (notifications.length > 0) {
        systemNotifications.forEach(function (notification) {
          if (notificationIds.indexOf(notification.uid) < 0) {
            _this2.system.removeNotification(notification.uid);
          }
        });

        notifications.forEach(function (notification) {
          _this2.system.addNotification((0, _extends3.default)({}, notification, {
            onRemove: function onRemove() {
              dispatch(actions.hide(notification.uid));
              notification.onRemove && notification.onRemove();
            }
          }));
        });
      }

      if (this.props.notifications !== notifications && notifications.length === 0) {
        this.system.clearNotifications();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          notifications = _props.notifications,
          rest = (0, _objectWithoutProperties3.default)(_props, ['notifications']);

      return _react2.default.createElement(_reactNotificationSystem2.default, (0, _extends3.default)({ ref: function ref(_ref) {
          return _this3.system = _ref;
        } }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }));
    }
  }]);

  return Notification;
}(_react.Component);

Notification = (0, _reactRedux.connect)(function (state) {
  return {
    notifications: state.notifications
  };
})(Notification);

exports.default = Notification;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL05vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjb25uZWN0IiwiTm90aWZpY2F0aW9uU3lzdGVtIiwiYWN0aW9ucyIsIk5vdGlmaWNhdGlvbiIsIm5leHRQcm9wcyIsImRpc3BhdGNoIiwicHJvcHMiLCJub3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9uSWRzIiwibWFwIiwibm90aWZpY2F0aW9uIiwidWlkIiwic3lzdGVtTm90aWZpY2F0aW9ucyIsInN5c3RlbSIsInN0YXRlIiwibGVuZ3RoIiwiZm9yRWFjaCIsImluZGV4T2YiLCJyZW1vdmVOb3RpZmljYXRpb24iLCJhZGROb3RpZmljYXRpb24iLCJvblJlbW92ZSIsImhpZGUiLCJjbGVhck5vdGlmaWNhdGlvbnMiLCJyZXN0IiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU87Ozs7QUFFUCxBQUFPOztJQUFQLEFBQVk7Ozs7Ozs7OztJQUVOLEE7Ozs7Ozs7Ozs7OzhDLEFBRXNCLFdBQVc7bUJBQUE7O1VBQUEsQUFFM0IsV0FBYSxLQUZjLEFBRVQsTUFGUyxBQUUzQjtVQUYyQixBQUczQixnQkFIMkIsQUFHVCxVQUhTLEFBRzNCLEFBRVI7O1VBQU0sZ0NBQWtCLEFBQWMsSUFBSSx3QkFBQTtlQUFnQixhQUFoQixBQUE2QjtBQUF2RSxBQUF3QixBQUN4QixPQUR3QjtVQUNsQixzQkFBc0IsS0FBQSxBQUFLLE9BQUwsQUFBWSxNQUFaLEFBQWtCLGlCQUE5QyxBQUErRCxBQUUvRDs7VUFBSSxjQUFBLEFBQWMsU0FBbEIsQUFBMkIsR0FBRyxBQUM1Qjs0QkFBQSxBQUFvQixRQUFRLHdCQUFnQixBQUMxQztjQUFJLGdCQUFBLEFBQWdCLFFBQVEsYUFBeEIsQUFBcUMsT0FBekMsQUFBZ0QsR0FBRyxBQUNqRDttQkFBQSxBQUFLLE9BQUwsQUFBWSxtQkFBbUIsYUFBL0IsQUFBNEMsQUFDN0M7QUFDRjtBQUpELEFBTUE7O3NCQUFBLEFBQWMsUUFBUSx3QkFBZ0IsQUFDcEM7aUJBQUEsQUFBSyxPQUFMLEFBQVksMkNBQVosQUFDSztzQkFDTyxvQkFBTSxBQUNkO3VCQUFTLFFBQUEsQUFBUSxLQUFLLGFBQXRCLEFBQVMsQUFBMEIsQUFDbkM7MkJBQUEsQUFBYSxZQUFZLGFBQXpCLEFBQXlCLEFBQWEsQUFDdkM7QUFMSCxBQU9EO0FBTEc7QUFISixBQVNEO0FBRUQ7O1VBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxrQkFBWixBQUE4QixpQkFBa0IsY0FBQSxBQUFjLFdBQWxFLEFBQTZFLEdBQUcsQUFDOUU7YUFBQSxBQUFLLE9BQUwsQUFBWSxBQUNiO0FBQ0Y7Ozs7MEMsQUFFcUIsV0FBVyxBQUMvQjthQUFPLEtBQUEsQUFBSyxVQUFaLEFBQXNCLEFBQ3ZCOzs7OzZCQUVRO21CQUFBOzttQkFDMkIsS0FEM0IsQUFDZ0M7VUFEaEMsQUFDQyx1QkFERCxBQUNDO1VBREQsQUFDbUIsdURBRTFCOzs2QkFBTyxBQUFDLDBFQUFtQixLQUFLLG1CQUFBO2lCQUFPLE9BQUEsQUFBSyxTQUFaLEFBQXFCO0FBQTlDLGFBQUEsQUFBd0Q7O29CQUF4RDtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtBQUFBLFFBQUE7Ozs7O0FBeENnQixBOztBQTRDM0Isd0NBQ0UsVUFBQSxBQUFDLE9BQUQ7O21CQUNpQixNQURqQixBQUFZLEFBQ1c7QUFEWCxBQUNWO0FBRlcsQ0FBQSxFQUFmLEFBQWUsQUFJYixBQUVGOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==