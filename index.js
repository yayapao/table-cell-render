'use strict';

var React = require('react');
var antd = require('antd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "button.tcr-colla-button {\n  width: 100%;\n  padding: 0;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  user-select: none;\n  cursor: pointer;\n}\n\n.tcr-colla-string {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  width: 100%;\n  cursor: default;\n}\n\n.tcr-code-pre {\n  margin-bottom: 0;\n}";
styleInject(css_248z);

var initConfig = {};
function renderCell(type, data, style, config) {
    if (type === void 0) { type = 'string'; }
    if (data === void 0) { data = 'TableCellRender'; }
    if (style === void 0) { style = {}; }
    if (config === void 0) { config = {}; }
    var callback = Object.assign({}, initConfig, config).callback;
    switch (type) {
        case 'code': {
            return (React__default['default'].createElement("pre", { className: "tcr-code-pre", style: style },
                React__default['default'].createElement("code", null, data)));
        }
        case 'string': {
            return data && String(data).length > 0 ? (React__default['default'].createElement(antd.Tooltip, { title: data, placement: "topLeft" }, callback ? (React__default['default'].createElement(antd.Button, { className: "tcr-colla-button", style: style, type: "link", onClick: function () {
                    callback();
                } }, data)) : (React__default['default'].createElement("span", { className: "tcr-colla-string", style: style }, data)))) : ('-');
        }
    }
}

module.exports = renderCell;
