/**
 * @see http://bangbang.58.com/mobile/jsapi/
 */
var _BangBang,_BB;(function(o){var b=0.1;var i={};var s=[];var e=[];var t=r();function f(x,y,w,v){h(x,y,false);u(x,w,v)}function j(x,y,w,v){h(x,y,true);u(x,w,v)}function u(A,w,v){var z=new Object();z.sessionId=A;z.cmd=w;z.args=v;console.log("sending cmd to app:"+JSON.stringify(z));var x=l(g(JSON.stringify(z)));if(t==="android"){if(window.bangbangMApplication){try{window.bangbangMApplication.executeCmd(x)}catch(y){window.location.href="http://bangbang.android/"+x}}}else{if(t==="ios"){window.location.href="http://bangbang.ios/"+x}}}o.onBangBangMAppResponse=function m(){var y=arguments;var A=y[0];var w=[];for(var x=1;x<y.length;x++){w.push(y[x])}for(var z=0;z<s.length;z++){if(s[z].id==A){if(w.length==1){var v=w[0];v=a(q(v));if(String(v)=="null"){v=false}s[z].func(v)}else{s[z].func(w)}if(!s[z].isKeep){s.splice(z,1)}break}}};function h(y,w,v){for(var x in s){if(x.id==y&&x.func==w){return}}if(w){var x=new Object();x.id=y;x.func=w;x.isKeep=v;s.push(x)}}function d(w){for(var v=0;v<s.length;v++){if(s[v].id==w){s.splice(v,1);break}}}i.invokeMethod=function(v,w,x){if(!w){w=[]}w.splice(0,0,v);f(p(),x,"invokeMethod",w)};i.executeNative=function(w,v,x){f(p(),x,w,v)};i.invokeStaticMethod=function(v,w,x){if(!w){w=[]}w.splice(0,0,v);f(p(),x,"invokeActivityMethod",w)};i.invokeStaticMethod=function(x,v,w,y){w.splice(0,0,v);w.splice(1,0,x);f(p(),y,"invokeStaticMethod",w)};i.addNativeEventListener=function(w,x){for(var v=0;v<e.length;v++){if(e[v].eventType==w&&e[v].func==x){return}}var z=p();var y={};y.sessionId=z;y.eventType=w;y.func=x;e.push(y);j(z,callback,"invokeMethod",["addNativeEventListener",w])};i.removeNativeEventListener=function(y,v){var z=0;for(var x=0;x<e.length;x++){if(e[x].eventType==y&&e[x].func==v){e.splice(x,1);z=e[x];break}}for(var w=0;w<s.length;w++){if(s[w].id==z){s.splice(w,1)}}f(p(),null,"invokeMethod",["removeNativeEventListener",y])};i.getAppVersion=function(){return c("bangbangMAppVersion")};i.getSdkVersion=function(){return b};i.share=function(y,x,z,w,v){f(p(),v,"bb_share",[y,x,z,w])};i.selectAndUploadPicture=function(w,x){j(p(),v,"bb_selectAndUploadPicture",[w]);function v(y){var z=JSON.parse(y);x(z)}};i.pay=function(w,z,y,x,v){f(p(),v,"bb_pay",[w,z,y,x])};i.reportLog=function(z,w,y,A,x){var v=[z];if(w){v.push(w);v.push(y)}if(A){v.push(A);v.push(x)}f(p(),null,"bb_reportLog",v)};i.openView=function(w,v,x){f(p(),x,"bb_openView",v)};i.finishView=function(){f(p(),null,"bb_finishView",[])};i.alert=function(v){alert(v)};_BangBang=_BB=i;if(typeof define!=="undefined"&&define.amd){define([],function(){return i})}function p(){var v=new Date().getTime()+""+Math.floor(Math.random()*100000);return v}function r(){if(/android/i.test(navigator.userAgent)){return"android"}else{if(/ipad|iphone|mac/i.test(navigator.userAgent)){return"ios"}else{return"other"}}}function c(v){var w=new RegExp("(^|&)"+v+"=([^&]*)(&|$)","i");var x=window.location.search.substr(1).match(w);if(x!=null){return unescape(x[2])}return null}var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var n=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function l(B){var x,z,v;var A,y,w;v=B.length;z=0;x="";while(z<v){A=B.charCodeAt(z++)&255;if(z==v){x+=k.charAt(A>>2);x+=k.charAt((A&3)<<4);x+="==";break}y=B.charCodeAt(z++);if(z==v){x+=k.charAt(A>>2);x+=k.charAt(((A&3)<<4)|((y&240)>>4));x+=k.charAt((y&15)<<2);x+="=";break}w=B.charCodeAt(z++);x+=k.charAt(A>>2);x+=k.charAt(((A&3)<<4)|((y&240)>>4));x+=k.charAt(((y&15)<<2)|((w&192)>>6));x+=k.charAt(w&63)}return x}function q(C){var B,A,y,w;var z,v,x;v=C.length;z=0;x="";while(z<v){do{B=n[C.charCodeAt(z++)&255]}while(z<v&&B==-1);if(B==-1){break}do{A=n[C.charCodeAt(z++)&255]}while(z<v&&A==-1);if(A==-1){break}x+=String.fromCharCode((B<<2)|((A&48)>>4));do{y=C.charCodeAt(z++)&255;if(y==61){return x}y=n[y]}while(z<v&&y==-1);if(y==-1){break}x+=String.fromCharCode(((A&15)<<4)|((y&60)>>2));do{w=C.charCodeAt(z++)&255;if(w==61){return x}w=n[w]}while(z<v&&w==-1);if(w==-1){break}x+=String.fromCharCode(((y&3)<<6)|w)}return x}function g(y){var w,x,v,z;w="";v=y.length;for(x=0;x<v;x++){z=y.charCodeAt(x);if((z>=1)&&(z<=127)){w+=y.charAt(x)}else{if(z>2047){w+=String.fromCharCode(224|((z>>12)&15));w+=String.fromCharCode(128|((z>>6)&63));w+=String.fromCharCode(128|((z>>0)&63))}else{w+=String.fromCharCode(192|((z>>6)&31));w+=String.fromCharCode(128|((z>>0)&63))}}}return w}function a(A){var w,y,v,B;var z,x;w="";v=A.length;y=0;while(y<v){B=A.charCodeAt(y++);switch(B>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:w+=A.charAt(y-1);break;case 12:case 13:z=A.charCodeAt(y++);w+=String.fromCharCode(((B&31)<<6)|(z&63));break;case 14:z=A.charCodeAt(y++);x=A.charCodeAt(y++);w+=String.fromCharCode(((B&15)<<12)|((z&63)<<6)|((x&63)<<0));
    break}}return w}}(this));