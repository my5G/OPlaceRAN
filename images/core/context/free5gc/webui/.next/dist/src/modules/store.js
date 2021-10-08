'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _typeof2 = require('next/node_modules/babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require('./sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {

  var composeEnhancers = process.env.NODE_ENV === 'development' && (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;

  var sagaMiddleware = (0, _reduxSaga2.default)();
  var enhancer = composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware));

  var store = (0, _redux.createStore)(_reducers2.default, enhancer);
  sagaMiddleware.run(_sagas2.default);

  return store;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicmVkdWNlcnMiLCJyb290U2FnYSIsImluaXRTdG9yZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJzYWdhTWlkZGxld2FyZSIsImVuaGFuY2VyIiwic3RvcmUiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFULEFBQXNCLEFBQXRCLEFBQXVDLEFBQXZDOztBQUNBLEFBQU8sQUFBUDs7OztBQUVBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUVBOzs7Ozs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxZQUFNLEFBRTdCOztNQUFNLG1CQUNKLFFBQVEsQUFBUixJQUFZLEFBQVosYUFBeUIsQUFBekIsaUJBQ0EsUUFBTyxBQUFQLDZEQUFPLEFBQVAsYUFBa0IsQUFEbEIsWUFFQSxPQUFPLEFBRlAsdUNBR0UsT0FBTyxBQUFQLHFDQUE0QyxBQUE1QyxBQUhGLEFBR3FELEFBSnZELEFBTUE7O01BQU0saUJBQWlCLEFBQXZCLEFBQ0E7TUFBTSxXQUFXLGlCQUNmLDRCQUFnQixBQUFoQixBQURlLEFBQWpCLEFBSUE7O01BQU0sUUFBUSxBQUFZLEFBQVosNENBQXNCLEFBQXRCLEFBQWQsQUFDQTtpQkFBZSxBQUFmLEFBQW1CLEFBQW5CLEFBRUE7O1NBQU8sQUFBUCxBQUNEO0FBakJNIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9