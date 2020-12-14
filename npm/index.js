'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var antd = require('antd');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Paragraph = antd.Typography.Paragraph;
var StringRender = function (props) {
    var copyable = props.copyable, data = props.data, tooltip = props.tooltip, callback = props.callback, style = props.style;
    var tlp = tooltip && tooltip !== '' ? tooltip : data;
    if (!data || String(data).length <= 0) {
        return React.createElement("span", null, "-");
    }
    // copyable here means whether to display~
    if (copyable) {
        return (React.createElement(antd.Tooltip, { title: tlp, placement: "topLeft" },
            React.createElement(Paragraph, { style: { marginBottom: 0 }, copyable: copyable, ellipsis: true }, data)));
    }
    return (React.createElement(antd.Tooltip, { title: tlp, placement: "topLeft" }, callback ? (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    React.createElement("a", { className: "tcr-colla-button", style: __assign({ textAlign: 'left' }, style), onClick: function () {
            callback();
        } }, data)) : (React.createElement("span", { className: "tcr-colla-string", style: style }, data))));
};

// copy content to clipboard

function thsplite(number, seperator) {
    if (seperator === void 0) { seperator = ','; }
    var value = number;
    if (typeof value === 'number') {
        value = String(value);
    }
    // [0] origin value [1] +/- [2] int [3] .decimal [4] decimal value
    var cells = value.match(/^(-?)(\d*)(\.(\d+))?$/);
    if (!cells || value === '-') {
        return value;
    }
    var negative = cells[1];
    var int = cells[2] || '0';
    var decimal = cells[4] || '';
    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
    if (decimal === '') {
        return "" + negative + int;
    }
    return "" + negative + int + "." + decimal;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=this.$L||D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
});

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

var css_248z = "button.tcr-colla-button {\n  width: 100%;\n  padding: 0;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  user-select: none;\n  cursor: pointer;\n}\n\n.tcr-colla-string {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  width: 100%;\n  cursor: default;\n}\n\n.tcr-code-pre {\n  margin-bottom: 0;\n}\n\n.cell-popver > .ant-popover-inner-content {\n  padding: 6px 12px;\n}\n\n.cell-popver > .ant-popover-inner-content > .inner-label {\n  font-size: 12px;\n  padding: 2px 0;\n}\n\n.list-global {\n  display: inline-block;\n  line-height: 16px;\n}\n";
styleInject(css_248z);

var initConfig = {
    format: 'YYYY-MM-DD HH:mm:ss',
    wrap: 'nowrap',
};
function renderCell(type, data, style, config) {
    if (type === void 0) { type = 'string'; }
    if (data === void 0) { data = 'TableCellRender'; }
    if (style === void 0) { style = {}; }
    if (config === void 0) { config = {}; }
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l = Object.assign({}, initConfig, config), tooltip = _l.tooltip, format = _l.format, color = _l.color, copyable = _l.copyable, wrap = _l.wrap, max = _l.max, key = _l.key, 
    // for render number seperator
    splitLabel = _l.splitLabel, callback = _l.callback, itemRender = _l.itemRender;
    switch (type) {
        case 'list': {
            if (Array.isArray(data) && data.length > 0) {
                return !max || max === -1 || data.length <= max ? (React.createElement(React.Fragment, null, data.map(function (item, index) {
                    return (React.createElement("p", { style: __assign({ padding: '2px 0' }, style), key: index }, itemRender
                        ? itemRender(item, index)
                        : key
                            ? item[key]
                            : item));
                }))) : (React.createElement("span", { className: "list-global" },
                    key ? data[0][key] : data[0],
                    React.createElement(antd.Popover, { placement: "right", trigger: "hover", overlayClassName: "cell-popver", content: data.map(function (item, index) {
                            return (React.createElement("p", { style: __assign({ padding: '2px 0' }, style), key: index }, itemRender
                                ? itemRender(item, index)
                                : key
                                    ? item[key]
                                    : item));
                        }) },
                        React.createElement("span", { onClick: function () {
                                callback && callback(data);
                            }, style: __assign({ fontWeight: 'bold', color: '#1890ff', cursor: 'pointer', margin: '0 0 0 3px' }, style) },
                            "\u7B49",
                            data.length - 1,
                            "\u9879"))));
            }
            return '-';
        }
        case 'status': {
            var cr = 'blue';
            var label = '-';
            if (typeof color === 'string') {
                cr = color;
                label = data;
            }
            else if (Array.isArray(color)) {
                var current = color.find(function (item) {
                    return item.value === data;
                });
                cr = (_b = (_a = current) === null || _a === void 0 ? void 0 : _a.color, (_b !== null && _b !== void 0 ? _b : 'blue'));
                label = (_d = (_c = current) === null || _c === void 0 ? void 0 : _c.label, (_d !== null && _d !== void 0 ? _d : (_e = current) === null || _e === void 0 ? void 0 : _e.value));
            }
            return React.createElement(antd.Badge, { color: cr, text: label });
        }
        case 'tags': {
            var closeable = false;
            var cr_1 = 'blue';
            var label = undefined;
            if (callback)
                closeable = true;
            if (typeof color === 'string') {
                cr_1 = color;
                label = data;
                if (Array.isArray(data) && data.length > 0) {
                    return (React.createElement(antd.Space, { size: 4 }, data.map(function (item, index) {
                        return (React.createElement(antd.Tag, { color: cr_1, key: index }, item));
                    })));
                }
            }
            else if (Array.isArray(color)) {
                var current = color.find(function (item) {
                    return item.value === data;
                });
                cr_1 = (_g = (_f = current) === null || _f === void 0 ? void 0 : _f.color, (_g !== null && _g !== void 0 ? _g : 'blue'));
                label = (_j = (_h = current) === null || _h === void 0 ? void 0 : _h.label, (_j !== null && _j !== void 0 ? _j : (_k = current) === null || _k === void 0 ? void 0 : _k.value));
            }
            return (React.createElement(antd.Tag, { color: (cr_1 !== null && cr_1 !== void 0 ? cr_1 : 'blue'), closable: closeable, onClose: function () {
                    callback && callback();
                } }, (label !== null && label !== void 0 ? label : data)));
        }
        case 'code': {
            return (React.createElement(React.Fragment, null,
                wrap === 'nowrap' && (React.createElement("pre", { className: "tcr-code-pre", style: style },
                    React.createElement("code", null, String(data)))),
                wrap === 'wrap' && React.createElement("code", null, String(data))));
        }
        case 'date': {
            var isValid = dayjs_min(data, format).isValid();
            if (!isValid) {
                return '-';
            }
            return React.createElement("span", { style: style }, dayjs_min(data).format(format));
        }
        case 'number': {
            if (typeof data === 'string' || typeof data === 'number') {
                var current = thsplite(data, (splitLabel !== null && splitLabel !== void 0 ? splitLabel : ','));
                return React.createElement("span", { style: style }, current);
            }
            return React.createElement("span", { style: style }, (data !== null && data !== void 0 ? data : '-'));
        }
        case 'string': {
            var current = {
                tooltips: false,
                text: data,
            };
            var judges = ["boolean", "undefined"];
            var isBool = judges.includes(typeof copyable);
            if (typeof copyable !== 'boolean') {
                current = __assign(__assign({}, current), copyable);
            }
            return (React.createElement(StringRender, { data: data, tooltip: tooltip, copyable: isBool ? copyable : current, callback: callback, style: style }));
        }
    }
}

module.exports = renderCell;
