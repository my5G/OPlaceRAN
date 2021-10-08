'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _callee;

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var _session = require('../auth/session');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(crudEntity),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(watchFetch),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(watchFetchOne),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(watchCreate),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(watchUpdate),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(watchDelete),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(_callee);

var crudApi = function crudApi(method, url, csrf) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      params = _ref.params,
      data = _ref.data;

  return (0, _axios2.default)({
    baseURL: '/api/db',
    headers: { 'X-CSRF-TOKEN': csrf },
    method: method,
    url: url,
    params: params,
    data: data
  });
};

function crudEntity(action) {
  var _action$payload, method, url, params, data, _action$meta, success, failure, meta, sessionData, csrf, response;

  return _regenerator2.default.wrap(function crudEntity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _action$payload = action.payload, method = _action$payload.method, url = _action$payload.url, params = _action$payload.params, data = _action$payload.data;
          _action$meta = action.meta, success = _action$meta.success, failure = _action$meta.failure;
          meta = (0, _extends3.default)({}, action.meta, {
            fetchedAt: Date.now()
          });
          _context.prev = 3;
          sessionData = new _session2.default();
          csrf = ((sessionData || {}).session || {}).csrfToken;
          _context.next = 8;
          return (0, _effects.call)(crudApi, method, url, csrf, { params: params, data: data });

        case 8:
          response = _context.sent;
          _context.next = 11;
          return (0, _effects.put)({ meta: meta, type: success, payload: response });

        case 11:
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context['catch'](3);
          _context.next = 17;
          return (0, _effects.put)({ meta: meta, type: failure, payload: _context.t0, error: true });

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 13]]);
}

