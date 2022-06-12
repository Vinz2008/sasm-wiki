"use strict";(self.webpackChunksasm_website=self.webpackChunksasm_website||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),c=["components"],a={id:"text_section",title:"Text section"},s="Text Section",l={unversionedId:"Sections/text_section",id:"Sections/text_section",title:"Text section",description:"The text section is where the code is. You need to declare there the start function.",source:"@site/docs/Sections/text-section.md",sourceDirName:"Sections",slug:"/Sections/text_section",permalink:"/sasm-wiki/docs/Sections/text_section",draft:!1,editUrl:"https://github.com/Vinz2008/sasm-wiki/tree/main/docs/docs/Sections/text-section.md",tags:[],version:"current",frontMatter:{id:"text_section",title:"Text section"},sidebar:"tutorialSidebar",previous:{title:"Data section",permalink:"/sasm-wiki/docs/Sections/data_section"},next:{title:"Comments",permalink:"/sasm-wiki/docs/comment"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Equivalent in assembly",id:"equivalent-in-assembly",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-section"},"Text Section"),(0,o.kt)("p",null,"The text section is where the code is. You need to declare there the start function."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"text section\nstart:\n    move eax <= 20\n")),(0,o.kt)("h2",{id:"equivalent-in-assembly"},"Equivalent in assembly"),(0,o.kt)("p",null," The equivalent in assembly is ",(0,o.kt)("inlineCode",{parentName:"p"},"section .text")))}f.isMDXComponent=!0}}]);