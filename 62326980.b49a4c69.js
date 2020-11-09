(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(7),r=(t(0),t(310)),o=t(314),c=t(315),s={title:"Graph Valid Tree"},l={unversionedId:"graph/graph-valid-tree",id:"graph/graph-valid-tree",isDocsHomePage:!1,title:"Graph Valid Tree",description:"\u63cf\u8ff0",source:"@site/docs/graph/graph-valid-tree.md",slug:"/graph/graph-valid-tree",permalink:"/graph/graph-valid-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/graph/graph-valid-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"Clone Graph",permalink:"/graph/clone-graph"},next:{title:"Reverse Bits",permalink:"/bitwise-operations/reverse-bits"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"DFS",id:"dfs",children:[]},{value:"BFS",id:"bfs",children:[]}],d={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given ",Object(r.b)("inlineCode",{parentName:"p"},"n")," nodes labeled from 0 to ",Object(r.b)("inlineCode",{parentName:"p"},"n-1")," and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Example 1"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Input"),": n = 5, and edges = [","[0,1]",", ","[0,2]",", ","[0,3]",", ","[1,4]","]",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Output"),": true")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 2"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Input"),": n = 5, and edges = [","[0,1]",", ","[1,2]",", ","[2,3]",", ","[1,3]",", ","[1,4]","]",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Output"),": false")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": you can assume that no duplicate edges will appear in edges. Since all edges are undirected, ",Object(r.b)("inlineCode",{parentName:"p"},"[0,1]")," is the same as ",Object(r.b)("inlineCode",{parentName:"p"},"[1,0]")," and thus will not appear together in edges."),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u4e00\u4e2a\u56fe\u662f\u4e00\u9897\u6811\uff0c\u5f53\u4e14\u4ec5\u5f53\u5b83\u6ee1\u8db3\u5982\u4e0b\u4e24\u4e2a\u6761\u4ef6\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u56fe\u662f\u5168\u8fde\u901a\u7684\u3002\u5bf9\u4e8e\u56fe\u4e2d\u7684\u4efb\u610f\u4e24\u70b9\uff0c\u81f3\u5c11\u5b58\u5728\u4e00\u6761\u8def\u5f84\u8fde\u63a5\u5b83\u4fe9\u3002"),Object(r.b)("li",{parentName:"ul"},"\u56fe\u91cc\u6ca1\u6709\u73af\u3002\u5bf9\u4e8e\u56fe\u4e2d\u7684\u4efb\u610f\u4e24\u70b9\uff0c\u6709\u4e14\u4ec5\u6709\u4e00\u6761\u8def\u5f84\u3002")),Object(r.b)("p",null,"\u53ef\u4ee5\u7528 DFS \u548c BFS \u904d\u5386\u56fe\uff0c\u5728\u904d\u5386\u7684\u8fc7\u7a0b\u4e2d\u68c0\u67e5\u662f\u5426\u6ee1\u8db3\u4e0a\u8ff0\u4e24\u4e2a\u6761\u4ef6\u3002\u5982\u679c\u67d0\u4e2a\u7ed3\u70b9\u88ab\u8bbf\u95ee\u4e86\u4e24\u6b21\uff0c\u8bf4\u660e\u5b58\u5728\u73af\uff1b\u904d\u5386\u7ed3\u675f\u540e\uff0c\u5982\u679c\u8bbf\u95ee\u8fc7\u7684\u7ed3\u70b9\u6570\u91cf\u5c0f\u4e8e\u56fe\u4e2d\u7ed3\u70b9\u603b\u6570\uff0c\u8bf4\u660e\u56fe\u4e0d\u662f\u5168\u8fde\u901a\u7684\u3002"),Object(r.b)("h3",{id:"dfs"},"DFS"),Object(r.b)(o.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Graph Valid Tree\n# DFS\n# Time Complexity: O(N+E), Space Complexity : O(N + E)\nclass Solution:\n    def validTree(self, n: int, edges: List[List[int]]) -> bool:\n        if len(edges) != n - 1: return False\n\n        adj_list = [[] for _ in range(n)]\n        for A, B in edges:\n            adj_list[A].append(B)\n            adj_list[B].append(A)\n\n        stack = [0]\n        visited = {0}\n\n        while stack:\n            node = stack.pop()\n            for neighbour in adj_list[node]:\n                if neighbour in visited: continue\n                stack.append(neighbour)\n                visited.add(neighbour)\n\n        return len(visited) == n\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Graph Valid Tree\n// DFS\n// Time Complexity: O(N+E), Space Complexity : O(N + E)\nclass Solution {\n    public boolean validTree(int n, int[][] edges) {\n        if (edges.length != n - 1) return false;\n\n        // Construct the adjacency list.\n        List<List<Integer>> adjacencyList = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            adjacencyList.add(new ArrayList<>());\n        }\n        for (int[] edge : edges) {\n            adjacencyList.get(edge[0]).add(edge[1]);\n            adjacencyList.get(edge[1]).add(edge[0]);\n        }\n\n        Stack<Integer> stack = new Stack<>();\n        Set<Integer> visited = new HashSet<>();\n        stack.push(0);\n        visited.add(0);\n\n        while (!stack.isEmpty()) {\n            int node = stack.pop();\n            for (int neighbour : adjacencyList.get(node)) {\n                if (visited.contains(neighbour)) continue;\n                stack.push(neighbour);\n                visited.add(neighbour);\n            }\n        }\n\n        return visited.size() == n;\n    }\n}\n"))),Object(r.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Graph Valid Tree\n// DFS\n// Time Complexity: O(N+E), Space Complexity : O(N + E)\nclass Solution {\npublic:\n    bool validTree(int n, vector<vector<int>>& edges) {\n        if (edges.size() != n - 1) return false;\n\n        // Construct the adjacency list.\n        vector<vector<int>> adj_list(n);\n        for (const vector<int>& edge : edges) {\n            adj_list[edge[0]].push_back(edge[1]);\n            adj_list[edge[1]].push_back(edge[0]);\n        }\n\n        stack<int> stack;\n        unordered_set<int> visited;\n        stack.push(0);\n        visited.insert(0);\n\n        while (!stack.empty()) {\n            int node = stack.top(); stack.pop();\n            for (int neighbour : adj_list[node]) {\n                if (visited.count(neighbour)) continue;\n                stack.push(neighbour);\n                visited.insert(neighbour);\n            }\n        }\n\n        return visited.size() == n;\n    }\n};\n")))),Object(r.b)("h3",{id:"bfs"},"BFS"),Object(r.b)(o.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Graph Valid Tree\n# BFS\n# Time Complexity: O(N+E), Space Complexity : O(N + E)\nclass Solution:\n    def validTree(self, n: int, edges: List[List[int]]) -> bool:\n        if len(edges) != n - 1: return False\n\n        adj_list = [[] for _ in range(n)]\n        for A, B in edges:\n            adj_list[A].append(B)\n            adj_list[B].append(A)\n\n        queue = deque([0])\n        visited = {0}\n\n        while queue:\n            node = queue.popleft()\n            for neighbour in adj_list[node]:\n                if neighbour in visited: continue\n                queue.append(neighbour)\n                visited.add(neighbour)\n\n        return len(visited) == n\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Graph Valid Tree\n// BFS\n// Time Complexity: O(N+E), Space Complexity : O(N + E)\nclass Solution {\n    public boolean validTree(int n, int[][] edges) {\n        if (edges.length != n - 1) return false;\n\n        // Construct the adjacency list.\n        List<List<Integer>> adjacencyList = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            adjacencyList.add(new ArrayList<>());\n        }\n        for (int[] edge : edges) {\n            adjacencyList.get(edge[0]).add(edge[1]);\n            adjacencyList.get(edge[1]).add(edge[0]);\n        }\n\n        Queue<Integer> queue = new LinkedList<>();\n        Set<Integer> visited = new HashSet<>();\n        queue.offer(0);\n        visited.add(0);\n\n        while (!queue.isEmpty()) {\n            int node = queue.poll();\n            for (int neighbour : adjacencyList.get(node)) {\n                if (visited.contains(neighbour)) continue;\n                queue.offer(neighbour);\n                visited.add(neighbour);\n            }\n        }\n\n        return visited.size() == n;\n    }\n}\n"))),Object(r.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Graph Valid Tree\n// BFS\n// Time Complexity: O(N+E), Space Complexity : O(N + E)\nclass Solution {\npublic:\n    bool validTree(int n, vector<vector<int>>& edges) {\n        if (edges.size() != n - 1) return false;\n\n        // Construct the adjacency list.\n        vector<vector<int>> adj_list(n);\n        for (const vector<int>& edge : edges) {\n            adj_list[edge[0]].push_back(edge[1]);\n            adj_list[edge[1]].push_back(edge[0]);\n        }\n\n        queue<int> queue;\n        unordered_set<int> visited;\n        queue.push(0);\n        visited.insert(0);\n\n        while (!queue.empty()) {\n            int node = queue.front(); queue.pop();\n            for (int neighbour : adj_list[node]) {\n                if (visited.count(neighbour)) continue;\n                queue.push(neighbour);\n                visited.insert(neighbour);\n            }\n        }\n\n        return visited.size() == n;\n    }\n};\n")))))}p.isMDXComponent=!0},310:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,g=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return t?i.a.createElement(g,c(c({ref:n},l),{},{components:t})):i.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},311:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},312:function(e,n,t){"use strict";var a=t(0);const i=Object(a.createContext)(void 0);n.a=i},313:function(e,n,t){"use strict";var a=t(0),i=t(312);n.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},314:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(313),o=t(311),c=t(49),s=t.n(c);const l=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:d,groupId:p}=e,{tabGroupChoices:b,setTabGroupChoices:g}=Object(r.a)(),[f,m]=Object(a.useState)(c),[h,v]=Object(a.useState)(!1);if(null!=p){const e=b[p];null!=e&&e!==f&&d.some((n=>n.value===e))&&m(e)}const j=e=>{m(e),null!=p&&g(p,e)},O=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},w=()=>{v(!1)};return Object(a.useEffect)((()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",w)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},d.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:h?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(O,e.target,e),y(e)},onFocus:()=>j(e),onClick:()=>{j(e),v(!1)},onPointerDown:()=>v(!1)},n)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((e=>e.props.value===f))[0]))}},315:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);