(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{81:function(e,t,c){"use strict";c.r(t);var n=c(99),a=c(1),i=c(59),r=c.n(i),s=c(4),o=c(100),j=c(62),l=c(93),b=c(66),g=c(94),d=c(83),O=c(101),h=c(60),u=c(91),x=c(53),f=c(2),p=function(e){var t=Object(d.b)().toggleColorMode,c=Object(d.c)("dark","light"),n=Object(d.c)(x.a,x.b);return Object(f.jsx)(u.a,Object(h.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(f.jsx)(n,{}),"aria-label":"Switch to ".concat(c," mode")},e))},m=function(e){var t=Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{fontSize:"sm",fontWeight:400,href:"#",children:"Sign In"}),Object(f.jsx)(b.a,{fontSize:"sm",fontWeight:600,color:"white",bg:"pink.400",href:"#",_hover:{bg:"pink.300"},children:"Sign Up"})]});return e.isAuthenticated&&(t=Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(b.a,{onClick:e.onLogout,fontSize:"sm",fontWeight:600,color:"white",bg:"pink.400",href:"#",_hover:{bg:"pink.300"},children:"Logout"})})),Object(f.jsx)(l.a,{children:Object(f.jsxs)(g.a,{bg:Object(d.c)("white","gray.800"),color:Object(d.c)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:Object(d.c)("gray.200","gray.900"),align:"center",children:[Object(f.jsx)(O.a,{justify:"right",direction:"row",spacing:6,children:t}),Object(f.jsx)(p,{justifySelf:"flex-end"})]})})},S=c(95),y=c(32),v=c(96),w=c(102),I=function(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(!0),o=Object(s.a)(r,2),j=o[0],h=o[1],u=Object(a.useState)(""),x=Object(s.a)(u,2),p=x[0],m=x[1],I=Object(a.useState)(!0),L=Object(s.a)(I,2),k=L[0],z=L[1];return Object(f.jsx)(g.a,{align:"center",justify:"center",bg:Object(d.c)("gray.50","gray.800"),children:Object(f.jsxs)(O.a,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[Object(f.jsx)(O.a,{align:"center",children:Object(f.jsx)(S.a,{fontSize:"4xl",children:"Sign in to your account"})}),Object(f.jsx)(l.a,{rounded:"lg",bg:Object(d.c)("white","gray.700"),boxShadow:"lg",p:8,children:Object(f.jsxs)(O.a,{spacing:4,children:[Object(f.jsxs)(y.a,{id:"email",children:[Object(f.jsx)(v.a,{children:"Email address"}),Object(f.jsx)(w.a,{isInvalid:!j,type:"email",value:n,onChange:function(e){i(e.target.value);var t=e.target.value.includes("@");h(t)}})]}),Object(f.jsxs)(y.a,{id:"password",children:[Object(f.jsx)(v.a,{children:"Password"}),Object(f.jsx)(w.a,{isInvalid:!k,type:"password",value:p,onChange:function(e){m(e.target.value);var t=e.target.value.trim().length>3;z(t)}})]}),Object(f.jsx)(O.a,{spacing:10,children:Object(f.jsx)(b.a,{type:"submit",onClick:function(t){t.preventDefault(),e.onLogin(n,p)},isDisabled:!j||!k,bg:"blue.400",color:"white",_hover:{bg:"blue.500"},children:"Sign in"})})]})})]})})},L=c(97),k=c(98);function z(){return Object(f.jsx)(L.a,{maxW:"3xl",children:Object(f.jsx)(O.a,{as:l.a,textAlign:"center",spacing:{base:8,md:14},py:{base:20,md:36},children:Object(f.jsxs)(S.a,{fontWeight:600,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:["Learn React from",Object(f.jsx)("br",{}),Object(f.jsx)(k.a,{as:"span",color:"green.400",children:"one of the easiest courses"})]})})})}var C=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("isLoggedIn")?JSON.parse(localStorage.getItem("isLoggedIn")):null;n(e)}()}),[]);return Object(f.jsxs)(o.a,{theme:j.theme,children:[Object(f.jsx)(m,{isAuthenticated:c,onLogout:function(){n(!1),localStorage.setItem("isLoggedIn",JSON.stringify(!1))}}),Object(f.jsxs)(l.a,{children:[!c&&Object(f.jsx)(I,{onLogin:function(e,t){localStorage.setItem("isLoggedIn",JSON.stringify(!0)),n(!0)}}),c&&Object(f.jsx)(z,{})]})]})};r.a.render(Object(f.jsxs)(a.StrictMode,{children:[Object(f.jsx)(n.a,{}),Object(f.jsx)(C,{})]}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.94f0e425.chunk.js.map