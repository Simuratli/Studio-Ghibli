(this.webpackJsonpghibli=this.webpackJsonpghibli||[]).push([[5],{45:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(10),s=(r(45),r(6));var f=function(){var e=Object(n.useState)({data:[],filteredNames:"Salam"}),t=Object(u.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(e){c({data:e})}))}),[]),a.a.createElement("div",{className:"mainContainer"},a.a.createElement("div",{className:"search"},a.a.createElement("form",null,a.a.createElement("input",{id:"search",autoComplete:"off",name:"ghibli",onChange:function(e){e.preventDefault();var t=e.target.value;c(l(l({},r),{},{filteredNames:t.toLowerCase()}))},placeholder:"Search Studio Ghibli movies",type:"text"}),r.data.filter((function(e){return e.title.toLowerCase().includes(r.filteredNames)})).filter((function(e,t){return t<=3})).map((function(e,t){return a.a.createElement("div",{key:t,className:"seach-results"},a.a.createElement(s.b,{to:"/movie/".concat(e.id)},e.title))})))))};t.default=function(){return a.a.createElement(c.a,{background:"wall3"},a.a.createElement(f,null))}}}]);
//# sourceMappingURL=5.38ea79bb.chunk.js.map