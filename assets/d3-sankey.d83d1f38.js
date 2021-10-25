import{g as n}from"./element-plus.c35c14b5.js";import{m as t,n as r}from"./d3-collection.c137de0e.js";import{l as e}from"./d3-shape.bd337d73.js";function o(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}var u,i;function f(n,t){var r,e,o=n.length,u=-1;if(null==t){for(;++u<o;)if(null!=(r=n[u])&&r>=r)for(e=r;++u<o;)null!=(r=n[u])&&e>r&&(e=r)}else for(;++u<o;)if(null!=(r=t(n[u],u,n))&&r>=r)for(e=r;++u<o;)null!=(r=t(n[u],u,n))&&e>r&&(e=r);return e}function c(n,t){var r,e=n.length,o=-1,u=0;if(null==t)for(;++o<e;)(r=+n[o])&&(u+=r);else for(;++o<e;)(r=+t(n[o],o,n))&&(u+=r);return u}function s(n){return n.target.depth}function a(n,t){return n.sourceLinks.length?n.depth:t-1}function l(n){return function(){return n}}function h(n,t){return g(n.source,t.source)||n.index-t.index}function d(n,t){return g(n.target,t.target)||n.index-t.index}function g(n,t){return n.y0-t.y0}function y(n){return n.value}function k(n){return n.index}function p(n){return n.nodes}function v(n){return n.links}function E(n,t){var r=n.get(t);if(!r)throw new Error("missing: "+t);return r}function L(n){return[n.source.x1,n.y0]}function x(n){return[n.target.x0,n.y1]}1===(u=o).length&&(i=u,u=function(n,t){return o(i(n),t)});var m=n(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",sankey:function(){var n,e=0,u=0,i=1,s=1,L=24,x=8,m=k,w=a,b=p,M=v,j=6;function _(){var n={nodes:b.apply(null,arguments),links:M.apply(null,arguments)};return z(n),O(n),S(n),N(n),A(n),n}function z(n){n.nodes.forEach((function(n,t){n.index=t,n.sourceLinks=[],n.targetLinks=[]}));var r=t(n.nodes,m);n.links.forEach((function(n,t){n.index=t;var e=n.source,o=n.target;"object"!=typeof e&&(e=n.source=E(r,e)),"object"!=typeof o&&(o=n.target=E(r,o)),e.sourceLinks.push(n),o.targetLinks.push(n)}))}function O(n){n.nodes.forEach((function(n){n.value=Math.max(c(n.sourceLinks,y),c(n.targetLinks,y))}))}function S(n){var t,r,o,u=n.nodes.length;for(t=n.nodes,r=[],o=0;t.length;++o,t=r,r=[]){if(o>u)throw new Error("circular link");t.forEach((function(n){n.depth=o,n.sourceLinks.forEach((function(n){r.indexOf(n.target)<0&&r.push(n.target)}))}))}for(t=n.nodes,r=[],o=0;t.length;++o,t=r,r=[]){if(o>u)throw new Error("circular link");t.forEach((function(n){n.height=o,n.targetLinks.forEach((function(n){r.indexOf(n.source)<0&&r.push(n.source)}))}))}var f=(i-e-L)/(o-1);n.nodes.forEach((function(n){n.x1=(n.x0=e+Math.max(0,Math.min(o-1,Math.floor(w.call(null,n,o))))*f)+L}))}function N(t){var e,i=r().key((function(n){return n.x0})).sortKeys(o).entries(t.nodes).map((function(n){return n.values}));e=f(i,(function(n){return(s-u-(n.length-1)*x)/c(n,y)})),i.forEach((function(t){null!=n&&t.sort(n),t.forEach((function(n,t){n.y1=(n.y0=t)+n.value*e}))})),t.links.forEach((function(n){n.width=n.value*e})),v();for(var a=.9,l=j;l>0;--l,a*=.9)p(a),v(),k(a),v();function k(n){i.forEach((function(t){t.forEach((function(t){let r=t.y0;for(const{target:e,width:o,value:u}of t.sourceLinks.sort(d)){if(u>0){let o=0;for(const{source:n,width:r}of e.targetLinks){if(n===t)break;o+=r+x/2}o=(r-o-e.y0)*n*(u/Math.min(t.value,e.value)),e.y0+=o,e.y1+=o}r+=o+x/2}}))}))}function p(n){i.slice().reverse().forEach((function(t){t.forEach((function(t){let r=t.y0;for(const{source:e,width:o,value:u}of t.targetLinks.sort(h)){if(u>0){let o=0;for(const{target:n,width:r}of e.sourceLinks){if(n===t)break;o+=r+x/2}o=(r-o-e.y0)*n*(u/Math.min(t.value,e.value)),e.y0+=o,e.y1+=o}r+=o+x/2}}))}))}function v(){i.forEach((function(t){var r,e,o,i=u,f=t.length;for(void 0===n&&t.sort(g),o=0;o<f;++o)(e=i-(r=t[o]).y0)>0&&(r.y0+=e,r.y1+=e),i=r.y1+x;if((e=i-x-s)>0)for(i=r.y0-=e,r.y1-=e,o=f-2;o>=0;--o)(e=(r=t[o]).y1+x-i)>0&&(r.y0-=e,r.y1-=e),i=r.y0}))}}function A(n){n.nodes.forEach((function(n){n.sourceLinks.sort(d),n.targetLinks.sort(h)})),n.nodes.forEach((function(n){var t=n.y0,r=t;n.sourceLinks.forEach((function(n){n.y0=t+n.width/2,t+=n.width})),n.targetLinks.forEach((function(n){n.y1=r+n.width/2,r+=n.width}))}))}return _.update=function(n){return A(n),n},_.nodeId=function(n){return arguments.length?(m="function"==typeof n?n:l(n),_):m},_.nodeAlign=function(n){return arguments.length?(w="function"==typeof n?n:l(n),_):w},_.nodeSort=function(t){return arguments.length?(n=t,_):n},_.nodeWidth=function(n){return arguments.length?(L=+n,_):L},_.nodePadding=function(n){return arguments.length?(x=+n,_):x},_.nodes=function(n){return arguments.length?(b="function"==typeof n?n:l(n),_):b},_.links=function(n){return arguments.length?(M="function"==typeof n?n:l(n),_):M},_.size=function(n){return arguments.length?(e=u=0,i=+n[0],s=+n[1],_):[i-e,s-u]},_.extent=function(n){return arguments.length?(e=+n[0][0],i=+n[1][0],u=+n[0][1],s=+n[1][1],_):[[e,u],[i,s]]},_.iterations=function(n){return arguments.length?(j=+n,_):j},_},sankeyCenter:function(n){return n.targetLinks.length?n.depth:n.sourceLinks.length?f(n.sourceLinks,s)-1:0},sankeyLeft:function(n){return n.depth},sankeyRight:function(n,t){return t-1-n.height},sankeyJustify:a,sankeyLinkHorizontal:function(){return e().source(L).target(x)}}));export{m as r};
