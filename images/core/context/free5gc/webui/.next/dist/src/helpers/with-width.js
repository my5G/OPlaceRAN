'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LARGE = exports.MEDIUM = exports.SMALL = undefined;
exports.default = withWidth;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/helpers/with-width.js';
var SMALL = exports.SMALL = 1;
var MEDIUM = exports.MEDIUM = 2;
var LARGE = exports.LARGE = 3;

function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$largeWidth = options.largeWidth,
      largeWidth = _options$largeWidth === undefined ? 992 : _options$largeWidth,
      _options$mediumWidth = options.mediumWidth,
      mediumWidth = _options$mediumWidth === undefined ? 768 : _options$mediumWidth,
      _options$resizeInterv = options.resizeInterval,
      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;

  return function (MyComponent) {
    return function (_Component) {
      (0, _inherits3.default)(WithWidth, _Component);

      function WithWidth() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WithWidth);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithWidth.__proto__ || (0, _getPrototypeOf2.default)(WithWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          width: null
        }, _this.handleResize = function () {
          clearTimeout(_this.deferTimer);
          _this.deferTimer = setTimeout(function () {
            _this.updateWidth();
          }, resizeInterval);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WithWidth, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateWidth();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.deferTimer);
        }
      }, {
        key: 'updateWidth',
        value: function updateWidth() {
          var innerWidth = window.innerWidth;
          var width = void 0;

          if (innerWidth >= largeWidth) {
            width = LARGE;
          } else if (innerWidth >= mediumWidth) {
            width = MEDIUM;
          } else {
            // innerWidth < 768
            width = SMALL;
          }

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var width = this.state.width;

          /**
           * When rendering the component on the server,
           * we have no idea about the screen width.
           * In order to prevent blinks and help the reconciliation
           * we are not rendering the component.
           *
           * A better alternative would be to send client hints.
           * But the browser support of this API is low:
           * http://caniuse.com/#search=client%20hint
           */
          if (width === null) {
            return null;
          }

          return _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          }, _react2.default.createElement(MyComponent, (0, _extends3.default)({
            width: width
          }, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          })));
        }
      }]);

      return WithWidth;
    }(_react.Component);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWxwZXJzL3dpdGgtd2lkdGguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJFdmVudExpc3RlbmVyIiwiU01BTEwiLCJNRURJVU0iLCJMQVJHRSIsIndpdGhXaWR0aCIsIm9wdGlvbnMiLCJsYXJnZVdpZHRoIiwibWVkaXVtV2lkdGgiLCJyZXNpemVJbnRlcnZhbCIsIk15Q29tcG9uZW50Iiwic3RhdGUiLCJ3aWR0aCIsImhhbmRsZVJlc2l6ZSIsImNsZWFyVGltZW91dCIsImRlZmVyVGltZXIiLCJzZXRUaW1lb3V0IiwidXBkYXRlV2lkdGgiLCJpbm5lcldpZHRoIiwid2luZG93Iiwic2V0U3RhdGUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBRVA7Ozs7Ozs7QUFBTyxJQUFNLHdCQUFOLEFBQWMsQUFDckI7QUFBTyxJQUFNLDBCQUFOLEFBQWUsQUFDdEI7QUFBTyxJQUFNLHdCQUFOLEFBQWMsQUFFckI7O0FBQWUsU0FBQSxBQUFTLFlBQXdCO01BQWQsQUFBYyw4RUFBSixBQUFJOzRCQUFBLEFBSzFDLFFBTDBDLEFBRTVDO01BRjRDLEFBRTVDLGlEQUY0QyxBQUUvQixNQUYrQjs2QkFBQSxBQUsxQyxRQUwwQyxBQUc1QztNQUg0QyxBQUc1QyxtREFINEMsQUFHOUIsTUFIOEI7OEJBQUEsQUFLMUMsUUFMMEMsQUFJNUM7TUFKNEMsQUFJNUMsdURBSjRDLEFBSTNCLE1BR25COztTQUFPLFVBQUEsQUFBQyxhQUFnQixBQUN0QjtpQ0FBQTt5Q0FBQTs7MkJBQUE7WUFBQTs7MEJBQUE7OzRDQUFBOzs2RkFBQTtpQ0FBQTtBQUFBOztzTkFBQSxBQUNFO2lCQURGLEFBQ1UsQUFDQztBQURELEFBQ04saUJBRkosQUFhRSxlQUFlLFlBQU0sQUFDbkI7dUJBQWEsTUFBYixBQUFrQixBQUNsQjtnQkFBQSxBQUFLLHdCQUF3QixZQUFNLEFBQ2pDO2tCQUFBLEFBQUssQUFDTjtBQUZpQixXQUFBLEVBQWxCLEFBQWtCLEFBRWYsQUFDSjtBQWxCSCxtRUFBQTtBQUFBOzs7YUFBQTs0Q0FLc0IsQUFDbEI7ZUFBQSxBQUFLLEFBQ047QUFQSDtBQUFBO2FBQUE7K0NBU3lCLEFBQ3JCO3VCQUFhLEtBQWIsQUFBa0IsQUFDbkI7QUFYSDtBQUFBO2FBQUE7c0NBb0JnQixBQUNaO2NBQU0sYUFBYSxPQUFuQixBQUEwQixBQUMxQjtjQUFJLGFBQUosQUFFQTs7Y0FBSSxjQUFKLEFBQWtCLFlBQVksQUFDNUI7b0JBQUEsQUFBUSxBQUNUO0FBRkQscUJBRVcsY0FBSixBQUFrQixhQUFhLEFBQ3BDO29CQUFBLEFBQVEsQUFDVDtBQUZNLFdBQUEsTUFFQSxBQUFFO0FBQ1A7b0JBQUEsQUFBUSxBQUNUO0FBRUQ7O2NBQUksVUFBVSxLQUFBLEFBQUssTUFBbkIsQUFBeUIsT0FBTyxBQUM5QjtpQkFBQSxBQUFLO3FCQUFMLEFBQWMsQUFDTCxBQUVWO0FBSGUsQUFDWjtBQUdMO0FBckNIO0FBQUE7YUFBQTtpQ0F1Q1csQUFDUDtjQUFNLFFBQVEsS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBRXpCOztBQVVBOzs7Ozs7Ozs7O2NBQUksVUFBSixBQUFjLE1BQU0sQUFDbEI7bUJBQUEsQUFBTyxBQUNSO0FBRUQ7O2lDQUNFLEFBQUMsOENBQWMsUUFBZixBQUFzQixVQUFTLFVBQVUsS0FBekMsQUFBOEM7d0JBQTlDOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGdDQUNFLEFBQUM7bUJBQUQsQUFDUztBQUFQLGFBQ0ksS0FGTixBQUVXOzt3QkFGWDswQkFGSixBQUNFLEFBQ0UsQUFNTDtBQU5LO0FBQUE7QUExRFI7QUFBQTs7YUFBQTtBQUFBLEFBQStCLEFBa0VoQztBQW5FRCxBQW9FRCIsImZpbGUiOiJ3aXRoLXdpZHRoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9