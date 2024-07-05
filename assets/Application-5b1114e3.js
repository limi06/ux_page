import{e as b,b as O,C as P,d as f,v as p,a as h,D as m}from"./index-df6cbe0a.js";import{_ as y}from"./index-5cfd8b41.js";const g=[];b.handleByNamedList(O.Environment,g);async function I(s){if(s)for(let e=0;e<g.length;e++){const r=g[e];if(r.value.test()){await r.value.load();return}}}let l;function L(){if(typeof l=="boolean")return l;try{l=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{l=!1}return l}var C=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(C||{});class N{constructor(e){this.items=[],this._name=e}emit(e,r,t,n,a,i,o,A){const{name:j,items:_}=this;for(let d=0,D=_.length;d<D;d++)_[d][j](e,r,t,n,a,i,o,A);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const r=this.items.indexOf(e);return r!==-1&&this.items.splice(r,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const R=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],T=class x{constructor(e){this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name;const r=[...R,...e.runners??[]];this._addRunners(...r),this._addSystems(e.systems),this._addPipes(e.renderPipes,e.renderPipeAdaptors),this._unsafeEvalCheck()}async init(e={}){for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...x.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,r){let t=e;if(t instanceof P&&(t={container:t},r&&(f(p,"passing a second argument is deprecated, please use render options instead"),t.target=r.renderTexture)),t.target||(t.target=this.view.renderTarget),t.target===this.view.renderTarget&&(this._lastObjectRendered=t.container,t.clearColor=this.background.colorRgba),t.clearColor){const n=Array.isArray(t.clearColor)&&t.clearColor.length===4;t.clearColor=n?t.clearColor:h.shared.setValue(t.clearColor).toArray()}t.transform||(t.container.updateLocalTransform(),t.transform=t.container.localTransform),this.runners.prerender.emit(t),this.runners.renderStart.emit(t),this.runners.render.emit(t),this.runners.renderEnd.emit(t),this.runners.postrender.emit(t)}resize(e,r,t){this.view.resize(e,r,t)}clear(e={}){const r=this;e.target||(e.target=r.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=C.ALL);const{clear:t,clearColor:n,target:a}=e;h.shared.setValue(n??this.background.colorRgba),r.renderTarget.clear(a,t,h.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(r=>{this.runners[r]=new N(r)})}_addSystems(e){let r;for(r in e){const t=e[r];this._addSystem(t.value,t.name)}}_addSystem(e,r){const t=new e(this);if(this[r])throw new Error(`Whoops! The name "${r}" is already in use`);this[r]=t,this._systemsHash[r]=t;for(const n in this.runners)this.runners[n].add(t);return this}_addPipes(e,r){const t=r.reduce((n,a)=>(n[a.name]=a.value,n),{});e.forEach(n=>{const a=n.value,i=n.name,o=t[i];this.renderPipes[i]=new a(this,o?new o:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(r=>{r.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!L())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};T.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let S=T,u;function H(s){return u!==void 0||(u=(()=>{var r;const e={stencil:!0,failIfMajorPerformanceCaveat:s??S.defaultOptions.failIfMajorPerformanceCaveat};try{if(!m.get().getWebGLRenderingContext())return!1;let n=m.get().createCanvas().getContext("webgl",e);const a=!!((r=n==null?void 0:n.getContextAttributes())!=null&&r.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,a}catch{return!1}})()),u}let c;async function G(s={}){return c!==void 0||(c=await(async()=>{if(!m.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),c}const w=["webgpu","webgl","canvas"];async function W(s){let e=[];s.preference?(e.push(s.preference),w.forEach(a=>{a!==s.preference&&e.push(a)})):e=w.slice();let r;await I(s.manageImports??!0);let t={};for(let a=0;a<e.length;a++){const i=e[a];if(i==="webgpu"&&await G()){const{WebGPURenderer:o}=await y(()=>import("./WebGPURenderer-121d46ea.js"),["assets/WebGPURenderer-121d46ea.js","assets/index-df6cbe0a.js","assets/index-5cfd8b41.js","assets/index-8195afdf.css","assets/getTextureBatchBindGroup-ca62a9b3.js","assets/mixColors-b0514653.js","assets/colorToUniform-df2bce37.js","assets/SharedSystems-a4e05a63.js","assets/CanvasPool-16ecf894.js"]);r=o,t={...s,...s.webgpu};break}else if(i==="webgl"&&H(s.failIfMajorPerformanceCaveat??S.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await y(()=>import("./WebGLRenderer-17032d70.js"),["assets/WebGLRenderer-17032d70.js","assets/index-df6cbe0a.js","assets/index-5cfd8b41.js","assets/index-8195afdf.css","assets/mixColors-b0514653.js","assets/colorToUniform-df2bce37.js","assets/batchSamplersUniformGroup-b5ec2e92.js","assets/SharedSystems-a4e05a63.js"]);r=o,t={...s,...s.webgl};break}else if(i==="canvas"){t={...s};break}}delete t.webgpu,delete t.webgl;const n=new r;return await n.init(t),n}const E=class v{constructor(...e){this.stage=new P,e[0]!==void 0&&f(p,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await W(e),v._plugins.forEach(r=>{r.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return f(p,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,r=!1){const t=v._plugins.slice(0);t.reverse(),t.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(r),this.stage=null,this.renderer.destroy(e),this.renderer=null}};E._plugins=[];let k=E;b.handleByList(O.Application,k._plugins);export{k as A,C,N as S,S as a,L as u};
