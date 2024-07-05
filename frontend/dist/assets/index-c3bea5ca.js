import{r as I,j as o}from"./index-8b683006.js";import{i as $,S as ee,H as te,v as D,s as ne,e as se,f as ae,g as ie,h as re,j as oe,r as le,k as Y,l as C,n as ce,o as ue,p as fe,q as me,t as _,w as de,G as q,x as W,y as ge}from"./index-5091dbc8.js";function he(e){return typeof e=="object"&&!Array.isArray(e)}function pe(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=$(e)?new ee(t,{enableHardwareAcceleration:!1}):new te(t,{enableHardwareAcceleration:!0});a.mount(e),D.set(e,a)}function xe(e,t=100){const a=ne({keyframes:[0,t],...e}),n=Math.min(se(a),ae);return{type:"keyframes",ease:s=>a.next(n*s).value/t,duration:ie(n)}}function P(e,t,a,n){var s;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?a:(s=n.get(t))!==null&&s!==void 0?s:e}const ye=(e,t,a)=>{const n=t-e;return((a-e)%n+n)%n+e};function be(e,t){return re(e)?e[ye(0,e.length,t)]:e}function ve(e,t,a){for(let n=0;n<e.length;n++){const s=e[n];s.at>t&&s.at<a&&(le(e,s),n--)}}function je(e,t,a,n,s,i){ve(e,s,i);for(let r=0;r<t.length;r++)e.push({value:t[r],at:oe(s,i,n[r]),easing:be(a,r)})}function we(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Ee="easeInOut";function Se(e,{defaultTransition:t={},...a}={},n){const s=t.duration||.3,i=new Map,r=new Map,u={},c=new Map;let h=0,l=0,j=0;for(let p=0;p<e.length;p++){const g=e[p];if(typeof g=="string"){c.set(g,l);continue}else if(!Array.isArray(g)){c.set(g.name,P(l,g.at,h,c));continue}let[E,x,m={}]=g;m.at!==void 0&&(l=P(l,m.at,h,c));let d=0;const S=(y,b,w,N=0,V=0)=>{const f=Ae(y),{delay:k=0,times:A=ce(f),type:Q="keyframes",...X}=b;let{ease:T=t.ease||"easeOut",duration:v}=b;const G=typeof k=="function"?k(N,V):k,L=f.length;if(L<=2&&Q==="spring"){let H=100;if(L===2&&Me(f)){const Z=f[1]-f[0];H=Math.abs(Z)}const R={...X};v!==void 0&&(R.duration=me(v));const B=xe(R,H);T=B.ease,v=B.duration}v??(v=s);const K=l+G,O=K+v;A.length===1&&A[0]===0&&(A[1]=1);const F=A.length-f.length;F>0&&ue(A,F),f.length===1&&f.unshift(null),je(w,f,T,A,K,O),d=Math.max(G+v,d),j=Math.max(O,j)};if(Y(E)){const y=U(E,r);S(x,m,z("default",y))}else{const y=C(E,n,u),b=y.length;for(let w=0;w<b;w++){x=x,m=m;const N=y[w],V=U(N,r);for(const f in x)S(x[f],Ne(m,f),z(f,V),w,b)}}h=l,l+=d}return r.forEach((p,g)=>{for(const E in p){const x=p[E];x.sort(we);const m=[],d=[],S=[];for(let b=0;b<x.length;b++){const{at:w,value:N,easing:V}=x[b];m.push(N),d.push(fe(0,j,w)),S.push(V||"easeOut")}d[0]!==0&&(d.unshift(0),m.unshift(m[0]),S.unshift(Ee)),d[d.length-1]!==1&&(d.push(1),m.push(null)),i.has(g)||i.set(g,{keyframes:{},transition:{}});const y=i.get(g);y.keyframes[E]=m,y.transition[E]={...t,duration:j,ease:S,times:d,...a}}}),i}function U(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function z(e,t){return t[e]||(t[e]=[]),t[e]}function Ae(e){return Array.isArray(e)?e:[e]}function Ne(e,t){return e[t]?{...e,...e[t]}:{...e}}const Ve=e=>typeof e=="number",Me=e=>e.every(Ve);function J(e,t,a,n){const s=C(e,n),i=s.length,r=[];for(let u=0;u<i;u++){const c=s[u];D.has(c)||pe(c);const h=D.get(c),l={...a};typeof l.delay=="function"&&(l.delay=l.delay(u,i)),r.push(...de(h,{...t,transition:l},{}))}return new q(r)}const Ie=e=>Array.isArray(e)&&Array.isArray(e[0]);function ke(e,t,a){const n=[];return Se(e,t,a).forEach(({keyframes:i,transition:r},u)=>{let c;Y(u)?c=_(u,i.default,r.default):c=J(u,i,r),n.push(c)}),new q(n)}const De=e=>{function t(a,n,s){let i;return Ie(a)?i=ke(a,n,e):he(n)?i=J(a,n,s,e):i=_(a,n,s),e&&e.animations.push(i),i}return t},Ce=De(),Te={some:0,all:1};function Ge(e,t,{root:a,margin:n,amount:s="some"}={}){const i=C(e),r=new WeakMap,u=h=>{h.forEach(l=>{const j=r.get(l.target);if(l.isIntersecting!==!!j)if(l.isIntersecting){const p=t(l);typeof p=="function"?r.set(l.target,p):c.unobserve(l.target)}else j&&(j(l),r.delete(l.target))})},c=new IntersectionObserver(u,{root:a,rootMargin:n,threshold:typeof s=="number"?s:Te[s]});return i.forEach(h=>c.observe(h)),()=>c.disconnect()}function Le(e,{root:t,margin:a,amount:n,once:s=!1}={}){const[i,r]=I.useState(!1);return I.useEffect(()=>{if(!e.current||s&&i)return;const u=()=>(r(!0),s?void 0:()=>r(!1)),c={root:t&&t.current||void 0,margin:a,amount:n};return Ge(e.current,u,c)},[t,e,a,s,n]),i}const Ke=()=>o.jsxs("div",{className:"w-10 h-10 bg-black flex items-center justify-center",children:[o.jsxs("button",{className:"m-5",onClick:()=>{W.changeLanguage("ar"),window.location.reload()},children:[" ","AR"," "]}),o.jsxs("button",{className:"m-5",onClick:()=>{W.changeLanguage("en"),window.location.reload()},children:[" ","EN"," "]})]}),He=()=>{const{t:e}=ge();return o.jsxs("div",{className:"flex flex-col items-center justify-between pt-20 ",children:[o.jsxs("div",{className:"",children:[o.jsx("button",{className:" mb-16  w-60 h-12 border-2 border-[#764095]  font-semibold text-black transition-colors hover:bg-[#764095] hover:text-black",children:o.jsxs("p",{children:[e("Talk to us ")," "]})}),o.jsxs("div",{className:"",children:[" ",o.jsx(Ke,{})," "]})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-24 md:gap-16 gap-12 text-[#764095]",children:[o.jsxs("div",{className:" ",children:[" ",o.jsx(M,{num:9,suffix:"",subheading:e("Years Of Experience")})]}),o.jsx("div",{className:" ",children:o.jsx(M,{num:125,decimals:0,suffix:"",subheading:e("Satisfied Customers")})}),o.jsx("div",{className:" ",children:o.jsx(M,{num:150,suffix:"",subheading:e("Completed Projects")})}),o.jsxs("div",{className:" ",children:[" ",o.jsx(M,{num:88,suffix:"",subheading:e("Ready Equipment")})]})]})]})},M=({num:e,suffix:t,decimals:a=0,subheading:n})=>{const s=I.useRef(null),i=Le(s);return I.useEffect(()=>{i&&Ce(0,e,{duration:2.5,onUpdate(r){s.current&&(s.current.textContent=r.toFixed(a))}})},[e,a,i]),o.jsxs("div",{className:"flex flex-col items-center ",children:[o.jsxs("p",{className:"mb-2 text-center text-5xl font-semibold ",children:[o.jsx("span",{ref:s}),t]}),o.jsx("p",{className:"max-w-48 text-center text-neutral-600",children:n})]})};export{He as default};
