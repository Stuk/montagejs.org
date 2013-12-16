montageDefine("ef57d84","deserialization/reviver",{dependencies:["q"],factory:function(e,t){(function(t){function n(){}function r(e){var t=n.prototype.getCustomObjectTypeOf;return function(n){return e(n)||t(n)}}var i=function(){return this}(),o=e("q");Object.defineProperties(n.prototype,{_createAssignValueFunction:{value:function(e,t){return function(n){e[t]=n}}},getTypeOf:{value:function(e){var t=typeof e;return null===e?"null":Array.isArray(e)?"array":"object"===t&&1===Object.keys(e).length?"@"in e?"reference":"/"in e?"regexp":"object":t}},getCustomObjectTypeOf:{writable:!0,value:function(){}},reviveRootObject:{value:function(e,t,n){var r;return e.debugger,"value"in e?t.hasUserObject(n)?(r=t.getUserObject(n),t.setObjectLabel(r,n),r):this.reviveValue(e.value,t,n):0===Object.keys(e).length?t.hasUserObject(n)?(r=t.getUserObject(n),t.setObjectLabel(r,n),r):this.reviveExternalObject(e,t,n):this.reviveCustomObject(e,t,n)}},reviveValue:{value:function(e,t,n){var r=this.getTypeOf(e);return"string"===r||"number"===r||"boolean"===r||"null"===r||"undefined"===r?this.reviveNativeValue(e,t,n):"regexp"===r?this.reviveRegExp(e,t,n):"reference"===r?this.reviveObjectReference(e,t,n):"array"===r?this.reviveArray(e,t,n):"object"===r?this.reviveObjectLiteral(e,t,n):this._callReviveMethod("revive"+r,e,t,n)}},reviveNativeValue:{value:function(e,t,n){return n&&t.setObjectLabel(e,n),e}},reviveObjectLiteral:{value:function(e,t,n){var r,i=[];n&&t.setObjectLabel(e,n);for(var a in e)r=this.reviveValue(e[a],t),o.isPromise(r)?i.push(r.then(this._createAssignValueFunction(e,a))):e[a]=r;return 0===i.length?e:o.all(i).then(function(){return e})}},reviveRegExp:{value:function(e,t,n){var e=e["/"],r=RegExp(e.source,e.flags);return n&&t.setObjectLabel(r,n),r}},reviveObjectReference:{value:function(e,t){var e=e["@"],n=t.getObject(e);return n}},reviveArray:{value:function(e,t,n){var r,i=[];n&&t.setObjectLabel(e,n);for(var a=0,s=e.length;s>a;a++)r=this.reviveValue(e[a],t),o.isPromise(r)?i.push(r.then(this._createAssignValueFunction(e,a))):e[a]=r;return 0===i.length?e:o.all(i).then(function(){return e})}},reviveCustomObject:{value:function(e,t,n){var r=this.getCustomObjectTypeOf(e),s=a["revive"+r];return r?s.call(i,e,t,n):o.reject(Error("Object's type is unknown: "+JSON.stringify(e)))}},reviveExternalObject:{value:function(e,t,n){return o.reject(Error("External object '"+n+"' not found in user objects."))}},_callReviveMethod:{value:function(e,t,n,r){return this[e](t,n,r)}}});var a=Object.create(null);n.addCustomObjectReviver=function(e){for(var t in e)if("getTypeOf"!==t&&"function"==typeof e[t]&&/^revive/.test(t)){if(void 0!==a[t])return Error("Reviver '"+t+"' is already registered.");a[t]=e[t].bind(e)}this.prototype.getCustomObjectTypeOf=r(e.getTypeOf)},n.resetCustomObjectRevivers=function(){a=Object.create(null),this.prototype.getCustomObjectTypeOf=function(){}},t.Reviver=n})(t),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)})}});