!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jails.packages/virtualdom")):"function"==typeof define&&define.amd?define("template",["jails.packages/virtualdom"],e):"object"==typeof exports?exports.template=e(require("jails.packages/virtualdom")):t.template=e(t["jails.packages/virtualdom"])}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),o=n(i),s=r(2),a=n(s);e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"template",r=document.createElement("textarea"),n=t.querySelector(e);r.innerHTML=n.innerHTML.trim();var i=r.value,s=function(t){return a.default.render(i,t)};return r=null,(0,o.default)(t,s)}},function(e,r){e.exports=t},function(t,e,r){var n,i,o,s,s,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r){if("object"===a(e)&&"undefined"!=typeof t)t.exports=r();else{i=[],n=r,o="function"==typeof n?n.apply(e,i):n,!(void 0!==o&&(t.exports=o))}}(function(){return function t(e,r,n){function i(a,u){if(!r[a]){if(!e[a]){var l="function"==typeof s&&s;if(!u&&l)return s(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var p=r[a]={exports:{}};e[a][0].call(p.exports,function(t){var r=e[a][1][t];return i(r?r:t)},p,p.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof s&&s,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){var n=t("./parser").Tokens,i=t("./util").format,o=t("./util").escapeInNewFunction;r.toCodes=function(t){var e=['var $result = "";'];return t.forEach(function(t){var r=t.val;switch(t.type){case n.TK_CODE_BLOCK:e.push(r);break;case n.TK_VAR:var s=i("try{$result+={0};}catch(e){ $result+= 'undefined';}",r);e.push(s);break;case n.TK_STRING:var s=i("$result+='{0}';",o(r));e.push(s)}}),e.push("return $result"),e},r.compile=function(t,e){e=e||"locals";var n=r.toCodes(t),i=n.join("\n");return new Function(e,i)}},{"./parser":5,"./util":6}],2:[function(t,e,r){function n(t){t=t||{},this.symbol=t.symbol||"@",this.localsName=t.localsName||"locals",this.easyLocals=t.easyLocals||!0}var i=t("./parser"),o=t("./compiler"),s=t("./util");r=e.exports=n,n.prototype.set=function(t,e){return this[t]=e,this},n.prototype.reset=function(){return this.set("symbol","@").set("localsName","locals").set("easyLocals",!0)},n.prototype.addVarDef=function(t,e){if(this.easyLocals&&e){var r="@{ ",n=Object.keys(e);n.forEach(function(t){r+=s.format('var {0} = locals["{0}"];',t)}),r+="}",t=r+t}return t},n.prototype.compile=function(t,e){t=this.addVarDef(t,e);var r=i.parse(this.symbol,t),n=o.compile(r,this.localsName);return n},n.prototype.render=function(t,e){return this.compile(t,e)(e)}},{"./compiler":1,"./parser":5,"./util":6}],3:[function(t,e,r){for(var n=[Array.prototype.forEach,Array.prototype.sort,String.prototype.trim,Object.keys],i=0;i<n.length;i++){var o=n[i];if(!o)throw console.error("ES5 requireed. See es5-shim"),new Error("requirements@"+i+" not satisified.")}var s=t("./engine"),a=t("./parser"),u=t("./compiler"),l=t("./util");r=e.exports=new s;r.Engine=s,r.Parser=a,r.Compiler=u,r.util=l,r.version=t("../package.json").version,t("./jqueryExt")},{"../package.json":7,"./compiler":1,"./engine":2,"./jqueryExt":4,"./parser":5,"./util":6}],4:[function(t,e,r){function n(t){var e=t.attr("razor-for")||t.attr("data-razor-for");return e?a("for({0}){",e.trim()):(e=t.attr("razor-if")||t.attr("data-razor-if"))?a("if({0}){",e.trim()):(e=t.attr("razor-while")||t.attr("data-razor-while"))?a("while({0}){",e.trim()):(e=t.attr("razor-each")||t.attr("data-razor-each"),e?a("each({0}){",e.trim()):"")}function i(t){var e=t.get(0);if(!e)return"";var r;if("SCRIPT"===e.tagName)return r=t.html().trim();if(r=t.attr("razor-template"))return r;var r=t.html().trim(),i=n(t);return i&&(r=s.symbol+i+r+"}"),r=u(r),t.attr("razor-template",r),r}var o;if("undefined"!=typeof jQuery&&jQuery&&(o=jQuery),o){var s=t("./index"),a=t("./util").format,u=t("./util").unescape;o(function(){o("[razor-template]").hide()}),o.prototype.compile=function(){return s.compile(i(this))},o.prototype.render=function(t){var e=this.get(0),r=i(this),n=s.render(r,t);return"SCRIPT"!==e.tagName&&(this.html(n),this.show()),n}}},{"./index":3,"./util":6}],5:[function(t,e,r){function n(t,e){this.symbol=t,this.input=String(e),this.consumed=-1,this.tokens=[]}function i(t,e){var r=new n(t,e);return r.parse()}var o=t("./util");r=e.exports=n,n.parse=i,n.Tokens={TK_VAR:0,TK_CODE_BLOCK:1,TK_STRING:2},n.prototype.tok=function(t,e){this.tokens.push({type:t,val:e})},n.prototype.parse=function(){for(var t=0;t<this.input.length;t++){var e=this.input[t],r="";if(e==this.symbol){if(this.handleString(t),r=this.input[t+1],r==this.symbol){t=this.handleEscapeSymbol(t);continue}if("*"==r){t=this.handleComment(t);continue}for(var n=t+1;" "==r;)n++,r=this.input[n];switch(r){case"{":t=this.handleCodeBlock(t,n);continue;case"(":t=this.handleExplicitVariable(t,n);continue;default:var i=this.input.substring(n);if(/^each\s*\([\s\S]*\)\s*\{/.test(i)){t=this.handleEach(t,n);continue}if(/^if\s*\([\s\S]*\)\s*\{/.test(i)){t=this.handleIfElse(t,n);continue}if(/^(for|while)\s*\([\s\S]*\)\s*\{/.test(i)){t=this.handleControlFlow(t,n);continue}}var o=/^([\w\._\[\]])+/.exec(this.input.substring(t+1));if(o&&o[0]){t=this.handleImplicitVariable(t,o[0]);continue}}}return this.handleString(this.input.length),this.tokens},n.prototype.handleString=function(t){var e=this.input.substring(this.consumed+1,t);e&&this.tok(n.Tokens.TK_STRING,e),this.consumed=t-1},n.prototype.handleComment=function(t){var e=this.input.substr(t),r=e.indexOf("*"+this.symbol);if(r>-1){var n=r+1+t;return this.consumed=n}return t},n.prototype.handleEscapeSymbol=function(t){return this.tok(n.Tokens.TK_STRING,this.symbol),this.consumed=t+1},n.prototype.handleCodeBlock=function(t,e){var r=o.getRight(this.input,e),i=this.input.substring(e+1,r);return i=i.trim(),i&&this.tok(n.Tokens.TK_CODE_BLOCK,i),this.consumed=r},n.prototype.handleExplicitVariable=function(t,e){var r=o.getRight(this.input,e),i=this.input.substring(e+1,r);return i&&(i=o.unescape(i),"-"===i[0]&&(i=i.substring(1).trim(),i+=".replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')"),this.tok(n.Tokens.TK_VAR,i)),this.consumed=r},n.prototype.handleImplicitVariable=function(t,e){return this.tok(n.Tokens.TK_VAR,e),this.consumed=t+e.length},n.prototype.handleEach=function(t,e){var r=this.input.substring(t),s=r.indexOf("(")+t,a=o.getRight(this.input,s);r=this.input.substring(a);var u=r.indexOf("{")+a,l=o.getRight(this.input,u),c=this.input.substring(s+1,a),p=c.indexOf("in"),h=c.substring(0,p).trim(),f=c.substring(p+2).trim(),m=o.format("for(var $index = 0,$length = {1}.length;$index<$length;$index++){var {0}={1}[$index];",h,f);this.tok(n.Tokens.TK_CODE_BLOCK,m);var d=this.input.substring(u+1,l).trim()+"\n",y=i(this.symbol,d);return this.tokens=this.tokens.concat(y),this.tok(n.Tokens.TK_CODE_BLOCK,"}"),this.consumed=l},n.prototype.handleIfElse=function(t,e){var r,n;do r=this.handleControlFlow(t,e),n=this.input.substring(r+1),e=n.indexOf("else")+r+1;while(/^\s*else/.test(n));return this.consumed=r},n.prototype.handleControlFlow=function(t,e){var r=this.input.substring(e),s=r.indexOf("{")+e,a=o.getRight(this.input,s),u=this.input.substring(e,s+1),l=this.input.substring(s+1,a),c="}";this.tok(n.Tokens.TK_CODE_BLOCK,u),l=l.trim()+"\n";var p=i(this.symbol,l);return this.tokens=this.tokens.concat(p),this.tok(n.Tokens.TK_CODE_BLOCK,c),this.consumed=a}},{"./util":6}],6:[function(t,e,r){r.format=function(t){var e=[].slice.call(arguments,1);return e.forEach(function(e,r){t=t.replace(new RegExp("\\{"+r+"\\}","gi"),e.toString())}),t},r.getRight=function(t,e){for(var r={"{":"}","(":")","[":"]"},n=t[e],i=r[n],o=1,s=e+1;s<t.length;s++){var a=t[s];if(a==i){if(o--,0==o)return s}else a==n&&o++}return-1},r.unescape=function(t){return t.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&amp;/gi,"&")},r.escapeInNewFunction=function(t){return t?t.replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/(\r?\n)/g,"\\n"):t},r.getDate=function(t){t=t||new Date;var e=t.getFullYear(),n=t.getMonth()+1+"";1===n.length&&(n="0"+n);var i=t.getDate()+"";return 1===i.length&&(i="0"+i),r.format("{0}-{1}-{2}",e,n,i)}},{}],7:[function(t,e,r){e.exports={name:"razor-tmpl",version:"1.3.0",description:"razor style template engine for JavaScript",main:"./lib/node/index.js",browser:"./lib/index.js",bin:{razor:"./lib/node/bin/razor"},scripts:{test:"./node_modules/.bin/mocha --recursive",browser:"browserify lib/index.js --standalone razor > browser/razor-tmpl.js",min:"uglifyjs browser/razor-tmpl.js > browser/razor-tmpl.min.js"},repository:{type:"git",url:"https://github.com/magicdawn/razor-tmpl"},keywords:["razor","template"],author:"magicdawn",license:"ISC",devDependencies:{browserify:"^9.0.8",mocha:"^2.1.0",uglifyjs:"^2.4.10"}}},{}]},{},[3])(3)})}])});