function watchFetch() {
  var action;
  return _regenerator2.default.wrap(function watchFetch$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!true) {
            _context2.next = 8;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)(_actions.CRUD.FETCH);

        case 3:
          action = _context2.sent;
          _context2.next = 6;
          return (0, _effects.fork)(crudEntity, action);

        case 6:
          _context2.next = 0;
          break;

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function watchFetchOne() {
  var action;
  return _regenerator2.default.wrap(function watchFetchOne$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!true) {
            _context3.next = 8;
            break;
          }

          _context3.next = 3;
          return (0, _effects.take)(_actions.CRUD.FETCH_ONE);

        case 3:
          action = _context3.sent;
          _context3.next = 6;
          return (0, _effects.fork)(crudEntity, action);

        case 6:
          _context3.next = 0;
          break;

        case 8:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function watchCreate() {
  var action;
  return _regenerator2.default.wrap(function watchCreate$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!true) {
            _context4.next = 8;
            break;
          }

          _context4.next = 3;
          return (0, _effects.take)(_actions.CRUD.CREATE);

        case 3:
          action = _context4.sent;
          _context4.next = 6;
          return (0, _effects.fork)(crudEntity, action);

        case 6:
          _context4.next = 0;
          break;

        case 8:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function watchUpdate() {
  var action;
  return _regenerator2.default.wrap(function watchUpdate$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!true) {
            _context5.next = 8;
            break;
          }

          _context5.next = 3;
          return (0, _effects.take)(_actions.CRUD.UPDATE);

        case 3:
          action = _context5.sent;
          _context5.next = 6;
          return (0, _effects.fork)(crudEntity, action);

        case 6:
          _context5.next = 0;
          break;

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function watchDelete() {
  var action;
  return _regenerator2.default.wrap(function watchDelete$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!true) {
            _context6.next = 8;
            break;
          }

          _context6.next = 3;
          return (0, _effects.take)(_actions.CRUD.DELETE);

        case 3:
          action = _context6.sent;
          _context6.next = 6;
          return (0, _effects.fork)(crudEntity, action);

        case 6:
          _context6.next = 0;
          break;

        case 8:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(watchFetch), (0, _effects.fork)(watchFetchOne), (0, _effects.fork)(watchCreate), (0, _effects.fork)(watchUpdate), (0, _effects.fork)(watchDelete)]);

        case 2:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvc2FnYXMuanMiXSwibmFtZXMiOlsiY3J1ZEVudGl0eSIsIndhdGNoRmV0Y2giLCJ3YXRjaEZldGNoT25lIiwid2F0Y2hDcmVhdGUiLCJ3YXRjaFVwZGF0ZSIsIndhdGNoRGVsZXRlIiwiYXhpb3MiLCJhbGwiLCJ0YWtlRXZlcnkiLCJwdXQiLCJjYWxsIiwidGFrZSIsImZvcmsiLCJDUlVEIiwiU2Vzc2lvbiIsImNydWRBcGkiLCJtZXRob2QiLCJ1cmwiLCJjc3JmIiwicGFyYW1zIiwiZGF0YSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsIm1ldGEiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImZldGNoZWRBdCIsIkRhdGUiLCJub3ciLCJzZXNzaW9uRGF0YSIsInNlc3Npb24iLCJjc3JmVG9rZW4iLCJyZXNwb25zZSIsInR5cGUiLCJlcnJvciIsIkZFVENIIiwiRkVUQ0hfT05FIiwiQ1JFQVRFIiwiVVBEQVRFIiwiREVMRVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLLEFBQVcsQUFBSyxBQUFNLEFBQU07O0FBQzFDLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7O3NEQWFHLEE7dURBa0JBLEE7dUQsQUFPQTt1RCxBQU9BO3VEQU9BLEE7dURBT0EsQTs7O0FBekRWLElBQU0sVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFDLFFBQUQsQUFBUyxLQUFULEFBQWMsTUFBaUM7aUZBQVIsQUFBUTtNQUF6QixBQUF5QixjQUF6QixBQUF5QjtNQUFqQixBQUFpQixZQUFqQixBQUFpQixBQUM3RDs7O2FBQWEsQUFDRixBQUNUO2FBQVMsRUFBRSxnQkFGQSxBQUVGLEFBQWtCLEFBQzNCO1lBSFcsQUFJWDtTQUpXLEFBS1g7WUFMVyxBQU1YO1VBTkYsQUFBTyxBQUFNLEFBUWQ7QUFSYyxBQUNYLEdBREs7QUFEVDs7QUFXQSxTQUFBLEFBQVUsV0FBVixBQUFxQixRQUFyQjsyR0FBQTs7bUVBQUE7Y0FBQTt1Q0FBQTthQUFBOzRCQUN3QyxPQUR4QyxBQUMrQyxTQUQvQyxBQUNVLHlCQURWLEFBQ1UsUUFEVixBQUNrQixzQkFEbEIsQUFDa0IsS0FEbEIsQUFDdUIseUJBRHZCLEFBQ3VCLFFBRHZCLEFBQytCLHVCQUQvQixBQUMrQjt5QkFDQSxPQUYvQixBQUVzQyxNQUZ0QyxBQUVVLHVCQUZWLEFBRVUsU0FGVixBQUVtQix1QkFGbkIsQUFFbUIsQUFDWDtBQUhSLDRDQUlPLE9BSlAsQUFJYzt1QkFDQyxLQUxmLEFBS2UsQUFBSztBQUFoQjswQkFJTTtBQVRWLHdCQUFBLEFBU3dCLEFBQUksQUFDbEI7QUFWVixpQkFVaUIsQ0FBQyxDQUFDLGVBQUQsQUFBZ0IsSUFBaEIsQUFBb0IsV0FBckIsQUFBZ0MsSUFWakQsQUFVcUQ7MEJBVnJEO2lCQVcyQixtQkFBQSxBQUFLLFNBQUwsQUFBYyxRQUFkLEFBQXNCLEtBQXRCLEFBQTJCLE1BQU0sRUFBRSxRQUFGLFFBQVUsTUFYdEUsQUFXMkIsQUFBaUM7O2FBQWxEO0FBWFYsOEJBQUE7MEJBQUE7aUJBWVUsa0JBQUksRUFBRSxNQUFGLE1BQVEsTUFBUixBQUFjLFNBQVMsU0FackMsQUFZVSxBQUFJLEFBQWdDOzthQVo5QzswQkFBQTtBQUFBOzthQUFBOzBCQUFBOzBDQUFBOzBCQUFBO2lCQWNVLGtCQUFJLEVBQUUsTUFBRixNQUFRLE1BQVIsQUFBYyxTQUFTLGtCQUF2QixJQUF1QyxPQWRyRCxBQWNVLEFBQUksQUFBOEM7O2FBZDVEO2FBQUE7MEJBQUE7O0FBQUE7eUJBQUE7OztBQWtCQSxTQUFBLEFBQVUsYUFBVjtNQUFBO29FQUFBO2NBQUE7eUNBQUE7YUFBQTtlQUFBLEFBQ1EsTUFEUjs2QkFBQTtBQUFBO0FBQUE7OzJCQUFBO2lCQUV5QixtQkFBSyxjQUY5QixBQUV5QixBQUFVOzthQUF6QjtBQUZWLDZCQUFBOzJCQUFBO2lCQUdVLG1CQUFBLEFBQUssWUFIZixBQUdVLEFBQWlCOzthQUgzQjsyQkFBQTtBQUFBOzthQUFBO2FBQUE7MkJBQUE7O0FBQUE7ZUFBQTs7O0FBT0EsU0FBQSxBQUFVLGdCQUFWO01BQUE7dUVBQUE7Y0FBQTt5Q0FBQTthQUFBO2VBQUEsQUFDUSxNQURSOzZCQUFBO0FBQUE7QUFBQTs7MkJBQUE7aUJBRXlCLG1CQUFLLGNBRjlCLEFBRXlCLEFBQVU7O2FBQXpCO0FBRlYsNkJBQUE7MkJBQUE7aUJBR1UsbUJBQUEsQUFBSyxZQUhmLEFBR1UsQUFBaUI7O2FBSDNCOzJCQUFBO0FBQUE7O2FBQUE7YUFBQTsyQkFBQTs7QUFBQTtlQUFBOzs7QUFPQSxTQUFBLEFBQVUsY0FBVjtNQUFBO3FFQUFBO2NBQUE7eUNBQUE7YUFBQTtlQUFBLEFBQ1EsTUFEUjs2QkFBQTtBQUFBO0FBQUE7OzJCQUFBO2lCQUV5QixtQkFBSyxjQUY5QixBQUV5QixBQUFVOzthQUF6QjtBQUZWLDZCQUFBOzJCQUFBO2lCQUdVLG1CQUFBLEFBQUssWUFIZixBQUdVLEFBQWlCOzthQUgzQjsyQkFBQTtBQUFBOzthQUFBO2FBQUE7MkJBQUE7O0FBQUE7ZUFBQTs7O0FBT0EsU0FBQSxBQUFVLGNBQVY7TUFBQTtxRUFBQTtjQUFBO3lDQUFBO2FBQUE7ZUFBQSxBQUNRLE1BRFI7NkJBQUE7QUFBQTtBQUFBOzsyQkFBQTtpQkFFeUIsbUJBQUssY0FGOUIsQUFFeUIsQUFBVTs7YUFBekI7QUFGViw2QkFBQTsyQkFBQTtpQkFHVSxtQkFBQSxBQUFLLFlBSGYsQUFHVSxBQUFpQjs7YUFIM0I7MkJBQUE7QUFBQTs7YUFBQTthQUFBOzJCQUFBOztBQUFBO2VBQUE7OztBQU9BLFNBQUEsQUFBVSxjQUFWO01BQUE7cUVBQUE7Y0FBQTt5Q0FBQTthQUFBO2VBQUEsQUFDUSxNQURSOzZCQUFBO0FBQUE7QUFBQTs7MkJBQUE7aUJBRXlCLG1CQUFLLGNBRjlCLEFBRXlCLEFBQVU7O2FBQXpCO0FBRlYsNkJBQUE7MkJBQUE7aUJBR1UsbUJBQUEsQUFBSyxZQUhmLEFBR1UsQUFBaUI7O2FBSDNCOzJCQUFBO0FBQUE7O2FBQUE7YUFBQTsyQkFBQTs7QUFBQTtlQUFBO0FBT0E7O0FBQWUsbUJBQUE7aUVBQUE7Y0FBQTt5Q0FBQTthQUFBOzJCQUFBO2lCQUNQLGtCQUFJLENBQ1IsbUJBRFEsQUFDUixBQUFLLGFBQ0wsbUJBRlEsQUFFUixBQUFLLGdCQUNMLG1CQUhRLEFBR1IsQUFBSyxjQUNMLG1CQUpRLEFBSVIsQUFBSyxjQUNMLG1CQU5XLEFBQ1AsQUFBSSxBQUtSLEFBQUs7O2FBTk07YUFBQTsyQkFBQTs7QUFBQTtlQUFBIiwiZmlsZSI6InNhZ2FzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9