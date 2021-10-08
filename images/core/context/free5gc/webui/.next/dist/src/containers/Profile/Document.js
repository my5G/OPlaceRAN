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

var _reactRedux = require('react-redux');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _profile = require('../../modules/crud/profile');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _traverse = require('traverse');

var _traverse2 = _interopRequireDefault(_traverse);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Profile/Document.js';


var formData = {
  "security": {
    k: "465B5CE8 B199B49F AA5F0A2E E238A6BC",
    amf: "8000",
    op_value: "E8ED289D EBA952E4 283B54E8 8E6183CA"
  },
  "ambr": {
    "downlink": 1024000,
    "uplink": 1024000
  },
  "pdn": [{
    "apn": "internet",
    "qos": {
      "qci": 9,
      "arp": {
        "priority_level": 8,
        "pre_emption_capability": 1,
        "pre_emption_vulnerability": 1
      }
    }
  }]
};

var Document = function (_Component) {
  (0, _inherits3.default)(Document, _Component);

  function Document() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Document);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formData: formData
    }, _this.validate = function (formData, errors) {
      var _this$props = _this.props,
          profiles = _this$props.profiles,
          action = _this$props.action,
          status = _this$props.status;

      if (formData.pdn) {
        var apns = formData.pdn.map(function (pdn) {
          return pdn.apn;
        });
        var duplicates = {};
        for (var i = 0; i < apns.length; i++) {
          if (duplicates.hasOwnProperty(apns[i])) {
            duplicates[apns[i]].push(i);
          } else if (apns.lastIndexOf(apns[i]) !== i) {
            duplicates[apns[i]] = [i];
          }
        }

        var _loop = function _loop(key) {
          duplicates[key].forEach(function (index) {
            return errors.pdn[index].apn.addError('\'' + key + '\' is duplicated');
          });
        };

        for (var key in duplicates) {
          _loop(key);
        }
      }

      return errors;
    }, _this.handleSubmit = function (formData) {
      var _this$props2 = _this.props,
          dispatch = _this$props2.dispatch,
          action = _this$props2.action;

      if (formData.security) {
        if (formData.security.op_type === 1) {
          formData.security.op = formData.security.op_value;
          formData.security.opc = null;
        } else {
          formData.security.op = null;
          formData.security.opc = formData.security.op_value;
        }
      }

      _nprogress2.default.configure({
        parent: '#nprogress-base-form',
        trickleSpeed: 5
      });
      _nprogress2.default.start();

      if (action === 'create') {
        dispatch((0, _profile.createProfile)({}, formData));
      } else if (action === 'update') {
        dispatch((0, _profile.updateProfile)(formData._id, {}, formData));
      } else {
        throw new Error('Action type \'' + action + '\' is invalid.');
      }
    }, _this.handleError = function (errors) {
      var dispatch = _this.props.dispatch;

      errors.map(function (error) {
        return dispatch(Notification.error({
          title: 'Validation Error',
          message: error.stack
        }));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Document, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          profile = _props.profile,
          dispatch = _props.dispatch;

      if (profile.needsFetch) {
        dispatch(profile.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var profile = nextProps.profile,
          status = nextProps.status;
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          action = _props2.action,
          onHide = _props2.onHide;

      if (profile.needsFetch) {
        dispatch(profile.fetch);
      }

      if (profile.data) {
        // Mongoose library has a problem for 64bit-long type
        //
        //   FETCH : the library returns 'Number' type for 64bit-long type
        //   CREATE/UPDATE : the library returns 'String' type for 64bit-long type
        //
        // In this case, I cannot avoid json-schema validation function
        // So, I've changed the type from 'String' to 'Number' if the key name is 'downlink' and 'uplink'
        // 
        //    The followings are changed from 'String' to 'Number' after DB CREATE or UPDATE
        //     - ambr.downlink, ambr.uplink, qos.mbr.downlink, qos.mbr.uplink, qos.gbr.downlink, qos.gbr.uplink
        // 
        (0, _traverse2.default)(profile.data).forEach(function (x) {
          if (this.key == 'downlink') this.update(Number(x));
          if (this.key == 'uplink') this.update(Number(x));
        });

        if (profile.data.security) {
          if (profile.data.security.opc) {
            profile.data.security.op_type = 0;
            profile.data.security.op_value = profile.data.security.opc;
          } else {
            profile.data.security.op_type = 1;
            profile.data.security.op_value = profile.data.security.op;
          }
        }
        this.setState({ formData: profile.data });
      } else {
        this.setState({ formData: formData });
      }

      if (status.response) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        //      const message = action === 'create' ? "New profile created" : `${status.id} profile updated`;
        var message = action === 'create' ? "New profile created" : 'This profile updated';

        dispatch(Notification.success({
          title: 'Profile',
          message: message
        }));

        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, action));
        onHide();
      }

      if (status.error) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var response = ((status || {}).error || {}).response || {};

        var title = 'Unknown Code';
        var _message = 'Unknown Error';
        if (response.data && response.data.name && response.data.message) {
          title = response.data.name;
          _message = response.data.message;
        } else {
          title = response.status;
          _message = response.statusText;
        }

        dispatch(Notification.error({
          title: title,
          message: _message,
          autoDismiss: 0,
          action: {
            label: 'Dismiss',
            callback: function callback() {
              return onHide();
            }
          }
        }));
        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, action));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var validate = this.validate,
          handleSubmit = this.handleSubmit,
          handleError = this.handleError;
      var _props3 = this.props,
          visible = _props3.visible,
          action = _props3.action,
          status = _props3.status,
          profile = _props3.profile,
          onHide = _props3.onHide;

      return _react2.default.createElement(_components.Profile.Edit, {
        visible: visible,
        action: action,
        formData: this.state.formData,
        isLoading: profile.isLoading && !status.pending,
        validate: validate,
        onHide: onHide,
        onSubmit: handleSubmit,
        onError: handleError, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      });
    }
  }]);

  return Document;
}(_react.Component);

