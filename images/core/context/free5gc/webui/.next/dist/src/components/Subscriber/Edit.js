'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _traverse = require('traverse');

var _traverse2 = _interopRequireDefault(_traverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Subscriber/Edit.js';


var schema = {
  "title": "Subscriber Configuration",
  "type": "object",
  "properties": {
    "imsi": {
      "type": "string",
      "title": "IMSI*",
      "required": true,
      "pattern": "^\\d+$",
      "maxLength": 15,
      "messages": {
        "pattern": "Only digits are allowed"
      }
    },
    "security": {
      "title": "",
      "type": "object",
      "properties": {
        "k": {
          "type": "string",
          "title": "Subscriber Key (K)*",
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
  "imsi": {
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

    _this.handleChange = function (formData) {
      var _this$props = _this.props,
          action = _this$props.action,
          profiles = _this$props.profiles;

      if (action === 'create' && (0, _keys2.default)(profiles).length > 0) {
        if (_this.state.profile !== formData.profile) {
          var data = _this.getFormDataFromProfile(formData.profile);
          _this.setState({
            profile: formData.profile,
            formData: data
          });

          return data;
        }
      }

      return undefined;
    };

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
          profiles = props.profiles,
          width = props.width,
          formData = props.formData;

      var state = {
        schema: schema,
        uiSchema: uiSchema,
        formData: formData
      };

      if (action === 'create' && (0, _keys2.default)(profiles).length > 0) {
        if (this.state.profile === undefined) {
          state = (0, _assign2.default)(state, {
            profile: profiles[0]._id
          });
        } else {
          state = (0, _assign2.default)(state, {
            profile: this.state.profile
          });
        }

        state = (0, _extends3.default)({}, state, {
          "schema": (0, _extends3.default)({}, schema, {
            "properties": (0, _extends3.default)({
              profile: {
                type: "string",
                title: "Profile*",
                enum: profiles.map(function (profile) {
                  return profile._id;
                }),
                enumNames: profiles.map(function (profile) {
                  return profile.title;
                }),
                default: state.profile
              }
            }, schema.properties)
          })
        });

        state = (0, _assign2.default)(state, {
          formData: this.getFormDataFromProfile(state.profile)
        });

        delete state.uiSchema.profile;
      } else {
        delete state.schema.properties.profile;
      }

      if (action === 'update') {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "imsi": {
            "ui:disabled": true
          }
        });
      } else if (width !== _withWidth.SMALL) {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "imsi": {
            "ui:autofocus": true
          }
        });
      }

      return state;
    }
  }, {
    key: 'getFormDataFromProfile',
    value: function getFormDataFromProfile(profile) {
      var formData = void 0;

      formData = (0, _assign2.default)({}, this.props.profiles.filter(function (p) {
        return p._id === profile;
      })[0]);
      formData = (0, _assign2.default)(formData, { profile: profile });

      delete formData.title;
      delete formData._id;
      delete formData.__v;

      (0, _traverse2.default)(formData).forEach(function (x) {
        if (this.key == 'downlink') this.update(Number(x));
        if (this.key == 'uplink') this.update(Number(x));
      });
      if (formData.security) {
        if (formData.security.opc) {
          formData.security.op_type = 0;
          formData.security.op_value = formData.security.opc;
        } else {
          formData.security.op_type = 1;
          formData.security.op_value = formData.security.op;
        }
      }

      return formData;
    }
  }, {
    key: 'render',
    value: function render() {
      var handleChange = this.handleChange;
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
        title: action === 'update' ? 'Edit Subscriber' : 'Create Subscriber',
        schema: this.state.schema,
        uiSchema: this.state.uiSchema,
        formData: formData,
        isLoading: isLoading,
        validate: validate,
        onHide: onHide,
        onChange: handleChange,
        onSubmit: onSubmit,
        onError: onError, __source: {
          fileName: _jsxFileName,
          lineNumber: 561
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1N1YnNjcmliZXIvRWRpdC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJ3aXRoV2lkdGgiLCJTTUFMTCIsIkZvcm0iLCJ0cmF2ZXJzZSIsInNjaGVtYSIsInVpU2NoZW1hIiwiY2xhc3NOYW1lcyIsIkVkaXQiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImZvcm1EYXRhIiwiYWN0aW9uIiwicHJvZmlsZXMiLCJsZW5ndGgiLCJzdGF0ZSIsInByb2ZpbGUiLCJkYXRhIiwiZ2V0Rm9ybURhdGFGcm9tUHJvZmlsZSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwiZ2V0U3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJ3aWR0aCIsIl9pZCIsInR5cGUiLCJ0aXRsZSIsImVudW0iLCJtYXAiLCJlbnVtTmFtZXMiLCJkZWZhdWx0IiwicHJvcGVydGllcyIsImZpbHRlciIsInAiLCJfX3YiLCJmb3JFYWNoIiwieCIsImtleSIsInVwZGF0ZSIsIk51bWJlciIsInNlY3VyaXR5Iiwib3BjIiwib3BfdHlwZSIsIm9wX3ZhbHVlIiwib3AiLCJ2aXNpYmxlIiwiaXNMb2FkaW5nIiwidmFsaWRhdGUiLCJvbkhpZGUiLCJvblN1Ym1pdCIsIm9uRXJyb3IiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFFUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUzs7QUFFVCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO1dBQVMsQUFDSixBQUNUO1VBRmEsQUFFTCxBQUNSOzs7Y0FDVSxBQUNFLEFBQ1I7ZUFGTSxBQUVHLEFBQ1Q7a0JBSE0sQUFHTSxBQUNaO2lCQUpNLEFBSUssQUFDWDttQkFMTSxBQUtPLEFBQ2I7O21CQVBVLEFBQ0osQUFNTSxBQUNDLEFBR2Y7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QUFBTyxBQUMvQztZQUFJLEtBQUEsQUFBSyxPQUFULEFBQWdCLFVBQVUsS0FBQSxBQUFLLE9BQU8sT0FBWixBQUFZLEFBQU8sQUFDOUM7QUFIRCxBQUlBO1VBQUksU0FBSixBQUFhLFVBQVUsQUFDckI7WUFBSSxTQUFBLEFBQVMsU0FBYixBQUFzQixLQUFLLEFBQ3pCO21CQUFBLEFBQVMsU0FBVCxBQUFrQixVQUFsQixBQUE0QixBQUM1QjttQkFBQSxBQUFTLFNBQVQsQUFBa0IsV0FBVyxTQUFBLEFBQVMsU0FBdEMsQUFBK0MsQUFDaEQ7QUFIRCxlQUdPLEFBQ0w7bUJBQUEsQUFBUyxTQUFULEFBQWtCLFVBQWxCLEFBQTRCLEFBQzVCO21CQUFBLEFBQVMsU0FBVCxBQUFrQixXQUFXLFNBQUEsQUFBUyxTQUF0QyxBQUErQyxBQUNoRDtBQUNGO0FBRUQ7O2FBQUEsQUFBTyxBQUNSOzs7OzZCQXVCUTtVQUFBLEFBRUwsZUFGSyxBQUdILEtBSEcsQUFFTDttQkFXRSxLQWJHLEFBYUU7VUFiRixBQU1MLGlCQU5LLEFBTUw7VUFOSyxBQU9MLGdCQVBLLEFBT0w7VUFQSyxBQVFMLG1CQVJLLEFBUUw7VUFSSyxBQVNMLGtCQVRLLEFBU0w7VUFUSyxBQVVMLGdCQVZLLEFBVUw7VUFWSyxBQVdMLGtCQVhLLEFBV0w7VUFYSyxBQVlMLGlCQVpLLEFBWUw7VUFaSyxBQWdCTCxXQUNFLEtBakJHLEFBaUJFLE1BakJGLEFBZ0JMLEFBR0Y7OzZCQUNFLEFBQUM7aUJBQUQsQUFDVyxBQUNUO2VBQVEsV0FBRCxBQUFZLFdBQVosQUFBd0Isb0JBRmpDLEFBRXFELEFBQ25EO2dCQUFRLEtBQUEsQUFBSyxNQUhmLEFBR3FCLEFBQ25CO2tCQUFVLEtBQUEsQUFBSyxNQUpqQixBQUl1QixBQUNyQjtrQkFMRixBQUtZLEFBQ1Y7bUJBTkYsQUFNYSxBQUNYO2tCQVBGLEFBT1ksQUFDVjtnQkFSRixBQVFVLEFBQ1I7a0JBVEYsQUFTWSxBQUNWO2tCQVZGLEFBVVksQUFDVjtpQkFYRixBQVdXO29CQVhYO3NCQURGLEFBQ0UsQUFhSDtBQWJHO0FBQ0UsT0FERjs7Ozs7QUE5SmEsQTs7QUFBYixBLEtBQ0csQTtXQUNJLG9CQURRLEFBQ0UsQUFDbkI7VUFBUSxvQkFGUyxBQUVDLEFBQ2xCO1lBQVUsb0JBSE8sQUFHRyxBQUNwQjthQUFXLG9CQUpNLEFBSUksQUFDckI7WUFBVSxvQkFMTyxBQUtHLEFBQ3BCO1VBQVEsb0JBTlMsQUFNQyxBQUNsQjtZQUFVLG9CQVBPLEFBT0csQUFDcEI7V0FBUyxvQkFSUSxBQVFFLEEsQUFxS3ZCO0FBN0txQixBQUNqQjs7a0JBNEtXLDJCQUFmLEFBQWUsQUFBWSIsImZpbGUiOiJFZGl0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZtYWRtaW4vT1BsYWNlUkFOL2ltYWdlcy9jb3JlL2NvbnRleHQvZnJlZTVnYy93ZWJ1aSJ9