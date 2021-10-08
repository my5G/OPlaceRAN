'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withWidth = require('../../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Profile/Edit.js';


var schema = {
  "title": "Profile Configuration",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title*",
      "required": true,
      "maxLength": 24
    },
    "security": {
      "title": "",
      "type": "object",
      "properties": {
        "k": {
          "type": "string",
          "title": "Profile Key (K)*",
          "required": true,
          "pattern": "^[0-9a-fA-F\\s]+$",
          "messages": {
            "pattern": "Only hexadecimal digits are allowed"
          }
        },
        "amf": {
          "type": "string",
          "title": "Authentication Management Field (AMF)*",
          "required": true,
          "pattern": "^[0-9a-fA-F\\s]+$",
          "messages": {
            "pattern": "Only hexadecimal digits are allowed"
          }
        },
        "op_type": {
          "type": "number",
          "title": "USIM Type",
          "enum": [0, 1],
          "enumNames": ["OPc", "OP"],
          "default": 0
        },
        "op_value": {
          "type": "string",
          "title": "Operator Key (OPc/OP)*",
          "required": true,
          "pattern": "^[0-9a-fA-F\\s]+$",
          "messages": {
            "pattern": "Only hexadecimal digits are allowed"
          }
        }
      }
    },
    "ambr": {
      "type": "object",
      "title": "",
      "properties": {
        "downlink": {
          "type": "number",
          "title": "UE-AMBR Downlink (Kbps)*",
          "required": true
        },
        "uplink": {
          "type": "number",
          "title": "UE-AMBR Uplink (Kbps)*",
          "required": true
        }
      }
    },
    "pdn": {
      "type": "array",
      "title": "APN Configurations",
      "minItems": 1,
      "maxItems": 4,
      "messages": {
        "minItems": "At least 1 APN is required",
        "maxItems": "4 APNs are supported"
      },
      "items": {
        "type": "object",
        "properties": {
          "apn": {
            "type": "string",
            "title": "Access Point Name (APN)*",
            "required": true
          },
          "qos": {
            "type": "object",
            "title": "",
            "properties": {
              "qci": {
                "type": "number",
                "title": "QoS Class Identifier (QCI)*",
                "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 65, 66, 69, 70],
                "default": 9
              },
              "arp": {
                "type": "object",
                "title": "",
                "properties": {
                  "priority_level": {
                    "type": "number",
                    "title": "ARP Priority Level (1-15)*",
                    "default": 8,
                    "minimum": 1,
                    "maximum": 15,
                    "required": true
                  },
                  "pre_emption_capability": {
                    "type": "number",
                    "title": "Capability*",
                    "enum": [1, 0],
                    "enumNames": ["Disabled", "Enabled"],
                    "default": 1
                  },
                  "pre_emption_vulnerability": {
                    "type": "number",
                    "title": "Vulnerability*",
                    "enum": [1, 0],
                    "enumNames": ["Disabled", "Enabled"],
                    "default": 1
                  }
                }
              }
            }
          },
          "ambr": {
            "type": "object",
            "title": "",
            "properties": {
              "downlink": {
                "type": "number",
                "title": "APN-AMBR Downlink (Kbps)"
              },
              "uplink": {
                "type": "number",
                "title": "APN-AMBR Uplink (Kbps)"
              }
            }
          },
          "pgw": {
            "type": "object",
            "title": "",
            "properties": {
              "addr": {
                "type": "string",
                "title": "PGW IPv4 Address",
                "format": "ipv4"
              },
              "addr6": {
                "type": "string",
                "title": "PGW IPv6 Address",
                "format": "ipv6"
              }
            }
          },
          "pcc_rule": {
            "type": "array",
            "title": "PCC Rules",
            "maxItems": 8,
            "messages": {
              "maxItems": "8 PCC Rules are supported"
            },
            "items": {
              "type": "object",
              "properties": {
                "flow": {
                  "type": "array",
                  "title": "",
                  "maxItems": 8,
                  "messages": {
                    "maxItems": "8 Flows are supported"
                  },
                  "items": {
                    "type": "object",
                    "properties": {
                      "direction": {
                        "type": "number",
                        "title": "Flow Direction*",
                        "enum": [1, 2],
                        "enumNames": ["Downlink", "Uplink"],
                        "default": 1
                      },
                      "description": {
                        "type": "string",
                        "title": "Description*",
                        "default": "permit out udp from any 1-65535 to 45.45.45.45",
                        "required": true,
                        "pattern": "^permit\\s+out",
                        "messages": {
                          "pattern": "Begin with reserved keyword 'permit out'."
                        }
                      }
                    }
                  }
                },
                "qos": {
                  "type": "object",
                  "title": "",
                  "properties": {
                    "qci": {
                      "type": "number",
                      "title": "QoS Class Identifier (QCI)*",
                      "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 65, 66, 69, 70],
                      "default": 9
                    },
                    "arp": {
                      "type": "object",
                      "title": "",
                      "properties": {
                        "priority_level": {
                          "type": "number",
                          "title": "ARP Priority Level (1-15)*",
                          "default": 8,
                          "minimum": 1,
                          "maximum": 15,
                          "required": true
                        },
                        "pre_emption_capability": {
                          "type": "number",
                          "title": "Capability*",
                          "enum": [1, 0],
                          "enumNames": ["Disabled", "Enabled"],
                          "default": 1
                        },
                        "pre_emption_vulnerability": (0, _defineProperty3.default)({
                          "type": "number",
                          "title": "Vulnerability*",
                          "default": 1,
                          "minimum": 0,
                          "maximum": 1,
                          "enum": [1, 0],
                          "enumNames": ["Disabled", "Enabled"]
                        }, 'default', 1)
                      }
                    },
                    "mbr": {
                      "type": "object",
                      "title": "",
                      "properties": {
                        "downlink": {
                          "type": "number",
                          "title": "MBR Downlink (Kbps)"
                        },
                        "uplink": {
                          "type": "number",
                          "title": "MBR Uplink (Kbps)"
                        }
                      }
                    },
                    "gbr": {
                      "type": "object",
                      "title": "",
                      "properties": {
                        "downlink": {
                          "type": "number",
                          "title": "GBR Downlink (Kbps)"
                        },
                        "uplink": {
                          "type": "number",
                          "title": "GBR Uplink (Kbps)"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

var uiSchema = {
  "title": {
    classNames: "col-xs-12"
  },
  "security": {
    "k": {
      classNames: "col-xs-7"
    },
    "amf": {
      classNames: "col-xs-5"
    },
    "op_type": {
      classNames: "col-xs-3"
    },
    "op_value": {
      classNames: "col-xs-8"
    }
  },
  "ambr": {
    "downlink": {
      classNames: "col-xs-6"
    },
    "uplink": {
      classNames: "col-xs-6"
    }
  },
  "pdn": {
    "items": {
      "qos": {
        "qci": {
          "ui:widget": "radio",
          "ui:options": {
            "inline": true
          }
        },
        "arp": {
          "priority_level": {
            classNames: "col-xs-6"
          },
          "pre_emption_capability": {
            classNames: "col-xs-3"
          },
          "pre_emption_vulnerability": {
            classNames: "col-xs-3"
          }
        }
      },
      "ambr": {
        "downlink": {
          classNames: "col-xs-6"
        },
        "uplink": {
          classNames: "col-xs-6"
        }
      },
      "pgw": {
        "addr": {
          classNames: "col-xs-6"
        },
        "addr6": {
          classNames: "col-xs-6"
        }
      },
      "pcc_rule": {
        "items": {
          "flow": {
            "items": {
              "direction": {
                classNames: "col-xs-12"
              },
              "description": {
                classNames: "col-xs-12",
                "ui:help": "Hint: Flow-Description(TS29.212), IPFilterRule(RFC 3588)"
              }
            }
          },
          "qos": {
            "qci": {
              "ui:widget": "radio",
              "ui:options": {
                "inline": true
              }
            },
            "arp": {
              "priority_level": {
                classNames: "col-xs-6"
              },
              "pre_emption_capability": {
                classNames: "col-xs-3"
              },
              "pre_emption_vulnerability": {
                classNames: "col-xs-3"
              }
            },
            "mbr": {
              "downlink": {
                classNames: "col-xs-6"
              },
              "uplink": {
                classNames: "col-xs-6"
              }
            },
            "gbr": {
              "downlink": {
                classNames: "col-xs-6"
              },
              "uplink": {
                classNames: "col-xs-6"
              }
            }
          }
        }
      }
    }
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
      var action = props.action,
          width = props.width;

      var state = {
        schema: schema,
        uiSchema: uiSchema
      };

      if (action === 'update') {
        state = (0, _extends3.default)({}, state, {
          uiSchema: (0, _extends3.default)({}, uiSchema, {
            "title": {
              "ui:disabled": true
            }
          })
        });
      } else if (width !== _withWidth.SMALL) {
        state = (0, _extends3.default)({}, state, {
          uiSchema: (0, _extends3.default)({}, uiSchema, {
            "title": {
              "ui:autofocus": true
            }
          })
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
          formData = _props.formData,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onHide = _props.onHide,
          onSubmit = _props.onSubmit,
          onError = _props.onError;

      return _react2.default.createElement(_.Form, {
        visible: visible,
        title: action === 'update' ? 'Edit Profile' : 'Create Profile',
        schema: this.state.schema,
        uiSchema: this.state.uiSchema,
        formData: formData,
        isLoading: isLoading,
        validate: validate,
        onHide: onHide,
        onSubmit: onSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 468
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Byb2ZpbGUvRWRpdC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJ3aXRoV2lkdGgiLCJTTUFMTCIsIkZvcm0iLCJzY2hlbWEiLCJ1aVNjaGVtYSIsImNsYXNzTmFtZXMiLCJFZGl0IiwicHJvcHMiLCJzdGF0ZSIsImdldFN0YXRlRnJvbVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJhY3Rpb24iLCJ3aWR0aCIsInZpc2libGUiLCJmb3JtRGF0YSIsImlzTG9hZGluZyIsInZhbGlkYXRlIiwib25IaWRlIiwib25TdWJtaXQiLCJvbkVycm9yIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTOzs7Ozs7O0FBRVQsSUFBTTtXQUFTLEFBQ0osQUFDVDtVQUZhLEFBRUwsQUFDUjs7O2NBQ1csQUFDQyxBQUNSO2VBRk8sQUFFRSxBQUNUO2tCQUhPLEFBR0ssQUFDWjttQkFMVSxBQUNILEFBSU0sQUFFZjtBQU5TLEFBQ1A7O2VBS1UsQUFDRCxBQUNUO2NBRlUsQUFFRixBQUNSOzs7a0JBQ08sQUFDSyxBQUNSO21CQUZHLEFBRU0sQUFDVDtzQkFIRyxBQUdTLEFBQ1o7cUJBSkcsQUFJUSxBQUNYOzt1QkFOVSxBQUNQLEFBS1MsQUFDQyxBQUdmO0FBSmMsQUFDVjtBQU5DLEFBQ0g7O2tCQVFLLEFBQ0csQUFDUjttQkFGSyxBQUVJLEFBQ1Q7c0JBSEssQUFHTyxBQUNaO3FCQUpLLEFBSU0sQUFDWDs7dUJBZlUsQUFVTCxBQUtPLEFBQ0MsQUFHZjtBQUpjLEFBQ1Y7QUFORyxBQUNMOztrQkFRUyxBQUNELEFBQ1I7bUJBRlMsQUFFQSxBQUNUO2tCQUFRLENBQUEsQUFBQyxHQUhBLEFBR0QsQUFBSSxB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QVJLLEFBUUw7VUFSSyxBQVNMLGlCQVRLLEFBU0wsQUFHRjs7NkJBQ0UsQUFBQztpQkFBRCxBQUNXLEFBQ1Q7ZUFBUSxXQUFELEFBQVksV0FBWixBQUF3QixpQkFGakMsQUFFa0QsQUFDaEQ7Z0JBQVEsS0FBQSxBQUFLLE1BSGYsQUFHcUIsQUFDbkI7a0JBQVUsS0FBQSxBQUFLLE1BSmpCLEFBSXVCLEFBQ3JCO2tCQUxGLEFBS1ksQUFDVjttQkFORixBQU1hLEFBQ1g7a0JBUEYsQUFPWSxBQUNWO2dCQVJGLEFBUVUsQUFDUjtrQkFURixBQVNZLEFBQ1Y7aUJBVkYsQUFVVztvQkFWWDtzQkFERixBQUNFLEFBWUg7QUFaRztBQUNFLE9BREY7Ozs7O0EsQUF2RWE7O0FBQWIsQSxLQUNHLEE7V0FDSSxvQkFEUSxBQUNFLEFBQ25CO1VBQVEsb0JBRlMsQUFFQyxBQUNsQjtZQUFVLG9CQUhPLEFBR0csQUFDcEI7YUFBVyxvQkFKTSxBQUlJLEFBQ3JCO1lBQVUsb0JBTE8sQUFLRyxBQUNwQjtVQUFRLG9CQU5TLEFBTUMsQUFDbEI7WUFBVSxvQkFQTyxBQU9HLEFBQ3BCO1dBQVMsb0JBUlEsQUFRRSxBLEFBNkV2QjtBQXJGcUIsQUFDakI7O2tCQW9GVywyQkFBZixBQUFlLEFBQVkiLCJmaWxlIjoiRWRpdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92bWFkbWluL09QbGFjZVJBTi9pbWFnZXMvY29yZS9jb250ZXh0L2ZyZWU1Z2Mvd2VidWkifQ==