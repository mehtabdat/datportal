"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[7119],{67119:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(74165),r=n(1413),o=n(15861),i=n(29439),c=n(47313),l=n(82626),s=n(54060),d=n(5900),u=n(42346),m=n(46155),f=n(41586),p=n(98676),v=n(98505),h=n(3113),g=n(43144),x=n(15671),Z=n(49075),y=(0,g.Z)((function e(){var t=this;(0,x.Z)(this,e),this.endPoint="saved-searches",this.getAllRecords=function(e){return Z.Z.get(t.endPoint+"/findAdminPanelFilters",{params:e})},this.getRecordById=function(e){return Z.Z.get("".concat(t.endPoint,"/").concat(e))},this.deleteRecord=function(e){return Z.Z.delete("".concat(t.endPoint,"/").concat(e))},this.createRecord=function(e){return Z.Z.post(t.endPoint+"/admin",e)},this.updateRecord=function(e,n){return Z.Z.patch("".concat(t.endPoint,"/").concat(n),e)}})),b=n(46417),C=function(e){var t=e.record,n=e.reloadTableData,a=(0,c.useState)({confirmLoading:!1,openPopConfirm:!1}),o=(0,i.Z)(a,2),l=o[0],s=o[1],u=(0,c.useMemo)((function(){return new y}),[]);return(0,b.jsx)("div",{className:h.Z.actions,children:(0,b.jsx)(d.Z,{open:l.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:function(){s((0,r.Z)((0,r.Z)({},l),{},{confirmLoading:!0})),u.deleteRecord(t.id).then((function(e){s((0,r.Z)((0,r.Z)({},l),{},{openPopConfirm:!1,confirmLoading:!1})),n()})).catch((function(e){s((0,r.Z)((0,r.Z)({},l),{},{confirmLoading:!1}))}))},onCancel:function(){return s((0,r.Z)((0,r.Z)({},l),{},{openPopConfirm:!1}))},okButtonProps:{loading:l.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:function(e){e||s((0,r.Z)((0,r.Z)({},l),{},{openPopConfirm:!1}))},children:(0,b.jsx)(p.Z,{className:h.Z.bg__red,onClick:function(){s((0,r.Z)((0,r.Z)({},l),{},{openPopConfirm:!0}))}})})})};function j(e){var t=e.tableData,n=e.tableLoading,a=e.reloadTableData,r=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,t,n){return n+1},width:"60px"},{title:"Title",dataIndex:"title",key:"title",render:function(e,t){return(0,b.jsx)(l.ZT,{color:"dark-main",size:"sm",weight:"bold",children:e})}},{title:"Filters",dataIndex:"filters",key:"filters",render:function(e,t){return(0,b.jsx)("div",{children:Object.keys(t.filters).map((function(t,n){return(0,b.jsxs)("div",{children:[(0,b.jsx)(u.ZP,{children:(0,b.jsxs)(u.ZP.Item,{children:[(0,b.jsx)(l.ZT,{color:"dark-main",size:"sm",weight:"bold",children:t}),(0,b.jsx)(l.ZT,{color:"dark-main",size:"sm",weight:"bold",className:"ml-10",children:e[t]})]})}),(0,b.jsx)(m.Z,{className:"my-0"})]},n)}))})}},{title:"Date Added",className:"text-center",dataIndex:"addedDate",key:"addedDate",render:function(e,t){return(0,b.jsx)(l.ZT,{color:"dark-main",size:"sm",weight:"bold",children:(0,v.Ny)(e,"dd-mm-yy")})}},{title:"Actions",dataIndex:"actions",key:"actions",render:function(e,t){return(0,b.jsx)(C,{record:t,reloadTableData:a})}}];return(0,b.jsx)("div",{children:(0,b.jsx)(f.Z,{sticky:!0,dataSource:t,columns:r,pagination:!1,scroll:{x:991},loading:n,rowKey:function(e){return"saved-searches-view-".concat(e.id)}})})}var N=[{text:"Home",isLink:!0,path:"/"},{isLink:!1,text:"Saved Searches"}],k=function(){var e=(0,c.useState)({loading:!1,data:[]}),t=(0,i.Z)(e,2),n=t[0],d=t[1],u=(0,c.useMemo)((function(){return new y}),[]),m=(0,c.useCallback)((0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d((0,r.Z)((0,r.Z)({},n),{},{loading:!0})),u.getAllRecords().then((function(e){var t;d({data:null===(t=e.data)||void 0===t?void 0:t.data,loading:!1})})).catch((function(e){d({loading:!1})}));case 2:case"end":return e.stop()}}),e)}))),[u]);return(0,c.useEffect)((function(){m()}),[]),(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.mr,{heading:"Saved Searches",breadCrumbData:N}),(0,b.jsx)("div",{className:"d-flex overflow-hidden",children:(0,b.jsx)("div",{className:"d-flex flex-column w-100",children:(0,b.jsx)("div",{className:"overflow-auto",children:(0,b.jsx)(j,{tableData:null===n||void 0===n?void 0:n.data,tableLoading:n.loading,reloadTableData:m})})})})]})}},42346:function(e,t,n){n.d(t,{ZM:function(){return k},ZP:function(){return w}});var a=n(93433),r=n(87462),o=n(4942),i=n(29439),c=n(71002),l=n(46123),s=n.n(l),d=n(47313),u=n(74714),m=n(82926),f=n(84268),p=n(99178),v=n(49958),h=n(72652),g=n(82324),x=n(26297),Z=n(48138),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=function(e,t){var n=e.prefixCls,a=e.children,i=e.actions,c=e.extra,l=e.className,m=e.colStyle,f=y(e,["prefixCls","children","actions","extra","className","colStyle"]),p=(0,d.useContext)(k),v=p.grid,h=p.itemLayout,g=(0,d.useContext)(u.E_).getPrefixCls,b=g("list",n),C=i&&i.length>0&&d.createElement("ul",{className:"".concat(b,"-item-action"),key:"actions"},i.map((function(e,t){return d.createElement("li",{key:"".concat(b,"-item-action-").concat(t)},e,t!==i.length-1&&d.createElement("em",{className:"".concat(b,"-item-action-split")}))}))),j=v?"div":"li",N=d.createElement(j,(0,r.Z)({},f,v?{}:{ref:t},{className:s()("".concat(b,"-item"),(0,o.Z)({},"".concat(b,"-item-no-flex"),!("vertical"===h?c:!function(){var e;return d.Children.forEach(a,(function(t){"string"===typeof t&&(e=!0)})),e&&d.Children.count(a)>1}())),l)}),"vertical"===h&&c?[d.createElement("div",{className:"".concat(b,"-item-main"),key:"content"},a,C),d.createElement("div",{className:"".concat(b,"-item-extra"),key:"extra"},c)]:[a,C,(0,Z.Tm)(c,{key:"extra"})]);return v?d.createElement(x.Z,{ref:t,flex:1,style:m},N):N},C=(0,d.forwardRef)(b);C.Meta=function(e){var t=e.prefixCls,n=e.className,a=e.avatar,o=e.title,i=e.description,c=y(e,["prefixCls","className","avatar","title","description"]),l=(0,(0,d.useContext)(u.E_).getPrefixCls)("list",t),m=s()("".concat(l,"-item-meta"),n),f=d.createElement("div",{className:"".concat(l,"-item-meta-content")},o&&d.createElement("h4",{className:"".concat(l,"-item-meta-title")},o),i&&d.createElement("div",{className:"".concat(l,"-item-meta-description")},i));return d.createElement("div",(0,r.Z)({},c,{className:m}),a&&d.createElement("div",{className:"".concat(l,"-item-meta-avatar")},a),(o||i)&&f)};var j=C,N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},k=d.createContext({});k.Consumer;function E(e){var t,n=e.pagination,l=void 0!==n&&n,x=e.prefixCls,Z=e.bordered,y=void 0!==Z&&Z,b=e.split,C=void 0===b||b,j=e.className,E=e.children,w=e.itemLayout,S=e.loadMore,P=e.grid,O=e.dataSource,z=void 0===O?[]:O,L=e.size,T=e.header,I=e.footer,D=e.loading,M=void 0!==D&&D,R=e.rowKey,_=e.renderItem,A=e.locale,F=N(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),K=l&&"object"===(0,c.Z)(l)?l:{},B=d.useState(K.defaultCurrent||1),H=(0,i.Z)(B,2),J=H[0],W=H[1],Y=d.useState(K.defaultPageSize||10),q=(0,i.Z)(Y,2),G=q[0],Q=q[1],U=d.useContext(u.E_),V=U.getPrefixCls,X=U.renderEmpty,$=U.direction,ee=function(e){return function(t,n){W(t),Q(n),l&&l[e]&&l[e](t,n)}},te=ee("onChange"),ne=ee("onShowSizeChange"),ae=V("list",x),re=M;"boolean"===typeof re&&(re={spinning:re});var oe=re&&re.spinning,ie="";switch(L){case"large":ie="lg";break;case"small":ie="sm"}var ce=s()(ae,(t={},(0,o.Z)(t,"".concat(ae,"-vertical"),"vertical"===w),(0,o.Z)(t,"".concat(ae,"-").concat(ie),ie),(0,o.Z)(t,"".concat(ae,"-split"),C),(0,o.Z)(t,"".concat(ae,"-bordered"),y),(0,o.Z)(t,"".concat(ae,"-loading"),oe),(0,o.Z)(t,"".concat(ae,"-grid"),!!P),(0,o.Z)(t,"".concat(ae,"-something-after-last-item"),!!(S||l||I)),(0,o.Z)(t,"".concat(ae,"-rtl"),"rtl"===$),t),j),le=(0,r.Z)((0,r.Z)((0,r.Z)({},{current:1,total:0}),{total:z.length,current:J,pageSize:G}),l||{}),se=Math.ceil(le.total/le.pageSize);le.current>se&&(le.current=se);var de=l?d.createElement("div",{className:"".concat(ae,"-pagination")},d.createElement(v.Z,(0,r.Z)({},le,{onChange:te,onShowSizeChange:ne}))):null,ue=(0,a.Z)(z);l&&z.length>(le.current-1)*le.pageSize&&(ue=(0,a.Z)(z).splice((le.current-1)*le.pageSize,le.pageSize));var me=Object.keys(P||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),fe=(0,p.Z)(me),pe=d.useMemo((function(){for(var e=0;e<g.c4.length;e+=1){var t=g.c4[e];if(fe[t])return t}}),[fe]),ve=d.useMemo((function(){if(P){var e=pe&&P[pe]?P[pe]:P.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===P||void 0===P?void 0:P.column,pe]),he=oe&&d.createElement("div",{style:{minHeight:53}});if(ue.length>0){var ge=ue.map((function(e,t){return function(e,t){return _?((n="function"===typeof R?R(e):R?e[R]:e.key)||(n="list-item-".concat(t)),d.createElement(d.Fragment,{key:n},_(e,t))):null;var n}(e,t)}));he=P?d.createElement(f.Z,{gutter:P.gutter},d.Children.map(ge,(function(e){return d.createElement("div",{key:null===e||void 0===e?void 0:e.key,style:ve},e)}))):d.createElement("ul",{className:"".concat(ae,"-items")},ge)}else E||oe||(he=function(e,t){return d.createElement("div",{className:"".concat(e,"-empty-text")},A&&A.emptyText||t("List"))}(ae,X||m.Z));var xe=le.position||"bottom",Ze=d.useMemo((function(){return{grid:P,itemLayout:w}}),[JSON.stringify(P),w]);return d.createElement(k.Provider,{value:Ze},d.createElement("div",(0,r.Z)({className:ce},F),("top"===xe||"both"===xe)&&de,T&&d.createElement("div",{className:"".concat(ae,"-header")},T),d.createElement(h.Z,(0,r.Z)({},re),he,E),I&&d.createElement("div",{className:"".concat(ae,"-footer")},I),S||("bottom"===xe||"both"===xe)&&de))}E.Item=j;var w=E}}]);