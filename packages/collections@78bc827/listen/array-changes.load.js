montageDefine("78bc827","listen/array-changes",{dependencies:["../shim","../list","weak-map","./property-changes","./range-changes","./map-changes"],factory:function(e){function t(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}e("../shim"),e("../list"),e("weak-map");var n,i=e("./property-changes"),r=e("./range-changes"),a=e("./map-changes"),o=Array.prototype.splice,s=Array.prototype.slice,l=Array.prototype.reverse,u=Array.prototype.sort,c={}.__proto__===Object.prototype;n=c?function(){this.__proto__=d}:function(){Object.defineProperties(this,h)},Object.defineProperty(Array.prototype,"makeObservable",{value:n,writable:!0,configurable:!0,enumerable:!1}),t(i.prototype),t(r.prototype),t(a.prototype);var h={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){this.dispatchBeforeRangeChange(this,this,0);for(var e=0;this.length>e;e++)i.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);l.call(this);for(var e=0;this.length>e;e++)i.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},sort:{value:function(){this.dispatchBeforeRangeChange(this,this,0);for(var e=0;this.length>e;e++)i.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);u.apply(this,arguments);for(var e=0;this.length>e;e++)i.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},splice:{value:function(e,t){var n=s.call(this,e,e+t),r=s.call(arguments,2);if(!n.length&&!r.length)return r;var a=r.length-n.length,l=this.length,u=Math.max(this.length+a,e+r.length),c=Math.max(l,u);if(a&&i.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(r,n,e),0===a)for(var h=e;e+r.length>h;h++)i.dispatchBeforeOwnPropertyChange(this,h,this[h]),this.dispatchBeforeMapChange(h,this[h]);else if(i.hasOwnPropertyChangeDescriptor(this))for(var h=e;c>h;h++)i.dispatchBeforeOwnPropertyChange(this,h,this[h]),this.dispatchBeforeMapChange(h,this[h]);e>l&&(this.length=e);var d=o.apply(this,arguments);if(0===a)for(var h=e;e+r.length>h;h++)i.dispatchOwnPropertyChange(this,h,this[h]),this.dispatchMapChange(h,this[h]);else if(i.hasOwnPropertyChangeDescriptor(this))for(var h=e;c>h;h++)i.dispatchOwnPropertyChange(this,h,this[h]),this.dispatchMapChange(h,this[h]);return this.dispatchRangeChange(r,n,e),a&&i.dispatchOwnPropertyChange(this,"length",this.length),d},writable:!0,configurable:!0},set:{value:function(e,t){return this.splice(e,1,t),this},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(e){if(1===arguments.length)return this.splice(this.length,0,e);var t=s.call(arguments);return this.swap(this.length,0,t)},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=s.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},d=Object.create(Array.prototype,h)}});