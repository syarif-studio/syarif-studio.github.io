import{g as u}from"./index-fe622c7c.js";function d(r,p){for(var e=0;e<p.length;e++){const a=p[e];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in r)){const t=Object.getOwnPropertyDescriptor(a,n);t&&Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l,s;function f(){if(s)return l;s=1,l=r,r.displayName="pure",r.aliases=[];function r(p){(function(e){e.languages.pure={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0},/#!.+/],"inline-lang":{pattern:/%<[\s\S]+?%>/,greedy:!0,inside:{lang:{pattern:/(^%< *)-\*-.+?-\*-/,lookbehind:!0,alias:"comment"},delimiter:{pattern:/^%<.*|%>$/,alias:"punctuation"}}},string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},number:{pattern:/((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?L?)/i,lookbehind:!0},keyword:/\b(?:NULL|ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,function:/\b(?:abs|add_(?:addr|constdef|(?:fundef|interface|macdef|typedef)(?:_at)?|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_c?string(?:_pointer)?|byte_(?:matrix|pointer)|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|sentry|short|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,special:{pattern:/\b__[a-z]+__\b/i,alias:"builtin"},operator:/(?:[!"#$%&'*+,\-.\/:<=>?@\\^`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]|\b_+\b)+|\b(?:and|div|mod|not|or)\b/,punctuation:/[(){}\[\];,|]/};var a=["c",{lang:"c++",alias:"cpp"},"fortran"],n=/%< *-\*- *<lang>\d* *-\*-[\s\S]+?%>/.source;a.forEach(function(t){var i=t;if(typeof t!="string"&&(i=t.alias,t=t.lang),e.languages[i]){var o={};o["inline-lang-"+i]={pattern:RegExp(n.replace("<lang>",t.replace(/([.+*?\/\\(){}\[\]])/g,"\\$1")),"i"),inside:e.util.clone(e.languages.pure["inline-lang"].inside)},o["inline-lang-"+i].inside.rest=e.util.clone(e.languages[i]),e.languages.insertBefore("pure","inline-lang",o)}}),e.languages.c&&(e.languages.pure["inline-lang"].inside.rest=e.util.clone(e.languages.c))})(p)}return l}var c=f();const g=u(c),b=d({__proto__:null,default:g},[c]);export{b as p};
