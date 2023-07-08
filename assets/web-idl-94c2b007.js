import{g as b}from"./index-6157c6ee.js";function d(a,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const t=Object.getOwnPropertyDescriptor(e,r);t&&Object.defineProperty(a,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o,l;function c(){if(l)return o;l=1,o=a,a.displayName="webIdl",a.aliases=[];function a(i){(function(n){var e=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,r="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+e+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,t={};n.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+e),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:t},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+r),lookbehind:!0,inside:t},{pattern:RegExp("("+/\bcallback\s+/.source+e+/\s*=\s*/.source+")"+r),lookbehind:!0,inside:t},{pattern:RegExp(/(\btypedef\b\s*)/.source+r),lookbehind:!0,inside:t},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+e),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+e),lookbehind:!0},RegExp(e+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+e),lookbehind:!0},{pattern:RegExp(r+"(?="+/\s*(?:\.{3}\s*)?/.source+e+/\s*[(),;=]/.source+")"),inside:t}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var s in n.languages["web-idl"])s!=="class-name"&&(t[s]=n.languages["web-idl"][s]);n.languages.webidl=n.languages["web-idl"]})(i)}return o}var u=c();const p=b(u),y=d({__proto__:null,default:p},[u]);export{y as w};
