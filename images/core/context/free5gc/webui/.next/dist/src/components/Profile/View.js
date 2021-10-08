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

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _delete = require('react-icons/lib/md/delete');

var _delete2 = _interopRequireDefault(_delete);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

var _security = require('react-icons/lib/md/security');

var _security2 = _interopRequireDefault(_security);

var _cast = require('react-icons/lib/md/cast');

var _cast2 = _interopRequireDefault(_cast);

var _keyboardControl = require('react-icons/lib/md/keyboard-control');

var _keyboardControl2 = _interopRequireDefault(_keyboardControl);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vmadmin/OPlaceRAN/images/core/context/free5gc/webui/src/components/Profile/View.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 4rem);\n  '], ['\n    width: calc(100vw - 4rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: calc(100vh - 16rem);\n  '], ['\n    height: calc(100vh - 16rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'g5tuxt-0'
})(['display:flex;flex-direction:column;postion:relative;width:900px;', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], _styleUtils.media.mobile(_templateObject));

var Header = _styledComponents2.default.div.withConfig({
  componentId: 'g5tuxt-1'
})(['position:relative;display:flex;background:', ';.title{padding:1.5rem;color:', ';font-size:1.5rem;}.actions{position:absolute;top:0;right:0;width:8rem;height:100%;display:flex;align-items:center;justify-content:center;}'], _openColor2.default.gray[1], _openColor2.default.gray[8]);

var CircleButton = _styledComponents2.default.div.withConfig({
  componentId: 'g5tuxt-2'
})(['height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;margin:1px;color:', ';border-radius:1rem;font-size:1.5rem;&:hover{color:', ';}&.delete{&:hover{color:', ';}}'], _openColor2.default.gray[6], _openColor2.default.indigo[6], _openColor2.default.pink[6]);

var Body = _styledComponents2.default.div.withConfig({
  componentId: 'g5tuxt-3'
})(['display:block;margin:0.5rem;height:500px;', ' overflow:scroll;'], _styleUtils.media.mobile(_templateObject2));

var Profile = _styledComponents2.default.div.withConfig({
  componentId: 'g5tuxt-4'
})(['display:flex;flex-direction:column;margin:0,auto;color:', ';.header{margin:12px;font-size:16px;}.body{display:flex;flex-direction:row;flex:1;margin:6px;.left{width:80px;text-align:center;font-size:18px;color:', ';}.right{display:flex;flex-direction:column;flex:1;.data{flex:1;font-size:12px;margin:4px;}}}'], _openColor2.default.gray[9], _openColor2.default.gray[6]);

