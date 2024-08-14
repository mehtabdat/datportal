"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[9230],{87971:function(e,n,t){var i=t(1413),r=t(45987),s=t(47313),a=t(86136),o=t(37388),l=t(67907),c=t(1623),d=t(46417),u=["label","hint","asterisk","helperText","className"],f=a.Z.TextArea,h=(0,s.forwardRef)((function(e,n){var t=e.label,s=e.hint,a=e.asterisk,h=e.helperText,m=e.className,p=(0,r.Z)(e,u);return(0,d.jsxs)(d.Fragment,{children:[t?(0,d.jsxs)("label",{className:c.Z.labelWrap,children:[(0,d.jsx)("span",{children:t}),s?(0,d.jsx)(o.Z,{title:s,children:(0,d.jsx)(l.Z,{})}):null,a?(0,d.jsx)("span",{className:c.Z.asterisk,children:"*"}):null]}):null,(0,d.jsx)(f,(0,i.Z)((0,i.Z)({ref:n},p),{},{className:"".concat(c.Z.inpt," ").concat(m)})),h?(0,d.jsx)("small",{className:c.Z.helperText,children:h}):null]})}));h.defaultProps={autoSize:{minRows:4},placeholder:"Enter text here",asterisk:!1,hint:""},n.Z=h},9230:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var i=t(4942),r=t(1413),s=t(93433),a=t(29439),o=t(47313),l=t(58467),c=t(2135),d=t(25019),u=t(55291),f=t(85554),h=t(54060),m=function(e){return e.basic_info="basic_info",e.deadline_info="deadline_info",e}({}),p=t(3109),v={container:"styles_container__0Sl+E",nav:"styles_nav__qVf1w",divider:"styles_divider__wpKBS",textWithIcon:"styles_textWithIcon__0LjCO",active:"styles_active__110-b",done:"styles_done__yVdnW",wrap:"styles_wrap__LExZ7",bodyWrap:"styles_bodyWrap__HiUhy",heading:"styles_heading__cFEv+",backBtn:"styles_backBtn__s+yuj",form:"styles_form__c6SYv",formItems:"styles_formItems__nFRyf",list:"styles_list__uPWYN",datePicker:"styles_datePicker__tSJxR",footer:"styles_footer__Pxujl",tab:"styles_tab__hVtgM",activeTab:"styles_activeTab__cxkN9",flexItem:"styles_flexItem__djyD2",dragger:"styles_dragger__EOgb8",numberOfUploads:"styles_numberOfUploads__JpE90",imageWrap:"styles_imageWrap__IglY4",imageError:"styles_imageError__m8mfw",amenitiesWrap:"styles_amenitiesWrap__EJ11c",dropDownWrap:"styles_dropDownWrap__BUwDs",clientId:"styles_clientId__Q-A5y",projectFileLinks:"styles_projectFileLinks__3UBb7",projectFileLink:"styles_projectFileLink__DwNrO",projectFileLink__deleteIcon:"styles_projectFileLink__deleteIcon__CpfYO",linkFormContainer:"styles_linkFormContainer__x1983",projectFilesLinkName:"styles_projectFilesLinkName__9g7og"},j=t(46417),g=function(e){var n=e.headings,t=e.children,i=e.onBackClick,r=e.showBackButton,s=void 0===r||r;return(0,j.jsxs)("div",{className:v.bodyWrap,children:[(0,j.jsxs)("div",{className:v.heading,children:[s&&(0,j.jsx)("img",{src:"/images/west.svg",alt:"",onClick:i}),(0,j.jsx)(p.Z,{type:"h1",color:"dark-main",size:"lg",weight:"semi",className:s?"":"text-center w-100",children:null===n||void 0===n?void 0:n.heading}),s&&(0,j.jsx)("span",{})]}),(0,j.jsxs)("div",{className:v.subHeading,children:[(0,j.jsx)(p.Z,{type:"h3",color:"dark-main",weight:"semi",children:null===n||void 0===n?void 0:n.subHeading}),(0,j.jsx)(p.Z,{type:"p",color:"dark-sub",size:"sm",children:null===n||void 0===n?void 0:n.description})]}),t]})};g.defaultProps={headings:{heading:"Heading",subHeading:"Sub Heading",description:"Description",buttonText:"Continue"},children:void 0,onBackClick:function(){}};var b=g,y=t(82626),x=t(49355),_=t(3798),Z={heading:"Basic Informaton",subHeading:"Edit Basic Informaton",buttonText:"Save & Continue",description:"Please enter the basic informaton of the project."},k=function(e){var n=e.form,t=e.onFinish,i=e.options,s=e.searchTerms,a=e.loading,o=i.searchedClients,l=i.searchedClientsRep,c=i.organization,u=i.projectType,f=s.setSearchClient,h=s.setSearchClientRep;return(0,j.jsx)(b,{headings:Z,showBackButton:!1,children:a?(0,j.jsx)(x.Z,{items:3}):(0,j.jsxs)(d.Z,{form:n,className:v.form,onFinish:function(e){var n=(0,_.V3)(e.title),i=(0,r.Z)((0,r.Z)({},e),{},{slug:n});t(m.basic_info,i)},children:[(0,j.jsxs)("div",{className:v.formItems,children:[(0,j.jsx)(d.Z.Item,{name:"title",rules:[{required:!0,message:"Please enter the project name."}],children:(0,j.jsx)(y.t7,{label:"Project Title",placeHolder:"Project Title",size:"w100",asterisk:!0})}),(0,j.jsx)(d.Z.Item,{name:"clientId",help:(0,j.jsx)("small",{children:"Client cannot be modified once the project is created as it will affect invoices and quotations associated with this project."}),className:v.clientId,children:(0,j.jsx)(y.Ld,{label:"Client",disabled:!0,onSearch:function(e){return f(e)},options:null===o||void 0===o?void 0:o.map((function(e){return{label:e.name,value:e.id}})),onChange:function(e){return n.setFieldsValue({clientId:e,clientRepresentativeId:void 0})},asterisk:!1})}),(0,j.jsx)(d.Z.Item,{name:"clientRepresentativeId",children:(0,j.jsx)(y.Ld,{label:"Client Representative",asterisk:!1,onSearch:function(e){return h(e)},options:null===l||void 0===l?void 0:l.map((function(e){return{label:e.name,value:e.id}}))})}),(0,j.jsx)(d.Z.Item,{name:"projectTypeId",rules:[{required:!0,message:"Please select a project type!"}],children:(0,j.jsx)(y.AP,{label:"Project Type",asterisk:!0,options:null===u||void 0===u?void 0:u.map((function(e){return{label:e.title,value:e.id}}))})}),(0,j.jsx)(d.Z.Item,{name:"submissionById",rules:[{required:!0,message:"Please select a submission by!"}],children:(0,j.jsx)(y.AP,{label:"Submission By",asterisk:!0,options:null===c||void 0===c?void 0:c.map((function(e){return{label:e.name,value:e.id}}))})}),(0,j.jsx)(d.Z.Item,{name:"referenceNumber",style:{marginBottom:40},help:(0,j.jsx)("small",{children:"Reference is created automatically from approved quotations."}),children:(0,j.jsx)(y.t7,{label:"Reference Number",placeHolder:"Reference Number",size:"w100",disabled:!0})}),(0,j.jsx)(d.Z.Item,{name:"xeroReference",help:(0,j.jsx)("small",{className:"color-yellow-dark",children:"CAUTION: Do not add XERO reference if you are not sure about it."}),children:(0,j.jsx)(y.t7,{type:"text",placeHolder:"Enter Project Xero Reference",label:"Project Xero Reference",size:"w100"})})]}),(0,j.jsx)("div",{className:v.footer,children:(0,j.jsx)(y.op,{type:"primary",size:"normal",htmlType:"submit",children:null===Z||void 0===Z?void 0:Z.buttonText})})]})})},P=t(69309),I=t(39180),N=t(5900),S=t(37936),F=t(70816),R=t.n(F),w=t(32147),D=t(87971),C=P.Z.RangePicker,T={heading:"Deadlines and Priority",subHeading:"Edit Deadlines and Priority",buttonText:"Submit",description:"Please enter the deadlines and priority."},L=[{label:"7 days",value:"7_days"},{label:"15 days",value:"15_days"},{label:"30 days",value:"30_days"},{label:"45 days",value:"45_days"},{label:"90 days",value:"90_days"},{label:"Custom",value:"custom"}],Y=[{label:"High",value:S.Gu.High},{label:"Medium",value:S.Gu.Medium},{label:"Normal",value:S.Gu.Normal}],E=function(e){var n=e.form,t=e.onFinish,i=e.onBackClick,l=e.options,c=e.searchTerms,u=e.states,f=l.searchedProjectIncharge,h=l.searchedSupportEngineers,p=u.projectFileLinks,g=u.setProjectFileLinks,x=c.setSearchProjectIncharge,_=c.setSearchSupportEngineers,Z=(0,o.useCallback)((function(e,t,i){switch(t){case"add":if(p.find((function(n){return n.link===e})))return;var r=[].concat((0,s.Z)(p),[{name:i,link:e}]);g(r),n.setFieldsValue({projectFilesLink:"",projectFilesLinkName:""});break;case"remove":var a=p.filter((function(n){return n.link!==e}));g(a)}}),[p]),k=(0,o.useState)(),P=(0,a.Z)(k,2),F=P[0],E=P[1],B=(0,o.useState)({startDate:"",endDate:""}),M=(0,a.Z)(B,2),V=M[0],z=M[1],O=function(e){var i=new Date,s=R()(i).format("YYYY-MM-DD"),a="";switch(e.deadlineValue){case"7_days":a=R()(i).add(7,"days").format("YYYY-MM-DD");break;case"15_days":a=R()(i).add(15,"days").format("YYYY-MM-DD");break;case"30_days":a=R()(i).add(30,"days").format("YYYY-MM-DD");break;case"45_days":a=R()(i).add(45,"days").format("YYYY-MM-DD");break;case"90_days":a=R()(i).add(90,"days").format("YYYY-MM-DD");break;case"custom":s=V.startDate,a=V.endDate}delete e.deadlineValue,delete e.rangePicker,""!==n.getFieldValue("projectFilesLink")&&Z(e.projectFilesLink,"add");var o="";try{o=JSON.stringify(p)}catch(c){console.error("Some error while parsing links",null===c||void 0===c?void 0:c.message)}var l=(0,r.Z)((0,r.Z)({},e),{},{projectFilesLink:o,priority:e.priority||S.Gu.Normal,startDate:s,endDate:a});t(m.deadline_info,l)};return(0,o.useEffect)((function(){var e=n.getFieldValue("startDate"),t=n.getFieldValue("endDate"),i=L.find((function(n){switch(n.value){case"7_days":return R()(e).add(7,"days").toISOString()===t;case"15_days":return R()(e).add(15,"days").toISOString()===t;case"30_days":return R()(e).add(30,"days").toISOString()===t;case"45_days":return R()(e).add(45,"days").toISOString()===t;case"90_days":return R()(e).add(90,"days").toISOString()===t;case"custom":return!0}}));i&&(E(i.value),n.setFieldsValue({deadlineValue:i.value})),"custom"===(null===i||void 0===i?void 0:i.value)&&(n.setFieldsValue({rangePicker:[R()(e),R()(t)]}),z({startDate:e,endDate:t}))}),[]),(0,j.jsx)(b,{headings:T,onBackClick:i,children:(0,j.jsx)(d.Z,{form:n,className:v.form,onFinish:function(e){return O(e)},children:(0,j.jsxs)("div",{className:v.formItems,children:[(0,j.jsxs)("label",{className:"font-size-sm",children:["Deadline  ",(0,j.jsx)("span",{className:"color-red-yp",children:"*"})]}),(0,j.jsxs)("div",{style:{flexDirection:"column",fontSize:"var(--font-size-sm)",gap:0},children:[(0,j.jsx)(d.Z.Item,{name:"deadlineValue",rules:[{required:!0,message:"Please select deadline"}],children:(0,j.jsx)(I.ZP.Group,{optionType:"button",onChange:function(e){return E(e.target.value)},children:L.map((function(e,n){return(0,j.jsx)(I.ZP.Button,{value:e.value,children:e.label},n)}))})}),"custom"===F&&(0,j.jsx)(d.Z.Item,{name:"rangePicker",rules:[{required:!0,message:"Please select deadline"}],children:(0,j.jsx)(C,{onChange:function(e){var n,t;2===(null===e||void 0===e?void 0:e.length)&&z({startDate:(null===(n=e[0])||void 0===n?void 0:n.format("YYYY-MM-DD"))||"",endDate:(null===(t=e[1])||void 0===t?void 0:t.format("YYYY-MM-DD"))||""})}})})]}),(0,j.jsxs)("div",{style:{flexDirection:"column",fontSize:"var(--font-size-sm)",gap:0,marginTop:10},children:[(0,j.jsx)("div",{children:"Priority"}),(0,j.jsx)(d.Z.Item,{name:"priority",children:(0,j.jsx)(I.ZP.Group,{optionType:"button",children:Y.map((function(e,n){return(0,j.jsx)(I.ZP.Button,{value:e.value,children:e.label},n)}))})})]}),(0,j.jsx)(d.Z.Item,{name:"projectInchargeId",children:(0,j.jsx)(y.Ld,{label:"Who is incharge of this project?",placeholder:"Search for who is incharge of this project",notFoundDescription:"Could not find any user with this name, Please search for another user.",onSearch:function(e){return x(e)},options:null===f||void 0===f?void 0:f.map((function(e){return{label:"".concat(e.firstName," ").concat(e.lastName),value:e.id}})),asterisk:!1})}),(0,j.jsx)(d.Z.Item,{name:"supportEngineersId",children:(0,j.jsx)(y.Ld,{label:"Who are the support engineers? (Optional)",placeholder:"Search for support engineers",mode:"multiple",asterisk:!1,notFoundDescription:"No support engineers found., Please search for support engineers.",onSearch:function(e){return _(e)},options:null===h||void 0===h?void 0:h.map((function(e){return{label:"".concat(e.firstName," ").concat(e.lastName),value:e.id}}))})}),(0,j.jsx)(d.Z.Item,{name:"instructions",children:(0,j.jsx)(D.Z,{label:"More Instructions for Engineers (Optional)",placeholder:"Are there any more instructions for engineers?"})}),(0,j.jsxs)("div",{className:v.linkFormContainer,children:[(0,j.jsx)(d.Z.Item,{style:{width:"50%",marginTop:10},name:"projectFilesLinkName",children:(0,j.jsx)(y.t7,{label:"Link Name",placeHolder:"Name of the link",className:v.projectFilesLinkName,size:"w100"})}),(0,j.jsx)(d.Z.Item,{name:"projectFilesLink",rules:[{required:0===(null===p||void 0===p?void 0:p.length),message:"Please add at least one link."},{type:"url",message:"Please enter a valid url."},function(){return{validator:function(e,n){return n&&null!==p&&void 0!==p&&p.includes(n)?Promise.reject(new Error("This link is already added.")):Promise.resolve()}}}],style:{marginTop:10,width:"50%"},children:(0,j.jsx)(y.t7,{label:"Project Files Link",placeHolder:"Add project file link",size:"w100",suffix:(0,j.jsx)(w.wl,{style:{cursor:"pointer"},onClick:function(){var e=n.getFieldValue("projectFilesLink"),t=n.getFieldValue("projectFilesLinkName");Z(e,"add",t)}})})})]}),(0,j.jsx)("div",{className:v.projectFileLinks,children:null===p||void 0===p?void 0:p.map((function(e,n){return(0,j.jsxs)("div",{className:v.projectFileLink,children:[(0,j.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.name?e.name:e.link}),(0,j.jsx)(N.Z,{title:"Are you sure to delete this link?",okText:"Yes",cancelText:"No",placement:"left",onConfirm:function(){return Z(e.link,"remove")},children:(0,j.jsx)(w.pJ,{className:v.projectFileLink__deleteIcon})})]},"".concat(e,"-").concat(n))}))}),(0,j.jsxs)("div",{className:v.footer,children:[(0,j.jsx)("img",{src:"/images/west.svg",alt:"Back",onClick:i}),(0,j.jsx)(y.op,{type:"primary",size:"normal",htmlType:"submit",children:null===T||void 0===T?void 0:T.buttonText})]})]})})})},B=t(71703),M=function(e){var n=e.currentTab,t=e.onTabClick,i=e.completedTabs,r=(0,o.useState)(),s=(0,a.Z)(r,2),l=s[0],c=(s[1],[{src:"/images/basic-info.svg",text:"Basic Information",tab:m.basic_info},{src:"/images/deadline.svg",text:"Deadlines and Priority",tab:m.deadline_info}]);return(0,j.jsxs)("div",{className:v.nav,children:[(0,j.jsx)(p.Z,{type:"h1",color:"dark-main",size:"lg",children:"Edit Project"}),(0,j.jsx)("div",{className:v.divider}),c.map((function(e){return function(e){return(0,j.jsxs)("span",{className:v.textWithIcon+" "+(e.tab===n?v.active:"")+" "+(i.includes(e.tab)?v.done:""),onClick:function(){return t(e.tab)},children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{}),e.src&&(0,j.jsx)("img",{src:e.src,alt:"".concat(e.text," icon"),width:30,height:30}),(0,j.jsx)("span",{children:e.text})]}),(null===i||void 0===i?void 0:i.includes(e.tab))&&l&&l[e.tab]&&(0,j.jsx)(w.DX,{color:"#ff0000"}),(null===i||void 0===i?void 0:i.includes(e.tab))&&!l&&(0,j.jsx)(B.Z,{}),(null===i||void 0===i?void 0:i.includes(e.tab))&&l&&!l[e.tab]&&(0,j.jsx)(B.Z,{})]},e.tab)}(e)}))]})},V=t(5190),z=t(6027),O=t(38859),A=t(84825),W=t(69591),H=t(96702),q=t(29079),U=t(42623),G=t(48297),J=function(){var e=(0,l.s0)(),n=(0,_.aY)(H.n),t=(0,f.v9)((function(e){return e.usersReducer})).userPermissions.updateProject,p=(0,c.lr)(),g=(0,a.Z)(p,1)[0].get("id")||"",b=d.Z.useForm(),y=(0,a.Z)(b,1)[0],x=d.Z.useForm(),Z=(0,a.Z)(x,1)[0],P=(0,o.useState)("basic_info"),I=(0,a.Z)(P,2),N=I[0],F=I[1],R=(0,o.useState)([]),w=(0,a.Z)(R,2),D=w[0],C=w[1],T=(0,o.useState)(),L=(0,a.Z)(T,2),Y=L[0],B=L[1],J=(0,o.useState)(""),X=(0,a.Z)(J,2),K=X[0],Q=X[1],$=(0,U.N)(K,500),ee=(0,o.useState)(""),ne=(0,a.Z)(ee,2),te=ne[0],ie=ne[1],re=(0,U.N)(te,500),se=(0,o.useState)(""),ae=(0,a.Z)(se,2),oe=ae[0],le=ae[1],ce=(0,U.N)(oe,500),de=(0,o.useState)(""),ue=(0,a.Z)(de,2),fe=ue[0],he=ue[1],me=(0,U.N)(fe,500),pe=(0,o.useState)([]),ve=(0,a.Z)(pe,2),je=ve[0],ge=ve[1],be=(0,o.useState)([]),ye=(0,a.Z)(be,2),xe=ye[0],_e=ye[1],Ze=(0,o.useState)([]),ke=(0,a.Z)(Ze,2),Pe=ke[0],Ie=ke[1],Ne=(0,o.useState)([]),Se=(0,a.Z)(Ne,2),Fe=Se[0],Re=Se[1],we=(0,o.useState)([]),De=(0,a.Z)(we,2),Ce=De[0],Te=De[1],Le=(0,o.useMemo)((function(){return new W.Q}),[]),Ye=(0,o.useMemo)((function(){return new G.V}),[]),Ee=(0,o.useMemo)((function(){return new V.L}),[]),Be=(0,o.useMemo)((function(){return new A.z}),[]),Me=(0,o.useMemo)((function(){return new z.i}),[]),Ve=(0,o.useMemo)((function(){return new O.o}),[]),ze=(0,q.K2)({method:function(){return Le.getRecordById(Number(g))},condition:!!g}),Oe=ze.data,Ae=ze.loading,We=(0,q.$5)({method:Me.getPublishRecords}).data,He=(0,q.$5)({method:Ve.getAllPublishedRecords}).data,qe=(0,q.$5)({method:Ee.findPublished}).data,Ue=(0,q.K2)({method:Ye.findPublished,condition:!(null===Oe||void 0===Oe||!Oe.clientId),initialQuery:{ids:[null===Oe||void 0===Oe?void 0:Oe.clientId]}}).data,Ge=function(e){Ye.findPublished(e).then((function(e){_e((function(n){var t,i,r=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.filter((function(e){return!(null!==n&&void 0!==n&&n.find((function(n){return n.id===e.id})))}));return[].concat((0,s.Z)(n),(0,s.Z)(r))}))})).catch((function(e){u.ZP.error(e.response.data.message)}))},Je=function(e){Be.getAllRecords(e).then((function(e){Ie((function(n){var t,i,r=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.filter((function(e){return!(null!==n&&void 0!==n&&n.find((function(n){return n.id===e.id})))}));return[].concat((0,s.Z)(n),(0,s.Z)(r))}))})).catch((function(e){u.ZP.error(e.response.data.message)}))},Xe=function(e){Be.getAllRecords(e).then((function(e){Re((function(n){var t,i,r=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.filter((function(e){return!(null!==n&&void 0!==n&&n.find((function(n){return n.id===e.id})))}));return[].concat((0,s.Z)(n),(0,s.Z)(r))}))})).catch((function(e){u.ZP.error(e.response.data.message)}))},Ke=(0,o.useCallback)((function(){if(Oe&&!Ae){var e,n,t,i=Oe.ProjectMembers,r=Oe.ProjectClient,s=null===r||void 0===r||null===(e=r.find((function(e){return!0===e.isRepresentative})))||void 0===e?void 0:e.clientId,a=null===i||void 0===i||null===(n=i.find((function(e){return e.projectRole===S.nV.projectIncharge})))||void 0===n?void 0:n.User.id,o=null===i||void 0===i||null===(t=i.filter((function(e){return e.projectRole===S.nV.supportEngineers})))||void 0===t?void 0:t.map((function(e){return e.User.id}));s&&Ge({ids:[s]}),a&&Je({ids:[a]}),null!==o&&void 0!==o&&o.length&&Xe({ids:o});var l={title:Oe.title,projectTypeId:Oe.projectTypeId,referenceNumber:Oe.referenceNumber,clientId:Oe.clientId,submissionById:Oe.submissionById,clientRepresentativeId:s,xeroReference:Oe.xeroReference};try{var c=JSON.parse(Oe.projectFilesLink);Te("string"===typeof c?[{link:c}]:c||[])}catch(f){console.error("Error while parsing project file links",null===f||void 0===f?void 0:f.message)}var d={instructions:Oe.instructions,priority:String(Oe.priority),projectInchargeId:a,supportEngineersId:o,startDate:Oe.startDate,endDate:Oe.endDate,projectFilesLink:"",projectFilesLinkName:""};y.setFieldsValue(l),Z.setFieldsValue(d);var u=[m.basic_info,m.deadline_info];C(u)}}),[Oe]);(0,o.useEffect)((function(){Ke()}),[Ke]);var Qe=(0,o.useCallback)((function(e){D.includes(e)&&F(e)}),[D]),$e=(0,o.useCallback)((function(e,n){var t=Object.keys(m);switch(e){case"next":var i=t.findIndex((function(e){return e===n}))+1;if(i!==t.length){var r=t.filter((function(e,n){return n===i}));F(r[0])}break;case"prev":var s=t.findIndex((function(e){return e===N}));if(0!==s){var a=t.filter((function(e,n){return n===s-1}));F(a[0])}}}),[N]),en=(0,o.useCallback)((function(e,n){var a=(0,r.Z)((0,r.Z)({},Y),{},(0,i.Z)({},e,n));if(B(a),C((function(n){return n.includes(e)?n:[].concat((0,s.Z)(n),[e])})),e===m.deadline_info){var o=a.deadline_info,l=a.basic_info,c={title:null===l||void 0===l?void 0:l.title,clientId:null===l||void 0===l?void 0:l.clientId,clientRepresentativeId:null===l||void 0===l?void 0:l.clientRepresentativeId,projectTypeId:null===l||void 0===l?void 0:l.projectTypeId,submissionById:null===l||void 0===l?void 0:l.submissionById,referenceNumber:null===l||void 0===l?void 0:l.referenceNumber,xeroReference:null===l||void 0===l?void 0:l.xeroReference,startDate:null===o||void 0===o?void 0:o.startDate,endDate:null===o||void 0===o?void 0:o.endDate,priority:Number(null===o||void 0===o?void 0:o.priority),projectInchargeId:null===o||void 0===o?void 0:o.projectInchargeId,supportEngineersId:null===o||void 0===o?void 0:o.supportEngineersId,instructions:null===o||void 0===o?void 0:o.instructions,projectFilesLink:null===o||void 0===o?void 0:o.projectFilesLink};!0===t?Le.updateRecord(c,Number(g)).then((function(e){var n;u.ZP.success((null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)||"Project Updated Successfully!"),window.location.href="/projects?all=true"})).catch((function(e){var n=e.response.data.message||"Something went wrong!";u.ZP.error(n)})):u.ZP.error("You are not authorized to update this project!, Please contact your admin.")}else $e("next",e)}),[Y,$e]),nn=(0,o.useCallback)((function(){$&&Ye.findPublished({name:$}).then((function(e){var n=e.data;ge((function(e){var t,i=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.filter((function(n){return!(null!==e&&void 0!==e&&e.find((function(e){return e.id===n.id})))}));return[].concat((0,s.Z)(e),(0,s.Z)(i))}))})).catch((function(e){u.ZP.error(e.response.data.message)}))}),[$]);(0,o.useEffect)((function(){nn()}),[nn]);var tn=(0,o.useCallback)((function(){if(re){var e={name:re,organizationId:y.getFieldValue("clientId")};Ge(e)}}),[re]);(0,o.useEffect)((function(){tn()}),[tn]),(0,o.useEffect)((function(){Ue&&ge((function(e){var n=null===Ue||void 0===Ue?void 0:Ue.filter((function(n){return!(null!==e&&void 0!==e&&e.find((function(e){return e.id===n.id})))}));return[].concat((0,s.Z)(e),(0,s.Z)(n))}))}),[Ue]);var rn=(0,o.useCallback)((function(){ce&&Je({name:ce})}),[ce]);(0,o.useEffect)((function(){rn()}),[rn]);var sn=(0,o.useCallback)((function(){me&&Xe({name:me})}),[me]);(0,o.useEffect)((function(){sn()}),[sn]),(0,o.useEffect)((function(){g||e("/projects?all=true")}),[g]);var an={basic_info:(0,j.jsx)(k,{form:y,onFinish:en,options:{organization:qe,department:He,projectType:We,searchedClients:je,searchedClientsRep:xe},searchTerms:{setSearchClient:Q,setSearchClientRep:ie},loading:Ae}),deadline_info:(0,j.jsx)(E,{form:Z,onBackClick:function(){return $e("prev")},onFinish:en,options:{searchedProjectIncharge:Pe,searchedSupportEngineers:Fe},searchTerms:{setSearchProjectIncharge:le,setSearchSupportEngineers:he},states:{projectFileLinks:Ce,setProjectFileLinks:Te}})};return(0,j.jsx)(h.Z,{showAddProject:!1,className:"pa-0",permissionSlug:n,children:(0,j.jsxs)("div",{className:v.container,children:[(0,j.jsx)(M,{currentTab:N,onTabClick:Qe,completedTabs:D}),(0,j.jsx)("div",{className:v.wrap,children:an[N]})]})})}},48297:function(e,n,t){t.d(n,{V:function(){return a}});var i=t(43144),r=t(15671),s=t(49075),a=(0,i.Z)((function e(){var n=this;(0,r.Z)(this,e),this.endPoint="client",this.getAllRecords=function(e){return s.Z.get(n.endPoint,{params:e})},this.getRecordById=function(e){return s.Z.get("".concat(n.endPoint,"/").concat(e))},this.findPublished=function(e){return s.Z.get("".concat(n.endPoint,"/find-published"),{params:e})},this.deleteRecord=function(e){return s.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return s.Z.post(n.endPoint,e)},this.updateRecord=function(e,t){return s.Z.patch("".concat(n.endPoint,"/").concat(t),e)}}))},38859:function(e,n,t){t.d(n,{o:function(){return a}});var i=t(43144),r=t(15671),s=t(49075),a=(0,i.Z)((function e(){var n=this;(0,r.Z)(this,e),this.endPoint="department",this.getAllRecords=function(e){return s.Z.get(n.endPoint,{params:e})},this.getAllPublishedRecords=function(e){return s.Z.get(n.endPoint+"/find-published",{params:e})},this.getRecordById=function(e){return s.Z.get(n.endPoint+"/"+e)},this.deleteRecord=function(e){return s.Z.delete(n.endPoint+"/"+e)},this.createRecord=function(e){return s.Z.post(n.endPoint,e)},this.updateRecord=function(e,t){return s.Z.patch(n.endPoint+"/"+t,e)}}))},5190:function(e,n,t){t.d(n,{L:function(){return o}});var i=t(43144),r=t(15671),s=t(49075),a=t(3135),o=(0,i.Z)((function e(){var n=this;(0,r.Z)(this,e),this.endPoint="organization",this.getAllRecords=function(e){return s.Z.get(n.endPoint,{params:e})},this.findPublished=function(e){return s.Z.get(n.endPoint+"/find-published",{params:e})},this.getRecordById=function(e){return s.Z.get("".concat(n.endPoint,"/").concat(e))},this.deleteRecord=function(e){return s.Z.delete("".concat(n.endPoint,"/").concat(e))},this.createRecord=function(e){return s.Z.post(n.endPoint,e,{headers:a.C})},this.updateRecord=function(e,t){return s.Z.patch("".concat(n.endPoint,"/").concat(t),e,{headers:a.C})},this.getTenants=function(){return s.Z.get("xero/getTenants")}}))},6027:function(e,n,t){t.d(n,{i:function(){return a}});var i=t(43144),r=t(15671),s=t(49075),a=(0,i.Z)((function e(){var n=this;(0,r.Z)(this,e),this.endPoint="project-type",this.getAllRecords=function(e){return s.Z.get(n.endPoint,{params:e})},this.getPublishRecords=function(e){return s.Z.get("".concat(n.endPoint,"/find-published"),{params:e})},this.getRecordById=function(e){return s.Z.get(n.endPoint+"/"+e)},this.deleteRecord=function(e){return s.Z.delete(n.endPoint+"/"+e)},this.createRecord=function(e){return s.Z.post(n.endPoint,e)},this.updateRecord=function(e,t){return s.Z.patch(n.endPoint+"/"+t,e)}}))}}]);