(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){e.exports={container:"Home_container__2218j",title:"Home_title__2ciOW",h1Home:"Home_h1Home__gJ_Iz",sideCont:"Home_sideCont__S58ad",btnYoptions:"Home_btnYoptions__Php2u",crearYCargar:"Home_crearYCargar__1CZuC",selectOptions:"Home_selectOptions__3hlph",navPag:"Home_navPag__udAyf",cards:"Home_cards__BOv1t",linkHomeCard:"Home_linkHomeCard__3LdOt"}},21:function(e,t,n){e.exports={cardsComponent:"Card_cardsComponent__3MlxD",img:"Card_img__2x7aN",h3Name:"Card_h3Name__3aKU-"}},26:function(e,t,n){e.exports={pagHome:"SearchBar_pagHome__sDDOe",searchInput:"SearchBar_searchInput__21YER",searchBtn:"SearchBar_searchBtn__2dyaT"}},30:function(e,t,n){e.exports={landingPage:"LandingPage_landingPage__1cg3a",imgLan:"LandingPage_imgLan__2hqyl"}},32:function(e,t,n){e.exports={paginado:"Paginado_paginado__2-Arr",btnpaginado:"Paginado_btnpaginado__1mAp5"}},51:function(e,t,n){},52:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),o=(n(51),n(52),n(12)),i=n(4),l=n(30),j=n.n(l),u=n(0);function d(){return Object(u.jsx)("div",{className:j.a.landingPage,children:Object(u.jsxs)("div",{className:j.a.imgLan,children:[Object(u.jsx)("h1",{children:"Welcome To World of Food"}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("button",{children:"Ingresar"})})]})})}var p=n(14),b=n(11),h=n(17),O=n(13),m=n.n(O),x=n(18),v=n.n(x);function g(){return function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3001/recipes");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_RECIPES",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var f=n(21),y=n.n(f);function A(e){var t=e.name,n=e.imagen,a=e.diets,c=e.id;return Object(u.jsx)("div",{className:y.a.cardsComponent,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:y.a.img,src:n||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAY1BMVEUAAAD////a2tqGhob39/erq6vg4OCYmJg/Pz/l5eWmpqZzc3OSkpIrKyvS0tLq6uo0NDRLS0s6OjpXV1egoKDAwMBgYGB+fn7Ly8sgICBcXFxERES0tLQuLi7w8PAUFBSKioq2rzLnAAAB9UlEQVR4nO3aW1PaUBSAUQ4glKtQUdt66///laWBhOtmIozjw17rBZPs88A38WAYOx0AAAAAAAAAAAAAAAAAAACgvcmge4vB9LvfwBfqldvcffcb+ELaxLSJaRPbtBkNrpCkzeyapUna/LhmqTYxbWLaxLSJaRPTJpauzexu/vjUbmm2Nk/V4WurpdnabJ+SJudGj3/xkrWpnzzn50bfj4olazPetrk/Mzk8LpaszfO2za/TwcX69O+DM8na1PvNn9PB0fr0+OBMtjYv1eGZL8iH/8/3D05la9PpTF9XP0/HFmc+v/K12b+2bH4cbdp09y+nblNKfQcNt/tQeTu4nLfNY6njLOo0BykSt3morlRxRk2bsjeQuM17qeMMd2nK824gX5uP7euqrrF420tTBrvJfG26q+pl1tToD/bblN0HfLo26z/+qjjdEth9f5GuzbxUjwaTKM3ebpytzbI6HHfCMqX06tlsbeab939/oU2zGydrs7zQpPGyHU7WZt6mTb0b52rT6rZpduNcbVrdNqX83UynavPQLk153yxN1eaTtIlpE9MmlqTN4pqlSdqMh583TdLmetpoo80hbWLaxLSJaRPTJqZNTJuYNjFtYtrEtIlpE9Mmpk1Mm1iv9G9x9G/8AAAAAAAAAAAAAAAAAAAAwGX/ACIJFZz7KRirAAAAAElFTkSuQmCC",alt:"File Not Found",width:"150px",height:"150px"}),Object(u.jsx)("h3",{className:y.a.h3Name,children:t}),Object(u.jsx)("h5",{className:y.a.h5Name,children:a})]})},c)}var _=n(32),C=n.n(_);function E(e){for(var t=e.recipesPerPage,n=e.allRecipes,a=e.paginado,c=[],r=0;r<Math.ceil(n/t);r++)c.push(r+1);return Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{className:C.a.paginado,children:c&&c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:C.a.btnpaginado,onClick:function(){a(e)},children:e})},e)}))})})}var S=n(26),N=n.n(S);function T(){var e=Object(b.b)(),t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],r=n[1];function s(t){t.preventDefault(),e(function(e){return function(){var t=Object(h.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("http://localhost:3001/recipes?name=".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:"GET_RECIPE_NAME",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))}return Object(u.jsxs)("div",{className:N.a.pagHome,children:[Object(u.jsx)("input",{className:N.a.searchInput,type:"text",placeholder:"Buscar...",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)}}),Object(u.jsx)("button",{className:N.a.searchBtn,type:"submit",onClick:function(e){return s(e)},children:"Buscar"})]})}var P=n(10),R=n.n(P);function I(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.recipes})),n=Object(a.useState)(""),c=Object(p.a)(n,2),r=(c[0],c[1]),s=Object(a.useState)(1),i=Object(p.a)(s,2),l=i[0],j=i[1],d=Object(a.useState)(9),h=Object(p.a)(d,2),O=h[0],m=(h[1],l*O),x=m-O,v=t.slice(x,m);function f(t){var n;e((n=t.target.value,console.log(n),{type:"FILTER_BY_DIETS",payload:n}))}return Object(a.useEffect)((function(){e(g())}),[e]),Object(u.jsxs)("div",{className:R.a.container,children:[Object(u.jsx)("div",{className:R.a.title,children:Object(u.jsx)("h1",{className:R.a.h1Home,children:"World of Food"})}),Object(u.jsxs)("div",{className:R.a.search,children:[Object(u.jsx)("div",{className:R.a.pagHome,children:Object(u.jsx)(T,{})}),Object(u.jsx)("div",{className:R.a.navPag,children:Object(u.jsx)(E,{recipesPerPage:O,allRecipes:t.length,paginado:function(e){j(e)}})})]}),Object(u.jsxs)("div",{className:R.a.sideCont,children:[Object(u.jsxs)("div",{className:R.a.btnYoptions,children:[Object(u.jsxs)("div",{className:R.a.crearYCargar,children:[Object(u.jsx)(o.b,{to:"/recipe",children:Object(u.jsx)("button",{children:"Crear Receta"})}),Object(u.jsx)("button",{onClick:function(t){!function(t){t.preventDefault(),e(g())}(t)},children:"Cargar Recetas"})]}),Object(u.jsxs)("div",{className:R.a.selectOptions,children:[Object(u.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_ORDER_NAME",payload:t.target.value}),j(1),r("Ordenado ".concat(t.target.value))}(t)},children:[Object(u.jsx)("option",{value:"selec1",children:"Selecciona una Opcion"}),Object(u.jsx)("option",{value:"ascendente",children:"Ascendente"}),Object(u.jsx)("option",{value:"descendente",children:"Descendente"}),Object(u.jsx)("option",{value:"puntuacion+",children:"Mayor Puntuacion"}),Object(u.jsx)("option",{value:"puntuacion-",children:"Menor Puntuacion"})]}),Object(u.jsxs)("select",{onChange:function(e){return f(e)},children:[Object(u.jsx)("option",{value:"selec2",children:"Selecciona una Opcion"}),Object(u.jsx)("option",{value:"todas",children:"Todas"}),Object(u.jsx)("option",{value:"gluten free",children:"gluten free"}),Object(u.jsx)("option",{value:"dairy free",children:"dairy free"}),Object(u.jsx)("option",{value:"lacto ovo vegetarian",children:"lacto ovo vegetarian"}),Object(u.jsx)("option",{value:"vegan",children:"vegan"}),Object(u.jsx)("option",{value:"paleolithic",children:"paleolithic"}),Object(u.jsx)("option",{value:"primal",children:"primal"}),Object(u.jsx)("option",{value:"pescatarian",children:"pescatarian"}),Object(u.jsx)("option",{value:"fodmap friendly",children:"fodmap friendly"}),Object(u.jsx)("option",{value:"whole 30",children:"whole 30"})]}),Object(u.jsxs)("select",{onChange:function(t){return function(t){e({type:"FILTER_CREATED_DIETS",payload:t.target.value})}(t)},children:[Object(u.jsx)("option",{value:"selec3",children:"Selecciona una Opcion"}),Object(u.jsx)("option",{value:"existentes",children:"Existentes"}),Object(u.jsx)("option",{value:"creadas",children:"Creadas"})]})]})]}),Object(u.jsx)("div",{className:R.a.cards,children:null===v||void 0===v?void 0:v.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{className:R.a.linkHomeCard,to:"/details/".concat(e.id),children:Object(u.jsx)(A,{name:e.name,imagen:e.img,diets:e.diets,score:e.score,id:e.id})})},e.id)}))})]})]})}var F=n(46),k=n(16),L=n(3);function D(e){var t={};return/^\b[A-Za-z\xd1\xf1\xc1\xe1\xc9\xe9\xcd\xed\xd3\xf3\xda\xfa\xdc\xfc\s]+$/.test(e.name)?/^[1-9]?[0-9]{1}$|^100$/.test(e.score)?/^[1-9]?[0-9]{1}$|^100$/.test(e.healthScore)?/^[A-Za-z0-9_-]+$/.test(e.summary)?/^[A-Za-z0-9_-]+$/.test(e.steps)||(t.steps="Debe ingresar un texto para la Receta"):t.summary="Debe ingresar un texto descriptivo para la Receta":t.healthScore="Debe ingresar un puntaje":t.score="Debe ingresar el puntaje":t.name="Se requiere un Nombre",t}function B(){var e=Object(b.b)(),t=Object(i.f)(),n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)(!0),j=Object(p.a)(l,2),d=j[0],O=j[1],x=Object(a.useState)({name:"",img:"",summary:"",score:"",healthScore:"",steps:"",diets:[]}),g=Object(p.a)(x,2),f=g[0],y=g[1];function A(e){y(Object(L.a)(Object(L.a)({},f),{},Object(k.a)({},e.target.name,e.target.value))),s(D(Object(L.a)(Object(L.a)({},f),{},Object(k.a)({},e.target.name,e.target.value)))),console.log(f)}function _(e){e.target.checked&&(y(Object(L.a)(Object(L.a)({},f),{},{diets:[].concat(Object(F.a)(f.diets),[e.target.value])})),s(D(Object(L.a)(Object(L.a)({},f),{},Object(k.a)({},e.target.name,e.target.value)))),r?O(!1):r&&O(!0)),console.log(f)}function C(n){var a;n.preventDefault(),console.log(f),e((a=f,function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("http://localhost:3001/recipe",a);case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Receta Creada Con Exito"),y({name:"",img:"",summary:"",score:"",healthScore:"",steps:"",diets:""}),t.push("/home")}return Object(a.useEffect)((function(){e(function(){var e=Object(h.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3001/types");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TYPE_RECIPE",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("button",{children:"Atras"})}),Object(u.jsx)("h1",{children:"Crea Tu Propia Receta"}),Object(u.jsxs)("form",{onSubmit:function(e){return C(e)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(u.jsx)("input",{type:"text",value:f.name,name:"name",placeholder:"Ingrese su Nombre...",onChange:function(e){return A(e)}}),r.name&&Object(u.jsx)("p",{children:r.name})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"img",children:"Imagen: "}),Object(u.jsx)("input",{type:"text",value:f.img,name:"img",placeholder:"Ingrese el Url de la imagen...",onChange:function(e){return A(e)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"score",children:"Score: "}),Object(u.jsx)("input",{type:"text",value:f.score,name:"score",placeholder:"Ingrese un puntaje...(0-100)",onChange:function(e){return A(e)}}),r.score&&Object(u.jsx)("p",{children:r.score})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"healthScore",children:"Health Score: "}),Object(u.jsx)("input",{type:"text",value:f.healthScore,name:"healthScore",placeholder:"Ingrese el puntaje de nivel saludable...(0-100)",onChange:function(e){return A(e)}}),r.healthScore&&Object(u.jsx)("p",{children:r.healthScore})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"summary",children:"Summary: "}),Object(u.jsx)("input",{type:"text",value:f.summary,name:"summary",placeholder:"Ingrese un Resumen descriptivo para la Receta...",onChange:function(e){return A(e)}}),r.summary&&Object(u.jsx)("p",{children:r.summary})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"steps",children:"Instructions: "}),Object(u.jsx)("input",{type:"text",value:f.steps,name:"steps",placeholder:"Ingrese los pasos para preparar la Receta...",onChange:function(e){return A(e)}}),r.steps&&Object(u.jsx)("p",{children:r.steps})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Diets Type: "}),Object(u.jsxs)("label",{htmlFor:"gluten free",children:[Object(u.jsx)("input",{type:"checkbox",value:"gluten free",name:"gluten free",onChange:function(e){return _(e)}}),"Gluten Free"]})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"dairy free",children:[Object(u.jsx)("input",{type:"checkbox",value:"dairy free",name:"dairy free",onChange:function(e){return _(e)}}),"Dairy Free"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"lacto ovo vegetarian",children:[Object(u.jsx)("input",{type:"checkbox",value:"lacto ovo vegetarian",name:"lacto ovo vegetarian",onChange:function(e){return _(e)}}),"Lacto Ovo Vegetarian"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"vegan",children:[Object(u.jsx)("input",{type:"checkbox",value:"vegan",name:"vegan",onChange:function(e){return _(e)}}),"Vegan"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"paleolithic",children:[Object(u.jsx)("input",{type:"checkbox",value:"paleolithic",name:"paleolithic",onChange:function(e){return _(e)}}),"Paleolithic"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"primal",children:[Object(u.jsx)("input",{type:"checkbox",value:"primal",name:"primal",onChange:function(e){return _(e)}}),"Primal"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"pescatarian",children:[Object(u.jsx)("input",{type:"checkbox",value:"pescatarian",name:"pescatarian",onChange:function(e){return _(e)}}),"Pescatarian"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"fodmap friendly",children:[Object(u.jsx)("input",{type:"checkbox",value:"fodmap friendly",name:"fodmap friendly",onChange:function(e){return _(e)}}),"Fodmap Friendly"]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:"whole 30",children:[Object(u.jsx)("input",{type:"checkbox",value:"whole 30",name:"whole 30",onChange:function(e){return _(e)}}),"Whole 30"]})}),Object(u.jsx)("button",{className:"btn",type:"submit",disabled:d,children:"Crear"})]})]})}function H(){var e,t=Object(b.b)(),n=Object(i.g)().id,c=Object(b.c)((function(e){return e.detail}));return console.log(c),console.log(n),Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(h.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("http://localhost:3001/recipes/".concat(e));case 3:return a=t.sent,t.abrupt("return",n({type:"GET_DETAILS",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[t,n]),Object(u.jsxs)("div",{children:[c.length>0?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:c[0].name}),Object(u.jsx)("img",{src:c[0].img?c[0].img:c[0].image,alt:"Not Found"}),Object(u.jsxs)("h2",{children:["Score: ",c[0].score]}),Object(u.jsxs)("h2",{children:["HealthScore: ",c[0].healthScore]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("br",{})," Diets Types: ",c[0].createdInDb?c[0].diets+" ":null===(e=c[0].diets)||void 0===e?void 0:e.map((function(e){return e+" "}))]}),Object(u.jsx)("br",{}),Object(u.jsxs)("h3",{children:["Summary: ",c[0].summary]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)("br",{}),"Preparation: ",c[0].steps]})]},n):Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("button",{children:"volver"})}),console.log(c[0])]})}var w=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(u.jsx)(i.a,{path:"/home",component:I}),Object(u.jsx)(i.a,{path:"/recipe",component:B}),Object(u.jsx)(i.a,{path:"/details/:id",component:H}),Object(u.jsx)(i.a,{path:"*",component:I})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},M=n(25),z=n(44),G=n(45),Y={recipes:[],backUpRecipes:[],diets:[],detail:[]};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES":return Object(L.a)(Object(L.a)({},e),{},{recipes:t.payload,backUpRecipes:t.payload});case"GET_RECIPE_NAME":return Object(L.a)(Object(L.a)({},e),{},{recipes:t.payload});case"GET_TYPE_RECIPE":return Object(L.a)(Object(L.a)({},e),{},{diets:t.payload});case"POST_RECIPE":return Object(L.a)({},e);case"FILTER_BY_DIETS":var n=e.backUpRecipes,a="todas"===t.payload?n:n.filter((function(e){var n;return null===(n=e.diets)||void 0===n?void 0:n.includes(t.payload)}));return Object(L.a)(Object(L.a)({},e),{},{recipes:a,res:console.log(a)});case"FILTER_CREATED_DIETS":var c=e.backUpRecipes,r="creadas"===t.payload?c.filter((function(e){return e.createInDb})):c.filter((function(e){return!e.createInDb}));return Object(L.a)(Object(L.a)({},e),{},{recipes:r});case"FILTER_ORDER_NAME":var s=t.payload;"ascendente"===s?e.recipes.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?1:e.name.toUpperCase()<t.name.toUpperCase()?-1:0})):"descendente"===s?e.recipes.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?-1:e.name.toUpperCase()<t.name.toUpperCase()?1:0})):"puntuacion+"===s?e.recipes.sort((function(e,t){return e.score>t.score?-1:e.score<t.score?1:0})):e.recipes.sort((function(e,t){return e.score>t.score?1:e.score<t.score?-1:0}));case"GET_DETAILS":return Object(L.a)(Object(L.a)({},e),{},{detail:t.payload});default:return e}},W=Object(M.createStore)(q,Object(z.composeWithDevTools)(Object(M.applyMiddleware)(G.a)));s.a.render(Object(u.jsx)(b.a,{store:W,children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})})}),document.getElementById("root")),U()}},[[82,1,2]]]);
//# sourceMappingURL=main.161d99e3.chunk.js.map