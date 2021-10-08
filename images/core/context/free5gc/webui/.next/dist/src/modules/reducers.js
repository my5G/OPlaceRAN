'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('./crud/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _reducers3 = require('./notification/reducers');

var _reducers4 = _interopRequireDefault(_reducers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  crud: _reducers2.default,
  sidebar: _sidebar2.default,
  notifications: _reducers4.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3JlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNydWQiLCJzaWRlYmFyIiwibm90aWZpY2F0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFFVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFFUDs7Ozs7OztBQUErQixBQUU3QjtBQUY2QixBQUc3QjtBQUhGLEFBQWUsQUFBZ0I7QUFBQSxBQUM3QixDQURhIiwiZmlsZSI6InJlZHVjZXJzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9