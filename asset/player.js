"undefined"==typeof cyberplayer&&(cyberplayer=function(d){if(cyberplayer.api){return cyberplayer.api.selectPlayer(d)}},cyberplayer.version="1.0.0",cyberplayer.vid=document.createElement("video"),cyberplayer.audio=document.createElement("audio"),cyberplayer.source=document.createElement("source"),function(d){function a(b){return function(){return e(b)}}var h=document,g=window,c=navigator,b=d.utils=function(){};b.exists=function(b){switch(typeof b){case"string":return 0<b.length;case"object":return null!==b;case"undefined":return !1}return !0};b.styleDimension=function(b){return b+(0<b.toString().indexOf("%")?"":"px")};b.getAbsolutePath=function(a,c){b.exists(c)||(c=h.location.href);if(b.exists(a)){var e;if(b.exists(a)){e=a.indexOf("://");var g=a.indexOf("?");e=0<e&&(0>g||g>e)}else{e=void 0}if(e){return a}e=c.substring(0,c.indexOf("://")+3);var g=c.substring(e.length,c.indexOf("/",e.length+1)),l;0===a.indexOf("/")?l=a.split("/"):(l=c.split("?")[0],l=l.substring(e.length+g.length+1,l.lastIndexOf("/")),l=l.split("/").concat(a.split("/")));for(var f=[],d=0;d<l.length;d++){l[d]&&b.exists(l[d])&&"."!=l[d]&&(".."==l[d]?f.pop():f.push(l[d]))}return e+g+"/"+f.join("/")}};b.extend=function(){var a=b.extend.arguments;if(1<a.length){for(var c=1;c<a.length;c++){for(var e in a[c]){try{b.exists(a[c][e])&&(a[0][e]=a[c][e])}catch(g){}}}return a[0]}return null};b.log=function(a,b){"undefined"!=typeof console&&"undefined"!=typeof console.log&&(b?console.log(a,b):console.log(a))};var e=b.userAgentMatch=function(a){return null!==c.userAgent.toLowerCase().match(a)};b.isIE=a(/msie/i);b.isFF=a(/firefox/i);b.isChrome=a(/chrome/i);b.isIOS=a(/iP(hone|ad|od)/i);b.isIPod=a(/iP(hone|od)/i);b.isIPad=a(/iPad/i);b.isSafari602=a(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);b.isAndroid=function(a){return a?e(RegExp("android.*"+a,"i")):e(/android/i)};b.isMobile=function(){return b.isIOS()||b.isAndroid()};b.saveCookie=function(a,b){h.cookie="cyberplayer."+a+"="+b+"; path=/"};b.getCookies=function(){for(var a={},b=h.cookie.split("; "),c=0;c<b.length;c++){var e=b[c].split("=");0==e[0].indexOf("cyberplayer.")&&(a[e[0].substring(9,e[0].length)]=e[1])}return a};b.typeOf=function(a){var b=typeof a;return"object"===b?a?a instanceof Array?"array":b:"null":b};b.translateEventResponse=function(a,c){var e=b.extend({},c);a!=d.events.CBPLAYER_FULLSCREEN||e.fullscreen?"object"==typeof e.data?(e=b.extend(e,e.data),delete e.data):"object"==typeof e.metadata&&b.deepReplaceKeyName(e.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]):(e.fullscreen="true"==e.message?!0:!1,delete e.message);var g=["position","duration","offset"],l;for(l in g){e[g[l]]&&(e[g[l]]=Math.round(1000*e[g[l]])/1000)}return e};b.flashVersion=function(){if(b.isAndroid()){return 0}var a=c.plugins,e;try{if("undefined"!==a&&(e=a["Shockwave Flash"])){return parseInt(e.description.replace(/\D+(\d+)\..*/,"$1"))}}catch(l){}if("undefined"!=typeof g.ActiveXObject){try{if(e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){return parseInt(e.GetVariable("$version").split(" ")[1].split(",")[0])}}catch(d){}}return 0};b.getScriptPath=function(a){for(var b=h.getElementsByTagName("script"),e=0;e<b.length;e++){var c=b[e].src;if(c&&0<=c.indexOf(a)){return c.substr(0,c.indexOf(a))}}return""};b.deepReplaceKeyName=function(a,b,e){switch(d.utils.typeOf(a)){case"array":for(var c=0;c<a.length;c++){a[c]=d.utils.deepReplaceKeyName(a[c],b,e)}break;case"object":for(var g in a){var f;if(b instanceof Array&&e instanceof Array){if(b.length!=e.length){continue}else{f=b}}else{f=[b]}for(var l=g,c=0;c<f.length;c++){l=l.replace(RegExp(b[c],"g"),e[c])}a[l]=d.utils.deepReplaceKeyName(a[g],b,e);g!=l&&delete a[g]}}return a};var l=b.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};b.getPluginPathType=function(a){if("string"==typeof a){a=a.split("?")[0];var e=a.indexOf("://");if(0<e){return l.ABSOLUTE}var c=a.indexOf("/");a=b.extension(a);return 0>e&&0>c&&(!a||!isNaN(a))?l.CDN:l.RELATIVE}};b.getPluginName=function(a){return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};b.getPluginVersion=function(a){return a.replace(/[^-]*-?([^\.]*).*$/,"$1")};b.isYouTube=function(a){return -1<a.indexOf("youtube.com")||-1<a.indexOf("youtu.be")};b.isRtmp=function(a,b){return 0==a.indexOf("rtmp")||"rtmp"==b};b.foreach=function(a,b){for(var e in a){a.hasOwnProperty(e)&&b(e)}};b.isHTTPS=function(){return 0==g.location.href.indexOf("https")};b.repo=function(){var a="http://cybertran.baidu.com/";try{b.isHTTPS()&&(a=a.replace("http://","https://ssl."))}catch(e){}return a}}(cyberplayer),function(d){var a="video/",h={mp4:a+"mp4",vorbis:"audio/ogg",ogg:a+"ogg",webm:a+"webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},g={mp4:h.mp4,f4v:h.mp4,m4v:h.mp4,mov:h.mp4,m4a:h.aac,f4a:h.aac,aac:h.aac,mp3:h.mp3,ogv:h.ogg,ogg:h.vorbis,oga:h.vorbis,webm:h.webm,m3u8:h.hls,hls:h.hls},a="video",a={flv:a,f4v:a,mov:a,m4a:a,m4v:a,mp4:a,aac:a,f4a:a,mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},c=d.extensionmap={},b;for(b in g){c[b]={html5:g[b]}
}for(b in a){c[b]||(c[b]={}),c[b].flash=a[b]}c.types=h;c.mimeType=function(a){for(var b in h){if(h[b]==a){return b}}};c.extType=function(a){return c.mimeType(g[a])}}(cyberplayer.utils),function(d){var a=d.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},h=document;d.scriptloader=function(g){function c(){e=a.ERROR;m.sendEvent(l.ERROR)}function b(){e=a.COMPLETE;m.sendEvent(l.COMPLETE)}var e=a.NEW,l=cyberplayer.events,m=new l.eventdispatcher;d.extend(this,m);this.load=function(){var m=d.scriptloader.loaders[g];if(m&&(m.getStatus()==a.NEW||m.getStatus()==a.LOADING)){m.addEventListener(l.ERROR,c),m.addEventListener(l.COMPLETE,b)}else{if(d.scriptloader.loaders[g]=this,e==a.NEW){e=a.LOADING;var p=h.createElement("script");p.addEventListener?(p.onload=b,p.onerror=c):p.readyState&&(p.onreadystatechange=function(){"loaded"!=p.readyState&&"complete"!=p.readyState||b()});h.getElementsByTagName("head")[0].appendChild(p);p.src=g}}};this.getStatus=function(){return e}};d.scriptloader.loaders={}}(cyberplayer.utils),function(d){d.trim=function(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")};d.pad=function(a,d,g){for(g||(g="0");a.length<d;){a=g+a}return a};d.xmlAttribute=function(a,d){for(var g=0;g<a.attributes.length;g++){if(a.attributes[g].name&&a.attributes[g].name.toLowerCase()==d.toLowerCase()){return a.attributes[g].value.toString()}}return""};d.extension=function(a){if(!a||"rtmp"==a.substr(0,4)){return""}a=a.substring(a.lastIndexOf("/")+1,a.length).split("?")[0].split("#")[0];if(-1<a.lastIndexOf(".")){return a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase()}};d.stringToColor=function(a){a=a.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");3==a.length&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2));return parseInt(a,16)}}(cyberplayer.utils),function(d){d.key=function(a){var h,g,c;this.edition=function(){return c&&c.getTime()<(new Date).getTime()?"invalid":h};this.token=function(){return g};d.exists(a)||(a="");try{a=d.tea.decrypt(a,"36QXq4W@GSBV^teR");var b=a.split("/");(h=b[0])||(h="free");g=b[1];b[2]&&0<parseInt(b[2])&&(c=new Date,c.setTime(String(b[2])))}catch(e){h="invalid"}}}(cyberplayer.utils),function(d){var a=d.tea={};a.encrypt=function(c,b){if(0==c.length){return""}var e=a.strToLongs(g.encode(c));1>=e.length&&(e[1]=0);for(var l=a.strToLongs(g.encode(b).slice(0,16)),m=e.length,d=e[m-1],p=e[0],r,k=Math.floor(6+52/m),f=0;0<k--;){f+=2654435769;r=f>>>2&3;for(var s=0;s<m;s++){p=e[(s+1)%m],d=(d>>>5^p<<2)+(p>>>3^d<<4)^(f^p)+(l[s&3^r]^d),d=e[s]+=d}}e=a.longsToStr(e);return h.encode(e)};a.decrypt=function(c,b){if(0==c.length){return""}for(var e=a.strToLongs(h.decode(c)),l=a.strToLongs(g.encode(b).slice(0,16)),d=e.length,n=e[d-1],p=e[0],r,k=2654435769*Math.floor(6+52/d);0!=k;){r=k>>>2&3;for(var f=d-1;0<=f;f--){n=e[0<f?f-1:d-1],n=(n>>>5^p<<2)+(p>>>3^n<<4)^(k^p)+(l[f&3^r]^n),p=e[f]-=n}k-=2654435769}e=a.longsToStr(e);e=e.replace(/\0+$/,"");return g.decode(e)};a.strToLongs=function(a){for(var b=Array(Math.ceil(a.length/4)),e=0;e<b.length;e++){b[e]=a.charCodeAt(4*e)+(a.charCodeAt(4*e+1)<<8)+(a.charCodeAt(4*e+2)<<16)+(a.charCodeAt(4*e+3)<<24)}return b};a.longsToStr=function(a){for(var b=Array(a.length),e=0;e<a.length;e++){b[e]=String.fromCharCode(a[e]&255,a[e]>>>8&255,a[e]>>>16&255,a[e]>>>24&255)}return b.join("")};var h={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a,b){var e,l,d,n,p=[],r="",k,f,s=h.code;f=("undefined"==typeof b?0:b)?g.encode(a):a;k=f.length%3;if(0<k){for(;3>k++;){r+="=",f+="\x00"}}for(k=0;k<f.length;k+=3){e=f.charCodeAt(k),l=f.charCodeAt(k+1),d=f.charCodeAt(k+2),n=e<<16|l<<8|d,e=n>>18&63,l=n>>12&63,d=n>>6&63,n&=63,p[k/3]=s.charAt(e)+s.charAt(l)+s.charAt(d)+s.charAt(n)}p=p.join("");return p.slice(0,p.length-r.length)+r},decode:function(a,b){b="undefined"==typeof b?!1:b;var e,l,d,n,p,r=[],k,f=h.code;k=b?g.decode(a):a;for(var s=0;s<k.length;s+=4){e=f.indexOf(k.charAt(s)),l=f.indexOf(k.charAt(s+1)),n=f.indexOf(k.charAt(s+2)),p=f.indexOf(k.charAt(s+3)),d=e<<18|l<<12|n<<6|p,e=d>>>16&255,l=d>>>8&255,d&=255,r[s/4]=String.fromCharCode(e,l,d),64==p&&(r[s/4]=String.fromCharCode(e,l)),64==n&&(r[s/4]=String.fromCharCode(e))}n=r.join("");return b?g.decode(n):n}},g={encode:function(a){a=a.replace(/[\u0080-\u07ff]/g,function(a){a=a.charCodeAt(0);return String.fromCharCode(192|a>>6,128|a&63)});return a=a.replace(/[\u0800-\uffff]/g,function(a){a=a.charCodeAt(0);return String.fromCharCode(224|a>>12,128|a>>6&63,128|a&63)})},decode:function(a){a=a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(a){a=(a.charCodeAt(0)&15)<<12|(a.charCodeAt(1)&63)<<6|a.charCodeAt(2)&63;return String.fromCharCode(a)});return a=a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(a){a=(a.charCodeAt(0)&31)<<6|a.charCodeAt(1)&63;return String.fromCharCode(a)})}}}(cyberplayer.utils),function(d){d.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"cbplayerAPIReady",CBPLAYER_READY:"cbplayerReady",CBPLAYER_FULLSCREEN:"cbplayerFullscreen",CBPLAYER_RESIZE:"cbplayerResize",CBPLAYER_ERROR:"cbplayerError",CBPLAYER_MEDIA_BEFOREPLAY:"cbplayerMediaBeforePlay",CBPLAYER_MEDIA_BEFORECOMPLETE:"cbplayerMediaBeforeComplete",CBPLAYER_COMPONENT_SHOW:"cbplayerComponentShow",CBPLAYER_COMPONENT_HIDE:"cbplayerComponentHide",CBPLAYER_MEDIA_BUFFER:"cbplayerMediaBuffer",CBPLAYER_MEDIA_BUFFER_FULL:"cbplayerMediaBufferFull",CBPLAYER_MEDIA_ERROR:"cbplayerMediaError",CBPLAYER_MEDIA_LOADED:"cbplayerMediaLoaded",CBPLAYER_MEDIA_COMPLETE:"cbplayerMediaComplete",CBPLAYER_MEDIA_SEEK:"cbplayerMediaSeek",CBPLAYER_MEDIA_TIME:"cbplayerMediaTime",CBPLAYER_MEDIA_VOLUME:"cbplayerMediaVolume",CBPLAYER_MEDIA_META:"cbplayerMediaMeta",CBPLAYER_MEDIA_MUTE:"cbplayerMediaMute",CBPLAYER_MEDIA_LEVELS:"cbplayerMediaLevels",CBPLAYER_MEDIA_LEVEL_CHANGED:"cbplayerMediaLevelChanged",CBPLAYER_CAPTIONS_CHANGED:"cbplayerCaptionsChanged",CBPLAYER_CAPTIONS_LIST:"cbplayerCaptionsList",CBPLAYER_PLAYER_STATE:"cyberPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},CBPLAYER_PLAYLIST_LOADED:"cbplayerPlaylistLoaded",CBPLAYER_PLAYLIST_ITEM:"cbplayerPlaylistItem",CBPLAYER_PLAYLIST_COMPLETE:"cbplayerPlaylistComplete",CBPLAYER_DISPLAY_CLICK:"cbplayerViewClick",CBPLAYER_CONTROLS:"cbplayerViewControls",CBPLAYER_INSTREAM_CLICK:"cbplayerInstreamClicked",CBPLAYER_INSTREAM_DESTROYED:"cbplayerInstreamDestroyed"}
}(cyberplayer),function(d){var a=cyberplayer.utils;d.eventdispatcher=function(d,g){var c,b;this.resetEventListeners=function(){c={};b=[]};this.resetEventListeners();this.addEventListener=function(b,g,d){try{a.exists(c[b])||(c[b]=[]),"string"==a.typeOf(g)&&(g=(new Function("return "+g))()),c[b].push({listener:g,count:d})}catch(h){a.log("error",h)}return !1};this.removeEventListener=function(b,g){if(c[b]){try{for(var d=0;d<c[b].length;d++){if(c[b][d].listener.toString()==g.toString()){c[b].splice(d,1);break}}}catch(h){a.log("error",h)}return !1}};this.addGlobalListener=function(e,c){console.log("abc"+e+"--"+c);try{"string"==a.typeOf(e)&&(e=(new Function("return "+e))()),b.push({listener:e,count:c})}catch(g){a.log("error",g)}return !1};this.removeGlobalListener=function(e){if(e){try{for(var c=0;c<b.length;c++){if(b[c].listener.toString()==e.toString()){b.splice(c,1);break}}}catch(g){a.log("error",g)}return !1}};this.sendEvent=function(e,l){a.exists(l)||(l={});a.extend(l,{id:d,version:cyberplayer.version,type:e});g&&a.log(e,l);if("undefined"!=a.typeOf(c[e])){for(var m=0;m<c[e].length;m++){try{c[e][m].listener(l)}catch(n){a.log("There was an error while handling a listener: "+n.toString(),c[e][m].listener)}c[e][m]&&(1===c[e][m].count?delete c[e][m]:0<c[e][m].count&&(c[e][m].count-=1))}}for(m=0;m<b.length;m++){try{b[m].listener(l)}catch(p){a.log("There was an error while handling a listener: "+p.toString(),b[m].listener)}b[m]&&(1===b[m].count?delete b[m]:0<b[m].count&&(b[m].count-=1))}}}}(cyberplayer.events),function(d){var a={},h={};d.plugins=function(){};d.plugins.loadPlugins=function(g,c){h[g]=new d.plugins.pluginloader(new d.plugins.model(a),c);return h[g]};d.plugins.registerPlugin=function(g,c,b,e){var l=d.utils.getPluginName(g);a[l]||(a[l]=new d.plugins.plugin(g));a[l].registerPlugin(g,c,b,e)}}(cyberplayer),function(d){d.plugins.model=function(a){this.addPlugin=function(h){var g=d.utils.getPluginName(h);a[g]||(a[g]=new d.plugins.plugin(h));return a[g]};this.getPlugins=function(){return a}}}(cyberplayer),function(d){var a=cyberplayer.utils,h=cyberplayer.events;d.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};d.plugin=function(g){function c(){switch(a.getPluginPathType(g)){case a.pluginPathType.ABSOLUTE:return g;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(g,window.location.href)}}function b(){r=setTimeout(function(){l=a.loaderstatus.COMPLETE;k.sendEvent(h.COMPLETE)},1000)}function e(){l=a.loaderstatus.ERROR;k.sendEvent(h.ERROR)}var l=a.loaderstatus.NEW,m,n,p,r,k=new h.eventdispatcher;a.extend(this,k);this.load=function(){if(l==a.loaderstatus.NEW){if(0<g.lastIndexOf(".swf")){m=g,l=a.loaderstatus.COMPLETE,k.sendEvent(h.COMPLETE)}else{if(a.getPluginPathType(g)==a.pluginPathType.CDN){l=a.loaderstatus.COMPLETE,k.sendEvent(h.COMPLETE)}else{l=a.loaderstatus.LOADING;var f=new a.scriptloader(c());f.addEventListener(h.COMPLETE,b);f.addEventListener(h.ERROR,e);f.load()}}}};this.registerPlugin=function(b,e,c,g){r&&(clearTimeout(r),r=void 0);p=e;c&&g?(m=g,n=c):"string"==typeof c?m=c:"function"==typeof c?n=c:!c&&!g&&(m=b);l=a.loaderstatus.COMPLETE;k.sendEvent(h.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(g)};this.getFlashPath=function(){if(m){switch(a.getPluginPathType(m)){case a.pluginPathType.ABSOLUTE:return m;case a.pluginPathType.RELATIVE:return 0<g.lastIndexOf(".swf")?a.getAbsolutePath(m,window.location.href):a.getAbsolutePath(m,c())}}return null};this.getJS=function(){return n};this.getTarget=function(){return p};this.getPluginmode=function(){if("undefined"!=typeof m&&"undefined"!=typeof n){return d.pluginmodes.HYBRID}if("undefined"!=typeof m){return d.pluginmodes.FLASH}if("undefined"!=typeof n){return d.pluginmodes.JAVASCRIPT}};this.getNewInstance=function(a,b,e){return new n(a,b,e)};this.getURL=function(){return g}}}(cyberplayer.plugins),function(d){var a=d.utils,h=d.events;d.plugins.pluginloader=function(g,c){function b(){n?k.sendEvent(h.ERROR,{message:p}):m||(m=!0,l=a.loaderstatus.COMPLETE,k.sendEvent(h.COMPLETE))}function e(){r||b();if(!m&&!n){var e=0,c=g.getPlugins(),f;for(f in r){var l=a.getPluginName(f),h=c[l],l=h.getJS(),k=h.getTarget(),h=h.getStatus();h==a.loaderstatus.LOADING||h==a.loaderstatus.NEW?e++:l&&(!k||parseFloat(k)>parseFloat(d.version))&&(n=!0,p="Incompatible player version",b())}0==e&&b()}}var l=a.loaderstatus.NEW,m=!1,n=!1,p,r=c,k=new h.eventdispatcher;a.extend(this,k);this.setupPlugins=function(b,e,c){var f={length:0,plugins:{}},d=0,l={},h=g.getPlugins(),k;for(k in e.plugins){var m=a.getPluginName(k),n=h[m],C=n.getFlashPath(),p=n.getJS(),r=n.getURL();C&&(f.plugins[C]=a.extend({},e.plugins[k]),f.plugins[C].pluginmode=n.getPluginmode(),f.length++);try{if(p&&e.plugins&&e.plugins[r]){var w=document.createElement("div");w.id=b.id+"_"+m;w.style.position="absolute";w.style.top=0;w.style.zIndex=d+10;l[m]=n.getNewInstance(b,a.extend({},e.plugins[r]),w);d++;b.onReady(c(l[m],w,!0));b.onResize(c(l[m],w))}}catch(D){a.log("ERROR: Failed to load "+m+".")
}}b.plugins=l;return f};this.load=function(){if(!a.exists(c)||"object"==a.typeOf(c)){l=a.loaderstatus.LOADING;for(var b in c){if(a.exists(b)){var d=g.addPlugin(b);d.addEventListener(h.COMPLETE,e);d.addEventListener(h.ERROR,f)}}d=g.getPlugins();for(b in d){d[b].load()}}e()};var f=this.pluginFailed=function(){n||(n=!0,p="File not found",b())};this.getStatus=function(){return l}}}(cyberplayer),function(d){d.playlist=function(a){var h=[];if("array"==d.utils.typeOf(a)){for(var g=0;g<a.length;g++){h.push(new d.playlist.item(a[g]))}}else{h.push(new d.playlist.item(a))}return h}}(cyberplayer),function(d){var a=d.item=function(h){var g=cyberplayer.utils,c=g.extend({},a.defaults,h);c.tracks=g.exists(h.tracks)?h.tracks:[];0==c.sources.length&&(c.sources=[new d.source(c)]);for(var b=0;b<c.sources.length;b++){var e=c.sources[b]["default"];c.sources[b]["default"]=e?"true"==e.toString():!1;c.sources[b]=new d.source(c.sources[b])}if(c.captions&&!g.exists(h.tracks)){for(h=0;h<c.captions.length;h++){c.tracks.push(c.captions[h])}delete c.captions}for(b=0;b<c.tracks.length;b++){c.tracks[b]=new d.track(c.tracks[b])}return c};a.defaults={description:"",image:"",mediaid:"",title:"",sources:[],tracks:[]}}(cyberplayer.playlist),function(d){var a=cyberplayer.utils,h={file:void 0,label:void 0,type:void 0,"default":void 0};d.source=function(g){var c=a.extend({},h),b;for(b in h){a.exists(g[b])&&(c[b]=g[b],delete g[b])}c.type&&0<c.type.indexOf("/")&&(c.type=a.extensionmap.mimeType(c.type));"m3u8"==c.type&&(c.type="hls");"smil"==c.type&&(c.type="rtmp");return c}}(cyberplayer.playlist),function(d){var a=cyberplayer.utils,h={file:void 0,label:void 0,kind:"captions","default":!1};d.track=function(g){var c=a.extend({},h);g||(g={});for(var b in h){a.exists(g[b])&&(c[b]=g[b],delete g[b])}return c}}(cyberplayer.playlist),function(d){var a=d.utils,h=d.events,g=document,c=d.embed=function(b){function e(a){m(p,q+a.message)}function l(){m(p,q+"No playable sources found")}function m(b,e){if(n.fallback){var c=b.style;c.backgroundColor="#000";c.color="#FFF";c.width=a.styleDimension(n.width);c.height=a.styleDimension(n.height);c.display="table";c.opacity=1;var c=document.createElement("p"),f=c.style;f.verticalAlign="middle";f.textAlign="center";f.display="table-cell";f.font="15px/20px Arial, Helvetica, sans-serif";c.innerHTML=e.replace(":",":<br>");b.innerHTML="";b.appendChild(c)}}var n=new c.config(b.config),p,r,k,f=n.width,s=n.height,q="Error loading player: ",t=d.plugins.loadPlugins(b.id,n.plugins);n.fallbackDiv&&(k=n.fallbackDiv,delete n.fallbackDiv);n.id=b.id;r=g.getElementById(b.id);p=g.createElement("div");p.id=r.id;p.style.width=0<f.toString().indexOf("%")?f:f+"px";p.style.height=0<s.toString().indexOf("%")?s:s+"px";r.parentNode.replaceChild(p,r);d.embed.errorScreen=m;t.addEventListener(h.COMPLETE,function(){if("array"==a.typeOf(n.playlist)&&2>n.playlist.length&&(0==n.playlist.length||!n.playlist[0].sources||0==n.playlist[0].sources.length)){l()}else{if(t.getStatus()==a.loaderstatus.COMPLETE){for(var f=0;f<n.modes.length;f++){if(n.modes[f].type&&c[n.modes[f].type]){var g=a.extend({},n),d=new c[n.modes[f].type](p,n.modes[f],g,t,b);if(d.supportsConfig()){d.addEventListener(h.ERROR,e);d.embed();f=b;g=g.events;d=void 0;for(d in g){"function"==typeof f[d]&&f[d].call(f,g[d])}return b}}}n.fallback?(a.log("No suitable players found and fallback enabled"),new c.download(p,n,l)):(a.log("No suitable players found and fallback disabled"),p.parentNode.replaceChild(k,p))}}});t.addEventListener(h.ERROR,function(a){m(p,"Could not load plugins: "+a.message)});t.load();return b}}(cyberplayer),function(d){function a(a){if(a.playlist){for(var e=0;e<a.playlist.length;e++){a.playlist[e]=new c(a.playlist[e])}}else{var e={},d;for(d in c.defaults){h(a,e,d)}e.sources||(a.levels?(e.sources=a.levels,delete a.levels):(d={},h(a,d,"file"),h(a,d,"type"),e.sources=d.file?[d]:[]));a.playlist=[new c(e)]}}function h(a,e,c){g.exists(a[c])&&(e[c]=a[c],delete a[c])}var g=d.utils,c=d.playlist.item;(d.embed.config=function(b){var e={fallback:!0,height:270,primary:"html5",width:480,base:b.base?b.base:g.getScriptPath("cyberplayer.min.js")};b=g.extend(e,d.defaults,b);var e={type:"html5",src:b.base+"cyberplayer.html5.min.js"},c={type:"flash",src:"http://pan.baidu.com/res/static/thirdparty/flashvideo/player/cyberplayer.swf"};b.modes="flash"==b.primary?[c,e]:[e,c];b.listbar&&(b.playlistsize=b.listbar.size,b.playlistposition=b.listbar.position);b.flashplayer&&(c.src=b.flashplayer);b.html5player&&(e.src=b.html5player);a(b);return b}).addConfig=function(b,c){a(c);return g.extend(b,c)}}(cyberplayer),function(d){var a=d.utils,h=document;d.embed.download=function(d,c,b){function e(a,b){for(var c=h.querySelectorAll(a),e=0;e<c.length;e++){for(var d in b){c[e].style[d]=b[d]}}}function l(a,b,c){a=h.createElement(a);b&&(a.className="cbdownload"+b);c&&c.appendChild(a);return a}var m=a.extend({},c),n,p=m.width?m.width:480,r=m.height?m.height:320,k;c=c.logo?c.logo:{prefix:a.repo(),file:"logo.png",margin:10};
var f,s;s=m.playlist;var q,t,m=["mp4","aac","mp3"];if(s&&s.length){q=s[0];t=q.sources;for(s=0;s<t.length;s++){var v=t[s],u=v.type?v.type:a.extensionmap.extType(a.extension(v.file));if(v.file){for(s in m){u==m[s]?(n=v.file,k=q.image):a.isYouTube(v.file)&&(f=v.file)}}}n?(b=n,d&&(n=l("a","display",d),l("div","icon",n),l("div","logo",n),b&&n.setAttribute("href",a.getAbsolutePath(b))),b="#"+d.id+" .cbdownload",d.style.width="",d.style.height="",e(b+"display",{width:a.styleDimension(Math.max(320,p)),height:a.styleDimension(Math.max(180,r)),background:"black center no-repeat "+(k?"url("+k+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),e(b+"display div",{position:"absolute",width:"100%",height:"100%"}),e(b+"logo",{top:c.margin+"px",right:c.margin+"px",background:"top right no-repeat url("+c.prefix+c.file+")"}),e(b+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):f?(c=f,d=l("embed","",d),d.src="http://www.youtube.com/v/"+/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i.exec(c).slice(1).join(""),d.type="application/x-shockwave-flash",d.width=p,d.height=r):b()}}}(cyberplayer),function(d){var a=d.utils,h=d.events,g={};(d.embed.flash=function(c,b,e,l,m){function n(a,b,c){var e=document.createElement("param");e.setAttribute("name",b);e.setAttribute("value",c);a.appendChild(e)}function p(a,b,c){return function(){try{c&&document.getElementById(m.id+"_wrapper").appendChild(b);var e=document.getElementById(m.id).getPluginConfig("display");"function"==typeof a.resize&&a.resize(e.width,e.height);b.style.left=e.x;b.style.top=e.h}catch(d){}}}function r(b){if(!b){return{}}var c={},e=[],d;for(d in b){var f=a.getPluginName(d),g=b[d];e.push(d);for(var h in g){c[f+"."+h]=g[h]}}c.plugins=e.join(",");return c}var k=new d.events.eventdispatcher,f=a.flashVersion();a.extend(this,k);this.embed=function(){e.id=m.id;if(10>f){return k.sendEvent(h.ERROR,{message:"Flash version must be 10.0 or greater"}),!1}var d,q=a.extend({},e);c.id+"_wrapper"==c.parentNode.id?document.getElementById(c.id+"_wrapper"):(d=document.createElement("div"),d.id=c.id+"_wrapper",d.style.position="relative",d.style.width=a.styleDimension(q.width),d.style.height=a.styleDimension(q.height),c.parentNode.replaceChild(d,c),d.appendChild(c));d=l.setupPlugins(m,q,p);0<d.length?a.extend(q,r(d.plugins)):delete q.plugins;"undefined"!=typeof q["dock.position"]&&"false"==q["dock.position"].toString().toLowerCase()&&(q.dock=q["dock.position"],delete q["dock.position"]);d=q.wmode?q.wmode:q.height&&40>=q.height?"transparent":"opaque";for(var t="height width modes events primary base fallback volume".split(" "),v=0;v<t.length;v++){delete q[t[v]]}var t=a.getCookies(),u;for(u in t){"undefined"==typeof q[u]&&(q[u]=t[u])}u=window.location.pathname.split("/");u.splice(u.length-1,1);u=u.join("/");q.base=u+"/";g[c.id]=q;a.isIE()?(q='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%" id="'+c.id+'" name="'+c.id+'" tabindex=0"">',q+='<param name="movie" value="'+b.src+'">',q+='<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always">',q+='<param name="seamlesstabbing" value="true">',q+='<param name="wmode" value="'+d+'">',q+='<param name="bgcolor" value="#000000">',q+="</object>",c.outerHTML=q,q=document.getElementById(c.id)):(q=document.createElement("object"),q.setAttribute("type","application/x-shockwave-flash"),q.setAttribute("data",b.src),q.setAttribute("width","100%"),q.setAttribute("height","100%"),q.setAttribute("bgcolor","#000000"),q.setAttribute("id",c.id),q.setAttribute("name",c.id),q.setAttribute("tabindex",0),n(q,"allowfullscreen","true"),n(q,"allowscriptaccess","always"),n(q,"seamlesstabbing","true"),n(q,"wmode",d),c.parentNode.replaceChild(q,c));m.container=q;m.setPlayer(q,"flash")};this.supportsConfig=function(){if(f){if(e){if("string"==a.typeOf(e.playlist)){return !0}try{var b=e.playlist[0].sources;if("undefined"==typeof b){return !0}for(var c=0;c<b.length;c++){var d;if(d=b[c].file){var g=b[c].file,h=b[c].type;if(a.isYouTube(g)||a.isRtmp(g,h)||"hls"==h){d=!0}else{var l=a.extensionmap[h?h:a.extension(g)];d=l?!!l.flash:!1}}if(d){return !0}}}catch(m){}}else{return !0}}return !1
}}).getVars=function(a){return g[a]}}(cyberplayer),function(d){var a=d.utils,h=a.extensionmap,g=d.events;d.embed.html5=function(c,b,e,l,m){function n(a,b,e){return function(){try{var d=document.querySelector("#"+c.id+" .cbmain");e&&d.appendChild(b);"function"==typeof a.resize&&(a.resize(d.clientWidth,d.clientHeight),setTimeout(function(){a.resize(d.clientWidth,d.clientHeight)},400));b.left=d.style.left;b.top=d.style.top}catch(g){}}}function p(a){r.sendEvent(a.type,{message:"HTML5 player not found"})}var r=this,k=new g.eventdispatcher;a.extend(r,k);r.embed=function(){if(d.html5){l.setupPlugins(m,e,n);c.innerHTML="";var f=d.utils.extend({},e);delete f.volume;f=new d.html5.player(f);m.container=document.getElementById(m.id);m.setPlayer(f,"html5")}else{f=new a.scriptloader(b.src),f.addEventListener(g.ERROR,p),f.addEventListener(g.COMPLETE,r.embed),f.load()}};r.supportsConfig=function(){if(d.vid.canPlayType){try{if("string"==a.typeOf(e.playlist)){return !0}for(var b=e.playlist[0].sources,c=0;c<b.length;c++){var g,l=b[c].file,m=b[c].type;if(null!==navigator.userAgent.match(/BlackBerry/i)||a.isAndroid()&&("m3u"==a.extension(l)||"m3u8"==a.extension(l))||a.isRtmp(l,m)){g=!1}else{var k=h[m?m:a.extension(l)],n;if(!k||k.flash&&!k.html5){n=!1}else{var p=k.html5,r=d.vid;if(p){try{n=r.canPlayType(p)?!0:!1}catch(A){n=!1}}else{n=!0}}g=n}if(g){return !0}}}catch(B){}}return !1}}}(cyberplayer),function(d){var a=d.embed,h=d.utils.extend(function(d){return new a(d)},a);d.embed=h}(cyberplayer),function(d){var a=[],h=d.utils,g=d.events,c=g.state,b=document,e=d.api=function(a){function m(a,b){return function(c){return b(a,c)}}function n(a,b){q[a]||(q[a]=[],r(g.CBPLAYER_PLAYER_STATE,function(b){var c=b.newstate;b=b.oldstate;if(c==a){var d=q[c];if(d){for(var e=0;e<d.length;e++){"function"==typeof d[e]&&d[e].call(this,{oldstate:b,newstate:c})}}}}));q[a].push(b);return f}function p(a,b){try{a.cbAddEventListener(b,'function(dat) { cyberplayer("'+f.id+'").dispatchEvent("'+b+'", dat); }')}catch(c){h.log("Could not add internal listener")}}function r(a,b){s[a]||(s[a]=[],t&&v&&p(t,a));s[a].push(b);return f}function k(){if(v){for(var a=arguments[0],b=[],c=1;c<arguments.length;c++){b.push(arguments[c])}if("undefined"!=typeof t&&"function"==typeof t[a]){switch(b.length){case 4:return t[a](b[0],b[1],b[2],b[3]);case 3:return t[a](b[0],b[1],b[2]);case 2:return t[a](b[0],b[1]);case 1:return t[a](b[0]);default:return t[a]()}}return null}u.push(arguments)}var f=this,s={},q={},t=void 0,v=!1,u=[],x=void 0,y={},z={};f.container=a;f.id=a.id;f.getBuffer=function(){return k("cbGetBuffer")};f.getContainer=function(){return f.container};f.addButton=function(a,b,c,d){try{z[d]=c,k("cbDockAddButton",a,b,"cyberplayer('"+f.id+"').callback('"+d+"')",d)}catch(e){h.log("Could not add dock button"+e.message)}};f.removeButton=function(a){k("cbDockRemoveButton",a)};f.callback=function(a){if(z[a]){z[a]()}};f.forceState=function(a){k("cbForceState",a);return f};f.releaseState=function(){return k("cbReleaseState")};f.getDuration=function(){return k("cbGetDuration")};f.getFullscreen=function(){return k("cbGetFullscreen")};f.getStretching=function(){return k("cbGetStretching")};f.getHeight=function(){return k("cbGetHeight")};f.getLockState=function(){return k("cbGetLockState")};f.getMeta=function(){return f.getItemMeta()};f.getMute=function(){return k("cbGetMute")};f.getPlaylist=function(){var a=k("cbGetPlaylist");"flash"==f.renderingMode&&h.deepReplaceKeyName(a,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);return a};f.getPlaylistItem=function(a){h.exists(a)||(a=f.getCurrentItem());return f.getPlaylist()[a]};f.getPosition=function(){return k("cbGetPosition")};f.getRenderingMode=function(){return f.renderingMode};f.getState=function(){return k("cbGetState")};f.getVolume=function(){return k("cbGetVolume")};f.getWidth=function(){return k("cbGetWidth")};f.setFullscreen=function(a){h.exists(a)?k("cbSetFullscreen",a):k("cbSetFullscreen",!k("cbGetFullscreen"));return f};f.setStretching=function(a){k("cbSetStretching",a);return f};f.setMute=function(a){h.exists(a)?k("cbSetMute",a):k("cbSetMute",!k("cbGetMute"));return f};f.lock=function(){return f};f.unlock=function(){return f};f.load=function(a){k("cbLoad",a);return f};f.playlistItem=function(a){k("cbPlaylistItem",parseInt(a));return f};f.playlistPrev=function(){k("cbPlaylistPrev");return f};f.playlistNext=function(){k("cbPlaylistNext");return f};f.resize=function(a,c){if("flash"!=f.renderingMode){k("cbResize",a,c)}else{var d=b.getElementById(f.id+"_wrapper");d&&(d.style.width=h.styleDimension(a),d.style.height=h.styleDimension(c))}return f};f.play=function(a){"undefined"==typeof a?(a=f.getState(),a==c.PLAYING||a==c.BUFFERING?k("cbPause"):k("cbPlay")):k("cbPlay",a);"flash"==f.renderingMode||(this.logged||a!=c.IDLE)||(logToMC(this.config.file),this.logged=!0);return f};f.pause=function(a){"undefined"==typeof a?(a=f.getState(),a==c.PLAYING||a==c.BUFFERING?k("cbPause"):k("cbPlay")):k("cbPause",a);return f};f.stop=function(){k("cbStop");
return f};f.seek=function(a){k("cbSeek",a);return f};f.setVolume=function(a){k("cbSetVolume",a);return f};f.loadInstream=function(a,b){return x=new e.instream(this,t,a,b)};f.getQualityLevels=function(){return k("cbGetQualityLevels")};f.getCurrentQuality=function(){return k("cbGetCurrentQuality")};f.setCurrentQuality=function(a){k("cbSetCurrentQuality",a)};f.getCaptionsList=function(){return k("cbGetCaptionsList")};f.getCurrentCaptions=function(){return k("cbGetCurrentCaptions")};f.setCurrentCaptions=function(a){k("cbSetCurrentCaptions",a)};f.getControls=function(){return k("cbGetControls")};f.getSafeRegion=function(){return k("cbGetSafeRegion")};f.setControls=function(a){k("cbSetControls",a)};f.destroyPlayer=function(){k("cbPlayerDestroy")};var A={onBufferChange:g.CBPLAYER_MEDIA_BUFFER,onBufferFull:g.CBPLAYER_MEDIA_BUFFER_FULL,onError:g.CBPLAYER_ERROR,onFullscreen:g.CBPLAYER_FULLSCREEN,onMeta:g.CBPLAYER_MEDIA_META,onMute:g.CBPLAYER_MEDIA_MUTE,onPlaylist:g.CBPLAYER_PLAYLIST_LOADED,onPlaylistItem:g.CBPLAYER_PLAYLIST_ITEM,onPlaylistComplete:g.CBPLAYER_PLAYLIST_COMPLETE,onReady:g.API_READY,onResize:g.CBPLAYER_RESIZE,onComplete:g.CBPLAYER_MEDIA_COMPLETE,onSeek:g.CBPLAYER_MEDIA_SEEK,onTime:g.CBPLAYER_MEDIA_TIME,onVolume:g.CBPLAYER_MEDIA_VOLUME,onBeforePlay:g.CBPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:g.CBPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:g.CBPLAYER_DISPLAY_CLICK,onControls:g.CBPLAYER_CONTROLS,onQualityLevels:g.CBPLAYER_MEDIA_LEVELS,onQualityChange:g.CBPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:g.CBPLAYER_CAPTIONS_LIST,onCaptionsChange:g.CBPLAYER_CAPTIONS_CHANGED};h.foreach(A,function(a){f[a]=m(A[a],r)});var B={onBuffer:c.BUFFERING,onPause:c.PAUSED,onPlay:c.PLAYING,onIdle:c.IDLE};h.foreach(B,function(a){f[a]=m(B[a],n)});f.remove=function(){if(!v){throw"Cannot call remove() before player is ready"}u=[];e.destroyPlayer(this.id)};f.setup=function(a){if(d.embed){var c=b.getElementById(f.id);c&&(a.fallbackDiv=c);c=f;u=[];e.destroyPlayer(c.id);c=d(f.id);c.config=a;return new d.embed(c)}return f};f.registerPlugin=function(a,b,c,e){d.plugins.registerPlugin(a,b,c,e)};f.setPlayer=function(a,b){t=a;f.renderingMode=b};f.detachMedia=function(){if("html5"==f.renderingMode){return k("cbDetachMedia")}};f.attachMedia=function(a){if("html5"==f.renderingMode){return k("cbAttachMedia",a)}};f.dispatchEvent=function(a,b){if(s[a]){for(var c=h.translateEventResponse(a,b),d=0;d<s[a].length;d++){if("function"==typeof s[a][d]){try{s[a][d].call(this,c)}catch(e){h.log("There was an error calling back an event handler")}}}}};f.dispatchInstreamEvent=function(a){x&&x.dispatchEvent(a,arguments)};f.callInternal=k;f.playerReady=function(a){v=!0;t||f.setPlayer(b.getElementById(a.id));f.container=b.getElementById(f.id);h.foreach(s,function(a){p(t,a)});r(g.CBPLAYER_PLAYLIST_ITEM,function(){y={}});r(g.CBPLAYER_MEDIA_META,function(a){h.extend(y,a.metadata)});for(f.dispatchEvent(g.API_READY);0<u.length;){k.apply(this,u.shift())}};f.getItemMeta=function(){return y};f.getCurrentItem=function(){return k("cbGetPlaylistIndex")};return f};e.selectPlayer=function(c){var d;h.exists(c)||(c=0);c.nodeType?d=c:"string"==typeof c&&(d=b.getElementById(c));return d?(c=e.playerById(d.id))?c:e.addPlayer(new e(d)):"number"==typeof c?a[c]:null};e.playerById=function(b){for(var c=0;c<a.length;c++){if(a[c].id==b){return a[c]}}return null};e.addPlayer=function(b){for(var c=0;c<a.length;c++){if(a[c]==b){return b}}a.push(b);return b};e.destroyPlayer=function(c){for(var d=-1,e,g=0;g<a.length;g++){a[g].id==c&&(d=g,e=a[g])}0<=d&&(c=e.id,g=b.getElementById(c+("flash"==e.renderingMode?"_wrapper":"")),h.clearCss&&h.clearCss("#"+c),g&&("html5"==e.renderingMode&&e.destroyPlayer(),e=b.createElement("div"),e.id=c,g.parentNode.replaceChild(e,g)),a.splice(d,1));return null};d.playerReady=function(a){var b=d.api.playerById(a.id);b?b.playerReady(a):d.api.selectPlayer(a.id).playerReady(a)}}(cyberplayer),function(d){d.api.instream=function(a,d,g,c){this.play=function(a){d.cbInstreamPlay(a)};this.pause=function(a){d.cbInstreamPause(a)};this.destroy=function(){d.cbInstreamDestroy()};a.callInternal("cbLoadInstream",g,c?c:{})}}(cyberplayer),function(d){var a=d.api,h=a.selectPlayer;a.selectPlayer=function(a){return(a=h(a))?a:{registerPlugin:function(a,b,e){d.plugins.registerPlugin(a,b,e)}}}}(cyberplayer));