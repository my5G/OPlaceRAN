'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _withWidth = require('../../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Account/Edit.js';


var schema = {
  "title": "",
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "title": "Username*",
      "required": true,
      "maxLength": 24
    },
    "roles": {
      "type": "array",
      "title": "",
      "items": {
        "type": "string",
        "title": "Role",
        "enum": ["user", "admin"],
        "required": true
      }
    },
    "password1": {
      "type": "string",
      "title": "Password*"
    },
    "password2": {
      "type": "string",
      "title": "Confirm Password*"
    }
  }
};

var uiSchema = {
  "password1": {
    "classNames": "col-xs-6",
    "ui:widget": "password"
  },
  "password2": {
    "classNames": "col-xs-6",
    "ui:widget": "password"
  }
};

var Edit = function (_Component) {
  (0, _inherits3.default)(Edit, _Component);

  function Edit(props) {
    (0, _classCallCheck3.default)(this, Edit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || (0, _getPrototypeOf2.default)(Edit)).call(this, props));

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  (0, _createClass3.default)(Edit, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      this.setState(this.getStateFromProps(nextProps));
    }
  }, {
    key: 'getStateFromProps',
    value: function getStateFromProps(props) {
      var session = props.session,
          action = props.action,
          width = props.width,
          formData = props.formData;
      var _session$user = session.user,
          username = _session$user.username,
          roles = _session$user.roles;

      var state = {
        schema: schema,
        uiSchema: uiSchema,
        formData: formData
      };

      if (action === 'update' && (roles.indexOf('admin') === -1 || formData.username === username)) {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "roles": {
            "ui:disabled": true,
            "ui:options": {
              "addable": false,
              "orderable": false,
              "removable": false
            }
          }
        });
      } else {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "roles": {
            "ui:options": {
              "addable": false,
              "orderable": false,
              "removable": false
            }
          }
        });
      }

      if (action === 'update') {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "username": {
            "ui:disabled": true
          }
        });
      } else if (width !== _withWidth.SMALL) {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "username": {
            "ui:autofocus": true
          }
        });
      }

      return state;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          action = _props.action,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onHide = _props.onHide,
          onSubmit = _props.onSubmit,
          onError = _props.onError;
      var formData = this.state.formData;

      return _react2.default.createElement(_.Form, {
        visible: visible,
        title: action === 'update' ? 'Edit Account' : 'Create Account',
        width: '480px',
        height: '400px',
        schema: this.state.schema,
        uiSchema: this.state.uiSchema,
        formData: formData,
        isLoading: isLoading,
        validate: validate,
        onHide: onHide,
        onSubmit: onSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      });
    }
  }]);

  return Edit;
}(_react.Component);

Edit.propTypes = {
  visible: _propTypes2.default.bool,
  action: _propTypes2.default.string,
  formData: _propTypes2.default.object,
  isLoading: _propTypes2.default.bool,
  validate: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onError: _propTypes2.default.func
};

