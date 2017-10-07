!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("arch",[],t):"object"==typeof exports?exports.arch=t():e.arch=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(3),u=r(a);t.default=function(e){return function(t){var n=(0,u.default)(e)(t);return n.arch=function(e){var t=e.model,r=e.actions,o=(0,i.default)(t);return o.actions(r),o.subscribe(function(e){return n.reactor(Object.assign({},e))}),o.set(function(e){return e}),o},n}}},function(e,t,n){var r,o,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,u){"object"==n(t)&&"object"==n(e)?e.exports=u():(o=[],r=u,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n(),r="__update__";return{get:function(){return e},set:function(n){n(e),t.publish(r,{state:e})},actions:function(n){var r=function(r){t.subscribe(r,function(t){e=Object.assign(e,n[r](e,t))})};for(var o in n)r(o)},dispatch:function(n,o){t.publish(n,o),t.publish(r,{state:e,action:n,payload:o})},subscribe:function(e){return t.subscribe(r,function(t){var n=t.state,r=t.action,o=t.payload;return e(n,{action:r,payload:o})})}}};var n=function(){var e={};return{publish:function(t,n){t in e&&e[t].map(function(e){return e(n)})},subscribe:function(t,n){return e[t]=e[t]||[],e[t].push(n),function(){e[t]=e[t].filter(function(e){return e==n})}}}}}])})}).call(t,n(2)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){var r,o,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,u){"object"==n(t)&&"object"==n(e)?e.exports=u():(o=[],r=u,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.soda=t.morphdom=void 0;var o=n(1),i=r(o),a=n(2),u=r(a);t.morphdom=i.default,t.soda=u.default,t.default=function(e){return function(e){if(e.elm==document.body)e.reactor=function(e){console.warn("Reactor can`t be used on document.body")};else{var t=e.elm.querySelector("template"),n=e.elm.outerHTML;t&&(n=n.replace(/<template*.>/g,"").replace(/<\/template>/g,"")),e.reactor=function(t){var o={};(0,i.default)(e.elm,(0,u.default)(n,t),r(e.elm,o)),o.hascomponent&&e.jails.start(e.elm)}}var r=function(t,n){return{onBeforeElChildrenUpdated:function(e){if(e.getAttribute&&e.getAttribute("data-static"))return!1},onNodeAdded:function(e){e.getAttribute&&e.getAttribute("data-component")&&(n.hascomponent=!0)},onBeforeNodeDiscarded:function(n){if(n.getAttribute){var r=n.getAttribute("data-component");r&&e.jails.destroy(t,"[data-component*="+r+"]")}}}};return e}}},function(e,t){function n(e){!s&&v.createRange&&(s=v.createRange(),s.selectNode(v.body));var t;return s&&s.createContextualFragment?t=s.createContextualFragment(e):(t=v.createElement("body"),t.innerHTML=e),t.childNodes[0]}function r(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function o(e,t){return t&&t!==p?v.createElementNS(t,e):v.createElement(e)}function i(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function a(e,t){var n,r,o,i,a,u,l=t.attributes;for(n=l.length-1;n>=0;--n)r=l[n],o=r.name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,u=e.getAttributeNS(i,o),u!==a&&e.setAttributeNS(i,o,a)):(u=e.getAttribute(o),u!==a&&e.setAttribute(o,a));for(l=e.attributes,n=l.length-1;n>=0;--n)r=l[n],r.specified!==!1&&(o=r.name,i=r.namespaceURI,i?(o=r.localName||o,y(t,i,o)||e.removeAttributeNS(i,o)):y(t,null,o)||e.removeAttribute(o))}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}function l(){}function c(e){return e.id}function f(e){return function(t,a,u){function f(e){E?E.push(e):E=[e]}function s(e,t){if(e.nodeType===h)for(var n=e.firstChild;n;){var r=void 0;t&&(r=N(n))?f(r):(C(n),n.firstChild&&s(n,t)),n=n.nextSibling}}function d(e,t,n){O(e)!==!1&&(t&&t.removeChild(e),C(e),s(e,n))}function p(e){if(e.nodeType===h)for(var t=e.firstChild;t;){var n=N(t);n&&(k[n]=t),p(t),t=t.nextSibling}}function m(e){S(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=N(t);if(o){var i=k[o];i&&r(t,i)&&(t.parentNode.replaceChild(i,t),y(i,t))}m(t),t=n}}function y(n,o,i){var u,l=N(o);if(l&&delete k[l],!a.isSameNode||!a.isSameNode(t)){if(!i){if(R(n,o)===!1)return;if(e(n,o),A(n),M(n,o)===!1)return}if("TEXTAREA"!==n.nodeName){var c,s,p,g,E=o.firstChild,S=n.firstChild;e:for(;E;){for(p=E.nextSibling,c=N(E);S;){if(s=S.nextSibling,E.isSameNode&&E.isSameNode(S)){E=p,S=s;continue e}u=N(S);var O=S.nodeType,C=void 0;if(O===E.nodeType&&(O===h?(c?c!==u&&((g=k[c])?S.nextSibling===g?C=!1:(n.insertBefore(g,S),s=S.nextSibling,u?f(u):d(S,n,!0),S=g):C=!1):u&&(C=!1),C=C!==!1&&r(S,E),C&&y(S,E)):O!==_&&O!=x||(C=!0,S.nodeValue!==E.nodeValue&&(S.nodeValue=E.nodeValue))),C){E=p,S=s;continue e}u?f(u):d(S,n,!0),S=s}if(c&&(g=k[c])&&r(g,E))n.appendChild(g),y(g,E);else{var G=T(E);G!==!1&&(G&&(E=G),E.actualize&&(E=E.actualize(n.ownerDocument||v)),n.appendChild(E),m(E))}E=p,S=s}for(;S;)s=S.nextSibling,(u=N(S))?f(u):d(S,n,!0),S=s}var j=b[n.nodeName];j&&j(n,o)}}if(u||(u={}),"string"==typeof a)if("#document"===t.nodeName||"HTML"===t.nodeName){var g=a;a=v.createElement("html"),a.innerHTML=g}else a=n(a);var E,N=u.getNodeKey||c,T=u.onBeforeNodeAdded||l,S=u.onNodeAdded||l,R=u.onBeforeElUpdated||l,A=u.onElUpdated||l,O=u.onBeforeNodeDiscarded||l,C=u.onNodeDiscarded||l,M=u.onBeforeElChildrenUpdated||l,G=u.childrenOnly===!0,k={};p(t);var j=t,w=j.nodeType,P=a.nodeType;if(!G)if(w===h)P===h?r(t,a)||(C(t),j=i(t,o(a.nodeName,a.namespaceURI))):j=a;else if(w===_||w===x){if(P===w)return j.nodeValue!==a.nodeValue&&(j.nodeValue=a.nodeValue),j;j=a}if(j===a)C(t);else if(y(j,a,G),E)for(var V=0,$=E.length;V<$;V++){var L=k[E[V]];L&&d(L,L.parentNode,!1)}return!G&&j!==t&&t.parentNode&&(j.actualize&&(j=j.actualize(t.ownerDocument||v)),t.parentNode.replaceChild(j,t)),j}}var s,d,p="http://www.w3.org/1999/xhtml",v="undefined"==typeof document?void 0:document,m=v?v.body||v.createElement("div"):{};d=m.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:m.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};var y=d,b={OPTION:function(e,t){u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),y(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!y(t,null,"multiple")){for(var n=-1,r=0,o=t.firstChild;o;){var i=o.nodeName;if(i&&"OPTION"===i.toUpperCase()){if(y(o,null,"selected")){n=r;break}r++}o=o.nextSibling}e.selectedIndex=r}}},h=1,_=3,x=8,g=f(a);e.exports=g},function(e,t,r){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":n(e)},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=r(1),l=r(2),c="undefined"!=typeof document?document:{},f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"soda-";o(this,e),this._prefix=t}return a(e,[{key:"setDocument",value:function(e){c=e}},{key:"run",value:function(e,t){var n=this,r=c.createElement("div");c.documentMode<9&&(r.style.display="none",c.body.appendChild(r)),r.innerHTML=e,(0,l.nodes2Arr)(r.childNodes).map(function(e){n.compileNode(e,t)});var o=r.innerHTML;return c.documentMode<9&&c.body.removeChild(r),o}},{key:"prefix",value:function(e){this._prefix=e}},{key:"_getPrefixReg",value:function(){return new RegExp("^"+this._prefix)}},{key:"_getPrefixedDirectiveMap",value:function(){var t=this,n={};return e.sodaDirectives.map(function(e){var r=t._prefix+e.name;n[r]=e}),n}},{key:"_removeSodaMark",value:function(e,t){e.removeAttribute(t)}},{key:"compileNode",value:function(t,n){var r=this,o=this._getPrefixReg(),a=e.sodaDirectives,f=this._getPrefixedDirectiveMap(),s=function e(t,n){t.nodeType===(t.TEXT_NODE||3)&&(t.nodeValue=t.nodeValue.replace(u.VALUE_OUT_REG,function(e,t){var o=r.parseSodaExpression(t,n);return"object"===("undefined"==typeof o?"undefined":i(o))&&(o=JSON.stringify(o,null,2)),o})),t.attributes&&t.attributes.length&&(a.map(function(e){var o=e.name,i=e.opt,a=r._prefix+o;if((0,l.exist)(t.getAttribute(a))){var u=t.getAttribute(a);i.link.bind(r)({expression:u,scope:n,el:t,parseSodaExpression:r.parseSodaExpression.bind(r),getValue:r.getValue.bind(r),compileNode:r.compileNode.bind(r),document:c}),r._removeSodaMark(t,a)}}),(0,l.nodes2Arr)(t.attributes).filter(function(e){return!f[e.name]}).map(function(e){if(o.test(e.name)){var i=e.name.replace(o,"");if(i&&(0,l.exist)(e.value)){var a=r.parseComplexExpression(e.value,n);a!==!1&&(0,l.exist)(a)&&t.setAttribute(i,a),r._removeSodaMark(t,e.name)}}else(0,l.exist)(e.value)&&(e.value=r.parseComplexExpression(e.value,n))})),(0,l.nodes2Arr)(t.childNodes).map(function(t){e(t,n)})};s(t,n)}},{key:"getEvalFunc",value:function(t){var n=new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+t+"}")(this.getValue,e.sodaFilterMap);return n}},{key:"getValue",value:function(e,t){if(u.CONST_REGG.lastIndex=0,t.replace(u.CONST_REGG,function(t){return"undefined"==typeof e[t]?t:e[t]}),"true"===t)return!0;if("false"===t)return!1;var n=function t(n,r){var o=r.indexOf(".");if(o>-1){var i=r.substr(0,o);return r=r.substr(o+1),"undefined"!=typeof e[i]&&u.CONST_REG.test(i)&&(i=e[i]),"undefined"!=typeof n[i]&&null!==n[i]?t(n[i],r):""}r=r.trim(),"undefined"!=typeof e[r]&&u.CONST_REG.test(r)&&(r=e[r]);var a;return a="undefined"!=typeof n[r]?n[r]:""};return n(e,t)}},{key:"parseComplexExpression",value:function(e,t){var n=this,r=u.ONLY_VALUE_OUT_REG.exec(e);if(r){var o=r[1];return this.parseSodaExpression(o,t)}return e.replace(u.VALUE_OUT_REG,function(e,r){return n.parseSodaExpression(r,t)})}},{key:"parseSodaExpression",value:function(e,t){var n=this;e=e.replace(u.STRING_REG,function(e,n,r){var o=(0,l.getRandom)();return t[o]=n||r,o}),e=e.replace(u.OR_REG,u.OR_REPLACE).split("|");for(var r=0;r<e.length;r++)e[r]=(e[r].replace(new RegExp(u.OR_REPLACE,"g"),"||")||"").trim();for(var o=e[0]||"",i=e.slice(1);u.ATTR_REG_NG.test(o);)u.ATTR_REG.lastIndex=0,o=o.replace(u.ATTR_REG,function(e,r){var o=(0,l.getAttrVarKey)(),i=n.parseSodaExpression(r,t);return t[o]=i,"."+o});return o=o.replace(u.OBJECT_REG,function(e){return"getValue(scope,'"+e.trim()+"')"}),o=this.parseFilter(i,o),this.getEvalFunc(o)(t)}},{key:"parseFilter",value:function(t,n){var r=e.sodaFilterMap,o=function e(){var o=t.shift();if(o){for(var o=o.split(":"),i=o.slice(1)||[],a=(o[0]||"").trim(),l=0;l<i.length;l++)u.OBJECT_REG_NG.test(i[l])&&(i[l]="getValue(scope,'"+i[l]+"')");r[a]&&(i.unshift(n),i=i.join(","),n="sodaFilterMap['"+a+"']("+i+")"),e()}};return o(),n}}],[{key:"filter",value:function(e,t){this.sodaFilterMap[e]=t}},{key:"getFilter",value:function(e){return this.sodaFilterMap[e]}},{key:"directive",value:function(e,t){var n=t.priority,r=void 0===n?0:n,o=void 0;for(o=0;o<this.sodaDirectives.length;o++){var i=this.sodaDirectives[o],a=i.opt.priority,u=void 0===a?0:a;if(r<u);else if(r>=u)break}this.sodaDirectives.splice(o,0,{name:e,opt:t})}},{key:"discribe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{compile:!0};this.template[e]={funcOrStr:t,option:n}}},{key:"getTmpl",value:function(e,t){var n=this.template[e],r=n.funcOrStr,o=n.option,i=void 0===o?{}:o,a=void 0;return a="function"==typeof r?r.apply(null,t):r,{template:a,option:i}}}]),e}();f.sodaDirectives=[],f.sodaFilterMap={},f.template={},t.default=f},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.IDENTOR_REG=/[a-zA-Z_\$]+[\w\$]*/g,t.STRING_REG=/"([^"]*)"|'([^']*)'/g,t.NUMBER_REG=/\d+|\d*\.\d+/g,t.OBJECT_REG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,t.OBJECT_REG_NG=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/,t.ATTR_REG=/\[([^\[\]]*)\]/g,t.ATTR_REG_NG=/\[([^\[\]]*)\]/,t.ATTR_REG_DOT=/\.([a-zA-Z_\$]+[\w\$]*)/g,t.NOT_ATTR_REG=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,t.OR_REG=/\|\|/g,t.OR_REPLACE="OR_OPERATOR",t.CONST_PRIFIX="_$C$_",t.CONST_REG=/^_\$C\$_/,t.CONST_REGG=/_\$C\$_[^\.]+/g,t.VALUE_OUT_REG=/\{\{([^\}]*)\}\}/g,t.ONLY_VALUE_OUT_REG=/^\{\{([^\}]*)\}\}$/},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.nodes2Arr=t.exist=t.getRandom=t.getAttrVarKey=void 0;var r=n(1),o=(t.getAttrVarKey=function(){return r.CONST_PRIFIX+~~(1e6*Math.random())},t.getRandom=function(){return"$$"+~~(1e6*Math.random())},t.exist=function(e){return null!==e&&void 0!==e&&""!==e&&"undefined"!=typeof e},t.nodes2Arr=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t},Object.getOwnPropertySymbols),i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)};t.assign=Object.assign||function(e,t){for(var n,r,l=u(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var f in n)i.call(n,f)&&(l[f]=n[f]);if(o){r=o(n);for(var s=0;s<r.length;s++)a.call(n,r[s])&&(l[r[s]]=n[r[s]])}}return l}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o),a=n(2);n(4),n(5),n(6),n(7),n(8),n(9),n(10);var u=new i.default,l=function(e,t){return u.run(e,t)},c={prefix:function(e){u.prefix(e)},filter:function(e,t){i.default.filter(e,t)},directive:function(e,t){i.default.directive(e,t)},setDocument:function(e){u.setDocument(e)},discribe:function(e,t,n){i.default.discribe(e,t,n)},Soda:i.default},f=(0,a.assign)(l,c);e.exports=f},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("repeat",{priority:10,link:function(e){var t,n,r,o=this,i=e.scope,a=e.el,u=e.expression,l=e.getValue,c=(e.parseSodaExpression,e.compileNode),f=/\s+by\s+([^\s]+)$/,s=u.replace(f,function(e,t){return t&&(r=(t||"").trim()),""}),d=/([^\s]+)\s+in\s+([^\s]+)|\(([^,]+)\s*,\s*([^)]+)\)\s+in\s+([^\s]+)/,p=d.exec(s);if(p){if(p[1]&&p[2]){if(t=(p[1]||"").trim(),n=(p[2]||"").trim(),!t||!n)return}else p[3]&&p[4]&&p[5]&&(r=(p[3]||"").trim(),t=(p[4]||"").trim(),n=(p[5]||"").trim());r=r||"$index";var v=l(i,n)||[],m=function(e){var n=a.cloneNode(!0),u=Object.create(i);u[r]=e,u[t]=v[e],n.removeAttribute(o._prefix+"repeat"),a.parentNode.insertBefore(n,a),c(n,u)};if("length"in v)for(var y=0;y<v.length;y++)m(y);else for(var y in v)v.hasOwnProperty(y)&&m(y);a.parentNode.removeChild(a),a.childNodes&&a.childNodes.length&&(a.innerHTML="")}}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("if",{priority:9,link:function(e){var t=e.expression,n=e.parseSodaExpression,r=e.scope,o=e.el,i=n(t,r);i||(o.parentNode&&o.parentNode.removeChild(o),o.innerHTML="")}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o),a=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")},u=function(e,t){return e.className?void(e.className.match(a(t))||(e.className+=" "+t)):void(e.className=t)};i.default.directive("class",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=o(r,t);i&&u(n,i)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("html",{link:function(e){var t=e.expression,n=e.scope,r=e.el,o=e.parseSodaExpression,i=o(t,n);i&&(r.innerHTML=i)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("replace",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=e.document,a=o(r,t);if(a){var u=i.createElement("div");if(u.innerHTML=a,n.parentNode)for(;u.childNodes[0];)n.parentNode.insertBefore(u.childNodes[0],n)}n.parentNode&&n.parentNode.removeChild(n)}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("style",{link:function(e){var t=e.scope,n=e.el,r=e.expression,o=e.parseSodaExpression,i=o(r,t),a=function(e,t){var n=/opacity|z-index/;return n.test(e)?parseFloat(t):isNaN(t)?t:t+"px"};if(i){var u=[];for(var l in i)if(i.hasOwnProperty(l)){var c=a(l,i[l]);u.push([l,c].join(":"))}for(var f=n.style,l=0;l<f.length;l++){var s=f[l];i[s]||u.push([s,f[s]].join(":"))}var d=u.join(";");n.setAttribute("style",d)}}})},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);i.default.directive("include",{priority:8,link:function(e){var t=e.scope,n=e.el,r=e.parseSodaExpression,o=e.expression,a=/\{\{([^\}]*)\}\}/g,u=o.replace(a,function(e,n){return r(n,t)});u=u.split(":");var l=u[0],c=u.slice(1),f=i.default.getTmpl(l,c),s=f.template,d=f.option,p=void 0===d?{}:d;s&&(p.compile?n.outerHTML=this.run(s,t):n.outerHTML=s)}})}])})}])})}).call(t,n(2)(e))}])});