var Pdn = _styledComponents2.default.div.withConfig({
  componentId: 'g5tuxt-5'
})(['display:flex;flex-direction:column;margin:0 auto;color:', ';.header{margin:12px;font-size:16px;}.body{display:flex;flex-direction:row;flex:1;margin:0px 32px;.small_data{width:50px;font-size:12px;margin:4px;}.medium_data{width:80px;font-size:12px;margin:4px;}.large_data{width:140px;font-size:12px;margin:4px;}}'], _openColor2.default.gray[9]);
var View = function View(_ref) {
  var visible = _ref.visible,
      disableOnClickOutside = _ref.disableOnClickOutside,
      profile = _ref.profile,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      onHide = _ref.onHide;

  var _id = (profile || {})._id;
  var title = (profile || {}).title;
  var security = (profile || {}).security || {};
  var ambr = (profile || {}).ambr || {};
  var pdns = (profile || {}).pdn || [];

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, _react2.default.createElement(_.Modal, {
    visible: visible,
    onOutside: onHide,
    disableOnClickOutside: disableOnClickOutside, __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }, _react2.default.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    }
  }, _react2.default.createElement('div', { className: 'title', __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }, title), _react2.default.createElement('div', { className: 'actions', __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    }
  }, _react2.default.createElement(_.Tooltip, { content: 'Edit', width: '60px', __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, _react2.default.createElement(CircleButton, { onClick: function onClick() {
      return onEdit(_id);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, _react2.default.createElement(_edit2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }))), _react2.default.createElement(_.Tooltip, { content: 'Delete', width: '60px', __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: function onClick() {
      return onDelete(_id);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, _react2.default.createElement(_delete2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }))), _react2.default.createElement(_.Tooltip, { content: 'Close', width: '60px', __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: onHide, __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, _react2.default.createElement(_close2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }))))), _react2.default.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, _react2.default.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    }
  }, _react2.default.createElement('div', { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    }
  }, 'Profile Configuration'), _react2.default.createElement('div', { className: 'body', __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  }, _react2.default.createElement('div', { className: 'left', __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }, _react2.default.createElement(_security2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    }
  })), _react2.default.createElement('div', { className: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  }, _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    }
  }, security.k, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }), 'K')), security.opc && _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    }
  }, security.opc, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    }
  }), 'OPc')), security.op && _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    }
  }, security.op, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }), 'OP')), _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, security.amf, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }), 'AMF')), security.rand && _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, security.rand, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }), 'RAND')), security.sqn && _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    }
  }, security.sqn, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }), 'SQN')))), _react2.default.createElement('div', { className: 'body', __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    }
  }, _react2.default.createElement('div', { className: 'left', __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    }
  }, _react2.default.createElement(_cast2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    }
  })), _react2.default.createElement('div', { className: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    }
  }, _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    }
  }, ambr.downlink, ' Kbps', _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }), 'UL')), _react2.default.createElement('div', { className: 'data', __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    }
  }, ambr.uplink, ' Kbps', _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    }
  }, _react2.default.createElement(_keyboardControl2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    }
  }), 'DL'))))), _react2.default.createElement(Pdn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    }
  }, _react2.default.createElement('div', { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    }
  }, 'APN Configrations'), _react2.default.createElement('div', { className: 'body', style: { color: _openColor2.default.gray[5] }, __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    }
  }, _react2.default.createElement('div', { className: 'medium_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    }
  }, 'APN'), _react2.default.createElement('div', { className: 'small_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    }
  }, 'QCI'), _react2.default.createElement('div', { className: 'small_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    }
  }, 'ARP'), _react2.default.createElement('div', { className: 'medium_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    }
  }, 'Capability'), _react2.default.createElement('div', { className: 'medium_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    }
  }, 'Vulnerablility'), _react2.default.createElement('div', { className: 'large_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    }
  }, 'MBR DL/UL(Kbps)'), _react2.default.createElement('div', { className: 'large_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    }
  }, 'GBR DL/UL(Kbps)'), _react2.default.createElement('div', { className: 'medium_data', __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    }
  }, 'PGW IP')), pdns.map(function (pdn) {
    return _react2.default.createElement('div', { key: pdn.apn, __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      }
    }, _react2.default.createElement('div', { className: 'body', __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      }
    }, _react2.default.createElement('div', { className: 'medium_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      }
    }, pdn.apn), _react2.default.createElement('div', { className: 'small_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      }
    }, pdn.qos.qci), _react2.default.createElement('div', { className: 'small_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      }
    }, pdn.qos.arp.priority_level), _react2.default.createElement('div', { className: 'medium_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      }
    }, pdn.qos.arp.pre_emption_capability === 1 ? "Disabled" : "Enabled"), _react2.default.createElement('div', { className: 'medium_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      }
    }, pdn.qos.arp.pre_emption_vulnerability === 1 ? "Disabled" : "Enabled"), pdn['ambr'] === undefined ? _react2.default.createElement('div', { className: 'large_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      }
    }, 'unlimited/unlimited') : _react2.default.createElement('div', { className: 'large_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      }
    }, pdn.ambr['downlink'] === undefined ? "unlimited" : pdn.ambr.downlink, '/', pdn.ambr['uplink'] === undefined ? "unlimited" : pdn.ambr.uplink), _react2.default.createElement('div', { className: 'large_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      }
    }), _react2.default.createElement('div', { className: 'small_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      }
    }, (pdn.pgw || {}).addr), _react2.default.createElement('div', { className: 'small_data', __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      }
    }, (pdn.pgw || {}).addr6)), pdn['pcc_rule'] !== undefined && pdn.pcc_rule.map(function (pcc_rule, index) {
      return _react2.default.createElement('div', { key: index, __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, _react2.default.createElement('div', { className: 'body', __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement('div', { className: 'medium_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }), _react2.default.createElement('div', { className: 'small_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, pcc_rule.qos.qci), _react2.default.createElement('div', { className: 'small_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, pcc_rule.qos.arp.priority_level), _react2.default.createElement('div', { className: 'medium_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, pcc_rule.qos.arp.pre_emption_capability === 1 ? "Disabled" : "Enabled"), _react2.default.createElement('div', { className: 'medium_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, pcc_rule.qos.arp.pre_emption_vulnerability === 1 ? "Disabled" : "Enabled"), pcc_rule.qos['mbr'] === undefined ? _react2.default.createElement('div', { className: 'large_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, 'unlimited/unlimited') : _react2.default.createElement('div', { className: 'large_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, pcc_rule.qos.mbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.downlink, '/', pcc_rule.qos.mbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.uplink), pcc_rule.qos['gbr'] === undefined ? _react2.default.createElement('div', { className: 'large_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, 'unlimited/unlimited') : _react2.default.createElement('div', { className: 'large_data', __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, pcc_rule.qos.gbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.downlink, '/', pcc_rule.qos.gbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.uplink)), pcc_rule['flow'] !== undefined && pcc_rule.flow.map(function (flow, index) {
        return _react2.default.createElement('div', { className: 'body', key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          }
        }, _react2.default.createElement('div', { className: 'medium_data', __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        }), _react2.default.createElement('div', { className: 'small_data', style: { color: _openColor2.default.gray[5] }, __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          }
        }, flow.direction == 1 && "Downlink", flow.direction == 2 && "Uplink"), _react2.default.createElement('div', { className: 'large_data', style: { width: "480px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          }
        }, flow.description));
      }));
    }));
  }))))), _react2.default.createElement(_.Dimmed, { visible: visible, __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    }
  }));
};

