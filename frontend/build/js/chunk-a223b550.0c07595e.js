(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a223b550"],{"1aa9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col"},[a("div",{staticClass:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},[a("div",{staticClass:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},[a("div",{staticClass:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[a("table",{staticClass:"min-w-full divide-y divide-gray-200"},[t._m(0),t.stocks.length>0?a("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.stocks,(function(e,s){return a("tr",{key:e._id},[a("td",{staticClass:"px-6 py-3 text-sm leading-5 text-gray-500 font-medium"},[t._v(" "+t._s(s+1)+" ")]),a("td",{staticClass:"px-6 py-3 text-sm leading-5 text-gray-500 font-medium"},[t._v(" "+t._s(e.name)+" ")]),a("td",{staticClass:"px-6 py-3 text-sm leading-5 text-gray-500 font-medium"},[t._v(" "+t._s(e.description)+" ")]),a("td",{staticClass:"px-6 py-3 text-sm leading-5 text-gray-500 font-medium"},[t._v(" "+t._s(e.currentPrice)+" ")]),a("td",{staticClass:"px-6 py-3 text-sm leading-5 text-gray-500 font-medium"},[t._v(" "+t._s(e.targetPrice)+" ")]),a("td",{staticClass:"px-2 py-3 flex justify-center items-center text-sm leading-5 text-gray-500 font-medium"},[a("router-link",{staticClass:"truncate mx-1 bg-indigo-800 px-4 py-2 rounded shadow-md text-white",attrs:{to:{name:"StockDetail",params:{id:e._id}}}},[a("span",[t._v("View")])]),a("router-link",{staticClass:"truncate mx-1 bg-green-400 px-4 py-2 rounded shadow-md text-white",attrs:{to:{name:"StockUpdate",params:{id:e._id}}}},[a("span",[t._v("Update")])])],1)])})),0):a("tbody",[t._m(1)])])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[a("span",{staticClass:"lg:pl-2"},[t._v("SN")])]),a("th",{staticClass:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[a("span",{staticClass:"lg:pl-2"},[t._v("Name")])]),a("th",{staticClass:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v(" Description ")]),a("th",{staticClass:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v(" Current Price ")]),a("th",{staticClass:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v(" Target Price ")]),a("th",{staticClass:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},[t._v(" Actions ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"bg-white"},[a("td",{attrs:{colspan:"7"}},[a("p",{staticClass:"m-3 text-center font-medium"},[t._v(" No stocks found ")])])])}],i={name:"StockListComponent",props:{stocks:{type:Array,default:function(){return[]}}}},n=i,l=a("2877"),o=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=o.exports},"3baf":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("bread-crumb-component",{attrs:{links:t.breadcrumbs}}),a("div",{staticClass:"flex justify-center items-center py-2 px-4"},[a("p",{staticClass:"text-blue-700 text-2xl text-center font-semibold my-3"},[t._v(" STOCKS ")]),a("t-button",{staticClass:"flex items-center font-medium m-1 p-2 rounded-md bg-primary text-light justify-center ml-4",on:{click:function(e){return e.preventDefault(),t.navigateToUrl.apply(null,arguments)}}},[a("icon-component",{staticClass:"mr-2",attrs:{name:"plus",color:"#F5F5F5"}}),t._v(" Add Stock ")],1)],1),a("stock-list",{staticClass:"mx-auto w-3/4 px-2 py-4",attrs:{stocks:t.allStocks}})],1)},r=[],i=a("5530"),n=a("2f62"),l=a("73d8"),o=a("1aa9"),c=a("65d5"),d=a("1532"),m={name:"StockListPage",components:{StockList:o["a"],IconComponent:c["a"],BreadCrumbComponent:l["a"]},data:function(){return{breadcrumbs:[{title:"Stocks",to:{name:"StockList"}}]}},computed:Object(i["a"])({},Object(n["c"])({allStocks:d["e"]})),mounted:function(){this.allStocksAction()},methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])({allStocksAction:d["f"]})),{},{navigateToUrl:function(){this.$router.push({name:"AddStock"})}})},u=m,h=a("2877"),p=Object(h["a"])(u,s,r,!1,null,null,null);e["default"]=p.exports},"65d5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.dimensions,attrs:{fill:t.fillColor,stroke:t.color,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:t.path}})])},r=[],i=(a("a9e3"),a("a15b"),a("b0c0"),{name:"SVGIcon",props:{name:{type:String,required:!0},height:{type:Number,default:6,required:!1},width:{type:Number,default:6,required:!1},color:{type:String,default:"#BFBFBF",required:!1},fillColor:{type:String,default:"none",required:!1}},data:function(){return{path:"",dimensions:""}},mounted:function(){this.selectIcon(),this.dimensionClasses()},methods:{dimensionClasses:function(){var t="h-6",e="w-6";this.height&&(t="h-".concat(this.height)),this.width&&(e="w-".concat(this.width)),this.dimensions=[t,e].join(" ")},selectIcon:function(){switch(this.name){case"user":this.path="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z";break;case"users":this.path="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z";break;case"home":this.path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";break;case"plus":this.path="M12 6v6m0 0v6m0-6h6m-6 0H6";break;case"circle-check":this.path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";break;case"chevron-down":this.path="M19 9l-7 7-7-7";break;case"search":this.path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z";break;case"info-circle":this.path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";break;case"bell":this.path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9";break;case"pencil":this.path="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z";break;case"x-circle":this.path="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";break;case"file-download":this.path="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";break;case"adjustments":this.path="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4";break;case"office-building":this.path="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z";break;case"filter":this.path="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z";break;case"upload":this.path="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12";break;case"trash":this.path="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16";break;default:this.path=""}}}}),n=i,l=a("2877"),o=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=o.exports},7156:function(t,e,a){var s=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var i,n;return r&&"function"==typeof(i=e.constructor)&&i!==a&&s(n=i.prototype)&&n!==a.prototype&&r(t,n),t}},"73d8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"flex bg-gray-200",attrs:{"aria-label":"Breadcrumb"}},[a("ol",{staticClass:"flex items-center px-3",attrs:{role:"list"}},[a("li",[a("div",[a("router-link",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{to:{name:"Dashboard"}}},[a("svg",{staticClass:"flex-shrink-0 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[a("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),a("span",{staticClass:"sr-only"},[t._v("Home")])])],1)]),t._l(t.links,(function(e,s){return a("li",{key:s,staticClass:"flex"},[e.to?a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"flex-shrink-0 w-6 h-full text-gray-700",attrs:{viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("path",{attrs:{d:"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"}})]),a("router-link",{staticClass:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",attrs:{to:e.to}},[t._v(" "+t._s(e.title)+" ")])],1):a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"flex-shrink-0 w-6 h-full text-gray-700",attrs:{viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("path",{attrs:{d:"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"}})]),a("p",{staticClass:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},[t._v(" "+t._s(e.title)+" ")])])])}))],2)])},r=[],i={name:"BreadCrumbComponent",props:{links:{type:Array,default:null}}},n=i,l=a("2877"),o=Object(l["a"])(n,s,r,!1,null,null,null);e["a"]=o.exports},a15b:function(t,e,a){"use strict";var s=a("23e7"),r=a("44ad"),i=a("fc6a"),n=a("a640"),l=[].join,o=r!=Object,c=n("join",",");s({target:"Array",proto:!0,forced:o||!c},{join:function(t){return l.call(i(this),void 0===t?",":t)}})},a9e3:function(t,e,a){"use strict";var s=a("83ab"),r=a("da84"),i=a("94ca"),n=a("6eeb"),l=a("5135"),o=a("c6b6"),c=a("7156"),d=a("d9b5"),m=a("c04e"),u=a("d039"),h=a("7c73"),p=a("241c").f,f=a("06cf").f,v=a("9bf2").f,g=a("58a8").trim,x="Number",b=r[x],y=b.prototype,k=o(h(y))==x,C=function(t){if(d(t))throw TypeError("Cannot convert a Symbol value to a number");var e,a,s,r,i,n,l,o,c=m(t,"number");if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+c}for(i=c.slice(2),n=i.length,l=0;l<n;l++)if(o=i.charCodeAt(l),o<48||o>r)return NaN;return parseInt(i,s)}return+c};if(i(x,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(k?u((function(){y.valueOf.call(a)})):o(a)!=x)?c(new b(C(e)),a,_):C(e)},M=s?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;M.length>S;S++)l(b,w=M[S])&&!l(_,w)&&v(_,w,f(b,w));_.prototype=y,y.constructor=_,n(r,x,_)}}}]);
//# sourceMappingURL=chunk-a223b550.0c07595e.js.map