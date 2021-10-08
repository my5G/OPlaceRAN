'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollection = selectCollection;
exports.selectDocument = selectDocument;
exports.select = select;
exports.selectActionStatus = selectActionStatus;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _immutable = require('immutable');

var _lang = require('lodash/lang');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function recent(fetchedAt) {
  if (fetchedAt === null) return false;

  var interval = 10 * 60 * 1000; // 10 minutes
  return Date.now() - interval < fetchedAt;
}

function selectCollection(modelName, crud, params) {
  var model = crud.getIn([modelName], (0, _immutable.Map)());
  var collection = model.get('collections', (0, _immutable.List)()).find(function (collection) {
    return (0, _lang.isEqual)(collection.get('params').toJS(), params);
  });

  var isLoading = function isLoading(_ref) {
    var needsFetch = _ref.needsFetch;
    return (0, _extends3.default)({
      otherInfo: {},
      data: [],
      isLoading: true
    }, collection ? { error: collection.get('error') } : {}, {
      needsFetch: needsFetch
    });
  };

  if (collection === undefined) {
    return isLoading({ needsFetch: true });
  }

  var fetchedAt = collection.get('fetchedAt');
  if (fetchedAt === 0) {
    return isLoading({ needsFetch: false });
  } else if (!recent(fetchedAt)) {
    return isLoading({ needsFetch: true });
  }

  var documentThatNeedsFetch = null;
  collection.get('ids', (0, _immutable.fromJS)([])).forEach(function (id) {
    var document = model.getIn(['byId', id], (0, _immutable.Map)());
    var documentFetchedAt = document.get('fetchedAt');
    if (documentFetchedAt !== 0 && !recent(document.get('fetchedAt'))) {
      documentThatNeedsFetch = document;
      return false;
    }
  });
  if (documentThatNeedsFetch) {
    return isLoading({ needsFetch: true });
  }

  var data = collection.get('ids', (0, _immutable.fromJS)([])).map(function (id) {
    return model.getIn(['byId', id, 'document']);
  }).toJS();

  return (0, _extends3.default)({
    otherInfo: collection.get('otherInfo', (0, _immutable.Map)()).toJS(),
    data: data,
    isLoading: false,
    needsFetch: false
  }, collection ? { error: collection.get('error') } : {});
}

function selectDocument(modelName, id, crud, params) {
  var model = crud.getIn([modelName, 'byId', id]);

  if (model && model.get('fetchedAt') === 0) {
    return {
      isLoading: true,
      needsFetch: false,
      error: new Error('Loading...')
    };
  }

  if (id === undefined || model == undefined || !recent(model.get('fetchedAt'))) {
    return {
      isLoading: true,
      needsFetch: true,
      error: new Error('Loading...')
    };
  }

  if (model.get('error') !== null) {
    return {
      isLoading: false,
      needsFetch: false,
      error: model.get('error')
    };
  }

  return {
    isLoading: false,
    needsFetch: false,
    data: model.get('document').toJS()
  };
}

function select(action, crud) {
  var model = action.meta.model;
  var params = action.meta.params;

  var selection = {};
  switch (action.type) {
    case _actions.CRUD.FETCH:
      selection = selectCollection(model, crud, params);
      break;
    case _actions.CRUD.FETCH_ONE:
      if (action.meta.id === undefined) {
        return selection;
      }
      selection = selectDocument(model, action.meta.id, crud, params);
      break;
    default:
      throw new Error('Action type \'' + action.type + '\' is not a fetch action.');
  }
  selection.fetch = action;
  return selection;
}

