"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[8062],{70815:function(e,n,t){t.d(n,{r:function(){return h}});var o=t(1413),a=t(29439),i=t(45987),r=t(55291),d=t(86345),c=t(47313),s=t(40169),l=t(46417),u=["onChange","checked","recordId","allowChange"],h=function(e){var n=e.onChange,t=e.checked,h=e.recordId,f=e.allowChange,g=void 0===f||f,p=(0,i.Z)(e,u),m=(0,c.useState)({loading:!1,checked:!1}),Z=(0,a.Z)(m,2),v=Z[0],P=Z[1];return(0,c.useEffect)((function(){P((0,o.Z)((0,o.Z)({},v),{},{checked:t}))}),[t]),(0,l.jsx)(d.Z,{checked:v.checked,onChange:function(e){!0===g?(P((0,o.Z)((0,o.Z)({},v),{},{loading:!0})),n(e,h,p).then((function(n){P((0,o.Z)((0,o.Z)({},v),{},{checked:e,loading:!1})),r.ZP.success(n.data.message)})).catch((function(e){P((0,o.Z)((0,o.Z)({},v),{},{loading:!1}));var n=(0,s.P)(e);"string"===typeof n.message?r.ZP.error(n.message):r.ZP.error("Something went wrong")}))):r.ZP.error("You don't have permission to change this record, please contact your admin.")},loading:v.loading})}},38062:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var o=t(1413),a=t(29439),i=t(47313),r=t(7532),d=t(25019),c=t(55291),s=t(82626),l=t(17327),u=t(49355),h=t(46646),f=t(40169),g=t(59816),p=t(5227),m=t(48897),Z=t(3798),v=t(46417),P=function(e){var n,t,r,P,x,k=e.openModal,b=e.onCancel,j=e.type,y=e.record,C=e.reloadTableData,w=e.permissions,I=w.createPackage,R=w.updatePackage,A=d.Z.useForm(),T=(0,a.Z)(A,1)[0],E=(0,i.useMemo)((function(){return new p.G}),[]),L=(0,i.useMemo)((function(){return new g.Y}),[]),D=(0,i.useState)(),z=(0,a.Z)(D,2),S=z[0],M=z[1],N=(0,i.useState)([]),Y=(0,a.Z)(N,2),F=Y[0],B=Y[1],O=function(e){var n=(0,f.P)(e);if("string"==typeof n.message)M((0,o.Z)((0,o.Z)({},S),{},{error:n.message}));else{var t=(0,h.O)(n.message,[]);T.setFields(t),M((0,o.Z)((0,o.Z)({},S),{},{error:""}))}},q=(0,i.useCallback)((function(){L.getAllRecords().then((function(e){var n;null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.data&&B(e.data.data)}))}),[L]),G=(0,i.useCallback)((function(){E.getRecordById(y).then((function(e){e.data&&e.data.data&&(T.setFieldsValue((0,o.Z)((0,o.Z)({},e.data.data),{},{translations:e.data.data.localization,isPublished:e.data.data.isPublished})),M((0,o.Z)((0,o.Z)({},e.data),{},{loading:!1})))})).catch((function(e){O(e)}))}),[T,y,E]);(0,i.useEffect)((function(){"edit"===j?(M({loading:!0}),G()):T.resetFields(),q()}),[k,j,T,G,q]);return(0,v.jsx)(s.P0,{visible:k,closable:!0,onCancel:b,titleText:"edit"===j?"Edit Credit Package":"Add New Credit Package",showFooter:!1,children:null!==S&&void 0!==S&&S.loading?(0,v.jsx)(u.Z,{items:10}):(0,v.jsxs)(d.Z,{className:l.Z.form,onFinish:function(e){M((0,o.Z)((0,o.Z)({},S),{},{buttonLoading:!0})),e.countryId=Number(e.countryId);var n=new FormData,t=["icon","translations"];switch(Object.entries(e).forEach((function(e){t.includes(e[0])||n.append(e[0],e[1])})),e.icon&&"string"!==typeof e.icon&&e.icon.fileList.length>0&&n.append("icon",e.icon.fileList[0].originFileObj),e.translations&&e.translations.forEach((function(e,t){n.append("translations[".concat(t+1,"][language]"),e.language),n.append("translations[".concat(t+1,"][title]"),e.title),n.append("translations[".concat(t+1,"][description]"),e.description)})),j){case"edit":var a;if(!0===R)E.updateRecord(n,null===S||void 0===S||null===(a=S.data)||void 0===a?void 0:a.id).then((function(e){C(),b(),M((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){O(e),M((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))}));else M((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})})),c.ZP.error("You don't have permission to update this record");break;case"new":!0===I?E.createRecord(n).then((function(e){C(),b(),M((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){O(e),M((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})}))})):(M((function(e){return(0,o.Z)((0,o.Z)({},e),{},{buttonLoading:!1})})),c.ZP.error("You don't have permission to create this record"))}},form:T,children:[(null===S||void 0===S?void 0:S.error)&&(0,v.jsx)(s.EQ,{description:null===S||void 0===S?void 0:S.error,isClosable:!0,onClose:function(){M((0,o.Z)((0,o.Z)({},S),{},{error:""}))}}),(0,v.jsxs)("div",{children:[(0,v.jsx)(d.Z.Item,{name:"credits",rules:[{required:!0,message:"Please add credits"}],children:(0,v.jsx)(s.t7,{size:"w100",label:"Credits",asterisk:!0,onChange:function(e){var n={event:e,form:T,formName:"credits"};(0,Z.u7)(n)}})}),(0,v.jsx)(d.Z.Item,{name:"amount",rules:[{required:!0,message:"Please add amount"}],children:(0,v.jsx)(s.t7,{size:"w100",label:"Amount",asterisk:!0,onChange:function(e){var n={event:e,form:T,formName:"amount"};(0,Z.u7)(n)}})})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)(d.Z.Item,{name:"countryId",rules:[{required:!0,message:"Please select a country"}],children:(0,v.jsx)(s.AP,{label:"Country",options:null===F||void 0===F?void 0:F.map((function(e){return{label:e.name,value:e.id}}))})}),(0,v.jsx)(d.Z.Item,{name:"packageType",rules:[{required:!0,message:"Please select a package type"}],children:(0,v.jsx)(s.AP,{label:"Package Type",options:[{value:"monthly",label:"Monthly"},{value:"onetime",label:"One Time"}]})})]}),(0,v.jsx)("div",{children:(0,v.jsx)(d.Z.Item,{name:"slug",rules:[{required:!0,message:"Please add a slug"}],children:(0,v.jsx)(s.t7,{onChange:function(e){var n=(0,Z.V3)(e.target.value);T.setFieldsValue({slug:n})},size:"w100",label:"Slug",asterisk:!0,type:"text"})})}),(0,v.jsx)(s.WH,{title:"Title & Description",formName:"translations",defaultValue:null===S||void 0===S||null===(n=S.data)||void 0===n?void 0:n.localization,description:!0,isRichTextEditor:!1}),(0,v.jsxs)("div",{children:[(0,v.jsx)(d.Z.Item,{name:"isPublished",children:(0,v.jsx)(s.AP,{label:"Published",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]})}),(0,v.jsx)(d.Z.Item,{name:"autoRenew",children:(0,v.jsx)(s.AP,{label:"Auto Renew",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]})})]}),(0,v.jsx)("div",{children:(0,v.jsx)(s.wA,{name:"icon",defaultFileList:"edit"===j&&S&&(null===(t=S.data)||void 0===t?void 0:t.icon)&&[{uid:null===(r=S.data)||void 0===r?void 0:r.id,name:null===(P=S.data)||void 0===P?void 0:P.icon,status:"done",url:m.lj+(null===(x=S.data)||void 0===x?void 0:x.icon)}]})}),(0,v.jsxs)("div",{className:l.Z.footer,children:[(0,v.jsx)(s.op,{size:"normal",fontSize:"sm",onClick:b,type:"plain",children:"Cancel"}),(0,v.jsx)(s.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===S||void 0===S?void 0:S.buttonLoading,children:"Submit"})]})]})})},x=t(5900),k=t(21680),b=t(41586),j=t(98676),y=t(3109),C=t(98505),w=t(70815),I=t(85554),R=function(e){var n=e.record,t=e.onEditIconClick,r=e.reloadTableData,d=e.permissions.deletePackage,s=(0,i.useState)({confirmLoading:!1,openPopConfirm:!1}),u=(0,a.Z)(s,2),h=u[0],f=u[1],g=(0,i.useMemo)((function(){return new p.G}),[]);return(0,v.jsxs)("div",{className:l.Z.actions,children:[(0,v.jsx)("span",{onClick:function(){return t(n)},children:(0,v.jsx)("img",{src:"/images/editicon.svg",alt:""})}),(0,v.jsx)(x.Z,{open:h.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:function(){if(f((0,o.Z)((0,o.Z)({},h),{},{confirmLoading:!0})),!1===d)return c.ZP.error("You don't have permission to delete this record, please contact your admin."),void f((0,o.Z)((0,o.Z)({},h),{},{openPopConfirm:!1}));g.deleteRecord(n.id).then((function(e){f((0,o.Z)((0,o.Z)({},h),{},{openPopConfirm:!1,confirmLoading:!1})),r()})).catch((function(e){f((0,o.Z)((0,o.Z)({},h),{},{confirmLoading:!1}))}))},onCancel:function(){return f((0,o.Z)((0,o.Z)({},h),{},{openPopConfirm:!1}))},okButtonProps:{loading:h.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:function(e){e||f((0,o.Z)((0,o.Z)({},h),{},{openPopConfirm:!1}))},children:(0,v.jsx)(j.Z,{className:l.Z.bg__red,onClick:function(){f((0,o.Z)((0,o.Z)({},h),{},{openPopConfirm:!0}))}})})]})};function A(e){var n=e.tableData,t=e.tableLoading,o=e.onEditIconClick,a=e.reloadTableData,i=(0,I.v9)((function(e){return e.usersReducer})).userPermissions,r=new p.G,d=function(e,n){return r.updateRecord({isPublished:e},n)},c=function(e,n){return r.updateRecord({autoRenew:e},n)},s=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,n,t){return t+1},width:"60px"},{title:"Package",dataIndex:"localization",key:"localization",render:function(e,n){var t,o;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y.Z,{color:"dark-main",size:"normal",weight:"bold",children:null===(t=e[0])||void 0===t?void 0:t.title}),(0,v.jsx)(y.Z,{color:"dark-main",size:"xs",children:"Description: ".concat(null===(o=e[0])||void 0===o?void 0:o.description)}),(0,v.jsx)(y.Z,{color:"dark-main",size:"xs",children:"Type: ".concat(n.packageType)})]})}},{title:"Credits",dataIndex:"credits",key:"credits",render:function(e){return(0,v.jsx)(y.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Amount",dataIndex:"amount",key:"amount",render:function(e){return(0,v.jsx)(y.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Icon",dataIndex:"icon",key:"icon",render:function(e){return e?(0,v.jsx)(k.Z,{width:50,height:50,src:"".concat(m.lj).concat(e),preview:!1,rootClassName:"object-fit-cover",style:{borderRadius:"100%"}}):(0,v.jsx)(v.Fragment,{})}},{title:"Country",dataIndex:"country",key:"country",render:function(e){return(0,v.jsx)(y.Z,{color:"dark-main",size:"sm",weight:"bold",children:e.name})}},{title:"Published",dataIndex:"isPublished",key:"isPublished",render:function(e,n){return(0,v.jsx)(w.r,{checked:e,onChange:d,recordId:n.id,allowChange:i.updatePackage})}},{title:"Auto Renew",dataIndex:"autoRenew",key:"autoRenew",render:function(e,n){return(0,v.jsx)(w.r,{checked:e,onChange:c,recordId:n.id,allowChange:i.updatePackage})}},{title:"Date Added",dataIndex:"addedDate",key:"addedDate",render:function(e){return(0,v.jsx)(y.Z,{color:"dark-sub",size:"sm",children:(0,C.Ny)(e,"dd M,yy-t")})},width:"200px"},{title:"Actions",dataIndex:"actions",key:"actions",render:function(e,n){return(0,v.jsx)(R,{record:n,onEditIconClick:o,reloadTableData:a,permissions:i})}}];return(0,v.jsx)("div",{className:l.Z.antdTableWrapper,children:(0,v.jsx)(b.Z,{sticky:!0,dataSource:n,columns:s,pagination:!1,loading:t,rowKey:function(e){return"credits-rate-".concat(e.id)}})})}var T=function(e){return e.CREATE="createPackage",e.UPDATE="updatePackage",e.DELETE="deletePackage",e.READ="readPackage",e.READ_PUBLISHED="readPublishedPackage",e}({}),E=t(18515),L=[{text:"Home",isLink:!0,path:"/"},{isLink:!0,text:"Site Settings",path:"/siteSettings"},{isLink:!1,text:"Credits Packages"}];var D=function(){var e=(0,Z.aY)(T),n=(0,I.v9)((function(e){return e.usersReducer})).userPermissions,t=n.readPackage,d=n.createPackage,l=n.updatePackage,u=(0,i.useState)({editType:"new",recordId:0,openModal:!1}),h=(0,a.Z)(u,2),f=h[0],g=h[1],m=new p.G,x=(0,i.useState)({data:[]}),k=(0,a.Z)(x,2),b=k[0],j=k[1],y=function(){!1!==d?g((0,o.Z)((0,o.Z)({},f),{},{openModal:!f.openModal,editType:"new"})):c.ZP.error("You don't have permission to create new record")},C=function(){j((0,o.Z)((0,o.Z)({},b),{},{loading:!0})),m.getAllRecords().then((function(e){j(e.data)})).catch((function(e){}))};return(0,i.useEffect)((function(){C()}),[]),(0,v.jsxs)(r.default,{permissionSlug:e,children:[(0,v.jsx)(s.mr,{heading:"Organization Credits Packages",buttonText:"Add Credit Package",onButtonClick:y,breadCrumbData:L,showAdd:!0===d}),!0===t&&(0,v.jsx)(A,{tableData:b.data,tableLoading:b.loading,onEditIconClick:function(e){!1!==l?g((0,o.Z)((0,o.Z)({},f),{},{editType:"edit",recordId:e.id,openModal:!0})):c.ZP.error("You don't have permission to update record")},reloadTableData:C}),!1===t&&(0,v.jsx)(E.a$,{mainMessage:"You don't have permission to view this data"}),f.openModal&&(0,v.jsx)(P,{type:f.editType,reloadTableData:C,onCancel:y,openModal:f.openModal,record:f.recordId,permissions:n})]})}},59816:function(e,n,t){t.d(n,{Y:function(){return d}});var o=t(43144),a=t(15671),i=t(49075),r=t(3135),d=(0,o.Z)((function e(){var n=this;(0,a.Z)(this,e),this.endPoint="country",this.allEndpoint="country/all",this.getAllRecords=function(){return i.Z.get(n.allEndpoint)},this.getAvailableRecords=function(){return i.Z.get("".concat(n.endPoint,"/available-country"))},this.getRecordById=function(e){return i.Z.get("".concat(n.endPoint,"/").concat(e))},this.deleteRecord=function(e){return i.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return i.Z.post(n.endPoint+"/",e,{headers:r.C})},this.updateRecord=function(e,t){return i.Z.patch("".concat(n.endPoint,"/").concat(t),e,{headers:r.C})}}))},5227:function(e,n,t){t.d(n,{G:function(){return d},d:function(){return c}});var o=t(43144),a=t(15671),i=t(49075),r=t(3135),d=(0,o.Z)((function e(){var n=this;(0,a.Z)(this,e),this.endPoint="credit-package",this.createRecord=function(e){return i.Z.post(n.endPoint+"/",e,{headers:r.C})},this.getAllRecords=function(){return i.Z.get(n.endPoint)},this.getAllPublished=function(){return i.Z.get(n.endPoint+"/findPublished")},this.getRecordById=function(e){return i.Z.get("".concat(n.endPoint,"/").concat(e,"?all=true"))},this.updateRecord=function(e,t){return i.Z.patch("".concat(n.endPoint,"/").concat(t),e,{headers:r.C})},this.deleteRecord=function(e){return i.Z.delete("".concat(n.endPoint,"/").concat(e))}})),c=(0,o.Z)((function e(){var n=this;(0,a.Z)(this,e),this.endPoint="credit-package-promotions",this.createRecord=function(e){return i.Z.post(n.endPoint+"/",e)},this.getAllRecords=function(){return i.Z.get(n.endPoint)},this.getRecordById=function(e){return i.Z.get("".concat(n.endPoint,"/").concat(e))},this.deleteMultipleRecords=function(e,t){return i.Z.delete("".concat(n.endPoint,"/removeMultiple/").concat(e),{params:{packageIds:t}})},this.deleteRecordById=function(e,t){return i.Z.delete("".concat(n.endPoint,"/").concat(e,"/").concat(t))},this.updateRecord=function(e){return i.Z.patch(n.endPoint+"/",e)}}))}}]);