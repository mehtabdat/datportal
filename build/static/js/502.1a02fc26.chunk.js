"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[502],{502:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(1413),d=n(29439),r=n(47313),i=n(7532),o=n(8570),l=n(51579),s=n(41586),c=n(17327),u=n(46417),m=o.Z.Paragraph;function f(e){var t=e.tableData,n=e.tableLoading,a=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,t,n){return n+1},width:"5%"},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){var n,a;return null!==t&&void 0!==t&&t.AddedBy?(0,u.jsx)(o.Z,{color:"dark-main",style:{fontWeight:"bold",color:"var(--color-dark-main)"},children:(null===t||void 0===t||null===(n=t.AddedBy)||void 0===n?void 0:n.firstName)+" "+(null===t||void 0===t||null===(a=t.AddedBy)||void 0===a?void 0:a.lastName)}):""}},{title:"Rating",dataIndex:"rating",key:"rating",render:function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Z,{value:e,disabled:!0})})}},{title:"Comment",dataIndex:"comment",key:"comment",render:function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{ellipsis:{rows:1,expandable:!0,symbol:"more"},style:{color:"var(--color-dark-main)"},children:e})})}}];return(0,u.jsx)("div",{className:c.Z.antdTableWrapper,children:(0,u.jsx)(s.Z,{sticky:!0,dataSource:t,columns:a,scroll:{x:991},loading:n,rowKey:function(e){return"feedback-".concat(e.id)}})})}var k=n(82626),x=n(85554),b=n(18515),v=function(e){return e.READ="readFeedback",e}({}),h=n(98224),p=n(3798),g=[{text:"Home",isLink:!0,path:"/"},{isLink:!0,text:"Site Settings",path:"/siteSettings"},{isLink:!1,text:"Feedback"}];var y=function(){var e=(0,p.aY)(v),t=(0,x.v9)((function(e){return e.usersReducer})).userPermissions.readFeedback,n=(0,r.useState)(!1),o=(0,d.Z)(n,2),l=o[0],s=o[1],c=(0,r.useState)({editType:"new",recordId:0,openModal:!1}),m=(0,d.Z)(c,2),y=m[0],j=m[1],Z=new h.e,w=(0,r.useState)({data:[]}),S=(0,d.Z)(w,2),F=S[0],A=S[1],C=function(){s(!0),A((0,a.Z)((0,a.Z)({},F),{},{loading:!0})),Z.getAllRecords().then((function(e){console.log(e.data,"sads"),A(e),s(!1)})).catch((function(e){s(!1)}))};return(0,r.useEffect)((function(){C()}),[]),(0,u.jsxs)(i.default,{permissionSlug:e,children:[(0,u.jsx)(k.mr,{heading:"Feedback",buttonText:"Add Feedback",onButtonClick:function(){j((0,a.Z)((0,a.Z)({},y),{},{openModal:!y.openModal,editType:"new"}))},breadCrumbData:g}),!0===t&&(0,u.jsx)(f,{tableData:F.data.data,tableLoading:l,onEditIconClick:function(){},reloadTableData:C}),!1===t&&(0,u.jsx)(b.a$,{mainMessage:"You don't have permission to view this data"})]})}}}]);