import{g as u}from"./index-9c34f749.js";import{r as c}from"./bash-99098025.js";function g(t,r){for(var n=0;n<r.length;n++){const e=r[n];if(typeof e!="string"&&!Array.isArray(e)){for(const s in e)if(s!=="default"&&!(s in t)){const o=Object.getOwnPropertyDescriptor(e,s);o&&Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:()=>e[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,l;function p(){if(l)return a;l=1;var t=c();a=r,r.displayName="shellSession",r.aliases=[];function r(n){n.register(t),function(e){var s=[/"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,/'[^']*'/.source,/\$'(?:[^'\\]|\\[\s\S])*'/.source,/<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source].join("|");e.languages["shell-session"]={command:{pattern:RegExp(/^/.source+"(?:"+(/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source+"|"+/[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source)+")?"+/[$#%](?=\s)/.source+/(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g,function(){return s}),"m"),greedy:!0,inside:{info:{pattern:/^[^#$%]+/,alias:"punctuation",inside:{user:/^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,punctuation:/:/,path:/[\s\S]+/}},bash:{pattern:/(^[$#%]\s*)\S[\s\S]*/,lookbehind:!0,alias:"language-bash",inside:e.languages.bash},"shell-symbol":{pattern:/^[$#%]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},e.languages["sh-session"]=e.languages.shellsession=e.languages["shell-session"]}(n)}return a}var i=p();const f=u(i),S=g({__proto__:null,default:f},[i]);export{S as s};
