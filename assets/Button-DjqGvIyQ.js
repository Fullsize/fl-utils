import{R as s}from"./index-BBkUAzwr.js";import{P as e}from"./index-YMbfICiA.js";const o=({primary:a,backgroundColor:t,size:r,label:l,...u})=>{const n=a?"storybook-button--primary":"storybook-button--secondary";return s.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${r}`,n].join(" "),style:t&&{backgroundColor:t},...u},l)};o.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};o.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}};export{o as B};
