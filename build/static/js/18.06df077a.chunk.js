(this.webpackJsonpagency_system=this.webpackJsonpagency_system||[]).push([[18],{321:function(e,l,t){"use strict";t.r(l),t.d(l,"default",(function(){return j}));var c=t(4),a=t(1),s=t(16),i={body:'<path d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32c.44 0 .85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.482 2.482 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1z" fill="currentColor"/>',width:24,height:24},n={body:'<path d="M20 5c-.6 0-1 .5-1 1.1V16c0 .6.4 1 1 1.1c.6 0 1-.5 1-1.1V6.1c0-.6-.4-1.1-1-1.1m-3.6-3H4.6C3.7 2 3 2.7 3 3.6v13.8c0 .9.7 1.6 1.6 1.6H6v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2h2.4c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6M5 8h3v2H5V8m7 3v2H9v-2h3m-3-1V8h3v2H9m3 4v2H9v-2h3m-7-3h3v2H5v-2m0 5v-2h3v2H5m3 5H7v-2h1v2m5 0h-3v-2h3v2m3-5h-3v-2h3v2m0-3h-3v-2h3v2m0-3h-3V8h3v2m0-4H5V4h11v2z" fill="currentColor"/>',width:24,height:24},r={body:'<path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H5V10h14v10M5 8V6h14v2H5m2 4h10v2H7v-2m0 4h7v2H7v-2z" fill="currentColor"/>',width:24,height:24},x=t(186),d=t(40),h=t.n(d),o=t(0);function j(){var e=Object(x.a)().t,l=Object(a.useState)(0),t=Object(c.a)(l,2),d=t[0],j=t[1],b=Object(a.useState)(0),m=Object(c.a)(b,2),v=m[0],f=m[1],u=Object(a.useState)(0),w=Object(c.a)(u,2),O=w[0],p=w[1],N=Object(a.useState)(0),g=Object(c.a)(N,2),y=g[0],H=g[1];return Object(a.useEffect)((function(){(function(e){var l={method:"get",url:"http://52.77.238.215/api/dashboard/all-info",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}};return h()(l)})(localStorage.getItem("token")).then((function(e){(null===e||void 0===e?void 0:e.data.error)||(console.log(e.data),Number(1234567890).toLocaleString(),f(e.data.totalAgents),j(e.data.totalPlans),p(e.data.totalMoney),H(e.data.totalWithdrawnMoney))})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"flex flex-wrap",children:[Object(o.jsx)("div",{className:"w-full lg:w-6/12 xl:w-3/12 px-4",children:Object(o.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",children:Object(o.jsx)("div",{className:"flex-auto p-4",children:Object(o.jsxs)("div",{className:"flex flex-wrap",children:[Object(o.jsxs)("div",{className:"relative w-full pr-4 max-w-full flex-grow flex-1",children:[Object(o.jsx)("h5",{className:" text-gray-500 font-semibold text-2xs",children:e("AGENT")}),Object(o.jsx)("span",{className:"font-semibold text-xl text-blueGray-700",children:v})]}),Object(o.jsx)("div",{className:"relative w-auto pl-4 flex-initial",children:Object(o.jsx)("div",{className:"text-white p-3 text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500",children:Object(o.jsx)(s.InlineIcon,{icon:i})})})]})})})}),Object(o.jsx)("div",{className:"w-full lg:w-6/12 xl:w-3/12 px-4",children:Object(o.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",children:Object(o.jsx)("div",{className:"flex-auto p-4",children:Object(o.jsxs)("div",{className:"flex flex-wrap",children:[Object(o.jsxs)("div",{className:"relative w-full pr-4 max-w-full flex-grow flex-1",children:[Object(o.jsx)("h5",{className:" text-gray-500 font-semibold text-2xs",children:e("PLAN")}),Object(o.jsx)("span",{className:"font-semibold text-xl text-blueGray-700",children:d})]}),Object(o.jsx)("div",{className:"relative w-auto pl-4 flex-initial",children:Object(o.jsx)("div",{className:"text-green p-3 text-white text-center text-2xl inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500",children:Object(o.jsx)(s.InlineIcon,{icon:i})})})]})})})}),Object(o.jsx)("div",{className:"w-full lg:w-6/12 xl:w-3/12 px-4",children:Object(o.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",children:Object(o.jsx)("div",{className:"flex-auto p-4",children:Object(o.jsxs)("div",{className:"flex flex-wrap",children:[Object(o.jsxs)("div",{className:"relative w-full pr-4 max-w-full flex-grow flex-1",children:[Object(o.jsx)("h5",{className:" text-gray-500 font-semibold text-2xs",children:e("MONEY_WITHDRAWN")}),Object(o.jsxs)("span",{className:"font-semibold text-xl text-blueGray-700",children:["$ ",Number(y).toLocaleString()]})]}),Object(o.jsx)("div",{className:"relative w-auto pl-4 flex-initial",children:Object(o.jsx)("div",{className:"text-white p-3 text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500",children:Object(o.jsx)(s.InlineIcon,{icon:n})})})]})})})}),Object(o.jsx)("div",{className:"w-full lg:w-6/12 xl:w-3/12 px-4",children:Object(o.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg",children:Object(o.jsx)("div",{className:"flex-auto p-4",children:Object(o.jsxs)("div",{className:"flex flex-wrap",children:[Object(o.jsxs)("div",{className:"relative w-full pr-4 max-w-full flex-grow flex-1",children:[Object(o.jsx)("h5",{className:" text-gray-500 font-semibold text-2xs",children:e("TOTAL_COMMISSION")}),Object(o.jsxs)("span",{className:"font-semibold text-xl text-blueGray-700",children:["$ ",Number(O).toLocaleString()]})]}),Object(o.jsx)("div",{className:"relative w-auto pl-4 text-2xl flex-initial",children:Object(o.jsx)("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500",children:Object(o.jsx)(s.InlineIcon,{icon:r})})})]})})})})]})})})}}}]);
//# sourceMappingURL=18.06df077a.chunk.js.map