(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"/ZHP":function(module,exports,e){var t=e("8O0U"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"2G/l":function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("6/Gu"),c=t("F/us"),u=t.n(c),l=t("17x9"),p=t.n(l),d=t("q1tI"),b=t.n(d),m=t("Jrms"),f=t("15pW"),O=t("BVC1"),j=t("+LJP"),g=t("BZ+2"),h=t("EABe"),y=t("iljS"),v=t.n(y);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=function(e){function LandingPageThreadsViewWrapper(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).styles=function(){return{width:"100%","div.rc-LandingPageThreadsViewWrapper":{maxWidth:"unset","div.forum-info.caption-text.color-secondary-text":_objectSpread(_objectSpread({},t.props.theme.typography.body1),{},{position:"relative",left:"-33px"}),"div.headline-1-text.question-title.color-primary-text.question-title-bold":_objectSpread({},t.props.theme.typography.h3bold),"& .rc-ThreadBadge.bgcolor-accent-brown-light":_objectSpread(_objectSpread({},t.props.theme.typography.h4bold),{},{backgroundColor:t.props.theme.palette.purple[50],color:t.props.theme.palette.purple[700]}),"& li.rc-ThreadsListEntry .cif-stack.pin-container":{height:"24px",width:"24px",margin:t.props.theme.spacing(0,8,0,0),position:"relative",top:"24px","& .cif-circle.cif-stack-2x.pin-background":{"&:before":{content:"none"},backgroundColor:t.props.theme.palette.yellow[500],borderRadius:"100%",height:"24px",width:"24px"},"& .cif-pin.cif-stack-lg.pin-icon":{margin:0,position:"relative",top:"-7px"}},"& .rc-Metadata.entry-metadata.caption-text.color-secondary-text":_objectSpread({},t.props.theme.typography.body2),"& .rc-ProfileName.nostyle.pii-hide":_objectSpread(_objectSpread({},t.props.theme.typography.h4bold),{},{color:t.props.theme.palette.blue[600]}),"& .ThreadListEntry button.c-new-thread-button.secondary":_objectSpread({},t.props.theme),".rc-DiscussionsBody, .rc-DiscussionsSearchResults":{width:"100%"},".rc-LandingPageSearchResultsSummary":{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:t.props.theme.palette.blue[50]}}}},t}var t;return o()(LandingPageThreadsViewWrapper,e),LandingPageThreadsViewWrapper.prototype.render=function render(){if(!this.props.currentForum)return null;var e=O.a.join(f.d.learnRoot,this.props.courseSlug,this.props.currentForum.link);return Object(a.d)(i.a,{container:!0,item:!0,xs:12,className:"rc-LandingPageThreadsViewWrapper"},Object(a.d)(h.a,{id:this.props.currentForum.forumId}),Object(a.d)(m.c,{backLink:e}))},LandingPageThreadsViewWrapper}(b.a.Component);A.propTypes={search:p.a.string,currentForum:p.a.instanceOf(g.a),courseSlug:p.a.string},e.a=Object(c.compose)(Object(m.o)({fields:["link"]}),Object(j.a)(m.v))(A)},"2f5k":function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("F/us"),c=t.n(i),u=t("q1tI"),l=t.n(u),p=t("BVC1"),d=t("lj0O"),b=t("BS7q"),m=t("Fmrb"),f=t.n(m),O=t("q5zD"),j=t("Ys1X"),g=t("Jrms"),h=t("xmWo"),y=t.n(h),v=t("8Hdl");function _templateObject2(){var e=r()(["\n              padding: 0;\n              margin: 0;\n              list-style-type: none;\n            "]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=r()(["\n            padding: 24px;\n          "]);return _templateObject=function _templateObject(){return e},e}var A=function(e){function DiscussionsGroupForums(){return e.apply(this,arguments)||this}var t;return o()(DiscussionsGroupForums,e),DiscussionsGroupForums.prototype.render=function render(){var e=this.props,t=e.groupForums,n=e.groupForumStatistics,r=e.courseSlug;if(!t||!t.length)return null;var s=t.map(function(e){var t=n.find(function(t){return t.id===e.id});return{id:e.id,discussionsLink:p.a.join(Object(j.c)(r),e.link),title:e.title,description:e.description,lastAnsweredAt:t&&t.lastAnsweredAt,forumQuestionCount:t&&t.forumQuestionCount}});return Object(a.d)(d.a,{className:"rc-DiscussionsGroupForums",title:Object(a.d)(v.a,null,Object(a.d)(O.a,{name:"lock"}),f()("Private Group Forums"))},Object(a.d)(v.a,{component:"div",css:Object(a.c)(_templateObject())},Object(a.d)("ul",{css:Object(a.c)(_templateObject2())},s.map(function(e){return Object(a.d)("li",{key:e.id},Object(a.d)(b.a,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))}))))},DiscussionsGroupForums}(l.a.Component);e.a=c.a.compose(Object(g.o)({fields:["link","title","description","parentForumId"]}))(A)},"3//P":function(module,e,t){"use strict";t.r(e),t.d(e,"DiscussionsLandingPage",function(){return T});var n=t("VkAN"),r=t.n(n),s=t("lSNA"),o=t.n(s),a=t("VbXa"),i=t.n(a),c=t("AeFk"),u=t("q1tI"),l=t.n(u),p=t("17x9"),d=t.n(p),b=t("F/us"),m=t.n(b),f=t("EbdU"),O=t("+LJP"),j=t("mDu6"),g=t("Jrms"),h=t("Pz00"),y=t("yaC5"),v=t("jr6M"),A=t("2G/l"),F=t("Z8Sg"),k=t("6/Gu"),S=t("2sch"),x=t("oEqI");function _templateObject(){var e=r()(["\n            margin: ",";\n            width: 100%;\n          "]);return _templateObject=function _templateObject(){return e},e}var T=function(e){function DiscussionsLandingPage(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).layoutCss={},t.layoutStyle=function(e){var n;return n={},o()(n,t.props.theme.breakpoints.up("sm"),{".mainColumn .rc-DiscussionsLandingPage":{margin:0}}),o()(n,t.props.theme.breakpoints.down("sm"),{".mainColumn":{padding:e.spacing(0),margin:e.spacing(0,0,48,0)}}),o()(n,".columnContainer",{paddingTop:t.props.theme.spacing(0)}),n},t}i()(DiscussionsLandingPage,e);var t=DiscussionsLandingPage.prototype;return t.getChildContext=function getChildContext(){return{courseId:this.props.courseId,userId:this.props.userId.toString()}},t.componentDidMount=function componentDidMount(){var e=this.props,t=e.addToHelper,n=e.userId,r=e.courseId,s=e.maybeAddHelpers,o;t&&s({variables:{helperId:"".concat(n,"~").concat(r)}})},t.render=function render(){var e=this.props.addToHelper;return Object(c.d)(k.a,{css:this.layoutStyle(this.props.theme),container:!0,item:!0,xs:12,className:"rc-DiscussionsLandingPage",spacing:24},e&&Object(c.d)(k.a,{item:!0,xs:12},Object(c.d)(F.a,null)),Object(c.d)(k.a,{item:!0,xs:12},Object(c.d)(h.a,null)),Object(c.d)(S.a,{mdUp:!0,css:Object(c.c)(_templateObject(),this.props.theme.spacing(0,12,0,12))},Object(c.d)(g.e,null)),Object(c.d)(k.a,{className:"columnContainer",container:!0,item:!0,xs:12,justifyContent:"space-between"},Object(c.d)(k.a,{item:!0,className:"mainColumn",xs:12,md:9,spacing:32},Object(c.d)(y.a,null)),Object(c.d)(k.a,{item:!0,xs:12,md:3},Object(c.d)(v.a,null))))},DiscussionsLandingPage}(l.a.Component);T.childContextTypes={courseId:d.a.string,userId:d.a.string},e.default=Object(b.compose)(Object(g.o)({fields:[],subcomponents:[f.a,j.a,A.a]}),Object(O.a)(function(e){var t;return{addToHelper:"true"===e.location.query.addToHelper}}),g.w)(Object(x.a)(T))},"8O0U":function(module,exports,e){},BS7q:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("eJMc"),a=t.n(o),i=t("763+"),c=t("6/Gu"),u=t("8Hdl"),l=t("kmRs"),p=t("wd/R"),d=t.n(p),b=t("kvW3"),m=t("7GkZ"),f=t("h4VP"),O=t("Fmrb"),j=t.n(O),g=t("GbG/"),h=t.n(g);function _templateObject4(){var e=r()(["\n                  display: flex;\n                  align-items: center;\n                "]);return _templateObject4=function _templateObject4(){return e},e}function _templateObject3(){var e=r()(["\n                justify-content: flex-end;\n                align-items: center;\n              "]);return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=r()(["\n                padding: 0;\n              "]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=r()(["\n              margin-bottom: ",";\n            "]);return _templateObject=function _templateObject(){return e},e}function ForumsLabel(e){var t=e.discussionsLink,n=e.title,r=e.description,o=e.lastAnsweredAt,p=e.forumQuestionCount,O=Object(i.a)(),g="number"==typeof p,h=!!o,y=1===p?j()("thread"):j()("threads"),v=r.definition.value,A=v.startsWith("<co-content>")&&v.endsWith("</co-content>"),F=!f.b.isEmpty(r)&&A,k="Forum: ".concat(n,"\n                       ").concat(F?f.b.getInnerText(r):"","\n                       ").concat(h?"Last Post: ".concat(d()(o).fromNow()):"","\n                       ").concat(g?"".concat(p," ").concat(y):"");return Object(s.d)(a.a,{className:"rc-ForumsLabel nostyle",to:t,"aria-label":k},Object(s.d)("div",null,Object(s.d)(c.a,{container:!0,xs:12},Object(s.d)(c.a,{item:!0,xs:7,css:Object(s.c)(_templateObject(),O.spacing(16))},Object(s.d)(u.a,{variant:"h2semibold",component:"p",css:Object(s.c)(_templateObject2())},n),!f.b.isEmpty(r)&&Object(s.d)(m.a,{cml:r,isCdsEnabled:!0}),h&&Object(s.d)(u.a,{variant:"body2",color:"supportText",component:"span"},Object(s.d)(b.b,{message:j()("Last post {timeAgo}"),timeAgo:d()(o).fromNow()}))),g&&Object(s.d)(c.a,{container:!0,item:!0,xs:5,spacing:8,css:Object(s.c)(_templateObject3())},Object(s.d)(c.a,{item:!0},Object(s.d)(u.a,{className:"threads-count"},"".concat(p," ").concat(y))),Object(s.d)(c.a,{item:!0,css:Object(s.c)(_templateObject4())},Object(s.d)(l.a,{size:"small"}))))))}e.a=ForumsLabel},"BoL+":function(module,e,t){"use strict";t.d(e,"a",function(){return y}),t.d(e,"b",function(){return S});var n=t("lSNA"),r=t.n(n),s=t("AeFk"),o=t("TmOg"),a=t("F/us"),i=t.n(a),c=t("w/1P"),u=t.n(c),l=t("763+"),p=t("6/Gu"),d=t("eJMc"),b=t.n(d),m=t("Fmrb"),f=t.n(m),O=t("+LJP"),j=t("Jrms"),g=t("qenF"),h=t("gNwb");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={ALL:"all",FORYOU:"foryou",ACTIVITY:"activity"},v=Object(h.e)({type:"BUTTON"})(b.a),A=function tabsStyles(e){return{".discussionsLandingPageTabs":{borderBottom:"1px solid ".concat(e.palette.gray[300]),justifyContent:"space-between"},"ul.tabs li.colored-tab a.selected":_objectSpread({borderBottom:"4px solid ".concat(e.palette.blue[600]),borderLeft:"none",paddingBottom:"13px",color:e.palette.blue[600]},e.typography.h3bold),"ul.tabs li.colored-tab a:hover":{borderLeft:"none"},"ul.tabs li.colored-tab a":_objectSpread({borderBottom:"4px solid transparent",borderLeft:"none",paddingBottom:"13px"},e.typography.body1)}};function getDefaultTab(e){var t=Object(g.a)()||e.ALL;if("control"===t)return e.ALL;return t}function orderTabs(e){var t,n;return(t={},r()(t,y.ALL,[y.ALL,y.FORYOU,y.ACTIVITY]),r()(t,y.FORYOU,[y.FORYOU,y.ALL,y.ACTIVITY]),t)[e]}function getActiveTab(e){var t=e.router,n=e.tabs,r=null;return n.forEach(function(e){t.isActive(Object(j.q)(e),!0)&&(r=e)}),r}function getTabs(e,t){var n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:getDefaultTab(t),o=(n={},r()(n,t.FORYOU,{title:f()("Posts for you"),pathname:Object(j.q)(t.FORYOU),query:"",isActive:!1,tabKey:t.FORYOU}),r()(n,t.ALL,{title:f()("All forums"),pathname:Object(j.q)(t.ALL),query:"",isActive:!1,tabKey:t.ALL}),r()(n,t.ACTIVITY,{title:f()("Your activity"),pathname:Object(j.q)(t.ACTIVITY),query:"",isActive:!1,tabKey:t.ACTIVITY}),n),a=orderTabs(s),i=getActiveTab({router:e,tabs:a})||a[0];return{activeTab:i,orderedTabs:a.map(function(e){var t=Object.assign({},o[e]);return e===i&&(t.isActive=!0),t})}}var F=function onTabEnter(e,t){e(t["data-link"])},k=function Tab(e){var t=e.title,n=e.pathname,r=e.query,o=e.isActive,a=e.tabKey,i={query:r,pathname:n};return Object(s.d)("li",{id:"tab-".concat(a),role:"tab","aria-controls":"panel-".concat(a),"aria-selected":o,className:u()("colored-tab",{selected:o}),key:t},Object(s.d)(v,{to:i,className:o?"selected":void 0,trackingName:"track_active_forum_tabs"},t))},S=function TabPanel(e){var t=e.activeTab,n=e.children,r=e.tabName;if(t===r)return Object(s.d)("div",{id:"panel-".concat(r),role:"tabpanel"},n);return null};function TabList(e){var t=e.children,n=Object(l.a)();return Object(s.d)(p.a,{container:!0,item:!0,xs:12,css:A(n)},Object(s.d)(p.a,{container:!0,className:"discussionsLandingPageTabs"},Object(s.d)(p.a,{item:!0},Object(s.d)("ul",{className:"tabs horizontal-box",role:"tablist"},t))))}var x=Object(o.a)(TabList);function DiscussionsLandingPageTabs(e){var t=e.tabs,n=e.updateLocation,r=e.children,o=t.activeTab,a=t.orderedTabs;return Object(s.d)("section",null,Object(s.d)(x,{onEnter:function onEnter(e){return F(n,e["data-link"])}},a.map(function(e){return Object(s.d)(k,{title:e.title,pathname:e.pathname,isActive:e.isActive,query:e.query,tabKey:e.tabKey})})),Object(s.d)("div",null,r({activeTab:o})))}e.c=Object(a.compose)(Object(O.a)(function(e){return{isBaseForumsActive:e.isActive({pathname:Object(j.r)()},!0),query:e.location.query,tabs:getTabs(e,y),updateLocation:e.push}}))(DiscussionsLandingPageTabs)},EABe:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),s=t("AeFk"),o=t("6/Gu"),a=t("8Hdl"),i=t("ZJgU"),c=t("F/us"),u=t.n(c),l=t("17x9"),p=t.n(l),d=t("q1tI"),b=t.n(d),m=t("q5zD"),f=t("Fmrb"),O=t.n(f),j=t("kvW3"),g=t("8cuT"),h=t("+LJP"),y=t("Jrms"),v=t("GtUH"),A=t.n(v),F=function(e){function LandingPageSearchResultsSummary(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).cancelSearchResults=function(){t.context.router.push({pathname:t.context.router.location.pathname,params:t.context.router.params,query:{}})},t}var t;return r()(LandingPageSearchResultsSummary,e),LandingPageSearchResultsSummary.prototype.render=function render(){var e=this.props,t=e.numResults,n=e.query,r=e.loadingState;if(!n)return null;return Object(s.d)(o.a,{container:!0,item:!0,xs:12,className:"rc-LandingPageSearchResultsSummary "},Object(s.d)(a.a,{className:"search-results","aria-live":"polite",id:"landing-page-search-results"},r===y.t.DONE?Object(s.d)(j.a,{message:O()("{numResults} {numResults, plural,\n              =1 {search result} =0 {0 search results} other {search results}} for {query}"),numResults:t,query:Object(s.d)("strong",null,n)}):Object(s.d)(j.b,{message:O()("Loading search results...")})),Object(s.d)(i.a,{type:"button",onClick:this.cancelSearchResults,variant:"ghost","data-e2e":"cancel-search-button"},Object(s.d)(m.a,{name:"close",className:"color-secondary-text"})))},LandingPageSearchResultsSummary}(b.a.Component);F.propTypes={id:p.a.string,query:p.a.string,numResults:p.a.number,loadingState:p.a.oneOf(Object.keys(y.t))},F.contextTypes={router:p.a.object.isRequired},e.a=Object(c.compose)(Object(h.a)(function(e){return{query:e.location.query.q&&decodeURIComponent(e.location.query.q)}}),Object(g.a)(["DiscussionsSearchStore"],function(e,t){var n=e.DiscussionsSearchStore;return{numResults:n.getNumResults({forumId:t.id,query:t.query}),loadingState:n.loadingState}}))(F)},EbdU:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("F/us"),a=t.n(o),i=t("q1tI"),c=t.n(i),u=t("BVC1"),l=t("lj0O"),p=t("BS7q"),d=t("Jrms"),b=t("Fmrb"),m=t.n(b),f=t("nFDk"),O=t.n(f),j=t("763+");function _templateObject2(){var e=r()(["\n              border-bottom: 1px solid ",";\n              padding: ",";\n              &:hover {\n                background-color: ",";\n              }\n            "]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=r()(["\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        "]);return _templateObject=function _templateObject(){return e},e}function DiscussionsCourseForums(e){var t=e.courseForums,n=e.mentorForums,r=e.courseForumStatistics,o=e.courseSlug,a=t.find(function(e){return e.forumType.typeName===d.u.rootForumType}),i=Object(j.a)(),c=n.filter(function(e){return!e.parentForumId}),b=t.filter(function(e){return e.parentForumId===a.id&&e.forumType.typeName===d.u.customForumType}),f=c.concat(b).map(function(e){var t=r.find(function(t){return t.courseForumId===e.id});return Object.assign(e,{discussionsLink:u.a.join(Object(d.s)(o),e.link),lastAnsweredAt:t&&t.lastAnsweredAt,forumQuestionCount:t&&t.forumQuestionCount})});if(0===f.length)return null;return Object(s.d)(l.a,{title:m()("Discussion Forums"),className:"rc-DiscussionsCourseForums"},Object(s.d)("ul",{css:Object(s.c)(_templateObject())},f.map(function(e){return Object(s.d)("li",{key:e.id,css:Object(s.c)(_templateObject2(),i.palette.gray[300],i.spacing(24),i.palette.blue[50])},Object(s.d)(p.a,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))})))}e.a=Object(o.compose)(Object(d.o)({fields:["link","title","description","lastAnsweredAt","forumQuestionCount","parentForumId"]}))(DiscussionsCourseForums)},"GbG/":function(module,exports,e){var t=e("XRJ9"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},GtUH:function(module,exports,e){var t=e("N2rZ"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},J91Q:function(module,exports,e){var t=e("ktfe"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},JOhz:function(module,exports,e){},N2rZ:function(module,exports,e){},Pz00:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("q1tI"),a=t.n(o),i=t("Fmrb"),c=t.n(i),u=t("/ZHP"),l=t.n(u),p=t("763+"),d=t("8Hdl");function _templateObject(){var e=r()(["\n          padding: ",";\n        "]);return _templateObject=function _templateObject(){return e},e}function DiscussionsLandingPageHeader(){var e=Object(p.a)();return Object(s.d)("div",{className:"rc-DiscussionsLandingPageHeader "},Object(s.d)("div",{css:Object(s.c)(_templateObject(),e.spacing(32,0,32,0))},Object(s.d)(d.a,{variant:"h1semibold"},c()("Forums"))))}e.a=DiscussionsLandingPageHeader},XRJ9:function(module,exports,e){},Z3FU:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("F/us"),a=t.n(o),i=t("7GkZ"),c=t("h4VP"),u=t("Fmrb"),l=t.n(u),p=t("8cuT"),d=t("Jrms"),b=t("763+"),m=t("8Hdl"),f=t("uJiD"),O=t("g12y");function _templateObject2(){var e=r()(["\n          margin: ",";\n        "]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=r()(["\n        padding: ",";\n        margin: ",";\n      "]);return _templateObject=function _templateObject(){return e},e}function DiscussionsDescription(e){var t=Object(b.a)(),n=Object(s.d)(m.a,{className:"description"},l()("Welcome to the discussion forums!\n            Ask questions, debate ideas, and find classmates who share your goals.\n            Browse popular threads below or other forums in the sidebar."));if(e.courseForums&&e.courseForums.length){var r=e.courseForums.find(function(e){return e.forumType.typeName===d.u.rootForumType});r&&!c.b.isEmpty(r.description)&&(n=Object(s.d)(i.a,{cml:r.description,isCdsEnabled:!0}))}return Object(s.d)(f.a,{className:"rc-DiscussionsDescription",css:Object(s.c)(_templateObject(),t.spacing(24),t.spacing(0,0,24,0))},Object(s.d)(m.a,{variant:"h2semibold",css:Object(s.c)(_templateObject2(),t.spacing(0,0,16,0))},l()("Description")),n,Object(s.d)(O.a,null))}e.a=Object(o.compose)(Object(p.a)(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug()}}),Object(d.o)({fields:["description","forumType"]}))(DiscussionsDescription)},Z8Sg:function(module,e,t){"use strict";t.d(e,"a",function(){return l});var n=t("VbXa"),r=t.n(n),s=t("AeFk"),o=t("q1tI"),a=t.n(o),i=t("JOyW"),c=t("Fmrb"),u=t.n(c),l=function(e){function DiscussionsNotification(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={isVisible:!0},t}r()(DiscussionsNotification,e);var t=DiscussionsNotification.prototype;return t.handleDismiss=function handleDismiss(){this.setState({isVisible:!1})},t.render=function render(){var e=this,t;return this.state.isVisible&&Object(s.d)("div",{className:"rc-WelcomeNotifications"},Object(s.d)(i.a,{trackingName:"subscribed_to_digest_notification",type:"info",message:u()("You have been successfully subscribed to the digest."),isDismissible:!0,onDismiss:function onDismiss(){return e.handleDismiss()}}))},DiscussionsNotification}(a.a.Component)},azVH:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("AeFk"),i=t("8Hdl"),c=t("oEqI"),u=t("F/us"),l=t.n(u),p=t("17x9"),d=t.n(p),b=t("q1tI"),m=t.n(b),f=t("Jrms"),O=t("Fmrb"),j=t.n(O),g=t("8cuT"),h=t("jJ30"),y=t("qiY+");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function(e){function DiscussionsModerators(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).onDisplayMiniProfile=function(e){if(e===t.openMiniProfile)return;void 0!==t.openMiniProfile&&t.openMiniProfile.hide({}),t.openMiniProfile=e},t}o()(DiscussionsModerators,e);var t=DiscussionsModerators.prototype;return t.componentWillMount=function componentWillMount(){var e=this.props.courseId;this.props.staffSocialProfiles.length||this.context.executeAction(h.b,{courseId:e})},t.render=function render(){var e=this,t;if(!this.props.staffSocialProfiles)return null;if(!this.props.staffSocialProfiles.find(function(e){return e.courseRole===y.a.MENTOR||e.courseRole===y.a.TEACHING_STAFF||e.courseRole===y.a.COURSE_ASSISTANT}))return null;var n=this.props.theme,r=Object(a.c)({padding:n.spacing(24),"ul.moderator-list li.staff-profile-container .rc-ProfileImage .c-profile-initials":_objectSpread({},n.typography.body1),".moderator-list":{display:"flex",flexFlow:"row",flexWrap:"wrap",padding:n.spacing(16,0,0,0),".staff-profile-container":{position:"relative",display:"inline-block",margin:n.spacing(0,16,12,0)}}});return Object(a.d)("div",{css:r,className:"rc-DiscussionsModerators card-no-action"},Object(a.d)(i.a,{variant:"h2semibold"},j()("Moderators")),Object(a.d)("ul",{className:"moderator-list"},this.props.staffSocialProfiles.map(function(t){return Object(a.d)("li",{className:"staff-profile-container",key:t.id},Object(a.d)(f.i,{onDisplayMiniProfile:e.onDisplayMiniProfile,externalUserId:t.externalUserId,fullName:t.fullName,profileImageUrl:t.photoUrl,courseRole:t.courseRole,helperStatus:t.helperStatus}))})))},DiscussionsModerators}(m.a.Component);v.contextTypes={executeAction:d.a.func.isRequired},e.a=Object(u.compose)(Object(g.a)(["CourseStore","ClassmatesProfileStore"],function(e){var t=e.CourseStore,n=e.ClassmatesProfileStore;return{courseId:t.getCourseId(),staffSocialProfiles:n.getStaffProfiles()}}))(Object(c.a)(v))},cMOt:function(module,exports,e){},eN8u:function(module,exports,e){},g12y:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("763+"),a=t("fAYU"),i=t("zXDh"),c=t("9A5E"),u=t("Fmrb"),l=t.n(u),p=t("KXbA");function _templateObject(){var e=r()(["\n        margin: ",";\n      "]);return _templateObject=function _templateObject(){return e},e}function DiscussionsGuidelines(){var e=Object(i.isRightToLeft)(l.a.getLocale())?"".concat(i.supportPageLocale.ar,"/"):"",t="https://learner.coursera.help/hc/".concat(e,"articles/208280036"),n=Object(o.a)();return Object(s.d)("div",{className:"rc-DiscussionsGuidelines",css:Object(s.c)(_templateObject(),n.spacing(16,0,0,0))},Object(s.d)(a.a,{variant:"quiet",typographyVariant:"body1",icon:Object(s.d)(p.a,{size:"small"}),iconPosition:"after",component:c.a,trackingName:"DiscussionsGuidelines",href:t,target:"_blank"},l()("Forum guidelines")))}e.a=DiscussionsGuidelines},g40P:function(module,exports,e){},iljS:function(module,exports,e){var t=e("JOhz"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},jr6M:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),s=t("AeFk"),o=t("w/1P"),a=t.n(o),i=t("q1tI"),c=t.n(i),u=t("Jrms"),l=t("Z3FU"),p=t("azVH"),d=t("2sch"),b=function(e){function DiscussionsSideColumn(){return e.apply(this,arguments)||this}var t;return r()(DiscussionsSideColumn,e),DiscussionsSideColumn.prototype.render=function render(){var e=this.props.className;return Object(s.d)("div",{className:a()("rc-DiscussionsSideColumn",e)},Object(s.d)(u.l,null),Object(s.d)(d.a,{smDown:!0},Object(s.d)(u.e,null)),Object(s.d)(l.a,null),Object(s.d)(p.a,null))},DiscussionsSideColumn}(c.a.Component);e.a=b},ktfe:function(module,exports,e){},lj0O:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("q1tI"),o=t.n(s),a=t("763+"),i=t("6/Gu"),c=t("8Hdl"),u=t("AeFk"),l=t("uJiD");function _templateObject(){var e=r()(["\n          padding: ",";\n          border-bottom: 0px;\n        "]);return _templateObject=function _templateObject(){return e},e}function ForumsList(e){var t=Object(a.a)(),n={"h2.category-title":{margin:0}};return Object(u.d)(i.a,{css:n,container:!0,item:!0,xs:12,className:"rc-ForumsList","data-e2e":e.className},Object(u.d)(i.a,{item:!0,xs:12,component:l.a,css:Object(u.c)(_templateObject(),t.spacing(16,0,16,24))},e.title&&Object(u.d)(c.a,{variant:"h4bold",className:"category-title",component:"h2"},e.title)),Object(u.d)(i.a,{item:!0,xs:12,component:l.a},Object(u.d)("div",null,e.children)))}e.a=ForumsList},mDu6:function(module,e,t){"use strict";var n=t("VkAN"),r=t.n(n),s=t("AeFk"),o=t("F/us"),a=t.n(o),i=t("q1tI"),c=t.n(i),u=t("BVC1"),l=t("lj0O"),p=t("BS7q"),d=t("Jrms"),b=t("u5mk"),m=t("Fmrb"),f=t.n(m),O=t("J91Q"),j=t.n(O),g=t("763+"),h=t("zXDh");function _templateObject2(){var e=r()(["\n              border-bottom: 1px solid ",";\n              padding: ",";\n              &:hover {\n                background-color: ",";\n              }\n            "]);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=r()(["\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        "]);return _templateObject=function _templateObject(){return e},e}function DiscussionsWeekForums(e){var t=e.courseForums.filter(function(e){return e.forumType.typeName===d.u.weekForumType}).map(function(t){var n=e.courseForumStatistics.find(function(e){return e.courseForumId===t.id});return Object.assign({},t,{discussionsLink:u.a.join(Object(d.s)(e.courseSlug),t.link),lastAnsweredAt:n&&n.lastAnsweredAt,forumQuestionCount:n&&n.forumQuestionCount})}),n=Object(g.a)(),r=Object(h.isUserRightToLeft)();return Object(s.d)(l.a,{className:"rc-DiscussionsWeekForums",title:e.customLabelsV2?void 0:f()("Week Forums")},Object(s.d)("ul",{css:Object(s.c)(_templateObject())},t.map(function(e){return Object(s.d)("li",{key:e.id,css:Object(s.c)(_templateObject2(),n.palette.gray[300],n.spacing(24),n.palette.blue[50])},Object(s.d)(p.a,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))})))}e.a=Object(o.compose)(Object(d.o)({fields:["link","title","description","lastAnsweredAt","forumQuestionCount"]}),b.a)(DiscussionsWeekForums)},nFDk:function(module,exports,e){var t=e("g40P"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},oRIA:function(module,exports,e){var t=e("eN8u"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},uJiD:function(module,e,t){"use strict";t.d(e,"a",function(){return ContentBlock});var n=t("q1tI"),r=t.n(n),s=t("763+"),o=t("AeFk");function ContentBlock(e){var t=e.children,n=e.className,r=Object(s.a)(),a={border:"1px solid ".concat(r.palette.gray[300])};return Object(o.d)("section",{className:n,css:a},t)}},xmWo:function(module,exports,e){var t=e("cMOt"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},s=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},yaC5:function(module,e,t){"use strict";var n=t("lSNA"),r=t.n(n),s=t("VbXa"),o=t.n(s),a=t("VkAN"),i=t.n(a),c=t("AeFk"),u=t("q1tI"),l=t.n(u),p=t("763+"),d=t("6/Gu"),b=t("oEqI"),m=t("F/us"),f=t.n(m),O=t("w/1P"),j=t.n(O),g=t("17x9"),h=t.n(g),y=t("Jrms"),v=t("EbdU"),A=t("mDu6"),F=t("BoL+"),k=t("2f5k"),S=t("+LJP"),x=t("oRIA"),T=t.n(x);function _templateObject(){var e=i()(["\n          margin: ",";\n        "]);return _templateObject=function _templateObject(){return e},e}var D=function AllForumsTabBody(){var e=Object(p.a)();return Object(c.d)(d.a,{container:!0,item:!0,xs:12,role:"tabpanel",id:"panel-".concat(F.a.ALL)},Object(c.d)(d.a,{item:!0,xs:12},Object(c.d)(k.a,null)),Object(c.d)(d.a,{item:!0,xs:12,css:Object(c.c)(_templateObject(),e.spacing(0,0,24,0))},Object(c.d)(v.a,null)),Object(c.d)(d.a,{xs:12,item:!0},Object(c.d)(A.a,null)))},w=function(e){function DiscussionsMainColumn(){return e.apply(this,arguments)||this}var t;return o()(DiscussionsMainColumn,e),DiscussionsMainColumn.prototype.render=function render(){var e,t=this.props,n=t.className,s=t.theme,o=Object(c.c)({".searchBoxContainer":r()({justifyContent:"flex-start",margin:s.spacing(0,16,0,0)},"".concat(s.breakpoints.up("xs")),{width:"330px",minWidth:"330px"}),".newThreadButtonContainer":(e={},r()(e,"".concat(s.breakpoints.up("sm")),{padding:s.spacing(0)}),r()(e,"".concat(s.breakpoints.up("xs")),{width:"100px",minWidth:"100px"}),r()(e,"".concat(s.breakpoints.down("xs")),{padding:s.spacing(24,0,0,0)}),e)});return Object(c.d)(d.a,{container:!0,item:!0,xs:12,className:j()("rc-DiscussionsMainColumn",n),css:o},Object(c.d)(d.a,{container:!0,item:!0,style:{display:"flex"}},Object(c.d)(d.a,{item:!0,xs:12,sm:5,className:"searchBoxContainer"},Object(c.d)(y.j,{previousElementId:"sortOrder",nextElementId:"new-thread-btn",placeholder:"Search forum",animateFromSearch:function animateFromSearch(){return null},animateToSearch:function animateToSearch(){return null},onSubmit:function onSubmit(){return null}})),Object(c.d)(d.a,{item:!0,xs:12,sm:3,className:"newThreadButtonContainer"},Object(c.d)(y.g,null))),Object(c.d)(d.a,{item:!0,xs:12,style:{padding:s.spacing(32,0,0,0)}},Object(c.d)(F.c,null,function(e){var t=e.activeTab;return Object(c.d)(l.a.Fragment,null,Object(c.d)(F.b,{activeTab:t,tabName:F.a.FORYOU},Object(c.d)(y.h,null)),Object(c.d)(F.b,{activeTab:t,tabName:F.a.ACTIVITY},Object(c.d)(y.m,null)),Object(c.d)(F.b,{activeTab:t,tabName:F.a.ALL},Object(c.d)(D,null)))})))},DiscussionsMainColumn}(l.a.Component);w.contextTypes={router:h.a.object.isRequired},e.a=Object(m.compose)(Object(S.a)(function(e){return{query:e.location.query.q&&decodeURIComponent(e.location.query.q)}}))(Object(b.a)(w))}}]);
//# sourceMappingURL=79.c35a45ab0d3bd817628c.js.map