 (function() { function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"timer w-100 h-100 bg-dark d-flex align-items-center justify-content-center\"\u003E\u003Cstyle type=\"text\u002Fcss\"\u003E:scope.timer{color:#fff;font-size:10em;font-weight:700;font-family:'Roboto Mono',monospace}\u003C\u002Fstyle\u003E\u003Cscript type=\"@plotdb\u002Fblock\"\u003Emodule.exports={pkg:{},interface:function(){return this.runner},init:function(){var t,e,i,n;t=new ldview({root:document.body});e=function(t){var n,r,e;n=Math.floor(t\u002F3600);r=Math.floor(t%3600\u002F60);e=t%60;return[n,r,e].map(function(t){return(t+\"\").padStart(2,\"0\")}).join(\":\")};i=t.get(\"value\");n=function(t){t==null&&(t={});this._sec=t.second;this._t={start:0,paused:0};this._running=false;return this};n.prototype=import$(Object.create(Object.prototype),{play:function(){var n=this;this._t.start=(this._t.start||0)+Date.now()-(this._t.paused||0);this._t.paused=0;this._running=true;return requestAnimationFrame(function(t){return n.tick(t)})},pause:function(){this._running=false;return this._t.paused=Date.now()},reset:function(t){t==null&&(t={});this._t.start=this._t.paused=0;this._sec=typeof t===\"object\"?t.second:t;return this.play()},tick:function(t){var n,r=this;if(!this._running){return}requestAnimationFrame(function(t){return r.tick(t)});t=(n=this._sec-Math.floor((Date.now()-this._t.start)\u002F1e3))\u003E0?n:0;return i.innerText=e(t)}});return this.runner=new n({second:60})}};function import$(t,n){var r={}.hasOwnProperty;for(var e in n)if(r.call(n,e))t[e]=n[e];return t}\u003C\u002Fscript\u003E\u003Cspan ld=\"value\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";;return pug_html;}; module.exports = template; })() 