if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const c=e=>d(e,s),n={module:{uri:s},exports:f,require:c};i[s]=Promise.all(r.map((e=>n[e]||c(e)))).then((e=>(a(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/02/08/onlinephoto/index.html",revision:"d966a8bfa15e3bbed3a1cf2babcf1882"},{url:"2023/03/23/MySql/index.html",revision:"ed6f4f87409808099297aab6aaefc4b5"},{url:"2023/03/26/MyBro/index.html",revision:"a0b4034de98aa3565128dcfee942f089"},{url:"2023/03/26/MyLife/index.html",revision:"db064ea41b488848e5e9be0eda754a30"},{url:"2023/04/10/Myself/index.html",revision:"58728893b707cf11cae1a93d1323b4e3"},{url:"2023/04/17/大数据1班/index.html",revision:"000bb16473a2020d84c3edef9f90ad2c"},{url:"2023/04/24/myplan/index.html",revision:"616be5f510488f66d3c67f84289a6a5c"},{url:"404.html",revision:"606efb5da35f70993ed245fb6feeae48"},{url:"about/index.html",revision:"722454a90d987519cccf0c39e06f0dd6"},{url:"archives/2023/02/index.html",revision:"dfb2fbe34d7ab934531e9e700970936e"},{url:"archives/2023/03/index.html",revision:"28603f9ecb87760ef4aa8322895b6499"},{url:"archives/2023/04/index.html",revision:"bf71acc3b55ce8df2df95474db164df9"},{url:"archives/2023/index.html",revision:"8ac06cfe59f69894122423a21a6be599"},{url:"archives/index.html",revision:"3fc258e60a350a69e554568deeb06421"},{url:"categories/index.html",revision:"7a5e0da32292fa94afd4b634aa7d1275"},{url:"css/backgound.css",revision:"c412b4ac18742075cb2b2f8ba12551a6"},{url:"css/index.css",revision:"04eecf520da33646d708476e36cd3211"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/tag.jpg",revision:"86078fa443927fb62b0d12adf914e96c"},{url:"index.html",revision:"35ddefa64030789faef43aa2a688a4a9"},{url:"js/main.js",revision:"b28662bf81abe2838d20faf2980f0034"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"58cb9443474ea5d84a1c4ac806c8b4b7"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"links/index.html",revision:"b6e9483d340108bf909406e78fce5280"},{url:"movies/index.html",revision:"13b86899269aa1c16d9a30329eaf75cf"},{url:"music/index.html",revision:"c9af2416fb14d75a844f766ba8944963"},{url:"photos/index.html",revision:"886d87a2b945fef93b259b851a41e84f"},{url:"shuoshuo/index.html",revision:"feee7d14bfc22e9177bf4552970f1697"},{url:"tags/index.html",revision:"181a15c2625b1217947d3f08b57b6fa2"},{url:"tags/相册后续整理上线中，请耐心等待/index.html",revision:"c4dbbc58633fed2d0d42fd23daf813cd"}],{})}));
//# sourceMappingURL=service-worker.js.map
