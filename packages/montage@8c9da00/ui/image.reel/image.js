var Montage=require("montage").Montage,Component=require("ui/component").Component,NativeImage=require("ui/native/image.reel").Image;exports.Image=Montage.create(NativeImage,{willPrepareForDraw:{value:function(){NativeImage.willPrepareForDraw.call(this),this.element.classList.add("montage-image")}}})