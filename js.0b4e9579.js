parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
$(document).ready(function(){var e=$(".progress-bar");$(".menu").click(function(){$(this).toggleClass("active"),$(".menu-bar").toggleClass("active")}),$("#files").fileupload({dropZone:".zone-upload",dataType:"json",autoUpload:!1,add:function(o,a){e.css({background:"red",width:"0%"});var t=a.originalFiles[0],n=new FileReader;n.onload=function(e){$("#img-preview").attr("src",e.target.result)},n.readAsDataURL(t),a.submit()},progress:function(o,a){var t=parseInt(a.loaded/a.total*100,10);setTimeout(function(){e.css({background:"greenyellow",width:"".concat(t,"%")})},1e3)},done:function(e,o){console.log(o),alertify.notify("Hello","success",3)}})});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/js.0b4e9579.js.map