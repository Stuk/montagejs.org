var Montage=require("montage").Montage,Component=require("ui/component").Component,Slot=require("ui/slot.reel").Slot,Promise=require("core/promise").Promise,logger=require("core/logger").logger("substitution");exports.Substitution=Slot.specialize({hasTemplate:{enumerable:!1,value:!1},constructor:{value:function(){this._switchElements=Object.create(null),this._switchComponentTreeLoaded=Object.create(null)}},_allChildComponents:{value:null},deserializedFromTemplate:{value:function(){this._allChildComponents=this.childComponents.slice(0),this.switchValue&&this._loadSwitchComponentTree(this.switchValue)}},_switchElements:{value:null},_switchComponentTreeLoaded:{value:null},addSwitchElement:{value:function(e,n){if(n.parentNode)throw Error("Can't handle elements inside the DOM.");this._switchElements[e]=n,this._findFringeComponents(n,this._allChildComponents)}},_findFringeComponents:{value:function(e,n){var t;if(n=n||[],e.component)n.push(e.component);else{t=e.children;for(var a,s=0;a=t[s];s++)this._findFringeComponents(a,n)}return n}},_drawnSwitchValue:{value:null},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(e){this._switchValue===e||this._isSwitchingContent||(this._switchValue=e,this._firstDraw||this.isDeserializing||this._loadContent(e))}},enterDocument:{value:function(e){var n;if(Slot.enterDocument.apply(this,arguments),e){n=this.getDomArgumentNames();for(var t,a=0;t=n[a];a++)this._switchElements[t]=this.extractDomArgument(t);this._loadContent(this.switchValue),this._updateComponentDom()}}},_loadContent:{value:function(e){this.content=e===this._drawnSwitchValue?this.element.children[0]:this._switchElements[e]||null,this._switchComponentTreeLoaded[e]||this._loadSwitchComponentTree(e)}},contentDidChange:{value:function(e,n){this._drawnSwitchValue&&(this._switchElements[this._drawnSwitchValue]=n),this._drawnSwitchValue=this._switchValue}},_loadSwitchComponentTree:{value:function(e){var n,t,a=this,s=this._allChildComponents,i=this._switchElements[e],o=this.element,r=this.canDrawGate,l=[];i||(i=this._getDomArgument(o,e));for(var p=0;s.length>p;p++){for(n=s[p],t=n.element;t!==i&&t!==o&&t.parentNode;)t=t.parentNode;t===i&&l.push(n.loadComponentTree())}l.length>0?(r.setField(e+"ComponentTreeLoaded",!1),Promise.all(l).then(function(){a._switchComponentTreeLoaded[e]=!0,r.setField(e+"ComponentTreeLoaded",!0),a._canDraw=!0,a.needsDraw=!0}).done()):(this._switchComponentTreeLoaded[e]=!0,this.needsDraw=!0)}},shouldLoadComponentTree:{value:!1},transition:{value:null}});