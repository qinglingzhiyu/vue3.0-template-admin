!function(){function e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function n(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,l=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw l}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n,t,r,o,a,l){try{var i=e[a](l),u=i.value}catch(c){return void t(c)}i.done?n(u):Promise.resolve(u).then(r,o)}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=document.createElement("style");i.innerHTML=".btns[data-v-efa83b12]{text-align:right}.el-transfer[data-v-efa83b12]{display:inline-block;text-align:left}.transfer[data-v-efa83b12]{text-align:center}.card-header[data-v-efa83b12]{text-align:left}",document.head.appendChild(i),System.register(["./vendor-legacy.cbfe9af2.js","./message-box-legacy.7745a472.js","./index-legacy.5a47a6fa.js"],(function(e){"use strict";var t,o,i,u,c,s,f,d,m,p,g,b,v,y,h,_,k,w,C,O,j,S,x,N,z;return{setters:[function(e){t=e.d,o=e.I,i=e.i,u=e.s,c=e.b,s=e.v,f=e.x,d=e.p,m=e.c,p=e.m,g=e.aO,b=e.E,v=e.e,y=e.f,h=e.g,_=e.t,k=e.w,w=e.H,C=e.r,O=e.J,j=e.D,S=e.K},function(e){x=e._},function(e){N=e.r,z=e.u}],execute:function(){var P="/api/auth/permission/routes",V=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,r=[{key:"postAuthPermission",value:function(e){return N({url:P,method:"POST",json:!0,data:e}).then((function(e){return console.log(e),0===e.status?Promise.resolve(e):Promise.reject(e)}))}}],(t=null)&&l(n.prototype,t),r&&l(n,r),e}(),R=t({name:"RolesEdit",props:{currentRole:{type:Object,default:function(){return{roleName:"",state:1}}}},emits:["success"],setup:function(e,t){var l=t.emit,d=o(e,"currentRole"),m=z(),p=i((function(){return m.getters["settingsModule/getLangState"]})),g=u({url:"/role/allow",purl:"/role/permissions",loading:!1,form:{key:"",label:""},menu:{loading:!1,url:"/menu/list",data:[],form:[]}}),b=i((function(){return d.value.role})),v=i((function(){return m.state.permissionModule.routes})),y=function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={roleName:b.value.roleName},e.next=3,V.postAuthPermission(n);case 3:null!=(t=e.sent)&&t.data&&(r=t.data.authedRoutes,g.menu.form=r);case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var l=e.apply(n,t);function i(e){a(l,r,o,i,u,"next",e)}function u(e){a(l,r,o,i,u,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),h=function(){var e,n=r(v.value);try{for(n.s();!(e=n.n()).done;){var t,o,a=e.value;if(null==a||null===(t=a.meta)||void 0===t||!t.hidden)g.menu.data.push({key:null==a?void 0:a.path,label:null==a||null===(o=a.meta)||void 0===o?void 0:o.title[p.value]})}}catch(l){n.e(l)}finally{n.f()}};return c((function(){h()})),s((function(){y()})),n(n({},f(g)),{},{lang:p,role:b,fetchMenuData:h,saveData:function(){console.log("form is ",g.menu.form),l("success")}})}}),E=k();d("data-v-efa83b12");var D={class:"wrapper"},A={class:"card-header"},T=h("br",null,null,-1),M=h("i",{class:"fa fa-check"},null,-1),U=w(" 确认修改 ");m();var I=E((function(e,n,t,r,o,a){var l=p("el-form-item"),i=p("el-form"),u=p("el-transfer"),c=p("el-card"),s=p("el-button"),f=p("el-row"),d=g("loading");return b((v(),y("div",D,[h(c,{class:"transfer"},{header:E((function(){return[h("span",null,[h("div",A,[h(i,{"label-position":"left",inline:"",class:"info-table"},{default:E((function(){return[h(l,{label:"名称"},{default:E((function(){return[h("span",null,_(e.role.roleName),1)]})),_:1})]})),_:1})])])]})),default:E((function(){return[b(h(u,{modelValue:e.menu.form,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.menu.form=n}),data:e.menu.data,titles:["菜单","已授权"]},null,8,["modelValue","data"]),[[d,e.menu.loading]])]})),_:1}),T,h(f,{class:"btns"},{default:E((function(){return[h(s,{size:"mini",type:"primary",disabled:0==e.role.state,onClick:e.saveData},{default:E((function(){return[M,U]})),_:1},8,["disabled","onClick"])]})),_:1})],512)),[[d,e.loading]])}));R.render=I,R.__scopeId="data-v-efa83b12";var $=t({name:"RoleNew",emits:["success"],setup:function(e,t){var r=t.emit,o=C(),a=u({form:{roleName:"",remark:""},loading:!1});return n({submitForm:function(){o.value.validate((function(e){return e?(r("success",n({},a.form)),!0):(console.log("error submit!!"),!1)}))},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},formRef:o,url:"/role/add"},f(a))}}),B={class:"new"},F=h("i",{class:"fa fa-plus"},null,-1),H=w(" 新增 ");$.render=function(e,n,t,r,o,a){var l=p("el-input"),i=p("el-form-item"),u=p("el-button"),c=p("el-row"),s=p("el-form"),f=g("loading");return b((v(),y("div",B,[h(s,{ref:"formRef",model:e.form,rules:e.rules,"label-position":"right","label-width":"100px"},{default:O((function(){return[h(i,{label:"角色名称",prop:"roleName"},{default:O((function(){return[h(l,{modelValue:e.form.roleName,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.form.roleName=n}),placeholder:"请输入角色名称"},null,8,["modelValue"])]})),_:1}),h(i,{label:"备注"},{default:O((function(){return[h(l,{modelValue:e.form.remark,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.form.remark=n}),placeholder:"请输入备注"},null,8,["modelValue"])]})),_:1}),h(c,{class:"btn-container"},{default:O((function(){return[h(u,{size:"mini",type:"primary",onClick:n[3]||(n[3]=function(n){return e.submitForm()})},{default:O((function(){return[F,H]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])],512)),[[f,e.loading]])};var L=e("default",t({name:"RoleManage",components:{RoleEdit:R,RoleNew:$},setup:function(){var e=u({url:{c:"/role/add",r:"/role/list",u:"/role/update",d:"/role/delete"},param:{limit:10,page:1},data:[{roleName:"超级管理员",remark:"拥有删除和创建等操作的权限",state:1},{roleName:"管理员",remark:"拥有创建和权限分配的权限",state:1},{roleName:"游客",remark:"只拥有操作部分菜单的权限",state:1}],loading:!1,is_search:!1,add_visible:!1,edit_visible:!1,detail_visible:!1,posted:{role:{roleName:"",state:1}}}),t=i((function(){return e.data.length}));return n(n({},f(e)),{},{total:t,onCurrentChange:function(){},onSizeChange:function(n){e.param.limit=n},onCreate:function(){e.add_visible=!0},onCreateSuccess:function(n){console.log(n);var t={roleName:n.roleName,remark:n.remark,state:1};e.data.push(t),e.add_visible=!1},onEditSuccess:function(){e.edit_visible=!1},onRefresh:function(){e.is_search=!1},onEdit:function(n,t){console.log("row",t),e.posted.role=t,e.edit_visible=!0},onDelete:function(e,n){console.log(e,n),function(e){console.log(e),x.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){j({type:"success",message:"删除成功"})})).catch((function(){j({type:"info",message:"已取消删除"})}))}(e)}})}})),q=w("新增"),J=w("刷新"),K=h("br",null,null,-1),G=h("i",{class:"ic ic-lock"},null,-1),Q=w(" 锁定"),W=w("正常"),X=w("未知"),Y={class:"pagination"};L.render=function(e,n,t,r,o,a){var l=p("el-alert"),i=p("el-button"),u=p("el-col"),c=p("el-row"),s=p("el-table-column"),f=p("el-tag"),d=p("el-tooltip"),m=p("el-table"),_=p("el-pagination"),k=p("el-card"),w=p("role-edit"),C=p("el-dialog"),j=p("role-new"),x=g("loading");return v(),y("div",null,[h(l,{title:"Tips:点击【新增】按钮进行新增角色；点击【编辑】按钮，进行不同角色的菜单授权操作！",type:"warning"}),h(l,{title:"Tips:权限控制体验：【管理员账号为：admin@outlook.com】、【超级管理员账号为：super@outlook.com】",type:"info"}),h(k,{class:"card-ctrl"},{default:O((function(){return[h(c,null,{default:O((function(){return[h(u,{span:8,style:{"text-align":"left"}},{default:O((function(){return[h(i,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:O((function(){return[q]})),_:1},8,["onClick"]),h(i,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:O((function(){return[J]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),K,b(h(m,{data:e.data,stripe:"",class:"table"},{default:O((function(){return[h(s,{prop:"roleName",label:"角色名称",align:"center"}),h(s,{prop:"state",label:"角色状态",align:"center"},{default:O((function(e){return[0===e.row.state?(v(),y(f,{key:0,size:"mini",type:"info"},{default:O((function(){return[G,Q]})),_:1})):1===e.row.state?(v(),y(f,{key:1,size:"mini",type:"success"},{default:O((function(){return[W]})),_:1})):(v(),y(f,{key:2,size:"mini",type:"danger"},{default:O((function(){return[X]})),_:1}))]})),_:1}),h(s,{prop:"remark",label:"备注",align:"center"}),h(s,{label:"操作",align:"center"},{default:O((function(n){return[h(d,{class:"item",effect:"dark",content:"菜单授权",placement:"bottom"},{default:O((function(){return[h(i,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"small",onClick:function(t){return e.onEdit(n.$index,n.row)}},null,8,["onClick"])]})),_:2},1024),h(d,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:O((function(){return[0!=n.row.state?(v(),y(i,{key:0,circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"small",onClick:function(t){return e.onDelete(n.$index,n.row)}},null,8,["onClick"])):S("",!0)]})),_:2},1024)]})),_:1})]})),_:1},8,["data"]),[[x,e.loading]]),h("div",Y,[h(_,{"current-page":e.param.page,"page-size":e.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:e.total,background:"",onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]})),_:1}),h(C,{modelValue:e.edit_visible,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.edit_visible=n}),center:"",title:e.posted.role.roleName},{default:O((function(){return[h(w,{"current-role":e.posted,onSuccess:e.onEditSuccess},null,8,["current-role","onSuccess"])]})),_:1},8,["modelValue","title"]),h(C,{modelValue:e.add_visible,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.add_visible=n}),title:"新增角色"},{default:O((function(){return[h(j,{onSuccess:e.onCreateSuccess},null,8,["onSuccess"])]})),_:1},8,["modelValue"])])}}}}))}();
