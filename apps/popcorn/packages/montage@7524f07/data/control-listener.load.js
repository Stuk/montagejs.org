montageDefine("7524f07","data/control-listener",{dependencies:["montage","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/logger").logger("controlListener"),s=t.ControlListener=r.create(r,{callbackForKey:{value:function(e,t,n){if(typeof e!="function")return e;if(typeof e!="object"||typeof t!="string")return null;if(n){var r=n+t.toCapitalized();if(typeof e[r]=="function")return e[r]}return typeof e[t]=="function"?e[t]:null}}})}})