!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],l=t.base?o[0]+t.base:o[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=s(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:d,updater:m(u,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,h=0;function m(e,t){var n,i,r;if(t.singleton){var o=h++;n=g||(g=c(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=c(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);a[r].references--}for(var o=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'nav{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:6vh;position:fixed;z-index:999;color:floralwhite;text-transform:uppercase}.logo{display:inline-flex;align-items:center}.logo h5{margin:0 20px}.nav-bg{width:100vw;height:6vh;position:fixed;top:0;left:0;z-index:998;animation:gradient 15s ease infinite;background:linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size:400% 400%;animation:gradient 50s ease infinite;opacity:0;transform:translateY(-100%);transition:all 0.5s ease-out}.nav-bg.shrink{transform:translateY(0%);opacity:1}.nav-bg.shrink .burger div{background-color:#301d25}@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.nav-links{margin:0;padding:0;display:flex;justify-content:space-around;width:50%}.nav-links li{list-style:none;justify-content:space-evenly}.nav-links li a{padding:10px;border-radius:50%;color:floralwhite;text-decoration:none;display:inline-flex;align-items:center;letter-spacing:3px}.nav-links li:hover{background:linear-gradient(to right, #7065d6, #e66ad5)}.burger{display:none;margin-right:10vw}.burger div{width:25px;height:3px;background-color:floralwhite;margin:5px;transition:all 0.3s ease}@media screen and (max-width: 1024px){.nav-links{width:60%;font-size:0.8rem;letter-spacing:0px}}@media (max-width: 768px){.nav-links{position:absolute;right:0px;height:94vh;top:6vh;background:#7065d6;display:flex;flex-direction:column;align-items:center;transform:translateX(100%);transition:transform 0.5s ease-in}.nav-links li{opacity:0}.burger{display:block}}.nav-active{transform:translateX(0%)}@keyframes navLinkFade{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0px)}}.toggle .line1{transform:rotate(-45deg) translate(-5px, 6px)}.toggle .line2{opacity:0}.toggle .line3{transform:rotate(45deg) translate(-5px, -6px)}.header{scroll-snap-align:start;position:relative}.profile{position:absolute;width:100vw;bottom:0;left:0;z-index:-10;transition:transform 0.5s ease-in-out;transform:translateY(0%);opacity:1}.profile__image{transform:translateX(-35%) translateY(25%) scale(0.7)}.coll{transform:translateY(60%)}.test-vid{object-fit:cover;max-width:100%;min-height:100%;border-radius:50%;overflow:hidden}.header__video{height:100vh;width:100vw}.header__video video{min-width:100%;position:fixed;top:0;z-index:-999}.video__background{position:absolute;right:0;bottom:0;min-width:100%;min-height:100%;width:auto;height:auto}.about{background-color:white;width:90vw;margin:auto;position:fixed;top:70%;right:5vw;z-index:-1;border-radius:5px;text-align:center}.next-btn{position:absolute;bottom:25px;transform:translateX(-50%);left:50%;border-radius:50%;translate:background-color 0.3s ease;background-color:rgba(255,255,255,0.4)}.next-btn:hover{background-color:rgba(255,255,255,0.8)}@media (min-width: 768px){.profile__image{transform:translateX(-25%) translateY(25%) scale(0.7)}}@media (min-width: 1200px){.about{width:40vw;top:60%}}.skill{scroll-snap-align:start;background-color:#edcee9;padding:50px 0;width:100vw;height:100vh;display:grid;grid-template-rows:1fr 2fr 1fr 2fr 1fr 2fr;justify-content:space-around;align-items:center}.skill__title{width:fit-content;padding:5px 10px;text-align:center;margin:20px auto;text-decoration:underline}.skill__row{justify-content:space-around;flex-wrap:wrap;width:100vw;display:flex;align-items:center}.skill__wrapper{width:30%;height:100%;display:flex;justify-content:center}.skill__image{margin-bottom:15px;padding:5px;height:90px}@media (min-width: 520px){.skill__image{height:120px}.skill__row{width:60vw}}@media (min-width: 1300px){.skill__row{flex-wrap:nowrap}}.slide-left{transform:translateX(-50%);opacity:0}.slide-right{transform:translateX(50%);opacity:0}.slide-left,.slide-right{transform-style:preserve-3d;transition:transform 0.8s ease-out, opacity 0.8s ease-out}.appear{opacity:1;transform:TranslateX(0%)}.project{padding-top:50px;padding-bottom:50px;scroll-snap-align:start;width:100vw;height:100vh;margin:auto;padding:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff}.project>h3{margin:10px}.project__card{display:flex;align-items:center;margin:5px;width:90%;height:30vh;background-color:#e3f7f8;overflow:hidden;justify-content:space-around;border-radius:10px;border:2px solid black;box-shadow:2px 4px 5px 1px rgba(0,0,0,0.1)}.project__content{padding:20px}.project__split{display:grid;grid-template-columns:repeat(3, 1fr);height:100%;width:100%}.project__image{display:none;border-radius:0%;height:30vh;width:60vh;background-color:#23d5ab;position:relative}.project__image>img{object-fit:cover;width:100%;height:100%}.split__card{display:flex;flex-direction:column;justify-content:space-around;align-items:center;border:1px solid black}.split__card>*{font-size:1rem}.split__card>div{display:flex;flex-direction:column}@media (min-width: 768px){.project__image{display:block}.split__card>*{font-size:1.75rem}.split__card>div{flex-direction:row}}@media (min-width: 1200px){.project__card{width:60%}}.footer{scroll-snap-align:end}.footer-copyright{display:flex;justify-content:center;align-items:center}.footer-copyright>p{margin:0 10px}.course{scroll-snap-align:start;background-color:#b0fcdf;width:100%;display:flex;flex-direction:column;align-items:center}.course>h2{margin:20px}.course__wrapper{padding:30px;display:grid;grid-template-columns:repeat(2, 50%);grid-gap:10px}.course__packet{position:relative}.course__card{box-shadow:2px 2px 3px 1px rgba(0,0,0,0.3);background-color:#000;height:200px;color:#eee;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:10px;text-align:center}.course__card>a{z-index:2}.course__card--hover{position:absolute;top:0;width:100%;height:100%;background-color:#1e1f24;opacity:0;transition:opacity 0.1s ease-in;color:white;text-align:center;padding:10px}.course__card--hover:hover{opacity:1}@media (min-width: 768px){.course__wrapper{width:80%;grid-template-columns:repeat(4, 25%)}}*,*::before,*::after{box-sizing:border-box}html{scroll-behavior:smooth;scroll-snap-type:y mandatory}body{height:100vh;overflow-y:scroll;scroll-behavior:smooth;font-family:"Oxanium", cursive}body>div{position:relative;overflow-x:hidden}h1,h2,h3{background:linear-gradient(to left, #7065d6, #e66ad5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline}.projects{margin-bottom:100px}@media screen and (max-width: 1024px){.pr-card{width:90%}}@media (min-aspect-ratio: 16 / 9){.video-background{width:100%;height:auto}}@media (max-aspect-ratio: 16 / 9){.video-background{width:auto;height:100%}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);window.addEventListener("DOMContentLoaded",(function(e){var t,n,i;!function(){var e=document.querySelectorAll(".slide-in"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),{threshold:0,rootMargin:"0px 0px 0px 0px"});e.forEach((function(e){t.observe(e)}))}(),t=document.querySelector(".burger"),n=document.querySelector(".nav-links"),i=document.querySelectorAll(".nav-links li"),t.addEventListener("click",(function(){n.classList.toggle("nav-active"),i.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.5,"s")})),t.classList.toggle("toggle")})),function(){var e=document.querySelector(".nav-bg");window.addEventListener("scroll",(function(){window.scrollY>50?e.classList.add("shrink"):e.classList.remove("shrink")}))}(),function(){var e=document.querySelector(".profile");window.addEventListener("scroll",(function(){window.scrollY>.3*window.screen.height?e.classList.add("coll"):e.classList.remove("coll")}))}()}))}]);