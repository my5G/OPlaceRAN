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

var _subscriber = require('../../modules/crud/subscriber');

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

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/containers/Subscriber/Document.js';


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
          subscribers = _this$props.subscribers,
          action = _this$props.action,
          status = _this$props.status;
      var imsi = formData.imsi;

      if (action === 'create' && subscribers && subscribers.data && subscribers.data.filter(function (subscriber) {
        return subscriber.imsi === imsi;
      }).length > 0) {
        errors.imsi.addError('\'' + imsi + '\' is duplicated');
      }

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
        dispatch((0, _subscriber.createSubscriber)({}, formData));
      } else if (action === 'update') {
        dispatch((0, _subscriber.updateSubscriber)(formData.imsi, {}, formData));
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
          subscriber = _props.subscriber,
          profiles = _props.profiles,
          dispatch = _props.dispatch;

      if (subscriber.needsFetch) {
        dispatch(subscriber.fetch);
      }
      if (profiles.needsFetch) {
        dispatch(profiles.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var subscriber = nextProps.subscriber,
          profiles = nextProps.profiles,
          status = nextProps.status;
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          action = _props2.action,
          onHide = _props2.onHide;

      if (subscriber.needsFetch) {
        dispatch(subscriber.fetch);
      }
      if (profiles.needsFetch) {
        dispatch(profiles.fetch);
      }

      if (subscriber.data) {
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
        (0, _traverse2.default)(subscriber.data).forEach(function (x) {
          if (this.key == 'downlink') this.update(Number(x));
          if (this.key == 'uplink') this.update(Number(x));
        });

        if (subscriber.data.security) {
          if (subscriber.data.security.opc) {
            subscriber.data.security.op_type = 0;
            subscriber.data.security.op_value = subscriber.data.security.opc;
          } else {
            subscriber.data.security.op_type = 1;
            subscriber.data.security.op_value = subscriber.data.security.op;
          }
        }

        this.setState({ formData: subscriber.data });
      } else {
        this.setState({ formData: formData });
      }

      if (status.response) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var message = action === 'create' ? "New subscriber created" : status.id + ' subscriber updated';

        dispatch(Notification.success({
          title: 'Subscriber',
          message: message
        }));

        dispatch((0, _actions.clearActionStatus)(_subscriber.MODEL, action));
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
        dispatch((0, _actions.clearActionStatus)(_subscriber.MODEL, action));
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
          subscriber = _props3.subscriber,
          profiles = _props3.profiles,
          onHide = _props3.onHide;

      return _react2.default.createElement(_components.Subscriber.Edit, {
        visible: visible,
        action: action,
        formData: this.state.formData,
        profiles: profiles.data,
        isLoading: subscriber.isLoading && !status.pending,
        validate: validate,
        onHide: onHide,
        onSubmit: handleSubmit,
        onError: handleError, __source: {
          fileName: _jsxFileName,
          lineNumber: 240
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
    subscribers: (0, _selectors.select)((0, _subscriber.fetchSubscribers)(), state.crud),
    subscriber: (0, _selectors.select)((0, _subscriber.fetchSubscriber)(props.imsi), state.crud),
    profiles: (0, _selectors.select)((0, _profile.fetchProfiles)(), state.crud),
    status: (0, _selectors.selectActionStatus)(_subscriber.MODEL, state.crud, props.action)
  };
})(Document);

exports.default = Document;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL1N1YnNjcmliZXIvRG9jdW1lbnQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY29ubmVjdCIsIk5Qcm9ncmVzcyIsIk1PREVMIiwiZmV0Y2hTdWJzY3JpYmVycyIsImZldGNoU3Vic2NyaWJlciIsImNyZWF0ZVN1YnNjcmliZXIiLCJ1cGRhdGVTdWJzY3JpYmVyIiwiZmV0Y2hQcm9maWxlcyIsImNsZWFyQWN0aW9uU3RhdHVzIiwic2VsZWN0Iiwic2VsZWN0QWN0aW9uU3RhdHVzIiwiTm90aWZpY2F0aW9uIiwiU3Vic2NyaWJlciIsInRyYXZlcnNlIiwiZm9ybURhdGEiLCJrIiwiYW1mIiwib3BfdmFsdWUiLCJEb2N1bWVudCIsInN0YXRlIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJwcm9wcyIsInN1YnNjcmliZXJzIiwiYWN0aW9uIiwic3RhdHVzIiwiaW1zaSIsImRhdGEiLCJmaWx0ZXIiLCJzdWJzY3JpYmVyIiwibGVuZ3RoIiwiYWRkRXJyb3IiLCJwZG4iLCJhcG5zIiwibWFwIiwiYXBuIiwiZHVwbGljYXRlcyIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJsYXN0SW5kZXhPZiIsImtleSIsImZvckVhY2giLCJpbmRleCIsImhhbmRsZVN1Ym1pdCIsImRpc3BhdGNoIiwic2VjdXJpdHkiLCJvcF90eXBlIiwib3AiLCJvcGMiLCJjb25maWd1cmUiLCJwYXJlbnQiLCJ0cmlja2xlU3BlZWQiLCJzdGFydCIsIkVycm9yIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsInRpdGxlIiwibWVzc2FnZSIsInN0YWNrIiwicHJvZmlsZXMiLCJuZWVkc0ZldGNoIiwiZmV0Y2giLCJuZXh0UHJvcHMiLCJvbkhpZGUiLCJ4IiwidXBkYXRlIiwiTnVtYmVyIiwic2V0U3RhdGUiLCJyZXNwb25zZSIsImRvbmUiLCJpZCIsInN1Y2Nlc3MiLCJuYW1lIiwic3RhdHVzVGV4dCIsImF1dG9EaXNtaXNzIiwibGFiZWwiLCJjYWxsYmFjayIsInZpc2libGUiLCJpc0xvYWRpbmciLCJwZW5kaW5nIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJjcnVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFFVCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFPLEFBQWtCLEFBQWlCLEFBQWtCOztBQUNyRSxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFROztBQUNqQixBQUFPOztJQUFQLEFBQVk7O0FBRVosQUFBUzs7QUFFVCxBQUFPOzs7Ozs7Ozs7OztBQUVQLElBQU07O09BQ1EsQUFDUCxBQUNIO1NBRlUsQUFFTCxBQUNMO2NBSmEsQUFDSCxBQUdBLEFBRVo7QUFMWSxBQUNWOztnQkFJTSxBQUNNLEFBQ1o7Y0FSYSxBQU1QLEFBRUksQUFFWjtBQUpRLEFBQ047O1dBSUEsQUFDUyxBQUNQOzthQUFPLEFBQ0UsQUFDUDs7MEJBQU8sQUFDYSxBQUNsQjtrQ0FGSyxBQUVxQixBQUMxQjtxQ0FsQlYsQUFBaUIsQUFVUixBQUNMLEFBRVMsQUFFRSxBQUd3QjtBQUh4QixBQUNMO0FBSEcsQUFDTDtBQUhKLEFBQ0UsR0FGRztBQVZRLEFBQ2Y7O0ksQUF3Qkk7Ozs7Ozs7Ozs7Ozs7O2dOLEFBT0o7Z0IsQUFBUTtBQUFBLEFBQ04sYUEyR0YsQSxXQUFXLFVBQUEsQUFBQyxVQUFELEFBQVcsUUFBVzt3QkFDUyxNQURULEFBQ2M7VUFEZCxBQUN2QiwwQkFEdUIsQUFDdkI7VUFEdUIsQUFDVixxQkFEVSxBQUNWO1VBRFUsQUFDRixxQkFERSxBQUNGO1VBREUsQUFFdkIsT0FGdUIsQUFFZCxTQUZjLEFBRXZCLEFBRVI7O1VBQUksV0FBQSxBQUFXLFlBQVgsQUFBdUIsZUFBZSxZQUF0QyxBQUFrRCxvQkFDcEQsQUFBWSxLQUFaLEFBQWlCLE9BQU8sc0JBQUE7ZUFBYyxXQUFBLEFBQVcsU0FBekIsQUFBa0M7QUFBMUQsT0FBQSxFQUFBLEFB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O0FBRUQ7OzhCQUFTLEFBQWE7aUJBQU0sQUFFMUI7bUJBRjBCLEFBRzFCO3VCQUgwQixBQUdiLEFBQ2I7O21CQUFRLEFBQ0MsQUFDUDtzQkFBVSxvQkFBQTtxQkFBQSxBQUFNO0FBTnBCLEFBQVMsQUFBbUIsQUFJbEIsQUFLVjtBQUxVLEFBQ047QUFMd0IsQUFDMUIsU0FETztpQkFTQSxBQUFrQixtREFBM0IsQUFBUyxBQUF5QixBQUNuQztBQUNGOzs7OzZCQW9FUTtVQUFBLEFBRUwsV0FGSyxBQUtILEtBTEcsQUFFTDtVQUZLLEFBR0wsZUFISyxBQUtILEtBTEcsQUFHTDtVQUhLLEFBSUwsY0FKSyxBQUtILEtBTEcsQUFJTDtvQkFVRSxLQWRHLEFBY0U7VUFkRixBQVFMLGtCQVJLLEFBUUw7VUFSSyxBQVNMLGlCQVRLLEFBU0w7VUFUSyxBQVVMLGlCQVZLLEFBVUw7VUFWSyxBQVdMLHFCQVhLLEFBV0w7VUFYSyxBQVlMLG1CQVpLLEFBWUw7VUFaSyxBQWFMLGlCQWJLLEFBYUwsQUFHRjs7MkNBQ0UsQUFBQyx1QkFBRCxBQUFZO2lCQUFaLEFBQ1csQUFDVDtnQkFGRixBQUVVLEFBQ1I7a0JBQVUsS0FBQSxBQUFLLE1BSGpCLEFBR3VCLEFBQ3JCO2tCQUFVLFNBSlosQUFJcUIsQUFDbkI7bUJBQVcsV0FBQSxBQUFXLGFBQWEsQ0FBQyxPQUx0QyxBQUs2QyxBQUMzQztrQkFORixBQU1ZLEFBQ1Y7Z0JBUEYsQUFPVSxBQUNSO2tCQVJGLEFBUVksQUFDVjtpQkFURixBQVNXO29CQVRYO3NCQURGLEFBQ0UsQUFXSDtBQVhHO0FBQ0UsT0FERjs7Ozs7QUF0TWlCLEE7O0FBQWpCLEEsU0FDRyxBO1VBQ0csb0JBRFMsQUFDQyxBQUNsQjtXQUFTLG9CQUZRLEFBRUUsQUFDbkI7VUFBUSxvQixBQUhTLEFBR0M7QUFIRCxBQUNqQjs7QUFrTkosb0NBQ0UsVUFBQSxBQUFDLE9BQUQsQUFBUSxPQUFSOztpQkFDZSx1QkFBQSxBQUFPLHFDQUFvQixNQUR2QixBQUNKLEFBQWlDLEFBQzlDO2dCQUFZLHVCQUFPLGlDQUFnQixNQUF2QixBQUFPLEFBQXNCLE9BQU8sTUFGL0IsQUFFTCxBQUEwQyxBQUN0RDtjQUFVLHVCQUFBLEFBQU8sK0JBQWlCLE1BSGpCLEFBR1AsQUFBOEIsQUFDeEM7WUFBUSxBQUFtQixzREFBTyxNQUExQixBQUFnQyxNQUFNLE1BSmhELEFBQW1CLEFBSVQsQUFBNEM7QUFKbkMsQUFDakI7QUFGTyxDQUFBLEVBQVgsQUFBVyxBQU9ULEFBRUY7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdm1hZG1pbi9PUGxhY2VSQU4vaW1hZ2VzL2NvcmUvY29udGV4dC9mcmVlNWdjL3dlYnVpIn0=