(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{86:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),i=n.n(c),o=n(17),u=n.n(o),s=n(32),d=n(19),l=n(41),f=n.n(l),p=(n(86),n(54)),j=n.n(p),h=function(e,t){return Object.assign({},{id:e.toString(),type:t.type,name:t.name,children:[]})},b=function(e,t,n,r){var a=Object.assign({},{keyID:j()(),cityID:e.city_id,type:"citizen",name:e.name});t===r.length-1&&n.children.push(a)},x=function(e){var t=null,n=0,r=[];return{structure:e.reduce((function(e,a){return a.groups.forEach((function(c,i,o){if(0===i){var u=e.find((function(e){return e.name===c.name}));if(u)t=u;else{var s=h(n,c);e.push(s),r.push(s.id),++n,t=s}}else{var d=t.children.find((function(e){return e.name===c.name}));if(d)b(a,i,t=d,o);else{var l=h(n,c);t.children.push(l),r.push(l.id),++n,b(a,i,t=l,o)}}})),e}),[]),idList:r}},m=n(117),v=n(120),O=n(57),y=n.n(O),g=n(58),I=n.n(g),E=n(123),w=n(121),k=n(3),L=Object(m.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function D(e){var t=L(),n=a.a.useState({isExpand:!0}),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(k.jsx)("div",{className:t.root,children:Object(k.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){return i((function(e){return{isExpand:!e.isExpand}})),void(c.isExpand?e.expandEverything():e.collapseEverything())},children:c.isExpand?"Expand All":"Collapse All"})})}var S=n(8),T=n(122),z=n(119),A=Object(S.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9rgba(0, 0, 0, 0.87)",color:"#f5f5f9",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(T.a);function C(e){var t,n=(t=e.cityID,e.cityList.filter((function(e){return e.id===t}))),r=(n=n[0]).name.concat(", ",n.data," \u0436\u0438\u0442\u0435\u043b\u0435\u0439");return Object(k.jsx)(A,{title:Object(k.jsx)(a.a.Fragment,{children:Object(k.jsx)(z.a,{color:"inherit",children:r})}),placement:"top-start","aria-label":"citizen",children:Object(k.jsx)(E.a,{nodeId:e.nodeIdItem,label:e.labelItem})})}var F=Object(m.a)({root:{height:110,flexGrow:1,maxWidth:400}});function N(e){var t,n=F(),r=a.a.useState([]),c=Object(d.a)(r,2),i=c[0],o=c[1],u=function t(n){return Array.isArray(n.children)?Object(k.jsx)(E.a,{nodeId:n.id,label:n.name,children:n.children.map((function(e){return t(e)}))},n.id):Object(k.jsx)(C,{nodeIdItem:n.keyID,labelItem:n.name,cityID:n.cityID,cityList:e.citiesList},n.keyID)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(D,{expandEverything:function(){o(e.expandedItems)},collapseEverything:function(){o([])}}),Object(k.jsx)(v.a,{className:n.root,defaultCollapseIcon:Object(k.jsx)(y.a,{}),defaultExpandIcon:Object(k.jsx)(I.a,{}),expanded:i,onNodeToggle:function(e,t){o(t)},children:(t=e.dataTree,t.map((function(e){return Object(k.jsx)(E.a,{nodeId:e.id,label:e.name,children:e.children&&0!==e.children.length?e.children.map((function(e){return u(e)})):null},e.id)})))})]})}N.defaultProps={dataTree:[]},window.addEventListener("online",(function(){document.title=document.title.replace(" [offline]","")})),window.addEventListener("offline",(function(){document.title+=" [offline]"}));var J=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(d.a)(c,2),o=(i[0],i[1]),l=Object(r.useState)([]),p=Object(d.a)(l,2),j=p[0],h=p[1],b=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("http://localhost",":").concat("5000","/cities"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("http://localhost",":").concat("5000","/citizens"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,o(t),h(x(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(N,{dataTree:j.structure,expandedItems:j.idList,citiesList:n})})},W=(n(94),document.getElementById("root"));i.a.render(Object(k.jsx)(J,{}),W)}},[[95,1,2]]]);
//# sourceMappingURL=main.8542ee12.chunk.js.map