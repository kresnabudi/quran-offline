(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,n,a){var i=a(158);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(30).default)("d501bfc2",i,!0,{})},157:function(t,n,a){"use strict";var i=a(152);a.n(i).a},158:function(t,n,a){(t.exports=a(29)(!1)).push([t.i,"\n.surah__title[data-v-58b598a3] {\n  font-size: 2rem;\n  width: 80%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-58b598a3] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-58b598a3] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-58b598a3] {\n  text-align: right;\n}\n",""])},169:function(t,n,a){"use strict";a.r(n);var i=a(20),e=a.n(i),s=(a(1),a(2),a(3),a(22)),r=a(19),l=a(14),c={name:"PageIndex",data:function(){return{loading:!0}},computed:e()({},Object(s.c)(["allSurahList"]),{isHaveSource:function(){return Object(l.a)(this.$route.query.source)}}),mounted:function(){r.a.$emit("changeSurah"),this.fetchSurahInfo()},methods:e()({},Object(s.b)(["fetchAllSurah"]),{getSurahDetailUrl:function(t,n){return"/".concat(n)},fetchSurahInfo:function(){var t=this;this.fetchAllSurah({success:function(){t.isHaveSource?t.loading=!1:setTimeout(function(){t.loading=!1},1e3)}})}})},u=(a(157),a(13)),o=Object(u.a)(c,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"container"},[t.loading?a("div",t._l(5,function(t){return a("div",{key:t,staticClass:"skeleton skeleton_row"})})):t._l(t.allSurahList,function(n){return a("nuxt-link",{key:n.index,staticClass:"surah block_content has-shadow",attrs:{to:t.getSurahDetailUrl(n,n.index)}},[a("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(n.index)+"\n      ")]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__title"},[t._v("\n          "+t._s(n.arabic)+"\n        ")])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n          "+t._s(n.latin)+"\n        ")])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__trans"},[t._v("\n          ("+t._s(n.translation)+": "+t._s(n.ayah_count)+" Ayat)\n        ")])])])})],2)},[],!1,null,"58b598a3",null);o.options.__file="all-surah.vue";n.default=o.exports}}]);