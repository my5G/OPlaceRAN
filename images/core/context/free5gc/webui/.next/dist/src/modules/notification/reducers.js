'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('next/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

function notifications() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.NOTIFICATION.SHOW:
      var type = action.type,
          rest = (0, _objectWithoutProperties3.default)(action, ['type']);

      return [].concat((0, _toConsumableArray3.default)(state), [(0, _extends3.default)({}, rest, { uid: action.uid })]);
    case _actions.NOTIFICATION.HIDE:
      return state.filter(function (notification) {
        return notification.uid !== action.uid;
      });
    case _actions.NOTIFICATION.CLEAR:
      return [];
  }
  return state;
}

exports.default = notifications;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25vdGlmaWNhdGlvbi9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJOT1RJRklDQVRJT04iLCJpbml0aWFsU3RhdGUiLCJub3RpZmljYXRpb25zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0hPVyIsInJlc3QiLCJ1aWQiLCJISURFIiwiZmlsdGVyIiwibm90aWZpY2F0aW9uIiwiQ0xFQVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFFVCxJQUFNLGVBQU4sQUFBcUI7O0FBRXJCLFNBQUEsQUFBUyxnQkFBNEM7TUFBOUIsQUFBOEIsNEVBQXRCLEFBQXNCO01BQVIsQUFBUSxtQkFDbkQ7O1VBQU8sT0FBUCxBQUFjLEFBQ1o7U0FBSyxzQkFBTCxBQUFrQjtVQUFsQixBQUNVLE9BRFYsQUFDNEIsT0FENUIsQUFDVTtVQURWLEFBQ21CLDhDQURuQixBQUM0QixTQUMxQjs7d0RBQUEsQUFDSyxvQ0FETCxBQUVPLFFBQU0sS0FBSyxPQUZsQixBQUV5QixBQUUzQjtTQUFLLHNCQUFMLEFBQWtCLEFBQ2hCO21CQUFPLEFBQU0sT0FBTyx3QkFBZ0IsQUFDbEM7ZUFBTyxhQUFBLEFBQWEsUUFBUSxPQUE1QixBQUFtQyxBQUNwQztBQUZELEFBQU8sQUFHVCxPQUhTO1NBR0osc0JBQUwsQUFBa0IsQUFDaEI7YUFaSixBQVlJLEFBQU8sQUFFWDs7U0FBQSxBQUFPLEFBQ1I7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==