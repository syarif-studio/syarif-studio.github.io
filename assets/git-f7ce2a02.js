import{g as m}from"./index-b46ccaf6.js";function c(e,i){for(var o=0;o<i.length;o++){const t=i[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,s;function f(){if(s)return a;s=1,a=e,e.displayName="git",e.aliases=[];function e(i){i.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m}}return a}var g=f();const u=m(g),l=c({__proto__:null,default:u},[g]);export{l as g};
