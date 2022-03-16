(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"34Ts":function(module,e,n){"use strict";var t=n("BqYt"),r=n("Rc4f");e.a=function(e){var n=Object(r.a)(e).then(function(e){return new t.a(e.elements)});return n.done(),n}},"7KAE":function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("q1tI"),s=n.n(a),o=n("17x9"),i=n.n(o),c=n("kvW3"),u=n("U6QN"),l=function(e){function WeeklyNewLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyNewLearnerBanner,e),WeeklyNewLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getWeeklyNewLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-WeeklyNewLearnerBanner"},s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","enrolled in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},WeeklyNewLearnerBanner}(s.a.Component);l.propTypes={course:i.a.object.isRequired,learnerCounts:i.a.object.isRequired},e.a=l},BqYt:function(module,e,n){"use strict";var t=n("welz"),r=n.n(t),a=n("pWop"),s=r.a.Collection.extend({model:a.a,getEnrolled:function getEnrolled(){return this.filter(function(e){return e.get("courseRole")!==a.a.NOT_ENROLLED})}});e.a=s},EAIP:function(module,exports,e){var n=e("zIy+"),t;"string"==typeof n&&(n=[[module.i,n,""]]);var r={transform:void 0},a=e("aET+")(n,r);n.locals&&(module.exports=n.locals)},Rc4f:function(module,e,n){"use strict";var t=n("S+eF"),r=n.n(t),a=n("fw5G"),s=n.n(a),o=n("TKYU");e.a=function(e){var n=(new s.a).addQueryParam("q","findByUser").addQueryParam("userId",e);return r()(o.a.get(n.toString()))}},U6QN:function(module,e,n){"use strict";var t=n("S+eF"),r=n.n(t),a=n("DnuM"),s=n("sQ/U"),o=n("hs7e"),i=n("34Ts"),c=n("rIRb"),u=Object(a.a)("/api/reports.v1",{type:"rest"}),l="teachVisitedAt",d=10080,m={getBannerData:function getBannerData(){var e=this;return this.getTeachingCourse().spread(function(n,t){return[n,t,e.getLearnerCounts(n,t)]})},getVisitedTimestamp:function getVisitedTimestamp(){return localStorage.teachVisitedAt},setVisitedTimestamp:function setVisitedTimestamp(){localStorage.teachVisitedAt=Date.now()},shouldShow:function shouldShow(){var e=this.getVisitedTimestamp();if(e){var n=new Date(parseInt(e)),t=new Date(Date.now()),r,a,s;return 60*t.getHours()+t.getMinutes()-(60*n.getHours()+n.getMinutes())>10080}return!0},getTeachingCourse:function getTeachingCourse(){var e=s.a.get().id;if(!e)return r.a.reject();return Object(i.a)(e).then(function(e){var n=e.find(function(e){return e.hasTeachingRole()});if(n&&"UNIVERSITY_ADMIN"!==n.get("courseRole")){var t=n.get("courseId");return[n,o.a.fromId(t)]}return r.a.reject()}).spread(function(e,n){return c.a.isLaunched(n)?[e,n]:r.a.reject()})},getLearnerCounts:function getLearnerCounts(e,n){var t=this;return r()(u.get("Course~".concat(n.id,"~activity_learner_counts"))).then(function(a){return t.validateLearnerCountsResponse(a)?a.elements[0].body:r.a.reject({membership:e,course:n})})},validateLearnerCountsResponse:function validateLearnerCountsResponse(e){return e.elements&&e.elements[0]&&e.elements[0].body&&e.elements[0].body.latest&&e.elements[0].body.latest.starter_ever_count&&e.elements[0].body.latest.active_learner_past_1w_count&&e.elements[0].body.latest.visitor_ever_count&&e.elements[0].body["1w_ago"]&&e.elements[0].body["1w_ago"].starter_ever_count},getWeeklyNewLearnerCount:function getWeeklyNewLearnerCount(e){return e.latest.starter_ever_count-e["1w_ago"].starter_ever_count},getWeeklyActiveLearnerCount:function getWeeklyActiveLearnerCount(e){return e.latest.active_learner_past_1w_count},getTotalLearnerCount:function getTotalLearnerCount(e){return e.latest.visitor_ever_count}};e.a=m;var h=m.getBannerData,p=m.getVisitedTimestamp,f=m.setVisitedTimestamp,v=m.shouldShow,g=m.getTeachingCourse,b=m.getLearnerCounts,E=m.validateLearnerCountsResponse,C=m.getWeeklyNewLearnerCount,y=m.getWeeklyActiveLearnerCount,L=m.getTotalLearnerCount},i2Qy:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("q1tI"),s=n.n(a),o=n("17x9"),i=n.n(o),c=n("kvW3"),u=n("U6QN"),l=function(e){function TotalLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(TotalLearnerBanner,e),TotalLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getTotalLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-TotalLearnerBanner"},"A total of"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","are enrolled in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n),". View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},TotalLearnerBanner}(s.a.Component);l.propTypes={course:i.a.object.isRequired,learnerCounts:i.a.object.isRequired},e.a=l},"jq+c":function(module,e,n){"use strict";n.r(e);var t=n("VbXa"),r=n.n(t),a=n("q1tI"),s=n.n(a),o=n("U6QN"),i=n("EAIP"),c=n.n(i),u=n("i2Qy"),l=n("xP36"),d=n("7KAE"),m=[{key:"weeklyActiveLearner",component:l.a},{key:"weeklyNewLearner",component:d.a},{key:"totalLearner",component:u.a}],h=function(e){function TeachBanner(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={course:null,membership:null,learnerCounts:{},bannerIndex:-1,dismissed:!1},n.handleDismiss=function(){o.a.setVisitedTimestamp(),n.setState({dismissed:!0})},n}r()(TeachBanner,e);var n=TeachBanner.prototype;return n.componentDidMount=function componentDidMount(){var e=this;o.a.getBannerData().spread(function(n,t,r){var a=Math.round(Math.random()*(m.length-1));e.setState({course:t,membership:n,learnerCounts:r,bannerIndex:a})}).catch(function(){}).done()},n.renderBanner=function renderBanner(){var e=m[this.state.bannerIndex].component;return s.a.createElement(e,{course:this.state.course,learnerCounts:this.state.learnerCounts})},n.render=function render(){if(!this.state.course||this.state.dismissed||!o.a.shouldShow())return s.a.createElement("div",null);return s.a.createElement("div",{className:"rc-TeachBanner bt3-alert bt3-alert-info bt3-alert-dismissable"},s.a.createElement("div",{className:"c-teach-banner-content"},s.a.createElement("button",{onClick:this.handleDismiss,className:"bt3-close","data-dismiss":"alert","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×")),this.renderBanner()))},TeachBanner}(s.a.Component);e.default=h},rIRb:function(module,e,n){"use strict";n.d(e,"b",function(){return m});var t=n("/WoZ"),r=n("M6Ur"),a=n("tEn/"),s={isLaunched:function isLaunched(e){return!!e.launchedAt&&e.launchedAt<=Date.now()},isPreEnrollmentEnabled:function isPreEnrollmentEnabled(e){return!this.isLaunched(e)&&"preEnrollmentEnabledAt"in e},isSessionsModeEnabled:function isSessionsModeEnabled(e){return void 0!==e.sessionsEnabledAt&&e.sessionsEnabledAt<=Date.now()},isVerificationEnabled:function isVerificationEnabled(e){return!!e.verificationEnabledAt&&e.verificationEnabledAt<=Date.now()},isPrivate:function isPrivate(e){return Object(r.g)(e)},isFullC4CPartner:function isFullC4CPartner(e){var n=e.isC4CPartner,t=e.isPrivateAuthoringPartner;return n&&!t},getCourseCatalogType:function getCourseCatalogType(e){var n=t.a.PUBLIC;return s.isPrivate(e)?n=t.a.PRIVATE:e.isLimitedToEnterprise&&(n=t.a.ENTERPRISE),n},isProject:function isProject(e){return[a.a.PROJECT,a.a.RHYME_PROJECT].includes(e)}};e.a=s;var o=s.isLaunched,i=s.isPreEnrollmentEnabled,c=s.isSessionsModeEnabled,u=s.isVerificationEnabled,l=s.isPrivate,d=s.isFullC4CPartner,m=s.getCourseCatalogType,h=s.isProject},xP36:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("q1tI"),s=n.n(a),o=n("17x9"),i=n.n(o),c=n("kvW3"),u=n("U6QN"),l=function(e){function WeeklyActiveLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyActiveLearnerBanner,e),WeeklyActiveLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getWeeklyActiveLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-WeeklyActiveLearnerBanner"},s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","were active in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},WeeklyActiveLearnerBanner}(s.a.Component);l.propTypes={course:i.a.object.isRequired,learnerCounts:i.a.object.isRequired},e.a=l},"zIy+":function(module,exports,e){}}]);
//# sourceMappingURL=113.c9b21e782654ac419e94.js.map