import{D as R,E as u,F as i,G as v,H as _,I as b,J as F,L as k,O as E,Q as S,aa as P,ca as I,e as c,h as g,la as w,va as x}from"./chunk-ZCKELKQU.mjs";import{c as r}from"./chunk-ELYU6EKT.mjs";var z="default"in u?R:u,d={},D=z;d.createRoot=D.createRoot;d.hydrateRoot=D.hydrateRoot;var O=d.createRoot,H=d.hydrateRoot;var f={augiA20Il:{elements:{BtokuO8Lw:"logos",fHnbTyNwO:"features-bento",Mo0uZZjYz:"about",ovD3wZLbe:"footer",s_S8SY_3g:"hero"},page:i(()=>import("./kqdKG1c2TJf_D06diQziN06wZoper2dpgWmUuOO5Tzg.QBVH5NKL.mjs")),path:"/"},ANGvDl6hG:{elements:{},page:i(()=>import("./Ipi4nMmfdEi-f6TEw6jlxDAzyMDapEgLShuX3r_Ujk0.44QDFMUT.mjs")),path:"/404"}},V=[{code:"en",id:"default",name:"English",slug:""}];async function U({routeId:e,pathVariables:a,localeId:o}){await f[e].page.preload();let n=c(I,{isWebsite:!0,routeId:e,pathVariables:a,routes:f,collectionUtils:{},framerSiteId:"8f201206176aa4319bc71f01888809f33d66455f05682cb3247a66cc96f73f9c",notFoundPage:i(()=>import("./Ipi4nMmfdEi-f6TEw6jlxDAzyMDapEgLShuX3r_Ujk0.44QDFMUT.mjs")),isReducedMotion:void 0,localeId:o,locales:V,preserveQueryParams:void 0}),s=c(P,{children:n,value:{enableAsyncURLUpdates:!1,useGranularSuspense:!1}});return c(v,{children:s,value:{global:{enter:{opacity:0,rotate:0,rotate3d:!1,rotateX:0,rotateY:0,scale:1,transition:{damping:80,delay:0,duration:.2,ease:[.27,0,.51,1],mass:1,stiffness:400,type:"spring"},x:"0px",y:"0px"}},routes:{}}})}var p=typeof document<"u";p&&(r.__framer_importFromPackage=(e,a)=>()=>c(E,{error:'Package component not supported: "'+a+'" in "'+e+'"'}),r.process={...r.process,env:{...r.process?r.process.env:void 0,NODE_ENV:"production"}},S(),r.__framer_events=r.__framer_events||[]);function M(){p&&r.__framer_events.push(arguments)}function W(e){p&&(document.readyState==="interactive"||document.readyState==="complete"?e():document.addEventListener("readystatechange",()=>{document.readyState==="interactive"&&e()}))}W(async function(){try{let h=function(t,L){let m=L?.componentStack;console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",t,m),!(Math.random()>.01)&&M("published_site_load_recoverable_error",{message:String(t),componentStack:m,stack:m?void 0:t instanceof Error&&typeof t.stack=="string"?t.stack:null})},e=document.getElementById("main"),a,o,n,s,l=!1;if("framerHydrateV2"in e.dataset){let t=JSON.parse(e.dataset.framerHydrateV2);a=t.routeId,o=t.localeId,n=t.pathVariables,s=t.breakpoints,l=!0}else{let t=k(f,decodeURIComponent(location.pathname),!0,V);a=t.routeId,o=t.localeId,n=t.pathVariables}let y=await U({routeId:a,localeId:o,pathVariables:n});l?(x("framer-rewrite-breakpoints",()=>{w(s),r.__framer_onRewriteBreakpoints?.(s)}),g(()=>{_(),F(),b(),H(e,y,{onRecoverableError:h})})):O(e,{onRecoverableError:h}).render(y)}catch(e){throw M("published_site_load_error",{message:String(e),stack:e instanceof Error&&typeof e.stack=="string"?e.stack:null}),e}});export{U as getPageRoot};
//# sourceMappingURL=script_main.KKGC3HEW.mjs.map
