montageDefine("e98bf51","lru-map",{dependencies:["./shim","./lru-set","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function a(e,t,n,r,s){if(!(this instanceof a))return new a(e,t,n,r,s);n=n||Object.equals,r=r||Object.hash,s=s||Function.noop,this.contentEquals=n,this.contentHash=r,this.getDefault=s,this.store=new i(undefined,t,function(t,r){return n(t.key,r.key)},function(t){return r(t.key)}),this.length=0,this.addEach(e)}var r=e("./shim"),i=e("./lru-set"),s=e("./generic-collection"),o=e("./generic-map"),u=e("./listen/property-changes");n.exports=a,Object.addEach(a.prototype,s.prototype),Object.addEach(a.prototype,o.prototype),Object.addEach(a.prototype,u.prototype),a.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},a.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},a.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)}}})