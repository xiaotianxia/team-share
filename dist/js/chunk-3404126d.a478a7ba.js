(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3404126d"],{"1bc7":function(e,n,t){for(var r=t("25ba"),l=t("93ca"),s=t("84e8"),c=t("0b34"),u=t("065d"),i=t("953d"),o=t("839a"),a=o("iterator"),f=o("toStringTag"),d=i.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=l(b),E=0;E<m.length;E++){var L,F=m[E],g=b[F],S=c[F],v=S&&S.prototype;if(v&&(v[a]||u(v,a,d),v[f]||u(v,f,F),i[F]=d,g))for(L in r)v[L]||s(v,L,r[L],!0)}},"32ea":function(e,n,t){var r=t("8078"),l=t("93ca");t("b2be")("keys",(function(){return function(e){return l(r(e))}}))},"9a3f":function(e,n,t){"use strict";t("bb61")},b2be:function(e,n,t){var r=t("e99b"),l=t("76e3"),s=t("0926");e.exports=function(e,n){var t=(l.Object||{})[e]||Object[e],c={};c[e]=n(t),r(r.S+r.F*s((function(){t(1)})),"Object",c)}},b457:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("demo1")],1)},l=[],s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"fullscreen-wrapper"},[t("div",{staticClass:"fullscreen-content"},[t("p",[e._v("是否可全屏："),t("strong",[e._v(e._s(e.fullscreenEnabled))])]),t("p",[e._v("全屏模式："),t("strong",[e._v(e._s(e.fullscreen))])]),t("p",[e._v("fullscreenElement："),t("strong",[e._v(e._s(e.fullscreenElement))])]),t("div",{staticClass:"block",on:{click:e.onTriggerClick}})])])},c=[],u=(t("1bc7"),t("32ea"),{fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5}),i=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror"],o=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],a=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError"],f="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},d="fullscreenEnabled"in f&&Object.keys(u)||i[0]in f&&i||o[0]in f&&o||a[0]in f&&a||[],b={requestFullscreen:function(e){return e[d[u.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[d[u.requestFullscreen]]},get exitFullscreen(){return f[d[u.exitFullscreen]].bind(f)},addEventListener:function(e,n,t){return f.addEventListener(d[u[e]],n,t)},removeEventListener:function(e,n,t){return f.removeEventListener(d[u[e]],n,t)},get fullscreenEnabled(){return Boolean(f[d[u.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return f[d[u.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return f["on".concat(d[u.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return f["on".concat(d[u.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return f["on".concat(d[u.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return f["on".concat(d[u.fullscreenerror]).toLowerCase()]=e}},m={data:function(){return{fullscreen:!1}},computed:{fullscreenEnabled:function(){return b.fullscreenEnabled},fullscreenElement:function(){return JSON.stringify(b.fullscreenElement)}},methods:{onTriggerClick:function(){this.fullscreen?this.onExitFullsreen():this.requestFullscreen(document.querySelector(".fullscreen-content")),this.fullscreen=!this.fullscreen},requestFullscreen:function(e){if(b.requestFullscreen)return b.requestFullscreen(e);alert("浏览器不支持全屏API")},onExitFullsreen:function(){if(b.exitFullscreen)return b.exitFullscreen();alert("浏览器不支持全屏API")}},mounted:function(){var e=this;b.addEventListener("fullscreenchange",(function(){e.$message.info(e.fullscreen?"进入全屏":"退出全屏")})),b.addEventListener("fullscreenerror",(function(n){e.$message.info("全屏切换出错:",n)}))}},E=m,L=(t("9a3f"),t("cba8")),F=Object(L["a"])(E,s,c,!1,null,"34c30bef",null),g=F.exports,S={components:{Demo1:g}},v=S,h=Object(L["a"])(v,r,l,!1,null,null,null);n["default"]=h.exports},bb61:function(e,n,t){}}]);