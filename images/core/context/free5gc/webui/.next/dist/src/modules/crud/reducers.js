'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

var _immutable = require('immutable');

var _lang = require('lodash/lang');

var byIdInitialState = (0, _immutable.fromJS)({});
var collectionInitialState = (0, _immutable.fromJS)({
  params: {},
  otherInfo: {},
  ids: [],
  fetchedAt: null,
  error: null
});

var collectionsInitialState = (0, _immutable.fromJS)([]);

var actionStatusInitialState = (0, _immutable.fromJS)({
  create: {},
  update: {},
  delete: {}
});

var modelInitialState = (0, _immutable.fromJS)({
  byId: byIdInitialState,
  collections: collectionsInitialState,
  actionStatus: actionStatusInitialState
});

var initialState = (0, _immutable.fromJS)({});

function byIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : byIdInitialState;
  var action = arguments[1];

  var idProperty = action.meta ? action.meta.idProperty : '_id';
  var id = action.meta ? action.meta.id : undefined;
  switch (action.type) {
    case _actions.CRUD.FETCH_SUCCESS:
      var data = state.toJS();
      action.payload.data.forEach(function (document) {
        data[document[idProperty]] = {
          document: document,
          fetchedAt: action.meta.fetchedAt,
          error: null
        };
      });
      return (0, _immutable.fromJS)(data);
    case _actions.CRUD.FETCH_ONE:
      return state.setIn([id, 'fetchedAt'], 0).setIn([id, 'error'], null);
    case _actions.CRUD.FETCH_ONE_SUCCESS:
      return state.setIn([id, 'fetchedAt'], action.meta.fetchedAt).setIn([id, 'error'], null).setIn([id, 'document'], (0, _immutable.fromJS)(action.payload.data));
    case _actions.CRUD.FETCH_ONE_FAILURE:
      return state.setIn([id, 'fetchedAt'], action.meta.fetchedAt).setIn([id, 'error'], action.payload).setIn([id, 'document'], null);
    case _actions.CRUD.CREATE_SUCCESS:
      return state.set(action.payload.data[idProperty], (0, _immutable.fromJS)({
        document: action.payload.data,
        fetchedAt: action.meta.fetchedAt,
        error: null
      }));
    case _actions.CRUD.UPDATE:
      return state.setIn([id, 'fetchedAt'], 0);
    case _actions.CRUD.UPDATE_SUCCESS:
      return state.set(id, (0, _immutable.fromJS)({
        document: action.payload.data,
        fetchedAt: action.meta.fetchedAt,
        error: null
      }));
    case _actions.CRUD.DELETE_SUCCESS:
      return state.delete(id);
    default:
      return state;
  }
}

function collectionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : collectionInitialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CRUD.FETCH:
      return state.set('params', (0, _immutable.fromJS)(action.meta.params)).set('fetchedAt', 0).set('error', null);
    case _actions.CRUD.FETCH_SUCCESS:
      var idProperty = action.meta ? action.meta.idProperty : '_id';
      var data = action.payload.data;
      var ids = data.map(function (document) {
        return document[idProperty];
      });
      return state.set('params', (0, _immutable.fromJS)(action.meta.params)).set('ids', (0, _immutable.fromJS)(ids)).set('otherInfo', (0, _immutable.fromJS)(action.payload).delete('data')).set('error', null).set('fetchedAt', action.meta.fetchedAt);
    case _actions.CRUD.FETCH_FAILURE:
      return state.set('params', (0, _immutable.fromJS)(action.meta.params)).set('error', action.payload);
    default:
      return state;
  }
}

function collectionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : collectionsInitialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CRUD.FETCH:
    case _actions.CRUD.FETCH_SUCCESS:
    case _actions.CRUD.FETCH_FAILURE:
      var index = state.findIndex(function (collection) {
        return (0, _lang.isEqual)(collection.toJS().params, action.meta.params);
      });
      if (index < 0) {
        return state.push(collectionReducer(undefined, action));
      }
      return state.update(index, function (s) {
        return collectionReducer(s, action);
      });
    case _actions.CRUD.CREATE_SUCCESS:
      var idProperty = action.meta ? action.meta.idProperty : '_id';
      /* At this point, the ID is stored in the 0-index collection.
         Later you will need to find the collection to which you want to add the ID. */
      return state.update(0, function (item) {
        return item.set('ids', item.get('ids').push(action.payload.data[idProperty]));
      });
    case _actions.CRUD.DELETE_SUCCESS:
      var id = action.meta ? action.meta.id : undefined;
      /* Find ID from all collections and delete them if they exist. */
      return state.map(function (item, idx) {
        return item.set('ids', item.get('ids').filter(function (x) {
          return x !== id;
        }));
      });
    default:
      return state;
  }
}

function actionStatusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : actionStatusInitialState;
  var action = arguments[1];

  var idProperty = action.meta ? action.meta.idProperty : '_id';
  var id = action.meta ? action.meta.id : undefined;
  switch (action.type) {
    case _actions.CRUD.CLEAR_ACTION_STATUS:
      return state.set(action.payload.action, (0, _immutable.fromJS)({}));
    case _actions.CRUD.CREATE:
      return state.set('create', (0, _immutable.fromJS)({
        pending: true,
        id: null
      }));
    case _actions.CRUD.CREATE_SUCCESS:
      return state.set('create', (0, _immutable.fromJS)({
        pending: false,
        id: action.payload.data[idProperty],
        isSuccess: !action.error,
        payload: action.payload
      }));
    case _actions.CRUD.CREATE_FAILURE:
      return state.set('create', (0, _immutable.fromJS)({
        pending: false,
        id: null,
        isSuccess: !action.error,
        payload: action.payload
      }));
    case _actions.CRUD.UPDATE:
      return state.set('update', (0, _immutable.fromJS)({
        pending: true,
        id: id
      }));
    case _actions.CRUD.UPDATE_SUCCESS:
    case _actions.CRUD.UPDATE_FAILURE:
      return state.set('update', (0, _immutable.fromJS)({
        pending: false,
        id: id,
        isSuccess: !action.error,
        payload: action.payload
      }));
    case _actions.CRUD.DELETE:
      return state.set('delete', (0, _immutable.fromJS)({
        pending: true,
        id: id
      }));
    case _actions.CRUD.DELETE_SUCCESS:
    case _actions.CRUD.DELETE_FAILURE:
      return state.set('delete', (0, _immutable.fromJS)({
        pending: false,
        id: id,
        isSuccess: !action.error,
        payload: action.payload
      }));
    default:
      return state;
  }
}

function crud() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CRUD.FETCH:
    case _actions.CRUD.FETCH_SUCCESS:
    case _actions.CRUD.FETCH_FAILURE:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'collections'], function (s) {
        return collectionsReducer(s, action);
      });
    case _actions.CRUD.FETCH_ONE:
    case _actions.CRUD.FETCH_ONE_SUCCESS:
    case _actions.CRUD.FETCH_ONE_FAILURE:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      });
    case _actions.CRUD.CREATE:
    case _actions.CRUD.CREATE_FAILURE:
      return state.updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.CREATE_SUCCESS:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'collections'], (0, _immutable.fromJS)([]), function (s) {
        return collectionsReducer(s, action);
      }).updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.UPDATE:
    case _actions.CRUD.UPDATE_SUCCESS:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.UPDATE_FAILURE:
      return state.updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.DELETE:
    case _actions.CRUD.DELETE_FAILURE:
      return state.updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.DELETE_SUCCESS:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'collections'], (0, _immutable.fromJS)([]), function (s) {
        return collectionsReducer(s, action);
      }).updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.CLEAR_ACTION_STATUS:
      return state.updateIn([action.payload.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    default:
      return state;
  }
}

