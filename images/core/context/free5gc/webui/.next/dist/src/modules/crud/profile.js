'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.updateProfile = exports.createProfile = exports.fetchProfile = exports.fetchProfiles = exports.URL = exports.MODEL = undefined;

var _actions = require('./actions');

var MODEL = exports.MODEL = 'profiles';
var URL = exports.URL = '/Profile';

var fetchProfiles = exports.fetchProfiles = function fetchProfiles() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _actions.fetchCollection)(MODEL, URL, params);
};

var fetchProfile = exports.fetchProfile = function fetchProfile(_id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.fetchDocument)(MODEL, _id, URL + '/' + _id, params);
};

var createProfile = exports.createProfile = function createProfile() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.createDocument)(MODEL, URL, params, data);
};

var updateProfile = exports.updateProfile = function updateProfile(_id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _actions.updateDocument)(MODEL, _id, URL + '/' + _id, params, data);
};

var deleteProfile = exports.deleteProfile = function deleteProfile(_id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.deleteDocument)(MODEL, _id, URL + '/' + _id, params);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaENvbGxlY3Rpb24iLCJmZXRjaERvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiTU9ERUwiLCJVUkwiLCJmZXRjaFByb2ZpbGVzIiwicGFyYW1zIiwiZmV0Y2hQcm9maWxlIiwiX2lkIiwiY3JlYXRlUHJvZmlsZSIsImRhdGEiLCJ1cGRhdGVQcm9maWxlIiwiZGVsZXRlUHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQ0UsQUFERixBQUVFLEFBRkYsQUFHRSxBQUhGLEFBSUUsQUFKRixBQUtFLEFBTEYsQUFRQTs7QUFBTyxJQUFNLHdCQUFRLEFBQWQsQUFDUDtBQUFPLElBQU0sb0JBQU0sQUFBWixBQUVQOztBQUFPLElBQU0sd0NBQWdCLFNBQWhCLEFBQWdCLGdCQUFpQjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQzVDOztTQUFPLDhCQUFnQixBQUFoQixPQUF1QixBQUF2QixLQUE0QixBQUE1QixBQUFQLEFBQ0Q7QUFGTSxBQUlQOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGFBQUMsQUFBRCxLQUFzQjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQ2hEOztTQUFPLDRCQUFjLEFBQWQsT0FBcUIsQUFBckIsS0FBNkIsQUFBN0IsWUFBb0MsQUFBcEMsS0FBMkMsQUFBM0MsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixnQkFBNEI7TUFBM0IsQUFBMkIsNkVBQWxCLEFBQWtCO01BQWQsQUFBYywyRUFBUCxBQUFPLEFBQ3ZEOztTQUFPLDZCQUFlLEFBQWYsT0FBc0IsQUFBdEIsS0FBMkIsQUFBM0IsUUFBbUMsQUFBbkMsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFDLEFBQUQsS0FBaUM7TUFBM0IsQUFBMkIsNkVBQWxCLEFBQWtCO01BQWQsQUFBYywyRUFBUCxBQUFPLEFBQzVEOztTQUFPLDZCQUFlLEFBQWYsT0FBc0IsQUFBdEIsS0FBOEIsQUFBOUIsWUFBcUMsQUFBckMsS0FBNEMsQUFBNUMsUUFBb0QsQUFBcEQsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixjQUFDLEFBQUQsS0FBc0I7TUFBaEIsQUFBZ0IsNkVBQVAsQUFBTyxBQUNqRDs7U0FBTyw2QkFBZSxBQUFmLE9BQXNCLEFBQXRCLEtBQThCLEFBQTlCLFlBQXFDLEFBQXJDLEtBQTRDLEFBQTVDLEFBQVAsQUFDRDtBQUZNIiwiZmlsZSI6InByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=