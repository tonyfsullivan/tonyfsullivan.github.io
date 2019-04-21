var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t,n){if(e){const r=l(e,t,n);return e[0](r)}}function l(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function c(e,n,r,s){return e[1]?t({},t(n.$$scope.changed||{},e[1](s?s(r):{}))):n.$$scope.changed||{}}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n)}function f(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function h(e){return document.createTextNode(e)}function v(){return h(" ")}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function g(e,t,n){e.style.setProperty(t,n)}let y;function b(e){y=e}const x=[];let k;const S=[],_=[],M=[];function T(e){_.push(e)}function N(){const e=new Set;do{for(;x.length;){const e=x.shift();b(e),B(e.$$)}for(;S.length;)S.shift()();for(;_.length;){const t=_.pop();e.has(t)||(t(),e.add(t))}}while(x.length);for(;M.length;)M.pop()();k=null}function B(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(T))}let C;function z(e,t,r){const{fragment:i,on_mount:a,on_destroy:l,after_render:c}=e.$$;i.m(t,r),T(()=>{const t=a.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),c.forEach(T)}function E(e,t){e.$$.dirty||(x.push(e),k||(k=Promise.resolve()).then(N),e.$$.dirty={}),e.$$.dirty[t]=!0}function A(t,n,o,i,a,l){const c=y;b(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(c?c.$$.context:[]),callbacks:r(),dirty:null};let f=!1;var p;d.ctx=o?o(t,u,(e,n)=>{d.ctx&&a(d.ctx[e],d.ctx[e]=n)&&(d.bound[e]&&d.bound[e](n),f&&E(t,e))}):u,d.update(),f=!0,s(d.before_render),d.fragment=i(d.ctx),n.target&&(n.hydrate?d.fragment.l((p=n.target,Array.from(p.childNodes))):d.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),z(t,n.target,n.anchor),N()),b(c)}class j{$destroy(){var t,n;n=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const O=[{name:"blue",firstTime:!0},{name:"cyan",firstTime:!0},{name:"blue-alt"},{name:"cyan-alt"},{name:"green"},{name:"brown"},{name:"orange"},{name:"crimson-red"},{name:"red"},{name:"red-alt"},{name:"indigo-alt"},{name:"grey-alt"},{name:"material-cyan"},{name:"material-brown"},{name:"material-grey",firstTime:!0},{name:"material-grey-alt"},{name:"teal"}];function L(e){const t=e?O.filter(t=>t.name!==e.name):O.filter(e=>e.firstTime);return t[Math.floor(Math.random()*t.length)]}const P=function(){const{subscribe:t,update:n}=function(t,n=e){let r;const s=[];function o(e){if(i(t,e)){if(t=e,!r)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const l=[i,a];return s.push(l),1===s.length&&(r=n(o)||e),i(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&r()}}}}(L());return{subscribe:t,changeTheme:()=>n(L)}}(),H=()=>"undefined"==typeof window,I=()=>{if(H())return!1;let e=window.opr||{};return!!window.opr&&!!e.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0},R=()=>!H()&&!!document.documentMode,F=()=>!H()&&!!window.chrome&&!!window.chrome;var V={isServer:H,isOpera:I,isFirefox:()=>!H()&&"undefined"!=typeof InstallTrigger,isSafari:()=>{if(H())return!1;let e=window.safari||{};return/constructor/i.test(window.HTMLElement)||function(t){return"[object SafariRemoteNotification]"===(!window.safari||void 0!==e&&e.pushNotification).toString()}()},isIE:R,isEdge:()=>!H()&&!R()&&!!window.StyleMedia,isChrome:F,isBlink:()=>!H()&&(F()||I())&&!!window.CSS,isMobile:()=>{if(H)return!1;const e=(navigator||{}).userAgent;return!!e&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(e)},allBrowsers:["chrome","firefox","safari","opera","ie","edge","blink","mobile"]};function q(e,t){return!(!t||!t.indexOf)&&t.indexOf(e)>=0}function D(e){var t;const n=e.$$slots.default,r=a(n,e,null);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,n){r&&r.m(e,n),t=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(c(n,t,e),l(n,t,null))},i(e){t||(r&&r.i&&r.i(e),t=!0)},o(e){r&&r.o&&r.o(e),t=!1},d(e){r&&r.d(e)}}}function W(e){var t,n,r=e.shouldRender&&D(e);return{c(){r&&r.c(),t=h("")},m(e,s){r&&r.m(e,s),d(e,t,s),n=!0},p(e,n){var o;n.shouldRender?r?(r.p(e,n),r.i(1)):((r=D(n)).c(),r.i(1),r.m(t.parentNode,t)):r&&(o=(()=>{r.d(1),r=null}),(C={remaining:0,callbacks:[]}).callbacks.push(o),r.o(1),C.remaining||s(C.callbacks))},i(e){n||(r&&r.i(),n=!0)},o(e){r&&r.o(),n=!1},d(e){r&&r.d(e),e&&f(t)}}}function G(e,t,n){const r=[{name:"mobile",isCurrentBrowser:V.isMobile()},{name:"chrome",isCurrentBrowser:V.isChrome()},{name:"firefox",isCurrentBrowser:V.isFirefox()},{name:"safari",isCurrentBrowser:V.isSafari()},{name:"opera",isCurrentBrowser:V.isOpera()},{name:"ie",isCurrentBrowser:V.isIE()},{name:"edge",isCurrentBrowser:V.isEdge()},{name:"blink",isCurrentBrowser:V.isBlink()}].find(e=>!0===e.isCurrentBrowser);let s,o,i,{browsers:a=[],only:l=!1,except:c=!1}=t,{$$slots:u={},$$scope:d}=t;return e.$set=(e=>{"browsers"in e&&n("browsers",a=e.browsers),"only"in e&&n("only",l=e.only),"except"in e&&n("except",c=e.except),"$$scope"in e&&n("$$scope",d=e.$$scope)}),e.$$.update=((e={except:1,browsers:1,only:1,restrictedBrowsers:1,allowedBrowsers:1})=>{(e.except||e.browsers||e.only)&&n("allowedBrowsers",s=V.allBrowsers.reduce((e,t)=>(c?q(t,a)||e.push(t):l&&q(t,a)&&e.push(t),e),[])),(e.except||e.browsers||e.only)&&n("restrictedBrowsers",o=V.allBrowsers.reduce((e,t)=>(c?q(t,a)&&e.push(t):l&&(q(t,a)||e.push(t)),e),[])),(e.restrictedBrowsers||e.allowedBrowsers)&&n("shouldRender",i=r&&(!q(r.name,o)||q(r.name,s)))}),{browsers:a,only:l,except:c,shouldRender:i,$$slots:u,$$scope:d}}class X extends j{constructor(e){super(),A(this,e,G,W,i,["browsers","only","except"])}}function Y(t){var n;return{c(){(n=p("footer")).innerHTML='<div>Made by <a class="primary" href="https://github.com/tonyfsullivan" target="_blank" rel="noopener noreferrer">Tony</a> <span role="img" aria-label="heart">❤️</span></div>',n.className="ph5 pv3 tr f6 bg-primary text"},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}class J extends j{constructor(e){super(),A(this,e,null,Y,i,[])}}function K(t){var n,r,s,o,i,a;return{c(){n=p("div"),r=p("div"),s=v(),o=p("div"),i=v(),a=p("div"),r.id="stars1",g(r,"box-shadow",t.shadowsSmall),r.className="svelte-1o6iycm",o.id="stars2",g(o,"box-shadow",t.shadowsMedium),o.className="svelte-1o6iycm",a.id="stars3",g(a,"box-shadow",t.shadowsLarge),a.className="svelte-1o6iycm",n.className="primary fixed z-1"},m(e,t){d(e,n,t),u(n,r),u(n,s),u(n,o),u(n,i),u(n,a)},p(e,t){e.shadowsSmall&&g(r,"box-shadow",t.shadowsSmall),e.shadowsMedium&&g(o,"box-shadow",t.shadowsMedium),e.shadowsLarge&&g(a,"box-shadow",t.shadowsLarge)},i:e,o:e,d(e){e&&f(n)}}}function Q(e){return Math.floor(Math.random()*Math.floor(e))}function U(e){let t=`${Q(2e3)}px ${Q(2e3)}px`;for(let n=1;n<e;n++)t+=` , ${Q(2e3)}px ${Q(2e3)}px`;return t}function Z(e){return{shadowsSmall:U(700),shadowsMedium:U(200),shadowsLarge:U(100)}}class ee extends j{constructor(e){super(),A(this,e,Z,K,i,[])}}const te="undefined"!=typeof document&&(!!((document||{}).documentElement||{}).style&&"scrollBehavior"in document.documentElement.style),ne=()=>{te?window.scrollTo({top:0,left:0,behavior:"smooth"}):window.scrollTo(0,0)},re=e=>{e&&(te?e.scrollIntoView({behavior:"smooth",block:"start"}):e.scrollIntoView())};function se(t){var n,r,o,i,a,l,c,h;return{c(){n=p("div"),r=p("div"),o=m("svg"),i=m("path"),a=v(),(l=p("div")).textContent="To Top",w(i,"d","M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"),w(o,"class","fill-primary rotate-270"),w(o,"xmlns","http://www.w3.org/2000/svg"),w(o,"width","20"),w(o,"height","20"),w(o,"viewBox","0 0 24 24"),l.className="f6 tc pt1",r.className=c="primary tc center pv2 ph3 "+(t.shouldShowScrollTopArrow?"di":"dn"),n.className="fixed bottom-0 right-0 pointer",h=[$(window,"scroll",t.scroll_handler),$(n,"click",t.click_handler)]},m(e,t){d(e,n,t),u(n,r),u(r,o),u(o,i),u(r,a),u(r,l)},p(e,t){e.shouldShowScrollTopArrow&&c!==(c="primary tc center pv2 ph3 "+(t.shouldShowScrollTopArrow?"di":"dn"))&&(r.className=c)},i:e,o:e,d(e){e&&f(n),s(h)}}}function oe(e,t,n){let r=!1;function s(){if(!document||!document.documentElement)return;const e=document.documentElement.getBoundingClientRect();n("shouldShowScrollTopArrow",r=-1*e.top>100)}return{shouldShowScrollTopArrow:r,onScroll:s,scroll_handler:function(){return s()},click_handler:function(){return ne()}}}class ie extends j{constructor(e){super(),A(this,e,oe,se,i,[])}}function ae(e){var t,n=new ee({});return{c(){n.$$.fragment.c()},m(e,r){z(n,e,r),t=!0},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function le(e){var t,n,r,s,o,i,m=new X({props:{except:!0,browsers:e.preventParallax,$$slots:{default:[ae]},$$scope:{ctx:e}}});const h=e.$$slots.default,$=a(h,e,null);var w=new ie({}),g=new J({});return{c(){t=p("div"),m.$$.fragment.c(),n=v(),$&&$.c(),r=v(),w.$$.fragment.c(),s=v(),g.$$.fragment.c(),t.className=o=e.$theme.name},l(e){$&&$.l(div_nodes)},m(e,o){d(e,t,o),z(m,t,null),u(t,n),$&&$.m(t,null),u(t,r),z(w,t,null),u(t,s),z(g,t,null),i=!0},p(e,n){var r={};e.preventParallax&&(r.browsers=n.preventParallax),e.$$scope&&(r.$$scope={changed:e,ctx:n}),m.$set(r),$&&$.p&&e.$$scope&&$.p(c(h,n,e),l(h,n,null)),i&&!e.$theme||o===(o=n.$theme.name)||(t.className=o)},i(e){i||(m.$$.fragment.i(e),$&&$.i&&$.i(e),w.$$.fragment.i(e),g.$$.fragment.i(e),i=!0)},o(e){m.$$.fragment.o(e),$&&$.o&&$.o(e),w.$$.fragment.o(e),g.$$.fragment.o(e),i=!1},d(e){e&&f(t),m.$destroy(),$&&$.d(e),w.$destroy(),g.$destroy()}}}function ce(e,t,n){let r;var s,o;s=P,o=(e=>{n("$theme",r=e)}),e.$$.on_destroy.push(s.subscribe(o));let{$$slots:i={},$$scope:a}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",a=e.$$scope)}),{preventParallax:["firefox"],$theme:r,$$slots:i,$$scope:a}}class ue extends j{constructor(e){super(),A(this,e,ce,le,i,[])}}function de(e){var t;return{c(){(t=p("div")).innerHTML="\n\t\t\t    All the magic tricks in this site work best in <b>Chrome!</b>",t.className="f7 center ba pv1 ph2"},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function fe(e){var t;return{c(){(t=p("div")).innerHTML="\n\t\t\t    Magic background is disabled in FireFox. Try in <b>Chrome!</b>",t.className="f7 center ba pv1 ph2"},m(e,n){d(e,t,n)},d(e){e&&f(t)}}}function pe(e){var t,n,r=new X({props:{except:!0,browsers:["firefox","chrome","mobile"],$$slots:{default:[de]},$$scope:{ctx:e}}}),s=new X({props:{only:!0,browsers:["firefox"],$$slots:{default:[fe]},$$scope:{ctx:e}}});return{c(){r.$$.fragment.c(),t=v(),s.$$.fragment.c()},m(e,o){z(r,e,o),d(e,t,o),z(s,e,o),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),r.$set(n);var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),s.$set(o)},i(e){n||(r.$$.fragment.i(e),s.$$.fragment.i(e),n=!0)},o(e){r.$$.fragment.o(e),s.$$.fragment.o(e),n=!1},d(e){r.$destroy(e),e&&f(t),s.$destroy(e)}}}class me extends j{constructor(e){super(),A(this,e,null,pe,i,[])}}function he(t){var n,r,o,i,a,l,c,m,h=!1,w=()=>{h=!1};return T(t.onwindowscroll),{c(){r=p("nav"),(o=p("div")).innerHTML='<svg class="fill-primary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M4.908 2.081l-2.828 2.828 19.092 19.091 2.828-2.828-19.092-19.091zm2.121 6.363l-3.535-3.535 1.414-1.414 3.535 3.535-1.414 1.414zm1.731-5.845c1.232.376 2.197 1.341 2.572 2.573.377-1.232 1.342-2.197 2.573-2.573-1.231-.376-2.196-1.34-2.573-2.573-.375 1.232-1.34 2.197-2.572 2.573zm-5.348 6.954c-.498 1.635-1.777 2.914-3.412 3.413 1.635.499 2.914 1.777 3.412 3.411.499-1.634 1.778-2.913 3.412-3.411-1.634-.5-2.913-1.778-3.412-3.413zm9.553-3.165c.872.266 1.553.948 1.819 1.82.266-.872.948-1.554 1.819-1.82-.871-.266-1.553-.948-1.819-1.82-.266.871-.948 1.554-1.819 1.82zm4.426-6.388c-.303.994-1.082 1.772-2.075 2.076.995.304 1.772 1.082 2.077 2.077.303-.994 1.082-1.772 2.074-2.077-.992-.303-1.772-1.082-2.076-2.076z"></path></svg>\n\t\t\t    <div class="tc f7 f6-ns pt1">Color Me</div>',i=v(),a=p("div"),(l=p("div")).textContent="About",o.className="bounce-xy pointer ml3 flex flex-column items-center",l.className="menu-item bb bw1 b--transparent fw4 active pv1 ph0 mv0 mh3 f4 f3-m f2-l pointer",a.className="menu mr3 flex justify-end",r.className=c="fixed top-0 w-100 pv2 bg-primary primary flex justify-end items-center "+(t.isSticky?"sticky":""),m=[$(window,"scroll",()=>{h=!0,clearTimeout(n),n=setTimeout(w,100),t.onwindowscroll()}),$(o,"click",P.changeTheme),$(l,"click",t.click_handler)]},m(e,n){var s;d(e,r,n),u(r,o),u(r,i),u(r,a),u(a,l),s=(()=>t.nav_1_binding(r,null)),S.push(s)},p(e,t){e.y&&!h&&(h=!0,clearTimeout(n),window.scrollTo(window.pageXOffset,t.y),n=setTimeout(w,100)),e.items&&(t.nav_1_binding(null,r),t.nav_1_binding(r,null)),e.isSticky&&c!==(c="fixed top-0 w-100 pv2 bg-primary primary flex justify-end items-center "+(t.isSticky?"sticky":""))&&(r.className=c)},i:e,o:e,d(e){e&&f(r),t.nav_1_binding(null,r),s(m)}}}function ve(e,t,n){let r,s,o;return e.$$.update=((e={nav:1,y:1})=>{(e.nav||e.y)&&n("isSticky",o=r&&s>r.offsetTop)}),{nav:r,y:s,isSticky:o,onwindowscroll:function(){s=window.pageYOffset,n("y",s)},click_handler:function(){return function(e){const t=document.querySelector(e);re(t)}("#about")},nav_1_binding:function(e,t){n("nav",r=e)}}}class $e extends j{constructor(e){super(),A(this,e,ve,he,i,[])}}function we(t){var n,r;return{c(){(n=p("div")).innerHTML='<div class="primary bounce tc center pb2 svelte-14v7s39"><div class="tc f6 mb1">Click Me</div>\n\t\t\t    <svg class="fill-primary h2 w2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path></svg></div>',n.className="pointer",r=$(n,"click",t.click_handler)},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n),r()}}}function ge(e,t,n){let{pageSelector:r=""}=t;function s(){const e=document.querySelector(r);re(e)}return e.$set=(e=>{"pageSelector"in e&&n("pageSelector",r=e.pageSelector)}),{pageSelector:r,scrollToNext:s,click_handler:function(){return s()}}}class ye extends j{constructor(e){super(),A(this,e,ge,we,i,["pageSelector"])}}function be(t){var n;return{c(){(n=p("div")).innerHTML='<a class="ph2 svelte-2p3be7" target="_blank" rel="noopener noreferrer" href="https://github.com/tonyfsullivan"><svg class="fill-primary h2 w2 h3-ns w3-ns" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>\n\t\t\t    <a class="ph2 svelte-2p3be7" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tony-sullivan"><svg class="fill-primary h2 w2 h3-ns w3-ns" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>\n\t\t\t    <a class="ph2 svelte-2p3be7" target="_blank" rel="noopener noreferrer" href="https://medium.com/@tony.sullivan"><svg class="fill-primary h2 w2 h3-ns w3-ns" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 24h-24v-24h24v24zm-4.03-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"></path></svg></a>\n\t\t\t    <a class="ph2 svelte-2p3be7" target="_blank" rel="noopener noreferrer" href="https://dev.to/tonyfsullivan"><svg class="fill-primary h2 w2 h3-ns w3-ns" viewBox="0 0 408 410"><path d="M10.5 2.5C5.6 4.2 2.4 7.8 1 12.9.3 15.6.1 77.2.2 207.1.5 396.6.5 397.5 2.5 401c1.2 1.9 3.6 4.3 5.5 5.5 3.5 2 4.2 2 196 2s192.5 0 196-2c1.9-1.2 4.3-3.6 5.5-5.5 2-3.5 2-4.2 2-196s0-192.5-2-196c-1.2-1.9-3.6-4.3-5.5-5.5-3.5-2-4.4-2-194.5-2.2-162.9-.2-191.6 0-195 1.2zm96.8 124c9 1.9 15.5 5.6 22.2 12.6 6.1 6.4 9.9 13.7 11.5 21.9 1.3 6.9 1.3 81.1 0 88.1-3.4 18.2-18.9 32.4-38.1 34.9-4 .5-17.4 1-29.6 1H51V125h24.8c17.6 0 26.6.4 31.5 1.5zm130.7 13V154h-51v36h31v29h-31l.2 18.2.3 18.3 25.3.3 25.2.2v29h-29.5c-32.8 0-37.9-.6-43.1-5.2-7.3-6.4-6.9-2.3-7.2-72.6-.2-43.8.1-64.5.8-67.3 1.4-5.2 7.3-11.6 12.5-13.4 3.1-1.1 10.9-1.4 35.3-1.5H238v14.5zm48.9-12.3c.4 1.3 6.8 25.6 14.2 54 7.4 28.5 13.6 51.2 13.8 50.5.3-.7 6.6-24.8 14.1-53.7l13.7-52.5 15.6-.3c11.8-.2 15.7.1 15.7 1s-34.6 132.4-36.6 139c-1.4 4.6-8.9 14-13.1 16.5-5.3 3-13.1 3.5-17.9 1-4.3-2.2-10-8.8-12.9-15-1.8-3.8-31.2-112-38-140l-.7-2.7h15.6c15.3 0 15.7 0 16.5 2.2z"></path><path d="M80 205v51.2l10.3-.4c8.9-.3 10.8-.7 14.8-3 7.8-4.6 7.9-4.9 7.9-48.4 0-42.4 0-42.4-7.3-47.2-3.6-2.4-5.1-2.7-14.9-3.1l-10.8-.3V205z"></path></svg></a>',n.className="animate-icons pv1 ph0 f2 f1-ns svelte-2p3be7"},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}class xe extends j{constructor(e){super(),A(this,e,null,be,i,[])}}function ke(t){var n,r,s,o,i,a,l,c,m,h,$,w=new $e({}),g=new me({}),y=new xe({}),b=new ye({props:{pageSelector:"#about"}});return{c(){n=p("div"),w.$$.fragment.c(),r=v(),s=p("main"),g.$$.fragment.c(),o=v(),i=p("div"),(a=p("div")).textContent="Hello, I'm Tony!",l=v(),(c=p("div")).textContent="Full Stack Dev | Blogger | Progressive Web App Enthusiast",m=v(),y.$$.fragment.c(),h=v(),b.$$.fragment.c(),a.className="f1 f-headline-ns b pb3 lh-copy",c.className="f3 f2-ns mv4 fw3 lh-title",i.className="flex-auto flex flex-column justify-center tc",s.className="primary pt5 pt6-l pb2 ph4 ph5-ns flex flex-column flex-auto justify-center tc",n.id="landing",n.className="bg-primary min-vh-100 flex flex-column flex-auto justify-center"},m(e,t){d(e,n,t),z(w,n,null),u(n,r),u(n,s),z(g,s,null),u(s,o),u(s,i),u(i,a),u(i,l),u(i,c),u(i,m),z(y,i,null),u(s,h),z(b,s,null),$=!0},p:e,i(e){$||(w.$$.fragment.i(e),g.$$.fragment.i(e),y.$$.fragment.i(e),b.$$.fragment.i(e),$=!0)},o(e){w.$$.fragment.o(e),g.$$.fragment.o(e),y.$$.fragment.o(e),b.$$.fragment.o(e),$=!1},d(e){e&&f(n),w.$destroy(),g.$destroy(),y.$destroy(),b.$destroy()}}}class Se extends j{constructor(e){super(),A(this,e,null,ke,i,[])}}function _e(t){var n;return{c(){(n=p("div")).innerHTML='<h1 class="primary pv3 ph0 f1 f-subheadline-l svelte-1iefovm">About</h1>\n\t\t\t\t<div class="about-wrapper svelte-1iefovm"><div class="f5 f4-m f3-l lh-copy svelte-1iefovm"><p class="fw3 pv2 svelte-1iefovm">\n\t\t\t\t\t\t\tI started my career working primarily on <span class="bg-highlight svelte-1iefovm">native apps</span> for Android, iOS, and\n\t\t\t\t\t\t\tWindows Phone but have focused on <span class="highlight svelte-1iefovm">full-stack javascript</span> for the last two years.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="fw3 pv2 svelte-1iefovm">\n\t\t\t\t\t\t\tOn the backend it\'s mainly been Node.js hosted on <span class="bg-highlight svelte-1iefovm">AWS</span> for any production apps.\n\t\t\t\t\t\t\tThe frontend is where it really gets fun with projects in <span class="highlight svelte-1iefovm">Angular</span> and <span class="highlight svelte-1iefovm">React</span>,\n\t\t\t\t\t\t\tand most recently <span class="highlight svelte-1iefovm">Svelte and Sapper</span> (which powers this site).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="fw3 pv2 svelte-1iefovm">\n\t\t\t\t\t\t\tMore of my energy is focused into <span class="bg-highlight svelte-1iefovm">open-source</span> projects these days, staying close\n\t\t\t\t\t\t\tto the community on <span class="highlight svelte-1iefovm">Gitter</span> and starting a blog that will be released shortly!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="fw3 pv2 svelte-1iefovm">\n\t\t\t\t\t\t\tI build this site heavily influenced by <span class="bg-highlight svelte-1iefovm">Dinesh Pandiyan</span>\'s personal site - what\n\t\t\t\t\t\t\tbetter way to get a solid comparison of React vs. Svelte than by recreating a real-world project! Take a look at <a href="https://github.com/flexdinesh/flexdinesh.github.io" target="_blank" rel="noopener noreferrer" class="svelte-1iefovm">Dinesh\'s\n\t\t\t\t\t\t\t\toriginal project</a> and the Svelte equivalent <a href="https://github.com/tonyfsullivan/tonyfsullivan.github.io" target="_blank" rel="noopener noreferrer" class="svelte-1iefovm">here</a> and let me know what you think of the Svelte-ified code!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="primary f2 fw3 tc pv4 svelte-1iefovm">\n\t\t\t\t\t\t\t\\ (•◡•) /\n\t\t\t\t\t\t</p></div></div>',n.id="about",n.className="bg-primary pt5 pb2 ph4 ph5-ns min-vh-100 flex flex-column flex-auto justify-center svelte-1iefovm"},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}class Me extends j{constructor(e){super(),A(this,e,null,_e,i,[])}}function Te(e){var t,n,r=new Se({}),s=new Me({});return{c(){r.$$.fragment.c(),t=v(),s.$$.fragment.c()},m(e,o){z(r,e,o),d(e,t,o),z(s,e,o),n=!0},i(e){n||(r.$$.fragment.i(e),s.$$.fragment.i(e),n=!0)},o(e){r.$$.fragment.o(e),s.$$.fragment.o(e),n=!1},d(e){r.$destroy(e),e&&f(t),s.$destroy(e)}}}function Ne(e){var t,n=new ue({props:{$$slots:{default:[Te]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,r){z(n,e,r),t=!0},p(e,t){var r={};e.$$scope&&(r.$$scope={changed:e,ctx:t}),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}return new class extends j{constructor(e){super(),A(this,e,null,Ne,i,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map