import{d as e,bl as a,bm as l,b2 as d,bn as o,n as t,p as s,r as n,b as i,y as r,i as u,g as m,m as c,h as p,w as f,t as b,k as y,a0 as _,N as v,L as w,M as h,aH as V,x as k,R as g,aF as F,b5 as z,b6 as x,aQ as U,bc as j,aR as C,az as D,ax as R,ay as A,ah as E,e as I,f as $,aw as B,be as L,bo as S,bf as H,bg as M,bh as N,ai as O}from"./vendor.fe54199a.js";/* empty css                    *//* empty css                       *//* empty css                    *//* empty css            *//* empty css                     *//* empty css                 *//* empty css                   *//* empty css                *//* empty css                */import{_ as Q}from"./index.b25652b5.js";const q=e({name:"AdvanceForm",components:{Edit:a,DeleteFilled:l,Check:d,ArrowLeft:o},setup(){const e=t(),a=s([{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]),l=s({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),d=n();i((()=>{console.log("show sizeFormRef.value",d.value)}));return{handleAddRecord:()=>{a.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:(e,l)=>{console.log(e,l),a[e].edit=!0},handleSave:(e,l)=>(console.log(e,l),(e=>Object.keys(e).some((a=>""===e[a])))(l)?(v.warning("保存前请完善信息！"),!1):(a[e].edit=!1,a[e]=l,v({type:"success",message:"保存成功"}),!0)),handleDelete:(e,l)=>{console.log(e,l),a.splice(e,1)},tableData:a,handleBack:()=>{e.go(-1)},sizeForm:l,activityForm:d,submitForm:()=>{d.value.validate((e=>e?(v({type:"success",message:"创建成功"}),!0):(console.log("error submit!!"),!1)))},resetForm:()=>{d.value.resetFields()}}}}),G=e=>(w("data-v-abe49fe0"),e=e(),h(),e),J={class:"FormInfo"},K={class:"info"},P=_("高级表单"),T=G((()=>c("span",{style:{"text-align":"left"}},"高级表单常见于一次性输入和提交大批量数据的场景。",-1))),W={class:"grid-content bg-purple-dark"},X={class:"card-header"},Y=_("返回"),Z=G((()=>c("span",null,"表单信息",-1))),ee=G((()=>c("div",null,null,-1))),ae={style:{"text-align":"left"}},le=G((()=>c("span",null,"记录管理",-1))),de={key:1,class:"name-wrapper"},oe={key:1},te={key:1},se={key:1},ne=_("保存"),ie=_("编辑"),re=_(" 删除"),ue={style:{margin:"5px"}},me=_("+ 新增记录"),ce={class:"grid-content bg-purple-dark"},pe={style:{"text-align":"left"}},fe=G((()=>c("span",null,"活动管理",-1))),be=_("-"),ye=_("立即创建"),_e=_("取消");var ve=Q(q,[["render",function(e,a,l,d,o,t){const s=V,n=r("arrow-left"),i=k,v=g,w=F,h=z,Q=x,q=U,G=r("check"),ve=r("edit"),we=r("delete-filled"),he=j,Ve=C,ke=D,ge=R,Fe=A,ze=E,xe=I,Ue=$,je=B,Ce=L,De=S,Re=H,Ae=M,Ee=N,Ie=O;return u(),m("div",J,[c("div",K,[p(s,{"content-position":"left"},{default:f((()=>[P])),_:1}),T]),p(Fe,null,{default:f((()=>[p(ge,{offset:1,span:22},{default:f((()=>[c("div",W,[p(ke,{class:"box-card"},{header:f((()=>[c("div",X,[p(v,{class:"button",type:"text",onClick:e.handleBack},{default:f((()=>[p(i,null,{default:f((()=>[p(n)])),_:1}),Y])),_:1},8,["onClick"]),Z,ee])])),default:f((()=>[c("div",ae,[le,p(s)]),p(Ve,{data:e.tableData,style:{width:"100%"}},{default:f((()=>[p(q,{label:"姓名",width:"180"},{default:f((e=>[p(Q,{effect:"light",trigger:"hover",placement:"top"},{default:f((()=>[c("p",null,"姓名: "+b(e.row.name),1),c("p",null,"住址: "+b(e.row.address),1)])),reference:f((()=>[e.row.edit?(u(),y(w,{key:0,modelValue:e.row.name,"onUpdate:modelValue":a=>e.row.name=a},null,8,["modelValue","onUpdate:modelValue"])):(u(),m("div",de,[p(h,{size:"medium"},{default:f((()=>[_(b(e.row.name),1)])),_:2},1024)]))])),_:2},1024)])),_:1}),p(q,{prop:"province",label:"省份",width:"120"},{default:f((e=>[e.row.edit?(u(),y(w,{key:0,modelValue:e.row.province,"onUpdate:modelValue":a=>e.row.province=a},null,8,["modelValue","onUpdate:modelValue"])):(u(),m("span",oe,b(e.row.province),1))])),_:1}),p(q,{prop:"city",label:"市区",width:"120"},{default:f((e=>[e.row.edit?(u(),y(w,{key:0,modelValue:e.row.city,"onUpdate:modelValue":a=>e.row.city=a},null,8,["modelValue","onUpdate:modelValue"])):(u(),m("span",te,b(e.row.city),1))])),_:1}),p(q,{prop:"address",label:"详细地址"},{default:f((e=>[e.row.edit?(u(),y(w,{key:0,modelValue:e.row.address,"onUpdate:modelValue":a=>e.row.address=a},null,8,["modelValue","onUpdate:modelValue"])):(u(),m("span",se,b(e.row.address),1))])),_:1}),p(q,{label:"操作",width:"200"},{default:f((a=>[a.row.edit?(u(),y(v,{key:0,size:"mini",type:"success",onClick:l=>e.handleSave(a.$index,a.row)},{default:f((()=>[p(i,null,{default:f((()=>[p(G)])),_:1}),ne])),_:2},1032,["onClick"])):(u(),y(v,{key:1,size:"mini",onClick:l=>e.handleEdit(a.$index,a.row)},{default:f((()=>[p(i,null,{default:f((()=>[p(ve)])),_:1}),ie])),_:2},1032,["onClick"])),p(he,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:e.InfoFilled,"icon-color":"red",title:"确定删除该条记录吗？",onConfirm:l=>e.handleDelete(a.$index,a.row)},{reference:f((()=>[p(v,{size:"mini",type:"danger"},{default:f((()=>[p(i,null,{default:f((()=>[p(we)])),_:1}),re])),_:1})])),_:2},1032,["icon","onConfirm"])])),_:1})])),_:1},8,["data"]),c("div",ue,[p(v,{onClick:e.handleAddRecord},{default:f((()=>[me])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1}),p(Fe,null,{default:f((()=>[p(ge,{offset:1,span:22},{default:f((()=>[c("div",ce,[p(ke,{class:"box-card"},{default:f((()=>[c("div",pe,[fe,p(s)]),p(Ie,{ref:"activityForm",style:{"text-align":"left"},model:e.sizeForm,"label-width":"80px",size:"mini"},{default:f((()=>[p(ze,{label:"活动名称"},{default:f((()=>[p(w,{modelValue:e.sizeForm.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.sizeForm.name=a)},null,8,["modelValue"])])),_:1}),p(ze,{label:"活动区域"},{default:f((()=>[p(Ue,{modelValue:e.sizeForm.region,"onUpdate:modelValue":a[1]||(a[1]=a=>e.sizeForm.region=a),placeholder:"请选择活动区域"},{default:f((()=>[p(xe,{label:"区域一",value:"shanghai"}),p(xe,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),p(ze,{label:"活动时间"},{default:f((()=>[p(ge,{span:11},{default:f((()=>[p(je,{modelValue:e.sizeForm.date1,"onUpdate:modelValue":a[2]||(a[2]=a=>e.sizeForm.date1=a),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),p(ge,{class:"line",span:2},{default:f((()=>[be])),_:1}),p(ge,{span:11},{default:f((()=>[p(Ce,{modelValue:e.sizeForm.date2,"onUpdate:modelValue":a[3]||(a[3]=a=>e.sizeForm.date2=a),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),p(ze,{label:"活动性质"},{default:f((()=>[p(Re,{modelValue:e.sizeForm.type,"onUpdate:modelValue":a[4]||(a[4]=a=>e.sizeForm.type=a)},{default:f((()=>[p(De,{label:"美食/餐厅线上活动",name:"type"}),p(De,{label:"地推活动",name:"type"}),p(De,{label:"线下主题活动",name:"type"})])),_:1},8,["modelValue"])])),_:1}),p(ze,{label:"特殊资源"},{default:f((()=>[p(Ee,{modelValue:e.sizeForm.resource,"onUpdate:modelValue":a[5]||(a[5]=a=>e.sizeForm.resource=a),size:"medium"},{default:f((()=>[p(Ae,{border:"",label:"线上品牌商赞助"}),p(Ae,{border:"",label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),p(ze,{size:"large"},{default:f((()=>[p(v,{type:"primary",onClick:e.submitForm},{default:f((()=>[ye])),_:1},8,["onClick"]),p(v,null,{default:f((()=>[_e])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])])),_:1})])),_:1})])}],["__scopeId","data-v-abe49fe0"]]);export{ve as default};
