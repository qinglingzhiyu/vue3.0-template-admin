var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{a as n}from"./vue-router.5a690d96.js";import{p as s}from"./index.5e59d058.js";import{a7 as d,k as m,r as c,c as p,av as u,v as f,aJ as b,aK as g,aB as h,Z as j,a5 as v,b4 as C,b6 as y,X as w,Y as x,a4 as z,D as _}from"./@vue.9dcf4325.js";import"./element-plus.c35c14b5.js";import"./lodash.a533b6d4.js";import"./resize-observer-polyfill.af5c5caa.js";import"./@popperjs.b42a2641.js";import"./dayjs.80b0a338.js";import"./mitt.06a3009f.js";import"./async-validator.9224cb80.js";import"./normalize-wheel.1d574cd1.js";import"./vue.1f809ab3.js";import"./vuex.110f31c1.js";import"./js-cookie.aa728e12.js";import"./css-color-function.a5ba1304.js";import"./color.ccf836c3.js";import"./clone.05e42b91.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./ms.ba588bd8.js";import"./path-to-regexp.2b09bab4.js";import"./fuse.js.c1e3c562.js";import"./path.8db65c51.js";import"./util.3d699e40.js";import"./axios.a57df465.js";import"./mockjs.26632a98.js";var k=d({name:"TableList",directives:{permission:s},setup(){const e=n(),s=m(),d=c({tableData:[{date:"2016-05-07",name:"白小白",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-04",name:"李小胖",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-05-01",name:"王老五",address:"上海市普陀区金沙江路 1519 弄",tag:"家"},{date:"2016-07-03",name:"王麻子",address:"上海市普陀区金沙江路 1516 弄",tag:"公司"},{date:"2016-07-07",name:"白小白",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-07-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-07-04",name:"李小胖",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-07-01",name:"王老五",address:"上海市普陀区金沙江路 1519 弄",tag:"家"}],currentPage:1,pageSize:5,search:""}),b=c({user:"",region:""}),g=p((()=>d.tableData.length));u((()=>{console.dir(s.value)}));return h=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&i(e,t,a[t]);return e})({formInline:b,total:g},f(d)),a(h,t({handleCurrentChange:e=>{console.log(`当前页: ${e}`),d.currentPage=e},handleSizeChange:e=>{console.log(`每页 ${e} 条`),d.pageSize=e},onSubmit:()=>{console.log("submit!")},handleEdit:(a,t)=>{console.log(a,t),e.replace("/form/advanceForm")},handleDelete:(e,a)=>{console.log(e,a),d.tableData.splice(e,1)},filterTableRef:s,resetDateFilter:()=>{s.value.clearFilter("date")},clearFilter:()=>{s.value.clearFilter()},formatter:e=>e.address,filterTag:(e,a)=>a.tag===e,filterHandler:(e,a,t)=>{const{property:r}=t;return a[r]===e}}));var h}});const P={class:"table-container"},S=z("查询"),D=z("v-permission "),O=z("$isPermission "),V=z("Edit"),I=z("删除");k.render=function(e,a,t,r,l,o){const i=b("el-input"),n=b("el-form-item"),s=b("el-option"),d=b("el-select"),m=b("el-button"),c=b("el-form"),p=b("el-table-column"),u=b("el-popconfirm"),f=b("el-tag"),k=b("el-table"),$=b("el-pagination"),E=g("permission");return h(),j("div",P,[v(c,{inline:!0,model:e.formInline,class:"form-inline"},{default:C((()=>[v(n,{label:"审批人"},{default:C((()=>[v(i,{modelValue:e.formInline.user,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formInline.user=a),placeholder:"审批人"},null,8,["modelValue"])])),_:1}),v(n,{label:"活动区域"},{default:C((()=>[v(d,{modelValue:e.formInline.region,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formInline.region=a),placeholder:"活动区域"},{default:C((()=>[v(s,{label:"区域一",value:"shanghai"}),v(s,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),v(n,null,{default:C((()=>[v(m,{type:"primary",onClick:e.onSubmit},{default:C((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),v(k,{ref:"filterTableRef",class:"table-list","row-key":"date",data:e.tableData.filter((a=>!e.search||a.name.toLowerCase().includes(e.search.toLowerCase()))),style:{width:"100%"}},{default:C((()=>[v(p,{prop:"date",label:"日期",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":e.filterHandler},null,8,["filter-method"]),v(p,{prop:"name",label:"姓名",width:"180"}),v(p,{prop:"address",label:"地址",formatter:e.formatter},null,8,["formatter"]),v(p,{align:"right"},{header:C((()=>[v(i,{modelValue:e.search,"onUpdate:modelValue":a[2]||(a[2]=a=>e.search=a),size:"mini",placeholder:"输入姓名字段关键字搜索"},null,8,["modelValue"])])),default:C((a=>[y(v(m,{size:"mini",onClick:t=>e.handleEdit(a.$index,a.row)},{default:C((()=>[D])),_:2},1032,["onClick"]),[[E,["test:permission-btn3"]]]),e.$isPermission(["test:permission-btn3"])?(h(),w(m,{key:0,size:"mini",onClick:t=>e.handleEdit(a.$index,a.row)},{default:C((()=>[O])),_:2},1032,["onClick"])):x("",!0),v(m,{size:"mini",onClick:t=>e.handleEdit(a.$index,a.row)},{default:C((()=>[V])),_:2},1032,["onClick"]),v(u,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:t=>e.handleDelete(a.$index,a.row)},{reference:C((()=>[v(m,{size:"mini",type:"danger"},{default:C((()=>[I])),_:1})])),_:2},1032,["onConfirm"])])),_:1}),v(p,{prop:"tag",label:"标签",width:"100",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},{default:C((e=>[v(f,{type:"家"===e.row.tag?"primary":"success","disable-transitions":""},{default:C((()=>[z(_(e.row.tag),1)])),_:2},1032,["type"])])),_:1},8,["filter-method"])])),_:1},8,["data"]),v($,{"hide-on-single-page":!1,"current-page":e.currentPage,"page-sizes":[5,10,15,20,25],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])},k.__scopeId="data-v-6ae208c9";export{k as default};
