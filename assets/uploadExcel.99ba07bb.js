var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{d as o,r,s as n,x as d,D as c,p as i,c as p,m as u,aO as f,e as v,f as m,g as b,E as h,F as x,n as y,w as g,H as _}from"./vendor.a7f58c76.js";import"./index.3730a638.js";import{X as w}from"./xlsx.2027343d.js";const j=e=>new Promise((a=>{const l=new FileReader;l.onload=e=>{var l;const t=null==(l=null==e?void 0:e.target)?void 0:l.result,s=w.read(t,{type:"array"}),o=s.SheetNames[0],r=s.Sheets[o],n=w.utils.sheet_to_json(r),d=(e=>{const a=[],l=w.utils.decode_range(e["!ref"]),t=l.s.r;for(let s=l.s.c;s<=l.e.c;++s){const l=e[w.utils.encode_cell({c:s,r:t})];let o=`void${s}`;l&&l.t&&(o=w.utils.format_cell(l)),a.push(o)}return a})(r);a({header:d,excelData:n})},l.readAsArrayBuffer(e)}));var D=o({components:{},setup(){const e=r(!1),o=r(),i=r(".xls,.xlsx"),p=n({excelData:[],header:[],fileList:[],loading:!1}),u=async e=>{const{excelData:a,header:l}=await j(e);p.excelData=a,p.header=l,p.loading=!1};return((e,o)=>{for(var r in o||(o={}))l.call(o,r)&&s(e,r,o[r]);if(a)for(var r of a(o))t.call(o,r)&&s(e,r,o[r]);return e})({uploadRef:o,accept:i,disabled:e,handlePreview:e=>{p.loading=!0,u(e.raw)},handleRemove:(e,a)=>{console.log(e,a)},handleFileData:e=>{u(e)},handleSubmitUpload:()=>{o.value.submit(),c({type:"success",message:"上传成功"})}},d(p))}});const O=g();i("data-v-1f876ad0");const P={class:"upload-container"},R={class:"info"},S=_("上传excel"),k=b("span",{style:{"text-align":"left"}},"excel上传预览场景。",-1),F={class:"grid-content bg-purple-dark"},A={style:{"text-align":"left"}},C=b("span",null,"上传excel文件并预览场景",-1),E={class:"section"},I=b("i",{class:"el-icon-upload"},null,-1),L=b("div",{class:"el-upload__text"},[_("将文件拖到此处，或"),b("em",null,"点击上传")],-1),U=b("div",{class:"el-upload__tip"},"点击文件进行预览",-1),z={class:"preview-table"},B=_("确认上传");p();const H=O(((e,a,l,t,s,o)=>{const r=u("el-divider"),n=u("el-upload"),d=u("el-table-column"),c=u("el-table"),i=u("el-button"),p=u("el-card"),g=u("el-col"),_=u("el-row"),w=f("loading");return v(),m("div",P,[b("div",R,[b(r,{"content-position":"left"},{default:O((()=>[S])),_:1}),k]),b("div",null,[b(_,null,{default:O((()=>[b(g,{offset:1,span:22},{default:O((()=>[b("div",F,[b(p,{class:"box-card"},{default:O((()=>[b("div",A,[C,b(r)]),b("div",E,[b(n,{ref:"uploadRef",style:{width:"100%"},accept:e.accept,drag:"",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1},{tip:O((()=>[U])),default:O((()=>[I,L])),_:1},8,["accept","on-preview","on-remove","file-list"]),b("div",z,[h(b(c,{data:e.excelData,border:"",style:{width:"100%"}},{default:O((()=>[(v(!0),m(x,null,y(e.header,(e=>(v(),m(d,{key:e,prop:e,label:e,width:"180"},null,8,["prop","label"])))),128))])),_:1},8,["data"]),[[w,e.loading]])]),b(i,{style:{"margin-left":"10px"},size:"small",type:"success",onClick:e.handleSubmitUpload},{default:O((()=>[B])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1})])])}));D.render=H,D.__scopeId="data-v-1f876ad0";export default D;
