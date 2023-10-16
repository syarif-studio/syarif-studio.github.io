import{g as u}from"./index-434a2e31.js";function p(r,s){for(var o=0;o<s.length;o++){const e=s[o];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a,i;function l(){if(i)return a;i=1,a=r,r.displayName="csp",r.aliases=[];function r(s){(function(o){function e(t){return RegExp(/([ \t])/.source+"(?:"+t+")"+/(?=[\s;]|$)/.source,"i")}o.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:e(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:e(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:e(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:e(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:e(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:e(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:e(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(s)}return a}var c=l();const f=u(c),b=p({__proto__:null,default:f},[c]);export{b as c};
