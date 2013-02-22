montageDefine("7524f07","core/selector/abstract-language",{dependencies:["montage","./abstract-selector"],factory:function(e,t,n){function o(e){return e}var r=e("montage").Montage,i=e("./abstract-selector").makeSelector,s=t.AbstractLanguage=r.create(r,{create:{value:function(e,t){var n=r.create(e,t);return n.parsePrevious=null,n.tokens={},n.tokenNames=[],n.constantSyntax={},n.requireConstants(n.constants),n.reverseAliases={},n.aliases=n.aliases||{},Object.keys(n.aliases).forEach(function(e){var t=n.aliases[e];n.reverseAliases[t]=n.reverseAliases[t]||[],n.reverseAliases[t].push(e)}),n.requireTokens(["eof"]),n.grammar(),n.Selector=i(n),n}},tokenMemo:{value:{}},requireTokens:{value:function(e){var t=this;return e.reduce(function(e,n){if(!t.tokens[n]){t.tokens[n]=t.tokenMemo[n]=t.tokenMemo[n]||{type:n},t.tokenNames.push(n);if(t.reverseAliases[n])return e.concat([n]).concat(t.requireTokens(t.reverseAliases[n]))}return e.concat([n])},[])}},constantSyntax:{value:null},requireConstants:{value:function(e){var t=this,n=Object.keys(e||{});n.forEach(function(e){t.constantSyntax[e]||(t.tokens[e]=t.constantSyntax[e]={type:"literal",value:t.constants[e]},t.tokenNames.push(e))})}},makeSyntax:{value:function(e,t,n,r){var i=this;while(i.aliases.hasOwnProperty(e))e=i.aliases[e];var s={type:e,args:t,insensitive:n||undefined};return n||delete s.insensitive,r?{type:"not",args:[s]}:s}},parsePrevious:{value:null},precedence:{value:function(e){return e=e||o,this.parsePrevious=e(this.parsePrevious),this.parsePrevious}},optional:{value:function(e,t){return function(n){return e===n.type?t(!0,function(t){return t(n)}):t(!1,function(t){return t})(n)}}},expect:{value:function(e,t){return function(n){if(n.type!==e)throw new SyntaxError("Expected token "+JSON.stringify(e)+" got "+JSON.stringify(n.type));return t(n)}}},parseEof:{value:function(){var e=this;return e.expect("eof",function(){return function(){return e.parseEof()}})}},parseOperator:{value:function(e,t,n){var r=this;return r.requireTokens(["insensitive","not"]),r.optional("insensitive",function(i,s){return r.optional("not",function(r,o){return function(u){return e.indexOf(u.type)!==-1?t(u.type,i,r):s(o(n()))(u)}})})}},parseLeftToRight:{value:function(e){var t=this;e=t.requireTokens(e);var n=t.precedence(function(r){return function(i,s){return s?t.parseOperator(e,function(e,o,u){return r(function(r){var a=t.makeSyntax(e,[s,r],o,u);return n(i,a)})},function(){return i(s)}):r(function(e){return n(i,e)})}});return n}},parseRightToLeft:{value:function(e){var t=this;e=t.requireTokens(e);var n=t.precedence(function(r){return function(i){return r(function(r){return t.parseOperator(e,function(e,s,o){return n(function(n){var u=t.makeSyntax(e,[r,n],s,o);return i(u)})},function(){return i(r)})})}});return n}},parseBinary:{value:function(e){var t=this;return e=t.requireTokens(e),t.precedence(function(n){return function(r){return n(function(i){return t.parseOperator(e,function(e,s,o){return n(function(n){var u=t.makeSyntax(e,[i,n],s,o);return r(u)})},function(){return r(i)})})}})}}})}})