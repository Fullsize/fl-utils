import{R as e,r as n}from"./index-RYns6xqu.js";import{i as A}from"./isArray-nCS7zLbG.js";import{S as g}from"./ShowDocs-DJ69lLYk.js";import"./jsx-runtime-DEdD30eg.js";const f=()=>{const[s,y]=n.useState(""),[h,o]=n.useState(""),E=()=>{try{const r=JSON.parse(s),S=A(r);o(`Is the input an array? ${S}`)}catch{o("Invalid input. Please enter a valid JSON array or value.")}};return e.createElement("div",{style:{padding:"20px"}},e.createElement("h1",null,"Array Check Tool"),e.createElement("input",{type:"text",value:s,onChange:r=>y(r.target.value),placeholder:"Enter a JSON array (e.g., [1, 2, 3])"}),e.createElement("button",{onClick:E},"Check if Array"),e.createElement("p",null,h))},i=f,C={title:"base/isArray",component:i},t={render:()=>e.createElement(g,{md:"doc/isArray.md"})},a={render:()=>e.createElement(i,null)};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ShowDocs md={"doc/isArray.md"} />
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Page />
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const I=["Doc","Demo"];export{a as Demo,t as Doc,I as __namedExportsOrder,C as default};
