var Hogan={};!function(t){function n(t,n,e){var r;return n&&"object"==typeof n&&(void 0!==n[t]?r=n[t]:e&&n.get&&"function"==typeof n.get&&(r=n.get(t))),r}function e(t,n,e,r,i,a){function s(){}function o(){}s.prototype=t,o.prototype=t.subs;var c,u=new s;u.subs=new o,u.subsText={},u.buf="",r=r||{},u.stackSubs=r,u.subsText=a;for(c in n)r[c]||(r[c]=n[c]);for(c in r)u.subs[c]=r[c];i=i||{},u.stackPartials=i;for(c in e)i[c]||(i[c]=e[c]);for(c in i)u.partials[c]=i[c];return u}function r(t){return String(null===t||void 0===t?"":t)}function i(t){return t=r(t),l.test(t)?t.replace(a,"&amp;").replace(s,"&lt;").replace(o,"&gt;").replace(c,"&#39;").replace(u,"&quot;"):t}t.Template=function(t,n,e,r){t=t||{},this.r=t.code||this.r,this.c=e,this.options=r||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(){return""},v:i,t:r,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var r=this.partials[t],i=n[r.name];if(r.instance&&r.base==i)return r.instance;if("string"==typeof i){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}if(!i)return null;if(this.partials[t].base=i,r.subs){n.stackText||(n.stackText={});for(key in r.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);i=e(i,r.subs,r.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=i,i},rp:function(t,n,e,r){var i=this.ep(t,e);return i?i.ri(n,e,r):""},rs:function(t,n,e){var r=t[t.length-1];if(!f(r))return e(t,n,this),void 0;for(var i=0;i<r.length;i++)t.push(r[i]),e(t,n,this),t.pop()},s:function(t,n,e,r,i,a,s){var o;return f(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ms(t,n,e,r,i,a,s)),o=!!t,!r&&o&&n&&n.push("object"==typeof t?t:n[n.length-1]),o)},d:function(t,e,r,i){var a,s=t.split("."),o=this.f(s[0],e,r,i),c=this.options.modelGet,u=null;if("."===t&&f(e[e.length-2]))o=e[e.length-1];else for(var l=1;l<s.length;l++)a=n(s[l],o,c),void 0!==a?(u=o,o=a):o="";return i&&!o?!1:(i||"function"!=typeof o||(e.push(u),o=this.mv(o,e,r),e.pop()),o)},f:function(t,e,r,i){for(var a=!1,s=null,o=!1,c=this.options.modelGet,u=e.length-1;u>=0;u--)if(s=e[u],a=n(t,s,c),void 0!==a){o=!0;break}return o?(i||"function"!=typeof a||(a=this.mv(a,e,r)),a):i?!1:""},ls:function(t,n,e,i,a){var s=this.options.delimiters;return this.options.delimiters=a,this.b(this.ct(r(t.call(n,i)),n,e)),this.options.delimiters=s,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,r,i,a,s){var o,c=n[n.length-1],u=t.call(c);return"function"==typeof u?r?!0:(o=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(u,c,e,o.substring(i,a),s)):u},mv:function(t,n,e){var i=n[n.length-1],a=t.call(i);return"function"==typeof a?this.ct(r(a.call(i)),i,e):a},sub:function(t,n,e,r){var i=this.subs[t];i&&(this.activeSub=t,i(n,e,this,r),this.activeSub=!1)}};var a=/&/g,s=/</g,o=/>/g,c=/\'/g,u=/\"/g,l=/[&<>\"\']/,f=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof exports?exports:Hogan),function(t){function n(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function e(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function r(t,n,e){if(n.charAt(e)!=t.charAt(0))return!1;for(var r=1,i=t.length;i>r;r++)if(n.charAt(e+r)!=t.charAt(r))return!1;return!0}function i(n,e,r,o){var c=[],u=null,l=null,f=null;for(l=r[r.length-1];n.length>0;){if(f=n.shift(),l&&"<"==l.tag&&!(f.tag in x))throw new Error("Illegal content in < super tag.");if(t.tags[f.tag]<=t.tags.$||a(f,o))r.push(f),f.nodes=i(n,f.tag,r,o);else{if("/"==f.tag){if(0===r.length)throw new Error("Closing tag without opener: /"+f.n);if(u=r.pop(),f.n!=u.n&&!s(f.n,u.n,o))throw new Error("Nesting error: "+u.n+" vs. "+f.n);return u.end=f.i,c}"\n"==f.tag&&(f.last=0==n.length||"\n"==n[0].tag)}c.push(f)}if(r.length>0)throw new Error("missing closing tag: "+r.pop().n);return c}function a(t,n){for(var e=0,r=n.length;r>e;e++)if(n[e].o==t.n)return t.tag="#",!0}function s(t,n,e){for(var r=0,i=e.length;i>r;r++)if(e[r].c==t&&e[r].o==n)return!0}function o(t){var n=[];for(var e in t)n.push('"'+u(e)+'": function(c,p,t,i) {'+t[e]+"}");return"{ "+n.join(",")+" }"}function c(t){var n=[];for(var e in t.partials)n.push('"'+u(e)+'":{name:"'+u(t.partials[e].name)+'", '+c(t.partials[e])+"}");return"partials: {"+n.join(",")+"}, subs: "+o(t.subs)}function u(t){return t.replace(m,"\\\\").replace(v,'\\"').replace(d,"\\n").replace(b,"\\r").replace(w,"\\u2028").replace(y,"\\u2029")}function l(t){return~t.indexOf(".")?"d":"f"}function f(t,n){var e="<"+(n.prefix||""),r=e+t.n+k++;return n.partials[r]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+u(r)+'",c,p,"'+(t.indent||"")+'"));',r}function p(t,n){n.code+="t.b(t.t(t."+l(t.n)+'("'+u(t.n)+'",c,p,0)));'}function h(t){return"t.b("+t+");"}var g=/\S/,v=/\"/g,d=/\n/g,b=/\r/g,m=/\\/g,w=/\u2028/,y=/\u2029/;t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=function(i,a){function s(){m.length>0&&(w.push({tag:"_t",text:new String(m)}),m="")}function o(){for(var n=!0,e=k;e<w.length;e++)if(n=t.tags[w[e].tag]<t.tags._v||"_t"==w[e].tag&&null===w[e].text.match(g),!n)return!1;return n}function c(t,n){if(s(),t&&o())for(var e,r=k;r<w.length;r++)w[r].text&&((e=w[r+1])&&">"==e.tag&&(e.indent=w[r].text.toString()),w.splice(r,1));else n||w.push({tag:"\n"});y=!1,k=w.length}function u(t,n){var r="="+S,i=t.indexOf(r,n),a=e(t.substring(t.indexOf("=",n)+1,i)).split(" ");return T=a[0],S=a[a.length-1],i+r.length-1}var l=i.length,f=0,p=1,h=2,v=f,d=null,b=null,m="",w=[],y=!1,x=0,k=0,T="{{",S="}}";for(a&&(a=a.split(" "),T=a[0],S=a[1]),x=0;l>x;x++)v==f?r(T,i,x)?(--x,s(),v=p):"\n"==i.charAt(x)?c(y):m+=i.charAt(x):v==p?(x+=T.length-1,b=t.tags[i.charAt(x+1)],d=b?i.charAt(x+1):"_v","="==d?(x=u(i,x),v=f):(b&&x++,v=h),y=x):r(S,i,x)?(w.push({tag:d,n:e(m),otag:T,ctag:S,i:"/"==d?y-T.length:x+S.length}),m="",x+=S.length-1,v=f,"{"==d&&("}}"==S?x++:n(w[w.length-1]))):m+=i.charAt(x);return c(y,!0),w};var x={_t:!0,"\n":!0,$:!0,"/":!0};t.stringify=function(n){return"{code: function (c,p,i) { "+t.wrapMain(n.code)+" },"+c(n)+"}"};var k=0;t.generate=function(n,e,r){k=0;var i={code:"",subs:{},partials:{}};return t.walk(n,i),r.asString?this.stringify(i,e,r):this.makeTemplate(i,e,r)},t.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},t.template=t.Template,t.makeTemplate=function(t,n,e){var r=this.makePartials(t);return r.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(r,n,this,e)},t.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},t.codegen={"#":function(n,e){e.code+="if(t.s(t."+l(n.n)+'("'+u(n.n)+'",c,p,1),c,p,0,'+n.i+","+n.end+',"'+n.otag+" "+n.ctag+'")){t.rs(c,p,function(c,p,t){',t.walk(n.nodes,e),e.code+="});c.pop();}"},"^":function(n,e){e.code+="if(!t.s(t."+l(n.n)+'("'+u(n.n)+'",c,p,1),c,p,1,0,0,"")){',t.walk(n.nodes,e),e.code+="};"},">":f,"<":function(n,e){var r={partials:{},code:"",subs:{},inPartial:!0};t.walk(n.nodes,r);var i=e.partials[f(n,e)];i.subs=r.subs,i.partials=r.partials},$:function(n,e){var r={subs:{},code:"",partials:e.partials,prefix:n.n};t.walk(n.nodes,r),e.subs[n.n]=r.code,e.inPartial||(e.code+='t.sub("'+u(n.n)+'",c,p,i);')},"\n":function(t,n){n.code+=h('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+l(t.n)+'("'+u(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=h('"'+u(t.text)+'"')},"{":p,"&":p},t.walk=function(n,e){for(var r,i=0,a=n.length;a>i;i++)r=t.codegen[n[i].tag],r&&r(n[i],e);return e},t.parse=function(t,n,e){return e=e||{},i(t,"",[],e.sectionTags||[])},t.cache={},t.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},t.compile=function(n,e){e=e||{};var r=t.cacheKey(n,e),i=this.cache[r];if(i){var a=i.partials;for(var s in a)delete a[s].instance;return i}return i=this.generate(this.parse(this.scan(n,e.delimiters),n,e),n,e),this.cache[r]=i}}("undefined"!=typeof exports?exports:Hogan);var Mustache=function(t){function n(n,e,r,i){var a=this.f(n,e,r,0),s=e;return a&&(s=s.concat(a)),t.Template.prototype.rp.call(this,n,s,r,i)}var e=function(e,r,i){this.rp=n,t.Template.call(this,e,r,i)};e.prototype=t.Template.prototype;var r,i=function(){this.cache={},this.generate=function(t,n){return new e(new Function("c","p","i",t),n,r)}};return i.prototype=t,r=new i,{to_html:function(t,n,e,i){var a=r.compile(t),s=a.render(n,e);return i?(i(s),void 0):s}}}(Hogan);plyr.setup({debug:!0,title:"Video demo",html:templates.controls.render({}),captions:{defaultActive:!0}}),"plyr.io"===document.domain&&(!function(t,n,e,r,i,a,s){t.GoogleAnalyticsObject=i,t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].l=1*new Date,a=n.createElement(e),s=n.getElementsByTagName(e)[0],a.async=1,a.src=r,s.parentNode.insertBefore(a,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-40881672-11","auto"),ga("send","pageview"));