!function(){var e=document.createElement("style");e.innerHTML=".FormInfo[data-v-a8ed5eea]{margin-top:20px}.FormInfo .demo-ruleForm[data-v-a8ed5eea]{text-align:left}.FormInfo .info[data-v-a8ed5eea]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.FormInfo .card-header[data-v-a8ed5eea]{display:flex;justify-content:space-between;align-items:center}.FormInfo .text[data-v-a8ed5eea]{font-size:14px}.FormInfo .item[data-v-a8ed5eea]{margin-bottom:18px}.FormInfo .box-card[data-v-a8ed5eea]{width:100%}\n",document.head.appendChild(e),System.register(["./vendor-legacy.a92d6376.js"],(function(e){"use strict";var r,t,l,n,a,u,o,d,i,c,m,f,s;return{setters:[function(e){r=e.d,t=e.h,l=e.s,n=e.r,a=e.b,u=e.p,o=e.c,d=e.m,i=e.g,c=e.e,m=e.f,f=e.w,s=e.D}],execute:function(){var p=e("default",r({name:"FormInfo",setup:function(){var e=t(),r=l({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),u=n();a((function(){console.log("show ruleFormRef.value",u.value)}));return{handleBack:function(){e.go(-1)},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},ruleForm:r,ruleFormRef:u,submitForm:function(){u.value.validate((function(e){return e?(alert("submit!"),!0):(console.log("error submit!!"),!1)}))},resetForm:function(){u.value.resetFields()}}}})),g=f();u("data-v-a8ed5eea");var F={class:"FormInfo"},b={class:"info"},v=s("基础表单"),y=m("span",{style:{"text-align":"left"}},"用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",-1),h={class:"grid-content bg-purple-dark"},_={class:"card-header"},V=m("i",{class:"el-icon-arrow-left"},null,-1),x=s("返回"),k=m("span",null,"表单信息",-1),w=m("div",null,null,-1),I=s("-"),q=s("立即创建"),U=s("重置");o();var C=g((function(e,r,t,l,n,a){var u=d("el-divider"),o=d("el-button"),f=d("el-input"),s=d("el-form-item"),p=d("el-option"),C=d("el-select"),j=d("el-date-picker"),R=d("el-col"),z=d("el-time-picker"),B=d("el-switch"),D=d("el-checkbox"),E=d("el-checkbox-group"),H=d("el-radio"),L=d("el-radio-group"),M=d("el-form"),S=d("el-card"),T=d("el-row");return i(),c("div",F,[m("div",b,[m(u,{"content-position":"left"},{default:g((function(){return[v]})),_:1}),y]),m(T,null,{default:g((function(){return[m(R,{offset:1,span:22},{default:g((function(){return[m("div",h,[m(S,{class:"box-card"},{header:g((function(){return[m("div",_,[m(o,{class:"button",type:"text",onClick:e.handleBack},{default:g((function(){return[V,x]})),_:1},8,["onClick"]),k,w])]})),default:g((function(){return[m(M,{ref:"ruleFormRef",model:e.ruleForm,"label-position":"right",rules:e.rules,"label-width":"100px",class:"demo-ruleForm"},{default:g((function(){return[m(s,{label:"活动名称",prop:"name"},{default:g((function(){return[m(f,{modelValue:e.ruleForm.name,"onUpdate:modelValue":r[1]||(r[1]=function(r){return e.ruleForm.name=r})},null,8,["modelValue"])]})),_:1}),m(s,{label:"活动区域",prop:"region"},{default:g((function(){return[m(C,{modelValue:e.ruleForm.region,"onUpdate:modelValue":r[2]||(r[2]=function(r){return e.ruleForm.region=r}),placeholder:"请选择活动区域"},{default:g((function(){return[m(p,{label:"区域一",value:"shanghai"}),m(p,{label:"区域二",value:"beijing"})]})),_:1},8,["modelValue"])]})),_:1}),m(s,{label:"活动时间",required:""},{default:g((function(){return[m(R,{span:11},{default:g((function(){return[m(s,{prop:"date1"},{default:g((function(){return[m(j,{modelValue:e.ruleForm.date1,"onUpdate:modelValue":r[3]||(r[3]=function(r){return e.ruleForm.date1=r}),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1}),m(R,{class:"line",span:2},{default:g((function(){return[I]})),_:1}),m(R,{span:11},{default:g((function(){return[m(s,{prop:"date2"},{default:g((function(){return[m(z,{modelValue:e.ruleForm.date2,"onUpdate:modelValue":r[4]||(r[4]=function(r){return e.ruleForm.date2=r}),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),m(s,{label:"即时配送",prop:"delivery"},{default:g((function(){return[m(B,{modelValue:e.ruleForm.delivery,"onUpdate:modelValue":r[5]||(r[5]=function(r){return e.ruleForm.delivery=r})},null,8,["modelValue"])]})),_:1}),m(s,{label:"活动性质",prop:"type"},{default:g((function(){return[m(E,{modelValue:e.ruleForm.type,"onUpdate:modelValue":r[6]||(r[6]=function(r){return e.ruleForm.type=r})},{default:g((function(){return[m(D,{label:"美食/餐厅线上活动",name:"type"}),m(D,{label:"地推活动",name:"type"}),m(D,{label:"线下主题活动",name:"type"}),m(D,{label:"单纯品牌曝光",name:"type"})]})),_:1},8,["modelValue"])]})),_:1}),m(s,{label:"特殊资源",prop:"resource"},{default:g((function(){return[m(L,{modelValue:e.ruleForm.resource,"onUpdate:modelValue":r[7]||(r[7]=function(r){return e.ruleForm.resource=r})},{default:g((function(){return[m(H,{label:"线上品牌商赞助"}),m(H,{label:"线下场地免费"})]})),_:1},8,["modelValue"])]})),_:1}),m(s,{label:"活动形式",prop:"desc"},{default:g((function(){return[m(f,{modelValue:e.ruleForm.desc,"onUpdate:modelValue":r[8]||(r[8]=function(r){return e.ruleForm.desc=r}),type:"textarea"},null,8,["modelValue"])]})),_:1}),m(s,null,{default:g((function(){return[m(o,{type:"primary",onClick:r[9]||(r[9]=function(r){return e.submitForm()})},{default:g((function(){return[q]})),_:1}),m(o,{onClick:r[10]||(r[10]=function(r){return e.resetForm()})},{default:g((function(){return[U]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})])]})),_:1})]})),_:1})])}));p.render=C,p.__scopeId="data-v-a8ed5eea"}}}))}();
