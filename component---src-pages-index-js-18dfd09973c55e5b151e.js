webpackJsonp([35783957827783],{25:function(e,t,n){e.exports={default:n(30),__esModule:!0}},26:function(e,t,n){e.exports={default:n(31),__esModule:!0}},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(25),a=o(r);t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},29:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},30:function(e,t,n){n(36),e.exports=n(8).Object.assign},31:function(e,t,n){n(37),e.exports=n(8).Object.keys},33:function(e,t,n){"use strict";var o=n(14),r=n(46),a=n(34),u=n(20),i=n(56),l=Object.assign;e.exports=!l||n(12)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=o})?function(e,t){for(var n=u(e),l=arguments.length,c=1,f=r.f,s=a.f;l>c;)for(var d,p=i(arguments[c++]),h=f?o(p).concat(f(p)):o(p),v=h.length,m=0;v>m;)s.call(p,d=h[m++])&&(n[d]=p[d]);return n}:l},35:function(e,t,n){var o=n(11),r=n(8),a=n(12);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],u={};u[e]=t(n),o(o.S+o.F*a(function(){n(1)}),"Object",u)}},36:function(e,t,n){var o=n(11);o(o.S+o.F,"Object",{assign:n(33)})},37:function(e,t,n){var o=n(20),r=n(14);n(35)("keys",function(){return function(e){return r(o(e))}})},38:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return a(O+e)}function a(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var u=n(28),i=o(u),l=n(26),c=o(l),f=n(29),s=o(f),d=n(27),p=o(d),h=n(42),v=o(h),m=n(41),b=o(m);t.withPrefix=r;var y=n(2),_=o(y),g=n(40),w=n(6),E=o(w),O="/",j={activeClassName:E.default.string,activeStyle:E.default.object,exact:E.default.bool,strict:E.default.bool,isActive:E.default.func,location:E.default.object},R=function(e,t){var n=new window.IntersectionObserver(function(o){o.forEach(function(o){e===o.target&&(o.isIntersecting||o.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},k=function(e){function t(n){(0,p.default)(this,t);var o=(0,v.default)(this,e.call(this)),a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),o.state={to:r(n.to),IOSupported:a},o.handleRef=o.handleRef.bind(o),o}return(0,b.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:r(e.to)}),this.state.IOSupported||___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&R(e,function(){___loader.enqueue(t.state.to)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,o=(0,s.default)(t,["onClick"]),r=void 0;return r=(0,c.default)(j).some(function(t){return e.props[t]})?g.NavLink:g.Link,_.default.createElement(r,(0,i.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var o=e.state.to;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),a=document.getElementById(r);if(null!==a)return a.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},o,{to:this.state.to,innerRef:this.handleRef}))},t}(_.default.Component);k.propTypes=(0,i.default)({},j,{innerRef:E.default.func,onClick:E.default.func,to:E.default.string.isRequired}),k.contextTypes={router:E.default.object},t.default=k;t.navigateTo=function(e){window.___navigateTo(r(e))}},194:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),l=o(i),c=n(38),f=o(c),s=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return l.default.createElement("div",{className:"main home"},l.default.createElement("p",null),l.default.createElement("p",null),l.default.createElement("p",null),l.default.createElement("p",null),l.default.createElement("p",null),l.default.createElement("p",null),l.default.createElement("div",null,l.default.createElement("h1",null,"Ankit Patel")),l.default.createElement("p",null,"Hello, I am a third year ",l.default.createElement("span",{className:"red"}," Software Engineering student "),"  at the University of Waterloo. My favourite things to do (besides programming) are playing video games, reading Science Fiction novels, playing the piano, and socializing with friends. I am interested in occupying a",l.default.createElement("span",{className:"green"}," full-stack web development ")," position."),l.default.createElement("p",null),l.default.createElement("a",{href:"/ResumeCurrent.pdf",target:"_blank"},l.default.createElement("button",{className:"button-purple"}," RÉSUMÉ ")),l.default.createElement("p",null),l.default.createElement(f.default,{to:"/projects"},l.default.createElement("button",{className:"button-blue"},"PROJECTS")))},t}(l.default.Component);t.default=s,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-18dfd09973c55e5b151e.js.map