!function(){var e=document.createElement("style");e.innerHTML=".editorWrapper[data-v-489a425e]{margin-top:20px}.editorWrapper[data-v-489a425e] .w-e-text-container{text-align:left}.editorWrapper .info[data-v-489a425e]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.editorWrapper .section[data-v-489a425e]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.editorWrapper .el-row[data-v-489a425e]{margin-bottom:20px}\n",document.head.appendChild(e),System.register(["./richEditor-legacy.63cd9685.js","./vendor-legacy.a92d6376.js"],(function(e){"use strict";var t,a,n,r,l,o,i,d,u,c,p;return{setters:[function(e){t=e._},function(e){a=e.d,n=e.r,r=e.p,l=e.c,o=e.m,i=e.g,d=e.e,u=e.f,c=e.w,p=e.D}],execute:function(){var s=e("default",a({components:{RichEditor:t},setup:function(){var e=n("默认数据"),t=n();setTimeout((function(){e.value="3秒后的数据"}),3e3);return{handleUpdateValue:function(e){console.log(e),t.value=e},editorValue:e}}})),f=c();r("data-v-489a425e");var v={class:"editorWrapper"},m={class:"info"},g=p("富文本编辑器"),x=u("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1),y={class:"grid-content bg-purple-dark"},h={style:{"text-align":"left"}},_=u("span",null,"富文本编辑器",-1);l();var V=f((function(e,t,a,n,r,l){var c=o("el-divider"),p=o("RichEditor",!0),s=o("el-card"),V=o("el-col"),W=o("el-row");return i(),d("div",v,[u("div",m,[u(c,{"content-position":"left"},{default:f((function(){return[g]})),_:1}),x]),u("div",null,[u(W,null,{default:f((function(){return[u(V,{offset:1,span:22},{default:f((function(){return[u("div",y,[u(s,{class:"box-card"},{default:f((function(){return[u("div",h,[_,u(c)]),u(p,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])]})),_:1})])]})),_:1})]})),_:1})])])}));s.render=V,s.__scopeId="data-v-489a425e"}}}))}();
