import{D as c,n}from"./index-73452857.js";class l{constructor(a){this._canvasPool=Object.create(null),this.canvasOptions=a||{},this.enableFullScreen=!1}_createCanvasAndContext(a,t){const s=c.get().createCanvas();s.width=a,s.height=t;const e=s.getContext("2d");return{canvas:s,context:e}}getOptimalCanvasAndContext(a,t,s=1){a=Math.ceil(a*s-1e-6),t=Math.ceil(t*s-1e-6),a=n(a),t=n(t);const e=(a<<17)+(t<<1);this._canvasPool[e]||(this._canvasPool[e]=[]);let o=this._canvasPool[e].pop();return o||(o=this._createCanvasAndContext(a,t)),o}returnCanvasAndContext(a){const{width:t,height:s}=a.canvas,e=(t<<17)+(s<<1);this._canvasPool[e].push(a)}clear(){this._canvasPool={}}}const C=new l;export{C};
