import{C as S,S as B,T as L}from"./index-fe195011.js";import{c as C}from"./common-ffdd8384.js";const b=C();function u(i){const h=b.currentNode;i.x&&(h.x=i.x),i.y&&(h.y=i.y),i.width&&(h.width=i.width),i.height&&(h.height=i.height)}const p=(i,h,s,e,n)=>{let o=i[s]-h[s];const t=b.currentNode;if(o=Math.floor(o),s=="y"&&n=="top"){if(Math.abs(o)>e.h&&o<0){let l=Math.abs(o)-e.h;u({y:e.y+e.h,height:l}),g({x:t.x,y:t.y,width:t.width,height:t.height});return}return u({y:e.y-o,height:e.h+o}),g({x:t.x,y:t.y,width:t.width,height:t.height}),"y"}if(s=="y"&&n=="bottom"){if(Math.abs(o)>=e.h&&o>=0){const l=Math.abs(o)-e.h;u({y:e.y-l,height:l}),g({x:t.x,y:t.y,width:t.width,height:t.height});return}return u({height:e.h-o}),g({x:t.x,y:e.y,width:t.width,height:t.height}),"y"}if(s=="x"&&n=="left"){if(Math.abs(o)>e.w&&o<0){let l=Math.abs(o)-e.w;u({x:e.x+e.w,width:l}),g({x:t.x,y:t.y,width:t.width,height:t.height});return}return u({x:e.x-o,width:e.w+o}),g({x:t.x,y:t.y,width:t.width,height:t.height}),"x"}if(s=="x"&&n=="right"){if(Math.abs(o)>e.w&&o>0){let l=Math.abs(o)-e.w;u({x:e.x-l,width:l}),g({x:t.x,y:t.y,width:t.width,height:t.height});return}return u({width:e.w-o}),g({x:e.x,y:t.y,width:t.width,height:t.height}),"x"}};function T(){const i=b.currentNode;if(!i)return;i.eventMode="static";let h=0,s=0,e=i.x,n=i.y;function o(d){console.log("down"),!b.status&&(h=d.pageX,s=d.pageY,e=i.x,n=i.y,b.preBounds={x:i.x,y:i.y,width:i.width,height:i.height,target:i},window.addEventListener("mousemove",t))}function t(d){if(b.status)return;const{pageX:r,pageY:x}=d,f=r-h,a=x-s;u({x:e+f,y:n+a}),g({x:e+f,y:n+a,width:i.width,height:i.height})}function l(d){window.removeEventListener("mousemove",t),i.removeAllListeners()}b.currentNodeMoveEvent=t,i.addEventListener("mousedown",o),i.addEventListener("mouseup",l)}const v=C(),E=2,y=20;let M=[],Y=[];function I(){var h,s;if(M.length)return;M=[],Y=[];for(let e=0;e<4;e++){const n=new S,o=new B(L.WHITE),t=new B(L.EMPTY);n.label=`lineBox${e}`,o.label="line",t.label="line2",o.tint="#abcdef",(e==0||e==2)&&(o.height=E,t.height=y,n.cursor="n-resize"),(e==1||e==3)&&(o.width=E,t.width=y,n.cursor="e-resize"),n.addChild(o),n.addChild(t),M.push(n),(h=v.pixiApp)==null||h.stage.addChild(n)}let i=10;for(let e=0;e<4;e++){const n=new B(L.WHITE);n.label=`minibox${e}`,n.tint="#abcdef",n.width=i,n.height=i,n.anchor.set(.5),(e==0||e==2)&&(n.cursor="ne-resize"),(e==1||e==3)&&(n.cursor="nw-resize"),Y.push(n),(s=v.pixiApp)==null||s.stage.addChild(n)}}function g(i){var l,d;const{x:h,y:s,width:e,height:n}=i,o=(l=v.pixiApp)==null?void 0:l.stage.children.filter(r=>{var x;return(x=r.label)==null?void 0:x.includes("lineBox")}),t=(d=v.pixiApp)==null?void 0:d.stage.children.filter(r=>{var x;return(x=r.label)==null?void 0:x.includes("minibox")});o&&t&&(o.forEach(r=>{switch(r.label){case"lineBox0":r.x=h,r.y=s-y/2;const x=r.children.find(w=>w.label=="line"),f=r.children.find(w=>w.label=="line2");f.width=e,x.y=y/2-E/2,x.width=e;break;case"lineBox1":r.x=h-y/2,r.y=s;const a=r.children.find(w=>w.label=="line"),c=r.children.find(w=>w.label=="line2");c.height=n,a.x=y/2-E/2,a.height=n;break;case"lineBox2":r.x=h,r.y=s+n-y/2;const m=r.children.find(w=>w.label=="line"),X=r.children.find(w=>w.label=="line2");X.width=e,m.y=y/2-E/2,m.width=e;break;case"lineBox3":r.x=h+e-y/2,r.y=s;const z=r.children.find(w=>w.label=="line"),k=r.children.find(w=>w.label=="line2");k.height=n,z.x=y/2-E/2,z.height=n;break}}),t.forEach(r=>{switch(r.label){case"minibox0":r.x=h+e,r.y=s;break;case"minibox1":r.x=h,r.y=s;break;case"minibox2":r.x=h,r.y=s+n;break;case"minibox3":r.x=h+e,r.y=s+n;break}}))}function $(){M.map((i,h)=>{i.eventMode="static",(h==0||h==2)&&(i.cursor="n-resize"),(h==1||h==3)&&(i.cursor="e-resize"),W(i,h)}),Y.map((i,h)=>{i.eventMode="static",(h==0||h==2)&&(i.cursor="ne-resize"),(h==1||h==3)&&(i.cursor="nw-resize"),A(i,h)})}function W(i,h){const s=v.currentNode;let e=0,n=0,o=s.width,t=s.height,l=s.x,d=s.y;function r(a){e=Math.floor(a.pageX),n=Math.floor(a.pageY),o=s.width,t=s.height,l=s.x,d=s.y,window.addEventListener("mousemove",x),window.addEventListener("mouseup",f)}function x(a){let{pageX:c,pageY:m}=a;c=Math.floor(c),m=Math.floor(m),p({x:e,y:n},{x:c,y:m},h==0||h==2?"y":"x",{x:l,y:d,w:o,h:t},{0:"top",1:"left",2:"bottom",3:"right"}[h])}i.addEventListener("mousedown",r);function f(a){window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",f)}window.addEventListener("mouseup",f)}function A(i,h){const s=v.currentNode;let e=0,n=0,o=s.width,t=s.height,l=s.x,d=s.y;function r(f){e=Math.floor(f.pageX),n=Math.floor(f.pageY),o=s.width,t=s.height,l=s.x,d=s.y,window.addEventListener("mousemove",x)}function x(f){let{pageX:a,pageY:c}=f;a=Math.floor(a),c=Math.floor(c),h==0?(p({x:e,y:n},{x:a,y:c},"y",{x:l,y:d,w:o,h:t},"top"),p({x:e,y:n},{x:a,y:c},"x",{x:l,y:d,w:o,h:t},"right")):h==1?(p({x:e,y:n},{x:a,y:c},"y",{x:l,y:d,w:o,h:t},"top"),p({x:e,y:n},{x:a,y:c},"x",{x:l,y:d,w:o,h:t},"left")):h==2?(p({x:e,y:n},{x:a,y:c},"y",{x:l,y:d,w:o,h:t},"bottom"),p({x:e,y:n},{x:a,y:c},"x",{x:l,y:d,w:o,h:t},"left")):(p({x:e,y:n},{x:a,y:c},"y",{x:l,y:d,w:o,h:t},"bottom"),p({x:e,y:n},{x:a,y:c},"x",{x:l,y:d,w:o,h:t},"right"))}i.addEventListener("mousedown",r),window.addEventListener("mouseup",f=>{window.removeEventListener("mousemove",x)})}function F(){v.pixiApp.stage.children.map((h,s)=>{var e,n;((e=h.label)!=null&&e.includes("line")||(n=h.label)!=null&&n.includes("minibox"))&&(h.x=99999)})}export{$ as a,T as b,I as c,F as d,u as e,g as u};
