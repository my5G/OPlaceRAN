'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _Header = require('../../containers/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = require('../../containers/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _package = require('../../../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Base/Layout.js';


var Body = _styledComponents2.default.div.withConfig({
  componentId: 'sose0w-0'
})(['display:flex;height:calc(100vh - 4rem);']);

var propTypes = {
  title: _propTypes2.default.string
};

var defaultProps = {
  title: 'free5GC ' + _package2.default.version
};

var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, title)), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_Sidebar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), children));
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

var ContainerWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sose0w-1'
})(['flex:1;overflow-y:scroll;']);

Layout.Container = function (_ref2) {
  var visible = _ref2.visible,
      children = _ref2.children;
  return visible ? _react2.default.createElement(ContainerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, children) : null;
};

Layout.Content = _styledComponents2.default.div.withConfig({
  componentId: 'sose0w-2'
})(['']);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Jhc2UvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkhlYWQiLCJzdHlsZWQiLCJvYyIsIkhlYWRlciIsIlNpZGViYXIiLCJQYWNrYWdlIiwiQm9keSIsImRpdiIsInByb3BUeXBlcyIsInRpdGxlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidmVyc2lvbiIsIkxheW91dCIsImNoaWxkcmVuIiwiQ29udGFpbmVyV3JhcHBlciIsIkNvbnRhaW5lciIsInZpc2libGUiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxrQ0FBQSxBQUFjO2VBQWQ7QUFBQSxDQUFPLEdBQWI7O0FBS0EsSUFBTTtTQUNHLG9CQURULEFBQWtCLEFBQ0M7QUFERCxBQUNoQjs7QUFHRixJQUFNO3NCQUNjLGtCQURwQixBQUFxQixBQUNPO0FBRFAsQUFDbkI7O0FBR0YsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxhQUFILEFBQUc7TUFBSCxBQUFVLGdCQUFWLEFBQVU7eUJBQ3ZCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBUTtBQUFSO0FBQUEsS0FGSixBQUNFLEFBQ0UsQUFFRix5QkFBQSxBQUFDOztnQkFBRDtrQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLHNCQUNDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQztBQUREO0FBQUEsTUFQUyxBQUNiLEFBS0U7QUFOSjs7QUFhQSxPQUFBLEFBQU8sWUFBUCxBQUFtQjtBQUNuQixPQUFBLEFBQU8sZUFBUCxBQUFzQjs7QUFFdEIsSUFBTSw4Q0FBQSxBQUEwQjtlQUExQjtBQUFBLENBQW1CLEdBQXpCOztBQUtBLE9BQUEsQUFBTyxZQUFZLGlCQUFBO01BQUEsQUFBRSxnQkFBRixBQUFFO01BQUYsQUFBVyxpQkFBWCxBQUFXO1NBQWMsMEJBQ3pDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsRUFEMEMsQUFDMUMsWUFEaUIsQUFJZjtBQUpKOztBQU1BLE9BQUEsQUFBTyxxQ0FBUCxBQUF3QjtlQUF4QjtBQUFBLENBQWlCLEdBR2pCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==