var Montage=require("montage").Montage,logger=require("core/logger").logger("enum");exports.Enum=Montage.specialize({_value:{value:0},constructor:{value:function(){this.super()}},init:{value:function(){return Object.isSealed(this)&&logger.error(this,"Object is sealed"),this}},initWithMembers:{value:function(){if(Object.isSealed(this))return logger.error(this,"Object is sealed"),this;var e,t;for(t=0;(e=arguments[t])!==void 0;t++)null!==e?this.addMember(e):logger.error(this,"Member at index "+t+" is null");return Object.seal(this)}},addMember:{value:function(e){this[e]===void 0&&(Object.defineProperty(this,e,{writable:!1,configurable:!1,enumerable:!0,value:this._value}),this._value++)}},seal:{value:function(){return Object.isSealed(this)?void 0:Object.seal(this)}}});