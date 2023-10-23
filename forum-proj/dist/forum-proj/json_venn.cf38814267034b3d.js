"use strict";(self.webpackChunkforum_proj=self.webpackChunkforum_proj||[]).push([[565],{9829:(Jt,zt,R)=>{R.d(zt,{Venn:()=>Y});var it=R(655),Pt=R(2056),Q=R(1872),Dt=R(4005);class At extends Pt.Q{setupDefaultRules(){super.setupDefaultRules();const t=this.rule.bind(this);t("Venn").setAll({legendLabelText:"{category}",legendValueText:"{value}",colors:Dt.U.new(this._root,{}),width:Q.AQ,height:Q.AQ}),t("Label",["venn"]).setAll({text:"{category}",populateText:!0,centerX:Q.CI,centerY:Q.CI})}}var at=R(6433),ut=R(5344),Z=R(314),ot=R(7970),Rt=R(1705),ft=R(7379),lt=R(7166),V=R(9660),ht=R(8256);function X(e){for(var t=new Array(e),r=0;r<e;++r)t[r]=0;return t}function gt(e,t){return X(e).map(function(){return X(t)})}function G(e,t){for(var r=0,n=0;n<e.length;++n)r+=e[n]*t[n];return r}function J(e){return Math.sqrt(G(e,e))}function K(e,t,r){for(var n=0;n<t.length;++n)e[n]=t[n]*r}function E(e,t,r,n,s){for(var i=0;i<e.length;++i)e[i]=t*r[i]+n*s[i]}function vt(e,t,r){var x,n=(r=r||{}).maxIterations||200*t.length,s=r.nonZeroDelta||1.05,i=r.zeroDelta||.001,a=r.minErrorDelta||1e-6,u=r.minErrorDelta||1e-5,o=void 0!==r.rho?r.rho:1,f=void 0!==r.chi?r.chi:2,l=void 0!==r.psi?r.psi:-.5,h=void 0!==r.sigma?r.sigma:.5,y=t.length,g=new Array(y+1);g[0]=t,g[0].fx=e(t),g[0].id=0;for(var v=0;v<y;++v){var d=t.slice();d[v]=d[v]?d[v]*s:i,g[v+1]=d,g[v+1].fx=e(d),g[v+1].id=v+1}function c(D){for(var P=0;P<D.length;P++)g[y][P]=D[P];g[y].fx=D.fx}for(var M=function(D,P){return D.fx-P.fx},w=t.slice(),b=t.slice(),m=t.slice(),z=t.slice(),A=0;A<n;++A){if(g.sort(M),r.history){var I=g.map(function(D){var P=D.slice();return P.fx=D.fx,P.id=D.id,P});I.sort(function(D,P){return D.id-P.id}),r.history.push({x:g[0].slice(),fx:g[0].fx,simplex:I})}for(x=0,v=0;v<y;++v)x=Math.max(x,Math.abs(g[0][v]-g[1][v]));if(Math.abs(g[0].fx-g[y].fx)<a&&x<u)break;for(v=0;v<y;++v){w[v]=0;for(var T=0;T<y;++T)w[v]+=g[T][v];w[v]/=y}var S=g[y];if(E(b,1+o,w,-o,S),b.fx=e(b),b.fx<g[0].fx)E(z,1+f,w,-f,S),z.fx=e(z),c(z.fx<b.fx?z:b);else if(b.fx>=g[y-1].fx){var k=!1;if(b.fx>S.fx?(E(m,1+l,w,-l,S),m.fx=e(m),m.fx<S.fx?c(m):k=!0):(E(m,1-l*o,w,l*o,S),m.fx=e(m),m.fx<b.fx?c(m):k=!0),k){if(h>=1)break;for(v=1;v<g.length;++v)E(g[v],1-h,g[0],h,g[v]),g[v].fx=e(g[v])}}else c(b)}return g.sort(M),{fx:g[0].fx,x:g[0]}}function Ct(e,t,r,n,s,i,a){var u=r.fx,o=G(r.fxprime,t),f=u,l=u,h=o,x=0;function y(v,d,c){for(var M=0;M<16;++M)if(E(n.x,1,r.x,s=(v+d)/2,t),f=n.fx=e(n.x,n.fxprime),h=G(n.fxprime,t),f>u+i*s*o||f>=c)d=s;else{if(Math.abs(h)<=-a*o)return s;h*(d-v)>=0&&(d=v),v=s,c=f}return 0}s=s||1,i=i||1e-6,a=a||.1;for(var g=0;g<10;++g){if(E(n.x,1,r.x,s,t),f=n.fx=e(n.x,n.fxprime),h=G(n.fxprime,t),f>u+i*s*o||g&&f>=l)return y(x,s,l);if(Math.abs(h)<=-a*o)return s;if(h>=0)return y(s,x,f);l=f,x=s,s*=2}return s}function Ot(e,t,r){var a,u,f,n={x:t.slice(),fx:0,fxprime:t.slice()},s={x:t.slice(),fx:0,fxprime:t.slice()},i=t.slice(),o=1;f=(r=r||{}).maxIterations||20*t.length,n.fx=e(n.x,n.fxprime),K(a=n.fxprime.slice(),n.fxprime,-1);for(var l=0;l<f;++l){if(o=Ct(e,a,n,s,o),r.history&&r.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:o}),o){E(i,1,s.fxprime,-1,n.fxprime);var h=G(n.fxprime,n.fxprime);E(a,Math.max(0,G(i,s.fxprime)/h),a,-1,s.fxprime),u=n,n=s,s=u}else K(a,n.fxprime,-1);if(J(n.fxprime)<=1e-5)break}return r.history&&r.history.push({x:n.x.slice(),fx:n.fx,fxprime:n.fxprime.slice(),alpha:o}),n}var xt=1e-10;function $(e,t){var u,r=function Ft(e){for(var t=[],r=0;r<e.length;++r)for(var n=r+1;n<e.length;++n)for(var s=yt(e[r],e[n]),i=0;i<s.length;++i){var a=s[i];a.parentIndex=[r,n],t.push(a)}return t}(e),n=r.filter(function(A){return function St(e,t){for(var r=0;r<t.length;++r)if(C(e,t[r])>t[r].radius+xt)return!1;return!0}(A,e)}),s=0,i=0,a=[];if(n.length>1){var o=dt(n);for(u=0;u<n.length;++u){var f=n[u];f.angle=Math.atan2(f.x-o.x,f.y-o.y)}n.sort(function(A,I){return I.angle-A.angle});var l=n[n.length-1];for(u=0;u<n.length;++u){var h=n[u];i+=(l.x+h.x)*(h.y-l.y);for(var x={x:(h.x+l.x)/2,y:(h.y+l.y)/2},y=null,g=0;g<h.parentIndex.length;++g)if(l.parentIndex.indexOf(h.parentIndex[g])>-1){var v=e[h.parentIndex[g]],d=Math.atan2(h.x-v.x,h.y-v.y),c=Math.atan2(l.x-v.x,l.y-v.y),M=c-d;M<0&&(M+=2*Math.PI);var w=c-M/2,b=C(x,{x:v.x+v.radius*Math.sin(w),y:v.y+v.radius*Math.cos(w)});b>2*v.radius&&(b=2*v.radius),(null===y||y.width>b)&&(y={circle:v,width:b,p1:h,p2:l})}null!==y&&(a.push(y),s+=q(y.circle.radius,y.width),l=h)}}else{var m=e[0];for(u=1;u<e.length;++u)e[u].radius<m.radius&&(m=e[u]);var z=!1;for(u=0;u<e.length;++u)if(C(e[u],m)>Math.abs(m.radius-e[u].radius)){z=!0;break}z?s=i=0:(s=m.radius*m.radius*Math.PI,a.push({circle:m,p1:{x:m.x,y:m.y+m.radius},p2:{x:m.x-xt,y:m.y+m.radius},width:2*m.radius}))}return i/=2,t&&(t.area=s+i,t.arcArea=s,t.polygonArea=i,t.arcs=a,t.innerPoints=n,t.intersectionPoints=r),s+i}function q(e,t){return e*e*Math.acos(1-t/e)-(e-t)*Math.sqrt(t*(2*e-t))}function C(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))}function ct(e,t,r){if(r>=e+t)return 0;if(r<=Math.abs(e-t))return Math.PI*Math.min(e,t)*Math.min(e,t);var s=t-(r*r-e*e+t*t)/(2*r);return q(e,e-(r*r-t*t+e*e)/(2*r))+q(t,s)}function yt(e,t){var r=C(e,t),n=e.radius,s=t.radius;if(r>=n+s||r<=Math.abs(n-s))return[];var i=(n*n-s*s+r*r)/(2*r),a=Math.sqrt(n*n-i*i),u=e.x+i*(t.x-e.x)/r,o=e.y+i*(t.y-e.y)/r,f=a/r*-(t.y-e.y),l=a/r*-(t.x-e.x);return[{x:u+f,y:o-l},{x:u-f,y:o+l}]}function dt(e){for(var t={x:0,y:0},r=0;r<e.length;++r)t.x+=e[r].x,t.y+=e[r].y;return t.x/=e.length,t.y/=e.length,t}var mt=1e-10;function _(e,t,r){return Math.min(e,t)*Math.min(e,t)*Math.PI<=r+mt?Math.abs(e-t):function It(e,t,r,n){var s=(n=n||{}).maxIterations||100,i=n.tolerance||1e-10,a=e(t),u=e(r),o=r-t;if(a*u>0)throw"Initial bisect points must have opposite signs";if(0===a)return t;if(0===u)return r;for(var f=0;f<s;++f){var l=t+(o/=2),h=e(l);if(h*a>=0&&(t=l),Math.abs(o)<i||0===h)return l}return t+o}(function(n){return ct(e,t,n)-r},0,e+t)}function Vt(e,t){var r=function Nt(e,t){for(var i,r=t&&t.lossFunction?t.lossFunction:j,n={},s={},a=0;a<e.length;++a){var u=e[a];1==u.sets.length&&(n[i=u.sets[0]]={x:1e10,y:1e10,rowid:n.length,size:u.size,radius:Math.sqrt(u.size/Math.PI)},s[i]=[])}for(e=e.filter(function(F){return 2==F.sets.length}),a=0;a<e.length;++a){var o=e[a],f=o.hasOwnProperty("weight")?o.weight:1,l=o.sets[0],h=o.sets[1];o.size+mt>=Math.min(n[l].size,n[h].size)&&(f=0),s[l].push({set:h,size:o.size,weight:f}),s[h].push({set:l,size:o.size,weight:f})}var x=[];for(i in s)if(s.hasOwnProperty(i)){var y=0;for(a=0;a<s[i].length;++a)y+=s[i][a].size*s[i][a].weight;x.push({set:i,size:y})}function g(F,L){return L.size-F.size}x.sort(g);var v={};function d(F){return F.set in v}function c(F,L){n[L].x=F.x,n[L].y=F.y,v[L]=!0}for(c({x:0,y:0},x[0].set),a=1;a<x.length;++a){var M=x[a].set,w=s[M].filter(d);if(i=n[M],w.sort(g),0===w.length)throw"ERROR: missing pairwise overlap information";for(var b=[],m=0;m<w.length;++m){var z=n[w[m].set],A=_(i.radius,z.radius,w[m].size);b.push({x:z.x+A,y:z.y}),b.push({x:z.x-A,y:z.y}),b.push({y:z.y+A,x:z.x}),b.push({y:z.y-A,x:z.x});for(var I=m+1;I<w.length;++I)for(var T=n[w[I].set],S=_(i.radius,T.radius,w[I].size),k=yt({x:z.x,y:z.y,radius:A},{x:T.x,y:T.y,radius:S}),D=0;D<k.length;++D)b.push(k[D])}var P=1e50,N=b[0];for(m=0;m<b.length;++m){n[M].x=b[m].x,n[M].y=b[m].y;var U=r(n,e);U<P&&(P=U,N=b[m])}c(N,M)}return n}(e,t),n=t.lossFunction||j;if(e.length>=8){var s=function Gt(e,t){var i,r=(t=t||{}).restarts||10,n=[],s={};for(i=0;i<e.length;++i){var a=e[i];1==a.sets.length&&(s[a.sets[0]]=n.length,n.push(a))}var u=function kt(e,t,r){var n=gt(t.length,t.length),s=gt(t.length,t.length);return e.filter(function(i){return 2==i.sets.length}).map(function(i){var a=r[i.sets[0]],u=r[i.sets[1]],l=_(Math.sqrt(t[a].size/Math.PI),Math.sqrt(t[u].size/Math.PI),i.size);n[a][u]=n[u][a]=l;var h=0;i.size+1e-10>=Math.min(t[a].size,t[u].size)?h=1:i.size<=1e-10&&(h=-1),s[a][u]=s[u][a]=h}),{distances:n,constraints:s}}(e,n,s),o=u.distances,f=u.constraints,l=J(o.map(J))/o.length;o=o.map(function(M){return M.map(function(w){return w/l})});var x,y,h=function(M,w){return function Et(e,t,r,n){var i,s=0;for(i=0;i<t.length;++i)t[i]=0;for(i=0;i<r.length;++i)for(var a=e[2*i],u=e[2*i+1],o=i+1;o<r.length;++o){var f=e[2*o],l=e[2*o+1],h=r[i][o],x=n[i][o],y=(f-a)*(f-a)+(l-u)*(l-u),g=Math.sqrt(y),v=y-h*h;x>0&&g<=h||x<0&&g>=h||(s+=2*v*v,t[2*i]+=4*v*(a-f),t[2*i+1]+=4*v*(u-l),t[2*o]+=4*v*(f-a),t[2*o+1]+=4*v*(l-u))}return s}(M,w,o,f)};for(i=0;i<r;++i)y=Ot(h,X(2*o.length).map(Math.random),t),(!x||y.fx<x.fx)&&(x=y);var v=x.x,d={};for(i=0;i<n.length;++i){var c=n[i];d[c.sets[0]]={x:v[2*i]*l,y:v[2*i+1]*l,radius:Math.sqrt(c.size/Math.PI)}}if(t.history)for(i=0;i<t.history.length;++i)K(t.history[i].x,l);return d}(e,t);n(s,e)+1e-8<n(r,e)&&(r=s)}return r}function j(e,t){for(var r=0,s=0;s<t.length;++s){var a,i=t[s];if(1!=i.sets.length){if(2==i.sets.length){var u=e[i.sets[0]],o=e[i.sets[1]];a=ct(u.radius,o.radius,C(u,o))}else a=$(i.sets.map(function(h){return e[h]}));r+=(i.hasOwnProperty("weight")?i.weight:1)*(a-i.size)*(a-i.size)}}return r}function Ht(e,t,r){var n;if(e.sort(null===r?function(v,d){return d.radius-v.radius}:r),e.length>0){var s=e[0].x,i=e[0].y;for(n=0;n<e.length;++n)e[n].x-=s,e[n].y-=i}if(2==e.length&&C(e[0],e[1])<Math.abs(e[1].radius-e[0].radius)&&(e[1].x=e[0].x+e[0].radius-e[1].radius-1e-10,e[1].y=e[0].y),e.length>1){var l,h,u=Math.atan2(e[1].x,e[1].y)-t,o=Math.cos(u),f=Math.sin(u);for(n=0;n<e.length;++n)e[n].x=o*(l=e[n].x)-f*(h=e[n].y),e[n].y=f*l+o*h}if(e.length>2){for(var x=Math.atan2(e[2].x,e[2].y)-t;x<0;)x+=2*Math.PI;for(;x>2*Math.PI;)x-=2*Math.PI;if(x>Math.PI){var y=e[1].y/(1e-10+e[1].x);for(n=0;n<e.length;++n){var g=(e[n].x+y*e[n].y)/(1+y*y);e[n].x=2*g-e[n].x,e[n].y=2*g*y-e[n].y}}}}function tt(e){var t=function(r){return{max:Math.max.apply(null,e.map(function(i){return i[r]+i.radius})),min:Math.min.apply(null,e.map(function(i){return i[r]-i.radius}))}};return{xRange:t("x"),yRange:t("y")}}function nt(e,t,r){var s,i,n=t[0].radius-C(t[0],e);for(s=1;s<t.length;++s)(i=t[s].radius-C(t[s],e))<=n&&(n=i);for(s=0;s<r.length;++s)(i=C(r[s],e)-r[s].radius)<=n&&(n=i);return n}function pt(e,t){var n,r=[];for(n=0;n<e.length;++n){var s=e[n];r.push({x:s.x,y:s.y}),r.push({x:s.x+s.radius/2,y:s.y}),r.push({x:s.x-s.radius/2,y:s.y}),r.push({x:s.x,y:s.y+s.radius/2}),r.push({x:s.x,y:s.y-s.radius/2})}var i=r[0],a=nt(r[0],e,t);for(n=1;n<r.length;++n){var u=nt(r[n],e,t);u>=a&&(i=r[n],a=u)}var o=vt(function(x){return-1*nt({x:x[0],y:x[1]},e,t)},[i.x,i.y],{maxIterations:500,minErrorDelta:1e-10}).x,f={x:o[0],y:o[1]},l=!0;for(n=0;n<e.length;++n)if(C(f,e[n])>e[n].radius){l=!1;break}for(n=0;n<t.length;++n)if(C(f,t[n])<t[n].radius){l=!1;break}if(!l)if(1==e.length)f={x:e[0].x,y:e[0].y};else{var h={};$(e,h),f=0===h.arcs.length?{x:0,y:-1e3,disjoint:!0}:1==h.arcs.length?{x:h.arcs[0].circle.x,y:h.arcs[0].circle.y}:t.length?pt(e,[]):dt(h.arcs.map(function(x){return x.p1}))}return f}function Mt(e,t){for(var r={},n=function bt(e){var t={},r=[];for(var n in e)r.push(n),t[n]=[];for(var s=0;s<r.length;s++)for(var i=e[r[s]],a=s+1;a<r.length;++a){var u=e[r[a]],o=C(i,u);o+u.radius<=i.radius+1e-10?t[r[a]].push(r[s]):o+i.radius<=u.radius+1e-10&&t[r[s]].push(r[a])}return t}(e),s=0;s<t.length;++s){for(var i=t[s].sets,a={},u={},o=0;o<i.length;++o){a[i[o]]=!0;for(var f=n[i[o]],l=0;l<f.length;++l)u[f[l]]=!0}var h=[],x=[];for(var y in e)y in a?h.push(e[y]):y in u||x.push(e[y]);var g=pt(h,x);r[i]=g,g.disjoint&&t[s].size>0&&console.log("WARNING: area "+i+" not represented on screen")}return r}R(693);class Y extends at.F{constructor(){super(...arguments),Object.defineProperty(this,"_sets",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(ot.W.new(this._root,{}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(ot.W.new(this._root,{}))}),Object.defineProperty(this,"hoverGraphics",{enumerable:!0,configurable:!0,writable:!0,value:this.slicesContainer.children.push(Z.T.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_hovered",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()})}_afterNew(){this._defaultThemes.push(At.new(this._root)),this.fields.push("intersections","category","fill"),super._afterNew()}makeSlice(t){const r=this.slicesContainer.children.push(this.slices.make());return r.events.on("pointerover",n=>{this._hovered=n.target,this._updateHover()}),r.events.on("pointerout",()=>{this._hovered=void 0,this.hoverGraphics.hide()}),r.on("fill",()=>{this.updateLegendMarker(t)}),r.on("stroke",()=>{this.updateLegendMarker(t)}),r._setDataItem(t),t.set("slice",r),this.slices.push(r),r}_updateHover(){if(this._hovered){const t=this.hoverGraphics;t.set("svgPath",this._hovered.get("svgPath")),t.show(),t.toFront()}}makeLabel(t){const r=this.labelsContainer.children.push(this.labels.make());return r._setDataItem(t),t.set("label",r),this.labels.push(r),r}_makeSlices(){return new ft.o(ut.YS.new({}),()=>Z.T._new(this._root,{themeTags:lt.Fy(this.slices.template.get("themeTags",[]),["venn","series"])},[this.slices.template]))}_makeLabels(){return new ft.o(ut.YS.new({}),()=>Rt._._new(this._root,{themeTags:lt.Fy(this.labels.template.get("themeTags",[]),["venn","series"])},[this.labels.template]))}processDataItem(t){if(super.processDataItem(t),null==t.get("fill")){let r=this.get("colors");r&&t.setRaw("fill",r.next())}this.makeSlice(t),this.makeLabel(t)}_prepareChildren(){if(super._prepareChildren(),this._valuesDirty||this._sizeDirty){const t=[];V.S6(this.dataItems,n=>{const s={},i=n.get("intersections");s.sets=i||[n.get("category")],s.size=n.get("valueWorking"),s.size>0&&t.push(s)});const r=t.toString();if(this._sets=r,t.length>0){let n=function Lt(e,t){(t=t||{}).maxIterations=t.maxIterations||500;var r=t.initialLayout||Vt,n=t.lossFunction||j;e=function Tt(e){e=e.slice();var n,s,i,a,t=[],r={};for(n=0;n<e.length;++n){var u=e[n];1==u.sets.length?t.push(u.sets[0]):2==u.sets.length&&(r[[i=u.sets[0],a=u.sets[1]]]=!0,r[[a,i]]=!0)}for(t.sort(function(o,f){return o>f}),n=0;n<t.length;++n)for(i=t[n],s=n+1;s<t.length;++s)[i,a=t[s]]in r||e.push({sets:[i,a],size:0});return e}(e);var u,s=r(e,t),i=[],a=[];for(u in s)s.hasOwnProperty(u)&&(i.push(s[u].x),i.push(s[u].y),a.push(u));for(var l=vt(function(x){for(var y={},g=0;g<a.length;++g){var v=a[g];y[v]={x:x[2*g],y:x[2*g+1],radius:s[v].radius}}return n(y,e)},i,t).x,h=0;h<a.length;++h)s[u=a[h]].x=l[2*h],s[u].y=l[2*h+1];return s}(t);n=function Wt(e,t,r){null===t&&(t=Math.PI/2);var s,i,n=[];for(i in e)if(e.hasOwnProperty(i)){var a=e[i];n.push({x:a.x,y:a.y,radius:a.radius,setid:i})}var u=function Bt(e){function t(f){return f.parent!==f&&(f.parent=t(f.parent)),f.parent}e.map(function(f){f.parent=f});for(var n=0;n<e.length;++n)for(var s=n+1;s<e.length;++s){var i=e[n].radius+e[s].radius;C(e[n],e[s])+1e-10<i&&(l=e[n],h=void 0,h=t(e[s]),x=t(l),h.parent=x)}var l,h,x,u,a={};for(n=0;n<e.length;++n)(u=t(e[n]).parent.setid)in a||(a[u]=[]),a[u].push(e[n]);e.map(function(f){delete f.parent});var o=[];for(u in a)a.hasOwnProperty(u)&&o.push(a[u]);return o}(n);for(s=0;s<u.length;++s){Ht(u[s],t,r);var o=tt(u[s]);u[s].size=(o.xRange.max-o.xRange.min)*(o.yRange.max-o.yRange.min),u[s].bounds=o}u.sort(function(g,v){return v.size-g.size});var f=(n=u[0]).bounds,l=(f.xRange.max-f.xRange.min)/50;function h(g,v,d){if(g){var M,w,b,c=g.bounds;v?M=f.xRange.max-c.xRange.min+l:(M=f.xRange.max-c.xRange.max,(b=(c.xRange.max-c.xRange.min)/2-(f.xRange.max-f.xRange.min)/2)<0&&(M+=b)),d?w=f.yRange.max-c.yRange.min+l:(w=f.yRange.max-c.yRange.max,(b=(c.yRange.max-c.yRange.min)/2-(f.yRange.max-f.yRange.min)/2)<0&&(w+=b));for(var m=0;m<g.length;++m)g[m].x+=M,g[m].y+=w,n.push(g[m])}}for(var x=1;x<u.length;)h(u[x],!0,!1),h(u[x+1],!1,!0),h(u[x+2],!0,!0),x+=3,f=tt(n);var y={};for(s=0;s<n.length;++s)y[n[s].setid]=n[s];return y}(n,null,null),n=function Qt(e,t,r,n){var s=[],i=[];for(var a in e)e.hasOwnProperty(a)&&(i.push(a),s.push(e[a]));t-=2*n,r-=2*n;var u=tt(s),o=u.xRange,f=u.yRange;if(o.max==o.min||f.max==f.min)return console.log("not scaling solution: zero size detected"),e;for(var x=Math.min(r/(f.max-f.min),t/(o.max-o.min)),y=(t-(o.max-o.min)*x)/2,g=(r-(f.max-f.min)*x)/2,v={},d=0;d<s.length;++d){var c=s[d];v[i[d]]={radius:x*c.radius,x:n+y+(c.x-o.min)*x,y:n+g+(c.y-f.min)*x}}return v}(n,this.innerWidth(),this.innerHeight(),0);const s={};for(let a in n){let u=n[a],o=u.radius;const f=this.getDataItemByCategory(a);if(f){const l=f.get("slice"),h=f.get("fill");l._setDefault("fill",h),l._setDefault("stroke",h),this.updateLegendMarker(f),l.set("svgPath","M"+u.x+","+u.y+" m -"+o+", 0 a "+o+","+o+" 0 1,1 "+2*o+",0 a "+o+","+o+" 0 1,1 -"+2*o+",0"),s[a]=u}}let i=Mt(s,t);V.S6(this.dataItems,a=>{let u=a.get("category"),o=i[u];const f=a.get("intersections");if(f&&(u=f.toString(),o=i[u],o)){let l=f,h=[];for(let v=0;v<l.length;v++)h.push(s[l[v]]);let x=function rt(e){var t={};$(e,t);var r=t.arcs;if(0===r.length)return"M 0 0";if(1==r.length){var n=r[0].circle;return function Yt(e,t,r){var n=[];return n.push("\nM",e,t),n.push("\nm",-r,0),n.push("\na",r,r,0,1,0,2*r,0),n.push("\na",r,r,0,1,0,2*-r,0),n.join(" ")}(n.x,n.y,n.radius)}for(var s=["\nM",r[0].p2.x,r[0].p2.y],i=0;i<r.length;++i){var a=r[i],u=a.circle.radius;s.push("\nA",u,u,0,a.width>u?1:0,1,a.p1.x,a.p1.y)}return s.join(" ")}(h),y=a.get("slice");const g=a.get("fill");y._setDefault("fill",g),y._setDefault("stroke",g),y.setAll({svgPath:x})}o&&a.get("label").setAll({x:o.x,y:o.y}),this.updateLegendValue(a)})}this._updateHover()}}getDataItemByCategory(t){return V.sE(this.dataItems,r=>r.get("category")==t)}showDataItem(t,r){const n=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,it.mG)(this,void 0,void 0,function*(){const s=[n.showDataItem.call(this,t,r)];ht.hj(r)||(r=this.get("stateAnimationDuration",0));const i=this.get("stateAnimationEasing");let a=t.get("value");const u=t.animate({key:"valueWorking",to:a,duration:r,easing:i});u&&s.push(u.waitForStop());const o=t.get("label");o&&s.push(o.show(r));const f=t.get("slice");f&&s.push(f.show(r));const l=t.get("intersections");if(l&&V.S6(l,h=>{const x=this.getDataItemByCategory(h);x&&x.isHidden()&&this.showDataItem(x,r)}),!l){const h=t.get("category");V.S6(this.dataItems,x=>{const y=x.get("intersections");if(x!=t&&y){let g=!0;V.S6(y,v=>{const d=this.getDataItemByCategory(v);d&&d.isHidden()&&(g=!1)}),g&&-1!=y.indexOf(h)&&x.isHidden()&&this.showDataItem(x,r)}})}yield Promise.all(s)})}hideDataItem(t,r){const n=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,it.mG)(this,void 0,void 0,function*(){const s=[n.hideDataItem.call(this,t,r)],i=this.states.create("hidden",{});ht.hj(r)||(r=i.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const a=i.get("stateAnimationEasing",this.get("stateAnimationEasing")),u=t.animate({key:"valueWorking",to:0,duration:r,easing:a});u&&s.push(u.waitForStop());const o=t.get("label");o&&s.push(o.hide(r));const f=t.get("slice");f&&(s.push(f.hide(r)),f.hideTooltip()),t.get("intersections")||V.S6(this.dataItems,l=>{const h=l.get("intersections");l!=t&&h&&-1!=h.indexOf(t.get("category"))&&this.hideDataItem(l,r)}),yield Promise.all(s)})}disposeDataItem(t){super.disposeDataItem(t);let r=t.get("label");r&&(this.labels.removeValue(r),r.dispose());let n=t.get("slice");n&&(this.slices.removeValue(n),n.dispose())}updateLegendMarker(t){const r=t.get("slice");if(r){const n=t.get("legendDataItem");if(n){const s=n.get("markerRectangle");V.S6(Z.u,i=>{s.set(i,r.get(i))})}}}hoverDataItem(t){const r=t.get("slice");r&&!r.isHidden()&&r.hover()}unhoverDataItem(t){const r=t.get("slice");r&&r.unhover()}}Object.defineProperty(Y,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Venn"}),Object.defineProperty(Y,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:at.F.classNames.concat([Y.className])})}}]);