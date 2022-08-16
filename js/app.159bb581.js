(function(){"use strict";var e={911:function(e,t,n){var r=n(963),o=n(252);const i={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},s={class:"container"},l={class:"flex"},a={class:"max-w-xs"},c=(0,o.Uk)("Search"),u={class:"mt-1 relative rounded-md shadow-md"},d={class:"text-sm text-red-600"},p=(0,o._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,o._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1),f=(0,o.Uk)("Adds"),m=(0,o._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),h={class:"flex items-center"},g={class:"flex-center"},v=(0,o.Uk)("Forward"),y=(0,o.Uk)("Back"),b=(0,o._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),w={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"};function k(e,t,n,k,x,S){const C=(0,o.up)("LabelJoint"),D=(0,o.up)("InputJoint"),_=(0,o.up)("ButtonsVue"),I=(0,o.up)("ValueBox"),j=(0,o.up)("TickerBox"),V=(0,o.up)("DropdownGraph"),B=(0,o.Q2)("focus");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",s,[(0,o._)("section",l,[(0,o._)("div",a,[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[c])),_:1}),(0,o._)("div",u,[(0,o.wy)((0,o.Wm)(D,{modelValue:x.ticker,"onUpdate:modelValue":t[0]||(t[0]=e=>x.ticker=e),onKeydown:(0,r.D2)(S.add,["enter"]),placeholder:"Enter......"},null,8,["modelValue","onKeydown"]),[[B]]),(0,o.wy)((0,o._)("div",d," This ticker has already been added ",512),[[r.F8,x.isVisible]])]),(0,o.Wm)(_,{onClick:S.add},{default:(0,o.w5)((()=>[p,f])),_:1},8,["onClick"]),(0,o.Wm)(I,{onCurrencySelected:S.onCurrencySelected,searchString:x.ticker},null,8,["onCurrencySelected","searchString"])])]),x.tickers.length>0?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[m,(0,o._)("div",h,[(0,o._)("div",g,[(0,o.Wm)(D,{modelValue:x.filter,"onUpdate:modelValue":t[1]||(t[1]=e=>x.filter=e),placeholder:"Filters......"},null,8,["modelValue"])]),(0,o.Wm)(_,{class:"button-margin"},{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(_,{class:"button-margin"},{default:(0,o.w5)((()=>[y])),_:1})]),b,(0,o._)("dl",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(S.filteredTickers(),((e,t)=>((0,o.wg)(),(0,o.j4)(j,{key:e.name,isSelected:e===x.selectInfo,ticker:e,onDeleted:e=>S.handleDelete(t),onSelected:t=>S.select(e)},null,8,["isSelected","ticker","onDeleted","onSelected"])))),128))])],64)):(0,o.kq)("",!0),x.selectInfo?((0,o.wg)(),(0,o.j4)(V,{key:1,onClosed:S.close,selectInfo:x.selectInfo,barGraph:S.normalizeGraph()},null,8,["onClosed","selectInfo","barGraph"])):(0,o.kq)("",!0)])])}function x(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=t=>e.$emit("click")),type:"button",class:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[(0,o.WI)(e.$slots,"default")])}var S={name:"ButtonsVue",emits:["click"]},C=n(744);const D=(0,C.Z)(S,[["render",x]]);var _=D,I=n(577);const j={class:"px-4 py-5 sm:p-6 text-center"},V={class:"text-sm font-medium text-gray-500 truncate"},B={class:"mt-1 text-3xl font-semibold text-gray-900"},O=(0,o._)("div",{class:"w-full border-t border-gray-200"},null,-1);function T(e,t,n,r,i,s){const l=(0,o.up)("ButtonDelete");return(0,o.wg)(),(0,o.iD)("div",{onClick:t[1]||(t[1]=t=>e.$emit("selected")),class:(0,I.C_)([{"border-4":n.isSelected},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"])},[(0,o._)("div",j,[(0,o._)("dt",V,(0,I.zw)(n.ticker.name)+" - USD ",1),(0,o._)("dd",B,(0,I.zw)(n.ticker.price),1)]),O,(0,o.Wm)(l,{onClick:t[0]||(t[0]=t=>e.$emit("deleted"))})],2)}const U=(0,o._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,o._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),L=(0,o.Uk)("Удалить "),z=[U,L];function $(e,t,n,i,s,l){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=(0,r.iM)((t=>e.$emit("click")),["stop"])),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},z)}var W={name:"ButtonDelete",emits:["click"]};const M=(0,C.Z)(W,[["render",$]]);var Z=M,G={components:{ButtonDelete:Z},name:"TickerBox",props:{ticker:{type:Object,default:null},isSelected:{type:Boolean}},emits:["deleted","selected"]};const J=(0,C.Z)(G,[["render",T]]);var E=J;const H={key:0,class:"flex bg-white shadow-md p-1 rounded-md flex-wrap"};function P(e,t,n,r,i,s){const l=(0,o.up)("CurrencyLabel");return n.searchString&&s.filteredList.length?((0,o.wg)(),(0,o.iD)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.filteredList,(e=>((0,o.wg)(),(0,o.j4)(l,{onClick:t=>s.clicked(e),key:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,I.zw)(e),1)])),_:2},1032,["onClick"])))),128))])):(0,o.kq)("",!0)}const A={class:"inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"};function F(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("span",A,[(0,o.WI)(e.$slots,"default")])}var N={name:"CurrencyLabel"};const K=(0,C.Z)(N,[["render",F]]);var q=K,Y={components:{CurrencyLabel:q},name:"ValueBox",data(){return{supportedCurrencies:[]}},props:{searchString:{type:String,default:""}},emits:["currencySelected"],methods:{clicked(e){this.$emit("currencySelected",e)}},async created(){try{const e=await fetch("https://min-api.cryptocompare.com/data/all/coinlist?summary=true"),t=await e.json();this.supportedCurrencies=Object.values(t.Data).map((e=>e.Symbol))}catch(e){console.log(e.name)}},computed:{filteredList(){return this.searchString?this.supportedCurrencies.filter((e=>e.toLowerCase().includes(this.searchString.toLowerCase()))).slice(0,4):this.supportedCurrencies.slice(0,4)}}};const Q=(0,C.Z)(Y,[["render",P]]);var R=Q;const X={class:"relative"},ee={class:"text-lg leading-6 font-medium text-gray-900 my-8"},te={class:"flex items-end border-gray-600 border-b border-l h-64"};function ne(e,t,n,r,i,s){const l=(0,o.up)("ButtonClose");return(0,o.wg)(),(0,o.iD)("section",X,[(0,o._)("h3",ee,(0,I.zw)(n.selectInfo.name)+" - USD ",1),(0,o._)("div",te,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.barGraph,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,style:(0,I.j5)({height:`${e}%`}),class:"bg-purple-800 border w-10"},null,4)))),128))]),(0,o.Wm)(l,{onClick:t[0]||(t[0]=t=>e.$emit("closed"))})])}const re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},oe=(0,o._)("g",null,[(0,o._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1),ie=[oe];function se(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=t=>e.$emit("click")),type:"button",class:"absolute top-0 right-0"},[((0,o.wg)(),(0,o.iD)("svg",re,ie))])}var le={name:"ButtonClose",emits:["click"]};const ae=(0,C.Z)(le,[["render",se]]);var ce=ae,ue={components:{ButtonClose:ce},name:"DropdownGraph",props:{selectInfo:{type:Object,default:null},barGraph:{type:Array,default:()=>[]}},emits:["closed"]};const de=(0,C.Z)(ue,[["render",ne]]);var pe=de;const fe={for:"wallet",class:"block text-sm font-medium text-gray-700"};function me(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("label",fe,[(0,o.WI)(e.$slots,"default")])}var he={name:"LabelJoint"};const ge=(0,C.Z)(he,[["render",me]]);var ve=ge;const ye=["value"];function be(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("input",{value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>s.updateInput&&s.updateInput(...e)),autocomplete:"off",type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"},null,40,ye)}var we={name:"InputJoint",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const ke=(0,C.Z)(we,[["render",be]]);var xe=ke,Se={components:{ButtonsVue:_,TickerBox:E,ValueBox:R,DropdownGraph:pe,LabelJoint:ve,InputJoint:xe},data(){return{ticker:"",tickers:[],selectInfo:null,graph:[],isVisible:!1,filter:"",intervals:{}}},methods:{inputTicker(e){this.ticker=e.target.value},filteredTickers(){return this.tickers.filter((e=>e.name.toLowerCase().includes(this.filter.toLowerCase())))},subscribeToUpdate(e){this.intervals[e]=setInterval((async()=>{const t=await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${e}&tsyms=USD&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a`),n=await t.json(),r=this.tickers.find((t=>t.name===e));n&&n.USD&&r&&(r.price=n.USD>1?n.USD.toFixed(2):n.USD.toPrecision(2)),this.selectInfo?.name===e&&this.graph.push(n.USD)}),3e3)},add(){if(!this.ticker)return;if(this.tickers.find((e=>e.name===this.ticker))){this.isVisible=!0;const e=this;return setTimeout((function(){e.isVisible=!1}),5e3),void(this.ticker="")}const e={name:this.ticker,price:"-"};this.tickers.push(e),this.filter="",localStorage.setItem("cryptonomicon-list",JSON.stringify(this.tickers)),this.subscribeToUpdate(e.name),this.ticker=""},select(e){this.selectInfo=e,this.graph=[]},handleDelete(e){const t=this.tickers[e].name;clearInterval(this.intervals[t]),this.tickers.splice(e,1),localStorage.setItem("cryptonomicon-list",JSON.stringify(this.tickers)),this.selectInfo=null},close(){this.selectInfo=null},normalizeGraph(){if(this.graph.length<2)return[];const e=Math.max(...this.graph),t=Math.min(...this.graph);return this.graph.map((n=>5+95*(n-t)/(e-t)))},onCurrencySelected(e){this.ticker=e,this.add()}},created(){const e=localStorage.getItem("cryptonomicon-list");e&&(this.tickers=JSON.parse(e),this.tickers.forEach((e=>{this.subscribeToUpdate(e.name)})))}};const Ce=(0,C.Z)(Se,[["render",k]]);var De=Ce,_e=n(201);const Ie={class:"home"};function je(e,t,n,r,i,s){return(0,o.wg)(),(0,o.iD)("div",Ie)}var Ve={name:"HomeView"};const Be=(0,C.Z)(Ve,[["render",je]]);var Oe=Be;const Te=[{path:"/",name:"home",component:Oe},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,908))}}],Ue=(0,_e.p7)({history:(0,_e.PO)("/CryptoTest/"),routes:Te});var Le=Ue,ze=n(907),$e=(0,ze.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const We=(0,r.ri)(De);We.directive("focus",{mounted(e){e.focus()}}),We.use($e).use(Le).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.812e65d4.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(r,o,i,s){if(e[r])e[r].push(o);else{var l,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/CryptoTest/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var s=n.p+n.u(t),l=new Error,a=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,o[1](l)}};n.l(s,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],l=r[1],a=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var u=a(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(911)}));r=n.O(r)})();
//# sourceMappingURL=app.159bb581.js.map