exports.default = (0, _withWidth2.default)()(Edit);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FjY291bnQvRWRpdC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJ3aXRoV2lkdGgiLCJTTUFMTCIsIkZvcm0iLCJzY2hlbWEiLCJ1aVNjaGVtYSIsIkVkaXQiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsInNlc3Npb24iLCJhY3Rpb24iLCJ3aWR0aCIsImZvcm1EYXRhIiwidXNlciIsInVzZXJuYW1lIiwicm9sZXMiLCJpbmRleE9mIiwidmlzaWJsZSIsImlzTG9hZGluZyIsInZhbGlkYXRlIiwib25IaWRlIiwib25TdWJtaXQiLCJvbkVycm9yIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVM7Ozs7Ozs7QUFFVCxJQUFNO1dBQVMsQUFDSixBQUNUO1VBRmEsQUFFTCxBQUNSOzs7Y0FDYyxBQUNGLEFBQ1I7ZUFGVSxBQUVELEFBQ1Q7a0JBSFUsQUFHRSxBQUNaO21CQUxVLEFBQ0EsQUFJRyxBQUVmO0FBTlksQUFDVjs7Y0FLTyxBQUNFLEFBQ1Q7ZUFGTyxBQUVHLEFBQ1Y7O2dCQUFTLEFBQ0MsQUFDUjtpQkFGTyxBQUVFLEFBQ1Q7Z0JBQVEsQ0FBQSxBQUFFLFFBSEgsQUFHQyxBQUFVLEFBQ2xCO29CQWRRLEFBT0gsQUFHRSxBQUlLLEFBR2hCO0FBUFcsQUFDUDtBQUpLLEFBQ1A7O2NBU1csQUFDSCxBQUNSO2VBbkJVLEFBaUJDLEFBRUYsQUFFWDtBQUphLEFBQ1g7O2NBR1csQUFDSCxBQUNSO2VBMUJOLEFBQWUsQUFHQyxBQXFCQyxBQUVGO0FBRkUsQUFDWDtBQXRCVSxBQUNaO0FBSlcsQUFDYjs7QUE4QkYsSUFBTTs7a0JBQ1UsQUFDRyxBQUNmO2lCQUhhLEFBQ0QsQUFFQyxBQUVmO0FBSmMsQUFDWjs7a0JBR1ksQUFDRyxBQUNmO2lCQVBKLEFBQWlCLEFBS0QsQUFFQztBQUZELEFBQ1o7QUFOYSxBQUNmOztJLEFBVUk7Z0NBWUo7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUssUUFBUSxNQUFBLEFBQUssa0JBSEQsQUFHakIsQUFBYSxBQUF1QjtXQUNyQzs7Ozs7OEMsQUFFeUIsV0FBVyxBQUVuQzs7V0FBQSxBQUFLLFNBQVMsS0FBQSxBQUFLLGtCQUFuQixBQUFjLEFBQXVCLEFBQ3RDOzs7O3NDQUVpQixBLE9BQU87VUFBQSxBQUVyQixVQUZxQixBQU1uQixNQU5tQixBQUVyQjtVQUZxQixBQUdyQixTQUhxQixBQU1uQixNQU5tQixBQUdyQjtVQUhxQixBQUlyQixRQUpxQixBQU1uQixNQU5tQixBQUlyQjtVQUpxQixBQUtyQixXQUxxQixBQU1uQixNQU5tQixBQUtyQjswQkFNRSxRQVhtQixBQVdYO1VBWFcsQUFTckIseUJBVHFCLEFBU3JCO1VBVHFCLEFBVXJCLHNCQVZxQixBQVVyQixBQUdGOztVQUFJO2dCQUFRLEFBRVY7a0JBRlUsQUFHVjtrQkFIRixBQUFZLEFBTVo7QUFOWSxBQUNWOztVQUtFLFdBQUEsQUFBVyxhQUFhLE1BQUEsQUFBTSxRQUFOLEFBQWMsYUFBYSxDQUEzQixBQUE0QixLQUFLLFNBQUEsQUFBUyxhQUF0RSxBQUFJLEFBQStFLFdBQVcsQUFDNUY7Y0FBQSxBQUFNLGlDQUF5QixNQUFkLEFBQW9COzsyQkFDMUIsQUFDUSxBQUNmOzt5QkFBYyxBQUNELEFBQ1g7MkJBRlksQUFFQyxBQUNiOzJCQU5OLEFBQWlCLEFBQThCLEFBQ3BDLEFBRU8sQUFHQyxBQUlwQjtBQVBtQixBQUNaO0FBSEssQUFDUDtBQUYyQyxBQUM3QyxTQURlO0FBRG5CLGFBV08sQUFDTDtjQUFBLEFBQU0saUNBQXlCLE1BQWQsQUFBb0I7Ozt5QkFFbkIsQUFDRCxBQUNYOzJCQUZZLEFBRUMsQUFDYjsyQkFMTixBQUFpQixBQUE4QixBQUNwQyxBQUNPLEFBR0MsQUFJcEI7QUFQbUIsQUFDWjtBQUZLLEFBQ1A7QUFGMkMsQUFDN0MsU0FEZTtBQVduQjs7VUFBSSxXQUFKLEFBQWUsVUFBVSxBQUN2QjtjQUFBLEFBQU0saUNBQXlCLE1BQWQsQUFBb0I7OzJCQUFyQyxBQUFpQixBQUE4QixBQUNqQyxBQUNLLEFBR3BCO0FBSmUsQUFDVjtBQUYyQyxBQUM3QyxTQURlO0FBRG5CLGFBTU8sSUFBQSxBQUFJLEFBQVUsNEJBQU8sQUFDMUI7Y0FBQSxBQUFNLGlDQUF5QixNQUFkLEFBQW9COzs0QkFBckMsQUFBaUIsQUFBOEIsQUFDakMsQUFDTSxBQUdyQjtBQUplLEFBQ1Y7QUFGMkMsQUFDN0MsU0FEZTtBQU9uQjs7YUFBQSxBQUFPLEFBQ1I7Ozs7NkJBRVE7bUJBU0gsS0FURyxBQVNFO1VBVEYsQUFFTCxpQkFGSyxBQUVMO1VBRkssQUFHTCxnQkFISyxBQUdMO1VBSEssQUFJTCxtQkFKSyxBQUlMO1VBSkssQUFLTCxrQkFMSyxBQUtMO1VBTEssQUFNTCxnQkFOSyxBQU1MO1VBTkssQUFPTCxrQkFQSyxBQU9MO1VBUEssQUFRTCxpQkFSSyxBQVFMO1VBUkssQUFZTCxXQUNFLEtBYkcsQUFhRSxNQWJGLEFBWUwsQUFHRjs7NkJBQ0UsQUFBQztpQkFBRCxBQUNXLEFBQ1Q7ZUFBUSxXQUFELEFBQVksV0FBWixBQUF3QixpQkFGakMsQUFFa0QsQUFDaEQ7ZUFIRixBQUdRLEFBQ047Z0JBSkYsQUFJUyxBQUNQO2dCQUFRLEtBQUEsQUFBSyxNQUxmLEFBS3FCLEFBQ25CO2tCQUFVLEtBQUEsQUFBSyxNQU5qQixBQU11QixBQUNyQjtrQkFQRixBQU9ZLEFBQ1Y7bUJBUkYsQUFRYSxBQUNYO2tCQVRGLEFBU1ksQUFDVjtnQkFWRixBQVVVLEFBQ1I7a0JBWEYsQUFXWSxBQUNWO2lCQVpGLEFBWVc7b0JBWlg7c0JBREYsQUFDRSxBQWNIO0FBZEc7QUFDRSxPQURGOzs7OztBLEFBbEdhOztBLEFBQWIsS0FDRyxBO1dBQ0ksb0JBRFEsQUFDRSxBQUNuQjtVQUFRLG9CQUZTLEFBRUMsQUFDbEI7WUFBVSxvQkFITyxBQUdHLEFBQ3BCO2FBQVcsb0JBSk0sQUFJSSxBQUNyQjtZQUFVLG9CQUxPLEFBS0csQUFDcEI7VUFBUSxvQkFOUyxBQU1DLEFBQ2xCO1lBQVUsb0JBUE8sQUFPRyxBQUNwQjtXQUFTLG9CQVJRLEFBUUUsQSxBQTBHdkI7QUFsSHFCLEFBQ2pCOztrQkFpSFcsMkJBQWYsQUFBZSxBQUFZIiwiZmlsZSI6IkVkaXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=