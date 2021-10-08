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

var _importContacts = require('react-icons/lib/md/import-contacts');

var _importContacts2 = _interopRequireDefault(_importContacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Shared/Blank.js';


var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's16u7v98-0'
})(['position:relative;display:block;margin-top:6rem;']);

var StyledTitle = _styledComponents2.default.div.withConfig({
  componentId: 's16u7v98-1'
})(['display:block;margin-top:2rem;text-align:center;font-size:1rem;font-weight:bold;color:', ';cursor:pointer;'], _openColor2.default.indigo[8]);

var StyledBody = _styledComponents2.default.div.withConfig({
  componentId: 's16u7v98-2'
})(['display:block;margin-top:2rem;text-align:center;font-size:1rem;font-weight:300;color:', ';cursor:default;'], _openColor2.default.gray[6]);

var Blank = function Blank(_ref) {
  var visible = _ref.visible,
      title = _ref.title,
      body = _ref.body,
      onTitle = _ref.onTitle;
  return visible ? _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(_.CircleIcon, { size: '12rem', background: _openColor2.default.gray[0], color: _openColor2.default.gray[8], __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement(_importContacts2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })), _react2.default.createElement(StyledBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, body), _react2.default.createElement(StyledTitle, { onClick: onTitle, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, title)) : null;
};

Blank.propTypes = {
  visible: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  body: _propTypes2.default.string,
  onTitle: _propTypes2.default.func
};

Blank.defaultProps = {
  visible: false,
  title: "ADD A DATA",
  body: "You have no data... yet!"
};

exports.default = Blank;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NoYXJlZC9CbGFuay5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIkNpcmNsZUljb24iLCJTY2hvb2xJY29uIiwiV3JhcHBlciIsImRpdiIsIlN0eWxlZFRpdGxlIiwiaW5kaWdvIiwiU3R5bGVkQm9keSIsImdyYXkiLCJCbGFuayIsInZpc2libGUiLCJ0aXRsZSIsImJvZHkiLCJvblRpdGxlIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztBQUVQLElBQU0scUNBQUEsQUFBaUI7ZUFBakI7QUFBQSxDQUFVLEdBQWhCOztBQU9BLElBQU0seUNBQUEsQUFBcUI7ZUFBckI7QUFBQSxDQUFjLGtIQU9ULG9CQUFBLEFBQUcsT0FQZCxBQUFNLEFBT0ssQUFBVTs7QUFJckIsSUFBTSx3Q0FBQSxBQUFvQjtlQUFwQjtBQUFBLENBQWEsaUhBT1Isb0JBQUEsQUFBRyxLQVBkLEFBQU0sQUFPSyxBQUFROztBQUluQixJQUFNLFFBQVEsU0FBUixBQUFRLFlBQUE7TUFBQSxBQUFFLGVBQUYsQUFBRTtNQUFGLEFBQVcsYUFBWCxBQUFXO01BQVgsQUFBa0IsWUFBbEIsQUFBa0I7TUFBbEIsQUFBd0IsZUFBeEIsQUFBd0I7U0FBYSwwQkFDaEQsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLDhCQUFXLE1BQVosQUFBaUIsU0FBUSxZQUFZLG9CQUFBLEFBQUcsS0FBeEMsQUFBcUMsQUFBUSxJQUFJLE9BQU8sb0JBQUEsQUFBRyxLQUEzRCxBQUF3RCxBQUFRO2dCQUFoRTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLHVCQUVELGNBQUQ7O2dCQUFBO2tCQUFBLEFBQWE7QUFBYjtBQUFBLEtBSkYsQUFJRSxBQUNBLHVCQUFDLGNBQUQsZUFBYSxTQUFiLEFBQXNCO2dCQUF0QjtrQkFBQSxBQUFnQztBQUFoQztLQU4rQyxBQUNqRCxBQUtFLFVBTlUsQUFRVjtBQVJKOztBQVVBLE1BQUEsQUFBTTtXQUNLLG9CQURPLEFBQ0csQUFDbkI7U0FBTyxvQkFGUyxBQUVDLEFBQ2pCO1FBQU0sb0JBSFUsQUFHQSxBQUNoQjtXQUFTLG9CQUpYLEFBQWtCLEFBSUc7QUFKSCxBQUNoQjs7QUFNRixNQUFBLEFBQU07V0FBZSxBQUNWLEFBQ1Q7U0FGbUIsQUFFWixBQUNQO1FBSEYsQUFBcUIsQUFHYixBQUdSO0FBTnFCLEFBQ25COztrQkFLRixBQUFlIiwiZmlsZSI6IkJsYW5rLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9