(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(3),i=n.n(a),c=(n(12),n(4)),o=n(5),r=n(7),u=n(6),l=(n(13),n(0)),g=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={message:"",message_list:[],icon:"./icon_girl.png",alt:"girl"},s}return Object(o.a)(n,[{key:"doChange",value:function(t){this.setState({message:t.target.value})}},{key:"doSubmit",value:function(t){t.preventDefault();var e=this.state.message_list.slice();e.unshift({icon:this.state.icon,alt:this.state.alt,message:this.state.message}),this.setState({message_list:e}),this.setState({message:""})}},{key:"setGirl",value:function(){this.setState({icon:"./icon_girl.png",alt:"girl"})}},{key:"setBakyura",value:function(){this.setState({icon:"./icon_bakyura.png",alt:"bakyura"})}},{key:"setBear",value:function(){this.setState({icon:"./icon_bear.png",alt:"bear"})}},{key:"setNumakuro",value:function(){this.setState({icon:"./icon_numakuro.png",alt:"numakuro"})}},{key:"setSetton",value:function(){this.setState({icon:"./icon_setton.png",alt:"setton"})}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{class:"topWrapper",children:[Object(l.jsxs)("div",{class:"iconChange",children:[Object(l.jsx)("p",{children:"\u30a2\u30a4\u30b3\u30f3\u5909\u66f4"}),Object(l.jsx)("input",{type:"image",src:"./icon_girl.png",alt:"girl",onClick:function(){t.setGirl()}}),Object(l.jsx)("input",{type:"image",src:"./icon_bakyura.png",alt:"bakyura",onClick:function(){t.setBakyura()}}),Object(l.jsx)("input",{type:"image",src:"./icon_bear.png",alt:"bear",onClick:function(){t.setBear()}}),Object(l.jsx)("input",{type:"image",src:"./icon_numakuro.png",alt:"numakuro",onClick:function(){t.setNumakuro()}}),Object(l.jsx)("input",{type:"image",src:"./icon_setton.png",alt:"setton",onClick:function(){t.setSetton()}})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{class:"messageForm",children:[Object(l.jsx)("img",{src:this.state.icon,alt:this.state.alt}),Object(l.jsxs)("form",{onSubmit:function(e){return t.doSubmit(e)},children:[Object(l.jsx)("textarea",{onChange:function(e){return t.doChange(e)},value:this.state.message}),Object(l.jsx)("input",{type:"submit",value:"POST!"})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{class:"chatForm",children:Object(l.jsx)("div",{children:this.state.message_list.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:t.icon,alt:t.alt}),Object(l.jsx)("div",{class:"girl"===t.alt?"messageBoxGirl":"bakyura"===t.alt?"messageBoxBakyura":"bear"===t.alt?"messageBoxBear":"numakuro"===t.alt?"messageBoxNumakuro":"messageBoxSetton",children:Object(l.jsx)("p",{children:t.message})})]})}))})})]})}}]),n}(s.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};i.a.render(Object(l.jsx)(g,{}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.277922b8.chunk.js.map