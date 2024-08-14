"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[4190],{4190:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var a=n(93433),r=n(29439),s=n(47313),i=n(85554),o=n(74165),d=n(1413),l=n(15861),u=n(49075),c=n(4059),m=n(40169),p=function(e){return function(){var t=(0,l.Z)((0,o.Z)().mark((function t(n,a){var r,s,i,l,p,f;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().systemModulesReducer,s=r.systemModulesData,i=r.singleSystemModuleData,l=e?i:s,p=e?c.Nz:c.Cg,f=e?"system-modules/".concat(e):"system-modules",n({type:p,payload:(0,d.Z)((0,d.Z)({},l),{},{loading:!0})}),t.prev=5,t.next=8,u.Z.get(f).then((function(e){var t;n({type:p,payload:(0,d.Z)((0,d.Z)({},l),{},{loading:!1,data:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})})})).catch((function(e){var t=(0,m.P)(e);n({type:p,payload:(0,d.Z)((0,d.Z)({},l),{},{loading:!1,error:!0,errorData:t})})}));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),n({type:p,payload:(0,d.Z)((0,d.Z)({},l),{},{loading:!1,errorData:t.t0})});case 13:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e,n){return t.apply(this,arguments)}}()},f=function(e,t,n){return function(){var a=(0,l.Z)((0,o.Z)().mark((function a(r,s){var i;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=s().systemModulesReducer.editSystemModuleData,r({type:c.YI,payload:(0,d.Z)((0,d.Z)({},i),{},{loading:!0})}),a.prev=2,a.next=5,u.Z.patch("system-modules/".concat(null===t||void 0===t?void 0:t.id),e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t;r({type:c.YI,payload:(0,d.Z)((0,d.Z)({},i),{},{loading:!1,data:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})}),n&&n()})).catch((function(e){var t=(0,m.P)(e);r({type:c.YI,payload:(0,d.Z)((0,d.Z)({},i),{},{loading:!1,errorData:t})})}));case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),r({type:c.YI,payload:(0,d.Z)((0,d.Z)({},i),{},{loading:!1,errorData:a.t0})});case 10:case"end":return a.stop()}}),a,null,[[2,7]])})));return function(e,t){return a.apply(this,arguments)}}()},h=n(7532),y=n(25019),v=n(77278),x=n(82626),Z="styles_form__DwBL0",g="styles_footer__ubyjS",j=n(49355),M=n(46417),b=function(e){var t=e.openModal,n=e.onCancel,a=e.onFinish,o=e.buttonLoading,l=e.initialValues,u=e.type,c=(0,i.I0)(),m=y.Z.useForm(),f=(0,r.Z)(m,1)[0],h=(0,i.v9)((function(e){return e.systemModulesReducer})),b=h.addSystemModuleData,k=h.singleSystemModuleData,w=h.editSystemModuleData,S="new"===u?b.errorData:w.errorData;return(0,s.useEffect)((function(){var e;"edit"===u?f.setFieldsValue((0,d.Z)((0,d.Z)({},k.data),{},{isMenuItem:null===(e=k.data)||void 0===e?void 0:e.isMenuItem})):f.resetFields()}),[u,f,k]),(0,s.useEffect)((function(){"edit"===u&&c(p(l.id))}),[c,l.id,u]),(0,M.jsx)(x.P0,{visible:t,onCancel:n,titleText:"edit"===u?"Edit System Module":"Add System Module",showFooter:!1,children:k.loading?(0,M.jsx)(j.Z,{items:4}):(0,M.jsxs)(y.Z,{className:Z,onFinish:a,form:f,children:[null!==S&&void 0!==S&&S.statusCode?(0,M.jsx)(x.EQ,{description:null===S||void 0===S?void 0:S.message,isClosable:!0}):null,(0,M.jsxs)("div",{children:[(0,M.jsx)(y.Z.Item,{name:"name",rules:[{required:!0,message:"Please add system module name"}],children:(0,M.jsx)(x.t7,{size:"w100",label:"Name",asterisk:!0,type:"text"})}),(0,M.jsx)(y.Z.Item,{name:"slug",rules:[{required:!0,message:"Please add a slug"}],children:(0,M.jsx)(x.t7,{size:"w100",label:"Slug",asterisk:!0,type:"text"})})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(y.Z.Item,{name:"url",rules:[{required:!1,message:"Please add a url"}],children:(0,M.jsx)(x.t7,{size:"w100",label:"URL",type:"text"})}),(0,M.jsx)(y.Z.Item,{name:"order",rules:[{required:!0,message:"Please add order"}],children:(0,M.jsx)(x.t7,{size:"w100",label:"Order",asterisk:!0,type:"number"})})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(y.Z.Item,{name:"description",rules:[{required:!1,message:"Please add a description"}],children:(0,M.jsx)(x.t7,{size:"w100",label:"Description",type:"text"})}),(0,M.jsx)(y.Z.Item,{name:"isMenuItem",children:(0,M.jsx)(x.AP,{label:"Menu Item",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]})})]}),(0,M.jsx)("div",{children:(0,M.jsx)(y.Z.Item,{name:"icon",children:(0,M.jsxs)(v.Z.Dragger,(0,d.Z)((0,d.Z)({},{name:"file",listType:"picture",multiple:!1,beforeUpload:function(){return!1},maxCount:1}),{},{children:[(0,M.jsx)("p",{className:"ant-upload-drag-icon",children:(0,M.jsx)("img",{src:"/images/picture.svg",alt:""})}),(0,M.jsx)("p",{className:"ant-upload-hint",children:"Drag image here or click to upload"})]}))})}),(0,M.jsxs)("div",{className:g,children:[(0,M.jsx)(x.op,{size:"normal",fontSize:"sm",onClick:n,type:"plain",children:"Cancel"}),(0,M.jsx)(x.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:o,children:"Submit"})]})]})})},k=n(2135),w=n(55291),S=n(5900),P=n(21680),I=n(86345),D=n(41586),C=n(98676),R=n(3109),E=n(17327),N=n(48897),z=n(50753),A=n(37261),L=function(e){var t=e.record,n=e.openModal,a=e.permissions.deleteSystemModules,r=(0,i.I0)(),f=(0,s.useCallback)((function(e){!0===a?r(function(e,t){return function(){var n=(0,l.Z)((0,o.Z)().mark((function n(a,r){var s;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=r().systemModulesReducer.deleteSystemModuleData,a({type:c.cX,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!0})}),n.prev=2,n.next=5,u.Z.delete("system-modules/".concat(e)).then((function(e){var n;a({type:c.cX,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,data:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data})}),t&&t()})).catch((function(e){var t=(0,m.P)(e);a({type:c.cX,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,errorData:t})})}));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),a({type:c.cX,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,errorData:n.t0})});case 10:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(e,t){return n.apply(this,arguments)}}()}(e,(function(){return r(p())}))):w.ZP.error("You don't have permission to delete this record, please contact your admin.")}),[r]);return(0,M.jsxs)("div",{className:E.Z.actions,children:[(0,M.jsx)("span",{onClick:function(){return n(t)},children:(0,M.jsx)("img",{src:"/images/editicon.svg",alt:""})}),(0,M.jsx)(S.Z,{placement:"top",title:"Are you sure?",onConfirm:function(){return f(t.id)},okText:"Yes",cancelText:"No",children:(0,M.jsx)(C.Z,{className:E.Z.bg__red})})]})};function T(e){var t=e.tableData,n=e.tableLoading,a=e.openModal,d=(0,i.v9)((function(e){return e.usersReducer})).userPermissions,u=d.updateSystemModules,c=d.readPermissions,m=(0,i.I0)(),h=(0,s.useMemo)((function(){return new z.z}),[]),y=(0,i.v9)((function(e){return e.systemModulesReducer})).editSystemModuleData,v=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==u){e.next=7;break}return(a=new FormData).append("visibility",t),e.next=5,h.updateRecord(a,n).then((function(){w.ZP.success("Visibility updated successfully")})).catch((function(e){var t,n;w.ZP.error(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)}));case 5:e.next=8;break;case 7:w.ZP.error("You don't have permission to update this record, please contact your admin.");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,t,n){return n+1},width:"60px"},{title:"Icon",dataIndex:"icon",key:"icon",width:"80px",render:function(e){return e?(0,M.jsx)(P.Z,{width:20,height:20,src:"".concat(N.lj).concat(e),preview:!1,rootClassName:"object-fit-contain"}):(0,M.jsx)(M.Fragment,{})}},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(R.Z,{color:"dark-main",size:"sm",weight:"bold",children:e}),(0,M.jsxs)("p",{className:"color-light-800 font-size-sm",children:[t.slug,t.url?(0,M.jsx)(k.rU,{to:"".concat(t.url),className:"ml-2",children:(0,M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"15px",width:"15px",children:(0,M.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})}):""]})]})}},{title:"Description",dataIndex:"description",key:"description",render:function(e){return(0,M.jsx)(R.Z,{color:"dark-sub",size:"sm",children:e})}},{title:"Permissions",dataIndex:"Permissions",key:"Permissions",render:function(e){return(0,M.jsx)("div",{children:(0,M.jsx)("ul",{className:"pa-0 ma-0",children:null===e||void 0===e?void 0:e.map((function(e){return(0,M.jsx)("li",{className:"pa-0 ma-0 font-size-xs",children:e.name})}))})})}},{title:"Manage Permission",key:"managePermission",render:function(e,t){return(0,M.jsx)(M.Fragment,{children:!0===c?(0,M.jsx)("a",{href:"/siteSettings/system-modules/permission?moduleId=".concat(t.id),target:"_blank",rel:"noreferrer",children:"Manage Permissions"}):null})}},{title:"Visibility",key:"visibility",render:function(e,t){return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(x.AP,{options:Object.entries(A.R).map((function(e){var t=(0,r.Z)(e,2);return{label:t[0],value:t[1]}})),defaultValue:t.visibility,onChange:function(e){return v(e,t.id)},disabled:!1===u})})}},{title:"Menu Item",dataIndex:"isMenuItem",width:"100px",key:"isMenuItem",render:function(e,t){return(0,M.jsx)(I.Z,{checked:e,onChange:function(e){return function(e,t){!0===u?m(f({isMenuItem:!!e},t,(function(){m(p())}))):w.ZP.error("You don't have permission to update this record, please contact your admin.")}(e,t)},loading:y.loading})}},{title:"Actions",dataIndex:"actions",key:"actions",width:"140px",render:function(e,t){return(0,M.jsx)(L,{record:t,openModal:a,permissions:d})}}];return(0,M.jsx)("div",{className:E.Z.antdTableWrapper,children:(0,M.jsx)(D.Z,{sticky:!0,dataSource:t,columns:Z,pagination:!1,scroll:{x:991},loading:n,rowKey:function(e){return"system-module-".concat(e.id)}})})}var F=n(42623),Y=function(e){return e.CREATE="createSystemModules",e.UPDATE="updateSystemModules",e.DELETE="deleteSystemModules",e.READ="readSystemModules",e}({}),_=n(18515),O=n(44857),V=n(3798),q=[{text:"Home",isLink:!0,path:"/"},{isLink:!0,text:"Site Settings",path:"/siteSettings"},{isLink:!1,text:"System Modules"}];var U=function(){var e=(0,V.aY)(Y),t=(0,i.v9)((function(e){return e.usersReducer})).userPermissions,n=t.readSystemModules,y=t.createSystemModules,v=t.updateSystemModules,Z=(0,i.I0)(),g=(0,s.useState)(!1),j=(0,r.Z)(g,2),k=j[0],S=j[1],P=(0,s.useState)("new"),I=(0,r.Z)(P,2),D=I[0],C=I[1],R=(0,s.useState)(""),E=(0,r.Z)(R,2),N=E[0],z=E[1],L=(0,F.N)(N,500),U=(0,s.useMemo)((function(){return{id:0,name:"",slug:"",icon:"",isMenuItem:!0,order:0,url:"",description:"",visibility:A.R.Organization}}),[]),B=(0,s.useState)(U),X=(0,r.Z)(B,2),H=X[0],W=X[1],K=(0,i.v9)((function(e){return e.systemModulesReducer})),G=K.systemModulesData,Q=K.addSystemModuleData,$=K.editSystemModuleData,J=(0,s.useState)(),ee=(0,r.Z)(J,2),te=ee[0],ne=ee[1];(0,s.useEffect)((function(){Z(p())}),[Z]);var ae=(0,s.useCallback)((function(){!1!==y?(C("new"),S(!k),W(U)):w.ZP.error("You don't have permission to create new record")}),[k,U]),re=(0,s.useCallback)((function(e){!1!==v?(W(e),C("edit"),S(!k)):w.ZP.error("You don't have permission to update this record")}),[k]),se=(0,s.useCallback)((function(e){var t,n,a=new FormData,r=["icon"];switch(Object.entries(e).forEach((function(e){r.includes(e[0])||a.append(e[0],e[1])})),e.icon&&"string"!==typeof e.icon&&a.append("icon",e.icon.fileList[0].originFileObj),D){case"new":!0===y?Z((t=a,n=function(){Z(p()),ae()},function(){var e=(0,l.Z)((0,o.Z)().mark((function e(a,r){var s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r().systemModulesReducer.addSystemModuleData,a({type:c.dl,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!0})}),e.prev=2,e.next=5,u.Z.post("system-modules",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t;a({type:c.dl,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,data:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data})}),n&&n()})).catch((function(e){var t=(0,m.P)(e);a({type:c.dl,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,errorData:t})}),setTimeout((function(){a({type:c.dl,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,errorData:{}})})}),5e3)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),a({type:c.dl,payload:(0,d.Z)((0,d.Z)({},s),{},{loading:!1,errorData:e.t0})});case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t,n){return e.apply(this,arguments)}}())):w.ZP.error("You don't have permission to create new system module");break;case"edit":!0===v?Z(f(a,H,(function(){Z(p()),ae()}))):w.ZP.error("You don't have permission to update this system module")}}),[D,Z,ae,H]),ie=(0,s.useCallback)((function(){if(L){var e=G.data.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}));ne(e)}else ne(void 0)}),[L,null===G||void 0===G?void 0:G.data]);return(0,s.useEffect)((function(){ie()}),[ie]),(0,M.jsxs)(h.default,{permissionSlug:[].concat((0,a.Z)(e),[O.M.READ]),children:[(0,M.jsx)(x.mr,{heading:"System Modules",buttonText:"Add New Module",onButtonClick:ae,breadCrumbData:q,showAdd:!0===y,filters:!0===n?(0,M.jsx)("div",{children:(0,M.jsx)("div",{children:(0,M.jsx)(x.t7,{placeHolder:"Search...",icon:(0,M.jsx)("img",{src:"/images/searchIcon.svg",alt:"Search Icon"}),size:"w100",className:"py-1",value:N,onChange:function(e){var t=e.currentTarget.value;z(t)}})})}):null}),!0===n&&(0,M.jsx)(T,{tableData:te||G.data,tableLoading:G.loading,openModal:re}),!1===n&&(0,M.jsx)(_.a$,{mainMessage:"You don't have permission to view this data"}),(0,M.jsx)(b,{initialValues:H,type:D,onFinish:se,onCancel:ae,openModal:k,buttonLoading:Q.loading||$.loading})]})}},44857:function(e,t,n){n.d(t,{M:function(){return a}});var a=function(e){return e.CREATE="createPermissions",e.UPDATE="updatePermissions",e.DELETE="deletePermissions",e.READ="readPermissions",e.GRANT="grantPrivilegesToRole",e.REVOKE="revokePrivilegesFromRole",e.READ_ROLE_PERMISSIONS="readRolePermissions",e.VIEW_PERMISSIONS_LIST="viewPermissonsList",e}({})},50753:function(e,t,n){n.d(t,{z:function(){return o}});var a=n(43144),r=n(15671),s=n(49075),i=n(3135),o=(0,a.Z)((function e(){var t=this;(0,r.Z)(this,e),this.endPoint="system-modules",this.getAllRecords=function(){return s.Z.get(t.endPoint)},this.getRecordById=function(e){return s.Z.get("".concat(t.endPoint,"/").concat(e))},this.deleteRecord=function(e){return s.Z.delete("".concat(t.endPoint,"/").concat(e))},this.createRecord=function(e){return s.Z.post(t.endPoint+"/",e,{headers:i.C})},this.updateRecord=function(e,n){return s.Z.patch("".concat(t.endPoint,"/").concat(n),e,{headers:i.C})}}))},37261:function(e,t,n){n.d(t,{R:function(){return a}});var a=function(e){return e.Organization="organization",e.System="system",e}({})}}]);