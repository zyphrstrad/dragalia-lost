(window["webpackJsonpdragalia-lost"]=window["webpackJsonpdragalia-lost"]||[]).push([[6],{158:function(e,t,a){"use strict";a.r(t);var n=a(24),c=a(0),r=a.n(c),l=a(151),o=a(156),i=a(138),m=a(51),u=a(17),s=a(26),d=a(74),b=a(75),h=a(3);function E(e){var t=e.columnIndex,a=e.rowIndex,n=e.data,c=n.cols;return n.keyArray[c*a+t]||"".concat(a,"_").concat(t)}function f(e){var t=e.elements,a=e.weapons,n=r.a.useContext(m.b).width,c=[].concat(Object(s.a)(t),Object(s.a)(a)),l=h.e.filter(function(e){return c.some(function(t){return e.includes(t)})}),o=n>700?2:1,i={cols:o,keyArray:l},u=Math.ceil(l.length/o);return r.a.createElement(d.a,null,function(e){var t=e.height,a=e.width;return r.a.createElement(b.a,{width:a,height:t,itemData:i,itemKey:E,columnCount:o,rowCount:u,columnWidth:a/o-8,rowHeight:100},m.d)})}f.defaultProps={weapons:[],elements:[]};var v=r.a.memo(f),j=a(25),O=a(48),p=a(4),g=a(12),w=["smithy","dragontree","dracolith","rupie"];var k={updateSetting:p.k},C=Object(j.b)(function(e){return{halidom:e.halidom}},k)(function(e){var t=e.halidom,a=e.updateSetting,c=r.a.useState(!1),i=Object(n.a)(c,2),u=i[0],s=i[1],d=r.a.useMemo(function(){for(var e=Number(t.dracolith)+Number(t.dragontree)+Number(t.smithy)+Number(t.rupie),a=0;a<h.e.length;a+=1){var n=h.e[a];e+=t[n].level}return e},[t]),b=Object(g.l)(function(e){var t=e.target,n=t.name,c=t.value;a({name:n,value:parseInt(c,10)||""})}),E=Object(O.a)("col-2","animated-collapse",{collapse:!u});return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.e,null),r.a.createElement("div",{className:"col-2"},r.a.createElement(l.a,{control:r.a.createElement(o.a,{color:"primary",checked:u,onChange:function(e){s(e.target.checked)}}),label:"setting"}),r.a.createElement("div",{className:"center"},"Total : ",d)),r.a.createElement("div",{className:E},w.map(function(e){return r.a.createElement(m.h,{key:e,label:e,value:t[e],onChange:b})})))});var y=r.a.memo(function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],d=Object(c.useState)(Object(u.b)("element")),b=Object(n.a)(d,2),h=b[0],E=b[1],f=Object(c.useState)(!1),j=Object(n.a)(f,2),O=j[0],p=j[1],g=Object(c.useState)(Object(u.b)("weapon")),w=Object(n.a)(g,2),k=w[0],y=w[1],N=Object(c.useState)([]),S=Object(n.a)(N,2),A=S[0],x=S[1],I=Object(c.useState)([]),J=Object(n.a)(I,2),L=J[0],M=J[1],R=function(e){var t=e.currentTarget.name;"element"!==t||a?"weapon"!==t||O||y(function(e){return Object(u.a)(e)}):E(function(e){return Object(u.a)(e)})};return Object(c.useEffect)(function(){var e=Object(u.c)({arr:h,name:"element",disabled:a});x(e)},[h,a]),Object(c.useEffect)(function(){var e=Object(u.c)({arr:k,name:"weapon",disabled:O});M(e)},[k,O]),r.a.createElement("main",{id:"halidom"},r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",{className:"col-2"},r.a.createElement(l.a,{control:r.a.createElement(o.a,{color:"primary",checked:a,onChange:function(e){s(e.target.checked)}}),label:"disable"}),r.a.createElement(i.a,{variant:"outlined",name:"element",onClick:R},"CLEAR")),r.a.createElement(m.a,{btns:h,disabled:a,name:"element",setChecked:E}),r.a.createElement("div",{className:"col-2"},r.a.createElement(l.a,{control:r.a.createElement(o.a,{color:"primary",checked:O,onChange:function(e){p(e.target.checked)}}),label:"disable"}),r.a.createElement(i.a,{variant:"outlined",name:"weapon",onClick:R},"CLEAR")),r.a.createElement(m.a,{btns:k,disabled:O,name:"weapon",setChecked:y})),r.a.createElement("div",null,r.a.createElement(v,{elements:A,weapons:L})))});t.default=y}}]);
//# sourceMappingURL=6.408d2588.chunk.js.map