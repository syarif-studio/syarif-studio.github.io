import{g as u}from"./index-e4b6dc3a.js";import{r as g}from"./t4-templating-c590a62b.js";import{r as b}from"./vbnet-b70e8ca5.js";function c(t,o){for(var r=0;r<o.length;r++){const e=o[r];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const n=Object.getOwnPropertyDescriptor(e,a);n&&Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i,f;function l(){if(f)return i;f=1;var t=g(),o=b();i=r,r.displayName="t4Vb",r.aliases=[];function r(e){e.register(t),e.register(o),e.languages["t4-vb"]=e.languages["t4-templating"].createT4("vbnet")}return i}var s=l();const p=u(s),d=c({__proto__:null,default:p},[s]);export{d as t};
