(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"*{\n    margin: 0;\n    padding: 0; \n\n}\n#content{\n    height: 100vh;\n    display: grid;\n    /* justify-content: center; */\n    grid-template-rows: 100px 1fr 100px ;\n}\nheader{\n    background-color: grey;\n    display: grid;\n    grid-template-columns: 1fr repeat(3, 200px) 1fr ;\n    /* height: 100px; */\n    font-size: 3rem;\n    align-items: center;\n}\n\n.link{\n    cursor: pointer;\n    \n}\n.link:hover{\n    color: white;\n}\n\n.linkHome{\n    grid-column: 2/3;\n}\n.linkMenu{\n    grid-column: 3/4;\n}\n.linkContact{\n    grid-column: 4/5;\n}\n\nmain{\n    display: grid;\n    height: 100%;\n    justify-content: center;\n    /* width: 800px; */\n    background-color: rgb(38, 38, 38);\n    /* margin-bottom: 100px; */\n    \n}\n.homePage, .menuPage{\n    background-color: rgb(209, 209, 209);\n    width:900px;\n    margin-top: 50px;\n    border-radius: 10px;\n}\n\nh1{\n    background-color: aliceblue;\n    margin-top: 30px;\n    font-size: 4rem;\n    /* align-items: center; */\n\n}\n.home_title{\n    display: grid;\n    grid-template-columns: 350px 100px;\n    justify-content: center;\n    align-items: center;\n}\n\n.description{\n    background-color: rgb(165, 164, 164);\n    width: 600px;\n    text-align: center;\n    margin: 30px auto;\n    font-size: 1.5rem;\n    border-radius: 10px;\n    padding: 15px;\n}\n\n.location{\n    margin-top: 70px;\n    background-color: rgb(165, 164, 164);\n    width: 600px;\n    text-align: center;\n    margin: 30px auto;\n    font-size: 1.5rem;\n    border-radius: 10px;\n    padding: 15px;\n}\n\n.logo{\n    height: 100px;\n\n}\n.sushi_main_img{\n    height: 500px;\n    padding: 0;\n    width: 700px;\n    margin-top: -150px;\n    position: relative  ;\n    right: -200px;\n    /* justify-content: start; */\n}\n\n.menuPage{\n    display: grid;\n    grid-template-columns: 130px 1fr 130px;\n}\n.menu_title{\n    text-align: center;\n    grid-column: 1/4;\n}\n.item_wrap{\n    display: grid;\n    grid-column: 2/3;\n    background-color: rgb(183, 183, 183);\n    border: 1px solid white;\n    border-radius: 30px;\n    padding: 30px;\n    grid-template-columns: 150px 1fr;\n    margin-top: 40px;\n    gap: 10px;\n    /* justify-content: space-around; */\n\n}\n.menu_item_img{\n    height: 400px;\n    width: 400px;\n    border: 1px solid white;\n    border-radius: 30px;\n    /* grid-column: 2/3; */\n}\n\n.menu_item_title{\n    font-size: 2.5rem;\n}\n.menu_item_price{\n    font-size: 2.5rem;\n    /* color:red; */\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{function n(){const n=document.createElement("h1"),e=document.createElement("div");return document.createElement("div"),e.appendChild(n),n.textContent="CONTACT",e}const e=t.p+"aa75afe2eb15081769e1.png",r=t.p+"7a52ec6da3f43efbd32c.png";function i(){const n=new Image;n.src=e,n.classList.add("logo");const t=new Image;t.src=r,t.classList.add("sushi_main_img");const i=document.createElement("h1"),o=document.createElement("div"),a=(document.createElement("div"),document.createElement("div")),c=document.createElement("div");return c.classList.add("location"),o.classList.add("homePage"),a.classList.add("description"),i.classList.add("home_title"),o.appendChild(i),o.appendChild(a),o.appendChild(c),a.textContent="SavorTokyo: Authentic Tokyo flavors in your city, featuring sushi, sashimi, teriyaki, and more. Taste Tokyo today!",a.after(t),c.innerHTML='<h2 class="location_title">Location</h2>\n  <div class="location_text">123 Forest Drive, Forestville, Maine</div>',i.innerHTML="<div>Savor Tokyo</div>",i.appendChild(n),o}const o=t.p+"1fc2f61d6d225262702f.jpg",a=t.p+"021ea307f1c2838bde6b.jpg",c=t.p+"2006c534254590e47aae.jpg";function s(){const n=document.createElement("h1"),e=document.createElement("div"),t=(document.createElement("div"),[]);class r{constructor(n,e,t){this.name=n,this.price=e+"$",this.img=t}}return e.classList.add("menuPage"),n.classList.add("menu_title"),e.appendChild(n),n.textContent="MENU",t.push(new r("Sushi",5,o)),t.push(new r("Fish roe",8,a)),t.push(new r("Salmon sushi",10,c)),t.map((n=>{const t=document.createElement("div");t.innerHTML=` \n            <div class="menu_row">\n                <h3 class="menu_item_title">${n.name}</h3>\n                <div class="menu_item_price">price:${n.price}</div>\n            </div>      \n            <img src=${n.img} alt="" class="menu_item_img">\n     \n        `,t.classList.add("item_wrap"),e.appendChild(t)})),e}var d=t(379),l=t.n(d),p=t(795),u=t.n(p),m=t(569),g=t.n(m),h=t(565),f=t.n(h),v=t(216),x=t.n(v),y=t(589),b=t.n(y),C=t(426),w={};w.styleTagTransform=b(),w.setAttributes=f(),w.insert=g().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=x(),l()(C.Z,w),C.Z&&C.Z.locals&&C.Z.locals,function(){const e=document.getElementById("content"),t=document.createElement("header"),r=document.createElement("main"),o=document.createElement("footer"),a=document.createElement("a"),c=document.createElement("a"),d=document.createElement("a");function l(n){r.innerHTML="",r.appendChild(n())}e.appendChild(t),e.appendChild(r),e.appendChild(o),t.appendChild(a),t.appendChild(c),t.appendChild(d),a.textContent="HOME ",c.textContent="MENU ",d.textContent="CONTACT",a.classList.add("linkHome","link"),c.classList.add("linkMenu","link"),d.classList.add("linkContact","link"),l(i),a.addEventListener("click",(()=>{l(i)})),c.addEventListener("click",(()=>{l(s)})),d.addEventListener("click",(()=>{l(n)})),console.log("212122121212")}()})()})();