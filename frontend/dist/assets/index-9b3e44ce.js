import{j as e}from"./index-8b683006.js";import{y as c}from"./index-5091dbc8.js";const a=({title:s,items:t,icon:i})=>{const{t:n}=c();return e.jsxs("div",{className:"bg-[#764095] text-white w-auto h-auto p-6 rounded-md rtl:text-end",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"text-2xl absolute left-48",children:i}),e.jsx("h2",{className:"text-xl font-bold w-full text-center",children:n(s)})]}),e.jsx("ul",{className:" pl-3 ",children:t.map((r,l)=>e.jsx("li",{className:" text-white leading-relaxed text-justify rtl:text-end  ",children:n(r)},l))})]})},m=()=>{const s=[{title:"Design services",icon:"🛠️",items:["Interior design"]},{title:"Construction",icon:"🛋️",items:["Construction disc"]},{title:"Finishes",icon:"🏠",items:["Finishes disc"]},{title:"zahw Lab",icon:"🧪",items:["Virtual reality and augmented reality services","3D printing services","Development services and raising the efficiency of implementation teams","Unique decorative element design services"]}];return e.jsx("div",{className:"min-h-screen flex flex-col justify-center items-center p-24",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:s.map((t,i)=>e.jsx(a,{title:t.title,items:t.items,icon:t.icon},i))})})},x=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"min-h-screen flex justify-center items-center bg-parallex bg-fixed bg-no-repeat bg-cover bg-center mt-20"}),e.jsx("div",{className:"xl:mt-[-250px] md:mt-[-200px] mt-[-200px] flex items-center justify-center ",children:e.jsx(m,{})})]});export{x as default};