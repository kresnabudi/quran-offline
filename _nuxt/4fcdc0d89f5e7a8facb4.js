(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("818cf880",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";var r=n(213);n.n(r).a},243:function(t,e,n){(e=n(33)(!1)).push([t.i,".wrapper[data-v-1afb85c4]{width:90%;margin:1em auto}.arabic[data-v-1afb85c4]{font-size:4rem;width:100%;margin-top:1em;text-align:right}.translation[data-v-1afb85c4]{font-size:2rem;width:100%;font-style:italic;margin-top:1.5em;text-align:left}@media screen and (max-width:641px){.arabic[data-v-1afb85c4]{font-size:2rem}.translation[data-v-1afb85c4]{font-size:1rem}}",""]),t.exports=e},402:function(t,e,n){"use strict";n.r(e);n(22),n(23),n(13),n(56),n(41);var r=n(6),c=n(27),o=n(35),l=n(28),f=n(29),d=n(14),v=n(3),h=n(15),m=n(7),y=n(17);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(l.a)(r,t);var e,n=(e=r,function(){var t,n=Object(d.a)(e);if(w()){var r=Object(d.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)});function r(){var t;return Object(c.a)(this,r),(t=n.apply(this,arguments)).AppConstant=y.a,t}return Object(o.a)(r,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle("Ayat Kursi"),this.setPage("ayat-kursi")}},{key:"activated",value:function(){this.setHeaderTitle("Ayat Kursi"),this.setPage("ayat-kursi")}},{key:"metaHead",get:function(){var title="Bacaan dan terjemahan ayat kursi | Qur'an Web";return{title:title,meta:[{hid:"description",name:"description",content:"Bacaan dan terjemahan ayat kursi, baca langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya"},{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}}]),r}(h.Vue);Object(v.a)([m.State],j.prototype,"settingActiveTheme",void 0),Object(v.a)([m.Mutation],j.prototype,"setHeaderTitle",void 0),Object(v.a)([m.Mutation],j.prototype,"setPage",void 0);var k=j=Object(v.a)([Object(h.Component)({asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(20).then(n.t.bind(null,393,3));case 2:return e=t.sent,t.abrupt("return",{ayatKursi:e.data});case 4:case"end":return t.stop()}}),t)})))()}})],j),O=(n(242),n(20)),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"arabic"},[t._v("\n      "+t._s(t.AppConstant.BISMILLAH)+"\n    ")]),t._v(" "),n("div",{staticClass:"arabic"},[t._v("\n      "+t._s(t.ayatKursi.arabic)+"\n    ")]),t._v(" "),n("div",{staticClass:"translation"},[t._v("\n      "+t._s(t.ayatKursi.translation)+"\n    ")])])])}),[],!1,null,"1afb85c4",null);e.default=component.exports}}]);