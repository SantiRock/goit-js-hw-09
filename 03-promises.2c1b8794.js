function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const l=document.querySelector("input[name=delay]"),i=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]");function c(t,n){new Promise(((e,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?e(`✅ Fulfilled promise ${t} in ${n}ms`):o(`❌ Rejected promise ${t} in ${n}ms`)}),n)})).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)}))}document.querySelector("button").addEventListener("click",(e=>{e.preventDefault();const t=Number.parseInt(l.value),n=Number.parseInt(i.value),o=Number.parseInt(a.value);let r=0;for(let e=1;e<=o;e++){let o=t+r;c(e,o),r+=n,console.log(o)}}));
//# sourceMappingURL=03-promises.2c1b8794.js.map
