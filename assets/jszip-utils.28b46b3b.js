var e={};function t(){try{return new window.XMLHttpRequest}catch(e){}}e._getBinaryFromXHR=function(e){return e.response||e.responseText};var n="undefined"!=typeof window&&window.ActiveXObject?function(){return t()||function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}()}:t;e.getBinaryContent=function(t,r){var o,a,i,s;r||(r={}),"function"==typeof r?(s=r,r={}):"function"==typeof r.callback&&(s=r.callback),s||"undefined"==typeof Promise?(a=function(e){s(null,e)},i=function(e){s(e,null)}):o=new Promise((function(e,t){a=e,i=t}));try{var c=n();c.open("GET",t,!0),"responseType"in c&&(c.responseType="arraybuffer"),c.overrideMimeType&&c.overrideMimeType("text/plain; charset=x-user-defined"),c.onreadystatechange=function(n){if(4===c.readyState)if(200===c.status||0===c.status)try{a(e._getBinaryFromXHR(c))}catch(r){i(new Error(r))}else i(new Error("Ajax error for "+t+" : "+this.status+" "+this.statusText))},r.progress&&(c.onprogress=function(e){r.progress({path:t,originalEvent:e,percent:e.loaded/e.total*100,loaded:e.loaded,total:e.total})}),c.send()}catch(u){i(new Error(u),null)}return o};var r=e;export{r as l};
