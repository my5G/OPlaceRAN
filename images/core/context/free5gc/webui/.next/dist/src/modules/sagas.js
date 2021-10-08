'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _sagas = require('./crud/sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(_sagas2.default)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NhZ2FzLmpzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsImNydWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFFUDs7Ozs7O3NEQUF5QixBOztBQUFWLFNBQUEsQUFBVSxXQUFWO2lFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDUCxrQkFBSSxDQURHLEFBQ1AsQUFBSSxBQUNSLEFBQUs7O2FBRk07YUFBQTswQkFBQTs7QUFBQTtjQUFBIiwiZmlsZSI6InNhZ2FzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9