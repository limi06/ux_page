import{C as l,B as _,O as c,d as x,v as y}from"./index-5f17f4b1.js";import{T as b,C as p}from"./TextStyle-507a7e1f.js";class f extends l{constructor(t,s){const{text:e,resolution:i,style:h,anchor:d,width:o,height:r,roundPixels:a,...u}=t;super({...u}),this.batched=!0,this.resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new _,this._boundsDirty=!0,this._styleClass=s,this.text=e??"",this.style=h,this.resolution=i??null,this.allowChildren=!1,this._anchor=new c({_onUpdate:()=>{this.onViewUpdate()}}),d&&(this.anchor=d),this.roundPixels=a??!1,o&&(this.width=o),r&&(this.height=r)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}get style(){return this._style}set style(t){var s;t=t||{},(s=this._style)==null||s.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,s){let e,i;typeof t!="object"?(e=t,i=s??t):(e=t.width,i=t.height??t.width),e!==void 0&&this._setWidth(e,this.bounds.width),i!==void 0&&this._setHeight(i,this.bounds.height)}addBounds(t){const s=this.bounds;t.addFrame(s.minX,s.minY,s.maxX,s.maxY)}containsPoint(t){const s=this.bounds.maxX,e=this.bounds.maxY,i=-s*this.anchor.x;let h=0;return t.x>=i&&t.x<=i+s&&(h=-e*this.anchor.y,t.y>=h&&t.y<=h+e)}onViewUpdate(){this._didChangeId+=4096,!this.didViewUpdate&&(this.didViewUpdate=!0,this._didTextUpdate=!0,this._boundsDirty=!0,this.renderGroup&&this.renderGroup.onChildViewUpdate(this))}_getKey(){return`${this.text}:${this._style.styleKey}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,this._style.destroy(t),this._style=null,this._text=null}}function w(n,t){let s=n[0]??{};return(typeof s=="string"||n[1])&&(x(y,`use new ${t}({ text: "hi!", style }) instead`),s={text:s,style:n[1]}),s}class U extends f{constructor(...t){const s=w(t,"Text");super(s,b),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,s=this._style.padding,e=this._anchor,i=p.measureText(this.text,this._style),{width:h,height:d}=i;t.minX=-e._x*h-s,t.maxX=t.minX+h,t.minY=-e._y*d-s,t.maxY=t.minY+d}}export{U as T};
