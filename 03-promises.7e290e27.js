!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector("input[name=delay]"),c=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]");function l(n,t){new Promise((function(e,o){var r=Math.random()>.3;setTimeout((function(){r?e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)}))}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();for(var n=Number.parseInt(i.value),t=Number.parseInt(c.value),o=Number.parseInt(a.value),r=0,u=1;u<=o;u++){var f=n+r;l(u,f),r+=t,console.log(f)}}))}();
//# sourceMappingURL=03-promises.7e290e27.js.map