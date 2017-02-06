-function(){"use strict";var f;var h={h:function(a,b){var c=h.c();c&&c.saveStyleOverride(this,a,b);this.style[a]=b},f:function(a,b){b?this.classList.add(a):this.classList.remove(a)},u:function(a){if("undefined"!=typeof a){var b=h.c();b&&b.saveInitialText(this);this.textContent=a;b&&b.applyStylePreservation(this)}},s:function(a){if("undefined"!=typeof a){var b=h.c();b&&b.saveInitialText(this);this.innerHTML=a;b&&b.applyStylePreservation(this)}},show:function(a){this.style.display=a?"":"none"},setAttribute:function(a,b){this.setAttribute(a,
b)},c:function(){return document.querySelector("gwd-text-helper")}};window.Binder=h;h.setText=h.u;h.setStyle=h.h;h.setHtml=h.s;h.addOrRemoveClassName=h.f;h.show=h.show;h.setAttribute=h.setAttribute;var l={limit:function(a,b){return b?a&&a.length&&("string"==typeof b&&(b=parseInt(b,10)),!isNaN(b))?a.slice(0,b):a:a},pluck:function(a,b){if(a){var c=b.split(".");return a.map(function(a){if(1==c.length)return a[c[0]];var b=a;c.forEach(function(a){b&&(b=b[a])});return b})}return[]},join:function(a,b){return a?a.join(b||","):""},o:function(a,b){return l.join(l.pluck(a,b))},toUpperCase:function(a){return a?a.toUpperCase():a},toLowerCase:function(a){return a?a.toLowerCase():a},w:function(a){if("undefined"!=
typeof a)return a+"px"},v:function(a){return a?a.replace(/0x/,"#"):a}};window.Formatter=l;l.limit=l.limit;l.toUpperCase=l.toUpperCase;l.toLowerCase=l.toLowerCase;l.toPixelValue=l.w;l.toHex=l.v;l.pluck=l.pluck;l.join=l.join;l.pluckAndJoin=l.o;var m=/^bind-/,p=/^style-/,q=/^class-/,r=/^each-/,t=/\/-([a-z])\/g/;function u(a){return String(a).replace(t,function(a,c){return c.toUpperCase()})}function w(a){return!(!a||!m.test(a.name))}function x(a){return!(!a||0!=a.name.indexOf("bind-each"))}function y(a){Array.prototype.slice.call(a.attributes).filter(x).forEach(function(b){a.removeAttribute(b.name)})}var z=function(){};goog.inherits(z,HTMLElement);f=z.prototype;
f.createdCallback=function(){this.a={text:"setText",html:"setHtml",show:"show"};this.b={limit:"limit",pixelvalue:"toPixelValue",uppercase:"toUpperCase",lowercase:"toLowerCase",hex:"toHex",pluck:"pluck",join:"join",pluckandjoin:"pluckAndJoin"}};f.getBinder=function(){return h};f.getFormatter=function(){return l};f.bindData=function(a,b){(b||Array.prototype.slice.call(document.querySelectorAll("*"))).forEach(this.i.bind(this,a))};
f.i=function(a,b){if(!b.hasAttribute("gwd-bind-each-template")){for(var c,e=Array.prototype.slice.call(b.attributes),d=e.length,g=0;g<d;g++)if(x(e[g])){c=e[g];break}d=this.l.bind(this,b,a);c?d(c):e.filter(w).forEach(d)}};
f.l=function(a,b,c){c=c.name;var e;var d=c.replace(m,"");e=this.getBinder();p.test(d)?(d=d.replace(p,""),e=e.h.bind(a,u(d))):q.test(d)?(d=d.replace(q,""),e=e.f.bind(a,d)):r.test(d)?(e=d.replace(r,""),e=this.j.bind(this,a,e,b)):e=this.a[d]&&"function"==typeof e[this.a[d]]?e[this.a[d]]:window.gwd&&window.gwd.binders&&"function"==typeof window.gwd.binders[d]?window.gwd.binders[d]:e.setAttribute.bind(a,d);c=a.getAttribute(c);b=(-1!==c.indexOf("|")?this.m.bind(this,b,c):this.g.bind(this,b,c)).call(a);
e.apply(a,[b])};
f.j=function(a,b,c,e){var d=a.parentNode;if(d){var g=a.cloneNode(!0);y(g);for(var n=[],k=0;e&&k<e.length;k++)n.push(g.cloneNode(!0));k={instances:n};g=document.createEvent("CustomEvent");g.initCustomEvent("gwdbindeachcloned",!0,!0,k);a.dispatchEvent(g);g=document.createComment("gwd-bind-each-placeholder");d.insertBefore(g,a);d.removeChild(a);A(a);if(e&&0!=e.length){for(var v,k=0;k<e.length;k++)c[b]=e[k],a=n[k],a.setAttribute("gwd-repeat-index",k),c.$index=k,v=Array.prototype.slice.call(a.querySelectorAll("*")),this.bindData(c,
v.concat(a)),d.insertBefore(a,g);delete c[b]}}};var A=function(a){a.setAttribute("gwd-bind-each-template","");Array.prototype.slice.call(a.querySelectorAll("*")).forEach(function(a){a.setAttribute("gwd-bind-each-template","")})};z.prototype.g=function(a,b){if(a){if(b){b=b.replace("[",".");b=b.replace("]","");var c=a;b.split(".").forEach(function(a){c&&(c=c[a])});return c}return a}return null};
z.prototype.m=function(a,b){if(b){for(var c=b.split("|"),e=c.shift().trim(),e=this.g(a,e),d;0<c.length;){d=c.shift().trim();d=d.split(" ");var g=d.shift().trim();d.unshift(e);var n=this.getFormatter(),e=this.b[g]&&"function"==typeof n[this.b[g]]?n[this.b[g]].apply(this,d):window.gwd&&window.gwd.formatters&&"function"==typeof window.gwd.formatters[g]?window.gwd.formatters[g].apply(this,d):e}return e}return a};z.prototype.attributeChangedCallback=null;document.registerElement("gwd-data-binder",{prototype:z.prototype});}()
