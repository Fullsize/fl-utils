const __vite__fileDeps=["./asyncPool.stories-Dn-SXJol.js","./index-BBkUAzwr.js","./ShowDocs-BXFGbuDt.js","./ShowDocs-BF23iiPK.css","./changeURLArg.stories-6EthPVL-.js","./curry.stories-Ckk1XFur.js","./isEqual.stories-D0saBAzL.js","./entry-preview-Xn6uC1vK.js","./react-18-DHj1n7xi.js","./entry-preview-docs-B-PZEOng.js","./_getPrototype-BVQBtff3.js","./index-DrFu-skq.js","./preview-PxUn-cIn.js","./index-Dkj0J1ds.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(n,s){return new URL(n,s).href},O={},r=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in O)return;O[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":f,u||(_.as="script",_.crossOrigin=""),_.href=i,d&&_.setAttribute("nonce",d),document.head.appendChild(_),u)return new Promise((a,m)=>{_.addEventListener("load",a),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,E=P({page:"preview"});L.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const T={"./stories/asyncPool.stories.tsx":async()=>r(()=>import("./asyncPool.stories-Dn-SXJol.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./stories/changeURLArg.stories.tsx":async()=>r(()=>import("./changeURLArg.stories-6EthPVL-.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"./stories/curry.stories.tsx":async()=>r(()=>import("./curry.stories-Ckk1XFur.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"./stories/isEqual.stories.tsx":async()=>r(()=>import("./isEqual.stories-D0saBAzL.js"),__vite__mapDeps([6,1,2,3]),import.meta.url)};async function v(n){return T[n]()}const{composeConfigs:w,PreviewWeb:A,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const n=await Promise.all([r(()=>import("./entry-preview-Xn6uC1vK.js"),__vite__mapDeps([7,1,8]),import.meta.url),r(()=>import("./entry-preview-docs-B-PZEOng.js"),__vite__mapDeps([9,10,1,11]),import.meta.url),r(()=>import("./preview-PxUn-cIn.js"),__vite__mapDeps([12,13]),import.meta.url),r(()=>import("./preview-BlyDzK-X.js"),[],import.meta.url),r(()=>import("./preview-DbT1mggi.js"),[],import.meta.url),r(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([14,11]),import.meta.url),r(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),r(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),r(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([15,11]),import.meta.url),r(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),r(()=>import("./preview-D2d-74FL.js"),[],import.meta.url),r(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return w(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new A(v,h);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};