webpackJsonp([1],{"+eNS":function(t,e){},"/68d":function(t,e){},"5gD2":function(t,e){},L7L5:function(t,e){},LDPh:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("/5sW"),n=s("woOf"),i=s.n(n),r=s("RyI1"),a=s.n(r),c=s("q+Dy"),d=s.n(c),l=s("mvHQ"),u=s.n(l),h=s("bOdI"),f=s.n(h),v=s("Q7hp"),m=s.n(v),g=s("HN2V"),p=s.n(g),w="THE_TAB_OF_WORDS",_=["version","level","hides","settings"],C={loaded:!1,showBook:!1,words:[],card:{},version:"1.3.0",level:0,hides:[],settings:{showRomaji:!1,fontSize:"m",theme:"sunrise"}},k=m()(window,["chrome","storage","sync"],null),R={init:function(t){var e=this;if(k)k.get(w,function(s){s=s?s[w]:{},t(e.getInitStore(s))});else{var s=JSON.parse(window.localStorage.getItem(w));t(this.getInitStore(s))}},getInitStore:function(t){var e=C;return t?(p()(e,t),"1.3.0"!==e.version&&(e.version<"1.1.0"&&(e.settings.showRomaji=e.showRomaji,delete e.showRomaji),e.version<"1.3.0"&&(e.hides=e.likes,delete e.likes),e.version="1.3.0",this.update(e))):this.update(e),e},update:function(t){var e={};_.forEach(function(s){e[s]=t[s]}),k?k.set(f()({},w,e)):window.localStorage.setItem(w,u()(e))}},b=function(t,e){var s=e.indexOf(t);return e[s+1>=e.length?0:s+1]},y=["s","m","l"],j=["sunrise","sunset","moon"],S=new o.a({data:{store:C},computed:{filteredWords:function(){var t=this.store,e=t.level,s=t.words,o=t.hides,n=0===e?s:s.filter(function(t){return t.level===e});return a()(n,function(t){return!d()(o,t.uuid)})}},methods:{init:function(){var t=this;R.init(function(e){fetch("./static/data/words.json").then(function(t){return t.json()}).then(function(s){e.words=s,e.loaded=!0,t.store=i()(t.store,e),t.generateCard()})})},generateCard:function(){var t;this.store.card=(t=this.filteredWords,this.store.hides,t[Math.floor(Math.random()*t.length)])},changeLevel:function(){var t=this.store.level;this.store.level=t+1>5?0:t+1,this.generateCard(),R.update(this.store)},hide:function(t){this.store.hides.push(t.uuid),R.update(this.store),this.generateCard()},unhide:function(t){var e=this.store.hides.indexOf(t.uuid);e>=0&&(this.store.hides.splice(e,1),R.update(this.store))},toggleBook:function(){this.store.showBook=!this.store.showBook,R.update(this.store)},hideBook:function(){this.store.showBook&&(this.store.showBook=!1,R.update(this.store))},toggleRomaji:function(){this.store.settings.showRomaji=!this.store.settings.showRomaji,R.update(this.store)},toggleFontSize:function(){this.store.settings.fontSize=b(this.store.settings.fontSize,y),R.update(this.store)},changeTheme:function(){this.store.settings.theme=b(this.store.settings.theme,j),R.update(this.store)}}}),L={props:["word"],computed:{voiceSource:function(){return this.word?"https://fanyi.baidu.com/gettts?lan=jp&spd=3&source=web&text="+this.word:null}},methods:{play:function(){this.$refs.videoRef.pause(),this.$refs.videoRef.load(),this.$refs.videoRef.play()}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"voice"},[e("video",{ref:"videoRef"},[e("source",{attrs:{src:this.voiceSource,type:"audio/mp3"}})])])},staticRenderFns:[]};var E=s("VU/8")(L,B,!1,function(t){s("L7L5")},null,null).exports,z={data:function(){return{store:S.store,voice:""}},components:{Voice:E},computed:{showRomaji:function(){return S.store.settings.showRomaji},card:function(){return this.store.card},searchUrl:function(){return"http://jisho.org/search/"+this.store.card.word}},methods:{playVoice:function(){this.$refs.voiceRef.play()}}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"meta"},[s("span",{staticClass:"romaji",class:{show:t.showRomaji}},[t._v(t._s(t.card.romaji||" "))]),t._v(" "),s("a",{staticClass:"hiragana",on:{click:t.playVoice}},[t._v(t._s(t.card.hiragana||t.card.word))])]),t._v(" "),s("h1",{staticClass:"word"},[s("a",{attrs:{href:t.searchUrl,target:"_blank"}},[t._v(t._s(t.card.word))])]),t._v(" "),s("p",{staticClass:"meaning"},[t._v(t._s(t.card.meaning))]),t._v(" "),s("span",{staticClass:"level"},[t._v("N"+t._s(t.card.level))]),t._v(" "),s("Voice",{ref:"voiceRef",attrs:{word:t.card.word}})],1)},staticRenderFns:[]};var T=s("VU/8")(z,V,!1,function(t){s("l3QA")},null,null).exports,F={data:function(){return{store:S.store}},computed:{showRomaji:function(){return this.store.settings.showRomaji},fontSize:function(){return this.store.settings.fontSize.toUpperCase()}},methods:{toggleRomaji:S.toggleRomaji,toggleFontSize:S.toggleFontSize}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings"},[s("a",{staticClass:"btn",attrs:{href:"javascript:void(0);"},on:{click:t.toggleFontSize}},[t._v("\n    "+t._s(t.fontSize)+"\n  ")]),t._v(" "),s("a",{staticClass:"btn",class:{active:t.showRomaji},attrs:{href:"javascript:void(0);"},on:{click:t.toggleRomaji}},[t._v("\n    romaji\n  ")]),t._v(" "),s("a",{staticClass:"source",attrs:{target:"_blank",href:"https://www.tanos.co.uk/jlpt/"}},[t._v("@datasource")]),t._v(" "),s("a",{staticClass:"source",attrs:{target:"_blank",href:"https://wkei.github.io/the-tab-of-words/"}},[t._v("@homepage")])])},staticRenderFns:[]};var $={data:function(){return{store:S.store,wordToPlay:""}},components:{Settings:s("VU/8")(F,U,!1,function(t){s("/68d")},null,null).exports,Voice:E},computed:{showRomaji:function(){return this.store.settings.showRomaji},hiddenCards:function(){var t=this.store,e=t.hides,s=t.words.filter(function(t){return e.includes(t.uuid)});return s=e.map(function(t){return s.filter(function(e){return t===e.uuid})[0]}),s.reverse()}},methods:{searchUrl:function(t){return"http://jisho.org/search/"+t},unhide:function(t){S.unhide(t)},playVoice:function(t){this.wordToPlay=t,this.$refs.voiceRef.play()}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookWrapper"},[s("main",{staticClass:"book"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.hiddenCards.length?s("transition-group",{staticClass:"list",attrs:{name:"list",tag:"ul"}},t._l(t.hiddenCards,function(e,o){return s("li",{key:o,staticClass:"item"},[s("div",{staticClass:"inner"},[s("h3",{staticClass:"word"},[s("a",{attrs:{href:t.searchUrl(e.word),target:"_blank"}},[t._v(t._s(e.word))])]),t._v(" "),s("span",{staticClass:"level"},[t._v("N"+t._s(e.level))]),t._v(" "),s("p",{staticClass:"spelling"},[s("a",{staticClass:"hiragana",on:{click:function(s){return t.playVoice(e.word)}}},[t._v(t._s(e.hiragana||e.word))]),t._v(" "),s("span",{staticClass:"romaji",class:{show:t.showRomaji}},[t._v(t._s(e.romaji))])]),t._v(" "),s("p",{staticClass:"meaning"},[t._v(t._s(e.meaning))]),t._v(" "),s("button",{staticClass:"btn-del",on:{click:function(s){return t.unhide(e)}}},[t._v("×")])])])}),0):s("div",{staticClass:"empty"},[t._v("空")])],1)],1),t._v(" "),s("Settings"),t._v(" "),s("Voice",{ref:"voiceRef",attrs:{word:t.wordToPlay}})],1)},staticRenderFns:[]};var N=s("VU/8")($,x,!1,function(t){s("+eNS")},null,null).exports,O={data:function(){return{themes:{sunrise:"日",sunset:"夕",moon:"月"},levels:["全","一","二","三","四","五"],store:S.store}},computed:{theme:function(){return this.store.settings.theme}},methods:{hide:function(){S.hide(this.store.card)},changeLevel:S.changeLevel,toggleBook:S.toggleBook,changeTheme:S.changeTheme}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"toolbar"},[s("button",{class:{btn:!0,hide:t.store.showBook},on:{click:t.changeLevel}},[t._v("\n    "+t._s(t.levels[t.store.level])+"\n  ")]),t._v(" "),s("button",{class:{btn:!0,hide:t.store.showBook},on:{click:t.hide}},[t._v("\n    隠\n  ")]),t._v(" "),s("button",{class:{btn:!0,show:t.store.showBook},on:{click:t.toggleBook}},[t._v("\n    帳\n  ")]),t._v(" "),s("button",{staticClass:"btn",on:{click:t.changeTheme}},[t._v("\n    "+t._s(t.themes[t.theme])+"\n  ")])])},staticRenderFns:[]};var I={data:function(){return{store:S.store}},components:{Card:T,Book:N,Toolbar:s("VU/8")(O,D,!1,function(t){s("5gD2")},null,null).exports},computed:{theme:function(){return this.store.settings.theme},fontSize:function(){return this.store.settings.fontSize}},watch:{fontSize:function(t,e){document.documentElement.classList.remove(e),document.documentElement.classList.add(t),document.body.classList.remove(e),document.body.classList.add(t)},theme:function(t,e){document.documentElement.classList.remove(e),document.documentElement.classList.add(t),document.body.classList.remove(e),document.body.classList.add(t)}},created:function(){S.init(),this.onKeydown()},methods:{onKeydown:function(){var t=this;window.addEventListener("keydown",function(e){[32,13].includes(e.keyCode)&&e.preventDefault(),32!==e.keyCode&&13!==e.keyCode||!t.store.loaded||S.generateCard(),27===e.keyCode&&t.store.showBook&&S.hideBook()})}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{loaded:this.store.loaded},attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[this.store.showBook?e("Book"):e("Card")],1)],1),this._v(" "),e("Toolbar")],1)},staticRenderFns:[]};var A=s("VU/8")(I,P,!1,function(t){s("LDPh")},null,null).exports;o.a.config.productionTip=!1,document.documentElement.classList.add(S.store.settings.fontSize),document.documentElement.classList.add(S.store.settings.theme),document.body.classList.add(S.store.settings.fontSize),document.body.classList.add(S.store.settings.theme),new o.a({el:"#app",render:function(t){return t(A)}}),console.log("// Signed in Chrome / Firefox Account to sync your settings."),console.log("// You can press SPACEBAR / ENTER to get another random word."),console.log("// Source code is on https://github.com/wkei/the-tab-of-words")},l3QA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d23ae3150f76b2f26522.js.map