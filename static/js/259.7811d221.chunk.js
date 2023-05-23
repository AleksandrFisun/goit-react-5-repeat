"use strict";(self.webpackChunkgoit_react_5_repeat=self.webpackChunkgoit_react_5_repeat||[]).push([[259],{259:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,s,a,c,l,d,p,u,x,h,f=t(439),g=t(791),m=t(87),v=t(861),w=t(757),j=t.n(w),Z=t(596),b=t(492),k=t(168),y=t(444),P=y.ZP.h2(r||(r=(0,k.Z)(["\n  text-align: center;\n"]))),_=y.ZP.ul(i||(i=(0,k.Z)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  list-style: none;\n"]))),C=y.ZP.li(o||(o=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),F=y.ZP.img(s||(s=(0,k.Z)(["\n  max-width: 360px;\n"]))),B=t(184),E=function(n){var e=n.onClickIdFilm,t=(0,g.useState)([]),r=(0,f.Z)(t,2),i=r[0],o=r[1];return(0,g.useEffect)((function(){var n=function(){var n=(0,v.Z)(j().mark((function n(){var e;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.Ow)();case 3:0===(e=n.sent).total_results&&Z.Am.error("\ud83d\udca9 No results found"),o(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),Z.Am.warn("\ud83d\udc37 ".concat(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,B.jsxs)("section",{children:[(0,B.jsx)(P,{children:"Trending Films"}),(0,B.jsx)(_,{children:i&&i.map((function(n){var t,r;return(0,B.jsxs)(C,{id:n.id,onClick:e,children:[(0,B.jsx)(F,{src:"https://image.tmdb.org/t/p/w500"+n.poster_path,alt:""}),(0,B.jsx)("span",{children:null!==(t=null!==(r=n.original_title)&&void 0!==r?r:"No name")&&void 0!==t?t:n.original_title})]},n.id)}))})]})},D=t(671),S=t(144),A=t(136),I=t(104),K=t(164),O=y.ZP.div(a||(a=(0,k.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),T=y.ZP.div(c||(c=(0,k.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-height: 300px;\n  max-width: 600px;\n  width: 100%;\n  padding: 12px;\n  background-color: black;\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    Opx 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"]))),q=document.querySelector("#modal-root"),L=function(n){(0,A.Z)(t,n);var e=(0,I.Z)(t);function t(){var n;(0,D.Z)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=e.call.apply(e,[this].concat(i))).handleKeyDown=function(e){"Escape"===e.code&&n.props.onCloseBackdrop()},n.onClickBackdrop=function(e){e.currentTarget===e.target&&n.props.onCloseBackdrop()},n}return(0,S.Z)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return(0,K.createPortal)((0,B.jsx)(B.Fragment,{children:(0,B.jsx)(O,{onClick:this.onClickBackdrop,children:(0,B.jsx)(T,{children:this.props.children})})}),q)}}]),t}(g.Component),N=y.ZP.div(l||(l=(0,k.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),z=y.ZP.div(d||(d=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n  color: white;\n  width: 50%;\n"]))),M=y.ZP.div(p||(p=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n  color: white;\n  width: 50%;\n"]))),R=y.ZP.ul(u||(u=(0,k.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),U=y.ZP.div(x||(x=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),W=y.ZP.p(h||(h=(0,k.Z)(["\n  color: white;\n  text-align: center;\n"]))),$=function(){var n=(0,m.lr)(""),e=(0,f.Z)(n,1)[0],t=(0,g.useState)([]),r=(0,f.Z)(t,2),i=r[0],o=r[1],s=(0,g.useState)(!1),a=(0,f.Z)(s,2),c=a[0],l=a[1];return(0,g.useEffect)((function(){var n=e.get("id");if(null!==n){var t=function(){var e=(0,v.Z)(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.qP)(n);case 3:if(void 0!==(t=e.sent)){e.next=7;break}return l(!0),e.abrupt("return");case 7:l(!1),o([t]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),Z.Am.warn("\ud83d\udc37 ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();t()}}),[e]),(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("div",{children:[c&&(0,B.jsxs)(U,{children:[(0,B.jsx)("img",{src:"https://img.icons8.com/clouds/100/image.png",alt:"",height:"100px",width:"100px"}),(0,B.jsx)(W,{children:"Films not found"})]}),i&&i.map((function(n){return(0,B.jsxs)(N,{id:n.id,children:[(0,B.jsxs)(z,{children:[null!==n.poster_path&&(0,B.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+n.poster_path,alt:"",height:"450px",width:"300px"}),null===n.poster_path&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("img",{src:"https://img.icons8.com/clouds/100/image.png",alt:"",height:"100px",width:"100px"}),(0,B.jsx)("p",{children:"Image not found"})]})]}),(0,B.jsxs)(M,{children:[(0,B.jsx)("h3",{children:n.title}),(0,B.jsxs)(R,{children:[(0,B.jsxs)("li",{children:[0!==n.budget&&(0,B.jsxs)("p",{children:["Budget: ",n.budget,"$."]}),0===n.budget&&(0,B.jsx)("p",{children:"Budget: no information."})]}),(0,B.jsx)("li",{children:(0,B.jsxs)("p",{children:["Duration: ",n.runtime," minutes."]})}),(0,B.jsx)("li",{children:(0,B.jsxs)("p",{children:["Rating: ",n.vote_average,"."]})}),(0,B.jsx)("li",{children:(0,B.jsxs)("p",{children:["Overview: ",n.overview]})})]})]})]},n.id)}))]})})},G=function(){var n=(0,g.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=(0,m.lr)(""),o=(0,f.Z)(i,2),s=o[0],a=o[1];(0,g.useEffect)((function(){null!==s.get("id")?r(!0):r(!1)}),[s]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(E,{onClickIdFilm:function(n){var e=n.currentTarget.id;a(""!==e?{id:e}:{})}}),t&&(0,B.jsx)(L,{onCloseBackdrop:function(){r(!1),a("")},children:(0,B.jsx)($,{})})]})}}}]);
//# sourceMappingURL=259.7811d221.chunk.js.map