parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.querySelector(".nav__button"),t=document.querySelector(".nav");e.addEventListener("click",function(){t.classList.toggle("active")});var o=document.querySelector(".solution"),c=document.querySelector(".solutions"),r=document.querySelector(".nav");o.addEventListener("click",function(){c.classList.toggle("active"),r.classList.toggle("active2")});var l=document.querySelectorAll(".fade-in");l.forEach(function(e,t){gsap.to(e,1,{delay:.7*(t+1),opacity:1})});var n=document.querySelectorAll("section.scroll-spy");n.forEach(function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:.8}).setClassToggle(e,"show").addTo(new ScrollMagic.Controller)});var a=document.querySelectorAll(".content__item.scroll-spy");a.forEach(function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:.99}).setClassToggle(e,"show").addTo(new ScrollMagic.Controller)});var i=document.querySelectorAll(".scroll-spy-box.scroll-spy");i.forEach(function(e){new ScrollMagic.Scene({triggerElement:e,triggerHook:.9}).setClassToggle(e,"show").addTo(new ScrollMagic.Controller)});var s=document.querySelector(".btn.btn--white"),u=document.querySelector(".alert-box"),d=document.querySelector(".copyright");d.onclick=function(){u.style.display="block"};var g=window.matchMedia("screen and (max-width: 426px)"),m=document.querySelector(".imgbg"),y=document.querySelector(".word"),S=document.querySelector(".word2");matchMedia("screen and (max-width: 426px)").matches&&(m.classList.remove("fade-in"),y.classList.remove("fade-in"),S.classList.remove("fade-in")),console.log(matchMedia("screen and (max-width: 426px)").matches);var v=document.querySelector(".this-year");v.textContent=(new Date).getFullYear();var h=document.querySelector("#alertStart");h.click=function(){Swal.fire({text:"Thank you for your submit",icon:"success"})};
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.2a3210a9.js.map