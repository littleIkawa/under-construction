import{S as P,i as S,s as V,k as d,a as B,q as z,F,l as p,h as f,c as I,m as y,r as H,n as g,C as v,b,f as k,d as K,t as q,D as L,w as M,x as U,y as j,z as G,g as J}from"../../../chunks/index-3e4b0432.js";import{b as O}from"../../../chunks/paths-6cd3a76e.js";import{A as Q}from"../../../chunks/ArticleCard-cf49c9ab.js";function D(i,l,o){const a=i.slice();return a[2]=l[o],a}function w(i){let l,o;return l=new Q({props:{metadata:i[2]}}),{c(){M(l.$$.fragment)},l(a){U(l.$$.fragment,a)},m(a,c){j(l,a,c),o=!0},p(a,c){const r={};c&1&&(r.metadata=a[2]),l.$set(r)},i(a){o||(k(l.$$.fragment,a),o=!0)},o(a){q(l.$$.fragment,a),o=!1},d(a){G(l,a)}}}function R(i){let l,o,a,c,r,u,x,C,h,$,m=i[0].post,s=[];for(let e=0;e<m.length;e+=1)s[e]=w(D(i,m,e));const N=e=>q(s[e],1,1,()=>{s[e]=null});return{c(){l=d("link"),o=B(),a=d("div"),c=B(),r=d("main"),u=d("h1"),x=z("Blog"),C=B(),h=d("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){const n=F("svelte-mp0q4o",document.head);l=p(n,"LINK",{rel:!0,href:!0}),n.forEach(f),o=I(e),a=p(e,"DIV",{class:!0}),y(a).forEach(f),c=I(e),r=p(e,"MAIN",{class:!0});var t=y(r);u=p(t,"H1",{});var _=y(u);x=H(_,"Blog"),_.forEach(f),C=I(t),h=p(t,"DIV",{class:!0});var A=y(h);for(let E=0;E<s.length;E+=1)s[E].l(A);A.forEach(f),t.forEach(f),this.h()},h(){document.title="Under Construction | Blog",g(l,"rel","stylesheet"),g(l,"href",i[1]),g(a,"class","header-margin svelte-aesi38"),g(h,"class","contents-container svelte-aesi38"),g(r,"class","main-container svelte-aesi38")},m(e,n){v(document.head,l),b(e,o,n),b(e,a,n),b(e,c,n),b(e,r,n),v(r,u),v(u,x),v(r,C),v(r,h);for(let t=0;t<s.length;t+=1)s[t].m(h,null);$=!0},p(e,[n]){if(n&1){m=e[0].post;let t;for(t=0;t<m.length;t+=1){const _=D(e,m,t);s[t]?(s[t].p(_,n),k(s[t],1)):(s[t]=w(_),s[t].c(),k(s[t],1),s[t].m(h,null))}for(J(),t=m.length;t<s.length;t+=1)N(t);K()}},i(e){if(!$){for(let n=0;n<m.length;n+=1)k(s[n]);$=!0}},o(e){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)q(s[n]);$=!1},d(e){f(l),e&&f(o),e&&f(a),e&&f(c),e&&f(r),L(s,e)}}}function T(i,l,o){const a=`${O}/style/bg2.css`;let{data:c}=l;return i.$$set=r=>{"data"in r&&o(0,c=r.data)},[c,a]}class Z extends P{constructor(l){super(),S(this,l,T,R,V,{data:0})}}export{Z as default};