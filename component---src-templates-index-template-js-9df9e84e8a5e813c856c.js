(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[509],{7383:function(e,t,i){"use strict";var r=i(7294),a=i(1554),n=i(5444),o=i(1621);t.Z=function(e){var t=e.posts.map((function(e){var t=e.frontmatter,i=e.fields,a=e.excerpt,n=e.timeToRead,o=t.title,l=t.tags,m=t.date,d=t.description,c=i.slug;return r.createElement(s,{key:c,tags:l,title:o,date:m,slug:c,timeToRead:n,description:d,excerpt:a})}));return r.createElement(l,null,t)};var s=function(e){var t=e.title,i=e.date,a=e.timeToRead,s=e.tags,l=e.excerpt,g=e.description,f=e.slug;return r.createElement(m,null,r.createElement(o.Z,{tags:s}),r.createElement(d,null,r.createElement(n.Link,{to:f},t)),r.createElement(c,{dangerouslySetInnerHTML:{__html:g||l}}),r.createElement(p,null,r.createElement("span",null,i),r.createElement("span",null,a," mins")))},l=a.ZP.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),m=a.ZP.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"rmizj4-1"})(["position:relative;display:flex;flex-direction:column;padding:1.5rem;border:1px solid #000000;background-color:#ffffff;backdrop-filter:blur(10px);border-radius:8px;&:hover{background-color:#9fc0de;}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),d=a.ZP.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"rmizj4-2"})(["line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;}"]),c=a.ZP.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),p=a.ZP.div.withConfig({displayName:"post-list__PostListMeta",componentId:"rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},1444:function(e,t,i){"use strict";var r=i(5444),a=(0,i(1554).ZP)(r.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1e3ktw4-0"})(["padding:0.5rem;padding-left:1.5rem;padding-right:1.5rem;color:inherit;background-color:rgba(255,255,255,0.4);text-decoration:none;border-radius:0px;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"]);t.Z=a},1621:function(e,t,i){"use strict";var r=i(7294),a=i(1554),n=i(5444);t.Z=function(e){var t=e.tags;return r.createElement("div",null,t&&t.map((function(e){return r.createElement(o,{key:e},r.createElement(n.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=a.ZP.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:#ffffff;text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid #000000;border-radius:4px;}& a:hover{background-color:#f2c894;}"])},2295:function(e,t,i){"use strict";i.r(t);var r=i(7294),a=i(1397),n=i(7383),o=i(1554),s=i(1444),l=(0,o.ZP)(s.Z).withConfig({displayName:"index-template___StyledStyledLink",componentId:"sc-1cnic20-0"})(["display:block;margin-top:var(--size-800);margin-bottom:var(--size-800);margin-left:auto;margin-right:auto;width:fit-content;border:1px solid #000000;border-radius:4px;"]);t.default=function(e){var t=e.data,i=t.allMarkdownRemark.nodes,o=t.markdownRemark.html,s=t.markdownRemark.frontmatter.title;return r.createElement(a.Z,{title:s},r.createElement(m,{dangerouslySetInnerHTML:{__html:o}}),r.createElement(n.Z,{posts:i}),r.createElement(l,{to:"/blog"},"View All posts"))};var m=o.ZP.div.withConfig({displayName:"index-template__Intro",componentId:"sc-1cnic20-1"})(["display:flex;flex-direction:column;max-width:60ch;align-items:center;margin-right:auto;margin-left:auto;margin-top:var(--size-800);margin-bottom:var(--size-900);text-align:center;& p{text-transform:capitalize;font-size:var(--size-400);}@media screen and (max-width:700px){& h1{font-size:var(--size-700);}}"])}}]);
//# sourceMappingURL=component---src-templates-index-template-js-9df9e84e8a5e813c856c.js.map