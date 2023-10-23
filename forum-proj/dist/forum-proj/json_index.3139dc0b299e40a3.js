"use strict";(self.webpackChunkforum_proj=self.webpackChunkforum_proj||[]).push([[875],{1355:(Ot,U,t)=>{t.d(U,{Bullet:()=>Z.g,Button:()=>K.z,Chart:()=>mt.k,Circle:()=>q.C,CirclePattern:()=>M,ColorSet:()=>Nt.U,Component:()=>tt.w,Container:()=>x.W,Ellipse:()=>_.P,Entity:()=>J.JH,Gradient:()=>Q.p,Graphics:()=>N.T,GridLayout:()=>et.M,HeatLegend:()=>S,HorizontalLayout:()=>st.G,InterfaceColors:()=>Lt.v,Label:()=>W._,Layout:()=>it.A,Legend:()=>lt.D,Line:()=>nt.x,LinePattern:()=>F,LinearGradient:()=>E.o,Modal:()=>$.u,PathPattern:()=>V,Pattern:()=>b.c,Picture:()=>ot.t,PicturePattern:()=>Tt.v,PointedRectangle:()=>ht.i,RadialGradient:()=>A,RadialLabel:()=>ct.x,RadialText:()=>dt.f,Rectangle:()=>ut.A,RectanglePattern:()=>I,RoundedRectangle:()=>B.c,Scrollbar:()=>H.L,SerialChart:()=>pt.j,Series:()=>yt.F,Slice:()=>gt.p,Slider:()=>R,Sprite:()=>ft.j,SpriteResizer:()=>xt.b,Star:()=>w,Text:()=>bt.x,Tick:()=>vt.d,Tooltip:()=>Y.u,Triangle:()=>D,VerticalLayout:()=>Ct.Z});var $=t(7046),J=t(8271),Z=t(719),K=t(5854),q=t(9762),_=t(6415),N=t(314),L=t(7166);class w extends N.T{_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("spikes"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const a=this._display,s=this.get("radius",0),e=L.Iy(this.get("innerRadius",0),s),r=this.get("spikes",0),i=Math.PI/r;let l=Math.PI/2*3;a.moveTo(0,-s);for(let h=0;h<r;h++)a.lineTo(Math.cos(l)*s,Math.sin(l)*s),l+=i,a.lineTo(Math.cos(l)*e,Math.sin(l)*e),l+=i;a.lineTo(0,-s),a.closePath()}}}Object.defineProperty(w,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Star"}),Object.defineProperty(w,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:N.T.classNames.concat([w.className])});var tt=t(3419),x=t(7970),et=t(7879),W=t(1705),m=t(1872),B=t(1519),at=t(5344),rt=t(7379),O=t(8230),Y=t(691),E=t(8478),j=t(8256);class S extends x.W{constructor(){super(...arguments),Object.defineProperty(this,"labelContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.W.new(this._root,{}))}),Object.defineProperty(this,"markerContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.W.new(this._root,{}))}),Object.defineProperty(this,"startLabel",{enumerable:!0,configurable:!0,writable:!0,value:this.labelContainer.children.push(W._.new(this._root,{themeTags:["start"]}))}),Object.defineProperty(this,"endLabel",{enumerable:!0,configurable:!0,writable:!0,value:this.labelContainer.children.push(W._.new(this._root,{themeTags:["end"]}))}),Object.defineProperty(this,"markers",{enumerable:!0,configurable:!0,writable:!0,value:new rt.o(at.YS.new({}),()=>B.c._new(this._root,{themeTags:L.Fy(this.markers.template.get("themeTags",[]),[this.get("orientation"),"heatlegend","marker"])},[this.markers.template]))})}_afterNew(){this._settings.themeTags=L.Fy(this._settings.themeTags,["heatlegend",this._settings.orientation]),super._afterNew(),this.set("tooltip",Y.u.new(this._root,{themeTags:["heatlegend"]}))}makeMarker(){const a=this.markers.make();return a.states.create("disabled",{}),a}showValue(a,s,e){const r=this.getTooltip();if(r&&j.hj(a)){const i=this.get("startValue",0),h=(a-i)/(this.get("endValue",1)-i),c=this.get("startColor"),n=this.get("endColor");let o;s||(s=this.getNumberFormatter().format(a)),e||(e=O.Il.interpolate(h,c,n)),r.label.set("text",s),o="vertical"==this.get("orientation")?this.markerContainer.toGlobal({x:0,y:this.innerHeight()*(1-h)}):this.markerContainer.toGlobal({x:this.innerWidth()*h,y:0});let d=r.get("background");d&&d.set("fill",O.Il.interpolate(h,c,n)),r.set("pointTo",o),r.show()}}_prepareChildren(){super._prepareChildren();const a=this.labelContainer,s=this.get("orientation"),e=this.startLabel,r=this.endLabel,i=this.getTooltip();if(this.isDirty("orientation")&&("vertical"==s?(this.markerContainer.setAll({layout:this._root.verticalLayout,height:m.AQ}),this.set("layout",this._root.horizontalLayout),e.setAll({y:m.AQ,x:void 0,centerY:m.AQ,centerX:m.AQ}),r.setAll({y:0,x:void 0,centerY:0,centerX:m.AQ}),a.setAll({height:m.AQ,width:void 0}),i&&i.set("pointerOrientation","horizontal")):(this.markerContainer.setAll({layout:this._root.horizontalLayout,width:m.AQ}),this.set("layout",this._root.verticalLayout),e.setAll({x:0,y:void 0,centerX:0,centerY:0}),r.setAll({x:m.AQ,y:void 0,centerX:m.AQ,centerY:0}),a.setAll({width:m.AQ,height:void 0}),i&&i.set("pointerOrientation","vertical"))),this.isDirty("stepCount")){const l=this.get("stepCount",1),h=this.get("startColor"),c=this.get("endColor");if(this.markerContainer.children.clear(),l>1)for(let n=0;n<l;n++){const o=this.makeMarker();"vertical"==s?this.markerContainer.children.moveValue(o,0):this.markerContainer.children.push(o),h&&c&&o.set("fill",O.Il.interpolate(n/l,h,c))}else if(1==l){const n=this.makeMarker();this.markerContainer.children.push(n);const o=E.o.new(this._root,{stops:[{color:h},{color:c}]});if("vertical"==s){o.set("rotation",90);let d=o.get("stops");d&&d.reverse()}else o.set("rotation",0);h&&c&&n.set("fillGradient",o)}}(this.isDirty("startText")||this.isDirty("startValue"))&&e.set("text",this.get("startText",this.getNumberFormatter().format(this.get("startValue",0)))),(this.isDirty("endText")||this.isDirty("endValue"))&&r.set("text",this.get("endText",this.getNumberFormatter().format(this.get("endValue",1))))}}Object.defineProperty(S,"className",{enumerable:!0,configurable:!0,writable:!0,value:"HeatLegend"}),Object.defineProperty(S,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:x.W.classNames.concat([S.className])});var st=t(4113),it=t(2589),lt=t(8453),nt=t(4905),ot=t(69),ht=t(1136),ct=t(5129),dt=t(6589),ut=t(4381);class D extends N.T{_beforeChanged(){super._beforeChanged(),(this.isDirty("width")||this.isDirty("height")||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){super._changed(),this._clear&&!this.get("draw")&&this._draw()}_draw(){const a=this.width(),s=this.height(),e=this._display;e.moveTo(-a/2,s/2),e.lineTo(0,-s/2),e.lineTo(a/2,s/2),e.lineTo(-a/2,s/2),e.closePath()}_updateSize(){this.markDirty(),this._clear=!0}}Object.defineProperty(D,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Triangle"}),Object.defineProperty(D,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:N.T.classNames.concat([D.className])});var H=t(9833);class R extends H.L{_afterNew(){this._addOrientationClass(),super._afterNew(),this.endGrip.setPrivate("visible",!1),this.thumb.setPrivate("visible",!1)}updateGrips(){super.updateGrips();const a=this.startGrip;this.endGrip.setAll({x:a.x(),y:a.y()}),this.setRaw("end",this.get("start"))}}Object.defineProperty(R,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slider"}),Object.defineProperty(R,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:H.L.classNames.concat([R.className])});var gt=t(3792),ft=t(4551),yt=t(6433),mt=t(2633),pt=t(4806),bt=t(8740),vt=t(1564),Ct=t(9102),Q=t(4476),Pt=t(9660);class A extends Q.p{getFill(a){const s=this.getBounds(a);let e=0,r=0;const n=(s.right||0)-(s.left||0),o=(s.bottom||0)-(s.top||0);let d=a.get("radius");j.hj(d)?(e=0,r=0):(d=Math.min(n,o)/2,e=n/2,r=o/2);let p=this.get("x"),v=this.get("y");null!=p&&(e=L.Iy(p,n)),null!=v&&(r=L.Iy(v,o));const g=this._root._renderer.createRadialGradient(e,r,0,e,r,d),u=this.get("stops");if(u){let f=0;Pt.S6(u,y=>{let T=y.offset;j.hj(T)||(T=f/(u.length-1));let z=y.opacity;j.hj(z)||(z=1);let P=y.color;if(P){const X=y.lighten;X&&(P=O.Il.lighten(P,X));const k=y.brighten;k&&(P=O.Il.brighten(P,k)),g.addColorStop(T,"rgba("+P.r+","+P.g+","+P.b+","+z+")")}f++})}return g}}Object.defineProperty(A,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialGradient"}),Object.defineProperty(A,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Q.p.classNames.concat([A.className])});var b=t(9990),G=t(5106);class M extends b.c{_beforeChanged(){super._beforeChanged(),this.isDirty("gap")&&(this._clear=!0)}_draw(){super._draw();const a=this.get("checkered",!1),s=this.get("centered",!0),e=this.get("gap",0),r=this.get("rotation",0);let i=this.get("width",100),l=this.get("height",100),h=this.get("radius",3),c=2*h+e,n=2*h+e,o=Math.round(i/c),d=Math.round(l/n);c=i/o,n=l/d,0!=r&&(this._display.x=c*G.mC(r),this._display.y=n*G.O$(r));const p=this.get("color"),v=this.get("colorOpacity");(p||v)&&this._display.beginFill(p,v);for(let g=0==r?0:2*-d;g<2*d;g++)for(let u=0==r?0:2*-o;u<2*o;u++)if(!a||1!=(1&g)&&1!=(1&u)||1==(1&g)&&1==(1&u)){let f=u*c,y=g*n;s&&(f+=c+e/2,y+=n+e/2),this._display.drawCircle(f-h,y-h,h)}a?(i=i/2-2*e,l=l/2-2*e):(i-=e,l-=e),(p||v)&&this._display.endFill()}}Object.defineProperty(M,"className",{enumerable:!0,configurable:!0,writable:!0,value:"CirclePattern"}),Object.defineProperty(M,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:b.c.classNames.concat([M.className])});class F extends b.c{_beforeChanged(){super._beforeChanged(),this.isDirty("gap")&&(this._clear=!0)}_draw(){super._draw();const a=this.get("width",100),s=this.get("height",100),e=this.get("gap",0),r=this.get("strokeWidth",1);if(e){let h=e+r,c=s/h;for(let n=-c;n<2*c;n++){const o=Math.round(n*h-h/2)+.5;this._display.moveTo(-a,o),this._display.lineTo(2*a,o)}}else this._display.moveTo(0,0),this._display.lineTo(a,0);this._display.lineStyle(r,this.get("color"),this.get("colorOpacity"));let i=this.get("strokeDasharray");j.hj(i)&&(i=i<.5?[0]:[i]),this._display.setLineDash(i);const l=this.get("strokeDashoffset");l&&this._display.setLineDashOffset(l),this._display.endStroke()}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"LinePattern"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:b.c.classNames.concat([F.className])});var Tt=t(4364);class I extends b.c{_beforeChanged(){super._beforeChanged(),this.isDirty("gap")&&(this._clear=!0)}_draw(){super._draw();const a=this.get("checkered",!1),s=this.get("centered",!0),e=this.get("gap",0),r=this.get("rotation",0);let i=this.get("width",100),l=this.get("height",100),h=this.get("maxWidth",5),c=this.get("maxHeight",5),n=h+e,o=c+e,d=Math.round(i/n),p=Math.round(l/o);n=i/d,o=l/p,0!=r&&(this._display.x=n/2*G.mC(r),this._display.y=-o/2*G.O$(r));for(let u=0==r?0:2*-p;u<2*p;u++)for(let f=0==r?0:2*-d;f<2*d;f++)if(!a||1!=(1&u)&&1!=(1&f)||1==(1&u)&&1==(1&f)){let y=f*n,T=u*o;s&&(y+=(n-h)/2,T+=(o-c)/2),this._display.drawRect(y,T,h,c)}a?(i=i/2-2*e,l=l/2-2*e):(i-=e,l-=e);const v=this.get("color"),g=this.get("colorOpacity");(v||g)&&(this._display.beginFill(v,g),this._display.endFill())}}Object.defineProperty(I,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RectanglePattern"}),Object.defineProperty(I,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:b.c.classNames.concat([I.className])});class V extends b.c{_beforeChanged(){super._beforeChanged(),this.isDirty("svgPath")&&(this._clear=!0)}_draw(){super._draw();const a=this.get("svgPath");null!=a&&this._display.svgPath(a);const s=this.get("color"),e=this.get("colorOpacity");(s||e)&&(this._display.beginFill(s,e),this._display.endFill())}}Object.defineProperty(V,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PathPattern"}),Object.defineProperty(V,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:b.c.classNames.concat([V.className])});var Nt=t(4005),Lt=t(3823),xt=t(7471)}}]);