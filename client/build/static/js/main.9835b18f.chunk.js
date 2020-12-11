(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{175:function(e,t,n){},181:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),s=n.n(r),c=n(29),o=n.n(c),i=(n(175),n(47)),l=n(55),u=n(142),d=n(143),p="DEPLOYMENT_CREATE_REQUEST",j="DEPLOYMENT_CREATE_SUCCESS",b="DEPLOYMENT_CREATE_FAIL",m="DEPLOYMENT_CREATE_RESET",h="DEPLOYMENT_LIST_REQUEST",y="DEPLOYMENT_LIST_SUCCESS",O="DEPLOYMENT_LIST_FAIL",v="DEPLOYMENT_DELETE_REQUEST",f="DEPLOYMENT_DELETE_SUCCESS",E="DEPLOYMENT_DELETE_FAIL",x=Object(l.combineReducers)({deploymentCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case j:return{loading:!1,success:!0,deployment:t.payload};case b:return{loading:!1,error:t.payload};case m:return{};default:return e}},deploymentRemove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deployments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case f:return{loading:!1,deployments:t.payload,success:!0};case E:return{loading:!1,error:t.payload,success:!1};default:return e}},deploymentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deployments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case y:return{loading:!1,deployments:t.payload};case O:return{loading:!1,error:t.payload};default:return e}}}),g=[u.a],T=Object(l.createStore)(x,{},Object(d.composeWithDevTools)(l.applyMiddleware.apply(void 0,g))),L=(n(181),n(319)),S=n(320),C=n(318),_=n(326),D=C.a.Header,N=C.a.Content,I=C.a.Footer,P=function(e){var t=e.children;return Object(a.jsxs)(C.a,{className:"layout",style:{width:"100%"},children:[Object(a.jsx)(D,{children:Object(a.jsx)(_.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(a.jsx)(_.a.Item,{children:"Deployer"},"1")})}),Object(a.jsx)(N,{style:{padding:"20px 50px",justifyContent:"center"},children:Object(a.jsx)("div",{className:"site-layout-content",children:t})}),Object(a.jsx)(I,{style:{textAlign:"center"},children:"\xa92020 Created by Devesh Rawat"})]})},w=n(115),M=n(321),F=n(165),R=n(324),k=n(166),A=[{name:"Sporty",versions:["1.0.0","1.1.0","1.2.0"]},{name:"Lucy",versions:["1.0.0","1.3.0","2.0.0","1.5.6"]},{name:"NPM",versions:["1.0.0","1.3.0","2.9.0","1.6.6"]},{name:"Python",versions:["4.0.1","1.3.0","2.0.0","1.5.6"]},{name:"TypeScript",versions:["1.0.1","9.3.0","2.1.06"]}],Y=n(327),U=n(65),z=n.n(U),Q=n(100),V=n(101),q=n.n(V),B=function(){return function(){var e=Object(Q.a)(z.a.mark((function e(t){var n,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:h}),e.next=4,q.a.get("/api/deployments");case 4:n=e.sent,a=n.data,t({type:y,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:O,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},J=[],H=function(){var e=Object(i.c)((function(e){return e.deploymentCreate})).success,t=Object(i.b)(),n=Object(r.useState)("medium"),s=Object(w.a)(n,2),c=s[0],o=s[1],l=Object(r.useState)([]),u=Object(w.a)(l,2),d=u[0],h=u[1];Object(r.useEffect)((function(){e&&t({type:m}),h((A.forEach((function(e){var t={value:e.name,label:e.name,children:e.versions.map((function(e){return{value:e,label:e}}))};J.push(t)})),J)),t(B())}),[t,e]);return Object(a.jsx)("div",{style:{marginTop:"50px"},children:Object(a.jsxs)(M.a,{labelCol:{span:6},wrapperCol:{span:17},layout:"verticel",initialValues:{size:c},onValuesChange:function(e){var t=e.size;o(t)},size:c,onFinish:function(e){var n,a={url:e.url,templateName:e.versions[0],version:e.versions[1]};t((n=a,function(){var e=Object(Q.a)(z.a.mark((function e(t){var a,r,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:p}),e.next=4,q.a.post("/api/deployments/",n);case 4:a=e.sent,r=a.data,t({type:j,payload:r}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),s=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:b,payload:s});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),e.url="",e.versions=[]},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(M.a.Item,{label:"Url",name:"url",rules:[{required:!0,message:"Please input your url!"}],children:Object(a.jsx)(F.a,{})}),Object(a.jsx)(M.a.Item,{label:"Versions",name:"versions",rules:[{required:!0,message:"Please input your versions!"}],children:Object(a.jsx)(R.a,{options:d})}),Object(a.jsx)(M.a.Item,{children:Object(a.jsx)(k.a,{htmlType:"submit",shape:"round",icon:Object(a.jsx)(Y.a,{}),size:"middle",children:"Deploy Template"})}),Object(a.jsx)(M.a.Item,{})]})})},K=n(322),W=n(323),G=n(325),X=n(328),Z=n(329),$=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.deploymentList})),n=Object(i.c)((function(e){return e.deploymentRemove})).success;return Object(r.useEffect)((function(){e(B())}),[e]),Object(r.useEffect)((function(){n&&e(B())}),[e,n]),Object(a.jsx)(K.b,{className:"demo-loadmore-list",loading:t.loading,itemLayout:"horizontal",dataSource:t.deployments,renderItem:function(t){return Object(a.jsx)(K.b.Item,{children:Object(a.jsxs)(W.a,{avatar:!0,title:!1,loading:t.loading,active:!0,children:[Object(a.jsx)(K.b.Item.Meta,{avatar:Object(a.jsx)(G.a,{icon:Object(a.jsx)(X.a,{})}),title:Object(a.jsx)("a",{href:t.url,children:t.templateName.toUpperCase()}),description:t.url}),Object(a.jsx)("div",{style:{paddingLeft:10},children:Object(a.jsx)(Z.a,{style:{fontSize:"20px",cursor:"pointer"},onClick:function(){return e((n=t.id,function(){var e=Object(Q.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:v}),e.next=4,q.a.delete("/api/deployments/".concat(n));case 4:t({type:f}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:E,payload:a});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var n}})})]})},t.id)}})},ee=function(){return Object(a.jsx)(P,{children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)(H,{})}),Object(a.jsx)(S.a,{span:12,children:Object(a.jsx)($,{})})]})})};var te=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(ee,{})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,330)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};n(315);o.a.render(Object(a.jsxs)(i.a,{store:T,children:[Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(te,{})}),","]}),document.getElementById("root")),ne()}},[[316,1,2]]]);
//# sourceMappingURL=main.9835b18f.chunk.js.map