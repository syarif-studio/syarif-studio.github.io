import{g as m}from"./index-fe622c7c.js";function f(s,n){for(var t=0;t<n.length;t++){const e=n[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in s)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(s,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var i,g;function y(){if(g)return i;g=1,i=s,s.displayName="icuMessageFormat",s.aliases=[];function s(n){(function(t){function e(l,c){return c<=0?/[]/.source:l.replace(/<SELF>/g,function(){return e(l,c-1)})}var r=/'[{}:=,](?:[^']|'')*'(?!')/,a={pattern:/''/,greedy:!0,alias:"operator"},p={pattern:r,greedy:!0,inside:{escape:a}},u=e(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g,function(){return r.source}),8),o={pattern:RegExp(u),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};t.languages["icu-message-format"]={argument:{pattern:RegExp(u),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":o,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:few|many|one|other|two|zero)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":o,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:date|duration|number|ordinal|spellout|time)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp(/(^\s*,\s*(?=\S))/.source+e(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source,8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:a,string:p},o.inside.message.inside=t.languages["icu-message-format"],t.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=t.languages["icu-message-format"]})(n)}return i}var d=y();const b=m(d),h=f({__proto__:null,default:b},[d]);export{h as i};
