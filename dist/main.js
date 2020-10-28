(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".header {\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5em;\n    width: 100%;\n    background-color: aqua;\n  }\n\n.form_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 1em;\n }\n\n .form_p {\n   text-align: center;\n   font-size: 1em;\n   padding: 1em;\n   font-size: large;\n }\n\n .form_ {\n   width: 50em;\n }\n\n input[type=text] {\n   display: flex;\n   align-self: center;\n   width: 50%;\n  padding: 12px 20px;\n  margin: 8px 0;\n border-radius: 10em;\n  border: 9px solid #ccc;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  outline: none;\n}\n\ninput[type=text]:focus {\n  border: 3px solid black;\n}\n\n\n.submit_button {\n  display: flex;\n  align-self: center;\n  border-radius: 10px;\n  border: 5px solid black;\n  margin: 20px;\n  -webkit-transition: 0.9s;\n  transition: 0.5s;\n  outline: none;\n }\n\n #submit_button:focus {\n  border: 3px solid #ccc;\n}\n\n#weather_result {\n  text-align: center;\n  font-size: large;\n  \n\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:h(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=s(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var l=a(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(28);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;document.getElementById("container").append((()=>{const e=document.createElement("div");e.classList.add("header");const n=document.createElement("p");return n.innerHTML="Weather App",e.appendChild(n),e})(),(()=>{const e=document.createElement("div");e.classList.add("form_container");const n=document.createElement("p");n.classList.add("form_p"),n.innerHTML="Enter Your City Below";const t=document.createElement("FORM");t.classList.add("form_"),t.setAttribute("id","formTag");const r=document.createElement("INPUT");r.setAttribute("type","text"),r.setAttribute("placeholder","pls input the city's name"),r.id="city";const o=document.createElement("button");o.classList.add("submit_button"),o.innerHTML="Check Weather";const i=document.createElement("p");return i.id="weather_result",e.append(n,t,r,o,i),e})()),document.getElementById("container").addEventListener("click",(e=>{if(e.target.classList.contains("submit_button")){e.preventDefault();const n=document.getElementById("city").value;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=11d091024281fd0f3a53ff3d3b78c460`).then((e=>e.json())).catch((e=>e)).then((e=>{document.getElementById("weather_result").textContent=`The weather in ${e.name}  is ${e.weather[0].main}`}))}}))})()})();