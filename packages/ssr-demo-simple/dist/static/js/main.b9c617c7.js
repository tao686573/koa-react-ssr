!function(l){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],u=0,i=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&i.push(s[n][0]),s[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(p&&p(e);i.length;)i.shift()();return f.push.apply(f,a||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(f.splice(t--,1),e=d(d.s=n[0]))}return e}var n={},s={3:0},f=[];function d(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(o){var e=[],n=s[o];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=s[o]=[e,t]});e.push(n[2]=t);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,d.nc&&a.setAttribute("nonce",d.nc),a.src=function l(e){return d.p+"js/"+({}[e]||e)+"."+{1:"95da4855",4:"0d06854e",5:"2d091f62"}[e]+".js"}(o);var u=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(i);var t=s[o];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+o+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,t[1](u)}s[o]=undefined}};var i=setTimeout(function(){r({type:"timeout",target:a})},12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},d.m=l,d.c=n,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)d.d(n,r,function(e){return t[e]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;f.push([147,0,2]),c()}({147:function(e,t,n){e.exports=n(258)},258:function(e,t,n){"use strict";n.r(t);n(129),n(161);var r=n(0),o=n.n(r),a=n(123),u=n.n(a),i=n(124),l=n.n(i),c=n(107),s=n.n(c),f=n(36),d=n.n(f),p=n(37),m=n.n(p),h=n(38),v=n.n(h),y=n(39),b=n.n(y),g=n(40),_=n.n(g),E=(n(232),function(e){function t(e){return d()(this,t),v()(this,b()(t).call(this,e))}return _()(t,e),m()(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"layout-box"},o.a.createElement("h1",null,"zz.js ---\x3e koa+react+ssr"),this.props.children)}}]),t}(o.a.Component)),w=n(10);var x=function L(e){var t=e.routeList;return o.a.createElement(E,null,o.a.createElement(w.c,null,s()(t).call(t,function(e){return o.a.createElement(w.a,l()({key:e.path},e))})))},O=n(41);n(237),n(239);function P(e){return o.a.createElement("div",null,"loading......")}var S=function(e){function n(e){var t;return d()(this,n),(t=v()(this,b()(n).call(this,e))).state={mod:null},t}return _()(n,e),m()(n,[{key:"componentDidMount",value:function(){this.state.mod||this.load(this.props)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load().then(function(e){t.setState({mod:e["default"]?e["default"]:e})})}},{key:"render",value:function(){return this.state.mod?this.props.children(this.state.mod):o.a.createElement(P,null)}}]),n}(o.a.Component),j=n(51),k=n.n(j);var C=function N(e){function t(t){return o.a.createElement(S,{load:e},function(e){return o.a.createElement(e,t)})}return t[k.a.asyncComponentKey]=!0,t};var I=[{path:["/","/index"],component:C(function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,362))}),exact:!0},{path:"/detail/:id",component:C(function(){return Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,363))}),exact:!0},{path:"*",component:function D(e){var t=e.staticContext;return t&&(t.code=404),o.a.createElement("div",null,"404页面")},exact:!0}],M=n(127),T=n.n(M);function A(e){u.a.hydrate(o.a.createElement(O.a,null,o.a.createElement(x,{routeList:e})),document.getElementById("root"))}!function J(t){var e=JSON.parse(document.getElementById("ssrTextInitData").value.replace(/\\n/g,""));window.__INITIAL_DATA__=e||{};var n=function(e,t){var n,r,o=!0,a=!1,u=undefined;try{for(var i,l=T()(t);!(o=(i=l.next()).done);o=!0){var c=i.value;if(r=Object(w.e)(e,c)){n=c;break}}}catch(s){a=!0,u=s}finally{try{o||null==l["return"]||l["return"]()}finally{if(a)throw u}}return{targetRoute:n,targetMatch:r}}(document.location.pathname,t).targetRoute;n?n.component[k.a.asyncComponentKey]&&n.component().props.load().then(function(e){A(t)}):A(t)}(I)},51:function(e,t){e.exports={__IS_SSR__:!1,wdsPort:9002,nodeServerPort:9001,asyncComponentKey:"__IS_ASYNC_COMP_FLAG__"}}});