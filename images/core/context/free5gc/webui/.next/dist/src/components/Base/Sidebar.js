'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = require('../../helpers/style-utils');

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _personAdd = require('react-icons/lib/md/person-add');

var _personAdd2 = _interopRequireDefault(_personAdd);

var _contentCopy = require('react-icons/lib/md/content-copy');

var _contentCopy2 = _interopRequireDefault(_contentCopy);

var _vpnKey = require('react-icons/lib/md/vpn-key');

var _vpnKey2 = _interopRequireDefault(_vpnKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Base/Sidebar.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    position: absolute;\n    top: 4rem;\n    left: 0;\n    width: ', ';\n    height: ', ';\n    transition: height .2s ease-in-out;\n  '], ['\n    position: absolute;\n    top: 4rem;\n    left: 0;\n    width: ', ';\n    height: ', ';\n    transition: height .2s ease-in-out;\n  ']);

var Menu = _styledComponents2.default.div.withConfig({
  componentId: 'ifkyto-0'
})(['display:block;width:', ';transition:width .2s ease-in-out;overflow:hidden;position:relative;z-index:1;', ' background-color:', ';box-shadow:3px 3px 6px rgba(0,0,0,0.1),3px 3px 6px rgba(0,0,0,0.2);'], function (p) {
  return p.visible ? p.width : '0';
}, _styleUtils.media.mobile(_templateObject, function (p) {
  return p.visible ? '100%' : '0';
}, function (p) {
  return p.visible ? '100%' : '0';
}), _openColor2.default.indigo[5]);

var StyledItem = _styledComponents2.default.div.withConfig({
  componentId: 'ifkyto-1'
})(['display:flex;align-items:center;padding:1rem;transition:all .3s;cursor:pointer;color:white;background:', ';border-left:', ';&:hover{background:', ';}'], function (p) {
  return p.active ? _openColor2.default.indigo[7] : _openColor2.default.indigo[5];
}, function (p) {
  return p.active ? '12px solid ' + _openColor2.default.indigo[6] : '12px solid ' + _openColor2.default.indigo[4];
}, function (p) {
  return p.active ? _openColor2.default.indigo[7] : _openColor2.default.indigo[6];
});

var Icon = _styledComponents2.default.div.withConfig({
  componentId: 'ifkyto-2'
})(['display:inline-flex;padding-left:1rem;font-size:1.5rem;']);

var Title = _styledComponents2.default.div.withConfig({
  componentId: 'ifkyto-3'
})(['padding-left:2rem;font-size:1.2rem;']);

var Item = function Item(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      name = _ref.name,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(StyledItem, {
    onClick: function onClick() {
      return onSelect(name);
    },
    active: name === selected, __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, children);
};

var propTypes = {
  isOpen: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  selectedView: _propTypes2.default.string,
  onSelectView: _propTypes2.default.func
};

var defaultProps = {
  width: "16rem"
};

var Sidebar = function Sidebar(_ref2) {
  var isOpen = _ref2.isOpen,
      width = _ref2.width,
      selectedView = _ref2.selectedView,
      onSelectView = _ref2.onSelectView;
  return _react2.default.createElement(Menu, { visible: isOpen, width: width, __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement(Item, { name: 'subscriber', selected: selectedView, onSelect: onSelectView, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement(_personAdd2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, 'Subscriber')), _react2.default.createElement(Item, { name: 'profile', selected: selectedView, onSelect: onSelectView, __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, _react2.default.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, _react2.default.createElement(_contentCopy2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  })), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, 'Profile')), _react2.default.createElement(Item, { name: 'account', selected: selectedView, onSelect: onSelectView, __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, _react2.default.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, _react2.default.createElement(_vpnKey2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  })), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, 'Account')));
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

exports.default = Sidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Jhc2UvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJtZWRpYSIsInRyYW5zaXRpb25zIiwib2MiLCJTdWJzY3JpYmVySWNvbiIsIlByb2ZpbGVJY29uIiwiQWNjb3VudEljb24iLCJNZW51IiwiZGl2IiwicCIsInZpc2libGUiLCJ3aWR0aCIsIm1vYmlsZSIsImluZGlnbyIsIlN0eWxlZEl0ZW0iLCJhY3RpdmUiLCJJY29uIiwiVGl0bGUiLCJJdGVtIiwiY2hpbGRyZW4iLCJzZWxlY3RlZCIsIm5hbWUiLCJvblNlbGVjdCIsInByb3BUeXBlcyIsImlzT3BlbiIsImJvb2wiLCJzdHJpbmciLCJzZWxlY3RlZFZpZXciLCJvblNlbGVjdFZpZXciLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiU2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFDaEIsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQUVQLElBQU0sa0NBQUEsQUFBYztlQUFkO0FBQUEsQ0FBTyw0TUFFRixhQUFBO1NBQUssRUFBQSxBQUFFLFVBQVUsRUFBWixBQUFjLFFBQW5CLEFBQTJCO0FBRmhDLHFCQUFBLEFBU0ksd0JBSUcsYUFBQTtTQUFLLEVBQUEsQUFBRSxVQUFGLEFBQVksU0FBakIsQUFBMEI7QUFiakMsQ0FTRixFQUtVLGFBQUE7U0FBSyxFQUFBLEFBQUUsVUFBRixBQUFZLFNBQWpCLEFBQTBCO0FBZGxDLElBa0JnQixvQkFBQSxBQUFHLE9BbEJ6QixBQUFNLEFBa0JnQixBQUFVOztBQUloQyxJQUFNLHdDQUFBLEFBQW9CO2VBQXBCO0FBQUEsQ0FBYSw2SkFTSCxhQUFBO1NBQUssRUFBQSxBQUFFLFNBQVMsb0JBQUEsQUFBRyxPQUFkLEFBQVcsQUFBVSxLQUFLLG9CQUFBLEFBQUcsT0FBbEMsQUFBK0IsQUFBVTtBQVRuRCxHQVdXLGFBQUE7U0FBSyxFQUFBLEFBQUUseUJBQXVCLG9CQUFBLEFBQUcsT0FBNUIsQUFBeUIsQUFBVSxxQkFDdkMsb0JBQUEsQUFBRyxPQURKLEFBQ0MsQUFBVTtBQVp0QixHQWVZLGFBQUE7U0FBSyxFQUFBLEFBQUUsU0FBUyxvQkFBQSxBQUFHLE9BQWQsQUFBVyxBQUFVLEtBQUssb0JBQUEsQUFBRyxPQUFsQyxBQUErQixBQUFVO0FBZjNELEFBQU07O0FBbUJOLElBQU0sa0NBQUEsQUFBYztlQUFkO0FBQUEsQ0FBTyxHQUFiOztBQU1BLElBQU0sbUNBQUEsQUFBZTtlQUFmO0FBQUEsQ0FBUSxHQUFkOztBQUtBLElBQU0sT0FBTyxTQUFQLEFBQU8sV0FBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsZ0JBQWIsQUFBYTtNQUFiLEFBQXVCLFlBQXZCLEFBQXVCO01BQXZCLEFBQTZCLGdCQUE3QixBQUE2Qjt5QkFDdkMsY0FBRDthQUNXLG1CQUFBO2FBQU0sU0FBTixBQUFNLEFBQVM7QUFEMUIsQUFFRTtZQUFRLFNBRlYsQUFFaUI7Z0JBRmpCO2tCQUFBLEFBR0c7QUFISDtBQUNFLEdBREYsRUFEVyxBQUNYO0FBREY7O0FBUUEsSUFBTTtVQUNJLG9CQURRLEFBQ0UsQUFDbEI7U0FBTyxvQkFGUyxBQUVDLEFBQ2pCO2dCQUFjLG9CQUhFLEFBR1EsQUFDeEI7Z0JBQWMsb0JBSmhCLEFBQWtCLEFBSVE7QUFKUixBQUNoQjs7QUFNRixJQUFNO1NBQU4sQUFBcUIsQUFDWjtBQURZLEFBQ25COztBQUdGLElBQU0sVUFBVSxTQUFWLEFBQVUsZUFBQTtNQUFBLEFBQUcsZUFBSCxBQUFHO01BQUgsQUFBVyxjQUFYLEFBQVc7TUFBWCxBQUFrQixxQkFBbEIsQUFBa0I7TUFBbEIsQUFBZ0MscUJBQWhDLEFBQWdDO3lCQUM3QyxjQUFELFFBQU0sU0FBTixBQUFlLFFBQVEsT0FBdkIsQUFBOEI7Z0JBQTlCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNHLGNBQUQsUUFBTSxNQUFOLEFBQVcsY0FBYSxVQUF4QixBQUFrQyxjQUFjLFVBQWhELEFBQTBEO2dCQUExRDtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEscUJBQU0sQUFBQzs7Z0JBQUQ7a0JBRFIsQUFDRSxBQUFNLEFBQ047QUFETTtBQUFBLHVCQUNMLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUhKLEFBQ0UsQUFFRSxBQUVGLGdDQUFDLGNBQUQsUUFBTSxNQUFOLEFBQVcsV0FBVSxVQUFyQixBQUErQixjQUFjLFVBQTdDLEFBQXVEO2dCQUF2RDtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEscUJBQU0sQUFBQzs7Z0JBQUQ7a0JBRFIsQUFDRSxBQUFNLEFBQ047QUFETTtBQUFBLHVCQUNMLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVBKLEFBS0UsQUFFRSxBQUVGLDZCQUFDLGNBQUQsUUFBTSxNQUFOLEFBQVcsV0FBVSxVQUFyQixBQUErQixjQUFjLFVBQTdDLEFBQXVEO2dCQUF2RDtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEscUJBQU0sQUFBQzs7Z0JBQUQ7a0JBRFIsQUFDRSxBQUFNLEFBQ047QUFETTtBQUFBLHVCQUNMLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVpVLEFBQ2QsQUFTRSxBQUVFO0FBWk47O0FBaUJBLFFBQUEsQUFBUSxZQUFSLEFBQW9CO0FBQ3BCLFFBQUEsQUFBUSxlQUFSLEFBQXVCLEFBRXZCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNpZGViYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=