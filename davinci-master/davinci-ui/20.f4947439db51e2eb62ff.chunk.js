(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0edb9a9d0f64d939ab11":function(t,i,e){"use strict";e.r(i);var s=e("0427f930b2f19a25b61d"),n=e("9493e9352520294a389f"),a=e("a4f0ef367f0a790cdce8"),r=e("3fcced0dfecbf072faf3"),o=e("b82d2ea0c8dcd2b25103"),h=e("39c741a38b7f6fbfdd92"),l=e("a1aefa272411e80f6961");function c(t){h.a.call(this),this.type="PointsMaterial",this.color=new l.Color(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.lights=!1,this.setValues(t)}c.prototype=Object.create(h.a.prototype),c.prototype.constructor=c,c.prototype.isPointsMaterial=!0,c.prototype.copy=function(t){return h.a.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var p,d,u,f=e("4f02046caaa3f6d5dbf3");function m(t,i){r.a.call(this),this.type="Points",this.geometry=void 0!==t?t:new f.BufferGeometry,this.material=void 0!==i?i:new c({color:16777215*Math.random()})}e.d(i,"Points",function(){return m}),m.prototype=Object.assign(Object.create(r.a.prototype),{constructor:m,isPoints:!0,raycast:(p=new a.a,d=new n.a,u=new s.a,function(t,i){var e=this,s=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold;if(null===s.boundingSphere&&s.computeBoundingSphere(),u.copy(s.boundingSphere),u.applyMatrix4(n),u.radius+=a,!1!==t.ray.intersectsSphere(u)){p.getInverse(n),d.copy(t.ray).applyMatrix4(p);var r=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=r*r,l=new o.a,c=new o.a;if(s.isBufferGeometry){var f=s.index,m=s.attributes.position.array;if(null!==f)for(var g=f.array,y=0,v=g.length;y<v;y++){var b=g[y];l.fromArray(m,3*b),w(l,b)}else{y=0;for(var M=m.length/3;y<M;y++)l.fromArray(m,3*y),w(l,y)}}else{var S=s.vertices;for(y=0,M=S.length;y<M;y++)w(S[y],y)}}function w(s,a){var r=d.distanceSqToPoint(s);if(r<h){d.closestPointToPoint(s,c),c.applyMatrix4(n);var o=t.ray.origin.distanceTo(c);if(o<t.near||o>t.far)return;i.push({distance:o,distanceToRay:Math.sqrt(r),point:c.clone(),index:a,face:null,object:e})}}}),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}})},"39c741a38b7f6fbfdd92":function(t,i,e){"use strict";e.d(i,"a",function(){return o});var s=e("550464552fd011906622"),n=e("cb92241db9e33ee3542f"),a=e("d1886278d8ad2602c715"),r=0;function o(){Object.defineProperty(this,"id",{value:r++}),this.uuid=a.a.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=n.fb,this.side=n.D,this.flatShading=!1,this.vertexColors=n.db,this.opacity=1,this.transparent=!1,this.blendSrc=n.ac,this.blendDst=n.lb,this.blendEquation=n.b,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=n.K,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.userData={},this.needsUpdate=!0}o.prototype=Object.assign(Object.create(s.a.prototype),{constructor:o,isMaterial:!0,onBeforeCompile:function(){},setValues:function(t){if(void 0!==t)for(var i in t){var e=t[i];if(void 0!==e)if("shading"!==i){var s=this[i];void 0!==s?s&&s.isColor?s.set(e):s&&s.isVector3&&e&&e.isVector3?s.copy(e):this[i]=e:console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===n.B;else console.warn("THREE.Material: '"+i+"' parameter is undefined.")}},toJSON:function(t){var i=void 0===t||"string"===typeof t;i&&(t={textures:{},images:{}});var e={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function s(t){var i=[];for(var e in t){var s=t[e];delete s.metadata,i.push(s)}return i}if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),this.color&&this.color.isColor&&(e.color=this.color.getHex()),void 0!==this.roughness&&(e.roughness=this.roughness),void 0!==this.metalness&&(e.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(e.emissive=this.emissive.getHex()),1!==this.emissiveIntensity&&(e.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(e.specular=this.specular.getHex()),void 0!==this.shininess&&(e.shininess=this.shininess),void 0!==this.clearCoat&&(e.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(e.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(e.map=this.map.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(e.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(e.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(e.aoMap=this.aoMap.toJSON(t).uuid,e.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(e.bumpMap=this.bumpMap.toJSON(t).uuid,e.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(e.normalMap=this.normalMap.toJSON(t).uuid,e.normalMapType=this.normalMapType,e.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(e.displacementMap=this.displacementMap.toJSON(t).uuid,e.displacementScale=this.displacementScale,e.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(e.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(e.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(e.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(e.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(e.envMap=this.envMap.toJSON(t).uuid,e.reflectivity=this.reflectivity,void 0!==this.combine&&(e.combine=this.combine),void 0!==this.envMapIntensity&&(e.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(e.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(e.size=this.size),void 0!==this.sizeAttenuation&&(e.sizeAttenuation=this.sizeAttenuation),this.blending!==n.fb&&(e.blending=this.blending),!0===this.flatShading&&(e.flatShading=this.flatShading),this.side!==n.D&&(e.side=this.side),this.vertexColors!==n.db&&(e.vertexColors=this.vertexColors),this.opacity<1&&(e.opacity=this.opacity),!0===this.transparent&&(e.transparent=this.transparent),e.depthFunc=this.depthFunc,e.depthTest=this.depthTest,e.depthWrite=this.depthWrite,0!==this.rotation&&(e.rotation=this.rotation),!0===this.polygonOffset&&(e.polygonOffset=!0),0!==this.polygonOffsetFactor&&(e.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(e.polygonOffsetUnits=this.polygonOffsetUnits),1!==this.linewidth&&(e.linewidth=this.linewidth),void 0!==this.dashSize&&(e.dashSize=this.dashSize),void 0!==this.gapSize&&(e.gapSize=this.gapSize),void 0!==this.scale&&(e.scale=this.scale),!0===this.dithering&&(e.dithering=!0),this.alphaTest>0&&(e.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(e.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(e.wireframe=this.wireframe),this.wireframeLinewidth>1&&(e.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(e.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(e.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(e.morphTargets=!0),!0===this.skinning&&(e.skinning=!0),!1===this.visible&&(e.visible=!1),"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData),i){var a=s(t.textures),r=s(t.images);a.length>0&&(e.textures=a),r.length>0&&(e.images=r)}return e},clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.lights=t.lights,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.userData=JSON.parse(JSON.stringify(t.userData)),this.clipShadows=t.clipShadows,this.clipIntersection=t.clipIntersection;var i=t.clippingPlanes,e=null;if(null!==i){var s=i.length;e=new Array(s);for(var n=0;n!==s;++n)e[n]=i[n].clone()}return this.clippingPlanes=e,this.shadowSide=t.shadowSide,this},dispose:function(){this.dispatchEvent({type:"dispose"})}})},"9493e9352520294a389f":function(t,i,e){"use strict";e.d(i,"a",function(){return l});var s,n,a,r,o,h=e("b82d2ea0c8dcd2b25103");function l(t,i){this.origin=void 0!==t?t:new h.a,this.direction=void 0!==i?i:new h.a}Object.assign(l.prototype,{set:function(t,i){return this.origin.copy(t),this.direction.copy(i),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,i){return void 0===i&&(console.warn("THREE.Ray: .at() target is now required"),i=new h.a),i.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:(o=new h.a,function(t){return this.origin.copy(this.at(t,o)),this}),closestPointToPoint:function(t,i){void 0===i&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),i=new h.a),i.subVectors(t,this.origin);var e=i.dot(this.direction);return e<0?i.copy(this.origin):i.copy(this.direction).multiplyScalar(e).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(){var t=new h.a;return function(i){var e=t.subVectors(i,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(i):(t.copy(this.direction).multiplyScalar(e).add(this.origin),t.distanceToSquared(i))}}(),distanceSqToSegment:(n=new h.a,a=new h.a,r=new h.a,function(t,i,e,s){n.copy(t).add(i).multiplyScalar(.5),a.copy(i).sub(t).normalize(),r.copy(this.origin).sub(n);var o,h,l,c,p=.5*t.distanceTo(i),d=-this.direction.dot(a),u=r.dot(this.direction),f=-r.dot(a),m=r.lengthSq(),g=Math.abs(1-d*d);if(g>0)if(h=d*u-f,c=p*g,(o=d*f-u)>=0)if(h>=-c)if(h<=c){var y=1/g;l=(o*=y)*(o+d*(h*=y)+2*u)+h*(d*o+h+2*f)+m}else h=p,l=-(o=Math.max(0,-(d*h+u)))*o+h*(h+2*f)+m;else h=-p,l=-(o=Math.max(0,-(d*h+u)))*o+h*(h+2*f)+m;else h<=-c?l=-(o=Math.max(0,-(-d*p+u)))*o+(h=o>0?-p:Math.min(Math.max(-p,-f),p))*(h+2*f)+m:h<=c?(o=0,l=(h=Math.min(Math.max(-p,-f),p))*(h+2*f)+m):l=-(o=Math.max(0,-(d*p+u)))*o+(h=o>0?p:Math.min(Math.max(-p,-f),p))*(h+2*f)+m;else h=d>0?-p:p,l=-(o=Math.max(0,-(d*h+u)))*o+h*(h+2*f)+m;return e&&e.copy(this.direction).multiplyScalar(o).add(this.origin),s&&s.copy(a).multiplyScalar(h).add(n),l}),intersectSphere:function(){var t=new h.a;return function(i,e){t.subVectors(i.center,this.origin);var s=t.dot(this.direction),n=t.dot(t)-s*s,a=i.radius*i.radius;if(n>a)return null;var r=Math.sqrt(a-n),o=s-r,h=s+r;return o<0&&h<0?null:o<0?this.at(h,e):this.at(o,e)}}(),intersectsSphere:function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},distanceToPlane:function(t){var i=t.normal.dot(this.direction);if(0===i)return 0===t.distanceToPoint(this.origin)?0:null;var e=-(this.origin.dot(t.normal)+t.constant)/i;return e>=0?e:null},intersectPlane:function(t,i){var e=this.distanceToPlane(t);return null===e?null:this.at(e,i)},intersectsPlane:function(t){var i=t.distanceToPoint(this.origin);return 0===i||t.normal.dot(this.direction)*i<0},intersectBox:function(t,i){var e,s,n,a,r,o,h=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,p=this.origin;return h>=0?(e=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(e=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),l>=0?(n=(t.min.y-p.y)*l,a=(t.max.y-p.y)*l):(n=(t.max.y-p.y)*l,a=(t.min.y-p.y)*l),e>a||n>s?null:((n>e||e!==e)&&(e=n),(a<s||s!==s)&&(s=a),c>=0?(r=(t.min.z-p.z)*c,o=(t.max.z-p.z)*c):(r=(t.max.z-p.z)*c,o=(t.min.z-p.z)*c),e>o||r>s?null:((r>e||e!==e)&&(e=r),(o<s||s!==s)&&(s=o),s<0?null:this.at(e>=0?e:s,i)))},intersectsBox:(s=new h.a,function(t){return null!==this.intersectBox(t,s)}),intersectTriangle:function(){var t=new h.a,i=new h.a,e=new h.a,s=new h.a;return function(n,a,r,o,h){i.subVectors(a,n),e.subVectors(r,n),s.crossVectors(i,e);var l,c=this.direction.dot(s);if(c>0){if(o)return null;l=1}else{if(!(c<0))return null;l=-1,c=-c}t.subVectors(this.origin,n);var p=l*this.direction.dot(e.crossVectors(t,e));if(p<0)return null;var d=l*this.direction.dot(i.cross(t));if(d<0)return null;if(p+d>c)return null;var u=-l*t.dot(s);return u<0?null:this.at(u/c,h)}}(),applyMatrix4:function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}})}}]);