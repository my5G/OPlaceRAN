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

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Account/List.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0.5rem 0.25rem;\n  '], ['\n    margin: 0.5rem 0.25rem;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 's52zqhl-0'
})(['display:block;margin:2rem;', ''], _styleUtils.media.mobile(_templateObject));

var propTypes = {
  accounts: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

var List = function List(_ref) {
  var accounts = _ref.accounts,
      deletedId = _ref.deletedId,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      session = _ref.session;
  var _session$user = session.user,
      username = _session$user.username,
      roles = _session$user.roles;

  var accountList = accounts.map(function (account) {
    return _react2.default.createElement(_Item2.default, {
      key: account.username,
      session: session,
      account: account,
      disabled: deletedId === account.username || roles.indexOf('admin') === -1 && account.username !== username,
      spinner: deletedId === account.username,
      onEdit: onEdit,
      onDelete: onDelete, __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    });
  });

  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, accountList);
};

List.propTypes = propTypes;

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FjY291bnQvTGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIm1lZGlhIiwiTGF5b3V0IiwiQmxhbmsiLCJJdGVtIiwiV3JhcHBlciIsImRpdiIsIm1vYmlsZSIsInByb3BUeXBlcyIsImFjY291bnRzIiwiYXJyYXlPZiIsIm9iamVjdCIsIm9uRWRpdCIsImZ1bmMiLCJvbkRlbGV0ZSIsIkxpc3QiLCJkZWxldGVkSWQiLCJzZXNzaW9uIiwidXNlciIsInVzZXJuYW1lIiwicm9sZXMiLCJhY2NvdW50TGlzdCIsIm1hcCIsImFjY291bnQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBUyxBQUFROztBQUNqQixBQUFPOzs7Ozs7Ozs7O0FBRVAsSUFBTSxxQ0FBQSxBQUFpQjtlQUFqQjtBQUFBLENBQVUsc0NBSVosa0JBSkUsQUFJSSxPQUpWOztBQVNBLElBQU07WUFDTSxvQkFBQSxBQUFVLFFBQVEsb0JBRFosQUFDTixBQUE0QixBQUN0QztVQUFRLG9CQUZRLEFBRUUsQUFDbEI7WUFBVSxvQkFIWixBQUFrQixBQUdJO0FBSEosQUFDaEI7O0FBS0YsSUFBTSxPQUFPLFNBQVAsQUFBTyxXQUF3RDtNQUFyRCxBQUFxRCxnQkFBckQsQUFBcUQ7TUFBM0MsQUFBMkMsaUJBQTNDLEFBQTJDO01BQWhDLEFBQWdDLGNBQWhDLEFBQWdDO01BQXhCLEFBQXdCLGdCQUF4QixBQUF3QjtNQUFkLEFBQWMsZUFBZCxBQUFjO3NCQUkvRCxRQUorRCxBQUl2RDtNQUp1RCxBQUVqRSx5QkFGaUUsQUFFakU7TUFGaUUsQUFHakUsc0JBSGlFLEFBR2pFLEFBR0Y7O01BQU0sdUJBQWMsQUFDakIsSUFBSSxtQkFBQTsyQkFDSCxBQUFDO1dBQ00sUUFEUCxBQUNlLEFBQ2I7ZUFGRixBQUVXLEFBQ1Q7ZUFIRixBQUdXLEFBQ1Q7Z0JBQVUsY0FBYyxRQUFkLEFBQXNCLFlBQWEsTUFBQSxBQUFNLFFBQU4sQUFBYyxhQUFhLENBQTNCLEFBQTRCLEtBQUssUUFBQSxBQUFRLGFBSnhGLEFBSXFHLEFBQ25HO2VBQVMsY0FBYyxRQUx6QixBQUtpQyxBQUMvQjtjQU5GLEFBTVUsQUFDUjtnQkFQRixBQU9ZO2tCQVBaO29CQURHLEFBQ0g7QUFBQTtBQUNFLEtBREY7QUFGSixBQUFvQixBQVlwQixHQVpvQjs7eUJBYWpCLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsRUFERixBQUNFLEFBSUg7QUF2QkQ7O0FBeUJBLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEFBRWpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=