import{S as gt,i as wt,s as yt,a as bt,e as H,c as vt,b as X,g as ge,t as K,d as we,f as M,h as G,j as Et,o as Te,k as kt,l as St,m as Rt,n as Le,p as B,q as Lt,r as It,u as At,v as Ie,w as Q,x,y as Ce,z as ee,A as te,B as me}from"./chunks/index-7cfc8f94.js";import{S as ut,a as dt,I as $,g as xe,f as et,b as Ae,c as _e,s as F,i as tt,d as ie,e as Z,P as nt,h as Pt,j as Ot,k as Ut}from"./chunks/singletons-e2ca9443.js";function Nt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function jt(a){return a.split("%25").map(decodeURI).join("%25")}function Tt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Dt=["href","pathname","search","searchParams","toString","toJSON"];function Ct(a,e){const n=new URL(a);for(const o of Dt){let i=n[o];Object.defineProperty(n,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return qt(n),n}function qt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Vt="/__data.json";function $t(a){return a.replace(/\/$/,"")+Vt}function ht(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Bt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let o=n.length;for(;o;)e=e*33^n.charCodeAt(--o)}else if(ArrayBuffer.isView(n)){const o=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=o.length;for(;i;)e=e*33^o[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&le.delete(qe(a)),ye(a,e));const le=new Map;function Ft(a,e){const n=qe(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:i,...u}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&le.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return ye(a,e)}function Ht(a,e,n){if(le.size>0){const o=qe(a,n),i=le.get(o);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);le.delete(o)}}return ye(e,n)}function qe(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),o+=`[data-hash="${Bt(...i)}"]`}return o}const Kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Mt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Jt(a).map(o=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,p)=>{if(p%2){if(_.startsWith("x+"))return Pe(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Pe(String.fromCharCode(..._.slice(2).split("-").map(A=>parseInt(A,16))));const g=Kt.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,S,j,L,q]=g;return e.push({name:L,matcher:q,optional:!!S,rest:!!j,chained:j?p===1&&t[0]==="":!1}),j?"(.*?)":S?"([^/]*)?":"([^/]+?)"}return Pe(_)}).join("")}).join("")}/?$`),params:e}}function Gt(a){return!/^\([^)]+\)$/.test(a)}function Jt(a){return a.slice(1).split("/").filter(Gt)}function zt(a,e,n){const o={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const f=e[t],_=i[t-u];if(f.chained&&f.rest&&u){o[f.name]=i.slice(t-u,t+1).filter(p=>p).join("/"),u=0;continue}if(_===void 0){f.rest&&(o[f.name]="");continue}if(!f.matcher||n[f.matcher](_)){o[f.name]=_;continue}if(f.optional&&f.chained){u++;continue}return}if(!u)return o}function Pe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Wt(a,e,n,o){const i=new Set(e);return Object.entries(n).map(([f,[_,p,g]])=>{const{pattern:S,params:j}=Mt(f),L={id:f,exec:q=>{const A=S.exec(q);if(A)return zt(A,j,o)},errors:[1,...g||[]].map(q=>a[q]),layouts:[0,...p||[]].map(t),leaf:u(_)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function u(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[i.has(f),a[f]]}}function Yt(a){let e,n,o;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Q(i,u(a)),a[12](e)),{c(){e&&x(e.$$.fragment),n=H()},l(t){e&&Ce(e.$$.fragment,t),n=H()},m(t,f){e&&ee(e,t,f),X(t,n,f),o=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&4&&(_.form=t[2]),i!==(i=t[1][0])){if(e){ge();const p=e;K(p.$$.fragment,1,0,()=>{te(p,1)}),we()}i?(e=Q(i,u(t)),t[12](e),x(e.$$.fragment),M(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&M(e.$$.fragment,t),o=!0)},o(t){e&&K(e.$$.fragment,t),o=!1},d(t){a[12](null),t&&G(n),e&&te(e,t)}}}function Xt(a){let e,n,o;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Zt]},$$scope:{ctx:t}}}}return i&&(e=Q(i,u(a)),a[11](e)),{c(){e&&x(e.$$.fragment),n=H()},l(t){e&&Ce(e.$$.fragment,t),n=H()},m(t,f){e&&ee(e,t,f),X(t,n,f),o=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&8215&&(_.$$scope={dirty:f,ctx:t}),i!==(i=t[1][0])){if(e){ge();const p=e;K(p.$$.fragment,1,0,()=>{te(p,1)}),we()}i?(e=Q(i,u(t)),t[11](e),x(e.$$.fragment),M(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&M(e.$$.fragment,t),o=!0)},o(t){e&&K(e.$$.fragment,t),o=!1},d(t){a[11](null),t&&G(n),e&&te(e,t)}}}function Zt(a){let e,n,o;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Q(i,u(a)),a[10](e)),{c(){e&&x(e.$$.fragment),n=H()},l(t){e&&Ce(e.$$.fragment,t),n=H()},m(t,f){e&&ee(e,t,f),X(t,n,f),o=!0},p(t,f){const _={};if(f&16&&(_.data=t[4]),f&4&&(_.form=t[2]),i!==(i=t[1][1])){if(e){ge();const p=e;K(p.$$.fragment,1,0,()=>{te(p,1)}),we()}i?(e=Q(i,u(t)),t[10](e),x(e.$$.fragment),M(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&M(e.$$.fragment,t),o=!0)},o(t){e&&K(e.$$.fragment,t),o=!1},d(t){a[10](null),t&&G(n),e&&te(e,t)}}}function rt(a){let e,n=a[6]&&st(a);return{c(){e=kt("div"),n&&n.c(),this.h()},l(o){e=St(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=Rt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Le(e,"id","svelte-announcer"),Le(e,"aria-live","assertive"),Le(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(o,i){X(o,e,i),n&&n.m(e,null)},p(o,i){o[6]?n?n.p(o,i):(n=st(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&G(e),n&&n.d()}}}function st(a){let e;return{c(){e=Lt(a[7])},l(n){e=It(n,a[7])},m(n,o){X(n,e,o)},p(n,o){o&128&&At(e,n[7])},d(n){n&&G(e)}}}function Qt(a){let e,n,o,i,u;const t=[Xt,Yt],f=[];function _(g,S){return g[1][1]?0:1}e=_(a),n=f[e]=t[e](a);let p=a[5]&&rt(a);return{c(){n.c(),o=bt(),p&&p.c(),i=H()},l(g){n.l(g),o=vt(g),p&&p.l(g),i=H()},m(g,S){f[e].m(g,S),X(g,o,S),p&&p.m(g,S),X(g,i,S),u=!0},p(g,[S]){let j=e;e=_(g),e===j?f[e].p(g,S):(ge(),K(f[j],1,1,()=>{f[j]=null}),we(),n=f[e],n?n.p(g,S):(n=f[e]=t[e](g),n.c()),M(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,S):(p=rt(g),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null)},i(g){u||(M(n),u=!0)},o(g){K(n),u=!1},d(g){f[e].d(g),g&&G(o),p&&p.d(g),g&&G(i)}}}function xt(a,e,n){let{stores:o}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:f}=e,{data_0:_=null}=e,{data_1:p=null}=e;Et(o.page.notify);let g=!1,S=!1,j=null;Te(()=>{const R=o.page.subscribe(()=>{g&&(n(6,S=!0),n(7,j=document.title||"untitled page"))});return n(5,g=!0),R});function L(R){Ie[R?"unshift":"push"](()=>{t[1]=R,n(0,t)})}function q(R){Ie[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}function A(R){Ie[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}return a.$$set=R=>{"stores"in R&&n(8,o=R.stores),"page"in R&&n(9,i=R.page),"constructors"in R&&n(1,u=R.constructors),"components"in R&&n(0,t=R.components),"form"in R&&n(2,f=R.form),"data_0"in R&&n(3,_=R.data_0),"data_1"in R&&n(4,p=R.data_1)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(i)},[t,u,f,_,p,g,S,j,o,i,L,q,A]}class en extends gt{constructor(e){super(),wt(this,e,xt,Qt,yt,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const tn="modulepreload",nn=function(a,e){return new URL(a,e).href},ot={},Oe=function(e,n,o){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=nn(u,o),u in ot)return;ot[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!o)for(let g=i.length-1;g>=0;g--){const S=i[g];if(S.href===u&&(!t||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":tn,t||(p.as="script",p.crossOrigin=""),p.href=u,document.head.appendChild(p),t)return new Promise((g,S)=>{p.addEventListener("load",g),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},an={},be=[()=>Oe(()=>import("./chunks/0-038263d5.js"),["./chunks/0-038263d5.js","./chunks/_layout-31092a89.js","./components/pages/_layout.svelte-a3d7b13b.js","./chunks/index-7cfc8f94.js","./assets/_layout-ecab81f9.css"],import.meta.url),()=>Oe(()=>import("./chunks/1-86b3f21a.js"),["./chunks/1-86b3f21a.js","./components/error.svelte-9696cdbd.js","./chunks/index-7cfc8f94.js","./chunks/singletons-e2ca9443.js","./chunks/index-05951699.js"],import.meta.url),()=>Oe(()=>import("./chunks/2-0e9b856f.js"),["./chunks/2-0e9b856f.js","./components/pages/_page.svelte-69a30e06.js","./chunks/index-7cfc8f94.js","./chunks/index-05951699.js","./assets/_page-bdf7cb2a.css"],import.meta.url)],pt=[],rn={"/":[2]},sn={handleError:({error:a})=>{console.error(a)}};let ce=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},it=class{constructor(e,n){this.status=e,this.location=n}};async function on(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,i])=>[o,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ln=-1,cn=-2,fn=-3,un=-4,dn=-5,hn=-6;function pn(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,o=Array(n.length);function i(u,t=!1){if(u===ln)return;if(u===fn)return NaN;if(u===un)return 1/0;if(u===dn)return-1/0;if(u===hn)return-0;if(t)throw new Error("Invalid input");if(u in o)return o[u];const f=n[u];if(!f||typeof f!="object")o[u]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const _=f[0],p=e==null?void 0:e[_];if(p)return o[u]=p(i(f[1]));switch(_){case"Date":o[u]=new Date(f[1]);break;case"Set":const g=new Set;o[u]=g;for(let L=1;L<f.length;L+=1)g.add(i(f[L]));break;case"Map":const S=new Map;o[u]=S;for(let L=1;L<f.length;L+=2)S.set(i(f[L]),i(f[L+1]));break;case"RegExp":o[u]=new RegExp(f[1],f[2]);break;case"Object":o[u]=Object(f[1]);break;case"BigInt":o[u]=BigInt(f[1]);break;case"null":const j=Object.create(null);o[u]=j;for(let L=1;L<f.length;L+=2)j[f[L]]=i(f[L+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(f.length);o[u]=_;for(let p=0;p<f.length;p+=1){const g=f[p];g!==cn&&(_[p]=i(g))}}else{const _={};o[u]=_;for(const p in f){const g=f[p];_[p]=i(g)}}return o[u]}return i(0)}function mn(a){return a.filter(e=>e!=null)}const Ue=Wt(be,pt,rn,an),mt=be[0],De=be[1];mt();De();var ct;const Y=(ct=ht(ut))!=null?ct:{};var ft;const se=(ft=ht(dt))!=null?ft:{};function Ne(a){Y[a]=ie()}function _n({target:a}){var Xe;const e=document.documentElement,n=[],o=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,p=!0,g=!1,S=!1,j=!1,L=!1,q,A=(Xe=history.state)==null?void 0:Xe[$];A||(A=Date.now(),history.replaceState({...history.state,[$]:A},"",location.href));const R=Y[A];R&&(history.scrollRestoration="manual",scrollTo(R.x,R.y));let J,Ve,fe;async function $e(){fe=fe||Promise.resolve(),await fe,fe=null;const s=new URL(location.href),r=ae(s,!0);i=null,await Ke(r,s,[])}function Be(s){o.some(r=>r==null?void 0:r.snapshot)&&(se[s]=o.map(r=>{var c;return(c=r==null?void 0:r.snapshot)==null?void 0:c.capture()}))}function Fe(s){var r;(r=se[s])==null||r.forEach((c,l)=>{var h,d;(d=(h=o[l])==null?void 0:h.snapshot)==null||d.restore(c)})}async function ve(s,{noScroll:r=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:d=!1},m,w){return typeof s=="string"&&(s=new URL(s,xe(document))),pe({url:s,scroll:r?ie():null,keepfocus:l,redirect_chain:m,details:{state:h,replaceState:c},nav_token:w,accepted:()=>{d&&(L=!0)},blocked:()=>{},type:"goto"})}async function He(s){return i={id:s.id,promise:Je(s).then(r=>(r.type==="loaded"&&r.state.error&&(i=null),r))},i.promise}async function ue(...s){const c=Ue.filter(l=>s.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function Ke(s,r,c,l,h,d={},m){var y,k,b;Ve=d;let w=s&&await Je(s);if(w||(w=await Ye(r,{id:null},await oe(new Error(`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)),r=(s==null?void 0:s.url)||r,Ve!==d)return!1;if(w.type==="redirect")if(c.length>10||c.includes(r.pathname))w=await de({status:500,error:await oe(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return ve(new URL(w.location,r).href,{},[...c,r.pathname],d),!1;else((y=w.props.page)==null?void 0:y.status)>=400&&await F.updated.check()&&await re(r);if(n.length=0,L=!1,g=!0,l&&(Ne(l),Be(l)),(k=w.props.page)!=null&&k.url&&w.props.page.url.pathname!==r.pathname&&(r.pathname=(b=w.props.page)==null?void 0:b.url.pathname),h&&h.details){const{details:E}=h,C=E.replaceState?0:1;if(E.state[$]=A+=C,history[E.replaceState?"replaceState":"pushState"](E.state,"",r),!E.replaceState){let N=A+1;for(;se[N]||Y[N];)delete se[N],delete Y[N],N+=1}}if(i=null,_?(t=w.state,w.props.page&&(w.props.page.url=r),q.$set(w.props)):Me(w),h){const{scroll:E,keepfocus:C}=h,{activeElement:N}=document;await me();const I=document.activeElement!==N&&document.activeElement!==document.body;if(!C&&!I&&await je(),p){const D=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));E?scrollTo(E.x,E.y):D?D.scrollIntoView():scrollTo(0,0)}}else await me();p=!0,w.props.page&&(J=w.props.page),m&&m(),g=!1}function Me(s){var l,h;t=s.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),J=s.props.page,q=new en({target:a,props:{...s.props,stores:F,components:o},hydrate:!0}),Fe(A);const c={from:null,to:{params:t.params,route:{id:(h=(l=t.route)==null?void 0:l.id)!=null?h:null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(d=>d(c)),_=!0}async function ne({url:s,params:r,branch:c,status:l,error:h,route:d,form:m}){var N;let w="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(w=I.slash);s.pathname=Nt(s.pathname,w),s.search=s.search;const y={type:"loaded",state:{url:s,params:r,branch:c,error:h,route:d},props:{constructors:mn(c).map(I=>I.node.component)}};m!==void 0&&(y.props.form=m);let k={},b=!J,E=0;for(let I=0;I<Math.max(c.length,t.branch.length);I+=1){const D=c[I],V=t.branch[I];(D==null?void 0:D.data)!==(V==null?void 0:V.data)&&(b=!0),D&&(k={...k,...D.data},b&&(y.props[`data_${E}`]=k),E+=1)}return(!t.url||s.href!==t.url.href||t.error!==h||m!==void 0&&m!==J.form||b)&&(y.props.page={error:h,params:r,route:{id:(N=d==null?void 0:d.id)!=null?N:null},status:l,url:new URL(s),form:m!=null?m:null,data:b?k:J.data}),y}async function Ee({loader:s,parent:r,url:c,params:l,route:h,server_data_node:d}){var k,b,E,C,N,I,D;let m=null;const w={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await s();if((k=y.universal)!=null&&k.load){let V=function(...P){for(const v of P){const{href:O}=new URL(v,c);w.dependencies.add(O)}};const z={route:{get id(){return w.route=!0,h.id}},params:new Proxy(l,{get:(P,v)=>(w.params.add(v),P[v])}),data:(b=d==null?void 0:d.data)!=null?b:null,url:Ct(c,()=>{w.url=!0}),async fetch(P,v){let O;P instanceof Request?(O=P.url,v={body:P.method==="GET"||P.method==="HEAD"?void 0:await P.blob(),cache:P.cache,credentials:P.credentials,headers:P.headers,integrity:P.integrity,keepalive:P.keepalive,method:P.method,mode:P.mode,redirect:P.redirect,referrer:P.referrer,referrerPolicy:P.referrerPolicy,signal:P.signal,...v}):O=P;const U=new URL(O,c);return V(U.href),U.origin===c.origin&&(O=U.href.slice(c.origin.length)),_?Ht(O,U.href,v):Ft(O,v)},setHeaders:()=>{},depends:V,parent(){return w.parent=!0,r()}};m=(E=await y.universal.load.call(null,z))!=null?E:null,m=m?await on(m):null}return{node:y,loader:s,server:d,universal:(C=y.universal)!=null&&C.load?{type:"data",data:m,uses:w}:null,data:(N=m!=null?m:d==null?void 0:d.data)!=null?N:null,slash:(D=(I=y.universal)==null?void 0:I.trailingSlash)!=null?D:d==null?void 0:d.slash}}function Ge(s,r,c,l,h){if(L)return!0;if(!l)return!1;if(l.parent&&s||l.route&&r||l.url&&c)return!0;for(const d of l.params)if(h[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(m=>m(new URL(d))))return!0;return!1}function ke(s,r){var c,l;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((c=s.uses.dependencies)!=null?c:[]),params:new Set((l=s.uses.params)!=null?l:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"&&r!=null?r:null}async function Je({id:s,invalidating:r,url:c,params:l,route:h}){var P;if((i==null?void 0:i.id)===s)return i.promise;const{errors:d,layouts:m,leaf:w}=h,y=[...m,w];d.forEach(v=>v==null?void 0:v().catch(()=>{})),y.forEach(v=>v==null?void 0:v[1]().catch(()=>{}));let k=null;const b=t.url?s!==t.url.pathname+t.url.search:!1,E=t.route?h.id!==t.route.id:!1;let C=!1;const N=y.map((v,O)=>{var W;const U=t.branch[O],T=!!(v!=null&&v[0])&&((U==null?void 0:U.loader)!==v[1]||Ge(C,E,b,(W=U.server)==null?void 0:W.uses,l));return T&&(C=!0),T});if(N.some(Boolean)){try{k=await lt(c,N)}catch(v){return de({status:v instanceof ce?v.status:500,error:await oe(v,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(k.type==="redirect")return k}const I=k==null?void 0:k.nodes;let D=!1;const V=y.map(async(v,O)=>{var Se;if(!v)return;const U=t.branch[O],T=I==null?void 0:I[O];if((!T||T.type==="skip")&&v[1]===(U==null?void 0:U.loader)&&!Ge(D,E,b,(Se=U.universal)==null?void 0:Se.uses,l))return U;if(D=!0,(T==null?void 0:T.type)==="error")throw T;return Ee({loader:v[1],url:c,params:l,route:h,parent:async()=>{var Qe;const Ze={};for(let Re=0;Re<O;Re+=1)Object.assign(Ze,(Qe=await V[Re])==null?void 0:Qe.data);return Ze},server_data_node:ke(T===void 0&&v[0]?{type:"skip"}:T!=null?T:null,v[0]?U==null?void 0:U.server:void 0)})});for(const v of V)v.catch(()=>{});const z=[];for(let v=0;v<y.length;v+=1)if(y[v])try{z.push(await V[v])}catch(O){if(O instanceof it)return{type:"redirect",location:O.location};let U=500,T;if(I!=null&&I.includes(O))U=(P=O.status)!=null?P:U,T=O.error;else if(O instanceof ce)U=O.status,T=O.body;else{if(await F.updated.check())return await re(c);T=await oe(O,{params:l,url:c,route:{id:h.id}})}const W=await ze(v,z,d);return W?await ne({url:c,params:l,branch:z.slice(0,W.idx).concat(W.node),status:U,error:T,route:h}):await Ye(c,{id:h.id},T,U)}else z.push(void 0);return await ne({url:c,params:l,branch:z,status:200,error:null,route:h,form:r?void 0:null})}async function ze(s,r,c){for(;s--;)if(c[s]){let l=s;for(;!r[l];)l-=1;try{return{idx:l+1,node:{node:await c[s](),loader:c[s],data:{},server:null,universal:null}}}catch{continue}}}async function de({status:s,error:r,url:c,route:l}){var k;const h={};let d=null;if(pt[0]===0)try{const b=await lt(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;d=(k=b.nodes[0])!=null?k:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await re(c)}const w=await Ee({loader:mt,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:ke(d)}),y={node:await De(),loader:De,universal:null,server:null,data:null};return await ne({url:c,params:h,branch:[w,y],status:s,error:r,route:null})}function ae(s,r){if(tt(s,Z))return;const c=he(s);for(const l of Ue){const h=l.exec(c);if(h)return{id:s.pathname+s.search,invalidating:r,route:l,params:Tt(h),url:s}}}function he(s){return jt(s.pathname.slice(Z.length)||"/")}function We({url:s,type:r,intent:c,delta:l}){var w,y,k,b,E;let h=!1;const d={from:{params:t.params,route:{id:(y=(w=t.route)==null?void 0:w.id)!=null?y:null},url:t.url},to:{params:(k=c==null?void 0:c.params)!=null?k:null,route:{id:(E=(b=c==null?void 0:c.route)==null?void 0:b.id)!=null?E:null},url:s},willUnload:!c,type:r};l!==void 0&&(d.delta=l);const m={...d,cancel:()=>{h=!0}};return S||u.before_navigate.forEach(C=>C(m)),h?null:d}async function pe({url:s,scroll:r,keepfocus:c,redirect_chain:l,details:h,type:d,delta:m,nav_token:w,accepted:y,blocked:k}){const b=ae(s,!1),E=We({url:s,type:d,delta:m,intent:b});if(!E){k();return}const C=A;y(),S=!0,_&&F.navigating.set(E),await Ke(b,s,l,C,{scroll:r,keepfocus:c,details:h},w,()=>{S=!1,u.after_navigate.forEach(N=>N(E)),F.navigating.set(null)})}async function Ye(s,r,c,l){return s.origin===location.origin&&s.pathname===location.pathname&&!f?await de({status:l,error:c,url:s,route:r}):await re(s)}function re(s){return location.href=s.href,new Promise(()=>{})}function _t(){let s;e.addEventListener("mousemove",d=>{const m=d.target;clearTimeout(s),s=setTimeout(()=>{l(m,2)},20)});function r(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",r),e.addEventListener("touchstart",r,{passive:!0});const c=new IntersectionObserver(d=>{for(const m of d)m.isIntersecting&&(ue(he(new URL(m.target.href))),c.unobserve(m.target))},{threshold:0});function l(d,m){const w=et(d,e);if(!w)return;const{url:y,external:k}=Ae(w,Z);if(k)return;const b=_e(w);if(!b.reload)if(m<=b.preload_data){const E=ae(y,!1);E&&He(E)}else m<=b.preload_code&&ue(he(y))}function h(){c.disconnect();for(const d of e.querySelectorAll("a")){const{url:m,external:w}=Ae(d,Z);if(w)continue;const y=_e(d);y.reload||(y.preload_code===nt.viewport&&c.observe(d),y.preload_code===nt.eager&&ue(he(m)))}}u.after_navigate.push(h),h()}return{after_navigate:s=>{Te(()=>(u.after_navigate.push(s),()=>{const r=u.after_navigate.indexOf(s);u.after_navigate.splice(r,1)}))},before_navigate:s=>{Te(()=>(u.before_navigate.push(s),()=>{const r=u.before_navigate.indexOf(s);u.before_navigate.splice(r,1)}))},disable_scroll_handling:()=>{(g||!_)&&(p=!1)},goto:(s,r={})=>ve(s,r,[]),invalidate:s=>{if(typeof s=="function")n.push(s);else{const{href:r}=new URL(s,location.href);n.push(c=>c.href===r)}return $e()},invalidateAll:()=>(L=!0,$e()),preload_data:async s=>{const r=new URL(s,xe(document)),c=ae(r,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);await He(c)},preload_code:ue,apply_action:async s=>{var r;if(s.type==="error"){const c=new URL(location.href),{branch:l,route:h}=t;if(!h)return;const d=await ze(t.branch.length,l,h.errors);if(d){const m=await ne({url:c,params:t.params,branch:l.slice(0,d.idx).concat(d.node),status:(r=s.status)!=null?r:500,error:s.error,route:h});t=m.state,q.$set(m.props),me().then(je)}}else if(s.type==="redirect")ve(s.location,{invalidateAll:!0},[]);else{const c={form:s.data,page:{...J,form:s.data,status:s.status}};q.$set(c),s.type==="success"&&me().then(je)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",r=>{var l,h;let c=!1;if(!S){const d={from:{params:t.params,route:{id:(h=(l=t.route)==null?void 0:l.id)!=null?h:null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(m=>m(d))}c?(r.preventDefault(),r.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ne(A),at(ut,Y),Be(A),at(dt,se))}),(s=navigator.connection)!=null&&s.saveData||_t(),e.addEventListener("click",r=>{if(r.button||r.which!==1||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.defaultPrevented)return;const c=et(r.composedPath()[0],e);if(!c)return;const{url:l,external:h,target:d}=Ae(c,Z);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const m=_e(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(h||m.reload){We({url:l,type:"link"})||r.preventDefault(),S=!0;return}const[y,k]=l.href.split("#");if(k!==void 0&&y===location.href.split("#")[0]){j=!0,Ne(A),t.url=l,F.page.set({...J,url:l}),F.page.notify();return}pe({url:l,scroll:m.noscroll?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>r.preventDefault(),blocked:()=>r.preventDefault(),type:"link"})}),e.addEventListener("submit",r=>{var E;if(r.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(r.target),l=r.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(tt(d,Z))return;const m=r.target,{noscroll:w,reload:y}=_e(m);if(y)return;r.preventDefault(),r.stopPropagation();const k=new FormData(m),b=l==null?void 0:l.getAttribute("name");b&&k.append(b,(E=l==null?void 0:l.getAttribute("value"))!=null?E:""),d.search=new URLSearchParams(k).toString(),pe({url:d,scroll:w?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async r=>{var c;if((c=r.state)!=null&&c[$]){if(r.state[$]===A)return;const l=Y[r.state[$]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[A]=ie(),A=r.state[$],scrollTo(l.x,l.y);return}const h=r.state[$]-A;let d=!1;await pe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=r.state[$]},blocked:()=>{history.go(-h),d=!0},type:"popstate",delta:h}),d||Fe(A)}}),addEventListener("hashchange",()=>{j&&(j=!1,history.replaceState({...history.state,[$]:++A},"",location.href))});for(const r of document.querySelectorAll("link"))r.rel==="icon"&&(r.href=r.href);addEventListener("pageshow",r=>{r.persisted&&F.navigating.set(null)})},_hydrate:async({status:s=200,error:r,node_ids:c,params:l,route:h,data:d,form:m})=>{var k;f=!0;const w=new URL(location.href);({params:l={},route:h={id:null}}=ae(w,!1)||{});let y;try{const b=c.map(async(E,C)=>{const N=d[C];return Ee({loader:be[E],url:w,params:l,route:h,parent:async()=>{const I={};for(let D=0;D<C;D+=1)Object.assign(I,(await b[D]).data);return I},server_data_node:ke(N)})});y=await ne({url:w,params:l,branch:await Promise.all(b),status:s,error:r,form:m,route:(k=Ue.find(({id:E})=>E===h.id))!=null?k:null})}catch(b){if(b instanceof it){await re(new URL(b.location,location.href));return}y=await de({status:b instanceof ce?b.status:500,error:await oe(b,{url:w,params:l,route:h}),url:w,route:h})}Me(y)}}}async function lt(a,e){var u;const n=new URL(a);n.pathname=$t(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await ye(n.href),i=await o.json();if(!o.ok)throw new ce(o.status,i);return(u=i.nodes)==null||u.forEach(t=>{var f,_;(t==null?void 0:t.type)==="data"&&(t.data=pn(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((_=t.uses.params)!=null?_:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function oe(a,e){var n;return a instanceof ce?a.body:(n=sn.handleError({error:a,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}function je(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{var i;o((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function vn({assets:a,env:e,hydrate:n,target:o,version:i}){Ot(a),Ut(i);const u=_n({target:o});Pt({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{vn as start};