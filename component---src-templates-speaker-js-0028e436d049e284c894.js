(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3mA1":function(e,t,n){"use strict";n("zGcK");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("+ZDr"),l=n.n(o),m=r.c.ul.withConfig({displayName:"Tags",componentId:"sc-1mg3606-0"})(["list-style:none;margin:0;overflow:hidden;padding:0;& > li{float:left;}"]),c=r.c.li.withConfig({displayName:"Tags__Tag",componentId:"sc-1mg3606-1"})(["background:#eee;border-radius:3px 0 0 3px;color:#999;display:inline-block;height:26px;line-height:26px;padding:0 20px 0 23px;position:relative;margin:0 10px 10px 0;text-decoration:none;-webkit-transition:color 0.2s;a{color:black;}&::before{background:#fff;border-radius:10px;box-shadow:inset 0 1px rgba(0,0,0,0.25);content:'';height:6px;left:10px;position:absolute;width:6px;top:10px;}&::after{background:#fff;border-bottom:13px solid transparent;border-left:10px solid #eee;border-top:13px solid transparent;content:'';position:absolute;right:0;top:0;}&.current,&:hover{background-color:crimson;color:white;a{color:white;}}&.current::after,&:hover::after{border-left-color:crimson;}"]);t.a=function(e){var t=e.tags,n=e.currentTag;return i.a.createElement(m,null,t.sort((function(e,t){var n=e.toLowerCase(),a=t.toLowerCase();return n<a?-1:n>a?1:0})).map((function(e){return i.a.createElement(c,{className:e==n?"current":"",key:e},i.a.createElement(l.a,{to:"/talks?tag="+e},e))})))}},"8PZp":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("+ZDr"),i=n.n(a),r=n("q1tI"),o=n.n(r),l=n("vOnD"),m=n("dndX"),c=n("D7tS"),s=n("XZpT");var d=l.c.div.withConfig({displayName:"listItem__Item",componentId:"sc-1ydimle-0"})(["border:1px solid ",";width:100%;margin:1rem;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);display:flex;flex-direction:row;align-items:top;@media (max-width:","){flex-direction:column;margin:0.5rem;padding:0.2rem;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize})),p=l.c.div.withConfig({displayName:"listItem__Description",componentId:"sc-1ydimle-1"})(["margin-left:2rem;"]),u=l.c.h3.withConfig({displayName:"listItem__Title",componentId:"sc-1ydimle-2"})(["font-size:2rem;margin:0;padding:0;@media (max-width:","){font-size:1.4rem;margin:0.8rem 0;}a{color:",";}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),f=l.c.div.withConfig({displayName:"listItem__Speakers",componentId:"sc-1ydimle-3"})(["display:flex;flex-direction:row;align-items:left;"]),g=l.c.div.withConfig({displayName:"listItem__Registration",componentId:"sc-1ydimle-4"})(["margin-left:2rem;a{color:",";text-align:center;font-variant:small-caps;display:flex;flex-direction:column;align-items:center;font-weight:bold;font-size:1.2rem;padding:0 2rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}@media (max-width:","){padding:0;}i{@media (max-width:","){display:none;}}}"],(function(e){return e.theme.blue}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),h=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.edition;return o.a.createElement(d,null,o.a.createElement(c.a,{date:e.date,edition:e.edition}),o.a.createElement(p,null,e.talks.map((function(t,n){return o.a.createElement("div",{key:"devops-talk-"+e.id+"-"+n,style:{marginBottom:"3rem"}},o.a.createElement(u,null,o.a.createElement(i.a,{to:"/caen-camp-devops/"+e.slug},t.title)),o.a.createElement(f,null,t.speakers.length>0&&t.speakers.map((function(e){return o.a.createElement(s.a,{speaker:e,key:e.slug})}))))}))),Object(m.a)(new Date,new Date(e.date))&&e.meetupId&&o.a.createElement(g,null,o.a.createElement("a",{href:"https://www.meetup.com/fr-FR/CaenCamp/events/"+e.meetupId+"/",onClick:this.handleClick},o.a.createElement("i",{className:"fa fa-meetup fa-5x"}),o.a.createElement("p",null,"Inscrivez-vous !"))))},a}(r.Component)},K13J:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("+ZDr"),i=n.n(a),r=n("q1tI"),o=n.n(r),l=n("vOnD"),m=(n("qcrV"),n("D7tS")),c=n("XZpT"),s=n("3mA1"),d=l.c.div.withConfig({displayName:"listItem__Item",componentId:"q181o2-0"})(["border:1px solid ",";width:100%;margin:1rem;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);a{display:flex;flex-direction:row;align-items:left;@media (max-width:","){flex-direction:column;}}@media (max-width:","){margin:0.5rem;padding:0.2rem;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),p=l.c.div.withConfig({displayName:"listItem__Description",componentId:"q181o2-1"})(["margin-left:2rem;"]),u=l.c.h3.withConfig({displayName:"listItem__Title",componentId:"q181o2-2"})(["font-size:2rem;margin:0;padding:0;@media (max-width:","){font-size:1.4rem;margin:0.8rem 0;}"],(function(e){return e.theme.mobileSize})),f=l.c.p.withConfig({displayName:"listItem__Resume",componentId:"q181o2-3"})(["color:",";margin:1rem 0;padding:0;font-style:italic;"],(function(e){return e.theme.black})),g=l.c.div.withConfig({displayName:"listItem__Speakers",componentId:"q181o2-4"})(["display:flex;flex-direction:row;align-items:left;"]),h=function(e){var t=e.dojo;return o.a.createElement(d,null,o.a.createElement(i.a,{to:"/coding-dojo/"+t.slug},o.a.createElement(m.a,{date:t.date,edition:t.edition}),o.a.createElement(p,null,o.a.createElement(u,null,t.title),o.a.createElement(g,null,t.craftsmen.length>0&&t.craftsmen.map((function(e){return o.a.createElement(c.a,{speaker:e})}))),o.a.createElement(f,null,t.description),o.a.createElement(s.a,{tags:t.tags}))))}},"N+Im":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("gu/5");var a=n("q1tI"),i=n.n(a);var r=n("vOnD").c.div.withConfig({displayName:"Links__LinksContainer",componentId:"ati4k1-0"})(["width:100%;display:flex;flex-wrap:wrap;flex-direction:row;align-items:top;justify-content:center;margin-top:1rem;a{color:",";margin:0 5px;}"],(function(e){return e.theme.grey})),o=["github","hacker-news","linkedin","medium","perso","stack-overflow","twitter"],l=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.props.links?function(e){return e.filter((function(e){return o.includes(e.title.toLowerCase())})).map((function(e){return{url:e.url,class:"perso"===e.title?"fa-user-circle":"fa-"+e.title.toLowerCase()}}))}(this.props.links):[];return i.a.createElement(r,null,t.length>0&&t.map((function(t){return i.a.createElement("a",{key:t.class,href:t.url,onClick:e.handleClick},i.a.createElement("i",{className:"fa "+t.class}))})))},a}(a.Component)},XZpT:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=r.c.div.withConfig({displayName:"MinimalView__Item",componentId:"sc-1sd2yp7-0"})(["display:flex;flex-direction:row;align-items:center;margin-right:1rem;"]),l=r.c.img.withConfig({displayName:"MinimalView__Profile",componentId:"sc-1sd2yp7-1"})(["border-radius:50%;width:30px;height:30px;margin-right:0.5rem;"]),m=r.c.span.withConfig({displayName:"MinimalView__Name",componentId:"sc-1sd2yp7-2"})(["font-size:1rem;text-align:left;padding:0;color:",";"],(function(e){return e.theme.black}));t.a=function(e){var t=e.speaker;return i.a.createElement(o,null,i.a.createElement(l,{src:"/speakers/"+t.picture}),i.a.createElement(m,null,t.firstName," ",t.lastName))}},dndX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("/Tr7");function i(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a.a)(e),i=Object(a.a)(t);return n.getTime()<i.getTime()}},oLTL:function(e,t,n){"use strict";n.r(t),n.d(t,"Profile",(function(){return w})),n.d(t,"Name",(function(){return y})),n.d(t,"query",(function(){return v}));n("E5k/");var a=n("TJpk"),i=n.n(a),r=n("q1tI"),o=n.n(r),l=n("vOnD"),m=n("K13J"),c=n("Upz/"),s=n("KE4F"),d=n("rNdH"),p=n("Bl7J"),u=n("N+Im"),f=n("xel/"),g=n("8PZp"),h=l.c.div.withConfig({displayName:"speaker__SpeakerContainer",componentId:"fxntmh-0"})(["display:flex;flex-direction:row;align-items:left;margin:4rem 0;"]),w=l.c.img.withConfig({displayName:"speaker__Profile",componentId:"fxntmh-1"})(["border-radius:50%;width:150px;height:150px;margin:0 1rem;"]),k=l.c.div.withConfig({displayName:"speaker__SpeakerBio",componentId:"fxntmh-2"})(["display:flex;flex-direction:column;align-items:left;margin:0;padding:0;"]),y=l.c.h1.withConfig({displayName:"speaker__Name",componentId:"fxntmh-3"})(["font-size:2rem;text-align:left;padding:0;margin:0;color:",";"],(function(e){return e.theme.black})),x=l.c.div.withConfig({displayName:"speaker__TalksContainer",componentId:"fxntmh-4"})(["display:flex;flex-direction:column;"]),E=l.c.div.withConfig({displayName:"speaker__DojoContainer",componentId:"fxntmh-5"})(["display:flex;flex-direction:column;"]);t.default=function(e){var t=e.data,n=Object(c.e)(t.rawSpeaker,t.talks.edges,t.lightnings.edges,t.dojos.edges,t.devops.edges);return o.a.createElement(p.a,null,o.a.createElement(s.d,null,o.a.createElement(i.a,null,o.a.createElement("title",null,n.firstName," ",n.lastName),o.a.createElement("meta",{name:"description",content:"A trouver"}),o.a.createElement("meta",{name:"keywords",content:"A voir"})),o.a.createElement(d.a,{path:"/speakers"}),o.a.createElement(h,null,o.a.createElement(k,null,o.a.createElement(w,{src:"/speakers/"+n.picture}),o.a.createElement(u.a,{links:n.links})),o.a.createElement(k,null,o.a.createElement(y,null,n.firstName," ",n.lastName),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))),n.talks.length>0&&o.a.createElement(x,null,o.a.createElement("h2",null,o.a.createElement("i",{className:"fa fa-bullhorn","aria-hidden":"true"})," ",1===n.talks.length?"Son Talk":"Ses Talks"),n.talks.map((function(e){return o.a.createElement(f.a,{key:e.id,talk:Object.assign({},e,{speakers:[]})})}))),n.devops.length>0&&o.a.createElement(x,null,o.a.createElement("h2",null,1===n.devops.length?"Son Devops":"Ses Devops"),n.devops.map((function(e){return o.a.createElement(g.a,{key:e.id,edition:Object.assign({},e,{talks:e.talks.map((function(e){return Object.assign({},e,{speakers:[]})}))})})}))),n.lightning.length>0&&o.a.createElement(x,null,o.a.createElement("h2",null,o.a.createElement("i",{className:"fa fa-bolt","aria-hidden":"true"})," ",1===n.lightning.length?"Son Lightning Talk":"Ses Lightning Talks"),n.lightning.map((function(e){return o.a.createElement(f.a,{key:e.id,talk:Object.assign({},e,{speakers:[]})})}))),n.dojos.length>0&&o.a.createElement(E,null,o.a.createElement("h2",null,1===n.dojos.length?"Son Dojo":"Ses Dojos"),n.dojos.map((function(e){return o.a.createElement(m.a,{key:e.id,dojo:Object.assign({},e,{craftsmen:[]})})})))))};var v="2190907840"},rNdH:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("+ZDr"),o=n.n(r),l=n("vOnD"),m=Object(l.c)(o.a).withConfig({displayName:"BackToList__StyledLink",componentId:"sc-1pg3fan-0"})(["color:",";"],(function(e){return e.theme.black})),c=l.c.div.withConfig({displayName:"BackToList__BackToListContainer",componentId:"sc-1pg3fan-1"})(["@media (max-width:","){margin-top:1.5em;}"],(function(e){return e.theme.mobileSize}));t.a=function(e){var t=e.path;return i.a.createElement(c,null,i.a.createElement(m,{to:t},i.a.createElement("i",{className:"fa fa-list-alt","aria-hidden":"true"})," Retour à la liste"))}},"xel/":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n("+ZDr"),i=n.n(a),r=n("q1tI"),o=n.n(r),l=n("vOnD"),m=n("dndX"),c=n("D7tS"),s=n("XZpT"),d=n("3mA1");var p=l.c.div.withConfig({displayName:"listItem__Item",componentId:"snwha5-0"})(["border:1px solid ",";width:100%;margin:1rem;padding:1rem;border-radius:0.5rem;box-shadow:2px 2px 5px rgba(235,235,235,0.5);display:flex;flex-direction:row;align-items:top;@media (max-width:","){flex-direction:column;margin:0.5rem;padding:0.2rem;}"],(function(e){return e.theme.greyLight}),(function(e){return e.theme.mobileSize})),u=l.c.div.withConfig({displayName:"listItem__Description",componentId:"snwha5-1"})(["margin-left:2rem;"]),f=l.c.h3.withConfig({displayName:"listItem__Title",componentId:"snwha5-2"})(["font-size:2rem;margin:0;padding:0;@media (max-width:","){font-size:1.4rem;margin:0.8rem 0;}a{color:",";}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),g=l.c.h4.withConfig({displayName:"listItem__TitleLightning",componentId:"snwha5-3"})(["font-size:1.3rem;margin:1rem 0 0.5rem 0;padding:0;@media (max-width:","){font-size:1rem;margin:0.8rem 0;}a{color:",";}"],(function(e){return e.theme.mobileSize}),(function(e){return e.theme.black})),h=l.c.p.withConfig({displayName:"listItem__Resume",componentId:"snwha5-4"})(["color:",";margin:1rem 0;padding:0;font-style:italic;"],(function(e){return e.theme.black})),w=l.c.div.withConfig({displayName:"listItem__Speakers",componentId:"snwha5-5"})(["display:flex;flex-direction:row;align-items:left;"]),k=l.c.div.withConfig({displayName:"listItem__Registration",componentId:"snwha5-6"})(["margin-left:2rem;a{color:",";text-align:center;font-variant:small-caps;display:flex;flex-direction:column;align-items:center;font-weight:bold;font-size:1.2rem;padding:0 2rem;-webkit-transition:color 0.2s;&:hover{color:crimson;}@media (max-width:","){padding:0;}i{@media (max-width:","){display:none;}}}"],(function(e){return e.theme.blue}),(function(e){return e.theme.mobileSize}),(function(e){return e.theme.mobileSize})),y=function(e){var t=e.currentTag,n=e.lightning,a=e.talk;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null,o.a.createElement("i",{className:"fa fa-bolt","aria-hidden":"true"})," ",o.a.createElement(i.a,{to:"/talks/"+a.slug},n.title)),o.a.createElement(w,null,n.speakers.length>0&&n.speakers.map((function(e){return o.a.createElement(s.a,{speaker:e,key:e.slug})}))),o.a.createElement(h,null,n.description),o.a.createElement(d.a,{tags:n.tags,currentTag:t}))},x=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.talk,n=e.currentTag;return o.a.createElement(p,null,o.a.createElement(c.a,{date:t.date,edition:t.edition}),o.a.createElement(u,null,o.a.createElement(f,null,t.lightnings&&!!t.lightnings.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fa fa-bullhorn","aria-hidden":"true"})," "),o.a.createElement(i.a,{to:"/talks/"+t.slug},t.title)),o.a.createElement(w,null,t.speakers.length>0&&t.speakers.map((function(e){return o.a.createElement(s.a,{speaker:e,key:e.slug})}))),o.a.createElement(h,null,t.description),o.a.createElement(d.a,{tags:t.tags,currentTag:n}),t.lightnings&&!!t.lightnings.length&&t.lightnings.map((function(e,a){return o.a.createElement(y,{currentTag:n,lightning:e,talk:t,key:t.edition+"_lightning_"+a})}))),Object(m.a)(new Date,new Date(t.date))&&t.meetupId&&o.a.createElement(k,null,o.a.createElement("a",{href:"https://www.meetup.com/fr-FR/CaenCamp/events/"+t.meetupId+"/",onClick:this.handleClick},o.a.createElement("i",{className:"fa fa-meetup fa-5x"}),o.a.createElement("p",null,"Inscrivez-vous !"))))},a}(r.Component)}}]);
//# sourceMappingURL=component---src-templates-speaker-js-0028e436d049e284c894.js.map