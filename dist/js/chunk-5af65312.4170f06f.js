(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af65312"],{4704:function(n,t,e){},afd6:function(n,t,e){"use strict";e("4704")},c8b4:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"connection-wrapper"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"info-bg"},[n._v("切换或者断开网络试试？")])])],1),e("div",{staticClass:"btn"},[e("el-button",{attrs:{size:"small"},on:{click:n.onGetStatus}},[n._v("获取网络连接状态")])],1),e("div",{staticClass:"linestatus"},[e("span",{staticClass:"point",class:{online:n.online}})]),n.canUseConnection?e("div",{staticClass:"network"},[e("div",{staticClass:"title"},[e("span",[n._v("当前连网信息")]),e("i",{staticClass:"el-icon-refresh",on:{click:n.update}})]),e("el-tag",{attrs:{type:"primary"}},[n._v("类型: "+n._s(n.connection.type))]),e("el-tag",{attrs:{type:"success"}},[n._v("下行速度/带宽: "+n._s(n.connection.downlink)+"Mb/s")]),e("el-tag",{attrs:{type:"info"}},[n._v("往返时间: "+n._s(n.connection.rtt)+"ms")]),e("el-tag",{attrs:{type:"warning"}},[n._v("有效网络连接类型: "+n._s(n.connection.effectiveType))])],1):e("div",{staticClass:"network"},[e("div",[n._v("浏览器不支持navigator.connection")]),e("div",[n._v("无法获取当前所用网络")])])],1)},o=[],s={type:"",downlink:"",rtt:"",effectiveType:""},c="undefined"!==typeof navigator?navigator:{},a={data:function(){return{online:!1,connection:s}},computed:{canUseConnection:function(){return c.connection}},methods:{onGetStatus:function(){this.canUseConnection?this.updateConnectionStatus():this.$message.error("浏览器不支持navigator.connection（>_<）...")},update:function(){this.connection=c.connection},bindEvents:function(){var n=this;if(window.addEventListener("online",(function(){n.updateOnlineStatus()})),window.addEventListener("offline",(function(){n.updateOnlineStatus()})),c.connection){var t=null;c.connection.addEventListener("change",(function(e){t&&clearTimeout(t),t=setTimeout((function(){n.updateConnectionStatus(e)}),500)}))}},updateOnlineStatus:function(){this.online=c.onLine,this.online?this.$message.success("有网啦❛‿˂̵✧"):this.$message.error("掉线啦（>_<）...")},updateConnectionStatus:function(n){this.connection=c.connection||s,this.$notify.info({title:"提示",message:"当前网络："+(n?n.currentTarget.type:this.connection.type||"unknown")})}},mounted:function(){var n=this;setTimeout((function(){n.online=navigator.onLine}),1e3),this.bindEvents()}},u=a,r=(e("afd6"),e("cba8")),l=Object(r["a"])(u,i,o,!1,null,"0d2cf5b3",null);t["default"]=l.exports}}]);