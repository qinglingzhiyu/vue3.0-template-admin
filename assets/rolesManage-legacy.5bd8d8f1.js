!function(){function e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function n(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n,t,r,o,l,a){try{var i=e[l](a),u=i.value}catch(c){return void t(c)}i.done?n(u):Promise.resolve(u).then(r,o)}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=document.createElement("style");i.innerHTML=".btns[data-v-7247ff70]{text-align:right}.el-transfer[data-v-7247ff70]{display:inline-block;text-align:left}.transfer[data-v-7247ff70]{text-align:center}.card-header[data-v-7247ff70]{text-align:left}\n",document.head.appendChild(i),System.register(["./index-legacy.c2f37ef5.js","./vendor-legacy.a92d6376.js","./index-legacy.046e2eb7.js"],(function(e){"use strict";var t,o,i,u,c,s,f,d,m,p,g,v,b,y,h,_,k,w,C,O,j,S,x,N;return{setters:[function(e){t=e.r,o=e.u},function(e){i=e.d,u=e.G,c=e.i,s=e.s,f=e.b,d=e.v,m=e.x,p=e.p,g=e.c,v=e.m,b=e.aO,y=e.A,h=e.g,_=e.e,k=e.f,w=e.t,C=e.w,O=e.D,j=e.r,S=e.H,x=e.I},function(e){N=e.c}],execute:function(){var z="/api/auth/permission/routes",P=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,o=[{key:"postAuthPermission",value:function(e){return t({url:z,method:"POST",json:!0,data:e}).then((function(e){return console.log(e),0===e.status?Promise.resolve(e):Promise.reject(e)}))}}],(r=null)&&a(n.prototype,r),o&&a(n,o),e}(),V=i({name:"RolesEdit",props:{currentRole:{type:Object,default:function(){return{roleName:"",state:1}}}},emits:["success"],setup:function(e,t){var a=t.emit,i=u(e,"currentRole"),p=o(),g=c((function(){return p.getters["settingsModule/getLangState"]})),v=s({url:"/role/allow",purl:"/role/permissions",loading:!1,form:{key:"",label:""},menu:{loading:!1,url:"/menu/list",data:[],form:[]}}),b=c((function(){return i.value.role})),y=c((function(){return p.state.permissionModule.routes})),h=function(){var e,n=(e=regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={roleName:b.value.roleName},e.next=3,P.postAuthPermission(n);case 3:null!=(t=e.sent)&&t.data&&(r=t.data.authedRoutes,v.menu.form=r);case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){l(a,r,o,i,u,"next",e)}function u(e){l(a,r,o,i,u,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),_=function(){var e,n=r(y.value);try{for(n.s();!(e=n.n()).done;){var t,o,l=e.value;if(null==l||null===(t=l.meta)||void 0===t||!t.hidden)v.menu.data.push({key:null==l?void 0:l.path,label:null==l||null===(o=l.meta)||void 0===o?void 0:o.title[g.value]})}}catch(a){n.e(a)}finally{n.f()}};return f((function(){_()})),d((function(){h()})),n(n({},m(v)),{},{lang:g,role:b,fetchMenuData:_,saveData:function(){console.log("form is ",v.menu.form),a("success")}})}}),E=C();p("data-v-7247ff70");var R={class:"wrapper"},D={class:"card-header"},A=k("br",null,null,-1),M=k("i",{class:"fa fa-check"},null,-1),T=O(" 确认修改 ");g();var U=E((function(e,n,t,r,o,l){var a=v("el-form-item"),i=v("el-form"),u=v("el-transfer"),c=v("el-card"),s=v("el-button"),f=v("el-row"),d=b("loading");return y((h(),_("div",R,[k(c,{class:"transfer"},{header:E((function(){return[k("span",null,[k("div",D,[k(i,{"label-position":"left",inline:"",class:"info-table"},{default:E((function(){return[k(a,{label:"名称"},{default:E((function(){return[k("span",null,w(e.role.roleName),1)]})),_:1})]})),_:1})])])]})),default:E((function(){return[y(k(u,{modelValue:e.menu.form,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.menu.form=n}),data:e.menu.data,titles:["菜单","已授权"]},null,8,["modelValue","data"]),[[d,e.menu.loading]])]})),_:1}),A,k(f,{class:"btns"},{default:E((function(){return[k(s,{size:"mini",type:"primary",disabled:0==e.role.state,onClick:e.saveData},{default:E((function(){return[M,T]})),_:1},8,["disabled","onClick"])]})),_:1})],512)),[[d,e.loading]])}));V.render=U,V.__scopeId="data-v-7247ff70";var I=i({name:"RoleNew",emits:["success"],setup:function(e,t){var r=t.emit,o=j(),l=s({form:{roleName:"",remark:""},loading:!1});return n({submitForm:function(){o.value.validate((function(e){return e?(r("success",n({},l.form)),!0):(console.log("error submit!!"),!1)}))},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},formRef:o,url:"/role/add"},m(l))}}),B={class:"new"},$=k("i",{class:"fa fa-plus"},null,-1),F=O(" 新增 ");I.render=function(e,n,t,r,o,l){var a=v("el-input"),i=v("el-form-item"),u=v("el-button"),c=v("el-row"),s=v("el-form"),f=b("loading");return y((h(),_("div",B,[k(s,{ref:"formRef",model:e.form,rules:e.rules,"label-position":"right","label-width":"100px"},{default:S((function(){return[k(i,{label:"角色名称",prop:"roleName"},{default:S((function(){return[k(a,{modelValue:e.form.roleName,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.form.roleName=n}),placeholder:"请输入角色名称"},null,8,["modelValue"])]})),_:1}),k(i,{label:"备注"},{default:S((function(){return[k(a,{modelValue:e.form.remark,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.form.remark=n}),placeholder:"请输入备注"},null,8,["modelValue"])]})),_:1}),k(c,{class:"btn-container"},{default:S((function(){return[k(u,{size:"mini",type:"primary",onClick:n[3]||(n[3]=function(n){return e.submitForm()})},{default:S((function(){return[$,F]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])],512)),[[f,e.loading]])};var H=e("default",i({name:"RoleManage",components:{RoleEdit:V,RoleNew:I},setup:function(){var e=s({url:{c:"/role/add",r:"/role/list",u:"/role/update",d:"/role/delete"},param:{limit:10,page:1},data:[{roleName:"超级管理员",remark:"拥有删除和创建等操作的权限",state:0},{roleName:"管理员",remark:"拥有创建和权限分配的权限",state:0},{roleName:"游客",remark:"只拥有操作部分菜单的权限",state:1}],loading:!1,is_search:!1,add_visible:!1,edit_visible:!1,detail_visible:!1,posted:{role:{roleName:"",state:1}}}),t=c((function(){return e.data.length}));return n(n({},m(e)),{},{total:t,onCurrentChange:function(){},onSizeChange:function(n){e.param.limit=n},onCreate:function(){e.add_visible=!0},onCreateSuccess:function(n){console.log(n);var t={roleName:n.roleName,remark:n.remark,state:1};e.data.push(t),e.add_visible=!1},onEditSuccess:function(){e.edit_visible=!1},onRefresh:function(){e.is_search=!1},onEdit:function(n,t){console.log("row",t),e.posted.role=t,e.edit_visible=!0},onDelete:function(e,n){console.log(e,n),function(e){console.log(e),N.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){N.ElMessage({type:"success",message:"删除成功"})})).catch((function(){N.ElMessage({type:"info",message:"已取消删除"})}))}(e)}})}})),L=O("新增"),q=O("刷新"),G=k("br",null,null,-1),J=k("i",{class:"ic ic-lock"},null,-1),K=O(" 锁定"),Q=O("正常"),W=O("未知"),X={class:"pagination"};H.render=function(e,n,t,r,o,l){var a=v("el-alert"),i=v("el-button"),u=v("el-col"),c=v("el-row"),s=v("el-table-column"),f=v("el-tag"),d=v("el-tooltip"),m=v("el-table"),p=v("el-pagination"),g=v("el-card"),w=v("role-edit"),C=v("el-dialog"),O=v("role-new"),j=b("loading");return h(),_("div",null,[k(a,{title:"Tips:点击【新增】按钮进行新增角色；点击【编辑】按钮，进行不同角色的菜单授权操作！",type:"warning"}),k(a,{title:"Tips:权限控制体验：【管理员账号为：admin@outlook.com】、【超级管理员账号为：super@outlook.com】",type:"info"}),k(g,{class:"card-ctrl"},{default:S((function(){return[k(c,null,{default:S((function(){return[k(u,{span:8,style:{"text-align":"left"}},{default:S((function(){return[k(i,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:S((function(){return[L]})),_:1},8,["onClick"]),k(i,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:S((function(){return[q]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),G,y(k(m,{data:e.data,stripe:"",class:"table"},{default:S((function(){return[k(s,{prop:"roleName",label:"角色名称",align:"center"}),k(s,{prop:"state",label:"角色状态",align:"center"},{default:S((function(e){return[0==e.row.state?(h(),_(f,{key:0,size:"mini",type:"info"},{default:S((function(){return[J,K]})),_:1})):1==e.row.state?(h(),_(f,{key:1,size:"mini",type:"success"},{default:S((function(){return[Q]})),_:1})):(h(),_(f,{key:2,size:"mini",type:"danger"},{default:S((function(){return[W]})),_:1}))]})),_:1}),k(s,{prop:"remark",label:"备注",align:"center"}),k(s,{label:"操作",align:"center"},{default:S((function(n){return[k(d,{class:"item",effect:"dark",content:"菜单授权",placement:"bottom"},{default:S((function(){return[k(i,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"small",onClick:function(t){return e.onEdit(n.$index,n.row)}},null,8,["onClick"])]})),_:2},1024),0!=n.row.state?(h(),_(d,{key:0,class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:S((function(){return[k(i,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"small",onClick:function(t){return e.onDelete(n.$index,n.row)}},null,8,["onClick"])]})),_:2},1024)):x("",!0)]})),_:1})]})),_:1},8,["data"]),[[j,e.loading]]),k("div",X,[k(p,{"current-page":e.param.page,"page-size":e.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:e.total,background:"",onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]})),_:1}),k(C,{modelValue:e.edit_visible,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.edit_visible=n}),center:"",title:e.posted.role.roleName},{default:S((function(){return[k(w,{"current-role":e.posted,onSuccess:e.onEditSuccess},null,8,["current-role","onSuccess"])]})),_:1},8,["modelValue","title"]),k(C,{modelValue:e.add_visible,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.add_visible=n}),title:"新增角色"},{default:S((function(){return[k(O,{onSuccess:e.onCreateSuccess},null,8,["onSuccess"])]})),_:1},8,["modelValue"])])}}}}))}();
