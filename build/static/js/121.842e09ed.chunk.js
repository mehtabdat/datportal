"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[121],{87971:function(e,t,n){var r=n(1413),o=n(45987),i=n(47313),a=n(86136),c=n(37388),d=n(67907),s=n(1623),u=n(46417),l=["label","hint","asterisk","helperText","className"],p=a.Z.TextArea,m=(0,i.forwardRef)((function(e,t){var n=e.label,i=e.hint,a=e.asterisk,m=e.helperText,f=e.className,h=(0,o.Z)(e,l);return(0,u.jsxs)(u.Fragment,{children:[n?(0,u.jsxs)("label",{className:s.Z.labelWrap,children:[(0,u.jsx)("span",{children:n}),i?(0,u.jsx)(c.Z,{title:i,children:(0,u.jsx)(d.Z,{})}):null,a?(0,u.jsx)("span",{className:s.Z.asterisk,children:"*"}):null]}):null,(0,u.jsx)(p,(0,r.Z)((0,r.Z)({ref:t},h),{},{className:"".concat(s.Z.inpt," ").concat(f)})),m?(0,u.jsx)("small",{className:s.Z.helperText,children:m}):null]})}));m.defaultProps={autoSize:{minRows:4},placeholder:"Enter text here",asterisk:!1,hint:""},t.Z=m},60121:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(74165),o=n(15861),i=n(1413),a=n(29439),c=n(47313),d=n(82626),s=n(85554),u=n(55291),l=n(59491),p=n(18515),m=n(13866),f=n(76997),h=n(54060),Z=n(86136),x=n(41586),v=n(3109),P=n(5900),g=n(98676),j=n(3113),y=n(46417),k=function(e){var t=e.record,n=e.onEditIconClick,r=e.reloadTableData,o=e.permissions.deleteProduct,d=(0,c.useMemo)((function(){return new f.s}),[]),s=(0,c.useState)({confirmLoading:!1,openPopConfirm:!1}),l=(0,a.Z)(s,2),p=l[0],m=l[1];return(0,y.jsxs)("div",{className:j.Z.actions,children:[(0,y.jsx)("span",{onClick:function(){return n(t)},children:(0,y.jsx)("img",{src:"/images/editicon.svg",alt:"Edit Icon"})}),(0,y.jsx)(P.Z,{open:p.openPopConfirm,placement:"rightBottom",title:"Are you sure?",onConfirm:function(){if(m((function(e){return(0,i.Z)((0,i.Z)({},e),{},{confirmLoading:!0})})),!1===o)return u.ZP.error("You don't have permission to delete this record, please contact your admin."),void m((function(e){return(0,i.Z)((0,i.Z)({},e),{},{confirmLoading:!1,openPopConfirm:!1})}));d.deleteRecord(t.id).then((function(){m((function(e){return(0,i.Z)((0,i.Z)({},e),{},{openPopConfirm:!1,confirmLoading:!1})})),r()})).catch((function(e){var t,n,r=null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message;u.ZP.error(r||"Something went wrong, please try again later."),m((function(e){return(0,i.Z)((0,i.Z)({},e),{},{confirmLoading:!1,openPopConfirm:!1})}))}))},onCancel:function(){return m((0,i.Z)((0,i.Z)({},p),{},{openPopConfirm:!1}))},okButtonProps:{loading:p.confirmLoading},okText:"Yes",cancelText:"No",onOpenChange:function(e){e||m((0,i.Z)((0,i.Z)({},p),{},{openPopConfirm:!1}))},children:(0,y.jsx)(g.Z,{className:j.Z.bg__red,onClick:function(){return m((function(e){return(0,i.Z)((0,i.Z)({},e),{},{openPopConfirm:!0})}))}})})]})},C=function(e){var t=e.tableData,n=e.tableLoading,r=e.onEditIconClick,o=e.reloadTableData,i=e.permissions,d=(0,c.useState)(""),s=(0,a.Z)(d,2),u=s[0],l=s[1],p=[{title:"S.No",dataIndex:"index",key:"index",render:function(e,t,n){return n+1},width:"6%"},{title:"Product Code",dataIndex:"productCode",key:"productCode",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Title",dataIndex:"title",key:"title",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Description",dataIndex:"description",key:"description",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Quantity",dataIndex:"quantity",key:"quantity",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Unit Price",dataIndex:"unitPrice",key:"unitPrice",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e})}},{title:"Account",dataIndex:"Account",key:"Account",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e?"".concat(null===e||void 0===e?void 0:e.accountCode," - ").concat(null===e||void 0===e?void 0:e.title):""})}},{title:"Tax Rate",dataIndex:"TaxRate",key:"TaxRate",render:function(e){return(0,y.jsx)(v.Z,{color:"dark-main",size:"sm",children:e?"".concat(null===e||void 0===e?void 0:e.taxType," - ").concat(null===e||void 0===e?void 0:e.title," (").concat(null===e||void 0===e?void 0:e.rate,"%)"):""})}},{title:"Actions",dataIndex:"actions",key:"actions",render:function(e,t){return(0,y.jsx)(k,{record:t,onEditIconClick:r,reloadTableData:o,permissions:i})},width:"120px"}];return(0,y.jsxs)("div",{children:[(0,y.jsx)(Z.Z,{type:"input",placeholder:"Search by title",onChange:function(e){l(e.target.value)},allowClear:!0,style:{border:"1.5px solid var(--color-border)",borderRadius:"0.25rem",width:"25%",marginBottom:"1rem"},prefix:(0,y.jsx)("img",{style:{padding:"0rem 0.5rem"},src:"/images/searchIcon.svg",alt:""})}),(0,y.jsx)(x.Z,{sticky:!0,dataSource:null===t||void 0===t?void 0:t.filter((function(e){var t,n,r,o;return(null===e||void 0===e||null===(t=e.title)||void 0===t||null===(n=t.toLowerCase())||void 0===n?void 0:n.includes(u.toLowerCase()))||(null===e||void 0===e||null===(r=e.productCode)||void 0===r||null===(o=r.toLowerCase())||void 0===o?void 0:o.includes(u.toLowerCase()))})),columns:p,pagination:!1,scroll:{x:991},loading:n,rowKey:function(e){return"product-".concat(e.id)}})]})},w=n(29079),b=n(25019),I=n(3798),R=n(87971),T=n(18223),S=n(75010),A=function(e){var t=e.openModal,n=e.onCancel,r=e.type,o=e.record,i=e.reloadTableData,s=e.permissions,l=s.createProduct,p=s.updateProduct,m=b.Z.useForm(),h=(0,a.Z)(m,1)[0],Z=(0,c.useMemo)((function(){return new f.s}),[]),x=(0,c.useMemo)((function(){return new T.Y}),[]),v=(0,c.useMemo)((function(){return new S.L}),[]),P=(0,w.K2)({method:function(){return Z.getRecordById(o)},condition:"edit"===r&&0!==o}).data,g=(0,w.$5)({method:function(){return x.getAllRecords()}}).data,k=(0,w.$5)({method:function(){return v.getAllRecords()}}).data,C=(0,c.useState)(!1),A=(0,a.Z)(C,2),z=A[0],L=A[1];return(0,c.useEffect)((function(){if("edit"===r&&P){var e=P.title,t=P.productCode,n=P.description,o=P.quantity,i=P.unitPrice,a=P.accountId,c=P.taxRateId;h.setFieldsValue({title:e,productCode:t,description:n,quantity:o,unitPrice:i,accountId:a,taxRateId:c})}else h.resetFields()}),[r,P]),(0,y.jsx)(d.P0,{visible:t,closable:!0,onCancel:n,showFooter:!1,titleText:"edit"===r?"Edit Product":"Add New Product",children:(0,y.jsxs)(b.Z,{className:j.Z.form,onFinish:function(e){switch(L(!0),r){case"new":!0===l?Z.createRecord(e).then((function(e){var t;u.ZP.success((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Product created successfully"),i(),n()})).catch((function(e){var t=(0,I.S3)(e);u.ZP.error(t||"Something went wrong, please try again later.")})).finally((function(){L(!1)})):(L(!1),u.ZP.error("You don't have permission to create a new record"));break;case"edit":!0===p?Z.updateRecord(e,o).then((function(){i(),n()})).catch((function(e){var t=(0,I.S3)(e);u.ZP.error(t||"Something went wrong, please try again later.")})).finally((function(){L(!1)})):u.ZP.error("You don't have permission to update this record");break;default:L(!1)}},form:h,children:[(0,y.jsx)("div",{children:(0,y.jsx)(b.Z.Item,{name:"productCode",rules:[{required:!0,message:"Please add a product code"}],children:(0,y.jsx)(d.t7,{label:"Product Code",asterisk:!0,size:"w100"})})}),(0,y.jsx)("div",{children:(0,y.jsx)(b.Z.Item,{name:"title",rules:[{required:!0,message:"Please add a title"}],children:(0,y.jsx)(d.t7,{label:"Title",asterisk:!0,size:"w100"})})}),(0,y.jsx)("div",{children:(0,y.jsx)(b.Z.Item,{name:"description",children:(0,y.jsx)(R.Z,{label:"Description",placeholder:"Add a description"})})}),(0,y.jsxs)("div",{children:[(0,y.jsx)(b.Z.Item,{name:"quantity",rules:[{required:!0,message:"Please add a quantity"}],children:(0,y.jsx)(d.t7,{label:"Quantity",placeHolder:"Add a quantity",asterisk:!0,size:"w100"})}),(0,y.jsx)(b.Z.Item,{name:"unitPrice",rules:[{required:!0,message:"Please add a unit price"}],children:(0,y.jsx)(d.t7,{label:"Unit Price",placeHolder:"Add a unit price",asterisk:!0,size:"w100"})})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(b.Z.Item,{name:"accountId",children:(0,y.jsx)(d.AP,{label:"Account",options:null===g||void 0===g?void 0:g.map((function(e){return{label:e.accountCode+" - "+e.title,value:e.id}}))})}),(0,y.jsx)(b.Z.Item,{name:"taxRateId",children:(0,y.jsx)(d.AP,{label:"Tax Rate",options:null===k||void 0===k?void 0:k.map((function(e){return{label:e.taxType+" - "+e.title,value:e.id}}))})})]}),(0,y.jsxs)("div",{className:j.Z.footer,children:[(0,y.jsx)(d.op,{size:"normal",fontSize:"sm",onClick:n,type:"plain",children:"Cancel"}),(0,y.jsx)(d.op,{type:"primary",size:"normal",fontSize:"sm",htmlType:"submit",loading:z,children:"Submit"})]})]})})},z=n(19552),L=[{text:"Home",isLink:!0,path:"/"},{isLink:!1,text:"Product"}],N=function(){var e=(0,I.aY)(m.B),t=(0,s.v9)((function(e){return e.usersReducer})).userPermissions,n=t.readProduct,Z=t.createProduct,x=t.updateProduct,v=(0,c.useMemo)((function(){return new f.s}),[]),P=(0,c.useMemo)((function(){return new z.l}),[]),g=(0,w.$5)({method:v.getAllRecords}),j=g.data,k=g.onRefresh,b=g.loading,R=(0,c.useState)({type:"new",recordId:0,open:!1}),T=(0,a.Z)(R,2),S=T[0],N=T[1],q=(0,c.useState)(!1),D=(0,a.Z)(q,2),B=D[0],Y=D[1],E=function(){!1!==Z?N((0,i.Z)((0,i.Z)({},S),{},{open:!S.open,type:"new"})):u.ZP.error("You don't have permission to update this record")},M=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.prev=1,e.next=4,P.syncProducts();case 4:u.ZP.success("Synced successfully"),k(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t=(0,I.S3)(e.t0),u.ZP.error(t||"Something went wrong");case 12:return e.prev=12,Y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)(h.Z,{permissionSlug:e,children:[(0,y.jsx)(d.mr,{heading:"Product",buttonText:"Add Product",onButtonClick:E,breadCrumbData:L,showAdd:!!Z,excelExport:(0,y.jsx)(l.Z,{loading:B,style:{marginRight:"1rem",height:"2.25rem"},onClick:M,children:"Sync with Xero"})}),!0===n&&(0,y.jsx)(C,{tableData:j,tableLoading:b,onEditIconClick:function(e){!1!==x?N((0,i.Z)((0,i.Z)({},S),{},{open:!S.open,type:"edit",recordId:e.id})):u.ZP.error("You don't have permission to update this record")},reloadTableData:k,permissions:t}),!1===n&&(0,y.jsx)(p.a$,{mainMessage:"You don't have permission to view this data"}),S.open&&(0,y.jsx)(A,{type:S.type,openModal:S.open,record:S.recordId,onCancel:E,reloadTableData:k,permissions:t})]})}},18223:function(e,t,n){n.d(t,{Y:function(){return a}});var r=n(43144),o=n(15671),i=n(49075),a=(0,r.Z)((function e(){var t=this;(0,o.Z)(this,e),this.endPoint="account",this.getAllRecords=function(e){return i.Z.get(t.endPoint,{params:e})},this.getRecordById=function(e){return i.Z.get("".concat(t.endPoint,"/").concat(e))},this.deleteRecord=function(e){return i.Z.delete("".concat(t.endPoint,"/").concat(e))},this.createRecord=function(e){return i.Z.post(t.endPoint,e)},this.updateRecord=function(e,n){return i.Z.patch("".concat(t.endPoint,"/").concat(n),e)}}))},76997:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(43144),o=n(15671),i=n(49075),a=(0,r.Z)((function e(){var t=this;(0,o.Z)(this,e),this.endPoint="product",this.getAllRecords=function(e){return i.Z.get(t.endPoint,{params:e})},this.findByCode=function(e){return i.Z.get("".concat(t.endPoint,"/find-by-product-code/").concat(e))},this.getRecordById=function(e){return i.Z.get("".concat(t.endPoint,"/").concat(e))},this.deleteRecord=function(e){return i.Z.delete("".concat(t.endPoint,"/").concat(e))},this.createRecord=function(e){return i.Z.post(t.endPoint,e)},this.updateRecord=function(e,n){return i.Z.patch("".concat(t.endPoint,"/").concat(n),e)}}))},75010:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(43144),o=n(15671),i=n(49075),a=(0,r.Z)((function e(){var t=this;(0,o.Z)(this,e),this.endPoint="tax-rate",this.getAllRecords=function(e){return i.Z.get(t.endPoint,{params:e})},this.getRecordById=function(e){return i.Z.get("".concat(t.endPoint,"/").concat(e))},this.deleteRecord=function(e){return i.Z.delete("".concat(t.endPoint,"/").concat(e))},this.createRecord=function(e){return i.Z.post(t.endPoint,e)},this.updateRecord=function(e,n){return i.Z.patch("".concat(t.endPoint,"/").concat(n),e)}}))}}]);