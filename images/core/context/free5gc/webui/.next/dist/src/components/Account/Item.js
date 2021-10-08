'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _delete = require('react-icons/lib/md/delete');

var _delete2 = _interopRequireDefault(_delete);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Account/Item.js';


var Card = _styledComponents2.default.div.withConfig({
  componentId: 'q0gz83-0'
})(['position:relative;display:flex;padding:0.5rem;cursor:pointer;', ';.actions{position:absolute;top:0;right:0;width:8rem;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;}&:hover{background:', ';.actions{', ';}}'], function (p) {
  return p.disabled && 'opacity: 0.5; cursor: not-allowed; pointer-events: none;';
}, _openColor2.default.gray[1], function (p) {
  return p.disabled ? 'opacity: 0;' : 'opacity: 1;';
});

var CircleButton = _styledComponents2.default.div.withConfig({
  componentId: 'q0gz83-1'
})(['height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;margin:1px;color:', ';border-radius:1rem;font-size:1.5rem;&:hover{color:', ';}&.delete{&:hover{color:', ';}}'], _openColor2.default.gray[6], _openColor2.default.indigo[6], _openColor2.default.pink[6]);

var Account = _styledComponents2.default.div.withConfig({
  componentId: 'q0gz83-2'
})(['display:flex;flex-direction:row;flex:1;line-height:2.5rem;margin:0 2rem;.username{font-size:1.25rem;color:', ';width:320px;}.role{font-size:1.1rem;color:', ';width:240px;}'], _openColor2.default.gray[8], _openColor2.default.gray[6]);

var SpinnerWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'q0gz83-3'
})(['position:absolute;top:0;right:0;width:4rem;height:100%;display:flex;align-items:center;justify-content:center;']);

