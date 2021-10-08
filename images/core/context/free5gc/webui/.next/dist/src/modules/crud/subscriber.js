'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSubscriber = exports.updateSubscriber = exports.createSubscriber = exports.fetchSubscriber = exports.fetchSubscribers = exports.URL = exports.MODEL = undefined;

var _actions = require('./actions');

var MODEL = exports.MODEL = 'subscribers';
var URL = exports.URL = '/Subscriber';

var fetchSubscribers = exports.fetchSubscribers = function fetchSubscribers() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _actions.fetchCollection)(MODEL, URL, params, { idProperty: 'imsi' });
};

var fetchSubscriber = exports.fetchSubscriber = function fetchSubscriber(imsi) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.fetchDocument)(MODEL, imsi, URL + '/' + imsi, params, { idProperty: 'imsi' });
};

var createSubscriber = exports.createSubscriber = function createSubscriber() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.createDocument)(MODEL, URL, params, data, { idProperty: 'imsi' });
};

var updateSubscriber = exports.updateSubscriber = function updateSubscriber(imsi) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _actions.updateDocument)(MODEL, imsi, URL + '/' + imsi, params, data, { idProperty: 'imsi' });
};

var deleteSubscriber = exports.deleteSubscriber = function deleteSubscriber(imsi) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.deleteDocument)(MODEL, imsi, URL + '/' + imsi, params, { idProperty: 'imsi' });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2NydWQvc3Vic2NyaWJlci5qcyJdLCJuYW1lcyI6WyJmZXRjaENvbGxlY3Rpb24iLCJmZXRjaERvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnQiLCJ1cGRhdGVEb2N1bWVudCIsImRlbGV0ZURvY3VtZW50IiwiTU9ERUwiLCJVUkwiLCJmZXRjaFN1YnNjcmliZXJzIiwicGFyYW1zIiwiaWRQcm9wZXJ0eSIsImZldGNoU3Vic2NyaWJlciIsImltc2kiLCJjcmVhdGVTdWJzY3JpYmVyIiwiZGF0YSIsInVwZGF0ZVN1YnNjcmliZXIiLCJkZWxldGVTdWJzY3JpYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFDRSxBQURGLEFBRUUsQUFGRixBQUdFLEFBSEYsQUFJRSxBQUpGLEFBS0UsQUFMRixBQVFBOztBQUFPLElBQU0sd0JBQVEsQUFBZCxBQUNQO0FBQU8sSUFBTSxvQkFBTSxBQUFaLEFBRVA7O0FBQU8sSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsbUJBQWlCO01BQWhCLEFBQWdCLDZFQUFQLEFBQU8sQUFDL0M7O1NBQU8sOEJBQWdCLEFBQWhCLE9BQXVCLEFBQXZCLEtBQTRCLEFBQTVCLFFBQW9DLEVBQUUsWUFBWSxBQUFkLEFBQXBDLEFBQVAsQUFDRDtBQUZNLEFBSVA7O0FBQU8sSUFBTSw0Q0FBa0IsU0FBbEIsQUFBa0IsZ0JBQUMsQUFBRCxNQUF1QjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQ3BEOztTQUFPLDRCQUFjLEFBQWQsT0FBcUIsQUFBckIsTUFBOEIsQUFBOUIsWUFBcUMsQUFBckMsTUFBNkMsQUFBN0MsUUFBcUQsRUFBRSxZQUFZLEFBQWQsQUFBckQsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLDhDQUFtQixTQUFuQixBQUFtQixtQkFBNEI7TUFBM0IsQUFBMkIsNkVBQWxCLEFBQWtCO01BQWQsQUFBYywyRUFBUCxBQUFPLEFBQzFEOztTQUFPLDZCQUFlLEFBQWYsT0FBc0IsQUFBdEIsS0FBMkIsQUFBM0IsUUFBbUMsQUFBbkMsTUFBeUMsRUFBRSxZQUFZLEFBQWQsQUFBekMsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLDhDQUFtQixTQUFuQixBQUFtQixpQkFBQyxBQUFELE1BQWtDO01BQTNCLEFBQTJCLDZFQUFsQixBQUFrQjtNQUFkLEFBQWMsMkVBQVAsQUFBTyxBQUNoRTs7U0FBTyw2QkFBZSxBQUFmLE9BQXNCLEFBQXRCLE1BQStCLEFBQS9CLFlBQXNDLEFBQXRDLE1BQThDLEFBQTlDLFFBQXNELEFBQXRELE1BQTRELEVBQUUsWUFBWSxBQUFkLEFBQTVELEFBQVAsQUFDRDtBQUZNLEFBSVA7O0FBQU8sSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsaUJBQUMsQUFBRCxNQUF1QjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQ3JEOztTQUFPLDZCQUFlLEFBQWYsT0FBc0IsQUFBdEIsTUFBK0IsQUFBL0IsWUFBc0MsQUFBdEMsTUFBOEMsQUFBOUMsUUFBc0QsRUFBRSxZQUFZLEFBQWQsQUFBdEQsQUFBUCxBQUNEO0FBRk0iLCJmaWxlIjoic3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==