function M(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function xt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(et(e,n))}function wt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function vt(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let T=!1;function nt(){T=!0}function it(){T=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[a]+1;const _=a+1;n[_]=c,r=Math.max(_,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(s[c],a)}}function ct(t,e){if(T){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){T&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function St(){return O(" ")}function kt(){return O("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,r=!1){ft(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function at(t,e,n,i){return R(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function jt(t,e,n){return at(t,e,n,ot)}function dt(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>O(e),!0)}function Ct(t){return dt(t," ")}function Dt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function Bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ht(t,e){return new t(e)}let w;function b(t){w=t}function W(){if(!w)throw new Error("Function called outside component initialization");return w}function Ot(t){W().$$.on_mount.push(t)}function Pt(t){W().$$.after_update.push(t)}const x=[],G=[],S=[],I=[],U=Promise.resolve();let B=!1;function V(){B||(B=!0,U.then(X))}function zt(){return V(),U}function H(t){S.push(t)}const q=new Set;let A=0;function X(){const t=w;do{for(;A<x.length;){const e=x[A];A++,b(e),_t(e.$$)}for(b(null),x.length=0,A=0;G.length;)G.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while(x.length);for(;I.length;)I.pop()();B=!1,q.clear(),b(t)}function _t(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const k=new Set;let g;function Ft(){g={r:0,c:[],p:g}}function Gt(){g.r||$(g.c),g=g.p}function Y(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),g.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const It=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Jt(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Kt(t,e,n,i,r,u,s,o,c,l,a,_){let d=t.length,m=u.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const v=[],C=new Map,D=new Map;for(h=m;h--;){const f=_(r,u,h),p=n(f);let y=s.get(p);y?i&&y.p(f,e):(y=l(p,f),y.c()),C.set(p,v[h]=y),p in j&&D.set(p,Math.abs(h-j[p]))}const P=new Set,z=new Set;function L(f){Y(f,1),f.m(o,a),s.set(f.key,f),a=f.first,m--}for(;d&&m;){const f=v[m-1],p=t[d-1],y=f.key,E=p.key;f===p?(a=f.first,d--,m--):C.has(E)?!s.has(y)||P.has(y)?L(f):z.has(E)?d--:D.get(y)>D.get(E)?(z.add(y),L(f)):(P.add(E),d--):(c(p,s),d--)}for(;d--;){const f=t[d];C.has(f.key)||c(f,s)}for(;m;)L(v[m-1]);return v}function Qt(t){t&&t.c()}function Rt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),u.forEach(H)}function pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,u,s,o=[-1]){const c=w;b(t);const l=t.$$={fragment:null,ctx:[],props:u,update:M,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),a&&yt(t,_)),d}):[],l.update(),a=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=ut(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),it(),X()}b(c)}class Ut{$destroy(){pt(this,1),this.$destroy=M}$on(e,n){if(!K(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as A,M as B,ct as C,At as D,Bt as E,xt as F,bt as G,It as H,wt as I,vt as J,Et as K,$t as L,H as M,qt as N,Mt as O,Kt as P,Jt as Q,Ut as S,St as a,Nt as b,Ct as c,Gt as d,kt as e,Y as f,Ft as g,lt as h,Wt as i,Pt as j,ot as k,jt as l,ut as m,Tt as n,Ot as o,Lt as p,O as q,dt as r,gt as s,ht as t,Dt as u,Ht as v,Qt as w,Rt as x,mt as y,pt as z};