Document.propTypes = {
  action: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  onHide: _propTypes2.default.func
};

Document = (0, _reactRedux.connect)(function (state, props) {
  return {
    profiles: (0, _selectors.select)((0, _profile.fetchProfiles)(), state.crud),
    profile: (0, _selectors.select)((0, _profile.fetchProfile)(props._id), state.crud),
    status: (0, _selectors.selectActionStatus)(_profile.MODEL, state.crud, props.action)
  };
})(Document);

exports.default = Document;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL1Byb2ZpbGUvRG9jdW1lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29ubmVjdCIsIk5Qcm9ncmVzcyIsIk1PREVMIiwiZmV0Y2hQcm9maWxlcyIsImZldGNoUHJvZmlsZSIsImNyZWF0ZVByb2ZpbGUiLCJ1cGRhdGVQcm9maWxlIiwiY2xlYXJBY3Rpb25TdGF0dXMiLCJzZWxlY3QiLCJzZWxlY3RBY3Rpb25TdGF0dXMiLCJOb3RpZmljYXRpb24iLCJQcm9maWxlIiwidHJhdmVyc2UiLCJmb3JtRGF0YSIsImsiLCJhbWYiLCJvcF92YWx1ZSIsIkRvY3VtZW50Iiwic3RhdGUiLCJ2YWxpZGF0ZSIsImVycm9ycyIsInByb3BzIiwicHJvZmlsZXMiLCJhY3Rpb24iLCJzdGF0dXMiLCJwZG4iLCJhcG5zIiwibWFwIiwiYXBuIiwiZHVwbGljYXRlcyIsImkiLCJsZW5ndGgiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJsYXN0SW5kZXhPZiIsImtleSIsImZvckVhY2giLCJpbmRleCIsImFkZEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZGlzcGF0Y2giLCJzZWN1cml0eSIsIm9wX3R5cGUiLCJvcCIsIm9wYyIsImNvbmZpZ3VyZSIsInBhcmVudCIsInRyaWNrbGVTcGVlZCIsInN0YXJ0IiwiX2lkIiwiRXJyb3IiLCJoYW5kbGVFcnJvciIsImVycm9yIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhY2siLCJwcm9maWxlIiwibmVlZHNGZXRjaCIsImZldGNoIiwibmV4dFByb3BzIiwib25IaWRlIiwiZGF0YSIsIngiLCJ1cGRhdGUiLCJOdW1iZXIiLCJzZXRTdGF0ZSIsInJlc3BvbnNlIiwiZG9uZSIsInN1Y2Nlc3MiLCJuYW1lIiwic3RhdHVzVGV4dCIsImF1dG9EaXNtaXNzIiwibGFiZWwiLCJjYWxsYmFjayIsInZpc2libGUiLCJpc0xvYWRpbmciLCJwZW5kaW5nIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9v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QUFLLE1BSGpCLEFBR3VCLEFBQ3JCO21CQUFXLFFBQUEsQUFBUSxhQUFhLENBQUMsT0FKbkMsQUFJMEMsQUFDeEM7a0JBTEYsQUFLWSxBQUNWO2dCQU5GLEFBTVUsQUFDUjtrQkFQRixBQU9ZLEFBQ1Y7aUJBUkYsQUFRVztvQkFSWDtzQkFERixBQUNFLEFBVUg7QUFWRztBQUNFLE9BREY7Ozs7O0FBMUxpQixBOztBQUFqQixBLFNBQ0csQTtVQUNHLG9CQURTLEFBQ0MsQUFDbEI7V0FBUyxvQkFGUSxBQUVFLEFBQ25CO1VBQVEsb0JBSFMsQUFHQyxBO0FBSEQsQUFDakI7O0FBcU1KLG9DQUNFLFVBQUEsQUFBQyxPQUFELEFBQVEsT0FBUjs7Y0FDWSx1QkFBQSxBQUFPLCtCQUFpQixNQURqQixBQUNQLEFBQThCLEFBQ3hDO2FBQVMsdUJBQU8sMkJBQWEsTUFBcEIsQUFBTyxBQUFtQixNQUFNLE1BRnhCLEFBRVIsQUFBc0MsQUFDL0M7WUFBUSxBQUFtQixtREFBTyxNQUExQixBQUFnQyxNQUFNLE1BSGhELEFBQW1CLEFBR1QsQUFBNEM7QUFIbkMsQUFDakI7QUFGTyxDQUFBLEVBQVgsQUFBVyxBQU1ULEFBRUY7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=