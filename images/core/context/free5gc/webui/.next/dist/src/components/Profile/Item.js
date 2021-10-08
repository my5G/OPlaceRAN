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

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Profile/Item.js';


var Card = _styledComponents2.default.div.withConfig({
  componentId: 's1q62qc-0'
})(['position:relative;display:flex;padding:0.5rem;cursor:pointer;', ' .actions{position:absolute;top:0;right:0;width:8rem;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;}&:hover{background:', ';.actions{', ';}}'], function (p) {
  return p.disabled && 'opacity: 0.5; cursor: not-allowed; pointer-events: none;';
}, _openColor2.default.gray[1], function (p) {
  return p.disabled ? 'opacity: 0;' : 'opacity: 1;';
});

var CircleButton = _styledComponents2.default.div.withConfig({
  componentId: 's1q62qc-1'
})(['height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;margin:1px 4px;color:', ';border-radius:1rem;font-size:1.5rem;&:hover{color:', ';}&.delete{&:hover{color:', ';}}'], _openColor2.default.gray[6], _openColor2.default.indigo[6], _openColor2.default.pink[6]);

var Profile = _styledComponents2.default.div.withConfig({
  componentId: 's1q62qc-2'
})(['display:flex;flex-direction:row;flex:1;line-height:2.5rem;margin:0 2rem;.title{font-size:1.25rem;color:', ';width:320px;}.ambr{font-size:1.1rem;color:', ';width:240px;}.apn{font-size:1.1rem;color:', ';width:120px;}'], _openColor2.default.gray[8], _openColor2.default.gray[6], _openColor2.default.gray[6]);

var SpinnerWrapper = _styledComponents2.default.div.withConfig({
  componentId: 's1q62qc-3'
})(['position:absolute;top:0;right:0;width:4rem;height:100%;display:flex;align-items:center;justify-content:center;']);

