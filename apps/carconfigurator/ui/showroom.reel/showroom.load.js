montageDefine("7d473e6","ui/showroom.reel/showroom",{dependencies:["montage","montage/ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component;t.Showroom=r.create(i,{configuratorSubstitution:{value:null},_vehicle:{value:null},vehicle:{get:function(){return this._vehicle},set:function(e){if(e===this._vehicle)return;this._vehicle=e,this._isComponentExpanded&&this._loadVehicleViews(),this.needsDraw=!0}},_loadVehicleViews:{value:function(){var t=this;e.async(this.vehicle.moduleName+"/configurator.reel").then(function(e){var n=e.Configurator.create();n.vehicle=t._vehicle,t.configuratorSubstitution.switchComponents[t.vehicle.name]=n,t.configuratorSubstitution.switchValue=t.vehicle.name}).done()}},templateDidLoad:{value:function(){this._vehicle&&this._loadVehicleViews()}},prepareForDraw:{value:function(){this.addEventListener("pick",this,!1)}},handlePick:{value:function(e){var t=this.configuratorSubstitution.content;t&&typeof t.pickFromModel=="function"&&t.pickFromModel(e.detail)}}})}})