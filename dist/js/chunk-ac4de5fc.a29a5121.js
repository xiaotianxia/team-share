(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac4de5fc"],{"393c":function(t,e,i){"use strict";var s=i("dc1b"),n=i.n(s);n.a},"68d4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("demo1"),i("div",{staticStyle:{height:"20px"}}),i("demo2")],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recorder-wrapper"},[i("div",{staticClass:"phone"},[i("div",{staticClass:"phone-body"},[t._m(0),i("div",{staticClass:"phone-content"},[i("transition-group",{staticClass:"js-msg-list msg-list",attrs:{tag:"ul",name:"fade"}},[i("li",{key:-1,staticClass:"msg eg"},[i("div",{staticClass:"avatar"}),i("div",{staticClass:"audio"},[t._v("说话")])]),t._l(t.chunkList,function(e,s){return i("li",{key:e._t,staticClass:"msg",on:{click:function(e){return t.onPlay(s)},touchend:function(e){return e.preventDefault(),t.onPlay(s)}}},[i("div",{staticClass:"avatar"}),i("div",{staticClass:"audio",class:{wink:e.wink},style:{width:20*e.duration+"px"}},[i("span",[t._v("(")]),i("span",[t._v("(")]),i("span",[t._v("(")])]),i("div",{staticClass:"duration"},[t._v(t._s(e.duration)+'"')])])})],2)],1),i("div",{staticClass:"phone-operate",on:{mousedown:t.onMousedown,touchstart:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseup,touchend:function(e){return e.preventDefault(),t.onMouseup(e)}}},[t._v(t._s(t.btnText))])])]),i("audio",{ref:"audio"})])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phone-head"},[i("span",[t._v("< 微信(66)")]),i("span",[t._v("哈哈哈")]),i("span",[t._v("···")])])}],r=(i("ac6a"),{data:function(){return{chunks:[],chunkList:[],btnText:"按住说话"}},methods:{requestMediaAccess:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){t.recorder=new window.MediaRecorder(e),t.bindEvents()},function(t){alert("出错，请确保已允许浏览器获取录音权限",t)})},onMousedown:function(){this.onStart(),this.btnText="松开结束"},onMouseup:function(){this.onStop(),this.btnText="按住说话"},onStart:function(){this.recorder.start()},onStop:function(){this.recorder.stop()},onPlay:function(t){var e=this;this.chunkList.forEach(function(t){e.$set(t,"wink",!1)});var i=this.chunkList[t];this.audio.src=i.stream,this.audio.play(),this.bindAudioEvent(t)},bindAudioEvent:function(t){var e=this,i=this.chunkList[t];this.audio.onplaying=function(){e.$set(i,"wink",!0)},this.audio.onended=function(){e.$set(i,"wink",!1)}},bindEvents:function(){this.recorder.ondataavailable=this.getRecordingData,this.recorder.onstop=this.saveRecordingData},getRecordingData:function(t){this.chunks.push(t.data)},saveRecordingData:function(){var t=new Blob(this.chunks,{type:"audio/ogg; codecs=opus"}),e=URL.createObjectURL(t),i=parseInt(t.size/6600);i<=0?alert("说话时间太短"):(i>60&&(i=60),this.chunkList.push({duration:i,stream:e,_t:+new Date}),this.msgList.scrollBy&&this.msgList.scrollBy({top:200,left:0,behavior:"smooth"}),this.chunks=[])}},mounted:function(){navigator.mediaDevices?window.MediaRecorder?(this.audio=this.$refs.audio,this.msgList=document.querySelector(".js-msg-list"),this.requestMediaAccess()):alert("您的浏览器不支持录音"):alert("您的浏览器不支持获取用户设备")}}),c=r,u=(i("393c"),i("2877")),d=Object(u["a"])(c,o,a,!1,null,"75aac2b1",null),h=d.exports,l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recorder-wrapper"},[i("div",{staticClass:"phone"},[i("div",{staticClass:"phone-body"},[t._m(0),i("div",{staticClass:"phone-content"},[i("transition-group",{staticClass:"js-msg-list msg-list",attrs:{tag:"ul",name:"fade"}},[i("li",{key:-1,staticClass:"msg eg"},[i("div",{staticClass:"avatar"}),i("div",{staticClass:"video"},[t._v("拍段视频吧")])]),t._l(t.chunkList,function(e,s){return i("li",{key:e._t,staticClass:"msg"},[i("div",{staticClass:"avatar"}),i("div",{staticClass:"video",on:{click:function(e){return t.onPlay(s)},touchend:function(e){return e.preventDefault(),t.onPlay(s)}}},[i("img",{attrs:{alt:"截图",src:e.poster}}),i("i",{staticClass:"el-icon-caret-right"})])])})],2)],1),i("div",{staticClass:"phone-operate",on:{mousedown:t.onMousedown,touchstart:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseup,touchend:function(e){return e.preventDefault(),t.onMouseup(e)}}},[t._v(t._s(t.btnText))]),i("video",{ref:"video",attrs:{width:"200"},on:{click:function(e){return t.showVideo(!1)},touchend:function(e){return e.preventDefault(),t.showVideo(!1)}}})])]),i("canvas",{ref:"canvas"})])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phone-head"},[i("span",[t._v("< 微信(66)")]),i("span",[t._v("哈哈哈")]),i("span",[t._v("···")])])}],f={data:function(){return{chunks:[],chunkList:[],btnText:"按住拍视频",index:0}},methods:{requestMediaAccess:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(function(e){t.recorder=new window.MediaRecorder(e),t.stream=e,t.bindEvents()},function(t){alert("出错，请确保已允许浏览器获取音视频权限")})},onMousedown:function(){this.showVideo(!0),this.onPreview(),this.btnText="松开结束",this.onStart()},onMouseup:function(){this.onStop(),this.btnText="按住拍视频"},onPreview:function(){this.video.srcObject=this.stream,this.video.muted=!0,this.video.play()},showVideo:function(t){t?this.video.style.display="block":(this.video.style.display="none",this.video.pause())},onStart:function(){this.recorder.start()},onStop:function(){this.recorder.stop()},onPlay:function(t){this.showVideo(!0);var e=this.chunkList[t];this.video.src=e.stream,this.video.muted=!1,this.video.play(),this.bindAudioEvent()},bindAudioEvent:function(){var t=this;this.video.onended=function(){t.showVideo(!1)}},bindEvents:function(){this.recorder.ondataavailable=this.getRecordingData,this.recorder.onstop=this.saveRecordingData},getRecordingData:function(t){this.chunks.push(t.data)},saveRecordingData:function(){var t=new Blob(this.chunks,{type:"video/webm"}),e=URL.createObjectURL(t);this.chunkList.push({stream:e,_t:+new Date}),this.onCapture(this.index),this.msgList.scrollBy&&this.msgList.scrollBy({top:500,left:0,behavior:"smooth"}),this.chunks=[]},onCapture:function(t){var e=this,i=this.chunkList[t];this.ctx.drawImage(this.video,0,0,this.canvas.width,this.canvas.height),this.canvas.toBlob(function(t){var s=URL.createObjectURL(t);e.$set(i,"poster",s)}),this.index++,this.showVideo(!1),this.video.srcObject=null}},mounted:function(){navigator.mediaDevices?window.MediaRecorder?(this.video=this.$refs.video,this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.msgList=document.querySelector(".js-msg-list"),this.requestMediaAccess()):alert("您的浏览器不支持录音"):alert("您的浏览器不支持获取用户设备")}},p=f,m=(i("e09e"),Object(u["a"])(p,l,v,!1,null,"4bbae756",null)),g=m.exports,L={components:{Demo1:h,Demo2:g}},w=L,b=Object(u["a"])(w,s,n,!1,null,null,null);e["default"]=b.exports},9792:function(t,e,i){},ac6a:function(t,e,i){for(var s=i("cadf"),n=i("0d58"),o=i("2aba"),a=i("7726"),r=i("32e9"),c=i("84f2"),u=i("2b4c"),d=u("iterator"),h=u("toStringTag"),l=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(v),p=0;p<f.length;p++){var m,g=f[p],L=v[g],w=a[g],b=w&&w.prototype;if(b&&(b[d]||r(b,d,l),b[h]||r(b,h,g),c[g]=l,L))for(m in s)b[m]||o(b,m,s[m],!0)}},dc1b:function(t,e,i){},e09e:function(t,e,i){"use strict";var s=i("9792"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-ac4de5fc.a29a5121.js.map