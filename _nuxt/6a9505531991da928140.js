(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(t,e,r){var content=r(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("2bfd1624",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("65d39087",content,!0,{sourceMap:!1})},273:function(t,e,r){"use strict";var n=r(226);r.n(n).a},274:function(t,e,r){(e=r(33)(!1)).push([t.i,'.surah_nav[data-v-0b0bfe61]{position:fixed;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;bottom:0;left:auto;z-index:10;margin:0;height:60px;text-align:center;width:100%;max-width:500px;background:var(--bg-card-color)}.surah_nav[data-v-0b0bfe61],.surah_nav_item[data-v-0b0bfe61]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-color)}.surah_nav_title[data-v-0b0bfe61]{font-size:2rem}.surah_nav_next[data-v-0b0bfe61],.surah_nav_prev[data-v-0b0bfe61]{text-decoration:none}.surah_nav_next span[data-v-0b0bfe61],.surah_nav_prev span[data-v-0b0bfe61]{padding:0 .25em;font-size:2rem}.select[data-v-0b0bfe61]{-webkit-appearance:none;padding:.5em 1.5rem .5em .5rem;outline:none;border:none;background-color:#fff;font-size:1rem;border-radius:4px;margin-left:.5em;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");background-position:right 7px center;background-repeat:no-repeat;color:var(--bg-color);border:1px solid var(--text-color)}@media screen and (max-width:480px){.text-nav[data-v-0b0bfe61]{display:none}}',""]),t.exports=e},275:function(t,e,r){"use strict";var n=r(227);r.n(n).a},276:function(t,e,r){(e=r(33)(!1)).push([t.i,".detail__content[data-v-b74eff4e]{width:90%;margin:0 auto;padding-bottom:2em}",""]),t.exports=e},397:function(t,e,r){"use strict";r.r(e);r(22),r(23),r(13),r(56),r(41);var n=r(6),c=(r(206),r(27)),o=r(35),d=r(28),l=r(29),h=r(14),v=r(3),f=r(15),m=r(7),y=r(234),_=r(235),x=(r(58),r(57),r(115)),A=r.n(x),j=r(232),k=r.n(j);function I(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var O=function(t){Object(d.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(I()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function n(){return Object(c.a)(this,n),r.apply(this,arguments)}return Object(o.a)(n,[{key:"isHavePrev",get:function(){return this.verseId>1}},{key:"isHaveNext",get:function(){return this.verseId<this.verseCount}},{key:"arrayAyah",get:function(){return Array.from({length:this.verseCount},(function(t,e){return e+1}))}}]),n}(f.Vue);Object(v.a)([Object(f.Prop)({type:Number,default:1})],O.prototype,"surahId",void 0),Object(v.a)([Object(f.Prop)({type:Number,default:1})],O.prototype,"verseId",void 0),Object(v.a)([Object(f.Prop)({type:Number,default:0})],O.prototype,"verseCount",void 0),Object(v.a)([Object(f.Prop)({type:Function,default:function(){}})],O.prototype,"onChangeVerse",void 0);var S=O=Object(v.a)([Object(f.Component)({components:{MdArrowBackIcon:A.a,MdArrowForwardIcon:k.a}})],O),w=(r(273),r(20)),C=Object(w.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah_nav"},[r("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+t.surahId+"/"+(t.verseId-1)}},[t.isHavePrev?r("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.isHavePrev?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.verseId-1)+"\n    ")]):t._e()],1),t._v(" "),r("div",{staticClass:"surah_nav_item surah_nav_center"},[r("select",{staticClass:"select",attrs:{name:"verse-select"},domProps:{value:t.verseId},on:{change:t.onChangeVerse}},t._l(t.arrayAyah,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+t.surahId+"/"+(t.verseId+1)}},[t.isHaveNext?r("span",{staticClass:"text-nav"},[t._v("\n      "+t._s(t.verseId+1)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?r("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)}),[],!1,null,"0b0bfe61",null).exports,R=r(36),B=r(116);function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var P=function(t){Object(d.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(N()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function n(){var t;return Object(c.a)(this,n),(t=r.apply(this,arguments)).loading=!0,t}return Object(o.a)(n,[{key:"onChangeVerse",value:function(t){var e=t.target.value;this.$router.push("/".concat(this.surahId,"/").concat(e))}},{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle("".concat(this.surahId,":").concat(this.verseId," ").concat(this.currentSurah.name_latin)),this.setPage("verse-detail")}},{key:"activated",value:function(){this.setHeaderTitle("".concat(this.surahId,":").concat(this.verseId," ").concat(this.currentSurah.name_latin)),this.setPage("verse-detail")}},{key:"metaHead",get:function(){var title="Baca Qur'an Ayat ke-".concat(this.verseId," Surat ").concat(this.currentSurah.name_latin," | Qur'an Web");return{title:title,meta:[{hid:"description",name:"description",content:"Baca Qur'an, Terjemahan Bahasa Indonesia dan Tafsir Ayat ke-".concat(this.verseId," Surat ").concat(this.currentSurah.name_latin," Berdasarkan Data dari Kemenag")},{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"surahId",get:function(){var t=1;return Object(R.c)(this.$route.params&&this.$route.params.surahid)&&(t=Number(this.$route.params.surahid)),t}},{key:"verseId",get:function(){var t=1;return Object(R.c)(this.$route.params&&this.$route.params.verseid)&&(t=Number(this.$route.params.verseid)),t}},{key:"isValidSurah",get:function(){return this.surahId>0&&this.surahId<=114}}]),n}(f.Vue);Object(v.a)([m.State],P.prototype,"settingActiveTheme",void 0),Object(v.a)([m.Mutation],P.prototype,"setHeaderTitle",void 0),Object(v.a)([m.Mutation],P.prototype,"setPage",void 0);var H=P=Object(v.a)([Object(f.Component)({components:{SingleVerse:y.a,SurahHeader:_.a,VerseNavigation:C},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c,title,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,r(233)("./".concat(n.surahid,".json"));case 3:return c=e.sent,title="Baca Qur'an Ayat ke-".concat(n.verseid," Surat ").concat(c[n.surahid].name_latin," | Qur'an Web"),o="Baca Qur'an, Terjemahan Bahasa Indonesia dan Tafsir Ayat ke-".concat(n.verseid," Surat ").concat(c[n.surahid].name_latin," Berdasarkan Data dari Kemenag"),e.abrupt("return",{currentSurah:c[n.surahid],jsonldBreadcrumb:Object(B.b)({categoryTitle:"QS ".concat(n.surahid),categorySlug:"".concat(n.surahid),title:"QS ".concat(n.surahid,":").concat(n.verseid),slug:"".concat(n.surahid,"/").concat(n.verseid)}),jsonLdArticle:Object(B.a)({desc:"".concat(o),cover:"meta-image.png",title:"".concat(title),slug:"".concat(n.surahid,"/").concat(n.verseid)})});case 7:case"end":return e.stop()}}),e)})))()}})],P),V=(r(275),Object(w.a)(H,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",{staticClass:"detail"},[r("SurahHeader",{attrs:{"surah-number":Number(t.currentSurah.number),"surah-name":t.currentSurah.name,"surah-latin":t.currentSurah.name_latin,"surah-translation":t.currentSurah.translations.id.name}}),t._v(" "),r("div",{staticClass:"detail__content"},[r("SingleVerse",{attrs:{verse:t.currentSurah.text[String(t.verseId)],"verse-index":String(t.verseId),"surah-id":t.surahId,translations:t.currentSurah.translations,tafsir:t.currentSurah.tafsir}})],1),t._v(" "),r("VerseNavigation",{attrs:{"surah-id":t.surahId,"verse-id":t.verseId,"verse-count":Number(t.currentSurah.number_of_ayah),"on-change-verse":t.onChangeVerse}})],1),t._v(" "),r("script",{attrs:{type:"application/ld+json"},domProps:{textContent:t._s(t.jsonldBreadcrumb)}}),t._v(" "),r("script",{attrs:{type:"application/ld+json"},domProps:{textContent:t._s(t.jsonLdArticle)}})])}),[],!1,null,"b74eff4e",null));e.default=V.exports}}]);