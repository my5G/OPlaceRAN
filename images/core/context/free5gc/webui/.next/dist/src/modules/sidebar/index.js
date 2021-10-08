'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectView = exports.setVisibility = exports.toggle = exports.SIDEBAR = undefined;

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var SIDEBAR = exports.SIDEBAR = {
  TOGGLE: 'sidebar/TOGGLE',
  SET_VISIBILITY: 'sidebar/SET_VISIBILITY',
  SELECT_VIEW: 'sidebar/SELECT_VIEW'

  /*
    UIAction.toggleSidebar
      payload : null
  
    UIAction.setSidebarVisibiliy
      payload : {
        isOpen
      } 
  
    UIAction.selectView
      payload : {
        view
      }
  */
};var toggle = exports.toggle = (0, _reduxActions.createAction)(SIDEBAR.TOGGLE);
var setVisibility = exports.setVisibility = (0, _reduxActions.createAction)(SIDEBAR.SET_VISIBILITY);
var selectView = exports.selectView = (0, _reduxActions.createAction)(SIDEBAR.SELECT_VIEW);

var initialState = {
  isOpen: false,
  view: "subscriber"
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, SIDEBAR.TOGGLE, function (state, action) {
  return (0, _extends3.default)({}, state, {
    isOpen: !state.isOpen
  });
}), (0, _defineProperty3.default)(_handleActions, SIDEBAR.SET_VISIBILITY, function (state, action) {
  return (0, _extends3.default)({}, state, {
    isOpen: action.payload
  });
}), (0, _defineProperty3.default)(_handleActions, SIDEBAR.SELECT_VIEW, function (state, action) {
  return (0, _extends3.default)({}, state, {
    view: action.payload
  });
}), _handleActions), initialState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NpZGViYXIvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlQWN0aW9uIiwiaGFuZGxlQWN0aW9ucyIsIlNJREVCQVIiLCJUT0dHTEUiLCJTRVRfVklTSUJJTElUWSIsIlNFTEVDVF9WSUVXIiwidG9nZ2xlIiwic2V0VmlzaWJpbGl0eSIsInNlbGVjdFZpZXciLCJpbml0aWFsU3RhdGUiLCJpc09wZW4iLCJ2aWV3Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQ1QsQUFBUyxBQUVUOzs7Ozs7QUFBTyxJQUFNO1VBQVUsQUFDYixBQUNSO2tCQUZxQixBQUVMLEFBQ2hCO2VBQWEsQUFHZjs7QUFOTyxBQUFnQixBQW9CdkI7Ozs7Ozs7Ozs7Ozs7O0FBcEJ1QixBQUNyQixFQW1CSyxJQUFNLDBCQUFTLGdDQUFhLFFBQTVCLEFBQWUsQUFBcUIsQUFDM0M7QUFBTyxJQUFNLHdDQUFnQixnQ0FBYSxRQUFuQyxBQUFzQixBQUFxQixBQUNsRDtBQUFPLElBQU0sa0NBQWEsZ0NBQWEsUUFBaEMsQUFBbUIsQUFBcUI7O0FBRS9DLElBQU07VUFBZSxBQUNYLEFBQ1I7UUFGRixBQUFxQixBQUViLEFBR1I7QUFMcUIsQUFDbkI7O2tCQUlhLHFHQUNaLFFBRFksQUFDSixRQUFTLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBUjtvQ0FBQSxBQUNiO1lBQ0ssQ0FBQyxNQUZPLEFBRUQ7QUFBZjtBQUhXLGtEQUtaLFFBTFksQUFLSixnQkFBaUIsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFSO29DQUFBLEFBQ3JCO1lBQ0ssT0FGZ0IsQUFFVDtBQUFmO0FBUFcsa0RBU1osUUFUWSxBQVNKLGFBQWMsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFSO29DQUFBLEFBQ2xCO1VBQ0csT0FGZSxBQUVSO0FBQWI7QUFYVyxxQkFBZixBQUFlLEFBYVoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=