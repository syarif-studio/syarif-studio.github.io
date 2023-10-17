import{g as b}from"./index-92209bda.js";function x(r,p){for(var e=0;e<p.length;e++){const a=p[e];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(a,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var u,l;function k(){if(l)return u;l=1,u=r,r.displayName="http",r.aliases=[];function r(p){(function(e){function a(o){return RegExp("(^(?:"+o+"):[ 	]*(?![ 	]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:a(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:a(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:a(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:a(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var t=e.languages,n={"application/javascript":t.javascript,"application/json":t.json||t.javascript,"application/xml":t.xml,"text/xml":t.xml,"text/html":t.html,"text/css":t.css,"text/plain":t.plain},h={"application/json":!0,"application/xml":!0};function d(o){var f=o.replace(/^[a-z]+\//,""),v="\\w+/(?:[\\w.-]+\\+)+"+f+"(?![+\\w.-])";return"(?:"+o+"|"+v+")"}var i;for(var s in n)if(n[s]){i=i||{};var g=h[s]?d(s):s;i[s.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+g+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:n[s]}}i&&e.languages.insertBefore("http","header",i)})(p)}return u}var c=k();const m=b(c),T=x({__proto__:null,default:m},[c]);export{T as h};
