import{g as e}from"./element-plus.c35c14b5.js";function t(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o&&o.push(n)||e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&o.splice(o.indexOf(n)>>>0,1)},emit:function(t,n){(e.get(t)||[]).slice().map((function(e){e(n)})),(e.get("*")||[]).slice().map((function(e){e(t,n)}))}}}var n=e(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:t}));export{t as m,n as r};
