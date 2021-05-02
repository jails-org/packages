!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("form2",[],t):"object"==typeof exports?exports.form2=t():e.form2=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.formField=t.form=void 0;var o=n(1),a=r(o),u=n(3),i=r(u);t.form=a,t.formField=i},function(e,t,n){"use strict";function r(e){var t=e.main,n=e.get,r=e.elm,a=e.emit,u=e.update,i=e.msg,c=n("form-field");t(function(e){return[l,f]});var l=function(e){var t=e.on;t("form-field:change",d),t("submit",p)},f=function(e){var t=e.expose;t({validate:d,setFields:s})},s=function(e){for(var t in e)c("set",t,e[t],e);i.set(function(t){return t.data=Object.assign({},t.data,e)})},d=function(){var e=!0;c("map",function(t){var n=t.elm,r=t.state;n.querySelector("[data-rules]")&&!r.isValid&&(e=!1)}),e!=i.getState().isValid&&(i.set(function(t){return t.isValid=e}),a("form:"+(e?"valid":"invalid"),(0,o.getFormData)(r)))},p=function(e){var t=i.getState(),n=t.isValid;n&&a("form:submit",(0,o.getFormData)(r)),e.preventDefault()};u(function(e){e&&JSON.stringify(e)!=JSON.stringify(i.getState().data)&&i.set(function(t){return t.data=Object.assign({},t.data,e.data)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.model=void 0,t.default=r;var o=n(2);t.model={isValid:!1,data:{}}},function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});t.getRules=function(e){var t=new Function("return "+e.dataset.rules)(),n=t?t:null,r=e.type&&"checkbox"==e.type,o=r?e.checked?e.value:"":e.form[e.name].value;return{value:o,rules:n}},t.formatError=function(e){var t=Object.keys(e),r=t[0];return n({},r,!0)},t.debounce=function(e,t){var n=void 0;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(r,o)},t)}},t.getFormData=function(e){var t=Array.from(e.elements).reduce(function(e,t){if(t.name){var n=t.type&&"checkbox"==t.type,r=n?t.checked?t.value:"":t.form[t.name].value;e[t.name]=r}return e},{});return t}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=e.main,n=e.elm,r=e.msg,a=e.injection,u=e.emit,f=e.trigger,s=e.update,d=a.validators;t(function(e){return[p,v,m]});var p=function(e){var t=e.on;t("input",l.VALIDATE_INPUT,(0,c.debounce)(b,100)),t("change",l.VALIDATE_SELECTABLE,b),t("blur",l.INPUT+", "+l.SELECTABLE,g),t("focus",l.INPUT+", "+l.SELECTABLE,x)},v=function(e){var t=e.expose;t({map:S,set:y})},m=function(){var e=n.querySelector("[data-rules]");e&&(0,i.default)(o({},e.name,(0,c.getRules)(e)),d).catch(function(e){return r.set(function(e){return e.isValid=!1})}).finally(h)},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.querySelector("[name="+e+"]");a&&(r.set(function(e){e.value=t,e.data=o,e.touched=!0}),f("input","[name="+e+"]"),f("change","[name="+e+"]"))},b=function(e){var t=e.target,n=t.name,a=t.value,u="checkbox"==e.target.type;(0,i.default)(o({},n,(0,c.getRules)(e.target)),d).then(function(t){r.set(function(t){t.error=null,t.isValid=!0,u?t.value=e.target.checked?a:"":t.value=a})}).catch(function(t){return r.set(function(t){t.isValid=!1,u?t.value=e.target.checked?a:"":t.value=a})}).finally(h)},g=function(e){var t=e.target.name;(0,i.default)(o({},t,(0,c.getRules)(e.target)),d).then(function(e){r.set(function(e){e.error=null,e.isValid=!0,e.focus=!1})}).catch(function(e){r.set(function(n){n.error=(0,c.formatError)(e[t]),n.isValid=!1,n.focus=!1})}).finally(h)},h=function(){u("form-field:change",{element:n,state:r.getState()})},x=function(e){r.set(function(e){e.focus=!0,e.touched=!0})},S=function(e){e({elm:n,state:r.getState()})};s(function(e){if(e.data&&JSON.stringify(e.data)!=JSON.stringify(r.getState().data)){var t=n.querySelector("input, select"),o=t.name,a=!1;r.set(function(t){t.data=Object.assign({},t.data,e.data),t.value=t.data[o]||null,t.touched=Boolean(t.value),a=Boolean(t.value)}),a&&(f("input","[name="+o+"]"),f("change","[name="+o+"]"))}})}Object.defineProperty(t,"__esModule",{value:!0}),t.view=t.model=void 0,t.default=a;var u=n(4),i=r(u),c=n(2),l=n(6);t.model={touched:!1,focus:!1,error:null,isValid:!0,data:{},value:null},t.view=function(e){var t=e.touched?"touched":"",n=e.error?"error":"",r=e.focus?"focus":"",o=e.value&&e.isValid&&e.touched?"valid":"";return Object.assign({},e,{fieldClass:(t+" "+n+" "+r+" "+o).trim()})}},function(e,t,n){var r,o,a;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(u,i){"object"==n(t)&&"object"==n(e)?e.exports=i():(o=[],r=i,a="function"==typeof r?r.apply(t,o):r,!(void 0!==a&&(e.exports=a)))}(void 0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new Promise(function(n,r){var o={};return Object.keys(e).forEach(function(n){var r=e[n];Object.keys(r.rules||{}).forEach(function(a){if(!t[a])return console.warn("[Validation] There is no rule => "+a);var u=t[a]({value:r.value,data:r.rules[a],fields:e});u||(o[n]=o[n]||{},o[n][a]={data:r})})}),Object.keys(o).length?r(o):n(e)})}}])})}).call(t,n(5)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INPUT='input:not([type="checkbox"]):not([type="radio"]),textarea',t.SELECTABLE='input[type="checkbox"],input[type="radio"],select',t.VALIDATE_INPUT='input[data-rules]:not([type="checkbox"]):not([type="radio"]),textarea[data-rules]',t.VALIDATE_SELECTABLE='input[data-rules][type="checkbox"],input[data-rules][type="radio"],select[data-rules]'}])});