var global=window;(function(e,t){typeof exports=="object"?module.exports=t(global):typeof define=="function"&&define.amd?define([],function(){return t(e)}):t(e)})(this,function(e){"use strict";function t(e){return Math.abs(e)>.35?e:0}var n,r;return n=function(e){this._distance=vec3.createFrom(0,0,-32),this._center=vec3.create(),this._viewMat=mat4.create(),this._yUp=!0,this.orbitX=0,this.orbitY=0,this.maxOrbitX=Math.PI*.5,this.minOrbitX=-Math.PI*.5,this.maxOrbitY=Math.PI,this.minOrbitY=-Math.PI,this.constrainXOrbit=!0,this.constrainYOrbit=!1,this.maxDistance=512,this.minDistance=16,this.distanceStep=1,this.constrainDistance=!0,this._dirty=!0,this._hookEvents(e)},n.prototype._hookEvents=function(e){var t=this,n=!1,r,i;e.addEventListener("mousedown",function(e){e.which===1&&(n=!0),r=e.pageX,i=e.pageY},!1),e.addEventListener("mousemove",function(e){if(n){var s=e.pageX-r,o=e.pageY-i;r=e.pageX,i=e.pageY,t.orbit(s*.013,o*.013)}},!1),e.addEventListener("mouseup",function(){n=!1},!1),e.addEventListener("mousewheel",function(e){t.setDistance(-t._distance[2]+e.wheelDeltaY*t.distanceStep),e.preventDefault()},!1),e.addEventListener("touchstart",function(e){var t=e.touches;switch(t.length){case 1:n=!0,r=t[0].pageX,i=t[0].pageY;break;case 2:break;default:return}e.stopPropagation(),e.preventDefault()},!1),e.addEventListener("touchmove",function(e){var s=e.touches;if(n){var o=s[0].pageX-r,u=s[0].pageY-i;r=s[0].pageX,i=s[0].pageY,t.orbit(o*.005,u*.005)}e.stopPropagation(),e.preventDefault()},!1),e.addEventListener("touchend",function(e){n=!1,e.stopPropagation(),e.preventDefault()},!1),e.addEventListener("gesturestart",function(e){n=!1,t.initialDistance=t._distance[2],e.preventDefault()},!1),e.addEventListener("gesturechange",function(e){document.getElementsByTagName("header")[0].innerHTML=e.scale+" "+t.initialDistance+" "+t.initialDistance*e.scale,t.setDistance(t.initialDistance*e.scale*100),e.preventDefault()},!1),e.addEventListener("gestureend",function(e){e.preventDefault()},!1)},n.prototype.orbit=function(e,t){if(e||t){this.orbitY+=e;if(this.constrainYOrbit)this.orbitY=Math.min(Math.max(this.orbitY,this.minOrbitY),this.maxOrbitY);else{while(this.orbitY<-Math.PI)this.orbitY+=Math.PI*2;while(this.orbitY>=Math.PI)this.orbitY-=Math.PI*2}this.orbitX+=t;if(this.constrainXOrbit)this.orbitX=Math.min(Math.max(this.orbitX,this.minOrbitX),this.maxOrbitX);else{while(this.orbitX<-Math.PI)this.orbitX+=Math.PI*2;while(this.orbitX>=Math.PI)this.orbitX-=Math.PI*2}this._dirty=!0}},n.prototype.getCenter=function(){return[-this._center[0],-this._center[1],-this._center[2]]},n.prototype.setCenter=function(e){this._center[0]=-e[0],this._center[1]=-e[1],this._center[2]=-e[2],this._dirty=!0},n.prototype.getDistance=function(){return-this._distance[2]},n.prototype.setDistance=function(e){this._distance[2]=-e,this.constrainDistance&&(this._distance[2]=Math.min(Math.max(-this._distance[2],this.minDistance),this.maxDistance)*-1),this._dirty=!0},n.prototype.getYUp=function(){return this._yUp},n.prototype.setYUp=function(e){this._yUp=e,this._dirty=!0},n.prototype.setCenter=function(e){this._center[0]=-e[0],this._center[1]=-e[1],this._center[2]=-e[2],this._dirty=!0},n.prototype.getViewMat=function(){if(this._dirty){var e=this._viewMat;mat4.identity(e),mat4.translate(e,this._distance),mat4.rotateX(e,this.orbitX),mat4.rotateY(e,this.orbitY),mat4.rotateX(e,-Math.PI*.5),mat4.translate(e,this._center),this._yUp||mat4.rotateX(e,Math.PI*.5),this._dirty=!1}return this._viewMat},n.prototype.update=function(){var e,n;for(n=0;n<navigator.gamepads.length;++n)e=navigator.gamepads[n],e&&(e.id.indexOf("Space Navigator")!=-1?this.orbit(t(e.axes[4])*-0.05,t(e.axes[3])*-0.05):(this.orbit(t(e.axes[0])*.05,t(e.axes[1])*.05),this.orbit(t(e.axes[2])*.05,t(e.axes[3])*.05)))},r=function(e){this._angles=vec2.create(),this._position=vec3.create(),this.speed=100,this._pressedKeys=new Array(128),this._viewMat=mat4.create(),this._rotMat=mat4.create(),this._dirty=!0,this._hookEvents(e)},r.prototype._hookEvents=function(e){var t=this,n=!1,r,i;e.tabIndex=0,e.addEventListener("keydown",function(e){t._pressedKeys[e.keyCode]=!0;if(e.keyCode==32)return e.preventDefault(),!1},!0),e.addEventListener("keyup",function(e){t._pressedKeys[e.keyCode]=!1},!1),e.addEventListener("mousedown",function(e){e.which===1&&(n=!0),r=e.pageX,i=e.pageY},!1),e.addEventListener("mousemove",function(e){var s,o;document.pointerLockEnabled?(s=e.movementX,o=e.movementY,t.rotateView(s*.025,o*.025)):n&&(s=e.pageX-r,o=e.pageY-i,r=e.pageX,i=e.pageY,t.rotateView(s*.025,o*.025))},!1),e.addEventListener("mouseup",function(){n=!1},!1)},r.prototype.rotateView=function(e,t){var n=this._rotMat;if(e||t){this._angles[1]+=e;while(this._angles[1]<0)this._angles[1]+=Math.PI*2;while(this._angles[1]>=Math.PI*2)this._angles[1]-=Math.PI*2;this._angles[0]+=t,this._angles[0]<-Math.PI*.5&&(this._angles[0]=-Math.PI*.5),this._angles[0]>Math.PI*.5&&(this._angles[0]=Math.PI*.5),mat4.identity(n),mat4.rotateZ(n,-this._angles[1]),mat4.rotateX(n,-this._angles[0]),this._dirty=!0}},r.prototype.getAngles=function(){return[this._angles[0],this._angles[1]]},r.prototype.setAngles=function(e){this._angles[0]=e[0],this._angles[1]=e[1],this._dirty=!0},r.prototype.getPosition=function(){return[this._position[0],this._position[1],this._position[2]]},r.prototype.setPosition=function(e){this._position[0]=e[0],this._position[1]=e[1],this._position[2]=e[2],this._dirty=!0},r.prototype.getViewMat=function(){if(this._dirty){var e=this._viewMat;mat4.identity(e),mat4.rotateX(e,-Math.PI*.5),mat4.rotateX(e,this._angles[0]),mat4.rotateZ(e,this._angles[1]),mat4.translate(e,[-this._position[0],-this._position[1],-this._position[2]]),this._dirty=!1}return this._viewMat},r.prototype.update=function(e){var n=vec3.create(),r=this.speed/1e3*e,i,s;this._pressedKeys["W".charCodeAt(0)]&&(n[1]+=r),this._pressedKeys["S".charCodeAt(0)]&&(n[1]-=r),this._pressedKeys["A".charCodeAt(0)]&&(n[0]-=r),this._pressedKeys["D".charCodeAt(0)]&&(n[0]+=r),this._pressedKeys[32]&&(n[2]+=r),this._pressedKeys[17]&&(n[2]-=r);for(s=0;s<navigator.gamepads.length;++s)i=navigator.gamepads[s],i&&(i.id.indexOf("Space Navigator")!=-1?(n[0]+=t(i.axes[0])*r,n[1]+=t(i.axes[1])*-r,n[2]+=t(i.axes[2])*-r,this.rotateView(t(i.axes[4])*.05,t(i.axes[3])*-0.05)):(n[0]+=t(i.axes[0])*r,n[1]+=t(i.axes[1])*r,this.rotateView(t(i.axes[2])*.05,t(i.axes[3])*.05)));if(n[0]!==0||n[1]!==0||n[2]!==0)mat4.multiplyVec3(this._rotMat,n),vec3.add(this._position,n),this._dirty=!0},{OrbitCamera:n,FlyingCamera:r}})