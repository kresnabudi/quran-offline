(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(t,e,r){var content=r(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("29ebea46",content,!0,{sourceMap:!1})},206:function(t,e,r){"use strict";var n=r(205);r.n(n).a},207:function(t,e,r){(e=r(32)(!1)).push([t.i,".surah__header[data-v-40ddae6c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.surah__title[data-v-40ddae6c]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-40ddae6c]{width:100%;font-size:1.5rem}.surah__trans[data-v-40ddae6c]{font-style:italic;line-height:2}.surah__count[data-v-40ddae6c],.surah__trans[data-v-40ddae6c]{text-align:right}.surah svg[data-v-40ddae6c]{fill:var(--text-color)}",""]),t.exports=e},208:function(t,e,r){"use strict";r(21),r(22),r(13),r(55),r(114);var n=r(26),c=r(34),o=r(27),l=r(28),d=r(14),h=r(3),f=r(15),v=r(7);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(o.a)(h,t);var e,r=(e=h,function(){var t,r=Object(d.a)(e);if(_()){var n=Object(d.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function h(){return Object(n.a)(this,h),r.apply(this,arguments)}return Object(c.a)(h,[{key:"doAddToFavorite",value:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})}},{key:"doRemoveFromfavorite",value:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})}},{key:"findInFavorite",value:function(t){return!!(this.surahFavorite||[]).find((function(e){return e.index===t.index}))}},{key:"getSurahDetailUrl",value:function(t){return"/".concat(t)}},{key:"goToSurahDetail",value:function(t){var path=this.getSurahDetailUrl(t);this.$router.push(path)}}]),h}(f.Vue);Object(h.a)([Object(f.Prop)({default:function(){return[]}})],m.prototype,"surahArray",void 0),Object(h.a)([v.State],m.prototype,"surahFavorite",void 0),Object(h.a)([v.Action],m.prototype,"addToFavorite",void 0),Object(h.a)([v.Action],m.prototype,"removeFromFavorite",void 0),Object(h.a)([v.Action],m.prototype,"showNotification",void 0);var x=m=Object(h.a)([f.Component],m),y=(r(206),r(19)),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},t._l(t.surahArray,(function(e){return r("a",{key:e.index,staticClass:"surah block_content has-shadow",on:{click:function(r){return r.preventDefault(),t.goToSurahDetail(e.index)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(e.index)+"\n      ")]),t._v(" "),r("div",{staticClass:"surah__header--right"},[t.findInFavorite(e)?t._e():r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){return r.preventDefault(),t.doAddToFavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(e)?r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(r){return r.preventDefault(),t.doRemoveFromfavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(e.arabic)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(e.latin)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n      ")])])])})),0)}),[],!1,null,"40ddae6c",null);e.a=component.exports},211:function(t,e,r){var content=r(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("c56e8d32",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";var n=r(211);r.n(n).a},228:function(t,e,r){(e=r(32)(!1)).push([t.i,".search[data-v-7eb7e9b6]{display:block;text-align:center;width:90%;margin:1em auto}.search input[data-v-7eb7e9b6]{-webkit-appearance:none;width:100%;padding:1rem;outline:none;background-color:#fff;font-size:1rem;border-radius:4px;color:var(--bg-color);border:1px solid var(--text-color)}.search__title[data-v-7eb7e9b6]{font-size:1.5rem}.search__result[data-v-7eb7e9b6],.search__title[data-v-7eb7e9b6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-top:1em}.search__result[data-v-7eb7e9b6]{-ms-flex-wrap:wrap;flex-wrap:wrap}.search__result a[data-v-7eb7e9b6]{text-decoration:none;background-color:var(--text-color);color:#000;border-radius:.25em;margin:1em 1em 0 0;padding:1.5em}.all-surah[data-v-7eb7e9b6]{width:90%;margin:0 auto}",""]),t.exports=e},387:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(13),r(55),r(40);var n=r(6),c=(r(56),r(67),r(26)),o=r(34),l=r(27),d=r(28),h=r(14),f=r(3),v=r(15),_=r(7),m=r(208),x=r(35);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(l.a)(n,t);var e,r=(e=n,function(){var t,r=Object(h.a)(e);if(y()){var n=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(d.a)(this,t)});function n(){var t;return Object(c.a)(this,n),(t=r.apply(this,arguments)).loading=!0,t.searchText="",t}return Object(o.a)(n,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle("Daftar Surat"),this.setPage("all-surah")}},{key:"metaHead",get:function(){var title="Daftar semua surat dalam Al-Qur'an | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}}},{key:"filteredSurah",get:function(){var t=this;return Object(x.b)(this.searchText)&&this.searchText.length>=3?this.allSurahList.filter((function(e){var r=Object(x.e)(e.translation).includes(Object(x.e)(t.searchText));return Object(x.e)(e.latin).includes(Object(x.e)(t.searchText))||r})):this.allSurahList}}]),n}(v.Vue);Object(f.a)([_.State],j.prototype,"settingActiveTheme",void 0),Object(f.a)([_.Mutation],j.prototype,"setHeaderTitle",void 0),Object(f.a)([_.Mutation],j.prototype,"setPage",void 0);var w=j=Object(f.a)([Object(v.Component)({components:{SurahCard:m.a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(17).then(r.t.bind(null,379,3));case 2:return e=t.sent,t.abrupt("return",{allSurahList:e.surah_info.map((function(t,e){return Object.assign({},t,{index:e+1})}))});case 4:case"end":return t.stop()}}),t)})))()}})],j),k=(r(227),r(19)),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("div",[r("div",{staticClass:"search clearfix"},[r("label",{staticClass:"search__title",attrs:{for:"search-surah"}},[t._v("\n        Pencarian surat\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{id:"search-surah",type:"search",name:"search",placeholder:"Surat apa yang ingin dibaca hari ini?"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"all-surah"},[r("SurahCard",{attrs:{"surah-array":t.filteredSurah}})],1)])])}),[],!1,null,"7eb7e9b6",null);e.default=component.exports}}]);