exports.default = crud;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvcmVkdWNlcnMuanMiXSwibmFtZXMiOlsiQ1JVRCIsImZyb21KUyIsInRvSlMiLCJpc0VxdWFsIiwiYnlJZEluaXRpYWxTdGF0ZSIsImNvbGxlY3Rpb25Jbml0aWFsU3RhdGUiLCJwYXJhbXMiLCJvdGhlckluZm8iLCJpZHMiLCJmZXRjaGVkQXQiLCJlcnJvciIsImNvbGxlY3Rpb25zSW5pdGlhbFN0YXRlIiwiYWN0aW9uU3RhdHVzSW5pdGlhbFN0YXRlIiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIiwibW9kZWxJbml0aWFsU3RhdGUiLCJieUlkIiwiY29sbGVjdGlvbnMiLCJhY3Rpb25TdGF0dXMiLCJpbml0aWFsU3RhdGUiLCJieUlkUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaWRQcm9wZXJ0eSIsIm1ldGEiLCJpZCIsInVuZGVmaW5lZCIsInR5cGUiLCJGRVRDSF9TVUNDRVNTIiwiZGF0YSIsInBheWxvYWQiLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJGRVRDSF9PTkUiLCJzZXRJbiIsIkZFVENIX09ORV9TVUNDRVNTIiwiRkVUQ0hfT05FX0ZBSUxVUkUiLCJDUkVBVEVfU1VDQ0VTUyIsInNldCIsIlVQREFURSIsIlVQREFURV9TVUNDRVNTIiwiREVMRVRFX1NVQ0NFU1MiLCJjb2xsZWN0aW9uUmVkdWNlciIsIkZFVENIIiwibWFwIiwiRkVUQ0hfRkFJTFVSRSIsImNvbGxlY3Rpb25zUmVkdWNlciIsImluZGV4IiwiZmluZEluZGV4IiwiY29sbGVjdGlvbiIsInB1c2giLCJzIiwiaXRlbSIsImdldCIsImlkeCIsImZpbHRlciIsIngiLCJhY3Rpb25TdGF0dXNSZWR1Y2VyIiwiQ0xFQVJfQUNUSU9OX1NUQVRVUyIsIkNSRUFURSIsInBlbmRpbmciLCJpc1N1Y2Nlc3MiLCJDUkVBVEVfRkFJTFVSRSIsIlVQREFURV9GQUlMVVJFIiwiREVMRVRFIiwiREVMRVRFX0ZBSUxVUkUiLCJjcnVkIiwidXBkYXRlSW4iLCJtb2Rl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VUFBQSxBQUFDLEdBQUQ7ZUFBTyxZQUFBLEFBQVksR0FBbkIsQUFBTyxBQUFlO0FBRHJDLE9BQUEsRUFBQSxBQUVNLFNBQVMsQ0FBQyxPQUFBLEFBQU8sS0FBUixBQUFhLE9BRjVCLEFBRWUsQUFBb0IsZ0JBQ3BCLHVCQUhmLEFBR2UsQUFBTyxLQUNQLFVBQUEsQUFBQyxHQUFEO2VBQU8sbUJBQUEsQUFBbUIsR0FBMUIsQUFBTyxBQUFzQjtBQUo1QyxTQUFBLEFBS00sU0FBUyxDQUFDLE9BQUEsQUFBTyxLQUFSLEFBQWEsT0FMNUIsQUFLZSxBQUFvQixpQkFDcEIsVUFBQSxBQUFDLEdBQUQ7ZUFBTyxvQkFBQSxBQUFvQixHQUEzQixBQUFPLEFBQXVCO0FBTnBELEFBQU8sQUFPVDtTQUFLLGNBQUwsQUFBVSxBQUNSO21CQUFPLEFBQU0sU0FBUyxDQUFDLE9BQUEsQUFBTyxRQUFSLEFBQWdCLE9BQS9CLEFBQWUsQUFBdUIsaUJBQ3ZCLFVBQUEsQUFBQyxHQUFEO2VBQU8sb0JBQUEsQUFBb0IsR0FBM0IsQUFBTyxBQUF1QjtBQURwRCxBQUFPLEFBRVQsT0FGUztBQUdQO2FBbERKLEFBa0RJLEFBQU8sQUFFWjs7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==