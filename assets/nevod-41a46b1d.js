import{g as l}from"./index-a3d48423.js";function d(a,n){for(var r=0;r<n.length;r++){const e=n[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in a)){const s=Object.getOwnPropertyDescriptor(e,t);s&&Object.defineProperty(a,t,s.get?s:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i,o;function u(){if(o)return i;o=1,i=a,a.displayName="nevod",a.aliases=[];function a(n){n.languages.nevod={comment:/\/\/.*|(?:\/\*[\s\S]*?(?:\*\/|$))/,string:{pattern:/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))!?\*?/,greedy:!0,inside:{"string-attrs":/!$|!\*$|\*$/}},namespace:{pattern:/(@namespace\s+)[a-zA-Z0-9\-.]+(?=\s*\{)/,lookbehind:!0},pattern:{pattern:/(@pattern\s+)?#?[a-zA-Z0-9\-.]+(?:\s*\(\s*(?:~\s*)?[a-zA-Z0-9\-.]+\s*(?:,\s*(?:~\s*)?[a-zA-Z0-9\-.]*)*\))?(?=\s*=)/,lookbehind:!0,inside:{"pattern-name":{pattern:/^#?[a-zA-Z0-9\-.]+/,alias:"class-name"},fields:{pattern:/\(.*\)/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},punctuation:/[,()]/,operator:{pattern:/~/,alias:"field-hidden-mark"}}}}},search:{pattern:/(@search\s+|#)[a-zA-Z0-9\-.]+(?:\.\*)?(?=\s*;)/,alias:"function",lookbehind:!0},keyword:/@(?:having|inside|namespace|outside|pattern|require|search|where)\b/,"standard-pattern":{pattern:/\b(?:Alpha|AlphaNum|Any|Blank|End|LineBreak|Num|NumAlpha|Punct|Space|Start|Symbol|Word|WordBreak)\b(?:\([a-zA-Z0-9\-.,\s+]*\))?/,inside:{"standard-pattern-name":{pattern:/^[a-zA-Z0-9\-.]+/,alias:"builtin"},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},"standard-pattern-attr":{pattern:/[a-zA-Z0-9\-.]+/,alias:"builtin"},punctuation:/[,()]/}},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},operator:[{pattern:/=/,alias:"pattern-def"},{pattern:/&/,alias:"conjunction"},{pattern:/~/,alias:"exception"},{pattern:/\?/,alias:"optionality"},{pattern:/[[\]]/,alias:"repetition"},{pattern:/[{}]/,alias:"variation"},{pattern:/[+_]/,alias:"sequence"},{pattern:/\.{2,3}/,alias:"span"}],"field-capture":[{pattern:/([a-zA-Z0-9\-.]+\s*\()\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+(?:\s*,\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+)*(?=\s*\))/,lookbehind:!0,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}},{pattern:/[a-zA-Z0-9\-.]+\s*:/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}}],punctuation:/[:;,()]/,name:/[a-zA-Z0-9\-.]+/}}return i}var p=u();const c=l(p),m=d({__proto__:null,default:c},[p]);export{m as n};
