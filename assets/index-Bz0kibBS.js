const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PracticeView-DwWwFdqV.js","assets/NavBar-CaCYtGtd.js","assets/DashboardView-DvHlJunG.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function El(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},ts=[],sn=()=>{},Qd=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tl=t=>t.startsWith("onUpdate:"),nt=Object.assign,vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gy=Object.prototype.hasOwnProperty,Ae=(t,e)=>gy.call(t,e),oe=Array.isArray,ns=t=>Ni(t)==="[object Map]",Jd=t=>Ni(t)==="[object Set]",Ih=t=>Ni(t)==="[object Date]",ue=t=>typeof t=="function",He=t=>typeof t=="string",fn=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Yd=t=>(be(t)||ue(t))&&ue(t.then)&&ue(t.catch),Xd=Object.prototype.toString,Ni=t=>Xd.call(t),my=t=>Ni(t).slice(8,-1),Zd=t=>Ni(t)==="[object Object]",Il=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ti=El(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_y=/-\w/g,yt=aa(t=>t.replace(_y,e=>e.slice(1).toUpperCase())),yy=/\B([A-Z])/g,Mr=aa(t=>t.replace(yy,"-$1").toLowerCase()),ca=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=aa(t=>t?`on${ca(t)}`:""),rn=(t,e)=>!Object.is(t,e),po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ep=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wh;const la=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Al(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?Iy(r):Al(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||be(t))return t}const Ey=/;(?![^(]*\))/g,Ty=/:([^]+)/,vy=/\/\*[^]*?\*\//g;function Iy(t){const e={};return t.replace(vy,"").split(Ey).forEach(n=>{if(n){const r=n.split(Ty);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rl(t){let e="";if(He(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Rl(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ay=El(wy);function tp(t){return!!t||t===""}function Ry(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Sl(t[r],e[r]);return n}function Sl(t,e){if(t===e)return!0;let n=Ih(t),r=Ih(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?Ry(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Sl(t[o],e[o]))return!1}}return String(t)===String(e)}const np=t=>!!(t&&t.__v_isRef===!0),Sy=t=>He(t)?t:t==null?"":oe(t)||be(t)&&(t.toString===Xd||!ue(t.toString))?np(t)?Sy(t.value):JSON.stringify(t,rp,2):String(t),rp=(t,e)=>np(e)?rp(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[sc(r,i)+" =>"]=s,n),{})}:Jd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sc(n))}:fn(e)?sc(e):be(e)&&!oe(e)&&!Zd(e)?String(e):e,sc=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class by{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){++this._on===1&&(this.prevScope=It,It=this)}off(){this._on>0&&--this._on===0&&(It=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Py(){return It}let Ne;const ic=new WeakSet;class sp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ic.has(this)&&(ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||op(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ah(this),ap(this);const e=Ne,n=qt;Ne=this,qt=!0;try{return this.fn()}finally{cp(this),Ne=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cl(e);this.deps=this.depsTail=void 0,Ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vc(this)&&this.run()}get dirty(){return Vc(this)}}let ip=0,ni,ri;function op(t,e=!1){if(t.flags|=8,e){t.next=ri,ri=t;return}t.next=ni,ni=t}function bl(){ip++}function Pl(){if(--ip>0)return;if(ri){let e=ri;for(ri=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ni;){let e=ni;for(ni=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ap(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Cl(r),Cy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Vc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pi)||(t.globalVersion=pi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Vc(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=qt;Ne=t,qt=!0;try{ap(t);const s=t.fn(t._value);(e.version===0||rn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,qt=r,cp(t),t.flags&=-3}}function Cl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Cl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const up=[];function bn(){up.push(qt),qt=!1}function Pn(){const t=up.pop();qt=t===void 0?!0:t}function Ah(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let pi=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!qt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Ny(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,hp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,pi++,this.notify(e)}notify(e){bl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pl()}}}function hp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)hp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Dc=new WeakMap,Rr=Symbol(""),Oc=Symbol(""),gi=Symbol("");function lt(t,e,n){if(qt&&Ne){let r=Dc.get(t);r||Dc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Nl),s.map=r,s.key=n),s.track()}}function vn(t,e,n,r,s,i){const o=Dc.get(t);if(!o){pi++;return}const c=l=>{l&&l.trigger()};if(bl(),e==="clear")o.forEach(c);else{const l=oe(t),h=l&&Il(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===gi||!fn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(gi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Rr)),ns(t)&&c(o.get(Oc)));break;case"delete":l||(c(o.get(Rr)),ns(t)&&c(o.get(Oc)));break;case"set":ns(t)&&c(o.get(Rr));break}}Pl()}function Gr(t){const e=we(t);return e===t?e:(lt(e,"iterate",gi),Mt(t)?e:e.map(Gt))}function ua(t){return lt(t=we(t),"iterate",gi),t}function tn(t,e){return Cn(t)?fs(Sr(t)?Gt(e):e):Gt(e)}const Vy={__proto__:null,[Symbol.iterator](){return oc(this,Symbol.iterator,t=>tn(this,t))},concat(...t){return Gr(this).concat(...t.map(e=>oe(e)?Gr(e):e))},entries(){return oc(this,"entries",t=>(t[1]=tn(this,t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(r=>tn(this,r)),arguments)},find(t,e){return mn(this,"find",t,e,n=>tn(this,n),arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,n=>tn(this,n),arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ac(this,"includes",t)},indexOf(...t){return ac(this,"indexOf",t)},join(t){return Gr(this).join(t)},lastIndexOf(...t){return ac(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...t){return Hs(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Hs(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Hs(this,"splice",t)},toReversed(){return Gr(this).toReversed()},toSorted(t){return Gr(this).toSorted(t)},toSpliced(...t){return Gr(this).toSpliced(...t)},unshift(...t){return Hs(this,"unshift",t)},values(){return oc(this,"values",t=>tn(this,t))}};function oc(t,e,n){const r=ua(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Dy=Array.prototype;function mn(t,e,n,r,s,i){const o=ua(t),c=o!==t&&!Mt(t),l=o[e];if(l!==Dy[e]){const p=l.apply(t,i);return c?Gt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,tn(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Rh(t,e,n,r){const s=ua(t),i=s!==t&&!Mt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(h,f,p){return c&&(c=!1,h=tn(t,h)),n.call(this,h,tn(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const l=s[e](o,...r);return c?tn(t,l):l}function ac(t,e,n){const r=we(t);lt(r,"iterate",gi);const s=r[e](...n);return(s===-1||s===!1)&&Ol(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function Hs(t,e,n=[]){bn(),bl();const r=we(t)[e].apply(t,n);return Pl(),Pn(),r}const Oy=El("__proto__,__v_isRef,__isVue"),fp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function ky(t){fn(t)||(t=String(t));const e=we(this);return lt(e,"has",t),e.hasOwnProperty(t)}class dp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Hy:_p:i?mp:gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=Vy[n]))return l;if(n==="hasOwnProperty")return ky}const c=Reflect.get(e,n,ft(e)?e:r);if((fn(n)?fp.has(n):Oy(n))||(s||lt(e,"get",n),i))return c;if(ft(c)){const l=o&&Il(n)?c:c.value;return s&&be(l)?xc(l):l}return be(c)?s?xc(c):ha(c):c}}class pp extends dp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&Il(n);if(!this._isShallow){const h=Cn(i);if(!Mt(r)&&!Cn(r)&&(i=we(i),r=we(r)),!o&&ft(i)&&!ft(r))return h||(i.value=r),!0}const c=o?Number(n)<e.length:Ae(e,n),l=Reflect.set(e,n,r,ft(e)?e:s);return e===we(s)&&(c?rn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!fp.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",oe(e)?"length":Rr),Reflect.ownKeys(e)}}class xy extends dp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const My=new pp,Ly=new xy,Fy=new pp(!0);const kc=t=>t,so=t=>Reflect.getPrototypeOf(t);function Uy(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=ns(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?kc:e?fs:Gt;return!e&&lt(i,"iterate",l?Oc:Rr),nt(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function io(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function By(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(rn(s,c)&&lt(o,"get",s),lt(o,"get",c));const{has:l}=so(o),h=e?kc:t?fs:Gt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(we(s),"iterate",Rr),s.size},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(rn(s,c)&&lt(o,"has",s),lt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),h=e?kc:t?fs:Gt;return!t&&lt(l,"iterate",Rr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return nt(n,t?{add:io("add"),set:io("set"),delete:io("delete"),clear:io("clear")}:{add(s){const i=we(this),o=so(i),c=we(s),l=!e&&!Mt(s)&&!Cn(s)?c:s;return o.has.call(i,l)||rn(s,l)&&o.has.call(i,s)||rn(c,l)&&o.has.call(i,c)||(i.add(l),vn(i,"add",l,l)),this},set(s,i){!e&&!Mt(i)&&!Cn(i)&&(i=we(i));const o=we(this),{has:c,get:l}=so(o);let h=c.call(o,s);h||(s=we(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?rn(i,f)&&vn(o,"set",s,i):vn(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=so(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&vn(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Uy(s,t,e)}),n}function Vl(t,e){const n=By(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const jy={get:Vl(!1,!1)},$y={get:Vl(!1,!0)},qy={get:Vl(!0,!1)};const gp=new WeakMap,mp=new WeakMap,_p=new WeakMap,Hy=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(my(t))}function ha(t){return Cn(t)?t:Dl(t,!1,My,jy,gp)}function yp(t){return Dl(t,!1,Fy,$y,mp)}function xc(t){return Dl(t,!0,Ly,qy,_p)}function Dl(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Wy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Sr(t){return Cn(t)?Sr(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function Ol(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Ky(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&ep(t,"__v_skip",!0),t}const Gt=t=>be(t)?ha(t):t,fs=t=>be(t)?xc(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function Vi(t){return Ep(t,!1)}function zy(t){return Ep(t,!0)}function Ep(t,e){return ft(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||Cn(e);e=r?e:we(e),rn(e,n)&&(this._rawValue=e,this._value=r?e:Gt(e),this.dep.trigger())}}function rs(t){return ft(t)?t.value:t}const Jy={get:(t,e,n)=>e==="__v_raw"?t:rs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Tp(t){return Sr(t)?t:new Proxy(t,Jy)}class Yy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return op(this,!0),!0}get value(){const e=this.dep.track();return lp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xy(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new Yy(r,s,n)}const oo={},Vo=new WeakMap;let vr;function Zy(t,e=!1,n=vr){if(n){let r=Vo.get(n);r||Vo.set(n,r=[]),r.push(t)}}function eE(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=J=>s?J:Mt(J)||s===!1||s===0?In(J,1):In(J);let f,p,g,y,N=!1,V=!1;if(ft(t)?(p=()=>t.value,N=Mt(t)):Sr(t)?(p=()=>h(t),N=!0):oe(t)?(V=!0,N=t.some(J=>Sr(J)||Mt(J)),p=()=>t.map(J=>{if(ft(J))return J.value;if(Sr(J))return h(J);if(ue(J))return l?l(J,2):J()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){bn();try{g()}finally{Pn()}}const J=vr;vr=f;try{return l?l(t,3,[y]):t(y)}finally{vr=J}}:p=sn,e&&s){const J=p,ce=s===!0?1/0:s;p=()=>In(J(),ce)}const F=Py(),H=()=>{f.stop(),F&&F.active&&vl(F.effects,f)};if(i&&e){const J=e;e=(...ce)=>{J(...ce),H()}}let j=V?new Array(t.length).fill(oo):oo;const G=J=>{if(!(!(f.flags&1)||!f.dirty&&!J))if(e){const ce=f.run();if(s||N||(V?ce.some((ye,w)=>rn(ye,j[w])):rn(ce,j))){g&&g();const ye=vr;vr=f;try{const w=[ce,j===oo?void 0:V&&j[0]===oo?[]:j,y];j=ce,l?l(e,3,w):e(...w)}finally{vr=ye}}}else f.run()};return c&&c(G),f=new sp(p),f.scheduler=o?()=>o(G,!1):G,y=J=>Zy(J,!1,f),g=f.onStop=()=>{const J=Vo.get(f);if(J){if(l)l(J,4);else for(const ce of J)ce();Vo.delete(f)}},e?r?G(!0):j=f.run():o?o(G.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function In(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ft(t))In(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(Jd(t)||ns(t))t.forEach(r=>{In(r,e,n)});else if(Zd(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Di(t,e,n,r){try{return r?t(...r):t()}catch(s){fa(s,e,n)}}function dn(t,e,n,r){if(ue(t)){const s=Di(t,e,n,r);return s&&Yd(s)&&s.catch(i=>{fa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){bn(),Di(i,null,10,[t,l,h]),Pn();return}}tE(t,n,s,r,o)}function tE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Zt=-1;const ss=[];let Gn=null,Wr=0;const vp=Promise.resolve();let Do=null;function Ip(t){const e=Do||vp;return t?e.then(this?t.bind(this):t):e}function nE(t){let e=Zt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function kl(t){if(!(t.flags&1)){const e=mi(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=mi(n)?_t.push(t):_t.splice(nE(e),0,t),t.flags|=1,wp()}}function wp(){Do||(Do=vp.then(Rp))}function rE(t){oe(t)?ss.push(...t):Gn&&t.id===-1?Gn.splice(Wr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),wp()}function Sh(t,e,n=Zt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ap(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>mi(n)-mi(r));if(ss.length=0,Gn){Gn.push(...e);return}for(Gn=e,Wr=0;Wr<Gn.length;Wr++){const n=Gn[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,Wr=0}}const mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rp(t){try{for(Zt=0;Zt<_t.length;Zt++){const e=_t[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<_t.length;Zt++){const e=_t[Zt];e&&(e.flags&=-2)}Zt=-1,_t.length=0,Ap(),Do=null,(_t.length||ss.length)&&Rp()}}let Nt=null,Sp=null;function Oo(t){const e=Nt;return Nt=t,Sp=t&&t.type.__scopeId||null,e}function sE(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mo(-1);const i=Oo(e);let o;try{o=t(...s)}finally{Oo(i),r._d&&Mo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function RC(t,e){if(Nt===null)return t;const n=ma(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&In(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(bn(),dn(l,n,8,[t.el,c,t,e]),Pn())}}function go(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=aT();if(r||is){let s=is?is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const iE=Symbol.for("v-scx"),oE=()=>on(iE);function mo(t,e,n){return bp(t,e,n)}function bp(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=nt({},n),l=e&&r||!e&&i!=="post";let h;if(yi){if(i==="sync"){const y=oE();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=sn,y.resume=sn,y.pause=sn,y}}const f=ht;c.call=(y,N,V)=>dn(y,f,N,V);let p=!1;i==="post"?c.scheduler=y=>{vt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,N)=>{N?y():kl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=eE(t,e,c);return yi&&(h?h.push(g):l&&g()),g}function aE(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Pp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Oi(this),c=bp(s,i.bind(r),n);return o(),c}function Pp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cE=Symbol("_vte"),lE=t=>t.__isTeleport,uE=Symbol("_leaveCb");function xl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cp(t,e){return ue(t)?nt({name:t.name},e,{setup:t}):t}function Np(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ko=new WeakMap;function si(t,e,n,r,s=!1){if(oe(t)){t.forEach((V,F)=>si(V,e&&(oe(e)?e[F]:e),n,r,s));return}if(ii(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&si(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,g=we(p),y=p===Ce?Qd:V=>bh(f,V)?!1:Ae(g,V),N=(V,F)=>!(F&&bh(f,F));if(h!=null&&h!==l){if(Ph(e),He(h))f[h]=null,y(h)&&(p[h]=null);else if(ft(h)){const V=e;N(h,V.k)&&(h.value=null),V.k&&(f[V.k]=null)}}if(ue(l))Di(l,c,12,[o,f]);else{const V=He(l),F=ft(l);if(V||F){const H=()=>{if(t.f){const j=V?y(l)?p[l]:f[l]:N()||!t.k?l.value:f[t.k];if(s)oe(j)&&vl(j,i);else if(oe(j))j.includes(i)||j.push(i);else if(V)f[l]=[i],y(l)&&(p[l]=f[l]);else{const G=[i];N(l,t.k)&&(l.value=G),t.k&&(f[t.k]=G)}}else V?(f[l]=o,y(l)&&(p[l]=o)):F&&(N(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const j=()=>{H(),ko.delete(t)};j.id=-1,ko.set(t,j),vt(j,n)}else Ph(t),H()}}}function Ph(t){const e=ko.get(t);e&&(e.flags|=8,ko.delete(t))}la().requestIdleCallback;la().cancelIdleCallback;const ii=t=>!!t.type.__asyncLoader,Vp=t=>t.type.__isKeepAlive;function hE(t,e){Dp(t,"a",e)}function fE(t,e){Dp(t,"da",e)}function Dp(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vp(s.parent.vnode)&&dE(r,e,n,s),s=s.parent}}function dE(t,e,n,r){const s=da(e,t,r,!0);Op(()=>{vl(r[e],s)},n)}function da(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bn();const c=Oi(n),l=dn(e,n,t,o);return c(),Pn(),l});return r?s.unshift(i):s.push(i),i}}const xn=t=>(e,n=ht)=>{(!yi||t==="sp")&&da(t,(...r)=>e(...r),n)},pE=xn("bm"),gE=xn("m"),mE=xn("bu"),_E=xn("u"),yE=xn("bum"),Op=xn("um"),EE=xn("sp"),TE=xn("rtg"),vE=xn("rtc");function IE(t,e=ht){da("ec",t,e)}const wE="components";function AE(t,e){return SE(wE,t,!0,e)||t}const RE=Symbol.for("v-ndc");function SE(t,e,n=!0,r=!1){const s=Nt||ht;if(s){const i=s.type;{const c=fT(i,!1);if(c&&(c===e||c===yt(e)||c===ca(yt(e))))return i}const o=Ch(s[t]||i[t],e)||Ch(s.appContext[t],e);return!o&&r?i:o}}function Ch(t,e){return t&&(t[e]||t[yt(e)]||t[ca(yt(e))])}function SC(t,e,n,r){let s;const i=n,o=oe(t);if(o||He(t)){const c=o&&Sr(t);let l=!1,h=!1;c&&(l=!Mt(t),h=Cn(t),t=ua(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?fs(Gt(t[f])):Gt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Mc=t=>t?ng(t)?ma(t):Mc(t.parent):null,oi=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mc(t.parent),$root:t=>Mc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>xp(t),$forceUpdate:t=>t.f||(t.f=()=>{kl(t.update)}),$nextTick:t=>t.n||(t.n=Ip.bind(t.proxy)),$watch:t=>aE.bind(t)}),cc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Ae(t,e),bE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cc(r,e))return o[e]=1,r[e];if(s!==Ce&&Ae(s,e))return o[e]=2,s[e];if(Ae(i,e))return o[e]=3,i[e];if(n!==Ce&&Ae(n,e))return o[e]=4,n[e];Lc&&(o[e]=0)}}const h=oi[e];let f,p;if(h)return e==="$attrs"&&lt(t.attrs,"get",""),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Ae(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ae(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cc(s,e)?(s[e]=n,!0):r!==Ce&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ce&&c[0]!=="$"&&Ae(t,c)||cc(e,c)||Ae(i,c)||Ae(r,c)||Ae(oi,c)||Ae(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lc=!0;function PE(t){const e=xp(t),n=t.proxy,r=t.ctx;Lc=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:N,activated:V,deactivated:F,beforeDestroy:H,beforeUnmount:j,destroyed:G,unmounted:J,render:ce,renderTracked:ye,renderTriggered:w,errorCaptured:E,serverPrefetch:I,expose:R,inheritAttrs:A,components:b,directives:T,filters:Ue}=e;if(h&&CE(h,r,null),o)for(const ve in o){const _e=o[ve];ue(_e)&&(r[ve]=_e.bind(n))}if(s){const ve=s.call(n,n);be(ve)&&(t.data=ha(ve))}if(Lc=!0,i)for(const ve in i){const _e=i[ve],Tt=ue(_e)?_e.bind(n,n):ue(_e.get)?_e.get.bind(n,n):sn,Qt=!ue(_e)&&ue(_e.set)?_e.set.bind(n):sn,St=jt({get:Tt,set:Qt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>St.value,set:Xe=>St.value=Xe})}if(c)for(const ve in c)kp(c[ve],r,n,ve);if(l){const ve=ue(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(_e=>{go(_e,ve[_e])})}f&&Vh(f,t,"c");function Be(ve,_e){oe(_e)?_e.forEach(Tt=>ve(Tt.bind(n))):_e&&ve(_e.bind(n))}if(Be(pE,p),Be(gE,g),Be(mE,y),Be(_E,N),Be(hE,V),Be(fE,F),Be(IE,E),Be(vE,ye),Be(TE,w),Be(yE,j),Be(Op,J),Be(EE,I),oe(R))if(R.length){const ve=t.exposed||(t.exposed={});R.forEach(_e=>{Object.defineProperty(ve,_e,{get:()=>n[_e],set:Tt=>n[_e]=Tt,enumerable:!0})})}else t.exposed||(t.exposed={});ce&&t.render===sn&&(t.render=ce),A!=null&&(t.inheritAttrs=A),b&&(t.components=b),T&&(t.directives=T),I&&Np(t)}function CE(t,e,n=sn){oe(t)&&(t=Fc(t));for(const r in t){const s=t[r];let i;be(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vh(t,e,n){dn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kp(t,e,n,r){let s=r.includes(".")?Pp(n,r):()=>n[r];if(He(t)){const i=e[t];ue(i)&&mo(s,i)}else if(ue(t))mo(s,t.bind(n));else if(be(t))if(oe(t))t.forEach(i=>kp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&mo(s,i,t)}}function xp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>xo(l,h,o,!0)),xo(l,e,o)),be(e)&&i.set(e,l),l}function xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xo(t,i,n,!0),s&&s.forEach(o=>xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=NE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const NE={data:Dh,props:Oh,emits:Oh,methods:zs,computed:zs,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:zs,directives:zs,watch:DE,provide:Dh,inject:VE};function Dh(t,e){return e?t?function(){return nt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function VE(t,e){return zs(Fc(t),Fc(e))}function Fc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function zs(t,e){return t?nt(Object.create(null),t,e):e}function Oh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:nt(Object.create(null),Nh(t),Nh(e??{})):e}function DE(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Mp(){return{app:null,config:{isNativeTag:Qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let OE=0;function kE(t,e){return function(r,s=null){ue(r)||(r=nt({},r)),s!=null&&!be(s)&&(s=null);const i=Mp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:OE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(h,...p)):ue(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const y=h._ceVNode||Dt(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),l=!0,h._container=f,f.__vue_app__=h,ma(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(dn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=is;is=h;try{return f()}finally{is=p}}};return h}}let is=null;const xE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yt(e)}Modifiers`]||t[`${Mr(e)}Modifiers`];function ME(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&xE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>He(f)?f.trim():f)),o.number&&(s=n.map(wl)));let c,l=r[c=rc(e)]||r[c=rc(yt(e))];!l&&i&&(l=r[c=rc(Mr(e))]),l&&dn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dn(h,t,6,s)}}const LE=new WeakMap;function Lp(t,e,n=!1){const r=n?LE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const f=Lp(h,e,!0);f&&(c=!0,nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(be(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):nt(o,i),be(t)&&r.set(t,o),o)}function pa(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Mr(e))||Ae(t,e))}function kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:y,ctx:N,inheritAttrs:V}=t,F=Oo(t);let H,j;try{if(n.shapeFlag&4){const J=s||r,ce=J;H=nn(h.call(ce,J,f,p,y,g,N)),j=c}else{const J=e;H=nn(J.length>1?J(p,{attrs:c,slots:o,emit:l}):J(p,null)),j=e.props?c:FE(c)}}catch(J){ai.length=0,fa(J,t,1),H=Dt(rr)}let G=H;if(j&&V!==!1){const J=Object.keys(j),{shapeFlag:ce}=G;J.length&&ce&7&&(i&&J.some(Tl)&&(j=UE(j,i)),G=ds(G,j,!1,!0))}return n.dirs&&(G=ds(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&xl(G,n.transition),H=G,Oo(F),H}const FE=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},UE=(t,e)=>{const n={};for(const r in t)(!Tl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Fp(o,r,g)&&!pa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?xh(r,o,h):!0:!!o;return!1}function xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Fp(e,t,i)&&!pa(n,i))return!0}return!1}function Fp(t,e,n){const r=t[n],s=e[n];return n==="style"&&be(r)&&be(s)?!Sl(r,s):r!==s}function jE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Up={},Bp=()=>Object.create(Up),jp=t=>Object.getPrototypeOf(t)===Up;function $E(t,e,n,r=!1){const s={},i=Bp();t.propsDefaults=Object.create(null),$p(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:yp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(pa(t.emitsOptions,g))continue;const y=e[g];if(l)if(Ae(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const N=yt(g);s[N]=Uc(l,c,N,y,t,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{$p(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Ae(e,p)&&((f=Mr(p))===p||!Ae(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Uc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&vn(t.attrs,"set","")}function $p(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ti(l))continue;const h=e[l];let f;s&&Ae(s,f=yt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:pa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=we(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Uc(s,l,p,h[p],t,!Ae(h,p))}}return o}function Uc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ae(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Oi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}const HE=new WeakMap;function qp(t,e,n=!1){const r=n?HE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,y]=qp(p,e,!0);nt(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return be(t)&&r.set(t,ts),ts;if(oe(i))for(let f=0;f<i.length;f++){const p=yt(i[f]);Mh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=yt(f);if(Mh(p)){const g=i[f],y=o[p]=oe(g)||ue(g)?{type:g}:nt({},g),N=y.type;let V=!1,F=!0;if(oe(N))for(let H=0;H<N.length;++H){const j=N[H],G=ue(j)&&j.name;if(G==="Boolean"){V=!0;break}else G==="String"&&(F=!1)}else V=ue(N)&&N.name==="Boolean";y[0]=V,y[1]=F,(V||Ae(y,"default"))&&c.push(p)}}const h=[o,c];return be(t)&&r.set(t,h),h}function Mh(t){return t[0]!=="$"&&!ti(t)}const Ml=t=>t==="_"||t==="_ctx"||t==="$stable",Ll=t=>oe(t)?t.map(nn):[nn(t)],GE=(t,e,n)=>{if(e._n)return e;const r=sE((...s)=>Ll(e(...s)),n);return r._c=!1,r},Hp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ml(s))continue;const i=t[s];if(ue(i))e[s]=GE(s,i,r);else if(i!=null){const o=Ll(i);e[s]=()=>o}}},Gp=(t,e)=>{const n=Ll(e);t.slots.default=()=>n},Wp=(t,e,n)=>{for(const r in e)(n||!Ml(r))&&(t[r]=e[r])},WE=(t,e,n)=>{const r=t.slots=Bp();if(t.vnode.shapeFlag&32){const s=e._;s?(Wp(r,e,n),n&&ep(r,"_",s,!0)):Hp(e,r)}else e&&Gp(t,e)},KE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Wp(s,e,n):(i=!e.$stable,Hp(e,s)),o=e}else e&&(Gp(t,e),o={default:1});if(i)for(const c in s)!Ml(c)&&o[c]==null&&delete s[c]},vt=XE;function zE(t){return QE(t)}function QE(t,e){const n=la();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=sn,insertStaticContent:N}=t,V=(_,v,S,D=null,L=null,O=null,W=void 0,$=null,B=!!v.dynamicChildren)=>{if(_===v)return;_&&!Gs(_,v)&&(D=k(_),Xe(_,L,O,!0),_=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:z}=v;switch(U){case ga:F(_,v,S,D);break;case rr:H(_,v,S,D);break;case uc:_==null&&j(v,S,D,W);break;case En:b(_,v,S,D,L,O,W,$,B);break;default:z&1?ce(_,v,S,D,L,O,W,$,B):z&6?T(_,v,S,D,L,O,W,$,B):(z&64||z&128)&&U.process(_,v,S,D,L,O,W,$,B,Z)}ne!=null&&L?si(ne,_&&_.ref,O,v||_,!v):ne==null&&_&&_.ref!=null&&si(_.ref,null,O,_,!0)},F=(_,v,S,D)=>{if(_==null)r(v.el=c(v.children),S,D);else{const L=v.el=_.el;v.children!==_.children&&h(L,v.children)}},H=(_,v,S,D)=>{_==null?r(v.el=l(v.children||""),S,D):v.el=_.el},j=(_,v,S,D)=>{[_.el,_.anchor]=N(_.children,v,S,D,_.el,_.anchor)},G=({el:_,anchor:v},S,D)=>{let L;for(;_&&_!==v;)L=g(_),r(_,S,D),_=L;r(v,S,D)},J=({el:_,anchor:v})=>{let S;for(;_&&_!==v;)S=g(_),s(_),_=S;s(v)},ce=(_,v,S,D,L,O,W,$,B)=>{if(v.type==="svg"?W="svg":v.type==="math"&&(W="mathml"),_==null)ye(v,S,D,L,O,W,$,B);else{const U=_.el&&_.el._isVueCE?_.el:null;try{U&&U._beginPatch(),I(_,v,L,O,W,$,B)}finally{U&&U._endPatch()}}},ye=(_,v,S,D,L,O,W,$)=>{let B,U;const{props:ne,shapeFlag:z,transition:ee,dirs:re}=_;if(B=_.el=o(_.type,O,ne&&ne.is,ne),z&8?f(B,_.children):z&16&&E(_.children,B,null,D,L,lc(_,O),W,$),re&&Er(_,null,D,"created"),w(B,_,_.scopeId,W,D),ne){for(const Se in ne)Se!=="value"&&!ti(Se)&&i(B,Se,null,ne[Se],O,D);"value"in ne&&i(B,"value",null,ne.value,O),(U=ne.onVnodeBeforeMount)&&Xt(U,D,_)}re&&Er(_,null,D,"beforeMount");const fe=JE(L,ee);fe&&ee.beforeEnter(B),r(B,v,S),((U=ne&&ne.onVnodeMounted)||fe||re)&&vt(()=>{U&&Xt(U,D,_),fe&&ee.enter(B),re&&Er(_,null,D,"mounted")},L)},w=(_,v,S,D,L)=>{if(S&&y(_,S),D)for(let O=0;O<D.length;O++)y(_,D[O]);if(L){let O=L.subTree;if(v===O||Jp(O.type)&&(O.ssContent===v||O.ssFallback===v)){const W=L.vnode;w(_,W,W.scopeId,W.slotScopeIds,L.parent)}}},E=(_,v,S,D,L,O,W,$,B=0)=>{for(let U=B;U<_.length;U++){const ne=_[U]=$?Tn(_[U]):nn(_[U]);V(null,ne,v,S,D,L,O,W,$)}},I=(_,v,S,D,L,O,W)=>{const $=v.el=_.el;let{patchFlag:B,dynamicChildren:U,dirs:ne}=v;B|=_.patchFlag&16;const z=_.props||Ce,ee=v.props||Ce;let re;if(S&&Tr(S,!1),(re=ee.onVnodeBeforeUpdate)&&Xt(re,S,v,_),ne&&Er(v,_,S,"beforeUpdate"),S&&Tr(S,!0),(z.innerHTML&&ee.innerHTML==null||z.textContent&&ee.textContent==null)&&f($,""),U?R(_.dynamicChildren,U,$,S,D,lc(v,L),O):W||_e(_,v,$,null,S,D,lc(v,L),O,!1),B>0){if(B&16)A($,z,ee,S,L);else if(B&2&&z.class!==ee.class&&i($,"class",null,ee.class,L),B&4&&i($,"style",z.style,ee.style,L),B&8){const fe=v.dynamicProps;for(let Se=0;Se<fe.length;Se++){const Te=fe[Se],it=z[Te],ot=ee[Te];(ot!==it||Te==="value")&&i($,Te,it,ot,L,S)}}B&1&&_.children!==v.children&&f($,v.children)}else!W&&U==null&&A($,z,ee,S,L);((re=ee.onVnodeUpdated)||ne)&&vt(()=>{re&&Xt(re,S,v,_),ne&&Er(v,_,S,"updated")},D)},R=(_,v,S,D,L,O,W)=>{for(let $=0;$<v.length;$++){const B=_[$],U=v[$],ne=B.el&&(B.type===En||!Gs(B,U)||B.shapeFlag&198)?p(B.el):S;V(B,U,ne,null,D,L,O,W,!0)}},A=(_,v,S,D,L)=>{if(v!==S){if(v!==Ce)for(const O in v)!ti(O)&&!(O in S)&&i(_,O,v[O],null,L,D);for(const O in S){if(ti(O))continue;const W=S[O],$=v[O];W!==$&&O!=="value"&&i(_,O,$,W,L,D)}"value"in S&&i(_,"value",v.value,S.value,L)}},b=(_,v,S,D,L,O,W,$,B)=>{const U=v.el=_?_.el:c(""),ne=v.anchor=_?_.anchor:c("");let{patchFlag:z,dynamicChildren:ee,slotScopeIds:re}=v;re&&($=$?$.concat(re):re),_==null?(r(U,S,D),r(ne,S,D),E(v.children||[],S,ne,L,O,W,$,B)):z>0&&z&64&&ee&&_.dynamicChildren&&_.dynamicChildren.length===ee.length?(R(_.dynamicChildren,ee,S,L,O,W,$),(v.key!=null||L&&v===L.subTree)&&Kp(_,v,!0)):_e(_,v,S,ne,L,O,W,$,B)},T=(_,v,S,D,L,O,W,$,B)=>{v.slotScopeIds=$,_==null?v.shapeFlag&512?L.ctx.activate(v,S,D,W,B):Ue(v,S,D,L,O,W,B):Et(_,v,B)},Ue=(_,v,S,D,L,O,W)=>{const $=_.component=oT(_,D,L);if(Vp(_)&&($.ctx.renderer=Z),cT($,!1,W),$.asyncDep){if(L&&L.registerDep($,Be,W),!_.el){const B=$.subTree=Dt(rr);H(null,B,v,S),_.placeholder=B.el}}else Be($,_,v,S,L,O,W)},Et=(_,v,S)=>{const D=v.component=_.component;if(BE(_,v,S))if(D.asyncDep&&!D.asyncResolved){ve(D,v,S);return}else D.next=v,D.update();else v.el=_.el,D.vnode=v},Be=(_,v,S,D,L,O,W)=>{const $=()=>{if(_.isMounted){let{next:z,bu:ee,u:re,parent:fe,vnode:Se}=_;{const Pt=zp(_);if(Pt){z&&(z.el=Se.el,ve(_,z,W)),Pt.asyncDep.then(()=>{vt(()=>{_.isUnmounted||U()},L)});return}}let Te=z,it;Tr(_,!1),z?(z.el=Se.el,ve(_,z,W)):z=Se,ee&&po(ee),(it=z.props&&z.props.onVnodeBeforeUpdate)&&Xt(it,fe,z,Se),Tr(_,!0);const ot=kh(_),bt=_.subTree;_.subTree=ot,V(bt,ot,p(bt.el),k(bt),_,L,O),z.el=ot.el,Te===null&&jE(_,ot.el),re&&vt(re,L),(it=z.props&&z.props.onVnodeUpdated)&&vt(()=>Xt(it,fe,z,Se),L)}else{let z;const{el:ee,props:re}=v,{bm:fe,m:Se,parent:Te,root:it,type:ot}=_,bt=ii(v);Tr(_,!1),fe&&po(fe),!bt&&(z=re&&re.onVnodeBeforeMount)&&Xt(z,Te,v),Tr(_,!0);{it.ce&&it.ce._hasShadowRoot()&&it.ce._injectChildStyle(ot,_.parent?_.parent.type:void 0);const Pt=_.subTree=kh(_);V(null,Pt,S,D,_,L,O),v.el=Pt.el}if(Se&&vt(Se,L),!bt&&(z=re&&re.onVnodeMounted)){const Pt=v;vt(()=>Xt(z,Te,Pt),L)}(v.shapeFlag&256||Te&&ii(Te.vnode)&&Te.vnode.shapeFlag&256)&&_.a&&vt(_.a,L),_.isMounted=!0,v=S=D=null}};_.scope.on();const B=_.effect=new sp($);_.scope.off();const U=_.update=B.run.bind(B),ne=_.job=B.runIfDirty.bind(B);ne.i=_,ne.id=_.uid,B.scheduler=()=>kl(ne),Tr(_,!0),U()},ve=(_,v,S)=>{v.component=_;const D=_.vnode.props;_.vnode=v,_.next=null,qE(_,v.props,D,S),KE(_,v.children,S),bn(),Sh(_),Pn()},_e=(_,v,S,D,L,O,W,$,B=!1)=>{const U=_&&_.children,ne=_?_.shapeFlag:0,z=v.children,{patchFlag:ee,shapeFlag:re}=v;if(ee>0){if(ee&128){Qt(U,z,S,D,L,O,W,$,B);return}else if(ee&256){Tt(U,z,S,D,L,O,W,$,B);return}}re&8?(ne&16&&st(U,L,O),z!==U&&f(S,z)):ne&16?re&16?Qt(U,z,S,D,L,O,W,$,B):st(U,L,O,!0):(ne&8&&f(S,""),re&16&&E(z,S,D,L,O,W,$,B))},Tt=(_,v,S,D,L,O,W,$,B)=>{_=_||ts,v=v||ts;const U=_.length,ne=v.length,z=Math.min(U,ne);let ee;for(ee=0;ee<z;ee++){const re=v[ee]=B?Tn(v[ee]):nn(v[ee]);V(_[ee],re,S,null,L,O,W,$,B)}U>ne?st(_,L,O,!0,!1,z):E(v,S,D,L,O,W,$,B,z)},Qt=(_,v,S,D,L,O,W,$,B)=>{let U=0;const ne=v.length;let z=_.length-1,ee=ne-1;for(;U<=z&&U<=ee;){const re=_[U],fe=v[U]=B?Tn(v[U]):nn(v[U]);if(Gs(re,fe))V(re,fe,S,null,L,O,W,$,B);else break;U++}for(;U<=z&&U<=ee;){const re=_[z],fe=v[ee]=B?Tn(v[ee]):nn(v[ee]);if(Gs(re,fe))V(re,fe,S,null,L,O,W,$,B);else break;z--,ee--}if(U>z){if(U<=ee){const re=ee+1,fe=re<ne?v[re].el:D;for(;U<=ee;)V(null,v[U]=B?Tn(v[U]):nn(v[U]),S,fe,L,O,W,$,B),U++}}else if(U>ee)for(;U<=z;)Xe(_[U],L,O,!0),U++;else{const re=U,fe=U,Se=new Map;for(U=fe;U<=ee;U++){const Ze=v[U]=B?Tn(v[U]):nn(v[U]);Ze.key!=null&&Se.set(Ze.key,U)}let Te,it=0;const ot=ee-fe+1;let bt=!1,Pt=0;const Bt=new Array(ot);for(U=0;U<ot;U++)Bt[U]=0;for(U=re;U<=z;U++){const Ze=_[U];if(it>=ot){Xe(Ze,L,O,!0);continue}let Qe;if(Ze.key!=null)Qe=Se.get(Ze.key);else for(Te=fe;Te<=ee;Te++)if(Bt[Te-fe]===0&&Gs(Ze,v[Te])){Qe=Te;break}Qe===void 0?Xe(Ze,L,O,!0):(Bt[Qe-fe]=U+1,Qe>=Pt?Pt=Qe:bt=!0,V(Ze,v[Qe],S,null,L,O,W,$,B),it++)}const jr=bt?YE(Bt):ts;for(Te=jr.length-1,U=ot-1;U>=0;U--){const Ze=fe+U,Qe=v[Ze],Cs=v[Ze+1],pr=Ze+1<ne?Cs.el||Qp(Cs):D;Bt[U]===0?V(null,Qe,S,pr,L,O,W,$,B):bt&&(Te<0||U!==jr[Te]?St(Qe,S,pr,2):Te--)}}},St=(_,v,S,D,L=null)=>{const{el:O,type:W,transition:$,children:B,shapeFlag:U}=_;if(U&6){St(_.component.subTree,v,S,D);return}if(U&128){_.suspense.move(v,S,D);return}if(U&64){W.move(_,v,S,Z);return}if(W===En){r(O,v,S);for(let z=0;z<B.length;z++)St(B[z],v,S,D);r(_.anchor,v,S);return}if(W===uc){G(_,v,S);return}if(D!==2&&U&1&&$)if(D===0)$.beforeEnter(O),r(O,v,S),vt(()=>$.enter(O),L);else{const{leave:z,delayLeave:ee,afterLeave:re}=$,fe=()=>{_.ctx.isUnmounted?s(O):r(O,v,S)},Se=()=>{O._isLeaving&&O[uE](!0),z(O,()=>{fe(),re&&re()})};ee?ee(O,fe,Se):Se()}else r(O,v,S)},Xe=(_,v,S,D=!1,L=!1)=>{const{type:O,props:W,ref:$,children:B,dynamicChildren:U,shapeFlag:ne,patchFlag:z,dirs:ee,cacheIndex:re}=_;if(z===-2&&(L=!1),$!=null&&(bn(),si($,null,S,_,!0),Pn()),re!=null&&(v.renderCache[re]=void 0),ne&256){v.ctx.deactivate(_);return}const fe=ne&1&&ee,Se=!ii(_);let Te;if(Se&&(Te=W&&W.onVnodeBeforeUnmount)&&Xt(Te,v,_),ne&6)Ut(_.component,S,D);else{if(ne&128){_.suspense.unmount(S,D);return}fe&&Er(_,null,v,"beforeUnmount"),ne&64?_.type.remove(_,v,S,Z,D):U&&!U.hasOnce&&(O!==En||z>0&&z&64)?st(U,v,S,!1,!0):(O===En&&z&384||!L&&ne&16)&&st(B,v,S),D&&gn(_)}(Se&&(Te=W&&W.onVnodeUnmounted)||fe)&&vt(()=>{Te&&Xt(Te,v,_),fe&&Er(_,null,v,"unmounted")},S)},gn=_=>{const{type:v,el:S,anchor:D,transition:L}=_;if(v===En){Ft(S,D);return}if(v===uc){J(_);return}const O=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:W,delayLeave:$}=L,B=()=>W(S,O);$?$(_.el,O,B):B()}else O()},Ft=(_,v)=>{let S;for(;_!==v;)S=g(_),s(_),_=S;s(v)},Ut=(_,v,S)=>{const{bum:D,scope:L,job:O,subTree:W,um:$,m:B,a:U}=_;Lh(B),Lh(U),D&&po(D),L.stop(),O&&(O.flags|=8,Xe(W,_,v,S)),$&&vt($,v),vt(()=>{_.isUnmounted=!0},v)},st=(_,v,S,D=!1,L=!1,O=0)=>{for(let W=O;W<_.length;W++)Xe(_[W],v,S,D,L)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=g(_.anchor||_.el),S=v&&v[cE];return S?g(S):v};let Y=!1;const K=(_,v,S)=>{let D;_==null?v._vnode&&(Xe(v._vnode,null,null,!0),D=v._vnode.component):V(v._vnode||null,_,v,null,null,null,S),v._vnode=_,Y||(Y=!0,Sh(D),Ap(),Y=!1)},Z={p:V,um:Xe,m:St,r:gn,mt:Ue,mc:E,pc:_e,pbc:R,n:k,o:t};return{render:K,hydrate:void 0,createApp:kE(K)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Tr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function JE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Tn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Kp(o,c)),c.type===ga&&(c.patchFlag===-1&&(c=s[i]=Tn(c)),c.el=o.el),c.type===rr&&!c.el&&(c.el=o.el)}}function YE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function zp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zp(e)}function Lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Qp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Qp(e.subTree):null}const Jp=t=>t.__isSuspense;function XE(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):rE(t)}const En=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),rr=Symbol.for("v-cmt"),uc=Symbol.for("v-stc"),ai=[];let Vt=null;function Yp(t=!1){ai.push(Vt=t?null:[])}function ZE(){ai.pop(),Vt=ai[ai.length-1]||null}let _i=1;function Mo(t,e=!1){_i+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Xp(t){return t.dynamicChildren=_i>0?Vt||ts:null,ZE(),_i>0&&Vt&&Vt.push(t),t}function bC(t,e,n,r,s,i){return Xp(tg(t,e,n,r,s,i,!0))}function Zp(t,e,n,r,s){return Xp(Dt(t,e,n,r,s,!0))}function Lo(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const eg=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ft(t)||ue(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function tg(t,e=null,n=null,r=0,s=null,i=t===En?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eg(e),ref:e&&_o(e),scopeId:Sp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return c?(Fl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),_i>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Dt=eT;function eT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===RE)&&(t=rr),Lo(t)){const c=ds(t,e,!0);return n&&Fl(c,n),_i>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(dT(t)&&(t=t.__vccOpts),e){e=tT(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=Rl(c)),be(l)&&(Ol(l)&&!oe(l)&&(l=nt({},l)),e.style=Al(l))}const o=He(t)?1:Jp(t)?128:lE(t)?64:be(t)?4:ue(t)?2:0;return tg(t,e,n,r,s,o,i,!0)}function tT(t){return t?Ol(t)||jp(t)?nt({},t):t:null}function ds(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?rT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&eg(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==En?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&xl(f,l.clone(f)),f}function nT(t=" ",e=0){return Dt(ga,null,t,e)}function PC(t="",e=!1){return e?(Yp(),Zp(rr,null,t)):Dt(rr,null,t)}function nn(t){return t==null||typeof t=="boolean"?Dt(rr):oe(t)?Dt(En,null,t.slice()):Lo(t)?Tn(t):Dt(ga,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Fl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!jp(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[nT(e)]):n=8);t.children=e,t.shapeFlag|=n}function rT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rl([e.class,r.class]));else if(s==="style")e.style=Al([e.style,r.style]);else if(oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){dn(t,e,7,[n,r])}const sT=Mp();let iT=0;function oT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sT,i={uid:iT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new by(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(r,s),emitsOptions:Lp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ME.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const aT=()=>ht||Nt;let Fo,Bc;{const t=la(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Fo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Bc=e("__VUE_SSR_SETTERS__",n=>yi=n)}const Oi=t=>{const e=ht;return Fo(t),t.scope.on(),()=>{t.scope.off(),Fo(e)}},Fh=()=>{ht&&ht.scope.off(),Fo(null)};function ng(t){return t.vnode.shapeFlag&4}let yi=!1;function cT(t,e=!1,n=!1){e&&Bc(e);const{props:r,children:s}=t.vnode,i=ng(t);$E(t,r,i,e),WE(t,s,n||e);const o=i?lT(t,e):void 0;return e&&Bc(!1),o}function lT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bE);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?hT(t):null,i=Oi(t),o=Di(r,t,0,[t.props,s]),c=Yd(o);if(Pn(),i(),(c||t.sp)&&!ii(t)&&Np(t),c){if(o.then(Fh,Fh),e)return o.then(l=>{Uh(t,l)}).catch(l=>{fa(l,t,0)});t.asyncDep=o}else Uh(t,o)}else rg(t)}function Uh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Tp(e)),rg(t)}function rg(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=Oi(t);bn();try{PE(t)}finally{Pn(),s()}}}const uT={get(t,e){return lt(t,"get",""),t[e]}};function hT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,uT),slots:t.slots,emit:t.emit,expose:e}}function ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Tp(Ky(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oi)return oi[n](t)},has(e,n){return n in e||n in oi}})):t.proxy}function fT(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function dT(t){return ue(t)&&"__vccOpts"in t}const jt=(t,e)=>Xy(t,e,yi);function sg(t,e,n){try{Mo(-1);const r=arguments.length;return r===2?be(e)&&!oe(e)?Lo(e)?Dt(t,null,[e]):Dt(t,e):Dt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lo(n)&&(n=[n]),Dt(t,e,n))}finally{Mo(1)}}const pT="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jc;const Bh=typeof window<"u"&&window.trustedTypes;if(Bh)try{jc=Bh.createPolicy("vue",{createHTML:t=>t})}catch{}const ig=jc?t=>jc.createHTML(t):t=>t,gT="http://www.w3.org/2000/svg",mT="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,jh=yn&&yn.createElement("template"),_T={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(gT,t):e==="mathml"?yn.createElementNS(mT,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jh.innerHTML=ig(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=jh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},yT=Symbol("_vtc");function ET(t,e,n){const r=t[yT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $h=Symbol("_vod"),TT=Symbol("_vsh"),vT=Symbol(""),IT=/(?:^|;)\s*display\s*:/;function wT(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&yo(r,c,"")}else for(const o in e)n[o]==null&&yo(r,o,"");for(const o in n)o==="display"&&(i=!0),yo(r,o,n[o])}else if(s){if(e!==n){const o=r[vT];o&&(n+=";"+o),r.cssText=n,i=IT.test(n)}}else e&&t.removeAttribute("style");$h in t&&(t[$h]=i?r.display:"",t[TT]&&(r.display="none"))}const qh=/\s*!important$/;function yo(t,e,n){if(oe(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AT(t,e);qh.test(n)?t.setProperty(Mr(r),n.replace(qh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],hc={};function AT(t,e){const n=hc[e];if(n)return n;let r=yt(e);if(r!=="filter"&&r in t)return hc[e]=r;r=ca(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return hc[e]=i}return e}const Gh="http://www.w3.org/1999/xlink";function Wh(t,e,n,r,s,i=Ay(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gh,e.slice(6,e.length)):t.setAttributeNS(Gh,e,n):n==null||i&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function Kh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ig(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function RT(t,e,n,r){t.removeEventListener(e,n,r)}const zh=Symbol("_vei");function ST(t,e,n,r,s=null){const i=t[zh]||(t[zh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=bT(e);if(r){const h=i[e]=NT(r,s);Kr(t,c,h,l)}else o&&(RT(t,c,o,l),i[e]=void 0)}}const Qh=/(?:Once|Passive|Capture)$/;function bT(t){let e;if(Qh.test(t)){e={};let r;for(;r=t.match(Qh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let fc=0;const PT=Promise.resolve(),CT=()=>fc||(PT.then(()=>fc=0),fc=Date.now());function NT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(VT(r,n.value),e,5,[r])};return n.value=t,n.attached=CT(),n}function VT(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ET(t,r,o):e==="style"?wT(t,n,r):oa(e)?Tl(e)||ST(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OT(t,e,r,o))?(Kh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wh(t,e,r,o,i,e!=="value")):t._isVueCE&&(kT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!He(r)))?Kh(t,yt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wh(t,e,r,o))};function OT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jh(e)&&He(n)?!1:e in t}function kT(t,e){const n=t._def.props;if(!n)return!1;const r=yt(e);return Array.isArray(n)?n.some(s=>yt(s)===r):Object.keys(n).some(s=>yt(s)===r)}const Yh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>po(e,n):e};function xT(t){t.target.composing=!0}function Xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dc=Symbol("_assign");function Zh(t,e,n){return e&&(t=t.trim()),n&&(t=wl(t)),t}const CC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[dc]=Yh(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{o.target.composing||t[dc](Zh(t.value,n,i))}),(n||i)&&Kr(t,"change",()=>{t.value=Zh(t.value,n,i)}),e||(Kr(t,"compositionstart",xT),Kr(t,"compositionend",Xh),Kr(t,"change",Xh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[dc]=Yh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?wl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},MT=["ctrl","shift","alt","meta"],LT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>MT.some(n=>t[`${n}Key`]&&!e.includes(n))},NC=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=LT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},FT=nt({patchProp:DT},_T);let ef;function UT(){return ef||(ef=zE(FT))}const BT=((...t)=>{const e=UT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$T(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function jT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $T(t){return He(t)?document.querySelector(t):t}const qT=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},HT={};function GT(t,e){const n=AE("RouterView");return Yp(),Zp(n)}const WT=qT(HT,[["render",GT]]),KT="modulepreload",zT=function(t){return"/stephantech.github.io/"+t},tf={},pc=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=zT(h),h in tf)return;tf[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":KT,f||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((y,N)=>{g.addEventListener("load",y),g.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const zr=typeof document<"u";function og(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function QT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&og(t.default)}const Ie=Object.assign;function gc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const ci=()=>{},Wt=Array.isArray;function nf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}let Me=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const ag=Symbol("");Me.MATCHER_NOT_FOUND+"",Me.NAVIGATION_GUARD_REDIRECT+"",Me.NAVIGATION_ABORTED+"",Me.NAVIGATION_CANCELLED+"",Me.NAVIGATION_DUPLICATED+"";function ps(t,e){return Ie(new Error,{type:t,[ag]:!0},e)}function _n(t,e){return t instanceof Error&&ag in t&&(e==null||!!(t.type&e))}const JT=["params","query","hash"];function YT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of JT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const XT=Symbol(""),rf=Symbol(""),_a=Symbol(""),cg=Symbol(""),$c=Symbol("");function VC(){return on(_a)}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */const lg=/#/g,ZT=/&/g,ev=/\//g,tv=/=/g,nv=/\?/g,ug=/\+/g,rv=/%5B/g,sv=/%5D/g,hg=/%5E/g,iv=/%60/g,fg=/%7B/g,ov=/%7C/g,dg=/%7D/g,av=/%20/g;function Ul(t){return t==null?"":encodeURI(""+t).replace(ov,"|").replace(rv,"[").replace(sv,"]")}function cv(t){return Ul(t).replace(fg,"{").replace(dg,"}").replace(hg,"^")}function qc(t){return Ul(t).replace(ug,"%2B").replace(av,"+").replace(lg,"%23").replace(ZT,"%26").replace(iv,"`").replace(fg,"{").replace(dg,"}").replace(hg,"^")}function lv(t){return qc(t).replace(tv,"%3D")}function uv(t){return Ul(t).replace(lg,"%23").replace(nv,"%3F")}function hv(t){return uv(t).replace(ev,"%2F")}function Ei(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const fv=/\/$/,dv=t=>t.replace(fv,"");function mc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=_v(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ei(o)}}function pv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gs(e.matched[r],n.matched[s])&&pg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!mv(t[n],e[n]))return!1;return!0}function mv(t,e){return Wt(t)?of(t,e):Wt(e)?of(e,t):(t&&t.valueOf())===(e&&e.valueOf())}function of(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _v(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hc=(function(t){return t.pop="pop",t.push="push",t})({}),_c=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function yv(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dv(t)}const Ev=/^[^#]+#/;function Tv(t,e){return t.replace(Ev,"#")+e}function vv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function Iv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const Gc=new Map;function wv(t,e){Gc.set(t,e)}function Av(t){const e=Gc.get(t);return Gc.delete(t),e}function Rv(t){return typeof t=="string"||t&&typeof t=="object"}function gg(t){return typeof t=="string"||typeof t=="symbol"}function Sv(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(ug," "),i=s.indexOf("="),o=Ei(i<0?s:s.slice(0,i)),c=i<0?null:Ei(s.slice(i+1));if(o in e){let l=e[o];Wt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function cf(t){let e="";for(let n in t){const r=t[n];if(n=lv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(s=>s&&qc(s)):[r&&qc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function bv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(ps(Me.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):Rv(g)?l(ps(Me.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function yc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(og(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Wn(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=QT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&Wn(g,n,r,o,c,s)()}))}}return i}function Pv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>gs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>gs(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v5.0.4
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */let Cv=()=>location.protocol+"//"+location.host;function mg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),sf(c,"")}return sf(n,t)+r+s}function Nv(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=mg(t,location),N=n.value,V=e.value;let F=0;if(g){if(n.value=y,e.value=g,o&&o===N){o=null;return}F=V?g.position-V.position:0}else r(y);s.forEach(H=>{H(n.value,N,{delta:F,type:Hc.pop,direction:F?F>0?_c.forward:_c.back:_c.unknown})})};function l(){o=n.value}function h(g){s.push(g);const y=()=>{const N=s.indexOf(g);N>-1&&s.splice(N,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ie({},g.state,{scroll:ya()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function lf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ya():null}}function Vv(t){const{history:e,location:n}=window,r={value:mg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Cv()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(l,h){i(l,Ie({},e.state,lf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=Ie({},s.value,e.state,{forward:l,scroll:ya()});i(f.current,f,!0),i(l,Ie({},lf(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Dv(t){t=yv(t);const e=Vv(t),n=Nv(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:Tv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ov(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Dv(t)}let wr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var We=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(We||{});const kv={type:wr.Static,value:""},xv=/[a-zA-Z0-9_]/;function Mv(t){if(!t)return[[]];if(t==="/")return[[kv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=We.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===We.Static?i.push({type:wr.Static,value:h}):n===We.Param||n===We.ParamRegExp||n===We.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:wr.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==We.ParamRegExp){r=n,n=We.EscapeNext;continue}switch(n){case We.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=We.Param):g();break;case We.EscapeNext:g(),n=r;break;case We.Param:l==="("?n=We.ParamRegExp:xv.test(l)?g():(p(),n=We.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case We.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=We.ParamRegExpEnd:f+=l;break;case We.ParamRegExpEnd:p(),n=We.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===We.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const uf="[^/]+?",Lv={sensitive:!1,strict:!1,start:!0,end:!0};var mt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(mt||{});const Fv=/[.+*?^${}()[\]/\\]/g;function Uv(t,e){const n=Ie({},Lv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[mt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=mt.Segment+(n.sensitive?mt.BonusCaseSensitive:0);if(g.type===wr.Static)p||(s+="/"),s+=g.value.replace(Fv,"\\$&"),y+=mt.Static;else if(g.type===wr.Param){const{value:N,repeatable:V,optional:F,regexp:H}=g;i.push({name:N,repeatable:V,optional:F});const j=H||uf;if(j!==uf){y+=mt.BonusCustomRegExp;try{new RegExp(`(${j})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${N}" (${j}): `+J.message)}}let G=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(G=F&&h.length<2?`(?:/${G})`:"/"+G),F&&(G+="?"),s+=G,y+=mt.Dynamic,F&&(y+=mt.BonusOptional),V&&(y+=mt.BonusRepeatable),j===".*"&&(y+=mt.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=mt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",N=i[g-1];p[N.name]=y&&N.repeatable?y.split("/"):y}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===wr.Static)f+=y.value;else if(y.type===wr.Param){const{value:N,repeatable:V,optional:F}=y,H=N in h?h[N]:"";if(Wt(H)&&!V)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const j=Wt(H)?H.join("/"):H;if(!j)if(F)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${N}"`);f+=j}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Bv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===mt.Static+mt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===mt.Static+mt.Segment?1:-1:0}function _g(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hf(r))return 1;if(hf(s))return-1}return s.length-r.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jv={strict:!1,end:!0,sensitive:!1};function $v(t,e,n){const r=Uv(Mv(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qv(t,e){const n=[],r=new Map;e=nf(jv,e);function s(p){return r.get(p)}function i(p,g,y){const N=!y,V=df(p);V.aliasOf=y&&y.record;const F=nf(e,p),H=[V];if("alias"in p){const J=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of J)H.push(df(Ie({},V,{components:y?y.record.components:V.components,path:ce,aliasOf:y?y.record:V})))}let j,G;for(const J of H){const{path:ce}=J;if(g&&ce[0]!=="/"){const ye=g.record.path,w=ye[ye.length-1]==="/"?"":"/";J.path=g.record.path+(ce&&w+ce)}if(j=$v(J,g,F),y?y.alias.push(j):(G=G||j,G!==j&&G.alias.push(j),N&&p.name&&!pf(j)&&o(p.name)),yg(j)&&l(j),V.children){const ye=V.children;for(let w=0;w<ye.length;w++)i(ye[w],j,y&&y.children[w])}y=y||j}return G?()=>{o(G)}:ci}function o(p){if(gg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=Wv(p,n);n.splice(g,0,p),p.record.name&&!pf(p)&&r.set(p.record.name,p)}function h(p,g){let y,N={},V,F;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw ps(Me.MATCHER_NOT_FOUND,{location:p});F=y.record.name,N=Ie(ff(g.params,y.keys.filter(G=>!G.optional).concat(y.parent?y.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),p.params&&ff(p.params,y.keys.map(G=>G.name))),V=y.stringify(N)}else if(p.path!=null)V=p.path,y=n.find(G=>G.re.test(V)),y&&(N=y.parse(V),F=y.record.name);else{if(y=g.name?r.get(g.name):n.find(G=>G.re.test(g.path)),!y)throw ps(Me.MATCHER_NOT_FOUND,{location:p,currentLocation:g});F=y.record.name,N=Ie({},g.params,p.params),V=y.stringify(N)}const H=[];let j=y;for(;j;)H.unshift(j.record),j=j.parent;return{name:F,path:V,params:N,matched:H,meta:Gv(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function ff(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function df(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Hv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Hv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gv(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Wv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;_g(t,e[i])<0?r=i:n=i+1}const s=Kv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Kv(t){let e=t;for(;e=e.parent;)if(yg(e)&&_g(t,e)===0)return e}function yg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function gf(t){const e=on(_a),n=on(cg),r=jt(()=>{const l=rs(t.to);return e.resolve(l)}),s=jt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(gs.bind(null,f));if(g>-1)return g;const y=mf(l[h-2]);return h>1&&mf(f)===y&&p[p.length-1].path!==y?p.findIndex(gs.bind(null,l[h-2])):g}),i=jt(()=>s.value>-1&&Xv(n.params,r.value.params)),o=jt(()=>s.value>-1&&s.value===n.matched.length-1&&pg(n.params,r.value.params));function c(l={}){if(Yv(l)){const h=e[rs(t.replace)?"replace":"push"](rs(t.to)).catch(ci);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:jt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function zv(t){return t.length===1?t[0]:t}const Qv=Cp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gf,setup(t,{slots:e}){const n=ha(gf(t)),{options:r}=on(_a),s=jt(()=>({[_f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zv(e.default(n));return t.custom?i:sg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Jv=Qv;function Yv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function mf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _f=(t,e,n)=>t??e??n,Zv=Cp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on($c),s=jt(()=>t.route||r.value),i=on(rf,0),o=jt(()=>{let h=rs(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=jt(()=>s.value.matched[o.value]);go(rf,jt(()=>o.value+1)),go(XT,c),go($c,s);const l=Vi();return mo(()=>[l.value,c.value,t.name],([h,f,p],[g,y,N])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!gs(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return yf(n.default,{Component:g,route:h});const y=p.props[f],N=y?y===!0?h.params:typeof y=="function"?y(h):y:null,F=sg(g,Ie({},N,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return yf(n.default,{Component:F,route:h})||F}}});function yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eI=Zv;function tI(t){const e=qv(t.routes,t),n=t.parseQuery||Sv,r=t.stringifyQuery||cf,s=t.history,i=Ws(),o=Ws(),c=Ws(),l=zy(qn);let h=qn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=gc.bind(null,k=>""+k),p=gc.bind(null,hv),g=gc.bind(null,Ei);function y(k,Y){let K,Z;return gg(k)?(K=e.getRecordMatcher(k),Z=Y):Z=k,e.addRoute(Z,K)}function N(k){const Y=e.getRecordMatcher(k);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(k=>k.record)}function F(k){return!!e.getRecordMatcher(k)}function H(k,Y){if(Y=Ie({},Y||l.value),typeof k=="string"){const S=mc(n,k,Y.path),D=e.resolve({path:S.path},Y),L=s.createHref(S.fullPath);return Ie(S,D,{params:g(D.params),hash:Ei(S.hash),redirectedFrom:void 0,href:L})}let K;if(k.path!=null)K=Ie({},k,{path:mc(n,k.path,Y.path).path});else{const S=Ie({},k.params);for(const D in S)S[D]==null&&delete S[D];K=Ie({},k,{params:p(S)}),Y.params=p(Y.params)}const Z=e.resolve(K,Y),de=k.hash||"";Z.params=f(g(Z.params));const _=pv(r,Ie({},k,{hash:cv(de),path:Z.path})),v=s.createHref(_);return Ie({fullPath:_,hash:de,query:r===cf?bv(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:v})}function j(k){return typeof k=="string"?mc(n,k,l.value.path):Ie({},k)}function G(k,Y){if(h!==k)return ps(Me.NAVIGATION_CANCELLED,{from:Y,to:k})}function J(k){return w(k)}function ce(k){return J(Ie(j(k),{replace:!0}))}function ye(k,Y){const K=k.matched[k.matched.length-1];if(K&&K.redirect){const{redirect:Z}=K;let de=typeof Z=="function"?Z(k,Y):Z;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=j(de):{path:de},de.params={}),Ie({query:k.query,hash:k.hash,params:de.path!=null?{}:k.params},de)}}function w(k,Y){const K=h=H(k),Z=l.value,de=k.state,_=k.force,v=k.replace===!0,S=ye(K,Z);if(S)return w(Ie(j(S),{state:typeof S=="object"?Ie({},de,S.state):de,force:_,replace:v}),Y||K);const D=K;D.redirectedFrom=Y;let L;return!_&&gv(r,Z,K)&&(L=ps(Me.NAVIGATION_DUPLICATED,{to:D,from:Z}),St(Z,Z,!0,!1)),(L?Promise.resolve(L):R(D,Z)).catch(O=>_n(O)?_n(O,Me.NAVIGATION_GUARD_REDIRECT)?O:Qt(O):_e(O,D,Z)).then(O=>{if(O){if(_n(O,Me.NAVIGATION_GUARD_REDIRECT))return w(Ie({replace:v},j(O.to),{state:typeof O.to=="object"?Ie({},de,O.to.state):de,force:_}),Y||D)}else O=b(D,Z,!0,v,de);return A(D,Z,O),O})}function E(k,Y){const K=G(k,Y);return K?Promise.reject(K):Promise.resolve()}function I(k){const Y=Ft.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(k):k()}function R(k,Y){let K;const[Z,de,_]=Pv(k,Y);K=yc(Z.reverse(),"beforeRouteLeave",k,Y);for(const S of Z)S.leaveGuards.forEach(D=>{K.push(Wn(D,k,Y))});const v=E.bind(null,k,Y);return K.push(v),st(K).then(()=>{K=[];for(const S of i.list())K.push(Wn(S,k,Y));return K.push(v),st(K)}).then(()=>{K=yc(de,"beforeRouteUpdate",k,Y);for(const S of de)S.updateGuards.forEach(D=>{K.push(Wn(D,k,Y))});return K.push(v),st(K)}).then(()=>{K=[];for(const S of _)if(S.beforeEnter)if(Wt(S.beforeEnter))for(const D of S.beforeEnter)K.push(Wn(D,k,Y));else K.push(Wn(S.beforeEnter,k,Y));return K.push(v),st(K)}).then(()=>(k.matched.forEach(S=>S.enterCallbacks={}),K=yc(_,"beforeRouteEnter",k,Y,I),K.push(v),st(K))).then(()=>{K=[];for(const S of o.list())K.push(Wn(S,k,Y));return K.push(v),st(K)}).catch(S=>_n(S,Me.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function A(k,Y,K){c.list().forEach(Z=>I(()=>Z(k,Y,K)))}function b(k,Y,K,Z,de){const _=G(k,Y);if(_)return _;const v=Y===qn,S=zr?history.state:{};K&&(Z||v?s.replace(k.fullPath,Ie({scroll:v&&S&&S.scroll},de)):s.push(k.fullPath,de)),l.value=k,St(k,Y,K,v),Qt()}let T;function Ue(){T||(T=s.listen((k,Y,K)=>{if(!Ut.listening)return;const Z=H(k),de=ye(Z,Ut.currentRoute.value);if(de){w(Ie(de,{replace:!0,force:!0}),Z).catch(ci);return}h=Z;const _=l.value;zr&&wv(af(_.fullPath,K.delta),ya()),R(Z,_).catch(v=>_n(v,Me.NAVIGATION_ABORTED|Me.NAVIGATION_CANCELLED)?v:_n(v,Me.NAVIGATION_GUARD_REDIRECT)?(w(Ie(j(v.to),{force:!0}),Z).then(S=>{_n(S,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Hc.pop&&s.go(-1,!1)}).catch(ci),Promise.reject()):(K.delta&&s.go(-K.delta,!1),_e(v,Z,_))).then(v=>{v=v||b(Z,_,!1),v&&(K.delta&&!_n(v,Me.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===Hc.pop&&_n(v,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(Z,_,v)}).catch(ci)}))}let Et=Ws(),Be=Ws(),ve;function _e(k,Y,K){Qt(k);const Z=Be.list();return Z.length?Z.forEach(de=>de(k,Y,K)):console.error(k),Promise.reject(k)}function Tt(){return ve&&l.value!==qn?Promise.resolve():new Promise((k,Y)=>{Et.add([k,Y])})}function Qt(k){return ve||(ve=!k,Ue(),Et.list().forEach(([Y,K])=>k?K(k):Y()),Et.reset()),k}function St(k,Y,K,Z){const{scrollBehavior:de}=t;if(!zr||!de)return Promise.resolve();const _=!K&&Av(af(k.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return Ip().then(()=>de(k,Y,_)).then(v=>v&&Iv(v)).catch(v=>_e(v,k,Y))}const Xe=k=>s.go(k);let gn;const Ft=new Set,Ut={currentRoute:l,listening:!0,addRoute:y,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:V,resolve:H,options:t,push:J,replace:ce,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Be.add,isReady:Tt,install(k){k.component("RouterLink",Jv),k.component("RouterView",eI),k.config.globalProperties.$router=Ut,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),zr&&!gn&&l.value===qn&&(gn=!0,J(s.location).catch(Z=>{}));const Y={};for(const Z in qn)Object.defineProperty(Y,Z,{get:()=>l.value[Z],enumerable:!0});k.provide(_a,Ut),k.provide(cg,yp(Y)),k.provide($c,l);const K=k.unmount;Ft.add(k),k.unmount=function(){Ft.delete(k),Ft.size<1&&(h=qn,T&&T(),T=null,l.value=qn,gn=!1,ve=!1),K()}}};function st(k){return k.reduce((Y,K)=>Y.then(()=>I(K)),Promise.resolve())}return Ut}const nI=()=>{};var Ef={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new sI;const g=i<<2|c>>4;if(r.push(g),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(t){const e=Eg(t);return Tg.encodeByteArray(e,!0)},Uo=function(t){return iI(t).replace(/\./g,"")},vg=function(t){try{return Tg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=()=>oI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof Ef>"u")return;const t=Ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vg(t[1]);return e&&JSON.parse(e)},Ea=()=>{try{return nI()||aI()||cI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ig=t=>{var e,n;return(n=(e=Ea())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},uI=t=>{const e=Ig(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wg=()=>{var t;return(t=Ea())==null?void 0:t.config},Ag=t=>{var e;return(e=Ea())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function pI(){var e;const t=(e=Ea())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _I(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EI(){return!pI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=II,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,c,r)}}function wI(t,e){return t.replace(AI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tf(i)&&Tf(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SI(t,e){const n=new bI(t,e);return n.subscribe.bind(n)}class bI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ec),s.error===void 0&&(s.error=Ec),s.complete===void 0&&(s.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rg(t){return(await fetch(t,{credentials:"include"})).ok}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===Ir?void 0:t}function VI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const OI={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},kI=pe.INFO,xI={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},MI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bl{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=MI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let vf,If;function FI(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return If||(If=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sg=new WeakMap,Wc=new WeakMap,bg=new WeakMap,Tc=new WeakMap,jl=new WeakMap;function BI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sg.set(n,t)}).catch(()=>{}),jl.set(e,t),e}function jI(t){if(Wc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wc.set(t,e)}let Kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $I(t){Kc=t(Kc)}function qI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vc(this),e,...n);return bg.set(r,e.sort?e.sort():[e]),Xn(r)}:UI().includes(t)?function(...e){return t.apply(vc(this),e),Xn(Sg.get(this))}:function(...e){return Xn(t.apply(vc(this),e))}}function HI(t){return typeof t=="function"?qI(t):(t instanceof IDBTransaction&&jI(t),LI(t,FI())?new Proxy(t,Kc):t)}function Xn(t){if(t instanceof IDBRequest)return BI(t);if(Tc.has(t))return Tc.get(t);const e=HI(t);return e!==t&&(Tc.set(t,e),jl.set(e,t)),e}const vc=t=>jl.get(t);function GI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const WI=["get","getKey","getAll","getAllKeys","count"],KI=["put","add","delete","clear"],Ic=new Map;function wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=KI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ic.set(e,i),i}$I(t=>({...t,get:(e,n,r)=>wf(e,n)||t.get(e,n,r),has:(e,n)=>!!wf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",Af="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Bl("@firebase/app"),JI="@firebase/app-compat",YI="@firebase/analytics-compat",XI="@firebase/analytics",ZI="@firebase/app-check-compat",ew="@firebase/app-check",tw="@firebase/auth",nw="@firebase/auth-compat",rw="@firebase/database",sw="@firebase/data-connect",iw="@firebase/database-compat",ow="@firebase/functions",aw="@firebase/functions-compat",cw="@firebase/installations",lw="@firebase/installations-compat",uw="@firebase/messaging",hw="@firebase/messaging-compat",fw="@firebase/performance",dw="@firebase/performance-compat",pw="@firebase/remote-config",gw="@firebase/remote-config-compat",mw="@firebase/storage",_w="@firebase/storage-compat",yw="@firebase/firestore",Ew="@firebase/ai",Tw="@firebase/firestore-compat",vw="firebase",Iw="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",ww={[zc]:"fire-core",[JI]:"fire-core-compat",[XI]:"fire-analytics",[YI]:"fire-analytics-compat",[ew]:"fire-app-check",[ZI]:"fire-app-check-compat",[tw]:"fire-auth",[nw]:"fire-auth-compat",[rw]:"fire-rtdb",[sw]:"fire-data-connect",[iw]:"fire-rtdb-compat",[ow]:"fire-fn",[aw]:"fire-fn-compat",[cw]:"fire-iid",[lw]:"fire-iid-compat",[uw]:"fire-fcm",[hw]:"fire-fcm-compat",[fw]:"fire-perf",[dw]:"fire-perf-compat",[pw]:"fire-rc",[gw]:"fire-rc-compat",[mw]:"fire-gcs",[_w]:"fire-gcs-compat",[yw]:"fire-fst",[Tw]:"fire-fst-compat",[Ew]:"fire-vertex","fire-js":"fire-js",[vw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Map,Aw=new Map,Jc=new Map;function Rf(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(Jc.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Bo.values())Rf(n,t);for(const n of Aw.values())Rf(n,t);return!0}function $l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new ki("app","Firebase",Rw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=Iw;function Pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Qc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=wg()),!n)throw Zn.create("no-options");const i=Bo.get(s);if(i){if(Cr(n,i.options)&&Cr(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const o=new DI(s);for(const l of Jc.values())o.addComponent(l);const c=new Sw(n,r,o);return Bo.set(s,c),c}function Cg(t=Qc){const e=Bo.get(t);if(!e&&t===Qc&&wg())return Pg();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){let r=ww[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}ms(new Nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="firebase-heartbeat-database",Pw=1,Ti="firebase-heartbeat-store";let wc=null;function Ng(){return wc||(wc=GI(bw,Pw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),wc}async function Cw(t){try{const n=(await Ng()).transaction(Ti),r=await n.objectStore(Ti).get(Vg(t));return await n.done,r}catch(e){if(e instanceof Mn)Nn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function Sf(t,e){try{const r=(await Ng()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,Vg(t)),await r.done}catch(n){if(n instanceof Mn)Nn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=1024,Vw=30;class Dw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vw){const o=xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bf(),{heartbeatsToSend:r,unsentEntries:s}=Ow(this._heartbeatsCache.heartbeats),i=Uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function bf(){return new Date().toISOString().substring(0,10)}function Ow(t,e=Nw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?vI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pf(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}function xw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){ms(new Nr("platform-logger",e=>new zI(e),"PRIVATE")),ms(new Nr("heartbeat",e=>new Dw(e),"PRIVATE")),er(zc,Af,t),er(zc,Af,"esm2020"),er("fire-js","")}Mw("");var Lw="firebase",Fw="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(Lw,Fw,"app");function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uw=Dg,Og=new ki("auth","Firebase",Dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Bl("@firebase/auth");function Bw(t,...e){jo.logLevel<=pe.WARN&&jo.warn(`Auth (${ws}): ${t}`,...e)}function Eo(t,...e){jo.logLevel<=pe.ERROR&&jo.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw ql(t,...e)}function an(t,...e){return ql(t,...e)}function kg(t,e,n){const r={...Uw(),[e]:n};return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return kg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ql(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Og.create(t,...e)}function se(t,e,...n){if(!t)throw ql(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function Vn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function jw(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jw()||mI()||"connection"in navigator)?navigator.onLine:!0}function qw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=dI()||_I()}get(){return $w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ww=new Li(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hr(t,e,n,r,s={}){return Mg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=xi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return gI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Mi(t.emulatorConfig.host)&&(h.credentials="include"),xg.fetch()(await Lg(t,t.config.apiHost,n,c),h)})}async function Mg(t,e,n){t._canInitEmulator=!1;const r={...Hw,...e};try{const s=new zw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ao(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw kg(t,f,h);Kt(t,f)}}catch(s){if(s instanceof Mn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function Fi(t,e,n,r,s={}){const i=await hr(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hl(t.config,s):`${t.config.apiScheme}://${s}`;return Gw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Kw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Ww.get())})}}function ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Nf(t){return t!==void 0&&t.enterprise!==void 0}class Qw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jw(t,e){return hr(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function $o(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xw(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=Gl(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:li(Ac(s.auth_time)),issuedAtTime:li(Ac(s.iat)),expirationTime:li(Ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Gl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=vg(n);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vf(t){const e=Gl(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&Zw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await vi(t,$o(e,{idToken:n}));se(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Fg(s.providerUserInfo):[],o=nA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function tA(t){const e=ze(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){const n=await Mg(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Lg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Mi(t.emulatorConfig.host)&&(l.credentials="include"),xg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sA(t,e){return hr(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Vf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xw(this,e)}reload(){return tA(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await vi(this,Yw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:y,providerData:N,stsTokenManager:V}=n;se(p&&V,e,"internal-error");const F=os.fromJSON(this.name,V);se(typeof p=="string",e,"internal-error"),Hn(r,e.name),Hn(s,e.name),se(typeof g=="boolean",e,"internal-error"),se(typeof y=="boolean",e,"internal-error"),Hn(i,e.name),Hn(o,e.name),Hn(c,e.name),Hn(l,e.name),Hn(h,e.name),Hn(f,e.name);const H=new $t({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:F,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(H.providerData=N.map(j=>({...j}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function An(t){Vn(t instanceof Function,"Expected a class definition");let e=Df.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Df.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ug.type="NONE";const Of=Ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=To(this.userKey,s.apiKey,i),this.fullPersistenceKey=To("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $o(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(An(Of),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||An(Of);const o=To(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await $o(e,{idToken:f}).catch(()=>{});if(!g)break;p=await $t._fromGetAccountInfoResponse(e,g,f)}else p=$t._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gg(e))return"Blackberry";if(Wg(e))return"Webos";if(jg(e))return"Safari";if((e.includes("chrome/")||$g(e))&&!e.includes("edge/"))return"Chrome";if(Hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bg(t=dt()){return/firefox\//i.test(t)}function jg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $g(t=dt()){return/crios\//i.test(t)}function qg(t=dt()){return/iemobile/i.test(t)}function Hg(t=dt()){return/android/i.test(t)}function Gg(t=dt()){return/blackberry/i.test(t)}function Wg(t=dt()){return/webos/i.test(t)}function Wl(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iA(t=dt()){var e;return Wl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function oA(){return yI()&&document.documentMode===10}function Kg(t=dt()){return Wl(t)||Hg(t)||Wg(t)||Gg(t)||/windows phone/i.test(t)||qg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e=[]){let n;switch(t){case"Browser":n=kf(dt());break;case"Worker":n=`${kf(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e={}){return hr(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=6;class uA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??lA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new aA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $o(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(Rn(this));const n=e?ze(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cA(this),n=new uA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Bw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Lr(t){return ze(t)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fA(t){Ta=t}function Qg(t){return Ta.loadJS(t)}function dA(){return Ta.recaptchaEnterpriseScript}function pA(){return Ta.gapiScript}function gA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mA{constructor(){this.enterprise=new _A}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _A{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yA="recaptcha-enterprise",Jg="NO_RECAPTCHA";class EA{constructor(e){this.type=yA,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Jw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Qw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Nf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Jg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Nf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dA();l.length!==0&&(l+=c),Qg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Mf(t,e,n,r=!1,s=!1){const i=new EA(t);let o;if(s)o=Jg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Zc(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Mf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t,e){const n=$l(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function vA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IA(t,e,n){const r=Lr(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Yg(e),{host:o,port:c}=wA(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(Cr(h,r.config.emulator)&&Cr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Mi(o)?Rg(`${i}//${o}${l}`):AA()}function Yg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wA(t){const e=Yg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lf(o)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function RA(t,e){return hr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e){return Fi(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e){return Fi(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function PA(t,e){return Fi(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Kl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,n,"signInWithPassword",SA);case"emailLink":return bA(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,r,"signUpPassword",RA);case"emailLink":return PA(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return Fi(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="http://localhost";class Vr extends Kl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:CA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VA(t){const e=Qs(Js(t)).link,n=e?Qs(Js(e)).deep_link_id:null,r=Qs(Js(t)).deep_link_id;return(r?Qs(Js(r)).link:null)||r||n||e||t}class zl{constructor(e){const n=Qs(Js(e)),r=n.apiKey??null,s=n.oobCode??null,i=NA(n.mode??null);se(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VA(e);try{return new zl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zl.parseLink(n);return se(r,"argument-error"),Ii._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Xg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ui{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ui{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ui{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t,e){return Fi(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=Ff(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ff(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ho(e,n,r,s)}}function Zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,i,e,r):i})}async function OA(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await vi(t,Zg(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Gl(i.idToken);se(o,r,"internal-error");const{sub:c}=o;return se(t.uid===c,r,"user-mismatch"),Dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e,n=!1){if(kt(t.app))return Promise.reject(Rn(t));const r="signIn",s=await Zg(t,r,e),i=await Dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xA(t,e){return em(Lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MA(t,e,n){if(kt(t.app))return Promise.reject(Rn(t));const r=Lr(t),o=await Zc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tm(t),l}),c=await Dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function LA(t,e,n){return kt(t.app)?Promise.reject(Rn(t)):xA(ze(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tm(t),r})}function FA(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function UA(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function BA(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function jA(t){return ze(t).signOut()}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=1e3,qA=10;class rm extends nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const HA=rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sm.type="SESSION";const im=sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await GA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ql("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function KA(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function zA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function JA(){return om()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebaseLocalStorageDb",YA=1,Wo="firebaseLocalStorage",cm="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ia(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function XA(){const t=indexedDB.deleteDatabase(am);return new Bi(t).toPromise()}function el(){const t=indexedDB.open(am,YA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wo,{keyPath:cm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await XA(),e(await el()))})})}async function Uf(t,e,n){const r=Ia(t,!0).put({[cm]:e,value:n});return new Bi(r).toPromise()}async function ZA(t,e){const n=Ia(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function Bf(t,e){const n=Ia(t,!0).delete(e);return new Bi(n).toPromise()}const eR=800,tR=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await el(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await zA(),!this.activeServiceWorker)return;this.sender=new WA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await el();return await Uf(e,Go,"1"),await Bf(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ia(s,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const nR=lm;new Li(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t,e){return e?An(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends Kl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sR(t){return em(t.auth,new Jl(t),t.bypassAuthState)}function iR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),kA(n,new Jl(t),t.bypassAuthState)}async function oR(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),OA(n,new Jl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sR;case"linkViaPopup":case"linkViaRedirect":return oR;case"reauthViaPopup":case"reauthViaRedirect":return iR;default:Kt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new Li(2e3,1e4);class Zr extends um{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aR.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="pendingRedirect",vo=new Map;class lR extends um{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await uR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uR(t,e){const n=dR(e),r=fR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hR(t,e){vo.set(t._key(),e)}function fR(t){return An(t._redirectPersistence)}function dR(t){return To(cR,t.config.apiKey,t.name)}async function pR(t,e,n=!1){if(kt(t.app))return Promise.reject(Rn(t));const r=Lr(t),s=rR(r,e),o=await new lR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=600*1e3;class mR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_R(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hm(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(e))}saveEventToCache(e){this.cachedEventUids.add(jf(e)),this.lastProcessedEventTime=Date.now()}}function jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _R(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function vR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yR(t);for(const n of e)try{if(IR(n))return}catch{}Kt(t,"unauthorized-domain")}function IR(t){const e=Yc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TR.test(n))return!1;if(ER.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new Li(3e4,6e4);function $f(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AR(t){return new Promise((e,n)=>{var s,i,o;function r(){$f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$f(),n(an(t,"network-request-failed"))},timeout:wR.get()})}if((i=(s=cn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=cn().gapi)!=null&&o.load)r();else{const c=gA("iframefcb");return cn()[c]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},Qg(`${pA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function RR(t){return Io=Io||AR(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Li(5e3,15e3),bR="__/auth/iframe",PR="emulator/auth/iframe",CR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VR(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hl(e,PR):`https://${t.config.authDomain}/${bR}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=NR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function DR(t){const e=await RR(t),n=cn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:VR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},SR.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kR=500,xR=600,MR="_blank",LR="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FR(t,e,n,r=kR,s=xR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...OR,width:r.toString(),height:s.toString(),top:i,left:o},h=dt().toLowerCase();n&&(c=$g(h)?MR:n),Bg(h)&&(e=e||LR,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,N])=>`${g}${y}=${N},`,"");if(iA(h)&&c!=="_self")return UR(e||"",c),new qf(null);const p=window.open(e||"",c,f);se(p,t,"popup-blocked");try{p.focus()}catch{}return new qf(p)}function UR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="__/auth/handler",jR="emulator/auth/handler",$R=encodeURIComponent("fac");async function Hf(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof Xg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ui){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${$R}=${encodeURIComponent(l)}`:"";return`${qR(t)}?${xi(c).slice(1)}${h}`}function qR({config:t}){return t.emulator?Hl(t,jR):`https://${t.authDomain}/${BR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="webStorageSupport";class HR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=im,this._completeRedirectFn=pR,this._overrideRedirectResult=hR}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Hf(e,n,r,Yc(),s);return FR(e,i,Ql())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hf(e,n,r,Yc(),s);return KA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DR(e),r=new mR(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Rc];i!==void 0&&n(!!i),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kg()||jg()||Wl()}}const GR=HR;var Gf="@firebase/auth",Wf="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zR(t){ms(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zg(t)},h=new hA(r,s,i,l);return vA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new Nr("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new WR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Gf,Wf,KR(t)),er(Gf,Wf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=300,JR=Ag("authIdTokenMaxAge")||QR;let Kf=null;const YR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JR)return;const s=n==null?void 0:n.token;Kf!==s&&(Kf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XR(t=Cg()){const e=$l(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TA(t,{popupRedirectResolver:GR,persistence:[nR,HA,im]}),r=Ag("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=YR(i.toString());UA(n,o,()=>o(n.currentUser)),FA(n,c=>o(c))}}const s=Ig("auth");return s&&IA(n,`http://${s}`),n}function ZR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zR("Browser");var zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,fm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function I(){}I.prototype=E.prototype,w.F=E.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(R,A,b){for(var T=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)T[Ue-2]=arguments[Ue];return E.prototype[A].apply(R,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,E,I){I||(I=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(A=0;A<16;++A)R[A]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=w.g[0],I=w.g[1],A=w.g[2];let b=w.g[3],T;T=E+(b^I&(A^b))+R[0]+3614090360&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[1]+3905402710&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[2]+606105819&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[3]+3250441966&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(b^I&(A^b))+R[4]+4118548399&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[5]+1200080426&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[6]+2821735955&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[7]+4249261313&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(b^I&(A^b))+R[8]+1770035416&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[9]+2336552879&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[10]+4294925233&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[11]+2304563134&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(b^I&(A^b))+R[12]+1804603682&4294967295,E=I+(T<<7&4294967295|T>>>25),T=b+(A^E&(I^A))+R[13]+4254626195&4294967295,b=E+(T<<12&4294967295|T>>>20),T=A+(I^b&(E^I))+R[14]+2792965006&4294967295,A=b+(T<<17&4294967295|T>>>15),T=I+(E^A&(b^E))+R[15]+1236535329&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(A^b&(I^A))+R[1]+4129170786&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[6]+3225465664&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[11]+643717713&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[0]+3921069994&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^b&(I^A))+R[5]+3593408605&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[10]+38016083&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[15]+3634488961&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[4]+3889429448&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^b&(I^A))+R[9]+568446438&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[14]+3275163606&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[3]+4107603335&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[8]+1163531501&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^b&(I^A))+R[13]+2850285829&4294967295,E=I+(T<<5&4294967295|T>>>27),T=b+(I^A&(E^I))+R[2]+4243563512&4294967295,b=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(b^E))+R[7]+1735328473&4294967295,A=b+(T<<14&4294967295|T>>>18),T=I+(b^E&(A^b))+R[12]+2368359562&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(I^A^b)+R[5]+4294588738&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[8]+2272392833&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[11]+1839030562&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[14]+4259657740&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^b)+R[1]+2763975236&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[4]+1272893353&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[7]+4139469664&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[10]+3200236656&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^b)+R[13]+681279174&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[0]+3936430074&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[3]+3572445317&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[6]+76029189&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^b)+R[9]+3654602809&4294967295,E=I+(T<<4&4294967295|T>>>28),T=b+(E^I^A)+R[12]+3873151461&4294967295,b=E+(T<<11&4294967295|T>>>21),T=A+(b^E^I)+R[15]+530742520&4294967295,A=b+(T<<16&4294967295|T>>>16),T=I+(A^b^E)+R[2]+3299628645&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(A^(I|~b))+R[0]+4096336452&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[7]+1126891415&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[14]+2878612391&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[5]+4237533241&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~b))+R[12]+1700485571&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[3]+2399980690&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[10]+4293915773&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[1]+2240044497&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~b))+R[8]+1873313359&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[15]+4264355552&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[6]+2734768916&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[13]+1309151649&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~b))+R[4]+4149444226&4294967295,E=I+(T<<6&4294967295|T>>>26),T=b+(I^(E|~A))+R[11]+3174756917&4294967295,b=E+(T<<10&4294967295|T>>>22),T=A+(E^(b|~I))+R[2]+718787259&4294967295,A=b+(T<<15&4294967295|T>>>17),T=I+(b^(A|~E))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const I=E-this.blockSize,R=this.C;let A=this.h,b=0;for(;b<E;){if(A==0)for(;b<=I;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<E;)if(R[A++]=w.charCodeAt(b++),A==this.blockSize){s(this,R),A=0;break}}else for(;b<E;)if(R[A++]=w[b++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)w[E++]=this.g[I]>>>R&255;return w};function i(w,E){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=E(w)}function o(w,E){this.h=E;const I=[];let R=!0;for(let A=w.length-1;A>=0;A--){const b=w[A]|0;R&&b==E||(I[A]=b,R=!1)}this.g=I}var c={};function l(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return F(h(-w));const E=[];let I=1;for(let R=0;w>=I;R++)E[R]=w/I|0,I*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return F(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(E,8));let R=p;for(let b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b);const T=parseInt(w.substring(b,b+A),E);A<8?(A=h(Math.pow(E,A)),R=R.j(A).add(h(T))):(R=R.j(I),R=R.add(h(T)))}return R}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-F(this).m();let w=0,E=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);w+=(R>=0?R:4294967296+R)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(V(this))return"-"+F(this).toString(w);const E=h(Math.pow(w,6));var I=this;let R="";for(;;){const A=J(I,E).g;I=H(I,A.j(E));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=A,N(I))return b+R;for(;b.length<6;)b="0"+b;R=b+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=H(this,w),V(w)?-1:N(w)?0:1};function F(w){const E=w.g.length,I=[];for(let R=0;R<E;R++)I[R]=~w.g[R];return new o(I,~w.h).add(g)}t.abs=function(){return V(this)?F(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),I=[];let R=0;for(let A=0;A<=E;A++){let b=R+(this.i(A)&65535)+(w.i(A)&65535),T=(b>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=T>>>16,b&=65535,T&=65535,I[A]=T<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function H(w,E){return w.add(F(E))}t.j=function(w){if(N(this)||N(w))return p;if(V(this))return V(w)?F(this).j(F(w)):F(F(this).j(w));if(V(w))return F(this.j(F(w)));if(this.l(y)<0&&w.l(y)<0)return h(this.m()*w.m());const E=this.g.length+w.g.length,I=[];for(var R=0;R<2*E;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const b=this.i(R)>>>16,T=this.i(R)&65535,Ue=w.i(A)>>>16,Et=w.i(A)&65535;I[2*R+2*A]+=T*Et,j(I,2*R+2*A),I[2*R+2*A+1]+=b*Et,j(I,2*R+2*A+1),I[2*R+2*A+1]+=T*Ue,j(I,2*R+2*A+1),I[2*R+2*A+2]+=b*Ue,j(I,2*R+2*A+2)}for(w=0;w<E;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=E;w<2*E;w++)I[w]=0;return new o(I,0)};function j(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function G(w,E){this.g=w,this.h=E}function J(w,E){if(N(E))throw Error("division by zero");if(N(w))return new G(p,p);if(V(w))return E=J(F(w),E),new G(F(E.g),F(E.h));if(V(E))return E=J(w,F(E)),new G(F(E.g),E.h);if(w.g.length>30){if(V(w)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var I=g,R=E;R.l(w)<=0;)I=ce(I),R=ce(R);var A=ye(I,1),b=ye(R,1);for(R=ye(R,2),I=ye(I,2);!N(R);){var T=b.add(R);T.l(w)<=0&&(A=A.add(I),b=T),R=ye(R,1),I=ye(I,1)}return E=H(w,A.j(E)),new G(A,E)}for(A=p;w.l(E)>=0;){for(I=Math.max(1,Math.floor(w.m()/E.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),b=h(I),T=b.j(E);V(T)||T.l(w)>0;)I-=R,b=h(I),T=b.j(E);N(b)&&(b=g),A=A.add(b),w=H(w,T)}return new G(A,w)}t.B=function(w){return J(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)&w.i(R);return new o(I,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)|w.i(R);return new o(I,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)^w.i(R);return new o(I,this.h^w.h)};function ce(w){const E=w.g.length+1,I=[];for(let R=0;R<E;R++)I[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(I,w.h)}function ye(w,E){const I=E>>5;E%=32;const R=w.g.length-I,A=[];for(let b=0;b<R;b++)A[b]=E>0?w.i(b+I)>>>E|w.i(b+I+1)<<32-E:w.i(b+I);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,tr=o}).apply(typeof zf<"u"?zf:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dm,Ys,pm,wo,tl,gm,mm,_m;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,C){for(var q=Array(arguments.length-2),he=2;he<arguments.length;he++)q[he-2]=arguments[he];return u.prototype[P].apply(m,q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const C=P.length||0;a.length=d+C;for(let q=0;q<C;q++)a[d+q]=P[q]}else a.push(P)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){o.setTimeout(()=>{throw a},0)}function H(){var a=w;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,d){const m=G.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var G=new V(()=>new J,a=>a.reset());class J{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ye=!1,w=new j,E=()=>{const a=Promise.resolve(void 0);ce=()=>{a.then(I)}};function I(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){F(d)}var u=G;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ye=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function Ue(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Ue,A),Ue.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Et="closure_listenable_"+(Math.random()*1e6|0),Be=0;function ve(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Be,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Tt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function Qt(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function St(a){const u={};for(const d in a)u[d]=a[d];return u}const Xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gn(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let C=0;C<Xe.length;C++)d=Xe[C],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Ft(a){this.src=a,this.g={},this.h=0}Ft.prototype.add=function(a,u,d,m,P){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const q=st(a,u,m,P);return q>-1?(u=a[q],d||(u.fa=!1)):(u=new ve(u,this.src,C,!!m,P),u.fa=d,a.push(u)),u};function Ut(a,u){const d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),C;(C=P>=0)&&Array.prototype.splice.call(m,P,1),C&&(_e(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function st(a,u,d,m){for(let P=0;P<a.length;++P){const C=a[P];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return P}return-1}var k="closure_lm_"+(Math.random()*1e6|0),Y={};function K(a,u,d,m,P){if(Array.isArray(u)){for(let C=0;C<u.length;C++)K(a,u[C],d,m,P);return null}return d=W(d),a&&a[Et]?a.J(u,d,c(m)?!!m.capture:!1,P):Z(a,u,d,!1,m,P)}function Z(a,u,d,m,P,C){if(!u)throw Error("Invalid event type");const q=c(P)?!!P.capture:!!P;let he=L(a);if(he||(a[k]=he=new Ft(a)),d=he.add(u,d,m,q,C),d.proxy)return d;if(m=de(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)b||(P=q),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(S(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function de(){function a(d){return u.call(a.src,a.listener,d)}const u=D;return a}function _(a,u,d,m,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)_(a,u[C],d,m,P);else m=c(m)?!!m.capture:!!m,d=W(d),a&&a[Et]?(a=a.i,C=String(u).toString(),C in a.g&&(u=a.g[C],d=st(u,d,m,P),d>-1&&(_e(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[C],a.h--)))):a&&(a=L(a))&&(u=a.g[u.toString()],a=-1,u&&(a=st(u,d,m,P)),(d=a>-1?u[a]:null)&&v(d))}function v(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Et])Ut(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(S(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=L(u))?(Ut(d,a),d.h==0&&(d.src=null,u[k]=null)):_e(a)}}}function S(a){return a in Y?Y[a]:Y[a]="on"+a}function D(a,u){if(a.da)a=!0;else{u=new Ue(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&v(a),a=d.call(m,u)}return a}function L(a){return a=a[k],a instanceof Ft?a:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function W(a){return typeof a=="function"?a:(a[O]||(a[O]=function(u){return a.handleEvent(u)}),a[O])}function $(){R.call(this),this.i=new Ft(this),this.M=this,this.G=null}p($,R),$.prototype[Et]=!0,$.prototype.removeEventListener=function(a,u,d,m){_(this,a,u,d,m)};function B(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var P=u;u=new A(m,a),gn(u,P)}P=!0;let C,q;if(d)for(q=d.length-1;q>=0;q--)C=u.g=d[q],P=U(C,m,!0,u)&&P;if(C=u.g=a,P=U(C,m,!0,u)&&P,P=U(C,m,!1,u)&&P,d)for(q=0;q<d.length;q++)C=u.g=d[q],P=U(C,m,!1,u)&&P}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)_e(d[m]);delete a.g[u],a.h--}}this.G=null},$.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},$.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function U(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let C=0;C<u.length;++C){const q=u[C];if(q&&!q.da&&q.capture==d){const he=q.listener,Ge=q.ha||q.src;q.fa&&Ut(a.i,q),P=he.call(Ge,m)!==!1&&P}}return P&&!m.defaultPrevented}function ne(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function z(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,z(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class ee extends R{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(a){R.call(this),this.h=a,this.g={}}p(re,R);var fe=[];function Se(a){Tt(a.g,function(u,d){this.g.hasOwnProperty(d)&&v(u)},a),a.g={}}re.prototype.N=function(){re.Z.N.call(this),Se(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=o.JSON.stringify,it=o.JSON.parse,ot=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bt(){}function Pt(){}var Bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jr(){A.call(this,"d")}p(jr,A);function Ze(){A.call(this,"c")}p(Ze,A);var Qe={},Cs=null;function pr(){return Cs=Cs||new $}Qe.Ia="serverreachability";function ku(a){A.call(this,Qe.Ia,a)}p(ku,A);function Ns(a){const u=pr();B(u,new ku(u))}Qe.STAT_EVENT="statevent";function xu(a,u){A.call(this,Qe.STAT_EVENT,a),this.stat=u}p(xu,A);function pt(a){const u=pr();B(u,new xu(u,a))}Qe.Ja="timingevent";function Mu(a,u){A.call(this,Qe.Ja,a),this.size=u}p(Mu,A);function Vs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Ds(){this.g=!0}Ds.prototype.ua=function(){this.g=!1};function K_(a,u,d,m,P,C){a.info(function(){if(a.g)if(C){var q="",he=C.split("&");for(let Pe=0;Pe<he.length;Pe++){var Ge=he[Pe].split("=");if(Ge.length>1){const Je=Ge[0];Ge=Ge[1];const Yt=Je.split("_");q=Yt.length>=2&&Yt[1]=="type"?q+(Je+"="+Ge+"&"):q+(Je+"=redacted&")}}}else q=null;else q=C;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+q})}function z_(a,u,d,m,P,C,q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+C+" "+q})}function $r(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+J_(a,d)+(m?" "+m:"")})}function Q_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ds.prototype.info=function(){};function J_(a,u){if(!a.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var d=C[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let q=1;q<m.length;q++)m[q]=""}}}}return Te(C)}catch{return u}}var zi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Lu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fu;function qa(){}p(qa,bt),qa.prototype.g=function(){return new XMLHttpRequest},Fu=new qa;function Os(a){return encodeURIComponent(String(a))}function Y_(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Ln(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var Bu={},Ha={};function Ga(a,u,d){a.M=1,a.A=Ji(Jt(u)),a.u=d,a.R=!0,ju(a,null)}function ju(a,u){a.F=Date.now(),Qi(a),a.B=Jt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),eh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Uu,a.g=yh(a.j,d?u:null,!a.u),a.P>0&&(a.O=new ee(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(fe[0]=P.toString()),P=fe);for(let C=0;C<P.length;C++){const q=K(d,P[C],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.J?St(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ns(),K_(a.i,a.v,a.B,a.l,a.S,a.u)}Ln.prototype.ba=function(a){a=a.target;const u=this.O;u&&Bn(a)==3?u.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const he=Bn(this.g),Ge=this.g.ya(),Pe=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||ah(this.g)))){this.K||he!=4||Ge==7||(Ge==8||Pe<=0?Ns(3):Ns(2)),Wa(this);var u=this.g.ca();this.X=u;var d=X_(this);if(this.o=u==200,z_(this.i,this.v,this.B,this.l,this.S,he,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var C=m;break t}}C=null}if(a=C)$r(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ka(this,a);else{this.o=!1,this.m=3,pt(12),gr(this),ks(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<d.length;)if(Je=Z_(this,d),Je==Ha){he==4&&(this.m=4,pt(14),a=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==Bu){this.m=4,pt(15),$r(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else $r(this.i,this.l,Je,null),Ka(this,Je);if($u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||d.length!=0||this.h.h||(this.m=1,pt(16),a=!1),this.o=this.o&&a,!a)$r(this.i,this.l,d,"[Invalid Chunked Response]"),gr(this),ks(this);else if(d.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),tc(q),q.P=!0,pt(11))}}else $r(this.i,this.l,d,null),Ka(this,d);he==4&&gr(this),this.o&&!this.K&&(he==4?ph(this.j,this):(this.o=!1,Qi(this)))}else dy(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),gr(this),ks(this)}}}catch{}finally{}};function X_(a){if(!$u(a))return a.g.la();const u=ah(a.g);if(u==="")return"";let d="";const m=u.length,P=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return gr(a),ks(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<m;C++)a.h.h=!0,d+=a.h.i.decode(u[C],{stream:!(P&&C==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function $u(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Z_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Ha:(d=Number(u.substring(d,m)),isNaN(d)?Bu:(m+=1,m+d>u.length?Ha:(u=u.slice(m,m+d),a.C=m+d,u)))}Ln.prototype.cancel=function(){this.K=!0,gr(this)};function Qi(a){a.T=Date.now()+a.H,qu(a,a.H)}function qu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vs(h(a.aa,a),u)}function Wa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Ln.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Q_(this.i,this.B),this.M!=2&&(Ns(),pt(17)),gr(this),this.m=2,ks(this)):qu(this,this.T-a)};function ks(a){a.j.I==0||a.K||ph(a.j,a)}function gr(a){Wa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Se(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Ka(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||za(d.h,a))){if(!a.L&&za(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)to(d),Zi(d);else break e;ec(d),pt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vs(h(d.Va,d),6e3));Wu(d.h)<=1&&d.ta&&(d.ta=void 0)}else _r(d,11)}else if((a.L||d.g==a)&&to(d),!T(u))for(P=d.Ba.g.parse(u),u=0;u<P.length;u++){let Pe=P[u];const Je=Pe[0];if(!(Je<=d.K))if(d.K=Je,Pe=Pe[1],d.I==2)if(Pe[0]=="c"){d.M=Pe[1],d.ba=Pe[2];const Yt=Pe[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const yr=Pe[4];yr!=null&&(d.za=yr,d.j.info("SVER="+d.za));const jn=Pe[5];jn!=null&&typeof jn=="number"&&jn>0&&(m=1.5*jn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const $n=a.g;if($n){const ro=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ro){var C=m.h;C.g||ro.indexOf("spdy")==-1&&ro.indexOf("quic")==-1&&ro.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Qa(C,C.h),C.h=null))}if(m.G){const nc=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;nc&&(m.wa=nc,De(m.J,m.G,nc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var q=a;if(m.na=_h(m,m.L?m.ba:null,m.W),q.L){Ku(m.h,q);var he=q,Ge=m.O;Ge&&(he.H=Ge),he.D&&(Wa(he),Qi(he)),m.g=q}else fh(m);d.i.length>0&&eo(d)}else Pe[0]!="stop"&&Pe[0]!="close"||_r(d,7);else d.I==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?_r(d,7):Za(d):Pe[0]!="noop"&&d.l&&d.l.qa(Pe),d.A=0)}}Ns(4)}catch{}}var ey=class{constructor(a,u){this.g=a,this.map=u}};function Hu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function za(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Qa(a,u){a.g?a.g.add(u):a.h=u}function Ku(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Hu.prototype.cancel=function(){if(this.i=zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return y(a.i)}var Qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ty(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,C=null;m>=0?(P=a[d].substring(0,m),C=a[d].substring(m+1)):P=a[d],u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Fn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Fn?(this.l=a.l,xs(this,a.j),this.o=a.o,this.g=a.g,Ms(this,a.u),this.h=a.h,Ja(this,th(a.i)),this.m=a.m):a&&(u=String(a).match(Qu))?(this.l=!1,xs(this,u[1]||"",!0),this.o=Ls(u[2]||""),this.g=Ls(u[3]||"",!0),Ms(this,u[4]),this.h=Ls(u[5]||"",!0),Ja(this,u[6]||"",!0),this.m=Ls(u[7]||"")):(this.l=!1,this.i=new Us(null,this.l))}Fn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Fs(u,Ju,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Fs(u,Ju,!0),"@"),a.push(Os(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Fs(d,d.charAt(0)=="/"?sy:ry,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Fs(d,oy)),a.join("")},Fn.prototype.resolve=function(a){const u=Jt(this);let d=!!a.j;d?xs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)Ms(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=u.h.lastIndexOf("/");P!=-1&&(m=u.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const C=[];for(let q=0;q<P.length;){const he=P[q++];he=="."?m&&q==P.length&&C.push(""):he==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&q==P.length&&C.push("")):(C.push(he),m=!0)}m=C.join("/")}else m=P}return d?u.h=m:d=a.i.toString()!=="",d?Ja(u,th(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Jt(a){return new Fn(a)}function xs(a,u,d){a.j=d?Ls(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ms(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Ja(a,u,d){u instanceof Us?(a.i=u,ay(a.i,a.l)):(d||(u=Fs(u,iy)),a.i=new Us(u,a.l))}function De(a,u,d){a.i.set(u,d)}function Ji(a){return De(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ls(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,ny),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ny(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ju=/[#\/\?@]/g,ry=/[#\?:]/g,sy=/[#\?]/g,iy=/[#\?@]/g,oy=/#/g;function Us(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function mr(a){a.g||(a.g=new Map,a.h=0,a.i&&ty(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Us.prototype,t.add=function(a,u){mr(this),this.i=null,a=qr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Yu(a,u){mr(a),u=qr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Xu(a,u){return mr(a),u=qr(a,u),a.g.has(u)}t.forEach=function(a,u){mr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)};function Zu(a,u){mr(a);let d=[];if(typeof u=="string")Xu(a,u)&&(d=d.concat(a.g.get(qr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return mr(this),this.i=null,a=qr(this,a),Xu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=Zu(this,a),a.length>0?String(a[0]):u):u};function eh(a,u,d){Yu(a,u),d.length>0&&(a.i=null,a.g.set(qr(a,u),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const P=Os(d);d=Zu(this,d);for(let C=0;C<d.length;C++){let q=P;d[C]!==""&&(q+="="+Os(d[C])),a.push(q)}}return this.i=a.join("&")};function th(a){const u=new Us;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function qr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ay(a,u){u&&!a.j&&(mr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(Yu(this,m),eh(this,P,d))},a)),a.j=u}function cy(a,u){const d=new Ds;if(o.Image){const m=new Image;m.onload=f(Un,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(Un,d,"TestLoadImage: error",!1,u,m),m.onabort=f(Un,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(Un,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ly(a,u){const d=new Ds,m=new AbortController,P=setTimeout(()=>{m.abort(),Un(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(P),C.ok?Un(d,"TestPingServer: ok",!0,u):Un(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Un(d,"TestPingServer: error",!1,u)})}function Un(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function uy(){this.g=new ot}function Ya(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ya,bt),Ya.prototype.g=function(){return new Yi(this.i,this.h)};function Yi(a,u){$.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Yi,$),t=Yi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function nh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Bs(this):js(this),this.readyState==3&&nh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Na=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,js(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rh(a){let u="";return Tt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Xa(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=rh(d),typeof a=="string"?d!=null&&Os(d):De(a,u,d))}function xe(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(xe,$);var hy=/^https?$/i,fy=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fu.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){sh(this,C);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(fy,u,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of d)this.g.setRequestHeader(C,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){sh(this,C)}};function sh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ih(a),Xi(a)}function ih(a){a.A||(a.A=!0,B(a,"complete"),B(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,B(this,"complete"),B(this,"abort"),Xi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xi(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?oh(this):this.Xa())},t.Xa=function(){oh(this)};function oh(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(B(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=C===0){let q=String(a.D).match(Qu)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),m=!hy.test(q?q.toLowerCase():"")}d=m}if(d)B(a,"complete"),B(a,"success");else{a.o=6;try{var P=Bn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",ih(a)}}finally{Xi(a)}}}}function Xi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||B(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),it(u)}};function ah(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dy(a){const u={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=Y_(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[P]||[];u[P]=C,C.push(d)}Qt(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function ch(a){this.za=0,this.i=[],this.j=new Ds,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$s("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$s("baseRetryDelayMs",5e3,a),this.Za=$s("retryDelaySeedMs",1e4,a),this.Ta=$s("forwardChannelMaxRetries",2,a),this.va=$s("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Hu(a&&a.concurrentRequestLimit),this.Ba=new uy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ch.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){pt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=_h(this,null,this.W),eo(this)};function Za(a){if(lh(a),a.I==3){var u=a.V++,d=Jt(a.J);if(De(d,"SID",a.M),De(d,"RID",u),De(d,"TYPE","terminate"),qs(a,d),u=new Ln(a,a.j,u),u.M=2,u.A=Ji(Jt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=yh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Qi(u)}mh(a)}function Zi(a){a.g&&(tc(a),a.g.cancel(),a.g=null)}function lh(a){Zi(a),a.v&&(o.clearTimeout(a.v),a.v=null),to(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function eo(a){if(!Gu(a.h)&&!a.m){a.m=!0;var u=a.Ea;ce||E(),ye||(ce(),ye=!0),w.add(u,a),a.D=0}}function py(a,u){return Wu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vs(h(a.Ea,a,u),gh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Ln(this,this.j,a);let C=this.o;if(this.U&&(C?(C=St(C),gn(C,this.U)):C=this.U),this.u!==null||this.R||(P.J=C,C=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=hh(this,P,u),d=Jt(this.J),De(d,"RID",a),De(d,"CVER",22),this.G&&De(d,"X-HTTP-Session-Id",this.G),qs(this,d),C&&(this.R?u="headers="+Os(rh(C))+"&"+u:this.u&&Xa(d,this.u,C)),Qa(this.h,P),this.Ra&&De(d,"TYPE","init"),this.S?(De(d,"$req",u),De(d,"SID","null"),P.U=!0,Ga(P,d,null)):Ga(P,d,u),this.I=2}}else this.I==3&&(a?uh(this,a):this.i.length==0||Gu(this.h)||uh(this))};function uh(a,u){var d;u?d=u.l:d=a.V++;const m=Jt(a.J);De(m,"SID",a.M),De(m,"RID",d),De(m,"AID",a.K),qs(a,m),a.u&&a.o&&Xa(m,a.u,a.o),d=new Ln(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=hh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Qa(a.h,d),Ga(d,m,u)}function qs(a,u){a.H&&Tt(a.H,function(d,m){De(u,m,d)}),a.l&&Tt({},function(d,m){De(u,m,d)})}function hh(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let he=-1;for(;;){const Ge=["count="+d];he==-1?d>0?(he=P[0].g,Ge.push("ofs="+he)):he=0:Ge.push("ofs="+he);let Pe=!0;for(let Je=0;Je<d;Je++){var C=P[Je].g;const Yt=P[Je].map;if(C-=he,C<0)he=Math.max(0,P[Je].g-100),Pe=!1;else try{C="req"+C+"_"||"";try{var q=Yt instanceof Map?Yt:Object.entries(Yt);for(const[yr,jn]of q){let $n=jn;c(jn)&&($n=Te(jn)),Ge.push(C+yr+"="+encodeURIComponent($n))}}catch(yr){throw Ge.push(C+"type="+encodeURIComponent("_badmap")),yr}}catch{m&&m(Yt)}}if(Pe){q=Ge.join("&");break e}}q=void 0}return a=a.i.splice(0,d),u.G=a,q}function fh(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;ce||E(),ye||(ce(),ye=!0),w.add(u,a),a.A=0}}function ec(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vs(h(a.Da,a),gh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,dh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),Zi(this),dh(this))};function tc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function dh(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Jt(a.na);De(u,"RID","rpc"),De(u,"SID",a.M),De(u,"AID",a.K),De(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&De(u,"TO",a.ia),De(u,"TYPE","xmlhttp"),qs(a,u),a.u&&a.o&&Xa(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ji(Jt(u)),d.u=null,d.R=!0,ju(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Zi(this),ec(this),pt(19))};function to(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ph(a,u){var d=null;if(a.g==u){to(a),tc(a),a.g=null;var m=2}else if(za(a.h,u))d=u.G,Ku(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var P=a.D;m=pr(),B(m,new Mu(m,d)),eo(a)}else fh(a);else if(P=u.m,P==3||P==0&&u.X>0||!(m==1&&py(a,u)||m==2&&ec(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),P){case 1:_r(a,5);break;case 4:_r(a,10);break;case 3:_r(a,6);break;default:_r(a,2)}}}function gh(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function _r(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new Fn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||xs(m,"https"),Ji(m),P?cy(m.toString(),d):ly(m.toString(),d)}else pt(2);a.I=0,a.l&&a.l.pa(u),mh(a),lh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function mh(a){if(a.I=0,a.ja=[],a.l){const u=zu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ja,u),N(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function _h(a,u,d){var m=d instanceof Fn?Jt(d):new Fn(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ms(m,m.u);else{var P=o.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const C=new Fn(null);m&&xs(C,m),u&&(C.g=u),P&&Ms(C,P),d&&(C.h=d),m=C}return d=a.G,u=a.wa,d&&u&&De(m,d,u),De(m,"VER",a.ka),qs(a,m),m}function yh(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new xe(new Ya({ab:d})):new xe(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eh(){}t=Eh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function no(){}no.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){$.call(this),this.g=new ch(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!T(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Hr(this)}p(Ct,$),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Za(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Te(a),a=d);u.i.push(new ey(u.Ya++,a)),u.I==3&&eo(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,Ct.Z.N.call(this)};function Th(a){jr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Th,jr);function vh(){Ze.call(this),this.status=1}p(vh,Ze);function Hr(a){this.g=a}p(Hr,Eh),Hr.prototype.ra=function(){B(this.g,"a")},Hr.prototype.qa=function(a){B(this.g,new Th(a))},Hr.prototype.pa=function(a){B(this.g,new vh)},Hr.prototype.oa=function(){B(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,_m=function(){return new no},mm=function(){return pr()},gm=Qe,tl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zi.NO_ERROR=0,zi.TIMEOUT=8,zi.HTTP_ERROR=6,wo=zi,Lu.COMPLETE="complete",pm=Lu,Pt.EventType=Bt,Bt.OPEN="a",Bt.CLOSE="b",Bt.ERROR="c",Bt.MESSAGE="d",$.prototype.listen=$.prototype.J,Ys=Pt,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,dm=xe}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="12.11.0";function eS(t){Rs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Bl("@firebase/firestore");function Qr(){return Or.logLevel}function X(t,...e){if(Or.logLevel<=pe.DEBUG){const n=e.map(Yl);Or.debug(`Firestore (${Rs}): ${t}`,...n)}}function Dn(t,...e){if(Or.logLevel<=pe.ERROR){const n=e.map(Yl);Or.error(`Firestore (${Rs}): ${t}`,...n)}}function kr(t,...e){if(Or.logLevel<=pe.WARN){const n=e.map(Yl);Or.warn(`Firestore (${Rs}): ${t}`,...n)}}function Yl(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ym(t,r,n)}function ym(t,e,n){let r=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ym(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ct.UNAUTHENTICATED)))}shutdown(){}}class nS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class rS{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Em(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ct(e)}}class sS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class iS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new sS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=aS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function nl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Sc(s)===Sc(i)?ge(s,i):Sc(s)?1:-1}return ge(t.length,e.length)}const cS=55296,lS=57343;function Sc(t){const e=t.charCodeAt(0);return e>=cS&&e<=lS}function _s(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=en.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),s=en.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(e).compare(en.extractNumericId(n)):nl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tr.fromString(e.substring(4,e.length-2))}}class Ve extends en{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(n)}static emptyPath(){return new Ve([])}}const uS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends en{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return uS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jf}static keyField(){return new tt([Jf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Q(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ve.fromString(e))}static fromName(e){return new te(Ve.fromString(e).popFirst(5))}static empty(){return new te(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e,n){if(!n)throw new Q(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hS(t,e,n,r){if(e===!0&&r===!0)throw new Q(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yf(t){if(!te.isDocumentKey(t))throw new Q(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xf(t){if(te.isDocumentKey(t))throw new Q(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function Rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wa(t);throw new Q(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ji(t,e){if(!vm(t))throw new Q(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=-62135596800,ed=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ed);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zf)throw new Q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ed}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ji(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:qe("string",Oe._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Oe(0,0))}static max(){return new ae(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=-1;function fS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new sr(s,te.empty(),e)}function dS(t){return new sr(t.readTime,t.key,wi)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(ae.min(),te.empty(),wi)}static max(){return new sr(ae.max(),te.empty(),wi)}}function pS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==gS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function _S(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Aa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=-1;function Ra(t){return t==null}function Ko(t){return t===0&&1/t==-1/0}function yS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="";function ES(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=td(e)),e=TS(t.get(n),e);return td(e)}function TS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Im:n+="";break;default:n+=i}}return n}function td(t){return t+Im+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rd(this.data.getIterator())}getIteratorFrom(e){return new rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Ke(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Am("Invalid base64 string: "+i):i}})(e);return new rt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const vS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=vS.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="server_timestamp",Sm="__type__",bm="__previous_value__",Pm="__local_write_time__";function eu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Sm])==null?void 0:r.stringValue)===Rm}function Sa(t){const e=t.mapValue.fields[bm];return eu(e)?Sa(e):e}function Ai(t){const e=ir(t.mapValue.fields[Pm].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,s,i,o,c,l,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const zo="(default)";class Ri{constructor(e,n){this.projectId=e,this.database=n||zo}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database===zo}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}function wS(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Q(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="__type__",AS="__max__",uo={mapValue:{}},Nm="__vector__",Qo="value";function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eu(t)?4:SS(t)?9007199254740991:RS(t)?10:11:ie(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ai(t).isEqual(Ai(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ir(s.timestampValue),c=ir(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return or(s.bytesValue).isEqual(or(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?Ko(o)===Ko(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(nd(o)!==nd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0})(t,e);default:return ie(52216,{left:t})}}function Si(t,e){return(t.values||[]).find((n=>pn(n,e)))!==void 0}function ys(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return sd(t.timestampValue,e.timestampValue);case 4:return sd(Ai(t),Ai(e));case 5:return nl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=or(i),l=or(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ge(c[h],l[h]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(Fe(i.latitude),Fe(o.latitude));return c!==0?c:ge(Fe(i.longitude),Fe(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return id(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,y,N,V;const c=i.fields||{},l=o.fields||{},h=(g=c[Qo])==null?void 0:g.arrayValue,f=(y=l[Qo])==null?void 0:y.arrayValue,p=ge(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:id(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===uo.mapValue&&o===uo.mapValue)return 0;if(i===uo.mapValue)return 1;if(o===uo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=nl(l[p],f[p]);if(g!==0)return g;const y=ys(c[l[p]],h[f[p]]);if(y!==0)return y}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ir(t),r=ir(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function id(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ys(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Es(t){return rl(t)}function rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return or(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${rl(n.fields[o])}`;return s+"}"})(t.mapValue):ie(61005,{value:t})}function Ao(t){switch(ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sa(t);return e?16+Ao(e):16;case 5:return 2*t.stringValue.length;case 6:return or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ao(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return fr(r.fields,((i,o)=>{s+=i.length+Ao(o)})),s})(t.mapValue);default:throw ie(13486,{value:t})}}function od(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sl(t){return!!t&&"integerValue"in t}function tu(t){return!!t&&"arrayValue"in t}function ad(t){return!!t&&"nullValue"in t}function cd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ro(t){return!!t&&"mapValue"in t}function RS(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Cm])==null?void 0:r.stringValue)===Nm}function ui(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ui(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ui(t.arrayValue.values[n]);return e}return{...t}}function SS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===AS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ui(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new At(ui(this.value))}}function Vm(t){const e=[];return fr(t.fields,((n,r)=>{const s=new tt([n]);if(Ro(r)){const i=Vm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,ae.min(),ae.min(),ae.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ae.min(),ae.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ae.min(),ae.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.position=e,this.inclusive=n}}function ld(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function bS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{}class $e extends Dm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CS(e,n,r):n==="array-contains"?new DS(e,r):n==="in"?new OS(e,r):n==="not-in"?new kS(e,r):n==="array-contains-any"?new xS(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NS(e,r):new VS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ys(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Dm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zt(e,n)}matches(e){return Om(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Om(t){return t.op==="and"}function km(t){return PS(t)&&Om(t)}function PS(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function il(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(km(t))return t.filters.map((e=>il(e))).join(",");{const e=t.filters.map((n=>il(n))).join(",");return`${t.op}(${e})`}}function xm(t,e){return t instanceof $e?(function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)})(t,e):t instanceof zt?(function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&xm(o,s.filters[c])),!0):!1})(t,e):void ie(19439)}function Mm(t){return t instanceof $e?(function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`})(t):t instanceof zt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Mm).join(" ,")+"}"})(t):"Filter"}class CS extends $e{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class NS extends $e{constructor(e,n){super(e,"in",n),this.keys=Lm("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class VS extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Lm("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Lm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>te.fromName(r.referenceValue)))}class DS extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tu(n)&&Si(n.arrayValue,this.value)}}class OS extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class kS extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Si(this.value.arrayValue,n)}}class xS extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Si(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new MS(t,e,n,r,s,i,o)}function nu(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>il(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Es(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Es(r))).join(",")),e.Te=n}return e.Te}function ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ud(t.startAt,e.startAt)&&ud(t.endAt,e.endAt)}function ol(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function LS(t,e,n,r,s,i,o,c){return new $i(t,e,n,r,s,i,o,c)}function ba(t){return new $i(t)}function fd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function FS(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Fm(t){return t.collectionGroup!==null}function hi(t){const e=le(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ke(tt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Yo(i,r))})),n.has(tt.keyField().canonicalString())||e.Ee.push(new Yo(tt.keyField(),r))}return e.Ee}function ln(t){const e=le(t);return e.Ie||(e.Ie=US(e,hi(t))),e.Ie}function US(t,e){if(t.limitType==="F")return hd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Yo(s.field,i)}));const n=t.endAt?new Jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jo(t.startAt.position,t.startAt.inclusive):null;return hd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function al(t,e){const n=t.filters.concat([e]);return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cl(t,e,n){return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return ru(ln(t),ln(e))&&t.limitType===e.limitType}function Um(t){return`${nu(ln(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Mm(s))).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Es(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Es(s))).join(",")),`Target(${r})`})(ln(t))}; limitType=${t.limitType})`}function Ca(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of hi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=ld(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,hi(r),s)||r.endAt&&!(function(o,c,l){const h=ld(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,hi(r),s))})(t,e)}function BS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bm(t){return(e,n)=>{let r=!1;for(const s of hi(t)){const i=jS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jS(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ys(l,h):ie(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return wm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new ke(te.comparator);function On(){return $S}const jm=new ke(te.comparator);function Xs(...t){let e=jm;for(const n of t)e=e.insert(n.key,n);return e}function $m(t){let e=jm;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ar(){return fi()}function qm(){return fi()}function fi(){return new Fr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const qS=new ke(te.comparator),HS=new Ke(te.comparator);function me(...t){let e=HS;for(const n of t)e=e.add(n);return e}const GS=new Ke(ge);function WS(){return GS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function Hm(t){return{integerValue:""+t}}function KS(t,e){return yS(e)?Hm(e):su(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this._=void 0}}function zS(t,e,n){return t instanceof bi?(function(s,i){const o={fields:{[Sm]:{stringValue:Rm},[Pm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eu(i)&&(i=Sa(i)),i&&(o.fields[bm]=i),{mapValue:o}})(n,e):t instanceof Pi?Wm(t,e):t instanceof Ci?Km(t,e):(function(s,i){const o=Gm(s,i),c=dd(o)+dd(s.Ae);return sl(o)&&sl(s.Ae)?Hm(c):su(s.serializer,c)})(t,e)}function QS(t,e,n){return t instanceof Pi?Wm(t,e):t instanceof Ci?Km(t,e):n}function Gm(t,e){return t instanceof Xo?(function(r){return sl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class bi extends Na{}class Pi extends Na{constructor(e){super(),this.elements=e}}function Wm(t,e){const n=zm(e);for(const r of t.elements)n.some((s=>pn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ci extends Na{constructor(e){super(),this.elements=e}}function Km(t,e){let n=zm(e);for(const r of t.elements)n=n.filter((s=>!pn(s,r)));return{arrayValue:{values:n}}}class Xo extends Na{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function dd(t){return Fe(t.integerValue||t.doubleValue)}function zm(t){return tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.field=e,this.transform=n}}function YS(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof Ci&&s instanceof Ci?_s(r.elements,s.elements,pn):r instanceof Xo&&s instanceof Xo?pn(r.Ae,s.Ae):r instanceof bi&&s instanceof bi})(t.transform,e.transform)}class XS{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Va{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iu(t.key,Lt.none()):new qi(t.key,t.data,Lt.none());{const n=t.data,r=At.empty();let s=new Ke(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new dr(t.key,r,new Ot(s.toArray()),Lt.none())}}function ZS(t,e,n){t instanceof qi?(function(s,i,o){const c=s.value.clone(),l=gd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof dr?(function(s,i,o){if(!So(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=gd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Jm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function di(t,e,n,r){return t instanceof qi?(function(i,o,c,l){if(!So(i.precondition,o))return c;const h=i.value.clone(),f=md(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof dr?(function(i,o,c,l){if(!So(i.precondition,o))return c;const h=md(i.fieldTransforms,l,o),f=o.data;return f.setAll(Jm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return So(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function eb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Gm(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function pd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_s(r,s,((i,o)=>YS(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qi extends Va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends Va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jm(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function gd(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,QS(o,c,n[s]))}return r}function md(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zS(i,o,e))}return r}class iu extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tb extends Va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Qm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),me())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,((n,r)=>pd(n,r)))&&_s(this.baseMutations,e.baseMutations,((n,r)=>pd(n,r)))}}class ou{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return qS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ou(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,Ee;function ib(t){switch(t){case x.OK:return ie(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function Ym(t){if(t===void 0)return Dn("GRPC error has no .code"),x.UNKNOWN;switch(t){case je.OK:return x.OK;case je.CANCELLED:return x.CANCELLED;case je.UNKNOWN:return x.UNKNOWN;case je.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case je.INTERNAL:return x.INTERNAL;case je.UNAVAILABLE:return x.UNAVAILABLE;case je.UNAUTHENTICATED:return x.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case je.NOT_FOUND:return x.NOT_FOUND;case je.ALREADY_EXISTS:return x.ALREADY_EXISTS;case je.PERMISSION_DENIED:return x.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case je.ABORTED:return x.ABORTED;case je.OUT_OF_RANGE:return x.OUT_OF_RANGE;case je.UNIMPLEMENTED:return x.UNIMPLEMENTED;case je.DATA_LOSS:return x.DATA_LOSS;default:return ie(39323,{code:t})}}(Ee=je||(je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new tr([4294967295,4294967295],0);function _d(t){const e=ob().encode(t),n=new fm;return n.update(e),new Uint8Array(n.digest())}function yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tr([n,r],0),new tr([s,i],0)]}class au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=tr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(tr.fromNumber(r)));return s.compare(ab)===1&&(s=new tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=_d(e),[r,s]=yd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new au(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=_d(e),[r,s]=yd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Da(ae.min(),s,new ke(ge),On(),me())}}class Hi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hi(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Xm{constructor(e,n){this.targetId=e,this.Ce=n}}class Zm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ed{constructor(){this.ve=0,this.Fe=Td(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}})),new Hi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Td()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class cb{constructor(e){this.Ge=e,this.ze=new Map,this.je=On(),this.Je=ho(),this.He=ho(),this.Ze=new ke(ge)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(ol(i))if(r===0){const o=new te(i.path);this.et(n,o,ut.newNoDocument(o,ae.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=or(r).toUint8Array()}catch(l){if(l instanceof Am)return kr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new au(o,s,i)}catch(l){return kr(l instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&ol(c.target)){const l=new te(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,ut.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=me();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Da(e,n,this.Ze,this.je,r);return this.je=On(),this.Je=ho(),this.He=ho(),this.Ze=new ke(ge),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ed,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ke(ge),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ke(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ed),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ho(){return new ke(te.comparator)}function Td(){return new ke(te.comparator)}const lb={asc:"ASCENDING",desc:"DESCENDING"},ub={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hb={and:"AND",or:"OR"};class fb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ll(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function Zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function db(t,e){return Zo(t,e.toTimestamp())}function un(t){return Re(!!t,49232),ae.fromTimestamp((function(n){const r=ir(n);return new Oe(r.seconds,r.nanos)})(t))}function cu(t,e){return ul(t,e).canonicalString()}function ul(t,e){const n=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function t_(t){const e=Ve.fromString(t);return Re(o_(e),10190,{key:e.toString()}),e}function hl(t,e){return cu(t.databaseId,e.path)}function bc(t,e){const n=t_(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(r_(n))}function n_(t,e){return cu(t.databaseId,e)}function pb(t){const e=t_(t);return e.length===4?Ve.emptyPath():r_(e)}function fl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function r_(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vd(t,e,n){return{name:hl(t,e),fields:n.value.mapValue.fields}}function gb(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?x.UNKNOWN:Ym(h.code);return new Q(f,h.message||"")})(o);n=new Zm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):ae.min(),c=new At({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new bo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bc(t,r.document),i=r.readTime?un(r.readTime):ae.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new bo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sb(s,i),c=r.targetId;n=new Xm(c,o)}}return n}function mb(t,e){let n;if(e instanceof qi)n={update:vd(t,e.key,e.value)};else if(e instanceof iu)n={delete:hl(t,e.key)};else if(e instanceof dr)n={update:vd(t,e.key,e.data),updateMask:Rb(e.fieldMask)};else{if(!(e instanceof tb))return ie(16599,{dt:e.type});n={verify:hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof bi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ie(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:db(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)})(t,e.precondition)),n}function _b(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(ae.min())&&(o=un(i)),new XS(o,s.transformResults||[])})(n,e)))):[]}function yb(t,e){return{documents:[n_(t,e.path)]}}function Eb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=n_(t,s);const i=(function(h){if(h.length!==0)return i_(zt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Yr(g.field),direction:Ib(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ll(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function Tb(t){let e=pb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=s_(p);return g instanceof zt&&km(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(N){return new Yo(Xr(N.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,Ra(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(p){const g=!!p.before,y=p.values||[];return new Jo(y,g)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const g=!p.before,y=p.values||[];return new Jo(y,g)})(n.endAt)),LS(e,s,o,i,c,"F",l,h)}function vb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(t):t.fieldFilter!==void 0?(function(n){return $e.create(Xr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return zt.create(n.compositeFilter.filters.map((r=>s_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(n.compositeFilter.op))})(t):ie(30097,{filter:t})}function Ib(t){return lb[t]}function wb(t){return ub[t]}function Ab(t){return hb[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return tt.fromServerFormat(t.fieldPath)}function i_(t){return t instanceof $e?(function(n){if(n.op==="=="){if(cd(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(ad(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cd(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(ad(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:wb(n.op),value:n.value}}})(t):t instanceof zt?(function(n){const r=n.getFilters().map((s=>i_(s)));return r.length===1?r[0]:{compositeFilter:{op:Ab(n.op),filters:r}}})(t):ie(54877,{filter:t})}function Rb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function o_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function a_(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.yt=e}}function bb(t){const e=Tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.bn=new Cb}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(sr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Cb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c_=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(c_,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ts(0)}static ar(){return new Ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="LruGarbageCollector",Nb=1048576;function Ad([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class Vb{constructor(e){this.Pr=e,this.buffer=new Ke(Ad),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ad(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Db{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){X(wd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bs(n)?X(wd,"Ignoring IndexedDB error during garbage collection: ",n):await Ss(n)}await this.Ar(3e5)}))}}class Ob{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Aa.ce);const r=new Vb(n);return this.Vr.forEachTarget(e,(s=>r.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Ir(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Id)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Id):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Qr()<=pe.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function kb(t,e){return new Ob(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.changes=new Fr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&di(r.mutation,s,Ot.empty(),Oe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,me()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=me()){const s=Ar();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Xs();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,me())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=On();const o=fi(),c=(function(){return fi()})();return n.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof dr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),di(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):o.set(h.key,Ot.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>c.set(h,new Mb(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=fi();let s=new ke(((o,c)=>o-c)),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Ot.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=qm();f.forEach((g=>{if(!i.has(g)){const y=Qm(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return FS(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Ar());let c=wi,l=i;return o.next((h=>M.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,me()))).next((f=>({batchId:c,changes:$m(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=Xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const h=(function(p,g){return new $i(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))}));let c=Xs();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&di(f.mutation,h,Ot.empty(),Oe.now()),Ca(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:bb(s.bundledQuery),readTime:un(s.readTime)}})(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.overlays=new ke(te.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Ar(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Ar(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rb(n,r));let i=this.Lr.get(n);i===void 0&&(i=me(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.kr=new Ke(Ye.qr),this.Kr=new Ke(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ye(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new te(new Ve([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new te(new Ve([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=me();return this.Kr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ye(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return te.comparator(e.key,n.key)||ge(e.Jr,n.Jr)}static Ur(e,n){return ge(e.Jr,n.Jr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ke(Ye.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Zl:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ge);return n.forEach((s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new te(i),0);let c=new Ke(ge);return this.Hr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Jr)),!0)}),o),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Re(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,(s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.ti=e,this.docs=(function(){return new ke(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||pS(dS(f),r)<=0||(s.has(f.key)||Ca(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}ni(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new qb(this)}getSize(e){return M.resolve(this.size)}}class qb extends xb{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.persistence=e,this.ri=new Fr((n=>nu(n)),ru),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.ii=0,this.si=new lu,this.targetCount=0,this.oi=Ts._r()}forEachTarget(e,n){return this.ri.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this._i={},this.overlays={},this.ai=new Aa(0),this.ui=!1,this.ui=!0,this.ci=new Bb,this.referenceDelegate=e(this),this.li=new Hb(this),this.indexManager=new Pb,this.remoteDocumentCache=(function(s){return new $b(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Sb(n),this.Pi=new Fb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ub,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new jb(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Gb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,n){return M.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class Gb extends mS{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.Ri=new lu,this.Ai=null}static Vi(e){return new uu(e)}get di(){if(this.Ai)return this.Ai;throw ie(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,(r=>{const s=te.fromPath(r);return this.mi(e,s).next((i=>{i||n.removeEntry(s,ae.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ea{constructor(e,n){this.persistence=e,this.fi=new Fr((r=>ES(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=kb(this,n)}static Vi(e,n){return new ea(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return M.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ae.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ao(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return EI()?8:_S(dt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Wb;return this.ys(e,n,o).next((c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)}))})).next((()=>i.result))}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Qr()<=pe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Qr()<=pe.DEBUG&&X("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Qr()<=pe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}gs(e,n){if(fd(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=cl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=me(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ss(n,c);return this.bs(n,h,o,l.readTime)?this.gs(e,cl(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,r,s){return fd(n)||s.isEqual(ae.min())?M.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(Qr()<=pe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.Ds(e,o,n,fS(s,wi)).next((c=>c)))}))}Ss(e,n){let r=new Ke(Bm(e));return n.forEach(((s,i)=>{Ca(e,i)&&(r=r.add(i))})),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Qr()<=pe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.fs.getDocumentsMatchingQuery(e,n,sr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="LocalStore",zb=3e8;class Qb{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(ge),this.Fs=new Fr((i=>nu(i)),ru),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function Jb(t,e,n,r){return new Qb(t,e,n,r)}async function u_(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function Yb(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,g=p.keys();let y=M.resolve();return g.forEach((N=>{y=y.next((()=>f.getEntry(l,N))).next((V=>{const F=h.docVersions.get(N);Re(F!==null,48541),V.version.compareTo(F)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function h_(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function Xb(t,e){const n=le(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.li.addMatchingKeys(i,f.addedDocuments,p))));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(rt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(V,F,H){return V.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=zb?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(g,y,f)&&c.push(n.li.updateTargetData(i,y))}));let l=On(),h=me();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Zb(i,o,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!r.isEqual(ae.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next((p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.vs=s,i)))}function Zb(t,e,n){let r=me(),s=me();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=On();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(fu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function eP(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Zl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function tP(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.li.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next((o=>(s=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function dl(t,e,n){const r=le(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!bs(o))throw o;X(fu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Rd(t,e,n){const r=le(t);let s=ae.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=le(l),g=p.Fs.get(f);return g!==void 0?M.resolve(p.vs.get(g)):p.li.getTargetData(h,f)})(r,o,ln(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:me()))).next((c=>(nP(r,BS(e),c),{documents:c,ks:i})))))}function nP(t,e,n){let r=t.Ms.get(e)||ae.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Ms.set(e,r)}class Sd{constructor(){this.activeTargetIds=WS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rP{constructor(){this.vo=new Sd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="ConnectivityMonitor";class Pd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){X(bd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){X(bd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo=null;function pl(){return fo===null?fo=(function(){return 268435456+Math.round(2147483648*Math.random())})():fo++,"0x"+fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="RestConnection",iP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class oP{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===zo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=pl(),c=this.Qo(e,n.toUriEncodedString());X(Pc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=Mi(h);return this.zo(e,c,l,r,f).then((p=>(X(Pc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw kr(Pc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,n){const r=iP[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection",Ks=(t,e,n)=>{t.listen(e,(r=>{try{n(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ls extends oP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ls.c_){const e=mm();Ks(e,gm.STAT_EVENT,(n=>{n.stat===tl.PROXY?X(at,"STAT_EVENT: detected buffering proxy"):n.stat===tl.NOPROXY&&X(at,"STAT_EVENT: detected no buffering proxy")})),ls.c_=!0}}zo(e,n,r,s,i){const o=pl();return new Promise(((c,l)=>{const h=new dm;h.setWithCredentials(!0),h.listenOnce(pm.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case wo.NO_ERROR:const p=h.getResponseJson();X(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case wo.TIMEOUT:X(at,`RPC '${e}' ${o} timed out`),l(new Q(x.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const g=h.getStatus();if(X(at,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const N=y==null?void 0:y.error;if(N&&N.status&&N.message){const V=(function(H){const j=H.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(j)>=0?j:x.UNKNOWN})(N.status);l(new Q(V,N.message))}else l(new Q(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(x.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(at,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(at,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=pl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let p=!1,g=!1;const y=new aP({Jo:N=>{g?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(X(at,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),X(at,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Ho:()=>f.close()});return Ks(f,Ys.EventType.OPEN,(()=>{g||(X(at,`RPC '${e}' stream ${s} transport opened.`),y.i_())})),Ks(f,Ys.EventType.CLOSE,(()=>{g||(g=!0,X(at,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.I_(f))})),Ks(f,Ys.EventType.ERROR,(N=>{g||(g=!0,kr(at,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),y.o_(new Q(x.UNAVAILABLE,"The operation could not be completed")))})),Ks(f,Ys.EventType.MESSAGE,(N=>{var V;if(!g){const F=N.data[0];Re(!!F,16349);const H=F,j=(H==null?void 0:H.error)||((V=H[0])==null?void 0:V.error);if(j){X(at,`RPC '${e}' stream ${s} received error:`,j);const G=j.status;let J=(function(w){const E=je[w];if(E!==void 0)return Ym(E)})(G),ce=j.message;G==="NOT_FOUND"&&ce.includes("database")&&ce.includes("does not exist")&&ce.includes(this.databaseId.database)&&kr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),J===void 0&&(J=x.INTERNAL,ce="Unknown error status: "+G+" with message "+j.message),g=!0,y.o_(new Q(J,ce)),f.close()}else X(at,`RPC '${e}' stream ${s} received:`,F),y.__(F)}})),ls.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _m()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){return new ls(t)}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){return new fb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.c_=!1;class f_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="PersistentStream";class d_{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new f_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Q(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return X(Cd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(X(Cd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lP extends d_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=gb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?un(o.readTime):ae.min()})(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=fl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=ol(l)?{documents:yb(i,l)}:{query:Eb(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=e_(i,o.resumeToken);const h=ll(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=Zo(i,o.snapshotVersion.toTimestamp());const h=ll(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=vb(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=fl(this.serializer),n.removeTarget=e,this.q_(n)}}class uP extends d_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=_b(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=fl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>mb(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{}class fP extends hP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,ul(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(x.UNKNOWN,i.toString())}))}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,ul(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function dP(t,e,n,r){return new fP(t,e,n,r)}class pP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="RemoteStore";class gP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Ur(this)&&(X(xr,"Restarting streams for network reachability change."),await(async function(l){const h=le(l);h.Ia.add(4),await Gi(h),h.Va.set("Unknown"),h.Ia.delete(4),await ka(h)})(this))}))})),this.Va=new pP(r,s)}}async function ka(t){if(Ur(t))for(const e of t.Ra)await e(!0)}async function Gi(t){for(const e of t.Ra)await e(!1)}function p_(t,e){const n=le(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),mu(n)?gu(n):Ps(n).O_()&&pu(n,e))}function du(t,e){const n=le(t),r=Ps(n);n.Ea.delete(e),r.O_()&&g_(n,e),n.Ea.size===0&&(r.O_()?r.L_():Ur(n)&&n.Va.set("Unknown"))}function pu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).Z_(e)}function g_(t,e){t.da.$e(e),Ps(t).X_(e)}function gu(t){t.da=new cb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.Va.ua()}function mu(t){return Ur(t)&&!Ps(t).x_()&&t.Ea.size>0}function Ur(t){return le(t).Ia.size===0}function m_(t){t.da=void 0}async function mP(t){t.Va.set("Online")}async function _P(t){t.Ea.forEach(((e,n)=>{pu(t,e)}))}async function yP(t,e){m_(t),mu(t)?(t.Va.ha(e),gu(t)):t.Va.set("Unknown")}async function EP(t,e,n){if(t.Va.set("Online"),e instanceof Zm&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))})(t,e)}catch(r){X(xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof bo?t.da.Xe(e):e instanceof Xm?t.da.st(e):t.da.tt(e),!n.isEqual(ae.min()))try{const r=await h_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),g_(i,l);const p=new Yn(f.target,l,h,f.sequenceNumber);pu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(xr,"Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!bs(e))throw e;t.Ia.add(1),await Gi(t),t.Va.set("Offline"),n||(n=()=>h_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(xr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ka(t)}))}function __(t,e){return e().catch((n=>ta(t,n,e)))}async function xa(t){const e=le(t),n=cr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zl;for(;TP(e);)try{const s=await eP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,vP(e,s)}catch(s){await ta(e,s)}y_(e)&&E_(e)}function TP(t){return Ur(t)&&t.Ta.length<10}function vP(t,e){t.Ta.push(e);const n=cr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function y_(t){return Ur(t)&&!cr(t).x_()&&t.Ta.length>0}function E_(t){cr(t).start()}async function IP(t){cr(t).ra()}async function wP(t){const e=cr(t);for(const n of t.Ta)e.ea(n.mutations)}async function AP(t,e,n){const r=t.Ta.shift(),s=ou.from(r,e,n);await __(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await xa(t)}async function RP(t,e){e&&cr(t).Y_&&await(async function(r,s){if((function(o){return ib(o)&&o!==x.ABORTED})(s.code)){const i=r.Ta.shift();cr(r).B_(),await __(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await xa(r)}})(t,e),y_(t)&&E_(t)}async function Nd(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),X(xr,"RemoteStore received new credentials");const r=Ur(n);n.Ia.add(3),await Gi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ka(n)}async function SP(t,e){const n=le(t);e?(n.Ia.delete(2),await ka(n)):e||(n.Ia.add(2),await Gi(n),n.Va.set("Unknown"))}function Ps(t){return t.ma||(t.ma=(function(n,r,s){const i=le(n);return i.sa(),new lP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:mP.bind(null,t),Yo:_P.bind(null,t),t_:yP.bind(null,t),H_:EP.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),mu(t)?gu(t):t.Va.set("Unknown")):(await t.ma.stop(),m_(t))}))),t.ma}function cr(t){return t.fa||(t.fa=(function(n,r,s){const i=le(n);return i.sa(),new uP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:IP.bind(null,t),t_:RP.bind(null,t),ta:wP.bind(null,t),na:AP.bind(null,t)}),t.Ra.push((async e=>{e?(t.fa.B_(),await xa(t)):(await t.fa.stop(),t.Ta.length>0&&(X(xr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new _u(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yu(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),bs(t))return new Q(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static emptySet(e){return new us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.ga=new ke(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class vs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new vs(e,n,us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class PP{constructor(){this.queries=Dd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=Dd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Q(x.ABORTED,"Firestore shutting down"))}}function Dd(){return new Fr((t=>Um(t)),Pa)}async function Eu(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new bP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=yu(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&vu(n)}async function Tu(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CP(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&vu(n)}function NP(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function vu(t){t.Ca.forEach((e=>{e.next()}))}var gl,Od;(Od=gl||(gl={})).Ma="default",Od.Cache="cache";class Iu{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class VP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=me(),this.mutatedKeys=me(),this.eu=Bm(e),this.tu=new us(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Vd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),y=Ca(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let F=!1;g&&y?g.data.isEqual(y.data)?N!==V&&(r.track({type:3,doc:y}),F=!0):this.su(g,y)||(r.track({type:2,doc:y}),F=!0,(l&&this.eu(y,l)>0||h&&this.eu(y,h)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),F=!0):g&&!y&&(r.track({type:1,doc:g}),F=!0,(l||h)&&(c=!0)),F&&(y?(o=o.add(y),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,N){const V=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:F})}};return V(y)-V(N)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new vs(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=me(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new v_(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new T_(r))})),n}cu(e){this.Za=e.ks,this.Ya=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wu="SyncEngine";class DP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OP{constructor(e){this.key=e,this.hu=!1}}class kP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Fr((c=>Um(c)),Pa),this.Eu=new Map,this.Iu=new Set,this.Ru=new ke(te.comparator),this.Au=new Map,this.Vu=new lu,this.du={},this.mu=new Map,this.fu=Ts.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xP(t,e,n=!0){const r=b_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await I_(r,e,n,!0),s}async function MP(t,e){const n=b_(t);await I_(n,e,!0,!1)}async function I_(t,e,n,r){const s=await tP(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await LP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&p_(t.remoteStore,s),c}async function LP(t,e,n,r,s){t.pu=(p,g,y)=>(async function(V,F,H,j){let G=F.view.ru(H);G.bs&&(G=await Rd(V.localStore,F.query,!1).then((({documents:w})=>F.view.ru(w,G))));const J=j&&j.targetChanges.get(F.targetId),ce=j&&j.targetMismatches.get(F.targetId)!=null,ye=F.view.applyChanges(G,V.isPrimaryClient,J,ce);return xd(V,F.targetId,ye.au),ye.snapshot})(t,p,g,y);const i=await Rd(t.localStore,e,!0),o=new VP(e,i.ks),c=o.ru(i.documents),l=Hi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);xd(t,n,h.au);const f=new DP(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),h.snapshot}async function FP(t,e,n){const r=le(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter((o=>!Pa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&du(r.remoteStore,s.targetId),ml(r,s.targetId)})).catch(Ss)):(ml(r,s.targetId),await dl(r.localStore,s.targetId,!0))}async function UP(t,e){const n=le(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),du(n.remoteStore,r.targetId))}async function BP(t,e,n){const r=KP(t);try{const s=await(function(o,c){const l=le(o),h=Oe.now(),f=c.reduce(((y,N)=>y.add(N.key)),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let N=On(),V=me();return l.xs.getEntries(y,f).next((F=>{N=F,N.forEach(((H,j)=>{j.isValidDocument()||(V=V.add(H))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,N))).next((F=>{p=F;const H=[];for(const j of c){const G=eb(j,p.get(j.key).overlayedDocument);G!=null&&H.push(new dr(j.key,G,Vm(G.value.mapValue),Lt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,H,c)})).next((F=>{g=F;const H=F.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(y,F.batchId,H)}))})).then((()=>({batchId:g.batchId,changes:$m(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new ke(ge)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h})(r,s.batchId,n),await Wi(r,s.changes),await xa(r.remoteStore)}catch(s){const i=yu(s,"Failed to persist write");n.reject(i)}}async function w_(t,e){const n=le(t);try{const r=await Xb(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Re(o.hu,14607):s.removedDocuments.size>0&&(Re(o.hu,42227),o.hu=!1))})),await Wi(n,r,e)}catch(r){await Ss(r)}}function kd(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)})),h&&vu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jP(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ke(te.comparator);o=o.insert(i,ut.newNoDocument(i,ae.min()));const c=me().add(i),l=new Da(ae.min(),new Map,new ke(ge),o,c);await w_(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Au(r)}else await dl(r.localStore,e,!1).then((()=>ml(r,e,n))).catch(Ss)}async function $P(t,e){const n=le(t),r=e.batch.batchId;try{const s=await Yb(n.localStore,e);R_(n,r,null),A_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wi(n,s)}catch(s){await Ss(s)}}async function qP(t,e,n){const r=le(t);try{const s=await(function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);R_(r,e,n),A_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wi(r,s)}catch(s){await Ss(s)}}function A_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function R_(t,e,n){const r=le(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((r=>{t.Vu.containsKey(r)||S_(t,r)}))}function S_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(du(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Au(t))}function xd(t,e,n){for(const r of n)r instanceof T_?(t.Vu.addReference(r.key,e),HP(t,r)):r instanceof v_?(X(wu,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||S_(t,r.key)):ie(19791,{wu:r})}function HP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(X(wu,"New document in limbo: "+n),t.Iu.add(r),Au(t))}function Au(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new te(Ve.fromString(e)),r=t.fu.next();t.Au.set(r,new OP(n)),t.Ru=t.Ru.insert(n,r),p_(t.remoteStore,new Yn(ln(ba(n.path)),r,"TargetPurposeLimboResolution",Aa.ce))}}async function Wi(t,e,n){const r=le(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=hu.Is(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(h,(g=>M.forEach(g.Ts,(y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y))).next((()=>M.forEach(g.Es,(y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))))))}catch(p){if(!bs(p))throw p;X(fu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=f.vs.get(g),N=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(g,V)}}})(r.localStore,i))}async function GP(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){X(wu,"User change. New user:",e.toKey());const r=await u_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Q(x.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wi(n,r.Ns)}}function WP(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let s=me();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function b_(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=w_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.Pu.H_=CP.bind(null,e.eventManager),e.Pu.yu=NP.bind(null,e.eventManager),e}function KP(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qP.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Jb(this.persistence,new Kb,e.initialUser,this.serializer)}Cu(e){return new l_(uu.Vi,this.serializer)}Du(e){return new rP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class zP extends na{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Re(this.persistence.referenceDelegate instanceof ea,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Db(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new l_((r=>ea.Vi(r,n)),this.serializer)}}class _l{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GP.bind(null,this.syncEngine),await SP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new PP})()}createDatastore(e){const n=Oa(e.databaseInfo.databaseId),r=cP(e.databaseInfo);return dP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new gP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>kd(this.syncEngine,n,0)),(function(){return Pd.v()?new Pd:new sP})())}createSyncEngine(e,n){return(function(s,i,o,c,l,h,f){const p=new kP(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=le(s);X(xr,"RemoteStore shutting down."),i.Ia.add(5),await Gi(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}_l.provider={build:()=>new _l};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="FirestoreClient";class QP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=Xl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),X(lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await u_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Md(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JP(t);X(lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Nd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Nd(e.remoteStore,s))),t._onlineComponents=e}async function JP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(lr,"Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;kr("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new na)}}else X(lr,"Using default OfflineComponentProvider"),await Nc(t,new zP(void 0));return t._offlineComponents}async function P_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(lr,"Using user provided OnlineComponentProvider"),await Md(t,t._uninitializedComponentsProvider._online)):(X(lr,"Using default OnlineComponentProvider"),await Md(t,new _l))),t._onlineComponents}function YP(t){return P_(t).then((e=>e.syncEngine))}async function ra(t){const e=await P_(t),n=e.eventManager;return n.onListen=xP.bind(null,e.syncEngine),n.onUnlisten=FP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UP.bind(null,e.syncEngine),n}function XP(t,e,n,r){const s=new Ru(r),i=new Iu(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Eu(await ra(t),i))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>Tu(await ra(t),i)))}}function ZP(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new Ru({next:g=>{f.Nu(),o.enqueueAndForget((()=>Tu(i,p)));const y=g.docs.has(c);!y&&g.fromCache?h.reject(new Q(x.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?h.reject(new Q(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Iu(ba(c.path),f,{includeMetadataChanges:!0,qa:!0});return Eu(i,p)})(await ra(t),t.asyncQueue,e,n,r))),r.promise}function eC(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new Ru({next:g=>{f.Nu(),o.enqueueAndForget((()=>Tu(i,p))),g.fromCache&&l.source==="server"?h.reject(new Q(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Iu(c,f,{includeMetadataChanges:!0,qa:!0});return Eu(i,p)})(await ra(t),t.asyncQueue,e,n,r))),r.promise}function tC(t,e){const n=new Sn;return t.asyncQueue.enqueueAndForget((async()=>BP(await YP(t),e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="ComponentProvider",Ld=new Map;function rC(t,e,n,r,s){return new IS(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,C_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firestore.googleapis.com",Fd=!0;class Ud{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N_,this.ssl=Fd}else this.host=e.host,this.ssl=e.ssl??Fd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new Q(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ma{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ud({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ud(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new tS;switch(r.type){case"firstParty":return new iS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Ld.get(n);r&&(X(nC,"Removing Datastore"),Ld.delete(n),r.terminate())})(this),Promise.resolve()}}function sC(t,e,n,r={}){var h;t=Rt(t,Ma);const s=Mi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&Rg(`https://${c}`),i.host!==N_&&i.host!==c&&kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Cr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ct.MOCK_USER;else{f=fI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ct(g)}t._authCredentials=new nS(new Em(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ji(n,Le._jsonSchema))return new Le(e,r||null,new te(Ve.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:qe("string",Le._jsonSchemaVersion),referencePath:qe("string")};class nr extends Br{constructor(e,n,r){super(e,n,ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new te(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function iC(t,e,...n){if(t=ze(t),Tm("collection","path",e),t instanceof Ma){const r=Ve.fromString(e,...n);return Xf(r),new nr(t,null,r)}{if(!(t instanceof Le||t instanceof nr))throw new Q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Xf(r),new nr(t.firestore,null,r)}}function sa(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Xl.newId()),Tm("doc","path",e),t instanceof Ma){const r=Ve.fromString(e,...n);return Yf(r),new Le(t,null,new te(r))}{if(!(t instanceof Le||t instanceof nr))throw new Q(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Yf(r),new Le(t.firestore,t instanceof nr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="AsyncQueue";class jd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new f_(this,"async_queue_retry"),this._c=()=>{const r=Cc();r&&X(Bd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Sn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bs(e))throw e;X(Bd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Dn("INTERNAL UNHANDLED ERROR: ",$d(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=_u.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ie(47125,{Pc:$d(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function $d(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class kn extends Ma{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jd(e),this._firestoreClient=void 0,await e}}}function oC(t,e){const n=typeof t=="object"?t:Cg(),r=typeof t=="string"?t:zo,s=$l(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uI("firestore");i&&sC(s,...i)}return s}function La(t){if(t._terminated)throw new Q(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aC(t),t._firestoreClient}function aC(t){var r,s,i,o;const e=t._freezeSettings(),n=rC(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new QP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(rt.fromBase64String(e))}catch(n){throw new Q(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ji(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:qe("string",xt._jsonSchemaVersion),bytes:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(ji(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:qe("string",hn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ji(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ht(e.vectorValues);throw new Q(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:qe("string",Ht._jsonSchemaVersion),vectorValues:qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/^__.*__$/;class lC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new qi(e,this.data,n,this.fieldTransforms)}}class V_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{dataSource:t})}}class bu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new bu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ia(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(D_(this.dataSource)&&cC.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class uC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oa(e)}A(e,n,r,s=!1){return new bu({dataSource:e,methodName:n,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ua(t){const e=t._freezeSettings(),n=Oa(t._databaseId);return new uC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O_(t,e,n,r,s,i={}){const o=t.A(i.merge||i.mergeFields?2:0,e,n,s);Cu("Data must be an object, but it was:",o,r);const c=k_(r,o);let l,h;if(i.merge)l=new Ot(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Is(e,p,n);if(!o.contains(g))throw new Q(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);L_(f,g)||f.push(g)}l=new Ot(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new lC(new At(c),l,h)}class Ba extends Fa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ba}}class Pu extends Fa{_toFieldTransform(e){return new JS(e.path,new bi)}isEqual(e){return e instanceof Pu}}function hC(t,e,n,r){const s=t.A(1,e,n);Cu("Data must be an object, but it was:",s,r);const i=[],o=At.empty();fr(r,((l,h)=>{const f=M_(e,l,n);h=ze(h);const p=s.fc(f);if(h instanceof Ba)i.push(f);else{const g=Ki(h,p);g!=null&&(i.push(f),o.set(f,g))}}));const c=new Ot(i);return new V_(o,c,s.fieldTransforms)}function fC(t,e,n,r,s,i){const o=t.A(1,e,n),c=[Is(e,r,n)],l=[s];if(i.length%2!=0)throw new Q(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Is(e,i[g])),l.push(i[g+1]);const h=[],f=At.empty();for(let g=c.length-1;g>=0;--g)if(!L_(h,c[g])){const y=c[g];let N=l[g];N=ze(N);const V=o.fc(y);if(N instanceof Ba)h.push(y);else{const F=Ki(N,V);F!=null&&(h.push(y),f.set(y,F))}}const p=new Ot(h);return new V_(f,p,o.fieldTransforms)}function dC(t,e,n,r=!1){return Ki(n,t.A(r?4:3,e))}function Ki(t,e){if(x_(t=ze(t)))return Cu("Unsupported field value:",e,t),k_(t,e);if(t instanceof Fa)return(function(r,s){if(!D_(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Ki(c,s.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:e_(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return(function(o,c){const l=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[Cm]:{stringValue:Nm},[Qo]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return su(c.serializer,f)}))}}}}}})(r,s);if(a_(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${wa(r)}`)})(t,e)}function k_(t,e){const n={};return wm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,((r,s)=>{const i=Ki(s,e.dc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function x_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof hn||t instanceof xt||t instanceof Le||t instanceof Fa||t instanceof Ht||a_(t))}function Cu(t,e,n){if(!x_(n)||!vm(n)){const r=wa(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Is(t,e,n){if((e=ze(e))instanceof Su)return e._internalPath;if(typeof e=="string")return M_(t,e);throw ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function M_(t,e,n){if(e.search(pC)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Su(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q(x.INVALID_ARGUMENT,c+t+l)}function L_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Qo].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Fe(o.doubleValue)));return new Ht(n)}convertGeoPoint(e){return new hn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){const n=ir(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Re(o_(r),9688,{name:e});const s=new Ri(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends gC{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function OC(){return new Pu("serverTimestamp")}const qd="@firebase/firestore",Hd="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Is("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends F_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vu{}class _C extends Vu{}function yC(t,e,...n){let r=[];e instanceof Vu&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Du)).length,c=i.filter((l=>l instanceof ja)).length;if(o>1||o>0&&c>0)throw new Q(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class ja extends _C{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ja(e,n,r)}_apply(e){const n=this._parse(e);return B_(e._query,n),new Br(e.firestore,e.converter,al(e._query,n))}_parse(e){const n=Ua(e.firestore);return(function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){zd(p,f);const N=[];for(const V of p)N.push(Kd(l,i,V));g={arrayValue:{values:N}}}else g=Kd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||zd(p,f),g=dC(c,o,p,f==="in"||f==="not-in");return $e.create(h,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wd(t,e,n){const r=e,s=Is("where",t);return ja._create(s,r,n)}class Du extends Vu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Du(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)B_(o,l),o=al(o,l)})(e._query,n),new Br(e.firestore,e.converter,al(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kd(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new Q(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fm(e)&&n.indexOf("/")!==-1)throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!te.isDocumentKey(r))throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return od(t,new te(r))}if(n instanceof Le)return od(t,n._key);throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wa(n)}.`)}function zd(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function B_(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Q(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function j_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends F_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Is("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:qe("string",br._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class Po extends br{data(e={}){return super.data(e)}}class Pr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ei(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Po(this._firestore,this._userDataWriter,r.key,r,new ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ei(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ei(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:EC(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr._jsonSchemaVersion="firestore/querySnapshot/1.0",Pr._jsonSchema={type:qe("string",Pr._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){t=Rt(t,Le);const e=Rt(t.firestore,kn),n=La(e);return ZP(n,t._key).then((r=>q_(e,t,r)))}function TC(t){t=Rt(t,Br);const e=Rt(t.firestore,kn),n=La(e),r=new Nu(e);return U_(t._query),eC(n,t._query).then((s=>new Pr(e,r,t,s)))}function vC(t,e,n){t=Rt(t,Le);const r=Rt(t.firestore,kn),s=j_(t.converter,e),i=Ua(r);return $a(r,[O_(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function IC(t,e,n,...r){t=Rt(t,Le);const s=Rt(t.firestore,kn),i=Ua(s);let o;return o=typeof(e=ze(e))=="string"||e instanceof Su?fC(i,"updateDoc",t._key,e,n,r):hC(i,"updateDoc",t._key,e),$a(s,[o.toMutation(t._key,Lt.exists(!0))])}function kC(t){return $a(Rt(t.firestore,kn),[new iu(t._key,Lt.none())])}function xC(t,e){const n=Rt(t.firestore,kn),r=sa(t),s=j_(t.converter,e),i=Ua(t.firestore);return $a(n,[O_(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then((()=>r))}function MC(t,...e){var h,f,p;t=ze(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Gd(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Gd(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(t instanceof Le)o=Rt(t.firestore,kn),c=ba(t._key.path),i={next:g=>{e[r]&&e[r](q_(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Rt(t,Br);o=Rt(g.firestore,kn),c=g._query;const y=new Nu(o);i={next:N=>{e[r]&&e[r](new Pr(o,y,g,N))},error:e[r+1],complete:e[r+2]},U_(t._query)}const l=La(o);return XP(l,c,s,i)}function $a(t,e){const n=La(t);return tC(n,e)}function q_(t,e,n){const r=n.docs.get(e._key),s=new Nu(t);return new br(t,s,e._key,r,new ei(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){eS(ws),ms(new Nr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new kn(new rS(r.getProvider("auth-internal")),new oS(o,r.getProvider("app-check-internal")),wS(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),er(qd,Hd,e),er(qd,Hd,"esm2020")})();const wC={apiKey:"AIzaSyB7bzp2zrIKny-j8ZDgkL3NfGNTsM4whNo",authDomain:"toefl-writing-practice.firebaseapp.com",projectId:"toefl-writing-practice",storageBucket:"toefl-writing-practice.firebasestorage.app",messagingSenderId:"383195886043",appId:"1:383195886043:web:f77b1d5b369ae32dbd77fe",measurementId:"G-5S5LCHH8B2"},H_=Pg(wC),Co=XR(H_),No=oC(H_),Ou=Vi(null),hs=Vi(null),yl=Vi(!1),es=Vi(!1);let G_;const AC=new Promise(t=>{G_=t});BA(Co,async t=>{if(Ou.value=t,t){es.value=!1;const e=await $_(sa(No,"users",t.uid));hs.value=e.exists()?e.data():null}else hs.value=null;yl.value||(yl.value=!0,G_())});const LC=()=>({user:Ou,userProfile:hs,authReady:yl,guestMode:es,login:async(s,i)=>{es.value=!1;const o=await LA(Co,s,i),c=await $_(sa(No,"users",o.user.uid));return hs.value=c.exists()?c.data():null,o},register:async(s,i,o,c)=>{let l;try{l=await MA(Co,s,i)}catch(h){throw h}try{const h=yC(iC(No,"codes"),Wd("code","==",c.trim().toUpperCase()),Wd("used","==",!1)),f=await TC(h);if(f.empty){await l.user.delete();const V=new Error("invalid-code");throw V.code="auth/invalid-code",V}const p=f.docs[0],{teacherId:g,teacherName:y}=p.data(),N={name:o,email:s,role:"student",teacherId:g,teacherName:y};return await vC(sa(No,"users",l.user.uid),N),hs.value=N,await IC(p.ref,{used:!0,usedBy:l.user.uid,usedByName:o}),l}catch(h){if(l&&h.code!=="auth/invalid-code")try{await l.user.delete()}catch{}throw h}},continueAsGuest:()=>{es.value=!0},logout:async()=>{es.value=!1,await jA(Co)}}),W_=tI({history:Ov(),routes:[{path:"/",redirect:"/practice"},{path:"/login",component:()=>pc(()=>import("./LoginView-RN5RwIg4.js"),[]),meta:{public:!0}},{path:"/practice",component:()=>pc(()=>import("./PracticeView-DwWwFdqV.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0,allowGuest:!0}},{path:"/dashboard",component:()=>pc(()=>import("./DashboardView-DvHlJunG.js"),__vite__mapDeps([2,1])),meta:{requiresAuth:!0,teacherOnly:!0}}]});W_.beforeEach(async t=>{var s;await AC;const e=!!Ou.value,n=es.value,r=((s=hs.value)==null?void 0:s.role)==="teacher";if(t.path==="/")return!e&&!n?"/login":r?"/dashboard":"/practice";if(t.meta.requiresAuth&&!e&&!n)return"/login";if(t.meta.teacherOnly&&!r)return"/practice";if(t.path==="/login"&&(e||n))return r?"/dashboard":"/practice"});BT(WT).use(W_).mount("#app");export{yC as A,Wd as B,MC as C,hs as D,kC as E,En as F,sa as G,Zp as H,sE as I,Jv as R,tg as a,RC as b,bC as c,PC as d,VC as e,gE as f,mo as g,Dt as h,rs as i,nT as j,Ip as k,jt as l,xC as m,Rl as n,Yp as o,iC as p,No as q,Vi as r,OC as s,Sy as t,LC as u,CC as v,NC as w,Ou as x,yE as y,SC as z};
