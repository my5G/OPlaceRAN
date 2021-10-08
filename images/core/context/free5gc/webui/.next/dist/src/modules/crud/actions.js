'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CRUD = exports.CRUD = {
  FETCH: 'crud/FETCH',
  FETCH_SUCCESS: 'crud/FETCH_SUCCESS',
  FETCH_FAILURE: 'crud/FETCH_FAILURE',
  FETCH_ONE: 'crud/FETCH_ONE',
  FETCH_ONE_SUCCESS: 'crud/FETCH_ONE_SUCCESS',
  FETCH_ONE_FAILURE: 'crud/FETCH_ONE_FAILURE',
  CREATE: 'crud/CREATE',
  CREATE_SUCCESS: 'crud/CREATE_SUCCESS',
  CREATE_FAILURE: 'crud/CREATE_FAILURE',
  UPDATE: 'crud/UPDATE',
  UPDATE_SUCCESS: 'crud/UPDATE_SUCCESS',
  UPDATE_FAILURE: 'crud/UPDATE_FAILURE',
  DELETE: 'crud/DELETE',
  DELETE_SUCCESS: 'crud/DELETE_SUCCESS',
  DELETE_FAILURE: 'crud/DELETE_FAILURE',
  CLEAR_ACTION_STATUS: 'crud/CLEAR_ACTION_STATUS'
};

var fetchCollection = exports.fetchCollection = function fetchCollection(model, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.FETCH,
    meta: {
      success: CRUD.FETCH_SUCCESS,
      failure: CRUD.FETCH_FAILURE,
      model: model,
      idProperty: idProperty,
      params: params
    },
    payload: {
      method: 'get',
      url: url,
      params: params
    }
  };
};

var fetchDocument = exports.fetchDocument = function fetchDocument(model, id, url) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.FETCH_ONE,
    meta: {
      success: CRUD.FETCH_ONE_SUCCESS,
      failure: CRUD.FETCH_ONE_FAILURE,
      model: model,
      idProperty: idProperty,
      id: id
    },
    payload: {
      method: 'get',
      url: url,
      params: params
    }
  };
};

var createDocument = exports.createDocument = function createDocument(model, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.CREATE,
    meta: {
      success: CRUD.CREATE_SUCCESS,
      failure: CRUD.CREATE_FAILURE,
      model: model,
      idProperty: idProperty
    },
    payload: {
      method: 'post',
      url: url,
      params: params,
      data: data
    }
  };
};

var updateDocument = exports.updateDocument = function updateDocument(model, id, url) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.UPDATE,
    meta: {
      success: CRUD.UPDATE_SUCCESS,
      failure: CRUD.UPDATE_FAILURE,
      model: model,
      idProperty: idProperty,
      id: id
    },
    payload: {
      method: 'patch',
      url: url,
      params: params,
      data: data
    }
  };
};

var deleteDocument = exports.deleteDocument = function deleteDocument(model, id, url) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.DELETE,
    meta: {
      success: CRUD.DELETE_SUCCESS,
      failure: CRUD.DELETE_FAILURE,
      model: model,
      idProperty: idProperty,
      id: id
    },
    payload: {
      method: 'delete',
      url: url,
      params: params
    }
  };
};

