'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAccount = exports.updateAccount = exports.createAccount = exports.fetchAccount = exports.fetchAccounts = exports.URL = exports.MODEL = undefined;

var _actions = require('./actions');

var MODEL = exports.MODEL = 'accounts';
var URL = exports.URL = '/Account';

var fetchAccounts = exports.fetchAccounts = function fetchAccounts() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _actions.fetchCollection)(MODEL, URL, params, { idProperty: 'username' });
};

var fetchAccount = exports.fetchAccount = function fetchAccount(username) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.fetchDocument)(MODEL, username, URL + '/' + username, params, { idProperty: 'username' });
};

var createAccount = exports.createAccount = function createAccount() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.createDocument)(MODEL, URL, params, data, { idProperty: 'username' });
};

var updateAccount = exports.updateAccount = function updateAccount(username) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _actions.updateDocument)(MODEL, username, URL + '/' + username, params, data, { idProperty: 'username' });
};

var deleteAccount = exports.deleteAccount = function deleteAccount(username) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.deleteDocument)(MODEL, username, URL + '/' + username, params, { idProperty: 'username' });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJmZXRjaENvbGxlY3Rpb24iLCJmZXRjaERvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiTU9ERUwiLCJVUkwiLCJmZXRjaEFjY291bnRzIiwicGFyYW1zIiwiaWRQcm9wZXJ0eSIsImZldGNoQWNjb3VudCIsInVzZXJuYW1lIiwiY3JlYXRlQWNjb3VudCIsImRhdGEiLCJ1cGRhdGVBY2NvdW50IiwiZGVsZXRlQWNjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQ0UsQUFERixBQUVFLEFBRkYsQUFHRSxBQUhGLEFBSUUsQUFKRixBQUtFLEFBTEYsQUFRQTs7QUFBTyxJQUFNLHdCQUFRLEFBQWQsQUFDUDtBQUFPLElBQU0sb0JBQU0sQUFBWixBQUVQOztBQUFPLElBQU0sd0NBQWdCLFNBQWhCLEFBQWdCLGdCQUFpQjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQzVDOztTQUFPLDhCQUFnQixBQUFoQixPQUF1QixBQUF2QixLQUE0QixBQUE1QixRQUFvQyxFQUFFLFlBQVksQUFBZCxBQUFwQyxBQUFQLEFBQ0Q7QUFGTSxBQUlQOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGFBQUMsQUFBRCxVQUEyQjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQ3JEOztTQUFPLDRCQUFjLEFBQWQsT0FBcUIsQUFBckIsVUFBa0MsQUFBbEMsWUFBeUMsQUFBekMsVUFBcUQsQUFBckQsUUFBNkQsRUFBRSxZQUFZLEFBQWQsQUFBN0QsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixnQkFBNEI7TUFBM0IsQUFBMkIsNkVBQWxCLEFBQWtCO01BQWQsQUFBYywyRUFBUCxBQUFPLEFBQ3ZEOztTQUFPLDZCQUFlLEFBQWYsT0FBc0IsQUFBdEIsS0FBMkIsQUFBM0IsUUFBbUMsQUFBbkMsTUFBeUMsRUFBRSxZQUFZLEFBQWQsQUFBekMsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFDLEFBQUQsVUFBc0M7TUFBM0IsQUFBMkIsNkVBQWxCLEFBQWtCO01BQWQsQUFBYywyRUFBUCxBQUFPLEFBQ2pFOztTQUFPLDZCQUFlLEFBQWYsT0FBc0IsQUFBdEIsVUFBbUMsQUFBbkMsWUFBMEMsQUFBMUMsVUFBc0QsQUFBdEQsUUFBOEQsQUFBOUQsTUFBb0UsRUFBRSxZQUFZLEFBQWQsQUFBcEUsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFDLEFBQUQsVUFBMkI7TUFBaEIsQUFBZ0IsNkVBQVAsQUFBTyxBQUN0RDs7U0FBTyw2QkFBZSxBQUFmLE9BQXNCLEFBQXRCLFVBQW1DLEFBQW5DLFlBQTBDLEFBQTFDLFVBQXNELEFBQXRELFFBQThELEVBQUUsWUFBWSxBQUFkLEFBQTlELEFBQVAsQUFDRDtBQUZNIiwiZmlsZSI6ImFjY291bnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=