(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,a,i){var e=i(179);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(24).default)("27236076",e,!0,{})},178:function(t,a,i){"use strict";var e=i(177);i.n(e).a},179:function(t,a,i){(t.exports=i(23)(!1)).push([t.i,"\n.surah__header[data-v-2b1784da] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.surah__title[data-v-2b1784da] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-2b1784da] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-2b1784da] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-2b1784da] {\n  text-align: right;\n}\n",""])},180:function(t,a,i){"use strict";i(25);var e=i(8),n=i.n(e),r=(i(1),i(2),i(3),i(9)),s={name:"SurahCard",props:{surahArray:{type:Array,default:function(){return[]}}},computed:n()({},Object(r.d)(["surahFavorite"])),methods:n()({},Object(r.b)(["addToFavorite","removeFromFavorite","showNotification"]),{doAddToFavorite:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})},doremoveFromfavorite:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})},findInFavorite:function(t){return(this.surahFavorite||[]).find(function(a){return a.index===t.index})},getSurahDetailUrl:function(t){return"/".concat(t)},goToSurahDetail:function(t){var a=this.getSurahDetailUrl(t);this.$router.push(a)}})},o=(i(178),i(12)),l=Object(o.a)(s,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"surah__root"},t._l(t.surahArray,function(a){return i("a",{key:a.index,staticClass:"surah block_content has-shadow",on:{click:function(i){i.preventDefault(),t.goToSurahDetail(a.index)}}},[i("div",{staticClass:"surah__header"},[i("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(a.index)+"\n      ")]),t._v(" "),i("div",{staticClass:"surah__header--right"},[t.findInFavorite(a)?t._e():i("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#000"},on:{click:function(i){i.preventDefault(),t.doAddToFavorite(a)}}},[i("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(a)?i("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(i){i.preventDefault(),t.doremoveFromfavorite(a)}}},[i("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),i("div",{staticClass:"divider clearfix"},[i("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(a.arabic)+"\n      ")])]),t._v(" "),i("div",{staticClass:"divider clearfix"},[i("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(a.latin)+"\n      ")])]),t._v(" "),i("div",{staticClass:"divider clearfix"},[i("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(a.translation)+": "+t._s(a.ayah_count)+" Ayat)\n      ")])])])}))},[],!1,null,"2b1784da",null);l.options.__file="SurahCard.vue";a.a=l.exports},182:function(t,a,i){var e=i(199);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(24).default)("e331d45e",e,!0,{})},198:function(t,a,i){"use strict";var e=i(182);i.n(e).a},199:function(t,a,i){(t.exports=i(23)(!1)).push([t.i,"\n.all-surah[data-v-18a75553] {\n  width: 90%;\n  margin: 0 auto;\n}\n",""])},238:function(t,a,i){"use strict";i.r(a);var e=i(8),n=i.n(e),r=(i(1),i(2),i(3),i(9)),s=i(180),o=i(18),l={name:"PageAllSurah",head:function(){return{title:"Daftar Surat | Qur'an Offline"}},components:{SurahCard:s.a},data:function(){return{loading:!0}},computed:n()({},Object(r.d)(["allSurahList"]),{isHaveSource:function(){return Object(o.b)(this.$route.query.source)}}),mounted:function(){this.setHeaderTitle("Daftar Surat"),this.fetchSurahInfo()},methods:n()({},Object(r.c)(["setHeaderTitle"]),Object(r.b)(["fetchAllSurah"]),{fetchSurahInfo:function(){var t=this;this.fetchAllSurah({success:function(){t.isHaveSource?t.loading=!1:setTimeout(function(){t.loading=!1},1e3)}})}})},c=(i(198),i(12)),u=Object(c.a)(l,function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"container"},[this.loading?a("div",this._l(5,function(t){return a("div",{key:t,staticClass:"skeleton skeleton_row skeleton_row--big"})})):a("div",{staticClass:"all-surah"},[a("SurahCard",{attrs:{"surah-array":this.allSurahList}})],1)])},[],!1,null,"18a75553",null);u.options.__file="all-surah.vue";a.default=u.exports}}]);