(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea42b3c4"],{"73d8":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"flex bg-gray-200",attrs:{"aria-label":"Breadcrumb"}},[r("ol",{staticClass:"flex items-center px-3",attrs:{role:"list"}},[r("li",[r("div",[r("router-link",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{to:{name:"Dashboard"}}},[r("svg",{staticClass:"flex-shrink-0 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}})]),r("span",{staticClass:"sr-only"},[t._v("Home")])])],1)]),t._l(t.links,(function(e,a){return r("li",{key:a,staticClass:"flex"},[e.to?r("div",{staticClass:"flex items-center"},[r("svg",{staticClass:"flex-shrink-0 w-6 h-full text-gray-700",attrs:{viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[r("path",{attrs:{d:"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"}})]),r("router-link",{staticClass:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",attrs:{to:e.to}},[t._v(" "+t._s(e.title)+" ")])],1):r("div",{staticClass:"flex items-center"},[r("svg",{staticClass:"flex-shrink-0 w-6 h-full text-gray-700",attrs:{viewBox:"0 0 24 44",preserveAspectRatio:"none",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[r("path",{attrs:{d:"M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"}})]),r("p",{staticClass:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},[t._v(" "+t._s(e.title)+" ")])])])}))],2)])},o=[],n={name:"BreadCrumbComponent",props:{links:{type:Array,default:null}}},i=n,s=r("2877"),l=Object(s["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},"7db0":function(t,e,r){"use strict";var a=r("23e7"),o=r("b727").find,n=r("44d2"),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)},aa80:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[r("form",{staticClass:"font-medium container py-3 px-4 text-gray-700",on:{submit:function(e){return e.preventDefault(),a(t.submitForm)}}},[r("div",{staticClass:"grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-8 sm:my-4"},[r("ValidationProvider",{attrs:{name:"Stock Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"Stock Name",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-input",{attrs:{type:"text",name:"Name",variant:a.length>0?"danger":""},model:{value:t.stock.name,callback:function(e){t.$set(t.stock,"name",e)},expression:"stock.name"}})],1)]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"Description",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"Stock Description",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-textarea",{attrs:{type:"text",name:"Description",variant:a.length>0?"danger":""},model:{value:t.stock.description,callback:function(e){t.$set(t.stock,"description",e)},expression:"stock.description"}})],1)]}}],null,!0)})],1),r("div",{staticClass:"grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4"},[r("ValidationProvider",{attrs:{name:"Current Price",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"Current Price",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-input",{attrs:{type:"number",step:"any",name:"Current Price",variant:a.length>0?"danger":""},model:{value:t.stock.currentPrice,callback:function(e){t.$set(t.stock,"currentPrice",e)},expression:"stock.currentPrice"}})],1)]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"Target Price",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"Target Price",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-input",{attrs:{type:"number",step:"any",name:"Target Price",variant:a.length>0?"danger":""},model:{value:t.stock.targetPrice,callback:function(e){t.$set(t.stock,"targetPrice",e)},expression:"stock.targetPrice"}})],1)]}}],null,!0)})],1),r("div",{staticClass:"grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4"},[r("ValidationProvider",{attrs:{name:"Stock Action"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"Select Stock Action",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-select",{attrs:{placeholder:"Select Stock Action",options:t.stockActions,name:"Select Stock Action"},model:{value:t.stock.stockAction,callback:function(e){t.$set(t.stock,"stockAction",e)},expression:"stock.stockAction"}})],1)]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"Action Price"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"Stock Buy/Sell price ?",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-input",{attrs:{type:"number",step:"any",name:"Action Price",variant:a.length>0?"danger":""},model:{value:t.stock.actionPrice,callback:function(e){t.$set(t.stock,"actionPrice",e)},expression:"stock.actionPrice"}})],1)]}}],null,!0)})],1),r("div",{staticClass:"grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-8 sm:my-4"},[r("ValidationProvider",{attrs:{name:"Priority",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"* Portfolio Selection",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-select",{attrs:{placeholder:"Select Portfolio",options:t.portfolios,name:"Select Portfolio","value-attribute":"_id","text-attribute":"name"},model:{value:t.stock.relatedPortfolio,callback:function(e){t.$set(t.stock,"relatedPortfolio",e)},expression:"stock.relatedPortfolio"}})],1)]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"Duration",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[r("t-input-group",{attrs:{label:"How long you want to hold this stock ?",feedback:a[0],variant:a.length>0?"danger":""}},[r("t-input",{attrs:{type:"text",name:"Duration",variant:a.length>0?"danger":""},model:{value:t.stock.duration,callback:function(e){t.$set(t.stock,"duration",e)},expression:"stock.duration"}})],1)]}}],null,!0)})],1),r("div",{staticClass:"flex justify-between mt-6"},[r("t-button",{attrs:{type:"button",variant:"error"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(" Cancel ")]),r("t-button",{attrs:{type:"submit"}},[t._v(" Submit ")])],1)])]}}])})},o=[],n=(r("7db0"),r("b0c0"),{name:"AddStockForm",props:{stockObj:{type:Object,required:!1,default:null},action:{type:String,required:!1,default:"add"},portfolios:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{stockActions:["Buy","Sell","Hold","Watch"],stock:{relatedPortfolio:"",name:"",description:"",currentPrice:"",targetPrice:"",duration:"",actionPrice:"",stockAction:"",stockData:{}}}},mounted:function(){var t=this;if(this.stockObj&&(this.stock=this.stockObj),this.$route.query.portfolioId){var e=this.portfolios.find((function(e){return e.name===t.$route.query.portfolioId}));this.stock.relatedPortfolio=e._id}},methods:{submitForm:function(){"update"===this.action?this.$emit("updateStock",{id:this.$route.params.id,data:this.stock}):this.$emit("addStock",this.stock)}}}),i=n,s=r("2877"),l=Object(s["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},d354:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("bread-crumb-component",{attrs:{links:t.breadcrumbs}}),r("p",{staticClass:"text-center my-2 text-3xl font-semibold text-blue-700"},[t._v(" ADD STOCK ")]),r("div",{staticClass:"mx-auto my-3 md:w-1/2"},[t.allPortfolio.length?r("div",[r("add-stock-form",{attrs:{portfolios:t.allPortfolio},on:{addStock:t.addStock}})],1):r("p",{staticClass:"my-3 text-center text-gray-700 font-semibold"},[t._v(" You do not have a portfolio added, please create a portfolio. ")])])],1)},o=[],n=r("5530"),i=r("2f62"),s=r("73d8"),l=r("1532"),c=r("7890"),u=r("aa80"),d={name:"CreatePortfolioPage",components:{AddStockForm:u["a"],BreadCrumbComponent:s["a"]},data:function(){return{breadcrumbs:[{title:"Stocks",to:{name:"StockList"}},{title:"Add Stock",to:{name:"AddStock"}}]}},mounted:function(){this.getAllPortfolio()},computed:Object(n["a"])({},Object(i["c"])({allPortfolio:c["c"]})),methods:Object(n["a"])({},Object(i["b"])({addStock:l["b"],getAllPortfolio:c["d"]}))},p=d,f=r("2877"),m=Object(f["a"])(p,a,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-ea42b3c4.b1d1e9a8.js.map