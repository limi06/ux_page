var w=Object.defineProperty;var y=(d,i,e)=>i in d?w(d,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[i]=e;var x=(d,i,e)=>(y(d,typeof i!="symbol"?i+"":i,e),e);import{R as m}from"./red2-282fd708.js";import"./index-5f17f4b1.js";import{d as k,r as p,a as C,o as b,c as N,b as v,e as T,w as D,f as S,p as I,g as R}from"./index-e5439f5c.js";import{B}from"./index-cf96929d.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";class P{constructor(){x(this,"ctx");x(this,"unit");x(this,"startX");x(this,"startY");x(this,"drawData");x(this,"width");x(this,"height");this.width=1900,this.height=800;let i=document.getElementById("myCanvas");this.ctx=i.getContext("2d"),i.width=this.width,i.height=this.height,this.unit=14,this.startX=1300/2,this.startY=20,this.drawData=[]}paint(i){if(!i)return;this.drawData=[],this.ctx.clearRect(0,0,this.width,this.height);const e=t=>{let a=0;if(t.left||t.right){if(t.left){let l=t.right?1:2;a+=l+e(t.left),(t.left.left||t.left.right)&&a--}if(t.right){let l=t.left?1:2;a+=l+e(t.right),(t.right.left||t.right.right)&&a--}}else return t.with=0,0;return t.with=a,a};e(i);let s={x:this.startX,y:this.startY};const n=(t,a)=>{if(!t)return;let l,u;a=="root"?(l=s.x,u=s.y):a=="left"?(l=s.x-(t.with||.6)*this.unit*4,u=s.y+5*this.unit):a=="right"&&(l=s.x+(t.with||.6)*this.unit*4,u=s.y+5*this.unit),t.x=l,t.y=u,this.drawNode(l,u,t.tag,t.color==1?"red":"black"),this.drawData.push({x:l,y:u,tag:t.tag,r:1.5*this.unit,bg:t.color==1?"red":"black"}),s=t,t.left&&(s=t,n(t.left,"left"),this.line(l,u+1.5*this.unit,t.left.x,t.left.y-1.5*this.unit)),t.right&&(s=t,n(t.right,"right"),this.line(l,u+1.5*this.unit,t.right.x,t.right.y-1.5*this.unit)),s=t};n(i,"root")}circle(i,e,s,n){this.ctx&&(this.ctx.beginPath(),this.ctx.arc(i,e,s,0,2*Math.PI),this.ctx.fillStyle=n,this.ctx.fill())}text(i,e,s,n){if(!this.ctx)return;this.ctx.font=s+"px sans-serif";let t=e+s/2.5,a=i-s*n.length/3.4;this.ctx.fillStyle="white",this.ctx.fillText(n,a,t)}square(i,e,s,n){if(!this.ctx)return;let t=i-s/2,a=e-n/2;this.ctx.fillStyle="black",this.ctx.fillRect(t,a,s,n)}line(i,e,s,n){this.ctx&&(this.ctx.beginPath(),this.ctx.moveTo(i,e),this.ctx.lineTo(s,n),this.ctx.strokeStyle="black",this.ctx.stroke())}drawNode(i,e,s,n="black"){let t=1.5*this.unit;this.circle(i,e,t,n);var a=s+"";let l=10;this.text(i,e,l,a)}drawNullNode(i,e){let s=this.unit*2,n=this.unit*3;this.square(i,e,s,n);let t=this.unit*1.8;this.text(i,e,t,"n")}rect(i,e,s,n){this.ctx&&(this.ctx.beginPath(),this.ctx.rect(i,e,s,n),this.ctx.fillStyle="#000000",this.ctx.stroke())}clearPreRect(i){if(!this.ctx)return;let e=i;const s=[e.x-e.r,e.x+e.r,e.y-e.r,e.y+e.r];this.ctx.clearRect(s[0]-1,s[2]-1,e.r*2+2,e.r*2+2),this.drawNode(i.x,i.y,i.tag,i.bg)}}const E=d=>(I("data-v-54d36c9e"),d=d(),R(),d),X={class:""},Y={class:"btn-box"},V=E(()=>v("canvas",{id:"myCanvas",width:"1300",height:"800",style:{border:"1px solid #d3d3d3"}}," 您的浏览器不支持 HTML5 canvas 标签。",-1)),q=k({__name:"redTree2",setup(d){const i=p([696,825,809,467,897,237,908,691,514,346,196]),e=new m,s=p(),n=p(),t=p(null);C(()=>{u(),n.value=new P,a(),console.log(i.value),e.init(i.value),l()});function a(){i.value=[];for(let c=0;c<=26;c++){let f=Math.random()*1e3;i.value.push(Math.floor(f))}}function l(){var g;let c="";function f(h){if(!h)return null;h.left&&h.left.tag&&f(h.left),h.tag&&(c=c+h.tag+" | "),h.right&&h.right.tag&&f(h.right)}f(e.root),(g=n.value)==null||g.paint(e.root),console.log(n.value.drawData,"drawData"),console.log(c,"str")}function u(){var c=document.getElementById("myCanvas");c==null||c.addEventListener("click",f=>{const{offsetX:g,offsetY:h}=f;n.value.drawData.find(r=>{const o=[r.x-r.r,r.x+r.r,r.y-r.r,r.y+r.r];if(o[0]<g&&g<o[1]&&o[2]<h&&h<o[3])return t.value&&n.value.clearPreRect(t.value),n.value.rect(o[0],o[2],r.r*2,r.r*2),t.value=r,r})})}function _(){var c;t.value&&(e.delete(t.value.tag),(c=n.value)==null||c.paint(e.root),console.log(e.root,"redInstance.root"),t.value=null)}return(c,f)=>{const g=B;return b(),N("div",X,[v("div",Y,[T(g,{type:"danger",onClick:_},{default:D(()=>[S("删除")]),_:1})]),V,v("div",{class:"pixiContent",ref_key:"pixiContent",ref:s},null,512)])}}});const G=M(q,[["__scopeId","data-v-54d36c9e"]]);export{G as default};
