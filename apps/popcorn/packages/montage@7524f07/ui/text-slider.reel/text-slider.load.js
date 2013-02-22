montageDefine("7524f07","ui/text-slider.reel/text-slider",{dependencies:["montage","ui/component","ui/composer/press-composer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/composer/press-composer").PressComposer,o="montage-TextSlider--editing",u=t.TextSlider=r.create(i,{_converter:{enumerable:!1,value:null},converter:{get:function(){return this._converter},set:function(e){this._converter!==e&&(this._converter=e,this.needsDraw=!0)}},_value:{value:0},value:{get:function(){return this._value},set:function(e){if(isNaN(e=parseFloat(e)))return!1;this._minValue!=null&&e<this._minValue?e=this._minValue:this._maxValue!=null&&e>this._maxValue&&(e=this._maxValue),this._value!==e&&(this._value=e,this.needsDraw=!0)}},convertedValue:{dependencies:["value","converter"],get:function(){return this._converter?this._converter.convert(this._value):this._value},set:function(e){this._converter?this.value=this._converter.revert(e):this.value=e}},_minValue:{enumerable:!1,value:null},minValue:{get:function(){return this._minValue},set:function(e){this._minValue!==e&&(this._minValue=e,this.value=this._value,this.needsDraw=!0)}},_maxValue:{enumerable:!1,value:null},maxValue:{get:function(){return this._maxValue},set:function(e){this._maxValue!==e&&(this._maxValue=e,this.value=this._value,this.needsDraw=!0)}},smallStepSize:{enumerable:!1,value:.1},stepSize:{enumerable:!1,value:1},largeStepSize:{enumerable:!1,value:10},_unit:{enumerable:!1,value:null},unit:{get:function(){return this._unit},set:function(e){this._unit!==e&&(this._unit=e,this.needsDraw=!0)}},_units:{enumerable:!1,value:[]},units:{get:function(){return this._units},set:function(e){this._units!==e&&(this._units=e,this.needsDraw=!0)}},_isEditing:{enumerable:!1,value:null},isEditing:{get:function(){return this._isEditing},set:function(e){this._isEditing!==e&&(this._isEditing=e,this.needsDraw=!0)}},_inputElement:{value:null},_pressComposer:{value:null},_translateComposer:{value:null},_startX:{value:null},_startY:{value:null},_direction:{value:null},didCreate:{value:function(){this.handlePress=this.handleClick}},prepareForActivationEvents:{value:function(){this._element.addEventListener("click",this,!1)}},prepareForDraw:{value:function(){this._element.identifier="text",this._inputElement.identifier="input",this._element.addEventListener("focus",this,!1),this._inputElement.addEventListener("blur",this,!1),this._element.addEventListener("keydown",this,!1),this._inputElement.addEventListener("keydown",this,!1)}},draw:{value:function(){var e=this._element.classList.contains(o);this._isEditing?(e||(this._element.classList.add(o),this._inputElement.focus()),this._inputElement.value=this.convertedValue+(this._unit?" "+this._unit:"")):e&&(this._element.classList.remove(o),this._inputElement.blur(),this._element.focus()),this._direction==="horizontal"?document.body.style.cursor="ew-resize":this._direction==="vertical"?document.body.style.cursor="ns-resize":document.body.style.cursor="auto"}},surrenderPointer:{value:function(e,t){return!this._isEditing}},handleClick:{value:function(e){this._isEditing||(this.isEditing=!0)}},handleBlur:{value:function(e){this._isEditing&&(this.convertedValue=this._inputElement.value,this.isEditing=!1)}},handleInputKeydown:{value:function(e){var t;e.keyCode===38?(this.convertedValue=this._inputElement.value,t=Math.round((e.shiftKey?this.largeStepSize:e.ctrlKey?this.smallStepSize:this.stepSize)/this.smallStepSize)*this.smallStepSize,this.value+=t,this.needsDraw=!0):e.keyCode===40?(this.convertedValue=this._inputElement.value,t=Math.round((e.shiftKey?this.largeStepSize:e.ctrlKey?this.smallStepSize:this.stepSize)/this.smallStepSize)*this.smallStepSize,this.value-=t,this.needsDraw=!0):e.keyCode===13?(this.convertedValue=this._inputElement.value,this.isEditing=!1):e.keyCode===27&&(this.isEditing=!1)}},handleTextKeydown:{value:function(e){e.keyCode===13&&(this.isEditing=!0);if(e.shiftKey||e.keyCode===16)this._translateComposer.pointerSpeedMultiplier=this.largeStepSize/this.stepSize;else if(e.ctrlKey||e.keyCode===17)this._translateComposer.pointerSpeedMultiplier=this.smallStepSize/this.stepSize}},handleKeyup:{value:function(e){if(e.shiftKey||e.keyCode===16)this._translateComposer.pointerSpeedMultiplier=this.stepSize;else if(e.ctrlKey||e.keyCode===17)this._translateComposer.pointerSpeedMultiplier=this.stepSize}},handleTranslateStart:{value:function(e){this._direction=null,this._startX=this._value,this._startY=this._value,this._translateComposer.translateX=this._value,this._translateComposer.translateY=this._value,document.addEventListener("keydown",this,!1),document.addEventListener("keyup",this,!1)}},handleTranslate:{value:function(e){if(this._direction==="vertical")this.value=e.translateY;else if(this._direction==="horizontal")this.value=e.translateX;else{var t,n=Math.abs(e.translateX-this._startX),r=Math.abs(e.translateY-this._startY);r>n?(t=e.translateY,r>20&&(this._direction="vertical")):(t=e.translateX,n>20&&(this._direction="horizontal")),this.value=t}}},handleTranslateEnd:{value:function(e){this._direction=null,this.needsDraw=!0,document.removeEventListener("keydown",this,!1),document.removeEventListener("keyup",this,!1)}}})}})