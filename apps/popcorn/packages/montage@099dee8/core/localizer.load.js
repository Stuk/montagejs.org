montageDefine("099dee8","core/localizer",{dependencies:["montage","core/messageformat","core/logger","core/serializer","core/deserializer","core/promise","core/event/binding","core/messageformat-locale"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/messageformat"),s=e("core/logger").logger("localizer"),o=e("core/serializer").Serializer,u=e("core/deserializer").Deserializer,a=e("core/promise").Promise,f=e("core/event/binding").deserializeBindingToBindingDescriptor;i.locale=e("core/messageformat-locale");var l="key",c="default",h="montage_locale",p="locale",d="messages",v="manifest.json",m=function(){return""},g=/^[a-zA-Z]+(?:-[a-zA-Z0-9]+)*$/,y=t.Localizer=r.create(r,{init:{value:function(e){return this.locale=e||w.locale,this}},initWithMessages:{value:function(e,t){return this.locale=e,this.messages=t,this}},messageFormat:{serializable:!1,value:null},_messages:{value:null},messages:{get:function(){return this._messages},set:function(e){if(this._messages!==e){if(e!=null&&typeof e!="object")throw new TypeError(e," is not an object");this._messages=e}}},messagesPromise:{serializable:!1,value:null},_locale:{value:null},locale:{get:function(){return this._locale},set:function(e){if(!g.test(e))throw new TypeError("Language tag '"+e+"' is not valid. It must match http://tools.ietf.org/html/rfc5646 (alphanumeric characters separated by hyphens)");this._locale!==e&&(this._locale=e,this.messageFormat=new i(e))}},_availableLocales:{value:null},availableLocales:{get:function(){return this._availableLocales?this._availableLocales:this._availableLocales=this._manifest.get("files").get(p).get("files").then(function(e){return Object.keys(e)})}},_require:{value:typeof global!="undefined"?global.require:typeof window!="undefined"?window.require:null},require:{serializable:!1,get:function(){return this._require},set:function(e){this._require!==e&&(this.__manifest=null,this._require=e)}},__manifest:{value:null},_manifest:{depends:["require"],get:function(){var e=this.require;return e.packageDescription.manifest===!0?this.__manifest?this.__manifest:this.__manifest=e.async(v):a.reject(new Error("Package has no manifest. "+e.location+'package.json must contain "manifest": true and '+e.location+v+" must exist"))}},loadMessages:{value:function(e,t){if(!this.require)throw new Error("Cannot load messages as",this,"require is not set");e===null&&(e=5e3),this.messages=null;var n=this,r=this.require,i=this._manifest;return e&&(i=i.timeout(e)),this.messagesPromise=i.get("files").then(function(e){return n._loadMessageFiles(e)}).then(function(e){return n._collapseMessages(e)}).fail(function(e){throw console.error("Could not load messages for '"+n.locale+"': "+e),e}).then(function(e){return typeof t=="function"&&t(e),e})}},_loadMessageFiles:{value:function(e){var t=this.require;if(!e)return a.reject(new Error(t.location+v+" does not contain a 'files' property"));var n,r=[],i,o,u;if(p in e){n=e[p].files,i=this._locale;while(i!=="")n.hasOwnProperty(i)&&(o=n[i].files,(u=d+".js")in o||(u=d+".json")in o?r.push(t.async(p+"/"+i+"/"+u)):s.isDebug&&s.debug(this,"Warning: '"+p+"/"+i+"/' does not contain '"+d+".json' or '"+d+".js'")),i=i.substring(0,i.lastIndexOf("-"));if(!r.length)return a.reject(new Error("Could not find any "+d+".json or "+d+".js files"));var f=a.all(r);if(s.isDebug){var l=this;f=f.then(function(e){return s.debug(l,"loaded "+e.length+" message files"),e})}return f}return a.reject(new Error("Package does not contain a '"+p+"' directory"))}},_collapseMessages:{value:function(e){var t={};for(var n=0,r=e.length;n<r;n++){var i=e[n];for(var s in i)s in t||(t[s]=i[s])}return this.messages=t,t}},_compiledMessageCache:{value:Object.create(null)},localizeSync:{value:function(e,t){var n,r,s;if(!e&&!t)throw new Error("Key or default message must be truthy, not "+e+" and "+t);if(this._messages&&e in this._messages){n=this._messages[e],r=typeof n;if(r==="function")return n;if(r==="object"){if(!("message"in n))throw new Error(n,"does not contain a 'message' property");n=n.message}}else n=t;n||(console.warn("No message or default message for key '"+e+"'"),n=e);if(n in this._compiledMessageCache)return this._compiledMessageCache[n];var o=this.messageFormat.parse(n);return o.program&&o.program.statements&&o.program.statements.length===1&&o.program.statements[0].type==="string"?(s=function(){return n},s.toString=s):s=(new Function("MessageFormat","return "+this.messageFormat.precompile(o)))(i),this._compiledMessageCache[n]=s,s}},localize:{value:function(e,t,n,r){var i,s,o,u=this;n=typeof n=="undefined"?!0:n;if(!this.messagesPromise)return o=a.resolve(this.localizeSync(e,t)),o.then(r),o;var f=function(){var n=u.localizeSync(e,t);return typeof r=="function"&&r(n),n};return n?this.messagesPromise.then(f,f):this.messagesPromise.then(f)}}}),b=r.create(y,{init:{value:function(){var e=this.callDelegateMethod("getDefaultLocale");return!e&&typeof window!="undefined"&&(window.localStorage&&(e=window.localStorage.getItem(h)),e=e||window.navigator.userLanguage||window.navigator.language),e=e||"en",this.locale=e,this.loadMessages().done(),this}},_delegate:{value:null},delegate:{get:function(){return this._delegate},set:function(e){this._delegate!==e&&(this._delegate=e,this.init())}},locale:{get:function(){return this._locale},set:function(e){try{Object.getPropertyDescriptor(y,"locale").set.call(this,e)}catch(t){e="en",Object.getPropertyDescriptor(y,"locale").set.call(this,e)}typeof window!="undefined"&&window.localStorage&&window.localStorage.setItem(h,e)}},reset:{value:function(){return typeof window!="undefined"&&window.localStorage&&window.localStorage.removeItem(h),this.init(),this._locale}}}),w=t.defaultLocalizer=b.create().init();t.localize=w.localize.bind(w);var E=r.create(r,{init:{value:function(e){for(var t in e)Object.defineBinding(this,t,{boundObject:e,boundObjectPropertyPath:t,oneway:!1});return this}},setProperty:{value:function(e,t){this.addPropertyChangeListener(e,this),Object.setProperty.call(this,e,t)}},handleChange:{value:function(e){this.dispatchEventNamed("change",!0,!1)}}}),S=t.Message=r.create(r,{didCreate:{value:function(){this._data=E.create(),this._data.addEventListener("change",this,!1)}},init:{value:function(e,t,n){return e&&(this.key=e),t&&(this.defaultMessage=t),n&&(this.data=n),this}},_localizer:{value:w},localizer:{get:function(){return this._localizer},set:function(e){if(this._localizer==e)return;this._localizer=e,this._localize()}},_key:{value:null},key:{get:function(){return this._key},set:function(e){if(this._key===e)return;this._key=e,this._localize()}},_defaultMessage:{value:null},defaultMessage:{get:function(){return this._defaultMessage},set:function(e){if(this._defaultMessage===e)return;this._defaultMessage=e,this._localize()}},_isLocalizeQueued:{value:!1},_localize:{value:function(){if(this._isLocalizeQueued)return;this._isLocalizeQueued=!0;var e=this,t=a.defer();this._messageFunction=t.promise,this.localized=this._messageFunction.then(function(t){return t(e._data)}),a.nextTick(function(){e._isLocalizeQueued=!1;if(!e._key&&!e._defaultMessage){console.warn("Both key and default message are falsey for",e,"If this is in a repetition this warning can be ignored"),t.resolve(m);return}t.resolve(e._localizer.localize(e._key,e._defaultMessage))})}},_messageFunction:{value:a.resolve(m)},_data:{value:null},data:{get:function(){return this._data},set:function(e){if(this._data===e)return;this._data&&this._data.removeEventListener("change",this),this._data=E.create().init(e),this._data.addEventListener("change",this,!1),this.handleChange()}},__localizedResolved:{value:""},_localizedDeferred:{value:a.defer()},localized:{get:function(){return this._localizedDeferred.promise},set:function(e){if(e===this._localized)return;var t=this,n=a.defer();this._localizedDeferred.resolve(n.promise),e.then(n.resolve,n.reject),n.promise.then(function(e){return t.__localizedResolved=e}).done(),this._localizedDeferred=n}},setProperty:{value:function(e,t){e.indexOf("data.")===0&&this._data.addPropertyChangeListener(e.substring(5),this._data),Object.setProperty.call(this,e,t)}},handleChange:{value:function(e){this.localized=this._messageFunction.fcall(this._data)}},serializeSelf:{value:function(e){var t={_bindingDescriptors:this._bindingDescriptors};return t.key=this._key,t.defaultMessage=this._defaultMessage,this._localizer!==w&&(t.localizer=this._localizer),t}},serializeForLocalizations:{value:function(e){var t={},n=this._bindingDescriptors;n&&n.key?t[l]=n.key:t[l]=this._key,n&&n.defaultMessage?t[c]=n.defaultMessage:t[c]=this._defaultMessage;var r=this._data._bindingDescriptors;for(var i in this._data)this._data.hasOwnProperty(i)&&(!r||!r[i])&&(t.data||(t.data={}),t.data[i]=this._data[i]);for(var s in r)t.data||(t.data={}),t.data[s]=r[s];return t}}}),x=function(e,t,n,r,i,s){var o=S.create();for(var u in i)typeof i[u]=="string"?o.data[u]=i[u]:(f(i[u],s),Object.defineBinding(o.data,u,i[u]));typeof n=="object"?(f(n,s),Object.defineBinding(o,"key",n)):o.key=n,typeof r=="object"?(f(r,s),Object.defineBinding(o,"defaultMessage",r)):o.defaultMessage=r,Object.defineBinding(e,t,{boundObject:o,boundObjectPropertyPath:"__localizedResolved",oneway:!0,serializable:!1})};o.defineSerializationUnit("localizations",function(e){var t=e._bindingDescriptors;if(t){var n;for(var r in t){var i=t[r];if(S.isPrototypeOf(i.boundObject)){n||(n={});var s=i.boundObject;n[r]=s.serializeForLocalizations()}}return n}}),u.defineDeserializationUnit("localizations",function(e,t,n){for(var r in t){var i=t[r],o,u;if(!(l in i)){console.error("localized property '"+r+"' must contain a key property ("+l+"), in ",t[r]);continue}s.isDebug&&!(c in i)&&s.debug(this,"Warning: localized property '"+r+"' does not contain a default message property ("+c+"), in ",e),o=i[l],u=i[c],x(e,r,o,u,i.data,n)}})}})