!function(){var e=document.createElement("style");e.innerHTML=".editorWrapper[data-v-489a425e]{margin-top:20px}.editorWrapper[data-v-489a425e] .w-e-text-container{text-align:left}.editorWrapper .info[data-v-489a425e]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.editorWrapper .section[data-v-489a425e]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.editorWrapper .el-row[data-v-489a425e]{margin-bottom:20px}\n",document.head.appendChild(e),System.register(["./richEditor-legacy.1bbe969e.js","./@vue-legacy.f148cd29.js","./wangeditor-legacy.b7487093.js","./element-plus-legacy.ca5e6fff.js","./lodash-legacy.3746ec84.js","./resize-observer-polyfill-legacy.2cb8fabb.js","./@popperjs-legacy.b63c25b4.js","./dayjs-legacy.6694f40c.js","./mitt-legacy.74573cbc.js","./async-validator-legacy.f769771e.js","./normalize-wheel-legacy.026ba291.js","./vue-legacy.3b3d2715.js"],(function(e){"use strict";var t,n,a,l,o,i,r,c,u,d,f,s;return{setters:[function(e){t=e._},function(e){n=e.a7,a=e.k,l=e.aJ,o=e.aB,i=e.Z,r=e._,c=e.a5,u=e.b4,d=e.a4,f=e.aE,s=e.aC},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var p=e("default",n({components:{RichEditor:t},setup:function(){var e=a("默认数据"),t=a();setTimeout((function(){e.value="3秒后的数据"}),3e3);return{handleUpdateValue:function(e){console.log(e),t.value=e},editorValue:e}}})),g=function(e){return f("data-v-489a425e"),e=e(),s(),e},v={class:"editorWrapper"},y={class:"info"},m=d("富文本编辑器"),b=g((function(){return r("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1)})),j={class:"grid-content bg-purple-dark"},x={style:{"text-align":"left"}},h=g((function(){return r("span",null,"富文本编辑器",-1)}));p.render=function(e,t,n,a,d,f){var s=l("el-divider"),p=l("RichEditor",!0),g=l("el-card"),_=l("el-col"),w=l("el-row");return o(),i("div",v,[r("div",y,[c(s,{"content-position":"left"},{default:u((function(){return[m]})),_:1}),b]),r("div",null,[c(w,null,{default:u((function(){return[c(_,{offset:1,span:22},{default:u((function(){return[r("div",j,[c(g,{class:"box-card"},{default:u((function(){return[r("div",x,[h,c(s)]),c(p,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])]})),_:1})])]})),_:1})]})),_:1})])])},p.__scopeId="data-v-489a425e"}}}))}();
