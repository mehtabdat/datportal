"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[4113],{74113:function(s,e,r){r.r(e),r.d(e,{default:function(){return j}});var a="login_formWrap__D66gq",o=r(29439),n=r(55291),t=r(25019),i=r(47313),l=r(69686),d=r(12351),c=r(3109),w=r(37831),m="style_form__OnR40",u="style_headingWrap__+bFG-",g="style_logoWrap__BlVuX",p="style_forgotPasswordImg__Ka0+I",h=r(46417),f=function(){var s=window.location.pathname.replace("/reset-password/",""),e=(0,i.useMemo)((function(){return new l.n}),[]),r=(0,i.useState)(!1),a=(0,o.Z)(r,2),f=a[0],j=a[1];return(0,h.jsxs)("div",{className:m,children:[(0,h.jsxs)("div",{className:g,children:[(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)(c.Z,{color:"dark-main",size:"lg",weight:"bold",children:"Reset Password!"}),(0,h.jsx)(c.Z,{color:"dark-sub",size:"xs",children:f?"You can now login with your new password.":"Enter your new password below to reset your password."})]}),(0,h.jsx)("img",{src:"/images/logo256.png",alt:"logo"})]}),(0,h.jsxs)(t.Z,{name:"login",validateTrigger:"onChange",onFinish:function(r){if(r.password===r.confirmPassword){var a={password:r.password,resetToken:s};e.resetPassword(a).then((function(s){var e;200===(null===(e=s.data)||void 0===e?void 0:e.statusCode)&&(n.ZP.success(s.data.message),j(!0))})).catch((function(s){var e=s.response.data.message;n.ZP.error(e)}))}else n.ZP.error("Passwords do not match!")},autoComplete:"off",children:[f?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:"/images/forgot-password.svg",className:p,alt:"Email sent"}),(0,h.jsx)(c.Z,{color:"dark-sub",size:"md",weight:"semi",className:"text-center my-4",children:"Password reset successful! You can now login with your new password."})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.Z.Item,{name:"password",rules:[{required:!0,message:"Please enter your password!"}],children:(0,h.jsx)(w.Z,{size:"w100",type:"password",label:"Password",placeHolder:"Password",className:"pa-2"})}),(0,h.jsx)(t.Z.Item,{name:"confirmPassword",rules:[{required:!0,message:"Please confirm your password!"}],children:(0,h.jsx)(w.Z,{size:"w100",type:"password",label:"Confirm Password",placeHolder:"Confirm Password",className:"pa-2"})})]}),(0,h.jsx)(t.Z.Item,{children:(0,h.jsx)(d.Z,{size:"w100",type:"primary",htmlType:f?"button":"submit",onClick:function(){f&&(window.location.href="/login")},children:f?"Login":"Reset Password"})})]})]})};var j=function(){var s=localStorage.getItem("access_token");return s?(window.location.href="/",(0,h.jsx)(h.Fragment,{})):(0,h.jsx)(h.Fragment,{children:!s&&(0,h.jsx)("div",{className:a,children:(0,h.jsx)(f,{})})})}}}]);