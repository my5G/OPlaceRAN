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

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _ = require('..');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Profile/List.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0.5rem 0.25rem;\n  '], ['\n    margin: 0.5rem 0.25rem;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1xzgxgy-0'
})(['display:block;margin:2rem;', ''], _styleUtils.media.mobile(_templateObject));

var propTypes = {
  profiles: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onView: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

var List = function List(_ref) {
  var profiles = _ref.profiles,
      deletedId = _ref.deletedId,
      onView = _ref.onView,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete;

  var profileList = profiles.map(function (profile) {
    return _react2.default.createElement(_Item2.default, {
      key: profile._id,
      profile: profile,
      disabled: deletedId === profile._id,
      onView: onView,
      onEdit: onEdit,
      onDelete: onDelete, __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    });
  });

  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, profileList);
};

List.propTypes = propTypes;

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Byb2ZpbGUvTGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIm1lZGlhIiwiTGF5b3V0IiwiQmxhbmsiLCJJdGVtIiwiV3JhcHBlciIsImRpdiIsIm1vYmlsZSIsInByb3BUeXBlcyIsInByb2ZpbGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsIm9uVmlldyIsImZ1bmMiLCJvbkVkaXQiLCJvbkRlbGV0ZSIsIkxpc3QiLCJkZWxldGVkSWQiLCJwcm9maWxlTGlzdCIsIm1hcCIsInByb2ZpbGUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFTLEFBQVE7O0FBQ2pCLEFBQU87Ozs7Ozs7Ozs7QUFFUCxJQUFNLHFDQUFBLEFBQWlCO2VBQWpCO0FBQUEsQ0FBVSxzQ0FJWixrQkFKRSxBQUlJLE9BSlY7O0FBU0EsSUFBTTtZQUNNLG9CQUFBLEFBQVUsUUFBUSxvQkFEWixBQUNOLEFBQTRCLEFBQ3RDO1VBQVEsb0JBRlEsQUFFRSxBQUNsQjtVQUFRLG9CQUhRLEFBR0UsQUFDbEI7WUFBVSxvQkFKWixBQUFrQixBQUlJO0FBSkosQUFDaEI7O0FBTUYsSUFBTSxPQUFPLFNBQVAsQUFBTyxXQUF1RDtNQUFwRCxBQUFvRCxnQkFBcEQsQUFBb0Q7TUFBMUMsQUFBMEMsaUJBQTFDLEFBQTBDO01BQS9CLEFBQStCLGNBQS9CLEFBQStCO01BQXZCLEFBQXVCLGNBQXZCLEFBQXVCO01BQWYsQUFBZSxnQkFBZixBQUFlLEFBQ2xFOztNQUFNLHVCQUFjLEFBQ2pCLElBQUksbUJBQUE7MkJBQ0gsQUFBQztXQUNNLFFBRFAsQUFDZSxBQUNiO2VBRkYsQUFFVyxBQUNUO2dCQUFVLGNBQWMsUUFIMUIsQUFHa0MsQUFDaEM7Y0FKRixBQUlVLEFBQ1I7Y0FMRixBQUtVLEFBQ1I7Z0JBTkYsQUFNWTtrQkFOWjtvQkFERyxBQUNIO0FBQUE7QUFDRSxLQURGO0FBRkosQUFBb0IsQUFXcEIsR0FYb0I7O3lCQVlqQixjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLEVBREYsQUFDRSxBQUlIO0FBakJEOztBQW1CQSxLQUFBLEFBQUssWUFBTCxBQUFpQixBQUVqQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9