var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;import{aM as i,Z as a,D as l,d as c,r as s,b as u,aN as d,s as f,x as p,p as y,c as h,m,aO as v,e as b,f as g,g as k,t as w,H as E,E as x,w as S}from"./vendor.a7f58c76.js";import"./index.3730a638.js";var C={exports:{}},T=i(C.exports=function(){var e={134:function(e,t,n){n.d(t,{default:function(){return g}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),l=n(817),c=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}var t,n,o;return t=e,(n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=c()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==s(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}])&&u(t.prototype,n),o&&u(t,o),e}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,o,r=h(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(t),n.listenClick(e),n}return t=i,o=[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],(n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new d({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return b("action",e)}},{key:"defaultTarget",value:function(e){var t=b("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return b("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&p(t.prototype,n),o&&p(t,o),i}(r())},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var o=n(828);function r(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var o=n(879),r=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(134)}().default);
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */const _=(e,t,n)=>{const o=new T(t.target,{text:()=>e});o.on("success",(()=>{var e,t;t=null!=(e=null==n?void 0:n.successTip)?e:"copy success",l({message:t,type:"success",duration:1500}),o.destroy()})),o.on("error",(()=>{var e,t;t=null!=(e=null==n?void 0:n.failedTip)?e:"copy success",l({message:t,type:"error"}),o.destroy()}))};if(!T)throw new Error("you should npm install `clipboard` --save at first ");var A=c({name:"RichText",components:{},directives:{clip:{beforeMount(){},mounted(e,t){const n=e,o=new T(n,{text:()=>t.value,action:()=>"cut"===t.arg?"cut":"copy"});o.on("success",(t=>{console.log(t);const n=e.vClipSuccess;n&&n(t)})),o.on("error",(t=>{console.log(t);const n=e.vClipFailure;n&&n(t)})),n.vClipboard=o},beforeUpdate(){},updated(e,t){const n=e;"success"===t.arg?n.vClipSuccess=t.value:"error"===t.arg?n.vClipFailure=t.value:(null==n?void 0:n.vClipboard)&&(n.vClipboard.text=()=>t.value,n.vClipboard.action=()=>"cut"===t.arg?"cut":"copy")},beforeUnmount(){},unmounted(e,t){var n;const o=e;"success"===t.arg?delete o.vClipSuccess:"error"===t.arg?delete o.vClipFailure:(null==(n=null==e?void 0:e.vClipboard)||n.destroy(),delete o.vClipboard)}}},setup(){const e=s("vue3+vite+typescirpt+ElementPlus"),i=new T(".cut-btn");u((()=>{i&&i.on("success",(e=>{l({type:"success",message:"剪切成功"}),e.clearSelection()}))})),d((()=>{i.destroy()}));const a=f({tableData:[{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]});return((e,i)=>{for(var a in i||(i={}))n.call(i,a)&&r(e,a,i[a]);if(t)for(var a of t(i))o.call(i,a)&&r(e,a,i[a]);return e})({handleCopyInput:(e,t)=>{_(e,t,{successTip:"复制成功",failedTip:"复制失败"})},inputContent:e,handleAddRecord:()=>{a.tableData.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:(e,t)=>{console.log(e,t),a.tableData[e].edit=!0},handleSave:(e,t)=>(console.log(e,t),(e=>Object.keys(e).some((t=>""===e[t])))(t)?(l.warning("保存前请完善信息！"),!1):(a.tableData[e].edit=!1,a.tableData[e]=t,!0)),handleDelete:(e,t)=>{console.log(e,t),a.tableData.splice(e,1)}},p(a))}});const O=S();y("data-v-006eb6e5");const j={class:"copy-container"},V={class:"info"},L=E("文本复制"),R=k("span",{style:{"text-align":"left"}},"文本复制常用于多数据拼接或者长文本内容复制场景。",-1),P={class:"grid-content bg-purple-dark"},F={style:{"text-align":"left"}},H=k("span",null,"长文本内容复制场景",-1),M={class:"section"},U=E("复制"),D={class:"grid-content bg-purple-dark"},I={style:{"text-align":"left"}},N=k("span",null,"多数据拼接复制场景",-1),z={key:1,class:"name-wrapper"},q={key:1},$={key:1},Y={key:1},X=E("保存"),Z=E("复制"),B={style:{margin:"5px"}},G=E("+ 新增记录");h();const J=O(((e,t,n,o,r,i)=>{const a=m("el-divider"),l=m("el-input"),c=m("el-button"),s=m("el-card"),u=m("el-col"),d=m("el-row"),f=m("el-tag"),p=m("el-popover"),y=m("el-table-column"),h=m("el-table"),S=v("clip");return b(),g("div",j,[k("div",V,[k(a,{"content-position":"left"},{default:O((()=>[L])),_:1}),R]),k("div",null,[k(d,null,{default:O((()=>[k(u,{offset:1,span:22},{default:O((()=>[k("div",P,[k(s,{class:"box-card"},{default:O((()=>[k("div",F,[H,k(a)]),k("div",M,[k(l,{id:"textarea",modelValue:e.inputContent,"onUpdate:modelValue":t[1]||(t[1]=t=>e.inputContent=t),style:{width:"70%",margin:"0px 20px"},type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"]),k(c,{size:"medium",type:"success",plain:"",onClick:t[2]||(t[2]=t=>e.handleCopyInput(e.inputContent,t))},{default:O((()=>[U])),_:1})])])),_:1})])])),_:1})])),_:1}),k(d,null,{default:O((()=>[k(u,{offset:1,span:22},{default:O((()=>[k("div",D,[k(s,{class:"box-card"},{default:O((()=>[k("div",I,[N,k(a)]),k(h,{data:e.tableData,style:{width:"100%"}},{default:O((()=>[k(y,{label:"姓名",width:"180"},{default:O((e=>[k(p,{effect:"light",trigger:"hover",placement:"top"},{default:O((()=>[k("p",null,"姓名: "+w(e.row.name),1),k("p",null,"住址: "+w(e.row.address),1)])),reference:O((()=>[e.row.edit?(b(),g(l,{key:0,modelValue:e.row.name,"onUpdate:modelValue":t=>e.row.name=t},null,8,["modelValue","onUpdate:modelValue"])):(b(),g("div",z,[k(f,{size:"medium"},{default:O((()=>[E(w(e.row.name),1)])),_:2},1024)]))])),_:2},1024)])),_:1}),k(y,{prop:"province",label:"省份",width:"120"},{default:O((e=>[e.row.edit?(b(),g(l,{key:0,modelValue:e.row.province,"onUpdate:modelValue":t=>e.row.province=t},null,8,["modelValue","onUpdate:modelValue"])):(b(),g("span",q,w(e.row.province),1))])),_:1}),k(y,{prop:"city",label:"市区",width:"120"},{default:O((e=>[e.row.edit?(b(),g(l,{key:0,modelValue:e.row.city,"onUpdate:modelValue":t=>e.row.city=t},null,8,["modelValue","onUpdate:modelValue"])):(b(),g("span",$,w(e.row.city),1))])),_:1}),k(y,{prop:"address",label:"详细地址"},{default:O((e=>[e.row.edit?(b(),g(l,{key:0,modelValue:e.row.address,"onUpdate:modelValue":t=>e.row.address=t},null,8,["modelValue","onUpdate:modelValue"])):(b(),g("span",Y,w(e.row.address),1))])),_:1}),k(y,{label:"操作",width:"200"},{default:O((t=>[t.row.edit?(b(),g(c,{key:0,size:"medium",type:"success",plain:"",icon:"el-icon-check",onClick:n=>e.handleSave(t.$index,t.row)},{default:O((()=>[X])),_:2},1032,["onClick"])):x((b(),g(c,{key:1,size:"medium",type:"info",icon:"el-icon-copy",plain:""},{default:O((()=>[Z])),_:2},1536)),[[S,`姓名:${t.row.name},详细地址:${t.row.address}`,"copy"]])])),_:1})])),_:1},8,["data"]),k("div",B,[k(c,{onClick:e.handleAddRecord},{default:O((()=>[G])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1})])])}));A.render=J,A.__scopeId="data-v-006eb6e5";export default A;