function selectActionStatus(modelName, crud, action) {
  var rawStatus = (crud.getIn([modelName, 'actionStatus', action]) || (0, _immutable.fromJS)({})).toJS();
  var _rawStatus$pending = rawStatus.pending,
      pending = _rawStatus$pending === undefined ? false : _rawStatus$pending,
      _rawStatus$id = rawStatus.id,
      id = _rawStatus$id === undefined ? null : _rawStatus$id,
      _rawStatus$isSuccess = rawStatus.isSuccess,
      isSuccess = _rawStatus$isSuccess === undefined ? null : _rawStatus$isSuccess,
      _rawStatus$payload = rawStatus.payload,
      payload = _rawStatus$payload === undefined ? null : _rawStatus$payload;

  if (pending === true) {
    return { id: id, pending: pending };
  }

  if (isSuccess === true) {
    return {
      id: id,
      pending: pending,
      response: payload
    };
  }

  return {
    id: id,
    pending: pending,
    error: payload
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbImZyb21KUyIsIk1hcCIsIkxpc3QiLCJpc0VxdWFsIiwiQ1JVRCIsInJlY2VudCIsImZldGNoZWRBdCIsImludGVydmFsIiwiRGF0ZSIsIm5vdyIsInNlbGVjdENvbGxlY3Rpb24iLCJtb2RlbE5hbWUiLCJjcnVkIiwicGFyYW1zIiwibW9kZWwiLCJnZXRJbiIsImNvbGxlY3Rpb24iLCJnZXQiLCJmaW5kIiwidG9KUyIsImlzTG9hZGluZyIsIm5lZWRzRmV0Y2giLCJvdGhlckluZm8iLCJkYXRhIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJkb2N1bWVudFRoYXROZWVkc0ZldGNoIiwiZm9yRWFjaCIsImlkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEZldGNoZWRBdCIsIm1hcCIsInNlbGVjdERvY3VtZW50IiwiRXJyb3IiLCJzZWxlY3QiLCJhY3Rpb24iLCJtZXRhIiwic2VsZWN0aW9uIiwidHlwZSIsIkZFVENIIiwiRkVUQ0hfT05FIiwiZmV0Y2giLCJzZWxlY3RBY3Rpb25TdGF0dXMiLCJyYXdTdGF0dXMiLCJwZW5kaW5nIiwiaXNTdWNjZXNzIiwicGF5bG9hZCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdPLEFBQVM7UUFtRFQsQUFBUztRQWtDVCxBQUFTO1FBc0JULEFBQVM7Ozs7OztBQXRIaEIsQUFBUyxBQUFRLEFBQUs7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBUzs7OztBQUVULFNBQUEsQUFBUyxPQUFULEFBQWdCLFdBQVcsQUFDekI7TUFBSSxjQUFKLEFBQWtCLE1BQU0sT0FBQSxBQUFPLEFBRS9COztNQUFNLFdBQVcsS0FBQSxBQUFLLEtBSEcsQUFHekIsQUFBMkIsTUFBTSxBQUNqQztTQUFTLEtBQUEsQUFBSyxRQUFOLEFBQWMsV0FBdEIsQUFBa0MsQUFDbkM7QUFFRDs7QUFBTywwQkFBQSxBQUEwQixXQUExQixBQUFxQyxNQUFyQyxBQUEyQyxRQUFRLEFBQ3hEO01B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LFFBQVEsQUFDMUQ7TUFBTSxZQUFZLENBQUMsS0FBQSxBQUFLLE1BQU0sQ0FBQSxBQUFDLFdBQUQsQUFBWSxnQkFBdkIsQUFBVyxBQUE0QixZQUFZLHVCQUFwRCxBQUFvRCxBQUFPLEtBRG5CLEFBQzFELEFBQWtCLEFBQWdFOzJCQUR4QixBQUVlLFVBRmYsQUFFbEQ7TUFGa0QsQUFFbEQsNkNBRmtELEFBRXhDLFFBRndDO3NCQUFBLEFBRWUsVUFGZixBQUVqQztNQUZpQyxBQUVqQyxtQ0FGaUMsQUFFNUIsT0FGNEI7NkJBQUEsQUFFZSxVQUZmLEFBRXRCO01BRnNCLEFBRXRCLGlEQUZzQixBQUVWLE9BRlU7MkJBQUEsQUFFZSxVQUZmLEFBRUo7TUFGSSxBQUVKLDZDQUZJLEFBRU0sT0FFaEU7O01BQUksWUFBSixBQUFnQixNQUFNLEFBQ3BCO1dBQU8sRUFBRSxJQUFGLElBQU0sU0FBYixBQUFPLEFBQ1I7QUFFRDs7TUFBSSxjQUFKLEFBQWtCLE1BQU0sQUFDdEI7O1VBQU8sQUFFTDtlQUZLLEFBR0w7Z0JBSEYsQUFBTyxBQUdLLEFBRWI7QUFMUSxBQUNMO0FBTUo7OztRQUFPLEFBRUw7YUFGSyxBQUdMO1dBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMIiwiZmlsZSI6InNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==