import{d as e,h as l,s as a,r as o,b as d,D as t,p as n,c as i,m as r,e as s,f as u,g as c,t as m,H as p,w as f}from"./vendor.a7f58c76.js";import"./index.3730a638.js";var y=e({name:"AdvanceForm",setup(){const e=l(),n=a([{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]),i=a({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),r=o();d((()=>{console.log("show sizeFormRef.value",r.value)}));return{handleAddRecord:()=>{n.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:(e,l)=>{console.log(e,l),n[e].edit=!0},handleSave:(e,l)=>(console.log(e,l),(e=>Object.keys(e).some((l=>""===e[l])))(l)?(t.warning("保存前请完善信息！"),!1):(n[e].edit=!1,n[e]=l,t({type:"success",message:"保存成功"}),!0)),handleDelete:(e,l)=>{console.log(e,l),n.splice(e,1)},tableData:n,handleBack:()=>{e.go(-1)},sizeForm:i,activityForm:r,submitForm:()=>{r.value.validate((e=>e?(t({type:"success",message:"创建成功"}),!0):(console.log("error submit!!"),!1)))},resetForm:()=>{r.value.resetFields()}}}});const b=f();n("data-v-588635bc");const v={class:"FormInfo"},_={class:"info"},w=p("高级表单"),V=c("span",{style:{"text-align":"left"}},"高级表单常见于一次性输入和提交大批量数据的场景。",-1),h={class:"grid-content bg-purple-dark"},g={class:"card-header"},k=c("i",{class:"el-icon-arrow-left"},null,-1),F=p("返回"),z=c("span",null,"表单信息",-1),x=c("div",null,null,-1),U={style:{"text-align":"left"}},C=c("span",null,"记录管理",-1),D={key:1,class:"name-wrapper"},j={key:1},A={key:1},R={key:1},$=p("保存"),B=p("编辑"),E=p("删除"),I={style:{margin:"5px"}},S=p("+ 新增记录"),H={class:"grid-content bg-purple-dark"},O={style:{"text-align":"left"}},q=c("span",null,"活动管理",-1),G=p("-"),J=p("立即创建"),K=p("取消");i();const L=b(((e,l,a,o,d,t)=>{const n=r("el-divider"),i=r("el-button"),f=r("el-input"),y=r("el-tag"),L=r("el-popover"),M=r("el-table-column"),N=r("el-popconfirm"),P=r("el-table"),Q=r("el-card"),T=r("el-col"),W=r("el-row"),X=r("el-form-item"),Y=r("el-option"),Z=r("el-select"),ee=r("el-date-picker"),le=r("el-time-picker"),ae=r("el-checkbox-button"),oe=r("el-checkbox-group"),de=r("el-radio"),te=r("el-radio-group"),ne=r("el-form");return s(),u("div",v,[c("div",_,[c(n,{"content-position":"left"},{default:b((()=>[w])),_:1}),V]),c(W,null,{default:b((()=>[c(T,{offset:1,span:22},{default:b((()=>[c("div",h,[c(Q,{class:"box-card"},{header:b((()=>[c("div",g,[c(i,{class:"button",type:"text",onClick:e.handleBack},{default:b((()=>[k,F])),_:1},8,["onClick"]),z,x])])),default:b((()=>[c("div",U,[C,c(n)]),c(P,{data:e.tableData,style:{width:"100%"}},{default:b((()=>[c(M,{label:"姓名",width:"180"},{default:b((e=>[c(L,{effect:"light",trigger:"hover",placement:"top"},{default:b((()=>[c("p",null,"姓名: "+m(e.row.name),1),c("p",null,"住址: "+m(e.row.address),1)])),reference:b((()=>[e.row.edit?(s(),u(f,{key:0,modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])):(s(),u("div",D,[c(y,{size:"medium"},{default:b((()=>[p(m(e.row.name),1)])),_:2},1024)]))])),_:2},1024)])),_:1}),c(M,{prop:"province",label:"省份",width:"120"},{default:b((e=>[e.row.edit?(s(),u(f,{key:0,modelValue:e.row.province,"onUpdate:modelValue":l=>e.row.province=l},null,8,["modelValue","onUpdate:modelValue"])):(s(),u("span",j,m(e.row.province),1))])),_:1}),c(M,{prop:"city",label:"市区",width:"120"},{default:b((e=>[e.row.edit?(s(),u(f,{key:0,modelValue:e.row.city,"onUpdate:modelValue":l=>e.row.city=l},null,8,["modelValue","onUpdate:modelValue"])):(s(),u("span",A,m(e.row.city),1))])),_:1}),c(M,{prop:"address",label:"详细地址"},{default:b((e=>[e.row.edit?(s(),u(f,{key:0,modelValue:e.row.address,"onUpdate:modelValue":l=>e.row.address=l},null,8,["modelValue","onUpdate:modelValue"])):(s(),u("span",R,m(e.row.address),1))])),_:1}),c(M,{label:"操作",width:"200"},{default:b((l=>[l.row.edit?(s(),u(i,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:a=>e.handleSave(l.$index,l.row)},{default:b((()=>[$])),_:2},1032,["onClick"])):(s(),u(i,{key:1,size:"mini",icon:"el-icon-edit",onClick:a=>e.handleEdit(l.$index,l.row)},{default:b((()=>[B])),_:2},1032,["onClick"])),c(N,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:a=>e.handleDelete(l.$index,l.row)},{reference:b((()=>[c(i,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:b((()=>[E])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),c("div",I,[c(i,{onClick:e.handleAddRecord},{default:b((()=>[S])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1}),c(W,null,{default:b((()=>[c(T,{offset:1,span:22},{default:b((()=>[c("div",H,[c(Q,{class:"box-card"},{default:b((()=>[c("div",O,[q,c(n)]),c(ne,{ref:"activityForm",style:{"text-align":"left"},model:e.sizeForm,"label-width":"80px",size:"mini"},{default:b((()=>[c(X,{label:"活动名称"},{default:b((()=>[c(f,{modelValue:e.sizeForm.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.sizeForm.name=l)},null,8,["modelValue"])])),_:1}),c(X,{label:"活动区域"},{default:b((()=>[c(Z,{modelValue:e.sizeForm.region,"onUpdate:modelValue":l[2]||(l[2]=l=>e.sizeForm.region=l),placeholder:"请选择活动区域"},{default:b((()=>[c(Y,{label:"区域一",value:"shanghai"}),c(Y,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),c(X,{label:"活动时间"},{default:b((()=>[c(T,{span:11},{default:b((()=>[c(ee,{modelValue:e.sizeForm.date1,"onUpdate:modelValue":l[3]||(l[3]=l=>e.sizeForm.date1=l),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),c(T,{class:"line",span:2},{default:b((()=>[G])),_:1}),c(T,{span:11},{default:b((()=>[c(le,{modelValue:e.sizeForm.date2,"onUpdate:modelValue":l[4]||(l[4]=l=>e.sizeForm.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),c(X,{label:"活动性质"},{default:b((()=>[c(oe,{modelValue:e.sizeForm.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.sizeForm.type=l)},{default:b((()=>[c(ae,{label:"美食/餐厅线上活动",name:"type"}),c(ae,{label:"地推活动",name:"type"}),c(ae,{label:"线下主题活动",name:"type"})])),_:1},8,["modelValue"])])),_:1}),c(X,{label:"特殊资源"},{default:b((()=>[c(te,{modelValue:e.sizeForm.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.sizeForm.resource=l),size:"medium"},{default:b((()=>[c(de,{border:"",label:"线上品牌商赞助"}),c(de,{border:"",label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),c(X,{size:"large"},{default:b((()=>[c(i,{type:"primary",onClick:e.submitForm},{default:b((()=>[J])),_:1},8,["onClick"]),c(i,null,{default:b((()=>[K])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])])),_:1})])),_:1})])}));y.render=L,y.__scopeId="data-v-588635bc";export default y;
