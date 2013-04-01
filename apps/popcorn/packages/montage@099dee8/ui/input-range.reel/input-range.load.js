montageDefine("099dee8","ui/input-range.reel/input-range",{dependencies:["montage","ui/component","ui/dom"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/dom"),o=t.InputRange=r.create(i,{_min:{value:null},min:{get:function(){return this._min},set:function(e){this._min=String.isString(e)?parseFloat(e):e,this.needsDraw=!0}},_max:{value:null},max:{get:function(){return this._max},set:function(e){this._max=String.isString(e)?parseFloat(e):e,this.needsDraw=!0}},_step:{value:null},step:{get:function(){return this._step},set:function(e){this._step=String.isString(e)?parseFloat(e):e,this.needsDraw=!0}},_width:{value:null},width:{get:function(){return this._width},set:function(e){this._width=String.isString(e)?parseFloat(e):e,this.needsDraw=!0}},percent:{value:null},_valueSyncedWithPosition:{value:null},_value:{value:null},value:{get:function(){return this._value},set:function(e,t){this._value=String.isString(e)?parseFloat(e):e,t?this._valueSyncedWithPosition=!0:(this._valueSyncedWithPosition=!1,this.needsDraw=!0)}},_handleEl:{value:null},_translateComposer:{value:null},_sliderWidth:{value:null},__positionX:{value:null},_positionX:{get:function(){return this.__positionX},set:function(e,t){e!==null&&!isNaN(e)&&(this.__positionX=e,t||this._calculateValueFromPosition(),this.needsDraw=!0)}},_touchOnHandle:{value:null},__clickTarget:{value:null},_clickTarget:{get:function(){return this.__clickTarget},set:function(e){this.__clickTarget=e,this.needsDraw=!0}},_handleWidth:{value:null},_calculateValueFromPosition:{value:function(){if(this._sliderWidth>0){var e=this.percent=this._positionX/this._sliderWidth*100,t=this.min+e/100*(this.max-this.min);Object.getPropertyDescriptor(this,"value").set.call(this,t,!0),this._valueSyncedWithPosition=!0}}},_calculatePositionFromValue:{value:function(){if(this._sliderWidth){var e,t=this.value,n=this.max-this.min;e=(this.value-this.min)/n*100;var r=e/100*this._sliderWidth;Object.getPropertyDescriptor(this,"_positionX").set.call(this,r,!0),this.percent=e,this._valueSyncedWithPosition=!0}else this._valueSyncedWithPosition=!1}},prepareForDraw:{value:function(){this.min=this.min||this.element.getAttribute("min")||0,this.max=this.max||this.element.getAttribute("max")||100,this.step=this.step||this.element.getAttribute("step")||1,this.value=this.value||this.element.getAttribute("value")||0}},prepareForActivationEvents:{value:function(){this._translateComposer.addEventListener("translateStart",this,!1),this._translateComposer.addEventListener("translate",this,!1),this._translateComposer.addEventListener("translateEnd",this,!1),this._addEventListeners()}},_addEventListeners:{value:function(){window.Touch?this.element.addEventListener("touchstart",this,!1):this.element.addEventListener("mousedown",this,!1),this._touchOnHandle=!1}},_removeEventListeners:{value:function(){window.Touch?this.element.removeEventListener("touchstart",this,!1):this.element.removeEventListener("mousedown",this,!1)}},_startTranslateX:{enumerable:!1,value:null},_startPositionX:{enumerable:!1,value:null},handleTranslateStart:{value:function(e){this._startTranslateX=e.translateX,this._startPositionX=this.__positionX,this._removeEventListeners(),this._valueSyncedWithPosition=!1}},handleTranslate:{value:function(e){if(!window.Touch||window.Touch&&this._touchOnHandle){var t=this._startPositionX+e.translateX-this._startTranslateX;t<0?t=0:t>this._sliderWidth&&(t=this._sliderWidth),this._positionX=t}}},handleTranslateEnd:{value:function(e){this._addEventListeners()}},handleMousedown:{value:function(e){this._clickTarget={x:e.pageX,y:e.pageY}}},handleTouchstart:{value:function(e){var t=e.targetTouches[0];this._touchOnHandle=t.target===this._handleEl}},surrenderPointer:{value:function(e,t){return!1}},willDraw:{value:function(){this._handleWidth||(this._handleWidth=this._handleEl.offsetWidth),this._sliderWidth=this.element.offsetWidth-1.5*(this._handleWidth/2);if(this._clickTarget){var e=s.convertPointFromNodeToPage(this.element).x,t=this._clickTarget.x-(e+this._handleWidth/2);t<0&&(t=0),this._positionX=t,this._clickTarget=null}this._valueSyncedWithPosition||this._calculatePositionFromValue()}},draw:{value:function(){var e=this._handleEl;e.style.webkitTransform!=null?e.style.webkitTransform="translate3d("+this._positionX+"px,0,0)":e.style.MozTransform!=null?e.style.MozTransform="translate3d("+this._positionX+"px,0,0)":e.style.transform!=null?e.style.transform="translate3d("+this._positionX+"px,0,0)":e.style.left=this._positionX+"px"}}})}})