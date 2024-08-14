"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[8407],{70815:function(e,n,t){t.d(n,{r:function(){return m}});var o=t(1413),i=t(29439),r=t(45987),a=t(55291),s=t(86345),d=t(47313),l=t(40169),c=t(46417),u=["onChange","checked","recordId","allowChange"],m=function(e){var n=e.onChange,t=e.checked,m=e.recordId,h=e.allowChange,f=void 0===h||h,p=(0,r.Z)(e,u),Z=(0,d.useState)({loading:!1,checked:!1}),g=(0,i.Z)(Z,2),x=g[0],v=g[1];return(0,d.useEffect)((function(){v((0,o.Z)((0,o.Z)({},x),{},{checked:t}))}),[t]),(0,c.jsx)(s.Z,{checked:x.checked,onChange:function(e){!0===f?(v((0,o.Z)((0,o.Z)({},x),{},{loading:!0})),n(e,m,p).then((function(n){v((0,o.Z)((0,o.Z)({},x),{},{checked:e,loading:!1})),a.ZP.success(n.data.message)})).catch((function(e){v((0,o.Z)((0,o.Z)({},x),{},{loading:!1}));var n=(0,l.P)(e);"string"===typeof n.message?a.ZP.error(n.message):a.ZP.error("Something went wrong")}))):a.ZP.error("You don't have permission to change this record, please contact your admin.")},loading:x.loading})}},68407:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var o=t(1413),i=t(29439),r=t(47313),a=t(54060),s=t(25019),d=t(55291),l=t(82626),c=t(3113),u=t(49355),m=t(3798),h=t(46646),f=t(40169),p=t(99420),Z={coreSystemLevel:"coreSystemLevel",global:"global",organization:"organization"},g=t(46417),x=function(e){var n,t=e.openModal,a=e.onCancel,x=e.type,v=e.record,b=e.reloadTableData,j=e.permissions,P=j.createRole,y=j.updateRole,k=s.Z.useForm(),C=(0,i.Z)(k,1)[0],R=(0,r.useMemo)((function(){return new p.U}),[]),w=(0,r.useState)(),I=(0,i.Z)(w,2),L=I[0],N=I[1],S=(0,r.useState)([]),T=(0,i.Z)(S,2),D=T[0],z=T[1],A=function(e){var n=(0,f.P)(e);if("string"==typeof n.message)N((0,o.Z)((0,o.Z)({},L),{},{error:n.message}));else{var t=(0,h.O)(n.message,[]);C.setFields(t),N((0,o.Z)((0,o.Z)({},L),{},{error:""}))}},M=(0,r.useCallback)((function(){R.getRecordById(v).then((function(e){e.data&&e.data.data&&(C.setFieldsValue((0,o.Z)((0,o.Z)({},e.data.data),{},{isPublished:e.data.data.isPublished})),N((0,o.Z)((0,o.Z)({},e.data),{},{loading:!1})))})).catch((function(e){A(e)}))}),[C,v,R]),E=(0,r.useCallback)((function(){"edit"!==x&&"seo"!==x&&R.getAllRecords().then((function(e){var n,t;e.data&&null!==(n=e.data)&&void 0!==n&&n.data&&z(null===(t=e.data)||void 0===t?void 0:t.data)})).catch((function(e){A(e)}))}),[R,x]);(0,r.useEffect)((function(){"edit"===x?(N({loading:!0}),M()):(C.resetFields(),E())}),[t,x,C,M,E]);return(0,g.jsx)(l.P0,{visible:t,closable:!0,onCancel:a,titleText:"edit"===x?"Edit Role":"Add New Role",showFooter:!1,children:null!==L&&void 0!==L&&L.loading?(0,g.jsx)(u.Z,{items:10}):(0,g.jsxs)(s.Z,{className:c.Z.form,onFinish:function(e){switch(N((0,o.Z)((0,o.Z)({},L),{},{buttonLoading:!0})),x){case"edit":!0===y?R.updateRecord(e,null===L||void 0===L?void 0:L.data.id).then((function(e){b(),a(),N((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){A(e),N((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})):(N((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})})),d.ZP.error("You don't have permission to update this role"));break;case"new":!0===P?R.createRecord(e).then((function(e){b(),a(),N((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){A(e),N((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})):(N((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})})),d.ZP.error("You don't have permission to create new role"))}},form:C,children:[(null===L||void 0===L?void 0:L.error)&&(0,g.jsx)(l.EQ,{description:null===L||void 0===L?void 0:L.error,isClosable:!0,onClose:function(){N((0,o.Z)((0,o.Z)({},L),{},{error:""}))}}),(0,g.jsxs)("div",{children:[(0,g.jsx)(s.Z.Item,{name:"title",rules:[{required:!0,message:"Please add a title"}],children:(0,g.jsx)(l.t7,{size:"w100",label:"Title",asterisk:!0,type:"text"})}),(0,g.jsx)(s.Z.Item,{name:"slug",rules:[{required:!0,message:"Please add a slug"}],children:(0,g.jsx)(l.t7,{onChange:function(e){var n=e.target,t=(0,m.V3)(n.value);C.setFieldsValue({slug:t})},size:"w100",label:"Slug",asterisk:!0,type:"text",disabled:"ORG-ADMIN"===C.getFieldValue("slug")||"SUPER-ADMIN"===C.getFieldValue("slug")})})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(s.Z.Item,{name:"visibility",children:(0,g.jsx)(l.AP,{label:"Visibility",options:Object.entries(Z).filter((function(e){var n=(0,i.Z)(e,2),t=(n[0],n[1]);return"coreSystemLevel"!==t&&"global"!==t})).map((function(e){var n=(0,i.Z)(e,2);return{label:n[0],value:n[1]}}))})}),(0,g.jsx)(s.Z.Item,{name:"isPublished",children:(0,g.jsx)(l.AP,{label:"Published",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]})})]}),"new"===x&&(0,g.jsx)("div",{children:(0,g.jsx)(s.Z.Item,{name:"copyRoleId",rules:[{required:!0,message:"Please select a role to copy permissions from"}],children:(0,g.jsx)(l.AP,{label:"Copy Permissions From",placeholder:"Select a role to copy permissions from",options:D.map((function(e){return{label:e.title,value:e.id}})),asterisk:!0})})}),(0,g.jsx)("div",{children:(0,g.jsx)(s.Z.Item,{name:"description",children:(0,g.jsx)(l.t7,{size:"w100",label:"Description",type:"textArea",defaultValue:null===L||void 0===L||null===(n=L.data)||void 0===n?void 0:n.description})})}),(0,g.jsxs)("div",{className:c.Z.footer,children:[(0,g.jsx)(l.op,{size:"normal",fontSize:"sm",onClick:a,type:"plain",children:"Cancel"}),(0,g.jsx)(l.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===L||void 0===L?void 0:L.buttonLoading,children:"Submit"})]})]})})},v=t(2135),b=t(5900),j=t(41586),P=t(98676),y=t(3109),k=t(70815),C=t(98505),R=t(32147),w=t(85554),I=function(e){var n=e.record,t=e.onEditIconClick,a=e.reloadTableData,s=e.permissions.deleteRole,l=(0,r.useState)({confirmLoading:!1,openPopConfirm:!1}),u=(0,i.Z)(l,2),m=u[0],h=u[1],f=(0,r.useMemo)((function(){return new p.U}),[]);return(0,g.jsxs)("div",{className:c.Z.actions,children:[(0,g.jsx)("span",{onClick:function(){return t(n)},children:(0,g.jsx)("img",{src:"/images/editicon.svg",alt:""})}),(0,g.jsx)(b.Z,{open:m.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:function(){if(h((0,o.Z)((0,o.Z)({},m),{},{confirmLoading:!0})),!1===s)return d.ZP.error("You don't have permission to delete this record, please contact your admin."),void h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1}));f.deleteRecord(n.id).then((function(e){h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1,confirmLoading:!1})),a()})).catch((function(e){h((0,o.Z)((0,o.Z)({},m),{},{confirmLoading:!1}))}))},onCancel:function(){return h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1}))},okButtonProps:{loading:m.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:function(e){e||h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!1}))},children:(0,g.jsx)(P.Z,{className:c.Z.bg__red,onClick:function(){h((0,o.Z)((0,o.Z)({},m),{},{openPopConfirm:!0}))}})})]})};function L(e){var n=(0,w.v9)((function(e){return e.usersReducer})).userPermissions,t=n.updateRole,o=n.deleteRole,i=n.grantPrivilegesToRole,r=n.readRolePermissions,a=e.tableData,s=e.tableLoading,d=e.onEditIconClick,l=e.reloadTableData,u=new p.U,m=function(e,n){return u.updateRecord({isPublished:e},n)},h=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,n,t){return t+1},width:"5%"},{title:"Title",dataIndex:"title",key:"title",render:function(e,n){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y.Z,{color:"dark-main",size:"sm",weight:"bold",children:n.title}),(0,g.jsx)(y.Z,{color:"dark-sub",size:"xs",children:n.description})]})}},{title:"Slug",dataIndex:"slug",key:"slug",render:function(e,n){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(y.Z,{color:"dark-sub",size:"sm",children:e})})}},{title:"Visibility",dataIndex:"visibility",key:"visibility",render:function(e,n){return(0,g.jsx)(y.Z,{color:"dark-sub",size:"sm",children:e})}},{title:"Date Added",dataIndex:"addedDate",key:"addedDate",render:function(e,n){return(0,g.jsx)(y.Z,{color:"dark-sub",size:"sm",children:(0,C.Ny)(e,"dd M,yy")})}}];return!0===t&&h.push({title:"Published",dataIndex:"isPublished",key:"isPublished",render:function(e,n){return(0,g.jsx)(k.r,{checked:n.isPublished,onChange:m,recordId:n.id,allowChange:t})}}),(i||r)&&h.push({title:"Permissions",dataIndex:"permissions",key:"permissions",render:function(e,n){return(0,g.jsxs)("div",{children:[(0,g.jsxs)(v.rU,{to:"/roles/permissions?roleId=".concat(n.id),className:"d-flex",children:[(0,g.jsx)(R.iK,{className:"my-auto"}),(0,g.jsx)(y.Z,{color:"dark-sub",size:"sm",className:"ml-2",children:"Manage Permissions"})]}),!0===r&&(0,g.jsxs)(v.rU,{to:"/roles/permissions/view?roleId=".concat(null===n||void 0===n?void 0:n.id),className:"d-flex mt-2",children:[(0,g.jsx)(R.ON,{className:"my-auto"}),(0,g.jsx)(y.Z,{color:"dark-sub",size:"sm",className:"ml-2",children:"View Permissions"})]})]})}}),(t||o)&&h.push({title:"Actions",dataIndex:"actions",key:"actions",render:function(e,t){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(I,{record:t,onEditIconClick:d,reloadTableData:l,permissions:n})})}}),(0,g.jsx)("div",{className:c.Z.antdTableWrapper,children:(0,g.jsx)(j.Z,{sticky:!0,dataSource:a,columns:h,pagination:!1,scroll:{x:991},loading:s,rowKey:function(e){return"site-Role-".concat(e.id)}})})}var N=t(47814),S=t(18515),T=[{text:"Home",isLink:!0,path:"/"},{isLink:!1,text:"Roles"}];var D=function(){var e=(0,m.aY)(N.f);e.push("grantPrivilegesToRole","readRolePermissions");var n=(0,w.v9)((function(e){return e.usersReducer})).userPermissions,t=n.createRole,s=n.readRole,c=n.updateRole,u=(0,r.useState)({editType:"new",recordId:0,openModal:!1}),h=(0,i.Z)(u,2),f=h[0],Z=h[1],v=new p.U,b=(0,r.useState)({isLoading:!1,error:{},data:[]}),j=(0,i.Z)(b,2),P=j[0],y=j[1],k=function(){!1!==t?Z((0,o.Z)((0,o.Z)({},f),{},{openModal:!f.openModal,editType:"new"})):d.ZP.error("You don't have permission to create new record")},C=function(){y((0,o.Z)((0,o.Z)({},P),{},{loading:!0})),v.getAllRecords().then((function(e){y((0,o.Z)({},e.data))})).catch((function(e){}))};return(0,r.useEffect)((function(){C()}),[]),(0,g.jsx)(a.Z,{permissionSlug:e,children:(0,g.jsxs)("div",{children:[(0,g.jsx)(l.mr,{heading:"Roles",buttonText:"Add New Role",onButtonClick:k,breadCrumbData:T,showAdd:!0===t}),!0===s&&(0,g.jsx)(L,{tableData:P.data,tableLoading:P.loading,onEditIconClick:function(e){!1!==c?Z((0,o.Z)((0,o.Z)({},f),{},{editType:"edit",recordId:e.id,openModal:!0})):d.ZP.error("You don't have permission to update this record")},reloadTableData:C}),!1===s&&(0,g.jsx)(S.a$,{mainMessage:"You don't have permission to view this data"}),f.openModal&&(0,g.jsx)(x,{record:f.recordId,type:f.editType,reloadTableData:C,onCancel:k,openModal:f.openModal,permissions:n})]})})}},99420:function(e,n,t){t.d(n,{U:function(){return a}});var o=t(43144),i=t(15671),r=t(49075),a=(0,o.Z)((function e(){var n=this;(0,i.Z)(this,e),this.endPoint="role",this.getAllRecords=function(e){return r.Z.get(n.endPoint,{params:e})},this.getRecordById=function(e){return r.Z.get("".concat(n.endPoint,"/").concat(e,"?all=true"))},this.deleteRecord=function(e){return r.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return r.Z.post(n.endPoint+"/",e)},this.updateRecord=function(e,t){return r.Z.patch("".concat(n.endPoint,"/").concat(t),e)},this.addElements=function(e,t){return r.Z.post("".concat(n.endPoint,"/addDashboardElement/").concat(t),e)},this.removeElements=function(e,t){return r.Z.post("".concat(n.endPoint,"/removeDashboardElement/").concat(t),e)}}))}}]);