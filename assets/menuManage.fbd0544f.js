var i=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(e,l,c)=>l in e?i(e,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[l]=c,s=(i,e)=>{for(var l in e||(e={}))o.call(e,l)&&t(i,l,e[l]);if(c)for(var l of c(e))a.call(e,l)&&t(i,l,e[l]);return i},n=(i,c)=>e(i,l(c));import{u as r,a as d}from"./index.5e59d058.js";import{a7 as m,r as u,k as p,av as f,v as g,aJ as b,aB as h,Z as k,a5 as v,b4 as y,_ as w,M as _,aH as j,A as C,aE as V,aC as S,aK as z,b6 as x,a4 as E,u as M,c as O,D as q,Y as U}from"./@vue.9dcf4325.js";import{h as A}from"./element-plus.c35c14b5.js";import"./vuex.110f31c1.js";import"./js-cookie.aa728e12.js";import"./vue-router.5a690d96.js";import"./css-color-function.a5ba1304.js";import"./color.ccf836c3.js";import"./clone.05e42b91.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./ms.ba588bd8.js";import"./path-to-regexp.2b09bab4.js";import"./fuse.js.c1e3c562.js";import"./path.8db65c51.js";import"./util.3d699e40.js";import"./axios.a57df465.js";import"./dayjs.80b0a338.js";import"./mockjs.26632a98.js";import"./lodash.a533b6d4.js";import"./resize-observer-polyfill.af5c5caa.js";import"./@popperjs.b42a2641.js";import"./mitt.06a3009f.js";import"./async-validator.9224cb80.js";import"./normalize-wheel.1d574cd1.js";import"./vue.1f809ab3.js";var I=m({name:"Icon",props:{msg:{type:String,required:!1,default:""}},emits:["success"],setup:(i,{emit:e})=>{const l=u({icons:["ic ic-accessory","ic ic-activity","ic ic-activity-fill","ic ic-add","ic ic-addition-fill","ic ic-addition","ic ic-addpeople-fill","ic ic-addpeople","ic ic-addressbook-fill","ic ic-addressbook","ic ic-barrage-fill","ic ic-barrage","ic ic-browse-fill","ic ic-browse","ic ic-brush","ic ic-brush-fill","ic ic-businesscard-fill","ic ic-businesscard","ic ic-camera-fill","ic ic-camera","ic ic-clock-fill","ic ic-clock","ic ic-close","ic ic-collection-fill","ic ic-collection","ic ic-computer-fill","ic ic-computer","ic ic-coordinates-fill","ic ic-coordinates","ic ic-coupons-fill","ic ic-coupons","ic ic-createtask-fill","ic ic-createtask","ic ic-customerservice-fill","ic ic-customerservice","ic ic-delete-fill","ic ic-delete","ic ic-document","ic ic-document-fill","ic ic-dynamic ic-fill","ic ic-dynamic","ic ic-editor","ic ic-eit","ic ic-emoji-fill","ic ic-emoji","ic ic-empty","ic ic-empty-fill","ic ic-enter","ic ic-enterinto","ic ic-enterinto-fill","ic ic-feedback-fill","ic ic-feedback","ic ic-flag-fill","ic ic-flag","ic ic-flashlight","ic ic-flashlight-fill","ic ic-flip","ic ic-flip-fill","ic ic-fullscreen","ic ic-group","ic ic-group-fill","ic ic-headlines-fill","ic ic-headlines","ic ic-homepage-fill","ic ic-homepage","ic ic-integral-fill","ic ic-integral","ic ic-interactive-fill","ic ic-interactive","ic ic-keyboard","ic ic-label","ic ic-label-fill","ic ic-like-fill","ic ic-like","ic ic-live-fill","ic ic-live","ic ic-lock-fill","ic ic-lock","ic ic-mail","ic ic-mail-fill","ic ic-manage-fill","ic ic-manage","ic ic-message","ic ic-message-fill","ic ic-mine","ic ic-mine-fill","ic ic-mobilephone-fill","ic ic-mobilephone","ic ic-more","ic ic-narrow","ic ic-offline-fill","ic ic-offline","ic ic-order-fill","ic ic-order","ic ic-other","ic ic-people-fill","ic ic-people","ic ic-picture-fill","ic ic-picture","ic ic-play","ic ic-play-fill","ic ic-playon-fill","ic ic-playon","ic ic-praise-fill","ic ic-praise","ic ic-prompt-fill","ic ic-prompt","ic ic-qrcode-fill","ic ic-qrcode","ic ic-redpacket-fill","ic ic-redpacket","ic ic-refresh","ic ic-remind-fill","ic ic-remind","ic ic-return","ic ic-right","ic ic-scan","ic ic-select-fill","ic ic-select","ic ic-send","ic ic-service-fill","ic ic-service","ic ic-setup-fill","ic ic-setup","ic ic-share-fill","ic ic-share","ic ic-shielding-fill","ic ic-shielding","ic ic-smallscreen-fill","ic ic-smallscreen","ic ic-stealth-fill","ic ic-stealth","ic ic-success-fill","ic ic-success","ic ic-suspend","ic ic-switch","ic ic-systemprompt-fill","ic ic-systemprompt","ic ic-tailor","ic ic-task","ic ic-task-fill","ic ic-tasklist-fill","ic ic-tasklist","ic ic-text","ic ic-time-fill","ic ic-time","ic ic-translation-fill","ic ic-translation","ic ic-trash","ic ic-trash-fill","ic ic-undo","ic ic-unlock-fill","ic ic-unlock","ic ic-video","ic ic-video-fill","ic ic-warning-fill","ic ic-warning","ic ic-workbench-fill","ic ic-workbench","ic ic-search","ic ic-searchfill","ic ic-publishgoods-fill","ic ic-shop-fill","ic ic-transaction-fill","ic ic-packup","ic ic-unfold","ic ic-wangwang","ic ic-financial-fill","ic ic-marketing-fill","ic ic-shake","ic ic-decoration-fill","ic ic-questions","ic ic-supply","ic ic-tools","ic ic-int","ic ic-commodity","ic ic-zhtn"],data:[""],key:""}),c=p(0);return f((()=>{l.data=l.icons})),n(s({count:c},g(l)),{search:()=>{const{key:i}=l,{icons:e}=l;l.data=i?e.filter((i=>e=>e.toLowerCase().indexOf(i.toLowerCase())>0)(i)):e},selected:i=>{e("success",i)}})}});const R=i=>(V("data-v-57f84410"),i=i(),S(),i),P={class:"icon-panel"},D=R((()=>w("br",null,null,-1))),Z=R((()=>w("br",null,null,-1))),B=["onClick"],F=R((()=>w("br",null,null,-1)));I.render=function(i,e,l,c,o,a){const t=b("el-button"),s=b("el-input");return h(),k("div",P,[v(s,{modelValue:i.key,"onUpdate:modelValue":e[1]||(e[1]=e=>i.key=e),placeholder:"搜索图标",onInput:i.search},{default:y((()=>[v(t,{icon:"el-icon-search",onClick:e[0]||(e[0]=e=>i.search())})])),_:1},8,["modelValue","onInput"]),D,Z,w("section",null,[(h(!0),k(_,null,j(i.data,(e=>(h(),k("span",{key:e,class:"icon-items",onClick:l=>i.selected(e)},[w("i",{class:C(e)},null,2),F],8,B)))),128))])])},I.__scopeId="data-v-57f84410";const L=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,$=(i,e,l)=>{L.test(e)?l():l(new Error("必须输入正确的路径"))};var T=m({name:"MenuNew",components:{Icons:I},emits:["success"],setup(i,{emit:e}){const l={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:$,trigger:"blur"}]},c=p(),o=u({form:{path:"",meta:{title:"",icon:""}},modal:!1,loading:!1});return n(s({},g(o)),{formRef:c,rules:l,onSuccess:i=>{console.log("val is ",i),o.modal=!1,o.form.meta.icon=i},submitForm:()=>{c.value.validate((i=>!!i&&(console.log(o.form),e("success",o.form),!0)))},handleClickChoose:()=>{o.modal=!o.modal,console.log(" state.modal",o.modal)}})}});const N={class:"new"},H=E("选择图标"),J=w("i",{class:"fa fa-plus"},null,-1),K=E(" 确认修改 ");T.render=function(i,e,l,c,o,a){const t=b("el-input"),s=b("el-form-item"),n=b("el-button"),r=b("icons"),d=b("el-popover"),m=b("el-row"),u=b("el-form"),p=z("loading");return x((h(),k("div",N,[v(u,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:y((()=>[v(s,{label:"菜单名称",prop:"meta.title"},{default:y((()=>[v(t,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[0]||(e[0]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),v(s,{label:"菜单图标",prop:"meta.icon"},{default:y((()=>[v(t,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),v(n,{disabled:"disabled"},{default:y((()=>[w("i",{class:C(i.form.meta.icon)},null,2)])),_:1}),v(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:y((()=>[v(n,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:y((()=>[H])),_:1},8,["onClick"])])),default:y((()=>[v(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),v(s,{label:"菜单路径",prop:"path"},{default:y((()=>[v(t,{modelValue:i.form.path,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),v(m,{class:"btn-container"},{default:y((()=>[v(n,{size:"mini",type:"primary",onClick:e[3]||(e[3]=e=>i.submitForm())},{default:y((()=>[J,K])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[p,i.loading]])};const Y=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,G=(i,e,l)=>{Y.test(e)?l():l(new Error("必须输入正确的路径"))};var Q=m({name:"MenuEdit",components:{Icons:I},props:{currentMenu:{type:Object,default:null}},emits:["success"],setup(i,{emit:e}){const l=M(i,"currentMenu");console.log(l);const c={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:G,trigger:"blur"}]},o=p(),a=u({form:l,modal:!1,loading:!1});return n(s({},g(a)),{formRef:o,rules:c,onSuccess:i=>{console.log("val is ",i),a.modal=!1,a.form.meta.icon=i},submitForm:()=>{o.value.validate((i=>!!i&&(console.log(a.form),e("success",a.form),!0)))},handleClickChoose:()=>{a.modal=!a.modal,console.log(" state.modal",a.modal)}})}});const W={class:"new"},X=E("选择图标"),ii=w("i",{class:"fa fa-plus"},null,-1),ei=E(" 确认修改 ");Q.render=function(i,e,l,c,o,a){const t=b("el-input"),s=b("el-form-item"),n=b("el-button"),r=b("icons"),d=b("el-popover"),m=b("el-row"),u=b("el-form"),p=z("loading");return x((h(),k("div",W,[v(u,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:y((()=>[v(s,{label:"菜单名称",prop:"meta.title"},{default:y((()=>[v(t,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[0]||(e[0]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),v(s,{label:"菜单图标",prop:"meta.icon"},{default:y((()=>[v(t,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),v(n,{disabled:"disabled"},{default:y((()=>[w("i",{class:C(i.form.meta.icon)},null,2)])),_:1}),v(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:y((()=>[v(n,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:y((()=>[X])),_:1},8,["onClick"])])),default:y((()=>[v(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),v(s,{label:"菜单路径",prop:"path"},{default:y((()=>[v(t,{modelValue:i.form.path,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),v(m,{class:"btn-container"},{default:y((()=>[v(n,{size:"mini",type:"primary",onClick:e[3]||(e[3]=e=>i.submitForm())},{default:y((()=>[ii,ei])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[p,i.loading]])};var li=m({name:"Menu",components:{MenuNew:T,MenuEdit:Q},setup(){const i=r(),e=O((()=>i.getters["settingsModule/getLangState"])),l=u({url:{c:"/menu/add",r:"/menu/list",u:"/menu/update",d:"/menu/delete"},param:{limit:10,page:1},data:[{path:"/",redirect:"/home",meta:{title:"首页",icon:"el-icon-s-home"},children:[{path:"/home",name:"home",component:()=>d((()=>import("./home.625c19ac.js")),["assets/home.625c19ac.js","assets/home.2f28bf9a.css","assets/index.5e59d058.js","assets/index.33dcc73c.css","assets/@vue.9dcf4325.js","assets/element-plus.c35c14b5.js","assets/element-plus.38149d33.css","assets/lodash.a533b6d4.js","assets/resize-observer-polyfill.af5c5caa.js","assets/@popperjs.b42a2641.js","assets/dayjs.80b0a338.js","assets/mitt.06a3009f.js","assets/async-validator.9224cb80.js","assets/normalize-wheel.1d574cd1.js","assets/vue.1f809ab3.js","assets/vuex.110f31c1.js","assets/js-cookie.aa728e12.js","assets/vue-router.5a690d96.js","assets/css-color-function.a5ba1304.js","assets/color.ccf836c3.js","assets/clone.05e42b91.js","assets/color-convert.755d189f.js","assets/color-name.e7a4e1d3.js","assets/color-string.e356f5de.js","assets/ms.ba588bd8.js","assets/path-to-regexp.2b09bab4.js","assets/fuse.js.c1e3c562.js","assets/path.8db65c51.js","assets/util.3d699e40.js","assets/axios.a57df465.js","assets/mockjs.26632a98.js","assets/@antv.bcb920a1.js","assets/tslib.2c72142d.js","assets/d3-geo.e96e4362.js","assets/d3-geo-projection.ad7fc955.js","assets/wolfy87-eventemitter.b82cc2a7.js","assets/d3-composite-projections.2f209482.js","assets/d3-array.6972b2c2.js","assets/d3-path.cb64bdd6.js","assets/simple-statistics.9c96a797.js","assets/d3-dsv.3ce01abc.js","assets/point-at-length.cd7ad0f0.js","assets/parse-svg-path.4a7f6aa5.js","assets/abs-svg-path.e24d81d5.js","assets/d3-hexjson.d5d0fd67.js","assets/topojson-client.7243b23b.js","assets/regression.aef4d94b.js","assets/dagre.59cf423d.js","assets/graphlib.935b0eb6.js","assets/d3-sankey.d83d1f38.js","assets/d3-collection.c137de0e.js","assets/d3-shape.bd337d73.js","assets/d3-voronoi.ad7d5ea0.js","assets/detect-browser.a13af7c5.js","assets/gl-matrix.936cec83.js","assets/d3-ease.c6c5fd6d.js","assets/d3-interpolate.6e35df45.js","assets/d3-color.a7c99788.js","assets/d3-timer.6741c69d.js","assets/fecha.65c23b8e.js","assets/size-sensor.5c22b14f.js","assets/d3-regression.dc38cbd0.js","assets/pdfast.a3950e4a.js","assets/d3-hierarchy.a7f176ac.js"]),meta:{title:"首页",icon:"home"}}]}],total:1,loading:!1,addVisible:!1,editVisible:!1,detailVisible:!1,posted:{menu:{path:"",meta:{title:"",icon:""}}}}),c=O((()=>i.state.permissionModule.accessRoutes)),o=i=>{console.log(i)};return f((()=>{(()=>{const i=c.value.filter((i=>{var e;return!0!==(null==(e=null==i?void 0:i.meta)?void 0:e.hidden)}));l.data=i})()})),n(s({},g(l)),{onError:()=>{},lang:e,onAddSuccess:()=>{l.addVisible=!1,o()},onEditSuccess:()=>{console.log("on edit success"),l.editVisible=!1},onDelete:(i,e)=>{console.log(e),(i=>{console.log(i),A.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{A.ElMessage({type:"success",message:"删除成功"})})).catch((()=>{A.ElMessage({type:"info",message:"已取消删除"})}))})(i)},onCurrentChange:i=>{o(i)},onSizeChange:i=>{l.param.limit=i,o(i)},onCreate:()=>{l.addVisible=!0},onRefresh:()=>{o()},onEdit:(i,e)=>{console.log("row,",e,i),l.posted.menu=e,l.editVisible=!0}})}});const ci=E("新增"),oi=E("刷新"),ai={class:"pagination"};li.render=function(i,e,l,c,o,a){const t=b("el-button"),s=b("el-col"),n=b("el-table-column"),r=b("el-tag"),d=b("el-tooltip"),m=b("el-table"),u=b("el-pagination"),p=b("el-row"),f=b("el-card"),g=b("menu-new"),j=b("el-dialog"),V=b("menu-edit"),S=z("loading");return h(),k("div",null,[v(f,{class:"card-ctrl"},{default:y((()=>[v(p,null,{default:y((()=>[v(s,null,{default:y((()=>[v(s,null,{default:y((()=>[v(t,{type:"primary",icon:"el-icon-plus",size:"small",onClick:i.onCreate},{default:y((()=>[ci])),_:1},8,["onClick"]),v(t,{type:"success",icon:"el-icon-refresh",size:"small",onClick:i.onRefresh},{default:y((()=>[oi])),_:1},8,["onClick"])])),_:1}),x(v(m,{data:i.data,stripe:"",class:"table"},{default:y((()=>[v(n,{label:"菜单名称",align:"center"},{default:y((e=>[w("span",null,q(e.row.meta.title[i.lang]),1)])),_:1}),v(n,{label:"图标",align:"center"},{default:y((i=>[w("i",{class:C(i.row.meta.icon)},null,2)])),_:1}),v(n,{label:"路径",align:"center"},{default:y((i=>[v(r,{size:"mini",type:"info"},{default:y((()=>[E(q(i.row.path),1)])),_:2},1024)])),_:1}),v(n,{label:"操作",align:"center"},{default:y((e=>[0!=e.row.state?(h(),k(_,{key:0},[v(d,{class:"item",effect:"dark",content:"修改",placement:"bottom"},{default:y((()=>[v(t,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"mini",onClick:l=>i.onEdit(e.$index,e.row)},null,8,["onClick"])])),_:2},1024),v(d,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:y((()=>[v(t,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"mini",onClick:l=>i.onDelete(e.$index,e.row)},null,8,["onClick"])])),_:2},1024)],64)):U("",!0)])),_:1})])),_:1},8,["data"]),[[S,i.loading]]),w("div",ai,[v(u,{"current-page":i.param.page,"page-size":i.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:i.total,background:"",onCurrentChange:i.onCurrentChange,onSizeChange:i.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1})])),_:1})])),_:1}),v(j,{modelValue:i.addVisible,"onUpdate:modelValue":e[0]||(e[0]=e=>i.addVisible=e),width:"632px",title:"新增菜单"},{default:y((()=>[v(g,{onSuccess:i.onAddSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"]),v(j,{modelValue:i.editVisible,"onUpdate:modelValue":e[1]||(e[1]=e=>i.editVisible=e),center:"",width:"632px",title:i.posted.menu.meta.title},{default:y((()=>[v(V,{"current-menu":i.posted.menu,onSuccess:i.onEditSuccess},null,8,["current-menu","onSuccess"])])),_:1},8,["modelValue","title"])])};export{li as default};
