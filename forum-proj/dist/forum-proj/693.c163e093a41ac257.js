"use strict";(self.webpackChunkforum_proj=self.webpackChunkforum_proj||[]).push([[693],{903:(Mt,et,Y)=>{Y.d(et,{Z:()=>q});var R={value:()=>{}};function E(){for(var g,_=0,y=arguments.length,d={};_<y;++_){if(!(g=arguments[_]+"")||g in d||/[\s.]/.test(g))throw new Error("illegal type: "+g);d[g]=[]}return new k(d)}function k(_){this._=_}function P(_,y){for(var w,d=0,g=_.length;d<g;++d)if((w=_[d]).name===y)return w.value}function S(_,y,d){for(var g=0,w=_.length;g<w;++g)if(_[g].name===y){_[g]=R,_=_.slice(0,g).concat(_.slice(g+1));break}return null!=d&&_.push({name:y,value:d}),_}k.prototype=E.prototype={constructor:k,on:function(_,y){var w,d=this._,g=function U(_,y){return _.trim().split(/^|\s+/).map(function(d){var g="",w=d.indexOf(".");if(w>=0&&(g=d.slice(w+1),d=d.slice(0,w)),d&&!y.hasOwnProperty(d))throw new Error("unknown type: "+d);return{type:d,name:g}})}(_+"",d),N=-1,H=g.length;if(!(arguments.length<2)){if(null!=y&&"function"!=typeof y)throw new Error("invalid callback: "+y);for(;++N<H;)if(w=(_=g[N]).type)d[w]=S(d[w],_.name,y);else if(null==y)for(w in d)d[w]=S(d[w],_.name,null);return this}for(;++N<H;)if((w=(_=g[N]).type)&&(w=P(d[w],_.name)))return w},copy:function(){var _={},y=this._;for(var d in y)_[d]=y[d].slice();return new k(_)},call:function(_,y){if((w=arguments.length-2)>0)for(var w,N,d=new Array(w),g=0;g<w;++g)d[g]=arguments[g+2];if(!this._.hasOwnProperty(_))throw new Error("unknown type: "+_);for(g=0,w=(N=this._[_]).length;g<w;++g)N[g].value.apply(y,d)},apply:function(_,y,d){if(!this._.hasOwnProperty(_))throw new Error("unknown type: "+_);for(var g=this._[_],w=0,N=g.length;w<N;++w)g[w].value.apply(y,d)}};const q=E},392:(Mt,et,Y)=>{Y.d(et,{B7:()=>H,HT:()=>rt,zO:()=>w});var P,S,R=0,E=0,k=0,U=1e3,q=0,_=0,y=0,d="object"==typeof performance&&performance.now?performance:Date,g="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(v){setTimeout(v,17)};function w(){return _||(g(N),_=d.now()+y)}function N(){_=0}function H(){this._call=this._time=this._next=null}function rt(v,x,C){var X=new H;return X.restart(v,x,C),X}function it(){_=(q=d.now())+y,R=E=0;try{!function gt(){w(),++R;for(var x,v=P;v;)(x=_-v._time)>=0&&v._call.call(void 0,x),v=v._next;--R}()}finally{R=0,function yt(){for(var v,C,x=P,X=1/0;x;)x._call?(X>x._time&&(X=x._time),v=x,x=x._next):(C=x._next,x._next=null,x=v?v._next=C:P=C);S=v,K(X)}(),_=0}}function wt(){var v=d.now(),x=v-q;x>U&&(y-=x,q=v)}function K(v){R||(E&&(E=clearTimeout(E)),v-_>24?(v<1/0&&(E=setTimeout(it,v-d.now()-y)),k&&(k=clearInterval(k))):(k||(q=d.now(),k=setInterval(wt,U)),R=1,g(it)))}H.prototype=rt.prototype={constructor:H,restart:function(v,x,C){if("function"!=typeof v)throw new TypeError("callback is not a function");C=(null==C?w():+C)+(null==x?0:+x),!this._next&&S!==this&&(S?S._next=this:P=this,S=this),this._call=v,this._time=C,K()},stop:function(){this._call&&(this._call=null,this._time=1/0,K())}}},693:(Mt,et,Y)=>{function R(){}function E(t){return null==t?R:function(){return this.querySelector(t)}}function P(){return[]}function S(t){return null==t?P:function(){return this.querySelectorAll(t)}}function y(t){return function(){return this.matches(t)}}function d(t){return function(n){return n.matches(t)}}var g=Array.prototype.find;function N(){return this.firstElementChild}var rt=Array.prototype.filter;function gt(){return Array.from(this.children)}function K(t){return new Array(t.length)}function x(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function X(t,n,e,r,i,o){for(var a,s=0,u=n.length,f=o.length;s<f;++s)(a=n[s])?(a.__data__=o[s],r[s]=a):e[s]=new x(t,o[s]);for(;s<u;++s)(a=n[s])&&(i[s]=a)}function gn(t,n,e,r,i,o,s){var a,u,p,f=new Map,l=n.length,c=o.length,h=new Array(l);for(a=0;a<l;++a)(u=n[a])&&(h[a]=p=s.call(u,u.__data__,a,n)+"",f.has(p)?i[a]=u:f.set(p,u));for(a=0;a<c;++a)p=s.call(t,o[a],a,o)+"",(u=f.get(p))?(r[a]=u,u.__data__=o[a],f.delete(p)):e[a]=new x(t,o[a]);for(a=0;a<l;++a)(u=n[a])&&f.get(h[a])===u&&(i[a]=u)}function wn(t){return t.__data__}function xn(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function En(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}x.prototype={constructor:x,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var xt="http://www.w3.org/1999/xhtml";const Rt={svg:"http://www.w3.org/2000/svg",xhtml:xt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ot(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),Rt.hasOwnProperty(n)?{space:Rt[n],local:t}:t}function Rn(t){return function(){this.removeAttribute(t)}}function In(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Fn(t,n){return function(){this.setAttribute(t,n)}}function Hn(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function On(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Dn(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function It(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function qn(t){return function(){this.style.removeProperty(t)}}function Xn(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Ln(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function G(t,n){return t.style.getPropertyValue(n)||It(t).getComputedStyle(t,null).getPropertyValue(n)}function Vn(t){return function(){delete this[t]}}function zn(t,n){return function(){this[t]=n}}function Yn(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function Ft(t){return t.trim().split(/^|\s+/)}function vt(t){return t.classList||new Ht(t)}function Ht(t){this._node=t,this._names=Ft(t.getAttribute("class")||"")}function Ot(t,n){for(var e=vt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Dt(t,n){for(var e=vt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Kn(t){return function(){Ot(this,t)}}function Gn(t){return function(){Dt(this,t)}}function Wn(t,n){return function(){(n.apply(this,arguments)?Ot:Dt)(this,t)}}function Jn(){this.textContent=""}function Qn(t){return function(){this.textContent=t}}function jn(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function ne(){this.innerHTML=""}function ee(t){return function(){this.innerHTML=t}}function re(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function oe(){this.nextSibling&&this.parentNode.appendChild(this)}function ae(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function fe(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===xt&&n.documentElement.namespaceURI===xt?n.createElement(t):n.createElementNS(e,t)}}function le(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Pt(t){var n=ot(t);return(n.local?le:fe)(n)}function he(){return null}function _e(){var t=this.parentNode;t&&t.removeChild(this)}function ge(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function we(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function be(t){return function(){var n=this.__on;if(n){for(var o,e=0,r=-1,i=n.length;e<i;++e)o=n[e],t.type&&o.type!==t.type||o.name!==t.name?n[++r]=o:this.removeEventListener(o.type,o.listener,o.options);++r?n.length=r:delete this.__on}}}function Ne(t,n,e){return function(){var i,r=this.__on,o=function ve(t){return function(n){t.call(this,n,this.__data__)}}(n);if(r)for(var s=0,a=r.length;s<a;++s)if((i=r[s]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),void(i.value=n);this.addEventListener(t.type,o,e),i={type:t.type,name:t.name,value:n,listener:o,options:e},r?r.push(i):this.__on=[i]}}function qt(t,n,e){var r=It(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function Ee(t,n){return function(){return qt(this,t,n)}}function ke(t,n){return function(){return qt(this,t,n.apply(this,arguments))}}Ht.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var $e=[null];function $(t,n){this._groups=t,this._parents=n}function Xt(){return new $([[document.documentElement]],$e)}$.prototype=Xt.prototype={constructor:$,select:function k(t){"function"!=typeof t&&(t=E(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,f,o=n[i],s=o.length,a=r[i]=new Array(s),l=0;l<s;++l)(u=o[l])&&(f=t.call(u,u.__data__,l,o))&&("__data__"in u&&(f.__data__=u.__data__),a[l]=f);return new $(r,this._parents)},selectAll:function _(t){t="function"==typeof t?function q(t){return function(){return function U(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}(t):S(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,s=n[o],a=s.length,f=0;f<a;++f)(u=s[f])&&(r.push(t.call(u,u.__data__,f,s)),i.push(u));return new $(r,i)},selectChild:function H(t){return this.select(null==t?N:function w(t){return function(){return g.call(this.children,t)}}("function"==typeof t?t:d(t)))},selectChildren:function wt(t){return this.selectAll(null==t?gt:function it(t){return function(){return rt.call(this.children,t)}}("function"==typeof t?t:d(t)))},filter:function yt(t){"function"!=typeof t&&(t=y(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,o=n[i],s=o.length,a=r[i]=[],f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new $(r,this._parents)},data:function yn(t,n){if(!arguments.length)return Array.from(this,wn);var e=n?gn:X,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function C(t){return function(){return t}}(t));for(var o=i.length,s=new Array(o),a=new Array(o),u=new Array(o),f=0;f<o;++f){var l=r[f],c=i[f],h=c.length,p=xn(t.call(l,l&&l.__data__,f,r)),m=p.length,b=a[f]=new Array(m),z=s[f]=new Array(m);e(l,c,b,z,u[f]=new Array(h),p,n);for(var _n,dn,nt=0,dt=0;nt<m;++nt)if(_n=b[nt]){for(nt>=dt&&(dt=nt+1);!(dn=z[dt])&&++dt<m;);_n._next=dn||null}}return(s=new $(s,r))._enter=a,s._exit=u,s},enter:function v(){return new $(this._enter||this._groups.map(K),this._parents)},exit:function vn(){return new $(this._exit||this._groups.map(K),this._parents)},join:function mn(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function bn(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,s=Math.min(i,r.length),a=new Array(i),u=0;u<s;++u)for(var p,f=e[u],l=r[u],c=f.length,h=a[u]=new Array(c),m=0;m<c;++m)(p=f[m]||l[m])&&(h[m]=p);for(;u<i;++u)a[u]=e[u];return new $(a,this._parents)},selection:function Te(){return this},order:function Nn(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var s,r=t[n],i=r.length-1,o=r[i];--i>=0;)(s=r[i])&&(o&&4^s.compareDocumentPosition(o)&&o.parentNode.insertBefore(s,o),o=s);return this},sort:function An(t){function n(c,h){return c&&h?t(c.__data__,h.__data__):!c-!h}t||(t=En);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var f,s=e[o],a=s.length,u=i[o]=new Array(a),l=0;l<a;++l)(f=s[l])&&(u[l]=f);u.sort(n)}return new $(i,this._parents).order()},call:function kn(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function Cn(){return Array.from(this)},node:function Sn(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null},size:function $n(){let t=0;for(const n of this)++t;return t},empty:function Tn(){return!this.node()},each:function Mn(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var a,i=n[e],o=0,s=i.length;o<s;++o)(a=i[o])&&t.call(a,a.__data__,o,i);return this},attr:function Pn(t,n){var e=ot(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?In:Rn:"function"==typeof n?e.local?Dn:On:e.local?Hn:Fn)(e,n))},style:function Bn(t,n,e){return arguments.length>1?this.each((null==n?qn:"function"==typeof n?Ln:Xn)(t,n,e??"")):G(this.node(),t)},property:function Un(t,n){return arguments.length>1?this.each((null==n?Vn:"function"==typeof n?Yn:zn)(t,n)):this.node()[t]},classed:function Zn(t,n){var e=Ft(t+"");if(arguments.length<2){for(var r=vt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?Wn:n?Kn:Gn)(e,n))},text:function te(t){return arguments.length?this.each(null==t?Jn:("function"==typeof t?jn:Qn)(t)):this.node().textContent},html:function ie(t){return arguments.length?this.each(null==t?ne:("function"==typeof t?re:ee)(t)):this.node().innerHTML},raise:function se(){return this.each(oe)},lower:function ue(){return this.each(ae)},append:function ce(t){var n="function"==typeof t?t:Pt(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function pe(t,n){var e="function"==typeof t?t:Pt(t),r=null==n?he:"function"==typeof n?n:E(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function de(){return this.each(_e)},clone:function ye(t){return this.select(t?we:ge)},datum:function xe(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function Ae(t,n,e){var i,s,r=function me(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}(t+""),o=r.length;if(!(arguments.length<2)){for(a=n?Ne:be,i=0;i<o;++i)this.each(a(r[i],n,e));return this}var a=this.node().__on;if(a)for(var l,u=0,f=a.length;u<f;++u)for(i=0,l=a[u];i<o;++i)if((s=r[i]).type===l.type&&s.name===l.name)return l.value},dispatch:function Ce(t,n){return this.each(("function"==typeof n?ke:Ee)(t,n))},[Symbol.iterator]:function*Se(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var s,r=t[n],i=0,o=r.length;i<o;++i)(s=r[i])&&(yield s)}};const Z=Xt;var Me=Y(903),mt=Y(392);function Lt(t,n,e){var r=new mt.B7;return r.restart(i=>{r.stop(),t(i+n)},n=null==n?0:+n,e),r}var Re=(0,Me.Z)("start","end","cancel","interrupt"),Ie=[],Bt=0,Vt=1,bt=2,st=3,zt=4,Nt=5,at=6;function ut(t,n,e,r,i,o){var s=t.__transition;if(s){if(e in s)return}else t.__transition={};!function Fe(t,n,e){var i,r=t.__transition;function s(f){var l,c,h,p;if(e.state!==Vt)return u();for(l in r)if((p=r[l]).name===e.name){if(p.state===st)return Lt(s);p.state===zt?(p.state=at,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete r[l]):+l<n&&(p.state=at,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete r[l])}if(Lt(function(){e.state===st&&(e.state=zt,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=bt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===bt){for(e.state=st,i=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(p=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(i[++c]=p);i.length=c+1}}function a(f){for(var l=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(u),e.state=Nt,1),c=-1,h=i.length;++c<h;)i[c].call(t,l);e.state===Nt&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var f in e.state=at,e.timer.stop(),delete r[n],r)return;delete t.__transition}r[n]=e,e.timer=(0,mt.HT)(function o(f){e.state=Vt,e.timer.restart(s,e.delay,e.time),e.delay<=f&&s(f-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:Re,tween:Ie,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Bt})}function At(t,n){var e=T(t,n);if(e.state>Bt)throw new Error("too late; already scheduled");return e}function I(t,n){var e=T(t,n);if(e.state>st)throw new Error("too late; already running");return e}function T(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function L(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var ft,Yt=180/Math.PI,Et={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Ut(t,n,e,r,i,o){var s,a,u;return(s=Math.sqrt(t*t+n*n))&&(t/=s,n/=s),(u=t*e+n*r)&&(e-=t*u,r-=n*u),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,u/=a),t*r<n*e&&(t=-t,n=-n,u=-u,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Yt,skewX:Math.atan(u)*Yt,scaleX:s,scaleY:a}}function Kt(t,n,e,r){function i(f){return f.length?f.pop()+" ":""}return function(f,l){var c=[],h=[];return f=t(f),l=t(l),function o(f,l,c,h,p,m){if(f!==c||l!==h){var b=p.push("translate(",null,n,null,e);m.push({i:b-4,x:L(f,c)},{i:b-2,x:L(l,h)})}else(c||h)&&p.push("translate("+c+n+h+e)}(f.translateX,f.translateY,l.translateX,l.translateY,c,h),function s(f,l,c,h){f!==l?(f-l>180?l+=360:l-f>180&&(f+=360),h.push({i:c.push(i(c)+"rotate(",null,r)-2,x:L(f,l)})):l&&c.push(i(c)+"rotate("+l+r)}(f.rotate,l.rotate,c,h),function a(f,l,c,h){f!==l?h.push({i:c.push(i(c)+"skewX(",null,r)-2,x:L(f,l)}):l&&c.push(i(c)+"skewX("+l+r)}(f.skewX,l.skewX,c,h),function u(f,l,c,h,p,m){if(f!==c||l!==h){var b=p.push(i(p)+"scale(",null,",",null,")");m.push({i:b-4,x:L(f,c)},{i:b-2,x:L(l,h)})}else(1!==c||1!==h)&&p.push(i(p)+"scale("+c+","+h+")")}(f.scaleX,f.scaleY,l.scaleX,l.scaleY,c,h),f=l=null,function(p){for(var z,m=-1,b=h.length;++m<b;)c[(z=h[m]).i]=z.x(p);return c.join("")}}}var qe=Kt(function De(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Et:Ut(n.a,n.b,n.c,n.d,n.e,n.f)},"px, ","px)","deg)"),Xe=Kt(function Pe(t){return null!=t&&(ft||(ft=document.createElementNS("http://www.w3.org/2000/svg","g")),ft.setAttribute("transform",t),t=ft.transform.baseVal.consolidate())?Ut((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Et},", ",")",")");function Le(t,n){var e,r;return function(){var i=I(this,t),o=i.tween;if(o!==e)for(var s=0,a=(r=e=o).length;s<a;++s)if(r[s].name===n){(r=r.slice()).splice(s,1);break}i.tween=r}}function Be(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=I(this,t),s=o.tween;if(s!==r){i=(r=s).slice();for(var a={name:n,value:e},u=0,f=i.length;u<f;++u)if(i[u].name===n){i[u]=a;break}u===f&&i.push(a)}o.tween=i}}function kt(t,n,e){var r=t._id;return t.each(function(){var i=I(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return T(i,r).value[n]}}function Ct(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Gt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function J(){}var Q=.7,lt=1/Q,W="\\s*([+-]?\\d+)\\s*",j="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",F="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ze=/^#([0-9a-f]{3,8})$/,Ye=new RegExp(`^rgb\\(${W},${W},${W}\\)$`),Ue=new RegExp(`^rgb\\(${F},${F},${F}\\)$`),Ke=new RegExp(`^rgba\\(${W},${W},${W},${j}\\)$`),Ge=new RegExp(`^rgba\\(${F},${F},${F},${j}\\)$`),We=new RegExp(`^hsl\\(${j},${F},${F}\\)$`),Ze=new RegExp(`^hsla\\(${j},${F},${F},${j}\\)$`),Wt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Zt(){return this.rgb().formatHex()}function Jt(){return this.rgb().formatRgb()}function tt(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=ze.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Qt(n):3===e?new A(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?ct(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?ct(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=Ye.exec(t))?new A(n[1],n[2],n[3],1):(n=Ue.exec(t))?new A(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Ke.exec(t))?ct(n[1],n[2],n[3],n[4]):(n=Ge.exec(t))?ct(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=We.exec(t))?nn(n[1],n[2]/100,n[3]/100,1):(n=Ze.exec(t))?nn(n[1],n[2]/100,n[3]/100,n[4]):Wt.hasOwnProperty(t)?Qt(Wt[t]):"transparent"===t?new A(NaN,NaN,NaN,0):null}function Qt(t){return new A(t>>16&255,t>>8&255,255&t,1)}function ct(t,n,e,r){return r<=0&&(t=n=e=NaN),new A(t,n,e,r)}function ht(t,n,e,r){return 1===arguments.length?function je(t){return t instanceof J||(t=tt(t)),t?new A((t=t.rgb()).r,t.g,t.b,t.opacity):new A}(t):new A(t,n,e,r??1)}function A(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function jt(){return`#${V(this.r)}${V(this.g)}${V(this.b)}`}function tn(){const t=pt(this.opacity);return`${1===t?"rgb(":"rgba("}${B(this.r)}, ${B(this.g)}, ${B(this.b)}${1===t?")":`, ${t})`}`}function pt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function B(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function V(t){return((t=B(t))<16?"0":"")+t.toString(16)}function nn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new M(t,n,e,r)}function en(t){if(t instanceof M)return new M(t.h,t.s,t.l,t.opacity);if(t instanceof J||(t=tt(t)),!t)return new M;if(t instanceof M)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),s=NaN,a=o-i,u=(o+i)/2;return a?(s=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=u<.5?o+i:2-o-i,s*=60):a=u>0&&u<1?0:s,new M(s,a,u,t.opacity)}function M(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function rn(t){return(t=(t||0)%360)<0?t+360:t}function _t(t){return Math.max(0,Math.min(1,t||0))}function St(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function on(t,n,e,r,i){var o=t*t,s=o*t;return((1-3*t+3*o-s)*n+(4-6*o+3*s)*e+(1+3*t+3*o-3*s)*r+s*i)/6}Ct(J,tt,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Zt,formatHex:Zt,formatHex8:function Je(){return this.rgb().formatHex8()},formatHsl:function Qe(){return en(this).formatHsl()},formatRgb:Jt,toString:Jt}),Ct(A,ht,Gt(J,{brighter(t){return t=null==t?lt:Math.pow(lt,t),new A(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?Q:Math.pow(Q,t),new A(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new A(B(this.r),B(this.g),B(this.b),pt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:jt,formatHex:jt,formatHex8:function tr(){return`#${V(this.r)}${V(this.g)}${V(this.b)}${V(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:tn,toString:tn})),Ct(M,function nr(t,n,e,r){return 1===arguments.length?en(t):new M(t,n,e,r??1)},Gt(J,{brighter(t){return t=null==t?lt:Math.pow(lt,t),new M(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?Q:Math.pow(Q,t),new M(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new A(St(t>=240?t-240:t+120,i,r),St(t,i,r),St(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new M(rn(this.h),_t(this.s),_t(this.l),pt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=pt(this.opacity);return`${1===t?"hsl(":"hsla("}${rn(this.h)}, ${100*_t(this.s)}%, ${100*_t(this.l)}%${1===t?")":`, ${t})`}`}}));const sn=t=>()=>t;function un(t,n){var e=n-t;return e?function an(t,n){return function(e){return t+e*n}}(t,e):sn(isNaN(t)?n:t)}const fn=function t(n){var e=function or(t){return 1==(t=+t)?un:function(n,e){return e-n?function ir(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):sn(isNaN(n)?e:n)}}(n);function r(i,o){var s=e((i=ht(i)).r,(o=ht(o)).r),a=e(i.g,o.g),u=e(i.b,o.b),f=un(i.opacity,o.opacity);return function(l){return i.r=s(l),i.g=a(l),i.b=u(l),i.opacity=f(l),i+""}}return r.gamma=t,r}(1);function ln(t){return function(n){var s,a,e=n.length,r=new Array(e),i=new Array(e),o=new Array(e);for(s=0;s<e;++s)a=ht(n[s]),r[s]=a.r||0,i[s]=a.g||0,o[s]=a.b||0;return r=t(r),i=t(i),o=t(o),a.opacity=1,function(u){return a.r=r(u),a.g=i(u),a.b=o(u),a+""}}}ln(function er(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1];return on((e-r/n)*n,r>0?t[r-1]:2*i-o,i,o,r<n-1?t[r+2]:2*o-i)}}),ln(function rr(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n);return on((e-r/n)*n,t[(r+n-1)%n],t[r%n],t[(r+1)%n],t[(r+2)%n])}});var $t=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Tt=new RegExp($t.source,"g");function ur(t,n){var r,i,o,e=$t.lastIndex=Tt.lastIndex=0,s=-1,a=[],u=[];for(t+="",n+="";(r=$t.exec(t))&&(i=Tt.exec(n));)(o=i.index)>e&&(o=n.slice(e,o),a[s]?a[s]+=o:a[++s]=o),(r=r[0])===(i=i[0])?a[s]?a[s]+=i:a[++s]=i:(a[++s]=null,u.push({i:s,x:L(r,i)})),e=Tt.lastIndex;return e<n.length&&(o=n.slice(e),a[s]?a[s]+=o:a[++s]=o),a.length<2?u[0]?function ar(t){return function(n){return t(n)+""}}(u[0].x):function sr(t){return function(){return t}}(n):(n=u.length,function(f){for(var c,l=0;l<n;++l)a[(c=u[l]).i]=c.x(f);return a.join("")})}function cn(t,n){var e;return("number"==typeof n?L:n instanceof tt?fn:(e=tt(n))?(n=e,fn):ur)(t,n)}function fr(t){return function(){this.removeAttribute(t)}}function lr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function cr(t,n,e){var r,o,i=e+"";return function(){var s=this.getAttribute(t);return s===i?null:s===r?o:o=n(r=s,e)}}function hr(t,n,e){var r,o,i=e+"";return function(){var s=this.getAttributeNS(t.space,t.local);return s===i?null:s===r?o:o=n(r=s,e)}}function pr(t,n,e){var r,i,o;return function(){var s,u,a=e(this);return null==a?void this.removeAttribute(t):(s=this.getAttribute(t))===(u=a+"")?null:s===r&&u===i?o:(i=u,o=n(r=s,a))}}function _r(t,n,e){var r,i,o;return function(){var s,u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local))===(u=a+"")?null:s===r&&u===i?o:(i=u,o=n(r=s,a))}}function yr(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&function wr(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,o)),e}return i._value=n,i}function xr(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&function gr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,o)),e}return i._value=n,i}function mr(t,n){return function(){At(this,t).delay=+n.apply(this,arguments)}}function br(t,n){return n=+n,function(){At(this,t).delay=n}}function Ar(t,n){return function(){I(this,t).duration=+n.apply(this,arguments)}}function Er(t,n){return n=+n,function(){I(this,t).duration=n}}var Xr=Z.prototype.constructor;function hn(t){return function(){this.style.removeProperty(t)}}var ii=0;function O(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function pn(){return++ii}var D=Z.prototype;O.prototype=function oi(t){return Z().transition(t)}.prototype={constructor:O,select:function Pr(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=E(t));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var l,c,a=r[s],u=a.length,f=o[s]=new Array(u),h=0;h<u;++h)(l=a[h])&&(c=t.call(l,l.__data__,h,a))&&("__data__"in l&&(c.__data__=l.__data__),f[h]=c,ut(f[h],n,e,h,f,T(l,e)));return new O(o,this._parents,n,e)},selectAll:function qr(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=S(t));for(var r=this._groups,i=r.length,o=[],s=[],a=0;a<i;++a)for(var l,u=r[a],f=u.length,c=0;c<f;++c)if(l=u[c]){for(var p,h=t.call(l,l.__data__,c,u),m=T(l,e),b=0,z=h.length;b<z;++b)(p=h[b])&&ut(p,n,e,b,h,m);o.push(h),s.push(l)}return new O(o,s,n,e)},selectChild:D.selectChild,selectChildren:D.selectChildren,filter:function Mr(t){"function"!=typeof t&&(t=y(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var u,o=n[i],s=o.length,a=r[i]=[],f=0;f<s;++f)(u=o[f])&&t.call(u,u.__data__,f,o)&&a.push(u);return new O(r,this._parents,this._name,this._id)},merge:function Rr(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,o=Math.min(r,e.length),s=new Array(r),a=0;a<o;++a)for(var h,u=n[a],f=e[a],l=u.length,c=s[a]=new Array(l),p=0;p<l;++p)(h=u[p]||f[p])&&(c[p]=h);for(;a<r;++a)s[a]=n[a];return new O(s,this._parents,this._name,this._id)},selection:function Lr(){return new Xr(this._groups,this._parents)},transition:function ei(){for(var t=this._name,n=this._id,e=pn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,s=r[o],a=s.length,f=0;f<a;++f)if(u=s[f]){var l=T(u,n);ut(u,t,e,f,s,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new O(r,this._parents,t,e)},call:D.call,nodes:D.nodes,node:D.node,size:D.size,empty:D.empty,each:D.each,on:function Hr(t,n){var e=this._id;return arguments.length<2?T(this.node(),e).on.on(t):this.each(function Fr(t,n,e){var r,i,o=function Ir(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||"start"===n})}(n)?At:I;return function(){var s=o(this,t),a=s.on;a!==r&&(i=(r=a).copy()).on(n,e),s.on=i}}(e,t,n))},attr:function dr(t,n){var e=ot(t),r="transform"===e?Xe:cn;return this.attrTween(t,"function"==typeof n?(e.local?_r:pr)(e,r,kt(this,"attr."+t,n)):null==n?(e.local?lr:fr)(e):(e.local?hr:cr)(e,r,n))},attrTween:function vr(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=ot(t);return this.tween(e,(r.local?yr:xr)(r,n))},style:function Ur(t,n,e){var r="transform"==(t+="")?qe:cn;return null==n?this.styleTween(t,function Br(t,n){var e,r,i;return function(){var o=G(this,t),s=(this.style.removeProperty(t),G(this,t));return o===s?null:o===e&&s===r?i:i=n(e=o,r=s)}}(t,r)).on("end.style."+t,hn(t)):"function"==typeof n?this.styleTween(t,function zr(t,n,e){var r,i,o;return function(){var s=G(this,t),a=e(this),u=a+"";return null==a&&(this.style.removeProperty(t),u=a=G(this,t)),s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,a))}}(t,r,kt(this,"style."+t,n))).each(function Yr(t,n){var e,r,i,a,o="style."+n,s="end."+o;return function(){var u=I(this,t),f=u.on,l=null==u.value[o]?a||(a=hn(n)):void 0;(f!==e||i!==l)&&(r=(e=f).copy()).on(s,i=l),u.on=r}}(this._id,t)):this.styleTween(t,function Vr(t,n,e){var r,o,i=e+"";return function(){var s=G(this,t);return s===i?null:s===r?o:o=n(r=s,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function Wr(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function Gr(t,n,e){var r,i;function o(){var s=n.apply(this,arguments);return s!==i&&(r=(i=s)&&function Kr(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,s,e)),r}return o._value=n,o}(t,n,e??""))},text:function Qr(t){return this.tween("text","function"==typeof t?function Jr(t){return function(){var n=t(this);this.textContent=n??""}}(kt(this,"text",t)):function Zr(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function ni(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,function ti(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&function jr(t){return function(n){this.textContent=t.call(this,n)}}(i)),n}return r._value=t,r}(t))},remove:function Dr(){return this.on("end.remove",function Or(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function Ve(t,n){var e=this._id;if(t+="",arguments.length<2){for(var s,r=T(this.node(),e).tween,i=0,o=r.length;i<o;++i)if((s=r[i]).name===t)return s.value;return null}return this.each((null==n?Le:Be)(e,t,n))},delay:function Nr(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?mr:br)(n,t)):T(this.node(),n).delay},duration:function kr(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Ar:Er)(n,t)):T(this.node(),n).duration},ease:function Sr(t){var n=this._id;return arguments.length?this.each(function Cr(t,n){if("function"!=typeof n)throw new Error;return function(){I(this,t).ease=n}}(n,t)):T(this.node(),n).ease},easeVarying:function Tr(t){if("function"!=typeof t)throw new Error;return this.each(function $r(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;I(this,t).ease=e}}(this._id,t))},end:function ri(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,s){var a={value:s},u={value:function(){0==--i&&o()}};e.each(function(){var f=I(this,r),l=f.on;l!==t&&((n=(t=l).copy())._.cancel.push(a),n._.interrupt.push(a),n._.end.push(u)),f.on=n}),0===i&&o()})},[Symbol.iterator]:D[Symbol.iterator]};var ai={time:null,delay:0,duration:250,ease:function si(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function ui(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}Z.prototype.interrupt=function Oe(t){return this.each(function(){!function He(t,n){var r,i,s,e=t.__transition,o=!0;if(e){for(s in n=null==n?null:n+"",e)(r=e[s]).name===n?(i=r.state>bt&&r.state<Nt,r.state=at,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[s]):o=!1;o&&delete t.__transition}}(this,t)})},Z.prototype.transition=function fi(t){var n,e;t instanceof O?(n=t._id,t=t._name):(n=pn(),(e=ai).time=(0,mt.zO)(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,s=r[o],a=s.length,f=0;f<a;++f)(u=s[f])&&ut(u,t,n,f,s,e||ui(u,n));return new O(r,this._parents,t,n)}}}]);