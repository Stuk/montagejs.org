montageDefine("8c9da00","core/meta/validation-semantics",{dependencies:["montage","core/selector/semantics","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/selector/semantics").Semantics,s=e("core/logger").logger("blueprint"),o=t.PropertyValidationSemantics=i.create(i,{initWithBlueprint:{value:function(e){return this._blueprint=e,this}},_blueprint:{value:null},blueprint:{get:function(){return this._blueprint}},compile:{value:function(e,t){i.compile.call(this,e,t)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,t){var n=this;return function(r,i){return r=n.count(e(r,i)),t(r,i)}}}}});for(var u in i.operators)o.operators[u]=i.operators[u];for(var a in i.evaluators)o.evaluators[a]=i.evaluators[a]}})