exports.default = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1Byb2ZpbGUvVmlldy5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJvYyIsIm1lZGlhIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiQ2xvc2VJY29uIiwiU2VjdXJpdHlJY29uIiwiUGRuSWNvbiIsIktleWJvYXJkQ29udHJvbEljb24iLCJNb2RhbCIsIlRvb2x0aXAiLCJEaW1tZWQiLCJXcmFwcGVyIiwiZGl2IiwibW9iaWxlIiwiSGVhZGVyIiwiZ3JheSIsIkNpcmNsZUJ1dHRvbiIsImluZGlnbyIsInBpbmsiLCJCb2R5IiwiUHJvZmlsZSIsIlBkbiIsIlZpZXciLCJ2aXNpYmxlIiwiZGlzYWJsZU9uQ2xpY2tPdXRzaWRlIiwicHJvZmlsZSIsIm9uRWRpdCIsIm9uRGVsZXRlIiwib25IaWRlIiwiX2lkIiwidGl0bGUiLCJzZWN1cml0eSIsImFtYnIiLCJwZG5zIiwicGRuIiwiayIsImNvbG9yIiwib3BjIiwib3AiLCJhbWYiLCJyYW5kIiwic3FuIiwiZG93bmxpbmsiLCJ1cGxpbmsiLCJtYXAiLCJhcG4iLCJxb3MiLCJxY2kiLCJhcnAiLCJwcmlvcml0eV9sZXZlbCIsInByZV9lbXB0aW9uX2NhcGFiaWxpdHkiLCJwcmVfZW1wdGlvbl92dWxuZXJhYmlsaXR5IiwidW5kZWZpbmVkIiwicGd3IiwiYWRkciIsImFkZHI2IiwicGNjX3J1bGUiLCJpbmRleCIsIm1iciIsImdiciIsImZsb3ciLCJkaXJlY3Rpb24iLCJ3aWR0aCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFPLEFBQVM7Ozs7Ozs7OztBQUV6QixJQUFNLHFDQUFBLEFB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