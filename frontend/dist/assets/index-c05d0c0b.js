import{r,j as e}from"./index-8b683006.js";import{u as d,M as x,m as f,b as u}from"./index-5091dbc8.js";function b(t){const s=d(()=>f(t)),{isStatic:n}=r.useContext(x);if(n){const[,i]=r.useState(t);r.useEffect(()=>s.on("change",i),[])}return s}const c=["/images/hero-bg-1.jpg","/images/hero-bg-2.jpg","/images/hero-bg-3.jpg","/images/hero-bg-4.jpg"],p=1e3,v=p*10,l=50,m={type:"spring",mass:3,stiffness:400,damping:50},I=()=>{const[t,s]=r.useState(0),n=b(0);r.useEffect(()=>{const o=setInterval(()=>{n.get()===0&&s(g=>g===c.length-1?0:g+1)},v);return()=>clearInterval(o)},[]);const i=()=>{const o=n.get();o<=-l&&t<c.length-1?s(a=>a+1):o>=l&&t>0&&s(a=>a-1)};return e.jsxs("div",{className:"relative overflow-hidden bg-white",children:[e.jsx(u.div,{drag:"x",dragConstraints:{left:0,right:0},style:{x:n},animate:{translateX:`-${t*100}%`},transition:m,onDragEnd:i,className:"flex cursor-grab items-center active:cursor-grabbing",children:e.jsx(h,{imgIndex:t})}),e.jsx(j,{})]})},h=({imgIndex:t})=>e.jsx(e.Fragment,{children:c.map((s,n)=>e.jsx(u.div,{style:{backgroundImage:`url(${s})`,backgroundSize:"cover",backgroundPosition:"center"},animate:{scale:1},transition:m,className:"aspect-video w-full h-screen shrink-0 rounded-xl bg-neutral-800 object-cover"},n))}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0"}),e.jsx("div",{className:"pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0"})]});export{I as default};