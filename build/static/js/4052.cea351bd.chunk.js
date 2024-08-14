"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[4052],{70815:function(e,n,t){t.d(n,{r:function(){return m}});var o=t(1413),i=t(29439),a=t(45987),r=t(55291),d=t(86345),l=t(47313),c=t(40169),s=t(46417),u=["onChange","checked","recordId","allowChange"],m=function(e){var n=e.onChange,t=e.checked,m=e.recordId,p=e.allowChange,v=void 0===p||p,h=(0,a.Z)(e,u),g=(0,l.useState)({loading:!1,checked:!1}),f=(0,i.Z)(g,2),Z=f[0],P=f[1];return(0,l.useEffect)((function(){P((0,o.Z)((0,o.Z)({},Z),{},{checked:t}))}),[t]),(0,s.jsx)(d.Z,{checked:Z.checked,onChange:function(e){!0===v?(P((0,o.Z)((0,o.Z)({},Z),{},{loading:!0})),n(e,m,h).then((function(n){P((0,o.Z)((0,o.Z)({},Z),{},{checked:e,loading:!1})),r.ZP.success(n.data.message)})).catch((function(e){P((0,o.Z)((0,o.Z)({},Z),{},{loading:!1}));var n=(0,c.P)(e);"string"===typeof n.message?r.ZP.error(n.message):r.ZP.error("Something went wrong")}))):r.ZP.error("You don't have permission to change this record, please contact your admin.")},loading:Z.loading})}},74052:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var o=t(4942),i=t(1413),a=t(29439),r=t(47313),d=t(7532),l=t(69309),c=t(25019),s=t(55291),u=t(82626),m=t(17327),p=t(49355),v=t(48897),h=t(46646),g=t(40169),f=t(59816),Z=t(43144),P=t(15671),x=t(49075),k=t(3135),b=(0,Z.Z)((function e(){var n=this;(0,P.Z)(this,e),this.endPoint="promotion",this.getAllRecords=function(e){return x.Z.get(n.endPoint,{params:e})},this.getRecordById=function(e){return x.Z.get("".concat(n.endPoint,"/").concat(e,"?all=true"))},this.deleteRecord=function(e){return x.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return x.Z.post(n.endPoint+"/",e,{headers:k.C})},this.updateRecord=function(e,t){return x.Z.patch("".concat(n.endPoint,"/").concat(t),e,{headers:k.C})}})),y=t(70816),j=t.n(y),C=(0,Z.Z)((function e(){var n=this;(0,P.Z)(this,e),this.endPoint="package",this.createRecord=function(e){return x.Z.post(n.endPoint+"/",e)},this.getAllRecords=function(){return x.Z.get(n.endPoint)},this.getAllPublished=function(){return x.Z.get(n.endPoint+"/findPublished")},this.getRecordById=function(e){return x.Z.get("".concat(n.endPoint,"/").concat(e))},this.updateRecord=function(e,t){return x.Z.patch("".concat(n.endPoint,"/").concat(t),e)},this.deleteRecord=function(e){return x.Z.delete("".concat(n.endPoint,"/").concat(e))},this.validatePackage=function(e){return x.Z.post("".concat(n.endPoint,"/validate-coupon-code"),e)}})),I=(0,Z.Z)((function e(){var n=this;(0,P.Z)(this,e),this.endPoint="package-promotions",this.createRecord=function(e){return x.Z.post(n.endPoint+"/",e)},this.getAllRecords=function(){return x.Z.get(n.endPoint)},this.getRecordById=function(e){return x.Z.get("".concat(n.endPoint,"/").concat(e))},this.deleteMultipleRecords=function(e,t){return x.Z.delete("".concat(n.endPoint,"/removeMultiple/").concat(e),{params:{packageIds:t}})},this.deleteRecordById=function(e,t){return x.Z.delete("".concat(n.endPoint,"/").concat(e,"/").concat(t))},this.updateRecord=function(e){return x.Z.patch(n.endPoint+"/",e)}})),R=t(5227),S=t(3798),w=t(46417),T=l.Z.RangePicker,N=function(e){var n,t,o,d,l,Z,P,x=e.openModal,k=e.onCancel,y=e.type,I=e.record,N=e.reloadTableData,z=e.permissions,M=z.createPromotion,F=z.updatePromotion,L=c.Z.useForm(),D=(0,a.Z)(L,1)[0],A=(0,r.useMemo)((function(){return new b}),[]),E=(0,r.useMemo)((function(){return new f.Y}),[]),Y=(0,r.useMemo)((function(){return new C}),[]),O=(0,r.useMemo)((function(){return new R.G}),[]),B=(0,r.useState)(),V=(0,a.Z)(B,2),q=V[0],_=V[1],U=(0,r.useState)([]),X=(0,a.Z)(U,2),H=X[0],G=X[1],K=(0,r.useState)([]),Q=(0,a.Z)(K,2),$=Q[0],W=Q[1],J=(0,r.useState)([]),ee=(0,a.Z)(J,2),ne=ee[0],te=ee[1],oe=(0,r.useState)({validFrom:"",validTo:""}),ie=(0,a.Z)(oe,2),ae=ie[0],re=ie[1],de=function(e){var n=(0,g.P)(e);if("string"==typeof n.message)_((0,i.Z)((0,i.Z)({},q),{},{error:n.message}));else{var t=(0,h.O)(n.message,[]);D.setFields(t),_((0,i.Z)((0,i.Z)({},q),{},{error:""}))}},le=(0,r.useCallback)((function(){A.getRecordById(I).then((function(e){var n,t,o,a,r,d,l,c,s,u,m,p,v,h;e.data&&e.data.data&&(D.setFieldsValue((0,i.Z)((0,i.Z)({},e.data.data),{},{translations:null===(n=e.data)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.localization,isPublished:null===(o=e.data)||void 0===o||null===(a=o.data)||void 0===a?void 0:a.isPublished,date:[j()(null===(r=e.data)||void 0===r||null===(d=r.data)||void 0===d?void 0:d.validFrom),j()(null===(l=e.data)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.validTo)],packagesId:null===(s=e.data)||void 0===s||null===(u=s.data)||void 0===u||null===(m=u.packagePromotions)||void 0===m?void 0:m.map((function(e){return e.packageId})),creditPackagesId:null===(p=e.data)||void 0===p||null===(v=p.data)||void 0===v||null===(h=v.creditPackagePromotions)||void 0===h?void 0:h.map((function(e){return e.creditPackageId}))})),_((0,i.Z)((0,i.Z)({},e.data),{},{loading:!1})))})).catch((function(e){de(e)}))}),[D,I,A]),ce=(0,r.useCallback)((function(){E.getAllRecords().then((function(e){e.data&&e.data.data&&G(e.data.data)}))}),[E]),se=(0,r.useCallback)((function(){Y.getAllRecords().then((function(e){e.data&&e.data.data&&W(e.data.data)}))}),[Y]),ue=(0,r.useCallback)((function(){O.getAllPublished().then((function(e){e.data&&e.data.data&&te(e.data.data)}))}),[O]);(0,r.useEffect)((function(){"edit"===y?(_({loading:!0}),le(),ce(),se(),ue()):(ce(),se(),ue(),D.resetFields())}),[x,y,D,le,ce,ue,se]);return(0,w.jsx)(u.P0,{visible:x,closable:!0,onCancel:k,titleText:"edit"===y?"Edit Promotion":"Add New Promotion",showFooter:!1,children:null!==q&&void 0!==q&&q.loading?(0,w.jsx)(p.Z,{items:10}):(0,w.jsxs)(c.Z,{className:m.Z.form,onFinish:function(e){_((0,i.Z)((0,i.Z)({},q),{},{buttonLoading:!0}));var n=new FormData,t=["image","translations","packagesId","creditPackagesId"];switch(Object.entries(e).forEach((function(e){t.includes(e[0])||n.append(e[0],e[1])})),e.date&&(n.delete("date"),(ae.validFrom||ae.validTo)&&(n.append("validFrom",null===ae||void 0===ae?void 0:ae.validFrom),n.append("validTo",null===ae||void 0===ae?void 0:ae.validTo))),e.creditPackagesId&&e.creditPackagesId.forEach((function(e,t){n.append("creditPackagesId[".concat(t,"]"),e.toString())})),e.packagesId&&e.packagesId.forEach((function(e,t){n.append("packagesId[".concat(t,"]"),e.toString())})),e.image&&"string"!==typeof e.image&&e.image.fileList.length>0&&n.append("image",e.image.fileList[0].originFileObj),e.translations&&e.translations.forEach((function(e,t){n.append("translations[".concat(t+1,"][language]"),e.language),n.append("translations[".concat(t+1,"][title]"),e.title),n.append("translations[".concat(t+1,"][description]"),e.description)})),y){case"edit":F?A.updateRecord(n,null===q||void 0===q?void 0:q.data.id).then((function(e){N(),k(),_((function(e){return(0,i.Z)((0,i.Z)({},e),{},{loading:!1,buttonLoading:!1})}))})).catch((function(e){de(e),_((function(e){return(0,i.Z)((0,i.Z)({},e),{},{loading:!1,buttonLoading:!1})}))})):(_((function(e){return(0,i.Z)((0,i.Z)({},e),{},{buttonLoading:!1})})),s.ZP.error("You don't have permission to update this record"));break;case"new":!0===M?A.createRecord(n).then((function(e){N(),k(),_((function(e){return(0,i.Z)((0,i.Z)({},e),{},{buttonLoading:!1})}))})).catch((function(e){de(e),_((function(e){return(0,i.Z)((0,i.Z)({},e),{},{buttonLoading:!1})}))})):(_((function(e){return(0,i.Z)((0,i.Z)({},e),{},{buttonLoading:!1})})),s.ZP.error("You don't have permission to create this record"))}},form:D,children:[(null===q||void 0===q?void 0:q.error)&&(0,w.jsx)(u.EQ,{description:null===q||void 0===q?void 0:q.error,isClosable:!0,onClose:function(){_((0,i.Z)((0,i.Z)({},q),{},{error:""}))}}),(0,w.jsxs)("div",{children:[(0,w.jsx)(c.Z.Item,{name:"discountType",rules:[{required:!0,message:"Please Select a discount type"}],children:(0,w.jsx)(u.AP,{label:"Discount Type",asterisk:!0,placeholder:"Please Select a discount type",options:null===(n=Object.entries([]))||void 0===n?void 0:n.map((function(e){var n=(0,a.Z)(e,2),t=n[0],o=n[1];return{label:(0,S.kC)(t),value:o}}))})}),(0,w.jsx)(c.Z.Item,{name:"value",rules:[{required:!0,message:"Please enter value"}],children:(0,w.jsx)(u.t7,{size:"w100",label:"Value",type:"text",asterisk:!0})})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(c.Z.Item,{name:"promoCode",rules:[{required:!0,message:"Please enter promo code"}],children:(0,w.jsx)(u.t7,{size:"w100",label:"Promo Code",type:"text",asterisk:!0})}),(0,w.jsx)(c.Z.Item,{name:"limit",rules:[{required:!0,message:"Please enter limit"}],children:(0,w.jsx)(u.t7,{size:"w100",label:"Limit",type:"text",asterisk:!0})})]}),"new"===y&&(0,w.jsxs)("div",{children:[(0,w.jsx)(c.Z.Item,{name:"packagesId",children:(0,w.jsx)(u.AP,{label:"Package",mode:"multiple",placeholder:"Please select a package",options:null===$||void 0===$?void 0:$.map((function(e){return{label:e.localization[0].title,value:e.id}}))})}),(0,w.jsx)(c.Z.Item,{name:"creditPackagesId",children:(0,w.jsx)(u.AP,{label:"Credit Package",mode:"multiple",placeholder:"Please select a credit package",options:null===ne||void 0===ne?void 0:ne.map((function(e){return{label:e.localization[0].title,value:e.id}}))})})]}),(0,w.jsx)("div",{children:(0,w.jsxs)(c.Z.Item,{name:"date",rules:[{required:!0,message:"Please select date"}],children:[(0,w.jsxs)("label",{className:m.Z.label,children:["Date (Valid From  Valid To) ",(0,w.jsx)("span",{className:"color-red-yp",children:"*"})]}),(0,w.jsx)(T,{onChange:function(e){var n,t;D.setFieldsValue({date:e});var o=j()(e&&(null===(n=e[0])||void 0===n?void 0:n.toDate())).toISOString(),i=j()(e&&(null===(t=e[1])||void 0===t?void 0:t.toDate())).toISOString();re({validFrom:o,validTo:i})},placeholder:["Valid From","Valid To"],className:"w-100",defaultValue:"edit"===y?[j()(null===q||void 0===q||null===(t=q.data)||void 0===t?void 0:t.validFrom),j()(null===q||void 0===q?void 0:q.data.validTo)]:[]})]})}),(0,w.jsxs)("div",{children:[(0,w.jsx)(c.Z.Item,{name:"countryId",rules:[{required:!0,message:"Please Select a country!"}],children:(0,w.jsx)(u.AP,{label:"Country",placeholder:"Please select country",options:null===H||void 0===H?void 0:H.map((function(e){return{label:e.name,value:e.id}})),asterisk:!0})}),(0,w.jsx)(c.Z.Item,{name:"isPublished",children:(0,w.jsx)(u.AP,{label:"Published",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]})})]}),(0,w.jsx)(u.WH,{title:"Promotion",formName:"translations",description:!0,form:D,defaultValue:null===q||void 0===q||null===(o=q.data)||void 0===o?void 0:o.localization}),(0,w.jsx)("div",{children:(0,w.jsx)(u.wA,{title:"Image",name:"image",defaultFileList:"edit"===y&&q&&(null===(d=q.data)||void 0===d?void 0:d.image)&&[{uid:null===(l=q.data)||void 0===l?void 0:l.id,name:null===(Z=q.data)||void 0===Z?void 0:Z.image,status:"done",url:v.lj+(null===(P=q.data)||void 0===P?void 0:P.image)}]})}),(0,w.jsxs)("div",{className:m.Z.footer,children:[(0,w.jsx)(u.op,{size:"normal",fontSize:"sm",onClick:k,type:"plain",children:"Cancel"}),(0,w.jsx)(u.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===q||void 0===q?void 0:q.buttonLoading,children:"Submit"})]})]})})},z=t(8570),M=t(5900),F=t(28080),L=t(21680),D=t(41586),A=t(98676),E=t(3109),Y=t(98505),O=t(70815),B=t(32147),V=t(85554),q=z.Z.Paragraph,_=function(e){var n=e.record,t=e.onEditIconClick,o=e.reloadTableData,d=e.permissions.deletePromotion,l=(0,r.useState)({confirmLoading:!1,openPopConfirm:!1}),c=(0,a.Z)(l,2),u=c[0],p=c[1],v=(0,r.useMemo)((function(){return new b}),[]);return(0,w.jsxs)("div",{className:m.Z.actions,children:[(0,w.jsx)("span",{onClick:function(){return t(n)},children:(0,w.jsx)("img",{src:"/images/editicon.svg",alt:""})}),(0,w.jsx)(M.Z,{open:u.openPopConfirm,placement:"top",title:"Are you sure?",onConfirm:function(){if(p((0,i.Z)((0,i.Z)({},u),{},{confirmLoading:!0})),!1===d)return s.ZP.error("You don't have permission to delete this record, please contact your admin."),void p((0,i.Z)((0,i.Z)({},u),{},{openPopConfirm:!1}));v.deleteRecord(n.id).then((function(e){p((0,i.Z)((0,i.Z)({},u),{},{openPopConfirm:!1,confirmLoading:!1})),o()})).catch((function(e){p((0,i.Z)((0,i.Z)({},u),{},{confirmLoading:!1}))}))},onCancel:function(){return p((0,i.Z)((0,i.Z)({},u),{},{openPopConfirm:!1}))},okButtonProps:{loading:u.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:function(e){e||p((0,i.Z)((0,i.Z)({},u),{},{openPopConfirm:!1}))},children:(0,w.jsx)(A.Z,{className:m.Z.bg__red,onClick:function(){p((0,i.Z)((0,i.Z)({},u),{},{openPopConfirm:!0}))}})})]})};function U(e){var n=e.tableData,t=e.tableLoading,o=e.onEditIconClick,i=e.reloadTableData,a=e.onManageClick,r=(0,V.v9)((function(e){return e.usersReducer})).userPermissions,d=new b,l=(new Date,function(e,n){return d.updateRecord({isPublished:e},n)}),c=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,n,t){return t+1},width:"5%"},{title:"Title",dataIndex:"localization",key:"localization",render:function(e,n){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(E.Z,{color:"dark-main",size:"sm",weight:"bold",children:e[0].title}),(0,w.jsx)(q,{ellipsis:{rows:3,expandable:!0,symbol:"view description"},title:e[0].title,className:"font-size-xs color-light-800 mt-1",children:(0,w.jsx)("div",{dangerouslySetInnerHTML:{__html:e[0].description}})}),(0,w.jsxs)("div",{className:"d-flex",children:[(0,w.jsx)(B.$$,{className:"mr-1",width:16,height:16}),(0,w.jsx)("span",{className:"font-size-xs color-dark-sub my-auto",children:(0,Y.Ny)(null===n||void 0===n?void 0:n.addedDate,"M dd,yy")})]})]})},width:"12%"},{title:"Discount",dataIndex:"discountType",key:"discountType",render:function(e,n){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(E.Z,{color:"dark-sub",size:"sm",children:"Type: ".concat((0,S.kC)(e))}),(0,w.jsx)(E.Z,{color:"dark-sub",size:"sm",className:"mt-1",children:"value: ".concat(n.value)})]})}},{title:"Promo",dataIndex:"promoCode",key:"promoCode",render:function(e,n){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(q,{ellipsis:{rows:2,expandable:!1},copyable:{text:e},className:"font-size-sm color-dark-sub mt-1 mb-1",children:"Promo Code: ".concat(e)}),(0,w.jsx)(E.Z,{color:"dark-sub",size:"sm",children:"Valid From: ".concat((0,Y.Ny)(n.validFrom,"dd M,yy"))}),(0,w.jsx)(E.Z,{color:"dark-sub",size:"sm",className:"mt-1",children:"Valid Till: ".concat((0,Y.Ny)(n.validTo,"dd M,yy"))}),(0,w.jsx)("div",{})]})},width:"15%"},{title:"Packages",dataIndex:"packages",key:"packages",render:function(e,n){var t,o,i,d;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(F.Z,{size:"small",title:(0,w.jsxs)("div",{className:"d-flex justify-space-between",children:[(0,w.jsx)("h5",{className:"color-dark-main",children:"Credit Package"}),(0,w.jsx)(u.op,{size:"xs",type:"plain_underlined",onClick:function(){a(n,"credit")},disabled:!1===r.updatePromotion,children:"Manage"})]}),children:(null===n||void 0===n||null===(t=n.creditPackagePromotions)||void 0===t?void 0:t.length)>0?null===n||void 0===n||null===(o=n.creditPackagePromotions)||void 0===o?void 0:o.map((function(e,n){var t,o;return(0,w.jsx)("div",{className:"mb-1",children:(0,w.jsx)(E.Z,{color:"dark-sub",size:"sm",children:"".concat(null===e||void 0===e||null===(t=e.creditPackage)||void 0===t||null===(o=t.localization[0])||void 0===o?void 0:o.title)})},"creditPackagePromotions-".concat(n))})):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"font-size-xs color-dark-sub text-center",children:"No Packages"})})}),(0,w.jsx)(F.Z,{size:"small",title:(0,w.jsxs)("div",{className:"d-flex justify-space-between",children:[(0,w.jsx)("h5",{className:"color-dark-main",children:"Package"}),(0,w.jsx)(u.op,{size:"xs",type:"plain_underlined",onClick:function(){a(n,"package")},disabled:!1===r.updatePromotion,children:"Manage"})]}),className:"mt-2",children:(null===n||void 0===n||null===(i=n.packagePromotions)||void 0===i?void 0:i.length)>0?null===n||void 0===n||null===(d=n.packagePromotions)||void 0===d?void 0:d.map((function(e,n){var t,o;return(0,w.jsx)("div",{className:"mb-1",children:(0,w.jsx)(E.Z,{color:"dark-sub",size:"sm",children:"".concat(null===e||void 0===e||null===(t=e.package)||void 0===t||null===(o=t.localization[0])||void 0===o?void 0:o.title)})},"packagePromotions-".concat(n))})):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"font-size-xs color-dark-sub text-center",children:"No Packages"})})})]})},width:"25%"},{title:"Limit",dataIndex:"limit",key:"limit",render:function(e){return(0,w.jsx)(E.Z,{color:"dark-sub",size:"normal",children:e})},className:"text-center"},{title:"Image",dataIndex:"image",key:"image",render:function(e){return e?(0,w.jsx)(L.Z,{width:50,height:50,src:"".concat(v.lj).concat(e),alt:"Promotion Image",preview:!1,rootClassName:"object-fit-contain"}):(0,w.jsx)(w.Fragment,{})}},{title:"Published",dataIndex:"isPublished",key:"isPublished",render:function(e,n){return(0,w.jsx)(O.r,{checked:e,onChange:l,recordId:n.id,allowChange:r.updatePromotion})}},{title:"Actions",dataIndex:"actions",key:"actions",render:function(e,n){return(0,w.jsx)(_,{record:n,onEditIconClick:o,reloadTableData:i,permissions:r})}}];return(0,w.jsx)("div",{className:m.Z.antdTableWrapper,children:(0,w.jsx)(D.Z,{sticky:!0,dataSource:n,columns:c,pagination:!1,scroll:{x:991},loading:t,rowKey:function(e){return"site-promotion-".concat(e.id)}})})}var X=t(74165),H=t(15861),G=t(7655),K=function(e){var n,t,o=e.openModal,d=e.onCancel,l=e.record,v=e.reloadTableData,f=e.recordData,Z=e.type,P=c.Z.useForm(),x=(0,a.Z)(P,1)[0],k=(0,r.useMemo)((function(){return new R.G}),[]),b=(0,r.useMemo)((function(){return new R.d}),[]),y=(0,r.useMemo)((function(){return new C}),[]),j=(0,r.useMemo)((function(){return new I}),[]),S=(0,r.useState)(),T=(0,a.Z)(S,2),N=T[0],z=T[1],M=(0,r.useState)(),F=(0,a.Z)(M,2),L=F[0],D=F[1],A=[];if(f&&f)if(f&&"credit"===Z){null===f||void 0===f||f.map((function(e){return A.push(e.creditPackageId.toString())}))}else if(f&&"package"===Z){null===f||void 0===f||f.map((function(e){return A.push(e.packageId.toString())}))}var E=(0,r.useState)(A),Y=(0,a.Z)(E,2),O=Y[0],B=Y[1],V=function(e){var n=(0,g.P)(e);if("credit"===Z)if("string"==typeof n.message)z((0,i.Z)((0,i.Z)({},N),{},{error:n.message}));else{var t=(0,h.O)(n.message,[]);x.setFields(t),z((0,i.Z)((0,i.Z)({},N),{},{error:""}))}else if("package"===Z)if("string"==typeof n.message)D((0,i.Z)((0,i.Z)({},L),{},{error:n.message}));else{var o=(0,h.O)(n.message,[]);x.setFields(o),D((0,i.Z)((0,i.Z)({},L),{},{error:""}))}},q=function(){"credit"===Z?z((0,i.Z)((0,i.Z)({},N),{},{error:""})):"package"===Z&&D((0,i.Z)((0,i.Z)({},L),{},{error:""}))},_=(0,r.useCallback)((function(){"credit"===Z?k.getAllRecords().then((function(e){e.data&&e.data.data&&z((0,i.Z)((0,i.Z)({},e.data),{},{loading:!1}))})).catch((function(e){V(e)})):"package"===Z&&y.getAllRecords().then((function(e){e.data&&e.data.data&&D((0,i.Z)((0,i.Z)({},e.data),{},{loading:!1}))})).catch((function(e){V(e)}))}),[x,l,k,Z,y]),U=function(e,n){return n.description.indexOf(e.toLowerCase())>-1},K=function(e){B(e)};(0,r.useEffect)((function(){z({loading:!0}),_()}),[o,x]);var Q=function(){var e=(0,H.Z)((0,X.Z)().mark((function e(n){var t,o,a,r,c,u;return(0,X.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.creditPackageIds||"credit"!==Z){e.next=17;break}if(z((0,i.Z)((0,i.Z)({},N),{},{buttonLoading:!0})),o=null===n||void 0===n||null===(t=n.creditPackageIds)||void 0===t?void 0:t.map((function(e){return Number(e)})),z((0,i.Z)((0,i.Z)({},N),{},{buttonLoading:!1})),!(o.length>0)){e.next=7;break}return e.next=7,b.createRecord({creditPackageIds:o,promotionId:l}).then((function(e){s.ZP.success("Saved Successfully")})).catch((function(e){V(e),z((function(e){return(0,i.Z)((0,i.Z)({},e),{},{loading:!1})}))}));case 7:if(a=[],null===A||void 0===A||A.map((function(e){return!O.includes(e)&&a.push(Number(e))})),!((null===a||void 0===a?void 0:a.length)>0)){e.next=12;break}return e.next=12,b.deleteMultipleRecords(l,a).catch((function(e){s.ZP.error(e.message)}));case 12:v(),d(),z((function(e){return(0,i.Z)((0,i.Z)({},e),{},{loading:!1})})),e.next=36;break;case 17:if(!n.packageIds||"package"!==Z){e.next=34;break}if(D((0,i.Z)((0,i.Z)({},L),{},{buttonLoading:!0})),c=null===n||void 0===n||null===(r=n.packageIds)||void 0===r?void 0:r.map((function(e){return Number(e)})),D((0,i.Z)((0,i.Z)({},L),{},{buttonLoading:!1})),!(c.length>0)){e.next=24;break}return e.next=24,j.createRecord({packageIds:c,promotionId:l}).then((function(e){s.ZP.success("Saved Successfully")})).catch((function(e){V(e),D((function(e){return(0,i.Z)((0,i.Z)({},e),{},{loading:!1})}))}));case 24:if(u=[],null===A||void 0===A||A.map((function(e){return!O.includes(e)&&u.push(Number(e))})),!((null===u||void 0===u?void 0:u.length)>0)){e.next=29;break}return e.next=29,j.deleteMultipleRecords(l,u).catch((function(e){s.ZP.error(e.message)}));case 29:v(),d(),D((function(e){return(0,i.Z)((0,i.Z)({},e),{},{loading:!1})})),e.next=36;break;case 34:s.ZP.info("No changes made"),d();case 36:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsx)(u.P0,{visible:o,closable:!0,onCancel:d,titleText:"credit"===Z?"Manage Credit Packages":"Manage Packages",showFooter:!1,children:"credit"===Z&&null!==N&&void 0!==N&&N.loading||"package"===Z&&null!==L&&void 0!==L&&L.loading?(0,w.jsx)(p.Z,{items:10}):(0,w.jsxs)(c.Z,{className:m.Z.form,onFinish:Q,form:x,children:["credit"===Z&&(0,w.jsxs)(w.Fragment,{children:[(null===N||void 0===N?void 0:N.error)&&(0,w.jsx)(u.EQ,{description:null===N||void 0===N?void 0:N.error,isClosable:!0,onClose:q}),(0,w.jsx)("div",{children:(0,w.jsx)(c.Z.Item,{name:"creditPackageIds",rules:[{required:!1}],children:(0,w.jsx)(G.Z,{dataSource:null===N||void 0===N||null===(n=N.data)||void 0===n?void 0:n.map((function(e,n){var t;return{key:e.id.toString(),title:e.localization[0].title,description:null===(t=e.localization[0].title)||void 0===t?void 0:t.toLowerCase()}})),listStyle:{width:250,height:400},showSearch:!0,filterOption:U,targetKeys:O,onChange:K,render:function(e){return e.title}})})}),(0,w.jsxs)("div",{className:m.Z.footer,children:[(0,w.jsx)(u.op,{size:"normal",fontSize:"sm",onClick:d,type:"plain",children:"Cancel"}),(0,w.jsx)(u.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===N||void 0===N?void 0:N.buttonLoading,children:"Save"})]})]}),"package"===Z&&(0,w.jsxs)(w.Fragment,{children:[(null===L||void 0===L?void 0:L.error)&&(0,w.jsx)(u.EQ,{description:null===L||void 0===L?void 0:L.error,isClosable:!0,onClose:q}),(0,w.jsx)("div",{children:(0,w.jsx)(c.Z.Item,{name:"packageIds",rules:[{required:!1}],children:(0,w.jsx)(G.Z,{dataSource:null===L||void 0===L||null===(t=L.data)||void 0===t?void 0:t.map((function(e,n){var t;return{key:e.id.toString(),title:e.localization[0].title,description:null===(t=e.localization[0].title)||void 0===t?void 0:t.toLowerCase()}})),listStyle:{width:250,height:400},showSearch:!0,filterOption:U,targetKeys:O,onChange:K,render:function(e){return e.title}})})}),(0,w.jsxs)("div",{className:m.Z.footer,children:[(0,w.jsx)(u.op,{size:"normal",fontSize:"sm",onClick:d,type:"plain",children:"Cancel"}),(0,w.jsx)(u.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:null===L||void 0===L?void 0:L.buttonLoading,children:"Save"})]})]})]})})},Q=t(42623),$=function(e){return e.CREATE="createPromotion",e.UPDATE="updatePromotion",e.DELETE="deletePromotion",e.READ="readPromotion",e}({}),W=t(18515),J=[{text:"Home",isLink:!0,path:"/"},{isLink:!0,text:"Site Settings",path:"/siteSettings"},{isLink:!1,text:"Promotion"}];var ee=function(){var e,n,t,l,c=(0,S.aY)($),m=(0,V.v9)((function(e){return e.usersReducer})).userPermissions,p=m.createPromotion,v=m.readPromotion,h=m.updatePromotion,g=(0,r.useState)({editType:"new",recordId:0,openModal:!1}),Z=(0,a.Z)(g,2),P=Z[0],x=Z[1],k=(0,r.useMemo)((function(){return new b}),[]),y=(0,r.useMemo)((function(){return new f.Y}),[]),j=(0,r.useState)(""),C=(0,a.Z)(j,2),I=C[0],R=C[1],T=(0,Q.N)(I,500),z=(0,r.useState)({promoCode:"",discountType:"",country:0,isPublished:void 0,status:""}),M=(0,a.Z)(z,2),F=M[0],L=M[1],D=(0,r.useState)([]),A=(0,a.Z)(D,2),E=A[0],O=A[1],B=(0,r.useState)(!1),q=(0,a.Z)(B,2),_=q[0],X=q[1],H=function(e){var n=null===e||void 0===e?void 0:e.target,t=n.name,a=n.value;L((0,i.Z)((0,i.Z)({},F),{},(0,o.Z)({},t,a)))},G=(0,r.useCallback)((function(e,n){e&&(X(!0),L((0,i.Z)((0,i.Z)({},F),{},(0,o.Z)({},e,n))))}),[F]),ee=(0,r.useState)({isLoading:!1,error:{},data:[]}),ne=(0,a.Z)(ee,2),te=ne[0],oe=ne[1],ie=(0,r.useState)({recordId:0,openModal:!1,recordData:{},type:"credit"}),ae=(0,a.Z)(ie,2),re=ae[0],de=ae[1],le=function(){!1!==p?x((0,i.Z)((0,i.Z)({},P),{},{openModal:!P.openModal,editType:"new"})):s.ZP.error("You don't have permission to create new record")},ce=function(e){oe((0,i.Z)((0,i.Z)({},te),{},{loading:!0})),k.getAllRecords(e).then((function(e){oe(e.data)})).catch((function(e){oe((0,i.Z)((0,i.Z)({},te),{},{loading:!1}))}))},se=(0,r.useCallback)((function(){var e,n,t=(null===(e=F.dateRange)||void 0===e?void 0:e[0])||"",o=(null===(n=F.dateRange)||void 0===n?void 0:n[1])||"",i=t?(0,Y.Ny)(t,"yy-mm-dd"):void 0,a=o?(0,Y.Ny)(o,"yy-mm-dd"):void 0,r={promoCode:F.promoCode||void 0,discountType:F.discountType||void 0,country:F.country||void 0,isPublished:F.isPublished||void 0,status:F.status||void 0,title:T||void 0,fromDate:i,toDate:a};ce(r)}),[F,T]),ue=(0,r.useCallback)((function(e,n){var t,o,i=(null===(t=F.dateRange)||void 0===t?void 0:t[0])||"",a=(null===(o=F.dateRange)||void 0===o?void 0:o[1])||"",r=i?(0,Y.Ny)(i,"yy-mm-dd"):void 0,d=a?(0,Y.Ny)(a,"yy-mm-dd"):void 0,l={page:e,perPage:n,promoCode:F.promoCode||void 0,discountType:F.discountType||void 0,country:F.country||void 0,isPublished:F.isPublished||void 0,status:F.status||void 0,title:T||void 0,fromDate:r,toDate:d};ce(l)}),[F,T]);return(0,r.useEffect)((function(){y.getAllRecords().then((function(e){O(e.data.data)})).catch((function(e){var n,t;console.error((null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||(null===e||void 0===e?void 0:e.message))}))}),[y]),(0,r.useEffect)((function(){se()}),[T]),(0,r.useEffect)((function(){_&&se();var e=setTimeout((function(){X(!1)}),2e3);return function(){return clearTimeout(e)}}),[_,F,se]),(0,w.jsxs)(d.default,{permissionSlug:c,children:[(0,w.jsx)(u.mr,{heading:"Promotion",buttonText:"New Promotion",onButtonClick:le,breadCrumbData:J,showAdd:!0===p,filters:!0===v?(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{children:(0,w.jsx)(u.t7,{placeHolder:"Search...",icon:(0,w.jsx)("img",{src:"/images/searchIcon.svg",alt:"Search Icon"}),size:"w100",className:"py-1",value:I,onChange:function(e){var n=e.currentTarget.value;R(n)}})}),(0,w.jsx)("div",{children:(0,w.jsx)(u.Xy,{type:"radio",label:"Discount Type",name:"discountType",value:null===F||void 0===F?void 0:F.discountType,options:[],onChange:H,onReset:function(){return G("discountType","")},onUpdate:se})}),(0,w.jsx)("div",{children:(0,w.jsx)(u.Xy,{type:"input",label:"Promo Code",name:"promoCode",value:null===F||void 0===F?void 0:F.promoCode,onChange:H,onReset:function(){return G("promoCode","")},onUpdate:se})}),(0,w.jsx)("div",{children:(0,w.jsx)(u.Xy,{type:"radio",label:"Status",name:"status",value:null===F||void 0===F?void 0:F.status,options:[],onChange:H,onReset:function(){return G("status","")},onUpdate:se})}),(0,w.jsx)("div",{children:(0,w.jsx)(u.Xy,{type:"radio",label:"Published",name:"isPublished",options:[{label:"Yes",value:"true"},{label:"No",value:"false"}],value:String(null===F||void 0===F?void 0:F.isPublished),onChange:H,onReset:function(){return G("isPublished","")},onUpdate:se})}),(0,w.jsx)("div",{children:(0,w.jsx)(u.Xy,{type:"datepicker",label:"Date",name:"dateRange",onChange:function(e){L((0,i.Z)((0,i.Z)({},F),{},{dateRange:e}))},onReset:function(){return G("dateRange",[])},onUpdate:se})}),(0,w.jsx)("div",{children:(0,w.jsx)(u.Xy,{type:"radio",label:"Country",name:"country",value:String(null===F||void 0===F?void 0:F.country),options:null===E||void 0===E?void 0:E.map((function(e){return{label:e.name,value:String(e.id)}})),onChange:H,onReset:function(){return G("country","")},onUpdate:se})})]}):null}),!0===v&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(U,{tableData:te.data,tableLoading:te.loading,onEditIconClick:function(e){!1!==h?x((0,i.Z)((0,i.Z)({},P),{},{editType:"edit",recordId:e.id,openModal:!0})):s.ZP.error("You don't have permission to update this record")},reloadTableData:ce,onManageClick:function(e,n){!1!==h?de((0,i.Z)((0,i.Z)({},re),{},{recordId:e.id,recordData:"credit"===n?e.creditPackagePromotions:e.packagePromotions,openModal:!0,type:n})):s.ZP.error("You don't have permission to manage this record")}}),(0,w.jsx)(u.tl,{total:null===te||void 0===te||null===(e=te.meta)||void 0===e?void 0:e.total,current:null===te||void 0===te||null===(n=te.meta)||void 0===n?void 0:n.page,defaultPageSize:null!==te&&void 0!==te&&null!==(t=te.meta)&&void 0!==t&&t.perPage?null===te||void 0===te||null===(l=te.meta)||void 0===l?void 0:l.perPage:10,pageSizeOptions:[10,20,50,100],onChange:ue})]}),!1===v&&(0,w.jsx)(W.a$,{mainMessage:"You don't have permission to view this data"}),P.openModal&&(0,w.jsx)(N,{record:P.recordId,type:P.editType,reloadTableData:ce,onCancel:le,openModal:P.openModal,permissions:m}),re.openModal&&(0,w.jsx)(K,{record:re.recordId,recordData:re.recordData,type:re.type,reloadTableData:ce,onCancel:function(){return de((0,i.Z)((0,i.Z)({},re),{},{openModal:!1}))},openModal:re.openModal})]})}},59816:function(e,n,t){t.d(n,{Y:function(){return d}});var o=t(43144),i=t(15671),a=t(49075),r=t(3135),d=(0,o.Z)((function e(){var n=this;(0,i.Z)(this,e),this.endPoint="country",this.allEndpoint="country/all",this.getAllRecords=function(){return a.Z.get(n.allEndpoint)},this.getAvailableRecords=function(){return a.Z.get("".concat(n.endPoint,"/available-country"))},this.getRecordById=function(e){return a.Z.get("".concat(n.endPoint,"/").concat(e))},this.deleteRecord=function(e){return a.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return a.Z.post(n.endPoint+"/",e,{headers:r.C})},this.updateRecord=function(e,t){return a.Z.patch("".concat(n.endPoint,"/").concat(t),e,{headers:r.C})}}))},5227:function(e,n,t){t.d(n,{G:function(){return d},d:function(){return l}});var o=t(43144),i=t(15671),a=t(49075),r=t(3135),d=(0,o.Z)((function e(){var n=this;(0,i.Z)(this,e),this.endPoint="credit-package",this.createRecord=function(e){return a.Z.post(n.endPoint+"/",e,{headers:r.C})},this.getAllRecords=function(){return a.Z.get(n.endPoint)},this.getAllPublished=function(){return a.Z.get(n.endPoint+"/findPublished")},this.getRecordById=function(e){return a.Z.get("".concat(n.endPoint,"/").concat(e,"?all=true"))},this.updateRecord=function(e,t){return a.Z.patch("".concat(n.endPoint,"/").concat(t),e,{headers:r.C})},this.deleteRecord=function(e){return a.Z.delete("".concat(n.endPoint,"/").concat(e))}})),l=(0,o.Z)((function e(){var n=this;(0,i.Z)(this,e),this.endPoint="credit-package-promotions",this.createRecord=function(e){return a.Z.post(n.endPoint+"/",e)},this.getAllRecords=function(){return a.Z.get(n.endPoint)},this.getRecordById=function(e){return a.Z.get("".concat(n.endPoint,"/").concat(e))},this.deleteMultipleRecords=function(e,t){return a.Z.delete("".concat(n.endPoint,"/removeMultiple/").concat(e),{params:{packageIds:t}})},this.deleteRecordById=function(e,t){return a.Z.delete("".concat(n.endPoint,"/").concat(e,"/").concat(t))},this.updateRecord=function(e){return a.Z.patch(n.endPoint+"/",e)}}))}}]);