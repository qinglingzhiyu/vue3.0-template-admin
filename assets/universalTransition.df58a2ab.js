import{_ as t,g as e,h as n,B as a,r,t as i,j as o,A as s,m as l,k as u,l as d,C as c,S as h,n as f,o as g,p,q as v,s as y,v as x,w as m,x as M,y as A,z as T,D as S,E as I,F as b,G as w,H as C,R as _,L as P,I as k,J as L,K as D,M as E,Z as R,N as z,O as G,P as B,Q as W,T as F,U as O,V,u as Z,W as j,X as N,Y as U,$ as q,a0 as H,a1 as K,a2 as Q,a3 as J,a4 as X,a5 as Y,a6 as $,a7 as tt,a8 as et,a9 as nt,aa as at,ab as rt,ac as it,ad as ot,ae as st,af as lt,ag as ut,ah as dt,ai as ct}from"./installCanvasRenderer.a5bf025d.js";var ht=function(a){function l(){return null!==a&&a.apply(this,arguments)||this}return t(l,a),l.prototype.makeElOption=function(t,a,l,u,c){var h=l.axis;"angle"===h.dim&&(this.animationThreshold=Math.PI/18);var f=h.polar,g=f.getOtherAxis(h).getExtent(),p=h.dataToCoord(a),v=u.get("type");if(v&&"none"!==v){var y=e(u),x=ft[v](h,f,p,g);x.style=y,t.graphicKey=x.type,t.pointer=x}var m=function(t,e,n,a,l){var u=e.axis,c=u.dataToCoord(t),h=a.getAngleAxis().getExtent()[0];h=h/180*Math.PI;var f,g,p,v=a.getRadiusAxis().getExtent();if("radius"===u.dim){var y=d();r(y,y,h),i(y,y,[a.cx,a.cy]),f=o([c,-l],y);var x=e.getModel("axisLabel").get("rotate")||0,m=s.innerTextLayout(h,x*Math.PI/180,-1);g=m.textAlign,p=m.textVerticalAlign}else{var M=v[1];f=a.coordToPoint([M+l,c]);var A=a.cx,T=a.cy;g=Math.abs(f[0]-A)/M<.3?"center":f[0]>A?"left":"right",p=Math.abs(f[1]-T)/M<.3?"middle":f[1]>T?"top":"bottom"}return{position:f,align:g,verticalAlign:p}}(a,l,0,f,u.get(["label","margin"]));n(t,l,u,c,m)},l}(a);var ft={line:function(t,e,n,a){return"angle"===t.dim?{type:"Line",shape:l(e.coordToPoint([a[0],n]),e.coordToPoint([a[1],n]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r:n}}},shadow:function(t,e,n,a){var r=Math.max(1,t.getBandWidth()),i=Math.PI/180;return"angle"===t.dim?{type:"Sector",shape:u(e.cx,e.cy,a[0],a[1],(-n-r/2)*i,(r/2-n)*i)}:{type:"Sector",shape:u(e.cx,e.cy,n-r/2,n+r/2,0,2*Math.PI)}}},gt=ht,pt=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t}return t(n,e),n.prototype.findAxisModel=function(t){var e;return this.ecModel.eachComponent(t,(function(t){t.getCoordSysModel()===this&&(e=t)}),this),e},n.type="polar",n.dependencies=["radiusAxis","angleAxis"],n.defaultOption={zlevel:0,z:0,center:["50%","50%"],radius:"80%"},n}(c),vt=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.getCoordSysModel=function(){return this.getReferringComponents("polar",h).models[0]},n.type="polarAxis",n}(c);f(vt,g);var yt=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t}return t(n,e),n.type="angleAxis",n}(vt),xt=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t}return t(n,e),n.type="radiusAxis",n}(vt),mt=function(e){function n(t,n){return e.call(this,"radius",t,n)||this}return t(n,e),n.prototype.pointToData=function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},n}(p);mt.prototype.dataToRadius=p.prototype.dataToCoord,mt.prototype.radiusToData=p.prototype.coordToData;var Mt=mt,At=v(),Tt=function(e){function n(t,n){return e.call(this,"angle",t,n||[0,360])||this}return t(n,e),n.prototype.pointToData=function(t,e){return this.polar.pointToData(t,e)["radius"===this.dim?0:1]},n.prototype.calculateCategoryInterval=function(){var t=this,e=t.getLabelModel(),n=t.scale,a=n.getExtent(),r=n.count();if(a[1]-a[0]<1)return 0;var i=a[0],o=t.dataToCoord(i+1)-t.dataToCoord(i),s=Math.abs(o),l=y(null==i?"":i+"",e.getFont(),"center","top"),u=Math.max(l.height,7)/s;isNaN(u)&&(u=1/0);var d=Math.max(0,Math.floor(u)),c=At(t.model),h=c.lastAutoInterval,f=c.lastTickCount;return null!=h&&null!=f&&Math.abs(h-d)<=1&&Math.abs(f-r)<=1&&h>d?d=h:(c.lastTickCount=r,c.lastAutoInterval=d),d},n}(p);Tt.prototype.dataToAngle=p.prototype.dataToCoord,Tt.prototype.angleToData=p.prototype.coordToData;var St=Tt,It=["radius","angle"];function bt(t){var e=t.seriesModel,n=t.polarModel;return n&&n.coordinateSystem||e&&e.coordinateSystem}var wt=function(){function t(t){this.dimensions=It,this.type="polar",this.cx=0,this.cy=0,this._radiusAxis=new Mt,this._angleAxis=new St,this.axisPointerEnabled=!0,this.name=t||"",this._radiusAxis.polar=this._angleAxis.polar=this}return t.prototype.containPoint=function(t){var e=this.pointToCoord(t);return this._radiusAxis.contain(e[0])&&this._angleAxis.contain(e[1])},t.prototype.containData=function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},t.prototype.getAxis=function(t){return this["_"+t+"Axis"]},t.prototype.getAxes=function(){return[this._radiusAxis,this._angleAxis]},t.prototype.getAxesByScale=function(t){var e=[],n=this._angleAxis,a=this._radiusAxis;return n.scale.type===t&&e.push(n),a.scale.type===t&&e.push(a),e},t.prototype.getAngleAxis=function(){return this._angleAxis},t.prototype.getRadiusAxis=function(){return this._radiusAxis},t.prototype.getOtherAxis=function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},t.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},t.prototype.getTooltipAxes=function(t){var e=null!=t&&"auto"!==t?this.getAxis(t):this.getBaseAxis();return{baseAxes:[e],otherAxes:[this.getOtherAxis(e)]}},t.prototype.dataToPoint=function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},t.prototype.pointToData=function(t,e){var n=this.pointToCoord(t);return[this._radiusAxis.radiusToData(n[0],e),this._angleAxis.angleToData(n[1],e)]},t.prototype.pointToCoord=function(t){var e=t[0]-this.cx,n=t[1]-this.cy,a=this.getAngleAxis(),r=a.getExtent(),i=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);a.inverse?i=o-360:o=i+360;var s=Math.sqrt(e*e+n*n);e/=s,n/=s;for(var l=Math.atan2(-n,e)/Math.PI*180,u=l<i?1:-1;l<i||l>o;)l+=360*u;return[s,l]},t.prototype.coordToPoint=function(t){var e=t[0],n=t[1]/180*Math.PI;return[Math.cos(n)*e+this.cx,-Math.sin(n)*e+this.cy]},t.prototype.getArea=function(){var t=this.getAngleAxis(),e=this.getRadiusAxis().getExtent().slice();e[0]>e[1]&&e.reverse();var n=t.getExtent(),a=Math.PI/180;return{cx:this.cx,cy:this.cy,r0:e[0],r:e[1],startAngle:-n[0]*a,endAngle:-n[1]*a,clockwise:t.inverse,contain:function(t,e){var n=t-this.cx,a=e-this.cy,r=n*n+a*a,i=this.r,o=this.r0;return r<=i*i&&r>=o*o}}},t.prototype.convertToPixel=function(t,e,n){return bt(e)===this?this.dataToPoint(n):null},t.prototype.convertFromPixel=function(t,e,n){return bt(e)===this?this.pointToData(n):null},t}();function Ct(t,e){var n=this,a=n.getAngleAxis(),r=n.getRadiusAxis();if(a.scale.setExtent(1/0,-1/0),r.scale.setExtent(1/0,-1/0),t.eachSeries((function(t){if(t.coordinateSystem===n){var e=t.getData();M(A(e,"radius"),(function(t){r.scale.unionExtentFromData(e,t)})),M(A(e,"angle"),(function(t){a.scale.unionExtentFromData(e,t)}))}})),T(a.scale,a.model),T(r.scale,r.model),"category"===a.type&&!a.onBand){var i=a.getExtent(),o=360/a.scale.count();a.inverse?i[1]+=o:i[1]-=o,a.setExtent(i[0],i[1])}}function _t(t,e){if(t.type=e.get("type"),t.scale=S(e),t.onBand=e.get("boundaryGap")&&"category"===t.type,t.inverse=e.get("inverse"),function(t){return"angleAxis"===t.mainType}(e)){t.inverse=t.inverse!==e.get("clockwise");var n=e.get("startAngle");t.setExtent(n,n+(t.inverse?-360:360))}e.axis=t,t.model=e}var Pt={dimensions:It,create:function(t,e){var n=[];return t.eachComponent("polar",(function(t,a){var r=new wt(a+"");r.update=Ct;var i=r.getRadiusAxis(),o=r.getAngleAxis(),s=t.findAxisModel("radiusAxis"),l=t.findAxisModel("angleAxis");_t(i,s),_t(o,l),function(t,e,n){var a=e.get("center"),r=n.getWidth(),i=n.getHeight();t.cx=x(a[0],r),t.cy=x(a[1],i);var o=t.getRadiusAxis(),s=Math.min(r,i)/2,l=e.get("radius");null==l?l=[0,"100%"]:m(l)||(l=[0,l]);var u=[x(l[0],s),x(l[1],s)];o.inverse?o.setExtent(u[1],u[0]):o.setExtent(u[0],u[1])}(r,t,e),n.push(r),t.coordinateSystem=r,r.model=t})),t.eachSeries((function(t){if("polar"===t.get("coordinateSystem")){var e=t.getReferringComponents("polar",h).models[0];t.coordinateSystem=e.coordinateSystem}})),n}},kt=["axisLine","axisLabel","axisTick","minorTick","splitLine","minorSplitLine","splitArea"];function Lt(t,e,n){e[1]>e[0]&&(e=e.slice().reverse());var a=t.coordToPoint([e[0],n]),r=t.coordToPoint([e[1],n]);return{x1:a[0],y1:a[1],x2:r[0],y2:r[1]}}function Dt(t){return t.getRadiusAxis().inverse?0:1}function Et(t){var e=t[0],n=t[t.length-1];e&&n&&Math.abs(Math.abs(e.coord-n.coord)-360)<1e-4&&t.pop()}var Rt=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t.axisPointerClass="PolarAxisPointer",t}return t(n,e),n.prototype.render=function(t,e){if(this.group.removeAll(),t.get("show")){var n=t.axis,a=n.polar,r=a.getRadiusAxis().getExtent(),i=n.getTicksCoords(),o=n.getMinorTicksCoords(),s=I(n.getViewLabels(),(function(t){t=b(t);var e=n.scale,a="ordinal"===e.type?e.getRawOrdinalNumber(t.tickValue):t.tickValue;return t.coord=n.dataToCoord(a),t}));Et(s),Et(i),M(kt,(function(e){!t.get([e,"show"])||n.scale.isBlank()&&"axisLine"!==e||zt[e](this.group,t,a,i,o,r,s)}),this)}},n.type="angleAxis",n}(w),zt={axisLine:function(t,e,n,a,r,i){var o,s=e.getModel(["axisLine","lineStyle"]),l=Dt(n),u=l?0:1;(o=0===i[u]?new C({shape:{cx:n.cx,cy:n.cy,r:i[l]},style:s.getLineStyle(),z2:1,silent:!0}):new _({shape:{cx:n.cx,cy:n.cy,r:i[l],r0:i[u]},style:s.getLineStyle(),z2:1,silent:!0})).style.fill=null,t.add(o)},axisTick:function(t,e,n,a,r,i){var o=e.getModel("axisTick"),s=(o.get("inside")?-1:1)*o.get("length"),l=i[Dt(n)],u=I(a,(function(t){return new P({shape:Lt(n,[l,l+s],t.coord)})}));t.add(k(u,{style:L(o.getModel("lineStyle").getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])})}))},minorTick:function(t,e,n,a,r,i){if(r.length){for(var o=e.getModel("axisTick"),s=e.getModel("minorTick"),l=(o.get("inside")?-1:1)*s.get("length"),u=i[Dt(n)],d=[],c=0;c<r.length;c++)for(var h=0;h<r[c].length;h++)d.push(new P({shape:Lt(n,[u,u+l],r[c][h].coord)}));t.add(k(d,{style:L(s.getModel("lineStyle").getLineStyle(),L(o.getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])}))}))}},axisLabel:function(t,e,n,a,r,i,o){var l=e.getCategories(!0),u=e.getModel("axisLabel"),d=u.get("margin"),c=e.get("triggerEvent");M(o,(function(a,r){var o=u,h=a.tickValue,f=i[Dt(n)],g=n.coordToPoint([f+d,a.coord]),p=n.cx,v=n.cy,y=Math.abs(g[0]-p)/f<.3?"center":g[0]>p?"left":"right",x=Math.abs(g[1]-v)/f<.3?"middle":g[1]>v?"top":"bottom";if(l&&l[h]){var m=l[h];D(m)&&m.textStyle&&(o=new E(m.textStyle,u,u.ecModel))}var M=new R({silent:s.isLabelSilent(e),style:z(o,{x:g[0],y:g[1],fill:o.getTextColor()||e.get(["axisLine","lineStyle","color"]),text:a.formattedLabel,align:y,verticalAlign:x})});if(t.add(M),c){var A=s.makeAxisEventDataBase(e);A.targetType="axisLabel",A.value=a.rawLabel,G(M).eventData=A}}),this)},splitLine:function(t,e,n,a,r,i){var o=e.getModel("splitLine").getModel("lineStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=0;d<a.length;d++){var c=l++%s.length;u[c]=u[c]||[],u[c].push(new P({shape:Lt(n,i,a[d].coord)}))}for(d=0;d<u.length;d++)t.add(k(u[d],{style:L({stroke:s[d%s.length]},o.getLineStyle()),silent:!0,z:e.get("z")}))},minorSplitLine:function(t,e,n,a,r,i){if(r.length){for(var o=e.getModel("minorSplitLine").getModel("lineStyle"),s=[],l=0;l<r.length;l++)for(var u=0;u<r[l].length;u++)s.push(new P({shape:Lt(n,i,r[l][u].coord)}));t.add(k(s,{style:o.getLineStyle(),silent:!0,z:e.get("z")}))}},splitArea:function(t,e,n,a,r,i){if(a.length){var o=e.getModel("splitArea").getModel("areaStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=Math.PI/180,c=-a[0].coord*d,h=Math.min(i[0],i[1]),f=Math.max(i[0],i[1]),g=e.get("clockwise"),p=1,v=a.length;p<=v;p++){var y=p===v?a[0].coord:a[p].coord,x=l++%s.length;u[x]=u[x]||[],u[x].push(new B({shape:{cx:n.cx,cy:n.cy,r0:h,r:f,startAngle:c,endAngle:-y*d,clockwise:g},silent:!0})),c=-y*d}for(p=0;p<u.length;p++)t.add(k(u[p],{style:L({fill:s[p%s.length]},o.getAreaStyle()),silent:!0}))}}},Gt=Rt,Bt=["axisLine","axisTickLabel","axisName"],Wt=["splitLine","splitArea","minorSplitLine"],Ft=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t.axisPointerClass="PolarAxisPointer",t}return t(n,e),n.prototype.render=function(t,e){if(this.group.removeAll(),t.get("show")){var n=this._axisGroup,a=this._axisGroup=new W;this.group.add(a);var r=t.axis,i=r.polar,o=i.getAngleAxis(),l=r.getTicksCoords(),u=r.getMinorTicksCoords(),d=o.getExtent()[0],c=r.getExtent(),h=function(t,e,n){return{position:[t.cx,t.cy],rotation:n/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}(i,t,d),f=new s(t,h);M(Bt,f.add,f),a.add(f.getGroup()),F(n,a,t),M(Wt,(function(e){t.get([e,"show"])&&!r.scale.isBlank()&&Ot[e](this.group,t,i,d,c,l,u)}),this)}},n.type="radiusAxis",n}(w),Ot={splitLine:function(t,e,n,a,r,i){var o=e.getModel("splitLine").getModel("lineStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=0;d<i.length;d++){var c=l++%s.length;u[c]=u[c]||[],u[c].push(new C({shape:{cx:n.cx,cy:n.cy,r:i[d].coord}}))}for(d=0;d<u.length;d++)t.add(k(u[d],{style:L({stroke:s[d%s.length],fill:null},o.getLineStyle()),silent:!0}))},minorSplitLine:function(t,e,n,a,r,i,o){if(o.length){for(var s=e.getModel("minorSplitLine").getModel("lineStyle"),l=[],u=0;u<o.length;u++)for(var d=0;d<o[u].length;d++)l.push(new C({shape:{cx:n.cx,cy:n.cy,r:o[u][d].coord}}));t.add(k(l,{style:L({fill:null},s.getLineStyle()),silent:!0}))}},splitArea:function(t,e,n,a,r,i){if(i.length){var o=e.getModel("splitArea").getModel("areaStyle"),s=o.get("color"),l=0;s=s instanceof Array?s:[s];for(var u=[],d=i[0].coord,c=1;c<i.length;c++){var h=l++%s.length;u[h]=u[h]||[],u[h].push(new B({shape:{cx:n.cx,cy:n.cy,r0:d,r:i[c].coord,startAngle:0,endAngle:2*Math.PI},silent:!0})),d=i[c].coord}for(c=0;c<u.length;c++)t.add(k(u[c],{style:L({fill:s[c%s.length]},o.getAreaStyle()),silent:!0}))}}};var Vt=Ft;function Zt(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function jt(t,e){return e.dim+t.model.componentIndex}function Nt(t,e,n){var a={},r=function(t){var e={};M(t,(function(t,n){var a=t.getData(),r=t.coordinateSystem,i=r.getBaseAxis(),o=jt(r,i),s=i.getExtent(),l="category"===i.type?i.getBandWidth():Math.abs(s[1]-s[0])/a.count(),u=e[o]||{bandWidth:l,remainedWidth:l,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},d=u.stacks;e[o]=u;var c=Zt(t);d[c]||u.autoWidthCount++,d[c]=d[c]||{width:0,maxWidth:0};var h=x(t.get("barWidth"),l),f=x(t.get("barMaxWidth"),l),g=t.get("barGap"),p=t.get("barCategoryGap");h&&!d[c].width&&(h=Math.min(u.remainedWidth,h),d[c].width=h,u.remainedWidth-=h),f&&(d[c].maxWidth=f),null!=g&&(u.gap=g),null!=p&&(u.categoryGap=p)}));var n={};return M(e,(function(t,e){n[e]={};var a=t.stacks,r=t.bandWidth,i=x(t.categoryGap,r),o=x(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-i)/(l+(l-1)*o);u=Math.max(u,0),M(a,(function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)})),u=(s-i)/(l+(l-1)*o),u=Math.max(u,0);var d,c=0;M(a,(function(t,e){t.width||(t.width=u),d=t,c+=t.width*(1+o)})),d&&(c-=d.width*o);var h=-c/2;M(a,(function(t,a){n[e][a]=n[e][a]||{offset:h,width:t.width},h+=t.width*(1+o)}))})),n}(O(e.getSeriesByType(t),(function(t){return!e.isSeriesFiltered(t)&&t.coordinateSystem&&"polar"===t.coordinateSystem.type})));e.eachSeriesByType(t,(function(t){if("polar"===t.coordinateSystem.type){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),o=jt(n,i),s=Zt(t),l=r[o][s],u=l.offset,d=l.width,c=n.getOtherAxis(i),h=t.coordinateSystem.cx,f=t.coordinateSystem.cy,g=t.get("barMinHeight")||0,p=t.get("barMinAngle")||0;a[s]=a[s]||[];for(var v=e.mapDimension(c.dim),y=e.mapDimension(i.dim),x=V(e,v),m="radius"!==i.dim||!t.get("roundCap",!0),M=c.dataToCoord(0),A=0,T=e.count();A<T;A++){var S=e.get(v,A),I=e.get(y,A),b=S>=0?"p":"n",w=M;x&&(a[s][I]||(a[s][I]={p:M,n:M}),w=a[s][I][b]);var C=void 0,_=void 0,P=void 0,k=void 0;if("radius"===c.dim){var L=c.dataToCoord(S)-M,D=i.dataToCoord(I);Math.abs(L)<g&&(L=(L<0?-1:1)*g),C=w,_=w+L,k=(P=D-u)-d,x&&(a[s][I][b]=_)}else{var E=c.dataToCoord(S,m)-M,R=i.dataToCoord(I);Math.abs(E)<p&&(E=(E<0?-1:1)*p),_=(C=R+u)+d,P=w,k=w+E,x&&(a[s][I][b]=k)}e.setItemLayout(A,{cx:h,cy:f,r0:C,r:_,startAngle:-P*Math.PI/180,endAngle:-k*Math.PI/180,clockwise:P>=k})}}}))}var Ut={startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:0}},qt={splitNumber:5},Ht=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=n.type,t}return t(n,e),n.type="polar",n}(q);function Kt(t){Z(j),w.registerAxisPointerClass("PolarAxisPointer",gt),t.registerCoordinateSystem("polar",Pt),t.registerComponentModel(pt),t.registerComponentView(Ht),N(t,"angle",yt,Ut),N(t,"radius",xt,qt),t.registerComponentView(Gt),t.registerComponentView(Vt),t.registerLayout(U(Nt,"bar"))}var Qt=H.CMD;function Jt(t,e){return Math.abs(t-e)<1e-5}function Xt(t){var e,n,a,r,i,o,s,l,u,d,c,h,f,g,p,v,y,x,m,M,A,T,S,I,b=t.data,w=t.len(),C=[],_=0,P=0,k=0,L=0;function D(t,n){e&&e.length>2&&C.push(e),e=[t,n]}function E(t,n,a,r){Jt(t,a)&&Jt(n,r)||e.push(t,n,a,r,a,r)}for(var R=0;R<w;){var z=b[R++],G=1===R;switch(G&&(k=_=b[R],L=P=b[R+1],z!==Qt.L&&z!==Qt.C&&z!==Qt.Q||(e=[k,L])),z){case Qt.M:_=k=b[R++],P=L=b[R++],D(k,L);break;case Qt.L:E(_,P,n=b[R++],a=b[R++]),_=n,P=a;break;case Qt.C:e.push(b[R++],b[R++],b[R++],b[R++],_=b[R++],P=b[R++]);break;case Qt.Q:n=b[R++],a=b[R++],r=b[R++],i=b[R++],e.push(_+2/3*(n-_),P+2/3*(a-P),r+2/3*(n-r),i+2/3*(a-i),r,i),_=r,P=i;break;case Qt.A:var B=b[R++],W=b[R++],F=b[R++],O=b[R++],V=b[R++],Z=b[R++]+V;R+=1;var j=!b[R++];n=Math.cos(V)*F+B,a=Math.sin(V)*O+W,G?D(k=n,L=a):E(_,P,n,a),_=Math.cos(Z)*F+B,P=Math.sin(Z)*O+W;for(var N=(j?-1:1)*Math.PI/2,U=V;j?U>Z:U<Z;U+=N){var q=j?Math.max(U+N,Z):Math.min(U+N,Z);o=U,s=q,l=B,u=W,d=F,c=O,h=void 0,f=void 0,g=void 0,p=void 0,v=void 0,y=void 0,x=void 0,m=void 0,M=void 0,A=void 0,T=void 0,S=void 0,I=void 0,h=Math.abs(s-o),f=4*Math.tan(h/4)/3,g=s<o?-1:1,p=Math.cos(o),v=Math.sin(o),y=Math.cos(s),x=Math.sin(s),m=p*d+l,M=v*c+u,A=y*d+l,T=x*c+u,S=d*f*g,I=c*f*g,e.push(m-S*v,M+I*p,A+S*x,T-I*y,A,T)}break;case Qt.R:k=_=b[R++],L=P=b[R++],n=k+b[R++],a=L+b[R++],D(n,L),E(n,L,n,a),E(n,a,k,a),E(k,a,k,L),E(k,L,n,L);break;case Qt.Z:e&&E(_,P,k,L),_=k,P=L}}return e&&e.length>2&&C.push(e),C}function Yt(t,e,n,a,r,i,o,s,l,u){if(Jt(t,n)&&Jt(e,a)&&Jt(r,o)&&Jt(i,s))l.push(o,s);else{var d=2/u,c=d*d,h=o-t,f=s-e,g=Math.sqrt(h*h+f*f);h/=g,f/=g;var p=n-t,v=a-e,y=r-o,x=i-s,m=p*p+v*v,M=y*y+x*x;if(m<c&&M<c)l.push(o,s);else{var A=h*p+f*v,T=-h*y-f*x;if(m-A*A<c&&A>=0&&M-T*T<c&&T>=0)l.push(o,s);else{var S=[],I=[];K(t,n,r,o,.5,S),K(e,a,i,s,.5,I),Yt(S[0],I[0],S[1],I[1],S[2],I[2],S[3],I[3],l,u),Yt(S[4],I[4],S[5],I[5],S[6],I[6],S[7],I[7],l,u)}}}}function $t(t,e,n){var a=t[e],r=t[1-e],i=Math.abs(a/r),o=Math.ceil(Math.sqrt(i*n)),s=Math.floor(n/o);0===s&&(s=1,o=n);for(var l=[],u=0;u<o;u++)l.push(s);var d=n-o*s;if(d>0)for(u=0;u<d;u++)l[u%o]+=1;return l}function te(t,e,n){for(var a=t.r0,r=t.r,i=t.startAngle,o=t.endAngle,s=Math.abs(o-i),l=s*r,u=r-a,d=l>Math.abs(u),c=$t([l,u],d?0:1,e),h=(d?s:u)/c.length,f=0;f<c.length;f++)for(var g=(d?u:s)/c[f],p=0;p<c[f];p++){var v={};d?(v.startAngle=i+h*f,v.endAngle=i+h*(f+1),v.r0=a+g*p,v.r=a+g*(p+1)):(v.startAngle=i+g*p,v.endAngle=i+g*(p+1),v.r0=a+h*f,v.r=a+h*(f+1)),v.clockwise=t.clockwise,v.cx=t.cx,v.cy=t.cy,n.push(v)}}function ee(t,e,n,a){return t*a-n*e}function ne(t,e,n,a,r,i,o,s){var l=n-t,u=a-e,d=o-r,c=s-i,h=ee(d,c,l,u);if(Math.abs(h)<1e-6)return null;var f=ee(t-r,e-i,d,c)/h;return f<0||f>1?null:new X(f*l+t,f*u+e)}function ae(t,e,n){var a=new X;X.sub(a,n,e),a.normalize();var r=new X;return X.sub(r,t,e),r.dot(a)}function re(t,e){var n=t[t.length-1];n&&n[0]===e[0]&&n[1]===e[1]||t.push(e)}function ie(t){var e=t.points,n=[],a=[];Q(e,n,a);var r=new J(n[0],n[1],a[0]-n[0],a[1]-n[1]),i=r.width,o=r.height,s=r.x,l=r.y,u=new X,d=new X;return i>o?(u.x=d.x=s+i/2,u.y=l,d.y=l+o):(u.y=d.y=l+o/2,u.x=s,d.x=s+i),function(t,e,n){for(var a=t.length,r=[],i=0;i<a;i++){var o=t[i],s=t[(i+1)%a],l=ne(o[0],o[1],s[0],s[1],e.x,e.y,n.x,n.y);l&&r.push({projPt:ae(l,e,n),pt:l,idx:i})}if(r.length<2)return[{points:t},{points:t}];r.sort((function(t,e){return t.projPt-e.projPt}));var u=r[0],d=r[r.length-1];if(d.idx<u.idx){var c=u;u=d,d=c}var h=[u.pt.x,u.pt.y],f=[d.pt.x,d.pt.y],g=[h],p=[f];for(i=u.idx+1;i<=d.idx;i++)re(g,t[i].slice());for(re(g,f),re(g,h),i=d.idx+1;i<=u.idx+a;i++)re(p,t[i%a].slice());return re(p,h),re(p,f),[{points:g},{points:p}]}(e,u,d)}function oe(t,e,n,a){if(1===n)a.push(e);else{var r=Math.floor(n/2),i=t(e);oe(t,i[0],r,a),oe(t,i[1],n-r,a)}return a}function se(t,e){var n,a=[],r=t.shape;switch(t.type){case"rect":!function(t,e,n){for(var a=t.width,r=t.height,i=a>r,o=$t([a,r],i?0:1,e),s=i?"width":"height",l=i?"height":"width",u=i?"x":"y",d=i?"y":"x",c=t[s]/o.length,h=0;h<o.length;h++)for(var f=t[l]/o[h],g=0;g<o[h];g++){var p={};p[u]=h*c,p[d]=g*f,p[s]=c,p[l]=f,p.x+=t.x,p.y+=t.y,n.push(p)}}(r,e,a),n=tt;break;case"sector":te(r,e,a),n=B;break;case"circle":te({r0:0,r:r.r,startAngle:0,endAngle:2*Math.PI,cx:r.cx,cy:r.cy},e,a),n=B;break;default:var i=t.getComputedTransform(),o=i?Math.sqrt(Math.max(i[0]*i[0]+i[1]*i[1],i[2]*i[2]+i[3]*i[3])):1,s=I(function(t,e){var n=Xt(t),a=[];e=e||1;for(var r=0;r<n.length;r++){var i=n[r],o=[],s=i[0],l=i[1];o.push(s,l);for(var u=2;u<i.length;){var d=i[u++],c=i[u++],h=i[u++],f=i[u++],g=i[u++],p=i[u++];Yt(s,l,d,c,h,f,g,p,o,e),s=g,l=p}a.push(o)}return a}(t.getUpdatedPathProxy(),o),(function(t){return function(t){for(var e=[],n=0;n<t.length;)e.push([t[n++],t[n++]]);return e}(t)})),l=s.length;if(0===l)oe(ie,{points:s[0]},e,a);else if(l===e)for(var u=0;u<l;u++)a.push({points:s[u]});else{var d=0,c=I(s,(function(t){var e=[],n=[];Q(t,e,n);var a=(n[1]-e[1])*(n[0]-e[0]);return d+=a,{poly:t,area:a}}));c.sort((function(t,e){return e.area-t.area}));var h=e;for(u=0;u<l;u++){var f=c[u];if(h<=0)break;var g=u===l-1?h:Math.ceil(f.area/d*e);g<0||(oe(ie,{points:f.poly},g,a),h-=g)}}n=$}if(!n)return function(t,e){for(var n=[],a=0;a<e;a++)n.push(Y(t));return n}(t,e);var p,v,y=[];for(u=0;u<a.length;u++){var x=new n;x.setShape(a[u]),p=t,(v=x).setStyle(p.style),v.z=p.z,v.z2=p.z2,v.zlevel=p.zlevel,y.push(x)}return y}function le(t,e){var n=t.length,a=e.length;if(n===a)return[t,e];for(var r=[],i=[],o=n<a?t:e,s=Math.min(n,a),l=Math.abs(a-n)/6,u=(s-2)/6,d=Math.ceil(l/u)+1,c=[o[0],o[1]],h=l,f=2;f<s;){var g=o[f-2],p=o[f-1],v=o[f++],y=o[f++],x=o[f++],m=o[f++],M=o[f++],A=o[f++];if(h<=0)c.push(v,y,x,m,M,A);else{for(var T=Math.min(h,d-1)+1,S=1;S<=T;S++){var I=S/T;K(g,v,x,M,I,r),K(p,y,m,A,I,i),g=r[3],p=i[3],c.push(r[1],i[1],r[2],i[2],g,p),v=r[5],y=i[5],x=r[6],m=i[6]}h-=T-1}}return o===t?[c,e]:[t,c]}function ue(t,e){for(var n=t.length,a=t[n-2],r=t[n-1],i=[],o=0;o<e.length;)i[o++]=a,i[o++]=r;return i}function de(t){for(var e=0,n=0,a=0,r=t.length,i=0,o=r-2;i<r;o=i,i+=2){var s=t[o],l=t[o+1],u=t[i],d=t[i+1],c=s*d-u*l;e+=c,n+=(s+u)*c,a+=(l+d)*c}return 0===e?[t[0]||0,t[1]||0]:[n/e/3,a/e/3,e]}function ce(t,e,n,a){for(var r=(t.length-2)/6,i=1/0,o=0,s=t.length,l=s-2,u=0;u<r;u++){for(var d=6*u,c=0,h=0;h<s;h+=2){var f=0===h?d:(d+h-2)%l+2,g=t[f]-n[0],p=t[f+1]-n[1],v=e[h]-a[0]-g,y=e[h+1]-a[1]-p;c+=v*v+y*y}c<i&&(i=c,o=u)}return o}function he(t){for(var e=[],n=t.length,a=0;a<n;a+=2)e[a]=t[n-a-2],e[a+1]=t[n-a-1];return e}function fe(t){return t.__isCombineMorphing}function ge(t,e,n){var a="__mOriginal_"+e,r=t[a]||t[e];t[a]||(t[a]=t[e]);var i=n.replace,o=n.after,s=n.before;t[e]=function(){var t,e=arguments;return s&&s.apply(this,e),t=i?i.apply(this,e):r.apply(this,e),o&&o.apply(this,e),t}}function pe(t,e){var n="__mOriginal_"+e;t[n]&&(t[e]=t[n],t[n]=null)}function ve(t,e){for(var n=0;n<t.length;n++)for(var a=t[n],r=0;r<a.length;){var i=a[r],o=a[r+1];a[r++]=e[0]*i+e[2]*o+e[4],a[r++]=e[1]*i+e[3]*o+e[5]}}function ye(t,e){var n=t.getUpdatedPathProxy(),a=e.getUpdatedPathProxy(),r=function(t,e){for(var n,a,r,i=[],o=[],s=0;s<Math.max(t.length,e.length);s++){var l=t[s],u=e[s],d=void 0,c=void 0;l?u?(a=d=(n=le(l,u))[0],r=c=n[1]):(c=ue(r||l,l),d=l):(d=ue(a||u,u),c=u),i.push(d),o.push(c)}return[i,o]}(Xt(n),Xt(a)),i=r[0],o=r[1],s=t.getComputedTransform(),l=e.getComputedTransform();s&&ve(i,s),l&&ve(o,l),ge(e,"updateTransform",{replace:function(){this.transform=null}}),e.transform=null;var u=function(t,e,n,a){for(var r,i=[],o=0;o<t.length;o++){var s=t[o],l=e[o],u=de(s),d=de(l);null==r&&(r=u[2]<0!=d[2]<0);var c=[],h=[],f=0,g=1/0,p=[],v=s.length;r&&(s=he(s));for(var y=6*ce(s,l,u,d),x=v-2,m=0;m<x;m+=2){var M=(y+m)%x+2;c[m+2]=s[M]-u[0],c[m+3]=s[M+1]-u[1]}if(c[0]=s[y]-u[0],c[1]=s[y+1]-u[1],n>0)for(var A=a/n,T=-a/2;T<=a/2;T+=A){var S=Math.sin(T),I=Math.cos(T),b=0;for(m=0;m<s.length;m+=2){var w=c[m],C=c[m+1],_=l[m]-d[0],P=l[m+1]-d[1],k=_*I-P*S,L=_*S+P*I;p[m]=k,p[m+1]=L;var D=k-w,E=L-C;b+=D*D+E*E}if(b<g){g=b,f=T;for(var R=0;R<p.length;R++)h[R]=p[R]}}else for(var z=0;z<v;z+=2)h[z]=l[z]-d[0],h[z+1]=l[z+1]-d[1];i.push({from:c,to:h,fromCp:u,toCp:d,rotation:-f})}return i}(i,o,10,Math.PI),d=[];ge(e,"buildPath",{replace:function(t){for(var n=e.__morphT,a=1-n,r=[],i=0;i<u.length;i++){var o=u[i],s=o.from,l=o.to,c=o.rotation*n,h=o.fromCp,f=o.toCp,g=Math.sin(c),p=Math.cos(c);nt(r,h,f,n);for(var v=0;v<s.length;v+=2){var y=s[v],x=s[v+1],m=y*a+(S=l[v])*n,M=x*a+(I=l[v+1])*n;d[v]=m*p-M*g+r[0],d[v+1]=m*g+M*p+r[1]}var A=d[0],T=d[1];t.moveTo(A,T);for(v=2;v<s.length;){var S=d[v++],I=d[v++],b=d[v++],w=d[v++],C=d[v++],_=d[v++];A===S&&T===I&&b===C&&w===_?t.lineTo(C,_):t.bezierCurveTo(S,I,b,w,C,_),A=C,T=_}}}})}function xe(t,e,n){if(!t||!e)return e;var a=n.done,r=n.during;return ye(t,e),e.__morphT=0,e.animateTo({__morphT:1},L({during:function(t){e.dirtyShape(),r&&r(t)},done:function(){pe(e,"buildPath"),pe(e,"updateTransform"),e.__morphT=-1,e.createPathProxy(),e.dirtyShape(),a&&a()}},n)),e}function me(t,e,n,a,r,i){t=r===n?0:Math.round(32767*(t-n)/(r-n)),e=i===a?0:Math.round(32767*(e-a)/(i-a));for(var o,s=0,l=32768;l>0;l/=2){var u=0,d=0;(t&l)>0&&(u=1),(e&l)>0&&(d=1),s+=l*l*(3*u^d),0===d&&(1===u&&(t=l-1-t,e=l-1-e),o=t,t=e,e=o)}return s}function Me(t){var e=1/0,n=1/0,a=-1/0,r=-1/0,i=I(t,(function(t){var i=t.getBoundingRect(),o=t.getComputedTransform(),s=i.x+i.width/2+(o?o[4]:0),l=i.y+i.height/2+(o?o[5]:0);return e=Math.min(s,e),n=Math.min(l,n),a=Math.max(s,a),r=Math.max(l,r),[s,l]}));return I(i,(function(i,o){return{cp:i,z:me(i[0],i[1],e,n,a,r),path:t[o]}})).sort((function(t,e){return t.z-e.z})).map((function(t){return t.path}))}function Ae(t){return se(t.path,t.count)}function Te(t){return m(t[0])}function Se(t,e){for(var n=[],a=t.length,r=0;r<a;r++)n.push({one:t[r],many:[]});for(r=0;r<e.length;r++){var i=e[r].length,o=void 0;for(o=0;o<i;o++)n[o%a].many.push(e[r][o])}var s=0;for(r=a-1;r>=0;r--)if(!n[r].many.length){var l=n[s].many;if(l.length<=1){if(!s)return n;s=0}i=l.length;var u=Math.ceil(i/2);n[r].many=l.slice(u,i),n[s].many=l.slice(0,u),s++}return n}var Ie={clone:function(t){for(var e=[],n=1-Math.pow(1-t.path.style.opacity,1/t.count),a=0;a<t.count;a++){var r=Y(t.path);r.setStyle("opacity",n),e.push(r)}return e},split:null};function be(t,e,n,a,r,i){if(t.length&&e.length){var o=rt("update",a,r);if(o&&o.duration>0){var s,l,u=a.getModel("universalTransition").get("delay"),d=Object.assign({setToFinal:!0},o);Te(t)&&(s=t,l=e),Te(e)&&(s=e,l=t);for(var c=s?s===t:t.length>e.length,h=s?Se(l,s):Se(c?e:t,[c?t:e]),f=0,g=0;g<h.length;g++)f+=h[g].many.length;var p=0;for(g=0;g<h.length;g++)v(h[g],c,p,f),p+=h[g].many.length}}function v(t,e,a,r,o){var s=t.many,l=t.one;if(1!==s.length||o)for(var c=L({dividePath:Ie[n],individualDelay:u&&function(t,e,n,i){return u(t+a,r)}},d),h=e?function(t,e,n){var a=[];!function t(e){for(var n=0;n<e.length;n++){var r=e[n];fe(r)?t(r.childrenRef()):r instanceof at&&a.push(r)}}(t);var r=a.length;if(!r)return{fromIndividuals:[],toIndividuals:[],count:0};var i=(n.dividePath||Ae)({path:e,count:r});if(i.length!==r)return console.error("Invalid morphing: unmatched splitted path"),{fromIndividuals:[],toIndividuals:[],count:0};a=Me(a),i=Me(i);for(var o=n.done,s=n.during,l=n.individualDelay,u=new et,d=0;d<r;d++){var c=a[d],h=i[d];h.parent=e,h.copyTransform(u),l||ye(c,h)}function f(t){for(var e=0;e<i.length;e++)i[e].addSelfToZr(t)}function g(){e.__isCombineMorphing=!1,e.__morphT=-1,e.childrenRef=null,pe(e,"addSelfToZr"),pe(e,"removeSelfFromZr")}e.__isCombineMorphing=!0,e.childrenRef=function(){return i},ge(e,"addSelfToZr",{after:function(t){f(t)}}),ge(e,"removeSelfFromZr",{after:function(t){for(var e=0;e<i.length;e++)i[e].removeSelfFromZr(t)}});var p=i.length;if(l){var v=p,y=function(){0==--v&&(g(),o&&o())};for(d=0;d<p;d++){var x=l?L({delay:(n.delay||0)+l(d,p,a[d],i[d]),done:y},n):n;xe(a[d],i[d],x)}}else e.__morphT=0,e.animateTo({__morphT:1},L({during:function(t){for(var n=0;n<p;n++){var a=i[n];a.__morphT=e.__morphT,a.dirtyShape()}s&&s(t)},done:function(){g();for(var e=0;e<t.length;e++)pe(t[e],"updateTransform");o&&o()}},n));return e.__zr&&f(e.__zr),{fromIndividuals:a,toIndividuals:i,count:p}}(s,l,c):function(t,e,n){var a=e.length,r=[],i=n.dividePath||Ae;if(fe(t)){!function t(e){for(var n=0;n<e.length;n++){var a=e[n];fe(a)?t(a.childrenRef()):a instanceof at&&r.push(a)}}(t.childrenRef());var o=r.length;if(o<a)for(var s=0,l=o;l<a;l++)r.push(Y(r[s++%o]));r.length=a}else{r=i({path:t,count:a});var u=t.getComputedTransform();for(l=0;l<r.length;l++)r[l].setLocalTransform(u);if(r.length!==a)return console.error("Invalid morphing: unmatched splitted path"),{fromIndividuals:[],toIndividuals:[],count:0}}r=Me(r),e=Me(e);var d=n.individualDelay;for(l=0;l<a;l++){var c=d?L({delay:(n.delay||0)+d(l,a,r[l],e[l])},n):n;xe(r[l],e[l],c)}return{fromIndividuals:r,toIndividuals:e,count:e.length}}(l,s,c),f=h.fromIndividuals,g=h.toIndividuals,p=f.length,y=0;y<p;y++){x=u?L({delay:u(y,p)},d):d;i(f[y],g[y],e?s[y]:t.one,e?t.one:s[y],x)}else{var x,m=e?s[0]:l,M=e?l:s[0];if(fe(m))v({many:[m],one:M},!0,a,r,!0);else xe(m,M,x=u?L({delay:u(a,r)},d):d),i(m,M,m,M,x)}}}function we(t){if(!t)return[];if(m(t)){for(var e=[],n=0;n<t.length;n++)e.push(we(t[n]));return e}var a=[];return t.traverse((function(t){t instanceof at&&!t.disableMorphing&&!t.invisible&&!t.ignore&&a.push(t)})),a}var Ce=v();function _e(t){var e=[];return M(t,(function(t){var n=t.data;if(!(n.count()>1e4))for(var a=n.getIndices(),r=function(t){for(var e=t.dimensions,n=0;n<e.length;n++){var a=t.getDimensionInfo(e[n]);if(a&&0===a.otherDims.itemGroupId)return e[n]}}(n),i=0;i<a.length;i++)e.push({data:n,dim:t.dim||r,divide:t.divide,dataIndex:i})})),e}function Pe(t,e,n){t.traverse((function(t){t instanceof at&&ut(t,{style:{opacity:0}},e,{dataIndex:n,isFrom:!0})}))}function ke(t){if(t.parent){var e=t.getComputedTransform();t.setLocalTransform(e),t.parent.remove(t)}}function Le(t){t.stopAnimation(),t.isGroup&&t.traverse((function(t){t.stopAnimation()}))}function De(t,e,n){var a=_e(t),r=_e(e);function i(t,e,n,a,r){(n||t)&&e.animateFrom({style:(n||t).style},r)}function o(t){for(var e=0;e<t.length;e++)if(t[e].dim)return t[e].dim}var s=o(a),l=o(r),u=!1;function d(t,e){return function(n){var a=n.data,r=n.dataIndex;if(e)return a.getId(r);var i=a.hostModel&&a.hostModel.get("dataGroupId"),o=t?s||l:l||s,u=o&&a.getDimensionInfo(o),d=u&&u.ordinalMeta;if(u){var c=a.get(u.name,r);return d&&d.categories[c]||c+""}var h=a.getRawDataItem(r);return h&&h.groupId?h.groupId+"":i||a.getId(r)}}var c=function(t,e){var n=t.length;if(n!==e.length)return!1;for(var a=0;a<n;a++){var r=t[a],i=e[a];if(r.data.getId(r.dataIndex)!==i.data.getId(i.dataIndex))return!1}return!0}(a,r),h={};if(!c)for(var f=0;f<r.length;f++){var g=r[f],p=g.data.getItemGraphicEl(g.dataIndex);p&&(h[p.id]=!0)}function v(t,e){var n=a[e],o=r[t],s=o.data.hostModel,l=n.data.getItemGraphicEl(n.dataIndex),d=o.data.getItemGraphicEl(o.dataIndex);l!==d?l&&h[l.id]||d&&(Le(d),l?(Le(l),ke(l),u=!0,be(we(l),we(d),o.divide,s,t,i)):Pe(d,s,t)):d&&function(t,e,n){var a=rt("update",n,e);a&&t.traverse((function(t){if(t instanceof dt){var e=ct(t);e&&t.animateFrom({style:e},a)}}))}(d,o.dataIndex,s)}new st(a,r,d(!0,c),d(!1,c),null,"multiple").update(v).updateManyToOne((function(t,e){var n=r[t],o=n.data,s=o.hostModel,l=o.getItemGraphicEl(n.dataIndex),d=O(I(e,(function(t){return a[t].data.getItemGraphicEl(a[t].dataIndex)})),(function(t){return t&&t!==l&&!h[t.id]}));l&&(Le(l),d.length?(M(d,(function(t){Le(t),ke(t)})),u=!0,be(we(d),we(l),n.divide,s,t,i)):Pe(l,s,n.dataIndex))})).updateOneToMany((function(t,e){var n=a[e],o=n.data.getItemGraphicEl(n.dataIndex);if(!o||!h[o.id]){var s=O(I(t,(function(t){return r[t].data.getItemGraphicEl(r[t].dataIndex)})),(function(t){return t&&t!==o})),l=r[t[0]].data.hostModel;s.length&&(M(s,(function(t){return Le(t)})),o?(Le(o),ke(o),u=!0,be(we(o),we(s),n.divide,l,t[0],i)):M(s,(function(e){return Pe(e,l,t[0])})))}})).updateManyToMany((function(t,e){new st(e,t,(function(t){return a[t].data.getId(a[t].dataIndex)}),(function(t){return r[t].data.getId(r[t].dataIndex)})).update((function(n,a){v(t[n],e[a])})).execute()})).execute(),u&&M(e,(function(t){var e=t.data.hostModel,a=e&&n.getViewOfSeriesModel(e),r=rt("update",e,0);a&&e.isAnimationEnabled()&&r&&r.duration>0&&a.group.traverse((function(t){t instanceof at&&!t.animators.length&&t.animateFrom({style:{opacity:0}},r)}))}))}function Ee(t){var e=t.getModel("universalTransition").get("seriesKey");return e||t.id}function Re(t){return m(t)?t.sort().join(","):t}function ze(t){if(t.hostModel)return t.hostModel.getModel("universalTransition").get("divideShape")}function Ge(t,e){for(var n=0;n<t.length;n++){if(null!=e.seriesIndex&&e.seriesIndex===t[n].seriesIndex||null!=e.seriesId&&e.seriesId===t[n].id)return n}}function Be(t){t.registerUpdateLifecycle("series:beforeupdate",(function(t,e,n){M(it(n.seriesTransition),(function(t){M(it(t.to),(function(t){for(var e=n.updatedSeries,a=0;a<e.length;a++)(null!=t.seriesIndex&&t.seriesIndex===e[a].seriesIndex||null!=t.seriesId&&t.seriesId===e[a].id)&&(e[a][ot]=!0)}))}))})),t.registerUpdateLifecycle("series:transition",(function(t,e,n){var a=Ce(e);if(a.oldSeries&&n.updatedSeries&&n.optionChanged){var r=n.seriesTransition;if(r)M(it(r),(function(t){!function(t,e,n,a){var r=[],i=[];M(it(t.from),(function(t){var n=Ge(e.oldSeries,t);n>=0&&r.push({data:e.oldData[n],divide:ze(e.oldData[n]),dim:t.dimension})})),M(it(t.to),(function(t){var e=Ge(n.updatedSeries,t);if(e>=0){var a=n.updatedSeries[e].getData();i.push({data:a,divide:ze(a),dim:t.dimension})}})),r.length>0&&i.length>0&&De(r,i,a)}(t,a,n,e)}));else{var i=function(t,e){var n=lt(),a=lt(),r=lt();return M(t.oldSeries,(function(e,n){var i=t.oldData[n],o=Ee(e),s=Re(o);a.set(s,i),m(o)&&M(o,(function(t){r.set(t,{data:i,key:s})}))})),M(e.updatedSeries,(function(t){if(t.isUniversalTransitionEnabled()&&t.isAnimationEnabled()){var e=t.getData(),i=Ee(t),o=Re(i),s=a.get(o);if(s)n.set(o,{oldSeries:[{divide:ze(s),data:s}],newSeries:[{divide:ze(e),data:e}]});else if(m(i)){var l=[];M(i,(function(t){var e=a.get(t);e&&l.push({divide:ze(e),data:e})})),l.length&&n.set(o,{oldSeries:l,newSeries:[{data:e,divide:ze(e)}]})}else{var u=r.get(i);if(u){var d=n.get(u.key);d||(d={oldSeries:[{data:u.data,divide:ze(u.data)}],newSeries:[]},n.set(u.key,d)),d.newSeries.push({data:e,divide:ze(e)})}}}})),n}(a,n);M(i.keys(),(function(t){var n=i.get(t);De(n.oldSeries,n.newSeries,e)}))}M(n.updatedSeries,(function(t){t[ot]&&(t[ot]=!1)}))}for(var o=t.getSeries(),s=a.oldSeries=[],l=a.oldData=[],u=0;u<o.length;u++){var d=o[u].getData();d.count()<1e4&&(s.push(o[u]),l.push(d))}}))}export{Be as a,Kt as i};
