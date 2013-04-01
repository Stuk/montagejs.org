montageDefine("099dee8","ui/native/select.reel/select_old",{dependencies:["montage","core/bindings","core/content-controller","ui/component","ui/native-control","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/bindings").Bindings,s=e("core/content-controller").ContentController,o=e("ui/component").Component,u=e("ui/native-control").NativeControl,a=e("ui/composer/press-composer").PressComposer,f=t.Select=r.create(u,{didCreate:{value:function(){this._contentController=s.create()}},_apis:{value:null},_checkExclusiveUsage:{value:function(e,t){this._apis||(this._apis=new Dict);var n=this._apis.get(e);if(n&&t!==n)throw new Error(["Can't use ",t,", ",n," is already in use."].join(""));return this._apis.set(e,t),!0}},_contentController:{value:null},content:{set:function(e){this._checkExclusiveUsage("data","content")&&(e==null&&(e=[]),Array.isArray(e)||console.warn("Attempt to set content to a non array."),this._contentController.content=e)},get:function(){if(this._checkExclusiveUsage("data","content"))return this._contentController.content}},contentController:{set:function(e){this._checkExclusiveUsage("data","contentController")&&(this._contentController=e)},get:function(){if(this._checkExclusiveUsage("data","contentController"))return this._contentController}}}),f=t.Select=r.create(u,{_fromInput:{value:null},_synching:{value:null},_selectedIndexes:{value:null},handleSelectedIndexesRangeChange:{value:function(e,t,n,r,i){this.needsDraw===!1&&(this.needsDraw=this._synching||!this._fromInput)}},content:{set:function(e){e!=null&&!Array.isArray(e)&&console.warn("Attempt to set content to a non array."),this.contentController.content=e,this.needsDraw=!0},get:function(){return this.contentController.content}},handleContentRangeChange:{value:function(e,t,n,r,i){this.needsDraw=!0}},valuePropertyPath:{value:null},textPropertyPath:{value:null},_contentController:{value:null},contentController:{get:function(){return this._contentController||(this._contentController=s.create()),this._contentController},set:function(e){if(this._contentController===e)return;this._contentController=e,i.defineBindings(this,{content:{"<-":"_contentController.content"},_selectedIndexes:{"<-":"_contentController.iterations.map{selected}"}}),this._selectedIndexes.addRangeChangeListener(this,"selectedIndexes"),this.content.addRangeChangeListener(this,"content")}},_getSelectedValuesFromIndexes:{value:function(){var e=this.contentController?this.contentController.selectedObjects:null,t=[];if(e&&e.length>0){var n=0,r=e.length,i;for(;n<r;n++)i=this.valuePropertyPath||"value",e[n][i]&&t.push(e[n][i])}return t}},_synchValues:{value:function(){this._synching||(this._synching=!0,this.values=this._getSelectedValuesFromIndexes(),this.value=this.values&&this.values.length>0?this.values[0]:null,this._synching=!1)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){var t=this.contentController?this.contentController.content:null;if(e&&t){this._values=e;if(!this._synching){var n=[],r=0,i=this._values.length,s;for(;r<i;r++)s=this._indexOf(this._values[r]),s>=0&&n.push(s);this._synching=!0,this.contentController.selectedIndexes=n,this._synching=!1}}}},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._synching||(e==null?this.values=[]:this.values=[e])}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},_addOptionsFromMarkup:{value:function(){var e=this.element,t=e.querySelectorAll("option");if(!this.contentController){var n=s.create(),r=[],i=[];if(t&&t.length>0){var o=0,u=t.length,a;for(;o<u;o++){a=t[o].getAttribute("selected");var f={value:t[o].value,text:t[o].textContent};a&&r.push(f),i.push(f)}r.length===0&&u>0&&r.push(i[0]),this._fromInput=!0,this.contentController=n,n.content=i,n.selection=r}}}},deserializedFromTemplate:{value:function(){this._addOptionsFromMarkup()}},_removeAll:{value:function(e){while(e.firstChild)e.removeChild(e.firstChild)}},_refreshOptions:{value:function(){var e=this.content||[],t=e.length,n,r,i,s;for(n=0;n<t;n++)r=document.createElement("option"),String.isString(e[n])?i=s=e[n]:(i=e[n][this.textPropertyPath||"text"],s=e[n][this.valuePropertyPath||"value"]),r.value=s,r.textContent=i||s,this._selectedIndexes&&this._selectedIndexes.length>0&&this._selectedIndexes.indexOf(n)>=0&&r.setAttribute("selected","true"),this.element.appendChild(r)}},prepareForDraw:{value:function(){this.element.addEventListener("focus",this),this.element.addEventListener("change",this)}},prepareForActivationEvents:{value:function(){var e=a.create();this.addComposer(e)}},draw:{enumerable:!1,value:function(){var e=this.element;this._fromInput=!1,this._synching=!1,this._removeAll(e),this._refreshOptions();var t=Object.getPrototypeOf(f).draw;t.call(this)}},didDraw:{value:function(){this._synchValues()}},_indexOf:{value:function(e){var t=this.content||[],n=t.length,r,i,s;for(r=0;r<n;r++){String.isString(t[r])?s=t[r]:s=t[r][this.valuePropertyPath||"value"];if(s&&s===e)return r}return-1}},_getSelectedOptions:{value:function(e){var t=e.querySelectorAll("option"),n,r=t.length,i=[];for(n=0;n<r;n++)t[n].selected&&i.push(t[n]);return i}},_getSelectedOptionsIndexes:{value:function(e){var t=e.querySelectorAll("option"),n,r=t.length,i=[];for(n=0;n<r;n++)t[n].selected&&i.push(n);return i}},handleChange:{value:function(e){var t=this._getSelectedOptionsIndexes(this.element);t.length>0&&(this._fromInput=!0,this._synching=!1,this.contentController.selectedIndexes=t,this._synchValues())}}});f.addAttributes({autofocus:{dataType:"boolean"},disabled:{dataType:"boolean"},form:null,multiple:{dataType:"boolean"},name:null,required:{dataType:"boolean"},size:{dataType:"number",value:"1"}})}})