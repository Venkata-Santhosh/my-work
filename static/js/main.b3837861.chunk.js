(this["webpackJsonpmy-work"]=this["webpackJsonpmy-work"]||[]).push([[0],{483:function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"fetchBlogActionCreator",(function(){return v}));var c,o=t(28),a=t.n(o),i=t(14),s=t(0),u=t(10),l=t(94);!function(e){e.FETCH_BLOGS="fetch_blogs",e.FETCH_BLOGS_SUCCESS="fetch_blogs_success",e.FETCH_BLOGS_ERROR="fetch_blogs_error"}(c||(c={}));var d={loading:!0,error:null,markdowns:null},b=Object(u.c)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case c.FETCH_BLOGS:return{loading:!0,error:null,markdowns:[]};case c.FETCH_BLOGS_SUCCESS:return{loading:!1,error:null,markdowns:r.payload};case c.FETCH_BLOGS_ERROR:return{loading:!1,error:r.payload,markdowns:[]};default:return e}}}),j=Object(u.d)(b,{},Object(u.a)(l.a)),O=t(52),h=t.n(O),g=t(95),f=t(96),p=t.n(f),v=function(){return function(){var e=Object(g.a)(h.a.mark((function e(r){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:c.FETCH_BLOGS}),e.next=3,p.a.get("/my-work/git.md");case 3:t=e.sent,n=t.data,r({type:c.FETCH_BLOGS_SUCCESS,payload:[{title:"my blog",content:n},{title:"my blog 2",content:"This is my blog content 2"}]});case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},y=i.c,S=t(97),_=t.n(S),C=t(98),m=t(99),E=t(106),w=t(105),x=t(487),k=t(486),B=t(3),L=function(e){Object(E.a)(t,e);var r=Object(w.a)(t);function t(){return Object(C.a)(this,t),r.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,r=e.language,t=e.value;return Object(B.jsx)(x.a,{language:r,style:k.a,children:t})}}]),t}(s.PureComponent),T=t(104),F=t.n(T),G=function(){var e=function(){var e=Object(i.b)();return Object(u.b)(n,e)}().fetchBlogActionCreator;Object(s.useEffect)((function(){e()}),[]);var r=y((function(e){return e.blogs})),t=r.loading,c=r.error,o=r.markdowns;return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"My Blogs"}),t&&Object(B.jsx)("h3",{children:"Loading ... "}),c&&Object(B.jsx)("h3",{children:"Error while retrieving blog"}),Object(B.jsx)("ul",{children:!c&&!t&&o&&o.map((function(e){return Object(B.jsx)("li",{children:Object(B.jsx)(_.a,{plugins:[F.a],source:e.content,renderers:{code:L}})},e.title)}))})]})},H=function(){return Object(B.jsx)(i.a,{store:j,children:Object(B.jsx)(G,{})})};a.a.render(Object(B.jsx)(H,{}),document.querySelector("#root"))}},[[483,1,2]]]);
//# sourceMappingURL=main.b3837861.chunk.js.map