import{S as X,i as Y,s as J,k as D,l as q,m as E,h as v,n as _,b,H as P,C as M,I as R,o as N,q as F,r as S,a as U,c as A,J as B,u as V}from"../../chunks/index-7cfc8f94.js";import{w as H}from"../../chunks/index-05951699.js";function j(m){let r,i;return{c(){r=D("p"),i=F("Drag and drop your image here")},l(f){r=q(f,"P",{});var s=E(r);i=S(s,"Drag and drop your image here"),s.forEach(v)},m(f,s){b(f,r,s),P(r,i)},p:M,d(f){f&&v(r)}}}function z(m){let r,i,f,s,c,n=m[0].name+"",p,d,h,g,y,l;return{c(){r=D("img"),f=U(),s=D("p"),c=F("Uploading "),p=F(n),d=F("..."),h=U(),g=D("a"),y=F("Download"),this.h()},l(o){r=q(o,"IMG",{src:!0,alt:!0,class:!0}),f=A(o),s=q(o,"P",{});var e=E(s);c=S(e,"Uploading "),p=S(e,n),d=S(e,"..."),e.forEach(v),h=A(o),g=q(o,"A",{download:!0,href:!0,class:!0});var t=E(g);y=S(t,"Download"),t.forEach(v),this.h()},h(){B(r.src,i=m[1])||_(r,"src",i),_(r,"alt","Framed image preview"),_(r,"class","svelte-doqeb5"),_(g,"download",l=m[0].name),_(g,"href",m[1]),_(g,"class","svelte-doqeb5")},m(o,e){b(o,r,e),b(o,f,e),b(o,s,e),P(s,c),P(s,p),P(s,d),b(o,h,e),b(o,g,e),P(g,y)},p(o,e){e&2&&!B(r.src,i=o[1])&&_(r,"src",i),e&1&&n!==(n=o[0].name+"")&&V(p,n),e&1&&l!==(l=o[0].name)&&_(g,"download",l),e&2&&_(g,"href",o[1])},d(o){o&&v(r),o&&v(f),o&&v(s),o&&v(h),o&&v(g)}}}function K(m){let r,i;function f(n,p){return n[0]?z:j}let s=f(m),c=s(m);return{c(){r=D("main"),i=D("div"),c.c(),this.h()},l(n){r=q(n,"MAIN",{class:!0});var p=E(r);i=q(p,"DIV",{id:!0,class:!0});var d=E(i);c.l(d),d.forEach(v),p.forEach(v),this.h()},h(){_(i,"id","drop-area"),_(i,"class","svelte-doqeb5"),_(r,"class","svelte-doqeb5")},m(n,p){b(n,r,p),P(r,i),c.m(i,null)},p(n,[p]){s===(s=f(n))&&c?c.p(n,p):(c.d(1),c=s(n),c&&(c.c(),c.m(i,null)))},i:M,o:M,d(n){n&&v(r),c.d()}}}function Q(m,r,i){let f,s;const c=H(null);R(m,c,d=>i(0,f=d));const n=H("");R(m,n,d=>i(1,s=d));function p(d){d.preventDefault();const h=d.dataTransfer.files[0],g=new FileReader;g.onload=function(y){const l=new Image;l.src=y.target.result,l.onload=function(){const o=document.createElement("canvas"),e=o.getContext("2d"),t=30,a=10,u=30,w=10,O=l.width+t*2+a*2,G=l.height+t*2+a+u+w;o.width=O,o.height=G,e.shadowColor="rgba(0, 0, 0, 0.5)",e.shadowOffsetX=t,e.shadowOffsetY=t,e.shadowBlur=30;const I=e.createLinearGradient(0,0,0,u);I.addColorStop(0,"rgba(255, 255, 255, 0.8)"),I.addColorStop(1,"rgba(255, 255, 255, 0.2)"),e.fillStyle=I,e.fillRect(t+a,t+a,l.width,u),e.shadowColor="transparent",e.fillStyle="#FFF",e.beginPath(),e.moveTo(t+a+w,t+a+u),e.lineTo(t+a+l.width-w,t+a+u),e.quadraticCurveTo(t+a+l.width,t+a+u,t+a+l.width,t+a+u+w),e.lineTo(t+a+l.width,t+a+l.height+u-w),e.quadraticCurveTo(t+a+l.width,t+a+l.height+u,t+a+l.width-w,t+a+l.height+u),e.lineTo(t+a+w,t+a+l.height+u),e.quadraticCurveTo(t+a,t+a+l.height+u,t+a,t+a+l.height+u-w),e.lineTo(t+a,t+a+u+w),e.quadraticCurveTo(t+a,t+a+u,t+a+w,t+a+u),e.closePath(),e.fill(),e.drawImage(l,t+a,t+a+u,l.width,l.height);const C=8,T=6,L=t+a+T,k=t+a+T;e.beginPath(),e.fillStyle="#FF5F57",e.arc(L,k,C,0,2*Math.PI),e.fill(),e.beginPath(),e.fillStyle="#FFC74A",e.arc(L+C+T,k,C,0,2*Math.PI),e.fill(),e.beginPath(),e.fillStyle="#32D74B",e.arc(L+(C+T)*2,k,C,0,2*Math.PI),e.fill();const W=o.toDataURL("image/png");n.set(W)}},g.readAsDataURL(h),c.set(h)}return N(()=>{const d=document.querySelector("#drop-area");d.addEventListener("dragenter",h=>{h.stopPropagation(),h.preventDefault(),d.classList.add("drag-enter")}),d.addEventListener("dragleave",h=>{h.stopPropagation(),h.preventDefault(),d.classList.remove("drag-enter")}),d.addEventListener("dragover",h=>{h.stopPropagation(),h.preventDefault()}),d.addEventListener("drop",h=>{p(h)})}),[f,s,c,n]}class x extends X{constructor(r){super(),Y(this,r,Q,K,J,{})}}export{x as default};
