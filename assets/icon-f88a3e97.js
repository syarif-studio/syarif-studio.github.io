import{g as s}from"./index-6157c6ee.js";function u(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,c;function d(){if(c)return a;c=1,a=e,e.displayName="icon",e.aliases=[];function e(n){n.languages.icon={comment:/#.*/,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,greedy:!0},number:/\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,"builtin-keyword":{pattern:/&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,alias:"variable"},directive:{pattern:/\$\w+/,alias:"builtin"},keyword:/\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,function:/\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,operator:/[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,punctuation:/[\[\](){},;]/}}return a}var l=d();const p=s(l),b=u({__proto__:null,default:p},[l]);export{b as i};
