(function(){var e={269:function(e,t,r){"use strict";var i=r(471),n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper"},[t("Aside"),t("main",[t("transition",{attrs:{name:"slide-fade"}},[t("router-view")],1)],1)],1)])},a=[],o=r(635),s=r(233),u=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{class:["aside",{hide:e.asidehide,active:e.menuhide}]},[t("div",{staticClass:"aside__toggle",on:{click:e.asideToggle}},[t("font-awesome-icon",{attrs:{icon:["fas","down-left-and-up-right-to-center"]}}),t("font-awesome-icon",{attrs:{icon:["fas","up-right-and-down-left-from-center"]}})],1),t("router-link",{staticClass:"aside__logo",attrs:{to:"/"}},[e._v(" SSW "),t("span",[e._v("Music")])]),t("div",{staticClass:"aside__burger",on:{click:e.menuToggle}},[t("span")]),t("nav",{staticClass:"aside__nav"},[t("div",{on:{click:e.removeMenu}},[t("router-link",{attrs:{to:"/"}},[t("b",[t("font-awesome-icon",{attrs:{icon:["fas","house"]}})],1),t("span",[e._v("Главная")])])],1),t("div",{on:{click:e.removeMenu}},[t("router-link",{attrs:{to:"/favourites"}},[t("b",[t("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1),t("span",[e._v("Избранное")])])],1)])],1)},c=[],l=r(107),f=r(188);l.Yv.add(f.qcK,f.muz,f.DOu,f.skf);var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"asidehide",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"menuhide",{enumerable:!0,configurable:!0,writable:!0,value:!1}),t}return(0,o.C6)(t,e),Object.defineProperty(t.prototype,"asideToggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.asidehide=!this.asidehide}}),Object.defineProperty(t.prototype,"menuToggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.menuhide=!this.menuhide}}),Object.defineProperty(t.prototype,"removeMenu",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.menuhide=!1}}),t=(0,o.Cg)([s.uA],t),t}(s.lD),p=d,m=p,v=r(656),b=(0,v.A)(m,u,c,!1,null,"3d2d6c41",null),h=b.exports,g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.C6)(t,e),t=(0,o.Cg)([(0,s.uA)({components:{Aside:h}})],t),t}(s.lD),y=g,_=y,O=(0,v.A)(_,n,a,!1,null,"78a0c58a",null),C=O.exports,w=r(173),P=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Home")},T=[],A=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t("Title",[e._v("Ваш плейлист")]),t("Cards",{attrs:{items:this.musics}})],1)},j=[],x=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"title"},[e._t("default")],2)},k=[],D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.C6)(t,e),t=(0,o.Cg)([s.uA],t),t}(s.lD),M=D,S=M,F=(0,v.A)(S,x,k,!1,null,"06a27a66",null),E=F.exports;function V(e){return r(161)("./".concat(e))}var $=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"musics",{enumerable:!0,configurable:!0,writable:!0,value:[{id:"1",name:"Mendirman",singer:"Ozodbek Nazarbekov",image:"https://storage.kun.uz/source/3/VxbKRvgXfohBQWQj0TQdRV80oiuMG7id.jpg",source:V("mendirman.mp3")},{id:"2",name:"Vatanim",singer:"Sevara Nazarxon",image:"",source:V("vatanim.mp3")}]}),t}return(0,o.C6)(t,e),t=(0,o.Cg)([s.uA],t),t}(s.lD),R=$,I=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"cards"},e._l(e.items,(function(r){return t("Card",{key:r.id,attrs:{item:r},on:{"pause-other-audios":e.pauseOtherAudios}})})),1)},N=[],W=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"card"},[t("div",{staticClass:"card__left"},[t("div",{staticClass:"card__image"},[e.item.image?t("img",{attrs:{src:e.item.image,alt:""}}):t("img",{attrs:{src:r(94),alt:""}})]),t("div",{staticClass:"card__text"},[t("p",[e._v(" "+e._s(e.item.name)+" ")]),t("span",[e._v(" "+e._s(e.item.singer)+" ")])])]),t("div",{staticClass:"card__player"},[t("audio",{ref:"audio",on:{timeupdate:e.updateCurrentTime,ended:e.onEnd,loadedmetadata:e.updateDuration}},[t("source",{attrs:{src:e.item.source,type:"audio/mpeg"}})]),t("div",{staticClass:"card__actions"},[t("div",{staticClass:"card__play",class:e.isPlaying?"active":"",on:{click:e.togglePlay}},[t("font-awesome-icon",{attrs:{icon:["fas","play"]}}),t("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1)]),t("div",{staticClass:"card__time"},[t("span",[e._v(e._s(e.formattedCurrentTime))]),t("p",{on:{click:e.updateTime}},[t("b",{style:{width:e.progressBarWidth}})]),t("span",[e._v(e._s(e.formattedDuration))])])]),t("div",{staticClass:"card__right"},[t("div",{staticClass:"card__fav",class:{checked:e.isFavouriteInVuex},on:{click:e.toggleFavourite}},[t("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1)])])},z=[];l.Yv.add(f.muz,f.ijD,f.G1Y);var X=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"item",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(t,"isPlaying",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"currentTime",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(t,"duration",{enumerable:!0,configurable:!0,writable:!0,value:0}),t}return(0,o.C6)(t,e),Object.defineProperty(t.prototype,"isFavouriteInVuex",{get:function(){return this.$store.getters.isFavorite(this.item.id)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"toggleFavourite",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.$store.dispatch("toggleFavorite",this.item)}}),Object.defineProperty(t.prototype,"formattedDuration",{get:function(){return this.duration?this.formatTime(this.duration):"0:00"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"formattedCurrentTime",{get:function(){return this.formatTime(this.currentTime)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"progressBarWidth",{get:function(){return this.duration?"".concat(this.currentTime/this.duration*100,"%"):"0%"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"togglePlay",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.$refs.audio;this.isPlaying?e.pause():(e.play(),this.$emit("pause-other-audios",e)),this.isPlaying=!this.isPlaying}}),Object.defineProperty(t.prototype,"updateCurrentTime",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.$refs.audio;this.currentTime=e.currentTime}}),Object.defineProperty(t.prototype,"onEnd",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.isPlaying=!1,this.currentTime=0}}),Object.defineProperty(t.prototype,"updateDuration",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.$refs.audio;this.duration=e.duration}}),Object.defineProperty(t.prototype,"formatTime",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(isNaN(e)||e<0)return"0:00";var t=Math.floor(e/60),r=Math.floor(e%60);return"".concat(t,":").concat(r<10?"0":"").concat(r)}}),Object.defineProperty(t.prototype,"updateTime",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.currentTarget,r=e.offsetX,i=t.clientWidth,n=r/i*this.duration,a=this.$refs.audio;a.currentTime=n,this.currentTime=n}}),(0,o.Cg)([(0,s.kv)()],t.prototype,"item",void 0),t=(0,o.Cg)([s.uA],t),t}(s.lD),B=X,J=B,Q=(0,v.A)(J,W,z,!1,null,"34ff2796",null),Y=Q.exports,G=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"items",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t}return(0,o.C6)(t,e),Object.defineProperty(t.prototype,"pauseOtherAudios",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this.$children;t.forEach((function(t){var r=t.$refs.audio;r&&r!==e&&(r.pause(),r.currentTime=0,t.isPlaying=!1)}))}}),(0,o.Cg)([(0,s.kv)()],t.prototype,"items",void 0),t=(0,o.Cg)([(0,s.uA)({components:{Card:Y}})],t),t}(s.lD),H=G,K=H,U=(0,v.A)(K,I,N,!1,null,"70b1fa52",null),q=U.exports,L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.C6)(t,e),t=(0,o.Cg)([(0,s.uA)({components:{Title:E,Cards:q}})],t),t}((0,s.Xe)(R)),Z=L,ee=Z,te=(0,v.A)(ee,A,j,!1,null,"4da4d9dd",null),re=te.exports,ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.C6)(t,e),t=(0,o.Cg)([(0,s.uA)({components:{Home:re}})],t),t}(s.lD),ne=ie,ae=ne,oe=(0,v.A)(ae,P,T,!1,null,null,null),se=oe.exports,ue=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"favourites"},[t("Title",[e._v("Избранное")]),e.filteredMusics.length?t("Cards",{attrs:{items:e.filteredMusics}}):t("p",[e._v(" Пока нет любимых треков ")])],1)},ce=[],le=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.C6)(t,e),Object.defineProperty(t.prototype,"filteredMusics",{get:function(){var e=this;return this.musics.filter((function(t){return e.$store.getters.isFavorite(t.id)}))},enumerable:!1,configurable:!0}),t=(0,o.Cg)([(0,s.uA)({components:{Title:E,Cards:q}})],t),t}((0,s.Xe)(R)),fe=le,de=fe,pe=(0,v.A)(de,ue,ce,!1,null,"2691a698",null),me=pe.exports;i.Ay.use(w.Ay);var ve=[{path:"/",name:"home",component:se},{path:"/favourites",name:"favourites",component:me}],be=new w.Ay({mode:"history",base:"/SSWMusic/",routes:ve}),he=be,ge=r(353);i.Ay.use(ge.Ay);var ye=new ge.Ay.Store({state:{favorites:JSON.parse(localStorage.getItem("favorites")||"[]")},mutations:{ADD_TO_FAVORITES:function(e,t){e.favorites.push(t),localStorage.setItem("favorites",JSON.stringify(e.favorites))},REMOVE_FROM_FAVORITES:function(e,t){e.favorites=e.favorites.filter((function(e){return e.id!==t})),localStorage.setItem("favorites",JSON.stringify(e.favorites))}},actions:{toggleFavorite:function(e,t){var r=e.state,i=e.commit,n=r.favorites.find((function(e){return e.id===t.id}));n?i("REMOVE_FROM_FAVORITES",t.id):i("ADD_TO_FAVORITES",t)}},getters:{isFavorite:function(e){return function(t){return e.favorites.some((function(e){return e.id===t}))}}}}),_e=r(273);i.Ay.component("font-awesome-icon",_e.gc),i.Ay.config.productionTip=!1,new i.Ay({router:he,store:ye,render:function(e){return e(C)}}).$mount("#app")},161:function(e,t,r){var i={"./mendirman.mp3":397,"./vatanim.mp3":572};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=161},94:function(e,t,r){"use strict";e.exports=r.p+"img/mp3.3b0dcef1.webp"},397:function(e,t,r){"use strict";e.exports=r.p+"media/mendirman.b4fec5ec.mp3"},572:function(e,t,r){"use strict";e.exports=r.p+"media/vatanim.aaf24a5d.mp3"}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,a){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],n=e[l][1],a=e[l][2];for(var s=!0,u=0;u<i.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](i[u])}))?i.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[i,n,a]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/SSWMusic/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,o=i[0],s=i[1],u=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(u)var l=u(r)}for(t&&t(i);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},i=self["webpackChunksswmusic"]=self["webpackChunksswmusic"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[504],(function(){return r(269)}));i=r.O(i)})();
//# sourceMappingURL=app.c0f99604.js.map