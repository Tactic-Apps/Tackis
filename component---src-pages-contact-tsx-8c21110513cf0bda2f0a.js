(self.webpackChunkTackis=self.webpackChunkTackis||[]).push([[650],{9561:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAA//aAAwDAQACEAMQAAAB59B2Ai1ZX//EABsQAAIBBQAAAAAAAAAAAAAAAAACAwEQEhMh/9oACAEBAAEFAiNe7sbIVjVj/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEi/9oACAECAQE/Aaw//8QAGBAAAgMAAAAAAAAAAAAAAAAAARAAESH/2gAIAQEABj8CWh2Z/8QAGRABAQEAAwAAAAAAAAAAAAAAAREAECEx/9oACAEBAAE/IcCF09IcezTQbN//2gAMAwEAAgADAAAAEETP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QZ//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QeEC6jf/EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhMUH/2gAIAQEAAT8QItd02EDbztb5gVR6DFuANNT/2Q=="},"images":{"fallback":{"src":"/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/fc316/hero.jpg","srcSet":"/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/501db/hero.jpg 750w,\\n/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/26cfd/hero.jpg 1080w,\\n/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/f15c5/hero.jpg 1366w,\\n/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/fc316/hero.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/53639/hero.webp 750w,\\n/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/92448/hero.webp 1080w,\\n/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/83f70/hero.webp 1366w,\\n/Tackis/static/92b36ac62d6456ba785f593cbe7bd0f3/273db/hero.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.6104166666666667}')},9601:function(e,a,t){"use strict";var r=t(7294),l=t(3217),c=t(5231);a.Z=function(e){var a=e.title,n=e.pageContext,s=e.location,i=e.crumbLabel,u=n.breadcrumb.crumbs;return r.createElement("section",{id:"PageHero",className:"relative overflow-hidden h-60"},r.createElement(l.S,{src:"../assets/images/hero.jpg",alt:"Hero image",placeholder:"blurred",layout:"fullWidth",className:"absolute top-0 left-0 w-full h-full",__imageData:t(9561)}),r.createElement("div",{className:"absolute w-screen top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"},r.createElement("div",{className:"container grid grid-cols-2 gap-4"},r.createElement("div",{className:"col-span-2 xl:col-span-1 text-white"},r.createElement("h2",{className:"capitalize mb-3"},a),console.log(s.pathname),r.createElement(c.aG,{crumbs:u,crumbSeparator:" > ",crumbLabel:i,location:s,hiddenCrumbs:["/services"],disableLinks:[s.pathname]})))))}},3797:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var r=t(7294),l=t(7325),c=t(471),n=t(9601),s=t(7588),i=t.n(s),u=function(e){var a=e.contactInfoArray.map((function(e){return r.createElement("a",{href:""},r.createElement("div",{key:e.heading,className:"bg-white shadow-xl py-7 px-7 xl:px-16 transition-colors border-2 border-white hover:border-primary-light"},r.createElement(e.Icon,{className:"fill-current text-primary-dark bg-primary-light m-auto w-20 h-20 p-5 rounded-full bg-opacity-50"}),r.createElement("h3",{className:"my-5 capitalize"},e.heading),r.createElement("p",{className:"mb-5"},e.paragraph)))}));return r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center text-center gap-6 xl:gap-16 mb-20"},a)},m=t(490),A=t.n(m),o=t(3283),d=t.n(o),b=t(7189),f=t.n(b),p=t(3402),h=t.n(p),E=function(){var e=[{Icon:f(),heading:"Call Us",paragraph:"Give us a call and speak live with a customer service representative"},{Icon:d(),heading:"Email Us",paragraph:"Email our customer service team directly and we'll call or email you back."},{Icon:A(),heading:"Live Chat",paragraph:"Live chat with a customer service representative through your browser."}];return r.createElement("section",{id:"Contact"},r.createElement("div",{className:"container py-24"},r.createElement(u,{contactInfoArray:e}),r.createElement("div",{className:"text-center m-auto mb-16 max-w-prose"},r.createElement("div",{className:"flex justify-center items-center mb-5"},r.createElement(i(),{className:"fill-current text-primary-dark mr-3 w-7 h-7 bg-primary-light rounded-lg p-1"}),r.createElement("p",{className:"text-primary"},"Message Tackis")),r.createElement("h2",null,"Drop us a line and we'll get back to you within 24 hours")),r.createElement("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-16"},r.createElement("div",{className:"xl:col-span-2"},r.createElement("form",{className:"grid grid-cols-2 gap-4"},r.createElement("input",{type:"text",placeholder:"First Name*",required:!0,className:"col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"}),r.createElement("input",{type:"text",placeholder:"Last Name*",required:!0,className:"col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"}),r.createElement("input",{type:"email",placeholder:"Email*",required:!0,className:"col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"}),r.createElement("input",{type:"text",placeholder:"Phone Number",className:"col-span-2 sm:col-span-1 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"}),r.createElement("textarea",{placeholder:"Your Message*",required:!0,cols:30,rows:10,className:"col-span-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0"}),r.createElement("button",{className:"btn btn-secondary col-span-2 "},"Send Your Message"))),r.createElement("div",{className:"xl:col-span-1 bg-white border border-gray-200 self-start p-5"},r.createElement("h3",{className:"mb-5"},"Tachis Contact Information"),r.createElement("div",{className:"flex items-center mb-3"},r.createElement(h(),{className:"fill-current text-primary mr-2"}),r.createElement("p",null,"201 Manhattan Place, Cherrywood, TX 72281")),r.createElement("div",{className:"flex items-center mb-3"},r.createElement(f(),{className:"fill-current text-primary mr-2"}),r.createElement("p",null,"1 (800) 214-7435")),r.createElement("div",{className:"flex items-center mb-3"},r.createElement(d(),{className:"fill-current text-primary mr-2"}),r.createElement("p",null,"support@tackis.com"))))))},g=function(e){var a=e.pageContext,t=e.location;return r.createElement(l.Z,null,r.createElement(c.Z,{title:"Contact Us"}),r.createElement(n.Z,{title:"Contact Us",pageContext:a,location:t,crumbLabel:"Contact Us"}),r.createElement(E,null))}},9009:function(e,a,t){"use strict";var r=t(5318);a.__esModule=!0,a.default=void 0;var l=r(t(7294)),c=r(t(8384)),n=r(t(4030)),s=t(7791),i=function(e){return l.default.useContext(s.OptionsContext).useAutoGen?l.default.createElement(c.default,e):l.default.createElement(n.default,e)};a.default=i},8384:function(e,a,t){"use strict";var r=t(5318);a.__esModule=!0,a.default=void 0;var l=r(t(7154)),c=r(t(7316)),n=r(t(7294)),s=r(t(5697)),i=t(5444),u=function(e){var a=e.title,t=e.crumbs,r=e.crumbLabel,s=e.crumbSeparator,u=e.disableLinks,m=e.hiddenCrumbs,A=(0,c.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return n.default.createElement(n.default.Fragment,null,a&&n.default.createElement("span",{className:"breadcrumb__title"},a),n.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},n.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return m.includes(e.pathname)?null:n.default.createElement(n.default.Fragment,{key:a+"-"+e.pathname},!u.includes(e.pathname)&&n.default.createElement("li",{className:"breadcrumb__list__item"},n.default.createElement(i.Link,(0,l.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},A),r&&a===t.length-1?r:e.crumbLabel)),u.includes(e.pathname)&&n.default.createElement("li",{className:"breadcrumb__list__item"},n.default.createElement("span",(0,l.default)({className:"breadcrumb__link__disabled"},A),r&&a===t.length-1?r:e.crumbLabel)),a===t.length-1?null:n.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},s))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:s.default.string,crumbSeparator:s.default.string,crumbs:s.default.arrayOf(s.default.shape({location:s.default.shape(),pathname:s.default.string.isRequired})).isRequired,crumbLabel:s.default.string,disableLinks:s.default.arrayOf(s.default.string),hiddenCrumbs:s.default.arrayOf(s.default.string)};var m=u;a.default=m},4030:function(e,a,t){"use strict";var r=t(5318);a.__esModule=!0,a.default=void 0;var l=r(t(7154)),c=r(t(7316)),n=r(t(7294)),s=r(t(5697)),i=t(5444),u=t(7791),m=r(t(5893)),A=function(e){var a=e.title,t=e.location,r=e.crumbLabel,s=e.crumbSeparator,A=(0,c.default)(e,["title","location","crumbLabel","crumbSeparator"]),o=n.default.useContext(u.OptionsContext).usePathPrefix,d=(0,m.default)({location:(0,l.default)({},t,{pathname:o?t.pathname.replace(new RegExp("^"+o),""):t.pathname}),crumbLabel:r,crumbSeparator:s}).crumbs,b=void 0===d?[]:d;return n.default.createElement(n.default.Fragment,null,a&&n.default.createElement("span",{className:"breadcrumb__title"},a),n.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},n.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(e,a){return n.default.createElement("li",{className:"breadcrumb__item",key:a},n.default.createElement(i.Link,(0,l.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===b.length-1?"page":null},A),e.crumbLabel),a===b.length-1?null:n.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};A.defaultProps={title:"",crumbSeparator:" / "},A.propTypes={location:s.default.shape().isRequired,crumbLabel:s.default.string.isRequired,title:s.default.string,crumbSeparator:s.default.string};var o=A;a.default=o},7935:function(e,a,t){"use strict";var r=t(5318);a.__esModule=!0;var l=r(t(9009));a.Breadcrumb=l.default;var c=r(t(8384));a.AutoGenCrumb=c.default;var n=t(1492);a.BreadcrumbContext=n.BreadcrumbContext,a.BreadcrumbConsumer=n.BreadcrumbConsumer,a.BreadcrumbProvider=n.BreadcrumbProvider;var s=r(t(5893));a.useBreadcrumb=s.default},5893:function(e,a,t){"use strict";var r=t(5318);a.__esModule=!0,a.default=void 0;var l=r(t(7294)),c=t(1492),n=function(e){var a=e.location,t=e.crumbLabel,r=e.crumbSeparator,n=l.default.useContext(c.BreadcrumbContext),s=n.crumbs,i=n.updateCrumbs;return l.default.useEffect((function(){i({location:a,crumbLabel:t,crumbSeparator:r})}),[a,t,r,i]),{crumbs:s}};a.default=n},5231:function(e,a,t){"use strict";var r=t(7935);a.aG=r.Breadcrumb,r.BreadcrumbContext,r.BreadcrumbConsumer,r.BreadcrumbProvider,r.useBreadcrumb,r.AutoGenCrumb},490:function(e,a,t){var r=t(7294);function l(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"headset_mic"),r.createElement("path",{d:"M12 0.984q3.75 0 6.375 2.648t2.625 6.352v10.031q0 1.219-0.891 2.109t-2.109 0.891h-6v-2.016h6.984v-0.984h-3.984v-8.016h3.984v-2.016q0-2.906-2.039-4.945t-4.945-2.039-4.945 2.039-2.039 4.945v2.016h3.984v8.016h-3q-1.219 0-2.109-0.891t-0.891-2.109v-7.031q0-3.703 2.625-6.352t6.375-2.648z",key:1})])}l.defaultProps={version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=l,l.default=l},3402:function(e,a,t){var r=t(7294);function l(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"location-pin"),r.createElement("path",{d:"M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z",key:1})])}l.defaultProps={version:"1.1",width:"20",height:"20",viewBox:"0 0 20 20"},e.exports=l,l.default=l},3283:function(e,a,t){var r=t(7294);function l(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"mail"),r.createElement("path",{d:"M1.574 5.286c0.488 0.262 7.248 3.894 7.5 4.029s0.578 0.199 0.906 0.199c0.328 0 0.654-0.064 0.906-0.199s7.012-3.767 7.5-4.029c0.489-0.263 0.951-1.286 0.054-1.286h-16.919c-0.897 0-0.435 1.023 0.053 1.286zM18.613 7.489c-0.555 0.289-7.387 3.849-7.727 4.027s-0.578 0.199-0.906 0.199-0.566-0.021-0.906-0.199-7.133-3.739-7.688-4.028c-0.39-0.204-0.386 0.035-0.386 0.219s0 7.293 0 7.293c0 0.42 0.566 1 1 1h16c0.434 0 1-0.58 1-1 0 0 0-7.108 0-7.292s0.004-0.423-0.387-0.219z",key:1})])}l.defaultProps={version:"1.1",width:"20",height:"20",viewBox:"0 0 20 20"},e.exports=l,l.default=l},7588:function(e,a,t){var r=t(7294);function l(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"paper-plane"),r.createElement("path",{d:"M18.64 2.634c-0.344 0.121-17.321 6.104-17.656 6.222-0.284 0.1-0.347 0.345-0.010 0.479 0.401 0.161 3.796 1.521 3.796 1.521v0l2.25 0.901c0 0 10.838-7.958 10.984-8.066 0.148-0.108 0.318 0.095 0.211 0.211s-7.871 8.513-7.871 8.513v0.002l-0.452 0.503 0.599 0.322c0 0 4.65 2.504 4.982 2.682 0.291 0.156 0.668 0.027 0.752-0.334 0.099-0.426 2.845-12.261 2.906-12.525 0.079-0.343-0.148-0.552-0.491-0.431zM7 17.162c0 0.246 0.139 0.315 0.331 0.141 0.251-0.229 2.85-2.561 2.85-2.561l-3.181-1.644v4.064z",key:1})])}l.defaultProps={version:"1.1",width:"20",height:"20",viewBox:"0 0 20 20"},e.exports=l,l.default=l},7189:function(e,a,t){var r=t(7294);function l(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"phone"),r.createElement("path",{d:"M6.609 10.781q2.25 4.359 6.609 6.609l2.203-2.203q0.469-0.469 1.031-0.234 1.688 0.563 3.563 0.563 0.422 0 0.703 0.281t0.281 0.703v3.516q0 0.422-0.281 0.703t-0.703 0.281q-7.031 0-12.023-4.992t-4.992-12.023q0-0.422 0.281-0.703t0.703-0.281h3.516q0.422 0 0.703 0.281t0.281 0.703q0 1.875 0.563 3.563 0.188 0.609-0.234 1.031z",key:1})])}l.defaultProps={version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-8c21110513cf0bda2f0a.js.map