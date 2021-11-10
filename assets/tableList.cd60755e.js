var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{d as i,h as s,r as d,s as m,i as c,b as u,x as p,p as f,c as g,m as b,aO as h,e as v,f as C,g as y,E as w,K as _,H as x,t as z,w as k}from"./vendor.a7f58c76.js";import{p as j}from"./index.3730a638.js";var O=i({name:"TableList",directives:{permission:j},setup(){const e=s(),i=d(),f=m({tableData:[{date:"2016-05-07",name:"白小白",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-04",name:"李小胖",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-05-01",name:"王老五",address:"上海市普陀区金沙江路 1519 弄",tag:"家"},{date:"2016-07-03",name:"王麻子",address:"上海市普陀区金沙江路 1516 弄",tag:"公司"},{date:"2016-07-07",name:"白小白",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-07-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-07-04",name:"李小胖",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-07-01",name:"王老五",address:"上海市普陀区金沙江路 1519 弄",tag:"家"}],currentPage:1,pageSize:5,search:""}),g=m({user:"",region:""}),b=c((()=>f.tableData.length));u((()=>{console.dir(i.value)}));return h=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e})({formInline:g,total:b},p(f)),a(h,t({handleCurrentChange:e=>{console.log(`当前页: ${e}`),f.currentPage=e},handleSizeChange:e=>{console.log(`每页 ${e} 条`),f.pageSize=e},onSubmit:()=>{console.log("submit!")},handleEdit:(a,t)=>{console.log(a,t),e.replace("/form/advanceForm")},handleDelete:(e,a)=>{console.log(e,a),f.tableData.splice(e,1)},filterTableRef:i,resetDateFilter:()=>{i.value.clearFilter("date")},clearFilter:()=>{i.value.clearFilter()},formatter:e=>e.address,filterTag:(e,a)=>a.tag===e,filterHandler:(e,a,t)=>{const{property:l}=t;return a[l]===e}}));var h}});const P=k();f("data-v-6ae208c9");const S={class:"table-container"},V=x("查询"),D=x("v-permission "),I=x("$isPermission "),$=x("Edit"),E=x("删除");g();const F=P(((e,a,t,l,r,n)=>{const o=b("el-input"),i=b("el-form-item"),s=b("el-option"),d=b("el-select"),m=b("el-button"),c=b("el-form"),u=b("el-table-column"),p=b("el-popconfirm"),f=b("el-tag"),g=b("el-table"),k=b("el-pagination"),j=h("permission");return v(),C("div",S,[y(c,{inline:!0,model:e.formInline,class:"form-inline"},{default:P((()=>[y(i,{label:"审批人"},{default:P((()=>[y(o,{modelValue:e.formInline.user,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formInline.user=a),placeholder:"审批人"},null,8,["modelValue"])])),_:1}),y(i,{label:"活动区域"},{default:P((()=>[y(d,{modelValue:e.formInline.region,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formInline.region=a),placeholder:"活动区域"},{default:P((()=>[y(s,{label:"区域一",value:"shanghai"}),y(s,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),y(i,null,{default:P((()=>[y(m,{type:"primary",onClick:e.onSubmit},{default:P((()=>[V])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),y(g,{ref:"filterTableRef",class:"table-list","row-key":"date",data:e.tableData.filter((a=>!e.search||a.name.toLowerCase().includes(e.search.toLowerCase()))),style:{width:"100%"}},{default:P((()=>[y(u,{prop:"date",label:"日期",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":e.filterHandler},null,8,["filter-method"]),y(u,{prop:"name",label:"姓名",width:"180"}),y(u,{prop:"address",label:"地址",formatter:e.formatter},null,8,["formatter"]),y(u,{align:"right"},{header:P((()=>[y(o,{modelValue:e.search,"onUpdate:modelValue":a[3]||(a[3]=a=>e.search=a),size:"mini",placeholder:"输入姓名字段关键字搜索"},null,8,["modelValue"])])),default:P((a=>[w(y(m,{size:"mini",onClick:t=>e.handleEdit(a.$index,a.row)},{default:P((()=>[D])),_:2},1032,["onClick"]),[[j,["test:permission-btn3"]]]),e.$isPermission(["test:permission-btn3"])?(v(),C(m,{key:0,size:"mini",onClick:t=>e.handleEdit(a.$index,a.row)},{default:P((()=>[I])),_:2},1032,["onClick"])):_("",!0),y(m,{size:"mini",onClick:t=>e.handleEdit(a.$index,a.row)},{default:P((()=>[$])),_:2},1032,["onClick"]),y(p,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:t=>e.handleDelete(a.$index,a.row)},{reference:P((()=>[y(m,{size:"mini",type:"danger"},{default:P((()=>[E])),_:1})])),_:2},1032,["onConfirm"])])),_:1}),y(u,{prop:"tag",label:"标签",width:"100",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},{default:P((e=>[y(f,{type:"家"===e.row.tag?"primary":"success","disable-transitions":""},{default:P((()=>[x(z(e.row.tag),1)])),_:2},1032,["type"])])),_:1},8,["filter-method"])])),_:1},8,["data"]),y(k,{"hide-on-single-page":!1,"current-page":e.currentPage,"page-sizes":[5,10,15,20,25],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])}));O.render=F,O.__scopeId="data-v-6ae208c9";export default O;
