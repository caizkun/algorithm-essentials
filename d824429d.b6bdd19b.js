(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{292:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(7),o=(r(0),r(329)),i=r(333),c=r(334),u={title:"Convert Sorted Array to Binary Search Tree"},s={unversionedId:"binary-tree/bst/convert-sorted-array-to-binary-search-tree",id:"binary-tree/bst/convert-sorted-array-to-binary-search-tree",isDocsHomePage:!1,title:"Convert Sorted Array to Binary Search Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/bst/convert-sorted-array-to-binary-search-tree.md",slug:"/binary-tree/bst/convert-sorted-array-to-binary-search-tree",permalink:"/binary-tree/bst/convert-sorted-array-to-binary-search-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/bst/convert-sorted-array-to-binary-search-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"Validate Binary Search Tree",permalink:"/binary-tree/bst/validate-binary-search-tree"},next:{title:"Convert Sorted List to Binary Search Tree",permalink:"/binary-tree/bst/convert-sorted-list-to-binary-search-tree"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given an array where elements are sorted in ascending order, convert it to a height balanced BST."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u4e8c\u5206\u6cd5\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Convert Sorted Array to Binary Search Tree\n// \u4e8c\u5206\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public TreeNode sortedArrayToBST (int[] nums) {\n        return sortedArrayToBST(nums, 0, nums.length);\n    }\n\n    private static TreeNode sortedArrayToBST (int[] nums, int begin, int end) {\n        int length = end - begin;\n        if (length < 1) return null;  // \u7ec8\u6b62\u6761\u4ef6\n\n        // \u4e09\u65b9\u5408\u5e76\n        int mid = begin + length / 2;\n        TreeNode root = new TreeNode (nums[mid]);\n        root.left = sortedArrayToBST(nums, begin, mid);\n        root.right = sortedArrayToBST(nums, mid + 1, end);\n\n        return root;\n    }\n}\n"))),Object(o.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Convert Sorted Array to Binary Search Tree\n// \u4e8c\u5206\u6cd5\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    TreeNode* sortedArrayToBST (vector<int>& num) {\n        return sortedArrayToBST(num.begin(), num.end());\n    }\n\n    template<typename RandomAccessIterator>\n    TreeNode* sortedArrayToBST (RandomAccessIterator first,\n            RandomAccessIterator last) {\n        const auto length = distance(first, last);\n\n        if (length <= 0) return nullptr;  // \u7ec8\u6b62\u6761\u4ef6\n\n        // \u4e09\u65b9\u5408\u5e76\n        auto mid = first + length / 2;\n        TreeNode* root = new TreeNode (*mid);\n        root->left = sortedArrayToBST(first, mid);\n        root->right = sortedArrayToBST(mid + 1, last);\n\n        return root;\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/binary-tree/bst/convert-sorted-list-to-binary-search-tree"}),"Convert Sorted List to Binary Search Tree"))))}b.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,p=d["".concat(i,".").concat(f)]||d[f]||b[f]||o;return r?a.a.createElement(p,c(c({ref:t},s),{},{components:r})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},330:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},331:function(e,t,r){"use strict";var n=r(0),a=r(332);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},332:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},333:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(331),i=r(330),c=r(49),u=r.n(c),s=37,l=39;t.a=function(e){var t=e.block,r=e.children,c=e.defaultValue,d=e.values,b=e.groupId,f=e.className,p=Object(o.a)(),y=p.tabGroupChoices,m=p.setTabGroupChoices,v=Object(n.useState)(c),h=v[0],O=v[1],g=Object(n.useState)(!1),T=g[0],j=g[1];if(null!=b){var w=y[b];null!=w&&w!==h&&d.some((function(e){return e.value===w}))&&O(w)}var S=function(e){O(e),null!=b&&m(b,e)},A=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},E=function(){j(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},f)},d.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),style:T?{}:{outline:"none"},key:t,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(A,e.target,e),C(e)},onFocus:function(){return S(t)},onClick:function(){S(t),j(!1)},onPointerDown:function(){return j(!1)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===h}))[0]))}},334:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);