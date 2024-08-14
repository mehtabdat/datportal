"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[9790],{70815:function(e,n,t){t.d(n,{r:function(){return m}});var o=t(1413),i=t(29439),r=t(45987),a=t(55291),s=t(86345),d=t(47313),l=t(40169),c=t(46417),u=["onChange","checked","recordId","allowChange"],m=function(e){var n=e.onChange,t=e.checked,m=e.recordId,h=e.allowChange,f=void 0===h||h,p=(0,r.Z)(e,u),Z=(0,d.useState)({loading:!1,checked:!1}),v=(0,i.Z)(Z,2),g=v[0],x=v[1];return(0,d.useEffect)((function(){x((0,o.Z)((0,o.Z)({},g),{},{checked:t}))}),[t]),(0,c.jsx)(s.Z,{checked:g.checked,onChange:function(e){!0===f?(x((0,o.Z)((0,o.Z)({},g),{},{loading:!0})),n(e,m,p).then((function(n){x((0,o.Z)((0,o.Z)({},g),{},{checked:e,loading:!1})),a.ZP.success(n.data.message)})).catch((function(e){x((0,o.Z)((0,o.Z)({},g),{},{loading:!1}));var n=(0,l.P)(e);"string"===typeof n.message?a.ZP.error(n.message):a.ZP.error("Something went wrong")}))):a.ZP.error("You don't have permission to change this record, please contact your admin.")},loading:g.loading})}},9790:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var o=t(1413),i=t(29439),r=t(47313),a=t(7532),s=t(25019),d=t(55291),l=t(14254),c=t(82626),u=t(17327),m=t(49355),h=t(3798),f=t(46646),p=t(40169),Z=t(99420),v=t(46417),g=function(e){var n,t=e.openModal,a=e.onCancel,g=e.type,x=e.record,b=e.reloadTableData,j=e.permissions,P=j.createRole,y=j.updateRole,C=s.Z.useForm(),k=(0,i.Z)(C,1)[0],w=(0,r.useMemo)((function(){return new Z.U}),[]),R=(0,r.useState)(),I=(0,i.Z)(R,2),D=I[0],S=I[1],N=(0,r.useState)([]),M=(0,i.Z)(N,2),E=M[0],T=M[1],L=function(e){var n=(0,p.P)(e);if("string"==typeof n.message)S((0,o.Z)((0,o.Z)({},D),{},{error:n.message}));else{var t=(0,f.O)(n.message,[]);k.setFields(t),S((0,o.Z)((0,o.Z)({},D),{},{error:""}))}},z=(0,r.useCallback)((function(){w.getRecordById(x).then((function(e){e.data&&e.data.data&&(k.setFieldsValue((0,o.Z)((0,o.Z)({},e.data.data),{},{isPublished:e.data.data.isPublished,level:e.data.data.level})),S((0,o.Z)((0,o.Z)({},e.data),{},{loading:!1})))})).catch((function(e){L(e)}))}),[k,x,w]),F=(0,r.useCallback)((function(){"edit"!==g&&"seo"!==g&&w.getAllRecords().then((function(e){var n,t;e.data&&null!==(n=e.data)&&void 0!==n&&n.data&&T(null===(t=e.data)||void 0===t?void 0:t.data)})).catch((function(e){L(e)}))}),[w,g]);(0,r.useEffect)((function(){"edit"===g?(S({loading:!0}),z()):(k.resetFields(),F())}),[t,g,k,z,F]);return(0,v.jsx)(c.P0,{visible:t,closable:!0,onCancel:a,titleText:"edit"===g?"Edit Role":"Add New Role",showFooter:!1,children:null!==D&&void 0!==D&&D.loading?(0,v.jsx)(m.Z,{items:10}):(0,v.jsxs)(s.Z,{className:u.Z.form,onFinish:function(e){switch(S((0,o.Z)((0,o.Z)({},D),{},{buttonLoading:!0})),g){case"edit":var n;if(!0===y)w.updateRecord(e,null===D||void 0===D||null===(n=D.data)||void 0===n?void 0:n.id).then((function(e){b(),a(),S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){L(e),S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))}));else S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})})),d.ZP.error("You don't have permission to update this role");break;case"new":!0===P?w.createRecord(e).then((function(e){b(),a(),S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){L(e),S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})):(S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})})),d.ZP.error("You don't have permission to create new role"))}},form:k,children:[(null===D||void 0===D?void 0:D.error)&&(0,v.jsx)(c.EQ,{description:null===D||void 0===D?void 0:D.error,isClosable:!0,onClose:function(){S((0,o.Z)((0,o.Z)({},D),{},{error:""}))}}),(0,v.jsxs)("div",{children:[(0,v.jsx)(s.Z.Item,{name:"title",rules:[{required:!0,message:"Please add a title"}],children:(0,v.jsx)(c.t7,{size:"w100",label:"Title",asterisk:!0,type:"text"})}),(0,v.jsx)(s.Z.Item,{name:"slug",rules:[{required:!0,message:"Please add a slug"}],children:(0,v.jsx)(c.t7,{onChange:function(e){var n=e.target,t=(0,h.V3)(n.value);k.setFieldsValue({slug:t})},size:"w100",label:"Slug",asterisk:!0,type:"text",disabled:"ORG-ADMIN"===k.getFieldValue("slug")||"SUPER-ADMIN"===k.getFieldValue("slug")})})]}),(0,v.jsx)("div",{children:(0,v.jsx)(s.Z.Item,{name:"isPublished",children:(0,v.jsx)(c.AP,{label:"Published",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]})})}),"new"===g&&(0,v.jsx)("div",{children:(0,v.jsx)(s.Z.Item,{name:"copyRoleId",children:(0,v.jsx)(c.AP,{label:"Copy Permissions From",placeholder:"Select a role to copy permissions from",options:null===E||void 0===E?void 0:E.map((function(e){return{label:e.title,value:e.id}}))})})}),(0,v.jsxs)(s.Z.Item,{name:"level",children:[(0,v.jsx)("span",{className:"font-size-sm",children:"Level"}),(0,v.jsx)(l.Z,{defaultValue:k.getFieldValue("level"),onChange:function(e){k.setFieldValue("level",e)},style:{width:"100%",borderRadius:"0.25rem",border:"2px solid var(--color-border)"},type:"number"})]}),(0,v.jsx)("div",{children:(0,v.jsx)(s.Z.Item,{name:"description",children:(0,v.jsx)(c.t7,{size:"w100",label:"Description",type:"textArea",defaultValue:null===D||void 0===D||null===(n=D.data)||void 0===n?void 0:n.description})})}),(0,v.jsxs)("div",{className:u.Z.footer,children:[(0,v.jsx)(c.op,{size:"normal",fontSize:"sm",onClick:a,type:"plain",children:"Cancel"}),(0,v.jsx)(c.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===D||void 0===D?void 0:D.buttonLoading,children:"Submit"})]})]})})},x=t(5900),b=t(41586),j=t(98676),P=t(3109),y=t(70815),C=t(98505),k=t(32147),w=t(2135),R=t(85554),I=t(27869),D=function(e){var n=e.record,t=e.onEditIconClick,a=e.reloadTableData,s=e.permissions.deleteRole,l=(0,r.useState)({confirmLoading:!1,openPopConfirm:!1}),c=(0,i.Z)(l,2),m=c[0],h=c[1],f=(0,r.useMemo)((function(){return new Z.U}),[]);return(0,v.jsxs)("div",{className:u.Z.actions,children:[(0,v.jsx)("span",{onClick:function(){return t(n)},children:(0,v.jsx)("img",{src:"/images/editicon.svg",alt:""})}),(0,v.jsx)(x.Z,{open:m.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:function(){if(h((0,o.Z)((0,o.Z)({},m),{},{confirmLoading:!0})),!1===s)return d.ZP.error("You don't have permission to delete this record, please contact your admin."),void h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1}));f.deleteRecord(n.id).then((function(e){h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1,confirmLoading:!1})),a()})).catch((function(e){h((0,o.Z)((0,o.Z)({},m),{},{confirmLoading:!1}))}))},onCancel:function(){return h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1}))},okButtonProps:{loading:m.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:function(e){e||h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1}))},children:(0,v.jsx)(j.Z,{className:u.Z.bg__red,onClick:function(){h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!0}))}})})]})};function S(e){var n=e.tableData,t=e.tableLoading,i=e.onEditIconClick,r=e.reloadTableData,a=e.meta,s=e.filters,d=e.onManageDashboardElementsClick,l=(0,R.v9)((function(e){return e.usersReducer})).userPermissions,c=l.updateRole,m=l.deleteRole,h=l.grantPrivilegesToRole,f=l.readRolePermissions,p=new Z.U,g=function(e,n){return p.updateRecord({isPublished:e},n)},x=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,n,t){return t+1},width:"5%"},{title:"Title",dataIndex:"title",key:"title",render:function(e,n){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P.Z,{color:"dark-main",size:"sm",children:n.title}),(0,v.jsx)(P.Z,{color:"dark-sub",size:"xs",children:n.description})]})}},{title:"Slug",dataIndex:"slug",key:"slug",render:function(e,n){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(P.Z,{color:"dark-main",size:"sm",children:e})})}},{title:"Dashboard",dataIndex:"DashboardElements",key:"DashboardElements",render:function(e,n){var t;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(I.Z,{ellipsis:{rows:1,expandable:!1},className:"my-0 color-dark-sub",children:(0,v.jsx)("ul",{style:{listStyle:"none",padding:0},children:null===(t=n.DashboardElements)||void 0===t?void 0:t.map((function(e){var n;return(0,v.jsx)("li",{className:"font-size-xs ml-0",children:null===e||void 0===e||null===(n=e.DashboardElement)||void 0===n?void 0:n.title})}))})}),(0,v.jsx)("p",{className:"color-dark-main font-weight-bold font-size-sm mb-0 ml-1 cursor-pointer",onClick:function(){return d(n)},children:"Manage Dashboard"})]})}},{title:"Date Added",dataIndex:"addedDate",key:"addedDate",render:function(e,n){return(0,v.jsx)(P.Z,{color:"dark-main",size:"sm",children:(0,C.Ny)(e,"dd M,yy")})}}];return!0===c&&x.push({title:"Published",dataIndex:"isPublished",key:"isPublished",render:function(e,n){return(0,v.jsx)(y.r,{checked:n.isPublished,onChange:g,recordId:n.id,allowChange:c})}}),(h||f)&&x.push({title:"Permissions",dataIndex:"permissions",key:"permissions",render:function(e,n){return(0,v.jsxs)("div",{children:[!0===h&&(0,v.jsxs)(w.rU,{to:"/siteSettings/roles/permissions?roleId=".concat(n.id),className:"d-flex",children:[(0,v.jsx)(k.iK,{className:"my-auto"}),(0,v.jsx)(P.Z,{color:"dark-sub",size:"sm",className:"ml-2",children:"Manage Permissions"})]}),!0===f&&(0,v.jsxs)(w.rU,{to:"/siteSettings/roles/permissions/view?roleId=".concat(n.id),className:"d-flex mt-2",children:[(0,v.jsx)(k.ON,{className:"my-auto"}),(0,v.jsx)(P.Z,{color:"dark-sub",size:"sm",className:"ml-2",children:"View Permissions"})]})]})}}),!0!==c&&!0!==m||x.push({title:"Actions",dataIndex:"actions",key:"actions",render:function(e,n){return(0,v.jsx)(D,{record:n,onEditIconClick:i,reloadTableData:r,permissions:l})}}),(0,v.jsx)("div",{className:u.Z.antdTableWrapper,children:(0,v.jsx)(b.Z,{sticky:!0,dataSource:n,columns:x,pagination:{current:null===a||void 0===a?void 0:a.page,total:null===a||void 0===a?void 0:a.total,hideOnSinglePage:!0,pageSize:null===a||void 0===a?void 0:a.perPage,onChange:function(e,n){r((0,o.Z)((0,o.Z)({},s),{},{page:e,perPage:n}))}},scroll:{x:991},loading:t,rowKey:function(e){return"site-Role-".concat(e.id)}})})}var N=t(47814),M=t(18515),E=t(29079),T=t(74165),L=t(15861),z=t(7655),F=t(3113),A=t(9985),O=t(14378),V=t(73989),Y=t(79117),_=t(26246),U=t(23860),B="styles_itemWrapper__Tol5p",q=function(e){var n,t,a=e.openModal,l=e.onCancel,u=e.record,h=e.reloadTableData,g=e.recordData,x=e.permissions.createRole,b=s.Z.useForm(),j=(0,i.Z)(b,1)[0],P=(0,r.useMemo)((function(){return new Z.U}),[]),y=(0,r.useMemo)((function(){return new A.o}),[]),C=(0,r.useState)(),k=(0,i.Z)(C,2),w=k[0],R=k[1],I=[];g&&g.DashboardElements&&(null===g||void 0===g||null===(t=g.DashboardElements)||void 0===t||t.map((function(e){var n,t;I.push(null===e||void 0===e||null===(n=e.DashboardElement)||void 0===n||null===(t=n.id)||void 0===t?void 0:t.toString())})));var D=(0,r.useState)(I),S=(0,i.Z)(D,2),N=S[0],M=S[1],E=function(e){var n=(0,p.P)(e);if("string"==typeof n.message)R((0,o.Z)((0,o.Z)({},w),{},{error:n.message}));else{var t=(0,f.O)(n.message,[]);j.setFields(t),R((0,o.Z)((0,o.Z)({},w),{},{error:""}))}},q=(0,r.useCallback)((function(){y.getAllRecords().then((function(e){var n;e.data&&null!==(n=e.data)&&void 0!==n&&n.data&&R((0,o.Z)((0,o.Z)({},e.data),{},{loading:!1}))})).catch((function(e){E(e)}))}),[j,u,P,y]),K=function(e){M(Array.from(new Set(e))),j.setFieldValue("elementIds",e)};(0,r.useEffect)((function(){R({loading:!0}),q()}),[a,j]);var Q=function(){var e=(0,L.Z)((0,T.Z)().mark((function e(n,t){var o,i;return(0,T.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=(o=N).splice(n,1)[0],o.splice(t,0,i),K(o);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),W=function(e){var n=e.index,t=e.label,o=e.moveRow,a="DraggableItem",s=(0,r.useRef)(),d=(0,V.L)({accept:a,collect:function(e){var t=(e.getItem()||{}).index;return t===n?{}:{isOver:e.isOver(),dropClassName:t<n?" drop-over-downward":" drop-over-upward"}},drop:function(e){o(e.index,n)}}),l=(0,i.Z)(d,2),c=l[0],u=c.isOver,m=c.dropClassName,h=l[1],f=(0,Y.c)({type:a,item:{index:n},collect:function(e){return{isDragging:e.isDragging()}}}),p=(0,i.Z)(f,3),Z=(p[0].isDragging,p[1]);return(0,p[2])(h(s)),(0,v.jsxs)("div",{ref:s,className:"".concat(u?m:"")+" "+B,children:[(0,v.jsx)("span",{className:"label",children:t}),-1!==n&&(0,v.jsx)("span",{ref:Z,children:(0,v.jsx)(O.Z,{})})]},t)};return(0,v.jsx)(c.P0,{visible:a,closable:!0,onCancel:l,titleText:"Manage Dashboard Elements",showFooter:!1,children:null!==w&&void 0!==w&&w.loading?(0,v.jsx)(m.Z,{items:10}):(0,v.jsxs)(s.Z,{className:F.Z.form,onFinish:function(e){if(console.log(e.elementIds),e.elementIds)if(x){var n;R((0,o.Z)((0,o.Z)({},w),{},{buttonLoading:!0}));var t=null===e||void 0===e||null===(n=e.elementIds)||void 0===n?void 0:n.map((function(e){return Number(e)}));P.addElements({elementIds:t},u).then((function(e){h(),l(),R((function(e){return(0,o.Z)((0,o.Z)({},e),{},{loading:!1})})),d.ZP.success("Saved Successfully")})).catch((function(e){E(e),R((function(e){return(0,o.Z)((0,o.Z)({},e),{},{loading:!1})}))}));var i=[];I.map((function(e){N.includes(e)||i.push(Number(e))})),(null===i||void 0===i?void 0:i.length)>0&&P.removeElements({elementIds:i},u).catch((function(e){d.ZP.error(e.message)}))}else d.ZP.error("You don't have permission to manage roles, please contact your admin");else d.ZP.success("No changes made"),l()},form:j,children:[(null===w||void 0===w?void 0:w.error)&&(0,v.jsx)(c.EQ,{description:null===w||void 0===w?void 0:w.error,isClosable:!0,onClose:function(){R((0,o.Z)((0,o.Z)({},w),{},{error:""}))}}),(0,v.jsx)("div",{children:(0,v.jsx)(s.Z.Item,{name:"elementIds",rules:[{required:!1}],children:(0,v.jsx)(_.W,{backend:U.PD,children:(0,v.jsx)(z.Z,{dataSource:null===w||void 0===w||null===(n=w.data)||void 0===n?void 0:n.map((function(e,n){var t;return{key:e.id.toString(),title:e.title,description:null===(t=e.title)||void 0===t?void 0:t.toLowerCase()}})),listStyle:{width:250,height:400},showSearch:!0,filterOption:function(e,n){var t;return(null===n||void 0===n||null===(t=n.description)||void 0===t?void 0:t.indexOf(null===e||void 0===e?void 0:e.toLowerCase()))>-1},targetKeys:N,onChange:K,render:function(e){return(0,v.jsx)(W,{index:N.findIndex((function(n){return n===e.key})),label:e.title,moveRow:Q})}})})})}),(0,v.jsxs)("div",{className:F.Z.footer,children:[(0,v.jsx)(c.op,{size:"normal",fontSize:"sm",onClick:l,type:"plain",children:"Cancel"}),(0,v.jsx)(c.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===w||void 0===w?void 0:w.buttonLoading,children:"Save"})]})]})})},K=[{text:"Home",isLink:!0,path:"/"},{isLink:!0,text:"Site Settings",path:"/siteSettings"},{isLink:!1,text:"Roles"}];var Q=function(){var e=(0,h.aY)(N.f);e.push("grantPrivilegesToRole","readRolePermissions");var n=(0,R.v9)((function(e){return e.usersReducer})).userPermissions,t=n.createRole,s=n.readRole,l=n.updateRole,u=(0,r.useState)({editType:"new",recordId:0,openModal:!1}),m=(0,i.Z)(u,2),f=m[0],p=m[1],x=(0,r.useState)({recordId:0,openModal:!1,recordData:{}}),b=(0,i.Z)(x,2),j=b[0],P=b[1],y=new Z.U,C=(0,r.useState)({page:1,perPage:10}),k=(0,i.Z)(C,2),w=k[0],I=(k[1],(0,E.$5)({method:y.getAllRecords,initialQuery:(0,o.Z)({},w)})),D=I.data,T=I.onRefresh,L=(I.setData,I.loading),z=I.meta,F=function(){!1!==t?p((0,o.Z)((0,o.Z)({},f),{},{openModal:!f.openModal,editType:"new"})):d.ZP.error("You don't have permission to create new record")};return(0,v.jsxs)(a.default,{permissionSlug:e,children:[(0,v.jsx)(c.mr,{heading:"Roles",buttonText:"Add New Role",onButtonClick:F,breadCrumbData:K,showAdd:!0===t}),!0===s&&(0,v.jsx)(S,{tableData:D,tableLoading:L,onEditIconClick:function(e){!1!==l?p((0,o.Z)((0,o.Z)({},f),{},{editType:"edit",recordId:e.id,openModal:!0})):d.ZP.error("You don't have permission to update this record")},reloadTableData:T,meta:z,filters:w,onManageDashboardElementsClick:function(e){P((0,o.Z)((0,o.Z)({},j),{},{recordId:e.id,recordData:e,openModal:!0}))}}),!1===s&&(0,v.jsx)(M.a$,{mainMessage:"You don't have permission to view this data"}),f.openModal&&(0,v.jsx)(g,{record:f.recordId,type:f.editType,reloadTableData:T,onCancel:F,openModal:f.openModal,permissions:n}),j.openModal&&(0,v.jsx)(q,{record:j.recordId,recordData:j.recordData,type:"edit",reloadTableData:T,onCancel:function(){return P((0,o.Z)((0,o.Z)({},j),{},{openModal:!1}))},openModal:j.openModal,permissions:n})]})}},9985:function(e,n,t){t.d(n,{o:function(){return a}});var o=t(43144),i=t(15671),r=t(49075),a=(0,o.Z)((function e(){var n=this;(0,i.Z)(this,e),this.endPoint="dashboard-elements",this.getAllRecords=function(e){return r.Z.get(n.endPoint,{params:e})},this.getDashboardContent=function(){return r.Z.get(n.endPoint+"/get-dashboard-content")},this.getRecordById=function(e){return r.Z.get(r._+n.endPoint+"/"+e)},this.deleteRecord=function(e){return r.Z.delete(r._+n.endPoint+"/"+e)},this.createRecord=function(e){return r.Z.post(r._+n.endPoint,e)},this.updateRecord=function(e,t){return r.Z.patch(r._+n.endPoint+"/"+t,e)}}))},99420:function(e,n,t){t.d(n,{U:function(){return a}});var o=t(43144),i=t(15671),r=t(49075),a=(0,o.Z)((function e(){var n=this;(0,i.Z)(this,e),this.endPoint="role",this.getAllRecords=function(e){return r.Z.get(n.endPoint,{params:e})},this.getRecordById=function(e){return r.Z.get("".concat(n.endPoint,"/").concat(e,"?all=true"))},this.deleteRecord=function(e){return r.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return r.Z.post(n.endPoint+"/",e)},this.updateRecord=function(e,t){return r.Z.patch("".concat(n.endPoint,"/").concat(t),e)},this.addElements=function(e,t){return r.Z.post("".concat(n.endPoint,"/addDashboardElement/").concat(t),e)},this.removeElements=function(e,t){return r.Z.post("".concat(n.endPoint,"/removeDashboardElement/").concat(t),e)}}))}}]);