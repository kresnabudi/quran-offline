(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(t,e,n){"use strict";var a=n(10),i=n(26),r=n(31),s=n(119),o=n(59),c=n(19),d=n(60).f,l=n(82).f,u=n(17).f,h=n(221).trim,f=a.Number,v=f,m=f.prototype,p="Number"==r(n(81)(m)),_="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var n,a,i,r=(e=_?e.trim():h(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var s,c=e.slice(2),d=0,l=c.length;d<l;d++)if((s=c.charCodeAt(d))<48||s>i)return NaN;return parseInt(c,a)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(p?c(function(){m.valueOf.call(n)}):"Number"!=r(n))?s(new v(b(e)),n,f):b(e)};for(var g,x=n(14)?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)i(v,g=x[y])&&!i(f,g)&&u(f,g,l(v,g));f.prototype=m,m.constructor=f,n(20)(a,"Number",f)}},193:function(t,e,n){var a=n(227);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(24).default)("4031cf0d",a,!0,{})},194:function(t,e,n){var a=n(230);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(24).default)("0ced4e9e",a,!0,{})},195:function(t,e,n){var a=n(232);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(24).default)("55d4aafe",a,!0,{})},221:function(t,e,n){var a=n(13),i=n(30),r=n(19),s=n(222),o="["+s+"]",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),l=function(t,e,n){var i={},o=r(function(){return!!s[t]()||"​"!="​"[t]()}),c=i[t]=o?e(u):s[t];n&&(i[n]=c),a(a.P+a.F*o,"String",i)},u=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=l},222:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},223:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(t,e,n,a,i,r,s,o){const c=("function"==typeof n?n.options:n)||{};return c.__file="md-share.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),c._scopeId=a,c}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-share-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"}})])])},staticRenderFns:[]},0,{name:"md-share-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Share Icon";return{iconTitle:t}}},e,!1)}()},224:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(t,e,n,a,i,r,s,o){const c=("function"==typeof n?n.options:n)||{};return c.__file="md-bookmark.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),c._scopeId=a,c}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-bookmark-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"}})])])},staticRenderFns:[]},0,{name:"md-bookmark-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Bookmark Icon";return{iconTitle:t}}},e,!1)}()},225:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(t,e,n,a,i,r,s,o){const c=("function"==typeof n?n.options:n)||{};return c.__file="md-volume-high.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),c._scopeId=a,c}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-volume-high-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"}})])])},staticRenderFns:[]},0,{name:"md-volume-high-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Volume High Icon";return{iconTitle:t}}},e,!1)}()},226:function(t,e,n){"use strict";var a=n(193);n.n(a).a},227:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.verse__header[data-v-2a54e570] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.verse__header--right[data-v-2a54e570] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.verse__header_icon[data-v-2a54e570] {\n    padding: 0 .5em;\n    position: relative;\n}\n.verse__arabic[data-v-2a54e570] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n  margin-top: .25em;\n}\n.verse__translation[data-v-2a54e570] {\n  font-size: 0.9rem;\n  width: 100%;\n  text-align: left;\n  font-style: italic;\n  margin-top: 1.5em;\n}\n.tooltip[data-v-2a54e570] {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  background-color: #1a1a1a;\n  color: #41b883;\n  text-align: center;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -50px;\n}\n.tooltip ul[data-v-2a54e570] {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.tooltip ul li[data-v-2a54e570] {\n      padding: 15px 25px;\n      border-bottom: 1px solid #41b883;\n}\n.tooltip ul li[data-v-2a54e570]:last-child {\n        border-bottom: 0;\n}\n.tooltip.show[data-v-2a54e570] {\n  visibility: visible;\n  opacity: 1;\n}\n",""])},228:function(t,e,n){t.exports=function(){"use strict";var t={computed:{ionClass:function(){var t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),"".concat(this.rootClass," ").concat(t)}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}};const e=void 0;return function(t,e,n,a,i,r,s,o){const c=("function"==typeof n?n.options:n)||{};return c.__file="md-arrow-forward.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),c._scopeId=a,c}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ion",class:this.ionClass,attrs:{title:this.iconTitle,name:"md-arrow-forward-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:this.w,height:this.h}},[e("path",{attrs:{d:"M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"}})])])},staticRenderFns:[]},0,{name:"md-arrow-forward-icon",mixins:[t],data:function(){var t=this.title?this.title:"Md Arrow Forward Icon";return{iconTitle:t}}},e,!1)}()},229:function(t,e,n){"use strict";var a=n(194);n.n(a).a},230:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.surah_nav[data-v-05ddb712] {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  margin: 0;\n  height: 60px;\n  text-align: center;\n  width: 100%;\n  background: #41b883;\n  color: #000;\n}\n.surah_nav_item[data-v-05ddb712] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #000;\n}\n.surah_nav_title[data-v-05ddb712] {\n    font-size: 2rem;\n}\n.surah_nav_prev[data-v-05ddb712], .surah_nav_next[data-v-05ddb712] {\n    text-decoration: none;\n}\n.surah_nav_prev span[data-v-05ddb712], .surah_nav_next span[data-v-05ddb712] {\n      padding: 0 .25em;\n      font-size: 2rem;\n}\n",""])},231:function(t,e,n){"use strict";var a=n(195);n.n(a).a},232:function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.detail__header[data-v-dd6d31c8] {\n  width: 90%;\n  margin: 1em auto;\n  font-size: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.detail__header_index[data-v-dd6d31c8] {\n    background-color: #52e0a1;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100px;\n    padding: .25em .5em;\n}\n.detail__header_content[data-v-dd6d31c8] {\n    background-color: #000;\n    color: #52e0a1;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: right;\n    height: 100px;\n    padding: .25em .5em;\n}\n.detail__header_content small[data-v-dd6d31c8] {\n      font-size: 1rem;\n}\n.detail__content[data-v-dd6d31c8] {\n  width: 90%;\n  margin: 0 auto;\n  margin-bottom: 5em;\n}\n",""])},233:function(t,e,n){"use strict";n.r(e);n(25),n(192);var a=n(8),i=n.n(a),r=(n(1),n(2),n(3),n(9)),s=n(223),o=n.n(s),c=n(224),d=n.n(c),l=n(225),u=n.n(l),h=n(18),f={availableAudio:[{id:"kemenag",text:"Kemenag"}],getAudioFromKemenag:function(t,e){var n=Object(h.d)(t),a=Object(h.d)(e);return"https://quran.kemenag.go.id/api/source/s01/".concat(n).concat(a,".mp3")}},v={name:"VerseCard",components:{MdShareIcon:o.a,MdBookmarkIcon:d.a,MdVolumeHighIcon:u.a},props:{verseArray:{type:[Object,Array],default:function(){return{}}},translations:{type:Object,default:function(){return{}}},surahId:{type:Number,default:0}},data:function(){return{audios:f.availableAudio,clickedAudioIcon:1e6,timeout:null}},computed:i()({},Object(r.d)(["surahFavorite","isSupportWebShare"])),methods:i()({},Object(r.b)(["setLastReadVerse","showNotification","shareViaWebshare"]),{onClickAudioIcon:function(t){var e=this;this.timeout&&clearTimeout(this.timeout),this.clickedAudioIcon=t,this.timeout=setTimeout(function(){e.clickedAudioIcon=1e6},5e3)},onClickAudioItem:function(t,e){if("kemenag"===t.id){var n=f.getAudioFromKemenag(this.surahId,e);window.location.href=n}},getTranslation:function(t){return this.translations.id.text[t]},doSetLastReadVerse:function(t){this.setLastReadVerse(t),this.showNotification({title:"Pesan Sukses",message:"Ayat telah ditambahkan ke terakhir dibaca."})},shareVerse:function(t,e){var n={title:"QS ".concat(this.surahId,":").concat(e),text:"".concat(t,"\n\n        ").concat(this.getTranslation(e)," (QS ").concat(this.surahId,":").concat(e,")"),url:"https://quran-offline.netlify.com/".concat(this.surahId,"#verse-").concat(e)};this.shareViaWebshare(n)}})},m=(n(226),n(12)),p=Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"verse__root"},t._l(t.verseArray,function(e,a){return n("div",{key:a,staticClass:"verse block_content has-shadow",attrs:{id:"verse-"+a}},[n("div",{staticClass:"verse__header"},[n("div",{staticClass:"verse__index tag_index"},[t._v("\n        "+t._s(Number(a))+"\n      ")]),t._v(" "),n("div",{staticClass:"verse__header--right"},[n("div",{staticClass:"verse__header_icon",on:{click:function(e){t.onClickAudioIcon(Number(a))}}},[n("MdVolumeHighIcon",{attrs:{w:"2em",h:"2em"}}),t._v(" "),n("div",{staticClass:"tooltip",class:{show:Number(t.clickedAudioIcon)===Number(a)}},t._l(t.audios,function(e){return n("ul",{key:e.id},[n("li",{on:{click:function(n){t.onClickAudioItem(e,Number(a))}}},[t._v("\n                "+t._s(e.text)+"\n              ")])])}))],1),t._v(" "),n("div",{staticClass:"verse__header_icon",on:{click:function(e){t.doSetLastReadVerse({surah:t.surahId,verse:Number(a)})}}},[n("MdBookmarkIcon",{attrs:{w:"2em",h:"2em"}})],1),t._v(" "),t.isSupportWebShare?n("div",{staticClass:"verse__header_icon",on:{click:function(n){t.shareVerse(e,Number(a))}}},[n("MdShareIcon",{attrs:{w:"2em",h:"2em"}})],1):t._e()])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"verse__arabic font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(e)+"\n      ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"verse__translation"},[t._v("\n        "+t._s(t.getTranslation(a))+"\n      ")])])])}))},[],!1,null,"2a54e570",null);p.options.__file="VerseCard.vue";var _=p.exports,b=n(106),g=n.n(b),x=n(228),y=n.n(x),k={name:"SurahNavigation",components:{MdArrowBackIcon:g.a,MdArrowForwardIcon:y.a},props:{surahId:{type:Number,default:0},surahName:{type:String,default:""},nextSurah:{type:Object,default:function(){return{arabic:""}}},prevSurah:{type:Object,default:function(){return{arabic:""}}}},computed:{isHavePrev:function(){return this.surahId>1},isHaveNext:function(){return this.surahId<114}}},w=(n(229),Object(m.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surah_nav"},[n("nuxt-link",{staticClass:"surah_nav_item surah_nav_prev",attrs:{to:"/"+(t.surahId-1)}},[t.isHavePrev?n("MdArrowBackIcon",{attrs:{w:"30px",h:"30px"}}):t._e(),t._v(" "),t.prevSurah?n("span",[t._v("\n      "+t._s(t.prevSurah.arabic)+"\n    ")]):t._e()],1),t._v(" "),n("nuxt-link",{staticClass:"surah_nav_item surah_nav_next",attrs:{to:"/"+(t.surahId+1)}},[t.nextSurah?n("span",[t._v("\n      "+t._s(t.nextSurah.arabic)+"\n    ")]):t._e(),t._v(" "),t.isHaveNext?n("MdArrowForwardIcon",{attrs:{w:"30px",h:"30px"}}):t._e()],1)],1)},[],!1,null,"05ddb712",null));w.options.__file="SurahNavigation.vue";var S={name:"PageSurahDetail",head:function(){return{title:"Qur'an Surat ".concat(this.currentSurah.name_latin," | Qur'an Offline")}},components:{VerseCard:_,SurahNavigation:w.exports},data:function(){return{loading:!0}},computed:i()({},Object(r.d)(["surahDetail","allSurahList"]),{currentSurah:function(){return this.surahDetail},surahId:function(){return Number(this.$route.params.surahid)},isValidSurah:function(){return this.surahId>0&&this.surahId<=114},prevSurah:function(){var t=this;return Object(h.a)(this.allSurahList)&&this.surahId>1?this.allSurahList.find(function(e){return e.index===t.surahId-1}):null},nextSurah:function(){var t=this;return Object(h.a)(this.allSurahList)&&this.surahId<114?this.allSurahList.find(function(e){return e.index===t.surahId+1}):null}}),mounted:function(){this.onMountedDetailPage(this.surahId)},methods:i()({},Object(r.c)(["setHeaderTitle"]),Object(r.b)(["fetchAllSurah","fetchSurahById"]),{onMountedDetailPage:function(t){var e=this;Object(h.a)(this.allSurahList)||this.fetchAllSurah({success:function(){}}),this.fetchSurahById({id:t,success:function(n){e.setHeaderTitle("".concat(t,": ").concat(n.name_latin)),setTimeout(function(){e.loading=!1},1e3)}})}})},I=(n(231),Object(m.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"detail"},[n("div",{staticClass:"detail__header"},[n("div",{staticClass:"detail__header_index"},[t._v("\n        "+t._s(t.currentSurah.number)+"\n      ")]),t._v(" "),n("div",{staticClass:"detail__header_content"},[n("div",[t._v(t._s(t.currentSurah.name))]),t._v(" "),n("small",[t._v("("+t._s(t.currentSurah.name_latin)+" - "+t._s(t.currentSurah.translations.id.name)+")")])])]),t._v(" "),n("div",{staticClass:"detail__content"},[n("VerseCard",{attrs:{"verse-array":t.currentSurah.text,"surah-id":t.surahId,translations:t.currentSurah.translations}})],1),t._v(" "),n("SurahNavigation",{attrs:{"surah-id":t.surahId,"surah-name":t.currentSurah.name,"next-surah":t.nextSurah,"prev-surah":t.prevSurah}})],1)])},[],!1,null,"dd6d31c8",null));I.options.__file="_surahid.vue";e.default=I.exports}}]);