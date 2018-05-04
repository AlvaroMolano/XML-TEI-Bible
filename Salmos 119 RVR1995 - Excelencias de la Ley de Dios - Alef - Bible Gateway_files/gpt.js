(function(){var window=this;var f=this,k=function(b){return"string"==typeof b},m=function(){},p=function(b){var a=typeof b;if("object"==a)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return a;var c=Object.prototype.toString.call(b);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==a&&"undefined"==typeof b.call)return"object";return a};var aa=function(b,a){for(var c=b.length,e=k(b)?b.split(""):b,d=0;d<c;d++)d in e&&a.call(void 0,e[d],d,b)},ba=function(b){return Array.prototype.concat.apply([],arguments)};var v;a:{var x=f.navigator;if(x){var y=x.userAgent;if(y){v=y;break a}}v=""};var z=function(b){z[" "](b);return b};z[" "]=m;var B=function(){this.b="";this.v=A};B.prototype.l=!0;B.prototype.a=function(){return this.b};var C=function(b){return b instanceof B&&b.constructor===B&&b.v===A?b.b:"type_error:TrustedResourceUrl"},A={};var E=function(){this.g="";this.u=D};E.prototype.l=!0;E.prototype.a=function(){return this.g};var ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,D={},F=function(b){var a=new E;a.g=b;return a};F("about:blank");var da=function(b){var a=!1,c;return function(){a||(c=b(),a=!0);return c}};var fa=function(b){ea();var a=new B;a.b=b;return a},ea=m;var ha=/^[\w+/_-]+[=]{0,2}$/;var ia=function(){if(!f.crypto)return Math.random();try{var b=new Uint32Array(1);f.crypto.getRandomValues(b);return b[0]/65536/65536}catch(a){return Math.random()}},ja=da(function(){return-1!=v.indexOf("Google Web Preview")||1E-4>Math.random()}),ka=function(){try{a:{var b=f.document.querySelector("script[nonce]");if(b){var a=b.nonce||b.getAttribute("nonce");if(a&&ha.test(a)){var c=a;break a}}c=void 0}return c}catch(e){}};var G=function(){return f.googletag||(f.googletag={})};var H={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,83:0,85:0,90:0,91:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.05,169:0,207:.01,127:0,129:0,131:"",156:0,133:0,134:.01,135:.1,137:0,167:1,138:"",143:.005,168:1E-4,144:.001,187:.01,141:1,157:.95,158:.001,150:".google.de",153:1,179:.01,170:!1,211:!1,183:0,196:.001,197:.001,152:[],172:null,175:"21061661,21061662,21061663,21061664,21061665,21061666,21061667,21061668,22316437,22316438",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,199:0,180:null,219:[],210:{},195:1,198:1,222:0,200:.5,201:0,202:"",203:.01,206:0,216:.05,213:.95,214:.05,215:.01,217:.01,218:.01,220:!1};H[6]=function(b,a){try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return!!a;case "http:":return!1}}catch(e){}return!0}(window);H[49]=(new Date).getTime();H[36]=/^true$/.test("false");H[46]=/^true$/.test("false");H[148]=/^true$/.test("false");H[221]=/^true$/.test(!1);var I;a:{if(/^(-?[0-9.]{1,30})$/.test("{{MOD}}")){var la=Number("{{MOD}}");if(!isNaN(la)){I=la;break a}}I=-1}H[204]=I;H[205]=.01;var J=function(){var b={},a;for(a in H)b[a]=H[a];this.a=b};J.prototype.get=function(b){return this.a[b]};J.prototype.set=function(b,a){this.a[b]=a};J.b=void 0;J.a=function(){return J.b?J.b:J.b=new J};var ma=J.a().a,na=G(),oa=na._vars_,K;for(K in oa)ma[K]=oa[K];na._vars_=ma;var pa=function(){return"193"},qa=G();qa.hasOwnProperty("getVersion")||(qa.getVersion=pa);var ra=function(b,a){var c=void 0===c?{}:c;this.error=b;this.context=a.context;this.line=a.line||-1;this.msg=a.message||"";this.file=a.file||"";this.id=a.id||"jserror";this.meta=c};var L=null;var sa=da(function(){var b=f.navigator&&f.navigator.userAgent||"";b=b.toLowerCase();return-1!=b.indexOf("firefox/")||-1!=b.indexOf("chrome/")||-1!=b.indexOf("opr/")}),M=function(b,a,c,e,d){e=void 0===e?"":e;var h=b.createElement("link");h.rel=c;-1!=c.toLowerCase().indexOf("stylesheet")?a=C(a):a instanceof B?a=C(a):a instanceof E?a=a instanceof E&&a.constructor===E&&a.u===D?a.g:"type_error:SafeUrl":(a instanceof E||(a=a.l?a.a():String(a),ca.test(a)||(a="about:invalid#zClosurez"),a=F(a)),a=a.a());h.href=a;e&&"preload"==c&&(h.as=e);d&&(h.nonce=d);if(b=b.getElementsByTagName("head")[0])try{b.appendChild(h)}catch(n){}};var ta=/^\.google\.(com?\.)?[a-z]{2,3}$/,ua=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,N=function(b){return ta.test(b)&&!ua.test(b)},va=function(b){return b.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},O=f,wa=function(b,a){b="https://"+("adservice"+a+"/adsid/integrator."+b);a=["domain="+encodeURIComponent(f.location.hostname)];P[3]>=+new Date&&a.push("adsid="+encodeURIComponent(P[1]));return b+"?"+a.join("&")},P,Q,R=function(){O=f;P=O.googleToken=O.googleToken||{};var b=+new Date;P[1]&&P[3]>b&&0<P[2]||(P[1]="",P[2]=-1,P[3]=-1,P[4]="",P[6]="");Q=O.googleIMState=O.googleIMState||{};N(Q[1])||(Q[1]=".google.com");"array"==p(Q[5])||(Q[5]=[]);"boolean"==typeof Q[6]||(Q[6]=!1);"array"==p(Q[7])||(Q[7]=[]);"number"==typeof Q[8]||(Q[8]=0)},xa=function(b){try{b()}catch(a){f.setTimeout(function(){throw a;},0)}},za=function(b){"complete"==f.document.readyState||"loaded"==f.document.readyState||f.document.currentScript&&f.document.currentScript.async?ya(3):b()},Aa=0,S={c:function(){return 0<Q[8]},h:function(){Q[8]++},m:function(){0<Q[8]&&Q[8]--},o:function(){Q[8]=0},f:function(){},s:function(){return!1},j:function(){return Q[5]},i:xa},T={c:function(){return Q[6]},h:function(){Q[6]=!0},m:function(){Q[6]=!1},o:function(){Q[6]=!1},f:function(){},s:function(){return".google.com"!=Q[1]&&2<++Aa},j:function(){return Q[7]},i:function(b){za(function(){xa(b)})}},ya=function(b){if(1E-5>Math.random()){f.google_image_requests||(f.google_image_requests=[]);var a=f.document.createElement("img");a.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b;f.google_image_requests.push(a)}};S.f=function(){if(!S.c()){var b=f.document,a=function(a){var c=wa("js",a),d=ka();M(b,c,"preload","script",d);a=b.createElement("script");a.type="text/javascript";d&&(a.nonce=d);a.onerror=function(){return f.processGoogleToken({},2)};c=fa(c);a.src=C(c);try{(b.head||b.body||b.documentElement).appendChild(a),S.h()}catch(q){}},c=Q[1];a(c);".google.com"!=c&&a(".google.com");a={};var e=(a.newToken="FBT",a);f.setTimeout(function(){return f.processGoogleToken(e,1)},1E3)}};T.f=function(){if(!T.c()){var b=f.document,a=wa("sync.js",Q[1]);M(b,a,"preload","script");a=va(a);var c=z("script"),e="",d=ka();d&&(e='nonce="'+va(d)+'"');var h="<"+c+' src="'+a+'" '+e+"></"+c+">"+("<"+c+" "+e+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");za(function(){b.write(h);T.h()})}};var Ba=function(b){R();P[3]>=+new Date&&P[2]>=+new Date||b.f()},Da=function(){f.processGoogleToken=f.processGoogleToken||function(b,a){return Ca(S,b,a)};Ba(S)},Ea=function(){f.processGoogleTokenSync=f.processGoogleTokenSync||function(b,a){return Ca(T,b,a)};Ba(T)},Ca=function(b,a,c){a=void 0===a?{}:a;c=void 0===c?0:c;var e=a.newToken||"",d="NT"==e,h=parseInt(a.freshLifetimeSecs||"",10),n=parseInt(a.validLifetimeSecs||"",10),q=a["1p_jar"]||"";a=a.pucrd||"";R();1==c?b.o():b.m();if(!e&&b.s())N(".google.com")&&(Q[1]=".google.com"),b.f();else{var l=O.googleToken=O.googleToken||{},t=0==c&&e&&k(e)&&!d&&"number"==typeof h&&0<h&&"number"==typeof n&&0<n&&k(q);d=d&&!b.c()&&(!(P[3]>=+new Date)||"NT"==P[1]);var g=!(P[3]>=+new Date)&&0!=c;if(t||d||g)d=+new Date,h=d+1E3*h,n=d+1E3*n,ya(c),l[5]=c,l[1]=e,l[2]=h,l[3]=n,l[4]=q,l[6]=a,R();if(t||!b.c()){c=b.j();for(e=0;e<c.length;e++)b.i(c[e]);c.length=0}}};var Fa=function(){this.a=null},Ga=function(b,a){b.a=a};Fa.prototype.b=function(b,a,c,e,d){if(Math.random()>(void 0===c?.01:c))return!1;a.error&&a.meta&&a.id||(a=new ra(a,{context:b,id:void 0===d?"gpt_exception":d}));if(e||this.a)a.meta={},this.a&&this.a(a.meta),e&&e(a.meta);f.google_js_errors=f.google_js_errors||[];f.google_js_errors.push(a);f.error_rep_loaded||(a=f.document,b=a.createElement("script"),c=fa(f.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js"),b.src=C(c),(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a),f.error_rep_loaded=!0);return!1};var Ha=function(b,a){var c=void 0===c?b.b:c;try{a()}catch(e){if(!c.call(b,420,e,.01,void 0,"gpt_exception"))throw e;}};var Ia=function(b){if(!b.google_ltobserver){var a=new b.PerformanceObserver(function(a){var c=b.google_lt_queue=b.google_lt_queue||[];aa(a.getEntries(),function(b){return c.push(b)})});a.observe({entryTypes:["longtask"]});b.google_ltobserver=a}};var Ja=["21061818","21061819","21061820"],Ka=["21060622"],La=["21061212","21061213","21061214","21061277"];var Ma=[[null,null,2,[null,null,"1-0-18"]]];var Na={3:[[10,[[21060132],[21060133,[[2,null,null,[1]]]]]],[null,[[21061811],[21061812,[[3,null,null,[1]]]]]],[10,[[21060157,[[null,null,2,[null,null,"1-0-19"]]]],[21060155,[[null,null,null,[null,null,null,["v","1-0-19"]],null,1]]]]],[10,[[21061803],[21061804]]]]};z("partner.googleadservices.com");var U=z("www.googletagservices.com"),V=!1,W=!1,X="",Y="",Oa=J.a().get(46)&&!J.a().get(6);X=Oa?"http:":"https:";Y=J.a().get(Oa?2:3);var Pa=function(b){if(b=b.scripts)for(var a=0;a<b.length;a++){var c=b[a];if(-1<c.src.indexOf(U+"/tag/js/gpt"))return c}return null},Z=function(b,a){if(null===L){L="";try{var c="";try{c=f.top.location.hash}catch(d){c=f.location.hash}if(c){var e=c.match(/\bdeid=([\d,]+)/);L=e?e[1]:""}}catch(d){}}if(c=(c=L)&&c.match(new RegExp("\\b("+b.join("|")+")\\b")))b=c[0];else if(a)a:{a=b.length*a;if(!ja()&&(c=Math.random(),c<a)){c=ia();b=b[Math.floor(c*b.length)];break a}b=null}else b=null;return b};(function(b){var a=new Fa;Ga(a,function(b){b.methodId=420});Ha(a,function(){var a=b,e=G(),d=e.fifWin||window;a=a||d.document;var h=[],n=G();n.hasOwnProperty("cmd")||(n.cmd=h);if(e.evalScripts)e.evalScripts();else{h=J.a();(n=Z(La,h.get(178)))&&h.get(152).push(n);switch(n){case "21061213":W=!0;break;case "21061214":V=!0;break;case "21061277":V=W=!0}h=J.a().get(138)||Z(Ka,0)||Z(Ja,J.a().get(137))||Z(["21061149"],J.a().get(167));n=a;var q=Z(["21061590","21061591"],.001),l=J.a();l.get(219).length||l.set(219,Ma);a:{var t=l.get(210);for(g in t)if(Object.prototype.hasOwnProperty.call(t,g)){var g=!1;break a}g=!0}g&&l.set(210,Na);q&&("21061591"==q?(l.set(173,U),l.set(174,U)):l.set(163,q),l.get(152).push(q));-1!=v.indexOf("Mobile")||J.a().set(194,0);if(g=l.get(150))R(),N(g)&&(Q[1]=g);h&&l.set(138,h);l.set(172,n.currentScript||Pa(n));d.PerformanceObserver&&d.PerformanceLongTaskTiming&&Ia(d);g=d;g=void 0===g?f:g;if(g=(g=g.performance)&&g.now?g.now():null)g={label:"1",type:9,value:g},d=d.google_js_reporting_queue=d.google_js_reporting_queue||[],1024>d.length&&d.push(g);d=J.a();if(g=d.get(76))var w=g;else{l=["192","193"];g=l[0]||"193";n="";if(d.get(131))w="193";else if(1<l.length){q=["21061866","21061867"];var u=[""];if(1>=u.length||q.length!=u.length)u=[];if(t=Z(ba(q,u),.01)){d.set(53,t);b:if(k(u))var r=k(t)&&1==t.length?u.indexOf(t,0):-1;else{for(r=0;r<u.length;r++)if(r in u&&u[r]===t)break b;r=-1}r=0<=r;d.set(170,r);r&&(q=u);u=q[0];if(t!=u)for(r=1;r<q.length;++r)if(t==q[r]){w=l[r];break}if(t==u||parseInt(w,10)<parseInt(g,10))l=l[q.length-1],n="?v="+l,d.set(163,l)}}g=X+"//"+Y+"/gpt/pubads_impl_"+(w||g)+".js"+n;J.a().set(76,g);w=g}d=a.currentScript;if(!("complete"==a.readyState||"loaded"==a.readyState||d&&d.async)){d="gpt-impl-"+Math.random();try{g='<script id="'+d+'" src="'+w+'">\x3c/script>',V&&sa()&&(g+='<link rel="preconnect" href="'+X+"//"+Y+'">'),a.write(g)}catch(Qa){}a.getElementById(d)&&(e._loadStarted_=!0,J.a().set(220,!1),"21061818"!=h&&"21060622"!=h&&"21061149"!=h||Ea())}e._loadStarted_||("21061818"!=h&&"21060622"!=h&&"21061149"!=h||Da(),W&&M(a,w,"preload","script"),h=a.createElement("script"),h.src=w,h.async=!0,(a.head||a.body||a.documentElement).appendChild(h),V&&sa()&&M(a,X+"//"+Y,"preconnect"),J.a().set(220,!0),e._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