var propTypes = {
  profile: _propTypes2.default.shape({
    title: _propTypes2.default.string
  }),
  onView: _propTypes2.default.func,
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
          profile = _this$props.profile,
          onEdit = _this$props.onEdit;
      var _id = profile._id;

      onEdit(_id);
    }, _this.handleDelete = function (e) {
      e.stopPropagation();

      var _this$props2 = _this.props,
          profile = _this$props2.profile,
          onDelete = _this$props2.onDelete;
      var _id = profile._id;

      onDelete(_id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var handleEdit = this.handleEdit,
          handleDelete = this.handleDelete;
      var _props = this.props,
          disabled = _props.disabled,
          profile = _props.profile,
          onView = _props.onView,
          onEdit = _props.onEdit,
          onDelete = _props.onDelete;
      var _id = profile._id,
          title = profile.title,
          pdn = profile.pdn,
          ambr = profile.ambr;

      return _react2.default.createElement(Card, { disabled: disabled, onClick: function onClick() {
          return onView(_id);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement(Profile, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, _react2.default.createElement('div', { className: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, title), _react2.default.createElement('div', { className: 'ambr', __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, ambr.downlink, '/', ambr.uplink), _react2.default.createElement('div', { className: 'apn', __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, pdn[0].apn)), _react2.default.createElement('div', { className: 'actions', __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, _react2.default.createElement(_.Tooltip, { content: 'Edit', width: '60px', __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(CircleButton, { onClick: handleEdit, __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react2.default.createElement(_edit2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }))), _react2.default.createElement(_.Tooltip, { content: 'Delete', width: '60px', __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: handleDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(_delete2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      })))), disabled && _react2.default.createElement(SpinnerWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement(_.Spinner, { sm: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      })));
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  profile: _propTypes2.default.shape({
    title: _propTypes2.default.string
  }),
  onView: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Byb2ZpbGUvSXRlbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIm1lZGlhIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiVG9vbHRpcCIsIlNwaW5uZXIiLCJDYXJkIiwiZGl2IiwicCIsImRpc2FibGVkIiwiZ3JheSIsIkNpcmNsZUJ1dHRvbiIsImluZGlnbyIsInBpbmsiLCJQcm9maWxlIiwiU3Bpbm5lcldyYXBwZXIiLCJwcm9wVHlwZXMiLCJwcm9maWxlIiwic2hhcGUiLCJ0aXRsZSIsInN0cmluZyIsIm9uVmlldyIsImZ1bmMiLCJvbkVkaXQiLCJvbkRlbGV0ZSIsIkl0ZW0iLCJoYW5kbGVFZGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BzIiwiX2lkIiwiaGFuZGxlRGVsZXRlIiwicGRuIiwiYW1iciIsImRvd25saW5rIiwidXBsaW5rIiwiYXBuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFTOzs7Ozs7O0FBRWxCLElBQU0sa0NBQUEsQUFBYztlQUFkO0FBQUEsQ0FBTyxvUEFPVCxhQUFBO1NBQUssRUFBQSxBQUFFLFlBQVAsQUFBbUI7QUFQakIsR0F1Qlksb0JBQUEsQUFBRyxLQXZCZixBQXVCWSxBQUFRLElBR2xCLGFBQUE7U0FBSyxFQUFBLEFBQUUsV0FBRixBQUFhLGdCQUFsQixBQUFrQztBQTFCMUMsQUFBTTs7QUErQk4sSUFBTSwwQ0FBQSxBQUFzQjtlQUF0QjtBQUFBLENBQWUsc01BUVYsb0JBQUEsQUFBRyxLQVJSLEFBUUssQUFBUSxJQU1OLG9CQUFBLEFBQUcsT0FkVixBQWNPLEFBQVUsSUFLUixvQkFBQSxBQUFHLEtBbkJsQixBQUFNLEFBbUJTLEFBQVE7O0FBS3ZCLElBQU0scUNBQUEsQUFBaUI7ZUFBakI7QUFBQSxDQUFVLDhOQVNILG9CQUFBLEFBQUcsS0FUVixBQVNPLEFBQVEsSUFLUixvQkFBQSxBQUFHLEtBZFYsQUFjTyxBQUFRLElBS1Isb0JBQUEsQUFBRyxLQW5CaEIsQUFBTSxBQW1CTyxBQUFROztBQUtyQixJQUFNLDRDQUFBLEFBQXdCO2VBQXhCO0FBQUEsQ0FBaUIsR0FBdkI7O0FBV0EsSUFBTTsrQkFDSyxBQUFVO1dBQ1Ysb0JBRk8sQUFDUCxBQUFnQixBQUNOLEFBRW5CO0FBSHlCLEFBQ3ZCLEdBRE87VUFHRCxvQkFKUSxBQUlFLEFBQ2xCO1VBQVEsb0JBTFEsQUFLRSxBQUNsQjtZQUFVLG9CQU5aLEFBQWtCLEFBTUk7QUFOSixBQUNoQjs7SSxBQVFJOzs7Ozs7Ozs7Ozs7Ozt3TUFVSixBLGFBQWEsYUFBSyxBQUNoQjtRQURnQixBQUNoQixBQUFFOzt3QkFLRSxNQU5ZLEFBTVA7VUFOTyxBQUlkLHNCQUpjLEFBSWQ7VUFKYyxBQUtkLHFCQUxjLEFBS2Q7VUFMYyxBQVNkLE1BVGMsQUFVWixRQVZZLEFBU2QsQUFHRjs7YUFBQSxBQUFPLEFBQ1I7QSxhLEFBRUQsZUFBZSxhQUFLLEFBQ2xCO1FBRGtCLEFBQ2xCLEFBQUU7O3lCQUtFLE1BTmMsQUFNVDtVQU5TLEFBSWhCLHVCQUpnQixBQUloQjtVQUpnQixBQUtoQix3QkFMZ0IsQUFLaEI7VUFMZ0IsQUFTaEIsTUFUZ0IsQUFVZCxRQVZjLEFBU2hCLEFBR0Y7O2VBQUEsQUFBUyxBQUNWO0E7Ozs7OzZCQUVRO1VBQUEsQUFFTCxhQUZLLEFBSUgsS0FKRyxBQUVMO1VBRkssQUFHTCxlQUhLLEFBSUgsS0FKRyxBQUdMO21CQVNFLEtBWkcsQUFZRTtVQVpGLEFBT0wsa0JBUEssQUFPTDtVQVBLLEFBUUwsaUJBUkssQUFRTDtVQVJLLEFBU0wsZ0JBVEssQUFTTDtVQVRLLEFBVUwsZ0JBVkssQUFVTDtVQVZLLEFBV0wsa0JBWEssQUFXTDtVQVhLLEFBZUwsTUFmSyxBQW1CSCxRQW5CRyxBQWVMO1VBZkssQUFnQkwsUUFoQkssQUFtQkgsUUFuQkcsQUFnQkw7VUFoQkssQUFpQkwsTUFqQkssQUFtQkgsUUFuQkcsQUFpQkw7VUFqQkssQUFrQkwsT0FsQkssQUFtQkgsUUFuQkcsQUFrQkwsQUFHRjs7NkJBQ0csY0FBRCxRQUFNLFVBQU4sQUFBZ0IsVUFBVSxTQUFTLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFPO0FBQWhEO29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBd0I7QUFBeEI7U0FERixBQUNFLEFBQ0Esd0JBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUF1QjtBQUF2QjtjQUFBLEFBQTRCLFVBQVcsVUFGekMsQUFFRSxBQUE0QyxBQUM1Qyx5QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQXNCO0FBQXRCO2FBQXNCLEFBQUksR0FKOUIsQUFDRSxBQUdFLEFBQTZCLEFBRS9CLHVCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMkJBQVEsU0FBVCxBQUFpQixRQUFPLE9BQXhCLEFBQThCO29CQUE5QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxnQkFBYyxTQUFkLEFBQXVCO29CQUF2QjtzQkFBQSxBQUFtQztBQUFuQzt5QkFBbUMsQUFBQzs7b0JBQUQ7c0JBRnZDLEFBQ0UsQUFDRSxBQUFtQyxBQUVyQztBQUZxQztBQUFBLDRCQUVyQyxBQUFDLDJCQUFRLFNBQVQsQUFBaUIsVUFBUyxPQUExQixBQUFnQztvQkFBaEM7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsZ0JBQWMsV0FBZCxBQUF3QixVQUFTLFNBQWpDLEFBQTBDO29CQUExQztzQkFBQSxBQUF3RDtBQUF4RDt5QkFBd0QsQUFBQzs7b0JBQUQ7c0JBWDlELEFBTUUsQUFJRSxBQUNFLEFBQXdELEFBRzNEO0FBSDJEO0FBQUEseUNBRzlDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQWdCO0FBQWhCO0FBQUEsT0FBQSxrQkFBZ0IsQUFBQywyQkFBUSxJQUFUO29CQUFBO3NCQWZqQyxBQUNFLEFBY2UsQUFBZ0IsQUFHbEM7QUFIa0M7Ozs7OztBQTVFbEIsQTs7QUFBYixBLEssQUFDRzsrQkFDSSxBQUFVO1dBQ1Ysb0JBRlEsQUFDUixBQUFnQixBQUNOLEFBRW5CO0FBSHlCLEFBQ3ZCLEdBRE87VUFHRCxvQkFKUyxBQUlDLEFBQ2xCO1VBQVEsb0JBTFMsQUFLQyxBQUNsQjtZQUFVLG9CQU5PLEFBTUcsQSxBQTJFeEI7QUFqRnFCLEFBQ2pCOztrQkFnRkosQUFBZSIsImZpbGUiOiJJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9