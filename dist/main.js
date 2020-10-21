(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,'@charset "utf-8";\r\n\r\nheader{\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.3);\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n  border-radius: 25px;\r\n}\r\n\r\nheader svg {\r\n  width: 2.8em;\r\n  height: 2.8em;\r\n  margin: 0 10px;\r\n}\r\n\r\n.menu, .add-proj, .calendar, .delete {\r\n  cursor: pointer;\r\n}\r\n\r\nheader h1 {\r\n  font-family: Dosis, sans-serif;\r\n  font-size: 3em;\r\n  margin: 15px 0;\r\n}\r\n\r\nmain{\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 350px);\r\n  grid-gap: 20px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.body-h {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbutton {\r\n  font-family: Dosis, sans-serif;\r\n  width: 132px;\r\n  height: 37px;\r\n  background: #FAFAFA;\r\n  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.3);\r\n  border: 1px ghostwhite solid;\r\n  border-radius: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.projects {\r\n  display: none;\r\n}\r\n\r\n.projects-shown {\r\n  background: linear-gradient(172.12deg, #1FC3DA 1.87%, #33C8CF 47.23%, #AAE68B 99.51%);\r\n  position: absolute;\r\n  width: 350px;\r\n  height: 900px;\r\n  z-index: 10;\r\n  border-radius: 25px;\r\n  top: 10px;\r\n}\r\n\r\n.card {\r\n  width: 318px;\r\n  height: 360px;\r\n  max-height: 360px;\r\n  min-height: 360px;\r\n  background: #FAFAFA;\r\n  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.3);\r\n  border-radius: 25px;\r\n}\r\n\r\n.card svg {\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n\r\n.card button {\r\n  position: relative;\r\n  float: right;\r\n  margin-right: 20px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.card h2 {\r\n  font-family: Dosis, sans-serif;\r\n  font-weight: 300;\r\n  font-size: 32px;\r\n  line-height: 40px;\r\n  margin-left: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.card-text {\r\n  padding: 10px;\r\n  font-family: "Noto Sans", sans-serif;\r\n  font-size: 14px;\r\n  margin: 15px 10px;\r\n  min-height: 115px;\r\n  max-height: 115px;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-date {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  margin-left: 17px;\r\n}\r\n\r\n.card-date p{\r\n  margin: 0 10px;\r\n  font-family: Dosis, sans-serif;\r\n  font-size: 15px;\r\n  align-self: center;\r\n}\r\n\r\n.delete {\r\n  width: 36px;\r\n  height: 36px;\r\n  position: relative;\r\n  float: left;\r\n  margin-left: 20px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.form-container{\r\n  display: none;\r\n}\r\n\r\n.form-container-shown {\r\n  position: absolute;\r\n  left: 32%;\r\n  bottom: 80px;\r\n  box-sizing: border-box;\r\n  display: block;\r\n  width: 580px;\r\n  height: 580px;\r\n  padding: 50px;\r\n  margin:0 auto;\r\n  border: 1px lightgrey solid;\r\n  border-radius: 25px;\r\n  z-index: 10;\r\n  background-color: #FAFAFA;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n}\r\n.title-wrapper{\r\n  width: 100%;\r\n}\r\nform label {\r\n  font-family: "Noto Sans", sans-serif;\r\n  font-size: 24px;\r\n}\r\n\r\n#todo-title {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  height: 22px;\r\n  border-radius: 25px;\r\n  border: 1px lightgrey solid;\r\n}\r\n\r\ntextarea {\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  border-radius: 25px;\r\n  border: 1px lightgrey solid;\r\n}\r\n\r\n.opt, .date {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n#todo-date, #todo-priority {\r\n  margin: 15px 0;\r\n}\r\n\r\n#add {\r\n  margin-right: 200px;\r\n}',""]);const i=o},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<r.length;s++){var d=[].concat(r[s]);t&&o[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),n.push(d))}},n}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function s(r,n){for(var e={},t=[],o=0;o<r.length;o++){var s=r[o],d=n.base?s[0]+n.base:s[0],c=e[d]||0,l="".concat(d," ").concat(c);e[d]=c+1;var p=a(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:x(u,n),references:1}),t.push(l)}return t}function d(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,l=(c=[],function(r,n){return c[r]=n,c.filter(Boolean).join("\n")});function p(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function u(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var f=null,h=0;function x(r,n){var e,t,o;if(n.singleton){var i=h++;e=f||(f=d(n)),t=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=d(n),t=u.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var d=s(r,n),c=0;c<e.length;c++){var l=a(e[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=d}}}}},n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={id:t,exports:{}};return r[t](o,o.exports,e),o.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),t=e(426);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const o=document.querySelector("body");class i{static showProjectTab(){document.querySelector(".projects").setAttribute("class","projects-shown"),o.classList.add("body-h")}static hideProjectTab(){document.querySelector(".projects-shown").setAttribute("class","projects"),o.classList.remove("body-h")}static showFormContainer(){document.querySelector(".form-container").setAttribute("class","form-container-shown"),o.classList.add("body-h")}}document.querySelector("body");const a=document.querySelector("main"),s=document.querySelector(".add-proj");document.querySelector(".menu").addEventListener("click",(()=>{i.showProjectTab()})),a.addEventListener("click",(()=>{i.hideProjectTab()})),s.addEventListener("click",(()=>{i.showFormContainer()}))})()})();