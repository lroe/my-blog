(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var rh={exports:{}},Ol={};var e_;function Jy(){if(e_)return Ol;e_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:d,ref:o!==void 0?o:null,props:c}}return Ol.Fragment=t,Ol.jsx=i,Ol.jsxs=i,Ol}var t_;function $y(){return t_||(t_=1,rh.exports=Jy()),rh.exports}var x=$y(),lh={exports:{}},ot={};var n_;function eS(){if(n_)return ot;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function v(U,X,G){this.props=U,this.context=X,this.refs=S,this.updater=G||b}v.prototype.isReactComponent={},v.prototype.setState=function(U,X){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,X,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function D(){}D.prototype=v.prototype;function R(U,X,G){this.props=U,this.context=X,this.refs=S,this.updater=G||b}var z=R.prototype=new D;z.constructor=R,T(z,v.prototype),z.isPureReactComponent=!0;var k=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function w(U,X,G){var Z=G.ref;return{$$typeof:r,type:U,key:X,ref:Z!==void 0?Z:null,props:G}}function O(U,X){return w(U.type,X,U.props)}function ae(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function re(U){var X={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(G){return X[G]})}var xe=/\/+/g;function W(U,X){return typeof U=="object"&&U!==null&&U.key!=null?re(""+U.key):X.toString(36)}function $(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(X){U.status==="pending"&&(U.status="fulfilled",U.value=X)},function(X){U.status==="pending"&&(U.status="rejected",U.reason=X)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,X,G,Z,ge){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var Ce=!1;if(U===null)Ce=!0;else switch(Ee){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(U.$$typeof){case r:case t:Ce=!0;break;case g:return Ce=U._init,I(Ce(U._payload),X,G,Z,ge)}}if(Ce)return ge=ge(U),Ce=Z===""?"."+W(U,0):Z,k(ge)?(G="",Ce!=null&&(G=Ce.replace(xe,"$&/")+"/"),I(ge,X,G,"",function(Qe){return Qe})):ge!=null&&(ae(ge)&&(ge=O(ge,G+(ge.key==null||U&&U.key===ge.key?"":(""+ge.key).replace(xe,"$&/")+"/")+Ce)),X.push(ge)),1;Ce=0;var Xe=Z===""?".":Z+":";if(k(U))for(var Fe=0;Fe<U.length;Fe++)Z=U[Fe],Ee=Xe+W(Z,Fe),Ce+=I(Z,X,G,Ee,ge);else if(Fe=E(U),typeof Fe=="function")for(U=Fe.call(U),Fe=0;!(Z=U.next()).done;)Z=Z.value,Ee=Xe+W(Z,Fe++),Ce+=I(Z,X,G,Ee,ge);else if(Ee==="object"){if(typeof U.then=="function")return I($(U),X,G,Z,ge);throw X=String(U),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function q(U,X,G){if(U==null)return U;var Z=[],ge=0;return I(U,Z,"","",function(Ee){return X.call(G,Ee,ge++)}),Z}function ee(U){if(U._status===-1){var X=U._result;X=X(),X.then(function(G){(U._status===0||U._status===-1)&&(U._status=1,U._result=G)},function(G){(U._status===0||U._status===-1)&&(U._status=2,U._result=G)}),U._status===-1&&(U._status=0,U._result=X)}if(U._status===1)return U._result.default;throw U._result}var he=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},de={map:q,forEach:function(U,X,G){q(U,function(){X.apply(this,arguments)},G)},count:function(U){var X=0;return q(U,function(){X++}),X},toArray:function(U){return q(U,function(X){return X})||[]},only:function(U){if(!ae(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ot.Activity=_,ot.Children=de,ot.Component=v,ot.Fragment=i,ot.Profiler=o,ot.PureComponent=R,ot.StrictMode=s,ot.Suspense=p,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ot.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},ot.cache=function(U){return function(){return U.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(U,X,G){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Z=T({},U.props),ge=U.key;if(X!=null)for(Ee in X.key!==void 0&&(ge=""+X.key),X)!ce.call(X,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&X.ref===void 0||(Z[Ee]=X[Ee]);var Ee=arguments.length-2;if(Ee===1)Z.children=G;else if(1<Ee){for(var Ce=Array(Ee),Xe=0;Xe<Ee;Xe++)Ce[Xe]=arguments[Xe+2];Z.children=Ce}return w(U.type,ge,Z)},ot.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ot.createElement=function(U,X,G){var Z,ge={},Ee=null;if(X!=null)for(Z in X.key!==void 0&&(Ee=""+X.key),X)ce.call(X,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ge[Z]=X[Z]);var Ce=arguments.length-2;if(Ce===1)ge.children=G;else if(1<Ce){for(var Xe=Array(Ce),Fe=0;Fe<Ce;Fe++)Xe[Fe]=arguments[Fe+2];ge.children=Xe}if(U&&U.defaultProps)for(Z in Ce=U.defaultProps,Ce)ge[Z]===void 0&&(ge[Z]=Ce[Z]);return w(U,Ee,ge)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(U){return{$$typeof:h,render:U}},ot.isValidElement=ae,ot.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ee}},ot.memo=function(U,X){return{$$typeof:m,type:U,compare:X===void 0?null:X}},ot.startTransition=function(U){var X=P.T,G={};P.T=G;try{var Z=U(),ge=P.S;ge!==null&&ge(G,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(F,he)}catch(Ee){he(Ee)}finally{X!==null&&G.types!==null&&(X.types=G.types),P.T=X}},ot.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ot.use=function(U){return P.H.use(U)},ot.useActionState=function(U,X,G){return P.H.useActionState(U,X,G)},ot.useCallback=function(U,X){return P.H.useCallback(U,X)},ot.useContext=function(U){return P.H.useContext(U)},ot.useDebugValue=function(){},ot.useDeferredValue=function(U,X){return P.H.useDeferredValue(U,X)},ot.useEffect=function(U,X){return P.H.useEffect(U,X)},ot.useEffectEvent=function(U){return P.H.useEffectEvent(U)},ot.useId=function(){return P.H.useId()},ot.useImperativeHandle=function(U,X,G){return P.H.useImperativeHandle(U,X,G)},ot.useInsertionEffect=function(U,X){return P.H.useInsertionEffect(U,X)},ot.useLayoutEffect=function(U,X){return P.H.useLayoutEffect(U,X)},ot.useMemo=function(U,X){return P.H.useMemo(U,X)},ot.useOptimistic=function(U,X){return P.H.useOptimistic(U,X)},ot.useReducer=function(U,X,G){return P.H.useReducer(U,X,G)},ot.useRef=function(U){return P.H.useRef(U)},ot.useState=function(U){return P.H.useState(U)},ot.useSyncExternalStore=function(U,X,G){return P.H.useSyncExternalStore(U,X,G)},ot.useTransition=function(){return P.H.useTransition()},ot.version="19.2.3",ot}var i_;function sd(){return i_||(i_=1,lh.exports=eS()),lh.exports}var _e=sd(),oh={exports:{}},Pl={},ch={exports:{}},uh={};var a_;function tS(){return a_||(a_=1,(function(r){function t(I,q){var ee=I.length;I.push(q);e:for(;0<ee;){var he=ee-1>>>1,de=I[he];if(0<o(de,q))I[he]=q,I[ee]=de,ee=he;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var q=I[0],ee=I.pop();if(ee!==q){I[0]=ee;e:for(var he=0,de=I.length,U=de>>>1;he<U;){var X=2*(he+1)-1,G=I[X],Z=X+1,ge=I[Z];if(0>o(G,ee))Z<de&&0>o(ge,G)?(I[he]=ge,I[Z]=ee,he=Z):(I[he]=G,I[X]=ee,he=X);else if(Z<de&&0>o(ge,ee))I[he]=ge,I[Z]=ee,he=Z;else break e}}return q}function o(I,q){var ee=I.sortIndex-q.sortIndex;return ee!==0?ee:I.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,_=null,y=3,E=!1,b=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function z(I){for(var q=i(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=I)s(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(m)}}function k(I){if(T=!1,z(I),!b)if(i(p)!==null)b=!0,F||(F=!0,re());else{var q=i(m);q!==null&&$(k,q.startTime-I)}}var F=!1,P=-1,ce=5,w=-1;function O(){return S?!0:!(r.unstable_now()-w<ce)}function ae(){if(S=!1,F){var I=r.unstable_now();w=I;var q=!0;try{e:{b=!1,T&&(T=!1,D(P),P=-1),E=!0;var ee=y;try{t:{for(z(I),_=i(p);_!==null&&!(_.expirationTime>I&&O());){var he=_.callback;if(typeof he=="function"){_.callback=null,y=_.priorityLevel;var de=he(_.expirationTime<=I);if(I=r.unstable_now(),typeof de=="function"){_.callback=de,z(I),q=!0;break t}_===i(p)&&s(p),z(I)}else s(p);_=i(p)}if(_!==null)q=!0;else{var U=i(m);U!==null&&$(k,U.startTime-I),q=!1}}break e}finally{_=null,y=ee,E=!1}q=void 0}}finally{q?re():F=!1}}}var re;if(typeof R=="function")re=function(){R(ae)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,W=xe.port2;xe.port1.onmessage=ae,re=function(){W.postMessage(null)}}else re=function(){v(ae,0)};function $(I,q){P=v(function(){I(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(I){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var ee=y;y=q;try{return I()}finally{y=ee}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=y;y=I;try{return q()}finally{y=ee}},r.unstable_scheduleCallback=function(I,q,ee){var he=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?he+ee:he):ee=he,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,I={id:g++,callback:q,priorityLevel:I,startTime:ee,expirationTime:de,sortIndex:-1},ee>he?(I.sortIndex=ee,t(m,I),i(p)===null&&I===i(m)&&(T?(D(P),P=-1):T=!0,$(k,ee-he))):(I.sortIndex=de,t(p,I),b||E||(b=!0,F||(F=!0,re()))),I},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(I){var q=y;return function(){var ee=y;y=q;try{return I.apply(this,arguments)}finally{y=ee}}}})(uh)),uh}var s_;function nS(){return s_||(s_=1,ch.exports=tS()),ch.exports}var fh={exports:{}},Cn={};var r_;function iS(){if(r_)return Cn;r_=1;var r=sd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Cn.flushSync=function(p){var m=d.T,g=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=g,s.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:E}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Cn.requestFormReset=function(p){s.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.2.3",Cn}var l_;function aS(){if(l_)return fh.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fh.exports=iS(),fh.exports}var o_;function sS(){if(o_)return Pl;o_=1;var r=nS(),t=sd(),i=aS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===l)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=u,l=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,l=f;break}if(A===l){M=!0,l=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,l=u;break}if(A===l){M=!0,l=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),R=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case R:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:W(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return W(e(n))}catch{}}return null}var $=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},he=[],de=-1;function U(e){return{current:e}}function X(e){0>de||(e.current=he[de],he[de]=null,de--)}function G(e,n){de++,he[de]=e.current,e.current=n}var Z=U(null),ge=U(null),Ee=U(null),Ce=U(null);function Xe(e,n){switch(G(Ee,n),G(ge,e),G(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(Z),G(Z,e)}function Fe(){X(Z),X(ge),X(Ee)}function Qe(e){e.memoizedState!==null&&G(Ce,e);var n=Z.current,a=bg(n,e.type);n!==a&&(G(ge,e),G(Z,a))}function ht(e){ge.current===e&&(X(Z),X(ge)),Ce.current===e&&(X(Ce),Ll._currentValue=ee)}var se,en;function ke(e){if(se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);se=n&&n[1]||"",en=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+en}var at=!1;function Ge(e,n){if(!e||at)return"";at=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(fe){var ne=fe}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(fe){ne=fe}e.call(ve.prototype)}}else{try{throw Error()}catch(fe){ne=fe}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(fe){if(fe&&ne&&typeof fe.stack=="string")return[fe.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var H=M.split(`
`),te=A.split(`
`);for(u=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(l===H.length||u===te.length)for(l=H.length-1,u=te.length-1;1<=l&&0<=u&&H[l]!==te[u];)u--;for(;1<=l&&0<=u;l--,u--)if(H[l]!==te[u]){if(l!==1||u!==1)do if(l--,u--,0>u||H[l]!==te[u]){var pe=`
`+H[l].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=l&&0<=u);break}}}finally{at=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ke(a):""}function It(e,n){switch(e.tag){case 26:case 27:case 5:return ke(e.type);case 16:return ke("Lazy");case 13:return e.child!==n&&n!==null?ke("Suspense Fallback"):ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return ke("Activity");default:return""}}function rt(e){try{var n="",a=null;do n+=It(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var N=Object.prototype.hasOwnProperty,C=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,Te=r.unstable_shouldYield,be=r.unstable_requestPaint,ye=r.unstable_now,We=r.unstable_getCurrentPriorityLevel,Ne=r.unstable_ImmediatePriority,Be=r.unstable_UserBlockingPriority,Ke=r.unstable_NormalPriority,ct=r.unstable_LowPriority,Me=r.unstable_IdlePriority,Rt=r.log,dt=r.unstable_setDisableYieldValue,nt=null,ze=null;function Ue(e){if(typeof Rt=="function"&&dt(e),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(nt,e)}catch{}}var B=Math.clz32?Math.clz32:Ie,Re=Math.log,qe=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(Re(e)/qe|0)|0}var Se=256,V=262144,Ae=4194304;function we(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~f,l!==0?u=we(l):(M&=A,M!==0?u=we(M):a||(a=A&~e,a!==0&&(u=we(a))))):(A=l&~f,A!==0?u=we(A):M!==0?u=we(M):a||(a=l&~e,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ye(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function vt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),e}function Vt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,l,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,te=e.hiddenUpdates;for(a=M&~a;0<a;){var pe=31-B(a),ve=1<<pe;A[pe]=0,H[pe]=-1;var ne=te[pe];if(ne!==null)for(te[pe]=null,pe=0;pe<ne.length;pe++){var fe=ne[pe];fe!==null&&(fe.lane&=-536870913)}a&=~ve}l!==0&&Yt(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function Yt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-B(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Wn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-B(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function Hr(e,n){var a=n&-n;return a=(a&42)!==0?1:Gr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ha(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vr(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:qg(e.type))}function es(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var gi=Math.random().toString(36).slice(2),tn="__reactFiber$"+gi,An="__reactProps$"+gi,da="__reactContainer$"+gi,jr="__reactEvents$"+gi,L="__reactListeners$"+gi,K="__reactHandles$"+gi,oe="__reactResources$"+gi,ue="__reactMarker$"+gi;function le(e){delete e[tn],delete e[An],delete e[jr],delete e[L],delete e[K]}function Pe(e){var n=e[tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[da]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dg(e);e!==null;){if(a=e[tn])return a;e=Dg(e)}return n}e=a,a=e.parentNode}return null}function Ve(e){if(e=e[tn]||e[da]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $e(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function tt(e){var n=e[oe];return n||(n=e[oe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[ue]=!0}var st=new Set,lt={};function Dt(e,n){nn(e,n),nn(e+"Capture",n)}function nn(e,n){for(lt[e]=n,e=0;e<n.length;e++)st.add(n[e])}var an=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ii={},jt={};function mt(e){return N.call(jt,e)?!0:N.call(ii,e)?!1:an.test(e)?jt[e]=!0:(ii[e]=!0,!1)}function pa(e,n,a){if(mt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ht(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function xn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Dn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ma(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kr(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function sn(e){if(!e._valueTracker){var n=ma(e)?"checked":"value";e._valueTracker=kr(e,n,""+e[n])}}function Ci(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=ma(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function Rn(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xr(e,n,a,l,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Dn(n)):e.value!==""+Dn(n)&&(e.value=""+Dn(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?eu(e,M,Dn(n)):a!=null?eu(e,M,Dn(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Dn(A):e.removeAttribute("name")}function Wr(e,n,a,l,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){sn(e);return}a=a!=null?""+Dn(a):"",n=n!=null?""+Dn(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),sn(e)}function eu(e,n,a){n==="number"&&ga(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ds(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Dn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function vd(e,n,a){if(n!=null&&(n=""+Dn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Dn(a):""}function xd(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(s(92));if($(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Dn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),sn(e)}function Us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var q0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||q0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&yd(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&yd(e,f,n[f])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return Z0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zi(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Os=null;function Md(e){var n=Ve(e);if(n&&(e=n.stateNode)){var a=e[An]||null;e:switch(e=n.stateNode,n.type){case"input":if(Xr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[An]||null;if(!u)throw Error(s(90));Xr(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&Ci(l)}break e;case"textarea":vd(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ds(e,!!a.multiple,n,!1)}}}var au=!1;function Ed(e,n,a){if(au)return e(n,a);au=!0;try{var l=e(n);return l}finally{if(au=!1,(Ns!==null||Os!==null)&&(Go(),Ns&&(n=Ns,e=Os,Os=Ns=null,Md(n),e)))for(n=0;n<e.length;n++)Md(e[n])}}function qr(e,n){var a=e.stateNode;if(a===null)return null;var l=a[An]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Bi)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){su=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{su=!1}var _a=null,ru=null,eo=null;function bd(){if(eo)return eo;var e,n=ru,a=n.length,l,u="value"in _a?_a.value:_a.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(l=1;l<=M&&n[a-l]===u[f-l];l++);return eo=u.slice(e,1<l?1-l:void 0)}function to(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function Td(){return!1}function Bn(e){function n(a,l,u,f,M){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?no:Td,this.isPropagationStopped=Td,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Bn(ts),Zr=_({},ts,{view:0,detail:0}),K0=Bn(Zr),lu,ou,Kr,ao=_({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(lu=e.screenX-Kr.screenX,ou=e.screenY-Kr.screenY):ou=lu=0,Kr=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),Ad=Bn(ao),Q0=_({},ao,{dataTransfer:0}),J0=Bn(Q0),$0=_({},Zr,{relatedTarget:0}),cu=Bn($0),ex=_({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=Bn(ex),nx=_({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=Bn(nx),ax=_({},ts,{data:0}),Rd=Bn(ax),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lx[e])?!!n[e]:!1}function uu(){return ox}var cx=_({},Zr,{key:function(e){if(e.key){var n=sx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ux=Bn(cx),fx=_({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Bn(fx),hx=_({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),dx=Bn(hx),px=_({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),mx=Bn(px),gx=_({},ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=Bn(gx),vx=_({},ts,{newState:0,oldState:0}),xx=Bn(vx),yx=[9,13,27,32],fu=Bi&&"CompositionEvent"in window,Qr=null;Bi&&"documentMode"in document&&(Qr=document.documentMode);var Sx=Bi&&"TextEvent"in window&&!Qr,wd=Bi&&(!fu||Qr&&8<Qr&&11>=Qr),Ld=" ",Dd=!1;function Ud(e,n){switch(e){case"keyup":return yx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ps=!1;function Mx(e,n){switch(e){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Dd=!0,Ld);case"textInput":return e=n.data,e===Ld&&Dd?null:e;default:return null}}function Ex(e,n){if(Ps)return e==="compositionend"||!fu&&Ud(e,n)?(e=bd(),eo=ru=_a=null,Ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wd&&n.locale!=="ko"?null:n.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bx[e.type]:n==="textarea"}function Pd(e,n,a,l){Ns?Os?Os.push(l):Os=[l]:Ns=l,n=Yo(n,"onChange"),0<n.length&&(a=new io("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Jr=null,$r=null;function Tx(e){_g(e,0)}function so(e){var n=$e(e);if(Ci(n))return e}function zd(e,n){if(e==="change")return n}var Bd=!1;if(Bi){var hu;if(Bi){var du="oninput"in document;if(!du){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),du=typeof Id.oninput=="function"}hu=du}else hu=!1;Bd=hu&&(!document.documentMode||9<document.documentMode)}function Fd(){Jr&&(Jr.detachEvent("onpropertychange",Hd),$r=Jr=null)}function Hd(e){if(e.propertyName==="value"&&so($r)){var n=[];Pd(n,$r,e,iu(e)),Ed(Tx,n)}}function Ax(e,n,a){e==="focusin"?(Fd(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",Hd)):e==="focusout"&&Fd()}function Rx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so($r)}function Cx(e,n){if(e==="click")return so(n)}function wx(e,n){if(e==="input"||e==="change")return so(n)}function Lx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Lx;function el(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!N.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,n){var a=Gd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gd(a)}}function jd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ga(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ga(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Dx=Bi&&"documentMode"in document&&11>=document.documentMode,zs=null,mu=null,tl=null,gu=!1;function Xd(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||zs==null||zs!==ga(l)||(l=zs,"selectionStart"in l&&pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),tl&&el(tl,l)||(tl=l,l=Yo(mu,"onSelect"),0<l.length&&(n=new io("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=zs)))}function ns(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Bs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},_u={},Wd={};Bi&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function is(e){if(_u[e])return _u[e];if(!Bs[e])return e;var n=Bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return _u[e]=n[a];return e}var qd=is("animationend"),Yd=is("animationiteration"),Zd=is("animationstart"),Ux=is("transitionrun"),Nx=is("transitionstart"),Ox=is("transitioncancel"),Kd=is("transitionend"),Qd=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function _i(e,n){Qd.set(e,n),Dt(n,[e])}var ro=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Is=0,xu=0;function lo(){for(var e=Is,n=xu=Is=0;n<e;){var a=ai[n];ai[n++]=null;var l=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,l!==null&&u!==null){var M=l.pending;M===null?u.next=u:(u.next=M.next,M.next=u),l.pending=u}f!==0&&Jd(a,u,f)}}function oo(e,n,a,l){ai[Is++]=e,ai[Is++]=n,ai[Is++]=a,ai[Is++]=l,xu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function yu(e,n,a,l){return oo(e,n,a,l),co(e)}function as(e,n){return oo(e,null,null,n),co(e)}function Jd(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-B(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function co(e){if(50<El)throw El=0,Lf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function Px(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,l){return new Px(e,n,a,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $d(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function uo(e,n,a,l,u,f){var M=0;if(l=e,typeof e=="function")Su(e)&&(M=1);else if(typeof e=="string")M=Hy(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Yn(31,a,n,u),e.elementType=w,e.lanes=f,e;case T:return ss(a.children,u,f,n);case S:M=8,u|=24;break;case v:return e=Yn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case k:return e=Yn(13,a,n,u),e.elementType=k,e.lanes=f,e;case F:return e=Yn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:M=10;break e;case D:M=9;break e;case z:M=11;break e;case P:M=14;break e;case ce:M=16,l=null;break e}M=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=Yn(M,a,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function ss(e,n,a,l){return e=Yn(7,e,l,n),e.lanes=a,e}function Mu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function ep(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},tp.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Hs=[],Gs=0,fo=null,nl=0,ri=[],li=0,va=null,wi=1,Li="";function Fi(e,n){Hs[Gs++]=nl,Hs[Gs++]=fo,fo=e,nl=n}function np(e,n,a){ri[li++]=wi,ri[li++]=Li,ri[li++]=va,va=e;var l=wi;e=Li;var u=32-B(l)-1;l&=~(1<<u),a+=1;var f=32-B(n)+u;if(30<f){var M=u-u%5;f=(l&(1<<M)-1).toString(32),l>>=M,u-=M,wi=1<<32-B(n)+u|a<<u|l,Li=f+e}else wi=1<<f|a<<u|l,Li=e}function bu(e){e.return!==null&&(Fi(e,1),np(e,1,0))}function Tu(e){for(;e===fo;)fo=Hs[--Gs],Hs[Gs]=null,nl=Hs[--Gs],Hs[Gs]=null;for(;e===va;)va=ri[--li],ri[li]=null,Li=ri[--li],ri[li]=null,wi=ri[--li],ri[li]=null}function ip(e,n){ri[li++]=wi,ri[li++]=Li,ri[li++]=va,wi=n.id,Li=n.overflow,va=e}var yn=null,kt=null,Tt=!1,xa=null,oi=!1,Au=Error(s(519));function ya(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(si(n,e)),Au}function ap(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[tn]=e,n[An]=l,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Tl.length;a++)St(Tl[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Wr(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),xd(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Sg(n.textContent,a)?(l.popover!=null&&(St("beforetoggle",n),St("toggle",n)),l.onScroll!=null&&St("scroll",n),l.onScrollEnd!=null&&St("scrollend",n),l.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ya(e,!0)}function sp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:yn=yn.return}}function Vs(e){if(e!==yn)return!1;if(!Tt)return sp(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&kt&&ya(e),sp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));kt=Lg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));kt=Lg(e)}else n===27?(n=kt,Oa(e.type)?(e=Kf,Kf=null,kt=e):kt=n):kt=yn?ui(e.stateNode.nextSibling):null;return!0}function rs(){kt=yn=null,Tt=!1}function Ru(){var e=xa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),xa=null),e}function il(e){xa===null?xa=[e]:xa.push(e)}var Cu=U(null),ls=null,Hi=null;function Sa(e,n,a){G(Cu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=Cu.current,X(Cu)}function wu(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Lu(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),wu(f.return,a,e),l||(M=null);break e}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),wu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function js(e,n,a,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Ce.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ll):e=[Ll])}u=u.return}e!==null&&Lu(n,e,a,l),n.flags|=262144}function ho(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){ls=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return rp(ls,e)}function po(e,n){return ls===null&&os(e),rp(e,n)}function rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(s(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var zx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Bx=r.unstable_scheduleCallback,Ix=r.unstable_NormalPriority,rn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new zx,data:new Map,refCount:0}}function al(e){e.refCount--,e.refCount===0&&Bx(Ix,function(){e.controller.abort()})}var sl=null,Uu=0,ks=0,Xs=null;function Fx(e,n){if(sl===null){var a=sl=[];Uu=0,ks=zf(),Xs={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Uu++,n.then(lp,lp),n}function lp(){if(--Uu===0&&sl!==null){Xs!==null&&(Xs.status="fulfilled");var e=sl;sl=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Hx(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var op=I.S;I.S=function(e,n){Xm=ye(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fx(e,n),op!==null&&op(e,n)};var cs=U(null);function Nu(){var e=cs.current;return e!==null?e:Gt.pooledCache}function mo(e,n){n===null?G(cs,cs.current):G(cs,n.pool)}function cp(){var e=Nu();return e===null?null:{parent:rn._currentValue,pool:e}}var Ws=Error(s(460)),Ou=Error(s(474)),go=Error(s(542)),_o={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e;default:if(typeof n.status=="string")n.then(zi,zi);else{if(e=Gt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dp(e),e}throw fs=n,Ws}}function us(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,Ws):a}}var fs=null;function hp(){if(fs===null)throw Error(s(459));var e=fs;return fs=null,e}function dp(e){if(e===Ws||e===go)throw Error(s(483))}var qs=null,rl=0;function vo(e){var n=rl;return rl+=1,qs===null&&(qs=[]),fp(qs,e,n)}function ll(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xo(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pp(e){function n(Y,j){if(e){var J=Y.deletions;J===null?(Y.deletions=[j],Y.flags|=16):J.push(j)}}function a(Y,j){if(!e)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function l(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function u(Y,j){return Y=Ii(Y,j),Y.index=0,Y.sibling=null,Y}function f(Y,j,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<j?(Y.flags|=67108866,j):J):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,j,J,me){return j===null||j.tag!==6?(j=Mu(J,Y.mode,me),j.return=Y,j):(j=u(j,J),j.return=Y,j)}function H(Y,j,J,me){var Je=J.type;return Je===T?pe(Y,j,J.props.children,me,J.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&us(Je)===j.type)?(j=u(j,J.props),ll(j,J),j.return=Y,j):(j=uo(J.type,J.key,J.props,null,Y.mode,me),ll(j,J),j.return=Y,j)}function te(Y,j,J,me){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=Eu(J,Y.mode,me),j.return=Y,j):(j=u(j,J.children||[]),j.return=Y,j)}function pe(Y,j,J,me,Je){return j===null||j.tag!==7?(j=ss(J,Y.mode,me,Je),j.return=Y,j):(j=u(j,J),j.return=Y,j)}function ve(Y,j,J){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Mu(""+j,Y.mode,J),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case E:return J=uo(j.type,j.key,j.props,null,Y.mode,J),ll(J,j),J.return=Y,J;case b:return j=Eu(j,Y.mode,J),j.return=Y,j;case ce:return j=us(j),ve(Y,j,J)}if($(j)||re(j))return j=ss(j,Y.mode,J,null),j.return=Y,j;if(typeof j.then=="function")return ve(Y,vo(j),J);if(j.$$typeof===R)return ve(Y,po(Y,j),J);xo(Y,j)}return null}function ne(Y,j,J,me){var Je=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Je!==null?null:A(Y,j,""+J,me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===Je?H(Y,j,J,me):null;case b:return J.key===Je?te(Y,j,J,me):null;case ce:return J=us(J),ne(Y,j,J,me)}if($(J)||re(J))return Je!==null?null:pe(Y,j,J,me,null);if(typeof J.then=="function")return ne(Y,j,vo(J),me);if(J.$$typeof===R)return ne(Y,j,po(Y,J),me);xo(Y,J)}return null}function fe(Y,j,J,me,Je){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(J)||null,A(j,Y,""+me,Je);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case E:return Y=Y.get(me.key===null?J:me.key)||null,H(j,Y,me,Je);case b:return Y=Y.get(me.key===null?J:me.key)||null,te(j,Y,me,Je);case ce:return me=us(me),fe(Y,j,J,me,Je)}if($(me)||re(me))return Y=Y.get(J)||null,pe(j,Y,me,Je,null);if(typeof me.then=="function")return fe(Y,j,J,vo(me),Je);if(me.$$typeof===R)return fe(Y,j,J,po(j,me),Je);xo(j,me)}return null}function He(Y,j,J,me){for(var Je=null,Ct=null,je=j,pt=j=0,Et=null;je!==null&&pt<J.length;pt++){je.index>pt?(Et=je,je=null):Et=je.sibling;var wt=ne(Y,je,J[pt],me);if(wt===null){je===null&&(je=Et);break}e&&je&&wt.alternate===null&&n(Y,je),j=f(wt,j,pt),Ct===null?Je=wt:Ct.sibling=wt,Ct=wt,je=Et}if(pt===J.length)return a(Y,je),Tt&&Fi(Y,pt),Je;if(je===null){for(;pt<J.length;pt++)je=ve(Y,J[pt],me),je!==null&&(j=f(je,j,pt),Ct===null?Je=je:Ct.sibling=je,Ct=je);return Tt&&Fi(Y,pt),Je}for(je=l(je);pt<J.length;pt++)Et=fe(je,Y,pt,J[pt],me),Et!==null&&(e&&Et.alternate!==null&&je.delete(Et.key===null?pt:Et.key),j=f(Et,j,pt),Ct===null?Je=Et:Ct.sibling=Et,Ct=Et);return e&&je.forEach(function(Fa){return n(Y,Fa)}),Tt&&Fi(Y,pt),Je}function it(Y,j,J,me){if(J==null)throw Error(s(151));for(var Je=null,Ct=null,je=j,pt=j=0,Et=null,wt=J.next();je!==null&&!wt.done;pt++,wt=J.next()){je.index>pt?(Et=je,je=null):Et=je.sibling;var Fa=ne(Y,je,wt.value,me);if(Fa===null){je===null&&(je=Et);break}e&&je&&Fa.alternate===null&&n(Y,je),j=f(Fa,j,pt),Ct===null?Je=Fa:Ct.sibling=Fa,Ct=Fa,je=Et}if(wt.done)return a(Y,je),Tt&&Fi(Y,pt),Je;if(je===null){for(;!wt.done;pt++,wt=J.next())wt=ve(Y,wt.value,me),wt!==null&&(j=f(wt,j,pt),Ct===null?Je=wt:Ct.sibling=wt,Ct=wt);return Tt&&Fi(Y,pt),Je}for(je=l(je);!wt.done;pt++,wt=J.next())wt=fe(je,Y,pt,wt.value,me),wt!==null&&(e&&wt.alternate!==null&&je.delete(wt.key===null?pt:wt.key),j=f(wt,j,pt),Ct===null?Je=wt:Ct.sibling=wt,Ct=wt);return e&&je.forEach(function(Qy){return n(Y,Qy)}),Tt&&Fi(Y,pt),Je}function zt(Y,j,J,me){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var Je=J.key;j!==null;){if(j.key===Je){if(Je=J.type,Je===T){if(j.tag===7){a(Y,j.sibling),me=u(j,J.props.children),me.return=Y,Y=me;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ce&&us(Je)===j.type){a(Y,j.sibling),me=u(j,J.props),ll(me,J),me.return=Y,Y=me;break e}a(Y,j);break}else n(Y,j);j=j.sibling}J.type===T?(me=ss(J.props.children,Y.mode,me,J.key),me.return=Y,Y=me):(me=uo(J.type,J.key,J.props,null,Y.mode,me),ll(me,J),me.return=Y,Y=me)}return M(Y);case b:e:{for(Je=J.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){a(Y,j.sibling),me=u(j,J.children||[]),me.return=Y,Y=me;break e}else{a(Y,j);break}else n(Y,j);j=j.sibling}me=Eu(J,Y.mode,me),me.return=Y,Y=me}return M(Y);case ce:return J=us(J),zt(Y,j,J,me)}if($(J))return He(Y,j,J,me);if(re(J)){if(Je=re(J),typeof Je!="function")throw Error(s(150));return J=Je.call(J),it(Y,j,J,me)}if(typeof J.then=="function")return zt(Y,j,vo(J),me);if(J.$$typeof===R)return zt(Y,j,po(Y,J),me);xo(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,j!==null&&j.tag===6?(a(Y,j.sibling),me=u(j,J),me.return=Y,Y=me):(a(Y,j),me=Mu(J,Y.mode,me),me.return=Y,Y=me),M(Y)):a(Y,j)}return function(Y,j,J,me){try{rl=0;var Je=zt(Y,j,J,me);return qs=null,Je}catch(je){if(je===Ws||je===go)throw je;var Ct=Yn(29,je,null,Y.mode);return Ct.lanes=me,Ct.return=Y,Ct}}}var hs=pp(!0),mp=pp(!1),Ma=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=co(e),Jd(e,null,a),n}return oo(e,l,n,a),co(e)}function ol(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Wn(e,a)}}function Bu(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Iu=!1;function cl(){if(Iu){var e=Xs;if(e!==null)throw e}}function ul(e,n,a,l){Iu=!1;var u=e.updateQueue;Ma=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,te=H.next;H.next=null,M===null?f=te:M.next=te,M=H;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==M&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=H))}if(f!==null){var ve=u.baseState;M=0,pe=te=H=null,A=f;do{var ne=A.lane&-536870913,fe=ne!==A.lane;if(fe?(Mt&ne)===ne:(l&ne)===ne){ne!==0&&ne===ks&&(Iu=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var He=e,it=A;ne=n;var zt=a;switch(it.tag){case 1:if(He=it.payload,typeof He=="function"){ve=He.call(zt,ve,ne);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=it.payload,ne=typeof He=="function"?He.call(zt,ve,ne):He,ne==null)break e;ve=_({},ve,ne);break e;case 2:Ma=!0}}ne=A.callback,ne!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ne]:fe.push(ne))}else fe={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=fe,H=ve):pe=pe.next=fe,M|=ne;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;fe=A,A=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);pe===null&&(H=ve),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),wa|=M,e.lanes=M,e.memoizedState=ve}}function gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gp(a[e],n)}var Ys=U(null),yo=U(0);function vp(e,n){e=Ki,G(yo,e),G(Ys,n),Ki=e|n.baseLanes}function Fu(){G(yo,Ki),G(Ys,Ys.current)}function Hu(){Ki=yo.current,X(Ys),X(yo)}var Zn=U(null),ci=null;function Ta(e){var n=e.alternate;G(Jt,Jt.current&1),G(Zn,e),ci===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(ci=e)}function Gu(e){G(Jt,Jt.current),G(Zn,e),ci===null&&(ci=e)}function xp(e){e.tag===22?(G(Jt,Jt.current),G(Zn,e),ci===null&&(ci=e)):Aa()}function Aa(){G(Jt,Jt.current),G(Zn,Zn.current)}function Kn(e){X(Zn),ci===e&&(ci=null),X(Jt)}var Jt=U(0);function So(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,ft=null,Ot=null,ln=null,Mo=!1,Zs=!1,ds=!1,Eo=0,fl=0,Ks=null,Gx=0;function Kt(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function ju(e,n,a,l,u,f){return Vi=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?nm:sf,ds=!1,f=a(l,u),ds=!1,Zs&&(f=Sp(n,a,l,u)),yp(e),f}function yp(e){I.H=pl;var n=Ot!==null&&Ot.next!==null;if(Vi=0,ln=Ot=ft=null,Mo=!1,fl=0,Ks=null,n)throw Error(s(300));e===null||on||(e=e.dependencies,e!==null&&ho(e)&&(on=!0))}function Sp(e,n,a,l){ft=e;var u=0;do{if(Zs&&(Ks=null),fl=0,Zs=!1,25<=u)throw Error(s(301));if(u+=1,ln=Ot=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=im,f=n(a,l)}while(Zs);return f}function Vx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?hl(n):n,e=e.useState()[0],(Ot!==null?Ot.memoizedState:null)!==e&&(ft.flags|=1024),n}function ku(){var e=Eo!==0;return Eo=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(Mo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Mo=!1}Vi=0,ln=Ot=ft=null,Zs=!1,fl=Eo=0,Ks=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ft.memoizedState=ln=e:ln=ln.next=e,ln}function $t(){if(Ot===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=Ot.next;var n=ln===null?ft.memoizedState:ln.next;if(n!==null)ln=n,Ot=e;else{if(e===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Ot=e,e={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},ln===null?ft.memoizedState=ln=e:ln=ln.next=e}return ln}function bo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var n=fl;return fl+=1,Ks===null&&(Ks=[]),e=fp(Ks,e,n),n=ft,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?nm:sf),e}function To(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===R)return Sn(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bo(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=O;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Ao(e){var n=$t();return Yu(n,Ot,e)}function Yu(e,n,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,H=null,te=n,pe=!1;do{var ve=te.lane&-536870913;if(ve!==te.lane?(Mt&ve)===ve:(Vi&ve)===ve){var ne=te.revertLane;if(ne===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ve===ks&&(pe=!0);else if((Vi&ne)===ne){te=te.next,ne===ks&&(pe=!0);continue}else ve={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=ve,M=f):H=H.next=ve,ft.lanes|=ne,wa|=ne;ve=te.action,ds&&a(f,ve),f=te.hasEagerState?te.eagerState:a(f,ve)}else ne={lane:ve,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=ne,M=f):H=H.next=ne,ft.lanes|=ve,wa|=ve;te=te.next}while(te!==null&&te!==n);if(H===null?M=f:H.next=A,!qn(f,e.memoizedState)&&(on=!0,pe&&(a=Xs,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=H,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zu(e){var n=$t(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);qn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function Mp(e,n,a){var l=ft,u=$t(),f=Tt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!qn((Ot||u).memoizedState,a);if(M&&(u.memoizedState=a,on=!0),u=u.queue,Ju(Tp.bind(null,l,u,e),[e]),u.getSnapshot!==n||M||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,Qs(9,{destroy:void 0},bp.bind(null,l,u,a,n),null),Gt===null)throw Error(s(349));f||(Vi&127)!==0||Ep(l,n,a)}return a}function Ep(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=bo(),ft.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bp(e,n,a,l){n.value=a,n.getSnapshot=l,Ap(n)&&Rp(e)}function Tp(e,n,a){return a(function(){Ap(n)&&Rp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Rp(e){var n=as(e,2);n!==null&&Vn(n,e,2)}function Ku(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),ds){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function Cp(e,n,a,l){return e.baseState=a,Yu(e,Ot,typeof l=="function"?l:ji)}function jx(e,n,a,l,u){if(wo(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};I.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wp(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=I.T,M={};I.T=M;try{var A=a(u,l),H=I.S;H!==null&&H(M,A),Lp(e,n,A)}catch(te){Qu(e,n,te)}finally{f!==null&&M.types!==null&&(f.types=M.types),I.T=f}}else try{f=a(u,l),Lp(e,n,f)}catch(te){Qu(e,n,te)}}function Lp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Dp(e,n,l)},function(l){return Qu(e,n,l)}):Dp(e,n,a)}function Dp(e,n,a){n.status="fulfilled",n.value=a,Up(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wp(e,a)))}function Qu(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Up(n),n=n.next;while(n!==l)}e.action=null}function Up(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Np(e,n){return n}function Op(e,n){if(Tt){var a=Gt.formState;if(a!==null){e:{var l=ft;if(Tt){if(kt){t:{for(var u=kt,f=oi;u.nodeType!==8;){if(!f){u=null;break t}if(u=ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){kt=ui(u.nextSibling),l=u.data==="F!";break e}}ya(l)}l=!1}l&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=l,a=$p.bind(null,ft,l),l.dispatch=a,l=Ku(!1),f=af.bind(null,ft,!1,l.queue),l=Un(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=jx.bind(null,ft,u,f,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function Pp(e){var n=$t();return zp(n,Ot,e)}function zp(e,n,a){if(n=Yu(e,n,Np)[0],e=Ao(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=hl(n)}catch(M){throw M===Ws?go:M}else l=n;n=$t();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,Qs(9,{destroy:void 0},kx.bind(null,u,a),null)),[l,f,e]}function kx(e,n){e.action=n}function Bp(e){var n=$t(),a=Ot;if(a!==null)return zp(n,a,e);$t(),n=n.memoizedState,a=$t();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Qs(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=ft.updateQueue,n===null&&(n=bo(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Ip(){return $t().memoizedState}function Ro(e,n,a,l){var u=Un();ft.flags|=e,u.memoizedState=Qs(1|n,{destroy:void 0},a,l===void 0?null:l)}function Co(e,n,a,l){var u=$t();l=l===void 0?null:l;var f=u.memoizedState.inst;Ot!==null&&l!==null&&Vu(l,Ot.memoizedState.deps)?u.memoizedState=Qs(n,f,a,l):(ft.flags|=e,u.memoizedState=Qs(1|n,f,a,l))}function Fp(e,n){Ro(8390656,8,e,n)}function Ju(e,n){Co(2048,8,e,n)}function Xx(e){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=bo(),ft.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hp(e){var n=$t().memoizedState;return Xx({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gp(e,n){return Co(4,2,e,n)}function Vp(e,n){return Co(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kp(e,n,a){a=a!=null?a.concat([e]):null,Co(4,4,jp.bind(null,n,e),a)}function $u(){}function Xp(e,n){var a=$t();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Vu(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Wp(e,n){var a=$t();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Vu(n,l[1]))return l[0];if(l=e(),ds){Ue(!0);try{e()}finally{Ue(!1)}}return a.memoizedState=[l,n],l}function ef(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(Mt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=qm(),ft.lanes|=e,wa|=e,a)}function qp(e,n,a,l){return qn(a,n)?a:Ys.current!==null?(e=ef(e,a,l),qn(e,n)||(on=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(Mt&261930)===0?(on=!0,e.memoizedState=a):(e=qm(),ft.lanes|=e,wa|=e,n)}function Yp(e,n,a,l,u){var f=q.p;q.p=f!==0&&8>f?f:8;var M=I.T,A={};I.T=A,af(e,!1,n,a);try{var H=u(),te=I.S;if(te!==null&&te(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=Hx(H,l);dl(e,n,pe,$n(e))}else dl(e,n,l,$n(e))}catch(ve){dl(e,n,{then:function(){},status:"rejected",reason:ve},$n())}finally{q.p=f,M!==null&&A.types!==null&&(M.types=A.types),I.T=M}}function Wx(){}function tf(e,n,a,l){if(e.tag!==5)throw Error(s(476));var u=Zp(e).queue;Yp(e,u,n,ee,a===null?Wx:function(){return Kp(e),a(l)})}function Zp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kp(e){var n=Zp(e);n.next===null&&(n=e.alternate.memoizedState),dl(e,n.next.queue,{},$n())}function nf(){return Sn(Ll)}function Qp(){return $t().memoizedState}function Jp(){return $t().memoizedState}function qx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ea(a);var l=ba(n,e,a);l!==null&&(Vn(l,n,a),ol(l,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function Yx(e,n,a){var l=$n();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wo(e)?em(n,a):(a=yu(e,n,a,l),a!==null&&(Vn(a,e,l),tm(a,n,l)))}function $p(e,n,a){var l=$n();dl(e,n,a,l)}function dl(e,n,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wo(e))em(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,M))return oo(e,n,u,0),Gt===null&&lo(),!1}catch{}if(a=yu(e,n,u,l),a!==null)return Vn(a,e,l),tm(a,n,l),!0}return!1}function af(e,n,a,l){if(l={lane:2,revertLane:zf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wo(e)){if(n)throw Error(s(479))}else n=yu(e,a,l,2),n!==null&&Vn(n,e,2)}function wo(e){var n=e.alternate;return e===ft||n!==null&&n===ft}function em(e,n){Zs=Mo=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tm(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Wn(e,a)}}var pl={readContext:Sn,use:To,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};pl.useEffectEvent=Kt;var nm={readContext:Sn,use:To,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:Fp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ro(4194308,4,jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ro(4194308,4,e,n)},useInsertionEffect:function(e,n){Ro(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var l=e();if(ds){Ue(!0);try{e()}finally{Ue(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Un();if(a!==void 0){var u=a(n);if(ds){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=Yx.bind(null,ft,e),[l.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=$p.bind(null,ft,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=Un();return ef(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Yp.bind(null,ft,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=ft,u=Un();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Gt===null)throw Error(s(349));(Mt&127)!==0||Ep(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Fp(Tp.bind(null,l,f,e),[e]),l.flags|=2048,Qs(9,{destroy:void 0},bp.bind(null,l,f,a,n),null),a},useId:function(){var e=Un(),n=Gt.identifierPrefix;if(Tt){var a=Li,l=wi;a=(l&~(1<<32-B(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Eo++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Gx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:Op,useActionState:Op,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,ft,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return Un().memoizedState=qx.bind(null,ft)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:Sn,use:To,useCallback:Xp,useContext:Sn,useEffect:Ju,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:Ao,useRef:Ip,useState:function(){return Ao(ji)},useDebugValue:$u,useDeferredValue:function(e,n){var a=$t();return qp(a,Ot.memoizedState,e,n)},useTransition:function(){var e=Ao(ji)[0],n=$t().memoizedState;return[typeof e=="boolean"?e:hl(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:nf,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=$t();return Cp(a,Ot,e,n)},useMemoCache:qu,useCacheRefresh:Jp};sf.useEffectEvent=Hp;var im={readContext:Sn,use:To,useCallback:Xp,useContext:Sn,useEffect:Ju,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:Zu,useRef:Ip,useState:function(){return Zu(ji)},useDebugValue:$u,useDeferredValue:function(e,n){var a=$t();return Ot===null?ef(a,e,n):qp(a,Ot.memoizedState,e,n)},useTransition:function(){var e=Zu(ji)[0],n=$t().memoizedState;return[typeof e=="boolean"?e:hl(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:nf,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=$t();return Ot!==null?Cp(a,Ot,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Jp};im.useEffectEvent=Hp;function rf(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lf={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=$n(),u=Ea(l);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,l),n!==null&&(Vn(n,e,l),ol(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=$n(),u=Ea(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,l),n!==null&&(Vn(n,e,l),ol(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),l=Ea(a);l.tag=2,n!=null&&(l.callback=n),n=ba(e,l,a),n!==null&&(Vn(n,e,a),ol(n,e,a))}};function am(e,n,a,l,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,M):n.prototype&&n.prototype.isPureReactComponent?!el(a,l)||!el(u,f):!0}function sm(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&lf.enqueueReplaceState(n,n.state,null)}function ps(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function rm(e){ro(e)}function lm(e){console.error(e)}function om(e){ro(e)}function Lo(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function cm(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Lo(e,n)},a}function um(e){return e=Ea(e),e.tag=3,e}function fm(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){cm(n,a,l)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){cm(n,a,l),typeof u!="function"&&(La===null?La=new Set([this]):La.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Zx(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&js(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Vo():a.alternate===null&&Qt===0&&(Qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===_o?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Nf(e,l,u)),!1;case 22:return a.flags|=65536,l===_o?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Nf(e,l,u)),!1}throw Error(s(435,a.tag))}return Nf(e,l,u),Vo(),!1}if(Tt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Au&&(e=Error(s(422),{cause:l}),il(si(e,a)))):(l!==Au&&(n=Error(s(423),{cause:l}),il(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=si(l,a),u=of(e.stateNode,l,u),Bu(e,u),Qt!==4&&(Qt=2)),!1;var f=Error(s(520),{cause:l});if(f=si(f,a),Ml===null?Ml=[f]:Ml.push(f),Qt!==4&&(Qt=2),n===null)return!0;l=si(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,l,e),Bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(La===null||!La.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=um(u),fm(u,e,a,l),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(s(461)),on=!1;function Mn(e,n,a,l){n.child=e===null?mp(n,null,a,l):hs(n,e.child,a,l)}function hm(e,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return os(n),l=ju(e,n,a,M,f,u),A=ku(),e!==null&&!on?(Xu(e,n,u),ki(e,n,u)):(Tt&&A&&bu(n),n.flags|=1,Mn(e,n,l,u),n.child)}function dm(e,n,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pm(e,n,f,l,u)):(e=uo(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:el,a(M,l)&&e.ref===n.ref)return ki(e,n,u)}return n.flags|=1,e=Ii(f,l),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,a,l,u){if(e!==null){var f=e.memoizedProps;if(el(f,l)&&e.ref===n.ref)if(on=!1,n.pendingProps=l=f,_f(e,u))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,ki(e,n,u)}return uf(e,n,a,l,u)}function mm(e,n,a,l){var u=l.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,n.child=null;return gm(e,n,f,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&mo(n,f!==null?f.cachePool:null),f!==null?vp(n,f):Fu(),xp(n);else return l=n.lanes=536870912,gm(e,n,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(mo(n,f.cachePool),vp(n,f),Aa(),n.memoizedState=null):(e!==null&&mo(n,null),Fu(),Aa());return Mn(e,n,u,a),n.child}function ml(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gm(e,n,a,l,u){var f=Nu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&mo(n,null),Fu(),xp(n),e!==null&&js(e,n,l,!0),n.childLanes=u,null}function Do(e,n){return n=No({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _m(e,n,a){return hs(n,e.child,null,a),e=Do(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Kx(e,n,a){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(l.mode==="hidden")return e=Do(n,l),n.lanes=536870912,ml(null,e);if(Gu(n),(e=kt)?(e=wg(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:wi,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=ep(e),a.return=n,n.child=a,yn=n,kt=null)):e=null,e===null)throw ya(n);return n.lanes=536870912,null}return Do(n,l)}var f=e.memoizedState;if(f!==null){var M=f.dehydrated;if(Gu(n),u)if(n.flags&256)n.flags&=-257,n=_m(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||js(e,n,a,!1),u=(a&e.childLanes)!==0,on||u){if(l=Gt,l!==null&&(M=Hr(l,a),M!==0&&M!==f.retryLane))throw f.retryLane=M,as(e,M),Vn(l,e,M),cf;Vo(),n=_m(e,n,a)}else e=f.treeContext,kt=ui(M.nextSibling),yn=n,Tt=!0,xa=null,oi=!1,e!==null&&ip(n,e),n=Do(n,l),n.flags|=4096;return n}return e=Ii(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Uo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,l,u){return os(n),a=ju(e,n,a,l,void 0,u),l=ku(),e!==null&&!on?(Xu(e,n,u),ki(e,n,u)):(Tt&&l&&bu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function vm(e,n,a,l,u,f){return os(n),n.updateQueue=null,a=Sp(n,l,a,u),yp(e),l=ku(),e!==null&&!on?(Xu(e,n,f),ki(e,n,f)):(Tt&&l&&bu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function xm(e,n,a,l,u){if(os(n),n.stateNode===null){var f=Fs,M=a.contextType;typeof M=="object"&&M!==null&&(f=Sn(M)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Pu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Sn(M):Fs,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(rf(n,a,M,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&lf.enqueueReplaceState(f,f.state,null),ul(n,l,f,u),cl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=ps(a,A);f.props=H;var te=f.context,pe=a.contextType;M=Fs,typeof pe=="object"&&pe!==null&&(M=Sn(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==M)&&sm(n,f,l,M),Ma=!1;var ne=n.memoizedState;f.state=ne,ul(n,l,f,u),cl(),te=n.memoizedState,A||ne!==te||Ma?(typeof ve=="function"&&(rf(n,a,ve,l),te=n.memoizedState),(H=Ma||am(n,a,H,l,ne,te,M))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=te),f.props=l,f.state=te,f.context=M,l=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,zu(e,n),M=n.memoizedProps,pe=ps(a,M),f.props=pe,ve=n.pendingProps,ne=f.context,te=a.contextType,H=Fs,typeof te=="object"&&te!==null&&(H=Sn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==ve||ne!==H)&&sm(n,f,l,H),Ma=!1,ne=n.memoizedState,f.state=ne,ul(n,l,f,u),cl();var fe=n.memoizedState;M!==ve||ne!==fe||Ma||e!==null&&e.dependencies!==null&&ho(e.dependencies)?(typeof A=="function"&&(rf(n,a,A,l),fe=n.memoizedState),(pe=Ma||am(n,a,pe,l,ne,fe,H)||e!==null&&e.dependencies!==null&&ho(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=fe),f.props=l,f.state=fe,f.context=H,l=pe):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,Uo(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=hs(n,e.child,null,u),n.child=hs(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ki(e,n,u),e}function ym(e,n,a,l){return rs(),n.flags|=256,Mn(e,n,a,l),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:cp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Sm(e,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(Jt.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(u?Ta(n):Aa(),(e=kt)?(e=wg(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:wi,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=ep(e),a.return=n,n.child=a,yn=n,kt=null)):e=null,e===null)throw ya(n);return Zf(e)?n.lanes=32:n.lanes=536870912,null}var A=l.children;return l=l.fallback,u?(Aa(),u=n.mode,A=No({mode:"hidden",children:A},u),l=ss(l,u,a,null),A.return=n,l.return=n,A.sibling=l,n.child=A,l=n.child,l.memoizedState=hf(a),l.childLanes=df(e,M,a),n.memoizedState=ff,ml(null,l)):(Ta(n),pf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),A=l.fallback,u=n.mode,l=No({mode:"visible",children:l.children},u),A=ss(A,u,a,null),A.flags|=2,l.return=n,A.return=n,l.sibling=A,n.child=l,hs(n,e.child,null,a),l=n.child,l.memoizedState=hf(a),l.childLanes=df(e,M,a),n.memoizedState=ff,n=ml(null,l));else if(Ta(n),Zf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var te=M.dgst;M=te,l=Error(s(419)),l.stack="",l.digest=M,il({value:l,source:null,stack:null}),n=mf(e,n,a)}else if(on||js(e,n,a,!1),M=(a&e.childLanes)!==0,on||M){if(M=Gt,M!==null&&(l=Hr(M,a),l!==0&&l!==H.retryLane))throw H.retryLane=l,as(e,l),Vn(M,e,l),cf;Yf(A)||Vo(),n=mf(e,n,a)}else Yf(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,kt=ui(A.nextSibling),yn=n,Tt=!0,xa=null,oi=!1,e!==null&&ip(n,e),n=pf(n,l.children),n.flags|=4096);return n}return u?(Aa(),A=l.fallback,u=n.mode,H=e.child,te=H.sibling,l=Ii(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,te!==null?A=Ii(te,A):(A=ss(A,u,a,null),A.flags|=2),A.return=n,l.return=n,l.sibling=A,n.child=l,ml(null,l),l=n.child,A=e.child.memoizedState,A===null?A=hf(a):(u=A.cachePool,u!==null?(H=rn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=cp(),A={baseLanes:A.baseLanes|a,cachePool:u}),l.memoizedState=A,l.childLanes=df(e,M,a),n.memoizedState=ff,ml(e.child,l)):(Ta(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=No({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function No(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function mf(e,n,a){return hs(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),wu(e.return,n,a)}function gf(e,n,a,l,u,f){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=a,M.tailMode=u,M.treeForkCount=f)}function Em(e,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var M=Jt.current,A=(M&2)!==0;if(A?(M=M&1|2,n.flags|=128):M&=1,G(Jt,M),Mn(e,n,l,a),l=Tt?nl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mm(e,a,n);else if(e.tag===19)Mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&So(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&So(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f,l);break;case"together":gf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ho(e)))}function Qx(e,n,a){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),Sa(n,rn,e.memoizedState.cache),rs();break;case 27:case 5:Qe(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sm(e,n,a):(Ta(n),e=ki(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(js(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return Em(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(Jt,Jt.current),l)break;return null;case 22:return n.lanes=0,mm(e,n,a,n.pendingProps);case 24:Sa(n,rn,e.memoizedState.cache)}return ki(e,n,a)}function bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return on=!1,Qx(e,n,a);on=(e.flags&131072)!==0}else on=!1,Tt&&(n.flags&1048576)!==0&&np(n,nl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=us(n.elementType),n.type=e,typeof e=="function")Su(e)?(l=ps(e,l),n.tag=1,n=xm(null,n,e,l,a)):(n.tag=0,n=uf(null,n,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===z){n.tag=11,n=hm(null,n,e,l,a);break e}else if(u===P){n.tag=14,n=dm(null,n,e,l,a);break e}}throw n=W(e)||e,Error(s(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=ps(l,n.pendingProps),xm(e,n,l,u,a);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,zu(e,n),ul(n,l,null,a);var M=n.memoizedState;if(l=M.cache,Sa(n,rn,l),l!==f.cache&&Lu(n,[rn],a,!0),cl(),l=M.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ym(e,n,l,a);break e}else if(l!==u){u=si(Error(s(424)),n),il(u),n=ym(e,n,l,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,kt=ui(e.firstChild),yn=n,Tt=!0,xa=null,oi=!0,a=mp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(rs(),l===u){n=ki(e,n,a);break e}Mn(e,n,l,a)}n=n.child}return n;case 26:return Uo(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,e=n.pendingProps,l=Zo(Ee.current).createElement(a),l[tn]=n,l[An]=e,En(l,a,e),Ze(l),n.stateNode=l):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qe(n),e===null&&Tt&&(l=n.stateNode=Ug(n.type,n.pendingProps,Ee.current),yn=n,oi=!0,u=kt,Oa(n.type)?(Kf=u,kt=ui(l.firstChild)):kt=u),Mn(e,n,n.pendingProps.children,a),Uo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((u=l=kt)&&(l=Ry(l,n.type,n.pendingProps,oi),l!==null?(n.stateNode=l,yn=n,kt=ui(l.firstChild),oi=!1,u=!0):u=!1),u||ya(n)),Qe(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,l=f.children,Xf(u,f)?l=null:M!==null&&Xf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,Vx,null,null,a),Ll._currentValue=u),Uo(e,n),Mn(e,n,l,a),n.child;case 6:return e===null&&Tt&&((e=a=kt)&&(a=Cy(a,n.pendingProps,oi),a!==null?(n.stateNode=a,yn=n,kt=null,e=!0):e=!1),e||ya(n)),null;case 13:return Sm(e,n,a);case 4:return Xe(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=hs(n,null,l,a):Mn(e,n,l,a),n.child;case 11:return hm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Sa(n,n.type,l.value),Mn(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,os(n),u=Sn(u),l=l(u),n.flags|=1,Mn(e,n,l,a),n.child;case 14:return dm(e,n,n.type,n.pendingProps,a);case 15:return pm(e,n,n.type,n.pendingProps,a);case 19:return Em(e,n,a);case 31:return Kx(e,n,a);case 22:return mm(e,n,a,n.pendingProps);case 24:return os(n),l=Sn(rn),e===null?(u=Nu(),u===null&&(u=Gt,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},Pu(n),Sa(n,rn,u)):((e.lanes&a)!==0&&(zu(e,n),ul(n,null,null,a),cl()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,rn,l)):(l=f.cache,Sa(n,rn,l),l!==u.cache&&Lu(n,[rn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(e){e.flags|=4}function vf(e,n,a,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Qm())e.flags|=8192;else throw fs=_o,Ou}else e.flags&=-16777217}function Tm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n))if(Qm())e.flags|=8192;else throw fs=_o,Ou}function Oo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?_t():536870912,e.lanes|=n,tr|=n)}function gl(e,n){if(!Tt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Xt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function Jx(e,n,a){var l=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(n),null;case 1:return Xt(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Gi(rn),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vs(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),Xt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Xi(n),f!==null?(Xt(n),Tm(n,f)):(Xt(n),vf(n,u,null,l,a))):f?f!==e.memoizedState?(Xi(n),Xt(n),Tm(n,f)):(Xt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Xi(n),Xt(n),vf(n,u,e,l,a)),null;case 27:if(ht(n),a=Ee.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Xi(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Xt(n),null}e=Z.current,Vs(n)?ap(n):(e=Ug(u,l,a),n.stateNode=e,Xi(n))}return Xt(n),null;case 5:if(ht(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Xi(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Xt(n),null}if(f=Z.current,Vs(n))ap(n);else{var M=Zo(Ee.current);switch(f){case 1:f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=M.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?M.createElement(u,{is:l.is}):M.createElement(u)}}f[tn]=n,f[An]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)f.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=f;e:switch(En(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xi(n)}}return Xt(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Xi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ee.current,Vs(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=yn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[tn]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Sg(e.nodeValue,a)),e||ya(n,!0)}else e=Zo(e).createTextNode(l),e[tn]=n,n.stateNode=e}return Xt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Vs(n),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tn]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[tn]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Oo(n,n.updateQueue),Xt(n),null);case 4:return Fe(),e===null&&Hf(n.stateNode.containerInfo),Xt(n),null;case 10:return Gi(n.type),Xt(n),null;case 19:if(X(Jt),l=n.memoizedState,l===null)return Xt(n),null;if(u=(n.flags&128)!==0,f=l.rendering,f===null)if(u)gl(l,!1);else{if(Qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=So(e),f!==null){for(n.flags|=128,gl(l,!1),e=f.updateQueue,n.updateQueue=e,Oo(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$d(a,e),a=a.sibling;return G(Jt,Jt.current&1|2),Tt&&Fi(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&ye()>Fo&&(n.flags|=128,u=!0,gl(l,!1),n.lanes=4194304)}else{if(!u)if(e=So(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Oo(n,e),gl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!Tt)return Xt(n),null}else 2*ye()-l.renderingStartTime>Fo&&a!==536870912&&(n.flags|=128,u=!0,gl(l,!1),n.lanes=4194304);l.isBackwards?(f.sibling=n.child,n.child=f):(e=l.last,e!==null?e.sibling=f:n.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ye(),e.sibling=null,a=Jt.current,G(Jt,u?a&1|2:a&1),Tt&&Fi(n,l.treeForkCount),e):(Xt(n),null);case 22:case 23:return Kn(n),Hu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(Xt(n),n.subtreeFlags&6&&(n.flags|=8192)):Xt(n),a=n.updateQueue,a!==null&&Oo(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&X(cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(rn),Xt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $x(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(rn),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Jt),null;case 4:return Fe(),null;case 10:return Gi(n.type),null;case 22:case 23:return Kn(n),Hu(),e!==null&&X(cs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(rn),null;case 25:return null;default:return null}}function Am(e,n){switch(Tu(n),n.tag){case 3:Gi(rn),Fe();break;case 26:case 27:case 5:ht(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:X(Jt);break;case 10:Gi(n.type);break;case 22:case 23:Kn(n),Hu(),e!==null&&X(cs);break;case 24:Gi(rn)}}function _l(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,M=a.inst;l=f(),M.destroy=l}a=a.next}while(a!==u)}}catch(A){Nt(n,n.return,A)}}function Ra(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var H=a,te=A;try{te()}catch(pe){Nt(u,H,pe)}}}l=l.next}while(l!==f)}}catch(pe){Nt(n,n.return,pe)}}function Rm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_p(n,a)}catch(l){Nt(e,e.return,l)}}}function Cm(e,n,a){a.props=ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Nt(e,n,l)}}function vl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){Nt(e,n,u)}}function Di(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Nt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Nt(e,n,u)}else a.current=null}function wm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Nt(e,e.return,u)}}function xf(e,n,a){try{var l=e.stateNode;Sy(l,e.type,a,n),l[An]=n}catch(u){Nt(e,e.return,u)}}function Lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Po(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Po(e,n,a),e=e.sibling;e!==null;)Po(e,n,a),e=e.sibling}function Dm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,l,a),n[tn]=e,n[An]=a}catch(f){Nt(e,e.return,f)}}var Wi=!1,cn=!1,Mf=!1,Um=typeof WeakSet=="function"?WeakSet:Set,gn=null;function ey(e,n){if(e=e.containerInfo,jf=nc,e=kd(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var M=0,A=-1,H=-1,te=0,pe=0,ve=e,ne=null;t:for(;;){for(var fe;ve!==a||u!==0&&ve.nodeType!==3||(A=M+u),ve!==f||l!==0&&ve.nodeType!==3||(H=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(fe=ve.firstChild)!==null;)ne=ve,ve=fe;for(;;){if(ve===e)break t;if(ne===a&&++te===u&&(A=M),ne===f&&++pe===l&&(H=M),(fe=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=fe}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},nc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var He=ps(a.type,u);e=l.getSnapshotBeforeUpdate(He,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(it){Nt(a,a.return,it)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Nm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(e,a),l&4&&_l(5,a);break;case 1:if(Yi(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Nt(a,a.return,M)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Nt(a,a.return,M)}}l&64&&Rm(a),l&512&&vl(a,a.return);break;case 3:if(Yi(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(e,n)}catch(M){Nt(a,a.return,M)}}break;case 27:n===null&&l&4&&Dm(a);case 26:case 5:Yi(e,a),n===null&&l&4&&wm(a),l&512&&vl(a,a.return);break;case 12:Yi(e,a);break;case 31:Yi(e,a),l&4&&zm(e,a);break;case 13:Yi(e,a),l&4&&Bm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cy.bind(null,a),wy(e,a))));break;case 22:if(l=a.memoizedState!==null||Wi,!l){n=n!==null&&n.memoizedState!==null||cn,u=Wi;var f=cn;Wi=l,(cn=n)&&!f?Zi(e,a,(a.subtreeFlags&8772)!==0):Yi(e,a),Wi=u,cn=f}break;case 30:break;default:Yi(e,a)}}function Om(e){var n=e.alternate;n!==null&&(e.alternate=null,Om(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&le(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qt=null,In=!1;function qi(e,n,a){for(a=a.child;a!==null;)Pm(e,n,a),a=a.sibling}function Pm(e,n,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(nt,a)}catch{}switch(a.tag){case 26:cn||Di(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Di(a,n);var l=qt,u=In;Oa(a.type)&&(qt=a.stateNode,In=!1),qi(e,n,a),Rl(a.stateNode),qt=l,In=u;break;case 5:cn||Di(a,n);case 6:if(l=qt,u=In,qt=null,qi(e,n,a),qt=l,In=u,qt!==null)if(In)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(f){Nt(a,n,f)}else try{qt.removeChild(a.stateNode)}catch(f){Nt(a,n,f)}break;case 18:qt!==null&&(In?(e=qt,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cr(e)):Rg(qt,a.stateNode));break;case 4:l=qt,u=In,qt=a.stateNode.containerInfo,In=!0,qi(e,n,a),qt=l,In=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),cn||Ra(4,a,n),qi(e,n,a);break;case 1:cn||(Di(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cm(a,n,l)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:cn=(l=cn)||a.memoizedState!==null,qi(e,n,a),cn=l;break;default:qi(e,n,a)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cr(e)}catch(a){Nt(n,n.return,a)}}}function Bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cr(e)}catch(a){Nt(n,n.return,a)}}function ty(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Um),n;default:throw Error(s(435,e.tag))}}function zo(e,n){var a=ty(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var u=uy.bind(null,e,l);l.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,M=n,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Oa(A.type)){qt=A.stateNode,In=!1;break e}break;case 5:qt=A.stateNode,In=!1;break e;case 3:case 4:qt=A.stateNode.containerInfo,In=!0;break e}A=A.return}if(qt===null)throw Error(s(160));Pm(f,M,u),qt=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}var vi=null;function Im(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Hn(e),l&4&&(Ra(3,e,e.return),_l(3,e),Ra(5,e,e.return));break;case 1:Fn(n,e),Hn(e),l&512&&(cn||a===null||Di(a,a.return)),l&64&&Wi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=vi;if(Fn(n,e),Hn(e),l&512&&(cn||a===null||Di(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ue]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,l,a),f[tn]=e,Ze(f),l=f;break e;case"link":var M=Ig("link","href",u).get(l+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break t}}f=u.createElement(l),En(f,l,a),u.head.appendChild(f);break;case"meta":if(M=Ig("meta","content",u).get(l+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break t}}f=u.createElement(l),En(f,l,a),u.head.appendChild(f);break;default:throw Error(s(468,l))}f[tn]=e,Ze(f),l=f}e.stateNode=l}else Fg(u,e.type,e.stateNode);else e.stateNode=Bg(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?Fg(u,e.type,e.stateNode):Bg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),Hn(e),l&512&&(cn||a===null||Di(a,a.return)),a!==null&&l&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),Hn(e),l&512&&(cn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Us(u,"")}catch(He){Nt(e,e.return,He)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Mf=!0);break;case 6:if(Fn(n,e),Hn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(He){Nt(e,e.return,He)}}break;case 3:if(Jo=null,u=vi,vi=Ko(n.containerInfo),Fn(n,e),vi=u,Hn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{cr(n.containerInfo)}catch(He){Nt(e,e.return,He)}Mf&&(Mf=!1,Fm(e));break;case 4:l=vi,vi=Ko(e.stateNode.containerInfo),Fn(n,e),Hn(e),vi=l;break;case 12:Fn(n,e),Hn(e);break;case 31:Fn(n,e),Hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zo(e,l)));break;case 13:Fn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Io=ye()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zo(e,l)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=Wi,pe=cn;if(Wi=te||u,cn=pe||H,Fn(n,e),cn=pe,Wi=te,Hn(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Wi||cn||ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=H.stateNode;var ve=H.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(He){Nt(H,H.return,He)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(He){Nt(H,H.return,He)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?Cg(fe,!0):Cg(H.stateNode,!1)}catch(He){Nt(H,H.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,zo(e,a))));break;case 19:Fn(n,e),Hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zo(e,l)));break;case 30:break;case 21:break;default:Fn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(Lm(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);Po(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Us(M,""),a.flags&=-33);var A=yf(e);Po(e,A,M);break;case 3:case 4:var H=a.stateNode.containerInfo,te=yf(e);Sf(e,te,H);break;default:throw Error(s(161))}}catch(pe){Nt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(e,n.alternate,n),n=n.sibling}function ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),ms(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),ms(n);break;case 27:Rl(n.stateNode);case 26:case 5:Di(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(u,f,a),_l(4,f);break;case 1:if(Zi(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Nt(l,l.return,te)}if(l=f,u=l.updateQueue,u!==null){var A=l.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)gp(H[u],A)}catch(te){Nt(l,l.return,te)}}a&&M&64&&Rm(f),vl(f,f.return);break;case 27:Dm(f);case 26:case 5:Zi(u,f,a),a&&l===null&&M&4&&wm(f),vl(f,f.return);break;case 12:Zi(u,f,a);break;case 31:Zi(u,f,a),a&&M&4&&zm(u,f);break;case 13:Zi(u,f,a),a&&M&4&&Bm(u,f);break;case 22:f.memoizedState===null&&Zi(u,f,a),vl(f,f.return);break;case 30:break;default:Zi(u,f,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&al(a))}function bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&al(e))}function xi(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hm(e,n,a,l),n=n.sibling}function Hm(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,l),u&2048&&_l(9,n);break;case 1:xi(e,n,a,l);break;case 3:xi(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&al(e)));break;case 12:if(u&2048){xi(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Nt(n,n.return,H)}}else xi(e,n,a,l);break;case 31:xi(e,n,a,l);break;case 13:xi(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,l):xl(e,n):f._visibility&2?xi(e,n,a,l):(f._visibility|=2,Js(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(M,n);break;case 24:xi(e,n,a,l),u&2048&&bf(n.alternate,n);break;default:xi(e,n,a,l)}}function Js(e,n,a,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,M=n,A=a,H=l,te=M.flags;switch(M.tag){case 0:case 11:case 15:Js(f,M,A,H,u),_l(8,M);break;case 23:break;case 22:var pe=M.stateNode;M.memoizedState!==null?pe._visibility&2?Js(f,M,A,H,u):xl(f,M):(pe._visibility|=2,Js(f,M,A,H,u)),u&&te&2048&&Ef(M.alternate,M);break;case 24:Js(f,M,A,H,u),u&&te&2048&&bf(M.alternate,M);break;default:Js(f,M,A,H,u)}n=n.sibling}}function xl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:xl(a,l),u&2048&&Ef(l.alternate,l);break;case 24:xl(a,l),u&2048&&bf(l.alternate,l);break;default:xl(a,l)}n=n.sibling}}var yl=8192;function $s(e,n,a){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)Gm(e,n,a),e=e.sibling}function Gm(e,n,a){switch(e.tag){case 26:$s(e,n,a),e.flags&yl&&e.memoizedState!==null&&Gy(a,vi,e.memoizedState,e.memoizedProps);break;case 5:$s(e,n,a);break;case 3:case 4:var l=vi;vi=Ko(e.stateNode.containerInfo),$s(e,n,a),vi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yl,yl=16777216,$s(e,n,a),yl=l):$s(e,n,a));break;default:$s(e,n,a)}}function Vm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];gn=l,km(l,e)}Vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:Sl(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Sl(e);break;case 12:Sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bo(e)):Sl(e);break;default:Sl(e)}}function Bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];gn=l,km(l,e)}Vm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Bo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bo(n));break;default:Bo(n)}e=e.sibling}}function km(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:al(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,gn=l;else e:for(a=e;gn!==null;){l=gn;var u=l.sibling,f=l.return;if(Om(l),l===a){gn=null;break e}if(u!==null){u.return=f,gn=u;break e}gn=f}}}var ny={getCacheForType:function(e){var n=Sn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Sn(rn).controller.signal}},iy=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Gt=null,yt=null,Mt=0,Ut=0,Qn=null,Ca=!1,er=!1,Tf=!1,Ki=0,Qt=0,wa=0,gs=0,Af=0,Jn=0,tr=0,Ml=null,Gn=null,Rf=!1,Io=0,Xm=0,Fo=1/0,Ho=null,La=null,hn=0,Da=null,nr=null,Qi=0,Cf=0,wf=null,Wm=null,El=0,Lf=null;function $n(){return(Lt&2)!==0&&Mt!==0?Mt&-Mt:I.T!==null?zf():Vr()}function qm(){if(Jn===0)if((Mt&536870912)===0||Tt){var e=V;V<<=1,(V&3932160)===0&&(V=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===Gt&&(Ut===2||Ut===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Ua(e,Mt,Jn,!1)),Ft(e,a),((Lt&2)===0||e!==Gt)&&(e===Gt&&((Lt&2)===0&&(gs|=a),Qt===4&&Ua(e,Mt,Jn,!1)),Ui(e))}function Ym(e,n,a){if((Lt&6)!==0)throw Error(s(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ye(e,n),u=l?ry(e,n):Uf(e,n,!0),f=l;do{if(u===0){er&&!l&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ay(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var A=e;u=Ml;var H=A.current.memoizedState.isDehydrated;if(H&&(ir(A,M).flags|=256),M=Uf(A,M,!1),M!==2){if(Tf&&!H){A.errorRecoveryDisabledLanes|=f,gs|=f,u=4;break e}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){ir(e,0),Ua(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(l,n,Jn,!Ca);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Io+300-ye(),10<u)){if(Ua(l,n,Jn,!Ca),et(l,0,!0)!==0)break e;Qi=n,l.timeoutHandle=Tg(Zm.bind(null,l,a,Gn,Ho,Rf,n,Jn,gs,tr,Ca,f,"Throttled",-0,0),u);break e}Zm(l,a,Gn,Ho,Rf,n,Jn,gs,tr,Ca,f,null,-0,0)}}break}while(!0);Ui(e)}function Zm(e,n,a,l,u,f,M,A,H,te,pe,ve,ne,fe){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Gm(n,f,ve);var He=(f&62914560)===f?Io-ye():(f&4194048)===f?Xm-ye():0;if(He=Vy(ve,He),He!==null){Qi=f,e.cancelPendingCommit=He(ig.bind(null,e,n,f,a,l,u,M,A,H,pe,ve,null,ne,fe)),Ua(e,f,M,!te);return}}ig(e,n,f,a,l,u,M,A,H)}function ay(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,l){n&=~Af,n&=~gs,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-B(u),M=1<<f;l[f]=-1,u&=~M}a!==0&&Yt(e,a,n)}function Go(){return(Lt&6)===0?(bl(0),!1):!0}function Df(){if(yt!==null){if(Ut===0)var e=yt.return;else e=yt,Hi=ls=null,Wu(e),qs=null,rl=0,e=yt;for(;e!==null;)Am(e.alternate,e),e=e.return;yt=null}}function ir(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,by(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,Df(),Gt=e,yt=a=Ii(e.current,null),Mt=n,Ut=0,Qn=null,Ca=!1,er=Ye(e,n),Tf=!1,tr=Jn=Af=gs=wa=Qt=0,Gn=Ml=null,Rf=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-B(l),f=1<<u;n|=e[u],l&=~f}return Ki=n,lo(),a}function Km(e,n){ft=null,I.H=pl,n===Ws||n===go?(n=hp(),Ut=3):n===Ou?(n=hp(),Ut=4):Ut=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,yt===null&&(Qt=1,Lo(e,si(n,e.current)))}function Qm(){var e=Zn.current;return e===null?!0:(Mt&4194048)===Mt?ci===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?e===ci:!1}function Jm(){var e=I.H;return I.H=pl,e===null?pl:e}function $m(){var e=I.A;return I.A=ny,e}function Vo(){Qt=4,Ca||(Mt&4194048)!==Mt&&Zn.current!==null||(er=!0),(wa&134217727)===0&&(gs&134217727)===0||Gt===null||Ua(Gt,Mt,Jn,!1)}function Uf(e,n,a){var l=Lt;Lt|=2;var u=Jm(),f=$m();(Gt!==e||Mt!==n)&&(Ho=null,ir(e,n)),n=!1;var M=Qt;e:do try{if(Ut!==0&&yt!==null){var A=yt,H=Qn;switch(Ut){case 8:Df(),M=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var te=Ut;if(Ut=0,Qn=null,ar(e,A,H,te),a&&er){M=0;break e}break;default:te=Ut,Ut=0,Qn=null,ar(e,A,H,te)}}sy(),M=Qt;break}catch(pe){Km(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Hi=ls=null,Lt=l,I.H=u,I.A=f,yt===null&&(Gt=null,Mt=0,lo()),M}function sy(){for(;yt!==null;)eg(yt)}function ry(e,n){var a=Lt;Lt|=2;var l=Jm(),u=$m();Gt!==e||Mt!==n?(Ho=null,Fo=ye()+500,ir(e,n)):er=Ye(e,n);e:do try{if(Ut!==0&&yt!==null){n=yt;var f=Qn;t:switch(Ut){case 1:Ut=0,Qn=null,ar(e,n,f,1);break;case 2:case 9:if(up(f)){Ut=0,Qn=null,tg(n);break}n=function(){Ut!==2&&Ut!==9||Gt!==e||(Ut=7),Ui(e)},f.then(n,n);break e;case 3:Ut=7;break e;case 4:Ut=5;break e;case 7:up(f)?(Ut=0,Qn=null,tg(n)):(Ut=0,Qn=null,ar(e,n,f,7));break;case 5:var M=null;switch(yt.tag){case 26:M=yt.memoizedState;case 5:case 27:var A=yt;if(M?Hg(M):A.stateNode.complete){Ut=0,Qn=null;var H=A.sibling;if(H!==null)yt=H;else{var te=A.return;te!==null?(yt=te,jo(te)):yt=null}break t}}Ut=0,Qn=null,ar(e,n,f,5);break;case 6:Ut=0,Qn=null,ar(e,n,f,6);break;case 8:Df(),Qt=6;break e;default:throw Error(s(462))}}ly();break}catch(pe){Km(e,pe)}while(!0);return Hi=ls=null,I.H=l,I.A=u,Lt=a,yt!==null?0:(Gt=null,Mt=0,lo(),Qt)}function ly(){for(;yt!==null&&!Te();)eg(yt)}function eg(e){var n=bm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?jo(e):yt=n}function tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Wu(n);default:Am(a,n),n=yt=$d(n,Ki),n=bm(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?jo(e):yt=n}function ar(e,n,a,l){Hi=ls=null,Wu(n),qs=null,rl=0;var u=n.return;try{if(Zx(e,u,n,a,Mt)){Qt=1,Lo(e,si(a,e.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;Qt=1,Lo(e,si(a,e.current)),yt=null;return}n.flags&32768?(Tt||l===1?e=!0:er||(Mt&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=Zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),ng(n,e)):jo(n)}function jo(e){var n=e;do{if((n.flags&32768)!==0){ng(n,Ca);return}e=n.return;var a=Jx(n.alternate,n,Ki);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=e}while(n!==null);Qt===0&&(Qt=5)}function ng(e,n){do{var a=$x(e.alternate,e);if(a!==null){a.flags&=32767,yt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){yt=e;return}yt=e=a}while(e!==null);Qt=6,yt=null}function ig(e,n,a,l,u,f,M,A,H){e.cancelPendingCommit=null;do ko();while(hn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=xu,At(e,a,f,M,A,H),e===Gt&&(yt=Gt=null,Mt=0),nr=n,Da=e,Qi=a,Cf=f,wf=u,Wm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fy(Ke,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,u=q.p,q.p=2,M=Lt,Lt|=4;try{ey(e,n,a)}finally{Lt=M,q.p=u,I.T=l}}hn=1,ag(),sg(),rg()}}function ag(){if(hn===1){hn=0;var e=Da,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var l=q.p;q.p=2;var u=Lt;Lt|=4;try{Im(n,e);var f=kf,M=kd(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&jd(A.ownerDocument.documentElement,A)){if(H!==null&&pu(A)){var te=H.start,pe=H.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var ve=A.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var fe=ne.getSelection(),He=A.textContent.length,it=Math.min(H.start,He),zt=H.end===void 0?it:Math.min(H.end,He);!fe.extend&&it>zt&&(M=zt,zt=it,it=M);var Y=Vd(A,it),j=Vd(A,zt);if(Y&&j&&(fe.rangeCount!==1||fe.anchorNode!==Y.node||fe.anchorOffset!==Y.offset||fe.focusNode!==j.node||fe.focusOffset!==j.offset)){var J=ve.createRange();J.setStart(Y.node,Y.offset),fe.removeAllRanges(),it>zt?(fe.addRange(J),fe.extend(j.node,j.offset)):(J.setEnd(j.node,j.offset),fe.addRange(J))}}}}for(ve=[],fe=A;fe=fe.parentNode;)fe.nodeType===1&&ve.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var me=ve[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}nc=!!jf,kf=jf=null}finally{Lt=u,q.p=l,I.T=a}}e.current=n,hn=2}}function sg(){if(hn===2){hn=0;var e=Da,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var l=q.p;q.p=2;var u=Lt;Lt|=4;try{Nm(e,n.alternate,n)}finally{Lt=u,q.p=l,I.T=a}}hn=3}}function rg(){if(hn===4||hn===3){hn=0,be();var e=Da,n=nr,a=Qi,l=Wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,nr=Da=null,lg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(La=null),ha(a),n=n.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=I.T,u=q.p,q.p=2,I.T=null;try{for(var f=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];f(A.value,{componentStack:A.stack})}}finally{I.T=n,q.p=u}}(Qi&3)!==0&&ko(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Lf?El++:(El=0,Lf=e):El=0,bl(0)}}function lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,al(n)))}function ko(){return ag(),sg(),rg(),og()}function og(){if(hn!==5)return!1;var e=Da,n=Cf;Cf=0;var a=ha(Qi),l=I.T,u=q.p;try{q.p=32>a?32:a,I.T=null,a=wf,wf=null;var f=Da,M=Qi;if(hn=0,nr=Da=null,Qi=0,(Lt&6)!==0)throw Error(s(331));var A=Lt;if(Lt|=4,jm(f.current),Hm(f,f.current,M,a),Lt=A,bl(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(nt,f)}catch{}return!0}finally{q.p=u,I.T=l,lg(e,n)}}function cg(e,n,a){n=si(a,n),n=of(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(Ft(e,2),Ui(e))}function Nt(e,n,a){if(e.tag===3)cg(e,e,a);else for(;n!==null;){if(n.tag===3){cg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(La===null||!La.has(l))){e=si(a,e),a=um(2),l=ba(n,a,2),l!==null&&(fm(a,l,n,e),Ft(l,2),Ui(l));break}}n=n.return}}function Nf(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new iy;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(Tf=!0,u.add(a),e=oy.bind(null,e,n,a),n.then(e,e))}function oy(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Gt===e&&(Mt&a)===a&&(Qt===4||Qt===3&&(Mt&62914560)===Mt&&300>ye()-Io?(Lt&2)===0&&ir(e,0):Af|=a,tr===Mt&&(tr=0)),Ui(e)}function ug(e,n){n===0&&(n=_t()),e=as(e,n),e!==null&&(Ft(e,n),Ui(e))}function cy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ug(e,a)}function uy(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),ug(e,a)}function fy(e,n){return C(e,n)}var Xo=null,sr=null,Of=!1,Wo=!1,Pf=!1,Na=0;function Ui(e){e!==sr&&e.next===null&&(sr===null?Xo=sr=e:sr=sr.next=e),Wo=!0,Of||(Of=!0,dy())}function bl(e,n){if(!Pf&&Wo){Pf=!0;do for(var a=!1,l=Xo;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var M=l.suspendedLanes,A=l.pingedLanes;f=(1<<31-B(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pg(l,f))}else f=Mt,f=et(l,l===Gt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Ye(l,f)||(a=!0,pg(l,f));l=l.next}while(a);Pf=!1}}function hy(){fg()}function fg(){Wo=Of=!1;var e=0;Na!==0&&Ey()&&(e=Na);for(var n=ye(),a=null,l=Xo;l!==null;){var u=l.next,f=hg(l,n);f===0?(l.next=null,a===null?Xo=u:a.next=u,u===null&&(sr=a)):(a=l,(e!==0||(f&3)!==0)&&(Wo=!0)),l=u}hn!==0&&hn!==5||bl(e),Na!==0&&(Na=0)}function hg(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-B(f),A=1<<M,H=u[M];H===-1?((A&a)===0||(A&l)!==0)&&(u[M]=vt(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=Gt,a=Mt,a=et(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(Ut===2||Ut===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ie(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ye(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&ie(l),ha(a)){case 2:case 8:a=Be;break;case 32:a=Ke;break;case 268435456:a=Me;break;default:a=Ke}return l=dg.bind(null,e),a=C(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&ie(l),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ko()&&e.callbackNode!==a)return null;var l=Mt;return l=et(e,e===Gt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ym(e,l,n),hg(e,ye()),e.callbackNode!=null&&e.callbackNode===a?dg.bind(null,e):null)}function pg(e,n){if(ko())return null;Ym(e,n,!0)}function dy(){Ty(function(){(Lt&6)!==0?C(Ne,hy):fg()})}function zf(){if(Na===0){var e=ks;e===0&&(e=Se,Se<<=1,(Se&261888)===0&&(Se=256)),Na=e}return Na}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(""+e)}function gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function py(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[An]||null).action),M=l.submitter;M&&(n=(n=M[An]||null)?mg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new io("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Na!==0){var H=M?gg(u,M):new FormData(u);tf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=M?gg(u,M):new FormData(u),tf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Bf=0;Bf<vu.length;Bf++){var If=vu[Bf],my=If.toLowerCase(),gy=If[0].toUpperCase()+If.slice(1);_i(my,"on"+gy)}_i(qd,"onAnimationEnd"),_i(Yd,"onAnimationIteration"),_i(Zd,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Ux,"onTransitionRun"),_i(Nx,"onTransitionStart"),_i(Ox,"onTransitionCancel"),_i(Kd,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var M=l.length-1;0<=M;M--){var A=l[M],H=A.instance,te=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){ro(pe)}u.currentTarget=null,f=H}else for(M=0;M<l.length;M++){if(A=l[M],H=A.instance,te=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){ro(pe)}u.currentTarget=null,f=H}}}}function St(e,n){var a=n[jr];a===void 0&&(a=n[jr]=new Set);var l=e+"__bubble";a.has(l)||(vg(n,e,2,!1),a.add(l))}function Ff(e,n,a){var l=0;n&&(l|=4),vg(a,e,l,n)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[qo]){e[qo]=!0,st.forEach(function(a){a!=="selectionchange"&&(_y.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qo]||(n[qo]=!0,Ff("selectionchange",!1,n))}}function vg(e,n,a,l){switch(qg(n)){case 2:var u=Xy;break;case 8:u=Wy;break;default:u=th}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gf(e,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=l.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Pe(A),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){l=f=M;continue e}A=A.parentNode}}l=l.return}Ed(function(){var te=f,pe=iu(a),ve=[];e:{var ne=Qd.get(e);if(ne!==void 0){var fe=io,He=e;switch(e){case"keypress":if(to(a)===0)break e;case"keydown":case"keyup":fe=ux;break;case"focusin":He="focus",fe=cu;break;case"focusout":He="blur",fe=cu;break;case"beforeblur":case"afterblur":fe=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=dx;break;case qd:case Yd:case Zd:fe=tx;break;case Kd:fe=mx;break;case"scroll":case"scrollend":fe=K0;break;case"wheel":fe=_x;break;case"copy":case"cut":case"paste":fe=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Cd;break;case"toggle":case"beforetoggle":fe=xx}var it=(n&4)!==0,zt=!it&&(e==="scroll"||e==="scrollend"),Y=it?ne!==null?ne+"Capture":null:ne;it=[];for(var j=te,J;j!==null;){var me=j;if(J=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||J===null||Y===null||(me=qr(j,Y),me!=null&&it.push(Al(j,me,J))),zt)break;j=j.return}0<it.length&&(ne=new fe(ne,He,null,a,pe),ve.push({event:ne,listeners:it}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ne&&a!==nu&&(He=a.relatedTarget||a.fromElement)&&(Pe(He)||He[da]))break e;if((fe||ne)&&(ne=pe.window===pe?pe:(ne=pe.ownerDocument)?ne.defaultView||ne.parentWindow:window,fe?(He=a.relatedTarget||a.toElement,fe=te,He=He?Pe(He):null,He!==null&&(zt=c(He),it=He.tag,He!==zt||it!==5&&it!==27&&it!==6)&&(He=null)):(fe=null,He=te),fe!==He)){if(it=Ad,me="onMouseLeave",Y="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(it=Cd,me="onPointerLeave",Y="onPointerEnter",j="pointer"),zt=fe==null?ne:$e(fe),J=He==null?ne:$e(He),ne=new it(me,j+"leave",fe,a,pe),ne.target=zt,ne.relatedTarget=J,me=null,Pe(pe)===te&&(it=new it(Y,j+"enter",He,a,pe),it.target=J,it.relatedTarget=zt,me=it),zt=me,fe&&He)t:{for(it=vy,Y=fe,j=He,J=0,me=Y;me;me=it(me))J++;me=0;for(var Je=j;Je;Je=it(Je))me++;for(;0<J-me;)Y=it(Y),J--;for(;0<me-J;)j=it(j),me--;for(;J--;){if(Y===j||j!==null&&Y===j.alternate){it=Y;break t}Y=it(Y),j=it(j)}it=null}else it=null;fe!==null&&xg(ve,ne,fe,it,!1),He!==null&&zt!==null&&xg(ve,zt,He,it,!0)}}e:{if(ne=te?$e(te):window,fe=ne.nodeName&&ne.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ne.type==="file")var Ct=zd;else if(Od(ne))if(Bd)Ct=wx;else{Ct=Rx;var je=Ax}else fe=ne.nodeName,!fe||fe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?te&&tu(te.elementType)&&(Ct=zd):Ct=Cx;if(Ct&&(Ct=Ct(e,te))){Pd(ve,Ct,a,pe);break e}je&&je(e,ne,te),e==="focusout"&&te&&ne.type==="number"&&te.memoizedProps.value!=null&&eu(ne,"number",ne.value)}switch(je=te?$e(te):window,e){case"focusin":(Od(je)||je.contentEditable==="true")&&(zs=je,mu=te,tl=null);break;case"focusout":tl=mu=zs=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Xd(ve,a,pe);break;case"selectionchange":if(Dx)break;case"keydown":case"keyup":Xd(ve,a,pe)}var pt;if(fu)e:{switch(e){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Ps?Ud(e,a)&&(Et="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(wd&&a.locale!=="ko"&&(Ps||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Ps&&(pt=bd()):(_a=pe,ru="value"in _a?_a.value:_a.textContent,Ps=!0)),je=Yo(te,Et),0<je.length&&(Et=new Rd(Et,e,null,a,pe),ve.push({event:Et,listeners:je}),pt?Et.data=pt:(pt=Nd(a),pt!==null&&(Et.data=pt)))),(pt=Sx?Mx(e,a):Ex(e,a))&&(Et=Yo(te,"onBeforeInput"),0<Et.length&&(je=new Rd("onBeforeInput","beforeinput",null,a,pe),ve.push({event:je,listeners:Et}),je.data=pt)),py(ve,e,te,a,pe)}_g(ve,n)})}function Al(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yo(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qr(e,a),u!=null&&l.unshift(Al(e,u,f)),u=qr(e,n),u!=null&&l.push(Al(e,u,f))),e.tag===3)return l;e=e.return}return[]}function vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,n,a,l,u){for(var f=n._reactName,M=[];a!==null&&a!==l;){var A=a,H=A.alternate,te=A.stateNode;if(A=A.tag,H!==null&&H===l)break;A!==5&&A!==26&&A!==27||te===null||(H=te,u?(te=qr(a,f),te!=null&&M.unshift(Al(a,te,H))):u||(te=qr(a,f),te!=null&&M.push(Al(a,te,H)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var xy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(yy,"")}function Sg(e,n){return n=yg(n),yg(e)===n}function Pt(e,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Us(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Us(e,""+l);break;case"className":Ht(e,"class",l);break;case"tabIndex":Ht(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(e,a,l);break;case"style":Sd(e,l,f);break;case"data":if(n!=="object"){Ht(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$l(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pt(e,n,"name",u.name,u,null),Pt(e,n,"formEncType",u.formEncType,u,null),Pt(e,n,"formMethod",u.formMethod,u,null),Pt(e,n,"formTarget",u.formTarget,u,null)):(Pt(e,n,"encType",u.encType,u,null),Pt(e,n,"method",u.method,u,null),Pt(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$l(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=zi);break;case"onScroll":l!=null&&St("scroll",e);break;case"onScrollEnd":l!=null&&St("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=$l(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":St("beforetoggle",e),St("toggle",e),pa(e,"popover",l);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Y0.get(a)||a,pa(e,a,l))}}function Vf(e,n,a,l,u,f){switch(a){case"style":Sd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Us(e,l):(typeof l=="number"||typeof l=="bigint")&&Us(e,""+l);break;case"onScroll":l!=null&&St("scroll",e);break;case"onScrollEnd":l!=null&&St("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):pa(e,a,l)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",e),St("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pt(e,n,f,M,a,null)}}u&&Pt(e,n,"srcSet",a.srcSet,a,null),l&&Pt(e,n,"src",a.src,a,null);return;case"input":St("invalid",e);var A=f=M=u=null,H=null,te=null;for(l in a)if(a.hasOwnProperty(l)){var pe=a[l];if(pe!=null)switch(l){case"name":u=pe;break;case"type":M=pe;break;case"checked":H=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Pt(e,n,l,pe,a,null)}}Wr(e,f,A,H,te,M,u,!1);return;case"select":St("invalid",e),l=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Pt(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!l,n!=null?Ds(e,!!l,n,!1):a!=null&&Ds(e,!!l,a,!0);return;case"textarea":St("invalid",e),f=u=l=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Pt(e,n,M,A,a,null)}xd(e,l,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(l=a[H],l!=null)&&(H==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Pt(e,n,H,l,a,null));return;case"dialog":St("beforetoggle",e),St("toggle",e),St("cancel",e),St("close",e);break;case"iframe":case"object":St("load",e);break;case"video":case"audio":for(l=0;l<Tl.length;l++)St(Tl[l],e);break;case"image":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"embed":case"source":case"link":St("error",e),St("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(l=a[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pt(e,n,te,l,a,null)}return;default:if(tu(n)){for(pe in a)a.hasOwnProperty(pe)&&(l=a[pe],l!==void 0&&Vf(e,n,pe,l,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!=null&&Pt(e,n,A,l,a,null))}function Sy(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,H=null,te=null,pe=null;for(fe in a){var ve=a[fe];if(a.hasOwnProperty(fe)&&ve!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=ve;default:l.hasOwnProperty(fe)||Pt(e,n,fe,null,l,ve)}}for(var ne in l){var fe=l[ne];if(ve=a[ne],l.hasOwnProperty(ne)&&(fe!=null||ve!=null))switch(ne){case"type":f=fe;break;case"name":u=fe;break;case"checked":te=fe;break;case"defaultChecked":pe=fe;break;case"value":M=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==ve&&Pt(e,n,ne,fe,l,ve)}}Xr(e,M,A,H,te,pe,f,u);return;case"select":fe=M=A=ne=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:l.hasOwnProperty(f)||Pt(e,n,f,null,l,H)}for(u in l)if(f=l[u],H=a[u],l.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ne=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==H&&Pt(e,n,u,f,l,H)}n=A,a=M,l=fe,ne!=null?Ds(e,!!a,ne,!1):!!l!=!!a&&(n!=null?Ds(e,!!a,n,!0):Ds(e,!!a,a?[]:"",!1));return;case"textarea":fe=ne=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pt(e,n,A,null,l,u)}for(M in l)if(u=l[M],f=a[M],l.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":ne=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Pt(e,n,M,u,l,f)}vd(e,ne,fe);return;case"option":for(var He in a)ne=a[He],a.hasOwnProperty(He)&&ne!=null&&!l.hasOwnProperty(He)&&(He==="selected"?e.selected=!1:Pt(e,n,He,null,l,ne));for(H in l)ne=l[H],fe=a[H],l.hasOwnProperty(H)&&ne!==fe&&(ne!=null||fe!=null)&&(H==="selected"?e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol":Pt(e,n,H,ne,l,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)ne=a[it],a.hasOwnProperty(it)&&ne!=null&&!l.hasOwnProperty(it)&&Pt(e,n,it,null,l,ne);for(te in l)if(ne=l[te],fe=a[te],l.hasOwnProperty(te)&&ne!==fe&&(ne!=null||fe!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Pt(e,n,te,ne,l,fe)}return;default:if(tu(n)){for(var zt in a)ne=a[zt],a.hasOwnProperty(zt)&&ne!==void 0&&!l.hasOwnProperty(zt)&&Vf(e,n,zt,void 0,l,ne);for(pe in l)ne=l[pe],fe=a[pe],!l.hasOwnProperty(pe)||ne===fe||ne===void 0&&fe===void 0||Vf(e,n,pe,ne,l,fe);return}}for(var Y in a)ne=a[Y],a.hasOwnProperty(Y)&&ne!=null&&!l.hasOwnProperty(Y)&&Pt(e,n,Y,null,l,ne);for(ve in l)ne=l[ve],fe=a[ve],!l.hasOwnProperty(ve)||ne===fe||ne==null&&fe==null||Pt(e,n,ve,ne,l,fe)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function My(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,M=u.initiatorType,A=u.duration;if(f&&A&&Mg(M)){for(M=0,A=u.responseEnd,l+=1;l<a.length;l++){var H=a[l],te=H.startTime;if(te>A)break;var pe=H.transferSize,ve=H.initiatorType;pe&&Mg(ve)&&(H=H.responseEnd,M+=pe*(H<A?1:(A-te)/(H-te)))}if(--l,n+=8*(f+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,kf=null;function Zo(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function Ey(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(Ay)}:Tg;function Ay(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Rg(e,n){var a=n,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),cr(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Rl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rl(a);for(var f=a.firstChild;f;){var M=f.nextSibling,A=f.nodeName;f[ue]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=M}}else a==="body"&&Rl(e.ownerDocument.body);a=u}while(a);cr(n)}function Cg(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),le(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ry(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ue])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Cy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$?"||e.data==="$~"}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function Lg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=Zo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Rl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);le(e)}var fi=new Map,Ng=new Set;function Ko(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=q.d;q.d={f:Ly,r:Dy,D:Uy,C:Ny,L:Oy,m:Py,X:By,S:zy,M:Iy};function Ly(){var e=Ji.f(),n=Go();return e||n}function Dy(e){var n=Ve(e);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Ji.r(e)}var rr=typeof document>"u"?null:document;function Og(e,n,a){var l=rr;if(l&&typeof n=="string"&&n){var u=Rn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ng.has(u)||(Ng.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),En(n,"link",e),Ze(n),l.head.appendChild(n)))}}function Uy(e){Ji.D(e),Og("dns-prefetch",e,null)}function Ny(e,n){Ji.C(e,n),Og("preconnect",e,n)}function Oy(e,n,a){Ji.L(e,n,a);var l=rr;if(l&&e&&n){var u='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Rn(a.imageSizes)+'"]')):u+='[href="'+Rn(e)+'"]';var f=u;switch(n){case"style":f=lr(e);break;case"script":f=or(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Cl(f))||n==="script"&&l.querySelector(wl(f))||(n=l.createElement("link"),En(n,"link",e),Ze(n),l.head.appendChild(n)))}}function Py(e,n){Ji.m(e,n);var a=rr;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Rn(l)+'"][href="'+Rn(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wl(f)))return}l=a.createElement("link"),En(l,"link",e),Ze(l),a.head.appendChild(l)}}}function zy(e,n,a){Ji.S(e,n,a);var l=rr;if(l&&e){var u=tt(l).hoistableStyles,f=lr(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(Cl(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Qf(e,a);var H=M=l.createElement("link");Ze(H),En(H,"link",e),H._p=new Promise(function(te,pe){H.onload=te,H.onerror=pe}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Qo(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function By(e,n){Ji.X(e,n);var a=rr;if(a&&e){var l=tt(a).hoistableScripts,u=or(e),f=l.get(u);f||(f=a.querySelector(wl(u)),f||(e=_({src:e,async:!0},n),(n=fi.get(u))&&Jf(e,n),f=a.createElement("script"),Ze(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function Iy(e,n){Ji.M(e,n);var a=rr;if(a&&e){var l=tt(a).hoistableScripts,u=or(e),f=l.get(u);f||(f=a.querySelector(wl(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&Jf(e,n),f=a.createElement("script"),Ze(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function Pg(e,n,a,l){var u=(u=Ee.current)?Ko(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=tt(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var f=tt(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Cl(e)))&&!f._p&&(M.instance=f,M.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Fy(u,e,a,M.state))),n&&l===null)throw Error(s(528,""));return M}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=tt(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function lr(e){return'href="'+Rn(e)+'"'}function Cl(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Fy(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),En(n,"link",a),Ze(n),e.head.appendChild(n))}function or(e){return'[src="'+Rn(e)+'"]'}function wl(e){return"script[async]"+e}function Bg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(l)return n.instance=l,Ze(l),l;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),En(l,"style",u),Qo(l,a.precedence,e),n.instance=l;case"stylesheet":u=lr(a.href);var f=e.querySelector(Cl(u));if(f)return n.state.loading|=4,n.instance=f,Ze(f),f;l=zg(a),(u=fi.get(u))&&Qf(l,u),f=(e.ownerDocument||e).createElement("link"),Ze(f);var M=f;return M._p=new Promise(function(A,H){M.onload=A,M.onerror=H}),En(f,"link",l),n.state.loading|=4,Qo(f,a.precedence,e),n.instance=f;case"script":return f=or(a.src),(u=e.querySelector(wl(f)))?(n.instance=u,Ze(u),u):(l=a,(u=fi.get(f))&&(l=_({},a),Jf(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ze(u),En(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Qo(l,a.precedence,e));return n.instance}function Qo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jo=null;function Ig(e,n,a){if(Jo===null){var l=new Map,u=Jo=new Map;u.set(a,l)}else u=Jo,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ue]||f[tn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=l.get(M);A?A.push(f):l.set(M,[f])}}return l}function Fg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Hy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gy(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=lr(l.href),f=n.querySelector(Cl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$o.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ze(f);return}f=n.ownerDocument||n,l=zg(l),(u=fi.get(u))&&Qf(l,u),f=f.createElement("link"),Ze(f);var M=f;M._p=new Promise(function(A,H){M.onload=A,M.onerror=H}),En(f,"link",l),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$o.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function Vy(e,n){return e.stylesheets&&e.count===0&&tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$f===0&&($f=62500*My());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$f?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function $o(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(jy,e),ec=null,$o.call(e))}function jy(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var l=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),l=M)}l&&a.set(null,l)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||l,f===l&&a.set(null,u),a.set(M,u),this.count++,l=$o.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ll={$$typeof:R,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function ky(e,n,a,l,u,f,M,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Gg(e,n,a,l,u,f,M,A,H,te,pe,ve){return e=new ky(e,n,a,M,H,te,pe,ve,A),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Pu(f),e}function Vg(e){return e?(e=Fs,e):Fs}function jg(e,n,a,l,u,f){u=Vg(u),l.context===null?l.context=u:l.pendingContext=u,l=Ea(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=ba(e,l,n),a!==null&&(Vn(a,e,n),ol(a,e,n))}function kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function eh(e,n){kg(e,n),(e=e.alternate)&&kg(e,n)}function Xg(e){if(e.tag===13||e.tag===31){var n=as(e,67108864);n!==null&&Vn(n,e,67108864),eh(e,67108864)}}function Wg(e){if(e.tag===13||e.tag===31){var n=$n();n=Gr(n);var a=as(e,n);a!==null&&Vn(a,e,n),eh(e,n)}}var nc=!0;function Xy(e,n,a,l){var u=I.T;I.T=null;var f=q.p;try{q.p=2,th(e,n,a,l)}finally{q.p=f,I.T=u}}function Wy(e,n,a,l){var u=I.T;I.T=null;var f=q.p;try{q.p=8,th(e,n,a,l)}finally{q.p=f,I.T=u}}function th(e,n,a,l){if(nc){var u=nh(l);if(u===null)Gf(e,n,l,ic,a),Yg(e,l);else if(Yy(u,e,n,a,l))l.stopPropagation();else if(Yg(e,l),n&4&&-1<qy.indexOf(e)){for(;u!==null;){var f=Ve(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=we(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var H=1<<31-B(M);A.entanglements[1]|=H,M&=~H}Ui(f),(Lt&6)===0&&(Fo=ye()+500,bl(0))}}break;case 31:case 13:A=as(f,2),A!==null&&Vn(A,f,2),Go(),eh(f,2)}if(f=nh(l),f===null&&Gf(e,n,l,ic,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else Gf(e,n,l,null,a)}}function nh(e){return e=iu(e),ih(e)}var ic=null;function ih(e){if(ic=null,e=Pe(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Ne:return 2;case Be:return 8;case Ke:case ct:return 32;case Me:return 268435456;default:return 32}default:return 32}}var ah=!1,Pa=null,za=null,Ba=null,Dl=new Map,Ul=new Map,Ia=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Dl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(n.pointerId)}}function Nl(e,n,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ve(n),n!==null&&Xg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Yy(e,n,a,l,u){switch(n){case"focusin":return Pa=Nl(Pa,e,n,a,l,u),!0;case"dragenter":return za=Nl(za,e,n,a,l,u),!0;case"mouseover":return Ba=Nl(Ba,e,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return Dl.set(f,Nl(Dl.get(f)||null,e,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Ul.set(f,Nl(Ul.get(f)||null,e,n,a,l,u)),!0}return!1}function Zg(e){var n=Pe(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,es(e.priority,function(){Wg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,es(e.priority,function(){Wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);nu=l,a.target.dispatchEvent(l),nu=null}else return n=Ve(a),n!==null&&Xg(n),e.blockedOn=a,!1;n.shift()}return!0}function Kg(e,n,a){ac(e)&&a.delete(n)}function Zy(){ah=!1,Pa!==null&&ac(Pa)&&(Pa=null),za!==null&&ac(za)&&(za=null),Ba!==null&&ac(Ba)&&(Ba=null),Dl.forEach(Kg),Ul.forEach(Kg)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Zy)))}var rc=null;function Qg(e){rc!==e&&(rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(ih(l||a)===null)continue;break}var f=Ve(a);f!==null&&(e.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function cr(e){function n(H){return sc(H,e)}Pa!==null&&sc(Pa,e),za!==null&&sc(za,e),Ba!==null&&sc(Ba,e),Dl.forEach(n),Ul.forEach(n);for(var a=0;a<Ia.length;a++){var l=Ia[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&Ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],M=u[An]||null;if(typeof f=="function")M||Qg(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[An]||null)A=M.formAction;else if(ih(u)!==null)continue}else A=M.action;typeof A=="function"?a[l+1]=A:(a.splice(l,3),l-=3),Qg(a)}}}function Jg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sh(e){this._internalRoot=e}lc.prototype.render=sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,l=$n();jg(a,l,e,n,null,null)},lc.prototype.unmount=sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jg(e.current,2,null,e,null,null),Go(),n[da]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.3")throw Error(s(527,$g,"19.2.3"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ky={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{nt=oc.inject(Ky),ze=oc}catch{}}return Pl.createRoot=function(e,n){if(!o(e))throw Error(s(299));var a=!1,l="",u=rm,f=lm,M=om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=Gg(e,1,!1,null,null,a,l,null,u,f,M,Jg),e[da]=n.current,Hf(e),new sh(n)},Pl.hydrateRoot=function(e,n,a){if(!o(e))throw Error(s(299));var l=!1,u="",f=rm,M=lm,A=om,H=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Gg(e,1,!0,n,a??null,l,u,H,f,M,A,Jg),n.context=Vg(null),a=n.current,l=$n(),l=Gr(l),u=Ea(l),u.callback=null,ba(a,u,l),a=l,n.current.lanes=a,Ft(n,a),Ui(n),e[da]=n.current,Hf(e),new lc(n)},Pl.version="19.2.3",Pl}var c_;function rS(){if(c_)return oh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),oh.exports=sS(),oh.exports}var lS=rS();var u_="popstate";function oS(r={}){function t(s,o){let{pathname:c,search:d,hash:h}=s.location;return qh("",{pathname:c,search:d,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(s,o){return typeof o=="string"?o:Xl(o)}return uS(t,i,null,r)}function Zt(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Ai(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cS(){return Math.random().toString(36).substring(2,10)}function f_(r,t){return{usr:r.state,key:r.key,idx:t}}function qh(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?zr(t):t,state:i,key:t&&t.key||s||cS()}}function Xl({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function zr(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function uS(r,t,i,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,d=o.history,h="POP",p=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function _(){h="POP";let S=g(),v=S==null?null:S-m;m=S,p&&p({action:h,location:T.location,delta:v})}function y(S,v){h="PUSH";let D=qh(T.location,S,v);m=g()+1;let R=f_(D,m),z=T.createHref(D);try{d.pushState(R,"",z)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(z)}c&&p&&p({action:h,location:T.location,delta:1})}function E(S,v){h="REPLACE";let D=qh(T.location,S,v);m=g();let R=f_(D,m),z=T.createHref(D);d.replaceState(R,"",z),c&&p&&p({action:h,location:T.location,delta:0})}function b(S){return fS(S)}let T={get action(){return h},get location(){return r(o,d)},listen(S){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(u_,_),p=S,()=>{o.removeEventListener(u_,_),p=null}},createHref(S){return t(o,S)},createURL:b,encodeLocation(S){let v=b(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:y,replace:E,go(S){return d.go(S)}};return T}function fS(r,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Zt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Xl(r);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function qv(r,t,i="/"){return hS(r,t,i,!1)}function hS(r,t,i,s){let o=typeof t=="string"?zr(t):t,c=ca(o.pathname||"/",i);if(c==null)return null;let d=Yv(r);dS(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let m=bS(c);h=MS(d[p],m,s)}return h}function Yv(r,t=[],i=[],s="",o=!1){let c=(d,h,p=o,m)=>{let g={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&p)return;Zt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=oa([s,g.relativePath]),y=i.concat(g);d.children&&d.children.length>0&&(Zt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Yv(d.children,t,y,_,p)),!(d.path==null&&!d.index)&&t.push({path:_,score:yS(_,d.index),routesMeta:y})};return r.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))c(d,h);else for(let p of Zv(d.path))c(d,h,!0,p)}),t}function Zv(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let d=Zv(s.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...d),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function dS(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:SS(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var pS=/^:[\w-]+$/,mS=3,gS=2,_S=1,vS=10,xS=-2,h_=r=>r==="*";function yS(r,t){let i=r.split("/"),s=i.length;return i.some(h_)&&(s+=xS),t&&(s+=gS),i.filter(o=>!h_(o)).reduce((o,c)=>o+(pS.test(c)?mS:c===""?_S:vS),s)}function SS(r,t){return r.length===t.length&&r.slice(0,-1).every((s,o)=>s===t[o])?r[r.length-1]-t[t.length-1]:0}function MS(r,t,i=!1){let{routesMeta:s}=r,o={},c="/",d=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=Fc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!_&&m&&i&&!s[s.length-1].route.index&&(_=Fc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),d.push({params:o,pathname:oa([c,_.pathname]),pathnameBase:wS(oa([c,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(c=oa([c,_.pathnameBase]))}return d}function Fc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=ES(r.path,r.caseSensitive,r.end),o=t.match(i);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:g,isOptional:_},y)=>{if(g==="*"){let b=h[y]||"";d=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=h[y];return _&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:r}}function ES(r,t=!1,i=!0){Ai(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),s]}function bS(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ai(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function ca(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var TS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AS=r=>TS.test(r);function RS(r,t="/"){let{pathname:i,search:s="",hash:o=""}=typeof r=="string"?zr(r):r,c;if(i)if(AS(i))c=i;else{if(i.includes("//")){let d=i;i=i.replace(/\/\/+/g,"/"),Ai(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${i}`)}i.startsWith("/")?c=d_(i.substring(1),"/"):c=d_(i,t)}else c=t;return{pathname:c,search:LS(s),hash:DS(o)}}function d_(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function hh(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function CS(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Kv(r){let t=CS(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function Qv(r,t,i,s=!1){let o;typeof r=="string"?o=zr(r):(o={...r},Zt(!o.pathname||!o.pathname.includes("?"),hh("?","pathname","search",o)),Zt(!o.pathname||!o.pathname.includes("#"),hh("#","pathname","hash",o)),Zt(!o.search||!o.search.includes("#"),hh("#","search","hash",o)));let c=r===""||o.pathname==="",d=c?"/":o.pathname,h;if(d==null)h=i;else{let _=t.length-1;if(!s&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),_-=1;o.pathname=y.join("/")}h=_>=0?t[_]:"/"}let p=RS(o,h),m=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var oa=r=>r.join("/").replace(/\/\/+/g,"/"),wS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),LS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,DS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function US(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function NS(r){return r.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jv=["POST","PUT","PATCH","DELETE"];new Set(Jv);var OS=["GET",...Jv];new Set(OS);var Br=_e.createContext(null);Br.displayName="DataRouter";var Wc=_e.createContext(null);Wc.displayName="DataRouterState";_e.createContext(!1);var $v=_e.createContext({isTransitioning:!1});$v.displayName="ViewTransition";var PS=_e.createContext(new Map);PS.displayName="Fetchers";var zS=_e.createContext(null);zS.displayName="Await";var Ri=_e.createContext(null);Ri.displayName="Navigation";var Yl=_e.createContext(null);Yl.displayName="Location";var fa=_e.createContext({outlet:null,matches:[],isDataRoute:!1});fa.displayName="Route";var rd=_e.createContext(null);rd.displayName="RouteError";function BS(r,{relative:t}={}){Zt(Zl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=_e.useContext(Ri),{hash:o,pathname:c,search:d}=Kl(r,{relative:t}),h=c;return i!=="/"&&(h=c==="/"?i:oa([i,c])),s.createHref({pathname:h,search:d,hash:o})}function Zl(){return _e.useContext(Yl)!=null}function $a(){return Zt(Zl(),"useLocation() may be used only in the context of a <Router> component."),_e.useContext(Yl).location}var e0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function t0(r){_e.useContext(Ri).static||_e.useLayoutEffect(r)}function IS(){let{isDataRoute:r}=_e.useContext(fa);return r?QS():FS()}function FS(){Zt(Zl(),"useNavigate() may be used only in the context of a <Router> component.");let r=_e.useContext(Br),{basename:t,navigator:i}=_e.useContext(Ri),{matches:s}=_e.useContext(fa),{pathname:o}=$a(),c=JSON.stringify(Kv(s)),d=_e.useRef(!1);return t0(()=>{d.current=!0}),_e.useCallback((p,m={})=>{if(Ai(d.current,e0),!d.current)return;if(typeof p=="number"){i.go(p);return}let g=Qv(p,JSON.parse(c),o,m.relative==="path");r==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:oa([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,o,r])}_e.createContext(null);function Kl(r,{relative:t}={}){let{matches:i}=_e.useContext(fa),{pathname:s}=$a(),o=JSON.stringify(Kv(i));return _e.useMemo(()=>Qv(r,JSON.parse(o),s,t==="path"),[r,o,s,t])}function HS(r,t){return n0(r,t)}function n0(r,t,i,s,o){Zt(Zl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=_e.useContext(Ri),{matches:d}=_e.useContext(fa),h=d[d.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let D=_&&_.path||"";i0(m,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let y=$a(),E;if(t){let D=typeof t=="string"?zr(t):t;Zt(g==="/"||D.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),E=D}else E=y;let b=E.pathname||"/",T=b;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=qv(r,{pathname:T});Ai(_||S!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Ai(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=XS(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:oa([g,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:oa([g,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),d,i,s,o);return t&&v?_e.createElement(Yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},v):v}function GS(){let r=KS(),t=US(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=_e.createElement(_e.Fragment,null,_e.createElement("p",null,"💿 Hey developer 👋"),_e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_e.createElement("code",{style:c},"ErrorBoundary")," or"," ",_e.createElement("code",{style:c},"errorElement")," prop on your route.")),_e.createElement(_e.Fragment,null,_e.createElement("h2",null,"Unexpected Application Error!"),_e.createElement("h3",{style:{fontStyle:"italic"}},t),i?_e.createElement("pre",{style:o},i):null,d)}var VS=_e.createElement(GS,null),jS=class extends _e.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?_e.createElement(fa.Provider,{value:this.props.routeContext},_e.createElement(rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kS({routeContext:r,match:t,children:i}){let s=_e.useContext(Br);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),_e.createElement(fa.Provider,{value:r},i)}function XS(r,t=[],i=null,s=null,o=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,d=i?.errors;if(d!=null){let g=c.findIndex(_=>_.route.id&&d?.[_.route.id]!==void 0);Zt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,p=-1;if(i)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:y,errors:E}=i,b=_.route.loader&&!y.hasOwnProperty(_.route.id)&&(!E||E[_.route.id]===void 0);if(_.route.lazy||b){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let m=i&&s?(g,_)=>{s(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:NS(i.matches),errorInfo:_})}:void 0;return c.reduceRight((g,_,y)=>{let E,b=!1,T=null,S=null;i&&(E=d&&_.route.id?d[_.route.id]:void 0,T=_.route.errorElement||VS,h&&(p<0&&y===0?(i0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):p===y&&(b=!0,S=_.route.hydrateFallbackElement||null)));let v=t.concat(c.slice(0,y+1)),D=()=>{let R;return E?R=T:b?R=S:_.route.Component?R=_e.createElement(_.route.Component,null):_.route.element?R=_.route.element:R=g,_e.createElement(kS,{match:_,routeContext:{outlet:g,matches:v,isDataRoute:i!=null},children:R})};return i&&(_.route.ErrorBoundary||_.route.errorElement||y===0)?_e.createElement(jS,{location:i.location,revalidation:i.revalidation,component:T,error:E,children:D(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:m}):D()},null)}function ld(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function WS(r){let t=_e.useContext(Br);return Zt(t,ld(r)),t}function qS(r){let t=_e.useContext(Wc);return Zt(t,ld(r)),t}function YS(r){let t=_e.useContext(fa);return Zt(t,ld(r)),t}function od(r){let t=YS(r),i=t.matches[t.matches.length-1];return Zt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function ZS(){return od("useRouteId")}function KS(){let r=_e.useContext(rd),t=qS("useRouteError"),i=od("useRouteError");return r!==void 0?r:t.errors?.[i]}function QS(){let{router:r}=WS("useNavigate"),t=od("useNavigate"),i=_e.useRef(!1);return t0(()=>{i.current=!0}),_e.useCallback(async(o,c={})=>{Ai(i.current,e0),i.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:t,...c}))},[r,t])}var p_={};function i0(r,t,i){!t&&!p_[r]&&(p_[r]=!0,Ai(!1,i))}_e.memo(JS);function JS({routes:r,future:t,state:i,unstable_onError:s}){return n0(r,void 0,i,s,t)}function De(r){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $S({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:o,static:c=!1,unstable_useTransitions:d}){Zt(!Zl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=_e.useMemo(()=>({basename:h,navigator:o,static:c,unstable_useTransitions:d,future:{}}),[h,o,c,d]);typeof i=="string"&&(i=zr(i));let{pathname:m="/",search:g="",hash:_="",state:y=null,key:E="default"}=i,b=_e.useMemo(()=>{let T=ca(m,h);return T==null?null:{location:{pathname:T,search:g,hash:_,state:y,key:E},navigationType:s}},[h,m,g,_,y,E,s]);return Ai(b!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:_e.createElement(Ri.Provider,{value:p},_e.createElement(Yl.Provider,{children:t,value:b}))}function eM({children:r,location:t}){return HS(Yh(r),t)}function Yh(r,t=[]){let i=[];return _e.Children.forEach(r,(s,o)=>{if(!_e.isValidElement(s))return;let c=[...t,o];if(s.type===_e.Fragment){i.push.apply(i,Yh(s.props.children,c));return}Zt(s.type===De,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Yh(s.props.children,c)),i.push(d)}),i}var Pc="get",zc="application/x-www-form-urlencoded";function qc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function tM(r){return qc(r)&&r.tagName.toLowerCase()==="button"}function nM(r){return qc(r)&&r.tagName.toLowerCase()==="form"}function iM(r){return qc(r)&&r.tagName.toLowerCase()==="input"}function aM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function sM(r,t){return r.button===0&&(!t||t==="_self")&&!aM(r)}var cc=null;function rM(){if(cc===null)try{new FormData(document.createElement("form"),0),cc=!1}catch{cc=!0}return cc}var lM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dh(r){return r!=null&&!lM.has(r)?(Ai(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zc}"`),null):r}function oM(r,t){let i,s,o,c,d;if(nM(r)){let h=r.getAttribute("action");s=h?ca(h,t):null,i=r.getAttribute("method")||Pc,o=dh(r.getAttribute("enctype"))||zc,c=new FormData(r)}else if(tM(r)||iM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?ca(p,t):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||Pc,o=dh(r.getAttribute("formenctype"))||dh(h.getAttribute("enctype"))||zc,c=new FormData(h,r),!rM()){let{name:m,type:g,value:_}=r;if(g==="image"){let y=m?`${m}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else m&&c.append(m,_)}}else{if(qc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Pc,s=null,o=zc,d=r}return c&&o==="text/plain"&&(d=c,c=void 0),{action:s,method:i.toLowerCase(),encType:o,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cd(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function cM(r,t,i){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${i}`:t&&ca(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function uM(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function hM(r,t,i){let s=await Promise.all(r.map(async o=>{let c=t.routes[o.route.id];if(c){let d=await uM(c,i);return d.links?d.links():[]}return[]}));return gM(s.flat(1).filter(fM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function m_(r,t,i,s,o,c){let d=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return c==="assets"?t.filter((p,m)=>d(p,m)||h(p,m)):c==="data"?t.filter((p,m)=>{let g=s.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function dM(r,t,{includeHydrateFallback:i}={}){return pM(r.map(s=>{let o=t.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function pM(r){return[...new Set(r)]}function mM(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function gM(r,t){let i=new Set;return new Set(t),r.reduce((s,o)=>{let c=JSON.stringify(mM(o));return i.has(c)||(i.add(c),s.push({key:c,link:o})),s},[])}function a0(){let r=_e.useContext(Br);return cd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function _M(){let r=_e.useContext(Wc);return cd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ud=_e.createContext(void 0);ud.displayName="FrameworkContext";function s0(){let r=_e.useContext(ud);return cd(r,"You must render this element inside a <HydratedRouter> element"),r}function vM(r,t){let i=_e.useContext(ud),[s,o]=_e.useState(!1),[c,d]=_e.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:_}=t,y=_e.useRef(null);_e.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let T=v=>{v.forEach(D=>{d(D.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[r]),_e.useEffect(()=>{if(s){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[s]);let E=()=>{o(!0)},b=()=>{o(!1),d(!1)};return i?r!=="intent"?[c,y,{}]:[c,y,{onFocus:zl(h,E),onBlur:zl(p,b),onMouseEnter:zl(m,E),onMouseLeave:zl(g,b),onTouchStart:zl(_,E)}]:[!1,y,{}]}function zl(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function xM({page:r,...t}){let{router:i}=a0(),s=_e.useMemo(()=>qv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?_e.createElement(SM,{page:r,matches:s,...t}):null}function yM(r){let{manifest:t,routeModules:i}=s0(),[s,o]=_e.useState([]);return _e.useEffect(()=>{let c=!1;return hM(r,t,i).then(d=>{c||o(d)}),()=>{c=!0}},[r,t,i]),s}function SM({page:r,matches:t,...i}){let s=$a(),{manifest:o,routeModules:c}=s0(),{basename:d}=a0(),{loaderData:h,matches:p}=_M(),m=_e.useMemo(()=>m_(r,t,p,o,s,"data"),[r,t,p,o,s]),g=_e.useMemo(()=>m_(r,t,p,o,s,"assets"),[r,t,p,o,s]),_=_e.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let b=new Set,T=!1;if(t.forEach(v=>{let D=o.routes[v.route.id];!D||!D.hasLoader||(!m.some(R=>R.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||D.hasClientLoader?T=!0:b.add(v.route.id))}),b.size===0)return[];let S=cM(r,d,"data");return T&&b.size>0&&S.searchParams.set("_routes",t.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[d,h,s,o,m,t,r,c]),y=_e.useMemo(()=>dM(g,o),[g,o]),E=yM(g);return _e.createElement(_e.Fragment,null,_.map(b=>_e.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>_e.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:T})=>_e.createElement("link",{key:b,nonce:i.nonce,...T})))}function MM(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var r0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{r0&&(window.__reactRouterVersion="7.10.1")}catch{}function EM({basename:r,children:t,unstable_useTransitions:i,window:s}){let o=_e.useRef();o.current==null&&(o.current=oS({window:s,v5Compat:!0}));let c=o.current,[d,h]=_e.useState({action:c.action,location:c.location}),p=_e.useCallback(m=>{i===!1?h(m):_e.startTransition(()=>h(m))},[i]);return _e.useLayoutEffect(()=>c.listen(p),[c,p]),_e.createElement($S,{basename:r,children:t,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:i===!0})}var l0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vl=_e.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:o,reloadDocument:c,replace:d,state:h,target:p,to:m,preventScrollReset:g,viewTransition:_,...y},E){let{basename:b,unstable_useTransitions:T}=_e.useContext(Ri),S=typeof m=="string"&&l0.test(m),v,D=!1;if(typeof m=="string"&&S&&(v=m,r0))try{let O=new URL(window.location.href),ae=m.startsWith("//")?new URL(O.protocol+m):new URL(m),re=ca(ae.pathname,b);ae.origin===O.origin&&re!=null?m=re+ae.search+ae.hash:D=!0}catch{Ai(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=BS(m,{relative:o}),[z,k,F]=vM(s,y),P=RM(m,{replace:d,state:h,target:p,preventScrollReset:g,relative:o,viewTransition:_,unstable_useTransitions:T});function ce(O){t&&t(O),O.defaultPrevented||P(O)}let w=_e.createElement("a",{...y,...F,href:v||R,onClick:D||c?t:ce,ref:MM(E,k),target:p,"data-discover":!S&&i==="render"?"true":void 0});return z&&!S?_e.createElement(_e.Fragment,null,w,_e.createElement(xM,{page:R})):w});Vl.displayName="Link";var bM=_e.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:o=!1,style:c,to:d,viewTransition:h,children:p,...m},g){let _=Kl(d,{relative:m.relative}),y=$a(),E=_e.useContext(Wc),{navigator:b,basename:T}=_e.useContext(Ri),S=E!=null&&UM(_)&&h===!0,v=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,D=y.pathname,R=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(D=D.toLowerCase(),R=R?R.toLowerCase():null,v=v.toLowerCase()),R&&T&&(R=ca(R,T)||R);const z=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let k=D===v||!o&&D.startsWith(v)&&D.charAt(z)==="/",F=R!=null&&(R===v||!o&&R.startsWith(v)&&R.charAt(v.length)==="/"),P={isActive:k,isPending:F,isTransitioning:S},ce=k?t:void 0,w;typeof s=="function"?w=s(P):w=[s,k?"active":null,F?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let O=typeof c=="function"?c(P):c;return _e.createElement(Vl,{...m,"aria-current":ce,className:w,ref:g,style:O,to:d,viewTransition:h},typeof p=="function"?p(P):p)});bM.displayName="NavLink";var TM=_e.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:o,state:c,method:d=Pc,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:_,...y},E)=>{let{unstable_useTransitions:b}=_e.useContext(Ri),T=LM(),S=DM(h,{relative:m}),v=d.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&l0.test(h),R=z=>{if(p&&p(z),z.defaultPrevented)return;z.preventDefault();let k=z.nativeEvent.submitter,F=k?.getAttribute("formmethod")||d,P=()=>T(k||z.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:o,state:c,relative:m,preventScrollReset:g,viewTransition:_});b&&i!==!1?_e.startTransition(()=>P()):P()};return _e.createElement("form",{ref:E,method:v,action:S,onSubmit:s?p:R,...y,"data-discover":!D&&r==="render"?"true":void 0})});TM.displayName="Form";function AM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function o0(r){let t=_e.useContext(Br);return Zt(t,AM(r)),t}function RM(r,{target:t,replace:i,state:s,preventScrollReset:o,relative:c,viewTransition:d,unstable_useTransitions:h}={}){let p=IS(),m=$a(),g=Kl(r,{relative:c});return _e.useCallback(_=>{if(sM(_,t)){_.preventDefault();let y=i!==void 0?i:Xl(m)===Xl(g),E=()=>p(r,{replace:y,state:s,preventScrollReset:o,relative:c,viewTransition:d});h?_e.startTransition(()=>E()):E()}},[m,p,g,i,s,t,r,o,c,d,h])}var CM=0,wM=()=>`__${String(++CM)}__`;function LM(){let{router:r}=o0("useSubmit"),{basename:t}=_e.useContext(Ri),i=ZS(),s=r.fetch,o=r.navigate;return _e.useCallback(async(c,d={})=>{let{action:h,method:p,encType:m,formData:g,body:_}=oM(c,t);if(d.navigate===!1){let y=d.fetcherKey||wM();await s(y,i,d.action||h,{preventScrollReset:d.preventScrollReset,formData:g,body:_,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await o(d.action||h,{preventScrollReset:d.preventScrollReset,formData:g,body:_,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:i,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,o,t,i])}function DM(r,{relative:t}={}){let{basename:i}=_e.useContext(Ri),s=_e.useContext(fa);Zt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...Kl(r||".",{relative:t})},d=$a();if(r==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:oa([i,c.pathname])),Xl(c)}function UM(r,{relative:t}={}){let i=_e.useContext($v);Zt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=o0("useViewTransitionState"),o=Kl(r,{relative:t});if(!i.isTransitioning)return!1;let c=ca(i.currentLocation.pathname,s)||i.currentLocation.pathname,d=ca(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Fc(o.pathname,d)!=null||Fc(o.pathname,c)!=null}const fd="160",ur={ROTATE:0,DOLLY:1,PAN:2},fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NM=0,g_=1,OM=2,c0=1,u0=2,aa=3,Ja=0,kn=1,sa=2,Za=0,Lr=1,__=2,v_=3,x_=4,PM=5,Ms=100,zM=101,BM=102,y_=103,S_=104,IM=200,FM=201,HM=202,GM=203,Zh=204,Kh=205,VM=206,jM=207,kM=208,XM=209,WM=210,qM=211,YM=212,ZM=213,KM=214,QM=0,JM=1,$M=2,Hc=3,eE=4,tE=5,nE=6,iE=7,f0=0,aE=1,sE=2,Ka=0,rE=1,lE=2,oE=3,cE=4,uE=5,fE=6,h0=300,Ur=301,Nr=302,Qh=303,Jh=304,Yc=306,$h=1e3,bi=1001,ed=1002,On=1003,M_=1004,ph=1005,di=1006,hE=1007,Wl=1008,Qa=1009,dE=1010,pE=1011,hd=1012,d0=1013,Wa=1014,qa=1015,ql=1016,p0=1017,m0=1018,bs=1020,mE=1021,Ti=1023,gE=1024,_E=1025,Ts=1026,Or=1027,vE=1028,g0=1029,xE=1030,_0=1031,v0=1033,mh=33776,gh=33777,_h=33778,vh=33779,E_=35840,b_=35841,T_=35842,A_=35843,x0=36196,R_=37492,C_=37496,w_=37808,L_=37809,D_=37810,U_=37811,N_=37812,O_=37813,P_=37814,z_=37815,B_=37816,I_=37817,F_=37818,H_=37819,G_=37820,V_=37821,xh=36492,j_=36494,k_=36495,yE=36283,X_=36284,W_=36285,q_=36286,y0=3e3,As=3001,SE=3200,ME=3201,S0=0,EE=1,mi="",bn="srgb",ua="srgb-linear",dd="display-p3",Zc="display-p3-linear",Gc="linear",Wt="srgb",Vc="rec709",jc="p3",hr=7680,Y_=519,bE=512,TE=513,AE=514,M0=515,RE=516,CE=517,wE=518,LE=519,Z_=35044,K_="300 es",td=1035,ra=2e3,kc=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,nd=180/Math.PI;function Ql(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Pn(r,t,i){return Math.max(t,Math.min(i,r))}function DE(r,t){return(r%t+t)%t}function yh(r,t,i){return(1-i)*r+i*t}function Q_(r){return(r&r-1)===0&&r!==0}function id(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const UE={DEG2RAD:Bc};class ut{constructor(t=0,i=0){ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,o=t.elements;return this.x=o[0]*i+o[3]*s+o[6],this.y=o[1]*i+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),o=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*o+t.x,this.y=c*o+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(t,i,s,o,c,d,h,p,m){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,o,c,d,h,p,m)}set(t,i,s,o,c,d,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,o=i.elements,c=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],y=s[2],E=s[5],b=s[8],T=o[0],S=o[3],v=o[6],D=o[1],R=o[4],z=o[7],k=o[2],F=o[5],P=o[8];return c[0]=d*T+h*D+p*k,c[3]=d*S+h*R+p*F,c[6]=d*v+h*z+p*P,c[1]=m*T+g*D+_*k,c[4]=m*S+g*R+_*F,c[7]=m*v+g*z+_*P,c[2]=y*T+E*D+b*k,c[5]=y*S+E*R+b*F,c[8]=y*v+E*z+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],o=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*d*g-i*h*m-s*c*g+s*h*p+o*c*m-o*d*p}invert(){const t=this.elements,i=t[0],s=t[1],o=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*d-h*m,y=h*p-g*c,E=m*c-d*p,b=i*_+s*y+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(o*m-g*s)*T,t[2]=(h*s-o*d)*T,t[3]=y*T,t[4]=(g*i-o*p)*T,t[5]=(o*c-h*i)*T,t[6]=E*T,t[7]=(s*p-m*i)*T,t[8]=(d*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,o,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*h)+d+t,-o*m,o*p,-o*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Sh.makeScale(t,i)),this}rotate(t){return this.premultiply(Sh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Sh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let o=0;o<9;o++)if(i[o]!==s[o])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sh=new xt;function E0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function NE(){const r=Xc("canvas");return r.style.display="block",r}const J_={};function jl(r){r in J_||(J_[r]=!0,console.warn(r))}const $_=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ev=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uc={[ua]:{transfer:Gc,primaries:Vc,toReference:r=>r,fromReference:r=>r},[bn]:{transfer:Wt,primaries:Vc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Zc]:{transfer:Gc,primaries:jc,toReference:r=>r.applyMatrix3(ev),fromReference:r=>r.applyMatrix3($_)},[dd]:{transfer:Wt,primaries:jc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ev),fromReference:r=>r.applyMatrix3($_).convertLinearToSRGB()}},OE=new Set([ua,Zc]),Bt={enabled:!0,_workingColorSpace:ua,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!OE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,i){if(this.enabled===!1||t===i||!t||!i)return r;const s=uc[t].toReference,o=uc[i].fromReference;return o(s(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return uc[r].primaries},getTransfer:function(r){return r===mi?Gc:uc[r].transfer}};function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let dr;class b0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dr===void 0&&(dr=Xc("canvas")),dr.width=t.width,dr.height=t.height;const s=dr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=dr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Dr(c[d]/255)*255;return s.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Dr(i[s]/255)*255):i[s]=Dr(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PE=0;class T0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ql(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?c.push(Eh(o[d].image)):c.push(Eh(o[d]))}else c=Eh(o);s.url=c}return i||(t.images[this.uuid]=s),s}}function Eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class ni extends Ls{constructor(t=ni.DEFAULT_IMAGE,i=ni.DEFAULT_MAPPING,s=bi,o=bi,c=di,d=Wl,h=Ti,p=Qa,m=ni.DEFAULT_ANISOTROPY,g=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Ql(),this.name="",this.source=new T0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===As?bn:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case ed:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case ed:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bn?As:y0}set encoding(t){jl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===As?bn:mi}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=h0;ni.DEFAULT_ANISOTROPY=1;class vn{constructor(t=0,i=0,s=0,o=1){vn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,o){return this.x=t,this.y=i,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,o=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*o+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*o+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*o+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*o+d[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,o,c;const p=t.elements,m=p[0],g=p[4],_=p[8],y=p[1],E=p[5],b=p[9],T=p[2],S=p[6],v=p[10];if(Math.abs(g-y)<.01&&Math.abs(_-T)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+T)<.1&&Math.abs(b+S)<.1&&Math.abs(m+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(m+1)/2,z=(E+1)/2,k=(v+1)/2,F=(g+y)/4,P=(_+T)/4,ce=(b+S)/4;return R>z&&R>k?R<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(R),o=F/s,c=P/s):z>k?z<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(z),s=F/o,c=ce/o):k<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(k),s=P/c,o=ce/c),this.set(s,o,c,i),this}let D=Math.sqrt((S-b)*(S-b)+(_-T)*(_-T)+(y-g)*(y-g));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(_-T)/D,this.z=(y-g)/D,this.w=Math.acos((m+E+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends Ls{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new vn(0,0,t,i),this.scissorTest=!1,this.viewport=new vn(0,0,t,i);const o={width:t,height:i,depth:1};s.encoding!==void 0&&(jl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===As?bn:mi),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new ni(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(t,i,s=1){(this.width!==t||this.height!==i||this.depth!==s)&&(this.width=t,this.height=i,this.depth=s,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new T0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends BE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class A0 extends ni{constructor(t=null,i=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IE extends ni{constructor(t=null,i=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,i=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=o}static slerpFlat(t,i,s,o,c,d,h){let p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];const y=c[d+0],E=c[d+1],b=c[d+2],T=c[d+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=y,t[i+1]=E,t[i+2]=b,t[i+3]=T;return}if(_!==T||p!==y||m!==E||g!==b){let S=1-h;const v=p*y+m*E+g*b+_*T,D=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const k=Math.sqrt(R),F=Math.atan2(k,v*D);S=Math.sin(S*F)/k,h=Math.sin(h*F)/k}const z=h*D;if(p=p*S+y*z,m=m*S+E*z,g=g*S+b*z,_=_*S+T*z,S===1-h){const k=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=k,m*=k,g*=k,_*=k}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,o,c,d){const h=s[o],p=s[o+1],m=s[o+2],g=s[o+3],_=c[d],y=c[d+1],E=c[d+2],b=c[d+3];return t[i]=h*b+g*_+p*E-m*y,t[i+1]=p*b+g*y+m*_-h*E,t[i+2]=m*b+g*E+h*y-p*_,t[i+3]=g*b-h*_-p*y-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,o){return this._x=t,this._y=i,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,o=t._y,c=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(o/2),_=h(c/2),y=p(s/2),E=p(o/2),b=p(c/2);switch(d){case"XYZ":this._x=y*g*_+m*E*b,this._y=m*E*_-y*g*b,this._z=m*g*b+y*E*_,this._w=m*g*_-y*E*b;break;case"YXZ":this._x=y*g*_+m*E*b,this._y=m*E*_-y*g*b,this._z=m*g*b-y*E*_,this._w=m*g*_+y*E*b;break;case"ZXY":this._x=y*g*_-m*E*b,this._y=m*E*_+y*g*b,this._z=m*g*b+y*E*_,this._w=m*g*_-y*E*b;break;case"ZYX":this._x=y*g*_-m*E*b,this._y=m*E*_+y*g*b,this._z=m*g*b-y*E*_,this._w=m*g*_+y*E*b;break;case"YZX":this._x=y*g*_+m*E*b,this._y=m*E*_+y*g*b,this._z=m*g*b-y*E*_,this._w=m*g*_-y*E*b;break;case"XZY":this._x=y*g*_-m*E*b,this._y=m*E*_-y*g*b,this._z=m*g*b+y*E*_,this._w=m*g*_+y*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],o=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],y=s+h+_;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-m)*E,this._z=(d-o)*E}else if(s>h&&s>_){const E=2*Math.sqrt(1+s-h-_);this._w=(g-p)/E,this._x=.25*E,this._y=(o+d)/E,this._z=(c+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-s-_);this._w=(c-m)/E,this._x=(o+d)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+_-s-h);this._w=(d-o)/E,this._x=(c+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,i/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,o=t._y,c=t._z,d=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+d*h+o*m-c*p,this._y=o*g+d*p+c*h-s*m,this._z=c*g+d*m+s*p-o*h,this._w=d*g-s*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,o=this._y,c=this._z,d=this._w;let h=d*t._w+s*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=s,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*s+i*this._x,this._y=E*o+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=d*_+this._w*y,this._x=s*_+this._x*y,this._y=o*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=Math.random(),i=Math.sqrt(1-t),s=Math.sqrt(t),o=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(o),s*Math.sin(c),s*Math.cos(c),i*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(tv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(tv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*o,this.y=c[1]*i+c[4]*s+c[7]*o,this.z=c[2]*i+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,o=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*o+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*o+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*o+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,o=this.z,c=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*o-h*s),g=2*(h*i-c*o),_=2*(c*s-d*i);return this.x=i+p*m+d*_-h*g,this.y=s+p*g+h*m-c*_,this.z=o+p*_+c*g-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*o,this.y=c[1]*i+c[5]*s+c[9]*o,this.z=c[2]*i+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,o=t.y,c=t.z,d=i.x,h=i.y,p=i.z;return this.x=o*p-c*h,this.y=c*d-s*p,this.z=s*h-o*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return i*i+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const o=Math.sin(i)*t;return this.x=o*Math.sin(s),this.y=Math.cos(i)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new Q,tv=new Cs;class Jl{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(c,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const o=t.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Il),hc.subVectors(this.max,Il),pr.subVectors(t.a,Il),mr.subVectors(t.b,Il),gr.subVectors(t.c,Il),Ha.subVectors(mr,pr),Ga.subVectors(gr,mr),_s.subVectors(pr,gr);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-_s.z,_s.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,_s.z,0,-_s.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-_s.y,_s.x,0];return!Th(i,pr,mr,gr,hc)||(i=[1,0,0,0,1,0,0,0,1],!Th(i,pr,mr,gr,hc))?!1:(dc.crossVectors(Ha,Ga),i=[dc.x,dc.y,dc.z],Th(i,pr,mr,gr,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yi=new Q,fc=new Jl,pr=new Q,mr=new Q,gr=new Q,Ha=new Q,Ga=new Q,_s=new Q,Il=new Q,hc=new Q,dc=new Q,vs=new Q;function Th(r,t,i,s,o){for(let c=0,d=r.length-3;c<=d;c+=3){vs.fromArray(r,c);const h=o.x*Math.abs(vs.x)+o.y*Math.abs(vs.y)+o.z*Math.abs(vs.z),p=t.dot(vs),m=i.dot(vs),g=s.dot(vs);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const FE=new Jl,Fl=new Q,Ah=new Q;class Kc{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):FE.setFromPoints(t).getCenter(s);let o=0;for(let c=0,d=t.length;c<d;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fl.subVectors(t,this.center);const i=Fl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),o=(s-this.radius)*.5;this.center.addScaledVector(Fl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fl.copy(t.center).add(Ah)),this.expandByPoint(Fl.copy(t.center).sub(Ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Q,Rh=new Q,pc=new Q,Va=new Q,Ch=new Q,mc=new Q,wh=new Q;class pd{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,o){Rh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Rh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(pc),h=Va.dot(this.direction),p=-Va.dot(pc),m=Va.lengthSq(),g=Math.abs(1-d*d);let _,y,E,b;if(g>0)if(_=d*p-h,y=d*h-p,b=c*g,_>=0)if(y>=-b)if(y<=b){const T=1/g;_*=T,y*=T,E=_*(_+d*y+2*h)+y*(d*_+y+2*p)+m}else y=c,_=Math.max(0,-(d*y+h)),E=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(d*y+h)),E=-_*_+y*(y+2*p)+m;else y<=-b?(_=Math.max(0,-(-d*c+h)),y=_>0?-c:Math.min(Math.max(-c,-p),c),E=-_*_+y*(y+2*p)+m):y<=b?(_=0,y=Math.min(Math.max(-c,-p),c),E=y*(y+2*p)+m):(_=Math.max(0,-(d*c+h)),y=_>0?c:Math.min(Math.max(-c,-p),c),E=-_*_+y*(y+2*p)+m);else y=d>0?-c:c,_=Math.max(0,-(d*y+h)),E=-_*_+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Rh).addScaledVector(pc,y),E}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),o=ea.dot(ea)-s*s,c=t.radius*t.radius;if(o>c)return null;const d=Math.sqrt(c-o),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,o,c,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,o=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,o=(t.min.x-y.x)*m),g>=0?(c=(t.min.y-y.y)*g,d=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,d=(t.min.y-y.y)*g),s>d||c>o||((c>s||isNaN(s))&&(s=c),(d<o||isNaN(o))&&(o=d),_>=0?(h=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),s>p||h>o)||((h>s||s!==s)&&(s=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,o,c){Ch.subVectors(i,t),mc.subVectors(s,t),wh.crossVectors(Ch,mc);let d=this.direction.dot(wh),h;if(d>0){if(o)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Va.subVectors(this.origin,t);const p=h*this.direction.dot(mc.crossVectors(Va,mc));if(p<0)return null;const m=h*this.direction.dot(Ch.cross(Va));if(m<0||p+m>d)return null;const g=-h*Va.dot(wh);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(t,i,s,o,c,d,h,p,m,g,_,y,E,b,T,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,o,c,d,h,p,m,g,_,y,E,b,T,S)}set(t,i,s,o,c,d,h,p,m,g,_,y,E,b,T,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=o,v[1]=c,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=y,v[3]=E,v[7]=b,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,o=1/_r.setFromMatrixColumn(t,0).length(),c=1/_r.setFromMatrixColumn(t,1).length(),d=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*o,i[1]=s[1]*o,i[2]=s[2]*o,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,o=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=d*g,E=d*_,b=h*g,T=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=E+b*m,i[5]=y-T*m,i[9]=-h*p,i[2]=T-y*m,i[6]=b+E*m,i[10]=d*p}else if(t.order==="YXZ"){const y=p*g,E=p*_,b=m*g,T=m*_;i[0]=y+T*h,i[4]=b*h-E,i[8]=d*m,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=E*h-b,i[6]=T+y*h,i[10]=d*p}else if(t.order==="ZXY"){const y=p*g,E=p*_,b=m*g,T=m*_;i[0]=y-T*h,i[4]=-d*_,i[8]=b+E*h,i[1]=E+b*h,i[5]=d*g,i[9]=T-y*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const y=d*g,E=d*_,b=h*g,T=h*_;i[0]=p*g,i[4]=b*m-E,i[8]=y*m+T,i[1]=p*_,i[5]=T*m+y,i[9]=E*m-b,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const y=d*p,E=d*m,b=h*p,T=h*m;i[0]=p*g,i[4]=T-y*_,i[8]=b*_+E,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=E*_+b,i[10]=y-T*_}else if(t.order==="XZY"){const y=d*p,E=d*m,b=h*p,T=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=y*_+T,i[5]=d*g,i[9]=E*_-b,i[2]=b*_-E,i[6]=h*g,i[10]=T*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HE,t,GE)}lookAt(t,i,s){const o=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ja.crossVectors(s,ei),ja.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ja.crossVectors(s,ei)),ja.normalize(),gc.crossVectors(ei,ja),o[0]=ja.x,o[4]=gc.x,o[8]=ei.x,o[1]=ja.y,o[5]=gc.y,o[9]=ei.y,o[2]=ja.z,o[6]=gc.z,o[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,o=i.elements,c=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],y=s[9],E=s[13],b=s[2],T=s[6],S=s[10],v=s[14],D=s[3],R=s[7],z=s[11],k=s[15],F=o[0],P=o[4],ce=o[8],w=o[12],O=o[1],ae=o[5],re=o[9],xe=o[13],W=o[2],$=o[6],I=o[10],q=o[14],ee=o[3],he=o[7],de=o[11],U=o[15];return c[0]=d*F+h*O+p*W+m*ee,c[4]=d*P+h*ae+p*$+m*he,c[8]=d*ce+h*re+p*I+m*de,c[12]=d*w+h*xe+p*q+m*U,c[1]=g*F+_*O+y*W+E*ee,c[5]=g*P+_*ae+y*$+E*he,c[9]=g*ce+_*re+y*I+E*de,c[13]=g*w+_*xe+y*q+E*U,c[2]=b*F+T*O+S*W+v*ee,c[6]=b*P+T*ae+S*$+v*he,c[10]=b*ce+T*re+S*I+v*de,c[14]=b*w+T*xe+S*q+v*U,c[3]=D*F+R*O+z*W+k*ee,c[7]=D*P+R*ae+z*$+k*he,c[11]=D*ce+R*re+z*I+k*de,c[15]=D*w+R*xe+z*q+k*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],o=t[8],c=t[12],d=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],y=t[10],E=t[14],b=t[3],T=t[7],S=t[11],v=t[15];return b*(+c*p*_-o*m*_-c*h*y+s*m*y+o*h*E-s*p*E)+T*(+i*p*E-i*m*y+c*d*y-o*d*E+o*m*g-c*p*g)+S*(+i*m*_-i*h*E-c*d*_+s*d*E+c*h*g-s*m*g)+v*(-o*h*g-i*p*_+i*h*y+o*d*_-s*d*y+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],o=t[2],c=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],y=t[10],E=t[11],b=t[12],T=t[13],S=t[14],v=t[15],D=_*S*m-T*y*m+T*p*E-h*S*E-_*p*v+h*y*v,R=b*y*m-g*S*m-b*p*E+d*S*E+g*p*v-d*y*v,z=g*T*m-b*_*m+b*h*E-d*T*E-g*h*v+d*_*v,k=b*_*p-g*T*p-b*h*y+d*T*y+g*h*S-d*_*S,F=i*D+s*R+o*z+c*k;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return t[0]=D*P,t[1]=(T*y*c-_*S*c-T*o*E+s*S*E+_*o*v-s*y*v)*P,t[2]=(h*S*c-T*p*c+T*o*m-s*S*m-h*o*v+s*p*v)*P,t[3]=(_*p*c-h*y*c-_*o*m+s*y*m+h*o*E-s*p*E)*P,t[4]=R*P,t[5]=(g*S*c-b*y*c+b*o*E-i*S*E-g*o*v+i*y*v)*P,t[6]=(b*p*c-d*S*c-b*o*m+i*S*m+d*o*v-i*p*v)*P,t[7]=(d*y*c-g*p*c+g*o*m-i*y*m-d*o*E+i*p*E)*P,t[8]=z*P,t[9]=(b*_*c-g*T*c-b*s*E+i*T*E+g*s*v-i*_*v)*P,t[10]=(d*T*c-b*h*c+b*s*m-i*T*m-d*s*v+i*h*v)*P,t[11]=(g*h*c-d*_*c-g*s*m+i*_*m+d*s*E-i*h*E)*P,t[12]=k*P,t[13]=(g*T*o-b*_*o+b*s*y-i*T*y-g*s*S+i*_*S)*P,t[14]=(b*h*o-d*T*o-b*s*p+i*T*p+d*s*S-i*h*S)*P,t[15]=(d*_*o-g*h*o+g*s*p-i*_*p-d*s*y+i*h*y)*P,this}scale(t){const i=this.elements,s=t.x,o=t.y,c=t.z;return i[0]*=s,i[4]*=o,i[8]*=c,i[1]*=s,i[5]*=o,i[9]*=c,i[2]*=s,i[6]*=o,i[10]*=c,i[3]*=s,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,o))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),o=Math.sin(i),c=1-s,d=t.x,h=t.y,p=t.z,m=c*d,g=c*h;return this.set(m*d+s,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+s,g*p-o*d,0,m*p-o*h,g*p+o*d,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,o,c,d){return this.set(1,s,c,0,t,1,d,0,i,o,1,0,0,0,0,1),this}compose(t,i,s){const o=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,g=d+d,_=h+h,y=c*m,E=c*g,b=c*_,T=d*g,S=d*_,v=h*_,D=p*m,R=p*g,z=p*_,k=s.x,F=s.y,P=s.z;return o[0]=(1-(T+v))*k,o[1]=(E+z)*k,o[2]=(b-R)*k,o[3]=0,o[4]=(E-z)*F,o[5]=(1-(y+v))*F,o[6]=(S+D)*F,o[7]=0,o[8]=(b+R)*P,o[9]=(S-D)*P,o[10]=(1-(y+T))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,s){const o=this.elements;let c=_r.set(o[0],o[1],o[2]).length();const d=_r.set(o[4],o[5],o[6]).length(),h=_r.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Si.copy(this);const m=1/c,g=1/d,_=1/h;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,o,c,d,h=ra){const p=this.elements,m=2*c/(i-t),g=2*c/(s-o),_=(i+t)/(i-t),y=(s+o)/(s-o);let E,b;if(h===ra)E=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(h===kc)E=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,o,c,d,h=ra){const p=this.elements,m=1/(i-t),g=1/(s-o),_=1/(d-c),y=(i+t)*m,E=(s+o)*g;let b,T;if(h===ra)b=(d+c)*_,T=-2*_;else if(h===kc)b=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-E,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let o=0;o<16;o++)if(i[o]!==s[o])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const _r=new Q,Si=new fn,HE=new Q(0,0,0),GE=new Q(1,1,1),ja=new Q,gc=new Q,ei=new Q,nv=new fn,iv=new Cs;class Qc{constructor(t=0,i=0,s=0,o=Qc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,o=this._order){return this._x=t,this._y=i,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const o=t.elements,c=o[0],d=o[4],h=o[8],p=o[1],m=o[5],g=o[9],_=o[2],y=o[6],E=o[10];switch(i){case"XYZ":this._y=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return iv.setFromEuler(this),this.setFromQuaternion(iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qc.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VE=0;const av=new Q,vr=new Cs,ta=new fn,_c=new Q,Hl=new Q,jE=new Q,kE=new Cs,sv=new Q(1,0,0),rv=new Q(0,1,0),lv=new Q(0,0,1),XE={type:"added"},WE={type:"removed"};class Tn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new Q,i=new Qc,s=new Cs,o=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new xt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,i){return vr.setFromAxisAngle(t,i),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(sv,t)}rotateY(t){return this.rotateOnAxis(rv,t)}rotateZ(t){return this.rotateOnAxis(lv,t)}translateOnAxis(t,i){return av.copy(t).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(sv,t)}translateY(t){return this.translateOnAxis(rv,t)}translateZ(t){return this.translateOnAxis(lv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_c.copy(t):_c.set(t,i,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Hl,_c,this.up):ta.lookAt(_c,Hl,this.up),this.quaternion.setFromRotationMatrix(ta),o&&(ta.extractRotation(o.matrixWorld),vr.setFromRotationMatrix(ta),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(XE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WE)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,t,jE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,kE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,o=i.length;s<o;s++){const c=i[s];(c.matrixWorldAutoUpdate===!0||t===!0)&&c.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++){const h=o[c];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),g=d(t.images),_=d(t.shapes),y=d(t.skeletons),E=d(t.animations),b=d(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=o,s;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new Q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Q,na=new Q,Lh=new Q,ia=new Q,xr=new Q,yr=new Q,ov=new Q,Dh=new Q,Uh=new Q,Nh=new Q;let vc=!1;class Ei{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,o){o.subVectors(s,i),Mi.subVectors(t,i),o.cross(Mi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,i,s,o,c){Mi.subVectors(o,i),na.subVectors(s,i),Lh.subVectors(t,i);const d=Mi.dot(Mi),h=Mi.dot(na),p=Mi.dot(Lh),m=na.dot(na),g=na.dot(Lh),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,E=(m*p-h*g)*y,b=(d*g-h*p)*y;return c.set(1-E-b,b,E)}static containsPoint(t,i,s,o){return this.getBarycoord(t,i,s,o,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getUV(t,i,s,o,c,d,h,p){return vc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vc=!0),this.getInterpolation(t,i,s,o,c,d,h,p)}static getInterpolation(t,i,s,o,c,d,h,p){return this.getBarycoord(t,i,s,o,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ia.x),p.addScaledVector(d,ia.y),p.addScaledVector(h,ia.z),p)}static isFrontFacing(t,i,s,o){return Mi.subVectors(s,i),na.subVectors(t,i),Mi.cross(na).dot(o)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,o){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,s,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,s,o,c){return vc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vc=!0),Ei.getInterpolation(t,this.a,this.b,this.c,i,s,o,c)}getInterpolation(t,i,s,o,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,s,o,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,o=this.b,c=this.c;let d,h;xr.subVectors(o,s),yr.subVectors(c,s),Dh.subVectors(t,s);const p=xr.dot(Dh),m=yr.dot(Dh);if(p<=0&&m<=0)return i.copy(s);Uh.subVectors(t,o);const g=xr.dot(Uh),_=yr.dot(Uh);if(g>=0&&_<=g)return i.copy(o);const y=p*_-g*m;if(y<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(s).addScaledVector(xr,d);Nh.subVectors(t,c);const E=xr.dot(Nh),b=yr.dot(Nh);if(b>=0&&E<=b)return i.copy(c);const T=E*m-p*b;if(T<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(s).addScaledVector(yr,h);const S=g*b-E*_;if(S<=0&&_-g>=0&&E-b>=0)return ov.subVectors(c,o),h=(_-g)/(_-g+(E-b)),i.copy(o).addScaledVector(ov,h);const v=1/(S+T+y);return d=T*v,h=y*v,i.copy(s).addScaledVector(xr,d).addScaledVector(yr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Oh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class bt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Bt.toWorkingColorSpace(this,i),this}setRGB(t,i,s,o=Bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Bt.toWorkingColorSpace(this,o),this}setHSL(t,i,s,o=Bt.workingColorSpace){if(t=DE(t,1),i=Pn(i,0,1),s=Pn(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Oh(d,c,t+1/3),this.g=Oh(d,c,t),this.b=Oh(d,c,t-1/3)}return Bt.toWorkingColorSpace(this,o),this}setStyle(t,i=bn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=bn){const s=C0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=Mh(t.r),this.g=Mh(t.g),this.b=Mh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Bt.fromWorkingColorSpace(Ln.copy(this),t),Math.round(Pn(Ln.r*255,0,255))*65536+Math.round(Pn(Ln.g*255,0,255))*256+Math.round(Pn(Ln.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Ln.copy(this),i);const s=Ln.r,o=Ln.g,c=Ln.b,d=Math.max(s,o,c),h=Math.min(s,o,c);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=g<=.5?_/(d+h):_/(2-d-h),d){case s:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-s)/_+2;break;case c:p=(s-o)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=bn){Bt.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,o=Ln.b;return t!==bn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,i,s){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(xc);const s=yh(ka.h,xc.h,i),o=yh(ka.s,xc.s,i),c=yh(ka.l,xc.l,i);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*o,this.g=c[1]*i+c[4]*s+c[7]*o,this.b=c[2]*i+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new bt;bt.NAMES=C0;let qE=0;class Ir extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Lr,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==Ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==Ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Hc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=o(t.textures),d=o(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const o=i.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class w0 extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new Q,yc=new ut;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Z_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=i.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Bl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bl(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bl(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bl(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,o){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,i,s,o,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Z_&&(t.usage=this.usage),t}}class L0 extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class D0 extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Xn extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let YE=0;const hi=new fn,Ph=new Tn,Sr=new Q,ti=new Jl,Gl=new Jl,_n=new Q;class Pi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(E0(t)?D0:L0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const i=[];for(let s=0,o=t.length;s<o;s++){const c=t[s];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Xn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,o=i.length;s<o;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Gl.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ti.min,Gl.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Gl.max),ti.expandByPoint(_n)):(ti.expandByPoint(Gl.min),ti.expandByPoint(Gl.max))}ti.getCenter(s);let o=0;for(let c=0,d=t.count;c<d;c++)_n.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(_n));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)_n.fromBufferAttribute(h,m),p&&(Sr.fromBufferAttribute(t,m),_n.add(Sr)),o=Math.max(o,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.array,o=i.position.array,c=i.normal.array,d=i.uv.array,h=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let O=0;O<h;O++)m[O]=new Q,g[O]=new Q;const _=new Q,y=new Q,E=new Q,b=new ut,T=new ut,S=new ut,v=new Q,D=new Q;function R(O,ae,re){_.fromArray(o,O*3),y.fromArray(o,ae*3),E.fromArray(o,re*3),b.fromArray(d,O*2),T.fromArray(d,ae*2),S.fromArray(d,re*2),y.sub(_),E.sub(_),T.sub(b),S.sub(b);const xe=1/(T.x*S.y-S.x*T.y);isFinite(xe)&&(v.copy(y).multiplyScalar(S.y).addScaledVector(E,-T.y).multiplyScalar(xe),D.copy(E).multiplyScalar(T.x).addScaledVector(y,-S.x).multiplyScalar(xe),m[O].add(v),m[ae].add(v),m[re].add(v),g[O].add(D),g[ae].add(D),g[re].add(D))}let z=this.groups;z.length===0&&(z=[{start:0,count:s.length}]);for(let O=0,ae=z.length;O<ae;++O){const re=z[O],xe=re.start,W=re.count;for(let $=xe,I=xe+W;$<I;$+=3)R(s[$+0],s[$+1],s[$+2])}const k=new Q,F=new Q,P=new Q,ce=new Q;function w(O){P.fromArray(c,O*3),ce.copy(P);const ae=m[O];k.copy(ae),k.sub(P.multiplyScalar(P.dot(ae))).normalize(),F.crossVectors(ce,ae);const xe=F.dot(g[O])<0?-1:1;p[O*4]=k.x,p[O*4+1]=k.y,p[O*4+2]=k.z,p[O*4+3]=xe}for(let O=0,ae=z.length;O<ae;++O){const re=z[O],xe=re.start,W=re.count;for(let $=xe,I=xe+W;$<I;$+=3)w(s[$+0]),w(s[$+1]),w(s[$+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,E=s.count;y<E;y++)s.setXYZ(y,0,0,0);const o=new Q,c=new Q,d=new Q,h=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(t)for(let y=0,E=t.count;y<E;y+=3){const b=t.getX(y+0),T=t.getX(y+1),S=t.getX(y+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),g.subVectors(d,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),h.add(g),p.add(g),m.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,E=i.count;y<E;y+=3)o.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,c),_.subVectors(o,c),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,y=new m.constructor(p.length*g);let E=0,b=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?E=p[T]*h.data.stride+h.offset:E=p[T]*g;for(let v=0;v<g;v++)y[b++]=m[E++]}return new Oi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,s=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const y=m[g],E=t(y,s);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,y=m.length;_<y;_++){const E=m[_];g.push(E.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let y=0,E=_.length;y<E;y++)g.push(_[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,g=d.length;m<g;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new fn,xs=new pd,Sc=new Kc,uv=new Q,Mr=new Q,Er=new Q,br=new Q,zh=new Q,Mc=new Q,Ec=new ut,bc=new ut,Tc=new ut,fv=new Q,hv=new Q,dv=new Q,Ac=new Q,Rc=new Q;class dn extends Tn{constructor(t=new Pi,i=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Mc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(zh.fromBufferAttribute(_,t),d?Mc.addScaledVector(zh,g):Mc.addScaledVector(zh.sub(i),g))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),xs.copy(t.ray).recast(t.near),!(Sc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Sc,uv)===null||xs.origin.distanceToSquared(uv)>(t.far-t.near)**2))&&(cv.copy(c).invert(),xs.copy(t.ray).applyMatrix4(cv),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,xs)))}_computeIntersections(t,i,s){let o;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=y.length;b<T;b++){const S=y[b],v=d[S.materialIndex],D=Math.max(S.start,E.start),R=Math.min(h.count,Math.min(S.start+S.count,E.start+E.count));for(let z=D,k=R;z<k;z+=3){const F=h.getX(z),P=h.getX(z+1),ce=h.getX(z+2);o=Cc(this,v,t,s,m,g,_,F,P,ce),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,i.push(o))}}else{const b=Math.max(0,E.start),T=Math.min(h.count,E.start+E.count);for(let S=b,v=T;S<v;S+=3){const D=h.getX(S),R=h.getX(S+1),z=h.getX(S+2);o=Cc(this,d,t,s,m,g,_,D,R,z),o&&(o.faceIndex=Math.floor(S/3),i.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,T=y.length;b<T;b++){const S=y[b],v=d[S.materialIndex],D=Math.max(S.start,E.start),R=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let z=D,k=R;z<k;z+=3){const F=z,P=z+1,ce=z+2;o=Cc(this,v,t,s,m,g,_,F,P,ce),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,i.push(o))}}else{const b=Math.max(0,E.start),T=Math.min(p.count,E.start+E.count);for(let S=b,v=T;S<v;S+=3){const D=S,R=S+1,z=S+2;o=Cc(this,d,t,s,m,g,_,D,R,z),o&&(o.faceIndex=Math.floor(S/3),i.push(o))}}}}function ZE(r,t,i,s,o,c,d,h){let p;if(t.side===kn?p=s.intersectTriangle(d,c,o,!0,h):p=s.intersectTriangle(o,c,d,t.side===Ja,h),p===null)return null;Rc.copy(h),Rc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Rc);return m<i.near||m>i.far?null:{distance:m,point:Rc.clone(),object:r}}function Cc(r,t,i,s,o,c,d,h,p,m){r.getVertexPosition(h,Mr),r.getVertexPosition(p,Er),r.getVertexPosition(m,br);const g=ZE(r,t,i,s,Mr,Er,br,Ac);if(g){o&&(Ec.fromBufferAttribute(o,h),bc.fromBufferAttribute(o,p),Tc.fromBufferAttribute(o,m),g.uv=Ei.getInterpolation(Ac,Mr,Er,br,Ec,bc,Tc,new ut)),c&&(Ec.fromBufferAttribute(c,h),bc.fromBufferAttribute(c,p),Tc.fromBufferAttribute(c,m),g.uv1=Ei.getInterpolation(Ac,Mr,Er,br,Ec,bc,Tc,new ut),g.uv2=g.uv1),d&&(fv.fromBufferAttribute(d,h),hv.fromBufferAttribute(d,p),dv.fromBufferAttribute(d,m),g.normal=Ei.getInterpolation(Ac,Mr,Er,br,fv,hv,dv,new Q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new Q,materialIndex:0};Ei.getNormal(Mr,Er,br,_.normal),g.face=_}return g}class la extends Pi{constructor(t=1,i=1,s=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:o,heightSegments:c,depthSegments:d};const h=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],g=[],_=[];let y=0,E=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,o,d,2),b("x","z","y",1,-1,t,s,-i,o,d,3),b("x","y","z",1,-1,t,i,s,o,c,4),b("x","y","z",-1,-1,t,i,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new Xn(m,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(_,2));function b(T,S,v,D,R,z,k,F,P,ce,w){const O=z/P,ae=k/ce,re=z/2,xe=k/2,W=F/2,$=P+1,I=ce+1;let q=0,ee=0;const he=new Q;for(let de=0;de<I;de++){const U=de*ae-xe;for(let X=0;X<$;X++){const G=X*O-re;he[T]=G*D,he[S]=U*R,he[v]=W,m.push(he.x,he.y,he.z),he[T]=0,he[S]=0,he[v]=F>0?1:-1,g.push(he.x,he.y,he.z),_.push(X/P),_.push(1-de/ce),q+=1}}for(let de=0;de<ce;de++)for(let U=0;U<P;U++){const X=y+U+$*de,G=y+U+$*(de+1),Z=y+(U+1)+$*(de+1),ge=y+(U+1)+$*de;p.push(X,G,ge),p.push(G,Z,ge),ee+=6}h.addGroup(E,ee,w),E+=ee,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const o=r[i][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=o.clone():Array.isArray(o)?t[i][s]=o.slice():t[i][s]=o}}return t}function Nn(r){const t={};for(let i=0;i<r.length;i++){const s=Pr(r[i]);for(const o in s)t[o]=s[o]}return t}function KE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function U0(r){return r.getRenderTarget()===null?r.outputColorSpace:Bt.workingColorSpace}const QE={clone:Pr,merge:Nn};var JE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ws extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=KE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?i.uniforms[o]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[o]={type:"m4",value:d.toArray()}:i.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class N0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pi extends N0{constructor(t=50,i=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,s,o,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bc*.5*this.fov)/this.zoom,s=2*i,o=this.aspect*s,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,i-=d.offsetY*s/m,o*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class eb extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(Tr,Ar,t,i);o.layers=this.layers,this.add(o);const c=new pi(Tr,Ar,t,i);c.layers=this.layers,this.add(c);const d=new pi(Tr,Ar,t,i);d.layers=this.layers,this.add(d);const h=new pi(Tr,Ar,t,i);h.layers=this.layers,this.add(h);const p=new pi(Tr,Ar,t,i);p.layers=this.layers,this.add(p);const m=new pi(Tr,Ar,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,o,c,d,h,p]=i;for(const m of i)this.remove(m);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(i,c),t.setRenderTarget(s,1,o),t.render(i,d),t.setRenderTarget(s,2,o),t.render(i,h),t.setRenderTarget(s,3,o),t.render(i,p),t.setRenderTarget(s,4,o),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,o),t.render(i,g),t.setRenderTarget(_,y,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class O0 extends ni{constructor(t,i,s,o,c,d,h,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Ur,super(t,i,s,o,c,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tb extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];i.encoding!==void 0&&(jl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===As?bn:mi),this.texture=new O0(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new la(5,5,5),c=new ws({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Za});c.uniforms.tEquirect.value=i;const d=new dn(o,c),h=i.minFilter;return i.minFilter===Wl&&(i.minFilter=di),new eb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,s,o){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,o);t.setRenderTarget(c)}}const Bh=new Q,nb=new Q,ib=new xt;class Xa{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,o){return this.normal.set(t,i,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const o=Bh.subVectors(s,i).cross(nb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Bh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ib.getNormalMatrix(t),o=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Kc,wc=new Q;class md{constructor(t=new Xa,i=new Xa,s=new Xa,o=new Xa,c=new Xa,d=new Xa){this.planes=[t,i,s,o,c,d]}set(t,i,s,o,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,o=t.elements,c=o[0],d=o[1],h=o[2],p=o[3],m=o[4],g=o[5],_=o[6],y=o[7],E=o[8],b=o[9],T=o[10],S=o[11],v=o[12],D=o[13],R=o[14],z=o[15];if(s[0].setComponents(p-c,y-m,S-E,z-v).normalize(),s[1].setComponents(p+c,y+m,S+E,z+v).normalize(),s[2].setComponents(p+d,y+g,S+b,z+D).normalize(),s[3].setComponents(p-d,y-g,S-b,z-D).normalize(),s[4].setComponents(p-h,y-_,S-T,z-R).normalize(),i===ra)s[5].setComponents(p+h,y+_,S+T,z+R).normalize();else if(i===kc)s[5].setComponents(h,_,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const i=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const o=i[s];if(wc.x=o.normal.x>0?t.max.x:t.min.x,wc.y=o.normal.y>0?t.max.y:t.min.y,wc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P0(){let r=null,t=!1,i=null,s=null;function o(c,d){i(c,d),s=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ab(r,t){const i=t.isWebGL2,s=new WeakMap;function o(m,g){const _=m.array,y=m.usage,E=_.byteLength,b=r.createBuffer();r.bindBuffer(g,b),r.bufferData(g,_,y),m.onUploadCallback();let T;if(_ instanceof Float32Array)T=r.FLOAT;else if(_ instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(i)T=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=r.SHORT;else if(_ instanceof Uint32Array)T=r.UNSIGNED_INT;else if(_ instanceof Int32Array)T=r.INT;else if(_ instanceof Int8Array)T=r.BYTE;else if(_ instanceof Uint8Array)T=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:b,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:E}}function c(m,g,_){const y=g.array,E=g._updateRange,b=g.updateRanges;if(r.bindBuffer(_,m),E.count===-1&&b.length===0&&r.bufferSubData(_,0,y),b.length!==0){for(let T=0,S=b.length;T<S;T++){const v=b[T];i?r.bufferSubData(_,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):r.bufferSubData(_,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}E.count!==-1&&(i?r.bufferSubData(_,E.offset*y.BYTES_PER_ELEMENT,y,E.offset,E.count):r.bufferSubData(_,E.offset*y.BYTES_PER_ELEMENT,y.subarray(E.offset,E.offset+E.count)),E.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function h(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(r.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const y=s.get(m);(!y||y.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const _=s.get(m);if(_===void 0)s.set(m,o(m,g));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(_.buffer,m,g),_.version=m.version}}return{get:d,remove:h,update:p}}class Jc extends Pi{constructor(t=1,i=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:o};const c=t/2,d=i/2,h=Math.floor(s),p=Math.floor(o),m=h+1,g=p+1,_=t/h,y=i/p,E=[],b=[],T=[],S=[];for(let v=0;v<g;v++){const D=v*y-d;for(let R=0;R<m;R++){const z=R*_-c;b.push(z,-D,0),T.push(0,0,1),S.push(R/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let D=0;D<h;D++){const R=D+m*v,z=D+m*(v+1),k=D+1+m*(v+1),F=D+1+m*v;E.push(R,z,F),E.push(z,k,F)}this.setIndex(E),this.setAttribute("position",new Xn(b,3)),this.setAttribute("normal",new Xn(T,3)),this.setAttribute("uv",new Xn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}}var sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,db=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",zb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ST=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,MT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$T=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:sb,alphahash_pars_fragment:rb,alphamap_fragment:lb,alphamap_pars_fragment:ob,alphatest_fragment:cb,alphatest_pars_fragment:ub,aomap_fragment:fb,aomap_pars_fragment:hb,batching_pars_vertex:db,batching_vertex:pb,begin_vertex:mb,beginnormal_vertex:gb,bsdfs:_b,iridescence_fragment:vb,bumpmap_pars_fragment:xb,clipping_planes_fragment:yb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:Mb,clipping_planes_vertex:Eb,color_fragment:bb,color_pars_fragment:Tb,color_pars_vertex:Ab,color_vertex:Rb,common:Cb,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Db,displacementmap_vertex:Ub,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ob,colorspace_fragment:Pb,colorspace_pars_fragment:zb,envmap_fragment:Bb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Fb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:Jb,envmap_vertex:Gb,fog_vertex:Vb,fog_pars_vertex:jb,fog_fragment:kb,fog_pars_fragment:Xb,gradientmap_pars_fragment:Wb,lightmap_fragment:qb,lightmap_pars_fragment:Yb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Qb,lights_toon_fragment:$b,lights_toon_pars_fragment:eT,lights_phong_fragment:tT,lights_phong_pars_fragment:nT,lights_physical_fragment:iT,lights_physical_pars_fragment:aT,lights_fragment_begin:sT,lights_fragment_maps:rT,lights_fragment_end:lT,logdepthbuf_fragment:oT,logdepthbuf_pars_fragment:cT,logdepthbuf_pars_vertex:uT,logdepthbuf_vertex:fT,map_fragment:hT,map_pars_fragment:dT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:gT,metalnessmap_pars_fragment:_T,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:yT,morphtarget_vertex:ST,normal_fragment_begin:MT,normal_fragment_maps:ET,normal_pars_fragment:bT,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:RT,clearcoat_normal_fragment_begin:CT,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:DT,opaque_fragment:UT,packing:NT,premultiplied_alpha_fragment:OT,project_vertex:PT,dithering_fragment:zT,dithering_pars_fragment:BT,roughnessmap_fragment:IT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:GT,shadowmap_vertex:VT,shadowmask_pars_fragment:jT,skinbase_vertex:kT,skinning_pars_vertex:XT,skinning_vertex:WT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:ZT,tonemapping_fragment:KT,tonemapping_pars_fragment:QT,transmission_fragment:JT,transmission_pars_fragment:$T,uv_pars_fragment:eA,uv_pars_vertex:tA,uv_vertex:nA,worldpos_vertex:iA,background_vert:aA,background_frag:sA,backgroundCube_vert:rA,backgroundCube_frag:lA,cube_vert:oA,cube_frag:cA,depth_vert:uA,depth_frag:fA,distanceRGBA_vert:hA,distanceRGBA_frag:dA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:_A,meshbasic_vert:vA,meshbasic_frag:xA,meshlambert_vert:yA,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:EA,meshnormal_vert:bA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:RA,meshphysical_vert:CA,meshphysical_frag:wA,meshtoon_vert:LA,meshtoon_frag:DA,points_vert:UA,points_frag:NA,shadow_vert:OA,shadow_frag:PA,sprite_vert:zA,sprite_frag:BA},Le={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ni={basic:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Nn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Nn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Nn([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Nn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Nn([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Nn([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Nn([Le.common,Le.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Nn([Le.lights,Le.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:Nn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Lc={r:0,b:0,g:0};function IA(r,t,i,s,o,c,d){const h=new bt(0);let p=c===!0?0:1,m,g,_=null,y=0,E=null;function b(S,v){let D=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?i:t).get(R)),R===null?T(h,p):R&&R.isColor&&(T(R,1),D=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||D)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Yc)?(g===void 0&&(g=new dn(new la(1,1,1),new ws({name:"BackgroundCubeMaterial",uniforms:Pr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,F,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=Bt.getTransfer(R.colorSpace)!==Wt,(_!==R||y!==R.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,_=R,y=R.version,E=r.toneMapping),g.layers.enableAll(),S.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new dn(new Jc(2,2),new ws({name:"BackgroundMaterial",uniforms:Pr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=Bt.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||y!==R.version||E!==r.toneMapping)&&(m.material.needsUpdate=!0,_=R,y=R.version,E=r.toneMapping),m.layers.enableAll(),S.unshift(m,m.geometry,m.material,0,0,null))}function T(S,v){S.getRGB(Lc,U0(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,v,d)}return{getClearColor:function(){return h},setClearColor:function(S,v=1){h.set(S),p=v,T(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(S){p=S,T(h,p)},render:b}}function FA(r,t,i,s){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),c=s.isWebGL2?null:t.get("OES_vertex_array_object"),d=s.isWebGL2||c!==null,h={},p=S(null);let m=p,g=!1;function _(W,$,I,q,ee){let he=!1;if(d){const de=T(q,I,$);m!==de&&(m=de,E(m.object)),he=v(W,q,I,ee),he&&D(W,q,I,ee)}else{const de=$.wireframe===!0;(m.geometry!==q.id||m.program!==I.id||m.wireframe!==de)&&(m.geometry=q.id,m.program=I.id,m.wireframe=de,he=!0)}ee!==null&&i.update(ee,r.ELEMENT_ARRAY_BUFFER),(he||g)&&(g=!1,ce(W,$,I,q),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.get(ee).buffer))}function y(){return s.isWebGL2?r.createVertexArray():c.createVertexArrayOES()}function E(W){return s.isWebGL2?r.bindVertexArray(W):c.bindVertexArrayOES(W)}function b(W){return s.isWebGL2?r.deleteVertexArray(W):c.deleteVertexArrayOES(W)}function T(W,$,I){const q=I.wireframe===!0;let ee=h[W.id];ee===void 0&&(ee={},h[W.id]=ee);let he=ee[$.id];he===void 0&&(he={},ee[$.id]=he);let de=he[q];return de===void 0&&(de=S(y()),he[q]=de),de}function S(W){const $=[],I=[],q=[];for(let ee=0;ee<o;ee++)$[ee]=0,I[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:I,attributeDivisors:q,object:W,attributes:{},index:null}}function v(W,$,I,q){const ee=m.attributes,he=$.attributes;let de=0;const U=I.getAttributes();for(const X in U)if(U[X].location>=0){const Z=ee[X];let ge=he[X];if(ge===void 0&&(X==="instanceMatrix"&&W.instanceMatrix&&(ge=W.instanceMatrix),X==="instanceColor"&&W.instanceColor&&(ge=W.instanceColor)),Z===void 0||Z.attribute!==ge||ge&&Z.data!==ge.data)return!0;de++}return m.attributesNum!==de||m.index!==q}function D(W,$,I,q){const ee={},he=$.attributes;let de=0;const U=I.getAttributes();for(const X in U)if(U[X].location>=0){let Z=he[X];Z===void 0&&(X==="instanceMatrix"&&W.instanceMatrix&&(Z=W.instanceMatrix),X==="instanceColor"&&W.instanceColor&&(Z=W.instanceColor));const ge={};ge.attribute=Z,Z&&Z.data&&(ge.data=Z.data),ee[X]=ge,de++}m.attributes=ee,m.attributesNum=de,m.index=q}function R(){const W=m.newAttributes;for(let $=0,I=W.length;$<I;$++)W[$]=0}function z(W){k(W,0)}function k(W,$){const I=m.newAttributes,q=m.enabledAttributes,ee=m.attributeDivisors;I[W]=1,q[W]===0&&(r.enableVertexAttribArray(W),q[W]=1),ee[W]!==$&&((s.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,$),ee[W]=$)}function F(){const W=m.newAttributes,$=m.enabledAttributes;for(let I=0,q=$.length;I<q;I++)$[I]!==W[I]&&(r.disableVertexAttribArray(I),$[I]=0)}function P(W,$,I,q,ee,he,de){de===!0?r.vertexAttribIPointer(W,$,I,ee,he):r.vertexAttribPointer(W,$,I,q,ee,he)}function ce(W,$,I,q){if(s.isWebGL2===!1&&(W.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;R();const ee=q.attributes,he=I.getAttributes(),de=$.defaultAttributeValues;for(const U in he){const X=he[U];if(X.location>=0){let G=ee[U];if(G===void 0&&(U==="instanceMatrix"&&W.instanceMatrix&&(G=W.instanceMatrix),U==="instanceColor"&&W.instanceColor&&(G=W.instanceColor)),G!==void 0){const Z=G.normalized,ge=G.itemSize,Ee=i.get(G);if(Ee===void 0)continue;const Ce=Ee.buffer,Xe=Ee.type,Fe=Ee.bytesPerElement,Qe=s.isWebGL2===!0&&(Xe===r.INT||Xe===r.UNSIGNED_INT||G.gpuType===d0);if(G.isInterleavedBufferAttribute){const ht=G.data,se=ht.stride,en=G.offset;if(ht.isInstancedInterleavedBuffer){for(let ke=0;ke<X.locationSize;ke++)k(X.location+ke,ht.meshPerAttribute);W.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ke=0;ke<X.locationSize;ke++)z(X.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let ke=0;ke<X.locationSize;ke++)P(X.location+ke,ge/X.locationSize,Xe,Z,se*Fe,(en+ge/X.locationSize*ke)*Fe,Qe)}else{if(G.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)k(X.location+ht,G.meshPerAttribute);W.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ht=0;ht<X.locationSize;ht++)z(X.location+ht);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let ht=0;ht<X.locationSize;ht++)P(X.location+ht,ge/X.locationSize,Xe,Z,ge*Fe,ge/X.locationSize*ht*Fe,Qe)}}else if(de!==void 0){const Z=de[U];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(X.location,Z);break;case 3:r.vertexAttrib3fv(X.location,Z);break;case 4:r.vertexAttrib4fv(X.location,Z);break;default:r.vertexAttrib1fv(X.location,Z)}}}}F()}function w(){re();for(const W in h){const $=h[W];for(const I in $){const q=$[I];for(const ee in q)b(q[ee].object),delete q[ee];delete $[I]}delete h[W]}}function O(W){if(h[W.id]===void 0)return;const $=h[W.id];for(const I in $){const q=$[I];for(const ee in q)b(q[ee].object),delete q[ee];delete $[I]}delete h[W.id]}function ae(W){for(const $ in h){const I=h[$];if(I[W.id]===void 0)continue;const q=I[W.id];for(const ee in q)b(q[ee].object),delete q[ee];delete I[W.id]}}function re(){xe(),g=!0,m!==p&&(m=p,E(m.object))}function xe(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:_,reset:re,resetDefaultState:xe,dispose:w,releaseStatesOfGeometry:O,releaseStatesOfProgram:ae,initAttributes:R,enableAttribute:z,disableUnusedAttributes:F}}function HA(r,t,i,s){const o=s.isWebGL2;let c;function d(g){c=g}function h(g,_){r.drawArrays(c,g,_),i.update(_,c,1)}function p(g,_,y){if(y===0)return;let E,b;if(o)E=r,b="drawArraysInstanced";else if(E=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[b](c,g,_,y),i.update(_,c,y)}function m(g,_,y){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<y;b++)this.render(g[b],_[b]);else{E.multiDrawArraysWEBGL(c,g,0,_,0,y);let b=0;for(let T=0;T<y;T++)b+=_[T];i.update(b,c,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function GA(r,t,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=c(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=d||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),T=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,z=d||t.has("OES_texture_float"),k=R&&z,F=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:c,precision:h,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:D,vertexTextures:R,floatFragmentTextures:z,floatVertexTextures:k,maxSamples:F}}function VA(r){const t=this;let i=null,s=0,o=!1,c=!1;const d=new Xa,h=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const E=_.length!==0||y||s!==0||o;return o=y,s=_.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,E){const b=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||b===null||b.length===0||c&&!S)c?g(null):m();else{const D=c?0:s,R=D*4;let z=v.clippingState||null;p.value=z,z=g(b,y,R,E);for(let k=0;k!==R;++k)z[k]=i[k];v.clippingState=z,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,y,E,b){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=p.value,b!==!0||S===null){const v=E+T*4,D=y.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let R=0,z=E;R!==T;++R,z+=4)d.copy(_[R]).applyMatrix4(D,h),d.normal.toArray(S,z),S[z+3]=d.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function jA(r){let t=new WeakMap;function i(d,h){return h===Qh?d.mapping=Ur:h===Jh&&(d.mapping=Nr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Qh||h===Jh)if(t.has(d)){const p=t.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new tb(p.height/2);return m.fromEquirectangularTexture(r,d),t.set(d,m),d.addEventListener("dispose",o),i(m.texture,d.mapping)}else return null}}return d}function o(d){const h=d.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class z0 extends N0{constructor(t=-1,i=1,s=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=o+i,p=o-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=4,pv=[.125,.215,.35,.446,.526,.582],Es=20,Ih=new z0,mv=new bt;let Fh=null,Hh=0,Gh=0;const Ss=(1+Math.sqrt(5))/2,Rr=1/Ss,gv=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Ss,Rr),new Q(0,Ss,-Rr),new Q(Rr,0,Ss),new Q(-Rr,0,Ss),new Q(Ss,Rr,0),new Q(-Ss,Rr,0)];class _v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,o=100){Fh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,o,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fh,Hh,Gh),t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:di,minFilter:di,generateMipmaps:!1,type:ql,format:Ti,colorSpace:ua,depthBuffer:!1},o=vv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kA(c)),this._blurMaterial=XA(c,t,i)}return o}_compileMaterial(t){const i=new dn(this._lodPlanes[0],t);this._renderer.compile(i,Ih)}_sceneToCubeUV(t,i,s,o){const h=new pi(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(mv),g.toneMapping=Ka,g.autoClear=!1;const E=new w0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new dn(new la,E);let T=!1;const S=t.background;S?S.isColor&&(E.color.copy(S),t.background=null,T=!0):(E.color.copy(mv),T=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(h.up.set(0,p[v],0),h.lookAt(m[v],0,0)):D===1?(h.up.set(0,0,p[v]),h.lookAt(0,m[v],0)):(h.up.set(0,p[v],0),h.lookAt(0,0,m[v]));const R=this._cubeSize;Dc(o,D*R,v>2?R:0,R,R),g.setRenderTarget(o),T&&g.render(b,h),g.render(t,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=S}_textureToCubeUV(t,i){const s=this._renderer,o=t.mapping===Ur||t.mapping===Nr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new dn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Dc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Ih)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),d=gv[(o-1)%gv.length];this._blur(t,o-1,o,c,d)}i.autoClear=s}_blur(t,i,s,o,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,o,"latitudinal",c),this._halfBlur(d,t,s,s,o,"longitudinal",c)}_halfBlur(t,i,s,o,c,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new dn(this._lodPlanes[o],m),y=m.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Es-1),T=c/b,S=isFinite(c)?1+Math.floor(g*T):Es;S>Es&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Es}`);const v=[];let D=0;for(let P=0;P<Es;++P){const ce=P/T,w=Math.exp(-ce*ce/2);v.push(w),P===0?D+=w:P<S&&(D+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/D;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:R}=this;y.dTheta.value=b,y.mipInt.value=R-s;const z=this._sizeLods[o],k=3*z*(o>R-Cr?o-R+Cr:0),F=4*(this._cubeSize-z);Dc(i,k,F,3*z,2*z),p.setRenderTarget(i),p.render(_,Ih)}}function kA(r){const t=[],i=[],s=[];let o=r;const c=r-Cr+1+pv.length;for(let d=0;d<c;d++){const h=Math.pow(2,o);i.push(h);let p=1/h;d>r-Cr?p=pv[d-r+Cr-1]:d===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,y=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,b=6,T=3,S=2,v=1,D=new Float32Array(T*b*E),R=new Float32Array(S*b*E),z=new Float32Array(v*b*E);for(let F=0;F<E;F++){const P=F%3*2/3-1,ce=F>2?0:-1,w=[P,ce,0,P+2/3,ce,0,P+2/3,ce+1,0,P,ce,0,P+2/3,ce+1,0,P,ce+1,0];D.set(w,T*b*F),R.set(y,S*b*F);const O=[F,F,F,F,F,F];z.set(O,v*b*F)}const k=new Pi;k.setAttribute("position",new Oi(D,T)),k.setAttribute("uv",new Oi(R,S)),k.setAttribute("faceIndex",new Oi(z,v)),t.push(k),o>Cr&&o--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function vv(r,t,i){const s=new Rs(r,t,i);return s.texture.mapping=Yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dc(r,t,i,s,o){r.viewport.set(t,i,s,o),r.scissor.set(t,i,s,o)}function XA(r,t,i){const s=new Float32Array(Es),o=new Q(0,1,0);return new ws({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function xv(){return new ws({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function yv(){return new ws({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WA(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Qh||p===Jh,g=p===Ur||p===Nr;if(m||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let _=t.get(h);return i===null&&(i=new _v(r)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),t.set(h,_),_.texture}else{if(t.has(h))return t.get(h).texture;{const _=h.image;if(m&&_&&_.height>0||g&&_&&o(_)){i===null&&(i=new _v(r));const y=m?i.fromEquirectangular(h):i.fromCubemap(h);return t.set(h,y),h.addEventListener("dispose",c),y.texture}else return null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function qA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return t[s]=o,o}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const o=i(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function YA(r,t,i,s){const o={},c=new WeakMap;function d(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);for(const b in y.morphAttributes){const T=y.morphAttributes[b];for(let S=0,v=T.length;S<v;S++)t.remove(T[S])}y.removeEventListener("dispose",d),delete o[y.id];const E=c.get(y);E&&(t.remove(E),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,i.memory.geometries++),y}function p(_){const y=_.attributes;for(const b in y)t.update(y[b],r.ARRAY_BUFFER);const E=_.morphAttributes;for(const b in E){const T=E[b];for(let S=0,v=T.length;S<v;S++)t.update(T[S],r.ARRAY_BUFFER)}}function m(_){const y=[],E=_.index,b=_.attributes.position;let T=0;if(E!==null){const D=E.array;T=E.version;for(let R=0,z=D.length;R<z;R+=3){const k=D[R+0],F=D[R+1],P=D[R+2];y.push(k,F,F,P,P,k)}}else if(b!==void 0){const D=b.array;T=b.version;for(let R=0,z=D.length/3-1;R<z;R+=3){const k=R+0,F=R+1,P=R+2;y.push(k,F,F,P,P,k)}}else return;const S=new(E0(y)?D0:L0)(y,1);S.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const y=c.get(_);if(y){const E=_.index;E!==null&&y.version<E.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function ZA(r,t,i,s){const o=s.isWebGL2;let c;function d(E){c=E}let h,p;function m(E){h=E.type,p=E.bytesPerElement}function g(E,b){r.drawElements(c,b,h,E*p),i.update(b,c,1)}function _(E,b,T){if(T===0)return;let S,v;if(o)S=r,v="drawElementsInstanced";else if(S=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[v](c,b,h,E*p,T),i.update(b,c,T)}function y(E,b,T){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<T;v++)this.render(E[v]/p,b[v]);else{S.multiDrawElementsWEBGL(c,b,0,h,E,0,T);let v=0;for(let D=0;D<T;D++)v+=b[D];i.update(v,c,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=_,this.renderMultiDraw=y}function KA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:s}}function QA(r,t){return r[0]-t[0]}function JA(r,t){return Math.abs(t[1])-Math.abs(r[1])}function $A(r,t,i){const s={},o=new Float32Array(8),c=new WeakMap,d=new vn,h=[];for(let m=0;m<8;m++)h[m]=[m,0];function p(m,g,_){const y=m.morphTargetInfluences;if(t.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=b!==void 0?b.length:0;let S=c.get(g);if(S===void 0||S.count!==T){let $=function(){xe.dispose(),c.delete(g),g.removeEventListener("dispose",$)};var E=$;S!==void 0&&S.texture.dispose();const R=g.morphAttributes.position!==void 0,z=g.morphAttributes.normal!==void 0,k=g.morphAttributes.color!==void 0,F=g.morphAttributes.position||[],P=g.morphAttributes.normal||[],ce=g.morphAttributes.color||[];let w=0;R===!0&&(w=1),z===!0&&(w=2),k===!0&&(w=3);let O=g.attributes.position.count*w,ae=1;O>t.maxTextureSize&&(ae=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const re=new Float32Array(O*ae*4*T),xe=new A0(re,O,ae,T);xe.type=qa,xe.needsUpdate=!0;const W=w*4;for(let I=0;I<T;I++){const q=F[I],ee=P[I],he=ce[I],de=O*ae*4*I;for(let U=0;U<q.count;U++){const X=U*W;R===!0&&(d.fromBufferAttribute(q,U),re[de+X+0]=d.x,re[de+X+1]=d.y,re[de+X+2]=d.z,re[de+X+3]=0),z===!0&&(d.fromBufferAttribute(ee,U),re[de+X+4]=d.x,re[de+X+5]=d.y,re[de+X+6]=d.z,re[de+X+7]=0),k===!0&&(d.fromBufferAttribute(he,U),re[de+X+8]=d.x,re[de+X+9]=d.y,re[de+X+10]=d.z,re[de+X+11]=he.itemSize===4?d.w:1)}}S={count:T,texture:xe,size:new ut(O,ae)},c.set(g,S),g.addEventListener("dispose",$)}let v=0;for(let R=0;R<y.length;R++)v+=y[R];const D=g.morphTargetsRelative?1:1-v;_.getUniforms().setValue(r,"morphTargetBaseInfluence",D),_.getUniforms().setValue(r,"morphTargetInfluences",y),_.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),_.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}else{const b=y===void 0?0:y.length;let T=s[g.id];if(T===void 0||T.length!==b){T=[];for(let z=0;z<b;z++)T[z]=[z,0];s[g.id]=T}for(let z=0;z<b;z++){const k=T[z];k[0]=z,k[1]=y[z]}T.sort(JA);for(let z=0;z<8;z++)z<b&&T[z][1]?(h[z][0]=T[z][0],h[z][1]=T[z][1]):(h[z][0]=Number.MAX_SAFE_INTEGER,h[z][1]=0);h.sort(QA);const S=g.morphAttributes.position,v=g.morphAttributes.normal;let D=0;for(let z=0;z<8;z++){const k=h[z],F=k[0],P=k[1];F!==Number.MAX_SAFE_INTEGER&&P?(S&&g.getAttribute("morphTarget"+z)!==S[F]&&g.setAttribute("morphTarget"+z,S[F]),v&&g.getAttribute("morphNormal"+z)!==v[F]&&g.setAttribute("morphNormal"+z,v[F]),o[z]=P,D+=P):(S&&g.hasAttribute("morphTarget"+z)===!0&&g.deleteAttribute("morphTarget"+z),v&&g.hasAttribute("morphNormal"+z)===!0&&g.deleteAttribute("morphNormal"+z),o[z]=0)}const R=g.morphTargetsRelative?1:1-D;_.getUniforms().setValue(r,"morphTargetBaseInfluence",R),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:p}}function e1(r,t,i,s){let o=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(o.get(_)!==m&&(t.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return _}function d(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:d}}class B0 extends ni{constructor(t,i,s,o,c,d,h,p,m,g){if(g=g!==void 0?g:Ts,g!==Ts&&g!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ts&&(s=Wa),s===void 0&&g===Or&&(s=bs),super(null,o,c,d,h,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=h!==void 0?h:On,this.minFilter=p!==void 0?p:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const I0=new ni,F0=new B0(1,1);F0.compareFunction=M0;const H0=new A0,G0=new IE,V0=new O0,Sv=[],Mv=[],Ev=new Float32Array(16),bv=new Float32Array(9),Tv=new Float32Array(4);function Fr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const o=t*i;let c=Sv[o];if(c===void 0&&(c=new Float32Array(o),Sv[o]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,r[d].toArray(c,h)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function $c(r,t){let i=Mv[t];i===void 0&&(i=new Int32Array(t),Mv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function t1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function n1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),mn(i,t)}}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),mn(i,t)}}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),mn(i,t)}}function s1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;Tv.set(s),r.uniformMatrix2fv(this.addr,!1,Tv),mn(i,s)}}function r1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;bv.set(s),r.uniformMatrix3fv(this.addr,!1,bv),mn(i,s)}}function l1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;Ev.set(s),r.uniformMatrix4fv(this.addr,!1,Ev),mn(i,s)}}function o1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),mn(i,t)}}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),mn(i,t)}}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),mn(i,t)}}function h1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function d1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),mn(i,t)}}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),mn(i,t)}}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),mn(i,t)}}function g1(r,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);const c=this.type===r.SAMPLER_2D_SHADOW?F0:I0;i.setTexture2D(t||c,o)}function _1(r,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),i.setTexture3D(t||G0,o)}function v1(r,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),i.setTextureCube(t||V0,o)}function x1(r,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),i.setTexture2DArray(t||H0,o)}function y1(r){switch(r){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return a1;case 35674:return s1;case 35675:return r1;case 35676:return l1;case 5124:case 35670:return o1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return f1;case 5125:return h1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}function S1(r,t){r.uniform1fv(this.addr,t)}function M1(r,t){const i=Fr(t,this.size,2);r.uniform2fv(this.addr,i)}function E1(r,t){const i=Fr(t,this.size,3);r.uniform3fv(this.addr,i)}function b1(r,t){const i=Fr(t,this.size,4);r.uniform4fv(this.addr,i)}function T1(r,t){const i=Fr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function A1(r,t){const i=Fr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function R1(r,t){const i=Fr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function C1(r,t){r.uniform1iv(this.addr,t)}function w1(r,t){r.uniform2iv(this.addr,t)}function L1(r,t){r.uniform3iv(this.addr,t)}function D1(r,t){r.uniform4iv(this.addr,t)}function U1(r,t){r.uniform1uiv(this.addr,t)}function N1(r,t){r.uniform2uiv(this.addr,t)}function O1(r,t){r.uniform3uiv(this.addr,t)}function P1(r,t){r.uniform4uiv(this.addr,t)}function z1(r,t,i){const s=this.cache,o=t.length,c=$c(i,o);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let d=0;d!==o;++d)i.setTexture2D(t[d]||I0,c[d])}function B1(r,t,i){const s=this.cache,o=t.length,c=$c(i,o);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let d=0;d!==o;++d)i.setTexture3D(t[d]||G0,c[d])}function I1(r,t,i){const s=this.cache,o=t.length,c=$c(i,o);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let d=0;d!==o;++d)i.setTextureCube(t[d]||V0,c[d])}function F1(r,t,i){const s=this.cache,o=t.length,c=$c(i,o);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let d=0;d!==o;++d)i.setTexture2DArray(t[d]||H0,c[d])}function H1(r){switch(r){case 5126:return S1;case 35664:return M1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return L1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return N1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return F1}}class G1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=y1(i.type)}}class V1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=H1(i.type)}}class j1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const h=o[c];h.setValue(t,i[h.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Av(r,t){r.seq.push(t),r.map[t.id]=t}function k1(r,t,i){const s=r.name,o=s.length;for(Vh.lastIndex=0;;){const c=Vh.exec(s),d=Vh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===o){Av(i,m===void 0?new G1(h,r,t):new V1(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new j1(h),Av(i,_)),i=_}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const c=t.getActiveUniform(i,o),d=t.getUniformLocation(i,c.name);k1(c,d,this)}}setValue(t,i,s,o){const c=this.map[i];c!==void 0&&c.setValue(t,s,o)}setOptional(t,i,s){const o=i[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,i,s,o){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,i){const s=[];for(let o=0,c=t.length;o!==c;++o){const d=t[o];d.id in i&&s.push(d)}return s}}function Rv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const X1=37297;let W1=0;function q1(r,t){const i=r.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=o;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function Y1(r){const t=Bt.getPrimaries(Bt.workingColorSpace),i=Bt.getPrimaries(r);let s;switch(t===i?s="":t===jc&&i===Vc?s="LinearDisplayP3ToLinearSRGB":t===Vc&&i===jc&&(s="LinearSRGBToLinearDisplayP3"),r){case ua:case Zc:return[s,"LinearTransferOETF"];case bn:case dd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Cv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(s&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+o+`

`+q1(r.getShaderSource(t),d)}else return o}function Z1(r,t){const i=Y1(t);return`vec4 ${r}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function K1(r,t){let i;switch(t){case rE:i="Linear";break;case lE:i="Reinhard";break;case oE:i="OptimizedCineon";break;case cE:i="ACESFilmic";break;case fE:i="AgX";break;case uE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Q1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function J1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wr).join(`
`)}function $1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function eR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=r.getActiveAttrib(t,o),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:h}}return i}function wr(r){return r!==""}function wv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(r){return r.replace(tR,iR)}const nR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iR(r,t){let i=gt[t];if(i===void 0){const s=nR.get(t);if(s!==void 0)i=gt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ad(i)}const aR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(r){return r.replace(aR,sR)}function sR(r,t,i,s){let o="";for(let c=parseInt(t);c<parseInt(i);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Uv(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===c0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===u0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function lR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Nr:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oR(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Nr&&(t="ENVMAP_MODE_REFRACTION"),t}function cR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case f0:t="ENVMAP_BLENDING_MULTIPLY";break;case aE:t="ENVMAP_BLENDING_MIX";break;case sE:t="ENVMAP_BLENDING_ADD";break}return t}function uR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fR(r,t,i,s){const o=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=rR(i),m=lR(i),g=oR(i),_=cR(i),y=uR(i),E=i.isWebGL2?"":Q1(i),b=J1(i),T=$1(c),S=o.createProgram();let v,D,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(wr).join(`
`),v.length>0&&(v+=`
`),D=[E,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(wr).join(`
`),D.length>0&&(D+=`
`)):(v=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),D=[E,Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?gt.tonemapping_pars_fragment:"",i.toneMapping!==Ka?K1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Z1("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wr).join(`
`)),d=ad(d),d=wv(d,i),d=Lv(d,i),h=ad(h),h=wv(h,i),h=Lv(h,i),d=Dv(d),h=Dv(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,D=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const z=R+v+d,k=R+D+h,F=Rv(o,o.VERTEX_SHADER,z),P=Rv(o,o.FRAGMENT_SHADER,k);o.attachShader(S,F),o.attachShader(S,P),i.index0AttributeName!==void 0?o.bindAttribLocation(S,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(S,0,"position"),o.linkProgram(S);function ce(re){if(r.debug.checkShaderErrors){const xe=o.getProgramInfoLog(S).trim(),W=o.getShaderInfoLog(F).trim(),$=o.getShaderInfoLog(P).trim();let I=!0,q=!0;if(o.getProgramParameter(S,o.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,S,F,P);else{const ee=Cv(o,F,"vertex"),he=Cv(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(S,o.VALIDATE_STATUS)+`

Program Info Log: `+xe+`
`+ee+`
`+he)}else xe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",xe):(W===""||$==="")&&(q=!1);q&&(re.diagnostics={runnable:I,programLog:xe,vertexShader:{log:W,prefix:v},fragmentShader:{log:$,prefix:D}})}o.deleteShader(F),o.deleteShader(P),w=new Ic(o,S),O=eR(o,S)}let w;this.getUniforms=function(){return w===void 0&&ce(this),w};let O;this.getAttributes=function(){return O===void 0&&ce(this),O};let ae=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=o.getProgramParameter(S,X1)),ae},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=W1++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=P,this}let hR=0;class dR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new pR(t),i.set(t,s)),s}}class pR{constructor(t){this.id=hR++,this.code=t,this.usedTimes=0}}function mR(r,t,i,s,o,c,d){const h=new R0,p=new dR,m=[],g=o.isWebGL2,_=o.logarithmicDepthBuffer,y=o.vertexTextures;let E=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return w===0?"uv":`uv${w}`}function S(w,O,ae,re,xe){const W=re.fog,$=xe.geometry,I=w.isMeshStandardMaterial?re.environment:null,q=(w.isMeshStandardMaterial?i:t).get(w.envMap||I),ee=q&&q.mapping===Yc?q.image.height:null,he=b[w.type];w.precision!==null&&(E=o.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,U=de!==void 0?de.length:0;let X=0;$.morphAttributes.position!==void 0&&(X=1),$.morphAttributes.normal!==void 0&&(X=2),$.morphAttributes.color!==void 0&&(X=3);let G,Z,ge,Ee;if(he){const Ft=Ni[he];G=Ft.vertexShader,Z=Ft.fragmentShader}else G=w.vertexShader,Z=w.fragmentShader,p.update(w),ge=p.getVertexShaderID(w),Ee=p.getFragmentShaderID(w);const Ce=r.getRenderTarget(),Xe=xe.isInstancedMesh===!0,Fe=xe.isBatchedMesh===!0,Qe=!!w.map,ht=!!w.matcap,se=!!q,en=!!w.aoMap,ke=!!w.lightMap,at=!!w.bumpMap,Ge=!!w.normalMap,It=!!w.displacementMap,rt=!!w.emissiveMap,N=!!w.metalnessMap,C=!!w.roughnessMap,ie=w.anisotropy>0,Te=w.clearcoat>0,be=w.iridescence>0,ye=w.sheen>0,We=w.transmission>0,Ne=ie&&!!w.anisotropyMap,Be=Te&&!!w.clearcoatMap,Ke=Te&&!!w.clearcoatNormalMap,ct=Te&&!!w.clearcoatRoughnessMap,Me=be&&!!w.iridescenceMap,Rt=be&&!!w.iridescenceThicknessMap,dt=ye&&!!w.sheenColorMap,nt=ye&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Ue=!!w.specularColorMap,B=!!w.specularIntensityMap,Re=We&&!!w.transmissionMap,qe=We&&!!w.thicknessMap,Ie=!!w.gradientMap,Se=!!w.alphaMap,V=w.alphaTest>0,Ae=!!w.alphaHash,we=!!w.extensions,et=!!$.attributes.uv1,Ye=!!$.attributes.uv2,vt=!!$.attributes.uv3;let _t=Ka;return w.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(_t=r.toneMapping),{isWebGL2:g,shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:G,fragmentShader:Z,defines:w.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:Fe,instancing:Xe,instancingColor:Xe&&xe.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:ua,map:Qe,matcap:ht,envMap:se,envMapMode:se&&q.mapping,envMapCubeUVHeight:ee,aoMap:en,lightMap:ke,bumpMap:at,normalMap:Ge,displacementMap:y&&It,emissiveMap:rt,normalMapObjectSpace:Ge&&w.normalMapType===EE,normalMapTangentSpace:Ge&&w.normalMapType===S0,metalnessMap:N,roughnessMap:C,anisotropy:ie,anisotropyMap:Ne,clearcoat:Te,clearcoatMap:Be,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ct,iridescence:be,iridescenceMap:Me,iridescenceThicknessMap:Rt,sheen:ye,sheenColorMap:dt,sheenRoughnessMap:nt,specularMap:ze,specularColorMap:Ue,specularIntensityMap:B,transmission:We,transmissionMap:Re,thicknessMap:qe,gradientMap:Ie,opaque:w.transparent===!1&&w.blending===Lr,alphaMap:Se,alphaTest:V,alphaHash:Ae,combine:w.combine,mapUv:Qe&&T(w.map.channel),aoMapUv:en&&T(w.aoMap.channel),lightMapUv:ke&&T(w.lightMap.channel),bumpMapUv:at&&T(w.bumpMap.channel),normalMapUv:Ge&&T(w.normalMap.channel),displacementMapUv:It&&T(w.displacementMap.channel),emissiveMapUv:rt&&T(w.emissiveMap.channel),metalnessMapUv:N&&T(w.metalnessMap.channel),roughnessMapUv:C&&T(w.roughnessMap.channel),anisotropyMapUv:Ne&&T(w.anisotropyMap.channel),clearcoatMapUv:Be&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(w.sheenRoughnessMap.channel),specularMapUv:ze&&T(w.specularMap.channel),specularColorMapUv:Ue&&T(w.specularColorMap.channel),specularIntensityMapUv:B&&T(w.specularIntensityMap.channel),transmissionMapUv:Re&&T(w.transmissionMap.channel),thicknessMapUv:qe&&T(w.thicknessMap.channel),alphaMapUv:Se&&T(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||ie),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:Ye,vertexUv3s:vt,pointsUvs:xe.isPoints===!0&&!!$.attributes.uv&&(Qe||Se),fog:!!W,useFog:w.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:xe.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&ae.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&Bt.getTransfer(w.map.colorSpace)===Wt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:we&&w.extensions.derivatives===!0,extensionFragDepth:we&&w.extensions.fragDepth===!0,extensionDrawBuffers:we&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&w.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const O=[];if(w.shaderID?O.push(w.shaderID):(O.push(w.customVertexShaderID),O.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ae in w.defines)O.push(ae),O.push(w.defines[ae]);return w.isRawShaderMaterial===!1&&(D(O,w),R(O,w),O.push(r.outputColorSpace)),O.push(w.customProgramCacheKey),O.join()}function D(w,O){w.push(O.precision),w.push(O.outputColorSpace),w.push(O.envMapMode),w.push(O.envMapCubeUVHeight),w.push(O.mapUv),w.push(O.alphaMapUv),w.push(O.lightMapUv),w.push(O.aoMapUv),w.push(O.bumpMapUv),w.push(O.normalMapUv),w.push(O.displacementMapUv),w.push(O.emissiveMapUv),w.push(O.metalnessMapUv),w.push(O.roughnessMapUv),w.push(O.anisotropyMapUv),w.push(O.clearcoatMapUv),w.push(O.clearcoatNormalMapUv),w.push(O.clearcoatRoughnessMapUv),w.push(O.iridescenceMapUv),w.push(O.iridescenceThicknessMapUv),w.push(O.sheenColorMapUv),w.push(O.sheenRoughnessMapUv),w.push(O.specularMapUv),w.push(O.specularColorMapUv),w.push(O.specularIntensityMapUv),w.push(O.transmissionMapUv),w.push(O.thicknessMapUv),w.push(O.combine),w.push(O.fogExp2),w.push(O.sizeAttenuation),w.push(O.morphTargetsCount),w.push(O.morphAttributeCount),w.push(O.numDirLights),w.push(O.numPointLights),w.push(O.numSpotLights),w.push(O.numSpotLightMaps),w.push(O.numHemiLights),w.push(O.numRectAreaLights),w.push(O.numDirLightShadows),w.push(O.numPointLightShadows),w.push(O.numSpotLightShadows),w.push(O.numSpotLightShadowsWithMaps),w.push(O.numLightProbes),w.push(O.shadowMapType),w.push(O.toneMapping),w.push(O.numClippingPlanes),w.push(O.numClipIntersection),w.push(O.depthPacking)}function R(w,O){h.disableAll(),O.isWebGL2&&h.enable(0),O.supportsVertexTextures&&h.enable(1),O.instancing&&h.enable(2),O.instancingColor&&h.enable(3),O.matcap&&h.enable(4),O.envMap&&h.enable(5),O.normalMapObjectSpace&&h.enable(6),O.normalMapTangentSpace&&h.enable(7),O.clearcoat&&h.enable(8),O.iridescence&&h.enable(9),O.alphaTest&&h.enable(10),O.vertexColors&&h.enable(11),O.vertexAlphas&&h.enable(12),O.vertexUv1s&&h.enable(13),O.vertexUv2s&&h.enable(14),O.vertexUv3s&&h.enable(15),O.vertexTangents&&h.enable(16),O.anisotropy&&h.enable(17),O.alphaHash&&h.enable(18),O.batching&&h.enable(19),w.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.skinning&&h.enable(4),O.morphTargets&&h.enable(5),O.morphNormals&&h.enable(6),O.morphColors&&h.enable(7),O.premultipliedAlpha&&h.enable(8),O.shadowMapEnabled&&h.enable(9),O.useLegacyLights&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),w.push(h.mask)}function z(w){const O=b[w.type];let ae;if(O){const re=Ni[O];ae=QE.clone(re.uniforms)}else ae=w.uniforms;return ae}function k(w,O){let ae;for(let re=0,xe=m.length;re<xe;re++){const W=m[re];if(W.cacheKey===O){ae=W,++ae.usedTimes;break}}return ae===void 0&&(ae=new fR(r,O,w,c),m.push(ae)),ae}function F(w){if(--w.usedTimes===0){const O=m.indexOf(w);m[O]=m[m.length-1],m.pop(),w.destroy()}}function P(w){p.remove(w)}function ce(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:z,acquireProgram:k,releaseProgram:F,releaseShaderCache:P,programs:m,dispose:ce}}function gR(){let r=new WeakMap;function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function i(c){r.delete(c)}function s(c,d,h){r.get(c)[d]=h}function o(){r=new WeakMap}return{get:t,remove:i,update:s,dispose:o}}function _R(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ov(){const r=[];let t=0;const i=[],s=[],o=[];function c(){t=0,i.length=0,s.length=0,o.length=0}function d(_,y,E,b,T,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:E,groupOrder:b,renderOrder:_.renderOrder,z:T,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=E,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=T,v.group=S),t++,v}function h(_,y,E,b,T,S){const v=d(_,y,E,b,T,S);E.transmission>0?s.push(v):E.transparent===!0?o.push(v):i.push(v)}function p(_,y,E,b,T,S){const v=d(_,y,E,b,T,S);E.transmission>0?s.unshift(v):E.transparent===!0?o.unshift(v):i.unshift(v)}function m(_,y){i.length>1&&i.sort(_||_R),s.length>1&&s.sort(y||Nv),o.length>1&&o.sort(y||Nv)}function g(){for(let _=t,y=r.length;_<y;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:o,init:c,push:h,unshift:p,finish:g,sort:m}}function vR(){let r=new WeakMap;function t(s,o){const c=r.get(s);let d;return c===void 0?(d=new Ov,r.set(s,[d])):o>=c.length?(d=new Ov,c.push(d)):d=c[o],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function xR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new bt};break;case"SpotLight":i={position:new Q,direction:new Q,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function yR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let SR=0;function MR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ER(r,t){const i=new xR,s=yR(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)o.probe.push(new Q);const c=new Q,d=new fn,h=new fn;function p(g,_){let y=0,E=0,b=0;for(let re=0;re<9;re++)o.probe[re].set(0,0,0);let T=0,S=0,v=0,D=0,R=0,z=0,k=0,F=0,P=0,ce=0,w=0;g.sort(MR);const O=_===!0?Math.PI:1;for(let re=0,xe=g.length;re<xe;re++){const W=g[re],$=W.color,I=W.intensity,q=W.distance,ee=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)y+=$.r*I*O,E+=$.g*I*O,b+=$.b*I*O;else if(W.isLightProbe){for(let he=0;he<9;he++)o.probe[he].addScaledVector(W.sh.coefficients[he],I);w++}else if(W.isDirectionalLight){const he=i.get(W);if(he.color.copy(W.color).multiplyScalar(W.intensity*O),W.castShadow){const de=W.shadow,U=s.get(W);U.shadowBias=de.bias,U.shadowNormalBias=de.normalBias,U.shadowRadius=de.radius,U.shadowMapSize=de.mapSize,o.directionalShadow[T]=U,o.directionalShadowMap[T]=ee,o.directionalShadowMatrix[T]=W.shadow.matrix,z++}o.directional[T]=he,T++}else if(W.isSpotLight){const he=i.get(W);he.position.setFromMatrixPosition(W.matrixWorld),he.color.copy($).multiplyScalar(I*O),he.distance=q,he.coneCos=Math.cos(W.angle),he.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),he.decay=W.decay,o.spot[v]=he;const de=W.shadow;if(W.map&&(o.spotLightMap[P]=W.map,P++,de.updateMatrices(W),W.castShadow&&ce++),o.spotLightMatrix[v]=de.matrix,W.castShadow){const U=s.get(W);U.shadowBias=de.bias,U.shadowNormalBias=de.normalBias,U.shadowRadius=de.radius,U.shadowMapSize=de.mapSize,o.spotShadow[v]=U,o.spotShadowMap[v]=ee,F++}v++}else if(W.isRectAreaLight){const he=i.get(W);he.color.copy($).multiplyScalar(I),he.halfWidth.set(W.width*.5,0,0),he.halfHeight.set(0,W.height*.5,0),o.rectArea[D]=he,D++}else if(W.isPointLight){const he=i.get(W);if(he.color.copy(W.color).multiplyScalar(W.intensity*O),he.distance=W.distance,he.decay=W.decay,W.castShadow){const de=W.shadow,U=s.get(W);U.shadowBias=de.bias,U.shadowNormalBias=de.normalBias,U.shadowRadius=de.radius,U.shadowMapSize=de.mapSize,U.shadowCameraNear=de.camera.near,U.shadowCameraFar=de.camera.far,o.pointShadow[S]=U,o.pointShadowMap[S]=ee,o.pointShadowMatrix[S]=W.shadow.matrix,k++}o.point[S]=he,S++}else if(W.isHemisphereLight){const he=i.get(W);he.skyColor.copy(W.color).multiplyScalar(I*O),he.groundColor.copy(W.groundColor).multiplyScalar(I*O),o.hemi[R]=he,R++}}D>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_FLOAT_1,o.rectAreaLTC2=Le.LTC_FLOAT_2):(o.rectAreaLTC1=Le.LTC_HALF_1,o.rectAreaLTC2=Le.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_FLOAT_1,o.rectAreaLTC2=Le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_HALF_1,o.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=y,o.ambient[1]=E,o.ambient[2]=b;const ae=o.hash;(ae.directionalLength!==T||ae.pointLength!==S||ae.spotLength!==v||ae.rectAreaLength!==D||ae.hemiLength!==R||ae.numDirectionalShadows!==z||ae.numPointShadows!==k||ae.numSpotShadows!==F||ae.numSpotMaps!==P||ae.numLightProbes!==w)&&(o.directional.length=T,o.spot.length=v,o.rectArea.length=D,o.point.length=S,o.hemi.length=R,o.directionalShadow.length=z,o.directionalShadowMap.length=z,o.pointShadow.length=k,o.pointShadowMap.length=k,o.spotShadow.length=F,o.spotShadowMap.length=F,o.directionalShadowMatrix.length=z,o.pointShadowMatrix.length=k,o.spotLightMatrix.length=F+P-ce,o.spotLightMap.length=P,o.numSpotLightShadowsWithMaps=ce,o.numLightProbes=w,ae.directionalLength=T,ae.pointLength=S,ae.spotLength=v,ae.rectAreaLength=D,ae.hemiLength=R,ae.numDirectionalShadows=z,ae.numPointShadows=k,ae.numSpotShadows=F,ae.numSpotMaps=P,ae.numLightProbes=w,o.version=SR++)}function m(g,_){let y=0,E=0,b=0,T=0,S=0;const v=_.matrixWorldInverse;for(let D=0,R=g.length;D<R;D++){const z=g[D];if(z.isDirectionalLight){const k=o.directional[y];k.direction.setFromMatrixPosition(z.matrixWorld),c.setFromMatrixPosition(z.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(v),y++}else if(z.isSpotLight){const k=o.spot[b];k.position.setFromMatrixPosition(z.matrixWorld),k.position.applyMatrix4(v),k.direction.setFromMatrixPosition(z.matrixWorld),c.setFromMatrixPosition(z.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(v),b++}else if(z.isRectAreaLight){const k=o.rectArea[T];k.position.setFromMatrixPosition(z.matrixWorld),k.position.applyMatrix4(v),h.identity(),d.copy(z.matrixWorld),d.premultiply(v),h.extractRotation(d),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),k.halfWidth.applyMatrix4(h),k.halfHeight.applyMatrix4(h),T++}else if(z.isPointLight){const k=o.point[E];k.position.setFromMatrixPosition(z.matrixWorld),k.position.applyMatrix4(v),E++}else if(z.isHemisphereLight){const k=o.hemi[S];k.direction.setFromMatrixPosition(z.matrixWorld),k.direction.transformDirection(v),S++}}}return{setup:p,setupView:m,state:o}}function Pv(r,t){const i=new ER(r,t),s=[],o=[];function c(){s.length=0,o.length=0}function d(_){s.push(_)}function h(_){o.push(_)}function p(_){i.setup(s,_)}function m(_){i.setupView(s,_)}return{init:c,state:{lightsArray:s,shadowsArray:o,lights:i},setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function bR(r,t){let i=new WeakMap;function s(c,d=0){const h=i.get(c);let p;return h===void 0?(p=new Pv(r,t),i.set(c,[p])):d>=h.length?(p=new Pv(r,t),h.push(p)):p=h[d],p}function o(){i=new WeakMap}return{get:s,dispose:o}}class TR extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AR extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const RR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wR(r,t,i){let s=new md;const o=new ut,c=new ut,d=new vn,h=new TR({depthPacking:ME}),p=new AR,m={},g=i.maxTextureSize,_={[Ja]:kn,[kn]:Ja,[sa]:sa},y=new ws({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:RR,fragmentShader:CR}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const b=new Pi;b.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new dn(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let v=this.type;this.render=function(F,P,ce){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const w=r.getRenderTarget(),O=r.getActiveCubeFace(),ae=r.getActiveMipmapLevel(),re=r.state;re.setBlending(Za),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const xe=v!==aa&&this.type===aa,W=v===aa&&this.type!==aa;for(let $=0,I=F.length;$<I;$++){const q=F[$],ee=q.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const he=ee.getFrameExtents();if(o.multiply(he),c.copy(ee.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/he.x),o.x=c.x*he.x,ee.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/he.y),o.y=c.y*he.y,ee.mapSize.y=c.y)),ee.map===null||xe===!0||W===!0){const U=this.type!==aa?{minFilter:On,magFilter:On}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Rs(o.x,o.y,U),ee.map.texture.name=q.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();const de=ee.getViewportCount();for(let U=0;U<de;U++){const X=ee.getViewport(U);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),re.viewport(d),ee.updateMatrices(q,U),s=ee.getFrustum(),z(P,ce,ee.camera,q,this.type)}ee.isPointLightShadow!==!0&&this.type===aa&&D(ee,ce),ee.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(w,O,ae)};function D(F,P){const ce=t.update(T);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Rs(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(P,null,ce,y,T,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(P,null,ce,E,T,null)}function R(F,P,ce,w){let O=null;const ae=ce.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(ae!==void 0)O=ae;else if(O=ce.isPointLight===!0?p:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const re=O.uuid,xe=P.uuid;let W=m[re];W===void 0&&(W={},m[re]=W);let $=W[xe];$===void 0&&($=O.clone(),W[xe]=$,P.addEventListener("dispose",k)),O=$}if(O.visible=P.visible,O.wireframe=P.wireframe,w===aa?O.side=P.shadowSide!==null?P.shadowSide:P.side:O.side=P.shadowSide!==null?P.shadowSide:_[P.side],O.alphaMap=P.alphaMap,O.alphaTest=P.alphaTest,O.map=P.map,O.clipShadows=P.clipShadows,O.clippingPlanes=P.clippingPlanes,O.clipIntersection=P.clipIntersection,O.displacementMap=P.displacementMap,O.displacementScale=P.displacementScale,O.displacementBias=P.displacementBias,O.wireframeLinewidth=P.wireframeLinewidth,O.linewidth=P.linewidth,ce.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const re=r.properties.get(O);re.light=ce}return O}function z(F,P,ce,w,O){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&O===aa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,F.matrixWorld);const xe=t.update(F),W=F.material;if(Array.isArray(W)){const $=xe.groups;for(let I=0,q=$.length;I<q;I++){const ee=$[I],he=W[ee.materialIndex];if(he&&he.visible){const de=R(F,he,w,O);F.onBeforeShadow(r,F,P,ce,xe,de,ee),r.renderBufferDirect(ce,null,xe,de,F,ee),F.onAfterShadow(r,F,P,ce,xe,de,ee)}}}else if(W.visible){const $=R(F,W,w,O);F.onBeforeShadow(r,F,P,ce,xe,$,null),r.renderBufferDirect(ce,null,xe,$,F,null),F.onAfterShadow(r,F,P,ce,xe,$,null)}}const re=F.children;for(let xe=0,W=re.length;xe<W;xe++)z(re[xe],P,ce,w,O)}function k(F){F.target.removeEventListener("dispose",k);for(const ce in m){const w=m[ce],O=F.target.uuid;O in w&&(w[O].dispose(),delete w[O])}}}function LR(r,t,i){const s=i.isWebGL2;function o(){let V=!1;const Ae=new vn;let we=null;const et=new vn(0,0,0,0);return{setMask:function(Ye){we!==Ye&&!V&&(r.colorMask(Ye,Ye,Ye,Ye),we=Ye)},setLocked:function(Ye){V=Ye},setClear:function(Ye,vt,_t,Vt,Ft){Ft===!0&&(Ye*=Vt,vt*=Vt,_t*=Vt),Ae.set(Ye,vt,_t,Vt),et.equals(Ae)===!1&&(r.clearColor(Ye,vt,_t,Vt),et.copy(Ae))},reset:function(){V=!1,we=null,et.set(-1,0,0,0)}}}function c(){let V=!1,Ae=null,we=null,et=null;return{setTest:function(Ye){Ye?Fe(r.DEPTH_TEST):Qe(r.DEPTH_TEST)},setMask:function(Ye){Ae!==Ye&&!V&&(r.depthMask(Ye),Ae=Ye)},setFunc:function(Ye){if(we!==Ye){switch(Ye){case QM:r.depthFunc(r.NEVER);break;case JM:r.depthFunc(r.ALWAYS);break;case $M:r.depthFunc(r.LESS);break;case Hc:r.depthFunc(r.LEQUAL);break;case eE:r.depthFunc(r.EQUAL);break;case tE:r.depthFunc(r.GEQUAL);break;case nE:r.depthFunc(r.GREATER);break;case iE:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=Ye}},setLocked:function(Ye){V=Ye},setClear:function(Ye){et!==Ye&&(r.clearDepth(Ye),et=Ye)},reset:function(){V=!1,Ae=null,we=null,et=null}}}function d(){let V=!1,Ae=null,we=null,et=null,Ye=null,vt=null,_t=null,Vt=null,Ft=null;return{setTest:function(At){V||(At?Fe(r.STENCIL_TEST):Qe(r.STENCIL_TEST))},setMask:function(At){Ae!==At&&!V&&(r.stencilMask(At),Ae=At)},setFunc:function(At,Yt,Wn){(we!==At||et!==Yt||Ye!==Wn)&&(r.stencilFunc(At,Yt,Wn),we=At,et=Yt,Ye=Wn)},setOp:function(At,Yt,Wn){(vt!==At||_t!==Yt||Vt!==Wn)&&(r.stencilOp(At,Yt,Wn),vt=At,_t=Yt,Vt=Wn)},setLocked:function(At){V=At},setClear:function(At){Ft!==At&&(r.clearStencil(At),Ft=At)},reset:function(){V=!1,Ae=null,we=null,et=null,Ye=null,vt=null,_t=null,Vt=null,Ft=null}}}const h=new o,p=new c,m=new d,g=new WeakMap,_=new WeakMap;let y={},E={},b=new WeakMap,T=[],S=null,v=!1,D=null,R=null,z=null,k=null,F=null,P=null,ce=null,w=new bt(0,0,0),O=0,ae=!1,re=null,xe=null,W=null,$=null,I=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,he=0;const de=r.getParameter(r.VERSION);de.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(de)[1]),ee=he>=1):de.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ee=he>=2);let U=null,X={};const G=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ge=new vn().fromArray(G),Ee=new vn().fromArray(Z);function Ce(V,Ae,we,et){const Ye=new Uint8Array(4),vt=r.createTexture();r.bindTexture(V,vt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _t=0;_t<we;_t++)s&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(Ae,0,r.RGBA,1,1,et,0,r.RGBA,r.UNSIGNED_BYTE,Ye):r.texImage2D(Ae+_t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ye);return vt}const Xe={};Xe[r.TEXTURE_2D]=Ce(r.TEXTURE_2D,r.TEXTURE_2D,1),Xe[r.TEXTURE_CUBE_MAP]=Ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Xe[r.TEXTURE_2D_ARRAY]=Ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Xe[r.TEXTURE_3D]=Ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Fe(r.DEPTH_TEST),p.setFunc(Hc),rt(!1),N(g_),Fe(r.CULL_FACE),Ge(Za);function Fe(V){y[V]!==!0&&(r.enable(V),y[V]=!0)}function Qe(V){y[V]!==!1&&(r.disable(V),y[V]=!1)}function ht(V,Ae){return E[V]!==Ae?(r.bindFramebuffer(V,Ae),E[V]=Ae,s&&(V===r.DRAW_FRAMEBUFFER&&(E[r.FRAMEBUFFER]=Ae),V===r.FRAMEBUFFER&&(E[r.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function se(V,Ae){let we=T,et=!1;if(V)if(we=b.get(Ae),we===void 0&&(we=[],b.set(Ae,we)),V.isWebGLMultipleRenderTargets){const Ye=V.texture;if(we.length!==Ye.length||we[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,_t=Ye.length;vt<_t;vt++)we[vt]=r.COLOR_ATTACHMENT0+vt;we.length=Ye.length,et=!0}}else we[0]!==r.COLOR_ATTACHMENT0&&(we[0]=r.COLOR_ATTACHMENT0,et=!0);else we[0]!==r.BACK&&(we[0]=r.BACK,et=!0);et&&(i.isWebGL2?r.drawBuffers(we):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function en(V){return S!==V?(r.useProgram(V),S=V,!0):!1}const ke={[Ms]:r.FUNC_ADD,[zM]:r.FUNC_SUBTRACT,[BM]:r.FUNC_REVERSE_SUBTRACT};if(s)ke[y_]=r.MIN,ke[S_]=r.MAX;else{const V=t.get("EXT_blend_minmax");V!==null&&(ke[y_]=V.MIN_EXT,ke[S_]=V.MAX_EXT)}const at={[IM]:r.ZERO,[FM]:r.ONE,[HM]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[WM]:r.SRC_ALPHA_SATURATE,[kM]:r.DST_COLOR,[VM]:r.DST_ALPHA,[GM]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[XM]:r.ONE_MINUS_DST_COLOR,[jM]:r.ONE_MINUS_DST_ALPHA,[qM]:r.CONSTANT_COLOR,[YM]:r.ONE_MINUS_CONSTANT_COLOR,[ZM]:r.CONSTANT_ALPHA,[KM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(V,Ae,we,et,Ye,vt,_t,Vt,Ft,At){if(V===Za){v===!0&&(Qe(r.BLEND),v=!1);return}if(v===!1&&(Fe(r.BLEND),v=!0),V!==PM){if(V!==D||At!==ae){if((R!==Ms||F!==Ms)&&(r.blendEquation(r.FUNC_ADD),R=Ms,F=Ms),At)switch(V){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case __:r.blendFunc(r.ONE,r.ONE);break;case v_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case x_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case __:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case v_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case x_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}z=null,k=null,P=null,ce=null,w.set(0,0,0),O=0,D=V,ae=At}return}Ye=Ye||Ae,vt=vt||we,_t=_t||et,(Ae!==R||Ye!==F)&&(r.blendEquationSeparate(ke[Ae],ke[Ye]),R=Ae,F=Ye),(we!==z||et!==k||vt!==P||_t!==ce)&&(r.blendFuncSeparate(at[we],at[et],at[vt],at[_t]),z=we,k=et,P=vt,ce=_t),(Vt.equals(w)===!1||Ft!==O)&&(r.blendColor(Vt.r,Vt.g,Vt.b,Ft),w.copy(Vt),O=Ft),D=V,ae=!1}function It(V,Ae){V.side===sa?Qe(r.CULL_FACE):Fe(r.CULL_FACE);let we=V.side===kn;Ae&&(we=!we),rt(we),V.blending===Lr&&V.transparent===!1?Ge(Za):Ge(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),p.setFunc(V.depthFunc),p.setTest(V.depthTest),p.setMask(V.depthWrite),h.setMask(V.colorWrite);const et=V.stencilWrite;m.setTest(et),et&&(m.setMask(V.stencilWriteMask),m.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),m.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Fe(r.SAMPLE_ALPHA_TO_COVERAGE):Qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(V){re!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),re=V)}function N(V){V!==NM?(Fe(r.CULL_FACE),V!==xe&&(V===g_?r.cullFace(r.BACK):V===OM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Qe(r.CULL_FACE),xe=V}function C(V){V!==W&&(ee&&r.lineWidth(V),W=V)}function ie(V,Ae,we){V?(Fe(r.POLYGON_OFFSET_FILL),($!==Ae||I!==we)&&(r.polygonOffset(Ae,we),$=Ae,I=we)):Qe(r.POLYGON_OFFSET_FILL)}function Te(V){V?Fe(r.SCISSOR_TEST):Qe(r.SCISSOR_TEST)}function be(V){V===void 0&&(V=r.TEXTURE0+q-1),U!==V&&(r.activeTexture(V),U=V)}function ye(V,Ae,we){we===void 0&&(U===null?we=r.TEXTURE0+q-1:we=U);let et=X[we];et===void 0&&(et={type:void 0,texture:void 0},X[we]=et),(et.type!==V||et.texture!==Ae)&&(U!==we&&(r.activeTexture(we),U=we),r.bindTexture(V,Ae||Xe[V]),et.type=V,et.texture=Ae)}function We(){const V=X[U];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(V){ge.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ge.copy(V))}function Re(V){Ee.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ee.copy(V))}function qe(V,Ae){let we=_.get(Ae);we===void 0&&(we=new WeakMap,_.set(Ae,we));let et=we.get(V);et===void 0&&(et=r.getUniformBlockIndex(Ae,V.name),we.set(V,et))}function Ie(V,Ae){const et=_.get(Ae).get(V);g.get(Ae)!==et&&(r.uniformBlockBinding(Ae,et,V.__bindingPointIndex),g.set(Ae,et))}function Se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),y={},U=null,X={},E={},b=new WeakMap,T=[],S=null,v=!1,D=null,R=null,z=null,k=null,F=null,P=null,ce=null,w=new bt(0,0,0),O=0,ae=!1,re=null,xe=null,W=null,$=null,I=null,ge.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),h.reset(),p.reset(),m.reset()}return{buffers:{color:h,depth:p,stencil:m},enable:Fe,disable:Qe,bindFramebuffer:ht,drawBuffers:se,useProgram:en,setBlending:Ge,setMaterial:It,setFlipSided:rt,setCullFace:N,setLineWidth:C,setPolygonOffset:ie,setScissorTest:Te,activeTexture:be,bindTexture:ye,unbindTexture:We,compressedTexImage2D:Ne,compressedTexImage3D:Be,texImage2D:ze,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:Ie,texStorage2D:dt,texStorage3D:nt,texSubImage2D:Ke,texSubImage3D:ct,compressedTexSubImage2D:Me,compressedTexSubImage3D:Rt,scissor:B,viewport:Re,reset:Se}}function DR(r,t,i,s,o,c,d){const h=o.isWebGL2,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,C){return E?new OffscreenCanvas(N,C):Xc("canvas")}function T(N,C,ie,Te){let be=1;if((N.width>Te||N.height>Te)&&(be=Te/Math.max(N.width,N.height)),be<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const ye=C?id:Math.floor,We=ye(be*N.width),Ne=ye(be*N.height);_===void 0&&(_=b(We,Ne));const Be=ie?b(We,Ne):_;return Be.width=We,Be.height=Ne,Be.getContext("2d").drawImage(N,0,0,We,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+We+"x"+Ne+")."),Be}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function S(N){return Q_(N.width)&&Q_(N.height)}function v(N){return h?!1:N.wrapS!==bi||N.wrapT!==bi||N.minFilter!==On&&N.minFilter!==di}function D(N,C){return N.generateMipmaps&&C&&N.minFilter!==On&&N.minFilter!==di}function R(N){r.generateMipmap(N)}function z(N,C,ie,Te,be=!1){if(h===!1)return C;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye=C;if(C===r.RED&&(ie===r.FLOAT&&(ye=r.R32F),ie===r.HALF_FLOAT&&(ye=r.R16F),ie===r.UNSIGNED_BYTE&&(ye=r.R8)),C===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ye=r.R8UI),ie===r.UNSIGNED_SHORT&&(ye=r.R16UI),ie===r.UNSIGNED_INT&&(ye=r.R32UI),ie===r.BYTE&&(ye=r.R8I),ie===r.SHORT&&(ye=r.R16I),ie===r.INT&&(ye=r.R32I)),C===r.RG&&(ie===r.FLOAT&&(ye=r.RG32F),ie===r.HALF_FLOAT&&(ye=r.RG16F),ie===r.UNSIGNED_BYTE&&(ye=r.RG8)),C===r.RGBA){const We=be?Gc:Bt.getTransfer(Te);ie===r.FLOAT&&(ye=r.RGBA32F),ie===r.HALF_FLOAT&&(ye=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(ye=We===Wt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ye}function k(N,C,ie){return D(N,ie)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==di?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function F(N){return N===On||N===M_||N===ph?r.NEAREST:r.LINEAR}function P(N){const C=N.target;C.removeEventListener("dispose",P),w(C),C.isVideoTexture&&g.delete(C)}function ce(N){const C=N.target;C.removeEventListener("dispose",ce),ae(C)}function w(N){const C=s.get(N);if(C.__webglInit===void 0)return;const ie=N.source,Te=y.get(ie);if(Te){const be=Te[C.__cacheKey];be.usedTimes--,be.usedTimes===0&&O(N),Object.keys(Te).length===0&&y.delete(ie)}s.remove(N)}function O(N){const C=s.get(N);r.deleteTexture(C.__webglTexture);const ie=N.source,Te=y.get(ie);delete Te[C.__cacheKey],d.memory.textures--}function ae(N){const C=N.texture,ie=s.get(N),Te=s.get(C);if(Te.__webglTexture!==void 0&&(r.deleteTexture(Te.__webglTexture),d.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(ie.__webglFramebuffer[be]))for(let ye=0;ye<ie.__webglFramebuffer[be].length;ye++)r.deleteFramebuffer(ie.__webglFramebuffer[be][ye]);else r.deleteFramebuffer(ie.__webglFramebuffer[be]);ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer[be])}else{if(Array.isArray(ie.__webglFramebuffer))for(let be=0;be<ie.__webglFramebuffer.length;be++)r.deleteFramebuffer(ie.__webglFramebuffer[be]);else r.deleteFramebuffer(ie.__webglFramebuffer);if(ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let be=0;be<ie.__webglColorRenderbuffer.length;be++)ie.__webglColorRenderbuffer[be]&&r.deleteRenderbuffer(ie.__webglColorRenderbuffer[be]);ie.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let be=0,ye=C.length;be<ye;be++){const We=s.get(C[be]);We.__webglTexture&&(r.deleteTexture(We.__webglTexture),d.memory.textures--),s.remove(C[be])}s.remove(C),s.remove(N)}let re=0;function xe(){re=0}function W(){const N=re;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),re+=1,N}function $(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function I(N,C){const ie=s.get(N);if(N.isVideoTexture&&It(N),N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){const Te=N.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(ie,N,C);return}}i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+C)}function q(N,C){const ie=s.get(N);if(N.version>0&&ie.__version!==N.version){ge(ie,N,C);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+C)}function ee(N,C){const ie=s.get(N);if(N.version>0&&ie.__version!==N.version){ge(ie,N,C);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+C)}function he(N,C){const ie=s.get(N);if(N.version>0&&ie.__version!==N.version){Ee(ie,N,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+C)}const de={[$h]:r.REPEAT,[bi]:r.CLAMP_TO_EDGE,[ed]:r.MIRRORED_REPEAT},U={[On]:r.NEAREST,[M_]:r.NEAREST_MIPMAP_NEAREST,[ph]:r.NEAREST_MIPMAP_LINEAR,[di]:r.LINEAR,[hE]:r.LINEAR_MIPMAP_NEAREST,[Wl]:r.LINEAR_MIPMAP_LINEAR},X={[bE]:r.NEVER,[LE]:r.ALWAYS,[TE]:r.LESS,[M0]:r.LEQUAL,[AE]:r.EQUAL,[wE]:r.GEQUAL,[RE]:r.GREATER,[CE]:r.NOTEQUAL};function G(N,C,ie){if(ie?(r.texParameteri(N,r.TEXTURE_WRAP_S,de[C.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,de[C.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,de[C.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,U[C.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,U[C.minFilter])):(r.texParameteri(N,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(N,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==bi||C.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,r.TEXTURE_MAG_FILTER,F(C.magFilter)),r.texParameteri(N,r.TEXTURE_MIN_FILTER,F(C.minFilter)),C.minFilter!==On&&C.minFilter!==di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,X[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Te=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===On||C.minFilter!==ph&&C.minFilter!==Wl||C.type===qa&&t.has("OES_texture_float_linear")===!1||h===!1&&C.type===ql&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||s.get(C).__currentAnisotropy)&&(r.texParameterf(N,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy)}}function Z(N,C){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",P));const Te=C.source;let be=y.get(Te);be===void 0&&(be={},y.set(Te,be));const ye=$(C);if(ye!==N.__cacheKey){be[ye]===void 0&&(be[ye]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),be[ye].usedTimes++;const We=be[N.__cacheKey];We!==void 0&&(be[N.__cacheKey].usedTimes--,We.usedTimes===0&&O(C)),N.__cacheKey=ye,N.__webglTexture=be[ye].texture}return ie}function ge(N,C,ie){let Te=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Te=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Te=r.TEXTURE_3D);const be=Z(N,C),ye=C.source;i.bindTexture(Te,N.__webglTexture,r.TEXTURE0+ie);const We=s.get(ye);if(ye.version!==We.__version||be===!0){i.activeTexture(r.TEXTURE0+ie);const Ne=Bt.getPrimaries(Bt.workingColorSpace),Be=C.colorSpace===mi?null:Bt.getPrimaries(C.colorSpace),Ke=C.colorSpace===mi||Ne===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const ct=v(C)&&S(C.image)===!1;let Me=T(C.image,ct,!1,o.maxTextureSize);Me=rt(C,Me);const Rt=S(Me)||h,dt=c.convert(C.format,C.colorSpace);let nt=c.convert(C.type),ze=z(C.internalFormat,dt,nt,C.colorSpace,C.isVideoTexture);G(Te,C,Rt);let Ue;const B=C.mipmaps,Re=h&&C.isVideoTexture!==!0&&ze!==x0,qe=We.__version===void 0||be===!0,Ie=k(C,Me,Rt);if(C.isDepthTexture)ze=r.DEPTH_COMPONENT,h?C.type===qa?ze=r.DEPTH_COMPONENT32F:C.type===Wa?ze=r.DEPTH_COMPONENT24:C.type===bs?ze=r.DEPTH24_STENCIL8:ze=r.DEPTH_COMPONENT16:C.type===qa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Ts&&ze===r.DEPTH_COMPONENT&&C.type!==hd&&C.type!==Wa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Wa,nt=c.convert(C.type)),C.format===Or&&ze===r.DEPTH_COMPONENT&&(ze=r.DEPTH_STENCIL,C.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=bs,nt=c.convert(C.type))),qe&&(Re?i.texStorage2D(r.TEXTURE_2D,1,ze,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,ze,Me.width,Me.height,0,dt,nt,null));else if(C.isDataTexture)if(B.length>0&&Rt){Re&&qe&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,B[0].width,B[0].height);for(let Se=0,V=B.length;Se<V;Se++)Ue=B[Se],Re?i.texSubImage2D(r.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,dt,nt,Ue.data):i.texImage2D(r.TEXTURE_2D,Se,ze,Ue.width,Ue.height,0,dt,nt,Ue.data);C.generateMipmaps=!1}else Re?(qe&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,Me.width,Me.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,dt,nt,Me.data)):i.texImage2D(r.TEXTURE_2D,0,ze,Me.width,Me.height,0,dt,nt,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Re&&qe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,B[0].width,B[0].height,Me.depth);for(let Se=0,V=B.length;Se<V;Se++)Ue=B[Se],C.format!==Ti?dt!==null?Re?i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,Me.depth,dt,Ue.data,0,0):i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,ze,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?i.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,Me.depth,dt,nt,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Se,ze,Ue.width,Ue.height,Me.depth,0,dt,nt,Ue.data)}else{Re&&qe&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,B[0].width,B[0].height);for(let Se=0,V=B.length;Se<V;Se++)Ue=B[Se],C.format!==Ti?dt!==null?Re?i.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,dt,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,Se,ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?i.texSubImage2D(r.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,dt,nt,Ue.data):i.texImage2D(r.TEXTURE_2D,Se,ze,Ue.width,Ue.height,0,dt,nt,Ue.data)}else if(C.isDataArrayTexture)Re?(qe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ze,Me.width,Me.height,Me.depth),i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,dt,nt,Me.data)):i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Me.width,Me.height,Me.depth,0,dt,nt,Me.data);else if(C.isData3DTexture)Re?(qe&&i.texStorage3D(r.TEXTURE_3D,Ie,ze,Me.width,Me.height,Me.depth),i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,dt,nt,Me.data)):i.texImage3D(r.TEXTURE_3D,0,ze,Me.width,Me.height,Me.depth,0,dt,nt,Me.data);else if(C.isFramebufferTexture){if(qe)if(Re)i.texStorage2D(r.TEXTURE_2D,Ie,ze,Me.width,Me.height);else{let Se=Me.width,V=Me.height;for(let Ae=0;Ae<Ie;Ae++)i.texImage2D(r.TEXTURE_2D,Ae,ze,Se,V,0,dt,nt,null),Se>>=1,V>>=1}}else if(B.length>0&&Rt){Re&&qe&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,B[0].width,B[0].height);for(let Se=0,V=B.length;Se<V;Se++)Ue=B[Se],Re?i.texSubImage2D(r.TEXTURE_2D,Se,0,0,dt,nt,Ue):i.texImage2D(r.TEXTURE_2D,Se,ze,dt,nt,Ue);C.generateMipmaps=!1}else Re?(qe&&i.texStorage2D(r.TEXTURE_2D,Ie,ze,Me.width,Me.height),i.texSubImage2D(r.TEXTURE_2D,0,0,0,dt,nt,Me)):i.texImage2D(r.TEXTURE_2D,0,ze,dt,nt,Me);D(C,Rt)&&R(Te),We.__version=ye.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Ee(N,C,ie){if(C.image.length!==6)return;const Te=Z(N,C),be=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+ie);const ye=s.get(be);if(be.version!==ye.__version||Te===!0){i.activeTexture(r.TEXTURE0+ie);const We=Bt.getPrimaries(Bt.workingColorSpace),Ne=C.colorSpace===mi?null:Bt.getPrimaries(C.colorSpace),Be=C.colorSpace===mi||We===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ke=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,Me=[];for(let Se=0;Se<6;Se++)!Ke&&!ct?Me[Se]=T(C.image[Se],!1,!0,o.maxCubemapSize):Me[Se]=ct?C.image[Se].image:C.image[Se],Me[Se]=rt(C,Me[Se]);const Rt=Me[0],dt=S(Rt)||h,nt=c.convert(C.format,C.colorSpace),ze=c.convert(C.type),Ue=z(C.internalFormat,nt,ze,C.colorSpace),B=h&&C.isVideoTexture!==!0,Re=ye.__version===void 0||Te===!0;let qe=k(C,Rt,dt);G(r.TEXTURE_CUBE_MAP,C,dt);let Ie;if(Ke){B&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Ue,Rt.width,Rt.height);for(let Se=0;Se<6;Se++){Ie=Me[Se].mipmaps;for(let V=0;V<Ie.length;V++){const Ae=Ie[V];C.format!==Ti?nt!==null?B?i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V,0,0,Ae.width,Ae.height,nt,Ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V,Ue,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V,0,0,Ae.width,Ae.height,nt,ze,Ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V,Ue,Ae.width,Ae.height,0,nt,ze,Ae.data)}}}else{Ie=C.mipmaps,B&&Re&&(Ie.length>0&&qe++,i.texStorage2D(r.TEXTURE_CUBE_MAP,qe,Ue,Me[0].width,Me[0].height));for(let Se=0;Se<6;Se++)if(ct){B?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Me[Se].width,Me[Se].height,nt,ze,Me[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,Me[Se].width,Me[Se].height,0,nt,ze,Me[Se].data);for(let V=0;V<Ie.length;V++){const we=Ie[V].image[Se].image;B?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V+1,0,0,we.width,we.height,nt,ze,we.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V+1,Ue,we.width,we.height,0,nt,ze,we.data)}}else{B?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,nt,ze,Me[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,nt,ze,Me[Se]);for(let V=0;V<Ie.length;V++){const Ae=Ie[V];B?i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V+1,0,0,nt,ze,Ae.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,V+1,Ue,nt,ze,Ae.image[Se])}}}D(C,dt)&&R(r.TEXTURE_CUBE_MAP),ye.__version=be.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Ce(N,C,ie,Te,be,ye){const We=c.convert(ie.format,ie.colorSpace),Ne=c.convert(ie.type),Be=z(ie.internalFormat,We,Ne,ie.colorSpace);if(!s.get(C).__hasExternalTextures){const ct=Math.max(1,C.width>>ye),Me=Math.max(1,C.height>>ye);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,ye,Be,ct,Me,C.depth,0,We,Ne,null):i.texImage2D(be,ye,Be,ct,Me,0,We,Ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Ge(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Te,be,s.get(ie).__webglTexture,0,at(C)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Te,be,s.get(ie).__webglTexture,ye),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(N,C,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,N),C.depthBuffer&&!C.stencilBuffer){let Te=h===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ie||Ge(C)){const be=C.depthTexture;be&&be.isDepthTexture&&(be.type===qa?Te=r.DEPTH_COMPONENT32F:be.type===Wa&&(Te=r.DEPTH_COMPONENT24));const ye=at(C);Ge(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,Te,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,Te,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,Te,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,N)}else if(C.depthBuffer&&C.stencilBuffer){const Te=at(C);ie&&Ge(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,r.DEPTH24_STENCIL8,C.width,C.height):Ge(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,N)}else{const Te=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let be=0;be<Te.length;be++){const ye=Te[be],We=c.convert(ye.format,ye.colorSpace),Ne=c.convert(ye.type),Be=z(ye.internalFormat,We,Ne,ye.colorSpace),Ke=at(C);ie&&Ge(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Be,C.width,C.height):Ge(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,Be,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Be,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),I(C.depthTexture,0);const Te=s.get(C.depthTexture).__webglTexture,be=at(C);if(C.depthTexture.format===Ts)Ge(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0,be):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0);else if(C.depthTexture.format===Or)Ge(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0,be):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function Qe(N){const C=s.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Fe(C.__webglFramebuffer,N)}else if(ie){C.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Te]),C.__webglDepthbuffer[Te]=r.createRenderbuffer(),Xe(C.__webglDepthbuffer[Te],N,!1)}else i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),Xe(C.__webglDepthbuffer,N,!1);i.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(N,C,ie){const Te=s.get(N);C!==void 0&&Ce(Te.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Qe(N)}function se(N){const C=N.texture,ie=s.get(N),Te=s.get(C);N.addEventListener("dispose",ce),N.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture()),Te.__version=C.version,d.memory.textures++);const be=N.isWebGLCubeRenderTarget===!0,ye=N.isWebGLMultipleRenderTargets===!0,We=S(N)||h;if(be){ie.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(h&&C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer[Ne]=[];for(let Be=0;Be<C.mipmaps.length;Be++)ie.__webglFramebuffer[Ne][Be]=r.createFramebuffer()}else ie.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(h&&C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)ie.__webglFramebuffer[Ne]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(ye)if(o.drawBuffers){const Ne=N.texture;for(let Be=0,Ke=Ne.length;Be<Ke;Be++){const ct=s.get(Ne[Be]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&N.samples>0&&Ge(N)===!1){const Ne=ye?C:[C];ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Be=0;Be<Ne.length;Be++){const Ke=Ne[Be];ie.__webglColorRenderbuffer[Be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Be]);const ct=c.convert(Ke.format,Ke.colorSpace),Me=c.convert(Ke.type),Rt=z(Ke.internalFormat,ct,Me,Ke.colorSpace,N.isXRRenderTarget===!0),dt=at(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,Rt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Be])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(ie.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(be){i.bindTexture(r.TEXTURE_CUBE_MAP,Te.__webglTexture),G(r.TEXTURE_CUBE_MAP,C,We);for(let Ne=0;Ne<6;Ne++)if(h&&C.mipmaps&&C.mipmaps.length>0)for(let Be=0;Be<C.mipmaps.length;Be++)Ce(ie.__webglFramebuffer[Ne][Be],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Be);else Ce(ie.__webglFramebuffer[Ne],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);D(C,We)&&R(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ye){const Ne=N.texture;for(let Be=0,Ke=Ne.length;Be<Ke;Be++){const ct=Ne[Be],Me=s.get(ct);i.bindTexture(r.TEXTURE_2D,Me.__webglTexture),G(r.TEXTURE_2D,ct,We),Ce(ie.__webglFramebuffer,N,ct,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,0),D(ct,We)&&R(r.TEXTURE_2D)}i.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(h?Ne=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Ne,Te.__webglTexture),G(Ne,C,We),h&&C.mipmaps&&C.mipmaps.length>0)for(let Be=0;Be<C.mipmaps.length;Be++)Ce(ie.__webglFramebuffer[Be],N,C,r.COLOR_ATTACHMENT0,Ne,Be);else Ce(ie.__webglFramebuffer,N,C,r.COLOR_ATTACHMENT0,Ne,0);D(C,We)&&R(Ne),i.unbindTexture()}N.depthBuffer&&Qe(N)}function en(N){const C=S(N)||h,ie=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let Te=0,be=ie.length;Te<be;Te++){const ye=ie[Te];if(D(ye,C)){const We=N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ne=s.get(ye).__webglTexture;i.bindTexture(We,Ne),R(We),i.unbindTexture()}}}function ke(N){if(h&&N.samples>0&&Ge(N)===!1){const C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ie=N.width,Te=N.height;let be=r.COLOR_BUFFER_BIT;const ye=[],We=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(N),Be=N.isWebGLMultipleRenderTargets===!0;if(Be)for(let Ke=0;Ke<C.length;Ke++)i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ke=0;Ke<C.length;Ke++){ye.push(r.COLOR_ATTACHMENT0+Ke),N.depthBuffer&&ye.push(We);const ct=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(ct===!1&&(N.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),Be&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ke]),ct===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[We]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[We])),Be){const Me=s.get(C[Ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,ie,Te,0,0,ie,Te,be,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye)}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Be)for(let Ke=0;Ke<C.length;Ke++){i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ke]);const ct=s.get(C[Ke]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ke,r.TEXTURE_2D,ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function at(N){return Math.min(o.maxSamples,N.samples)}function Ge(N){const C=s.get(N);return h&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(N){const C=d.render.frame;g.get(N)!==C&&(g.set(N,C),N.update())}function rt(N,C){const ie=N.colorSpace,Te=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===td||ie!==ua&&ie!==mi&&(Bt.getTransfer(ie)===Wt?h===!1?t.has("EXT_sRGB")===!0&&Te===Ti?(N.format=td,N.minFilter=di,N.generateMipmaps=!1):C=b0.sRGBToLinear(C):(Te!==Ti||be!==Qa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),C}this.allocateTextureUnit=W,this.resetTextureUnits=xe,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=he,this.rebindTextures=ht,this.setupRenderTarget=se,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ge}function UR(r,t,i){const s=i.isWebGL2;function o(c,d=mi){let h;const p=Bt.getTransfer(d);if(c===Qa)return r.UNSIGNED_BYTE;if(c===p0)return r.UNSIGNED_SHORT_4_4_4_4;if(c===m0)return r.UNSIGNED_SHORT_5_5_5_1;if(c===dE)return r.BYTE;if(c===pE)return r.SHORT;if(c===hd)return r.UNSIGNED_SHORT;if(c===d0)return r.INT;if(c===Wa)return r.UNSIGNED_INT;if(c===qa)return r.FLOAT;if(c===ql)return s?r.HALF_FLOAT:(h=t.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(c===mE)return r.ALPHA;if(c===Ti)return r.RGBA;if(c===gE)return r.LUMINANCE;if(c===_E)return r.LUMINANCE_ALPHA;if(c===Ts)return r.DEPTH_COMPONENT;if(c===Or)return r.DEPTH_STENCIL;if(c===td)return h=t.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(c===vE)return r.RED;if(c===g0)return r.RED_INTEGER;if(c===xE)return r.RG;if(c===_0)return r.RG_INTEGER;if(c===v0)return r.RGBA_INTEGER;if(c===mh||c===gh||c===_h||c===vh)if(p===Wt)if(h=t.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(c===mh)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===gh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===_h)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===vh)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=t.get("WEBGL_compressed_texture_s3tc"),h!==null){if(c===mh)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===gh)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===_h)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===vh)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===E_||c===b_||c===T_||c===A_)if(h=t.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(c===E_)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===b_)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===T_)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===A_)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===x0)return h=t.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===R_||c===C_)if(h=t.get("WEBGL_compressed_texture_etc"),h!==null){if(c===R_)return p===Wt?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(c===C_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===w_||c===L_||c===D_||c===U_||c===N_||c===O_||c===P_||c===z_||c===B_||c===I_||c===F_||c===H_||c===G_||c===V_)if(h=t.get("WEBGL_compressed_texture_astc"),h!==null){if(c===w_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===L_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===D_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===U_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===N_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===O_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===P_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===z_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===B_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===I_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===F_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===H_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===G_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===V_)return p===Wt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===xh||c===j_||c===k_)if(h=t.get("EXT_texture_compression_bptc"),h!==null){if(c===xh)return p===Wt?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===j_)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===k_)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===yE||c===X_||c===W_||c===q_)if(h=t.get("EXT_texture_compression_rgtc"),h!==null){if(c===xh)return h.COMPRESSED_RED_RGTC1_EXT;if(c===X_)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===W_)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===q_)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===bs?s?r.UNSIGNED_INT_24_8:(h=t.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):r[c]!==void 0?r[c]:null}return{convert:o}}class NR extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ya extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OR={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let o=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),v=this._getHandJoint(m,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),E=.02,b=.005;m.inputState.pinching&&y>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=i.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OR)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ya;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class PR extends Ls{constructor(t,i){super();const s=this;let o=null,c=1,d=null,h="local-floor",p=1,m=null,g=null,_=null,y=null,E=null,b=null;const T=i.getContextAttributes();let S=null,v=null;const D=[],R=[],z=new ut;let k=null;const F=new pi;F.layers.enable(1),F.viewport=new vn;const P=new pi;P.layers.enable(2),P.viewport=new vn;const ce=[F,P],w=new NR;w.layers.enable(1),w.layers.enable(2);let O=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=D[G];return Z===void 0&&(Z=new jh,D[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=D[G];return Z===void 0&&(Z=new jh,D[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=D[G];return Z===void 0&&(Z=new jh,D[G]=Z),Z.getHandSpace()};function re(G){const Z=R.indexOf(G.inputSource);if(Z===-1)return;const ge=D[Z];ge!==void 0&&(ge.update(G.inputSource,G.frame,m||d),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function xe(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",xe),o.removeEventListener("inputsourceschange",W);for(let G=0;G<D.length;G++){const Z=R[G];Z!==null&&(R[G]=null,D[G].disconnect(Z))}O=null,ae=null,t.setRenderTarget(S),E=null,y=null,_=null,o=null,v=null,X.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(S=t.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",xe),o.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(z),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:o.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(o,i,Z),o.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),v=new Rs(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:Qa,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil})}else{let Z=null,ge=null,Ee=null;T.depth&&(Ee=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=T.stencil?Or:Ts,ge=T.stencil?bs:Wa);const Ce={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:c};_=new XRWebGLBinding(o,i),y=_.createProjectionLayer(Ce),o.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),v=new Rs(y.textureWidth,y.textureHeight,{format:Ti,type:Qa,depthTexture:new B0(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0});const Xe=t.properties.get(v);Xe.__ignoreDepthValues=y.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(h),X.setContext(o),X.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function W(G){for(let Z=0;Z<G.removed.length;Z++){const ge=G.removed[Z],Ee=R.indexOf(ge);Ee>=0&&(R[Ee]=null,D[Ee].disconnect(ge))}for(let Z=0;Z<G.added.length;Z++){const ge=G.added[Z];let Ee=R.indexOf(ge);if(Ee===-1){for(let Xe=0;Xe<D.length;Xe++)if(Xe>=R.length){R.push(ge),Ee=Xe;break}else if(R[Xe]===null){R[Xe]=ge,Ee=Xe;break}if(Ee===-1)break}const Ce=D[Ee];Ce&&Ce.connect(ge)}}const $=new Q,I=new Q;function q(G,Z,ge){$.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(ge.matrixWorld);const Ee=$.distanceTo(I),Ce=Z.projectionMatrix.elements,Xe=ge.projectionMatrix.elements,Fe=Ce[14]/(Ce[10]-1),Qe=Ce[14]/(Ce[10]+1),ht=(Ce[9]+1)/Ce[5],se=(Ce[9]-1)/Ce[5],en=(Ce[8]-1)/Ce[0],ke=(Xe[8]+1)/Xe[0],at=Fe*en,Ge=Fe*ke,It=Ee/(-en+ke),rt=It*-en;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(rt),G.translateZ(It),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const N=Fe+It,C=Qe+It,ie=at-rt,Te=Ge+(Ee-rt),be=ht*Qe/C*N,ye=se*Qe/C*N;G.projectionMatrix.makePerspective(ie,Te,be,ye,N,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function ee(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;w.near=P.near=F.near=G.near,w.far=P.far=F.far=G.far,(O!==w.near||ae!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),O=w.near,ae=w.far);const Z=G.parent,ge=w.cameras;ee(w,Z);for(let Ee=0;Ee<ge.length;Ee++)ee(ge[Ee],Z);ge.length===2?q(w,F,P):w.projectionMatrix.copy(F.projectionMatrix),he(G,w,Z)};function he(G,Z,ge){ge===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=nd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&E===null))return p},this.setFoveation=function(G){p=G,y!==null&&(y.fixedFoveation=G),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=G)};let de=null;function U(G,Z){if(g=Z.getViewerPose(m||d),b=Z,g!==null){const ge=g.views;E!==null&&(t.setRenderTargetFramebuffer(v,E.framebuffer),t.setRenderTarget(v));let Ee=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,Ee=!0);for(let Ce=0;Ce<ge.length;Ce++){const Xe=ge[Ce];let Fe=null;if(E!==null)Fe=E.getViewport(Xe);else{const ht=_.getViewSubImage(y,Xe);Fe=ht.viewport,Ce===0&&(t.setRenderTargetTextures(v,ht.colorTexture,y.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(v))}let Qe=ce[Ce];Qe===void 0&&(Qe=new pi,Qe.layers.enable(Ce),Qe.viewport=new vn,ce[Ce]=Qe),Qe.matrix.fromArray(Xe.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Xe.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ce===0&&(w.matrix.copy(Qe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ee===!0&&w.cameras.push(Qe)}}for(let ge=0;ge<D.length;ge++){const Ee=R[ge],Ce=D[ge];Ee!==null&&Ce!==void 0&&Ce.update(Ee,Z,m||d)}de&&de(G,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),b=null}const X=new P0;X.setAnimationLoop(U),this.setAnimationLoop=function(G){de=G},this.dispose=function(){}}}function zR(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,U0(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,D,R,z){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),y(S,v),v.isMeshPhysicalMaterial&&E(S,v,z)):v.isMeshMatcapMaterial?(c(S,v),b(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,D,R):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=t.get(v).envMap;if(D&&(S.envMap.value=D,S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap){S.lightMap.value=v.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=v.lightMapIntensity*R,i(v.lightMap,S.lightMapTransform)}v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,D,R){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=R*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),t.get(v).envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function E(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const D=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function BR(r,t,i,s){let o={},c={},d=[];const h=i.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(D,R){const z=R.program;s.uniformBlockBinding(D,z)}function m(D,R){let z=o[D.id];z===void 0&&(b(D),z=g(D),o[D.id]=z,D.addEventListener("dispose",S));const k=R.program;s.updateUBOMapping(D,k);const F=t.render.frame;c[D.id]!==F&&(y(D),c[D.id]=F)}function g(D){const R=_();D.__bindingPointIndex=R;const z=r.createBuffer(),k=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,k,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,z),z}function _(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const R=o[D.id],z=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let F=0,P=z.length;F<P;F++){const ce=Array.isArray(z[F])?z[F]:[z[F]];for(let w=0,O=ce.length;w<O;w++){const ae=ce[w];if(E(ae,F,w,k)===!0){const re=ae.__offset,xe=Array.isArray(ae.value)?ae.value:[ae.value];let W=0;for(let $=0;$<xe.length;$++){const I=xe[$],q=T(I);typeof I=="number"||typeof I=="boolean"?(ae.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,re+W,ae.__data)):I.isMatrix3?(ae.__data[0]=I.elements[0],ae.__data[1]=I.elements[1],ae.__data[2]=I.elements[2],ae.__data[3]=0,ae.__data[4]=I.elements[3],ae.__data[5]=I.elements[4],ae.__data[6]=I.elements[5],ae.__data[7]=0,ae.__data[8]=I.elements[6],ae.__data[9]=I.elements[7],ae.__data[10]=I.elements[8],ae.__data[11]=0):(I.toArray(ae.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,re,ae.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,R,z,k){const F=D.value,P=R+"_"+z;if(k[P]===void 0)return typeof F=="number"||typeof F=="boolean"?k[P]=F:k[P]=F.clone(),!0;{const ce=k[P];if(typeof F=="number"||typeof F=="boolean"){if(ce!==F)return k[P]=F,!0}else if(ce.equals(F)===!1)return ce.copy(F),!0}return!1}function b(D){const R=D.uniforms;let z=0;const k=16;for(let P=0,ce=R.length;P<ce;P++){const w=Array.isArray(R[P])?R[P]:[R[P]];for(let O=0,ae=w.length;O<ae;O++){const re=w[O],xe=Array.isArray(re.value)?re.value:[re.value];for(let W=0,$=xe.length;W<$;W++){const I=xe[W],q=T(I),ee=z%k;ee!==0&&k-ee<q.boundary&&(z+=k-ee),re.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=z,z+=q.storage}}}const F=z%k;return F>0&&(z+=k-F),D.__size=z,D.__cache={},this}function T(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function S(D){const R=D.target;R.removeEventListener("dispose",S);const z=d.indexOf(R.__bindingPointIndex);d.splice(z,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function v(){for(const D in o)r.deleteBuffer(o[D]);d=[],o={},c={}}return{bind:p,update:m,dispose:v}}class j0{constructor(t={}){const{canvas:i=NE(),context:s=null,depth:o=!0,stencil:c=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=d;const E=new Uint32Array(4),b=new Int32Array(4);let T=null,S=null;const v=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this._useLegacyLights=!1,this.toneMapping=Ka,this.toneMappingExposure=1;const R=this;let z=!1,k=0,F=0,P=null,ce=-1,w=null;const O=new vn,ae=new vn;let re=null;const xe=new bt(0);let W=0,$=i.width,I=i.height,q=1,ee=null,he=null;const de=new vn(0,0,$,I),U=new vn(0,0,$,I);let X=!1;const G=new md;let Z=!1,ge=!1,Ee=null;const Ce=new fn,Xe=new ut,Fe=new Q,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return P===null?q:1}let se=s;function en(L,K){for(let oe=0;oe<L.length;oe++){const ue=L[oe],le=i.getContext(ue,K);if(le!==null)return le}return null}try{const L={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fd}`),i.addEventListener("webglcontextlost",Se,!1),i.addEventListener("webglcontextrestored",V,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),se===null){const K=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&K.shift(),se=en(K,L),se===null)throw en(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&se instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),se.getShaderPrecisionFormat===void 0&&(se.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ke,at,Ge,It,rt,N,C,ie,Te,be,ye,We,Ne,Be,Ke,ct,Me,Rt,dt,nt,ze,Ue,B,Re;function qe(){ke=new qA(se),at=new GA(se,ke,t),ke.init(at),Ue=new UR(se,ke,at),Ge=new LR(se,ke,at),It=new KA(se),rt=new gR,N=new DR(se,ke,Ge,rt,at,Ue,It),C=new jA(R),ie=new WA(R),Te=new ab(se,at),B=new FA(se,ke,Te,at),be=new YA(se,Te,It,B),ye=new e1(se,be,Te,It),dt=new $A(se,at,N),ct=new VA(rt),We=new mR(R,C,ie,ke,at,B,ct),Ne=new zR(R,rt),Be=new vR,Ke=new bR(ke,at),Rt=new IA(R,C,ie,Ge,ye,y,p),Me=new wR(R,ye,at),Re=new BR(se,It,at,Ge),nt=new HA(se,ke,It,at),ze=new ZA(se,ke,It,at),It.programs=We.programs,R.capabilities=at,R.extensions=ke,R.properties=rt,R.renderLists=Be,R.shadowMap=Me,R.state=Ge,R.info=It}qe();const Ie=new PR(R,se);this.xr=Ie,this.getContext=function(){return se},this.getContextAttributes=function(){return se.getContextAttributes()},this.forceContextLoss=function(){const L=ke.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ke.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize($,I,!1))},this.getSize=function(L){return L.set($,I)},this.setSize=function(L,K,oe=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=L,I=K,i.width=Math.floor(L*q),i.height=Math.floor(K*q),oe===!0&&(i.style.width=L+"px",i.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set($*q,I*q).floor()},this.setDrawingBufferSize=function(L,K,oe){$=L,I=K,q=oe,i.width=Math.floor(L*oe),i.height=Math.floor(K*oe),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy(de)},this.setViewport=function(L,K,oe,ue){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,K,oe,ue),Ge.viewport(O.copy(de).multiplyScalar(q).floor())},this.getScissor=function(L){return L.copy(U)},this.setScissor=function(L,K,oe,ue){L.isVector4?U.set(L.x,L.y,L.z,L.w):U.set(L,K,oe,ue),Ge.scissor(ae.copy(U).multiplyScalar(q).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(L){Ge.setScissorTest(X=L)},this.setOpaqueSort=function(L){ee=L},this.setTransparentSort=function(L){he=L},this.getClearColor=function(L){return L.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(L=!0,K=!0,oe=!0){let ue=0;if(L){let le=!1;if(P!==null){const Pe=P.texture.format;le=Pe===v0||Pe===_0||Pe===g0}if(le){const Pe=P.texture.type,Ve=Pe===Qa||Pe===Wa||Pe===hd||Pe===bs||Pe===p0||Pe===m0,$e=Rt.getClearColor(),tt=Rt.getClearAlpha(),Ze=$e.r,st=$e.g,lt=$e.b;Ve?(E[0]=Ze,E[1]=st,E[2]=lt,E[3]=tt,se.clearBufferuiv(se.COLOR,0,E)):(b[0]=Ze,b[1]=st,b[2]=lt,b[3]=tt,se.clearBufferiv(se.COLOR,0,b))}else ue|=se.COLOR_BUFFER_BIT}K&&(ue|=se.DEPTH_BUFFER_BIT),oe&&(ue|=se.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Se,!1),i.removeEventListener("webglcontextrestored",V,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Be.dispose(),Ke.dispose(),rt.dispose(),C.dispose(),ie.dispose(),ye.dispose(),B.dispose(),Re.dispose(),We.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Ft),Ie.removeEventListener("sessionend",At),Ee&&(Ee.dispose(),Ee=null),Yt.stop()};function Se(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const L=It.autoReset,K=Me.enabled,oe=Me.autoUpdate,ue=Me.needsUpdate,le=Me.type;qe(),It.autoReset=L,Me.enabled=K,Me.autoUpdate=oe,Me.needsUpdate=ue,Me.type=le}function Ae(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){const K=L.target;K.removeEventListener("dispose",we),et(K)}function et(L){Ye(L),rt.remove(L)}function Ye(L){const K=rt.get(L).programs;K!==void 0&&(K.forEach(function(oe){We.releaseProgram(oe)}),L.isShaderMaterial&&We.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,oe,ue,le,Pe){K===null&&(K=Qe);const Ve=le.isMesh&&le.matrixWorld.determinant()<0,$e=An(L,K,oe,ue,le);Ge.setMaterial(ue,Ve);let tt=oe.index,Ze=1;if(ue.wireframe===!0){if(tt=be.getWireframeAttribute(oe),tt===void 0)return;Ze=2}const st=oe.drawRange,lt=oe.attributes.position;let Dt=st.start*Ze,nn=(st.start+st.count)*Ze;Pe!==null&&(Dt=Math.max(Dt,Pe.start*Ze),nn=Math.min(nn,(Pe.start+Pe.count)*Ze)),tt!==null?(Dt=Math.max(Dt,0),nn=Math.min(nn,tt.count)):lt!=null&&(Dt=Math.max(Dt,0),nn=Math.min(nn,lt.count));const an=nn-Dt;if(an<0||an===1/0)return;B.setup(le,ue,$e,oe,tt);let ii,jt=nt;if(tt!==null&&(ii=Te.get(tt),jt=ze,jt.setIndex(ii)),le.isMesh)ue.wireframe===!0?(Ge.setLineWidth(ue.wireframeLinewidth*ht()),jt.setMode(se.LINES)):jt.setMode(se.TRIANGLES);else if(le.isLine){let mt=ue.linewidth;mt===void 0&&(mt=1),Ge.setLineWidth(mt*ht()),le.isLineSegments?jt.setMode(se.LINES):le.isLineLoop?jt.setMode(se.LINE_LOOP):jt.setMode(se.LINE_STRIP)}else le.isPoints?jt.setMode(se.POINTS):le.isSprite&&jt.setMode(se.TRIANGLES);if(le.isBatchedMesh)jt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else if(le.isInstancedMesh)jt.renderInstances(Dt,an,le.count);else if(oe.isInstancedBufferGeometry){const mt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,pa=Math.min(oe.instanceCount,mt);jt.renderInstances(Dt,an,pa)}else jt.render(Dt,an)};function vt(L,K,oe){L.transparent===!0&&L.side===sa&&L.forceSinglePass===!1?(L.side=kn,L.needsUpdate=!0,es(L,K,oe),L.side=Ja,L.needsUpdate=!0,es(L,K,oe),L.side=sa):es(L,K,oe)}this.compile=function(L,K,oe=null){oe===null&&(oe=L),S=Ke.get(oe),S.init(),D.push(S),oe.traverseVisible(function(le){le.isLight&&le.layers.test(K.layers)&&(S.pushLight(le),le.castShadow&&S.pushShadow(le))}),L!==oe&&L.traverseVisible(function(le){le.isLight&&le.layers.test(K.layers)&&(S.pushLight(le),le.castShadow&&S.pushShadow(le))}),S.setupLights(R._useLegacyLights);const ue=new Set;return L.traverse(function(le){const Pe=le.material;if(Pe)if(Array.isArray(Pe))for(let Ve=0;Ve<Pe.length;Ve++){const $e=Pe[Ve];vt($e,oe,le),ue.add($e)}else vt(Pe,oe,le),ue.add(Pe)}),D.pop(),S=null,ue},this.compileAsync=function(L,K,oe=null){const ue=this.compile(L,K,oe);return new Promise(le=>{function Pe(){if(ue.forEach(function(Ve){rt.get(Ve).currentProgram.isReady()&&ue.delete(Ve)}),ue.size===0){le(L);return}setTimeout(Pe,10)}ke.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let _t=null;function Vt(L){_t&&_t(L)}function Ft(){Yt.stop()}function At(){Yt.start()}const Yt=new P0;Yt.setAnimationLoop(Vt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(L){_t=L,Ie.setAnimationLoop(L),L===null?Yt.stop():Yt.start()},Ie.addEventListener("sessionstart",Ft),Ie.addEventListener("sessionend",At),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(K),K=Ie.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,K,P),S=Ke.get(L,D.length),S.init(),D.push(S),Ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G.setFromProjectionMatrix(Ce),ge=this.localClippingEnabled,Z=ct.init(this.clippingPlanes,ge),T=Be.get(L,v.length),T.init(),v.push(T),Wn(L,K,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(ee,he),this.info.render.frame++,Z===!0&&ct.beginShadows();const oe=S.state.shadowsArray;if(Me.render(oe,L,K),Z===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(T,L),S.setupLights(R._useLegacyLights),K.isArrayCamera){const ue=K.cameras;for(let le=0,Pe=ue.length;le<Pe;le++){const Ve=ue[le];Hr(T,L,Ve,Ve.viewport)}}else Hr(T,L,K);P!==null&&(N.updateMultisampleRenderTarget(P),N.updateRenderTargetMipmap(P)),L.isScene===!0&&L.onAfterRender(R,L,K),B.resetDefaultState(),ce=-1,w=null,D.pop(),D.length>0?S=D[D.length-1]:S=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function Wn(L,K,oe,ue){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||G.intersectsSprite(L)){ue&&Fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ce);const Ve=ye.update(L),$e=L.material;$e.visible&&T.push(L,Ve,$e,oe,Fe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||G.intersectsObject(L))){const Ve=ye.update(L),$e=L.material;if(ue&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Fe.copy(L.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Fe.copy(Ve.boundingSphere.center)),Fe.applyMatrix4(L.matrixWorld).applyMatrix4(Ce)),Array.isArray($e)){const tt=Ve.groups;for(let Ze=0,st=tt.length;Ze<st;Ze++){const lt=tt[Ze],Dt=$e[lt.materialIndex];Dt&&Dt.visible&&T.push(L,Ve,Dt,oe,Fe.z,lt)}}else $e.visible&&T.push(L,Ve,$e,oe,Fe.z,null)}}const Pe=L.children;for(let Ve=0,$e=Pe.length;Ve<$e;Ve++)Wn(Pe[Ve],K,oe,ue)}function Hr(L,K,oe,ue){const le=L.opaque,Pe=L.transmissive,Ve=L.transparent;S.setupLightsView(oe),Z===!0&&ct.setGlobalState(R.clippingPlanes,oe),Pe.length>0&&Gr(le,Pe,K,oe),ue&&Ge.viewport(O.copy(ue)),le.length>0&&ha(le,K,oe),Pe.length>0&&ha(Pe,K,oe),Ve.length>0&&ha(Ve,K,oe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Gr(L,K,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;const Pe=at.isWebGL2;Ee===null&&(Ee=new Rs(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?ql:Qa,minFilter:Wl,samples:Pe?4:0})),R.getDrawingBufferSize(Xe),Pe?Ee.setSize(Xe.x,Xe.y):Ee.setSize(id(Xe.x),id(Xe.y));const Ve=R.getRenderTarget();R.setRenderTarget(Ee),R.getClearColor(xe),W=R.getClearAlpha(),W<1&&R.setClearColor(16777215,.5),R.clear();const $e=R.toneMapping;R.toneMapping=Ka,ha(L,oe,ue),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee);let tt=!1;for(let Ze=0,st=K.length;Ze<st;Ze++){const lt=K[Ze],Dt=lt.object,nn=lt.geometry,an=lt.material,ii=lt.group;if(an.side===sa&&Dt.layers.test(ue.layers)){const jt=an.side;an.side=kn,an.needsUpdate=!0,Vr(Dt,oe,ue,nn,an,ii),an.side=jt,an.needsUpdate=!0,tt=!0}}tt===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee)),R.setRenderTarget(Ve),R.setClearColor(xe,W),R.toneMapping=$e}function ha(L,K,oe){const ue=K.isScene===!0?K.overrideMaterial:null;for(let le=0,Pe=L.length;le<Pe;le++){const Ve=L[le],$e=Ve.object,tt=Ve.geometry,Ze=ue===null?Ve.material:ue,st=Ve.group;$e.layers.test(oe.layers)&&Vr($e,K,oe,tt,Ze,st)}}function Vr(L,K,oe,ue,le,Pe){L.onBeforeRender(R,K,oe,ue,le,Pe),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(R,K,oe,ue,L,Pe),le.transparent===!0&&le.side===sa&&le.forceSinglePass===!1?(le.side=kn,le.needsUpdate=!0,R.renderBufferDirect(oe,K,ue,le,L,Pe),le.side=Ja,le.needsUpdate=!0,R.renderBufferDirect(oe,K,ue,le,L,Pe),le.side=sa):R.renderBufferDirect(oe,K,ue,le,L,Pe),L.onAfterRender(R,K,oe,ue,le,Pe)}function es(L,K,oe){K.isScene!==!0&&(K=Qe);const ue=rt.get(L),le=S.state.lights,Pe=S.state.shadowsArray,Ve=le.state.version,$e=We.getParameters(L,le.state,Pe,K,oe),tt=We.getProgramCacheKey($e);let Ze=ue.programs;ue.environment=L.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(L.isMeshStandardMaterial?ie:C).get(L.envMap||ue.environment),Ze===void 0&&(L.addEventListener("dispose",we),Ze=new Map,ue.programs=Ze);let st=Ze.get(tt);if(st!==void 0){if(ue.currentProgram===st&&ue.lightsStateVersion===Ve)return tn(L,$e),st}else $e.uniforms=We.getUniforms(L),L.onBuild(oe,$e,R),L.onBeforeCompile($e,R),st=We.acquireProgram($e,tt),Ze.set(tt,st),ue.uniforms=$e.uniforms;const lt=ue.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(lt.clippingPlanes=ct.uniform),tn(L,$e),ue.needsLights=jr(L),ue.lightsStateVersion=Ve,ue.needsLights&&(lt.ambientLightColor.value=le.state.ambient,lt.lightProbe.value=le.state.probe,lt.directionalLights.value=le.state.directional,lt.directionalLightShadows.value=le.state.directionalShadow,lt.spotLights.value=le.state.spot,lt.spotLightShadows.value=le.state.spotShadow,lt.rectAreaLights.value=le.state.rectArea,lt.ltc_1.value=le.state.rectAreaLTC1,lt.ltc_2.value=le.state.rectAreaLTC2,lt.pointLights.value=le.state.point,lt.pointLightShadows.value=le.state.pointShadow,lt.hemisphereLights.value=le.state.hemi,lt.directionalShadowMap.value=le.state.directionalShadowMap,lt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,lt.spotShadowMap.value=le.state.spotShadowMap,lt.spotLightMatrix.value=le.state.spotLightMatrix,lt.spotLightMap.value=le.state.spotLightMap,lt.pointShadowMap.value=le.state.pointShadowMap,lt.pointShadowMatrix.value=le.state.pointShadowMatrix),ue.currentProgram=st,ue.uniformsList=null,st}function gi(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=Ic.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function tn(L,K){const oe=rt.get(L);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function An(L,K,oe,ue,le){K.isScene!==!0&&(K=Qe),N.resetTextureUnits();const Pe=K.fog,Ve=ue.isMeshStandardMaterial?K.environment:null,$e=P===null?R.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ua,tt=(ue.isMeshStandardMaterial?ie:C).get(ue.envMap||Ve),Ze=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),lt=!!oe.morphAttributes.position,Dt=!!oe.morphAttributes.normal,nn=!!oe.morphAttributes.color;let an=Ka;ue.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(an=R.toneMapping);const ii=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,jt=ii!==void 0?ii.length:0,mt=rt.get(ue),pa=S.state.lights;if(Z===!0&&(ge===!0||L!==w)){const zn=L===w&&ue.id===ce;ct.setState(ue,L,zn)}let Ht=!1;ue.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==pa.state.version||mt.outputColorSpace!==$e||le.isBatchedMesh&&mt.batching===!1||!le.isBatchedMesh&&mt.batching===!0||le.isInstancedMesh&&mt.instancing===!1||!le.isInstancedMesh&&mt.instancing===!0||le.isSkinnedMesh&&mt.skinning===!1||!le.isSkinnedMesh&&mt.skinning===!0||le.isInstancedMesh&&mt.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&mt.instancingColor===!1&&le.instanceColor!==null||mt.envMap!==tt||ue.fog===!0&&mt.fog!==Pe||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==ct.numPlanes||mt.numIntersection!==ct.numIntersection)||mt.vertexAlphas!==Ze||mt.vertexTangents!==st||mt.morphTargets!==lt||mt.morphNormals!==Dt||mt.morphColors!==nn||mt.toneMapping!==an||at.isWebGL2===!0&&mt.morphTargetsCount!==jt)&&(Ht=!0):(Ht=!0,mt.__version=ue.version);let xn=mt.currentProgram;Ht===!0&&(xn=es(ue,K,le));let Dn=!1,ma=!1,kr=!1;const sn=xn.getUniforms(),Ci=mt.uniforms;if(Ge.useProgram(xn.program)&&(Dn=!0,ma=!0,kr=!0),ue.id!==ce&&(ce=ue.id,ma=!0),Dn||w!==L){sn.setValue(se,"projectionMatrix",L.projectionMatrix),sn.setValue(se,"viewMatrix",L.matrixWorldInverse);const zn=sn.map.cameraPosition;zn!==void 0&&zn.setValue(se,Fe.setFromMatrixPosition(L.matrixWorld)),at.logarithmicDepthBuffer&&sn.setValue(se,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&sn.setValue(se,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,ma=!0,kr=!0)}if(le.isSkinnedMesh){sn.setOptional(se,le,"bindMatrix"),sn.setOptional(se,le,"bindMatrixInverse");const zn=le.skeleton;zn&&(at.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),sn.setValue(se,"boneTexture",zn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}le.isBatchedMesh&&(sn.setOptional(se,le,"batchingTexture"),sn.setValue(se,"batchingTexture",le._matricesTexture,N));const ga=oe.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&at.isWebGL2===!0)&&dt.update(le,oe,xn),(ma||mt.receiveShadow!==le.receiveShadow)&&(mt.receiveShadow=le.receiveShadow,sn.setValue(se,"receiveShadow",le.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Ci.envMap.value=tt,Ci.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),ma&&(sn.setValue(se,"toneMappingExposure",R.toneMappingExposure),mt.needsLights&&da(Ci,kr),Pe&&ue.fog===!0&&Ne.refreshFogUniforms(Ci,Pe),Ne.refreshMaterialUniforms(Ci,ue,q,I,Ee),Ic.upload(se,gi(mt),Ci,N)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ic.upload(se,gi(mt),Ci,N),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&sn.setValue(se,"center",le.center),sn.setValue(se,"modelViewMatrix",le.modelViewMatrix),sn.setValue(se,"normalMatrix",le.normalMatrix),sn.setValue(se,"modelMatrix",le.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const zn=ue.uniformsGroups;for(let Rn=0,Xr=zn.length;Rn<Xr;Rn++)if(at.isWebGL2){const Wr=zn[Rn];Re.update(Wr,xn),Re.bind(Wr,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function da(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function jr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(L,K,oe){rt.get(L.texture).__webglTexture=K,rt.get(L.depthTexture).__webglTexture=oe;const ue=rt.get(L);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=oe===void 0,ue.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,K){const oe=rt.get(L);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,oe=0){P=L,k=K,F=oe;let ue=!0,le=null,Pe=!1,Ve=!1;if(L){const tt=rt.get(L);tt.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(se.FRAMEBUFFER,null),ue=!1):tt.__webglFramebuffer===void 0?N.setupRenderTarget(L):tt.__hasExternalTextures&&N.rebindTextures(L,rt.get(L.texture).__webglTexture,rt.get(L.depthTexture).__webglTexture);const Ze=L.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ve=!0);const st=rt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(st[K])?le=st[K][oe]:le=st[K],Pe=!0):at.isWebGL2&&L.samples>0&&N.useMultisampledRTT(L)===!1?le=rt.get(L).__webglMultisampledFramebuffer:Array.isArray(st)?le=st[oe]:le=st,O.copy(L.viewport),ae.copy(L.scissor),re=L.scissorTest}else O.copy(de).multiplyScalar(q).floor(),ae.copy(U).multiplyScalar(q).floor(),re=X;if(Ge.bindFramebuffer(se.FRAMEBUFFER,le)&&at.drawBuffers&&ue&&Ge.drawBuffers(L,le),Ge.viewport(O),Ge.scissor(ae),Ge.setScissorTest(re),Pe){const tt=rt.get(L.texture);se.framebufferTexture2D(se.FRAMEBUFFER,se.COLOR_ATTACHMENT0,se.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt.__webglTexture,oe)}else if(Ve){const tt=rt.get(L.texture),Ze=K||0;se.framebufferTextureLayer(se.FRAMEBUFFER,se.COLOR_ATTACHMENT0,tt.__webglTexture,oe||0,Ze)}ce=-1},this.readRenderTargetPixels=function(L,K,oe,ue,le,Pe,Ve){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ve!==void 0&&($e=$e[Ve]),$e){Ge.bindFramebuffer(se.FRAMEBUFFER,$e);try{const tt=L.texture,Ze=tt.format,st=tt.type;if(Ze!==Ti&&Ue.convert(Ze)!==se.getParameter(se.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=st===ql&&(ke.has("EXT_color_buffer_half_float")||at.isWebGL2&&ke.has("EXT_color_buffer_float"));if(st!==Qa&&Ue.convert(st)!==se.getParameter(se.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===qa&&(at.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-ue&&oe>=0&&oe<=L.height-le&&se.readPixels(K,oe,ue,le,Ue.convert(Ze),Ue.convert(st),Pe)}finally{const tt=P!==null?rt.get(P).__webglFramebuffer:null;Ge.bindFramebuffer(se.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(L,K,oe=0){const ue=Math.pow(2,-oe),le=Math.floor(K.image.width*ue),Pe=Math.floor(K.image.height*ue);N.setTexture2D(K,0),se.copyTexSubImage2D(se.TEXTURE_2D,oe,0,0,L.x,L.y,le,Pe),Ge.unbindTexture()},this.copyTextureToTexture=function(L,K,oe,ue=0){const le=K.image.width,Pe=K.image.height,Ve=Ue.convert(oe.format),$e=Ue.convert(oe.type);N.setTexture2D(oe,0),se.pixelStorei(se.UNPACK_FLIP_Y_WEBGL,oe.flipY),se.pixelStorei(se.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),se.pixelStorei(se.UNPACK_ALIGNMENT,oe.unpackAlignment),K.isDataTexture?se.texSubImage2D(se.TEXTURE_2D,ue,L.x,L.y,le,Pe,Ve,$e,K.image.data):K.isCompressedTexture?se.compressedTexSubImage2D(se.TEXTURE_2D,ue,L.x,L.y,K.mipmaps[0].width,K.mipmaps[0].height,Ve,K.mipmaps[0].data):se.texSubImage2D(se.TEXTURE_2D,ue,L.x,L.y,Ve,$e,K.image),ue===0&&oe.generateMipmaps&&se.generateMipmap(se.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(L,K,oe,ue,le=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=L.max.x-L.min.x+1,Ve=L.max.y-L.min.y+1,$e=L.max.z-L.min.z+1,tt=Ue.convert(ue.format),Ze=Ue.convert(ue.type);let st;if(ue.isData3DTexture)N.setTexture3D(ue,0),st=se.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)N.setTexture2DArray(ue,0),st=se.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}se.pixelStorei(se.UNPACK_FLIP_Y_WEBGL,ue.flipY),se.pixelStorei(se.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),se.pixelStorei(se.UNPACK_ALIGNMENT,ue.unpackAlignment);const lt=se.getParameter(se.UNPACK_ROW_LENGTH),Dt=se.getParameter(se.UNPACK_IMAGE_HEIGHT),nn=se.getParameter(se.UNPACK_SKIP_PIXELS),an=se.getParameter(se.UNPACK_SKIP_ROWS),ii=se.getParameter(se.UNPACK_SKIP_IMAGES),jt=oe.isCompressedTexture?oe.mipmaps[le]:oe.image;se.pixelStorei(se.UNPACK_ROW_LENGTH,jt.width),se.pixelStorei(se.UNPACK_IMAGE_HEIGHT,jt.height),se.pixelStorei(se.UNPACK_SKIP_PIXELS,L.min.x),se.pixelStorei(se.UNPACK_SKIP_ROWS,L.min.y),se.pixelStorei(se.UNPACK_SKIP_IMAGES,L.min.z),oe.isDataTexture||oe.isData3DTexture?se.texSubImage3D(st,le,K.x,K.y,K.z,Pe,Ve,$e,tt,Ze,jt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),se.compressedTexSubImage3D(st,le,K.x,K.y,K.z,Pe,Ve,$e,tt,jt.data)):se.texSubImage3D(st,le,K.x,K.y,K.z,Pe,Ve,$e,tt,Ze,jt),se.pixelStorei(se.UNPACK_ROW_LENGTH,lt),se.pixelStorei(se.UNPACK_IMAGE_HEIGHT,Dt),se.pixelStorei(se.UNPACK_SKIP_PIXELS,nn),se.pixelStorei(se.UNPACK_SKIP_ROWS,an),se.pixelStorei(se.UNPACK_SKIP_IMAGES,ii),le===0&&ue.generateMipmaps&&se.generateMipmap(st),Ge.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?N.setTextureCube(L,0):L.isData3DTexture?N.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?N.setTexture2DArray(L,0):N.setTexture2D(L,0),Ge.unbindTexture()},this.resetState=function(){k=0,F=0,P=null,Ge.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===dd?"display-p3":"srgb",i.unpackColorSpace=Bt.workingColorSpace===Zc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bn?As:y0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===As?bn:ua}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class IR extends j0{}IR.prototype.isWebGL1Renderer=!0;class _d{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=i,this.far=s}clone(){return new _d(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class FR extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class k0 extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zv=new Q,Bv=new Q,Iv=new fn,kh=new pd,Uc=new Kc;class HR extends Tn{constructor(t=new Pi,i=new k0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let o=1,c=i.count;o<c;o++)zv.fromBufferAttribute(i,o-1),Bv.fromBufferAttribute(i,o),s[o]=s[o-1],s[o]+=zv.distanceTo(Bv);t.setAttribute("lineDistance",new Xn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(o),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;Iv.copy(o).invert(),kh.copy(t.ray).applyMatrix4(Iv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=new Q,g=new Q,_=new Q,y=new Q,E=this.isLineSegments?2:1,b=s.index,S=s.attributes.position;if(b!==null){const v=Math.max(0,d.start),D=Math.min(b.count,d.start+d.count);for(let R=v,z=D-1;R<z;R+=E){const k=b.getX(R),F=b.getX(R+1);if(m.fromBufferAttribute(S,k),g.fromBufferAttribute(S,F),kh.distanceSqToSegment(m,g,y,_)>p)continue;y.applyMatrix4(this.matrixWorld);const ce=t.ray.origin.distanceTo(y);ce<t.near||ce>t.far||i.push({distance:ce,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,d.start),D=Math.min(S.count,d.start+d.count);for(let R=v,z=D-1;R<z;R+=E){if(m.fromBufferAttribute(S,R),g.fromBufferAttribute(S,R+1),kh.distanceSqToSegment(m,g,y,_)>p)continue;y.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(y);F<t.near||F>t.far||i.push({distance:F,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}const Fv=new Q,Hv=new Q;class GR extends HR{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let o=0,c=i.count;o<c;o+=2)Fv.fromBufferAttribute(i,o),Hv.fromBufferAttribute(i,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Fv.distanceTo(Hv);t.setAttribute("lineDistance",new Xn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kl extends Pi{constructor(t=1,i=1,s=1,o=32,c=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:o,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],y=[],E=[];let b=0;const T=[],S=s/2;let v=0;D(),d===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(E,2));function D(){const z=new Q,k=new Q;let F=0;const P=(i-t)/s;for(let ce=0;ce<=c;ce++){const w=[],O=ce/c,ae=O*(i-t)+t;for(let re=0;re<=o;re++){const xe=re/o,W=xe*p+h,$=Math.sin(W),I=Math.cos(W);k.x=ae*$,k.y=-O*s+S,k.z=ae*I,_.push(k.x,k.y,k.z),z.set($,P,I).normalize(),y.push(z.x,z.y,z.z),E.push(xe,1-O),w.push(b++)}T.push(w)}for(let ce=0;ce<o;ce++)for(let w=0;w<c;w++){const O=T[w][ce],ae=T[w+1][ce],re=T[w+1][ce+1],xe=T[w][ce+1];g.push(O,ae,xe),g.push(ae,re,xe),F+=6}m.addGroup(v,F,0),v+=F}function R(z){const k=b,F=new ut,P=new Q;let ce=0;const w=z===!0?t:i,O=z===!0?1:-1;for(let re=1;re<=o;re++)_.push(0,S*O,0),y.push(0,O,0),E.push(.5,.5),b++;const ae=b;for(let re=0;re<=o;re++){const W=re/o*p+h,$=Math.cos(W),I=Math.sin(W);P.x=w*I,P.y=S*O,P.z=w*$,_.push(P.x,P.y,P.z),y.push(0,O,0),F.x=$*.5+.5,F.y=I*.5*O+.5,E.push(F.x,F.y),b++}for(let re=0;re<o;re++){const xe=k+re,W=ae+re;z===!0?g.push(W,W+1,xe):g.push(W+1,W,xe),ce+=3}m.addGroup(v,ce,z===!0?1:2),v+=ce}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nc extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class X0 extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Xh=new fn,Gv=new Q,Vv=new Q;class VR{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Gv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Gv),Vv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Vv),i.updateMatrixWorld(),Xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jR extends VR{constructor(){super(new z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kR extends X0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new jR}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class XR extends X0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class jv{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Pn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WR extends GR{constructor(t=10,i=10,s=4473924,o=8947848){s=new bt(s),o=new bt(o);const c=i/2,d=t/i,h=t/2,p=[],m=[];for(let y=0,E=0,b=-h;y<=i;y++,b+=d){p.push(-h,0,b,h,0,b),p.push(b,0,-h,b,0,h);const T=y===c?s:o;T.toArray(m,E),E+=3,T.toArray(m,E),E+=3,T.toArray(m,E),E+=3,T.toArray(m,E),E+=3}const g=new Pi;g.setAttribute("position",new Xn(p,3)),g.setAttribute("color",new Xn(m,3));const _=new k0({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);const kv={type:"change"},Wh={type:"start"},Xv={type:"end"},Oc=new pd,Wv=new Xa,qR=Math.cos(70*UE.DEG2RAD);class YR extends Ls{constructor(t,i){super(),this.object=t,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ur.ROTATE,MIDDLE:ur.DOLLY,RIGHT:ur.PAN},this.touches={ONE:fr.ROTATE,TWO:fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",Ke),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=function(){s.target0.copy(s.target),s.position0.copy(s.object.position),s.zoom0=s.object.zoom},this.reset=function(){s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),s.dispatchEvent(kv),s.update(),c=o.NONE},this.update=(function(){const B=new Q,Re=new Cs().setFromUnitVectors(t.up,new Q(0,1,0)),qe=Re.clone().invert(),Ie=new Q,Se=new Cs,V=new Q,Ae=2*Math.PI;return function(et=null){const Ye=s.object.position;B.copy(Ye).sub(s.target),B.applyQuaternion(Re),h.setFromVector3(B),s.autoRotate&&c===o.NONE&&re(O(et)),s.enableDamping?(h.theta+=p.theta*s.dampingFactor,h.phi+=p.phi*s.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let vt=s.minAzimuthAngle,_t=s.maxAzimuthAngle;isFinite(vt)&&isFinite(_t)&&(vt<-Math.PI?vt+=Ae:vt>Math.PI&&(vt-=Ae),_t<-Math.PI?_t+=Ae:_t>Math.PI&&(_t-=Ae),vt<=_t?h.theta=Math.max(vt,Math.min(_t,h.theta)):h.theta=h.theta>(vt+_t)/2?Math.max(vt,h.theta):Math.min(_t,h.theta)),h.phi=Math.max(s.minPolarAngle,Math.min(s.maxPolarAngle,h.phi)),h.makeSafe(),s.enableDamping===!0?s.target.addScaledVector(g,s.dampingFactor):s.target.add(g),s.target.sub(s.cursor),s.target.clampLength(s.minTargetRadius,s.maxTargetRadius),s.target.add(s.cursor),s.zoomToCursor&&F||s.object.isOrthographicCamera?h.radius=de(h.radius):h.radius=de(h.radius*m),B.setFromSpherical(h),B.applyQuaternion(qe),Ye.copy(s.target).add(B),s.object.lookAt(s.target),s.enableDamping===!0?(p.theta*=1-s.dampingFactor,p.phi*=1-s.dampingFactor,g.multiplyScalar(1-s.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let Vt=!1;if(s.zoomToCursor&&F){let Ft=null;if(s.object.isPerspectiveCamera){const At=B.length();Ft=de(At*m);const Yt=At-Ft;s.object.position.addScaledVector(z,Yt),s.object.updateMatrixWorld()}else if(s.object.isOrthographicCamera){const At=new Q(k.x,k.y,0);At.unproject(s.object),s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/m)),s.object.updateProjectionMatrix(),Vt=!0;const Yt=new Q(k.x,k.y,0);Yt.unproject(s.object),s.object.position.sub(Yt).add(At),s.object.updateMatrixWorld(),Ft=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),s.zoomToCursor=!1;Ft!==null&&(this.screenSpacePanning?s.target.set(0,0,-1).transformDirection(s.object.matrix).multiplyScalar(Ft).add(s.object.position):(Oc.origin.copy(s.object.position),Oc.direction.set(0,0,-1).transformDirection(s.object.matrix),Math.abs(s.object.up.dot(Oc.direction))<qR?t.lookAt(s.target):(Wv.setFromNormalAndCoplanarPoint(s.object.up,s.target),Oc.intersectPlane(Wv,s.target))))}else s.object.isOrthographicCamera&&(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/m)),s.object.updateProjectionMatrix(),Vt=!0);return m=1,F=!1,Vt||Ie.distanceToSquared(s.object.position)>d||8*(1-Se.dot(s.object.quaternion))>d||V.distanceToSquared(s.target)>0?(s.dispatchEvent(kv),Ie.copy(s.object.position),Se.copy(s.object.quaternion),V.copy(s.target),!0):!1}})(),this.dispose=function(){s.domElement.removeEventListener("contextmenu",Rt),s.domElement.removeEventListener("pointerdown",N),s.domElement.removeEventListener("pointercancel",ie),s.domElement.removeEventListener("wheel",ye),s.domElement.removeEventListener("pointermove",C),s.domElement.removeEventListener("pointerup",ie),s._domElementKeyEvents!==null&&(s._domElementKeyEvents.removeEventListener("keydown",Ke),s._domElementKeyEvents=null)};const s=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=o.NONE;const d=1e-6,h=new jv,p=new jv;let m=1;const g=new Q,_=new ut,y=new ut,E=new ut,b=new ut,T=new ut,S=new ut,v=new ut,D=new ut,R=new ut,z=new Q,k=new ut;let F=!1;const P=[],ce={};let w=!1;function O(B){return B!==null?2*Math.PI/60*s.autoRotateSpeed*B:2*Math.PI/60/60*s.autoRotateSpeed}function ae(B){const Re=Math.abs(B*.01);return Math.pow(.95,s.zoomSpeed*Re)}function re(B){p.theta-=B}function xe(B){p.phi-=B}const W=(function(){const B=new Q;return function(qe,Ie){B.setFromMatrixColumn(Ie,0),B.multiplyScalar(-qe),g.add(B)}})(),$=(function(){const B=new Q;return function(qe,Ie){s.screenSpacePanning===!0?B.setFromMatrixColumn(Ie,1):(B.setFromMatrixColumn(Ie,0),B.crossVectors(s.object.up,B)),B.multiplyScalar(qe),g.add(B)}})(),I=(function(){const B=new Q;return function(qe,Ie){const Se=s.domElement;if(s.object.isPerspectiveCamera){const V=s.object.position;B.copy(V).sub(s.target);let Ae=B.length();Ae*=Math.tan(s.object.fov/2*Math.PI/180),W(2*qe*Ae/Se.clientHeight,s.object.matrix),$(2*Ie*Ae/Se.clientHeight,s.object.matrix)}else s.object.isOrthographicCamera?(W(qe*(s.object.right-s.object.left)/s.object.zoom/Se.clientWidth,s.object.matrix),$(Ie*(s.object.top-s.object.bottom)/s.object.zoom/Se.clientHeight,s.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),s.enablePan=!1)}})();function q(B){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?m/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function ee(B){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?m*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function he(B,Re){if(!s.zoomToCursor)return;F=!0;const qe=s.domElement.getBoundingClientRect(),Ie=B-qe.left,Se=Re-qe.top,V=qe.width,Ae=qe.height;k.x=Ie/V*2-1,k.y=-(Se/Ae)*2+1,z.set(k.x,k.y,1).unproject(s.object).sub(s.object.position).normalize()}function de(B){return Math.max(s.minDistance,Math.min(s.maxDistance,B))}function U(B){_.set(B.clientX,B.clientY)}function X(B){he(B.clientX,B.clientX),v.set(B.clientX,B.clientY)}function G(B){b.set(B.clientX,B.clientY)}function Z(B){y.set(B.clientX,B.clientY),E.subVectors(y,_).multiplyScalar(s.rotateSpeed);const Re=s.domElement;re(2*Math.PI*E.x/Re.clientHeight),xe(2*Math.PI*E.y/Re.clientHeight),_.copy(y),s.update()}function ge(B){D.set(B.clientX,B.clientY),R.subVectors(D,v),R.y>0?q(ae(R.y)):R.y<0&&ee(ae(R.y)),v.copy(D),s.update()}function Ee(B){T.set(B.clientX,B.clientY),S.subVectors(T,b).multiplyScalar(s.panSpeed),I(S.x,S.y),b.copy(T),s.update()}function Ce(B){he(B.clientX,B.clientY),B.deltaY<0?ee(ae(B.deltaY)):B.deltaY>0&&q(ae(B.deltaY)),s.update()}function Xe(B){let Re=!1;switch(B.code){case s.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?xe(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(0,s.keyPanSpeed),Re=!0;break;case s.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?xe(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(0,-s.keyPanSpeed),Re=!0;break;case s.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?re(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(s.keyPanSpeed,0),Re=!0;break;case s.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?re(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(-s.keyPanSpeed,0),Re=!0;break}Re&&(B.preventDefault(),s.update())}function Fe(B){if(P.length===1)_.set(B.pageX,B.pageY);else{const Re=Ue(B),qe=.5*(B.pageX+Re.x),Ie=.5*(B.pageY+Re.y);_.set(qe,Ie)}}function Qe(B){if(P.length===1)b.set(B.pageX,B.pageY);else{const Re=Ue(B),qe=.5*(B.pageX+Re.x),Ie=.5*(B.pageY+Re.y);b.set(qe,Ie)}}function ht(B){const Re=Ue(B),qe=B.pageX-Re.x,Ie=B.pageY-Re.y,Se=Math.sqrt(qe*qe+Ie*Ie);v.set(0,Se)}function se(B){s.enableZoom&&ht(B),s.enablePan&&Qe(B)}function en(B){s.enableZoom&&ht(B),s.enableRotate&&Fe(B)}function ke(B){if(P.length==1)y.set(B.pageX,B.pageY);else{const qe=Ue(B),Ie=.5*(B.pageX+qe.x),Se=.5*(B.pageY+qe.y);y.set(Ie,Se)}E.subVectors(y,_).multiplyScalar(s.rotateSpeed);const Re=s.domElement;re(2*Math.PI*E.x/Re.clientHeight),xe(2*Math.PI*E.y/Re.clientHeight),_.copy(y)}function at(B){if(P.length===1)T.set(B.pageX,B.pageY);else{const Re=Ue(B),qe=.5*(B.pageX+Re.x),Ie=.5*(B.pageY+Re.y);T.set(qe,Ie)}S.subVectors(T,b).multiplyScalar(s.panSpeed),I(S.x,S.y),b.copy(T)}function Ge(B){const Re=Ue(B),qe=B.pageX-Re.x,Ie=B.pageY-Re.y,Se=Math.sqrt(qe*qe+Ie*Ie);D.set(0,Se),R.set(0,Math.pow(D.y/v.y,s.zoomSpeed)),q(R.y),v.copy(D);const V=(B.pageX+Re.x)*.5,Ae=(B.pageY+Re.y)*.5;he(V,Ae)}function It(B){s.enableZoom&&Ge(B),s.enablePan&&at(B)}function rt(B){s.enableZoom&&Ge(B),s.enableRotate&&ke(B)}function N(B){s.enabled!==!1&&(P.length===0&&(s.domElement.setPointerCapture(B.pointerId),s.domElement.addEventListener("pointermove",C),s.domElement.addEventListener("pointerup",ie)),dt(B),B.pointerType==="touch"?ct(B):Te(B))}function C(B){s.enabled!==!1&&(B.pointerType==="touch"?Me(B):be(B))}function ie(B){nt(B),P.length===0&&(s.domElement.releasePointerCapture(B.pointerId),s.domElement.removeEventListener("pointermove",C),s.domElement.removeEventListener("pointerup",ie)),s.dispatchEvent(Xv),c=o.NONE}function Te(B){let Re;switch(B.button){case 0:Re=s.mouseButtons.LEFT;break;case 1:Re=s.mouseButtons.MIDDLE;break;case 2:Re=s.mouseButtons.RIGHT;break;default:Re=-1}switch(Re){case ur.DOLLY:if(s.enableZoom===!1)return;X(B),c=o.DOLLY;break;case ur.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(s.enablePan===!1)return;G(B),c=o.PAN}else{if(s.enableRotate===!1)return;U(B),c=o.ROTATE}break;case ur.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(s.enableRotate===!1)return;U(B),c=o.ROTATE}else{if(s.enablePan===!1)return;G(B),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&s.dispatchEvent(Wh)}function be(B){switch(c){case o.ROTATE:if(s.enableRotate===!1)return;Z(B);break;case o.DOLLY:if(s.enableZoom===!1)return;ge(B);break;case o.PAN:if(s.enablePan===!1)return;Ee(B);break}}function ye(B){s.enabled===!1||s.enableZoom===!1||c!==o.NONE||(B.preventDefault(),s.dispatchEvent(Wh),Ce(We(B)),s.dispatchEvent(Xv))}function We(B){const Re=B.deltaMode,qe={clientX:B.clientX,clientY:B.clientY,deltaY:B.deltaY};switch(Re){case 1:qe.deltaY*=16;break;case 2:qe.deltaY*=100;break}return B.ctrlKey&&!w&&(qe.deltaY*=10),qe}function Ne(B){B.key==="Control"&&(w=!0,document.addEventListener("keyup",Be,{passive:!0,capture:!0}))}function Be(B){B.key==="Control"&&(w=!1,document.removeEventListener("keyup",Be,{passive:!0,capture:!0}))}function Ke(B){s.enabled===!1||s.enablePan===!1||Xe(B)}function ct(B){switch(ze(B),P.length){case 1:switch(s.touches.ONE){case fr.ROTATE:if(s.enableRotate===!1)return;Fe(B),c=o.TOUCH_ROTATE;break;case fr.PAN:if(s.enablePan===!1)return;Qe(B),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(s.touches.TWO){case fr.DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;se(B),c=o.TOUCH_DOLLY_PAN;break;case fr.DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;en(B),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&s.dispatchEvent(Wh)}function Me(B){switch(ze(B),c){case o.TOUCH_ROTATE:if(s.enableRotate===!1)return;ke(B),s.update();break;case o.TOUCH_PAN:if(s.enablePan===!1)return;at(B),s.update();break;case o.TOUCH_DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;It(B),s.update();break;case o.TOUCH_DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;rt(B),s.update();break;default:c=o.NONE}}function Rt(B){s.enabled!==!1&&B.preventDefault()}function dt(B){P.push(B.pointerId)}function nt(B){delete ce[B.pointerId];for(let Re=0;Re<P.length;Re++)if(P[Re]==B.pointerId){P.splice(Re,1);return}}function ze(B){let Re=ce[B.pointerId];Re===void 0&&(Re=new ut,ce[B.pointerId]=Re),Re.set(B.pageX,B.pageY)}function Ue(B){const Re=B.pointerId===P[0]?P[1]:P[0];return ce[Re]}s.domElement.addEventListener("contextmenu",Rt),s.domElement.addEventListener("pointerdown",N),s.domElement.addEventListener("pointercancel",ie),s.domElement.addEventListener("wheel",ye,{passive:!1}),document.addEventListener("keydown",Ne,{passive:!0,capture:!0}),this.update()}}const W0=()=>x.jsxs("nav",{className:"navbar",children:[x.jsx(Vl,{to:"/",className:"nav-logo",children:"The Apple Falls"}),x.jsxs("div",{className:"nav-links",children:[x.jsx(Vl,{to:"/",className:"nav-link",children:"Home"}),x.jsx("a",{href:"/#about",className:"nav-link",children:"About"}),x.jsx("a",{href:"/#roadmap",className:"nav-link",children:"Curriculum"}),x.jsx(Vl,{to:"/sandbox",className:"nav-link",children:"Sandbox"})]})]}),ZR=()=>{const r=_e.useRef(null),t=$a();return _e.useEffect(()=>{if(t.hash){const i=document.getElementById(t.hash.substring(1));i&&setTimeout(()=>{i.scrollIntoView({behavior:"smooth"})},100)}},[t]),_e.useEffect(()=>{if(!r.current)return;const i=r.current,s=new FR;s.background=new bt(2763306),s.fog=new _d(2763306,10,50);const o=new pi(45,i.clientWidth/i.clientHeight,.1,100),c=new j0({antialias:!0});c.setSize(i.clientWidth,i.clientHeight),c.shadowMap.enabled=!0,c.shadowMap.type=u0,i.appendChild(c.domElement);const d=new YR(o,c.domElement);d.enableDamping=!0,d.dampingFactor=.05,d.screenSpacePanning=!1,d.minDistance=5,d.maxDistance=50,d.maxPolarAngle=Math.PI;const h=new XR(16777215,.6);s.add(h);const p=new kR(16777215,1.2);p.position.set(5,10,7),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,s.add(p);const m=new WR(30,30,6710886,8947848);m.material.opacity=.6,m.material.transparent=!0,s.add(m);const g=new Jc(30,30),_=new Nc({color:3355443,roughness:.8,metalness:.2}),y=new dn(g,_);y.rotation.x=-Math.PI/2,y.position.y=-.1,y.receiveShadow=!0,s.add(y);const E=new Nc({color:13421772,roughness:.1,metalness:.9}),b=new Nc({color:10066329,roughness:.2,metalness:.8}),T=new Nc({color:14540253,roughness:.05,metalness:.95}),S=1,v=3.5,D=3,R=new kl(1,1.2,S,32),z=new dn(R,E);z.position.y=S/2,z.castShadow=!0,z.receiveShadow=!0,s.add(z);const k=new Ya;k.position.y=S,s.add(k);const F=new la(1.5,.5,1.5),P=new dn(F,b);P.position.y=.25,P.castShadow=!0,P.receiveShadow=!0,k.add(P);const ce=new Ya;ce.position.set(0,.5,0),k.add(ce);const w=new la(.6,v,.6),O=new dn(w,E);O.position.y=v/2,O.castShadow=!0,O.receiveShadow=!0,ce.add(O);const ae=new kl(.4,.4,1.8,16);ae.rotateZ(Math.PI/2);const re=new dn(ae,b);ce.add(re);const xe=new Ya;xe.position.y=v,ce.add(xe);const W=new la(.5,D,.5),$=new dn(W,E);$.position.y=D/2,$.castShadow=!0,$.receiveShadow=!0,xe.add($);const I=new dn(ae,b);xe.add(I);const q=new Ya;q.position.y=D,xe.add(q);const ee=new dn(new kl(.3,.3,.8,16).rotateZ(Math.PI/2),b);q.add(ee);const he=new la(.08,.8,.4),de=new dn(he,T);de.position.set(.3,.4,0),q.add(de);const U=new dn(he,T);U.position.set(-.3,.4,0),q.add(U);const X=new dn(he,T);X.position.set(0,.4,0),q.add(X),o.position.set(15,15,15),o.lookAt(0,3,0);let G=0;function Z(){requestAnimationFrame(Z),G+=.02,k.rotation.y=Math.sin(G*.8)*.3,ce.rotation.y=Math.sin(G*2.5)*.6,ce.rotation.x=Math.sin(G*1.5)*.2,xe.rotation.y=Math.sin(G*2.5+Math.PI/2)*.4,xe.rotation.x=Math.cos(G*3)*.3,q.rotation.z=Math.sin(G*4)*.3,q.position.y=D+Math.sin(G*3)*.1;const Ee=Math.sin(G*5)*.1;de.position.x=.3+Ee,U.position.x=-.3-Ee,X.position.x=0+Math.sin(G*5+Math.PI)*.05,de.position.z=Math.abs(Ee)*.5,U.position.z=-Math.abs(Ee)*.5,X.position.z=0,d.update(),c.render(s,o)}Z();const ge=()=>{o.aspect=i.clientWidth/i.clientHeight,o.updateProjectionMatrix(),c.setSize(i.clientWidth,i.clientHeight)};return window.addEventListener("resize",ge),()=>{window.removeEventListener("resize",ge),i.removeChild(c.domElement),c.dispose()}},[]),x.jsxs("div",{className:"landing-page",children:[x.jsx(W0,{}),x.jsxs("div",{className:"container",children:[x.jsxs("div",{className:"content",children:[x.jsx("h1",{children:"From Sparks to Silicon"}),x.jsx("p",{className:"description",children:"Learn electronics from scratch through immersive, interactive simulations."}),x.jsxs("div",{className:"buttons",children:[x.jsx("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/Franklin.html",className:"btn btn-primary",children:"Begin Journey"}),x.jsx("a",{href:"#roadmap",className:"btn btn-secondary",children:"View Curriculum"})]})]}),x.jsxs("div",{className:"visual",children:[x.jsx("div",{className:"glow"}),x.jsx("div",{className:"threejs-container",ref:r})]})]}),x.jsx("section",{id:"about",children:x.jsxs("div",{className:"about-container",children:[x.jsx("h2",{className:"section-title",children:"About"}),x.jsxs("div",{className:"about-content",children:[x.jsxs("p",{children:["Hi, I'm ",x.jsx("strong",{children:"Jeevan"}),". I built this platform to document my journey learning electronics from first principles."]}),x.jsx("p",{children:"One of the biggest hurdles in learning hardware is the need for physical components to experiment with. Unlike computer science where all you need is a laptop, electronics usually requires a lab."}),x.jsx("p",{children:"My goal is to bridge that gap by building a sandbox where anyone can simulate and experiment with circuits realistically. These interactive lessons are the result of my own learning process."}),x.jsxs("p",{className:"contact",children:["Feel free to reach out: ",x.jsx("a",{href:"mailto:bettercalljeevan@gmail.com",children:"bettercalljeevan@gmail.com"})]})]})]})}),x.jsx("section",{id:"roadmap",children:x.jsxs("div",{className:"roadmap-container",children:[x.jsx("h2",{className:"section-title",children:"Learning Path"}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"01"}),x.jsx("h3",{children:"The Spark"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/Franklin.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.1"}),x.jsx("h4",{children:"Benjamin Franklin"}),x.jsx("p",{children:"The invisible fluid theory."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/Scene2_thales.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.2"}),x.jsx("h4",{children:"Thales of Miletus"}),x.jsx("p",{children:"Ancient origins of electricity."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/Galvani.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.3"}),x.jsx("h4",{children:"Luigi Galvani"}),x.jsx("p",{children:"Animal electricity experiments."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/MetalInduction.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.4"}),x.jsx("h4",{children:"Induction in Metals"}),x.jsx("p",{children:"Free-flowing electrons."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/PolarizationInductors.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.5"}),x.jsx("h4",{children:"Polarization"}),x.jsx("p",{children:"Charge separation in insulators."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/coulombs_law.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.6"}),x.jsx("h4",{children:"Coulomb's Law"}),x.jsx("p",{children:"Quantifying electric force."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter1/Chapter1_Final/triboelectric_effect_hair.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"1.7"}),x.jsx("h4",{children:"Triboelectric Effect"}),x.jsx("p",{children:"Charging by friction."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"02"}),x.jsx("h3",{children:"The Field"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/intro_to_electricfeld.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.1"}),x.jsx("h4",{children:"Intro to Electric Fields"}),x.jsx("p",{children:"Force without contact."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/2_vector.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.2"}),x.jsx("h4",{children:"Vector Fields"}),x.jsx("p",{children:"Direction and magnitude."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/vec_addition.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.3"}),x.jsx("h4",{children:"Vector Addition"}),x.jsx("p",{children:"Superposition principle."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/3_asymptotic_behaviorr.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.4"}),x.jsx("h4",{children:"Asymptotic Behavior"}),x.jsx("p",{children:"Far-field approximations."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/4_field_lines.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.5"}),x.jsx("h4",{children:"Field Lines"}),x.jsx("p",{children:"Visualizing field patterns."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/5_misconception.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.6"}),x.jsx("h4",{children:"Misconceptions"}),x.jsx("p",{children:"Common misunderstandings."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/6_dipole.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.7"}),x.jsx("h4",{children:"Dipole"}),x.jsx("p",{children:"Two opposite charges."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/7_creating_a_dipole(induction).html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.8"}),x.jsx("h4",{children:"Creating a Dipole"}),x.jsx("p",{children:"Induced polarization."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/8_dipole_on_vandeGraff.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.9"}),x.jsx("h4",{children:"Dipole on Van de Graaff"}),x.jsx("p",{children:"Strong field effects."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/9_dipole_on_grassfield.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.10"}),x.jsx("h4",{children:"Dipole on Grass Field"}),x.jsx("p",{children:"Natural demonstrations."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter2/10_dipole.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"2.11"}),x.jsx("h4",{children:"Dipole Water Stream"}),x.jsx("p",{children:"Bending water with charge."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"03"}),x.jsx("h3",{children:"Gauss's Law"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/1_electric_flux.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.1"}),x.jsx("h4",{children:"Electric Flux"}),x.jsx("p",{children:"Field through surfaces."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/2_flux.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.2"}),x.jsx("h4",{children:"Flux & Surface"}),x.jsx("p",{children:"Orientation matters."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/3_flux_inside_sphere.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.3"}),x.jsx("h4",{children:"Flux Inside Sphere"}),x.jsx("p",{children:"Symmetry applications."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/4_gauss_law.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.4"}),x.jsx("h4",{children:"Gauss's Law"}),x.jsx("p",{children:"Relating flux to charge."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/5_infitnite_plane.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.5"}),x.jsx("h4",{children:"Infinite Plane"}),x.jsx("p",{children:"Uniform field from sheet."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/6_parralel_plates.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.6"}),x.jsx("h4",{children:"Parallel Plates"}),x.jsx("p",{children:"Capacitor fundamentals."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/7infinteplanevsspeherical.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.7"}),x.jsx("h4",{children:"Plane vs Sphere"}),x.jsx("p",{children:"Comparing geometries."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter3/hollow_sphere.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"3.8"}),x.jsx("h4",{children:"Hollow Sphere"}),x.jsx("p",{children:"Shielding effects."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"04"}),x.jsx("h3",{children:"Work and Energy"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter4/1.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"4.1"}),x.jsx("h4",{children:"The Elastic Struggle"}),x.jsx("p",{children:"Work against electric force."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter4/2.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"4.2"}),x.jsx("h4",{children:"The Winding Path"}),x.jsx("p",{children:"Path independence."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter4/3.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"4.3"}),x.jsx("h4",{children:"Electric Potential"}),x.jsx("p",{children:"Voltage fundamentals."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter4/4.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"4.4"}),x.jsx("h4",{children:"Equipotential Surfaces"}),x.jsx("p",{children:"Constant potential regions."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"05"}),x.jsx("h3",{children:"Electric Potential"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/1_conservative_forces.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.1"}),x.jsx("h4",{children:"Conservative Forces"}),x.jsx("p",{children:"Path independence of work."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/2_field_from_potential.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.2"}),x.jsx("h4",{children:"Field from Potential"}),x.jsx("p",{children:"Deriving E from V."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/3_equipotentials.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.3"}),x.jsx("h4",{children:"Equipotentials"}),x.jsx("p",{children:"Constant potential surfaces."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/4_gradient.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.4"}),x.jsx("h4",{children:"Gradient"}),x.jsx("p",{children:"Vector calculus of potential."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/5_parallel_plates.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.5"}),x.jsx("h4",{children:"Parallel Plates"}),x.jsx("p",{children:"Uniform electric field."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/6_conductors.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.6"}),x.jsx("h4",{children:"Conductors"}),x.jsx("p",{children:"Equipotential objects."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/7_hollow_conductor.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.7"}),x.jsx("h4",{children:"Hollow Conductor"}),x.jsx("p",{children:"Zero internal field."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/8_farady_cage.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.8"}),x.jsx("h4",{children:"Faraday Cage"}),x.jsx("p",{children:"Electrostatic shielding."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/9_shielding_appplications.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.9"}),x.jsx("h4",{children:"Shielding Applications"}),x.jsx("p",{children:"Real-world protection."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter5/10_charge_dist_non_spherical.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"5.10"}),x.jsx("h4",{children:"Non-Spherical Charge"}),x.jsx("p",{children:"Complex geometries."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"06"}),x.jsx("h3",{children:"Capacitance"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/1_field_energy.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.1"}),x.jsx("h4",{children:"Field Energy"}),x.jsx("p",{children:"Energy stored in fields."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/2_Energy_Density.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.2"}),x.jsx("h4",{children:"Energy Density"}),x.jsx("p",{children:"Energy per unit volume."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/3_Capacitance.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.3"}),x.jsx("h4",{children:"Capacitance"}),x.jsx("p",{children:"Charge storage ability."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/4_capacitance_revised.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.4"}),x.jsx("h4",{children:"Capacitance Revised"}),x.jsx("p",{children:"Deeper understanding."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/5_parrallel_plate.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.5"}),x.jsx("h4",{children:"Parallel Plate"}),x.jsx("p",{children:"Standard capacitor design."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/6_energy_in_cap.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.6"}),x.jsx("h4",{children:"Energy in Capacitor"}),x.jsx("p",{children:"Stored energy calculations."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/7_cylindrical_cap.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.7"}),x.jsx("h4",{children:"Cylindrical Capacitor"}),x.jsx("p",{children:"Alternative geometry."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/8_flash.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.8"}),x.jsx("h4",{children:"Camera Flash"}),x.jsx("p",{children:"Rapid energy release."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter6/combined.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"6.9"}),x.jsx("h4",{children:"Combined Capacitors"}),x.jsx("p",{children:"Series and parallel."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"07"}),x.jsx("h3",{children:"Dielectrics"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/1_polarization_in_insulators.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.1"}),x.jsx("h4",{children:"Polarization in Insulators"}),x.jsx("p",{children:"Molecular alignment."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/2_dielectric_constant.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.2"}),x.jsx("h4",{children:"Dielectric Constant"}),x.jsx("p",{children:"Material property."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/3_gauss_law_dielectrics.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.3"}),x.jsx("h4",{children:"Gauss's Law with Dielectrics"}),x.jsx("p",{children:"Modified field equations."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/4_experiments_disconnected.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.4"}),x.jsx("h4",{children:"Disconnected Experiment"}),x.jsx("p",{children:"Isolated capacitor test."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/5_experiments_connected.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.5"}),x.jsx("h4",{children:"Connected Experiment"}),x.jsx("p",{children:"Battery-connected test."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/6_dielectric_breakdown.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.6"}),x.jsx("h4",{children:"Dielectric Breakdown"}),x.jsx("p",{children:"Material failure limits."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter7/7_energy_storage_mystery.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"7.7"}),x.jsx("h4",{children:"Energy Storage Mystery"}),x.jsx("p",{children:"Where does energy go?"})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"08"}),x.jsx("h3",{children:"Current & Resistance"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/1_current_convention.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.1"}),x.jsx("h4",{children:"Current Convention"}),x.jsx("p",{children:"Positive vs electron flow."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/2_drift_velocity_snail.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.2"}),x.jsx("h4",{children:"Drift Velocity"}),x.jsx("p",{children:"Slow electron movement."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/3_microscopic_ohms_law.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.3"}),x.jsx("h4",{children:"Microscopic Ohm's Law"}),x.jsx("p",{children:"J = σE relationship."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/4_geometry_of_resistance.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.4"}),x.jsx("h4",{children:"Geometry of Resistance"}),x.jsx("p",{children:"Length and area effects."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/5_materials_spectrum.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.5"}),x.jsx("h4",{children:"Materials Spectrum"}),x.jsx("p",{children:"Conductors to insulators."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/6_the_birth_of_ohms_law.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.6"}),x.jsx("h4",{children:"Birth of Ohm's Law"}),x.jsx("p",{children:"Deriving V = IR."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/7_light_bulb_breakdown.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.7"}),x.jsx("h4",{children:"Light Bulb Breakdown"}),x.jsx("p",{children:"Non-linear resistance."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/8_thermal_chaos.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.8"}),x.jsx("h4",{children:"Thermal Chaos"}),x.jsx("p",{children:"Lattice vibrations."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/9_series_parallel.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.9"}),x.jsx("h4",{children:"Series & Parallel"}),x.jsx("p",{children:"Combining resistors."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter8/10_electric_power.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"8.10"}),x.jsx("h4",{children:"Electric Power"}),x.jsx("p",{children:"Energy dissipation rate."})]})]})]}),x.jsxs("div",{className:"chapter",children:[x.jsxs("div",{className:"chapter-header",children:[x.jsx("span",{className:"chapter-number",children:"09"}),x.jsx("h3",{children:"EMF & Circuits"})]}),x.jsxs("div",{className:"lesson-grid",children:[x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/1_electric_pump.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.1"}),x.jsx("h4",{children:"The Electric Pump"}),x.jsx("p",{children:"Electromotive force concept."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/2_chemical_battery.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.2"}),x.jsx("h4",{children:"The Chemical Battery"}),x.jsx("p",{children:"Zinc-copper cell."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/3_internal_resistance.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.3"}),x.jsx("h4",{children:"Internal Resistance"}),x.jsx("p",{children:"Real battery limitations."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/4_maximum_power.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.4"}),x.jsx("h4",{children:"Maximum Power Transfer"}),x.jsx("p",{children:"Impedance matching."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/5_loop_rule.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.5"}),x.jsx("h4",{children:"Kirchhoff's Loop Rule"}),x.jsx("p",{children:"Voltage conservation."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/6_junction_rule.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.6"}),x.jsx("h4",{children:"Kirchhoff's Junction Rule"}),x.jsx("p",{children:"Current conservation."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/7_measuring_circuits.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.7"}),x.jsx("h4",{children:"Measuring Circuits"}),x.jsx("p",{children:"Voltmeters and ammeters."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/8_household_power.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.8"}),x.jsx("h4",{children:"Household Power"}),x.jsx("p",{children:"Real-world applications."})]}),x.jsxs("a",{href:"/theapplefalls/lessons/chapter9/9_kelvin_dropper.html",className:"lesson-card",children:[x.jsx("span",{className:"lesson-number",children:"9.9"}),x.jsx("h4",{children:"Kelvin Water Dropper"}),x.jsx("p",{children:"Electrostatic generator."})]})]})]}),x.jsxs("div",{className:"tbc-section",children:[x.jsx("h3",{children:"To Be Continued..."}),x.jsx("p",{children:"More interactive lessons are currently being developed."})]})]})})]})},Oe=({src:r})=>x.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",backgroundColor:"#0a0a0a",paddingTop:"80px"},children:[x.jsx(W0,{}),x.jsx("div",{style:{flex:1,position:"relative"},children:x.jsx("iframe",{src:r,style:{width:"100%",height:"100%",border:"none",display:"block"},title:"Lesson"})})]});function KR(){return x.jsx(EM,{children:x.jsxs(eM,{children:[x.jsx(De,{path:"/",element:x.jsx(ZR,{})}),x.jsx(De,{path:"/lesson/franklin",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/Franklin.html"})}),x.jsx(De,{path:"/lesson/thales",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/Scene2_thales.html"})}),x.jsx(De,{path:"/lesson/galvani",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/Galvani.html"})}),x.jsx(De,{path:"/lesson/metal_induction",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/MetalInduction.html"})}),x.jsx(De,{path:"/lesson/polarization",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/PolarizationInductors.html"})}),x.jsx(De,{path:"/lesson/coulomb",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/coulombs_law.html"})}),x.jsx(De,{path:"/lesson/triboelectric",element:x.jsx(Oe,{src:"/lessons/chapter1/Chapter1_Final/triboelectric_effect_hair.html"})}),x.jsx(De,{path:"/lesson/intro_field",element:x.jsx(Oe,{src:"/lessons/chapter2/intro_to_electricfeld.html"})}),x.jsx(De,{path:"/lesson/vector",element:x.jsx(Oe,{src:"/lessons/chapter2/2_vector.html"})}),x.jsx(De,{path:"/lesson/vec_addition",element:x.jsx(Oe,{src:"/lessons/chapter2/vec_addition.html"})}),x.jsx(De,{path:"/lesson/asymptotic",element:x.jsx(Oe,{src:"/lessons/chapter2/3_asymptotic_behaviorr.html"})}),x.jsx(De,{path:"/lesson/field_lines",element:x.jsx(Oe,{src:"/lessons/chapter2/4_field_lines.html"})}),x.jsx(De,{path:"/lesson/misconception",element:x.jsx(Oe,{src:"/lessons/chapter2/5_misconception.html"})}),x.jsx(De,{path:"/lesson/dipole",element:x.jsx(Oe,{src:"/lessons/chapter2/6_dipole.html"})}),x.jsx(De,{path:"/lesson/dipole_induction",element:x.jsx(Oe,{src:"/lessons/chapter2/7_creating_a_dipole(induction).html"})}),x.jsx(De,{path:"/lesson/dipole_vandegraaff",element:x.jsx(Oe,{src:"/lessons/chapter2/8_dipole_on_vandeGraff.html"})}),x.jsx(De,{path:"/lesson/dipole_grassfield",element:x.jsx(Oe,{src:"/lessons/chapter2/9_dipole_on_grassfield.html"})}),x.jsx(De,{path:"/lesson/dipole_water",element:x.jsx(Oe,{src:"/lessons/chapter2/10_dipole.html"})}),x.jsx(De,{path:"/lesson/flux",element:x.jsx(Oe,{src:"/lessons/chapter3/1_electric_flux.html"})}),x.jsx(De,{path:"/lesson/flux_surface",element:x.jsx(Oe,{src:"/lessons/chapter3/2_flux.html"})}),x.jsx(De,{path:"/lesson/flux_sphere",element:x.jsx(Oe,{src:"/lessons/chapter3/3_flux_inside_sphere.html"})}),x.jsx(De,{path:"/lesson/gauss_law",element:x.jsx(Oe,{src:"/lessons/chapter3/4_gauss_law.html"})}),x.jsx(De,{path:"/lesson/infinite_plane",element:x.jsx(Oe,{src:"/lessons/chapter3/5_infitnite_plane.html"})}),x.jsx(De,{path:"/lesson/parallel_plates",element:x.jsx(Oe,{src:"/lessons/chapter3/6_parralel_plates.html"})}),x.jsx(De,{path:"/lesson/plane_vs_sphere",element:x.jsx(Oe,{src:"/lessons/chapter3/7infinteplanevsspeherical.html"})}),x.jsx(De,{path:"/lesson/hollow_sphere",element:x.jsx(Oe,{src:"/lessons/chapter3/hollow_sphere.html"})}),x.jsx(De,{path:"/lesson/chapter4/1",element:x.jsx(Oe,{src:"/lessons/chapter4/1.html"})}),x.jsx(De,{path:"/lesson/chapter4/2",element:x.jsx(Oe,{src:"/lessons/chapter4/2.html"})}),x.jsx(De,{path:"/lesson/chapter4/3",element:x.jsx(Oe,{src:"/lessons/chapter4/3.html"})}),x.jsx(De,{path:"/lesson/chapter4/4",element:x.jsx(Oe,{src:"/lessons/chapter4/4.html"})}),x.jsx(De,{path:"/lesson/chapter5/conservative_forces",element:x.jsx(Oe,{src:"/lessons/chapter5/1_conservative_forces.html"})}),x.jsx(De,{path:"/lesson/chapter5/field_from_potential",element:x.jsx(Oe,{src:"/lessons/chapter5/2_field_from_potential.html"})}),x.jsx(De,{path:"/lesson/chapter5/equipotentials",element:x.jsx(Oe,{src:"/lessons/chapter5/3_equipotentials.html"})}),x.jsx(De,{path:"/lesson/chapter5/gradient",element:x.jsx(Oe,{src:"/lessons/chapter5/4_gradient.html"})}),x.jsx(De,{path:"/lesson/chapter5/parallel_plates",element:x.jsx(Oe,{src:"/lessons/chapter5/5_parallel_plates.html"})}),x.jsx(De,{path:"/lesson/chapter5/conductors",element:x.jsx(Oe,{src:"/lessons/chapter5/6_conductors.html"})}),x.jsx(De,{path:"/lesson/chapter5/hollow_conductor",element:x.jsx(Oe,{src:"/lessons/chapter5/7_hollow_conductor.html"})}),x.jsx(De,{path:"/lesson/chapter5/faraday_cage",element:x.jsx(Oe,{src:"/lessons/chapter5/8_farady_cage.html"})}),x.jsx(De,{path:"/lesson/chapter5/shielding",element:x.jsx(Oe,{src:"/lessons/chapter5/9_shielding_appplications.html"})}),x.jsx(De,{path:"/lesson/chapter5/non_spherical",element:x.jsx(Oe,{src:"/lessons/chapter5/10_charge_dist_non_spherical.html"})}),x.jsx(De,{path:"/lesson/chapter6/field_energy",element:x.jsx(Oe,{src:"/lessons/chapter6/1_field_energy.html"})}),x.jsx(De,{path:"/lesson/chapter6/energy_density",element:x.jsx(Oe,{src:"/lessons/chapter6/2_Energy_Density.html"})}),x.jsx(De,{path:"/lesson/chapter6/capacitance",element:x.jsx(Oe,{src:"/lessons/chapter6/3_Capacitance.html"})}),x.jsx(De,{path:"/lesson/chapter6/capacitance_revised",element:x.jsx(Oe,{src:"/lessons/chapter6/4_capacitance_revised.html"})}),x.jsx(De,{path:"/lesson/chapter6/parallel_plate",element:x.jsx(Oe,{src:"/lessons/chapter6/5_parrallel_plate.html"})}),x.jsx(De,{path:"/lesson/chapter6/energy_in_cap",element:x.jsx(Oe,{src:"/lessons/chapter6/6_energy_in_cap.html"})}),x.jsx(De,{path:"/lesson/chapter6/cylindrical_cap",element:x.jsx(Oe,{src:"/lessons/chapter6/7_cylindrical_cap.html"})}),x.jsx(De,{path:"/lesson/chapter6/flash",element:x.jsx(Oe,{src:"/lessons/chapter6/8_flash.html"})}),x.jsx(De,{path:"/lesson/chapter6/combined",element:x.jsx(Oe,{src:"/lessons/chapter6/combined.html"})}),x.jsx(De,{path:"/lesson/chapter7/polarization_insulators",element:x.jsx(Oe,{src:"/lessons/chapter7/1_polarization_in_insulators.html"})}),x.jsx(De,{path:"/lesson/chapter7/dielectric_constant",element:x.jsx(Oe,{src:"/lessons/chapter7/2_dielectric_constant.html"})}),x.jsx(De,{path:"/lesson/chapter7/gauss_law_dielectrics",element:x.jsx(Oe,{src:"/lessons/chapter7/3_gauss_law_dielectrics.html"})}),x.jsx(De,{path:"/lesson/chapter7/experiment_disconnected",element:x.jsx(Oe,{src:"/lessons/chapter7/4_experiments_disconnected.html"})}),x.jsx(De,{path:"/lesson/chapter7/experiment_connected",element:x.jsx(Oe,{src:"/lessons/chapter7/5_experiments_connected.html"})}),x.jsx(De,{path:"/lesson/chapter7/dielectric_breakdown",element:x.jsx(Oe,{src:"/lessons/chapter7/6_dielectric_breakdown.html"})}),x.jsx(De,{path:"/lesson/chapter7/energy_storage_mystery",element:x.jsx(Oe,{src:"/lessons/chapter7/7_energy_storage_mystery.html"})}),x.jsx(De,{path:"/lesson/chapter8/current_convention",element:x.jsx(Oe,{src:"/lessons/chapter8/1_current_convention.html"})}),x.jsx(De,{path:"/lesson/chapter8/drift_velocity",element:x.jsx(Oe,{src:"/lessons/chapter8/2_drift_velocity_snail.html"})}),x.jsx(De,{path:"/lesson/chapter8/microscopic_ohms_law",element:x.jsx(Oe,{src:"/lessons/chapter8/3_microscopic_ohms_law.html"})}),x.jsx(De,{path:"/lesson/chapter8/geometry_resistance",element:x.jsx(Oe,{src:"/lessons/chapter8/4_geometry_of_resistance.html"})}),x.jsx(De,{path:"/lesson/chapter8/materials_spectrum",element:x.jsx(Oe,{src:"/lessons/chapter8/5_materials_spectrum.html"})}),x.jsx(De,{path:"/lesson/chapter8/birth_of_ohms_law",element:x.jsx(Oe,{src:"/lessons/chapter8/6_the_birth_of_ohms_law.html"})}),x.jsx(De,{path:"/lesson/chapter8/light_bulb",element:x.jsx(Oe,{src:"/lessons/chapter8/7_light_bulb_breakdown.html"})}),x.jsx(De,{path:"/lesson/chapter8/thermal_chaos",element:x.jsx(Oe,{src:"/lessons/chapter8/8_thermal_chaos.html"})}),x.jsx(De,{path:"/lesson/chapter8/series_parallel",element:x.jsx(Oe,{src:"/lessons/chapter8/9_series_parallel.html"})}),x.jsx(De,{path:"/lesson/chapter8/electric_power",element:x.jsx(Oe,{src:"/lessons/chapter8/10_electric_power.html"})}),x.jsx(De,{path:"/lesson/chapter9/electric_pump",element:x.jsx(Oe,{src:"/lessons/chapter9/1_electric_pump.html"})}),x.jsx(De,{path:"/lesson/chapter9/chemical_battery",element:x.jsx(Oe,{src:"/lessons/chapter9/2_chemical_battery.html"})}),x.jsx(De,{path:"/lesson/chapter9/internal_resistance",element:x.jsx(Oe,{src:"/lessons/chapter9/3_internal_resistance.html"})}),x.jsx(De,{path:"/lesson/chapter9/maximum_power",element:x.jsx(Oe,{src:"/lessons/chapter9/4_maximum_power.html"})}),x.jsx(De,{path:"/lesson/chapter9/loop_rule",element:x.jsx(Oe,{src:"/lessons/chapter9/5_loop_rule.html"})}),x.jsx(De,{path:"/lesson/chapter9/junction_rule",element:x.jsx(Oe,{src:"/lessons/chapter9/6_junction_rule.html"})}),x.jsx(De,{path:"/lesson/chapter9/measuring_circuits",element:x.jsx(Oe,{src:"/lessons/chapter9/7_measuring_circuits.html"})}),x.jsx(De,{path:"/lesson/chapter9/household_power",element:x.jsx(Oe,{src:"/lessons/chapter9/8_household_power.html"})}),x.jsx(De,{path:"/lesson/chapter9/kelvin_dropper",element:x.jsx(Oe,{src:"/lessons/chapter9/9_kelvin_dropper.html"})}),x.jsx(De,{path:"/sandbox",element:x.jsx(Oe,{src:"/lessons/sandbox/circuit_simulator.html"})})]})})}lS.createRoot(document.getElementById("root")).render(x.jsx(_e.StrictMode,{children:x.jsx(KR,{})}));
