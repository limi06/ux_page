var K=Object.defineProperty;var O=(r,a,e)=>a in r?K(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var _=(r,a,e)=>(O(r,typeof a!="symbol"?a+"":a,e),e);import{C as U}from"./index-5f17f4b1.js";import{T as Z}from"./TextStyle-507a7e1f.js";import{A as j}from"./Application-0aa7386b.js";import{G as P}from"./Graphics-97860da6.js";import{T as tt}from"./Text-f0842ec1.js";import{R as et}from"./red2-282fd708.js";import{B as nt}from"./index-cf96929d.js";import{d as it,r as X,a as at,o as st,c as lt,b as G,e as k,w as M,f as Y}from"./index-e5439f5c.js";import{_ as ot}from"./_plugin-vue_export-helper-c27b6911.js";import"./mixColors-bbe5e417.js";import"./getTextureBatchBindGroup-506b7ef5.js";const dt=new Z({fontFamily:"Arial",fontSize:14,fontWeight:"bold",fill:"#fff"}),I=r=>{let a=0;if(r.left||r.right){if(r.left){let e=r.right?1:2;a+=e+I(r.left),(r.left.left||r.left.right)&&a--}if(r.right){let e=r.left?1:2;a+=e+I(r.right),(r.right.left||r.right.right)&&a--}}else return r.with=0,0;return r.with=a,a};class rt{constructor(a){_(this,"unit");_(this,"startX");_(this,"startY");_(this,"drawData");_(this,"width");_(this,"height");_(this,"app");_(this,"container");_(this,"graphicsContent");this.container=a,this.width=1900,this.height=800,this.unit=14,this.startX=1300/2,this.startY=20,this.drawData=[];const e=new j;this.app=e,window.__PIXI_APP__=e,this.init()}async init(){await this.app.init({width:this.width,height:this.height,background:16777215,antialias:!0}),this.container.appendChild(this.app.canvas)}paint(a,e={}){this.drawData=[],this.app.stage.children=[];const l=new U,x=new P;l.addChild(x),this.app.stage.addChild(l),this.graphicsContent=l,l.updateTransform({scaleX:e.scale||1,scaleY:e.scale||1,x:e.x||0,y:e.y||0}),I(a);let d={x:this.startX,y:this.startY};const v=(n,u)=>{if(!n)return;let w,b;u=="root"?(w=d.x,b=d.y):u=="left"?(w=d.x-(n.with||.6)*this.unit*4,b=d.y+5*this.unit):u=="right"&&(w=d.x+(n.with||.6)*this.unit*4,b=d.y+5*this.unit),n.x=w,n.y=b,this.drawNode({x:w,y:b,num:n.tag,backgroundColor:n.color==1?"red":"black",graphics:x,graphicsContent:l}),this.drawData.push({...n,r:1.5*this.unit}),d=n,n.left&&(d=n,v(n.left,"left"),this.line({x1:w,y1:b+1.5*this.unit,x2:n.left.x,y2:n.left.y-1.5*this.unit,graphics:x})),n.right&&(d=n,v(n.right,"right"),this.line({x1:w,y1:b+1.5*this.unit,x2:n.right.x,y2:n.right.y-1.5*this.unit,graphics:x})),d=n};v(a,"root")}line({x1:a,y1:e,x2:l,y2:x,graphics:d}){d.moveTo(a,e),d.lineTo(l,x),d.stroke({width:2,color:"#000"})}drawNode({x:a,y:e,num:l,backgroundColor:x="black",graphics:d,graphicsContent:v}){d.circle(a,e,1.5*this.unit),x=="red"?d.fill(15147620):d.fill(1842721);const n=new tt({text:l,style:dt});n.x=a,n.y=e,n.anchor.set(.5),v.addChild(n)}}const ct={class:"btn-box"},ut=it({__name:"testPixi",setup(r){const a=X(),e=X(),l=new et,x=X([]),d=X(),v=X({x:0,y:0,scale:1}),n={uid:19,x:100,y:100,width:100,height:100},u={uid:20,x:300,y:100,width:200,height:200},w=X(0);at(()=>{R(),console.log(x.value,"ary");const s=new Map;s.set(n.y,[n.x,n.x+n.width]),s.set(n.y+n.height,[n.x,n.x+n.width]),s.set(n.y+n.height/2,[n.x+n.width/2]);for(const i of s.keys())l.add({num:i,data:{id:n.uid,list:s.get(i)}});const t=new Map;t.set(u.y,[u.x,u.x+u.width]),t.set(u.y+u.height,[u.x,u.x+u.width]),t.set(u.y+u.height/2,[u.x+u.width/2]);for(const i of t.keys())l.add({num:i,data:{id:u.uid,list:t.get(i)}});console.log(l.root,"rt"),b(),W(),setTimeout(()=>{q()},500)});function b(){const s=new rt(a.value);e.value=s,s.paint(l.root)}function R(){x.value=[];for(let s=0;s<=15;s++){let t=Math.random()*1e3;x.value.push({num:Math.floor(t),id:++w.value})}}function B(s){var p,c;if(!e.value)return;const i=(p=e.value.graphicsContent)==null?void 0:p.scale.x,o=(c=e.value.graphicsContent)==null?void 0:c.scale.y,f=s=="add"?i+.1:i-.1,g=s=="add"?o+.1:o-.1;e.value.graphicsContent.scale.set(f,g)}function W(){var c,A;if(!a.value||!e.value)return;let s=0,t=0,i=(c=e.value.graphicsContent)==null?void 0:c.x,o=(A=e.value.graphicsContent)==null?void 0:A.y;function f(y){var h;const m=y.offsetX-s,C=y.offsetY-t;(h=e.value.graphicsContent)==null||h.updateTransform({x:i+m,y:o+C})}function g(y){var m,C;s=y.offsetX,t=y.offsetY,i=(m=e.value.graphicsContent)==null?void 0:m.x,o=(C=e.value.graphicsContent)==null?void 0:C.y,a.value.addEventListener("mousemove",f)}function p(y){a.value.removeEventListener("mousemove",f)}a.value.addEventListener("mousedown",g),a.value.addEventListener("mouseup",p)}function q(){var t;if(!e.value)return;function s(i){var A,y,m,C;const{offsetX:o,offsetY:f}=i,g=(A=e.value)==null?void 0:A.graphicsContent,p=g==null?void 0:g.scale.x;let c=e.value.drawData;for(let h=0;h<c.length;h++){const D=c[h].x*p+g.x,E=c[h].y*p+g.y,N=[D-c[h].r*p,E-c[h].r*p,D+c[h].r*p,E+c[h].r*p];if(o<N[2]&&o>N[0]&&f<N[3]&&f>N[1]){const S=(((y=e.value.graphicsContent)==null?void 0:y.children)||[]).findIndex(J=>J.label=="border");S>=0&&((m=e.value.graphicsContent)==null||m.removeChildAt(S)),d.value=c[h];const T=new P;T.label="border",T.x=c[h].x-c[h].r,T.y=c[h].y-c[h].r;let V=c[h].r*2;T.rect(0,0,V,V),T.stroke({width:2,color:"#000"}),(C=e.value.graphicsContent)==null||C.addChild(T);return}}}(t=e.value)==null||t.app.canvas.addEventListener("click",s)}function z(){var s,t,i,o,f,g,p;d.value&&(v.value.x=(t=(s=e.value)==null?void 0:s.graphicsContent)==null?void 0:t.x,v.value.y=(o=(i=e.value)==null?void 0:i.graphicsContent)==null?void 0:o.y,v.value.scale=(g=(f=e.value)==null?void 0:f.graphicsContent)==null?void 0:g.scale.x,l.delete(d.value.tag,d.value.uid),(p=e.value)==null||p.paint(l.root,v.value),d.value=void 0)}function F(){var g,p,c,A,y,m,C,h,D,E;const s=(p=(g=e.value)==null?void 0:g.graphicsContent)==null?void 0:p.x,t=(A=(c=e.value)==null?void 0:c.graphicsContent)==null?void 0:A.y,i=(m=(y=e.value)==null?void 0:y.graphicsContent)==null?void 0:m.width,o=(h=(C=e.value)==null?void 0:C.graphicsContent)==null?void 0:h.height;console.log(s,t,i,o);const f=new P;(E=(D=e.value)==null?void 0:D.graphicsContent)==null||E.addChild(f),f.label="quadBorder",f.rect(0,0,i,o),f.stroke({width:2,color:"#000"})}function Q(){console.log(l.root,"root"),console.log(l.getMap(),"getMap")}function H(){var t;const s=Math.random()*1e3;l.add({num:Math.floor(s),data:{id:++w.value,list:[]}}),(t=e.value)==null||t.paint(l.root,v.value)}function $(s){var o;let t={};s==19?t=n:t=u;const i=new Map;i.set(t.y,[t.x,t.x+t.width]),i.set(t.y+t.height,[t.x,t.x+t.width]),i.set(t.y+t.height/2,[t.x+t.width/2]),l.delete(100,t.uid),l.delete(200,t.uid),l.delete(150,t.uid),(o=e.value)==null||o.paint(l.root,v.value)}function L(s){var o;let t={};s==19?t=n:t=u;const i=new Map;i.set(t.y,[t.x,t.x+t.width]),i.set(t.y+t.height,[t.x,t.x+t.width]),i.set(t.y+t.height/2,[t.x+t.width/2]);for(const f of i.keys())l.add({num:f,data:{id:t.uid,list:i.get(f)}});(o=e.value)==null||o.paint(l.root,v.value)}return(s,t)=>{const i=nt;return st(),lt("div",null,[G("div",ct,[k(i,{type:"danger",onClick:z},{default:M(()=>[Y("删除")]),_:1}),k(i,{style:{"margin-left":"20px"},type:"danger",onClick:H},{default:M(()=>[Y("添加")]),_:1}),k(i,{style:{"margin-left":"20px"},type:"primary",onClick:t[0]||(t[0]=o=>B("redu"))},{default:M(()=>[Y("scale -")]),_:1}),k(i,{style:{"margin-left":"20px"},type:"primary",onClick:t[1]||(t[1]=o=>B("add"))},{default:M(()=>[Y("scale +")]),_:1}),k(i,{style:{"margin-left":"20px"},type:"danger",onClick:F},{default:M(()=>[Y("四叉树")]),_:1}),k(i,{style:{"margin-left":"20px"},type:"danger",onClick:Q},{default:M(()=>[Y("getContent")]),_:1}),k(i,{onClick:t[2]||(t[2]=o=>$(19))},{default:M(()=>[Y("删除19")]),_:1}),k(i,{onClick:t[3]||(t[3]=o=>L(19))},{default:M(()=>[Y("添加19")]),_:1}),k(i,{onClick:t[4]||(t[4]=o=>$(20))},{default:M(()=>[Y("删除20")]),_:1}),k(i,{onClick:t[5]||(t[5]=o=>L(20))},{default:M(()=>[Y("添加20")]),_:1})]),G("div",{class:"pixiContent",ref_key:"pixiContent",ref:a},null,512)])}}});const Yt=ot(ut,[["__scopeId","data-v-cab0fa9f"]]);export{Yt as default};
