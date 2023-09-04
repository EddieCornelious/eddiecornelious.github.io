"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[485],{485:function(e,o,t){t.r(o),t.d(o,{default:function(){return c}});var r=t(791),n=t.n(r),a=t(423),l=t.n(a),i=t(811),u=t.n(i),d=t(75),f=t.n(d),c=function(){return n().createElement("section",{className:"header"},n().createElement("div",{className:"logo"},n().createElement("h1",null,"EC")),n().createElement("div",{className:"header__content"},n().createElement(u(),{left:!0,cascade:!0,delay:1e3},n().createElement("h1",{className:"header__name"},"EDDIE CORNELIOUS")),n().createElement(l(),{right:!0},n().createElement("em",{className:"header__career"},"Software Developer")),n().createElement(f(),{bottom:!0,delay:1500},n().createElement("a",{href:"#projects",className:"header__btn"},"SEE PROJECTS"))))}},75:function(e,o,t){function r(e,o){var t=o.distance,r=o.left,n=o.right,a=o.up,l=o.down,u=o.top,d=o.bottom,f=o.big,m=o.mirror,s=o.opposite,b=(t?t.toString():0)+((r?1:0)|(n?2:0)|(u||l?4:0)|(d||a?8:0)|(m?16:0)|(s?32:0)|(e?64:0)|(f?128:0));if(c.hasOwnProperty(b))return c[b];var v=r||n||a||l||u||d,p=void 0,y=void 0;if(v){if(!m!=!(e&&s)){var h=[n,r,d,u,l,a];r=h[0],n=h[1],u=h[2],d=h[3],a=h[4],l=h[5]}var g=t||(f?"2000px":"100%");p=r?"-"+g:n?g:"0",y=l||u?"-"+g:a||d?g:"0"}return c[b]=(0,i.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+p+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),c[b]}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.defaults,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.children,n=(e.out,e.forever),a=e.timeout,l=e.duration,u=void 0===l?i.defaults.duration:l,f=e.delay,c=void 0===f?i.defaults.delay:f,m=e.count,s=void 0===m?i.defaults.count:m,b=function(e,o){var t={};for(var r in e)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===a?u:a,delay:c,forever:n,count:s,style:{animationFillMode:"both"},reverse:b.left};return o?(0,d.default)(b,v,v,t):v}Object.defineProperty(o,"__esModule",{value:!0});var a,l=t(7),i=t(6),u=t(208),d=(a=u)&&a.__esModule?a:{default:a},f={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,distance:l.string,delay:l.number,count:l.number,forever:l.bool},c={};n.propTypes=f,o.default=n,e.exports=o.default},811:function(e,o,t){function r(e,o){var t=o.left,r=o.right,n=o.up,a=o.down,l=o.top,i=o.bottom,u=o.big,f=o.mirror,m=o.opposite,s=(t?1:0)|(r?2:0)|(l||a?4:0)|(i||n?8:0)|(f?16:0)|(m?32:0)|(e?64:0)|(u?128:0);if(c.hasOwnProperty(s))return c[s];if(!f!=!(e&&m)){var b=[r,t,i,l,a,n];t=b[0],r=b[1],l=b[2],i=b[3],n=b[4],a=b[5]}var v=u?"2000px":"100%",p=t?"-"+v:r?v:"0",y=a||l?"-"+v:n||i?v:"0";return c[s]=(0,d.animation)("\n    "+(e?"to":"from")+" {opacity: 0;transform: translate3d("+p+", "+y+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(e?"from":"to")+" {opacity: 1;transform: none}\n  "),c[s]}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,o=e.children,t=(e.out,e.forever),n=e.timeout,a=e.duration,l=void 0===a?d.defaults.duration:a,u=e.delay,f=void 0===u?d.defaults.delay:u,c=e.count,m=void 0===c?d.defaults.count:c,s=function(e,o){var t={};for(var r in e)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["children","out","forever","timeout","duration","delay","count"]),b={make:r,duration:void 0===n?l:n,delay:f,forever:t,count:m,style:{animationFillMode:"both"}};return(0,i.default)(s,b,b,o)}Object.defineProperty(o,"__esModule",{value:!0});var a,l=t(208),i=(a=l)&&a.__esModule?a:{default:a},u=t(7),d=t(6),f={out:u.bool,left:u.bool,right:u.bool,top:u.bool,bottom:u.bool,big:u.bool,mirror:u.bool,opposite:u.bool,duration:u.number,timeout:u.number,delay:u.number,count:u.number,forever:u.bool},c={};n.propTypes=f,o.default=n,e.exports=o.default},423:function(e,o,t){function r(e,o){var t=o.left,r=o.right,n=o.up,a=o.down,l=o.top,i=o.bottom,u=o.big,f=o.mirror,m=o.opposite,s=(t?1:0)|(r?2:0)|(l||a?4:0)|(i||n?8:0)|(f?16:0)|(m?32:0)|(e?64:0)|(u?128:0);if(c.hasOwnProperty(s))return c[s];var b=t||r||n||a||l||i,v=void 0,p=void 0;if(b){if(!f!=!(e&&m)){var y=[r,t,i,l,a,n];t=y[0],r=y[1],l=y[2],i=y[3],n=y[4],a=y[5]}var h=u?"2000px":"100%";v=t?"-"+h:r?h:"0",p=a||l?"-"+h:n||i?h:"0"}return c[s]=(0,d.animation)((e?"to":"from")+" {"+(b?" transform: translate3d("+v+", "+p+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),c[s]}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,o=e.children,t=(e.out,e.forever),n=e.timeout,a=e.duration,l=void 0===a?d.defaults.duration:a,i=e.delay,f=void 0===i?d.defaults.delay:i,c=e.count,m=void 0===c?d.defaults.count:c,s=function(e,o){var t={};for(var r in e)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["children","out","forever","timeout","duration","delay","count"]),b={make:r,duration:void 0===n?l:n,delay:f,forever:t,count:m,style:{animationFillMode:"both"},reverse:s.left};return(0,u.default)(s,b,b,o)}Object.defineProperty(o,"__esModule",{value:!0});var a,l=t(7),i=t(208),u=(a=i)&&a.__esModule?a:{default:a},d=t(6),f={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},c={};n.propTypes=f,o.default=n,e.exports=o.default}}]);
//# sourceMappingURL=485.465a2a6e.chunk.js.map