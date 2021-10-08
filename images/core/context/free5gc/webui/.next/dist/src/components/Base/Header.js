'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _ = require('..');

var _menu = require('react-icons/lib/md/menu');

var _menu2 = _interopRequireDefault(_menu);

var _person = require('react-icons/lib/md/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Base/Header.js';


var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's15cdny5-0'
})(['display:flex;align-items:center;height:4rem;color:white;background:', ';'], _openColor2.default.indigo[9]);

var Menu = _styledComponents2.default.div.withConfig({
  componentId: 's15cdny5-1'
})(['display:inline-flex;margin:0 1.5rem;cursor:pointer;font-size:1.5rem;']);

var Title = _styledComponents2.default.div.withConfig({
  componentId: 's15cdny5-2'
})(['margin:0 0.5rem;font-size:1.5rem;font-family:\'Ubuntu\',sans-serif;']);

var Thumbnail = _styledComponents2.default.div.withConfig({
  componentId: 's15cdny5-3'
})(['padding:1rem 0;position:absolute;right:2rem;cursor:pointer;']);

var propTypes = {
  onSidebarToggle: _propTypes2.default.func.isRequired,
  onLogoutRequest: _propTypes2.default.func.isRequired
};

var Header = function Header(_ref) {
  var onSidebarToggle = _ref.onSidebarToggle,
      onLogoutRequest = _ref.onLogoutRequest;
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(Menu, { onClick: onSidebarToggle, __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'free5GC'), _react2.default.createElement(Thumbnail, { onClick: onLogoutRequest, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(_.Tooltip, { bottom: true, content: 'Logout', width: '60px', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(_.CircleIcon, { size: '2rem', background: _openColor2.default['pink'][4], __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, _react2.default.createElement(_person2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  })))));
};

Header.propTypes = propTypes;

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Jhc2UvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInN0eWxlZCIsIm9jIiwiQ2lyY2xlSWNvbiIsIlRvb2x0aXAiLCJNZW51SWNvbiIsIlBlcnNvbkljb24iLCJXcmFwcGVyIiwiZGl2IiwiaW5kaWdvIiwiTWVudSIsIlRpdGxlIiwiVGh1bWJuYWlsIiwicHJvcFR5cGVzIiwib25TaWRlYmFyVG9nZ2xlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbkxvZ291dFJlcXVlc3QiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLHFDQUFBLEFBQWlCO2VBQWpCO0FBQUEsQ0FBVSxnRkFNQSxvQkFBQSxBQUFHLE9BTm5CLEFBQU0sQUFNVSxBQUFVOztBQUcxQixJQUFNLGtDQUFBLEFBQWM7ZUFBZDtBQUFBLENBQU8sR0FBYjs7QUFRQSxJQUFNLG1DQUFBLEFBQWU7ZUFBZjtBQUFBLENBQVEsR0FBZDs7QUFPQSxJQUFNLHVDQUFBLEFBQW1CO2VBQW5CO0FBQUEsQ0FBWSxHQUFsQjs7QUFTQSxJQUFNO21CQUNhLG9CQUFBLEFBQVUsS0FEWCxBQUNnQixBQUNoQzttQkFBaUIsb0JBQUEsQUFBVSxLQUY3QixBQUFrQixBQUVnQjtBQUZoQixBQUNoQjs7QUFJRixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLHVCQUFILEFBQUc7TUFBSCxBQUFvQix1QkFBcEIsQUFBb0I7eUJBQ2hDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRCxRQUFNLFNBQU4sQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLHVCQUVELGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUpGLEFBSUUsQUFHQSw0QkFBQyxjQUFELGFBQVcsU0FBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsMkJBQVEsUUFBVCxNQUFnQixTQUFoQixBQUF3QixVQUFTLE9BQWpDLEFBQXVDO2dCQUF2QztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw4QkFBVyxNQUFaLEFBQWlCLFFBQU8sWUFBWSxvQkFBQSxBQUFHLFFBQXZDLEFBQW9DLEFBQVc7Z0JBQS9DO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFYSyxBQUNiLEFBT0UsQUFDRSxBQUNFLEFBQ0U7QUFBQTtBQUFBO0FBWFY7O0FBa0JBLE9BQUEsQUFBTyxZQUFQLEFBQW1CLEFBRW5COztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==