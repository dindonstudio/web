(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3091:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collaborative-tool",function(){return c(3742)}])},4916:function(f,c,a){"use strict";var g=a(5893),d=a(4184),h=a.n(d),i=a(6999),b=a(7294),e=a(2597),j=a.n(e);function k(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var l=(0,b.memo)(function(a){var b=a.className,e=void 0===b?null:b,d=a.items,c=a.imageWidth,f=void 0===c?200:c;return d.map(function(a){var b,c,d,h=(b=null===(d=a.asset._ref.split("-")[2])|| void 0===d?void 0:d.split("x"),c=2,function(a){if(Array.isArray(a))return a}(b)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(b,c)||function(a,c){if(a){if("string"==typeof a)return k(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return k(a,c)}}(b,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),j=h[0],l=h[1];return(0,g.jsx)("div",{className:e,children:(0,g.jsx)("img",{loading:"lazy",src:i.t.image(a).auto("format").width(f).url(),width:j,height:l,alt:a.alt})},a._key)})});c.Z=(0,b.forwardRef)(function(a,n){var b=a.items,c=a.className,d=a.renderCount,e=a.perItemDuration,f=a.itemClassName,o=void 0===f?null:f,i=a.renderItems,p=void 0===i?null:i,k=a.leftToRight,m=a.withGradients,q=a.imageWidth;return b?(0,g.jsx)("div",{className:h()(j().marquee,(void 0===m||m)&&j().withGradients,void 0===c?null:c),ref:n,children:(0,g.jsx)("div",{className:h()(j().wrapper,void 0!==k&&k&&j().inverted),style:{animationDuration:b.length*(void 0===e?4:e)+"s"},children:Array.from(Array(void 0===d?4:d)).map(function(c,a){return p?p(b,a):(0,g.jsx)(l,{className:o,items:b,imageWidth:q},a)})})}):(console.warn("items must be defined"),null)})},4477:function(d,b,a){"use strict";var e=a(5893),f=a(7294),c=a(4424),g=a.n(c),h=a(3811),i=a(6610),j=a(6873),k=a(4403),l=a(9257),m=a(665),n=a(183);b.Z=function(a){var d=a.children,o=a.pageDots,p=a.withButtons,q=a.snapping,E=void 0!==q&&q,r=a.className,s=a.wrapperClassName,t=a.prevButtonClassName,u=a.nextButtonClassName,v=a.style,w=a.overflowHidden,x=a.groupBy,y=void 0===x?1:x,z=(0,f.useState)(0),F=(z[0],z[1]),A=(0,f.useRef)(null),B=(0,f.useRef)(null),G=(0,f.useRef)(d.map(function(a){return(0,f.useRef)(null)})),H=(0,f.useRef)(!0),I=(0,f.useRef)(!1),J=(0,f.useRef)(!1),K=(0,f.useRef)(!1),L=(0,f.useRef)(!1),M=(0,f.useRef)(!1),N=(0,f.useRef)(0),O=(0,f.useRef)({left:0,width:0,height:0}),P=(0,f.useRef)(0),Q=(0,f.useRef)(0),R=(0,f.useRef)(0),S=(0,f.useRef)(0),T=(0,f.useRef)(0),U=(0,f.useRef)(0),V=(0,f.useRef)(0),W=(0,f.useRef)(0),X=(0,f.useRef)(0),Y=(0,f.useRef)(0),Z=(0,f.useRef)(0),$=(0,f.useRef)(0),_=(0,f.useRef)([]),aa=(0,f.useRef)(!0),ab="touch"===m.R8?1:.3,ac=(0,f.useRef)(null),ad=function(a){a.forEach(function(b,c){var a=b.target;a.__scale||(a.__scale=1),a.__x||(a.__x=0),a.__width=b.target.offsetWidth,a.__xInit=b.target.offsetLeft,c||(O.current.left=a.__xInit),ac.current.unobserve(a)}),M.current=!0,ae(!0)},D=(0,f.useCallback)(function(){var a=[];return d.forEach(function(b,c){b.ref?(a[c]=b,G.current[c]=b.ref):a[c]=(0,f.cloneElement)(b,{ref:G.current[c]})}),a},[d]);(0,f.useEffect)(function(){var a=!!m.FX&&{passive:!0};return window.addEventListener("mousemove",aj,a),window.addEventListener("touchmove",aj,a),window.addEventListener("mouseup",ak,a),window.addEventListener("touchend",ak,a),ac.current=new IntersectionObserver(ad),function(){window.removeEventListener("mousemove",aj),window.removeEventListener("touchmove",aj),window.removeEventListener("mouseup",ak),window.removeEventListener("touchend",ak),ac.current.disconnect()}},[y]);var ae=function(){var a,f=arguments.length>0&& void 0!==arguments[0]&&arguments[0];if((null===(a=G.current)|| void 0===a?void 0:a.length)&&O.current.width){I.current?(Z.current=U.current-X.current,S.current+=(Z.current-Q.current)*ab,S.current*=.52,L.current=!1):(E||L.current)&&(S.current+=(Z.current-Q.current)*.15,S.current*=.52);var c=f?1:I.current?.8:.1,d=_.current[0],e=_.current[1];Q.current+S.current<d?(S.current+=(d-Q.current)*c,S.current*=.55):Q.current+S.current>e?(S.current+=(e-Q.current)*c,S.current*=.55):S.current*=.9,Q.current+=S.current,I.current?S.current=Q.current-T.current:S.current> -0.3&&S.current<.3&&!aa.current&&(aa.current=!0),Q.current=(100*Q.current|0)/100;var b=Q.current-Z.current;b<0&&(b*=-1),b<.01&&(Q.current=Z.current),T.current!==Q.current&&(M.current=!0),M.current&&af(),T.current=Q.current}};(0,k.Z)(function(){ae()});var af=function(){for(var b=0,d=G.current.length;b<d;b++){var a=G.current[b].current;a.__xInit;var c=!0;c?(a.__x=-Q.current,a.style.transform="translate3d(".concat(a.__x,"px,").concat(R.current,"px,0)"),a.__inView||(a.style.visibility="")):a.__inView&&(a.style.transform="",a.style.visibility="hidden"),a.__inView=c}M.current=!1},ag=function(){B.current&&P.current&&O.current&&(_.current=[0,P.current-O.current.width],H.current=P.current>B.current.clientWidth,G.current.forEach(function(a){return ac.current.observe(a.current)}))};(0,l.Z)(B,function(a){O.current.width=a.contentRect.width,O.current.height=a.contentRect.height,ag()}),(0,l.Z)(A,function(a){P.current=a.contentRect.width,ag()});var ah=function(a){al(a*y),F(function(a){return a+1})},b=function(a){J.current=!0},c=function(a){requestAnimationFrame(function(){J.current=!1})},ai=function(a){if((void 0===a.button||0===a.button)&&!J.current){var b=a.touches&&a.touches[0]||a;aa.current=!1,X.current=b.pageX,W.current=X.current,V.current=X.current,U.current=X.current+Q.current,S.current=0,Y.current=0,I.current=!0,K.current=!1}},aj=function(a){if(I.current&&!J.current){var c=a.touches&&a.touches[0]||a;X.current=c.pageX,Y.current=X.current-W.current;var b=X.current-V.current;Math.abs(b)>100?($.current=Math.sign(b),A.current.style.pointerEvents="none"):Math.abs(Y.current)>1?($.current=Math.sign(Y.current),A.current.style.pointerEvents="none"):$.current=0,W.current=X.current}},ak=function(){I.current&&(A.current.style.pointerEvents="",E&&!J.current&&al(N.current-$.current*y),I.current=!1)},al=function(a){N.current=(0,n.uZ)(a,0,G.current.length-1),Z.current=(0,n.uZ)(G.current[N.current].current.__xInit,_.current[0],_.current[1])},C=Math.ceil(d.length/y);return(0,e.jsx)("div",{className:(0,i.cn)(g().slideshow,void 0===r?null:r),style:void 0===v?null:v,children:(0,e.jsxs)("div",{ref:B,className:(0,i.cn)(g().wrapper,(void 0===w||w)&&g().overflowHidden),onMouseDown:function(a){ai(a)},onTouchStart:function(a){ai(a)},onDragStart:function(a){a.preventDefault()},children:[(0,e.jsx)("div",{ref:A,className:(0,i.cn)(g().list,void 0===s?null:s),children:D()}),void 0!==p&&p&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.Z,{className:(0,i.cn)(g().btn,void 0===t?null:t,g().btnPrev),onMouseDown:b,onMouseUp:c,onTouchStart:b,onTouchEnd:c,onClick:function(){L.current=!0,al(N.current-y)},variant:j.W.rounded,label:"Previous",children:(0,e.jsx)(h.Z,{})}),(0,e.jsx)(j.Z,{className:(0,i.cn)(g().btn,void 0===u?null:u,g().btnNext),onMouseDown:b,onMouseUp:c,onTouchStart:b,onTouchEnd:c,onClick:function(){L.current=!0,al(N.current+y)},variant:j.W.rounded,label:"Next",children:(0,e.jsx)(h.Z,{})})]}),void 0!==o&&o&&C>1&&(0,e.jsx)("div",{className:g().dots,children:Array(C).fill(1).map(function(b,a){return(0,e.jsx)("div",{className:g().dotWrapper,onClick:function(){return ah(a)},children:(0,e.jsx)("div",{className:(0,i.cn)(g().dot,N.current===a&&g().dotSelected)})},a)})})]})})}},5224:function(f,b,a){"use strict";var g=a(5893),c=a(4184),h=a.n(c),i=a(8414),d=a(7294),e=a(5873),j=a.n(e);b.Z=(0,d.forwardRef)(function(a,m){var n=a.children,o=a.timeline,b=a.as,c=a.className,e=a.childClassName,f=a.isTop,p=void 0!==f&&f,k=a.onScroll,q=void 0===k?null:k,l=a.childRef,r=(0,d.useRef)(0);return(0,g.jsx)(i.ZP,{ref:m,childRef:void 0===l?null:l,as:void 0===b?"section":b,className:void 0===c?null:c,childClassName:h()(j().timelineSection,void 0===e?null:e),onScroll:function(b){var c=b.percent,d=b.percentTop;if(null==o?void 0:o.current){var a=Math.min(1,Math.max(0,p?d:c));r.current!==a&&o.current.progress(a),r.current=a}q&&q({percent:c,percentTop:d})},children:n})})},7702:function(c,b,a){"use strict";var d=a(7294),e=a(1455),f=a(8216);b.Z=function(){var a=(0,d.useState)(null),b=a[0],c=a[1];return(0,f.Z)(function(){c((0,e.Q4)())},!0),b}},3742:function(e,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return x},"default":function(){return y}});var f=a(5893),c=a(4184),g=a.n(c),d=a(1521),h=a.n(d),i=a(7441),j=a(6096),k=a(7283),l=a(2215),m=a(5312),n=a(6873),o=a(3811),p=a(4916),q=a(7294),r={src:"/_next/static/media/greatness.5db89799.png",height:547,width:2092,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAK0lEQVR42mP49vUjIxDzAbEglOaBsgWAmJEBSAgDMQcDAyoAinF+//pREABPWiLjRQYlaQAAAABJRU5ErkJggg=="},s=a(7702),t=a(6038),u=a(5224),v=a(1455),w=a(4477),x=!0,y=function(x){var b,c,d,a=x.content,y=(0,q.useRef)(null),z=(0,q.useRef)(null),e=(0,s.Z)();return(0,q.useEffect)(function(){e&&(y.current=t.ZP.timeline({paused:!0}).to({},{duration:1}),e===v.q5?y.current.fromTo(z.current,{rotate:"240deg",y:"10%"},{duration:1,rotate:"-240deg",y:"10%"},0):y.current.fromTo(z.current,{rotate:"240deg",y:"50%"},{duration:1,rotate:"-240deg",y:"-50%"},0),y.current.duration(1))},[e]),(0,f.jsxs)(u.Z,{timeline:y,className:h().collaborativeTool,children:[(0,f.jsxs)("section",{className:h().header,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:g()("hm-1 hd-1",h().pageTitle),children:a.pageTitle}),(0,f.jsx)("p",{className:h().pageSubtitle,children:a.pageSubtitle})]}),(0,f.jsx)(k.d,{image:a.logo,className:h().logo}),(0,f.jsxs)("div",{className:h().splitSection,children:[(0,f.jsx)("h2",{className:h().sectionTitle,children:a.headerTitle}),(0,f.jsx)("hr",{className:h().divider}),(0,f.jsx)("p",{className:h().sectionText,children:a.headerText})]}),(0,f.jsxs)("div",{className:h().faceWrapper,children:[(0,f.jsx)(k.d,{image:a.tianming,className:h().face}),(0,f.jsx)("div",{className:h().greatnessWrapper,children:(0,f.jsx)("div",{ref:z,children:(0,f.jsx)(k.u,{image:r,className:h().greatness,alt:"Greatness needs a new perspective"})})})]}),(0,f.jsxs)("div",{className:h().transparencyWrapper,children:[(0,f.jsxs)("div",{className:h().transparencyInner,children:[(0,f.jsx)(j.ZP,{blocks:a.transparencyTitle,className:g()(h().sectionTitle,h().transparency),noDom:!0}),(0,f.jsx)("div",{className:g()(h().sectionText,h().transparencyText),children:a.transparencyText}),(0,f.jsx)("div",{style:{textAlign:"center"},children:(0,f.jsxs)(n.Z,{variant:n.W.rounded,className:h().cta,link:a.cta,children:[(0,f.jsx)(o.Z,{}),a.cta.label]})})]}),(0,f.jsx)(m.Z,{z:-1,children:(0,f.jsx)(k.d,{image:a.example,className:h().example})})]}),(0,f.jsxs)("div",{className:h().streamline,children:[(0,f.jsx)("h2",{className:h().sectionTitle,children:a.headerTitle2}),(0,f.jsx)("hr",{className:g()(h().divider,h().dividerVertical)}),(0,f.jsx)("p",{className:h().sectionText,children:a.headerText2})]}),(0,f.jsx)(l.Z,{className:h().headerBackground,childClassName:h().circle,colors:{bg:"radial-gradient(40.85% 69.92% at 49.81% 50.11%, #CDC3CF 0%, #CDC3CF 94%, #CDC3CF 100%)",circle:null===(b=i.O.yellow)|| void 0===b?void 0:b.hex}})]}),(0,f.jsxs)("section",{className:h().design,children:[(0,f.jsx)(m.Z,{z:-1,className:h().chartWrapper,children:(0,f.jsx)(k.d,{image:a.chart,className:h().chart})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:g()(h().sectionTitle,h().designTitle),children:a.designTitle}),(0,f.jsx)("p",{className:g()(h().sectionText,h().designText),children:a.designText}),(0,f.jsx)("div",{children:(0,f.jsxs)(n.Z,{variant:n.W.rounded,className:h().cta,link:a.cta,children:[(0,f.jsx)(o.Z,{}),a.cta.label]})})]})]}),(0,f.jsxs)("section",{className:h().growth,children:[(0,f.jsx)(p.Z,{className:h().screenshots,itemClassName:h().screenshot,items:a.screenshots,perItemDuration:15,imageWidth:1200}),(0,f.jsxs)("div",{className:g()(h().splitSection,h().growthSection),children:[(0,f.jsx)("h2",{className:g()(h().sectionTitle,h().growthTitle),children:a.growthTitle}),(0,f.jsx)("hr",{className:h().divider}),(0,f.jsx)("p",{className:h().sectionText,children:a.growthText})]})]}),(0,f.jsxs)("section",{className:h().cards,children:[(0,f.jsx)(m.Z,{z:-1,children:(0,f.jsx)(k.d,{image:a.cardsBackground,className:h().cardsIllustration})}),(0,f.jsx)("div",{className:h().cardsContainer,children:(0,f.jsx)(w.Z,{overflowHidden:!1,pageDots:!0,snapping:!0,groupBy:e===v.q5?3:1,children:a.cards.map(function(b,c){return(0,f.jsxs)("div",{className:h().card,style:{zIndex:a.cards.length-c},children:[(0,f.jsx)(k.d,{image:b.photo,className:h().cardPhoto}),(0,f.jsx)("h3",{className:h().cardText,children:b.text}),(0,f.jsxs)("div",{className:h().cardBottom,children:[(0,f.jsx)("p",{className:h().cardName,children:b.name}),(0,f.jsx)("p",{className:h().cardCompany,children:b.company})]})]},b._key)})})}),(0,f.jsx)("h2",{className:h().bigText,children:a.bigText}),(0,f.jsxs)("div",{className:h().finishWrapper,children:[(0,f.jsx)("p",{className:h().finish,children:a.finish}),(0,f.jsxs)(n.Z,{variant:n.W.rounded,className:h().cta,link:a.cta,children:[(0,f.jsx)(o.Z,{}),a.cta.label]})]}),(0,f.jsx)(l.Z,{className:h().cardsBackground,childClassName:h().circle,colors:{bg:null===(c=i.O.lightBlue)|| void 0===c?void 0:c.hex,circle:null===(d=i.O.green)|| void 0===d?void 0:d.hex}})]})]})}},183:function(c,a,b){"use strict";b.d(a,{uZ:function(){return d}});var d=function(c,a,b){return a<b?Math.min(Math.max(c,a),b):Math.min(Math.max(c,b),a)}},2597:function(a){a.exports={marquee:"marquee_marquee__HebE2",withGradients:"marquee_withGradients__HsUAm",wrapper:"marquee_wrapper__drbcf",loop:"marquee_loop__DFUWk",inverted:"marquee_inverted__CNxvf"}},4424:function(a){a.exports={slideshow:"slideshow_slideshow__Ec532",wrapper:"slideshow_wrapper__TGK9O",overflowHidden:"slideshow_overflowHidden__fYyJ6",list:"slideshow_list__wWMPN",btn:"slideshow_btn__utMcL",btnNext:"slideshow_btnNext__0T9LN",btnPrev:"slideshow_btnPrev__t_EQx",dots:"slideshow_dots__SV8v_",dot:"slideshow_dot___Wi5T",dotWrapper:"slideshow_dotWrapper__iP77c",dotSelected:"slideshow_dotSelected__LbqcW"}},5873:function(){},1521:function(a){a.exports={collaborativeTool:"collaborative-tool_collaborativeTool__XXWpr",header:"collaborative-tool_header__I14RD",headerBackground:"collaborative-tool_headerBackground__vxXmV",circle:"collaborative-tool_circle__RwE1P",pageTitle:"collaborative-tool_pageTitle__v8jtp",pageSubtitle:"collaborative-tool_pageSubtitle__pVr3I",logo:"collaborative-tool_logo__yl_fw",faceWrapper:"collaborative-tool_faceWrapper__CgMPg",face:"collaborative-tool_face__bCHjZ",greatnessWrapper:"collaborative-tool_greatnessWrapper__BjDJN",greatness:"collaborative-tool_greatness__6sy4r",transparency:"collaborative-tool_transparency__OYDy_",transparencyText:"collaborative-tool_transparencyText__0yFzM",example:"collaborative-tool_example__c6MMG",sectionTitle:"collaborative-tool_sectionTitle__NHhRh",sectionText:"collaborative-tool_sectionText__BqRmA",design:"collaborative-tool_design__5jynP",chartWrapper:"collaborative-tool_chartWrapper__EBAJL",designTitle:"collaborative-tool_designTitle__7ncNv",designText:"collaborative-tool_designText__TuJHr",growth:"collaborative-tool_growth__zUa4L",screenshots:"collaborative-tool_screenshots__snmDP",screenshot:"collaborative-tool_screenshot___Qs8C",growthSection:"collaborative-tool_growthSection__kdAuc",growthTitle:"collaborative-tool_growthTitle__22gEC",cards:"collaborative-tool_cards__LZnX1",cardsIllustration:"collaborative-tool_cardsIllustration__ousKi",cardsContainer:"collaborative-tool_cardsContainer__cZ9KY",card:"collaborative-tool_card__McnED",cardPhoto:"collaborative-tool_cardPhoto__dliRl",cardText:"collaborative-tool_cardText__Xtj5e",cardName:"collaborative-tool_cardName__1dBG7",cardCompany:"collaborative-tool_cardCompany__TfYf7",bigText:"collaborative-tool_bigText__AGt_L",finishWrapper:"collaborative-tool_finishWrapper__X1aSc",finish:"collaborative-tool_finish__rJsjq",cardsBackground:"collaborative-tool_cardsBackground___W_5L",divider:"collaborative-tool_divider__ZGMyz",dividerVertical:"collaborative-tool_dividerVertical__uM09C",transparencyWrapper:"collaborative-tool_transparencyWrapper__vjl_G",transparencyInner:"collaborative-tool_transparencyInner___37gW",streamline:"collaborative-tool_streamline__9C0lV",splitSection:"collaborative-tool_splitSection__a5xXp"}}},function(a){a.O(0,[675,863,38,295,774,888,179],function(){return a(a.s=3091)}),_N_E=a.O()}])