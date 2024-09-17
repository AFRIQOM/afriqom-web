import{j as jsxRuntimeExports,I as IoMapOutline,M as MdOutlineDashboard,r as reactExports,c as commonjsGlobal,u as useAuth,a as useNavigate,L as Loading,h as hasPermission,b as Link,A as AppRoutes,d as MdDashboardCustomize}from"./index-59f2354e.js";import{P as PageContainer}from"./container-03e214f9.js";import{B as Button}from"./button-d04776d9.js";import{c as countryList,g as getCountryLabel}from"./utils-4a35f25f.js";import{T as Tag}from"./index-0b338665.js";import{u as useOrganizationHandler}from"./useOrganizationHandler-a9522fa4.js";import{I as Input}from"./index-dc7f8182.js";import{M as Modal}from"./index-394ef855.js";import"./useGetSubscriptionsView-43e8743f.js";import"./CloseCircleFilled-f69f152a.js";import"./InfoCircleFilled-23b8bc08.js";import"./PurePanel-e5ac0afe.js";function ToggleButtons({selected:C,setSelected:E}){return jsxRuntimeExports.jsxs("div",{className:"bg-surface-default flex justify-between gap-4 p-1 border",children:[jsxRuntimeExports.jsx(Button,{className:`flex items-center justify-center border-none  
           ${C===0?"bg-primary-default text-primary-contrast":""}`,onClick:()=>E(0),children:jsxRuntimeExports.jsx(IoMapOutline,{size:12})}),jsxRuntimeExports.jsx(Button,{className:`flex items-center justify-center border-none 
            ${C===1?"bg-primary-default text-primary-contrast":""}`,onClick:()=>E(1),children:jsxRuntimeExports.jsx(MdOutlineDashboard,{size:12})})]})}function DashboardCard({dashboardData:C,onClick:E}){var K;const F=reactExports.useMemo(()=>countryList().getData(),[]),N=reactExports.useMemo(()=>{const Ae=F.find(le=>le.value===C.country);return Ae?Ae.label:"Unknown Country"},[C.country,F]),ue=()=>{if(C.status=="pending")return jsxRuntimeExports.jsx(Tag,{color:"#c8bb8f",children:"Pending"});if(!C.license)return jsxRuntimeExports.jsx(Tag,{children:"Subscribe"});if(C.newly_launched.toLocaleLowerCase()=="yes")return jsxRuntimeExports.jsx(Tag,{color:"#F4BF2A",children:"New"})};return jsxRuntimeExports.jsxs("div",{onClick:E,className:`relative flex  max-w-md flex-col justify-center  border p-2 shadow-sm rounded-sm
          transition-transform  duration-500 hover:scale-110 hover:opacity-75 ${C.license&&C.status!=="pending"?"bg-surface-default":"bg-surface-tertiary"}
         `,children:[jsxRuntimeExports.jsx("div",{className:"absolute right-1 top-1 ",children:ue()}),jsxRuntimeExports.jsxs("div",{className:"min-h-24 m-2  flex items-start gap-4 ",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center ",children:[jsxRuntimeExports.jsx("div",{className:"w-20 h-20",children:jsxRuntimeExports.jsx("img",{src:`/assets/${C.country.toLowerCase()}.png`,alt:C.country.toLowerCase(),className:"rounded-full h-full w-full bg-cover"})}),jsxRuntimeExports.jsx("span",{className:"text-content-secondary text-sm",children:C.license})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-start w-40",children:[jsxRuntimeExports.jsx("span",{className:" text-base text-content-default font-bold",children:N}),C.expiry_date&&jsxRuntimeExports.jsxs("span",{className:"text-xs text-content-default  font-medium ",children:["Expire on ",C.expiry_date]}),jsxRuntimeExports.jsx("div",{className:"flex flex-wrap gap-0.5 mt-2 ",children:(K=C==null?void 0:C.tags)==null?void 0:K.split(",").map((Ae,le)=>jsxRuntimeExports.jsx("div",{className:"p-1 text-xs bg-surface-secondary text-content-default rounded",style:{display:"inline-block",marginRight:"0.5rem"},children:Ae.trim()},le))})]})]}),C.last_updated&&jsxRuntimeExports.jsxs("div",{className:"text-xs text-content-tertiary flex justify-end text-end mt-auto",children:["Last updated on ",C.last_updated]})]})}var dist={exports:{}},jquery={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,function(C){(function(E,F){C.exports=E.document?F(E,!0):function(N){if(!N.document)throw new Error("jQuery requires a window with a document");return F(N)}})(typeof window<"u"?window:commonjsGlobal,function(E,F){var N=[],ue=Object.getPrototypeOf,K=N.slice,Ae=N.flat?function(e){return N.flat.call(e)}:function(e){return N.concat.apply([],e)},le=N.push,re=N.indexOf,Ie={},Qe=Ie.toString,ve=Ie.hasOwnProperty,Je=ve.toString,G=Je.call(Object),L={},I=function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"},Te=function(n){return n!=null&&n===n.window},B=E.document,Dt={type:!0,src:!0,nonce:!0,noModule:!0};function Kn(e,n,t){t=t||B;var l,i,a=t.createElement("script");if(a.text=e,n)for(l in Dt)i=n[l]||n.getAttribute&&n.getAttribute(l),i&&a.setAttribute(l,i);t.head.appendChild(a).parentNode.removeChild(a)}function Oe(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?Ie[Qe.call(e)]||"object":typeof e}var Hn="3.7.1",Bt=/HTML$/i,r=function(e,n){return new r.fn.init(e,n)};r.fn=r.prototype={jquery:Hn,constructor:r,length:0,toArray:function(){return K.call(this)},get:function(e){return e==null?K.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var n=r.merge(this.constructor(),e);return n.prevObject=this,n},each:function(e){return r.each(this,e)},map:function(e){return this.pushStack(r.map(this,function(n,t){return e.call(n,t,n)}))},slice:function(){return this.pushStack(K.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(r.grep(this,function(e,n){return(n+1)%2}))},odd:function(){return this.pushStack(r.grep(this,function(e,n){return n%2}))},eq:function(e){var n=this.length,t=+e+(e<0?n:0);return this.pushStack(t>=0&&t<n?[this[t]]:[])},end:function(){return this.prevObject||this.constructor()},push:le,sort:N.sort,splice:N.splice},r.extend=r.fn.extend=function(){var e,n,t,l,i,a,s=arguments[0]||{},u=1,c=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[u]||{},u++),typeof s!="object"&&!I(s)&&(s={}),u===c&&(s=this,u--);u<c;u++)if((e=arguments[u])!=null)for(n in e)l=e[n],!(n==="__proto__"||s===l)&&(d&&l&&(r.isPlainObject(l)||(i=Array.isArray(l)))?(t=s[n],i&&!Array.isArray(t)?a=[]:!i&&!r.isPlainObject(t)?a={}:a=t,i=!1,s[n]=r.extend(d,a,l)):l!==void 0&&(s[n]=l));return s},r.extend({expando:"jQuery"+(Hn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var n,t;return!e||Qe.call(e)!=="[object Object]"?!1:(n=ue(e),n?(t=ve.call(n,"constructor")&&n.constructor,typeof t=="function"&&Je.call(t)===G):!0)},isEmptyObject:function(e){var n;for(n in e)return!1;return!0},globalEval:function(e,n,t){Kn(e,{nonce:n&&n.nonce},t)},each:function(e,n){var t,l=0;if(An(e))for(t=e.length;l<t&&n.call(e[l],l,e[l])!==!1;l++);else for(l in e)if(n.call(e[l],l,e[l])===!1)break;return e},text:function(e){var n,t="",l=0,i=e.nodeType;if(!i)for(;n=e[l++];)t+=r.text(n);return i===1||i===11?e.textContent:i===9?e.documentElement.textContent:i===3||i===4?e.nodeValue:t},makeArray:function(e,n){var t=n||[];return e!=null&&(An(Object(e))?r.merge(t,typeof e=="string"?[e]:e):le.call(t,e)),t},inArray:function(e,n,t){return n==null?-1:re.call(n,e,t)},isXMLDoc:function(e){var n=e&&e.namespaceURI,t=e&&(e.ownerDocument||e).documentElement;return!Bt.test(n||t&&t.nodeName||"HTML")},merge:function(e,n){for(var t=+n.length,l=0,i=e.length;l<t;l++)e[i++]=n[l];return e.length=i,e},grep:function(e,n,t){for(var l,i=[],a=0,s=e.length,u=!t;a<s;a++)l=!n(e[a],a),l!==u&&i.push(e[a]);return i},map:function(e,n,t){var l,i,a=0,s=[];if(An(e))for(l=e.length;a<l;a++)i=n(e[a],a,t),i!=null&&s.push(i);else for(a in e)i=n(e[a],a,t),i!=null&&s.push(i);return Ae(s)},guid:1,support:L}),typeof Symbol=="function"&&(r.fn[Symbol.iterator]=N[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,n){Ie["[object "+n+"]"]=n.toLowerCase()});function An(e){var n=!!e&&"length"in e&&e.length,t=Oe(e);return I(e)||Te(e)?!1:t==="array"||n===0||typeof n=="number"&&n>0&&n-1 in e}function Q(e,n){return e.nodeName&&e.nodeName.toLowerCase()===n.toLowerCase()}var It=N.pop,Tt=N.sort,Ot=N.splice,V="[\\x20\\t\\r\\n\\f]",Ge=new RegExp("^"+V+"+|((?:^|[^\\\\])(?:\\\\.)*)"+V+"+$","g");r.contains=function(e,n){var t=n&&n.parentNode;return e===t||!!(t&&t.nodeType===1&&(e.contains?e.contains(t):e.compareDocumentPosition&&e.compareDocumentPosition(t)&16))};var Rt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Pt(e,n){return n?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}r.escapeSelector=function(e){return(e+"").replace(Rt,Pt)};var ye=B,vn=le;(function(){var e,n,t,l,i,a=vn,s,u,c,d,_,A=r.expando,f=0,v=0,j=fn(),q=fn(),T=fn(),Z=fn(),Y=function(o,p){return o===p&&(i=!0),0},he="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",fe="(?:\\\\[\\da-fA-F]{1,6}"+V+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",P="\\["+V+"*("+fe+")(?:"+V+"*([*^$|!~]?=)"+V+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+fe+"))|)"+V+"*\\]",De=":("+fe+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+P+")*)|.*)\\)|)",U=new RegExp(V+"+","g"),J=new RegExp("^"+V+"*,"+V+"*"),ln=new RegExp("^"+V+"*([>+~]|"+V+")"+V+"*"),Rn=new RegExp(V+"|>"),me=new RegExp(De),rn=new RegExp("^"+fe+"$"),_e={ID:new RegExp("^#("+fe+")"),CLASS:new RegExp("^\\.("+fe+")"),TAG:new RegExp("^("+fe+"|[*])"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+De),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+V+"*(even|odd|(([+-]|)(\\d*)n|)"+V+"*(?:([+-]|)"+V+"*(\\d+)|))"+V+"*\\)|)","i"),bool:new RegExp("^(?:"+he+")$","i"),needsContext:new RegExp("^"+V+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+V+"*((?:-\\d)?\\d*)"+V+"*\\)|)(?=[^-]|$)","i")},we=/^(?:input|select|textarea|button)$/i,ke=/^h\d$/i,ae=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Pn=/[+~]/,Ee=new RegExp("\\\\[\\da-fA-F]{1,6}"+V+"?|\\\\([^\\r\\n\\f])","g"),Me=function(o,p){var h="0x"+o.slice(1)-65536;return p||(h<0?String.fromCharCode(h+65536):String.fromCharCode(h>>10|55296,h&1023|56320))},Bl=function(){Ce()},Il=_n(function(o){return o.disabled===!0&&Q(o,"fieldset")},{dir:"parentNode",next:"legend"});function Tl(){try{return s.activeElement}catch{}}try{a.apply(N=K.call(ye.childNodes),ye.childNodes),N[ye.childNodes.length].nodeType}catch{a={apply:function(p,h){vn.apply(p,K.call(h))},call:function(p){vn.apply(p,K.call(arguments,1))}}}function W(o,p,h,m){var g,y,b,M,x,O,S,D=p&&p.ownerDocument,R=p?p.nodeType:9;if(h=h||[],typeof o!="string"||!o||R!==1&&R!==9&&R!==11)return h;if(!m&&(Ce(p),p=p||s,c)){if(R!==11&&(x=ae.exec(o)))if(g=x[1]){if(R===9)if(b=p.getElementById(g)){if(b.id===g)return a.call(h,b),h}else return h;else if(D&&(b=D.getElementById(g))&&W.contains(p,b)&&b.id===g)return a.call(h,b),h}else{if(x[2])return a.apply(h,p.getElementsByTagName(o)),h;if((g=x[3])&&p.getElementsByClassName)return a.apply(h,p.getElementsByClassName(g)),h}if(!Z[o+" "]&&(!d||!d.test(o))){if(S=o,D=p,R===1&&(Rn.test(o)||ln.test(o))){for(D=Pn.test(o)&&qn(p.parentNode)||p,(D!=p||!L.scope)&&((M=p.getAttribute("id"))?M=r.escapeSelector(M):p.setAttribute("id",M=A)),O=an(o),y=O.length;y--;)O[y]=(M?"#"+M:":scope")+" "+mn(O[y]);S=O.join(",")}try{return a.apply(h,D.querySelectorAll(S)),h}catch{Z(o,!0)}finally{M===A&&p.removeAttribute("id")}}}return Lt(o.replace(Ge,"$1"),p,h,m)}function fn(){var o=[];function p(h,m){return o.push(h+" ")>n.cacheLength&&delete p[o.shift()],p[h+" "]=m}return p}function ce(o){return o[A]=!0,o}function He(o){var p=s.createElement("fieldset");try{return!!o(p)}catch{return!1}finally{p.parentNode&&p.parentNode.removeChild(p),p=null}}function Ol(o){return function(p){return Q(p,"input")&&p.type===o}}function Rl(o){return function(p){return(Q(p,"input")||Q(p,"button"))&&p.type===o}}function St(o){return function(p){return"form"in p?p.parentNode&&p.disabled===!1?"label"in p?"label"in p.parentNode?p.parentNode.disabled===o:p.disabled===o:p.isDisabled===o||p.isDisabled!==!o&&Il(p)===o:p.disabled===o:"label"in p?p.disabled===o:!1}}function Be(o){return ce(function(p){return p=+p,ce(function(h,m){for(var g,y=o([],h.length,p),b=y.length;b--;)h[g=y[b]]&&(h[g]=!(m[g]=h[g]))})})}function qn(o){return o&&typeof o.getElementsByTagName<"u"&&o}function Ce(o){var p,h=o?o.ownerDocument||o:ye;return h==s||h.nodeType!==9||!h.documentElement||(s=h,u=s.documentElement,c=!r.isXMLDoc(s),_=u.matches||u.webkitMatchesSelector||u.msMatchesSelector,u.msMatchesSelector&&ye!=s&&(p=s.defaultView)&&p.top!==p&&p.addEventListener("unload",Bl),L.getById=He(function(m){return u.appendChild(m).id=r.expando,!s.getElementsByName||!s.getElementsByName(r.expando).length}),L.disconnectedMatch=He(function(m){return _.call(m,"*")}),L.scope=He(function(){return s.querySelectorAll(":scope")}),L.cssHas=He(function(){try{return s.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),L.getById?(n.filter.ID=function(m){var g=m.replace(Ee,Me);return function(y){return y.getAttribute("id")===g}},n.find.ID=function(m,g){if(typeof g.getElementById<"u"&&c){var y=g.getElementById(m);return y?[y]:[]}}):(n.filter.ID=function(m){var g=m.replace(Ee,Me);return function(y){var b=typeof y.getAttributeNode<"u"&&y.getAttributeNode("id");return b&&b.value===g}},n.find.ID=function(m,g){if(typeof g.getElementById<"u"&&c){var y,b,M,x=g.getElementById(m);if(x){if(y=x.getAttributeNode("id"),y&&y.value===m)return[x];for(M=g.getElementsByName(m),b=0;x=M[b++];)if(y=x.getAttributeNode("id"),y&&y.value===m)return[x]}return[]}}),n.find.TAG=function(m,g){return typeof g.getElementsByTagName<"u"?g.getElementsByTagName(m):g.querySelectorAll(m)},n.find.CLASS=function(m,g){if(typeof g.getElementsByClassName<"u"&&c)return g.getElementsByClassName(m)},d=[],He(function(m){var g;u.appendChild(m).innerHTML="<a id='"+A+"' href='' disabled='disabled'></a><select id='"+A+"-\r\\' disabled='disabled'><option selected=''></option></select>",m.querySelectorAll("[selected]").length||d.push("\\["+V+"*(?:value|"+he+")"),m.querySelectorAll("[id~="+A+"-]").length||d.push("~="),m.querySelectorAll("a#"+A+"+*").length||d.push(".#.+[+~]"),m.querySelectorAll(":checked").length||d.push(":checked"),g=s.createElement("input"),g.setAttribute("type","hidden"),m.appendChild(g).setAttribute("name","D"),u.appendChild(m).disabled=!0,m.querySelectorAll(":disabled").length!==2&&d.push(":enabled",":disabled"),g=s.createElement("input"),g.setAttribute("name",""),m.appendChild(g),m.querySelectorAll("[name='']").length||d.push("\\["+V+"*name"+V+"*="+V+`*(?:''|"")`)}),L.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),Y=function(m,g){if(m===g)return i=!0,0;var y=!m.compareDocumentPosition-!g.compareDocumentPosition;return y||(y=(m.ownerDocument||m)==(g.ownerDocument||g)?m.compareDocumentPosition(g):1,y&1||!L.sortDetached&&g.compareDocumentPosition(m)===y?m===s||m.ownerDocument==ye&&W.contains(ye,m)?-1:g===s||g.ownerDocument==ye&&W.contains(ye,g)?1:l?re.call(l,m)-re.call(l,g):0:y&4?-1:1)}),s}W.matches=function(o,p){return W(o,null,null,p)},W.matchesSelector=function(o,p){if(Ce(o),c&&!Z[p+" "]&&(!d||!d.test(p)))try{var h=_.call(o,p);if(h||L.disconnectedMatch||o.document&&o.document.nodeType!==11)return h}catch{Z(p,!0)}return W(p,s,null,[o]).length>0},W.contains=function(o,p){return(o.ownerDocument||o)!=s&&Ce(o),r.contains(o,p)},W.attr=function(o,p){(o.ownerDocument||o)!=s&&Ce(o);var h=n.attrHandle[p.toLowerCase()],m=h&&ve.call(n.attrHandle,p.toLowerCase())?h(o,p,!c):void 0;return m!==void 0?m:o.getAttribute(p)},W.error=function(o){throw new Error("Syntax error, unrecognized expression: "+o)},r.uniqueSort=function(o){var p,h=[],m=0,g=0;if(i=!L.sortStable,l=!L.sortStable&&K.call(o,0),Tt.call(o,Y),i){for(;p=o[g++];)p===o[g]&&(m=h.push(g));for(;m--;)Ot.call(o,h[m],1)}return l=null,o},r.fn.uniqueSort=function(){return this.pushStack(r.uniqueSort(K.apply(this)))},n=r.expr={cacheLength:50,createPseudo:ce,match:_e,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(o){return o[1]=o[1].replace(Ee,Me),o[3]=(o[3]||o[4]||o[5]||"").replace(Ee,Me),o[2]==="~="&&(o[3]=" "+o[3]+" "),o.slice(0,4)},CHILD:function(o){return o[1]=o[1].toLowerCase(),o[1].slice(0,3)==="nth"?(o[3]||W.error(o[0]),o[4]=+(o[4]?o[5]+(o[6]||1):2*(o[3]==="even"||o[3]==="odd")),o[5]=+(o[7]+o[8]||o[3]==="odd")):o[3]&&W.error(o[0]),o},PSEUDO:function(o){var p,h=!o[6]&&o[2];return _e.CHILD.test(o[0])?null:(o[3]?o[2]=o[4]||o[5]||"":h&&me.test(h)&&(p=an(h,!0))&&(p=h.indexOf(")",h.length-p)-h.length)&&(o[0]=o[0].slice(0,p),o[2]=h.slice(0,p)),o.slice(0,3))}},filter:{TAG:function(o){var p=o.replace(Ee,Me).toLowerCase();return o==="*"?function(){return!0}:function(h){return Q(h,p)}},CLASS:function(o){var p=j[o+" "];return p||(p=new RegExp("(^|"+V+")"+o+"("+V+"|$)"))&&j(o,function(h){return p.test(typeof h.className=="string"&&h.className||typeof h.getAttribute<"u"&&h.getAttribute("class")||"")})},ATTR:function(o,p,h){return function(m){var g=W.attr(m,o);return g==null?p==="!=":p?(g+="",p==="="?g===h:p==="!="?g!==h:p==="^="?h&&g.indexOf(h)===0:p==="*="?h&&g.indexOf(h)>-1:p==="$="?h&&g.slice(-h.length)===h:p==="~="?(" "+g.replace(U," ")+" ").indexOf(h)>-1:p==="|="?g===h||g.slice(0,h.length+1)===h+"-":!1):!0}},CHILD:function(o,p,h,m,g){var y=o.slice(0,3)!=="nth",b=o.slice(-4)!=="last",M=p==="of-type";return m===1&&g===0?function(x){return!!x.parentNode}:function(x,O,S){var D,R,k,H,te,z=y!==b?"nextSibling":"previousSibling",se=x.parentNode,ge=M&&x.nodeName.toLowerCase(),Fe=!S&&!M,X=!1;if(se){if(y){for(;z;){for(k=x;k=k[z];)if(M?Q(k,ge):k.nodeType===1)return!1;te=z=o==="only"&&!te&&"nextSibling"}return!0}if(te=[b?se.firstChild:se.lastChild],b&&Fe){for(R=se[A]||(se[A]={}),D=R[o]||[],H=D[0]===f&&D[1],X=H&&D[2],k=H&&se.childNodes[H];k=++H&&k&&k[z]||(X=H=0)||te.pop();)if(k.nodeType===1&&++X&&k===x){R[o]=[f,H,X];break}}else if(Fe&&(R=x[A]||(x[A]={}),D=R[o]||[],H=D[0]===f&&D[1],X=H),X===!1)for(;(k=++H&&k&&k[z]||(X=H=0)||te.pop())&&!((M?Q(k,ge):k.nodeType===1)&&++X&&(Fe&&(R=k[A]||(k[A]={}),R[o]=[f,X]),k===x)););return X-=g,X===m||X%m===0&&X/m>=0}}},PSEUDO:function(o,p){var h,m=n.pseudos[o]||n.setFilters[o.toLowerCase()]||W.error("unsupported pseudo: "+o);return m[A]?m(p):m.length>1?(h=[o,o,"",p],n.setFilters.hasOwnProperty(o.toLowerCase())?ce(function(g,y){for(var b,M=m(g,p),x=M.length;x--;)b=re.call(g,M[x]),g[b]=!(y[b]=M[x])}):function(g){return m(g,0,h)}):m}},pseudos:{not:ce(function(o){var p=[],h=[],m=Vn(o.replace(Ge,"$1"));return m[A]?ce(function(g,y,b,M){for(var x,O=m(g,null,M,[]),S=g.length;S--;)(x=O[S])&&(g[S]=!(y[S]=x))}):function(g,y,b){return p[0]=g,m(p,null,b,h),p[0]=null,!h.pop()}}),has:ce(function(o){return function(p){return W(o,p).length>0}}),contains:ce(function(o){return o=o.replace(Ee,Me),function(p){return(p.textContent||r.text(p)).indexOf(o)>-1}}),lang:ce(function(o){return rn.test(o||"")||W.error("unsupported lang: "+o),o=o.replace(Ee,Me).toLowerCase(),function(p){var h;do if(h=c?p.lang:p.getAttribute("xml:lang")||p.getAttribute("lang"))return h=h.toLowerCase(),h===o||h.indexOf(o+"-")===0;while((p=p.parentNode)&&p.nodeType===1);return!1}}),target:function(o){var p=E.location&&E.location.hash;return p&&p.slice(1)===o.id},root:function(o){return o===u},focus:function(o){return o===Tl()&&s.hasFocus()&&!!(o.type||o.href||~o.tabIndex)},enabled:St(!1),disabled:St(!0),checked:function(o){return Q(o,"input")&&!!o.checked||Q(o,"option")&&!!o.selected},selected:function(o){return o.parentNode&&o.parentNode.selectedIndex,o.selected===!0},empty:function(o){for(o=o.firstChild;o;o=o.nextSibling)if(o.nodeType<6)return!1;return!0},parent:function(o){return!n.pseudos.empty(o)},header:function(o){return ke.test(o.nodeName)},input:function(o){return we.test(o.nodeName)},button:function(o){return Q(o,"input")&&o.type==="button"||Q(o,"button")},text:function(o){var p;return Q(o,"input")&&o.type==="text"&&((p=o.getAttribute("type"))==null||p.toLowerCase()==="text")},first:Be(function(){return[0]}),last:Be(function(o,p){return[p-1]}),eq:Be(function(o,p,h){return[h<0?h+p:h]}),even:Be(function(o,p){for(var h=0;h<p;h+=2)o.push(h);return o}),odd:Be(function(o,p){for(var h=1;h<p;h+=2)o.push(h);return o}),lt:Be(function(o,p,h){var m;for(h<0?m=h+p:h>p?m=p:m=h;--m>=0;)o.push(m);return o}),gt:Be(function(o,p,h){for(var m=h<0?h+p:h;++m<p;)o.push(m);return o})}},n.pseudos.nth=n.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[e]=Ol(e);for(e in{submit:!0,reset:!0})n.pseudos[e]=Rl(e);function jt(){}jt.prototype=n.filters=n.pseudos,n.setFilters=new jt;function an(o,p){var h,m,g,y,b,M,x,O=q[o+" "];if(O)return p?0:O.slice(0);for(b=o,M=[],x=n.preFilter;b;){(!h||(m=J.exec(b)))&&(m&&(b=b.slice(m[0].length)||b),M.push(g=[])),h=!1,(m=ln.exec(b))&&(h=m.shift(),g.push({value:h,type:m[0].replace(Ge," ")}),b=b.slice(h.length));for(y in n.filter)(m=_e[y].exec(b))&&(!x[y]||(m=x[y](m)))&&(h=m.shift(),g.push({value:h,type:y,matches:m}),b=b.slice(h.length));if(!h)break}return p?b.length:b?W.error(o):q(o,M).slice(0)}function mn(o){for(var p=0,h=o.length,m="";p<h;p++)m+=o[p].value;return m}function _n(o,p,h){var m=p.dir,g=p.next,y=g||m,b=h&&y==="parentNode",M=v++;return p.first?function(x,O,S){for(;x=x[m];)if(x.nodeType===1||b)return o(x,O,S);return!1}:function(x,O,S){var D,R,k=[f,M];if(S){for(;x=x[m];)if((x.nodeType===1||b)&&o(x,O,S))return!0}else for(;x=x[m];)if(x.nodeType===1||b)if(R=x[A]||(x[A]={}),g&&Q(x,g))x=x[m]||x;else{if((D=R[y])&&D[0]===f&&D[1]===M)return k[2]=D[2];if(R[y]=k,k[2]=o(x,O,S))return!0}return!1}}function Un(o){return o.length>1?function(p,h,m){for(var g=o.length;g--;)if(!o[g](p,h,m))return!1;return!0}:o[0]}function Pl(o,p,h){for(var m=0,g=p.length;m<g;m++)W(o,p[m],h);return h}function gn(o,p,h,m,g){for(var y,b=[],M=0,x=o.length,O=p!=null;M<x;M++)(y=o[M])&&(!h||h(y,m,g))&&(b.push(y),O&&p.push(M));return b}function Nn(o,p,h,m,g,y){return m&&!m[A]&&(m=Nn(m)),g&&!g[A]&&(g=Nn(g,y)),ce(function(b,M,x,O){var S,D,R,k,H=[],te=[],z=M.length,se=b||Pl(p||"*",x.nodeType?[x]:x,[]),ge=o&&(b||!p)?gn(se,H,o,x,O):se;if(h?(k=g||(b?o:z||m)?[]:M,h(ge,k,x,O)):k=ge,m)for(S=gn(k,te),m(S,[],x,O),D=S.length;D--;)(R=S[D])&&(k[te[D]]=!(ge[te[D]]=R));if(b){if(g||o){if(g){for(S=[],D=k.length;D--;)(R=k[D])&&S.push(ge[D]=R);g(null,k=[],S,O)}for(D=k.length;D--;)(R=k[D])&&(S=g?re.call(b,R):H[D])>-1&&(b[S]=!(M[S]=R))}}else k=gn(k===M?k.splice(z,k.length):k),g?g(null,M,k,O):a.apply(M,k)})}function Wn(o){for(var p,h,m,g=o.length,y=n.relative[o[0].type],b=y||n.relative[" "],M=y?1:0,x=_n(function(D){return D===p},b,!0),O=_n(function(D){return re.call(p,D)>-1},b,!0),S=[function(D,R,k){var H=!y&&(k||R!=t)||((p=R).nodeType?x(D,R,k):O(D,R,k));return p=null,H}];M<g;M++)if(h=n.relative[o[M].type])S=[_n(Un(S),h)];else{if(h=n.filter[o[M].type].apply(null,o[M].matches),h[A]){for(m=++M;m<g&&!n.relative[o[m].type];m++);return Nn(M>1&&Un(S),M>1&&mn(o.slice(0,M-1).concat({value:o[M-2].type===" "?"*":""})).replace(Ge,"$1"),h,M<m&&Wn(o.slice(M,m)),m<g&&Wn(o=o.slice(m)),m<g&&mn(o))}S.push(h)}return Un(S)}function ql(o,p){var h=p.length>0,m=o.length>0,g=function(y,b,M,x,O){var S,D,R,k=0,H="0",te=y&&[],z=[],se=t,ge=y||m&&n.find.TAG("*",O),Fe=f+=se==null?1:Math.random()||.1,X=ge.length;for(O&&(t=b==s||b||O);H!==X&&(S=ge[H])!=null;H++){if(m&&S){for(D=0,!b&&S.ownerDocument!=s&&(Ce(S),M=!c);R=o[D++];)if(R(S,b||s,M)){a.call(x,S);break}O&&(f=Fe)}h&&((S=!R&&S)&&k--,y&&te.push(S))}if(k+=H,h&&H!==k){for(D=0;R=p[D++];)R(te,z,b,M);if(y){if(k>0)for(;H--;)te[H]||z[H]||(z[H]=It.call(x));z=gn(z)}a.apply(x,z),O&&!y&&z.length>0&&k+p.length>1&&r.uniqueSort(x)}return O&&(f=Fe,t=se),te};return h?ce(g):g}function Vn(o,p){var h,m=[],g=[],y=T[o+" "];if(!y){for(p||(p=an(o)),h=p.length;h--;)y=Wn(p[h]),y[A]?m.push(y):g.push(y);y=T(o,ql(g,m)),y.selector=o}return y}function Lt(o,p,h,m){var g,y,b,M,x,O=typeof o=="function"&&o,S=!m&&an(o=O.selector||o);if(h=h||[],S.length===1){if(y=S[0]=S[0].slice(0),y.length>2&&(b=y[0]).type==="ID"&&p.nodeType===9&&c&&n.relative[y[1].type]){if(p=(n.find.ID(b.matches[0].replace(Ee,Me),p)||[])[0],p)O&&(p=p.parentNode);else return h;o=o.slice(y.shift().value.length)}for(g=_e.needsContext.test(o)?0:y.length;g--&&(b=y[g],!n.relative[M=b.type]);)if((x=n.find[M])&&(m=x(b.matches[0].replace(Ee,Me),Pn.test(y[0].type)&&qn(p.parentNode)||p))){if(y.splice(g,1),o=m.length&&mn(y),!o)return a.apply(h,m),h;break}}return(O||Vn(o,S))(m,p,!c,h,!p||Pn.test(o)&&qn(p.parentNode)||p),h}L.sortStable=A.split("").sort(Y).join("")===A,Ce(),L.sortDetached=He(function(o){return o.compareDocumentPosition(s.createElement("fieldset"))&1}),r.find=W,r.expr[":"]=r.expr.pseudos,r.unique=r.uniqueSort,W.compile=Vn,W.select=Lt,W.setDocument=Ce,W.tokenize=an,W.escape=r.escapeSelector,W.getText=r.text,W.isXML=r.isXMLDoc,W.selectors=r.expr,W.support=r.support,W.uniqueSort=r.uniqueSort})();var Re=function(e,n,t){for(var l=[],i=t!==void 0;(e=e[n])&&e.nodeType!==9;)if(e.nodeType===1){if(i&&r(e).is(t))break;l.push(e)}return l},Fn=function(e,n){for(var t=[];e;e=e.nextSibling)e.nodeType===1&&e!==n&&t.push(e);return t},Qn=r.expr.match.needsContext,Jn=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function yn(e,n,t){return I(n)?r.grep(e,function(l,i){return!!n.call(l,i,l)!==t}):n.nodeType?r.grep(e,function(l){return l===n!==t}):typeof n!="string"?r.grep(e,function(l){return re.call(n,l)>-1!==t}):r.filter(n,e,t)}r.filter=function(e,n,t){var l=n[0];return t&&(e=":not("+e+")"),n.length===1&&l.nodeType===1?r.find.matchesSelector(l,e)?[l]:[]:r.find.matches(e,r.grep(n,function(i){return i.nodeType===1}))},r.fn.extend({find:function(e){var n,t,l=this.length,i=this;if(typeof e!="string")return this.pushStack(r(e).filter(function(){for(n=0;n<l;n++)if(r.contains(i[n],this))return!0}));for(t=this.pushStack([]),n=0;n<l;n++)r.find(e,i[n],t);return l>1?r.uniqueSort(t):t},filter:function(e){return this.pushStack(yn(this,e||[],!1))},not:function(e){return this.pushStack(yn(this,e||[],!0))},is:function(e){return!!yn(this,typeof e=="string"&&Qn.test(e)?r(e):e||[],!1).length}});var Gn,qt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ut=r.fn.init=function(e,n,t){var l,i;if(!e)return this;if(t=t||Gn,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?l=[null,e,null]:l=qt.exec(e),l&&(l[1]||!n))if(l[1]){if(n=n instanceof r?n[0]:n,r.merge(this,r.parseHTML(l[1],n&&n.nodeType?n.ownerDocument||n:B,!0)),Jn.test(l[1])&&r.isPlainObject(n))for(l in n)I(this[l])?this[l](n[l]):this.attr(l,n[l]);return this}else return i=B.getElementById(l[2]),i&&(this[0]=i,this.length=1),this;else return!n||n.jquery?(n||t).find(e):this.constructor(n).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(I(e))return t.ready!==void 0?t.ready(e):e(r)}return r.makeArray(e,this)};Ut.prototype=r.fn,Gn=r(B);var Nt=/^(?:parents|prev(?:Until|All))/,Wt={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(e){var n=r(e,this),t=n.length;return this.filter(function(){for(var l=0;l<t;l++)if(r.contains(this,n[l]))return!0})},closest:function(e,n){var t,l=0,i=this.length,a=[],s=typeof e!="string"&&r(e);if(!Qn.test(e)){for(;l<i;l++)for(t=this[l];t&&t!==n;t=t.parentNode)if(t.nodeType<11&&(s?s.index(t)>-1:t.nodeType===1&&r.find.matchesSelector(t,e))){a.push(t);break}}return this.pushStack(a.length>1?r.uniqueSort(a):a)},index:function(e){return e?typeof e=="string"?re.call(r(e),this[0]):re.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(e,n))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Yn(e,n){for(;(e=e[n])&&e.nodeType!==1;);return e}r.each({parent:function(e){var n=e.parentNode;return n&&n.nodeType!==11?n:null},parents:function(e){return Re(e,"parentNode")},parentsUntil:function(e,n,t){return Re(e,"parentNode",t)},next:function(e){return Yn(e,"nextSibling")},prev:function(e){return Yn(e,"previousSibling")},nextAll:function(e){return Re(e,"nextSibling")},prevAll:function(e){return Re(e,"previousSibling")},nextUntil:function(e,n,t){return Re(e,"nextSibling",t)},prevUntil:function(e,n,t){return Re(e,"previousSibling",t)},siblings:function(e){return Fn((e.parentNode||{}).firstChild,e)},children:function(e){return Fn(e.firstChild)},contents:function(e){return e.contentDocument!=null&&ue(e.contentDocument)?e.contentDocument:(Q(e,"template")&&(e=e.content||e),r.merge([],e.childNodes))}},function(e,n){r.fn[e]=function(t,l){var i=r.map(this,n,t);return e.slice(-5)!=="Until"&&(l=t),l&&typeof l=="string"&&(i=r.filter(l,i)),this.length>1&&(Wt[e]||r.uniqueSort(i),Nt.test(e)&&i.reverse()),this.pushStack(i)}});var pe=/[^\x20\t\r\n\f]+/g;function Vt(e){var n={};return r.each(e.match(pe)||[],function(t,l){n[l]=!0}),n}r.Callbacks=function(e){e=typeof e=="string"?Vt(e):r.extend({},e);var n,t,l,i,a=[],s=[],u=-1,c=function(){for(i=i||e.once,l=n=!0;s.length;u=-1)for(t=s.shift();++u<a.length;)a[u].apply(t[0],t[1])===!1&&e.stopOnFalse&&(u=a.length,t=!1);e.memory||(t=!1),n=!1,i&&(t?a=[]:a="")},d={add:function(){return a&&(t&&!n&&(u=a.length-1,s.push(t)),function _(A){r.each(A,function(f,v){I(v)?(!e.unique||!d.has(v))&&a.push(v):v&&v.length&&Oe(v)!=="string"&&_(v)})}(arguments),t&&!n&&c()),this},remove:function(){return r.each(arguments,function(_,A){for(var f;(f=r.inArray(A,a,f))>-1;)a.splice(f,1),f<=u&&u--}),this},has:function(_){return _?r.inArray(_,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return i=s=[],a=t="",this},disabled:function(){return!a},lock:function(){return i=s=[],!t&&!n&&(a=t=""),this},locked:function(){return!!i},fireWith:function(_,A){return i||(A=A||[],A=[_,A.slice?A.slice():A],s.push(A),n||c()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!l}};return d};function Pe(e){return e}function sn(e){throw e}function Zn(e,n,t,l){var i;try{e&&I(i=e.promise)?i.call(e).done(n).fail(t):e&&I(i=e.then)?i.call(e,n,t):n.apply(void 0,[e].slice(l))}catch(a){t.apply(void 0,[a])}}r.extend({Deferred:function(e){var n=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],t="pending",l={state:function(){return t},always:function(){return i.done(arguments).fail(arguments),this},catch:function(a){return l.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(s){r.each(n,function(u,c){var d=I(a[c[4]])&&a[c[4]];i[c[1]](function(){var _=d&&d.apply(this,arguments);_&&I(_.promise)?_.promise().progress(s.notify).done(s.resolve).fail(s.reject):s[c[0]+"With"](this,d?[_]:arguments)})}),a=null}).promise()},then:function(a,s,u){var c=0;function d(_,A,f,v){return function(){var j=this,q=arguments,T=function(){var Y,he;if(!(_<c)){if(Y=f.apply(j,q),Y===A.promise())throw new TypeError("Thenable self-resolution");he=Y&&(typeof Y=="object"||typeof Y=="function")&&Y.then,I(he)?v?he.call(Y,d(c,A,Pe,v),d(c,A,sn,v)):(c++,he.call(Y,d(c,A,Pe,v),d(c,A,sn,v),d(c,A,Pe,A.notifyWith))):(f!==Pe&&(j=void 0,q=[Y]),(v||A.resolveWith)(j,q))}},Z=v?T:function(){try{T()}catch(Y){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(Y,Z.error),_+1>=c&&(f!==sn&&(j=void 0,q=[Y]),A.rejectWith(j,q))}};_?Z():(r.Deferred.getErrorHook?Z.error=r.Deferred.getErrorHook():r.Deferred.getStackHook&&(Z.error=r.Deferred.getStackHook()),E.setTimeout(Z))}}return r.Deferred(function(_){n[0][3].add(d(0,_,I(u)?u:Pe,_.notifyWith)),n[1][3].add(d(0,_,I(a)?a:Pe)),n[2][3].add(d(0,_,I(s)?s:sn))}).promise()},promise:function(a){return a!=null?r.extend(a,l):l}},i={};return r.each(n,function(a,s){var u=s[2],c=s[5];l[s[1]]=u.add,c&&u.add(function(){t=c},n[3-a][2].disable,n[3-a][3].disable,n[0][2].lock,n[0][3].lock),u.add(s[3].fire),i[s[0]]=function(){return i[s[0]+"With"](this===i?void 0:this,arguments),this},i[s[0]+"With"]=u.fireWith}),l.promise(i),e&&e.call(i,i),i},when:function(e){var n=arguments.length,t=n,l=Array(t),i=K.call(arguments),a=r.Deferred(),s=function(u){return function(c){l[u]=this,i[u]=arguments.length>1?K.call(arguments):c,--n||a.resolveWith(l,i)}};if(n<=1&&(Zn(e,a.done(s(t)).resolve,a.reject,!n),a.state()==="pending"||I(i[t]&&i[t].then)))return a.then();for(;t--;)Zn(i[t],s(t),a.reject);return a.promise()}});var Kt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(e,n){E.console&&E.console.warn&&e&&Kt.test(e.name)&&E.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},r.readyException=function(e){E.setTimeout(function(){throw e})};var bn=r.Deferred();r.fn.ready=function(e){return bn.then(e).catch(function(n){r.readyException(n)}),this},r.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--r.readyWait:r.isReady)||(r.isReady=!0,!(e!==!0&&--r.readyWait>0)&&bn.resolveWith(B,[r]))}}),r.ready.then=bn.then;function on(){B.removeEventListener("DOMContentLoaded",on),E.removeEventListener("load",on),r.ready()}B.readyState==="complete"||B.readyState!=="loading"&&!B.documentElement.doScroll?E.setTimeout(r.ready):(B.addEventListener("DOMContentLoaded",on),E.addEventListener("load",on));var be=function(e,n,t,l,i,a,s){var u=0,c=e.length,d=t==null;if(Oe(t)==="object"){i=!0;for(u in t)be(e,n,u,t[u],!0,a,s)}else if(l!==void 0&&(i=!0,I(l)||(s=!0),d&&(s?(n.call(e,l),n=null):(d=n,n=function(_,A,f){return d.call(r(_),f)})),n))for(;u<c;u++)n(e[u],t,s?l:l.call(e[u],u,n(e[u],t)));return i?e:d?n.call(e):c?n(e[0],t):a},Ht=/^-ms-/,Ft=/-([a-z])/g;function Qt(e,n){return n.toUpperCase()}function de(e){return e.replace(Ht,"ms-").replace(Ft,Qt)}var Ye=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Ze(){this.expando=r.expando+Ze.uid++}Ze.uid=1,Ze.prototype={cache:function(e){var n=e[this.expando];return n||(n={},Ye(e)&&(e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,configurable:!0}))),n},set:function(e,n,t){var l,i=this.cache(e);if(typeof n=="string")i[de(n)]=t;else for(l in n)i[de(l)]=n[l];return i},get:function(e,n){return n===void 0?this.cache(e):e[this.expando]&&e[this.expando][de(n)]},access:function(e,n,t){return n===void 0||n&&typeof n=="string"&&t===void 0?this.get(e,n):(this.set(e,n,t),t!==void 0?t:n)},remove:function(e,n){var t,l=e[this.expando];if(l!==void 0){if(n!==void 0)for(Array.isArray(n)?n=n.map(de):(n=de(n),n=n in l?[n]:n.match(pe)||[]),t=n.length;t--;)delete l[n[t]];(n===void 0||r.isEmptyObject(l))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var n=e[this.expando];return n!==void 0&&!r.isEmptyObject(n)}};var w=new Ze,$=new Ze,Jt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Gt=/[A-Z]/g;function Yt(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Jt.test(e)?JSON.parse(e):e}function zn(e,n,t){var l;if(t===void 0&&e.nodeType===1)if(l="data-"+n.replace(Gt,"-$&").toLowerCase(),t=e.getAttribute(l),typeof t=="string"){try{t=Yt(t)}catch{}$.set(e,n,t)}else t=void 0;return t}r.extend({hasData:function(e){return $.hasData(e)||w.hasData(e)},data:function(e,n,t){return $.access(e,n,t)},removeData:function(e,n){$.remove(e,n)},_data:function(e,n,t){return w.access(e,n,t)},_removeData:function(e,n){w.remove(e,n)}}),r.fn.extend({data:function(e,n){var t,l,i,a=this[0],s=a&&a.attributes;if(e===void 0){if(this.length&&(i=$.get(a),a.nodeType===1&&!w.get(a,"hasDataAttrs"))){for(t=s.length;t--;)s[t]&&(l=s[t].name,l.indexOf("data-")===0&&(l=de(l.slice(5)),zn(a,l,i[l])));w.set(a,"hasDataAttrs",!0)}return i}return typeof e=="object"?this.each(function(){$.set(this,e)}):be(this,function(u){var c;if(a&&u===void 0)return c=$.get(a,e),c!==void 0||(c=zn(a,e),c!==void 0)?c:void 0;this.each(function(){$.set(this,e,u)})},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){$.remove(this,e)})}}),r.extend({queue:function(e,n,t){var l;if(e)return n=(n||"fx")+"queue",l=w.get(e,n),t&&(!l||Array.isArray(t)?l=w.access(e,n,r.makeArray(t)):l.push(t)),l||[]},dequeue:function(e,n){n=n||"fx";var t=r.queue(e,n),l=t.length,i=t.shift(),a=r._queueHooks(e,n),s=function(){r.dequeue(e,n)};i==="inprogress"&&(i=t.shift(),l--),i&&(n==="fx"&&t.unshift("inprogress"),delete a.stop,i.call(e,s,a)),!l&&a&&a.empty.fire()},_queueHooks:function(e,n){var t=n+"queueHooks";return w.get(e,t)||w.access(e,t,{empty:r.Callbacks("once memory").add(function(){w.remove(e,[n+"queue",t])})})}}),r.fn.extend({queue:function(e,n){var t=2;return typeof e!="string"&&(n=e,e="fx",t--),arguments.length<t?r.queue(this[0],e):n===void 0?this:this.each(function(){var l=r.queue(this,e,n);r._queueHooks(this,e),e==="fx"&&l[0]!=="inprogress"&&r.dequeue(this,e)})},dequeue:function(e){return this.each(function(){r.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var t,l=1,i=r.Deferred(),a=this,s=this.length,u=function(){--l||i.resolveWith(a,[a])};for(typeof e!="string"&&(n=e,e=void 0),e=e||"fx";s--;)t=w.get(a[s],e+"queueHooks"),t&&t.empty&&(l++,t.empty.add(u));return u(),i.promise(n)}});var Xn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ze=new RegExp("^(?:([+-])=|)("+Xn+")([a-z%]*)$","i"),xe=["Top","Right","Bottom","Left"],Se=B.documentElement,qe=function(e){return r.contains(e.ownerDocument,e)},Zt={composed:!0};Se.getRootNode&&(qe=function(e){return r.contains(e.ownerDocument,e)||e.getRootNode(Zt)===e.ownerDocument});var cn=function(e,n){return e=n||e,e.style.display==="none"||e.style.display===""&&qe(e)&&r.css(e,"display")==="none"};function $n(e,n,t,l){var i,a,s=20,u=l?function(){return l.cur()}:function(){return r.css(e,n,"")},c=u(),d=t&&t[3]||(r.cssNumber[n]?"":"px"),_=e.nodeType&&(r.cssNumber[n]||d!=="px"&&+c)&&ze.exec(r.css(e,n));if(_&&_[3]!==d){for(c=c/2,d=d||_[3],_=+c||1;s--;)r.style(e,n,_+d),(1-a)*(1-(a=u()/c||.5))<=0&&(s=0),_=_/a;_=_*2,r.style(e,n,_+d),t=t||[]}return t&&(_=+_||+c||0,i=t[1]?_+(t[1]+1)*t[2]:+t[2],l&&(l.unit=d,l.start=_,l.end=i)),i}var et={};function zt(e){var n,t=e.ownerDocument,l=e.nodeName,i=et[l];return i||(n=t.body.appendChild(t.createElement(l)),i=r.css(n,"display"),n.parentNode.removeChild(n),i==="none"&&(i="block"),et[l]=i,i)}function Ue(e,n){for(var t,l,i=[],a=0,s=e.length;a<s;a++)l=e[a],l.style&&(t=l.style.display,n?(t==="none"&&(i[a]=w.get(l,"display")||null,i[a]||(l.style.display="")),l.style.display===""&&cn(l)&&(i[a]=zt(l))):t!=="none"&&(i[a]="none",w.set(l,"display",t)));for(a=0;a<s;a++)i[a]!=null&&(e[a].style.display=i[a]);return e}r.fn.extend({show:function(){return Ue(this,!0)},hide:function(){return Ue(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){cn(this)?r(this).show():r(this).hide()})}});var Xe=/^(?:checkbox|radio)$/i,nt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=B.createDocumentFragment(),n=e.appendChild(B.createElement("div")),t=B.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),n.appendChild(t),L.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",L.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,n.innerHTML="<option></option>",L.option=!!n.lastChild})();var ie={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ie.tbody=ie.tfoot=ie.colgroup=ie.caption=ie.thead,ie.th=ie.td,L.option||(ie.optgroup=ie.option=[1,"<select multiple='multiple'>","</select>"]);function ee(e,n){var t;return typeof e.getElementsByTagName<"u"?t=e.getElementsByTagName(n||"*"):typeof e.querySelectorAll<"u"?t=e.querySelectorAll(n||"*"):t=[],n===void 0||n&&Q(e,n)?r.merge([e],t):t}function xn(e,n){for(var t=0,l=e.length;t<l;t++)w.set(e[t],"globalEval",!n||w.get(n[t],"globalEval"))}var Xt=/<|&#?\w+;/;function lt(e,n,t,l,i){for(var a,s,u,c,d,_,A=n.createDocumentFragment(),f=[],v=0,j=e.length;v<j;v++)if(a=e[v],a||a===0)if(Oe(a)==="object")r.merge(f,a.nodeType?[a]:a);else if(!Xt.test(a))f.push(n.createTextNode(a));else{for(s=s||A.appendChild(n.createElement("div")),u=(nt.exec(a)||["",""])[1].toLowerCase(),c=ie[u]||ie._default,s.innerHTML=c[1]+r.htmlPrefilter(a)+c[2],_=c[0];_--;)s=s.lastChild;r.merge(f,s.childNodes),s=A.firstChild,s.textContent=""}for(A.textContent="",v=0;a=f[v++];){if(l&&r.inArray(a,l)>-1){i&&i.push(a);continue}if(d=qe(a),s=ee(A.appendChild(a),"script"),d&&xn(s),t)for(_=0;a=s[_++];)tt.test(a.type||"")&&t.push(a)}return A}var rt=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function We(){return!1}function En(e,n,t,l,i,a){var s,u;if(typeof n=="object"){typeof t!="string"&&(l=l||t,t=void 0);for(u in n)En(e,u,t,l,n[u],a);return e}if(l==null&&i==null?(i=t,l=t=void 0):i==null&&(typeof t=="string"?(i=l,l=void 0):(i=l,l=t,t=void 0)),i===!1)i=We;else if(!i)return e;return a===1&&(s=i,i=function(c){return r().off(c),s.apply(this,arguments)},i.guid=s.guid||(s.guid=r.guid++)),e.each(function(){r.event.add(this,n,i,l,t)})}r.event={global:{},add:function(e,n,t,l,i){var a,s,u,c,d,_,A,f,v,j,q,T=w.get(e);if(Ye(e))for(t.handler&&(a=t,t=a.handler,i=a.selector),i&&r.find.matchesSelector(Se,i),t.guid||(t.guid=r.guid++),(c=T.events)||(c=T.events=Object.create(null)),(s=T.handle)||(s=T.handle=function(Z){return typeof r<"u"&&r.event.triggered!==Z.type?r.event.dispatch.apply(e,arguments):void 0}),n=(n||"").match(pe)||[""],d=n.length;d--;)u=rt.exec(n[d])||[],v=q=u[1],j=(u[2]||"").split(".").sort(),v&&(A=r.event.special[v]||{},v=(i?A.delegateType:A.bindType)||v,A=r.event.special[v]||{},_=r.extend({type:v,origType:q,data:l,handler:t,guid:t.guid,selector:i,needsContext:i&&r.expr.match.needsContext.test(i),namespace:j.join(".")},a),(f=c[v])||(f=c[v]=[],f.delegateCount=0,(!A.setup||A.setup.call(e,l,j,s)===!1)&&e.addEventListener&&e.addEventListener(v,s)),A.add&&(A.add.call(e,_),_.handler.guid||(_.handler.guid=t.guid)),i?f.splice(f.delegateCount++,0,_):f.push(_),r.event.global[v]=!0)},remove:function(e,n,t,l,i){var a,s,u,c,d,_,A,f,v,j,q,T=w.hasData(e)&&w.get(e);if(!(!T||!(c=T.events))){for(n=(n||"").match(pe)||[""],d=n.length;d--;){if(u=rt.exec(n[d])||[],v=q=u[1],j=(u[2]||"").split(".").sort(),!v){for(v in c)r.event.remove(e,v+n[d],t,l,!0);continue}for(A=r.event.special[v]||{},v=(l?A.delegateType:A.bindType)||v,f=c[v]||[],u=u[2]&&new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=a=f.length;a--;)_=f[a],(i||q===_.origType)&&(!t||t.guid===_.guid)&&(!u||u.test(_.namespace))&&(!l||l===_.selector||l==="**"&&_.selector)&&(f.splice(a,1),_.selector&&f.delegateCount--,A.remove&&A.remove.call(e,_));s&&!f.length&&((!A.teardown||A.teardown.call(e,j,T.handle)===!1)&&r.removeEvent(e,v,T.handle),delete c[v])}r.isEmptyObject(c)&&w.remove(e,"handle events")}},dispatch:function(e){var n,t,l,i,a,s,u=new Array(arguments.length),c=r.event.fix(e),d=(w.get(this,"events")||Object.create(null))[c.type]||[],_=r.event.special[c.type]||{};for(u[0]=c,n=1;n<arguments.length;n++)u[n]=arguments[n];if(c.delegateTarget=this,!(_.preDispatch&&_.preDispatch.call(this,c)===!1)){for(s=r.event.handlers.call(this,c,d),n=0;(i=s[n++])&&!c.isPropagationStopped();)for(c.currentTarget=i.elem,t=0;(a=i.handlers[t++])&&!c.isImmediatePropagationStopped();)(!c.rnamespace||a.namespace===!1||c.rnamespace.test(a.namespace))&&(c.handleObj=a,c.data=a.data,l=((r.event.special[a.origType]||{}).handle||a.handler).apply(i.elem,u),l!==void 0&&(c.result=l)===!1&&(c.preventDefault(),c.stopPropagation()));return _.postDispatch&&_.postDispatch.call(this,c),c.result}},handlers:function(e,n){var t,l,i,a,s,u=[],c=n.delegateCount,d=e.target;if(c&&d.nodeType&&!(e.type==="click"&&e.button>=1)){for(;d!==this;d=d.parentNode||this)if(d.nodeType===1&&!(e.type==="click"&&d.disabled===!0)){for(a=[],s={},t=0;t<c;t++)l=n[t],i=l.selector+" ",s[i]===void 0&&(s[i]=l.needsContext?r(i,this).index(d)>-1:r.find(i,this,null,[d]).length),s[i]&&a.push(l);a.length&&u.push({elem:d,handlers:a})}}return d=this,c<n.length&&u.push({elem:d,handlers:n.slice(c)}),u},addProp:function(e,n){Object.defineProperty(r.Event.prototype,e,{enumerable:!0,configurable:!0,get:I(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[r.expando]?e:new r.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var n=this||e;return Xe.test(n.type)&&n.click&&Q(n,"input")&&un(n,"click",!0),!1},trigger:function(e){var n=this||e;return Xe.test(n.type)&&n.click&&Q(n,"input")&&un(n,"click"),!0},_default:function(e){var n=e.target;return Xe.test(n.type)&&n.click&&Q(n,"input")&&w.get(n,"click")||Q(n,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function un(e,n,t){if(!t){w.get(e,n)===void 0&&r.event.add(e,n,Ne);return}w.set(e,n,!1),r.event.add(e,n,{namespace:!1,handler:function(l){var i,a=w.get(this,n);if(l.isTrigger&1&&this[n]){if(a)(r.event.special[n]||{}).delegateType&&l.stopPropagation();else if(a=K.call(arguments),w.set(this,n,a),this[n](),i=w.get(this,n),w.set(this,n,!1),a!==i)return l.stopImmediatePropagation(),l.preventDefault(),i}else a&&(w.set(this,n,r.event.trigger(a[0],a.slice(1),this)),l.stopPropagation(),l.isImmediatePropagationStopped=Ne)}})}r.removeEvent=function(e,n,t){e.removeEventListener&&e.removeEventListener(n,t)},r.Event=function(e,n){if(!(this instanceof r.Event))return new r.Event(e,n);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Ne:We,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,n&&r.extend(this,n),this.timeStamp=e&&e.timeStamp||Date.now(),this[r.expando]=!0},r.Event.prototype={constructor:r.Event,isDefaultPrevented:We,isPropagationStopped:We,isImmediatePropagationStopped:We,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},r.event.addProp),r.each({focus:"focusin",blur:"focusout"},function(e,n){function t(l){if(B.documentMode){var i=w.get(this,"handle"),a=r.event.fix(l);a.type=l.type==="focusin"?"focus":"blur",a.isSimulated=!0,i(l),a.target===a.currentTarget&&i(a)}else r.event.simulate(n,l.target,r.event.fix(l))}r.event.special[e]={setup:function(){var l;if(un(this,e,!0),B.documentMode)l=w.get(this,n),l||this.addEventListener(n,t),w.set(this,n,(l||0)+1);else return!1},trigger:function(){return un(this,e),!0},teardown:function(){var l;if(B.documentMode)l=w.get(this,n)-1,l?w.set(this,n,l):(this.removeEventListener(n,t),w.remove(this,n));else return!1},_default:function(l){return w.get(l.target,e)},delegateType:n},r.event.special[n]={setup:function(){var l=this.ownerDocument||this.document||this,i=B.documentMode?this:l,a=w.get(i,n);a||(B.documentMode?this.addEventListener(n,t):l.addEventListener(e,t,!0)),w.set(i,n,(a||0)+1)},teardown:function(){var l=this.ownerDocument||this.document||this,i=B.documentMode?this:l,a=w.get(i,n)-1;a?w.set(i,n,a):(B.documentMode?this.removeEventListener(n,t):l.removeEventListener(e,t,!0),w.remove(i,n))}}}),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,n){r.event.special[e]={delegateType:n,bindType:n,handle:function(t){var l,i=this,a=t.relatedTarget,s=t.handleObj;return(!a||a!==i&&!r.contains(i,a))&&(t.type=s.origType,l=s.handler.apply(this,arguments),t.type=n),l}}}),r.fn.extend({on:function(e,n,t,l){return En(this,e,n,t,l)},one:function(e,n,t,l){return En(this,e,n,t,l,1)},off:function(e,n,t){var l,i;if(e&&e.preventDefault&&e.handleObj)return l=e.handleObj,r(e.delegateTarget).off(l.namespace?l.origType+"."+l.namespace:l.origType,l.selector,l.handler),this;if(typeof e=="object"){for(i in e)this.off(i,n,e[i]);return this}return(n===!1||typeof n=="function")&&(t=n,n=void 0),t===!1&&(t=We),this.each(function(){r.event.remove(this,e,t,n)})}});var $t=/<script|<style|<link/i,el=/checked\s*(?:[^=]|=\s*.checked.)/i,nl=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function it(e,n){return Q(e,"table")&&Q(n.nodeType!==11?n:n.firstChild,"tr")&&r(e).children("tbody")[0]||e}function tl(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function ll(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function at(e,n){var t,l,i,a,s,u,c;if(n.nodeType===1){if(w.hasData(e)&&(a=w.get(e),c=a.events,c)){w.remove(n,"handle events");for(i in c)for(t=0,l=c[i].length;t<l;t++)r.event.add(n,i,c[i][t])}$.hasData(e)&&(s=$.access(e),u=r.extend({},s),$.set(n,u))}}function rl(e,n){var t=n.nodeName.toLowerCase();t==="input"&&Xe.test(e.type)?n.checked=e.checked:(t==="input"||t==="textarea")&&(n.defaultValue=e.defaultValue)}function Ve(e,n,t,l){n=Ae(n);var i,a,s,u,c,d,_=0,A=e.length,f=A-1,v=n[0],j=I(v);if(j||A>1&&typeof v=="string"&&!L.checkClone&&el.test(v))return e.each(function(q){var T=e.eq(q);j&&(n[0]=v.call(this,q,T.html())),Ve(T,n,t,l)});if(A&&(i=lt(n,e[0].ownerDocument,!1,e,l),a=i.firstChild,i.childNodes.length===1&&(i=a),a||l)){for(s=r.map(ee(i,"script"),tl),u=s.length;_<A;_++)c=i,_!==f&&(c=r.clone(c,!0,!0),u&&r.merge(s,ee(c,"script"))),t.call(e[_],c,_);if(u)for(d=s[s.length-1].ownerDocument,r.map(s,ll),_=0;_<u;_++)c=s[_],tt.test(c.type||"")&&!w.access(c,"globalEval")&&r.contains(d,c)&&(c.src&&(c.type||"").toLowerCase()!=="module"?r._evalUrl&&!c.noModule&&r._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},d):Kn(c.textContent.replace(nl,""),c,d))}return e}function st(e,n,t){for(var l,i=n?r.filter(n,e):e,a=0;(l=i[a])!=null;a++)!t&&l.nodeType===1&&r.cleanData(ee(l)),l.parentNode&&(t&&qe(l)&&xn(ee(l,"script")),l.parentNode.removeChild(l));return e}r.extend({htmlPrefilter:function(e){return e},clone:function(e,n,t){var l,i,a,s,u=e.cloneNode(!0),c=qe(e);if(!L.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!r.isXMLDoc(e))for(s=ee(u),a=ee(e),l=0,i=a.length;l<i;l++)rl(a[l],s[l]);if(n)if(t)for(a=a||ee(e),s=s||ee(u),l=0,i=a.length;l<i;l++)at(a[l],s[l]);else at(e,u);return s=ee(u,"script"),s.length>0&&xn(s,!c&&ee(e,"script")),u},cleanData:function(e){for(var n,t,l,i=r.event.special,a=0;(t=e[a])!==void 0;a++)if(Ye(t)){if(n=t[w.expando]){if(n.events)for(l in n.events)i[l]?r.event.remove(t,l):r.removeEvent(t,l,n.handle);t[w.expando]=void 0}t[$.expando]&&(t[$.expando]=void 0)}}}),r.fn.extend({detach:function(e){return st(this,e,!0)},remove:function(e){return st(this,e)},text:function(e){return be(this,function(n){return n===void 0?r.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=n)})},null,e,arguments.length)},append:function(){return Ve(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=it(this,e);n.appendChild(e)}})},prepend:function(){return Ve(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=it(this,e);n.insertBefore(e,n.firstChild)}})},before:function(){return Ve(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ve(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,n=0;(e=this[n])!=null;n++)e.nodeType===1&&(r.cleanData(ee(e,!1)),e.textContent="");return this},clone:function(e,n){return e=e??!1,n=n??e,this.map(function(){return r.clone(this,e,n)})},html:function(e){return be(this,function(n){var t=this[0]||{},l=0,i=this.length;if(n===void 0&&t.nodeType===1)return t.innerHTML;if(typeof n=="string"&&!$t.test(n)&&!ie[(nt.exec(n)||["",""])[1].toLowerCase()]){n=r.htmlPrefilter(n);try{for(;l<i;l++)t=this[l]||{},t.nodeType===1&&(r.cleanData(ee(t,!1)),t.innerHTML=n);t=0}catch{}}t&&this.empty().append(n)},null,e,arguments.length)},replaceWith:function(){var e=[];return Ve(this,arguments,function(n){var t=this.parentNode;r.inArray(this,e)<0&&(r.cleanData(ee(this)),t&&t.replaceChild(n,this))},e)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,n){r.fn[e]=function(t){for(var l,i=[],a=r(t),s=a.length-1,u=0;u<=s;u++)l=u===s?this:this.clone(!0),r(a[u])[n](l),le.apply(i,l.get());return this.pushStack(i)}});var Mn=new RegExp("^("+Xn+")(?!px)[a-z%]+$","i"),wn=/^--/,pn=function(e){var n=e.ownerDocument.defaultView;return(!n||!n.opener)&&(n=E),n.getComputedStyle(e)},ot=function(e,n,t){var l,i,a={};for(i in n)a[i]=e.style[i],e.style[i]=n[i];l=t.call(e);for(i in n)e.style[i]=a[i];return l},il=new RegExp(xe.join("|"),"i");(function(){function e(){if(d){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Se.appendChild(c).appendChild(d);var _=E.getComputedStyle(d);t=_.top!=="1%",u=n(_.marginLeft)===12,d.style.right="60%",a=n(_.right)===36,l=n(_.width)===36,d.style.position="absolute",i=n(d.offsetWidth/3)===12,Se.removeChild(c),d=null}}function n(_){return Math.round(parseFloat(_))}var t,l,i,a,s,u,c=B.createElement("div"),d=B.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",L.clearCloneStyle=d.style.backgroundClip==="content-box",r.extend(L,{boxSizingReliable:function(){return e(),l},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),t},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var _,A,f,v;return s==null&&(_=B.createElement("table"),A=B.createElement("tr"),f=B.createElement("div"),_.style.cssText="position:absolute;left:-11111px;border-collapse:separate",A.style.cssText="box-sizing:content-box;border:1px solid",A.style.height="1px",f.style.height="9px",f.style.display="block",Se.appendChild(_).appendChild(A).appendChild(f),v=E.getComputedStyle(A),s=parseInt(v.height,10)+parseInt(v.borderTopWidth,10)+parseInt(v.borderBottomWidth,10)===A.offsetHeight,Se.removeChild(_)),s}}))})();function $e(e,n,t){var l,i,a,s,u=wn.test(n),c=e.style;return t=t||pn(e),t&&(s=t.getPropertyValue(n)||t[n],u&&s&&(s=s.replace(Ge,"$1")||void 0),s===""&&!qe(e)&&(s=r.style(e,n)),!L.pixelBoxStyles()&&Mn.test(s)&&il.test(n)&&(l=c.width,i=c.minWidth,a=c.maxWidth,c.minWidth=c.maxWidth=c.width=s,s=t.width,c.width=l,c.minWidth=i,c.maxWidth=a)),s!==void 0?s+"":s}function ct(e,n){return{get:function(){if(e()){delete this.get;return}return(this.get=n).apply(this,arguments)}}}var ut=["Webkit","Moz","ms"],pt=B.createElement("div").style,dt={};function al(e){for(var n=e[0].toUpperCase()+e.slice(1),t=ut.length;t--;)if(e=ut[t]+n,e in pt)return e}function kn(e){var n=r.cssProps[e]||dt[e];return n||(e in pt?e:dt[e]=al(e)||e)}var sl=/^(none|table(?!-c[ea]).+)/,ol={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"};function ft(e,n,t){var l=ze.exec(n);return l?Math.max(0,l[2]-(t||0))+(l[3]||"px"):n}function Cn(e,n,t,l,i,a){var s=n==="width"?1:0,u=0,c=0,d=0;if(t===(l?"border":"content"))return 0;for(;s<4;s+=2)t==="margin"&&(d+=r.css(e,t+xe[s],!0,i)),l?(t==="content"&&(c-=r.css(e,"padding"+xe[s],!0,i)),t!=="margin"&&(c-=r.css(e,"border"+xe[s]+"Width",!0,i))):(c+=r.css(e,"padding"+xe[s],!0,i),t!=="padding"?c+=r.css(e,"border"+xe[s]+"Width",!0,i):u+=r.css(e,"border"+xe[s]+"Width",!0,i));return!l&&a>=0&&(c+=Math.max(0,Math.ceil(e["offset"+n[0].toUpperCase()+n.slice(1)]-a-c-u-.5))||0),c+d}function mt(e,n,t){var l=pn(e),i=!L.boxSizingReliable()||t,a=i&&r.css(e,"boxSizing",!1,l)==="border-box",s=a,u=$e(e,n,l),c="offset"+n[0].toUpperCase()+n.slice(1);if(Mn.test(u)){if(!t)return u;u="auto"}return(!L.boxSizingReliable()&&a||!L.reliableTrDimensions()&&Q(e,"tr")||u==="auto"||!parseFloat(u)&&r.css(e,"display",!1,l)==="inline")&&e.getClientRects().length&&(a=r.css(e,"boxSizing",!1,l)==="border-box",s=c in e,s&&(u=e[c])),u=parseFloat(u)||0,u+Cn(e,n,t||(a?"border":"content"),s,l,u)+"px"}r.extend({cssHooks:{opacity:{get:function(e,n){if(n){var t=$e(e,"opacity");return t===""?"1":t}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,n,t,l){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var i,a,s,u=de(n),c=wn.test(n),d=e.style;if(c||(n=kn(u)),s=r.cssHooks[n]||r.cssHooks[u],t!==void 0){if(a=typeof t,a==="string"&&(i=ze.exec(t))&&i[1]&&(t=$n(e,n,i),a="number"),t==null||t!==t)return;a==="number"&&!c&&(t+=i&&i[3]||(r.cssNumber[u]?"":"px")),!L.clearCloneStyle&&t===""&&n.indexOf("background")===0&&(d[n]="inherit"),(!s||!("set"in s)||(t=s.set(e,t,l))!==void 0)&&(c?d.setProperty(n,t):d[n]=t)}else return s&&"get"in s&&(i=s.get(e,!1,l))!==void 0?i:d[n]}},css:function(e,n,t,l){var i,a,s,u=de(n),c=wn.test(n);return c||(n=kn(u)),s=r.cssHooks[n]||r.cssHooks[u],s&&"get"in s&&(i=s.get(e,!0,t)),i===void 0&&(i=$e(e,n,l)),i==="normal"&&n in ht&&(i=ht[n]),t===""||t?(a=parseFloat(i),t===!0||isFinite(a)?a||0:i):i}}),r.each(["height","width"],function(e,n){r.cssHooks[n]={get:function(t,l,i){if(l)return sl.test(r.css(t,"display"))&&(!t.getClientRects().length||!t.getBoundingClientRect().width)?ot(t,ol,function(){return mt(t,n,i)}):mt(t,n,i)},set:function(t,l,i){var a,s=pn(t),u=!L.scrollboxSize()&&s.position==="absolute",c=u||i,d=c&&r.css(t,"boxSizing",!1,s)==="border-box",_=i?Cn(t,n,i,d,s):0;return d&&u&&(_-=Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(s[n])-Cn(t,n,"border",!1,s)-.5)),_&&(a=ze.exec(l))&&(a[3]||"px")!=="px"&&(t.style[n]=l,l=r.css(t,n)),ft(t,l,_)}}}),r.cssHooks.marginLeft=ct(L.reliableMarginLeft,function(e,n){if(n)return(parseFloat($e(e,"marginLeft"))||e.getBoundingClientRect().left-ot(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(e,n){r.cssHooks[e+n]={expand:function(t){for(var l=0,i={},a=typeof t=="string"?t.split(" "):[t];l<4;l++)i[e+xe[l]+n]=a[l]||a[l-2]||a[0];return i}},e!=="margin"&&(r.cssHooks[e+n].set=ft)}),r.fn.extend({css:function(e,n){return be(this,function(t,l,i){var a,s,u={},c=0;if(Array.isArray(l)){for(a=pn(t),s=l.length;c<s;c++)u[l[c]]=r.css(t,l[c],!1,a);return u}return i!==void 0?r.style(t,l,i):r.css(t,l)},e,n,arguments.length>1)}});function ne(e,n,t,l,i){return new ne.prototype.init(e,n,t,l,i)}r.Tween=ne,ne.prototype={constructor:ne,init:function(e,n,t,l,i,a){this.elem=e,this.prop=t,this.easing=i||r.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=l,this.unit=a||(r.cssNumber[t]?"":"px")},cur:function(){var e=ne.propHooks[this.prop];return e&&e.get?e.get(this):ne.propHooks._default.get(this)},run:function(e){var n,t=ne.propHooks[this.prop];return this.options.duration?this.pos=n=r.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=n=e,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),t&&t.set?t.set(this):ne.propHooks._default.set(this),this}},ne.prototype.init.prototype=ne.prototype,ne.propHooks={_default:{get:function(e){var n;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(n=r.css(e.elem,e.prop,""),!n||n==="auto"?0:n)},set:function(e){r.fx.step[e.prop]?r.fx.step[e.prop](e):e.elem.nodeType===1&&(r.cssHooks[e.prop]||e.elem.style[kn(e.prop)]!=null)?r.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},ne.propHooks.scrollTop=ne.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},r.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},r.fx=ne.prototype.init,r.fx.step={};var Ke,dn,cl=/^(?:toggle|show|hide)$/,ul=/queueHooks$/;function Sn(){dn&&(B.hidden===!1&&E.requestAnimationFrame?E.requestAnimationFrame(Sn):E.setTimeout(Sn,r.fx.interval),r.fx.tick())}function _t(){return E.setTimeout(function(){Ke=void 0}),Ke=Date.now()}function hn(e,n){var t,l=0,i={height:e};for(n=n?1:0;l<4;l+=2-n)t=xe[l],i["margin"+t]=i["padding"+t]=e;return n&&(i.opacity=i.width=e),i}function gt(e,n,t){for(var l,i=(oe.tweeners[n]||[]).concat(oe.tweeners["*"]),a=0,s=i.length;a<s;a++)if(l=i[a].call(t,n,e))return l}function pl(e,n,t){var l,i,a,s,u,c,d,_,A="width"in n||"height"in n,f=this,v={},j=e.style,q=e.nodeType&&cn(e),T=w.get(e,"fxshow");t.queue||(s=r._queueHooks(e,"fx"),s.unqueued==null&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,r.queue(e,"fx").length||s.empty.fire()})}));for(l in n)if(i=n[l],cl.test(i)){if(delete n[l],a=a||i==="toggle",i===(q?"hide":"show"))if(i==="show"&&T&&T[l]!==void 0)q=!0;else continue;v[l]=T&&T[l]||r.style(e,l)}if(c=!r.isEmptyObject(n),!(!c&&r.isEmptyObject(v))){A&&e.nodeType===1&&(t.overflow=[j.overflow,j.overflowX,j.overflowY],d=T&&T.display,d==null&&(d=w.get(e,"display")),_=r.css(e,"display"),_==="none"&&(d?_=d:(Ue([e],!0),d=e.style.display||d,_=r.css(e,"display"),Ue([e]))),(_==="inline"||_==="inline-block"&&d!=null)&&r.css(e,"float")==="none"&&(c||(f.done(function(){j.display=d}),d==null&&(_=j.display,d=_==="none"?"":_)),j.display="inline-block")),t.overflow&&(j.overflow="hidden",f.always(function(){j.overflow=t.overflow[0],j.overflowX=t.overflow[1],j.overflowY=t.overflow[2]})),c=!1;for(l in v)c||(T?"hidden"in T&&(q=T.hidden):T=w.access(e,"fxshow",{display:d}),a&&(T.hidden=!q),q&&Ue([e],!0),f.done(function(){q||Ue([e]),w.remove(e,"fxshow");for(l in v)r.style(e,l,v[l])})),c=gt(q?T[l]:0,l,f),l in T||(T[l]=c.start,q&&(c.end=c.start,c.start=0))}}function dl(e,n){var t,l,i,a,s;for(t in e)if(l=de(t),i=n[l],a=e[t],Array.isArray(a)&&(i=a[1],a=e[t]=a[0]),t!==l&&(e[l]=a,delete e[t]),s=r.cssHooks[l],s&&"expand"in s){a=s.expand(a),delete e[l];for(t in a)t in e||(e[t]=a[t],n[t]=i)}else n[l]=i}function oe(e,n,t){var l,i,a=0,s=oe.prefilters.length,u=r.Deferred().always(function(){delete c.elem}),c=function(){if(i)return!1;for(var A=Ke||_t(),f=Math.max(0,d.startTime+d.duration-A),v=f/d.duration||0,j=1-v,q=0,T=d.tweens.length;q<T;q++)d.tweens[q].run(j);return u.notifyWith(e,[d,j,f]),j<1&&T?f:(T||u.notifyWith(e,[d,1,0]),u.resolveWith(e,[d]),!1)},d=u.promise({elem:e,props:r.extend({},n),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},t),originalProperties:n,originalOptions:t,startTime:Ke||_t(),duration:t.duration,tweens:[],createTween:function(A,f){var v=r.Tween(e,d.opts,A,f,d.opts.specialEasing[A]||d.opts.easing);return d.tweens.push(v),v},stop:function(A){var f=0,v=A?d.tweens.length:0;if(i)return this;for(i=!0;f<v;f++)d.tweens[f].run(1);return A?(u.notifyWith(e,[d,1,0]),u.resolveWith(e,[d,A])):u.rejectWith(e,[d,A]),this}}),_=d.props;for(dl(_,d.opts.specialEasing);a<s;a++)if(l=oe.prefilters[a].call(d,e,_,d.opts),l)return I(l.stop)&&(r._queueHooks(d.elem,d.opts.queue).stop=l.stop.bind(l)),l;return r.map(_,gt,d),I(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),r.fx.timer(r.extend(c,{elem:e,anim:d,queue:d.opts.queue})),d}r.Animation=r.extend(oe,{tweeners:{"*":[function(e,n){var t=this.createTween(e,n);return $n(t.elem,e,ze.exec(n),t),t}]},tweener:function(e,n){I(e)?(n=e,e=["*"]):e=e.match(pe);for(var t,l=0,i=e.length;l<i;l++)t=e[l],oe.tweeners[t]=oe.tweeners[t]||[],oe.tweeners[t].unshift(n)},prefilters:[pl],prefilter:function(e,n){n?oe.prefilters.unshift(e):oe.prefilters.push(e)}}),r.speed=function(e,n,t){var l=e&&typeof e=="object"?r.extend({},e):{complete:t||!t&&n||I(e)&&e,duration:e,easing:t&&n||n&&!I(n)&&n};return r.fx.off?l.duration=0:typeof l.duration!="number"&&(l.duration in r.fx.speeds?l.duration=r.fx.speeds[l.duration]:l.duration=r.fx.speeds._default),(l.queue==null||l.queue===!0)&&(l.queue="fx"),l.old=l.complete,l.complete=function(){I(l.old)&&l.old.call(this),l.queue&&r.dequeue(this,l.queue)},l},r.fn.extend({fadeTo:function(e,n,t,l){return this.filter(cn).css("opacity",0).show().end().animate({opacity:n},e,t,l)},animate:function(e,n,t,l){var i=r.isEmptyObject(e),a=r.speed(n,t,l),s=function(){var u=oe(this,r.extend({},e),a);(i||w.get(this,"finish"))&&u.stop(!0)};return s.finish=s,i||a.queue===!1?this.each(s):this.queue(a.queue,s)},stop:function(e,n,t){var l=function(i){var a=i.stop;delete i.stop,a(t)};return typeof e!="string"&&(t=n,n=e,e=void 0),n&&this.queue(e||"fx",[]),this.each(function(){var i=!0,a=e!=null&&e+"queueHooks",s=r.timers,u=w.get(this);if(a)u[a]&&u[a].stop&&l(u[a]);else for(a in u)u[a]&&u[a].stop&&ul.test(a)&&l(u[a]);for(a=s.length;a--;)s[a].elem===this&&(e==null||s[a].queue===e)&&(s[a].anim.stop(t),i=!1,s.splice(a,1));(i||!t)&&r.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var n,t=w.get(this),l=t[e+"queue"],i=t[e+"queueHooks"],a=r.timers,s=l?l.length:0;for(t.finish=!0,r.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),n=a.length;n--;)a[n].elem===this&&a[n].queue===e&&(a[n].anim.stop(!0),a.splice(n,1));for(n=0;n<s;n++)l[n]&&l[n].finish&&l[n].finish.call(this);delete t.finish})}}),r.each(["toggle","show","hide"],function(e,n){var t=r.fn[n];r.fn[n]=function(l,i,a){return l==null||typeof l=="boolean"?t.apply(this,arguments):this.animate(hn(n,!0),l,i,a)}}),r.each({slideDown:hn("show"),slideUp:hn("hide"),slideToggle:hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,n){r.fn[e]=function(t,l,i){return this.animate(n,t,l,i)}}),r.timers=[],r.fx.tick=function(){var e,n=0,t=r.timers;for(Ke=Date.now();n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||r.fx.stop(),Ke=void 0},r.fx.timer=function(e){r.timers.push(e),r.fx.start()},r.fx.interval=13,r.fx.start=function(){dn||(dn=!0,Sn())},r.fx.stop=function(){dn=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(e,n){return e=r.fx&&r.fx.speeds[e]||e,n=n||"fx",this.queue(n,function(t,l){var i=E.setTimeout(t,e);l.stop=function(){E.clearTimeout(i)}})},function(){var e=B.createElement("input"),n=B.createElement("select"),t=n.appendChild(B.createElement("option"));e.type="checkbox",L.checkOn=e.value!=="",L.optSelected=t.selected,e=B.createElement("input"),e.value="t",e.type="radio",L.radioValue=e.value==="t"}();var At,en=r.expr.attrHandle;r.fn.extend({attr:function(e,n){return be(this,r.attr,e,n,arguments.length>1)},removeAttr:function(e){return this.each(function(){r.removeAttr(this,e)})}}),r.extend({attr:function(e,n,t){var l,i,a=e.nodeType;if(!(a===3||a===8||a===2)){if(typeof e.getAttribute>"u")return r.prop(e,n,t);if((a!==1||!r.isXMLDoc(e))&&(i=r.attrHooks[n.toLowerCase()]||(r.expr.match.bool.test(n)?At:void 0)),t!==void 0){if(t===null){r.removeAttr(e,n);return}return i&&"set"in i&&(l=i.set(e,t,n))!==void 0?l:(e.setAttribute(n,t+""),t)}return i&&"get"in i&&(l=i.get(e,n))!==null?l:(l=r.find.attr(e,n),l??void 0)}},attrHooks:{type:{set:function(e,n){if(!L.radioValue&&n==="radio"&&Q(e,"input")){var t=e.value;return e.setAttribute("type",n),t&&(e.value=t),n}}}},removeAttr:function(e,n){var t,l=0,i=n&&n.match(pe);if(i&&e.nodeType===1)for(;t=i[l++];)e.removeAttribute(t)}}),At={set:function(e,n,t){return n===!1?r.removeAttr(e,t):e.setAttribute(t,t),t}},r.each(r.expr.match.bool.source.match(/\w+/g),function(e,n){var t=en[n]||r.find.attr;en[n]=function(l,i,a){var s,u,c=i.toLowerCase();return a||(u=en[c],en[c]=s,s=t(l,i,a)!=null?c:null,en[c]=u),s}});var hl=/^(?:input|select|textarea|button)$/i,fl=/^(?:a|area)$/i;r.fn.extend({prop:function(e,n){return be(this,r.prop,e,n,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[r.propFix[e]||e]})}}),r.extend({prop:function(e,n,t){var l,i,a=e.nodeType;if(!(a===3||a===8||a===2))return(a!==1||!r.isXMLDoc(e))&&(n=r.propFix[n]||n,i=r.propHooks[n]),t!==void 0?i&&"set"in i&&(l=i.set(e,t,n))!==void 0?l:e[n]=t:i&&"get"in i&&(l=i.get(e,n))!==null?l:e[n]},propHooks:{tabIndex:{get:function(e){var n=r.find.attr(e,"tabindex");return n?parseInt(n,10):hl.test(e.nodeName)||fl.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),L.optSelected||(r.propHooks.selected={get:function(e){var n=e.parentNode;return n&&n.parentNode&&n.parentNode.selectedIndex,null},set:function(e){var n=e.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function je(e){var n=e.match(pe)||[];return n.join(" ")}function Le(e){return e.getAttribute&&e.getAttribute("class")||""}function jn(e){return Array.isArray(e)?e:typeof e=="string"?e.match(pe)||[]:[]}r.fn.extend({addClass:function(e){var n,t,l,i,a,s;return I(e)?this.each(function(u){r(this).addClass(e.call(this,u,Le(this)))}):(n=jn(e),n.length?this.each(function(){if(l=Le(this),t=this.nodeType===1&&" "+je(l)+" ",t){for(a=0;a<n.length;a++)i=n[a],t.indexOf(" "+i+" ")<0&&(t+=i+" ");s=je(t),l!==s&&this.setAttribute("class",s)}}):this)},removeClass:function(e){var n,t,l,i,a,s;return I(e)?this.each(function(u){r(this).removeClass(e.call(this,u,Le(this)))}):arguments.length?(n=jn(e),n.length?this.each(function(){if(l=Le(this),t=this.nodeType===1&&" "+je(l)+" ",t){for(a=0;a<n.length;a++)for(i=n[a];t.indexOf(" "+i+" ")>-1;)t=t.replace(" "+i+" "," ");s=je(t),l!==s&&this.setAttribute("class",s)}}):this):this.attr("class","")},toggleClass:function(e,n){var t,l,i,a,s=typeof e,u=s==="string"||Array.isArray(e);return I(e)?this.each(function(c){r(this).toggleClass(e.call(this,c,Le(this),n),n)}):typeof n=="boolean"&&u?n?this.addClass(e):this.removeClass(e):(t=jn(e),this.each(function(){if(u)for(a=r(this),i=0;i<t.length;i++)l=t[i],a.hasClass(l)?a.removeClass(l):a.addClass(l);else(e===void 0||s==="boolean")&&(l=Le(this),l&&w.set(this,"__className__",l),this.setAttribute&&this.setAttribute("class",l||e===!1?"":w.get(this,"__className__")||""))}))},hasClass:function(e){var n,t,l=0;for(n=" "+e+" ";t=this[l++];)if(t.nodeType===1&&(" "+je(Le(t))+" ").indexOf(n)>-1)return!0;return!1}});var ml=/\r/g;r.fn.extend({val:function(e){var n,t,l,i=this[0];return arguments.length?(l=I(e),this.each(function(a){var s;this.nodeType===1&&(l?s=e.call(this,a,r(this).val()):s=e,s==null?s="":typeof s=="number"?s+="":Array.isArray(s)&&(s=r.map(s,function(u){return u==null?"":u+""})),n=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],(!n||!("set"in n)||n.set(this,s,"value")===void 0)&&(this.value=s))})):i?(n=r.valHooks[i.type]||r.valHooks[i.nodeName.toLowerCase()],n&&"get"in n&&(t=n.get(i,"value"))!==void 0?t:(t=i.value,typeof t=="string"?t.replace(ml,""):t??"")):void 0}}),r.extend({valHooks:{option:{get:function(e){var n=r.find.attr(e,"value");return n??je(r.text(e))}},select:{get:function(e){var n,t,l,i=e.options,a=e.selectedIndex,s=e.type==="select-one",u=s?null:[],c=s?a+1:i.length;for(a<0?l=c:l=s?a:0;l<c;l++)if(t=i[l],(t.selected||l===a)&&!t.disabled&&(!t.parentNode.disabled||!Q(t.parentNode,"optgroup"))){if(n=r(t).val(),s)return n;u.push(n)}return u},set:function(e,n){for(var t,l,i=e.options,a=r.makeArray(n),s=i.length;s--;)l=i[s],(l.selected=r.inArray(r.valHooks.option.get(l),a)>-1)&&(t=!0);return t||(e.selectedIndex=-1),a}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(e,n){if(Array.isArray(n))return e.checked=r.inArray(r(e).val(),n)>-1}},L.checkOn||(r.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var nn=E.location,vt={guid:Date.now()},Ln=/\?/;r.parseXML=function(e){var n,t;if(!e||typeof e!="string")return null;try{n=new E.DOMParser().parseFromString(e,"text/xml")}catch{}return t=n&&n.getElementsByTagName("parsererror")[0],(!n||t)&&r.error("Invalid XML: "+(t?r.map(t.childNodes,function(l){return l.textContent}).join(`
`):e)),n};var yt=/^(?:focusinfocus|focusoutblur)$/,bt=function(e){e.stopPropagation()};r.extend(r.event,{trigger:function(e,n,t,l){var i,a,s,u,c,d,_,A,f=[t||B],v=ve.call(e,"type")?e.type:e,j=ve.call(e,"namespace")?e.namespace.split("."):[];if(a=A=s=t=t||B,!(t.nodeType===3||t.nodeType===8)&&!yt.test(v+r.event.triggered)&&(v.indexOf(".")>-1&&(j=v.split("."),v=j.shift(),j.sort()),c=v.indexOf(":")<0&&"on"+v,e=e[r.expando]?e:new r.Event(v,typeof e=="object"&&e),e.isTrigger=l?2:3,e.namespace=j.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=t),n=n==null?[e]:r.makeArray(n,[e]),_=r.event.special[v]||{},!(!l&&_.trigger&&_.trigger.apply(t,n)===!1))){if(!l&&!_.noBubble&&!Te(t)){for(u=_.delegateType||v,yt.test(u+v)||(a=a.parentNode);a;a=a.parentNode)f.push(a),s=a;s===(t.ownerDocument||B)&&f.push(s.defaultView||s.parentWindow||E)}for(i=0;(a=f[i++])&&!e.isPropagationStopped();)A=a,e.type=i>1?u:_.bindType||v,d=(w.get(a,"events")||Object.create(null))[e.type]&&w.get(a,"handle"),d&&d.apply(a,n),d=c&&a[c],d&&d.apply&&Ye(a)&&(e.result=d.apply(a,n),e.result===!1&&e.preventDefault());return e.type=v,!l&&!e.isDefaultPrevented()&&(!_._default||_._default.apply(f.pop(),n)===!1)&&Ye(t)&&c&&I(t[v])&&!Te(t)&&(s=t[c],s&&(t[c]=null),r.event.triggered=v,e.isPropagationStopped()&&A.addEventListener(v,bt),t[v](),e.isPropagationStopped()&&A.removeEventListener(v,bt),r.event.triggered=void 0,s&&(t[c]=s)),e.result}},simulate:function(e,n,t){var l=r.extend(new r.Event,t,{type:e,isSimulated:!0});r.event.trigger(l,null,n)}}),r.fn.extend({trigger:function(e,n){return this.each(function(){r.event.trigger(e,n,this)})},triggerHandler:function(e,n){var t=this[0];if(t)return r.event.trigger(e,n,t,!0)}});var _l=/\[\]$/,xt=/\r?\n/g,gl=/^(?:submit|button|image|reset|file)$/i,Al=/^(?:input|select|textarea|keygen)/i;function Dn(e,n,t,l){var i;if(Array.isArray(n))r.each(n,function(a,s){t||_l.test(e)?l(e,s):Dn(e+"["+(typeof s=="object"&&s!=null?a:"")+"]",s,t,l)});else if(!t&&Oe(n)==="object")for(i in n)Dn(e+"["+i+"]",n[i],t,l);else l(e,n)}r.param=function(e,n){var t,l=[],i=function(a,s){var u=I(s)?s():s;l[l.length]=encodeURIComponent(a)+"="+encodeURIComponent(u??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!r.isPlainObject(e))r.each(e,function(){i(this.name,this.value)});else for(t in e)Dn(t,e[t],n,i);return l.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=r.prop(this,"elements");return e?r.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!r(this).is(":disabled")&&Al.test(this.nodeName)&&!gl.test(e)&&(this.checked||!Xe.test(e))}).map(function(e,n){var t=r(this).val();return t==null?null:Array.isArray(t)?r.map(t,function(l){return{name:n.name,value:l.replace(xt,`\r
`)}}):{name:n.name,value:t.replace(xt,`\r
`)}}).get()}});var vl=/%20/g,yl=/#.*$/,bl=/([?&])_=[^&]*/,xl=/^(.*?):[ \t]*([^\r\n]*)$/mg,El=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ml=/^(?:GET|HEAD)$/,wl=/^\/\//,Et={},Bn={},Mt="*/".concat("*"),In=B.createElement("a");In.href=nn.href;function wt(e){return function(n,t){typeof n!="string"&&(t=n,n="*");var l,i=0,a=n.toLowerCase().match(pe)||[];if(I(t))for(;l=a[i++];)l[0]==="+"?(l=l.slice(1)||"*",(e[l]=e[l]||[]).unshift(t)):(e[l]=e[l]||[]).push(t)}}function kt(e,n,t,l){var i={},a=e===Bn;function s(u){var c;return i[u]=!0,r.each(e[u]||[],function(d,_){var A=_(n,t,l);if(typeof A=="string"&&!a&&!i[A])return n.dataTypes.unshift(A),s(A),!1;if(a)return!(c=A)}),c}return s(n.dataTypes[0])||!i["*"]&&s("*")}function Tn(e,n){var t,l,i=r.ajaxSettings.flatOptions||{};for(t in n)n[t]!==void 0&&((i[t]?e:l||(l={}))[t]=n[t]);return l&&r.extend(!0,e,l),e}function kl(e,n,t){for(var l,i,a,s,u=e.contents,c=e.dataTypes;c[0]==="*";)c.shift(),l===void 0&&(l=e.mimeType||n.getResponseHeader("Content-Type"));if(l){for(i in u)if(u[i]&&u[i].test(l)){c.unshift(i);break}}if(c[0]in t)a=c[0];else{for(i in t){if(!c[0]||e.converters[i+" "+c[0]]){a=i;break}s||(s=i)}a=a||s}if(a)return a!==c[0]&&c.unshift(a),t[a]}function Cl(e,n,t,l){var i,a,s,u,c,d={},_=e.dataTypes.slice();if(_[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(a=_.shift();a;)if(e.responseFields[a]&&(t[e.responseFields[a]]=n),!c&&l&&e.dataFilter&&(n=e.dataFilter(n,e.dataType)),c=a,a=_.shift(),a){if(a==="*")a=c;else if(c!=="*"&&c!==a){if(s=d[c+" "+a]||d["* "+a],!s){for(i in d)if(u=i.split(" "),u[1]===a&&(s=d[c+" "+u[0]]||d["* "+u[0]],s)){s===!0?s=d[i]:d[i]!==!0&&(a=u[0],_.unshift(u[1]));break}}if(s!==!0)if(s&&e.throws)n=s(n);else try{n=s(n)}catch(A){return{state:"parsererror",error:s?A:"No conversion from "+c+" to "+a}}}}return{state:"success",data:n}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:nn.href,type:"GET",isLocal:El.test(nn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,n){return n?Tn(Tn(e,r.ajaxSettings),n):Tn(r.ajaxSettings,e)},ajaxPrefilter:wt(Et),ajaxTransport:wt(Bn),ajax:function(e,n){typeof e=="object"&&(n=e,e=void 0),n=n||{};var t,l,i,a,s,u,c,d,_,A,f=r.ajaxSetup({},n),v=f.context||f,j=f.context&&(v.nodeType||v.jquery)?r(v):r.event,q=r.Deferred(),T=r.Callbacks("once memory"),Z=f.statusCode||{},Y={},he={},fe="canceled",P={readyState:0,getResponseHeader:function(U){var J;if(c){if(!a)for(a={};J=xl.exec(i);)a[J[1].toLowerCase()+" "]=(a[J[1].toLowerCase()+" "]||[]).concat(J[2]);J=a[U.toLowerCase()+" "]}return J==null?null:J.join(", ")},getAllResponseHeaders:function(){return c?i:null},setRequestHeader:function(U,J){return c==null&&(U=he[U.toLowerCase()]=he[U.toLowerCase()]||U,Y[U]=J),this},overrideMimeType:function(U){return c==null&&(f.mimeType=U),this},statusCode:function(U){var J;if(U)if(c)P.always(U[P.status]);else for(J in U)Z[J]=[Z[J],U[J]];return this},abort:function(U){var J=U||fe;return t&&t.abort(J),De(0,J),this}};if(q.promise(P),f.url=((e||f.url||nn.href)+"").replace(wl,nn.protocol+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(pe)||[""],f.crossDomain==null){u=B.createElement("a");try{u.href=f.url,u.href=u.href,f.crossDomain=In.protocol+"//"+In.host!=u.protocol+"//"+u.host}catch{f.crossDomain=!0}}if(f.data&&f.processData&&typeof f.data!="string"&&(f.data=r.param(f.data,f.traditional)),kt(Et,f,n,P),c)return P;d=r.event&&f.global,d&&r.active++===0&&r.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ml.test(f.type),l=f.url.replace(yl,""),f.hasContent?f.data&&f.processData&&(f.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(f.data=f.data.replace(vl,"+")):(A=f.url.slice(l.length),f.data&&(f.processData||typeof f.data=="string")&&(l+=(Ln.test(l)?"&":"?")+f.data,delete f.data),f.cache===!1&&(l=l.replace(bl,"$1"),A=(Ln.test(l)?"&":"?")+"_="+vt.guid+++A),f.url=l+A),f.ifModified&&(r.lastModified[l]&&P.setRequestHeader("If-Modified-Since",r.lastModified[l]),r.etag[l]&&P.setRequestHeader("If-None-Match",r.etag[l])),(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&P.setRequestHeader("Content-Type",f.contentType),P.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", "+Mt+"; q=0.01":""):f.accepts["*"]);for(_ in f.headers)P.setRequestHeader(_,f.headers[_]);if(f.beforeSend&&(f.beforeSend.call(v,P,f)===!1||c))return P.abort();if(fe="abort",T.add(f.complete),P.done(f.success),P.fail(f.error),t=kt(Bn,f,n,P),!t)De(-1,"No Transport");else{if(P.readyState=1,d&&j.trigger("ajaxSend",[P,f]),c)return P;f.async&&f.timeout>0&&(s=E.setTimeout(function(){P.abort("timeout")},f.timeout));try{c=!1,t.send(Y,De)}catch(U){if(c)throw U;De(-1,U)}}function De(U,J,ln,Rn){var me,rn,_e,we,ke,ae=J;c||(c=!0,s&&E.clearTimeout(s),t=void 0,i=Rn||"",P.readyState=U>0?4:0,me=U>=200&&U<300||U===304,ln&&(we=kl(f,P,ln)),!me&&r.inArray("script",f.dataTypes)>-1&&r.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),we=Cl(f,we,P,me),me?(f.ifModified&&(ke=P.getResponseHeader("Last-Modified"),ke&&(r.lastModified[l]=ke),ke=P.getResponseHeader("etag"),ke&&(r.etag[l]=ke)),U===204||f.type==="HEAD"?ae="nocontent":U===304?ae="notmodified":(ae=we.state,rn=we.data,_e=we.error,me=!_e)):(_e=ae,(U||!ae)&&(ae="error",U<0&&(U=0))),P.status=U,P.statusText=(J||ae)+"",me?q.resolveWith(v,[rn,ae,P]):q.rejectWith(v,[P,ae,_e]),P.statusCode(Z),Z=void 0,d&&j.trigger(me?"ajaxSuccess":"ajaxError",[P,f,me?rn:_e]),T.fireWith(v,[P,ae]),d&&(j.trigger("ajaxComplete",[P,f]),--r.active||r.event.trigger("ajaxStop")))}return P},getJSON:function(e,n,t){return r.get(e,n,t,"json")},getScript:function(e,n){return r.get(e,void 0,n,"script")}}),r.each(["get","post"],function(e,n){r[n]=function(t,l,i,a){return I(l)&&(a=a||i,i=l,l=void 0),r.ajax(r.extend({url:t,type:n,dataType:a,data:l,success:i},r.isPlainObject(t)&&t))}}),r.ajaxPrefilter(function(e){var n;for(n in e.headers)n.toLowerCase()==="content-type"&&(e.contentType=e.headers[n]||"")}),r._evalUrl=function(e,n,t){return r.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(l){r.globalEval(l,n,t)}})},r.fn.extend({wrapAll:function(e){var n;return this[0]&&(I(e)&&(e=e.call(this[0])),n=r(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(e){return I(e)?this.each(function(n){r(this).wrapInner(e.call(this,n))}):this.each(function(){var n=r(this),t=n.contents();t.length?t.wrapAll(e):n.append(e)})},wrap:function(e){var n=I(e);return this.each(function(t){r(this).wrapAll(n?e.call(this,t):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(e){return!r.expr.pseudos.visible(e)},r.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new E.XMLHttpRequest}catch{}};var Sl={0:200,1223:204},tn=r.ajaxSettings.xhr();L.cors=!!tn&&"withCredentials"in tn,L.ajax=tn=!!tn,r.ajaxTransport(function(e){var n,t;if(L.cors||tn&&!e.crossDomain)return{send:function(l,i){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),!e.crossDomain&&!l["X-Requested-With"]&&(l["X-Requested-With"]="XMLHttpRequest");for(a in l)s.setRequestHeader(a,l[a]);n=function(u){return function(){n&&(n=t=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,u==="abort"?s.abort():u==="error"?typeof s.status!="number"?i(0,"error"):i(s.status,s.statusText):i(Sl[s.status]||s.status,s.statusText,(s.responseType||"text")!=="text"||typeof s.responseText!="string"?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),t=s.onerror=s.ontimeout=n("error"),s.onabort!==void 0?s.onabort=t:s.onreadystatechange=function(){s.readyState===4&&E.setTimeout(function(){n&&t()})},n=n("abort");try{s.send(e.hasContent&&e.data||null)}catch(u){if(n)throw u}},abort:function(){n&&n()}}}),r.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return r.globalEval(e),e}}}),r.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),r.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var n,t;return{send:function(l,i){n=r("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",t=function(a){n.remove(),t=null,a&&i(a.type==="error"?404:200,a.type)}),B.head.appendChild(n[0])},abort:function(){t&&t()}}}});var Ct=[],On=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ct.pop()||r.expando+"_"+vt.guid++;return this[e]=!0,e}}),r.ajaxPrefilter("json jsonp",function(e,n,t){var l,i,a,s=e.jsonp!==!1&&(On.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&On.test(e.data)&&"data");if(s||e.dataTypes[0]==="jsonp")return l=e.jsonpCallback=I(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(On,"$1"+l):e.jsonp!==!1&&(e.url+=(Ln.test(e.url)?"&":"?")+e.jsonp+"="+l),e.converters["script json"]=function(){return a||r.error(l+" was not called"),a[0]},e.dataTypes[0]="json",i=E[l],E[l]=function(){a=arguments},t.always(function(){i===void 0?r(E).removeProp(l):E[l]=i,e[l]&&(e.jsonpCallback=n.jsonpCallback,Ct.push(l)),a&&I(i)&&i(a[0]),a=i=void 0}),"script"}),L.createHTMLDocument=function(){var e=B.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),r.parseHTML=function(e,n,t){if(typeof e!="string")return[];typeof n=="boolean"&&(t=n,n=!1);var l,i,a;return n||(L.createHTMLDocument?(n=B.implementation.createHTMLDocument(""),l=n.createElement("base"),l.href=B.location.href,n.head.appendChild(l)):n=B),i=Jn.exec(e),a=!t&&[],i?[n.createElement(i[1])]:(i=lt([e],n,a),a&&a.length&&r(a).remove(),r.merge([],i.childNodes))},r.fn.load=function(e,n,t){var l,i,a,s=this,u=e.indexOf(" ");return u>-1&&(l=je(e.slice(u)),e=e.slice(0,u)),I(n)?(t=n,n=void 0):n&&typeof n=="object"&&(i="POST"),s.length>0&&r.ajax({url:e,type:i||"GET",dataType:"html",data:n}).done(function(c){a=arguments,s.html(l?r("<div>").append(r.parseHTML(c)).find(l):c)}).always(t&&function(c,d){s.each(function(){t.apply(this,a||[c.responseText,d,c])})}),this},r.expr.pseudos.animated=function(e){return r.grep(r.timers,function(n){return e===n.elem}).length},r.offset={setOffset:function(e,n,t){var l,i,a,s,u,c,d,_=r.css(e,"position"),A=r(e),f={};_==="static"&&(e.style.position="relative"),u=A.offset(),a=r.css(e,"top"),c=r.css(e,"left"),d=(_==="absolute"||_==="fixed")&&(a+c).indexOf("auto")>-1,d?(l=A.position(),s=l.top,i=l.left):(s=parseFloat(a)||0,i=parseFloat(c)||0),I(n)&&(n=n.call(e,t,r.extend({},u))),n.top!=null&&(f.top=n.top-u.top+s),n.left!=null&&(f.left=n.left-u.left+i),"using"in n?n.using.call(e,f):A.css(f)}},r.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(i){r.offset.setOffset(this,e,i)});var n,t,l=this[0];if(l)return l.getClientRects().length?(n=l.getBoundingClientRect(),t=l.ownerDocument.defaultView,{top:n.top+t.pageYOffset,left:n.left+t.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,n,t,l=this[0],i={top:0,left:0};if(r.css(l,"position")==="fixed")n=l.getBoundingClientRect();else{for(n=this.offset(),t=l.ownerDocument,e=l.offsetParent||t.documentElement;e&&(e===t.body||e===t.documentElement)&&r.css(e,"position")==="static";)e=e.parentNode;e&&e!==l&&e.nodeType===1&&(i=r(e).offset(),i.top+=r.css(e,"borderTopWidth",!0),i.left+=r.css(e,"borderLeftWidth",!0))}return{top:n.top-i.top-r.css(l,"marginTop",!0),left:n.left-i.left-r.css(l,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&r.css(e,"position")==="static";)e=e.offsetParent;return e||Se})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var t=n==="pageYOffset";r.fn[e]=function(l){return be(this,function(i,a,s){var u;if(Te(i)?u=i:i.nodeType===9&&(u=i.defaultView),s===void 0)return u?u[n]:i[a];u?u.scrollTo(t?u.pageXOffset:s,t?s:u.pageYOffset):i[a]=s},e,l,arguments.length)}}),r.each(["top","left"],function(e,n){r.cssHooks[n]=ct(L.pixelPosition,function(t,l){if(l)return l=$e(t,n),Mn.test(l)?r(t).position()[n]+"px":l})}),r.each({Height:"height",Width:"width"},function(e,n){r.each({padding:"inner"+e,content:n,"":"outer"+e},function(t,l){r.fn[l]=function(i,a){var s=arguments.length&&(t||typeof i!="boolean"),u=t||(i===!0||a===!0?"margin":"border");return be(this,function(c,d,_){var A;return Te(c)?l.indexOf("outer")===0?c["inner"+e]:c.document.documentElement["client"+e]:c.nodeType===9?(A=c.documentElement,Math.max(c.body["scroll"+e],A["scroll"+e],c.body["offset"+e],A["offset"+e],A["client"+e])):_===void 0?r.css(c,d,u):r.style(c,d,_,u)},n,s?i:void 0,s)}})}),r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,n){r.fn[n]=function(t){return this.on(n,t)}}),r.fn.extend({bind:function(e,n,t){return this.on(e,null,n,t)},unbind:function(e,n){return this.off(e,null,n)},delegate:function(e,n,t,l){return this.on(n,e,t,l)},undelegate:function(e,n,t){return arguments.length===1?this.off(e,"**"):this.off(n,e||"**",t)},hover:function(e,n){return this.on("mouseenter",e).on("mouseleave",n||e)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){r.fn[n]=function(t,l){return arguments.length>0?this.on(n,null,t,l):this.trigger(n)}});var jl=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;r.proxy=function(e,n){var t,l,i;if(typeof n=="string"&&(t=e[n],n=e,e=t),!!I(e))return l=K.call(arguments,2),i=function(){return e.apply(n||this,l.concat(K.call(arguments)))},i.guid=e.guid=e.guid||r.guid++,i},r.holdReady=function(e){e?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=Q,r.isFunction=I,r.isWindow=Te,r.camelCase=de,r.type=Oe,r.now=Date.now,r.isNumeric=function(e){var n=r.type(e);return(n==="number"||n==="string")&&!isNaN(e-parseFloat(e))},r.trim=function(e){return e==null?"":(e+"").replace(jl,"$1")};var Ll=E.jQuery,Dl=E.$;return r.noConflict=function(e){return E.$===r&&(E.$=Dl),e&&E.jQuery===r&&(E.jQuery=Ll),r},typeof F>"u"&&(E.jQuery=E.$=r),r})}(jquery)),jquery.exports}(function(module,exports){(function(E,F){module.exports=F(requireJquery(),reactExports)})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)},"./src/components/MapContainer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)},"./src/components/MultiMap/MultiMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)},"./src/components/MultiMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)},"./src/components/VectorMap/VectorMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)},"./src/components/VectorMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)},"./src/utils/builders/AttributeSeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)},"./src/utils/builders/LabelsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)},"./src/utils/builders/LabelsPropsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)},"./src/utils/builders/MarkerBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)},"./src/utils/builders/MultiMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)},"./src/utils/builders/SeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)},"./src/utils/builders/StyleBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)},"./src/utils/builders/VectorMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)},"./src/utils/builders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)},"./src/utils/builders/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)},"../../node_modules/classnames/index.js":(module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,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 */ "data:image/gif;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)},"../../node_modules/css-loader/dist/runtime/api.js":module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)},"../../node_modules/css-loader/dist/runtime/getUrl.js":module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./src/components/MapContainer/styles.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)},"../jquery-mousewheel/jquery.mousewheel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)},"../jvectormap/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)},"../jvectormap/jquery.jvectormap.min.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)},"data:image/gif;base64,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":module=>{eval(`module.exports = "data:image/gif;base64,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";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,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?`)},jquery:C=>{C.exports=__WEBPACK_EXTERNAL_MODULE_jquery__},react:C=>{C.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(C){var E=__webpack_module_cache__[C];if(E!==void 0)return E.exports;var F=__webpack_module_cache__[C]={id:C,exports:{}};return __webpack_modules__[C](F,F.exports,__webpack_require__),F.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=C=>{var E=C&&C.__esModule?()=>C.default:()=>C;return __webpack_require__.d(E,{a:E}),E},__webpack_require__.d=(C,E)=>{for(var F in E)__webpack_require__.o(E,F)&&!__webpack_require__.o(C,F)&&Object.defineProperty(C,F,{enumerable:!0,get:E[F]})},__webpack_require__.o=(C,E)=>Object.prototype.hasOwnProperty.call(C,E),__webpack_require__.r=C=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})})(dist);var distExports=dist.exports;const name="africa_merc",content={insets:[{width:900,top:0,height:1098.1844132357712,bbox:[{y:-4488933925045847e-9,x:-2.8224395658800667e6},{y:5939029737157818e-9,x:5723636287018039e-9}],left:0}],paths:{BF:{path:"M264.11,349.94l-0.39,0.61l0.64,1.41l-0.24,0.61l0.45,4.58l-0.35,0.78l0.96,2.97l-0.52,0.39l-1.13,-1.13l-1.14,-1.93l-3.05,-2.53l-6.67,-0.25l-5.65,2.09l-0.81,1.12l-1.3,-0.33l-0.81,-0.59l-1.06,0.11l-0.97,-0.44l-2.77,-1.96l-0.31,-1.37l-1.35,-2.43l-2.01,-0.98l-1.43,0.04l-1.31,-1.04l0.73,-3.96l-0.35,-3.12l1.58,-1.02l1.2,-3.09l0.23,-1.92l-0.71,-1.91l0.01,-1.46l1.9,-1.48l3.57,-0.77l1.28,-0.58l1.37,-0.99l1.89,-2.22l0.18,-3.2l-0.56,-0.9l2.84,-1.64l-0.0,-1.18l-1.15,-2.65l1.92,-2.06l1.07,-0.84l1.02,-0.2l4.85,2.62l2.89,-1.2l0.65,-1.71l0.16,-2.9l2.6,0.34l0.84,-0.25l0.52,-0.67l-0.09,-1.25l0.56,-1.83l1.04,-1.39l2.19,-1.8l1.28,-0.48l4.22,1.22l0.87,-0.56l0.92,-2.96l3.12,-0.6l2.38,-1.43l5.16,-2.32l3.42,-2.78l2.42,-0.33l1.68,0.78l1.87,-0.54l4.84,1.63l-0.54,4.72l2.53,3.17l-0.28,1.34l0.92,2.13l2.22,3.25l3.45,1.26l0.77,0.58l0.62,1.13l1.5,0.85l-1.55,-0.35l-0.49,0.28l-0.2,2.44l0.31,1.86l1.36,0.55l5.62,4.43l2.81,0.25l2.58,-1.22l0.76,0.11l0.56,0.67l0.68,2.09l-1.55,0.41l-0.36,0.74l0.45,1.08l3.35,4.41l-1.06,2.16l-3.38,3.06l-1.4,-0.26l-2.79,0.47l-0.58,-0.54l-1.85,0.09l-1.35,1.86l-1.84,0.43l-1.01,2.25l-1.1,0.01l-0.52,0.81l-4.54,0.45l-0.36,-0.43l-9.2,-2.09l-0.8,0.94l-1.17,0.12l-0.64,0.91l-1.44,0.84l-0.73,-0.69l-3.99,-0.25l-21.0,0.14l-0.48,0.5l-0.82,3.03l-0.1,1.7l0.51,1.27l0.95,0.91Z",name:"Burkina Faso"},DJ:{path:"M800.21,323.88l2.49,-0.9l2.06,2.62l1.22,3.07l-0.3,1.01l-1.15,1.31l-2.56,1.64l-2.88,1.06l-1.89,2.1l-1.18,-0.12l-0.43,0.5l0.21,0.81l0.84,0.38l3.96,-1.07l2.72,0.22l0.63,0.51l-3.48,5.5l-1.24,-0.1l-1.52,-0.82l-1.29,-0.06l-7.07,1.66l-1.47,-0.35l-0.35,-6.93l0.5,-1.42l2.13,-2.28l4.76,-6.9l0.4,-0.18l2.18,1.6l0.68,0.03l1.08,-0.76l0.97,-2.13Z",name:"Djibouti"},BI:{path:"M645.42,524.64l-3.4,-6.8l-0.35,-5.32l-0.5,-0.69l-0.91,-0.23l0.15,-3.05l-2.45,-3.14l0.12,-1.27l0.29,-0.52l1.17,0.22l1.0,0.53l0.56,1.26l0.68,0.41l3.89,-0.15l2.23,-1.13l0.73,-4.22l1.87,0.92l1.43,-0.81l1.84,-0.36l1.16,0.82l-1.21,2.39l0.44,0.94l-0.49,1.29l0.1,0.79l1.2,0.8l3.01,0.8l0.04,2.71l-1.83,0.84l-0.27,0.31l0.11,0.7l-2.25,1.87l-0.64,1.8l-1.27,1.37l-1.42,2.74l-2.26,2.52l-2.81,1.65Z",name:"Burundi"},BJ:{path:"M308.12,343.38l0.86,-0.91l0.63,0.14l0.6,-0.3l0.86,-2.12l1.82,-0.46l1.23,-1.78l1.22,-0.03l0.73,0.6l2.95,-0.5l1.71,0.2l3.64,-3.3l0.95,-1.87l0.61,-2.0l-0.56,-2.48l3.11,-0.82l1.69,-0.99l0.63,0.14l3.09,2.91l1.79,2.32l1.82,0.94l1.42,1.52l-1.11,2.18l-0.07,1.4l2.7,3.91l0.46,3.64l0.9,1.83l-0.57,1.94l-0.76,-0.15l-0.67,0.27l-0.97,1.58l0.01,0.66l0.72,1.14l-0.93,2.68l-2.37,1.13l-0.44,0.68l0.04,1.15l-2.2,2.51l0.07,1.74l-1.05,2.48l-2.97,0.39l-0.35,0.34l-0.49,3.16l-0.55,10.8l0.42,3.24l0.74,1.59l-0.4,0.88l0.07,3.85l-0.41,1.09l0.59,3.13l-0.76,3.69l-10.19,1.27l-0.39,-1.8l-1.68,-2.19l-0.17,-0.63l0.25,-0.77l-0.62,-2.5l0.9,-0.43l-0.29,-24.32l-0.51,-1.31l-2.01,-2.5l-0.45,-2.4l-0.22,-5.19l-6.61,-4.6l0.26,-3.61l1.26,-3.15Z",name:"Benin"},ZA:{path:"M740.96,1097.59l-2.28,-0.05l-0.09,-0.24l0.8,-1.06l0.91,0.17l0.85,0.71l-0.19,0.47ZM513.38,900.9l-0.7,-2.62l0.21,-1.66l1.33,-1.01l-0.39,-2.47l-2.04,-4.22l-1.28,-0.99l-0.91,-2.03l-0.98,-0.84l-0.44,-1.5l-0.88,-1.11l-0.28,-1.65l0.86,-1.18l1.03,0.77l1.18,-0.44l1.57,-1.49l0.87,-2.05l-0.14,-5.51l-1.18,-5.29l-6.3,-10.05l-3.86,-7.8l-1.84,-4.65l-2.82,-9.45l-2.49,-5.34l-3.21,-5.1l1.73,-1.32l1.58,-0.52l1.5,-4.43l0.56,-0.64l1.16,-0.41l0.86,0.53l0.67,1.56l1.72,0.85l0.27,0.95l-0.5,1.31l0.06,0.66l1.46,2.98l2.93,0.93l3.22,0.57l1.61,0.83l2.44,0.19l3.44,-0.41l2.7,0.18l2.24,0.79l1.81,0.1l1.15,-0.65l0.66,-2.1l1.14,-0.3l0.89,-0.71l0.71,-1.19l1.41,-0.86l2.31,-0.69l1.14,0.02l0.41,-0.4l0.0,-47.45l3.58,2.78l0.95,1.44l4.2,9.88l0.27,3.04l-2.22,3.76l0.17,3.98l0.55,1.18l1.13,0.55l1.44,-0.49l2.34,0.55l4.45,-0.25l2.4,0.26l1.22,-0.7l1.03,-1.62l2.02,-0.54l1.07,-0.8l1.54,-2.55l4.44,-3.35l0.59,-0.94l2.78,-7.93l0.78,-1.05l1.09,-0.66l2.32,-0.56l1.32,0.29l3.19,1.79l2.71,2.22l1.0,0.35l2.5,0.09l1.72,1.43l4.86,0.97l1.68,-0.09l1.44,-0.73l2.47,0.03l2.89,-0.62l1.77,-1.58l3.74,-10.96l5.64,-1.71l0.76,-0.52l1.88,-2.34l2.53,-1.98l1.89,-7.02l1.09,-1.53l2.61,-1.9l2.17,-0.72l0.76,-0.56l0.84,-1.28l1.42,-0.33l0.28,-0.76l1.83,-1.39l0.14,-0.72l3.09,-3.57l1.9,-1.2l3.64,-0.73l1.74,-0.71l1.35,-1.16l0.83,-1.5l1.19,-0.72l6.13,-0.83l2.7,0.46l3.43,1.36l3.28,0.48l5.28,-0.48l1.78,0.21l2.22,1.03l2.84,10.99l0.18,2.65l3.01,5.34l2.14,7.16l-0.02,15.05l-0.75,1.95l0.26,2.14l-0.38,0.11l-5.35,-3.03l-1.1,0.13l-1.7,1.28l-1.4,1.79l-0.68,1.59l-2.73,4.2l-0.08,4.9l0.46,0.49l0.66,0.07l2.05,4.03l2.6,1.8l2.49,0.82l3.2,0.19l2.56,-0.05l0.39,-0.43l-0.14,-1.71l0.52,-4.36l3.87,0.65l5.77,-0.15l-0.36,2.53l-2.25,6.96l-1.43,7.84l-1.84,3.91l-1.01,1.58l-2.98,2.86l-1.48,0.9l-1.49,0.45l-5.23,5.96l-1.94,2.87l-1.74,4.21l-1.71,2.32l-4.74,8.72l-2.14,3.47l-3.69,4.77l-2.75,2.03l-2.96,2.81l-4.18,4.55l-3.19,4.03l-4.73,4.55l-2.78,2.03l-4.1,3.94l-1.17,0.61l-4.66,3.7l-3.32,2.23l-7.44,3.3l-5.07,-0.67l-2.27,0.37l-2.0,1.68l-0.28,2.32l-0.44,0.2l-4.57,-1.03l-2.1,0.17l-1.4,1.34l-0.86,1.43l-2.43,0.07l-4.83,-1.59l-5.73,-0.98l-1.51,-0.08l-3.59,1.32l-3.92,-0.25l-2.31,-0.75l-2.13,-0.0l-1.73,0.63l-2.14,0.3l-5.25,4.22l-2.62,0.01l-2.42,0.5l-4.2,-0.58l-1.45,0.33l-1.19,0.71l-2.94,0.37l-5.89,4.52l-1.88,-0.39l-2.39,-0.05l-2.75,-2.03l-0.67,-0.03l0.04,-1.51l-1.07,-1.2l-1.17,-0.04l-0.79,-0.94l-2.78,0.18l-0.24,-3.28l-0.94,-0.67l-2.93,0.12l-0.94,1.28l-0.05,1.48ZM623.54,826.81l-1.33,0.59l-5.08,7.67l-2.34,1.09l-0.45,0.35l-0.21,0.79l0.97,2.62l2.58,4.24l-0.03,1.23l0.48,0.99l1.3,0.77l3.08,3.21l3.48,0.64l1.11,-0.93l0.56,-1.91l2.78,-3.89l3.97,-0.62l2.01,-0.9l2.35,-1.65l0.64,-3.07l1.78,-1.85l1.17,-4.12l-1.08,-2.6l-4.17,-2.93l-3.9,-4.05l-2.18,0.42l-2.81,1.14l-3.25,2.32l-1.44,0.45Z",name:"South Africa"},BW:{path:"M592.94,685.21l-0.23,1.29l0.71,1.62l1.23,1.31l2.04,3.69l2.35,2.53l0.65,1.89l1.45,1.71l0.11,1.72l2.56,5.69l6.1,4.56l5.85,2.59l0.78,1.42l0.27,3.01l0.41,0.38l4.41,0.23l0.15,2.95l-0.37,3.93l2.09,2.55l2.0,3.69l0.64,0.39l5.66,0.98l5.59,1.76l-0.22,1.57l0.41,1.2l0.85,0.68l1.53,0.21l0.7,0.76l-1.8,0.16l-1.54,0.88l-0.9,1.57l-1.14,1.0l-1.61,0.66l-3.77,0.78l-2.01,1.27l-2.24,2.39l-1.09,1.44l-0.11,0.67l-1.81,1.36l-0.19,0.64l-1.22,0.2l-1.62,1.87l-2.2,0.74l-2.77,2.03l-1.27,1.81l-1.75,6.76l-2.49,1.95l-2.45,2.7l-3.1,0.74l-2.77,1.13l-3.86,11.13l-1.49,1.27l-2.54,0.51l-2.51,-0.03l-1.61,0.78l-1.29,0.05l-4.76,-0.95l-1.79,-1.45l-3.29,-0.37l-2.6,-2.15l-3.36,-1.88l-1.52,-0.35l-1.57,0.29l-1.61,0.52l-1.77,1.82l-3.29,8.78l-4.38,3.28l-1.55,2.56l-0.82,0.64l-1.99,0.53l-0.69,0.49l-1.05,1.68l-7.07,0.1l-2.33,-0.56l-1.57,0.49l-0.8,-1.08l-0.17,-3.68l2.21,-3.71l-0.28,-3.47l-4.29,-10.06l-1.09,-1.61l-4.12,-3.17l-0.04,-34.88l11.25,0.0l0.39,-0.32l0.05,-45.71l11.82,-1.47l14.08,-2.45l0.71,0.26l1.82,2.42l1.36,2.63l0.7,0.36l1.27,-0.47l2.42,-2.48l3.94,-2.46l1.22,-0.5l2.22,0.82l3.02,-2.29l1.27,-0.49l3.45,-0.4Z",name:"Botswana"},DZ:{path:"M221.33,106.43l3.01,0.12l2.54,-0.28l6.56,-1.71l1.94,-1.44l1.39,-1.51l2.48,-4.04l2.1,-1.12l5.33,-1.99l3.96,-2.92l3.22,-0.41l0.58,-0.33l0.65,-0.83l-0.07,-1.17l-2.33,-1.62l0.5,-2.21l-0.68,-3.43l0.66,-0.66l3.77,-0.19l5.04,-1.81l0.59,-0.83l0.62,-2.18l0.54,-0.3l4.78,-0.75l13.74,0.57l0.75,-0.29l0.24,-0.37l-0.41,-2.27l0.2,-0.71l1.95,-1.73l0.11,-0.47l-0.64,-1.3l-3.91,-3.18l-0.64,-1.19l-0.47,-2.68l-1.49,-3.4l0.55,-3.39l-0.97,-3.12l0.25,-2.94l-0.17,-2.63l-0.96,-2.67l0.64,-1.5l-1.33,-1.97l0.6,-2.06l-4.06,-3.38l-0.74,-1.15l3.07,0.07l2.93,-1.31l2.28,-1.75l1.83,-0.97l2.84,-3.02l1.95,-1.26l5.66,-2.74l2.73,0.61l1.87,-0.29l1.22,-1.1l1.18,-2.28l1.79,-1.37l7.68,-4.06l3.26,-1.07l12.67,-1.32l2.9,0.14l4.56,-2.69l6.34,-0.15l3.11,-1.48l11.32,-0.0l2.62,1.22l2.44,1.97l1.41,0.43l1.6,-0.43l3.49,-1.8l4.02,-0.97l2.16,-1.09l1.01,-1.6l1.46,-0.46l1.07,1.14l4.12,1.23l3.89,-0.72l0.26,-0.47l-0.27,-1.23l2.04,0.37l1.96,0.83l2.11,1.72l1.55,0.43l2.71,-0.78l4.91,-0.37l0.16,0.88l-1.62,0.94l-1.01,1.97l-1.55,1.22l-0.42,0.71l0.23,0.69l1.01,0.53l0.41,0.98l-1.18,8.21l0.84,2.22l-0.03,3.5l0.88,2.84l-0.88,1.56l-0.45,1.6l-0.37,3.51l-1.34,2.26l-3.26,2.12l-1.16,2.3l-2.75,2.48l-0.24,3.76l2.79,8.16l0.47,0.6l4.0,2.4l1.11,1.73l1.55,5.48l8.21,6.38l5.49,24.91l-2.21,1.41l-0.12,0.53l3.85,6.44l2.09,6.92l0.25,1.93l-0.31,5.46l0.5,6.89l0.66,3.36l-1.96,6.06l0.58,3.87l0.49,1.7l0.65,0.91l-0.12,2.66l-0.23,0.86l-4.32,2.91l-0.67,1.29l-0.17,1.45l0.36,1.16l6.44,9.51l0.31,3.6l1.07,3.37l1.7,2.74l1.86,1.47l0.68,0.05l2.78,-0.88l9.43,2.99l5.09,9.72l-52.32,33.31l-19.32,17.43l-0.94,0.51l-28.22,5.52l-2.21,-1.57l1.57,-2.5l0.16,-0.77l-0.64,-1.93l0.02,-2.8l-1.0,-1.06l-3.24,-1.4l-5.26,-1.29l-1.41,-1.75l-0.82,-0.55l-3.56,-0.37l-1.92,-0.69l-0.68,-0.5l-0.88,-2.2l-3.87,-2.08l-1.27,-1.11l0.08,-1.98l-0.49,-1.78l-66.42,-47.17l-11.74,-8.03l-36.96,-24.26l0.17,-18.52l11.35,-8.42l2.34,-0.58l3.78,-2.95l5.92,0.63l0.76,-0.23l1.04,-1.34l0.18,-1.81Z",name:"Algeria"},ET:{path:"M725.94,304.13l1.59,-0.59l1.43,-0.08l2.7,0.48l0.61,-0.33l0.82,-1.41l1.01,-0.41l0.96,0.84l1.77,2.57l1.17,0.25l3.75,-8.29l1.03,1.13l2.48,1.01l1.79,2.13l0.92,0.65l4.56,-0.66l2.86,-1.76l1.54,1.8l0.99,0.1l2.98,-0.78l2.55,0.44l1.76,0.7l2.76,-0.19l0.84,0.27l3.51,2.46l2.92,1.01l1.85,1.84l2.18,3.01l2.82,2.85l4.68,3.78l2.17,3.59l2.21,1.43l2.63,3.38l-4.31,6.38l-2.45,2.85l-0.34,3.37l0.4,5.21l0.27,0.35l2.11,0.48l6.99,-1.65l0.99,0.03l1.51,0.82l1.06,0.14l-1.56,1.92l-1.21,1.98l-0.07,0.61l1.49,2.74l0.69,2.01l2.69,3.34l1.34,0.64l1.39,3.11l2.16,2.81l1.75,0.63l4.76,4.17l34.61,11.71l10.92,0.04l-17.54,17.06l-17.34,18.63l-10.93,-0.52l-4.87,1.14l-5.48,2.54l-1.37,1.04l-1.78,2.72l-7.25,1.39l-2.4,0.75l-1.75,1.86l-6.41,0.41l-1.94,-0.21l-3.04,-2.61l-1.65,-1.03l-10.87,4.98l-2.27,3.3l-1.66,1.3l-6.08,-0.75l-4.27,-0.94l-5.97,-0.55l-13.9,-8.98l-10.28,-0.64l-2.84,-3.79l-0.07,-1.51l0.51,-2.54l-0.17,-1.57l-0.77,-0.93l-3.24,-0.88l-1.76,0.59l-0.34,-0.26l-0.05,-1.06l-2.16,-2.1l-1.1,-2.09l-0.32,-2.26l-3.0,-7.38l-1.7,-1.39l-1.03,-1.48l-2.35,-1.2l-2.43,-2.54l-0.51,-1.67l-1.49,-1.79l-2.88,-1.96l-5.15,-1.06l-2.36,-1.31l3.05,-5.94l7.75,-0.06l1.97,-1.84l-0.13,-11.22l0.91,-3.95l1.79,-4.04l-0.39,-4.06l1.71,-2.89l1.36,-0.92l2.44,1.52l0.66,-0.23l1.4,-1.31l0.53,-3.73l-0.08,-1.41l1.71,-6.29l1.65,-1.71l4.82,-7.9l1.58,-0.65l3.63,-0.7l0.37,-1.06l0.29,-3.47l0.59,-2.08l2.1,-4.32l0.66,-2.61l-0.02,-1.81l0.85,-2.93Z",name:"Ethiopia"},RW:{path:"M636.22,501.72l1.26,-0.91l1.11,-0.31l3.12,-3.45l0.23,-0.83l-1.49,-3.68l1.28,-1.64l2.53,-1.49l2.72,-0.58l0.72,1.41l1.45,-0.17l1.44,-1.01l2.6,-3.03l0.8,-0.44l0.3,0.02l0.44,1.46l1.5,1.94l1.0,0.44l0.5,0.61l0.54,1.12l0.07,4.67l0.54,0.99l0.12,1.02l-0.7,2.22l-2.66,0.4l-1.82,-1.01l-2.16,0.44l-1.14,0.76l-1.49,-0.87l-0.74,-0.03l-0.38,0.37l-0.64,4.18l-1.74,0.8l-3.47,0.17l-0.99,-1.54l-2.37,-0.94l-0.91,0.27l-0.5,1.03l-0.74,-0.57l-0.32,-1.82Z",name:"Rwanda"},TZ:{path:"M644.97,530.06l0.34,-4.62l0.73,-0.07l2.75,-1.8l2.34,-2.61l1.44,-2.77l1.32,-1.45l0.54,-1.65l2.32,-1.91l0.01,-0.89l1.73,-0.74l0.51,-1.14l-0.4,-2.84l-3.35,-0.98l-0.71,-0.33l-0.07,-0.35l0.54,-1.4l-0.47,-0.77l1.15,-2.31l2.85,-0.57l0.51,-0.36l0.71,-2.54l-0.14,-1.28l-0.54,-0.98l-0.11,-4.79l-1.25,-2.03l-0.99,-0.42l-1.36,-1.75l-0.34,-0.99l2.03,-0.25l1.49,-0.64l11.95,0.24l-0.4,3.55l-0.73,1.55l-1.17,5.25l0.13,4.05l1.26,2.01l-0.54,1.03l0.18,0.62l0.62,0.55l-0.27,0.69l0.26,1.29l0.42,0.3l0.53,-0.25l0.27,-0.85l0.41,-0.17l0.39,0.57l0.66,0.23l0.44,-0.51l-0.24,-2.1l1.79,-0.16l0.18,-0.44l-0.51,-1.29l1.57,-1.06l0.72,1.22l1.06,0.65l0.89,0.12l0.26,0.53l0.53,0.05l0.89,-0.65l0.47,0.59l1.22,0.21l-0.07,1.31l0.5,1.15l-0.97,0.97l-0.19,1.62l0.62,0.4l1.52,-1.4l0.71,-0.13l0.28,-0.57l-0.87,-2.06l0.09,-1.95l0.42,-0.49l1.11,-0.09l1.72,0.93l2.65,0.47l0.49,-0.38l0.02,-0.58l4.25,-3.12l-0.1,-1.24l-0.74,-0.36l-2.13,0.64l-3.59,-0.58l1.78,-0.61l1.16,-0.01l0.39,-0.48l-0.77,-1.09l-1.56,-0.14l0.58,-0.45l1.09,0.08l1.33,-0.78l0.22,-0.91l0.88,-0.93l-0.29,-0.75l0.22,-0.55l2.55,0.33l0.33,-0.73l-1.08,-0.91l0.08,-0.38l1.28,-0.24l0.04,-0.69l-0.44,-0.51l1.47,-1.96l41.71,23.3l0.4,2.07l-0.91,2.38l0.09,0.83l1.23,0.54l1.04,1.59l16.48,11.87l-2.76,9.35l-0.79,1.29l-1.08,2.97l-0.19,2.38l0.91,3.37l1.26,1.46l1.69,1.2l1.16,1.47l0.67,1.49l2.25,0.91l0.72,1.44l-0.25,0.93l-0.99,0.99l-0.94,1.59l-0.81,2.29l-0.02,3.19l0.68,0.29l0.28,-0.26l0.72,0.49l0.13,2.06l-1.16,2.7l-0.42,2.59l0.86,3.29l1.26,1.68l-0.33,1.1l2.14,2.84l-0.15,2.61l1.73,5.03l0.08,0.72l-0.61,0.9l0.27,0.62l1.51,0.24l1.23,1.46l1.38,0.17l3.45,2.24l0.64,0.91l-5.28,4.03l-1.96,1.06l-2.98,0.79l-2.85,1.72l-1.64,0.49l-2.22,0.02l-2.26,0.74l-3.43,2.12l-1.86,-1.1l-1.74,-0.43l-3.32,0.24l-0.55,0.43l-0.66,1.94l-1.1,1.06l-2.05,1.08l-1.85,0.4l-1.7,-0.27l-2.93,-1.44l-1.38,0.08l-2.36,1.35l-1.68,0.35l-2.39,-0.11l-1.08,-0.34l-0.27,-0.74l-1.09,-0.86l-2.25,-1.07l-1.77,0.1l-0.92,0.92l-1.46,0.75l-6.7,-0.3l-0.8,-2.02l-0.72,-0.67l-0.78,-0.14l-1.78,-2.87l0.71,-3.21l-0.06,-1.08l-0.9,-2.24l-0.18,-3.38l-0.59,-2.67l-2.47,-3.66l-2.72,-2.31l-1.18,-0.56l-0.46,0.09l-0.62,0.96l0.06,1.0l-2.57,-0.86l-3.12,0.15l-1.19,-1.09l-2.29,-0.28l-1.74,-1.14l-0.85,0.04l-4.84,-2.2l-0.8,-0.73l-2.44,-0.36l-1.17,-0.63l-1.97,-0.2l-0.31,-1.3l-1.28,-0.52l-1.64,0.09l-1.18,-1.05l-0.39,-1.22l-1.0,-0.7l-1.39,-0.63l-1.67,0.03l-0.42,-1.69l-2.07,-2.5l-0.06,-1.31l-2.75,-5.03l-1.4,-1.86l-0.05,-1.91l-0.96,-2.75l0.52,-0.82l-0.01,-1.05l-0.42,-0.83l-0.91,-0.88l-1.81,-2.81l-1.67,-1.67l-1.13,-0.35l-1.39,0.42l-2.51,-2.67l0.27,-2.19l1.84,-0.96l0.58,-1.21l-1.05,-2.93l-1.22,-1.91l0.69,-3.57l-0.3,-1.39l-0.66,-0.88l-1.43,-0.88ZM762.78,566.25l-0.45,-0.03l2.18,-1.96l-0.46,1.08l-0.77,0.25l-0.51,0.66ZM764.47,530.96l-0.18,3.42l-0.94,1.85l-0.66,-0.51l0.6,-2.83l-0.24,-1.8l1.42,-0.13ZM760.15,545.52l0.83,2.31l-0.43,0.34l-0.52,-0.96l-0.74,-0.16l-0.92,-0.93l-0.6,-0.04l-0.52,-0.88l0.25,-1.03l-0.15,-1.61l1.05,-1.59l0.23,1.83l0.76,1.94l0.77,0.77ZM683.58,496.01l0.38,0.28l1.24,-0.06l0.79,1.44l-3.05,-1.0l-0.14,-1.03l0.6,-0.17l0.18,0.55ZM670.5,499.14l0.64,0.7l1.71,-0.3l-0.03,0.36l-1.27,0.27l-0.41,0.62l-0.7,-0.98l0.06,-0.68Z",name:"Tanzania"},GQ:{path:"M410.07,460.1l-1.07,-0.77l-1.18,-0.22l1.11,-3.0l1.66,-1.63l0.99,-2.55l1.02,-1.6l-0.11,-3.49l1.8,0.85l15.42,0.0l0.07,12.9l-14.92,-0.05l-1.36,0.5l-1.02,-0.39l-0.73,-0.94l-1.1,0.01l-0.59,0.36ZM399.74,429.03l1.81,-0.01l0.26,0.34l-0.04,0.66l-1.74,2.58l-0.37,1.17l-0.56,0.76l-0.36,0.05l-1.91,-0.51l-0.27,-0.45l0.22,-1.02l1.41,-0.56l0.73,-2.22l0.81,-0.78Z",name:"Eq. Guinea"},NA:{path:"M466.74,749.28l0.37,0.15l0.54,-0.3l0.29,-1.53l0.06,-1.42l-0.77,-3.31l-1.69,-3.35l-4.07,-5.31l-1.58,-3.72l-4.54,-6.97l-3.29,-9.11l-1.52,-2.04l-6.83,-13.67l-1.6,-2.29l-3.3,-3.38l-1.06,-2.49l-2.02,-3.25l-0.48,-2.99l0.08,-5.78l1.56,-0.23l1.36,-0.71l0.98,-0.04l1.23,0.55l4.12,-0.01l6.37,-2.96l4.08,0.81l1.02,1.24l1.56,1.13l2.97,1.96l0.99,0.26l4.73,-0.26l46.65,0.14l0.82,0.42l2.79,3.26l2.88,1.28l5.01,0.28l3.11,0.53l6.52,-0.06l2.21,0.28l2.71,1.33l1.59,0.31l4.32,-0.79l1.91,0.08l1.68,0.46l33.47,-6.39l7.59,0.75l1.71,1.03l1.23,1.24l-3.16,0.37l-1.47,0.56l-2.97,2.23l-1.88,-0.85l-1.59,0.58l-2.92,1.66l-3.54,3.33l-0.85,0.34l-1.39,-2.61l-1.91,-2.55l-1.28,-0.5l-14.2,2.46l-9.11,1.33l-3.01,0.15l-0.38,0.4l0.04,45.61l-11.33,0.0l-0.4,0.4l0.04,83.3l-3.34,0.73l-1.64,0.99l-0.77,1.24l-0.76,0.6l-1.24,0.37l-0.49,0.59l0.03,1.11l-0.3,0.5l-0.78,0.39l-1.43,-0.13l-2.26,-0.79l-2.8,-0.19l-3.43,0.41l-2.32,-0.18l-1.49,-0.8l-3.28,-0.59l-2.72,-0.87l-1.09,-2.45l0.45,-1.8l-0.33,-1.26l-0.65,-0.72l-1.18,-0.33l-0.68,-1.56l-1.21,-0.79l-1.79,0.48l-0.85,0.89l-1.42,4.33l-1.43,0.4l-1.93,1.49l-6.18,-5.92l-1.97,-2.42l-5.01,-9.04l-1.8,-6.38l-0.1,-1.4l0.45,-1.06l-0.28,-1.21l-0.61,-1.28l-1.4,-1.31l-0.41,-4.55l-1.0,-3.04l0.21,-2.42l-0.53,-3.75l0.2,-2.87l-0.81,-3.17l-1.66,-3.16l-1.46,-4.38l-0.32,-11.71l-0.81,-3.96l0.15,-0.41Z",name:"Namibia"},NE:{path:"M321.81,326.71l1.53,-0.41l0.4,-0.9l-0.21,-1.1l-1.45,-2.14l-1.96,-0.1l-1.94,1.12l-2.45,-0.25l-5.39,-4.33l-1.15,-0.38l-0.09,-3.2l1.81,0.33l0.68,-0.44l-0.04,-0.61l-2.08,-1.3l-0.5,-1.01l-1.0,-0.76l-3.25,-1.12l-2.12,-3.1l-0.8,-1.82l0.25,-1.5l-2.48,-2.95l0.68,-5.22l5.45,0.19l2.78,-0.36l4.15,-3.51l19.81,-0.83l0.66,-1.05l5.16,0.85l0.46,-0.35l0.17,-1.39l2.04,-1.78l1.66,-0.82l1.31,-3.13l0.79,-2.98l1.26,-2.07l0.73,-2.83l0.23,-4.52l0.38,-0.58l-0.08,-26.16l17.52,-3.56l1.15,-0.6l19.35,-17.45l52.45,-33.4l17.53,4.26l1.29,0.73l7.36,6.42l0.48,-0.02l8.29,-4.54l2.17,13.05l0.16,5.2l1.36,1.49l3.49,5.45l-0.68,1.14l0.55,1.78l4.36,4.78l-2.64,5.44l-3.05,36.9l-12.92,14.1l-6.58,9.54l-1.95,4.09l-2.24,2.97l1.66,8.04l-1.61,0.03l-1.32,0.39l-1.59,1.2l-3.77,1.5l-2.64,1.54l-1.7,1.59l-0.55,1.14l-3.62,0.02l-1.52,-1.21l-3.53,-1.29l-3.33,-0.68l-5.41,-0.22l-5.67,0.5l-3.48,0.73l-1.75,0.82l-1.44,0.92l-3.55,3.78l-4.66,-0.12l-5.18,-1.02l-3.39,-1.79l-4.22,-2.78l-3.26,-0.66l-0.74,0.08l-4.95,2.72l-2.18,0.27l-1.39,1.03l-1.14,-0.09l-1.38,-1.07l-2.54,-3.66l-3.47,-3.07l-1.55,-0.13l-8.22,-2.51l-1.61,0.46l-1.39,0.94l-4.83,-0.04l-3.14,0.71l-1.76,0.73l-2.05,1.72l-1.11,0.53l-0.89,5.09l-0.54,1.39l-1.02,1.84l-3.62,3.19l-0.08,6.65l-0.33,1.11l0.59,1.47l-0.27,0.23l-1.57,-1.63l-1.7,-0.85l-1.78,-2.3l-3.39,-3.12l-1.09,-0.17l-1.79,1.02l-3.36,0.92l-0.28,0.74l0.48,2.69l-3.22,-4.64Z",name:"Niger"},NG:{path:"M338.88,397.0l2.54,-1.31l-0.03,-0.72l-0.68,-0.18l-3.28,0.84l-1.28,1.52l-6.76,0.28l0.76,-3.45l-0.58,-3.22l0.4,-1.07l-0.07,-3.84l0.41,-1.06l-0.77,-1.74l-0.38,-3.04l0.54,-10.67l0.44,-2.82l3.16,-0.57l0.81,-1.34l0.44,-1.57l-0.11,-1.56l2.14,-2.38l0.08,-1.47l2.55,-1.35l0.66,-1.32l0.54,-1.91l-0.79,-1.5l0.27,-0.68l0.61,-0.7l0.99,0.13l0.54,-0.54l0.61,-2.2l-0.92,-2.03l-0.46,-3.64l-2.67,-3.83l0.03,-1.03l0.7,-1.49l1.32,-1.62l-0.59,-1.62l0.33,-1.05l0.07,-6.48l3.4,-2.85l1.15,-2.03l0.62,-1.59l0.68,-4.66l1.0,-0.47l2.05,-1.73l4.52,-1.3l4.94,0.02l1.56,-1.01l1.31,-0.38l8.03,2.5l1.3,0.04l3.27,2.91l2.53,3.65l1.77,1.31l1.51,0.1l1.52,-1.07l2.17,-0.26l5.34,-2.76l2.96,0.57l4.18,2.75l3.58,1.88l5.33,1.05l4.91,0.13l3.94,-4.0l1.29,-0.81l1.58,-0.74l3.34,-0.71l5.62,-0.49l5.27,0.21l3.23,0.66l3.39,1.24l1.67,1.27l2.36,0.2l1.78,-0.24l0.83,-1.37l1.6,-1.5l2.51,-1.46l3.83,-1.53l1.47,-1.14l2.92,-0.36l5.2,7.31l1.55,8.27l1.14,0.63l1.71,0.17l1.06,0.48l1.05,1.58l-0.27,3.63l-0.42,1.36l0.23,1.6l-0.19,0.92l-4.04,2.57l-2.67,0.73l-1.12,0.94l-2.27,3.21l-1.98,3.31l-1.38,5.05l-1.73,1.73l-0.81,5.52l-1.97,0.77l-1.19,0.91l-0.66,1.56l-0.81,4.92l-0.8,1.51l-1.58,1.32l-2.31,0.54l-1.99,3.7l-0.93,4.07l-1.56,2.65l-0.11,1.53l-2.87,3.71l0.97,1.91l-3.18,2.64l-0.57,2.71l-2.25,1.88l-1.77,0.5l-0.54,-0.53l-0.86,-2.81l-3.25,-3.03l-1.62,-0.95l-0.8,0.12l-0.77,1.58l-0.93,0.43l-2.2,-0.14l-0.59,-1.08l-0.57,-0.11l-4.23,2.77l-1.51,2.77l-3.3,2.46l-3.76,3.75l-1.53,2.82l-1.56,6.82l-2.8,5.01l-0.32,0.25l-0.57,-0.15l-0.36,-0.64l-0.74,-0.3l-0.96,-1.07l-0.78,0.16l-0.11,0.44l1.05,2.82l-0.27,0.76l-7.24,0.38l-0.69,-0.32l-0.35,-0.95l-0.61,-0.18l-0.74,1.11l-1.77,0.08l-1.48,-1.46l-0.92,-0.48l-0.55,0.49l0.99,1.22l-0.08,0.83l-1.43,1.19l-0.76,0.06l-0.45,-0.41l-0.92,-3.28l-0.6,-0.23l-0.39,0.5l0.29,2.91l0.54,0.9l-1.76,0.21l-0.6,-1.48l-0.67,0.21l-0.25,1.31l-2.68,0.38l0.1,-1.13l-0.65,-0.28l-0.8,0.82l-0.08,0.87l-1.02,-0.1l-3.13,-1.88l-2.38,-2.16l-1.09,-2.2l-1.1,-2.87l0.84,-0.4l-0.21,-0.65l-0.94,-0.26l-0.02,-1.24l1.51,-0.54l0.61,-1.2l-0.54,-0.5l-1.74,0.77l-1.75,-1.15l2.03,-0.1l0.74,-0.44l-0.08,-0.72l-1.21,-0.16l-0.03,-0.58l-0.61,-0.36l-0.67,0.8l-0.89,0.33l-0.37,-0.24l-0.23,-1.38l-2.79,-3.18l-5.14,-3.89l-3.8,-0.81l-6.74,0.03ZM382.56,420.54l-0.87,0.28l-0.02,-0.0l0.45,-0.68l0.44,0.41Z",name:"Nigeria"},TN:{path:"M393.92,12.16l1.73,-1.45l0.93,-1.9l1.74,-1.02l0.0,-1.59l2.65,-0.85l3.64,-2.84l6.27,-2.1l1.23,0.3l-0.49,1.36l0.54,1.12l0.62,0.13l0.78,-0.68l-0.08,-0.99l1.94,0.05l0.98,0.51l-0.08,2.28l1.65,2.54l-0.4,1.03l0.19,0.5l1.4,0.73l1.66,-0.9l0.68,-1.29l2.26,-0.77l2.09,-1.82l0.7,-0.11l0.67,2.29l-1.69,1.85l-1.96,3.6l-1.73,1.02l-1.45,1.47l-0.69,2.39l0.38,2.29l1.06,2.2l1.15,1.27l1.21,0.48l2.37,1.83l0.47,4.14l0.82,1.33l-4.87,7.78l-1.78,1.86l-4.9,3.78l-1.04,2.3l0.14,1.32l1.29,2.92l1.8,1.84l2.08,1.04l2.54,-0.31l0.16,2.06l0.42,0.34l2.14,-0.28l0.75,-1.13l0.99,0.59l0.73,2.57l1.17,0.9l-0.44,0.38l0.07,0.64l3.33,0.84l-0.51,3.7l-0.06,3.59l0.96,2.28l-0.27,0.62l-7.86,4.56l-0.71,0.86l-1.87,1.25l-1.54,2.63l-1.86,0.4l-0.62,0.44l-1.38,1.97l-0.55,1.39l1.5,5.91l0.14,2.13l-0.42,1.01l-3.68,5.27l-3.87,1.86l-5.51,-24.88l-8.3,-6.54l-0.33,-2.04l-1.09,-3.22l-1.2,-1.89l-4.43,-2.94l-2.69,-7.83l0.14,-3.29l2.62,-2.31l1.11,-2.25l3.28,-2.15l0.92,-1.31l0.66,-1.4l0.75,-4.89l0.94,-1.67l-0.86,-3.12l0.01,-3.62l-0.83,-2.15l1.18,-8.24l-0.6,-1.41l-1.03,-0.59ZM428.94,37.4l0.2,-0.18l-0.0,0.07l-0.19,0.11ZM425.58,51.8l-0.93,0.45l-1.24,-0.51l0.16,-1.53l1.62,-0.05l1.07,0.99l-0.69,0.65Z",name:"Tunisia"},LR:{path:"M182.44,372.78l0.23,0.59l0.47,0.24l0.48,-0.27l1.56,1.33l0.86,5.11l0.9,2.39l-0.16,1.38l-0.9,1.6l0.14,0.72l2.35,0.46l1.98,1.96l1.88,-0.62l0.71,0.07l2.07,-2.87l0.41,-1.94l0.86,-0.19l0.23,0.6l1.41,1.2l1.6,5.08l-0.4,3.02l-3.07,3.33l-0.02,0.55l0.88,0.56l1.08,0.13l1.92,1.65l1.09,0.36l2.5,0.04l0.9,0.5l1.14,3.09l0.99,0.75l2.94,0.87l0.57,3.06l-0.33,0.87l-0.01,1.69l-0.59,0.94l-0.16,1.24l-0.89,0.81l-0.26,3.03l0.23,5.06l-7.51,-2.68l-10.18,-5.44l-2.8,-2.16l-10.57,-9.86l-1.72,-1.1l-2.19,-0.56l-2.02,-1.05l-0.86,-1.91l-5.16,-2.62l-2.18,-2.22l2.51,-3.6l2.12,-1.95l2.46,-1.68l2.6,-2.54l1.07,-3.84l2.4,-1.31l0.98,-3.43l1.53,-0.28l0.28,0.69l0.51,0.25l3.12,-1.1Z",name:"Liberia"},LS:{path:"M634.15,842.89l-4.19,0.72l-2.99,4.13l-0.2,1.16l-0.7,1.22l-3.15,-0.46l-2.91,-3.07l-1.25,-0.71l-0.34,-0.7l-0.01,-1.37l-2.6,-4.25l-0.85,-2.52l2.71,-1.39l5.14,-7.72l2.48,-0.84l3.26,-2.33l4.37,-1.51l0.89,1.24l1.62,1.24l1.15,1.4l2.63,2.08l1.4,0.72l0.94,2.14l-1.09,3.75l-1.82,1.93l-0.49,2.8l-2.13,1.48l-1.88,0.84Z",name:"Lesotho"},ZW:{path:"M619.52,681.98l1.52,-1.15l1.42,-2.88l1.6,-0.76l1.18,-1.15l0.85,0.25l0.79,-0.39l0.36,-0.78l-0.19,-0.62l0.53,-0.99l2.1,-0.58l1.33,0.93l0.85,-1.37l1.5,-0.63l0.21,0.78l0.48,0.38l0.77,0.08l0.76,-0.45l0.55,-1.04l0.84,-0.17l0.53,-0.77l-0.02,-0.65l-0.48,-0.39l-1.82,-0.42l0.65,-1.07l0.29,-3.49l0.54,-1.62l4.29,-2.51l2.29,-0.95l2.77,-0.62l7.38,-0.02l0.15,3.71l0.52,0.52l9.44,0.4l2.95,1.88l2.3,0.43l2.87,2.55l3.75,0.34l4.47,1.67l1.34,1.12l2.08,0.36l-0.79,1.8l0.12,2.01l0.97,2.57l-0.17,10.15l0.44,3.33l-1.23,4.45l-1.91,1.25l-0.31,1.59l0.42,1.11l1.34,1.0l-0.83,3.55l0.65,2.18l2.02,3.82l-0.14,1.18l-3.67,6.49l-1.62,1.17l-0.59,0.81l-0.2,3.62l-1.38,2.26l0.75,2.12l-11.52,12.47l-1.4,1.11l-2.37,-1.08l-1.92,-0.23l-5.39,0.48l-3.06,-0.46l-3.34,-1.34l-2.89,-0.5l-3.45,0.58l-1.32,-1.3l-1.7,-0.29l-0.55,-0.44l-0.24,-0.77l0.24,-1.56l-0.36,-0.6l-5.85,-1.86l-5.67,-0.99l-0.63,-0.65l-1.54,-3.09l-1.99,-2.35l0.4,-3.7l-0.05,-2.89l-0.31,-0.6l-0.95,-0.42l-3.68,-0.07l-0.28,-2.82l-1.0,-1.76l-5.96,-2.68l-5.89,-4.37l-2.44,-5.44l-0.17,-1.86l-1.51,-1.81l-0.65,-1.9l-2.36,-2.55l-2.0,-3.64l-1.22,-1.28l-0.6,-1.35l0.24,-0.99l2.0,0.55l2.22,-0.24l1.0,0.35l1.57,1.2l1.77,0.19l1.59,-0.68l2.12,0.2l2.81,1.13l2.66,0.24l3.66,-1.17l2.42,-3.44l0.75,-0.85l1.22,-0.48l-0.01,-0.39Z",name:"Zimbabwe"},TG:{path:"M297.58,342.18l5.02,1.17l0.41,0.51l4.27,-0.44l-1.21,2.93l-0.23,4.1l6.66,4.7l0.13,4.86l0.5,2.62l0.52,1.01l1.61,1.7l0.34,0.89l0.29,23.86l-0.72,0.04l-0.35,0.56l0.57,1.3l0.2,3.16l1.71,2.23l0.29,1.1l-1.57,0.41l-0.26,0.49l-4.23,1.18l-0.32,-0.43l-1.38,-0.56l-1.01,-1.51l-0.76,-0.09l-1.87,-1.33l-0.36,-1.41l-2.02,-3.08l0.05,-1.2l0.71,-0.89l0.49,-3.76l-1.49,-1.17l-0.09,-1.05l1.24,-2.28l-0.25,-4.89l0.14,-0.58l0.99,-1.08l0.07,-0.86l-0.87,-1.66l-1.64,-1.24l-1.12,-1.57l1.31,-1.37l-0.27,-3.11l0.74,-2.98l-0.15,-0.72l-1.1,-1.08l-1.07,-0.07l-0.97,0.61l0.17,-0.88l0.84,-0.48l-0.21,-0.65l-0.33,-0.08l0.41,-0.49l0.67,-7.19l-5.49,-4.72l0.85,-2.4l0.12,-2.1Z",name:"Togo"},TD:{path:"M578.03,285.78l-3.93,-0.5l-1.78,0.39l-4.06,0.14l-1.4,1.03l-0.94,1.19l0.33,2.95l-0.38,1.59l-2.0,2.03l-0.95,1.72l-0.15,1.6l-2.18,0.92l-1.13,1.09l0.69,3.57l1.01,1.32l-4.1,2.82l-0.9,1.5l0.01,1.15l1.31,3.05l0.08,1.54l-0.7,1.17l-2.02,1.3l-1.81,3.14l-0.18,1.11l0.84,1.33l1.56,0.36l2.71,-0.44l1.16,0.49l0.59,1.1l-0.24,1.07l0.95,4.61l0.28,0.53l0.99,0.48l-0.28,3.75l0.43,1.25l2.34,2.17l0.9,0.19l0.67,0.54l0.13,1.54l-0.79,2.86l-4.16,-0.83l-3.05,1.23l-0.89,0.77l-1.27,0.05l-1.09,1.09l-2.3,1.15l-0.9,1.12l0.23,2.38l-0.43,0.78l-0.48,0.51l-1.29,0.43l-1.57,2.47l-1.53,0.31l-2.98,3.11l-0.36,0.99l-2.37,2.62l-4.93,3.23l-3.03,-0.07l-1.54,0.71l-3.23,0.62l-6.19,0.07l-1.27,0.3l-1.1,0.68l-0.9,0.7l-0.08,0.78l2.51,2.19l-2.17,2.72l-1.81,1.85l-1.36,0.93l-0.67,1.35l-10.77,0.76l-4.72,2.02l-1.56,1.34l-2.55,0.76l-1.02,0.94l-2.07,-2.06l-0.46,-1.3l-0.49,-0.32l-1.82,1.19l-0.37,1.04l-3.88,1.25l-0.93,0.79l-1.16,0.34l-3.54,-0.51l0.55,-1.29l-0.04,-1.55l-1.31,-0.92l-2.2,-5.49l-1.62,-2.84l-3.08,-2.97l-1.52,-0.81l-4.63,-3.96l-3.79,-4.53l-0.24,-0.92l1.76,-2.32l1.06,-0.81l6.79,0.46l3.55,-0.49l2.16,0.34l2.59,-0.07l1.48,-0.6l0.07,-0.7l-1.41,-0.94l-2.93,-3.13l-1.64,-3.37l-0.73,-2.37l-0.45,-3.07l0.29,-2.92l0.77,-2.03l-0.48,-1.41l0.03,-2.39l-2.37,-5.19l-0.43,-2.86l-1.01,-1.84l-1.71,-1.02l-0.8,-0.95l-0.32,-1.81l-0.78,-0.75l-2.69,-0.74l-2.02,-0.03l-5.2,-7.32l-1.79,-7.9l2.17,-2.9l1.95,-4.1l6.54,-9.49l13.06,-14.37l3.05,-36.98l2.66,-5.49l-0.48,-1.06l-3.97,-4.15l-0.45,-1.46l0.68,-1.3l-3.68,-5.75l-1.25,-1.31l-0.11,-4.98l-2.22,-13.34l11.33,-5.51l93.4,49.57l-0.08,46.02Z",name:"Chad"},ER:{path:"M725.98,303.27l-1.08,-10.0l1.07,-1.41l1.84,-5.78l1.57,-3.26l1.19,-3.72l-0.27,-4.08l1.01,-2.04l0.29,-2.97l1.67,0.22l3.06,-0.38l1.52,-3.14l2.72,-1.63l2.68,-0.93l1.01,0.09l1.86,-0.74l1.52,-1.73l0.58,-1.33l1.72,-1.83l3.31,6.65l1.43,4.16l1.26,4.33l0.93,6.52l0.91,3.37l1.48,1.74l0.96,3.02l1.0,0.37l0.48,0.67l1.03,2.85l0.81,1.17l0.69,-0.07l0.4,-0.93l-0.29,-1.61l0.51,-1.29l1.63,1.31l0.51,2.17l1.63,1.9l4.01,0.98l3.0,2.32l4.31,1.45l5.66,7.7l6.8,4.72l1.12,2.16l0.61,2.2l0.41,0.29l1.27,-0.09l2.29,2.26l0.94,2.01l2.03,0.67l0.51,-0.26l0.16,-0.5l0.44,0.4l0.27,0.95l-2.78,1.02l-1.16,2.38l-0.56,0.38l-2.38,-1.6l-0.67,-0.04l-0.58,0.41l-2.59,-3.33l-2.15,-1.37l-2.21,-3.64l-4.73,-3.82l-2.78,-2.81l-3.55,-4.55l-3.59,-1.47l-3.5,-2.46l-1.06,-0.36l-2.94,0.16l-1.53,-0.66l-2.68,-0.47l-3.79,0.71l-0.72,-1.18l-0.72,-0.56l-0.84,-0.08l-2.63,1.79l-4.17,0.64l-2.39,-2.62l-2.53,-1.04l-1.42,-1.41l-0.6,0.17l-3.59,8.32l-2.01,-2.65l-1.44,-1.08l-0.85,0.09l-0.82,0.57l-1.09,1.53l-2.45,-0.51l-1.56,0.09l-1.44,0.52ZM766.2,285.37l0.49,-0.42l0.04,-0.47l0.52,0.37l0.92,2.27l-1.08,-0.03l0.47,-0.35l-0.04,-0.48l-0.64,-0.69l-0.68,-0.19ZM769.16,287.16l0.39,-0.42l1.17,0.57l-0.7,0.02l-0.85,-0.17ZM767.02,281.99l0.03,0.08l-0.08,-0.03l0.05,-0.05Z",name:"Eritrea"},LY:{path:"M432.52,60.38l1.37,0.66l1.76,0.34l5.52,3.3l5.61,0.81l6.2,-1.57l2.91,1.24l3.54,0.46l3.69,1.12l4.25,2.78l7.66,1.64l0.93,0.97l1.01,1.97l0.06,2.63l1.57,4.37l2.62,3.37l1.54,0.93l3.41,1.33l7.81,0.71l6.6,1.81l5.57,2.08l1.45,1.06l2.76,0.99l5.64,4.93l3.13,1.7l2.33,0.37l2.21,-0.33l3.55,-1.74l1.53,-1.09l3.52,-4.26l1.2,-2.3l0.51,-1.79l-0.57,-3.13l-1.0,-1.57l-0.66,-1.91l-0.4,-3.49l0.53,-2.4l1.66,-2.91l2.87,-2.89l2.89,-2.04l5.07,-2.67l2.91,-0.03l1.33,-0.31l2.53,-1.93l0.8,-0.06l1.45,0.47l4.02,-0.13l10.29,4.05l0.4,2.07l-0.26,1.62l2.46,2.05l5.95,0.76l3.97,2.08l4.11,0.18l2.4,-0.26l2.9,0.78l0.78,0.87l1.31,2.83l-3.39,4.52l0.29,3.78l1.12,3.88l-0.14,1.23l-0.95,2.9l-2.08,3.71l3.25,13.76l-0.01,118.24l-11.32,-0.01l-0.4,0.4l0.0,5.56l-93.2,-49.47l-12.17,5.73l-8.69,4.75l-7.04,-6.27l-1.45,-0.82l-17.67,-4.31l-4.98,-9.76l-0.57,-0.5l-9.64,-3.06l-3.37,0.85l-1.45,-1.2l-1.58,-2.53l-1.03,-3.25l-0.39,-3.8l-6.44,-9.52l-0.26,-0.9l0.16,-1.13l0.54,-1.0l4.25,-2.82l0.43,-1.25l0.15,-2.94l-0.71,-1.09l-0.47,-1.61l-0.55,-3.62l1.97,-6.15l-0.67,-3.4l-0.5,-6.84l0.31,-5.42l-0.45,-2.93l-1.96,-6.25l-3.71,-6.2l6.63,-3.56l3.83,-5.5l0.47,-1.12l0.04,-1.24l-1.64,-7.08l1.75,-2.81l2.37,-0.72l0.85,-0.99l0.76,-1.7l1.77,-1.16l0.7,-0.86l8.06,-4.76l0.37,-1.72l-0.94,-1.73l0.06,-3.42l0.47,-3.39Z",name:"Libya"},GW:{path:"M102.74,327.08l2.02,-0.15l3.14,-1.07l3.53,0.23l3.21,-0.64l4.46,-2.27l16.69,0.07l0.02,0.76l0.64,1.27l-0.54,2.01l-1.27,0.14l-1.39,0.92l0.14,0.78l2.35,1.95l0.04,2.74l-2.28,0.75l-3.76,0.09l-2.18,1.23l-2.78,0.62l-1.25,1.38l-2.71,5.08l-0.18,-0.26l0.41,-1.38l-0.4,-0.51l-0.79,0.18l-0.73,0.93l0.04,-0.86l-0.36,-0.41l-1.1,0.02l-0.63,-0.56l-0.01,-1.01l0.43,-0.42l0.03,-0.63l-1.26,-0.26l0.29,-0.53l1.89,-0.81l2.09,-0.29l0.24,-0.64l-0.81,-0.91l-1.27,-0.3l-1.19,0.21l-0.88,0.61l-0.81,-1.01l0.31,-1.0l2.7,-0.22l1.37,-0.52l0.56,-0.52l0.01,-0.64l-0.76,-0.31l-1.01,0.51l-2.93,-0.17l-1.03,0.37l-1.56,1.15l-1.82,0.6l-0.9,-0.17l0.34,-1.17l-0.84,-0.94l-2.27,0.43l-1.37,-0.63l-0.48,-0.67l0.08,-0.81l0.87,-1.18l-0.35,-0.52l-0.95,-0.05l-1.29,0.41l-1.75,-0.98ZM112.89,339.84l0.13,-0.12l0.02,0.0l-0.05,0.07l-0.1,0.05ZM110.3,337.15l-0.59,-0.08l0.45,-0.87l0.04,0.01l0.1,0.94ZM108.3,332.78l0.84,-0.07l-0.27,0.65l-0.57,-0.58ZM107.34,341.77l0.47,-0.16l0.65,-0.58l-0.03,0.59l-1.09,0.15Z",name:"Guinea-Bissau"},ZM:{path:"M578.83,601.53l0.57,0.1l0.9,1.64l1.94,0.49l0.41,0.53l0.31,1.31l-0.6,1.67l0.66,0.66l1.04,0.37l0.81,-0.09l1.84,-1.04l6.98,-1.65l-0.32,2.0l0.92,2.82l1.87,1.53l1.5,0.02l4.75,1.74l6.71,0.98l2.86,-0.1l1.64,-0.91l1.15,-3.36l0.93,-0.31l0.74,2.32l2.11,1.87l1.24,2.91l0.6,0.55l1.03,0.56l2.46,0.22l6.31,2.69l1.54,3.69l1.6,0.53l0.56,0.65l2.18,3.39l0.35,1.26l0.84,0.74l2.45,0.46l4.15,-1.79l0.53,0.37l0.42,1.56l1.15,0.51l0.87,-0.41l0.27,-0.69l-0.0,-14.9l-0.48,-0.39l-3.47,0.91l-0.38,0.67l0.12,1.48l-0.48,0.23l-4.08,-0.95l-2.45,-2.67l-4.23,-3.61l-1.39,-3.72l2.15,-7.99l1.13,-1.73l0.08,-1.42l-0.44,-1.87l0.26,-6.71l-0.31,-1.89l-2.38,-5.12l3.16,-2.41l2.27,-2.78l0.64,-1.18l0.2,-1.31l-0.31,-1.03l18.7,-2.94l-1.02,0.91l-0.41,1.26l0.48,1.04l0.87,0.1l-0.31,0.61l0.36,0.26l1.56,-0.81l1.29,0.58l2.05,2.11l1.03,0.63l1.28,-0.71l0.67,-0.01l0.31,-1.44l1.31,-0.02l1.89,1.1l0.32,1.13l1.42,1.27l1.88,0.0l0.84,0.3l0.08,0.89l0.53,0.6l2.13,0.23l1.15,0.63l2.33,0.34l0.66,0.66l4.88,2.22l0.68,1.22l0.2,1.18l1.25,0.47l0.59,-0.42l0.56,0.16l0.61,1.48l1.12,1.16l-0.33,2.26l2.45,2.22l0.31,1.86l1.23,1.87l-2.12,2.3l-1.44,0.39l-1.06,1.04l1.27,3.44l-1.16,2.59l-0.53,0.46l-0.03,1.61l0.71,0.93l0.15,0.79l-0.03,2.27l-0.54,2.9l1.16,2.51l0.58,0.33l1.12,0.01l-1.01,1.17l-4.53,1.81l-0.94,2.2l0.61,1.38l-0.34,3.62l-1.32,2.76l-2.18,1.85l0.25,0.57l1.27,0.76l-0.34,0.48l0.11,0.55l1.17,0.67l1.61,2.51l-17.09,5.99l-10.13,2.93l-5.19,2.08l-0.33,0.44l0.01,0.95l0.35,1.5l1.14,2.01l0.46,3.01l-7.37,0.02l-2.93,0.64l-2.44,1.01l-4.42,2.59l-0.62,0.86l-0.49,4.66l-0.64,1.0l-1.54,-0.37l-2.6,1.03l-1.11,-0.44l-0.51,0.84l-1.06,0.53l-0.31,0.8l-1.33,1.21l-1.56,-0.61l-1.27,0.62l-0.33,0.5l0.37,0.7l-1.25,0.37l-0.34,1.48l-0.84,0.2l-2.09,2.78l-1.07,2.07l0.29,0.57l-2.25,2.15l-1.87,3.28l-2.46,0.89l-2.23,-0.22l-2.92,-1.16l-2.27,-0.22l-1.78,0.7l-1.34,-0.19l-1.34,-1.09l-1.31,-0.49l-2.27,0.24l-2.12,-0.59l-3.08,-2.79l-3.24,-0.65l-5.5,-0.45l-10.3,1.93l-4.83,-4.23l-5.83,-5.78l-3.54,-2.61l-1.25,-3.94l-0.7,-3.69l-0.01,-35.36l21.47,0.0l1.47,-0.16l0.33,-0.33l0.02,-0.63l-0.95,-1.8l0.29,-1.76l0.97,-2.65l-0.38,-3.71l0.15,-5.72l0.87,-2.86l-0.85,-5.81ZM685.32,638.81l0.58,-0.42l0.13,0.18l-0.71,0.24Z",name:"Zambia"},CI:{path:"M196.93,396.2l2.9,-3.2l0.43,-2.33l0.05,-1.25l-1.95,-5.6l2.65,0.26l1.4,-2.47l-0.07,-1.41l1.32,-2.38l-0.2,-1.26l-2.64,-1.14l0.19,-2.04l1.8,-0.25l2.48,0.33l1.19,1.1l0.5,-0.0l0.54,-0.66l-0.08,-1.99l-0.43,-1.18l-0.92,-1.04l-1.72,-0.69l0.14,-1.83l1.69,-1.03l0.15,-0.57l-1.54,-1.3l0.22,-2.45l-0.47,-0.41l-1.42,0.2l-0.94,-0.9l-0.2,-5.49l1.75,-1.92l1.13,-0.29l0.94,-0.67l1.71,-2.19l1.57,-0.14l1.2,1.16l0.49,0.97l2.9,0.63l0.7,0.64l0.7,0.09l0.8,-0.68l-0.24,-1.03l0.28,-0.64l3.14,-0.28l0.32,-0.78l-0.12,-2.5l0.84,0.63l1.75,0.34l0.59,-0.68l-0.25,-0.81l1.38,-0.4l0.08,1.6l0.56,1.84l-0.55,1.66l1.67,1.02l1.39,-0.0l2.13,-2.24l3.12,-0.56l1.91,1.44l1.56,-0.01l1.64,0.79l1.19,2.22l0.43,1.56l4.1,2.62l1.18,-0.07l1.4,0.85l1.01,0.06l1.05,-1.24l5.38,-1.99l6.5,0.29l1.39,1.62l1.16,0.71l2.0,3.07l0.9,0.17l0.48,-0.23l-0.11,1.33l0.27,0.37l-0.75,1.7l-0.05,0.95l1.17,1.2l0.56,1.84l1.07,6.77l-1.2,0.72l0.04,1.02l-2.14,1.56l-1.25,2.91l-0.74,2.73l-0.32,2.94l-2.9,4.64l-0.14,2.06l0.52,3.63l2.38,7.53l0.74,1.08l1.69,0.35l0.4,1.76l-0.53,2.88l-1.4,0.37l-2.08,-0.82l0.17,-1.42l-0.35,-0.44l-0.57,-0.07l-0.86,0.47l-1.04,2.14l-5.87,-1.01l-1.43,-0.87l-1.66,-0.2l-5.1,0.35l-0.86,0.6l-0.13,0.46l0.24,0.16l-3.28,0.45l-0.63,-0.08l-0.81,-0.68l-3.18,-0.06l-0.81,0.35l-0.38,0.49l0.21,0.38l-2.29,0.19l-4.15,0.94l-10.94,4.0l-2.52,1.5l-2.05,0.7l-2.23,1.26l-1.09,0.23l-0.31,-5.09l0.26,-2.8l0.84,-0.77l0.14,-1.18l0.66,-1.17l0.01,-1.71l0.32,-0.84l-0.63,-3.61l-0.32,-0.39l-0.7,0.03l-1.32,-0.71l-1.13,-0.16l-0.56,-0.47l-1.27,-3.22l-1.23,-0.65l-2.59,-0.06l-0.89,-0.3l-1.79,-1.61l-1.47,-0.29Z",name:"Côte d'Ivoire"},CM:{path:"M398.03,416.85l2.82,-5.07l1.56,-6.83l0.7,-1.54l4.33,-4.64l3.33,-2.48l1.48,-2.73l3.85,-2.5l0.77,1.06l3.39,0.0l0.65,-0.58l0.66,-1.42l1.37,0.78l3.12,2.9l1.1,3.24l0.74,0.41l1.2,-0.12l1.18,-0.46l1.88,-1.4l0.92,-1.26l0.3,-2.2l3.23,-2.63l0.05,-0.68l-0.95,-1.47l2.76,-3.49l0.19,-1.76l1.53,-2.57l0.92,-4.02l1.86,-3.46l2.06,-0.37l0.87,-0.57l1.58,-1.84l1.16,-5.89l0.57,-1.31l0.91,-0.64l1.78,-0.59l0.53,-0.56l0.81,-5.52l1.72,-1.71l1.41,-5.13l1.89,-3.14l2.21,-3.13l0.96,-0.79l2.6,-0.68l4.35,-2.87l0.28,-1.28l-0.22,-1.65l0.65,-3.08l0.02,-2.09l-1.41,-2.06l-1.21,-0.55l-2.37,-0.41l-1.43,-7.65l1.58,0.01l2.41,0.63l0.45,0.36l0.4,1.96l1.03,1.18l1.52,0.84l0.92,1.68l0.43,2.86l2.31,4.97l-0.04,2.31l0.48,1.27l-0.74,1.99l-0.31,3.1l0.46,3.21l0.77,2.51l1.75,3.58l3.91,3.82l-3.05,0.32l-2.23,-0.34l-3.5,0.49l-6.96,-0.45l-1.53,1.1l-1.89,2.48l0.35,1.77l3.85,4.59l4.71,4.02l1.55,0.84l2.88,2.75l1.56,2.72l2.23,5.55l1.32,1.22l-0.26,1.39l-1.73,2.81l-1.5,1.07l-0.56,0.78l-2.02,4.96l-2.03,2.74l-1.17,2.86l-0.6,0.61l-2.27,1.1l-0.87,0.92l-0.17,1.0l0.88,1.5l0.99,0.19l0.27,0.34l0.0,4.09l-0.63,2.62l0.93,1.39l0.8,6.01l0.8,1.4l2.94,2.34l0.41,0.75l0.84,2.49l-0.87,0.14l-0.29,0.54l0.34,0.86l0.83,1.49l7.59,8.23l1.64,0.47l1.66,2.0l-0.07,1.5l0.47,1.61l0.09,1.92l0.88,2.36l-0.05,0.45l-1.1,1.19l-0.17,1.15l0.77,3.32l-0.42,0.3l-3.71,-2.71l-1.74,-0.43l-2.99,0.05l-2.09,-1.04l-0.92,0.38l-1.87,-0.13l-0.45,-0.73l-1.33,-0.01l-2.52,-1.41l-1.03,0.48l-13.6,-0.08l-0.34,-0.67l-0.79,-0.44l-4.15,0.11l-5.9,-0.58l-9.45,-0.07l-2.47,0.03l-0.39,0.45l-0.17,1.1l-15.4,-0.0l-1.15,-0.48l-0.6,-1.01l0.96,-6.81l0.72,-1.86l-0.37,-2.11l-2.68,-3.39l0.9,-1.2l-0.4,-0.23l-1.12,0.11l-0.72,-1.58l0.47,-0.59l1.05,0.16l0.46,-0.45l-0.17,-0.57l-0.95,-0.85l0.42,-1.2l-0.75,-0.29l-1.01,0.5l-0.86,-0.44l-0.46,0.49l0.16,0.6l-0.55,0.59l-0.95,-0.14l-0.84,-0.7l-2.75,-1.02l-0.24,-1.42l-0.75,-1.51l-0.12,-2.56l-1.84,-0.35l-1.21,-1.05l-0.58,0.45l0.29,1.21l-0.69,0.03l-0.29,-0.55l0.31,-1.82Z",name:"Cameroon"},EG:{path:"M655.55,83.91l-0.23,0.39l0.35,0.35l1.61,0.18l3.64,-0.81l0.63,-0.82l0.31,-1.1l1.13,0.19l3.98,1.79l1.11,0.01l3.13,-1.11l0.2,0.12l-0.51,0.17l-0.17,0.86l-1.18,1.59l0.15,0.6l2.72,0.99l0.97,1.57l0.47,0.2l1.43,-0.5l0.88,-1.12l-0.2,-0.76l2.56,2.19l1.12,0.53l5.95,-1.29l0.64,0.92l0.43,0.14l2.1,-0.62l3.42,-0.0l2.86,-0.73l3.11,-1.63l3.69,11.48l1.5,3.44l2.79,9.4l-1.9,2.82l-1.39,6.85l-1.99,5.32l-0.55,4.53l-1.88,3.0l-1.7,-0.71l-3.26,-2.83l-1.92,-2.73l-2.13,-1.84l-1.9,-2.29l-1.38,-5.48l-0.69,-1.35l-2.37,-2.82l-1.71,-3.1l-0.86,-3.68l-0.97,-2.43l-0.58,-0.19l-1.09,0.66l-0.03,1.25l-0.9,1.34l-0.58,1.86l0.53,1.46l1.92,1.94l0.35,0.77l0.44,1.79l-0.05,2.64l0.38,0.97l1.45,1.85l1.33,2.94l3.62,4.84l2.0,2.1l1.43,1.01l0.52,0.86l0.07,3.92l1.71,3.48l1.28,1.08l0.5,0.99l1.27,6.96l1.12,1.45l3.28,6.88l2.75,4.31l7.37,15.73l3.35,4.17l2.75,2.06l-1.83,0.36l-0.66,2.2l0.22,4.38l0.5,2.24l1.57,4.14l2.66,2.81l3.69,1.42l2.18,2.96l4.79,3.7l0.29,0.62l-62.69,0.01l0.41,-1.69l-0.55,-0.78l-0.75,-0.14l-0.92,0.39l-1.06,2.17l-0.37,0.06l-72.63,-0.01l0.0,-93.14l-3.24,-13.7l2.01,-3.4l1.01,-3.11l0.14,-1.48l-1.13,-3.88l-0.28,-3.55l2.97,-3.89l0.94,1.43l1.84,0.29l6.06,-1.47l15.73,3.31l3.47,2.28l1.06,0.3l2.31,-0.04l1.72,1.33l6.36,0.64l6.66,3.02l2.52,-0.52l1.84,-0.87l5.87,-4.1l1.25,-0.46l2.0,0.09l2.22,-2.76l1.6,-0.16Z",name:"Egypt"},SL:{path:"M165.73,355.9l1.63,1.75l4.17,5.67l-0.74,2.32l0.41,0.45l1.16,0.27l0.13,2.12l1.18,2.06l-1.46,1.63l-0.99,2.32l0.19,0.48l2.25,0.2l1.92,-1.95l0.63,-0.04l-0.81,2.96l-1.78,0.68l-0.74,0.82l-0.86,3.53l-2.61,2.57l-2.42,1.65l-2.15,1.97l-2.54,3.62l-2.43,-1.92l-2.36,-1.16l-6.28,-2.32l0.53,-1.81l-0.81,-1.27l0.29,-0.85l-0.38,-0.53l-1.19,0.6l-1.19,-0.14l-1.72,-1.17l-1.23,-3.84l-0.97,-0.76l-1.27,-0.14l-1.3,-2.27l2.08,0.42l1.94,-1.79l0.37,-1.04l-0.12,-0.31l-0.63,-0.17l-0.45,0.38l-1.42,-0.11l-0.88,0.52l-0.4,-1.02l0.17,-1.31l1.31,-0.13l0.46,-0.53l-0.29,-0.56l-1.01,-0.18l-1.29,-1.18l1.56,0.14l0.69,-0.3l1.03,-1.02l0.45,-1.28l1.3,-0.4l1.04,-0.94l2.42,-4.08l0.62,-1.74l0.66,-0.33l1.59,-0.34l1.71,0.62l2.58,-0.56l0.39,-0.83l7.08,-0.04l0.57,0.16l0.21,0.46ZM150.0,384.88l-0.53,-0.45l-3.08,-0.87l2.81,-0.27l0.92,0.47l-0.12,1.11Z",name:"Sierra Leone"},CG:{path:"M433.42,500.67l1.46,0.55l2.4,-0.56l1.54,0.77l4.48,-0.97l0.31,-0.36l0.38,-2.57l-0.54,-1.98l1.55,-0.98l1.97,1.09l2.51,4.59l4.34,1.09l1.37,-0.11l2.01,-1.45l1.27,-1.44l1.17,1.9l-0.19,0.83l0.33,0.82l1.68,0.45l1.3,-0.4l1.29,-1.29l0.14,-0.92l-0.44,-0.81l0.43,-0.47l0.59,-2.07l1.57,-1.38l0.46,-2.09l-0.23,-1.35l0.52,-0.89l0.1,-1.31l-0.52,-5.19l0.74,-4.75l-1.44,-1.48l-1.88,-0.53l-1.61,-1.82l-2.25,-0.59l0.27,-4.43l0.69,-1.73l1.47,-2.0l1.73,-0.23l1.13,-0.89l1.42,-2.45l-0.06,-1.17l-1.53,-2.72l-0.71,-2.27l-0.98,-0.83l-4.06,-0.56l-6.96,2.03l0.37,-1.14l-0.98,-3.22l0.1,-1.55l1.4,-4.04l13.58,0.08l1.08,-0.46l2.22,1.39l1.15,-0.05l0.48,0.79l2.32,0.12l0.75,-0.36l2.1,1.04l2.95,-0.06l1.54,0.39l4.07,2.79l1.13,-0.93l-0.78,-3.49l0.11,-0.86l1.14,-1.24l0.07,-0.69l3.31,-6.53l0.14,-4.02l1.05,-3.37l0.36,-0.37l7.04,-1.03l2.53,-1.01l4.94,1.51l2.66,0.03l0.86,0.63l1.92,-0.97l1.69,-0.38l0.59,1.03l0.63,0.42l0.12,1.75l-1.5,4.35l-3.29,6.01l-1.64,4.71l-0.18,5.65l-1.83,4.96l-0.19,3.14l0.46,3.7l-0.43,3.46l-1.32,3.31l-0.59,2.7l0.31,3.13l-2.32,2.5l-3.03,2.57l-3.56,1.65l-1.18,1.06l-4.04,7.27l-3.8,3.94l-0.37,1.47l0.3,8.77l-0.81,5.0l-3.1,5.33l-3.04,1.07l-1.0,0.74l-0.6,1.05l-2.47,1.56l-5.69,6.3l-0.7,0.35l-2.98,-0.39l-0.49,-2.66l0.94,-1.72l-1.13,-1.89l-0.38,-0.18l-3.82,1.45l-1.14,0.73l-1.66,-0.57l-1.04,0.27l-0.55,2.93l-2.86,1.5l-1.96,-1.42l-0.96,-1.18l-1.17,0.06l-1.93,-2.01l-1.33,-0.17l-1.86,1.19l-2.92,1.0l-0.99,1.73l-1.36,0.32l-1.79,2.29l-2.02,-2.53l-0.43,-0.88l-0.13,-1.43l-7.43,-7.49l1.06,-2.28l2.93,-1.85l1.95,1.87l1.98,0.18l0.8,-0.71l-0.06,-0.81l-0.48,-0.74l1.17,-2.53l-0.16,-0.38l-2.49,-1.6l-0.19,-0.36l0.72,-1.02l0.08,-0.67l-1.56,-1.76l-0.94,-0.23l0.66,-2.47l-0.31,-2.57Z",name:"Congo"},CF:{path:"M474.14,425.91l0.6,-0.07l0.43,-0.47l-0.9,-3.12l-0.56,-0.97l-2.96,-2.35l-0.6,-1.06l-0.8,-6.03l-0.9,-1.17l0.63,-2.48l0.0,-4.36l-0.53,-0.82l-0.99,-0.17l-0.64,-1.11l0.78,-1.08l2.75,-1.48l1.46,-3.29l2.04,-2.74l2.02,-4.96l2.0,-1.76l1.06,-1.75l4.03,0.55l1.47,-0.4l0.95,-0.79l4.0,-1.29l0.53,-1.21l1.01,-0.77l1.43,2.23l1.74,1.32l0.61,-0.19l0.77,-0.82l2.62,-0.8l1.57,-1.34l4.57,-1.95l3.36,-0.03l7.49,-0.76l0.5,-0.38l0.46,-1.18l1.28,-0.85l1.86,-1.91l2.4,-3.01l-0.52,-1.19l-2.03,-1.59l1.67,-1.11l1.03,-0.22l6.16,-0.06l3.37,-0.65l1.4,-0.68l3.29,0.0l5.12,-3.37l2.49,-2.76l0.34,-0.96l2.79,-2.91l0.85,0.05l0.78,-0.46l1.51,-2.42l1.15,-0.35l0.74,-0.72l0.62,-1.19l-0.04,-2.62l2.63,-1.44l0.97,-1.01l1.33,-0.08l0.94,-0.81l2.84,-1.14l4.0,0.86l1.16,1.89l4.08,4.34l2.7,4.22l1.15,2.38l-0.28,5.55l-0.27,0.81l-1.54,1.92l-0.03,0.99l0.99,1.21l-0.05,1.65l0.7,0.7l1.13,0.4l5.92,0.91l-0.29,2.05l0.44,1.26l0.97,0.92l2.11,0.71l3.26,0.56l1.24,0.58l1.8,2.03l2.21,1.81l0.45,0.81l-0.75,1.99l0.2,0.64l1.04,1.09l1.28,1.18l5.95,3.17l1.64,1.23l1.56,2.04l2.1,1.6l-0.55,1.87l0.19,0.91l1.15,1.54l1.11,2.41l1.06,0.74l1.62,0.27l4.76,3.14l0.89,1.68l0.33,3.22l0.86,1.26l-2.75,-0.64l-2.83,1.59l-15.36,-2.9l-1.64,0.82l-1.65,2.58l-1.96,0.61l-1.09,-0.16l-2.4,0.6l-3.76,-0.92l-1.52,0.18l-10.6,3.89l-1.07,-0.0l-2.37,-0.86l-3.03,0.16l-2.04,1.7l-2.44,4.54l-0.73,0.65l-8.48,-1.69l-1.78,0.41l-2.16,-0.76l-1.52,0.07l-1.03,-0.3l-2.05,-0.97l-4.52,-0.54l-1.89,-2.58l-1.96,-1.69l-2.69,-1.4l-2.21,-1.63l-1.69,-0.5l-2.31,-0.05l-2.19,0.72l-2.99,2.11l-2.86,4.41l-1.45,1.56l-1.4,0.66l-0.3,1.3l0.6,1.61l0.15,1.81l-0.43,3.2l0.1,1.59l-0.6,-0.98l-0.64,-0.29l-1.9,0.52l-1.53,0.88l-0.63,-0.56l-2.75,-0.06l-4.63,-1.55l-3.2,1.05l-6.39,0.73l-1.02,0.47l-0.57,0.66l-1.08,3.45l-0.14,4.01l-2.93,5.77l-0.5,-1.57l-0.59,-5.29l-1.63,-2.02l-1.84,-0.65l-3.64,-3.79l-3.83,-4.31l-0.87,-1.68Z",name:"Central African Rep."},AO:{path:"M441.82,544.7l5.51,-1.02l3.33,-1.64l1.19,-0.09l1.33,0.29l8.0,-0.28l4.95,0.42l22.42,-0.32l1.26,0.38l1.14,0.71l1.79,2.26l0.1,3.43l0.4,1.8l2.1,3.82l0.49,1.38l-0.13,1.2l0.44,1.3l1.98,2.39l4.47,7.27l0.9,0.46l3.78,-0.37l1.27,0.46l2.2,-1.0l4.3,-1.02l4.37,0.77l2.35,0.0l2.39,-0.42l0.33,-0.35l0.36,-3.63l1.27,-2.23l0.05,-2.26l0.46,-1.42l1.39,-1.14l2.4,-0.57l7.93,-0.8l-0.65,2.71l0.29,0.87l0.73,0.59l13.96,0.55l0.34,0.88l-0.09,2.02l-0.63,3.2l0.24,2.92l1.12,2.77l0.11,4.07l-0.88,5.6l-0.2,3.61l0.58,1.74l2.74,3.22l1.23,2.04l0.88,2.54l0.36,5.03l-0.24,0.87l-0.77,0.46l-0.47,0.94l0.61,3.13l0.62,0.86l0.7,0.22l3.01,-1.7l6.04,0.37l4.49,-1.41l4.32,0.53l0.97,-0.4l0.33,-0.83l0.12,0.76l0.67,4.69l-0.87,2.88l-0.15,5.71l0.44,2.82l-1.33,5.34l0.97,1.96l-22.9,0.1l-0.4,0.4l0.01,35.8l0.73,3.87l1.44,4.29l3.58,2.63l5.83,5.78l4.38,3.84l-22.19,4.27l-1.46,-0.46l-2.05,-0.09l-4.31,0.78l-2.64,-0.79l-1.47,-0.84l-2.41,-0.29l-6.44,0.06l-3.08,-0.53l-4.9,-0.27l-2.61,-1.15l-2.74,-3.22l-1.29,-0.61l-46.71,-0.14l-4.64,0.26l-0.75,-0.2l-2.84,-1.89l-1.5,-1.09l-1.11,-1.31l-0.96,-0.43l-3.59,-0.5l-6.6,3.0l-3.74,-0.03l-1.09,-0.52l-1.37,0.01l-1.42,0.73l-1.3,0.19l0.84,-6.21l-0.26,-8.79l-0.49,-1.69l1.62,-1.31l0.85,-1.14l0.57,-1.46l0.68,-3.27l2.42,-7.39l1.16,-7.26l1.47,-3.48l0.53,-3.72l4.0,-4.85l1.03,-3.04l4.94,-2.97l2.29,-2.98l1.06,-2.01l1.17,-3.73l0.01,-3.98l0.74,-5.16l-0.16,-1.59l-1.12,-2.14l-0.27,-1.58l-2.1,-2.52l-0.54,-1.95l-1.88,-3.02l-0.51,-1.99l-0.91,-1.5l-0.63,-3.7l-1.83,-4.04l0.0,-0.28l0.54,0.15l3.67,-3.95l0.21,-4.06l-3.37,-6.97l-2.66,-6.43l-0.54,-3.42l-3.52,-4.27l-2.62,-5.28ZM440.92,539.86l-0.23,0.06l-0.46,-1.04l0.57,-1.98l-0.34,-1.69l-1.72,-3.63l1.89,-2.35l1.27,-0.25l0.93,-1.67l2.84,-0.99l0.98,-0.75l1.21,-0.42l2.01,2.0l-2.43,0.95l-2.71,2.81l-1.66,1.07l-0.15,0.59l0.81,0.81l-0.21,6.13l-2.58,0.36Z",name:"Angola"},CD:{path:"M441.08,540.64l2.62,-0.32l0.5,-0.41l0.31,-6.69l-0.67,-0.82l1.41,-0.9l2.69,-2.79l2.59,-0.98l0.6,-0.53l2.73,2.57l0.9,0.14l3.0,-1.47l0.38,-0.55l0.36,-2.58l2.25,0.5l4.69,-2.15l0.85,1.26l-0.93,1.83l0.66,3.07l0.65,0.43l3.26,0.2l0.95,-0.51l5.66,-6.27l1.52,-0.76l2.34,-2.46l3.17,-1.13l1.55,-2.11l1.91,-3.71l0.83,-5.1l-0.29,-8.85l0.24,-1.04l3.8,-3.95l3.94,-7.15l2.54,-1.79l2.1,-0.82l3.1,-2.63l2.5,-2.68l-0.23,-3.43l0.55,-2.55l1.36,-3.43l0.44,-3.56l-0.46,-3.81l0.19,-2.97l1.83,-4.94l0.17,-5.58l1.6,-4.62l3.26,-5.95l1.57,-4.52l-0.28,-4.52l0.43,-3.29l-0.16,-1.91l-0.59,-1.64l0.22,-0.72l1.21,-0.47l1.55,-1.66l2.78,-4.32l2.88,-2.03l1.96,-0.63l3.32,0.41l2.3,1.68l2.61,1.35l1.88,1.62l2.12,2.75l4.65,0.58l2.01,0.96l1.22,0.35l1.43,-0.1l2.16,0.77l1.91,-0.4l2.5,0.31l6.01,1.39l1.37,-0.97l2.45,-4.55l1.62,-1.41l2.72,-0.14l2.23,0.84l1.38,0.04l10.7,-3.91l1.24,-0.17l3.78,0.92l2.61,-0.6l1.12,0.16l2.34,-0.79l1.75,-2.68l1.24,-0.56l15.09,2.92l0.87,-0.23l1.71,-1.24l0.86,-0.12l3.17,0.98l0.98,1.57l2.08,1.49l1.47,2.37l2.25,1.33l1.15,1.25l1.59,0.98l2.81,0.31l3.57,-2.12l2.31,0.2l2.36,1.11l1.09,0.02l2.08,-1.32l1.01,-1.32l0.71,-0.21l1.26,0.5l1.11,1.15l1.11,1.86l3.78,4.03l3.69,1.75l0.49,1.89l0.43,0.58l2.05,0.06l0.84,1.41l0.67,0.41l-1.38,3.1l-0.32,1.5l1.12,1.86l-0.93,2.39l-0.49,2.71l1.4,1.0l1.6,0.02l1.31,1.27l1.03,0.18l0.8,1.0l-4.36,3.23l-4.04,3.9l-1.68,2.79l0.19,0.89l-0.92,0.36l-0.95,0.97l-0.71,1.55l-2.86,1.9l-0.14,3.81l-1.76,3.74l-0.71,0.84l-0.39,2.38l-2.23,0.93l-2.0,4.12l0.1,0.9l0.81,0.94l1.86,-0.41l0.81,-0.64l-0.85,4.62l0.2,4.56l-2.58,1.52l-1.18,1.5l-1.68,-0.6l-0.86,0.61l-0.61,2.37l-0.9,1.96l0.03,0.96l-0.5,1.34l0.48,1.07l-0.59,0.83l-0.15,1.1l0.89,2.99l1.03,0.51l0.14,0.94l2.33,2.84l-0.15,2.87l-0.81,1.14l0.06,2.46l-0.51,1.94l-0.21,3.61l0.14,1.38l-0.47,1.01l0.32,0.67l0.82,0.31l0.51,-0.15l0.23,-0.45l-0.2,1.75l-0.54,0.38l-0.37,0.91l-0.26,5.62l0.68,2.24l2.36,4.21l-0.32,0.51l-0.0,1.5l-1.69,1.55l0.07,1.66l1.42,1.9l1.32,3.51l0.63,0.46l-0.02,1.12l0.72,1.53l2.59,2.92l0.99,0.8l2.09,0.98l1.45,1.68l0.68,1.97l-0.04,1.33l0.92,3.25l3.01,2.59l0.46,1.24l-19.43,3.11l-0.27,0.51l0.39,1.15l-0.17,1.14l-0.52,0.93l-2.15,2.65l-3.41,2.78l0.05,0.8l1.63,2.76l0.72,1.94l0.29,1.74l-0.26,6.67l0.44,1.91l-0.07,1.25l-1.11,1.65l-2.18,8.08l0.3,1.25l1.24,3.08l4.33,3.72l2.73,2.85l4.2,0.98l0.89,-0.14l0.54,-0.79l-0.05,-1.59l1.85,-0.25l0.8,-0.42l-0.13,14.61l-0.78,-0.2l-0.33,-1.41l-1.09,-0.72l-4.33,1.78l-1.91,-0.31l-0.68,-0.6l-0.27,-1.12l-2.28,-3.53l-0.67,-0.77l-1.44,-0.37l-0.83,-2.4l-0.86,-1.42l-6.59,-2.84l-2.52,-0.23l-0.73,-0.42l-1.62,-3.22l-2.18,-1.98l-0.46,-2.01l-0.59,-0.55l-1.07,0.11l-0.86,0.51l-1.11,3.33l-1.21,0.61l-2.55,0.08l-6.62,-0.97l-4.76,-1.74l-1.22,0.08l-1.73,-1.39l-0.71,-2.39l0.41,-1.87l-0.74,-0.81l-7.38,1.69l-1.8,1.03l-1.28,-0.22l-0.2,-0.22l0.58,-1.47l-0.43,-1.65l-0.73,-0.83l-1.97,-0.54l-0.92,-1.62l-1.3,-0.23l-0.71,0.27l-0.5,1.18l-0.51,0.23l-4.3,-0.52l-4.53,1.41l-6.0,-0.38l-3.1,1.68l-0.45,-0.63l-0.53,-2.59l0.2,-0.49l0.97,-0.71l0.31,-1.11l-0.28,-2.88l0.24,-0.82l-0.33,-1.64l-0.95,-2.73l-1.27,-2.12l-2.71,-3.17l-0.47,-1.37l0.19,-3.47l0.89,-5.69l-0.11,-4.18l-1.12,-2.8l-0.23,-2.8l0.72,-5.27l-0.44,-1.25l-0.46,-0.37l-13.84,-0.49l-0.57,-0.79l0.72,-2.74l-0.47,-0.7l-8.49,0.8l-2.52,0.6l-1.84,1.54l-0.51,1.6l-0.05,2.26l-1.28,2.29l-0.33,3.36l-4.27,0.35l-4.49,-0.78l-4.42,1.05l-2.03,0.97l-1.18,-0.46l-3.82,0.36l-4.74,-7.38l-1.95,-2.35l-0.33,-1.04l0.13,-1.22l-0.54,-1.51l-2.07,-3.72l-0.38,-1.66l0.1,-2.6l-0.25,-1.08l-1.95,-2.49l-1.44,-0.91l-1.48,-0.42l-22.47,0.32l-7.45,-0.44l-5.46,0.3l-3.52,-0.52l-2.56,0.51l-1.35,0.99l-1.81,0.48l-0.95,-0.16l-1.94,-2.09Z",name:"Dem. Rep. Congo"},GA:{path:"M400.47,481.31l1.76,-0.1l0.68,-0.62l1.11,-0.24l2.58,-3.26l0.57,-3.7l-0.33,-3.99l0.42,1.18l0.79,0.61l1.38,0.19l2.48,1.16l0.62,-0.25l0.14,-0.73l2.0,-0.74l0.26,-0.36l-0.91,-0.67l-2.07,0.27l-2.54,-1.14l-2.4,-2.83l1.62,-0.75l1.0,1.07l0.8,-0.39l0.1,-2.43l-0.51,-2.64l1.44,-0.44l0.67,0.9l1.36,0.46l1.38,-0.51l15.3,0.05l0.4,-0.4l-0.08,-13.67l0.28,-1.19l11.42,0.05l5.92,0.58l4.03,-0.12l0.58,0.78l-0.05,0.66l-1.36,3.55l-0.13,1.73l0.98,3.32l-0.48,0.7l-0.08,0.59l0.31,0.36l1.09,0.21l6.7,-2.07l3.65,0.53l0.52,0.42l0.71,2.25l1.48,2.57l0.06,0.78l-1.25,2.13l-0.89,0.7l-1.58,0.16l-0.5,0.37l-0.52,1.07l-0.91,0.92l-0.8,2.11l-0.18,4.88l0.67,0.58l1.92,0.31l1.46,1.73l1.95,0.58l1.15,1.38l-0.81,4.08l0.52,5.26l-0.09,1.18l-0.53,0.93l0.22,1.4l-0.42,1.89l-1.5,1.25l-0.61,2.11l-0.51,0.67l0.43,1.43l-1.14,1.14l-0.88,0.22l-1.01,-0.24l-0.02,-1.48l-1.06,-1.88l-0.78,-0.48l-0.53,0.16l-1.27,1.55l-1.68,1.28l-1.09,0.1l-4.03,-1.0l-2.35,-4.46l-1.01,-0.78l-1.59,-0.54l-1.71,0.94l-0.58,0.65l0.14,1.47l0.4,0.75l-0.35,2.16l-4.06,0.88l-1.43,-0.77l-2.53,0.56l-1.69,-0.52l-0.5,0.52l0.3,2.79l-0.75,2.72l0.31,0.5l1.08,0.2l1.21,1.31l-0.83,1.39l0.34,0.89l2.49,1.66l-1.15,2.37l0.58,1.2l-0.15,0.28l-1.56,-0.11l-1.67,-1.76l-0.87,-0.13l-3.24,2.06l-1.11,2.25l-0.67,-0.61l-1.03,-1.97l-3.56,-3.08l-0.67,-1.42l-2.79,-3.11l-6.22,-5.17l2.01,0.83l0.83,-0.53l-0.07,-0.64l-2.39,-1.28l-2.18,-0.36l-0.43,-0.4l-1.06,-2.36l-1.88,-2.18l0.78,0.38l0.54,-0.19l0.02,-1.08l-1.87,-1.01l-0.79,-0.07l-0.01,-0.96l-0.87,-1.72l1.17,1.19l1.11,0.03l1.47,-0.44l0.24,-0.57l-0.26,-0.51l-0.71,-0.66l-1.75,0.09l0.66,-1.79l-0.47,-0.54l-1.49,0.64l-1.42,-0.86l-3.38,-6.37Z",name:"Gabon"},GN:{path:"M141.71,365.59l0.24,-1.07l-1.47,-1.72l-0.56,-1.35l-1.55,-1.46l-1.16,-0.05l0.22,-2.43l-0.48,-0.96l0.11,-0.78l-0.48,-0.45l-0.82,0.62l-0.46,-0.12l-1.47,-0.9l-0.67,-0.8l-0.31,-1.15l-1.73,-0.05l-2.82,-1.34l-2.03,-3.41l0.19,-2.54l-0.67,-0.22l-0.51,0.48l-1.17,-2.52l-1.69,-0.42l-0.61,0.49l-0.49,1.41l-0.2,-0.15l0.07,-0.92l1.13,-1.56l1.92,-3.95l0.92,-1.05l2.68,-0.58l2.16,-1.22l3.61,-0.06l2.68,-0.87l0.27,-0.36l-0.07,-3.35l-2.46,-2.16l0.84,-0.42l1.19,-0.06l0.78,-0.82l0.42,-2.07l-0.67,-1.97l7.04,0.45l-0.17,0.93l0.49,0.8l0.87,0.11l0.82,-0.57l1.42,0.92l3.08,0.91l0.88,-0.02l0.75,0.45l1.45,0.12l2.83,-0.82l2.77,0.12l2.7,-0.46l1.39,0.12l-0.92,2.02l0.08,0.69l2.32,2.01l0.68,0.22l0.85,-0.27l1.8,-1.81l1.12,-0.32l2.17,3.31l0.63,0.38l1.27,-0.57l1.83,-2.38l1.99,-0.79l5.18,1.99l1.52,0.01l0.83,-1.3l3.56,-1.42l0.37,-1.12l-0.67,-1.39l1.56,-0.04l1.83,0.87l0.44,0.58l2.07,4.97l0.15,3.24l1.17,0.56l0.65,1.32l2.95,1.52l-1.34,1.24l-1.7,2.42l0.02,0.83l1.07,0.37l1.51,-0.69l1.26,0.55l0.25,0.82l-0.2,1.84l0.74,3.31l0.55,0.69l2.51,1.32l0.18,0.36l-0.05,1.09l-1.58,1.51l-0.35,0.76l0.19,5.84l0.64,0.99l0.8,0.5l1.36,-0.08l-0.24,2.16l1.47,1.18l-1.6,1.08l-0.26,2.58l2.11,1.1l0.65,0.79l0.4,2.49l-1.27,-1.01l-2.66,-0.33l-2.16,0.26l-0.42,0.55l-0.09,2.75l1.44,0.91l1.14,0.2l0.16,0.6l-1.33,2.4l0.1,1.34l-1.0,1.89l-2.23,-0.32l-0.72,0.4l-0.94,-1.27l-1.3,-0.1l-0.73,0.54l-0.38,1.89l-1.6,2.53l-0.9,-0.0l-1.32,0.54l-1.81,-1.85l-1.08,-0.37l-0.95,0.1l0.88,-1.57l0.17,-1.76l-0.89,-2.35l-0.07,-1.4l-0.7,-1.96l-0.09,-1.78l-1.91,-1.88l-0.85,-0.04l-0.63,-0.76l-3.15,1.16l-0.29,-0.58l-0.83,-0.36l-1.2,0.36l-1.56,-0.05l-2.28,2.09l-1.1,-0.15l0.74,-1.77l1.41,-1.49l0.14,-0.56l-1.23,-2.27l-0.12,-2.23l-0.32,-0.34l-1.24,-0.26l0.71,-1.68l-0.05,-0.82l-6.32,-8.16l-0.91,-0.24l-7.48,0.04l-0.49,0.9l-2.19,0.48l-1.71,-0.62l-1.86,0.41l-1.07,0.67l-0.62,1.77l-2.29,3.9l-0.78,0.75l-1.41,0.43l-0.71,1.59l-0.76,0.74l-1.95,0.03Z",name:"Guinea"},GM:{path:"M100.95,317.27l-0.62,-2.35l1.36,-1.23l1.03,1.83l2.07,0.56l2.56,-0.15l0.45,-0.42l0.18,-0.83l6.11,-0.88l1.77,0.01l0.51,-0.12l0.24,-0.62l-0.4,-0.35l-1.65,-0.2l-6.6,0.62l-2.59,1.25l-0.76,-0.09l-0.89,-1.07l-0.24,-1.0l11.84,0.03l1.26,-1.78l1.67,-0.68l1.8,-0.26l1.84,0.29l1.93,1.36l2.32,0.67l2.07,1.39l1.09,0.18l2.1,-0.57l1.82,-0.08l1.23,0.66l0.21,0.59l-0.15,0.52l-4.38,1.12l-2.13,-0.38l-6.84,-2.93l-1.82,-0.5l-0.66,0.46l-0.9,1.44l-6.12,0.85l-0.31,0.35l-0.19,1.67l-9.2,0.03l-1.0,0.6Z",name:"Gambia"},XS:{path:"M870.84,340.26l-0.01,20.99l-11.07,16.98l-11.42,0.0l-34.59,-11.69l-4.62,-4.1l-1.65,-0.54l-0.96,-1.11l-1.04,-1.49l-1.39,-3.14l-1.43,-0.74l-2.61,-3.22l-0.65,-1.91l-1.44,-2.62l6.6,-10.11l1.88,1.51l2.19,3.66l2.7,3.11l5.03,3.75l1.48,0.56l6.71,-0.13l4.61,-2.53l5.45,-2.17l7.45,1.19l1.36,-0.13l4.91,-2.17l3.04,-2.1l1.94,-0.84l3.56,0.74l3.6,-0.33l6.5,-2.17l1.09,-0.02l2.75,0.8Z",name:"Somaliland"},CV:{path:"M28.84,280.19l1.39,0.08l0.47,0.45l-0.15,1.05l-1.06,0.57l-1.06,-0.45l0.41,-1.7ZM28.19,272.8l0.01,0.84l0.07,0.37l-0.27,-1.09l0.19,-0.11ZM25.21,292.7l-0.28,-0.24l0.06,-0.78l0.23,-0.44l0.33,0.03l0.14,1.21l-0.48,0.23ZM19.01,291.78l1.9,1.59l0.86,1.29l-0.44,0.7l-1.23,-0.07l-0.64,-0.37l-0.81,-1.22l0.35,-1.92ZM11.5,274.78l0.92,0.3l-0.5,0.61l-0.43,-0.75l0.02,-0.16ZM11.76,296.23l-1.0,0.17l-0.47,-0.37l-0.06,-0.76l0.96,-0.55l0.38,0.12l0.2,1.39ZM4.86,272.3l-0.54,0.16l-0.85,-0.23l1.07,-0.49l0.32,0.56ZM0.42,269.5l2.3,-1.11l0.63,0.14l0.4,0.63l-1.9,1.47l-0.97,0.21l-0.46,-1.35Z",name:"Cape Verde"},GH:{path:"M262.01,412.91l0.84,0.05l1.7,-0.53l0.77,-3.6l-0.61,-2.21l-1.9,-0.53l-0.37,-0.63l-2.62,-8.51l-0.12,-4.18l2.86,-4.56l0.36,-3.08l0.72,-2.67l1.23,-2.83l1.87,-1.23l0.36,-0.66l-0.17,-0.62l0.83,-0.31l0.47,-0.77l-1.1,-6.99l-0.63,-2.02l-0.48,-0.81l-0.61,-0.32l0.84,-2.45l-0.33,-0.54l0.19,-1.4l-0.24,-1.22l-0.85,-2.37l0.34,-0.69l-0.45,-4.62l0.24,-0.72l-0.63,-1.1l0.35,-1.18l-1.07,-1.05l-0.37,-0.88l0.08,-1.48l0.78,-2.89l20.69,-0.14l3.81,0.23l0.51,0.62l0.57,0.14l1.74,-0.99l0.75,-0.94l1.08,-0.1l0.55,-0.76l2.22,0.5l0.7,0.81l-1.13,3.48l0.09,0.86l3.6,3.44l1.74,1.16l-0.58,6.71l-0.65,0.37l0.23,0.94l-0.64,1.71l0.77,0.7l1.38,-0.72l0.53,0.04l0.76,1.06l-0.73,2.9l-0.07,1.68l0.35,1.3l-1.2,0.94l-0.1,0.84l1.32,1.94l1.55,1.14l0.73,1.32l-1.2,2.27l0.24,4.94l-1.23,2.24l0.19,1.57l1.36,0.89l-0.47,3.51l-0.79,1.08l0.04,1.34l2.13,3.33l0.47,1.52l2.08,1.48l0.77,0.13l0.8,1.33l1.46,0.78l-1.48,1.1l-1.15,2.1l-2.15,0.54l-5.86,0.07l-4.5,2.22l-2.58,0.78l-1.69,1.29l-2.11,0.87l-1.51,1.07l-3.1,0.52l-5.16,1.71l-5.81,3.21l-0.82,-0.02l-3.64,-1.93l-7.19,-1.55Z",name:"Ghana"},SZ:{path:"M671.9,788.65l0.99,0.57l-0.24,3.23l0.76,3.16l0.07,3.5l-0.71,-0.14l-0.65,0.41l-0.57,4.72l0.11,1.39l-5.22,-0.14l-2.19,-0.72l-2.35,-1.58l-2.04,-4.08l-1.02,-0.33l0.08,-4.32l2.67,-4.08l0.66,-1.54l1.33,-1.71l1.4,-1.07l0.62,-0.09l5.29,3.03l1.04,-0.2Z",name:"Swaziland"},MG:{path:"M853.67,647.61l0.24,0.87l-0.77,2.12l0.28,0.45l0.83,0.16l0.76,-0.4l1.68,-2.98l1.01,-1.1l2.0,0.4l0.47,-0.19l-0.09,-0.49l-1.69,-1.46l-0.39,-1.84l2.54,-4.85l-0.06,-0.44l-1.05,-1.17l-0.03,-1.19l0.86,-1.2l0.4,-0.13l1.7,1.29l1.16,0.04l1.77,-2.19l2.52,-1.34l2.05,-1.91l1.44,-4.16l0.13,-1.25l-0.32,-1.58l-1.16,-2.79l0.77,0.15l0.76,-0.37l3.13,-4.17l0.3,0.0l1.01,1.7l2.02,2.32l1.19,2.49l3.46,5.15l0.34,2.31l1.26,3.76l1.17,5.53l0.72,8.38l0.97,2.63l1.46,2.52l0.46,2.71l-0.88,2.85l-2.08,3.75l-0.91,-0.62l-0.8,-1.08l-1.68,-4.36l-0.67,-0.26l-1.29,0.12l-1.28,1.16l-0.18,0.72l0.73,6.17l1.39,2.27l0.09,2.69l-0.3,1.29l-0.93,1.43l0.32,1.29l-1.9,1.28l-1.75,3.94l-0.14,1.41l0.66,3.92l-0.18,2.74l-1.34,5.36l-5.21,14.79l-8.7,28.98l-3.14,7.9l-1.23,6.72l-2.34,8.16l-0.54,3.08l-2.17,4.41l-1.17,4.46l-1.1,2.82l-1.61,2.39l-3.44,2.11l-3.98,0.29l-2.67,0.75l-6.59,3.91l-1.02,0.4l-3.4,0.09l-0.93,-0.31l-3.61,-2.74l-5.34,-1.34l-1.12,-1.45l-2.46,-1.47l-1.45,-4.52l-2.77,-4.27l-0.28,-7.09l0.2,-1.32l0.68,-1.49l-1.81,-5.8l-2.04,-2.53l-0.44,-1.14l-1.07,-5.1l0.29,-5.54l0.61,-1.8l1.12,-1.86l0.72,-3.52l0.79,-0.67l1.47,-0.52l1.23,-1.08l0.68,-1.37l0.63,-2.58l3.85,-6.1l1.29,-2.98l0.68,-2.86l0.52,-6.2l-2.48,-4.51l-0.06,-4.05l-1.49,-3.06l-0.78,-2.57l-0.31,-5.96l-0.8,-2.73l0.39,-2.14l5.14,-8.39l0.12,-5.19l0.35,-0.58l5.08,-0.54l3.57,-2.67l1.47,1.0l1.63,-0.6l1.18,0.08l0.41,-0.2l0.98,-1.98l3.49,-0.38l1.74,-0.51l1.69,1.99l1.38,0.2l0.49,-0.35l0.03,-0.63l-1.21,-1.31l0.62,-1.76l5.66,-4.36l0.79,0.06l0.36,2.21l0.34,0.46l1.1,-0.27l0.6,-1.21l-0.47,-2.43l2.11,-2.43l0.83,-2.12l0.73,-0.54ZM863.67,629.56l0.19,1.35l-0.78,-0.09l-0.12,-0.78l0.72,-0.48Z",name:"Madagascar"},MA:{path:"M 111.39 184.55 L 112.43 183.53 L 114.72 181.95 L 119.34 176.78 L 121.17 175.79 L 122.75 173.58 L 123.39 171.4 L 123.54 166.93 L 124.08 164.63 L 127.29 157.78 L 127.89 154.74 L 128.46 153.72 L 129.63 153.14 L 131.26 151.64 L 133.81 150.66 L 138.36 147.28 L 139.33 145.4 L 140.33 141.83 L 142.12 138.06 L 143.05 135.18 L 144.56 133.74 L 145.65 131.84 L 147.29 131.07 L 151.1 130.65 L 156.76 129.06 L 161.96 126.6 L 163.49 125.56 L 167.52 121.2 L 174.49 116.5 L 177.91 112.19 L 183.3 104.36 L 184.25 102.16 L 184.76 98.86 L 184.41 97.41 L 182.95 95.17 L 182.02 94.57 L 181.83 93.83 L 182.32 92.06 L 182.59 84.24 L 184.12 80.41 L 187.99 75.15 L 188.72 72.94 L 189.2 68.45 L 193.89 63.71 L 197.65 59.09 L 200.08 57.42 L 208.74 53.68 L 213.64 51 L 216.63 48.93 L 218.37 46.56 L 223.09 37.41 L 228.08 23.06 L 231.45 22.47 L 234.01 21.07 L 234.56 21.22 L 234.24 21.69 L 234.29 23.49 L 235.33 25.44 L 237.11 27.61 L 240.35 30.35 L 242.89 31.45 L 246.39 32.09 L 250.6 30.92 L 252.83 30.9 L 253.91 30.45 L 255.1 31.14 L 257.4 31.38 L 259.72 30.98 L 262.18 29.06 L 263.59 32.37 L 266.35 32.8 L 268.81 32.65 L 270.91 32.89 L 271.93 34.69 L 275.8 37.77 L 275.2 39.82 L 276.5 41.57 L 275.85 43.17 L 276.83 45.84 L 276.75 51.39 L 277.71 54.41 L 277.18 57.98 L 278.68 61.43 L 279.15 64.1 L 279.9 65.52 L 283.9 68.81 L 284.27 69.62 L 282.32 71.44 L 282.07 72.58 L 282.48 74.48 L 268.51 74.03 L 263.6 74.8 L 262.5 75.52 L 261.6 78.19 L 256.82 79.92 L 252.87 80.17 L 252.01 80.75 L 251.75 81.46 L 252.42 84.96 L 251.91 87.21 L 252.21 87.91 L 254.35 89.24 L 254 90.18 L 250.28 90.86 L 246.36 93.76 L 241.07 95.73 L 238.8 96.94 L 236.18 101.11 L 233.16 103.83 L 226.77 105.49 L 221.04 105.69 L 220.61 106.09 L 220.38 108.05 L 219.39 109.02 L 214.08 108.27 L 213.07 108.49 L 209.31 111.42 L 206.87 112.06 L 196.431 120.49 C 196.489 120.374 195.863 156.38 195.863 156.38 L 155.804 156.561 L 155.555 189.686 C 149.865 199.396 149.507 200.45 149.507 200.45 L 148.774 206.629 L 148.591 215.554 C 101.021 215.253 98.289 215.621 98.289 215.621 L 99.05 209.48 L 100.61 206.3 L 101.79 204.96 L 103.9 204.06 L 105.73 200.75 L 106.39 197.68 L 107.53 196.35 L 107.98 195.12 L 107.6 194.17 L 112.44 185.4 L 112.31 184.54 L 111.66 184.33 L 111.41 184.54 L 111.39 184.55 Z",name:"Morocco"},KE:{path:"M696.13,470.36l1.2,-1.94l0.9,-2.52l1.23,-0.89l1.69,-2.18l0.87,-2.1l1.3,-1.23l2.39,-1.11l-0.06,-1.76l2.06,-2.98l0.2,-1.72l-0.17,-3.41l-0.94,-4.11l0.23,-0.9l-0.46,-1.29l-0.65,-0.47l-0.86,-2.33l-1.78,-1.27l-0.73,-2.16l-0.9,-0.64l-0.52,-2.66l0.44,-2.85l-0.65,-0.74l-1.55,-0.55l-0.89,-0.7l0.13,-0.45l-0.73,-0.65l-1.64,-3.49l14.24,-14.07l0.92,0.87l1.84,-0.59l3.03,0.83l0.38,0.54l0.09,1.28l-0.5,2.41l0.08,1.76l3.18,4.29l0.95,0.31l9.51,0.42l13.93,8.99l6.14,0.58l7.22,1.42l3.36,0.26l0.68,-0.24l1.44,-1.33l2.14,-3.17l10.47,-4.79l4.37,3.58l2.19,0.25l5.87,-0.41l-5.91,8.47l-4.23,4.19l-0.29,0.61l0.17,43.24l6.42,8.43l0.09,1.09l-1.59,1.87l-1.29,0.85l-1.74,0.4l-1.14,-0.34l-0.49,0.17l-0.43,0.91l-0.24,-0.17l-0.63,0.38l0.36,1.94l-0.21,0.67l-0.83,0.71l-0.2,0.76l-1.77,1.54l-2.85,0.23l-2.23,1.63l-0.61,1.84l0.17,2.25l-0.89,2.57l-1.42,1.19l-1.49,2.6l-0.57,2.6l-1.01,2.39l-2.81,5.67l-1.16,1.5l-1.16,-0.05l-0.72,0.71l-16.23,-11.71l-0.96,-1.51l-1.12,-0.47l0.93,-2.7l-0.34,-2.17l-0.38,-0.57l-41.77,-23.34l0.6,-0.4l0.53,-1.22l-1.1,-2.04l-0.08,-0.78l1.21,-1.79l0.85,-0.2l2.27,0.58l0.47,-0.54l-0.1,-1.15l3.66,-0.65l0.42,-0.81l-1.12,-2.16l-0.47,-0.2l-3.55,1.24l-0.7,0.63l-0.5,1.16l-1.84,-2.03l-0.07,-1.02l-0.85,-0.13l-0.41,-0.45l-0.29,-2.46ZM779.14,497.11l0.05,-0.04l0.01,0.0l-0.07,0.03Z",name:"Kenya"},SS:{path:"M581.04,370.44l1.37,-1.13l2.92,-1.07l0.24,-1.5l1.15,-2.05l0.29,-2.43l1.3,-1.75l0.04,-2.9l2.5,-3.23l0.28,-2.2l0.39,-0.53l8.3,-1.42l0.43,0.1l0.2,0.46l0.08,1.7l0.41,0.58l2.98,2.47l4.44,5.19l1.42,0.61l1.54,-0.19l3.52,-1.33l9.24,0.18l1.18,2.39l0.97,0.82l9.33,0.03l0.39,-0.49l-0.07,-1.3l1.52,-1.49l2.94,-1.4l2.87,-0.7l1.6,-1.9l0.08,-1.73l4.26,-2.25l5.29,3.4l3.41,3.01l4.96,-0.48l0.96,-0.42l5.07,-5.06l2.36,-3.11l0.89,-2.13l5.78,-5.18l0.05,-0.67l-0.97,-2.26l-0.02,-4.79l-2.62,-3.05l6.91,-0.03l0.4,-0.37l-0.19,-2.18l4.79,0.06l-0.71,2.8l-0.16,3.01l-0.58,1.11l1.15,9.04l-0.49,1.21l0.38,0.52l2.63,0.98l0.99,1.18l5.16,4.3l0.54,1.38l0.07,2.2l-0.79,1.65l-0.28,2.64l0.47,0.86l1.95,0.04l0.29,8.91l-0.26,1.32l-1.23,1.06l-8.0,0.16l-0.65,0.61l-2.58,5.24l-0.17,1.0l1.09,1.05l1.77,0.78l5.15,1.06l2.69,1.85l1.26,1.51l0.61,1.82l2.52,2.63l2.42,1.27l0.95,1.41l1.64,1.33l2.86,7.14l0.33,2.28l1.2,2.25l1.92,1.86l-20.42,20.05l-3.67,-0.22l-2.17,-1.21l-1.83,0.94l-5.96,1.12l-1.69,1.2l-0.49,0.91l-1.94,-0.92l-1.73,-2.3l-0.45,-0.03l-2.79,1.41l-3.63,-1.25l-0.95,-0.02l-2.86,1.86l-0.8,1.15l-0.84,-1.09l-0.88,-0.25l-1.11,0.2l-0.72,-2.26l-3.78,-1.85l-3.73,-3.98l-1.03,-1.76l-1.27,-1.32l-1.6,-0.67l-1.23,0.27l-1.16,1.42l-1.73,1.15l-0.63,0.03l-2.46,-1.14l-2.59,-0.23l-2.61,1.61l-1.59,0.57l-1.98,-0.36l-2.41,-2.09l-1.61,-0.77l-1.98,-2.83l-2.06,-1.47l-2.65,-3.66l-0.32,-3.16l-1.07,-2.03l-4.97,-3.32l-1.65,-0.29l-0.78,-0.51l-1.11,-2.41l-1.04,-1.32l-0.15,-0.54l0.59,-2.02l-0.13,-0.42l-2.24,-1.72l-1.59,-2.07l-1.73,-1.3l-5.96,-3.18l-1.15,-1.07l-1.0,-1.18l0.59,-0.95l0.16,-1.06l-0.6,-1.23l-2.34,-1.95l-1.78,-2.02l-1.6,-0.77l-5.07,-1.13l-0.84,-0.8l-0.27,-0.88l0.41,-1.94l-0.63,-0.75Z",name:"S. Sudan"},ML:{path:"M158.55,314.64l-0.54,-1.33l-1.75,-2.12l0.09,-0.91l0.69,-0.69l0.3,-1.16l-0.68,-1.36l-0.07,-2.92l-2.36,-2.9l0.46,-2.12l-0.6,-1.29l1.45,0.3l1.94,-1.73l0.9,-1.5l0.52,-3.04l0.75,-2.05l2.76,-2.36l6.42,5.88l0.97,-0.19l2.15,-3.13l3.14,-0.17l5.53,0.78l2.29,-0.34l3.6,-0.69l0.33,-0.35l0.0,-1.41l0.39,-0.66l0.32,1.55l2.03,0.41l43.0,-0.0l0.39,-0.33l1.79,-9.59l-3.16,-3.74l-11.26,-105.26l20.21,-0.01l69.79,49.49l0.27,3.58l1.54,1.38l3.72,1.97l0.78,2.07l0.92,0.75l2.19,0.8l3.38,0.31l2.16,2.27l5.44,1.37l2.99,1.27l0.69,0.6l-0.01,2.78l0.62,1.83l-1.71,2.99l0.32,1.1l1.66,1.14l1.34,0.36l9.8,-1.85l0.08,25.84l-0.37,0.54l-0.24,4.63l-0.69,2.64l-1.27,2.08l-1.6,5.27l-0.56,0.8l-1.3,0.44l-2.22,1.93l-0.27,1.38l-4.9,-0.8l-0.82,0.33l-0.19,0.73l-19.62,0.82l-4.18,3.52l-2.63,0.33l-5.06,-0.3l-0.79,0.22l-0.32,0.48l-4.9,-1.64l-2.05,0.52l-0.55,-0.53l-0.96,-0.22l-1.71,0.1l-1.25,0.34l-3.34,2.73l-5.19,2.34l-2.34,1.41l-3.22,0.62l-1.21,3.27l-0.36,0.17l-3.88,-1.23l-1.83,0.59l-2.32,1.91l-1.18,1.56l-0.67,2.1l-0.11,1.43l-2.82,-0.32l-0.86,0.46l-0.57,4.36l-2.32,1.07l-3.6,-2.22l-1.4,-0.4l-1.39,0.32l-3.31,3.23l0.13,1.17l0.98,2.04l-0.02,0.71l-2.76,1.35l-0.18,0.53l0.65,1.05l-0.07,2.64l-1.78,2.1l-1.19,0.85l-4.76,1.3l-1.52,0.96l-0.84,0.99l-0.03,1.87l0.71,1.9l-0.23,1.65l-1.03,2.72l-1.62,1.02l-0.16,0.4l0.38,3.15l-0.64,3.6l-1.85,0.07l-1.86,0.57l-2.16,2.24l-1.82,-0.57l0.52,-1.6l-0.54,-1.76l-0.14,-1.96l-0.64,-0.39l-2.03,0.67l-0.25,0.5l0.18,0.77l-1.15,-0.27l-0.99,-0.79l-0.54,0.04l-0.49,1.18l0.1,2.33l-3.13,0.29l-0.54,1.2l0.3,0.79l-0.28,0.19l-0.84,-0.7l-2.82,-0.63l-0.19,-0.72l-1.75,-1.48l-2.16,0.26l-1.82,2.29l-1.24,0.68l-0.36,-1.59l-3.03,-1.95l-0.64,-3.0l0.13,-2.41l-0.34,-0.65l-1.85,-0.87l-1.94,0.69l1.59,-2.27l1.16,-0.88l0.35,-1.13l-0.32,-0.44l-2.85,-1.44l-0.59,-1.26l-1.17,-0.6l-0.0,-2.94l-2.1,-5.05l-0.68,-0.87l-2.2,-1.03l-1.09,-0.08l-1.23,0.34l-0.2,0.66l0.64,1.05l-0.06,0.78l-1.45,0.34l-2.04,1.04l-0.95,1.29l-6.22,-2.16l-2.42,1.01l-1.78,2.34l-0.64,0.39l-1.8,-2.92l-0.67,-0.64l-1.1,-0.14l-0.94,0.5l-1.69,1.75l-0.72,0.09l-2.07,-1.79l1.29,-2.48l0.08,-0.9l-0.8,-0.97l0.61,-4.89l-1.78,-2.64l-0.38,-1.43l-0.67,-1.05l-1.72,-0.47l-0.83,0.86Z",name:"Mali"},KM:{path:"M817.49,616.97l0.62,-0.25l0.5,-0.87l0.49,1.38l-0.0,1.06l-1.6,-1.32ZM809.45,617.95l0.26,0.03l0.61,0.38l-0.7,-0.09l-0.17,-0.32ZM806.79,613.01l-1.42,-0.7l-0.71,-0.88l0.32,-3.58l0.29,-0.44l0.51,0.21l-0.15,2.25l1.15,3.13Z",name:"Comoros"},ST:{path:"M383.99,454.08l-0.33,-0.08l0.53,-0.7l0.05,0.23l-0.25,0.55ZM375.07,471.03l-1.05,0.63l-0.5,-1.61l0.52,-1.0l1.46,-0.64l0.52,0.65l0.0,0.69l-0.94,1.28Z",name:"São Tomé and Principe"},MW:{path:"M681.12,633.77l1.75,-1.48l1.44,-2.99l0.38,-3.94l-0.61,-1.21l0.73,-1.73l4.31,-1.66l1.54,-1.89l-0.35,-0.69l-1.7,-0.22l-0.93,-2.13l0.55,-2.63l0.03,-2.39l-0.19,-1.03l-0.71,-0.93l0.05,-1.03l0.39,-0.27l1.32,-2.98l-1.29,-3.26l0.68,-0.63l1.52,-0.45l2.28,-2.3l0.14,-0.7l-1.31,-2.15l-0.33,-1.92l-2.41,-2.2l0.33,-2.23l-1.17,-1.22l-0.79,-1.7l-1.24,-0.32l-0.55,0.41l-0.41,-0.09l-0.68,-1.97l1.71,1.12l2.38,0.31l1.15,1.07l3.32,-0.1l2.2,0.85l-0.11,1.28l1.3,3.57l2.72,3.59l-0.7,2.03l0.63,6.22l-0.24,0.8l1.15,5.76l-3.03,4.55l-0.36,2.16l0.6,1.97l1.16,0.78l0.18,2.57l0.83,1.16l0.72,2.42l0.16,2.48l-0.26,2.76l1.16,2.02l1.6,0.85l0.59,0.71l0.15,0.8l-0.96,2.77l0.39,1.74l1.87,2.07l0.5,0.06l1.31,-0.9l0.42,-2.12l0.51,1.44l1.09,0.4l2.18,2.68l0.8,0.07l0.45,-0.87l-2.17,-6.48l8.01,10.43l0.47,2.62l-0.56,1.59l-0.41,2.81l0.29,1.95l-0.12,3.13l-0.7,4.4l-1.57,0.67l-3.01,0.52l-0.86,1.16l-1.49,3.9l0.75,1.27l0.57,1.95l0.08,3.38l-1.4,0.08l-0.46,-0.4l-0.14,-0.44l0.52,-0.56l0.21,-0.92l-0.41,-1.05l-1.8,-1.02l-4.7,-5.34l-1.29,-0.86l-0.14,-1.99l-1.78,-2.33l0.32,-0.99l0.94,-0.94l0.91,-2.78l1.26,-2.3l0.2,-3.48l-0.69,-5.28l-1.53,-2.1l-0.87,-0.36l-2.75,0.5l-0.65,0.43l-4.09,0.55l-0.52,0.38l-2.66,-3.12l-1.7,-2.96l-1.14,-1.27l-0.48,-0.13l-1.47,0.94l-1.35,-2.31l-0.96,-0.54l0.31,-0.66l-0.16,-0.36l-1.11,-0.82ZM707.94,634.92l-1.36,-0.14l-0.08,-1.2l1.13,1.0l0.31,0.34ZM704.22,615.5l0.03,-0.32l0.11,-0.2l0.13,0.2l-0.28,0.33ZM703.11,614.73l-0.08,0.19l-0.2,-0.25l0.11,-0.06l0.17,0.13Z",name:"Malawi"},SO:{path:"M784.81,491.5l-6.52,-8.7l-0.07,-43.18l4.26,-4.23l6.72,-9.73l1.17,-1.15l2.26,-0.71l6.71,-1.1l1.31,-0.88l1.43,-2.38l1.21,-0.9l5.27,-2.43l4.69,-1.11l10.76,0.6l0.66,-0.27l17.38,-18.67l18.24,-17.73l11.31,-17.33l0.07,-21.4l4.96,-0.98l3.0,-1.3l5.57,-0.98l4.18,-2.37l2.01,-2.58l1.59,-0.42l4.95,1.73l-0.32,1.63l-1.57,3.87l0.43,3.25l0.12,5.59l-0.39,1.1l-0.71,0.59l0.19,0.58l-1.23,0.58l-0.57,1.2l-0.8,6.59l-0.09,3.23l-1.57,2.12l-0.59,1.61l-2.45,3.16l-1.7,3.99l-2.09,3.58l-3.01,2.95l-1.06,3.56l-1.04,2.2l-3.75,5.62l-1.38,2.61l-1.67,4.36l-0.52,2.77l-4.65,7.93l-4.85,6.36l-3.04,5.37l-12.82,14.2l-9.68,9.49l-2.59,1.91l-10.64,5.88l-6.89,4.92l-10.19,9.06l-10.64,11.06l-4.03,4.91l-2.84,2.8l-2.92,5.38l-1.57,2.2ZM897.88,349.33l0.14,-0.46l1.54,0.91l-0.87,-0.13l-0.8,-0.32Z",name:"Somalia"},SN:{path:"M92.86,297.74l-0.38,0.45l-0.22,-0.26l0.61,-0.19ZM92.98,297.7l3.45,-1.76l3.59,-4.56l3.2,-5.36l0.83,-2.28l0.67,-3.38l0.45,-0.33l1.82,-3.58l0.62,-0.14l2.37,0.66l2.36,0.09l4.53,-1.18l3.09,-0.28l0.35,-0.56l0.8,0.03l0.52,-0.37l0.48,0.3l1.66,0.09l2.93,-0.12l2.61,0.88l3.63,3.12l0.54,1.35l0.83,0.75l0.88,0.22l0.96,-0.39l0.52,0.53l0.72,0.1l1.12,-0.25l1.15,0.86l0.67,0.96l1.02,3.23l0.65,1.13l0.91,0.33l0.76,1.12l1.05,0.13l0.55,0.47l0.73,1.25l0.27,1.41l2.27,1.91l1.38,0.54l0.87,0.7l0.68,1.1l1.46,0.97l0.95,1.68l-0.4,2.45l2.4,2.98l-0.02,2.63l0.68,1.3l-0.2,0.75l-0.77,0.85l-0.04,1.5l1.79,2.18l0.23,0.96l0.62,0.71l0.78,-0.04l0.6,-0.74l0.96,0.2l0.53,0.81l0.41,1.48l1.76,2.63l-0.67,4.54l0.76,1.33l-1.77,-0.18l-2.77,0.46l-2.77,-0.12l-2.95,0.83l-5.72,-1.45l-1.63,-0.98l-1.35,0.56l0.12,-1.11l-0.62,-0.67l-7.61,-0.49l-17.22,-0.07l-4.58,2.3l-3.0,0.61l-3.6,-0.23l-4.38,1.3l-2.05,-0.11l-0.59,-0.99l0.14,-0.32l2.13,-0.83l1.2,0.26l0.48,-0.65l-0.22,-0.52l-1.7,-1.11l-0.54,-0.05l-0.94,1.16l-0.44,0.05l0.09,-4.94l1.05,-0.84l9.43,-0.03l0.4,-0.35l0.2,-1.75l5.87,-0.79l0.8,-0.6l0.79,-1.3l8.18,3.41l2.32,0.42l4.85,-1.2l0.53,-1.4l-0.49,-1.07l-1.46,-0.78l-2.2,0.04l-2.07,0.57l-0.8,-0.16l-1.96,-1.36l-2.24,-0.63l-1.93,-1.36l-1.24,-0.32l-2.96,0.21l-1.94,0.78l-1.05,1.67l-11.8,-0.02l-0.29,-1.05l-1.99,-2.32l1.65,-1.47l-0.38,-0.61l-1.62,0.42l-0.12,-0.89l-2.03,-3.69l-1.29,-1.06l-1.0,-1.84l-1.31,-0.92l-1.93,-0.3Z",name:"Senegal"},MR:{path:"M98.09,219.29l0.49,-2.31l45.99,-0.06l0.4,-0.42l-0.92,-14.69l-0.73,-2.53l0.03,-1.45l1.33,-2.13l4.72,-3.39l2.88,-0.59l3.44,-1.52l0.9,-0.73l0.08,-32.27l38.71,-0.0l0.4,-0.4l-0.01,-16.19l43.58,28.78l-19.48,0.01l-0.4,0.44l11.32,105.83l3.12,3.57l-1.69,9.07l-42.64,0.0l-1.49,-0.21l-0.16,-1.64l-0.51,-0.35l-1.15,0.89l-0.23,1.82l-5.46,0.97l-5.49,-0.78l-3.4,0.19l-0.7,0.5l-2.02,2.8l-5.85,-5.65l-0.75,-0.25l-1.45,0.85l-1.96,1.84l-0.9,2.36l-0.51,3.0l-0.74,1.22l-1.69,1.5l-2.04,-0.76l-1.13,-0.79l-0.65,-1.08l-3.18,-1.87l-1.35,-1.34l-0.05,-1.0l-0.93,-1.59l-0.74,-0.63l-0.99,-0.08l-0.3,-0.73l-1.2,-0.6l-1.54,-4.14l-0.86,-1.22l-1.31,-1.0l-1.93,0.12l-0.55,-0.54l-0.49,-0.05l-1.17,0.32l-0.96,-1.1l-0.18,-0.8l-1.34,-1.35l-2.52,-1.97l-2.86,-0.99l-3.09,0.1l-2.42,-0.38l-0.54,0.39l-0.81,-0.1l-0.5,0.67l-2.77,0.2l-4.5,1.18l-2.17,-0.08l-2.44,-0.67l-0.97,0.2l-0.97,1.13l-2.02,4.07l-0.0,-1.76l0.84,-3.82l4.5,-11.54l0.59,-4.29l-0.64,-7.92l-1.51,-6.01l-1.13,-1.99l-2.02,-1.68l-0.27,-0.58l1.52,-0.51l0.77,-1.27l-0.03,-0.45l-0.43,-0.14l-0.77,0.23l1.53,-3.18l0.84,-5.46l-2.7,-5.75l-1.28,-0.78l-0.55,0.34l-0.15,0.81l-0.24,-0.13l-2.9,-5.55l-0.76,-0.53l-0.8,0.36ZM104.46,237.32l-0.06,-0.39l0.55,-0.95l-0.13,0.77l-0.35,0.57Z",name:"Mauritania"},UG:{path:"M644.58,488.58l-0.21,-4.33l0.98,-5.43l2.6,-2.48l0.22,-1.53l-0.22,-0.42l-1.22,-0.6l-0.84,-0.05l0.28,-2.03l0.69,-0.8l1.8,-3.83l0.06,-3.66l1.17,-0.51l1.59,-1.29l0.76,-1.6l0.83,-0.85l1.38,-0.47l0.26,2.06l0.79,0.38l0.73,-0.26l3.63,-4.87l0.83,-0.85l2.25,-0.89l1.27,-1.01l1.68,-2.63l-0.16,-4.31l1.05,-1.66l-0.5,-0.47l-0.7,0.27l-1.73,2.27l-0.78,-0.98l-1.15,-0.25l-1.29,-1.26l-1.7,-0.06l-0.88,-0.48l1.43,-4.88l-0.39,-1.09l-0.71,-0.78l0.79,-2.54l0.91,-1.47l-0.08,-0.92l-0.5,-0.42l0.8,-1.23l2.43,-1.66l4.5,1.27l1.18,-0.34l1.75,-1.05l1.56,2.17l2.34,1.05l0.49,-0.11l0.65,-1.06l1.46,-1.03l5.84,-1.07l1.74,-0.88l1.82,1.17l3.98,0.23l1.21,-0.78l4.38,-4.4l1.59,3.38l0.5,0.31l-0.0,0.73l1.2,0.94l1.86,0.85l-0.46,2.66l0.57,2.95l0.94,0.7l0.9,2.36l1.65,1.11l0.83,2.28l0.67,0.53l0.35,0.97l-0.24,0.79l0.95,4.18l0.14,3.92l-0.34,1.21l-1.85,2.57l0.13,1.65l-2.14,0.88l-1.5,1.41l-0.88,2.11l-1.6,2.07l-1.35,1.04l-0.96,2.65l-1.04,1.69l-1.19,0.34l-1.1,-0.21l-0.21,-0.9l-0.68,-0.4l-0.89,0.33l-0.62,0.82l-0.73,0.02l0.25,-0.52l-0.15,-0.55l-1.55,-0.47l0.27,-1.15l-0.54,-0.3l-1.08,0.11l-1.0,0.4l-0.72,2.09l-0.52,0.11l-0.37,0.73l-1.1,0.83l-1.07,-0.75l-1.5,0.72l-0.04,-0.81l-0.53,-0.67l-0.55,-0.16l-0.84,0.83l-0.52,1.32l-0.47,0.13l-0.78,-0.41l-0.88,0.85l-1.74,0.2l-2.94,1.58l-0.4,0.78l0.76,1.1l-0.05,0.53l-1.46,1.84l-1.71,3.66l0.56,2.25l-10.98,-0.08l-2.43,0.87l-2.24,-0.06l-0.8,0.24l-2.48,2.91l-1.77,1.39l-0.71,0.2l-0.54,-1.28l-0.59,-0.26l-2.39,0.57ZM687.18,470.63l0.12,-0.82l1.06,-0.02l-0.55,0.44l-0.16,0.59l-0.47,-0.19ZM673.83,475.86l0.46,0.01l-0.02,0.46l-0.21,-0.11l-0.24,-0.35ZM675.29,476.84l0.55,-0.04l-0.4,1.17l-0.61,0.23l0.55,-0.77l-0.09,-0.59Z",name:"Uganda"},SD:{path:"M636.92,359.41l-1.71,1.59l-0.17,1.46l-8.66,-0.03l-1.72,-3.0l-0.48,-0.24l-9.48,-0.14l-4.74,1.52l-1.07,-0.42l-4.41,-5.16l-2.98,-2.47l-0.61,-2.68l-1.15,-0.4l-5.95,1.2l-2.18,0.09l-0.69,0.37l-0.58,0.87l-0.22,2.06l-2.53,3.31l-0.06,2.99l-1.28,1.69l-0.28,2.43l-1.15,2.05l-0.13,1.25l-3.63,1.39l-0.82,1.09l-6.16,-1.06l-0.35,-0.38l0.06,-1.64l-0.94,-1.06l0.04,-0.55l1.41,-1.65l0.39,-1.07l0.41,-4.47l-0.15,-1.57l-1.21,-2.5l-2.74,-4.28l-4.11,-4.38l-1.09,-1.79l0.88,-3.18l-0.19,-1.95l-1.0,-0.91l-0.83,-0.15l-2.09,-1.85l-0.36,-0.94l0.26,-3.93l-0.5,-0.77l-0.74,-0.15l-0.95,-4.62l0.22,-1.19l-0.73,-1.37l-1.8,-0.8l-3.43,0.38l-0.89,-0.99l0.9,-2.3l0.9,-1.26l2.0,-1.28l0.88,-1.48l-0.06,-1.97l-1.32,-3.1l-0.01,-0.68l0.67,-1.14l4.31,-3.07l-0.13,-1.01l-0.86,-0.91l-0.7,-2.94l0.78,-0.77l2.42,-1.12l0.23,-1.74l0.92,-1.69l2.02,-2.06l0.46,-1.91l-0.39,-2.63l1.72,-1.77l4.03,-0.15l1.72,-0.39l3.9,0.51l0.75,-0.53l0.12,-52.37l11.17,0.01l0.55,-0.49l0.01,-24.64l72.66,0.01l0.96,-0.32l1.31,-2.3l0.55,0.31l-0.56,1.76l0.38,0.53l63.39,-0.01l0.12,2.57l0.56,2.41l1.81,3.28l1.95,2.5l-0.63,-0.26l-0.55,0.34l-0.11,1.53l0.37,3.2l0.63,2.17l-0.45,2.02l0.06,3.43l0.81,4.12l-0.15,2.67l1.33,6.09l1.3,3.43l0.89,1.04l2.35,0.75l2.16,1.64l3.24,3.74l1.17,-0.15l0.46,0.6l2.73,1.74l0.22,0.45l-2.0,2.09l-0.62,1.38l-1.37,1.55l-1.55,0.57l-0.91,-0.11l-2.88,0.99l-2.9,1.74l-0.54,0.61l-0.98,2.51l-2.64,0.23l-1.9,-0.21l-0.36,0.27l-0.38,3.21l-1.06,2.29l0.3,3.92l-1.16,3.62l-1.58,3.27l-1.82,5.71l-1.16,1.68l1.14,10.53l-0.92,3.17l0.02,1.83l-0.64,2.52l-2.08,4.25l-0.63,2.19l-0.49,4.16l-3.21,0.48l-1.97,0.86l-0.9,1.09l-4.01,6.93l-1.69,1.77l-1.79,6.5l-0.37,4.91l-1.41,1.12l-1.86,-1.33l-0.74,-0.18l-1.68,1.12l-1.12,1.64l-0.86,1.83l0.42,3.9l-1.77,3.97l-0.96,4.38l-1.64,-0.2l0.26,-2.31l0.82,-1.85l-0.09,-2.4l-0.66,-1.66l-5.28,-4.43l-1.07,-1.25l-2.59,-1.0l0.41,-1.1l-1.16,-8.84l0.56,-1.08l0.17,-3.04l0.68,-2.35l0.07,-0.99l-0.39,-0.43l-5.6,-0.07l-0.44,0.42l0.22,2.14l-7.41,0.03l-0.3,0.67l3.05,3.44l-0.01,4.67l0.97,2.48l-5.6,4.92l-1.71,3.39l-6.56,6.87l-5.16,0.75l-3.2,-2.88l-5.53,-3.56l-0.42,-0.0l-4.7,2.56l-0.17,1.91l-1.33,1.57l-4.06,1.11l-1.75,1.07Z",name:"Sudan"},MZ:{path:"M682.61,799.46l-5.86,0.15l-2.47,-0.32l-0.07,-3.77l-0.75,-3.09l0.22,-3.5l-1.36,-0.99l-0.28,-2.1l0.75,-1.92l0.01,-15.24l-2.2,-7.36l-2.99,-5.29l-0.14,-2.5l-2.83,-10.9l1.54,-1.22l11.71,-12.63l0.1,-0.46l-0.81,-1.83l1.39,-2.35l0.16,-3.49l2.08,-1.76l3.81,-6.78l0.14,-1.62l-2.06,-3.93l-0.58,-1.95l0.6,-1.76l0.19,-1.96l-0.43,-0.73l-1.15,-0.65l-0.14,-0.53l0.16,-1.04l1.44,-0.75l0.54,-0.65l1.3,-4.68l-0.44,-3.46l0.16,-10.24l-1.0,-2.68l-0.09,-1.71l0.83,-2.13l-0.32,-0.45l-2.29,-0.39l-1.29,-1.09l-4.63,-1.73l-3.52,-0.25l-2.86,-2.53l-2.47,-0.51l-3.08,-1.92l-9.33,-0.38l-0.15,-3.9l-0.54,-3.6l-1.17,-2.09l-0.33,-1.88l5.01,-2.02l10.13,-2.93l19.33,-6.76l1.96,3.14l2.92,3.41l5.14,-0.88l1.93,-0.75l1.62,-0.05l1.4,1.92l0.6,4.92l-0.19,3.29l-1.2,2.11l-0.89,2.75l-1.31,1.53l-0.04,0.94l1.8,2.4l-0.07,1.4l0.34,0.84l1.34,0.93l4.78,5.41l1.68,0.93l0.08,1.16l-0.61,0.86l0.32,0.89l0.99,0.74l1.83,-0.11l0.54,-0.67l-0.11,-3.55l-0.62,-2.16l-0.67,-0.94l1.38,-3.58l0.6,-0.85l4.04,-0.78l0.81,-0.71l0.44,-1.31l0.34,-3.42l0.12,-3.18l-0.29,-1.88l0.39,-2.71l0.61,-1.7l-0.59,-3.05l-7.04,-9.37l-2.76,-3.08l-1.69,-1.41l-0.18,-1.73l-0.42,-0.53l-0.11,-3.32l-0.35,-1.01l0.44,-2.34l-0.22,-1.59l-1.07,-2.49l0.08,-2.64l1.74,-1.67l0.42,-0.8l0.53,-1.45l0.29,-3.18l6.72,0.3l0.99,-0.31l1.75,-1.47l1.22,0.02l2.84,1.68l0.42,0.89l1.44,0.45l2.5,0.12l1.92,-0.39l1.26,-0.93l2.18,-0.47l2.72,1.4l2.04,0.3l2.08,-0.46l2.24,-1.2l1.23,-1.18l0.93,-2.14l2.82,-0.18l1.52,0.36l2.43,1.19l3.51,-2.18l2.16,-0.7l2.09,-0.0l1.88,-0.55l2.84,-1.72l3.04,-0.82l2.06,-1.13l5.19,-3.96l1.31,1.74l-1.14,0.92l0.03,0.67l0.9,0.55l-0.75,1.02l-0.12,0.82l0.41,0.85l-1.61,3.09l0.7,1.58l-0.34,2.54l1.12,4.05l-0.34,1.38l0.24,3.23l-0.39,1.1l0.76,0.81l0.32,1.09l-0.27,2.0l-1.26,1.05l-0.15,1.1l0.39,0.39l1.18,0.01l-0.21,3.23l0.32,1.06l-0.41,1.15l0.59,7.96l0.25,0.81l1.14,0.55l-0.88,1.79l0.07,1.87l0.3,0.34l0.43,-0.17l1.0,-1.24l0.27,0.3l0.32,2.93l-0.08,0.66l-1.51,1.62l-0.2,1.63l-0.79,0.65l0.32,1.91l-1.03,2.46l-5.24,6.11l-0.18,1.14l-1.22,1.76l-1.3,0.29l-0.94,0.58l-0.16,0.47l0.5,1.37l-6.82,4.28l-1.83,2.16l-2.22,0.81l-2.44,0.1l-6.24,2.38l-1.25,1.01l-2.41,0.87l-7.0,4.28l-3.64,3.18l-0.53,1.76l-4.19,4.78l-1.5,2.16l-0.14,0.88l-0.39,0.13l-0.58,-0.7l-0.7,0.18l-0.27,1.49l-1.13,-0.25l-3.22,1.9l-2.46,2.19l-3.33,4.07l-4.78,3.88l-0.79,0.08l-1.65,-1.39l-1.24,0.11l1.19,1.8l-0.58,8.06l3.29,4.32l1.55,4.78l0.16,2.63l1.6,3.15l0.72,4.81l-0.16,4.49l0.92,1.05l0.64,-0.13l0.29,-0.66l0.32,-3.18l0.36,1.17l0.13,1.49l-0.6,3.65l0.97,3.84l-0.92,2.75l-1.46,7.9l0.4,0.75l0.99,0.34l0.61,-0.68l-0.58,2.92l-2.69,4.58l-1.11,1.38l-1.85,1.36l-4.46,2.18l-9.02,3.18l-5.76,2.51l-4.59,3.01l-2.05,2.05l-0.89,2.39l-1.54,2.78l1.35,2.06l1.8,1.52l0.6,-0.22l0.28,-0.95l-0.58,8.07Z",name:"Mozambique"}},height:1098.1844132357712,projection:{type:"merc",centralMeridian:0},width:900},africaMill={name,content},MapChart=({onClick:C,databoards:E})=>jsxRuntimeExports.jsx("div",{className:"flex items-center justify-center h-[600px] w-full",children:jsxRuntimeExports.jsx(distExports.VectorMap,{className:"h-[600px] w-full",map:africaMill,backgroundColor:"surface-secondary",regionStyle:F=>{const N=E.find(K=>K.country===F);return{initial:{fill:N?N.license?N.status=="pending"?"#c9ba8f":"var(--primary-default)":"var(--surface-tertiary)":"var(--surface-secondary)",stroke:"var(--solid-200)",strokeWidth:"2px",strokeOpacity:1},hover:{fill:N?N.status=="pending"?"#ddc172":"#187631":"#ffffff",cursor:"pointer"}}},onRegionClick:(F,N)=>{const ue=E.find(K=>K.country===N);C(ue)},zoomOnScroll:!1})});function PendingBoardModalContent(){return jsxRuntimeExports.jsxs("div",{className:"my-10",children:[jsxRuntimeExports.jsx("h1",{className:"text-content-default",children:"Pending Subscription"}),jsxRuntimeExports.jsxs("div",{className:"text-content-secondary mb-5",children:["Your subscription is pending and will be processed within the next 24 hours. If the issue persists, please contact our sales team at"," ",jsxRuntimeExports.jsx("span",{className:"text-blue-500",children:" sales@afriqom.com"}),"."]}),jsxRuntimeExports.jsx(Button,{href:"mailto:sales@afriqom.com",children:"Contact Us"})]})}function DashboardManagement(){var Je;const[C,E]=reactExports.useState(0),{accessibledataboards:F,isLoading:N}=useOrganizationHandler(),{state:ue}=useAuth(),[K,Ae]=reactExports.useState(""),le=reactExports.useMemo(()=>K?F.filter(G=>getCountryLabel(G.country).toLowerCase().includes(K)||G.tags.toLowerCase().includes(K.toLowerCase())):F,[F,K]),re=useNavigate(),[Ie,Qe]=reactExports.useState(!1),ve=G=>{if(G){if(G.status=="pending")return Qe(!0);if(G.license)return re(`${AppRoutes.preview}?${G.country.toLowerCase()}`)}re(`${AppRoutes.buySubscription}`)};return jsxRuntimeExports.jsxs(PageContainer,{title:"Dashboard",children:[N?jsxRuntimeExports.jsx(Loading,{}):jsxRuntimeExports.jsxs("div",{className:" bg-surface-secondary  py-5 overflow-hidden ",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-center pb-5",children:[jsxRuntimeExports.jsx(Input,{placeholder:"Search By Country",className:"px-3 py-2",value:K,onChange:G=>{Ae(G.target.value)}}),jsxRuntimeExports.jsxs("div",{className:"flex justify-between items-center gap-4",children:[jsxRuntimeExports.jsx(ToggleButtons,{selected:C,setSelected:E}),((Je=ue.currentOrganisation)==null?void 0:Je.subscription)!=="Full Access"&&hasPermission(ue.user,"canAddAccountSubscription")&&jsxRuntimeExports.jsx(Link,{to:`${AppRoutes.buySubscription}`,children:jsxRuntimeExports.jsx(Button,{icon:jsxRuntimeExports.jsx(MdDashboardCustomize,{}),type:"primary",children:"Add dashboard"})})]})]}),le.length===0?jsxRuntimeExports.jsx("div",{className:"flex justify-center items-center h-full",children:jsxRuntimeExports.jsx("span",{className:"text-content-secondary text-lg",children:"No data found"})}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[C===0&&jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3 place-content-start",children:[jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1  md:grid-cols-2 gap-3 place-content-start",children:le.map((G,L)=>jsxRuntimeExports.jsx(DashboardCard,{onClick:()=>{ve(G)},dashboardData:G},L))}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 ",children:jsxRuntimeExports.jsx(MapChart,{databoards:le,onClick:G=>{ve(G)}})})]}),C===1&&jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3",children:le.map((G,L)=>jsxRuntimeExports.jsx(DashboardCard,{onClick:()=>{ve(G)},dashboardData:G},L))})]})]}),jsxRuntimeExports.jsx(Modal,{destroyOnClose:!0,centered:!0,width:600,footer:null,open:Ie,title:"",className:"modal header",onCancel:()=>Qe(!1),children:jsxRuntimeExports.jsx(PendingBoardModalContent,{})})]})}export{DashboardManagement as default};
