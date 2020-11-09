(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{248:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return l}));var n=t(2),r=t(7),m=(t(0),t(312)),c=t(316),s=t(317),b={title:"Triangle"},p={unversionedId:"dp/triangle",id:"dp/triangle",isDocsHomePage:!1,title:"Triangle",description:"\u63cf\u8ff0",source:"@site/docs/dp/triangle.md",slug:"/dp/triangle",permalink:"/dp/triangle",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/triangle.md",version:"current",sidebar:"someSidebar",previous:{title:"Patching Array",permalink:"/greedy/patching-array"},next:{title:"Maximum Subarray",permalink:"/dp/maximum-subarray"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],o={rightToc:i};function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(m.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(m.b)("p",null,"Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below."),Object(m.b)("p",null,"For example, given the following triangle"),Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{}),"[\n     [2],\n    [3,4],\n   [6,5,7],\n  [4,1,8,3]\n]\n")),Object(m.b)("p",null,"The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11)."),Object(m.b)("p",null,"Note: Bonus point if you are able to do this using only ",Object(m.b)("inlineCode",{parentName:"p"},"O(n)")," extra space, where n is the total number of rows in the triangle."),Object(m.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(m.b)("p",null,"\u8bbe\u72b6\u6001\u4e3a",Object(m.b)("inlineCode",{parentName:"p"},"f(i, j)"),"\uff0c\u8868\u793a\u4ece\u4ece\u4f4d\u7f6e",Object(m.b)("inlineCode",{parentName:"p"},"(i,j)"),"\u51fa\u53d1\uff0c\u8def\u5f84\u7684\u6700\u5c0f\u548c\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"),Object(m.b)("div",{className:"math math-display"},Object(m.b)("span",Object(n.a)({parentName:"div"},{className:"katex-display"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(m.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),Object(m.b)("semantics",{parentName:"math"},Object(m.b)("mrow",{parentName:"semantics"},Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",{parentName:"mrow"},"="),Object(m.b)("mi",{parentName:"mrow"},"min"),Object(m.b)("mo",{parentName:"mrow"},"\u2061"),Object(m.b)("mrow",{parentName:"mrow"},Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"{"),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"f"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mn",{parentName:"mrow"},"1"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"}")),Object(m.b)("mo",{parentName:"mrow"},"+"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(m.b)("mi",{parentName:"mrow"},"i"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(m.b)("mi",{parentName:"mrow"},"j"),Object(m.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(m.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f(i,j)=\\min\\left\\{f(i+1,j),f(i+1,j+1)\\right\\}+(i,j)")))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mop"}),"min"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"minner"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen delimcenter",style:{top:"0em"}}),"{"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose delimcenter",style:{top:"0em"}}),"}")),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(m.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))),Object(m.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(m.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(m.b)(s.a,{value:"java",mdxType:"TabItem"},Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int minimumTotal(List<List<Integer>> triangle) {\n        for (int i = triangle.size() - 2; i >= 0; --i)\n            for (int j = 0; j < i + 1; ++j) {\n                int old = triangle.get(i).get(j);\n                triangle.get(i).set(j, old + Math.min(triangle.get(i + 1).get(j),\n                        triangle.get(i + 1).get(j + 1)));\n            }\n\n        return triangle.get(0).get(0);\n    }\n}\n"))),Object(m.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(m.b)("pre",null,Object(m.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int minimumTotal (vector<vector<int>>& triangle) {\n        for (int i = triangle.size() - 2; i >= 0; --i)\n            for (int j = 0; j < i + 1; ++j)\n                triangle[i][j] += min(triangle[i + 1][j],\n                        triangle[i + 1][j + 1]);\n\n        return triangle [0][0];\n    }\n};\n")))))}l.isMDXComponent=!0},312:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return O}));var n=t(0),r=t.n(n);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),i=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=i(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,m=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),o=i(t),j=n,O=o["".concat(c,".").concat(j)]||o[j]||l[j]||m;return t?r.a.createElement(O,s(s({ref:a},p),{},{components:t})):r.a.createElement(O,s({ref:a},p))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var m=t.length,c=new Array(m);c[0]=j;var s={};for(var b in a)hasOwnProperty.call(a,b)&&(s[b]=a[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<m;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},313:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},314:function(e,a,t){"use strict";var n=t(0);const r=Object(n.createContext)(void 0);a.a=r},315:function(e,a,t){"use strict";var n=t(0),r=t(314);a.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},316:function(e,a,t){"use strict";var n=t(0),r=t.n(n),m=t(315),c=t(313),s=t(49),b=t.n(s);const p=37,i=39;a.a=function(e){const{block:a,children:t,defaultValue:s,values:o,groupId:l}=e,{tabGroupChoices:j,setTabGroupChoices:O}=Object(m.a)(),[u,N]=Object(n.useState)(s),[g,d]=Object(n.useState)(!1);if(null!=l){const e=j[l];null!=e&&e!==u&&o.some((a=>a.value===e))&&N(e)}const f=e=>{N(e),null!=l&&O(l,e)},h=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||d(!0)},w=()=>{d(!1)};return Object(n.useEffect)((()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",w)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},o.map((({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":u===e,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":u===e}),style:g?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case i:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case p:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(h,e.target,e),y(e)},onFocus:()=>f(e),onClick:()=>{f(e),d(!1)},onPointerDown:()=>d(!1)},a)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((e=>e.props.value===u))[0]))}},317:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);