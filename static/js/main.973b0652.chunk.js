(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{29:function(e,t,n){e.exports=n(60)},40:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),c=n.n(o),i=n(9),s=n(6),l=n(25),u=n(26),d=(n(39),n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=n(2),f=n(3),b=n(4),v=n(5),g=(n(41),function(e){var t=e.item;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robot profile",src:"https://robohash.org/".concat(t.id,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t.name),a.a.createElement("p",null,t.email)))}),m=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e){return a.a.createElement(g,{key:e.id,item:e})})))},E=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"f1"},"RoboFriends"))}}]),n}(r.Component),O=function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"750px"}},t)},w=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"search robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots...",onChange:t}))},y=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops, that is not goood"):this.props.children}}]),n}(a.a.Component),S=n(13),R=n.n(S),j=n(27),C=n(28),k=n.n(C),_=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,o=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(E,null),a.a.createElement(w,{searchChange:r}),a.a.createElement(O,null,a.a.createElement(y,null,a.a.createElement(m,{robots:c}))))}}]),n}(r.Component),N=Object(i.b)((function(e){var t=e.searchRobots,n=e.requestRobots;return{searchField:t.searchField,robots:n.robots,isPending:n.isPending,error:n.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(){var e=Object(j.a)(R.a.mark((function e(t){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_ROBOTS_PENDING"}),e.prev=1,e.next=4,k.a.get("https://jsonplaceholder.typicode.com/users");case 4:n=e.sent,r=n.data,t({type:"REQUEST_ROBOTS_SUCCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"REQUEST_ROBOTS_FAILED",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(_),T=n(7),U={searchField:""},A={robots:[],error:"",isPending:!1},F=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(T.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(T.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(T.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(T.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),P=Object(l.createLogger)(),L=Object(s.d)(F,Object(s.a)(u.a,P));c.a.render(a.a.createElement(i.a,{store:L},a.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.973b0652.chunk.js.map