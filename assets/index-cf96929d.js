import{m as N,d as H,q as Z,a as pt,s as yt,v as Et,x as rt,y as At,P as kt,e as h,L as ot,T as Nt,r as U,z as F,A as Lt,B as It,C as Bt,D as Mt,E as ht,G as v,H as Ot,I as _t,J as zt}from"./index-e5439f5c.js";var Pt=function(t,e){var a=N({},t);return Object.keys(e).forEach(function(l){var u=a[l];if(u)u.type||u.default?u.default=e[l]:u.def?u.def(e[l]):a[l]={type:u,default:e[l]};else throw new Error("not have ".concat(l," prop"))}),a};const Dt=Pt;var Tt=function(t){return setTimeout(t,16)},Ct=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(Tt=function(t){return window.requestAnimationFrame(t)},Ct=function(t){return window.cancelAnimationFrame(t)});var ut=0,tt=new Map;function wt(n){tt.delete(n)}function X(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;ut+=1;var e=ut;function a(l){if(l===0)wt(e),n();else{var u=Tt(function(){a(l-1)});tt.set(e,u)}}return a(t),e}X.cancel=function(n){var t=tt.get(n);return wt(t),Ct(t)};var K={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Q={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},I=[],B=[];function Wt(){var n=document.createElement("div"),t=n.style;"AnimationEvent"in window||(delete K.animationstart.animation,delete Q.animationend.animation),"TransitionEvent"in window||(delete K.transitionstart.transition,delete Q.transitionend.transition);function e(a,l){for(var u in a)if(a.hasOwnProperty(u)){var p=a[u];for(var f in p)if(f in t){l.push(p[f]);break}}}e(K,I),e(Q,B)}typeof window<"u"&&typeof document<"u"&&Wt();function lt(n,t,e){n.addEventListener(t,e,!1)}function st(n,t,e){n.removeEventListener(t,e,!1)}var jt={startEvents:I,addStartEventListener:function(t,e){if(I.length===0){setTimeout(e,0);return}I.forEach(function(a){lt(t,a,e)})},removeStartEventListener:function(t,e){I.length!==0&&I.forEach(function(a){st(t,a,e)})},endEvents:B,addEndEventListener:function(t,e){if(B.length===0){setTimeout(e,0);return}B.forEach(function(a){lt(t,a,e)})},removeEndEventListener:function(t,e){B.length!==0&&B.forEach(function(a){st(t,a,e)})}};const R=jt;var A;function ct(n){return!n||n.offsetParent===null}function Ut(n){var t=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const Rt=H({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,e){var a=e.slots,l=e.expose,u=At(),p=Z("",t),f=p.csp,s=p.prefixCls;l({csp:f});var C=null,w=null,z=null,S=!1,m=null,L=!1,y=function(i){if(!L){var c=rt(u);!i||i.target!==c||S||_(c)}},x=function(i){!i||i.animationName!=="fadeEffect"||_(i.target)},M=function(){var i=t.insertExtraNode;return i?"".concat(s.value,"-click-animating"):"".concat(s.value,"-click-animating-without-extra-node")},O=function(i,c){var k=t.insertExtraNode,o=t.disabled;if(!(o||!i||ct(i)||i.className.indexOf("-leave")>=0)){m=document.createElement("div"),m.className="".concat(s.value,"-click-animating-node");var r=M();if(i.removeAttribute(r),i.setAttribute(r,"true"),A=A||document.createElement("style"),c&&c!=="#ffffff"&&c!=="rgb(255, 255, 255)"&&Ut(c)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(c)&&c!=="transparent"){var g;(g=f.value)!==null&&g!==void 0&&g.nonce&&(A.nonce=f.value.nonce),m.style.borderColor=c,A.innerHTML=`
        [`.concat(s.value,"-click-animating-without-extra-node='true']::after, .").concat(s.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(c,`;
        }`),document.body.contains(A)||document.body.appendChild(A)}k&&i.appendChild(m),R.addStartEventListener(i,y),R.addEndEventListener(i,x)}},_=function(i){if(!(!i||i===m||!(i instanceof Element))){var c=t.insertExtraNode,k=M();i.setAttribute(k,"false"),A&&(A.innerHTML=""),c&&m&&i.contains(m)&&i.removeChild(m),R.removeStartEventListener(i,y),R.removeEndEventListener(i,x)}},P=function(i){if(!(!i||!i.getAttribute||i.getAttribute("disabled")||i.className.indexOf("disabled")>=0)){var c=function(o){if(!(o.target.tagName==="INPUT"||ct(o.target))){_(i);var r=getComputedStyle(i).getPropertyValue("border-top-color")||getComputedStyle(i).getPropertyValue("border-color")||getComputedStyle(i).getPropertyValue("background-color");w=setTimeout(function(){return O(i,r)},0),X.cancel(z),S=!0,z=X(function(){S=!1},10)}};return i.addEventListener("click",c,!0),{cancel:function(){i.removeEventListener("click",c,!0)}}}};return pt(function(){yt(function(){var d=rt(u);d.nodeType===1&&(C=P(d))})}),Et(function(){C&&C.cancel(),clearTimeout(w),L=!0}),function(){var d;return(d=a.default)===null||d===void 0?void 0:d.call(a)[0]}}});var $t=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:kt.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Ft=$t;var ft=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},dt=function(t){yt(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},vt=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const Gt=H({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var e=t.existIcon,a=t.prefixCls,l=t.loading;if(e)return h("span",{class:"".concat(a,"-loading-icon")},[h(ot,null,null)]);var u=!!l;return h(Nt,{name:"".concat(a,"-loading-icon-motion"),onBeforeEnter:ft,onEnter:dt,onAfterEnter:vt,onBeforeLeave:dt,onLeave:function(f){setTimeout(function(){ft(f)})},onAfterLeave:vt},{default:function(){return[u?h("span",{class:"".concat(a,"-loading-icon")},[h(ot,null,null)]):null]}})}}});var mt=/^[\u4e00-\u9fa5]{2}$/,gt=mt.test.bind(mt);function $(n){return n==="text"||n==="link"}const G=H({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Dt(Ft(),{type:"default"}),slots:["icon"],setup:function(t,e){var a=e.slots,l=e.attrs,u=e.emit,p=e.expose,f=Z("btn",t),s=f.prefixCls,C=f.autoInsertSpaceInButton,w=f.direction,z=f.size,S=U(null),m=U(void 0),L=!1,y=U(!1),x=U(!1),M=F(function(){return C.value!==!1}),O=F(function(){return Ot(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});Lt(O,function(o){clearTimeout(m.value),typeof O.value=="number"?m.value=setTimeout(function(){y.value=o},O.value):y.value=o},{immediate:!0});var _=F(function(){var o,r=t.type,g=t.shape,E=g===void 0?"default":g,T=t.ghost,V=t.block,q=t.danger,b=s.value,D={large:"lg",small:"sm",middle:void 0},W=z.value,j=W&&D[W]||"";return o={},v(o,"".concat(b),!0),v(o,"".concat(b,"-").concat(r),r),v(o,"".concat(b,"-").concat(E),E!=="default"&&E),v(o,"".concat(b,"-").concat(j),j),v(o,"".concat(b,"-loading"),y.value),v(o,"".concat(b,"-background-ghost"),T&&!$(r)),v(o,"".concat(b,"-two-chinese-chars"),x.value&&M.value),v(o,"".concat(b,"-block"),V),v(o,"".concat(b,"-dangerous"),!!q),v(o,"".concat(b,"-rtl"),w.value==="rtl"),o}),P=function(){var r=S.value;if(!(!r||C.value===!1)){var g=r.textContent;L&&gt(g)?x.value||(x.value=!0):x.value&&(x.value=!1)}},d=function(r){if(y.value||t.disabled){r.preventDefault();return}u("click",r)},i=function(r,g){var E=g?" ":"";if(r.type===_t){var T=r.children.trim();return gt(T)&&(T=T.split("").join(E)),h("span",null,[T])}return r};It(function(){Bt(!(t.ghost&&$(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),pt(P),Mt(P),Et(function(){m.value&&clearTimeout(m.value)});var c=function(){var r;(r=S.value)===null||r===void 0||r.focus()},k=function(){var r;(r=S.value)===null||r===void 0||r.blur()};return p({focus:c,blur:k}),function(){var o,r,g=t.icon,E=g===void 0?(o=a.icon)===null||o===void 0?void 0:o.call(a):g,T=ht((r=a.default)===null||r===void 0?void 0:r.call(a));L=T.length===1&&!E&&!$(t.type);var V=t.type,q=t.htmlType,b=t.disabled,D=t.href,W=t.title,j=t.target,St=t.onMousedown,xt=y.value?"loading":E,J=N(N({},l),{},{title:W,disabled:b,class:[_.value,l.class,v({},"".concat(s.value,"-icon-only"),T.length===0&&!!xt)],onClick:d,onMousedown:St});b||delete J.disabled;var nt=E&&!y.value?E:h(Gt,{existIcon:!!E,prefixCls:s.value,loading:!!y.value},null),et=T.map(function(it){return i(it,L&&M.value)});if(D!==void 0)return h("a",N(N({},J),{},{href:D,target:j,ref:S}),[nt,et]);var at=h("button",N(N({},J),{},{ref:S,type:q}),[nt,et]);return $(V)?at:h(Rt,{ref:"wave",disabled:!!y.value},{default:function(){return[at]}})}}});function bt(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,zt(a.key),a)}}function Ht(n,t,e){return t&&bt(n.prototype,t),e&&bt(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Vt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var qt=Ht(function n(t){Vt(this,n),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))}),Jt=function(){return{prefixCls:String,size:{type:String}}};const Y=H({compatConfig:{MODE:3},name:"AButtonGroup",props:Jt(),setup:function(t,e){var a=e.slots,l=Z("btn-group",t),u=l.prefixCls,p=l.direction,f=F(function(){var s,C=t.size,w="";switch(C){case"large":w="lg";break;case"small":w="sm";break;case"middle":case void 0:break;default:console.warn(new qt(C).error)}return s={},v(s,"".concat(u.value),!0),v(s,"".concat(u.value,"-").concat(w),w),v(s,"".concat(u.value,"-rtl"),p.value==="rtl"),s});return function(){var s;return h("div",{class:f.value},[ht((s=a.default)===null||s===void 0?void 0:s.call(a))])}}});G.Group=Y;G.install=function(n){return n.component(G.name,G),n.component(Y.name,Y),n};export{G as B,Dt as i,X as w};
