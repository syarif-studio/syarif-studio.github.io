import{g as d}from"./index-a70e4540.js";function s(e,o){for(var n=0;n<o.length;n++){const r=o[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,u;function b(){if(u)return a;u=1,a=e,e.displayName="bro",e.aliases=[];function e(o){o.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(?:FIXME|TODO|XXX)\b/}},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},boolean:/\b[TF]\b/,function:{pattern:/(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/,lookbehind:!0},builtin:/(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/,constant:{pattern:/(\bconst[ \t]+)\w+/i,lookbehind:!0},keyword:/\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,punctuation:/[{}[\];(),.:]/}}return a}var l=b();const c=d(l),f=s({__proto__:null,default:c},[l]);export{f as b};
