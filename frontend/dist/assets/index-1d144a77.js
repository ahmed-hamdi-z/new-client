import{R as g,r as l,j as e}from"./index-8b683006.js";import{M as u,a as p}from"./index-95d6b50b.js";import{F as b,a as d}from"./index-5091dbc8.js";const h=["/images/1.webp","/images/2.webp","/images/3.webp","/images/4.webp","/images/5.webp","/images/6.webp","/images/7.webp","/images/8.webp"],w={images:h},f=()=>{const[r,o]=l.useState({img:"",i:0}),[a,c]=l.useState([]);l.useEffect(()=>{c(w.images)},[]);const n=l.useCallback((s,t)=>{o({img:s,i:t})},[]),m=l.useCallback(s=>{o(t=>{let i=t.i;return s==="next-img"&&i<a.length-1?{img:a[i+1],i:i+1}:s==="prev-img"&&i>0?{img:a[i-1],i:i-1}:s==="close"?{img:"",i:0}:t})},[a]),x=l.useMemo(()=>a.map((s,t)=>e.jsx("img",{src:s,className:"xl:w-80 md:w-80 w-auto h-80 block cursor-pointer rounded-md",alt:`Gallery item ${t}`,onClick:()=>n(s,t),loading:"lazy"},t)),[a,n]);return e.jsxs(e.Fragment,{children:[r.img&&e.jsxs("div",{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50",children:[e.jsx("button",{onClick:()=>m("close"),className:"absolute top-10 right-10 text-white text-3xl",children:"X"}),e.jsx("button",{onClick:()=>m("prev-img"),className:"absolute left-10 text-white text-3xl",children:e.jsx(b,{})}),e.jsx("img",{src:r.img,className:"w-auto max-w-[90%] max-h-[90%]"}),e.jsx("button",{onClick:()=>m("next-img"),className:"absolute right-10 text-white text-3xl",children:e.jsx(d,{})})]}),e.jsxs("div",{className:"p-3",children:[e.jsx("h1",{className:"text-5xl mb-5 text-center text-[#764095]",children:"Our Gallery"}),e.jsx(u,{columnsCountBreakPoints:{350:1,750:2,900:3,1200:4},children:e.jsx(p,{gutter:"5px",children:x})})]})]})},N=g.memo(f);export{N as default};