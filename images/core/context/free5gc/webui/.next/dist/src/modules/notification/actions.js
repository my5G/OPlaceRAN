'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION = undefined;
exports.show = show;
exports.success = success;
exports.error = error;
exports.warning = warning;
exports.info = info;
exports.hide = hide;
exports.clear = clear;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION = exports.NOTIFICATION = {
  SHOW: 'notification/SHOW',
  HIDE: 'notification/HIDE',
  CLEAR: 'notification/CLEAR'
};

function show() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return (0, _extends3.default)({
    type: NOTIFICATION.SHOW
  }, opts, {
    uid: opts.uid || Date.now(),
    position: opts.position || 'bc',
    autoDismiss: opts.autoDismiss === undefined ? 2 : opts.autoDismiss,
    level: level
  });
}

function success(opts) {
  return show(opts, 'success');
}

function error(opts) {
  return show(opts, 'error');
}

function warning(opts) {
  return show(opts, 'warning');
}

function info(opts) {
  return show(opts, 'info');
}

function hide(uid) {
  return {
    type: NOTIFICATION.HIDE,
    uid: uid
  };
}

function clear() {
  return { type: NOTIFICATION.CLEAR };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25vdGlmaWNhdGlvbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIk5PVElGSUNBVElPTiIsIlNIT1ciLCJISURFIiwiQ0xFQVIiLCJzaG93Iiwib3B0cyIsImxldmVsIiwidHlwZSIsInVpZCIsIkRhdGUiLCJub3ciLCJwb3NpdGlvbiIsImF1dG9EaXNtaXNzIiwidW5kZWZpbmVkIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJoaWRlIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7OztRQU1PLEFBQVM7UUFXVCxBQUFTO1FBSVQsQUFBUztRQUlULEFBQVM7UUFJVCxBQUFTO1FBSVQsQUFBUztRQU9ULEFBQVM7O0FBeENoQjs7Ozs7O0FBQU8sSUFBTTtRQUFlLEFBQ3BCLEFBQ047UUFGMEIsQUFFcEIsQUFDTjtTQUhLLEFBQXFCLEFBR25CLEFBR1Q7QUFONEIsQUFDMUI7O0FBS0ssZ0JBQTRDO01BQTlCLEFBQThCLDJFQUF2QixBQUF1QjtNQUFuQixBQUFtQiw0RUFBWCxBQUFXLEFBQ2pEOzs7VUFDUSxhQURSLEFBQ3FCO0FBQW5CLEtBREYsQUFFSztTQUNFLEtBQUEsQUFBSyxPQUFPLEtBSG5CLEFBR21CLEFBQUssQUFDdEI7Y0FBVSxLQUFBLEFBQUssWUFKakIsQUFJNkIsQUFDM0I7aUJBQWEsS0FBQSxBQUFLLGdCQUFMLEFBQXFCLFlBQXJCLEFBQWtDLElBQUksS0FMckQsQUFLMEQsQUFDeEQ7V0FORixBQVFEO0FBTEc7QUFPSjs7QUFBTyxpQkFBQSxBQUFpQixNQUFNLEFBQzVCO1NBQU8sS0FBQSxBQUFLLE1BQVosQUFBTyxBQUFXLEFBQ25CO0FBRUQ7O0FBQU8sZUFBQSxBQUFlLE1BQU0sQUFDMUI7U0FBTyxLQUFBLEFBQUssTUFBWixBQUFPLEFBQVcsQUFDbkI7QUFFRDs7QUFBTyxpQkFBQSxBQUFpQixNQUFNLEFBQzVCO1NBQU8sS0FBQSxBQUFLLE1BQVosQUFBTyxBQUFXLEFBQ25CO0FBRUQ7O0FBQU8sY0FBQSxBQUFjLE1BQU0sQUFDekI7U0FBTyxLQUFBLEFBQUssTUFBWixBQUFPLEFBQVcsQUFDbkI7QUFFRDs7QUFBTyxjQUFBLEFBQWMsS0FBSyxBQUN4Qjs7VUFDUSxhQURELEFBQ2MsQUFDbkI7U0FGRixBQUFPLEFBSVI7QUFKUSxBQUNMO0FBS0o7O0FBQU8saUJBQWlCLEFBQ3RCO1NBQU8sRUFBRSxNQUFNLGFBQWYsQUFBTyxBQUFxQixBQUM3QiIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9