var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{d as o,aZ as r,N as d,y as c,i as u,g as p,h as m,w as f,m as v,t as b,p as h,r as y,c as g,b as w,v as _,a0 as C,F as T,j as k,k as O,bv as j,L as x,M as V,aH as E,X as I,aI as S,bw as D,bx as z,b5 as P,aF as M,R as F,az as B,ax as G,ay as W}from"./vendor.fe54199a.js";/* empty css            *//* empty css             *//* empty css                */import{_ as K,u as L,b as N}from"./index.b25652b5.js";import{S as $}from"./index.4ccbf773.js";import{F as q,m as H,a as R,b as U}from"./main.3ac4046d.js";let X=0;const Z=(new Date).toISOString().replace(/T.*$/,"");function A(){return String(X++)}const J=[{id:A(),title:"全天安排",start:Z},{id:A(),title:"算法专训",start:`${Z}T12:00:00`}],Q=o({name:"Calendar",components:{FullCalendar:q},setup(){},data(){return{calendarOptions:{plugins:[H,R,U],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",initialEvents:J,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,select:this.handleDateSelect,eventClick:this.handleEventClick,eventsSet:this.handleEvents},currentEvents:[]}},methods:{handleWeekendsToggle(){this.calendarOptions.weekends=!this.calendarOptions.weekends},handleDateSelect(e){const a=prompt("请输入任务标题"),t=e.view.calendar;t.unselect(),a&&t.addEvent({id:A(),title:a,start:e.startStr,end:e.endStr,allDay:e.allDay})},handleEventClick(e){r.confirm("确定删除当前任务吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{e.event.remove(),d({type:"success",message:"删除成功"})})).catch((()=>{d({type:"info",message:"已取消删除"})}))},handleEvents(e){this.currentEvents=e}}});const Y=o({name:"PersonalCenter",components:{fullcalendar:K(Q,[["render",function(e,a,t,n,s,l){const i=c("FullCalendar");return u(),p("div",null,[m(i,{class:"demo-app-calendar",options:e.calendarOptions},{eventContent:f((e=>[v("b",null,b(e.timeText),1),v("i",null,b(e.event.title),1)])),_:1},8,["options"])])}]])},setup(){const e=h({dynamicTags:["default"],inputVisible:!1,inputValue:"",contentTip:"您可：1、拖放事件任务 2、调整事件任务的大小 3、点击事件任务删除 4、点击日期添加新的事件任务"}),o=y(100),r=y("medium"),d=y(!0),c=L(),u=g((()=>c.state.permissionModule.roles));return w((()=>{(async()=>{try{const a=await $.getPersonTags();e.dynamicTags=a.data.tags}catch(a){console.error(a)}})()})),p=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(n)for(var t of n(a))l.call(a,t)&&i(e,t,a[t]);return e})({formLabelWidth:o,showInput:()=>{e.inputVisible=!0},handleInputConfirm:()=>{const{inputValue:a}=e;a&&e.dynamicTags.push(a),e.inputVisible=!1,e.inputValue=""}},_(e)),a(p,t({size:r,roles:u,showDesc:d,handleClose:a=>{e.dynamicTags.splice(e.dynamicTags.indexOf(a),1)}}));var p}}),ee=e=>(x("data-v-0b20e4ce"),e=e(),V(),e),ae={class:"page-container"},te={class:"info"},ne=C("个人中心"),se={style:{"text-align":"left"}},le=C("个人中心通常用来作为个人基本信息展示和个人事务通知中心 "),ie=C("fullCalendar Demo "),oe=ee((()=>v("i",{class:"el-icon-question"},null,-1))),re=ee((()=>v("div",{class:"account-avatar"},[v("img",{src:N}),v("div",{class:"account-name"},"极客恰恰"),v("div",{class:"account-sign"},"极客签名,持续学习")],-1))),de={class:"account-detail"},ce=ee((()=>v("i",{class:"el-icon-user"},null,-1))),ue=C(" 用户名: "),pe=C(" sara "),me=ee((()=>v("i",{class:"el-icon-user"},null,-1))),fe=C(" 角色: "),ve=ee((()=>v("i",{class:"el-icon-chat-dot-round"},null,-1))),be=C(" 状态: "),he=C(" 在职 "),ye=ee((()=>v("i",{class:"el-icon-location-information"},null,-1))),ge=C(" 地址: "),we=C(" 上海市虹口区 "),_e=ee((()=>v("div",{class:"divider divider-dashed"},null,-1))),Ce=ee((()=>v("div",{class:"tag-title"},[v("span",null,"标签")],-1))),Te={class:"tag-dynamic"},ke=C("+ New Tag"),Oe=ee((()=>v("div",{class:"divider divider-dashed"},null,-1)));var je=K(Y,[["render",function(e,a,t,n,s,l){const i=E,o=I,r=S,d=D,h=z,y=P,g=M,w=F,_=B,x=G,V=c("fullcalendar"),K=W;return u(),p("div",ae,[v("div",te,[m(i,{"content-position":"left"},{default:f((()=>[ne])),_:1}),v("span",se,[le,m(r,{type:"primary",href:"https://fullcalendar.io/docs/initialize-globals-demo"},{default:f((()=>[ie,m(o,{class:"item",effect:"dark",content:e.contentTip,placement:"top-start"},{default:f((()=>[oe])),_:1},8,["content"])])),_:1})])]),m(K,{gutter:20},{default:f((()=>[m(x,{span:7,offset:1},{default:f((()=>[m(_,{class:"box-card"},{default:f((()=>[re,v("div",de,[m(h,{class:"detail",column:1,size:e.size},{default:f((()=>[m(d,null,{label:f((()=>[ce,ue])),default:f((()=>[pe])),_:1}),m(d,null,{label:f((()=>[me,fe])),default:f((()=>[C(" "+b(e.roles),1)])),_:1}),m(d,null,{label:f((()=>[ve,be])),default:f((()=>[he])),_:1}),m(d,null,{label:f((()=>[ye,ge])),default:f((()=>[we])),_:1})])),_:1},8,["size"])]),_e,Ce,v("div",Te,[(u(!0),p(T,null,k(e.dynamicTags,(a=>(u(),O(y,{key:a,closable:"","disable-transitions":!1,onClose:t=>e.handleClose(a)},{default:f((()=>[C(b(a),1)])),_:2},1032,["onClose"])))),128)),e.inputVisible?(u(),O(g,{key:0,ref:"saveTagInput",modelValue:e.inputValue,"onUpdate:modelValue":a[0]||(a[0]=a=>e.inputValue=a),class:"input-new-tag",size:"small",onKeyup:j(e.handleInputConfirm,["enter"]),onBlur:e.handleInputConfirm},null,8,["modelValue","onKeyup","onBlur"])):(u(),O(w,{key:1,class:"button-new-tag",size:"small",onClick:e.showInput},{default:f((()=>[ke])),_:1},8,["onClick"])),Oe])])),_:1})])),_:1}),m(x,{span:15,push:0},{default:f((()=>[m(_,{class:"box-card"},{default:f((()=>[m(V)])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-0b20e4ce"]]);export{je as default};
