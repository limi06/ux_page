import{C as j,S as x,T as m}from"./index-aa1368c8.js";import{c as A,N as I,Q as P}from"./common-5afcdaa1.js";import{c as $,u as S}from"./currentBorder-bbf8dd09.js";import{d as H,r as b,a as V,o as W,c as D,e as v,w as M,b as G,n as X,f as C}from"./index-0070c043.js";import{B as z}from"./index-f5c4909a.js";import{A as L}from"./Application-27e46a22.js";import{G as Q}from"./Graphics-edd36bfd.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./red2-282fd708.js";import"./mixColors-08b15ca0.js";import"./getTextureBatchBindGroup-c780053b.js";const l=800,f=400,Y=H({__name:"work",setup(F){const k=A(),u=b(),g=b(),c=new P({x:0,y:0,width:l,height:f}),p=[],r=new L;V(()=>{T()});async function T(){var a;window.__PIXI_APP__=r,await r.init({width:l,height:f,background:16777215,antialias:!0}),(a=u.value)==null||a.appendChild(r.canvas);const e={x:0,y:0,width:l,height:f},s=new j;r.stage.addChild(s),k.pixiApp=r;for(let i=1;i<=30;i++){const t=new x(m.WHITE),n=Math.floor(Math.random()*255),d=Math.floor(Math.random()*255),h=Math.floor(Math.random()*255);t.tint=`rgb(${n},${d},${h})`,t.width=Math.random()*l/8,t.height=Math.random()*f/8,t.x=Math.random()*(e.width-t.width),t.y=Math.random()*(e.height-t.height),p.push({x:t.x,y:t.y,width:t.width,height:t.height,target:t}),r.stage.addChild(t)}const o=new x(m.WHITE);o.width=100,o.height=100,o.x=800/2+50,o.y=400/2-50,o.tint="#E85858",p.push({x:o.x,y:o.y,width:o.width,height:o.height,target:o}),r.stage.addChild(o)}function w(e,s){if(!s.indexs.length)return;const o=Math.floor(Math.random()*255),a=Math.floor(Math.random()*255),i=Math.floor(Math.random()*255);for(let t=0;t<=3;t++){const n=s.indexs[t].bounds;(t==0||t==3)&&(e.moveTo(n.x,n.y),e.lineTo(n.x,n.y+n.height),e.lineTo(n.x+n.width,n.y+n.height)),(t==1||t==2)&&(e.moveTo(n.x,n.y+n.height),e.lineTo(n.x+n.width,n.y+n.height)),e.stroke({width:2,color:`rgb(${o},${a},${i})`}),w(e,s.indexs[t])}}function B(){c.init(p),console.log(c.indexs,"indexs",c),_(),E()}function _(){const e=new Q;w(e,c),r.stage.addChild(e),y(c)}function y(e){if(e.indexs.length!=0)for(let s=0;s<e.indexs.length;s++){const o=e.indexs[s];if(o.indexs.length==0){const a=o.objects;for(let i=0;i<a.length;i++){const t=new x(m.WHITE);t.width=a[i].width,t.height=a[i].height,t.x=a[i].x,t.y=a[i].y,t.tint="#abcdef",t.alpha=.6,r.stage.addChild(t)}}else y(o)}}function E(){const e=r.canvas,s=e.getBoundingClientRect();e.addEventListener("click",o=>{let a=o.pageX,i=o.pageY;a=a-s.left,i=i-s.top;const n=c.searchPoint({x:a,y:i}).find(d=>{const h=d;if(h.x<=a&&h.x+h.width>=a&&h.y<=i&&h.y+h.height>=i)return d});if(console.log(n,"find"),n){const d=n.target;g.value=n,$(),S({x:d.x,y:d.y,width:d.width,height:d.height})}})}function N(){if(!g.value)return;const e=g.value,s=new I({x:e.target.x,y:e.target.y,width:e.target.width,height:e.target.height,target:e.target});c.delete(s),r.stage.removeChildren(),console.log(c),_()}return(e,s)=>{const o=z;return W(),D("div",null,[v(o,{class:"create-btn",onClick:B},{default:M(()=>[C("绘画")]),_:1}),v(o,{class:"create-btn ml-[20px]",onClick:N},{default:M(()=>[C("del")]),_:1}),G("div",{class:"content",ref_key:"content",ref:u,style:X({width:l+"px",height:f+"px"})},null,4)])}}});const at=R(Y,[["__scopeId","data-v-f3bef0eb"]]);export{at as default};