var propTypes = {
  account: _propTypes2.default.shape({
    username: _propTypes2.default.string
  }),
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call.apply(_ref, [this].concat(args))), _this), _this.handleEdit = function (e) {
      e.stopPropagation();

      var _this$props = _this.props,
          account = _this$props.account,
          onEdit = _this$props.onEdit;
      var username = account.username;

      onEdit(username);
    }, _this.handleDelete = function (e) {
      e.stopPropagation();

      var _this$props2 = _this.props,
          account = _this$props2.account,
          onDelete = _this$props2.onDelete;
      var username = account.username;

      onDelete(username);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var handleEdit = this.handleEdit,
          handleDelete = this.handleDelete;
      var _props = this.props,
          session = _props.session,
          disabled = _props.disabled,
          spinner = _props.spinner,
          account = _props.account,
          onEdit = _props.onEdit,
          onDelete = _props.onDelete;

      return _react2.default.createElement(Card, { disabled: disabled, onClick: handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(Account, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement('div', { className: 'username', __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, account.username), _react2.default.createElement('div', { className: 'role', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, account.roles[0])), session.user.username !== account.username && _react2.default.createElement('div', { className: 'actions', __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement(_.Tooltip, { content: 'Delete', width: '60px', __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement(_delete2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })))), spinner && _react2.default.createElement(SpinnerWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement(_.Spinner, { sm: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      })));
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  account: _propTypes2.default.shape({
    username: _propTypes2.default.string
  }),
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FjY291bnQvSXRlbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIm1lZGlhIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiVG9vbHRpcCIsIlNwaW5uZXIiLCJDYXJkIiwiZGl2IiwicCIsImRpc2FibGVkIiwiZ3JheSIsIkNpcmNsZUJ1dHRvbiIsImluZGlnbyIsInBpbmsiLCJBY2NvdW50IiwiU3Bpbm5lcldyYXBwZXIiLCJwcm9wVHlwZXMiLCJhY2NvdW50Iiwic2hhcGUiLCJ1c2VybmFtZSIsInN0cmluZyIsIm9uRWRpdCIsImZ1bmMiLCJvbkRlbGV0ZSIsIkl0ZW0iLCJoYW5kbGVFZGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BzIiwiaGFuZGxlRGVsZXRlIiwic2Vzc2lvbiIsInNwaW5uZXIiLCJyb2xlcyIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFTLEFBQVM7Ozs7Ozs7QUFFbEIsSUFBTSxrQ0FBQSxBQUFjO2VBQWQ7QUFBQSxDQUFPLG9QQU9ULGFBQUE7U0FBSyxFQUFBLEFBQUUsWUFBUCxBQUFtQjtBQVBqQixHQXVCWSxvQkFBQSxBQUFHLEtBdkJmLEFBdUJZLEFBQVEsSUFHbEIsYUFBQTtTQUFLLEVBQUEsQUFBRSxXQUFGLEFBQWEsZ0JBQWxCLEFBQWtDO0FBMUIxQyxBQUFNOztBQStCTixJQUFNLDBDQUFBLEFBQXNCO2VBQXRCO0FBQUEsQ0FBZSxrTUFRVixvQkFBQSxBQUFHLEtBUlIsQUFRSyxBQUFRLElBTU4sb0JBQUEsQUFBRyxPQWRWLEFBY08sQUFBVSxJQUtSLG9CQUFBLEFBQUcsS0FuQmxCLEFBQU0sQUFtQlMsQUFBUTs7QUFLdkIsSUFBTSxxQ0FBQSxBQUFpQjtlQUFqQjtBQUFBLENBQVUsbUxBU0gsb0JBQUEsQUFBRyxLQVRWLEFBU08sQUFBUSxJQUtSLG9CQUFBLEFBQUcsS0FkaEIsQUFBTSxBQWNPLEFBQVE7O0FBS3JCLElBQU0sNENBQUEsQUFBd0I7ZUFBeEI7QUFBQSxDQUFpQixHQUF2Qjs7QUFXQSxJQUFNOytCQUNLLEFBQVU7Y0FDUCxvQkFGSSxBQUNQLEFBQWdCLEFBQ0gsQUFFdEI7QUFIeUIsQUFDdkIsR0FETztVQUdELG9CQUpRLEFBSUUsQUFDbEI7WUFBVSxvQkFMWixBQUFrQixBQUtJO0FBTEosQUFDaEI7O0lBT0ksQTs7Ozs7Ozs7Ozs7Ozs7d01BU0osQSxhQUFhLGFBQUssQUFDaEI7UUFEZ0IsQUFDaEIsQUFBRTs7d0JBS0UsTUFOWSxBQU1QO1VBTk8sQUFJZCxzQkFKYyxBQUlkO1VBSmMsQUFLZCxxQkFMYyxBQUtkO1VBTGMsQUFTZCxXQVRjLEFBVVosUUFWWSxBQVNkLEFBR0Y7O2FBQUEsQUFBTyxBQUNSO0EsYUFFRCxBLGVBQWUsYUFBSyxBQUNsQjtRQURrQixBQUNsQixBQUFFOzt5QkFLRSxNQU5jLEFBTVQ7VUFOUyxBQUloQix1QkFKZ0IsQUFJaEI7VUFKZ0IsQUFLaEIsd0JBTGdCLEFBS2hCO1VBTGdCLEFBU2hCLFdBVGdCLEFBVWQsUUFWYyxBQVNoQixBQUdGOztlQUFBLEFBQVMsQUFDVjtBOzs7Ozs2QkFFUTtVQUFBLEFBRUwsYUFGSyxBQUlILEtBSkcsQUFFTDtVQUZLLEFBR0wsZUFISyxBQUlILEtBSkcsQUFHTDttQkFVRSxLQWJHLEFBYUU7VUFiRixBQU9MLGlCQVBLLEFBT0w7VUFQSyxBQVFMLGtCQVJLLEFBUUw7VUFSSyxBQVNMLGlCQVRLLEFBU0w7VUFUSyxBQVVMLGlCQVZLLEFBVUw7VUFWSyxBQVdMLGdCQVhLLEFBV0w7VUFYSyxBQVlMLGtCQVpLLEFBWUwsQUFHRjs7NkJBQ0csY0FBRCxRQUFNLFVBQU4sQUFBZ0IsVUFBVSxTQUExQixBQUFtQztvQkFBbkM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUEyQjtBQUEzQjtpQkFERixBQUNFLEFBQW1DLEFBQ25DLDJCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBdUI7QUFBdkI7aUJBQXVCLEFBQVEsTUFIbkMsQUFDRSxBQUVFLEFBQXVCLEFBQWMsQUFFdEMsY0FBQSxBQUFRLEtBQVIsQUFBYSxhQUFhLFFBQTFCLEFBQWtDLDRCQUNqQyxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsMkJBQVEsU0FBVCxBQUFpQixVQUFTLE9BQTFCLEFBQWdDO29CQUFoQztzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxnQkFBYyxXQUFkLEFBQXdCLFVBQVMsU0FBakMsQUFBMEM7b0JBQTFDO3NCQUFBLEFBQXdEO0FBQXhEO3lCQUF3RCxBQUFDOztvQkFBRDtzQkFSaEUsQUFNSSxBQUNFLEFBQ0UsQUFBd0QsQUFHN0Q7QUFINkQ7QUFBQSx3Q0FHakQsY0FBRDs7b0JBQUE7c0JBQUEsQUFBZ0I7QUFBaEI7QUFBQSxPQUFBLGtCQUFnQixBQUFDLDJCQUFRLElBQVQ7b0JBQUE7c0JBWmhDLEFBQ0UsQUFXYyxBQUFnQixBQUdqQztBQUhpQzs7Ozs7O0FBbEVqQixBOztBQUFiLEEsS0FDRyxBOytCQUNJLEFBQVU7Y0FDUCxvQkFGSyxBQUNSLEFBQWdCLEFBQ0gsQUFFdEI7QUFIeUIsQUFDdkIsR0FETztVQUdELG9CQUpTLEFBSUMsQUFDbEI7WUFBVSxvQkFMTyxBQUtHLEEsQUFrRXhCO0FBdkVxQixBQUNqQjs7a0JBc0VKLEFBQWUiLCJmaWxlIjoiSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==