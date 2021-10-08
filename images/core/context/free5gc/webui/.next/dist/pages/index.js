'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../src/modules/store.js');

var _withSession = require('../src/helpers/with-session');

var _withSession2 = _interopRequireDefault(_withSession);

var _Auth = require('../src/containers/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _App = require('../src/containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/pages/index.js?entry';


var Restricted = function Restricted(Component) {
  var checkAuth = function checkAuth(props) {
    return props.isLoggedIn ? _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    })) : _react2.default.createElement(_Auth2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  };

  return (0, _withSession2.default)(checkAuth);
};

var Index = Restricted(function (_ref) {
  var session = _ref.session;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_App2.default, { session: session, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
});

Index.propTypes = {
  session: _propTypes2.default.object.isRequired
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsIndpdGhTZXNzaW9uIiwiQXV0aCIsIkFwcCIsIlJlc3RyaWN0ZWQiLCJDb21wb25lbnQiLCJjaGVja0F1dGgiLCJwcm9wcyIsImlzTG9nZ2VkSW4iLCJJbmRleCIsInNlc3Npb24iLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sYUFBYSxTQUFiLEFBQWEsV0FBQSxBQUFDLFdBQWMsQUFDaEM7TUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsT0FBVSxBQUMzQjtpQkFBTyxBQUFNLDJDQUFhLEFBQUMsc0NBQUQsQUFBZTs7a0JBQWY7b0JBQW5CLEFBQW1CO0FBQUE7QUFBQSxNQUFBLENBQW5CLG1CQUE4QyxBQUFDOztrQkFBRDtvQkFBckQsQUFBcUQsQUFDdEQ7QUFEc0Q7QUFBQSxLQUFBO0FBRHZELEFBSUE7O1NBQU8sMkJBQVAsQUFBTyxBQUFZLEFBQ3BCO0FBTkQ7O0FBUUEsSUFBTSxtQkFBbUIsZ0JBQUE7TUFBQSxBQUFFLGVBQUYsQUFBRTt5QkFDekIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLCtCQUFJLFNBQUwsQUFBYztnQkFBZDtrQkFGcUIsQUFDdkIsQUFDRTtBQUFBOztBQUZKLEFBQWMsQ0FBQTs7QUFPZCxNQUFBLEFBQU07V0FDSyxvQkFBQSxBQUFVLE9BRHJCLEFBQWtCLEFBQ1UsQUFHNUI7QUFKa0IsQUFDaEI7O2tCQUdhLEFBQVUsa0RBQXpCLEFBQWUsQUFBcUIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=