var clearActionStatus = exports.clearActionStatus = function clearActionStatus(model, action) {
  return {
    type: CRUD.CLEAR_ACTION_STATUS,
    payload: { model: model, action: action }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJDUlVEIiwiRkVUQ0giLCJGRVRDSF9TVUNDRVNTIiwiRkVUQ0hfRkFJTFVSRSIsIkZFVENIX09ORSIsIkZFVENIX09ORV9TVUNDRVNTIiwiRkVUQ0hfT05FX0ZBSUxVUkUiLCJDUkVBVEUiLCJDUkVBVEVfU1VDQ0VTUyIsIkNSRUFURV9GQUlMVVJFIiwiVVBEQVRFIiwiVVBEQVRFX1NVQ0NFU1MiLCJVUERBVEVfRkFJTFVSRSIsIkRFTEVURSIsIkRFTEVURV9TVUNDRVNTIiwiREVMRVRFX0ZBSUxVUkUiLCJDTEVBUl9BQ1RJT05fU1RBVFVTIiwiZmV0Y2hDb2xsZWN0aW9uIiwibW9kZWwiLCJ1cmwiLCJwYXJhbXMiLCJvcHRpb25zIiwiaWRQcm9wZXJ0eSIsInR5cGUiLCJtZXRhIiwic3VjY2VzcyIsImZhaWx1cmUiLCJwYXlsb2FkIiwibWV0aG9kIiwiZmV0Y2hEb2N1bWVudCIsImlkIiwiY3JlYXRlRG9jdW1lbnQiLCJkYXRhIiwidXBkYXRlRG9jdW1lbnQiLCJkZWxldGVEb2N1bWVudCIsImNsZWFyQWN0aW9uU3RhdHVzIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU07U0FBTyxBQUNYLEFBQ1A7aUJBRmtCLEFBRUgsQUFDZjtpQkFIa0IsQUFHSCxBQUNmO2FBSmtCLEFBSVAsQUFDWDtxQkFMa0IsQUFLQyxBQUNuQjtxQkFOa0IsQUFNQyxBQUNuQjtVQVBrQixBQU9WLEFBQ1I7a0JBUmtCLEFBUUYsQUFDaEI7a0JBVGtCLEFBU0YsQUFDaEI7VUFWa0IsQUFVVixBQUNSO2tCQVhrQixBQVdGLEFBQ2hCO2tCQVprQixBQVlGLEFBQ2hCO1VBYmtCLEFBYVYsQUFDUjtrQkFka0IsQUFjRixBQUNoQjtrQkFma0IsQUFlRixBQUNoQjt1QkFoQkssQUFBYSxBQWdCRyxBQUd2QjtBQW5Cb0IsQUFDbEI7O0FBa0JLLElBQU0sNENBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBRCxBQUFRLEtBQW1DO01BQTlCLEFBQThCLDZFQUFyQixBQUFxQjtNQUFqQixBQUFpQiw4RUFBUCxBQUFPLEFBQ3hFOztNQUFNLGFBQWEsUUFBQSxBQUFRLGNBQTNCLEFBQXlDLEFBQ3pDOztVQUNRLEtBREQsQUFDTSxBQUNYOztlQUNXLEtBREwsQUFDVSxBQUNkO2VBQVMsS0FGTCxBQUVVLEFBQ2Q7YUFISSxBQUlKO2tCQUpJLEFBS0o7Y0FQRyxBQUVDLEFBT047QUFQTSxBQUNKOztjQU1PLEFBQ0MsQUFDUjtXQUZPLEFBR1A7Y0FaSixBQUFPLEFBU0ksQUFNWjtBQU5ZLEFBQ1A7QUFWRyxBQUNMO0FBSEcsQUFtQlA7O0FBQU8sSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLE9BQUQsQUFBUSxJQUFSLEFBQVksS0FBbUM7TUFBOUIsQUFBOEIsNkVBQXJCLEFBQXFCO01BQWpCLEFBQWlCLDhFQUFQLEFBQU8sQUFDMUU7O01BQU0sYUFBYSxRQUFBLEFBQVEsY0FBM0IsQUFBeUMsQUFDekM7O1VBQ1EsS0FERCxBQUNNLEFBQ1g7O2VBQ1csS0FETCxBQUNVLEFBQ2Q7ZUFBUyxLQUZMLEFBRVUsQUFDZDthQUhJLEFBSUo7a0JBSkksQUFLSjtVQVBHLEFBRUMsQUFPTjtBQVBNLEFBQ0o7O2NBTU8sQUFDQyxBQUNSO1dBRk8sQUFHUDtjQVpKLEFBQU8sQUFTSSxBQU1aO0FBTlksQUFDUDtBQVZHLEFBQ0w7QUFIRyxBQW1CUDs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsT0FBRCxBQUFRLEtBQThDO01BQXpDLEFBQXlDLDZFQUFoQyxBQUFnQztNQUE1QixBQUE0QiwyRUFBckIsQUFBcUI7TUFBakIsQUFBaUIsOEVBQVAsQUFBTyxBQUNsRjs7TUFBTSxhQUFhLFFBQUEsQUFBUSxjQUEzQixBQUF5QyxBQUN6Qzs7VUFDUSxLQURELEFBQ00sQUFDWDs7ZUFDVyxLQURMLEFBQ1UsQUFDZDtlQUFTLEtBRkwsQUFFVSxBQUNkO2FBSEksQUFJSjtrQkFORyxBQUVDLEFBTU47QUFOTSxBQUNKOztjQUtPLEFBQ0MsQUFDUjtXQUZPLEFBR1A7Y0FITyxBQUlQO1lBWkosQUFBTyxBQVFJLEFBT1o7QUFQWSxBQUNQO0FBVEcsQUFDTDtBQUhHLEFBbUJQOztBQUFPLElBQU0sMENBQWlCLFNBQWpCLEFBQWlCLGVBQUEsQUFBQyxPQUFELEFBQVEsSUFBUixBQUFZLEtBQThDO01BQXpDLEFBQXlDLDZFQUFoQyxBQUFnQztNQUE1QixBQUE0QiwyRUFBckIsQUFBcUI7TUFBakIsQUFBaUIsOEVBQVAsQUFBTyxBQUN0Rjs7TUFBTSxhQUFhLFFBQUEsQUFBUSxjQUEzQixBQUF5QyxBQUN6Qzs7VUFDUSxLQURELEFBQ00sQUFDWDs7ZUFDVyxLQURMLEFBQ1UsQUFDZDtlQUFTLEtBRkwsQUFFVSxBQUNkO2FBSEksQUFJSjtrQkFKSSxBQUtKO1VBUEcsQUFFQyxBQU9OO0FBUE0sQUFDSjs7Y0FNTyxBQUNDLEFBQ1I7V0FGTyxBQUdQO2NBSE8sQUFJUDtZQWJKLEFBQU8sQUFTSSxBQU9aO0FBUFksQUFDUDtBQVZHLEFBQ0w7QUFIRyxBQW9CUDs7QUFBTyxJQUFNLDBDQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsT0FBRCxBQUFRLElBQVIsQUFBWSxLQUFtQztNQUE5QixBQUE4Qiw2RUFBckIsQUFBcUI7TUFBakIsQUFBaUIsOEVBQVAsQUFBTyxBQUMzRTs7TUFBTSxhQUFhLFFBQUEsQUFBUSxjQUEzQixBQUF5QyxBQUN6Qzs7VUFDUSxLQURELEFBQ00sQUFDWDs7ZUFDVyxLQURMLEFBQ1UsQUFDZDtlQUFTLEtBRkwsQUFFVSxBQUNkO2FBSEksQUFJSjtrQkFKSSxBQUtKO1VBUEcsQUFFQyxBQU9OO0FBUE0sQUFDSjs7Y0FNTyxBQUNDLEFBQ1I7V0FGTyxBQUdQO2NBWkosQUFBTyxBQVNJLEFBTVo7QUFOWSxBQUNQO0FBVkcsQUFDTDtBQUhHLEFBbUJQOztBQUFPLElBQU0sZ0RBQW9CLFNBQXBCLEFBQW9CLGtCQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVcsQUFDbEQ7O1VBQ1EsS0FERCxBQUNNLEFBQ1g7YUFBUyxFQUFFLE9BQUYsT0FBUyxRQUZwQixBQUFPLEFBRUksQUFFWjtBQUpRLEFBQ0w7QUFGRyIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9