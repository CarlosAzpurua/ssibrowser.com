(this["webpackJsonpssibrowser.com"]=this["webpackJsonpssibrowser.com"]||[]).push([[0],{127:function(e,t,c){"use strict";c.r(t);var n,s=c(1),r=c.n(s),i=c(65),a=c.n(i),o=(c(44),c(3)),l=c(18),j=c(5),d=c(22);!function(e){e.SET_AR_ADDRESS="SET_AR_ADDRESS",e.CLEAR_AR_ADDRESS="CLEAR_AR_ADDRESS",e.SET_AR_SECRET_KEY="SET_AR_SECRET_KEY",e.CLEAR_AR_SECRET_KEY="CLEAR_AR_SECRET_KEY",e.SET_ZIL_SECRET_KEY="SET_ZIL_SECRET_KEY",e.CLEAR_ZIL_SECRET_KEY="CLEAR_ZIL_SECRET_KEY"}(n||(n={}));var b,h=function(e,t){switch(t.type){case n.SET_AR_ADDRESS:return Object(d.a)(Object(d.a)({},e),{},{address:t.payload});case n.CLEAR_AR_ADDRESS:return Object(d.a)(Object(d.a)({},e),{},{address:null});default:return e}},O={user:{address:null,arweaveSecretKey:null,zilliqaSecretKey:null}},x=function(e){var t=function(){return{}},c=Object(s.createContext)(e),n=Object(s.createContext)(t);return{useDispatch:function(){return Object(s.useContext)(n)},useSelector:function(e){return e(Object(s.useContext)(c))},stateContext:c,dispatchContext:n}}(O),u=(x.useDispatch,x.useSelector,x.stateContext),S=x.dispatchContext,p=function(e,t){return{user:h(e.user,t)}};!function(e){e.Home="/",e.Domains="/domains",e.Contact="/contact"}(b||(b={}));var E=b,T=c(0);var m=function(){return Object(T.jsx)("div",{id:"header",children:Object(T.jsx)("div",{className:"content",children:Object(T.jsx)("div",{className:"inner",children:Object(T.jsx)(k,{})})})})};var _=function(){return Object(T.jsx)("footer",{id:"footer",children:Object(T.jsx)("ul",{className:"icons",style:{marginTop:"0.5%"},children:Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"https://github.com/Zillacracy-org/ssibrowser.com",className:"icon brands fa-github",children:Object(T.jsx)("span",{className:"label",children:"GitHub"})})})})})},v=c(41),A=c.n(v);var f=function(){return Object(T.jsx)("div",{id:"header",className:A.a.container,children:Object(T.jsx)("nav",{className:A.a.nav,children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/domains",children:"Domains"})}),Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/contact",children:"Join us"})})]})})})};var D=function(){return Object(T.jsxs)("div",{id:"main",children:[Object(T.jsx)("span",{role:"img","aria-label":"back arrow",style:{marginTop:"7%",marginBottom:"2%"},children:Object(T.jsx)(l.b,{to:"/",children:"\ud83d\udd19"})}),Object(T.jsx)("h2",{style:{width:"100%",textAlign:"center"},children:"Domains"}),Object(T.jsxs)("section",{style:{width:"100%"},children:[Object(T.jsxs)("p",{children:["Search for a ",Object(T.jsx)("i",{children:"username.domain"})," to access its public profile - or if it's available, you can register it!"]}),Object(T.jsx)("div",{className:"table-wrapper",children:Object(T.jsxs)("table",{children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Domain"}),Object(T.jsx)("th",{children:"For"})]})}),Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:".did"}),Object(T.jsx)("td",{children:"Decentralized identifier smart contracts"})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:".mapu"}),Object(T.jsx)("td",{children:"Self-sovereign decentralized communities"})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:".tyron"}),Object(T.jsx)("td",{children:"Tyron smart contracts"})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:".ssi"}),Object(T.jsx)("td",{children:"Self-sovereign digital identities"})]})]})]})})]})]})};var R=function(){return Object(T.jsxs)("div",{id:"main",children:[Object(T.jsx)("span",{role:"img","aria-label":"back arrow",style:{marginTop:"7%",marginBottom:"2%"},children:Object(T.jsx)(l.b,{to:"/",children:"\ud83d\udd19"})}),Object(T.jsx)("h2",{style:{width:"100%",textAlign:"center"},children:"Join us"}),Object(T.jsx)("section",{style:{width:"100%",textAlign:"center"},children:Object(T.jsxs)("ul",{style:{listStyle:"none"},children:[Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"https://ssiprotocol.com",children:"www.ssiprotocol.com"})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"https://zillacracy.com",children:"www.zillacracy.com"})}),Object(T.jsxs)("li",{children:[Object(T.jsx)("a",{href:"https://discord.gg/FMAUh4ZNwZ",className:"icon brands fa-discord",children:Object(T.jsx)("span",{className:"label",children:"Discord"})})," Join us at the ",Object(T.jsx)("code",{children:Object(T.jsx)("a",{href:"https://discord.gg/FMAUh4ZNwZ",children:"tyron-ssi-protocol"})})," channel in Zilgineers"]})]})})]})};c(2),c(4);var C;c(67),c(68);!function(e){e.ACCESS_ADDRESS="ACCESS_ADDRESS",e.SIGN_TRANSACTION="SING_TRANSACTION",e.ENCRYPT="ENCRYPT",e.DECRYPT="DECRYPT"}(C||(C={}));C.ACCESS_ADDRESS,C.SIGN_TRANSACTION,C.ENCRYPT,C.DECRYPT;var y=c(7),g=c.n(y);c(13);g.a.init({host:"arweave.net",port:443,protocol:"https"});var I,N,w=c(16),P="https://github.com/pungtas/smart-contracts.tyron/blob/main";!function(e){e.INIT="init",e.DID="did",e.xWALLET="xwallet",e.SSI="ssi",e.PST="pst",e.PSTi="psti",e.xPSTi="xpsti",e.pWALLET="pwallet"}(N||(N={}));var L,Y=[N.INIT,N.DID,N.xWALLET,N.SSI,N.PST,N.PSTi,N.xPSTi,N.pWALLET],K=(I={},Object(w.a)(I,N.DID,"".concat(P,"/DID/did.tyron.scilla")),Object(w.a)(I,N.xWALLET,"".concat(P,"/DID/DIDdapps/DIDxWallet.tyron.scilla")),Object(w.a)(I,N.INIT,"".concat(P,"/INIT/init.tyron.scilla")),Object(w.a)(I,N.PST,"".concat(P,"/PST/pst.tyron.scilla")),Object(w.a)(I,N.PSTi,"".concat(P,"/PST/new-token/PSTi.tyron.scilla")),Object(w.a)(I,N.xPSTi,"".concat(P,"/PST/wrapped-token/xPSTi.tyron.scilla")),Object(w.a)(I,N.pWALLET,"".concat(P,"/PERMAWALLET/pWallet.tyron.js")),Object(w.a)(I,N.SSI,"".concat(P,"/SSI/ssi.tyron.scilla")),I);!function(e){e.TYRON="tyron",e.SSI="ssi",e.DID="did",e.MAPU="mapu",e.COOP="coop"}(L||(L={}));var W=c(27),Z=c.n(W);var k=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),a=i[0],l=i[1],j=Object(s.useState)(""),d=Object(o.a)(j,2),b=d[0],h=d[1],O=Object(s.useState)(""),x=Object(o.a)(O,2),u=x[0],S=x[1];return Object(T.jsxs)("div",{className:Z.a.container,children:[Object(T.jsx)("input",{type:"text",className:Z.a.searchBar,onKeyPress:function(e){if("Enter"===e.key)switch(b){case L.TYRON:Y.includes(a)?window.open(K[a]):S("Invalid smart contract");break;case L.SSI:console.log("");break;default:S("Domain not valid")}},onChange:function(e){var t=e.currentTarget.value;if(n(t),t){var c=t.split("."),s=Object(o.a)(c,2),r=s[0],i=void 0===r?"":r,a=s[1],j=void 0===a?"":a;l(i),h(j)}else S("")},value:c}),Object(T.jsx)("p",{className:Z.a.errorMsg,children:u})]})};var B=function(){var e=Object(s.useReducer)(p,O),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(T.jsx)(u.Provider,{value:c,children:Object(T.jsx)(S.Provider,{value:n,children:Object(T.jsx)("div",{id:"wrapper",children:Object(T.jsxs)(l.a,{children:[Object(T.jsx)(m,{}),Object(T.jsxs)(j.d,{children:[Object(T.jsx)(j.b,{exact:!0,path:E.Home,component:f}),Object(T.jsx)(j.b,{exact:!0,path:E.Domains,component:D}),Object(T.jsx)(j.b,{exact:!0,path:E.Contact,component:R}),Object(T.jsx)(j.a,{to:E.Home})]}),Object(T.jsx)(_,{})]})})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};a.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(B,{})}),document.getElementById("root")),M()},27:function(e,t,c){e.exports={searchBar:"styles_searchBar__2_OfB",errorMsg:"styles_errorMsg__1Woia"}},41:function(e,t,c){e.exports={container:"styles_container__3NFhU",nav:"styles_nav__BMrUO"}},44:function(e,t,c){},67:function(e,t,c){}},[[127,1,2]]]);
//# sourceMappingURL=main.ac19d410.chunk.js.map