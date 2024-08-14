"use strict";(self.webpackChunkdat_projects=self.webpackChunkdat_projects||[]).push([[9345],{95366:function(t,e,n){var o=n(87462),r=n(47313),i=n(95656),a=n(16141),l=function(t,e){return r.createElement(a.Z,(0,o.Z)({},t,{ref:e,icon:i.Z}))};e.Z=r.forwardRef(l)},16067:function(t,e,n){var o=n(87462),r=n(47313),i=n(18822),a=n(16141),l=function(t,e){return r.createElement(a.Z,(0,o.Z)({},t,{ref:e,icon:i.Z}))};e.Z=r.forwardRef(l)},37289:function(t,e,n){n.d(e,{Z:function(){return u}});var o=n(87462),r=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},a=n(16141),l=function(t,e){return r.createElement(a.Z,(0,o.Z)({},t,{ref:e,icon:i}))};var u=r.forwardRef(l)},70638:function(t,e,n){n.d(e,{Z:function(){return k}});var o=n(4942),r=n(87462),i=n(71002),a=n(46123),l=n.n(a),u=n(29439),c=n(45987),s=n(1413),f=n(47313),d=n(10288),v=n(16945),m=n(205),p=n(25266),h=n(72846),b=function(t){return t?{left:t.offsetLeft,right:t.parentElement.clientWidth-t.clientWidth-t.offsetLeft,width:t.clientWidth}:null},g=function(t){return void 0!==t?"".concat(t,"px"):void 0};function w(t){var e=t.prefixCls,n=t.containerRef,o=t.value,r=t.getValueIndex,i=t.motionName,a=t.onMotionStart,c=t.onMotionEnd,d=t.direction,m=f.useRef(null),w=f.useState(o),y=(0,u.Z)(w,2),Z=y[0],E=y[1],C=function(t){var o,i=r(t),a=null===(o=n.current)||void 0===o?void 0:o.querySelectorAll(".".concat(e,"-item"))[i];return(null===a||void 0===a?void 0:a.offsetParent)&&a},x=f.useState(null),S=(0,u.Z)(x,2),N=S[0],T=S[1],k=f.useState(null),P=(0,u.Z)(k,2),M=P[0],j=P[1];(0,h.Z)((function(){if(Z!==o){var t=C(Z),e=C(o),n=b(t),r=b(e);E(o),T(n),j(r),t&&e?a():c()}}),[o]);var O=f.useMemo((function(){return g("rtl"===d?-(null===N||void 0===N?void 0:N.right):null===N||void 0===N?void 0:N.left)}),[d,N]),R=f.useMemo((function(){return g("rtl"===d?-(null===M||void 0===M?void 0:M.right):null===M||void 0===M?void 0:M.left)}),[d,M]);return N&&M?f.createElement(p.ZP,{visible:!0,motionName:i,motionAppear:!0,onAppearStart:function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},onAppearActive:function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},onAppearEnd:function(){T(null),j(null),c()}},(function(t,n){var o=t.className,r=t.style,i=(0,s.Z)((0,s.Z)({},r),{},{"--thumb-start-left":O,"--thumb-start-width":g(null===N||void 0===N?void 0:N.width),"--thumb-active-left":R,"--thumb-active-width":g(null===M||void 0===M?void 0:M.width)}),a={ref:(0,v.sQ)(m,n),style:i,className:l()("".concat(e,"-thumb"),o)};return f.createElement("div",a)})):null}var y=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"];function Z(t){return t.map((function(t){if("object"===(0,i.Z)(t)&&null!==t){var e=function(t){return"undefined"!==typeof t.title?t.title:"object"!==(0,i.Z)(t.label)?null===(e=t.label)||void 0===e?void 0:e.toString():void 0;var e}(t);return(0,s.Z)((0,s.Z)({},t),{},{title:e})}return{label:null===t||void 0===t?void 0:t.toString(),title:null===t||void 0===t?void 0:t.toString(),value:t}}))}var E=function(t){var e=t.prefixCls,n=t.className,r=t.disabled,i=t.checked,a=t.label,u=t.title,c=t.value,s=t.onChange;return f.createElement("label",{className:l()(n,(0,o.Z)({},"".concat(e,"-item-disabled"),r))},f.createElement("input",{className:"".concat(e,"-item-input"),type:"radio",disabled:r,checked:i,onChange:function(t){r||s(t,c)}}),f.createElement("div",{className:"".concat(e,"-item-label"),title:u},a))},C=f.forwardRef((function(t,e){var n,i,a=t.prefixCls,s=void 0===a?"rc-segmented":a,p=t.direction,h=t.options,b=t.disabled,g=t.defaultValue,C=t.value,x=t.onChange,S=t.className,N=void 0===S?"":S,T=t.motionName,k=void 0===T?"thumb-motion":T,P=(0,c.Z)(t,y),M=f.useRef(null),j=f.useMemo((function(){return(0,v.sQ)(M,e)}),[M,e]),O=f.useMemo((function(){return Z(h)}),[h]),R=(0,d.Z)(null===(n=O[0])||void 0===n?void 0:n.value,{value:C,defaultValue:g}),L=(0,u.Z)(R,2),V=L[0],z=L[1],B=f.useState(!1),A=(0,u.Z)(B,2),I=A[0],W=A[1],_=function(t,e){b||(z(e),null===x||void 0===x||x(e))},q=(0,m.Z)(P,["children"]);return f.createElement("div",(0,r.Z)({},q,{className:l()(s,(i={},(0,o.Z)(i,"".concat(s,"-rtl"),"rtl"===p),(0,o.Z)(i,"".concat(s,"-disabled"),b),i),N),ref:j}),f.createElement("div",{className:"".concat(s,"-group")},f.createElement(w,{prefixCls:s,value:V,containerRef:M,motionName:"".concat(s,"-").concat(k),direction:p,getValueIndex:function(t){return O.findIndex((function(e){return e.value===t}))},onMotionStart:function(){W(!0)},onMotionEnd:function(){W(!1)}}),O.map((function(t){return f.createElement(E,(0,r.Z)({key:t.value,prefixCls:s,className:l()(t.className,"".concat(s,"-item"),(0,o.Z)({},"".concat(s,"-item-selected"),t.value===V&&!I)),checked:t.value===V,onChange:_},t,{disabled:!!b||!!t.disabled}))}))))}));C.displayName="Segmented",C.defaultProps={options:[]};var x=C,S=n(74714),N=n(21631),T=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};var k=f.forwardRef((function(t,e){var n,a=t.prefixCls,u=t.className,c=t.block,s=t.options,d=void 0===s?[]:s,v=t.size,m=void 0===v?"middle":v,p=T(t,["prefixCls","className","block","options","size"]),h=f.useContext(S.E_),b=h.getPrefixCls,g=h.direction,w=b("segmented",a),y=f.useContext(N.Z),Z=m||y,E=f.useMemo((function(){return d.map((function(t){if(function(t){return"object"===(0,i.Z)(t)&&!!(null===t||void 0===t?void 0:t.icon)}(t)){var e=t.icon,n=t.label,o=T(t,["icon","label"]);return(0,r.Z)((0,r.Z)({},o),{label:f.createElement(f.Fragment,null,f.createElement("span",{className:"".concat(w,"-item-icon")},e),n&&f.createElement("span",null,n))})}return t}))}),[d,w]);return f.createElement(x,(0,r.Z)({},p,{className:l()(u,(n={},(0,o.Z)(n,"".concat(w,"-block"),c),(0,o.Z)(n,"".concat(w,"-sm"),"small"===Z),(0,o.Z)(n,"".concat(w,"-lg"),"large"===Z),n)),options:E,ref:e,prefixCls:w,direction:g}))}))},62892:function(t,e,n){n.d(e,{Z:function(){return m}});var o=n(29439),r=n(47313),i=n(46417),a=function(t){return!t.firstChild||t.firstChild.offsetParent===t},l=function(t,e){var n=t,o=0;a(e)||(o+=t.offsetTop-e.offsetTop,e=t.offsetParent,o+=-t.offsetTop);do{o+=n.offsetTop,n=n.offsetParent}while(n&&n!==e);return o},u=null;"undefined"!==typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?u="sticky":CSS.supports("position","-webkit-sticky")&&(u="-webkit-sticky"));var c=!1;try{var s=Object.defineProperty({},"passive",{get:function(){c={passive:!0}}}),f=function(){};window.addEventListener("testPassive",f,s),window.removeEventListener("testPassive",f,s)}catch(p){}var d=function(t){var e=t.el,n=t.onChange,o=t.unsubs,r=t.measure;if(e===window){var i=function(){return{top:0,left:0,height:window.innerHeight,width:window.innerWidth}},a=r(i()),l=function(){Object.assign(a,r(i())),n()};return window.addEventListener("resize",l,c),o.push((function(){return window.removeEventListener("resize",l)})),a}var u=r(e.getBoundingClientRect()),s=new ResizeObserver((function(){Object.assign(u,r(e.getBoundingClientRect())),n()}));return s.observe(e),o.push((function(){return s.disconnect()})),u},v=function(t,e,n){var o=n.bottom,r=n.offsetBottom,i=n.offsetTop,s=function(t){for(var e=t;e=e.parentElement;){var n=getComputedStyle(e,null).getPropertyValue("overflow-y");if(e===document.body)return window;if("auto"===n||"scroll"===n||"overlay"===n)return e}return window}(t),f=!1,v=function(){f||requestAnimationFrame((function(){var t=h();t!==x&&S(t),f=!1})),f=!0},m=s===window?window.scrollY:s.scrollTop,p=function(t){return t+g.offsetTop+g.height>=Z.naturalTop+E.height+C+r},h=function(){var t=g.height;return E.height+i+r<=t?3:p(m)?1:2},b=s!==window&&a(s),g=d({el:s,onChange:v,unsubs:e,measure:function(t){var e=t.height,n=t.top;return{height:e,offsetTop:b?n:0}}}),w=function(t){for(var e=t.parentElement;e&&"contents"===getComputedStyle(e,null).getPropertyValue("display");)e=e.parentElement;return e||window}(t),y=w===window?{top:0,bottom:0}:function(t){var e=getComputedStyle(t,null);return{top:parseInt(e.getPropertyValue("padding-top"),10),bottom:parseInt(e.getPropertyValue("padding-bottom"),10)}}(w),Z=d({el:w,onChange:v,unsubs:e,measure:function(t){return{height:t.height-y.top-y.bottom,naturalTop:w===window?0:l(w,s)+y.top+g.offsetTop}}}),E=d({el:t,onChange:v,unsubs:e,measure:function(t){return{height:t.height}}}),C=0,x=h(),S=function(e){var n=x;if(x=e,2===n&&(C=-1),3===e)return t.style.position=u,void(o?t.style.bottom="".concat(r,"px"):t.style.top="".concat(i,"px"));var a=g.height,l=g.offsetTop,c=Z.height,s=Z.naturalTop,f=E.height;if(2===e)if(t.style.position="relative",C=0===n?Math.max(0,l+m-s+i):Math.max(0,l+m+a-(s+f+r)),o){var d=Math.max(0,c-f-C);t.style.bottom="".concat(d,"px")}else t.style.top="".concat(C,"px");else t.style.position=u,1===e?o?t.style.bottom="".concat(r,"px"):t.style.top="".concat(a-f-r,"px"):o?t.style.bottom="".concat(a-f-r,"px"):t.style.top="".concat(i,"px")};S(x);var N=function(t){if(t!==m){var e=t-m;if(m=t,3!==x){var n=g.offsetTop,o=g.height,a=Z.naturalTop,l=Z.height,u=E.height;if(e>0)if(0===x){if(t+n+i>a){var c=Math.max(0,n+m-a+i);S(t+n+o<=a+u+c+r?2:1)}}else 2===x&&p(t)&&S(1);else if(1===x){if(n+t+o<a+l+r){var s=Math.max(0,n+m+o-(a+u+r));S(n+t+i>=a+s?2:0)}}else 2===x&&n+t+i<a+C&&S(0)}}},T=s===window?function(){return N(window.scrollY)}:function(){return N(s.scrollTop)};s.addEventListener("scroll",T,c),s.addEventListener("mousewheel",T,c),e.push((function(){return s.removeEventListener("scroll",T)}),(function(){return s.removeEventListener("mousewheel",T)}))},m=function(t){var e=t.offsetTop,n=t.offsetBottom,a=t.bottom,l=t.children,c=t.className,s=t.style,f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.offsetTop,n=void 0===e?0:e,i=t.offsetBottom,a=void 0===i?0:i,l=t.bottom,c=void 0!==l&&l,s=(0,r.useState)(null),f=(0,o.Z)(s,2),d=f[0],m=f[1];return(0,r.useEffect)((function(){if(d&&u){var t=[];return v(d,t,{offsetBottom:a,offsetTop:n,bottom:c}),function(){t.forEach((function(t){return t()}))}}}),[d,a,n,c]),m}({offsetTop:e,offsetBottom:n,bottom:a});return(0,i.jsx)("div",{className:c,style:s,ref:f,children:l})}}}]);