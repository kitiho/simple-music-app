(function(t){function n(n){for(var i,c,a=n[0],o=n[1],u=n[2],p=0,h=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(n);while(h.length)h.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,a=1;a<e.length;a++){var o=e[a];0!==s[o]&&(i=!1)}i&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var i={},s={app:0},r=[];function c(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=i,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)c.d(e,i,function(n){return t[n]}.bind(null,i));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/simple-music-app/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var l=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),s=e.n(i);s.a},"2ac8":function(t,n,e){t.exports=e.p+"media/尤长靖 - 昨日青空.baf25100.mp3"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t._m(0),e("main",[e("section",{staticClass:"player"},[e("h2",{staticClass:"song-title"},[t._v(" "+t._s(t.current.title)+" - "),e("span",[t._v(t._s(t.current.artist))])]),e("div",{staticClass:"control"},[e("button",{staticClass:"prev",on:{click:t.prev}},[t._v("Prev")]),t.isPlaying?e("button",{staticClass:"pause",on:{click:t.pause}},[t._v("Pause")]):e("button",{staticClass:"play",on:{click:t.play}},[t._v("Play")]),e("button",{staticClass:"next",on:{click:t.next}},[t._v("Next")])])]),e("section",{staticClass:"playlist"},[e("h3",[t._v("The Playlist")]),t._l(t.songs,(function(n){return e("button",{key:n.src,class:n.src==t.current.src?"song playing":"song",on:{click:function(e){return t.play(n)}}},[t._v(t._s(n.title)+" - "+t._s(n.artist))])}))],2)])])},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("h1",[t._v("My Music")])])}],c={name:"app",components:{},data:function(){return{current:{title:"SONG TITLE"},index:0,isPlaying:!1,songs:[{title:"LOSER",artist:"电鸟个灯泡",src:e("e2b7")},{title:"昨日青空",artist:"尤长靖",src:e("2ac8")}],player:new Audio}},methods:{play:function(t){"undefined"!==typeof t.src&&(this.current=t,this.player.src=this.current.src),this.player.play(),this.player.addEventListener("ended",function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)}.bind(this)),this.isPlaying=!0},pause:function(){this.player.pause(),this.isPlaying=!1},prev:function(){this.index--,this.index<0&&(this.index=this.songs.length-1),this.current=this.songs[this.index],this.play(this.current)},next:function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)}},created:function(){this.current=this.songs[this.index],this.player.src=this.current.src}},a=c,o=(e("034f"),e("2877")),u=Object(o["a"])(a,s,r,!1,null,null,null),l=u.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,n,e){},e2b7:function(t,n,e){t.exports=e.p+"media/LOSER.a6200d96.mp3"}});
//# sourceMappingURL=app.7b74c6df.js.map