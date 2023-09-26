(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["assets"],{2297:function(t,e,a){},"2ad6":function(t,e,a){},3047:function(t,e,a){"use strict";var s=a("ab76"),n=a.n(s);n.a},"3de2":function(t,e,a){"use strict";var s=a("c659"),n=a.n(s);n.a},"4d60":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"assets"},[a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h2",[t._v("Assets")]),t.assetsLoaded?[a("div",{staticClass:"bar"},[a("p",{staticClass:"count"},[t._v(" "+t._s(t._f("pluralize")(Object.keys(t.assets).length,"asset"))+" found ")])]),t._m(0)]:t._e()],2),t.assetsLoaded?t._e():a("div",[a("v-progress-circular",{key:"1",attrs:{size:16,width:2,color:"#E84970",indeterminate:""}})],1),t.assetsLoaded&&t.$vuetify.breakpoint.xsOnly?a("div",{staticClass:"asset_list"},[a("div",{staticClass:"grid_headers asset_row"},[a("p",[t._v(" Symbol "),a("Tooltip",{attrs:{content:"An arrangement of letters representing an asset"}})],1),a("p",[t._v(" Name "),a("Tooltip",{attrs:{content:"Name for the asset"}})],1),a("p",{staticClass:"volume_day"},[a("Tooltip",{attrs:{content:"Volume for the past 24h"}}),t._v("24h Volume ")],1),a("p",{staticClass:"txCount_day"},[a("Tooltip",{attrs:{content:"Number of transactions for the past 24h"}}),t._v(" 24h Tx ")],1)]),t._l(t.assets,(function(t){return a("AssetRow",{key:t.id,staticClass:"asset_row",attrs:{asset:t}})}))],2):t._e(),t.$vuetify.breakpoint.smAndUp?a("div",[a("AssetsDataTable",{attrs:{assets:t.assets}})],1):t._e()])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar"},[a("p",{staticClass:"count"},[t._v(" Assets are updated on 5-min intervals. Please refresh to view new listings. ")])])}],o=(a("4de4"),a("7db0"),a("d81d"),a("b0c0"),a("d4ec")),i=a("bee2"),r=a("2caf"),c=a("262e"),l=a("9ab4"),u=(a("98db"),a("60a3")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t.asset.symbol?a("span",{staticClass:"symbol"},[t._v(t._s(t.asset.symbol))]):a("span",{staticClass:"no_symbol"})]),a("p",[a("router-link",{staticClass:"name_id",attrs:{to:"/asset/"+t.asset.id}},[t._v(t._s(t._f("nameOrID")(t.asset)))])],1),a("p",{staticClass:"volume_day"},[t._v(" "+t._s(t.asset.volume_day.toLocaleString())+" "),t.$vuetify.breakpoint.xs?a("span",{staticClass:"unit"},[t._v(t._s(t.asset.symbol))]):t._e()]),a("p",{staticClass:"txCount_day"},[t._v(" "+t._s(t.asset.txCount_day.toLocaleString())+" ")])])},d=[],f=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"avgTxValue",get:function(){return this.asset.txCount_day>0?this.asset.volume_day.div(this.asset.txCount_day).toLocaleString(0):""}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],f.prototype,"asset",void 0),f=Object(l["a"])([Object(u["a"])({})],f);var v=f,b=v,y=(a("fc0d"),a("2877")),h=Object(y["a"])(b,p,d,!1,null,"9b81fd92",null),_=h.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"assets_data_table"}},[a("div",{staticClass:"controls"},[a("div",{staticClass:"filter_container"},[a("div",{staticClass:"filter_input_container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"filter",attrs:{type:"text",placeholder:"Filter by Asset Name"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),a("v-data-table",{attrs:{items:t.assets,headers:t.headers,"items-per-page":15,search:t.search,"multi-sort":"","mobile-breakpoint":0},scopedSlots:t._u([{key:"item.symbol",fn:function(e){var s=e.item;return[s.symbol&&t.$vuetify.breakpoint.smAndUp?a("p",{staticClass:"symbol"},[t._v(" "+t._s(s.symbol)+" ")]):t._e(),!s.symbol&&t.$vuetify.breakpoint.smAndUp?a("p",{staticClass:"no_symbol"}):t._e()]}},{key:"item.name",fn:function(e){var s=e.item;return[a("router-link",{attrs:{to:"/asset/"+s.id}},[a("div",{staticClass:"logo_name_id"},[a("div",{staticClass:"logo_container"},["Fixed Cap"===t.type(s)||"Variable Cap"===t.type(s)?a("AssetLogoRenderer",{attrs:{asset:s}}):a("NFTLogoRenderer",{attrs:{asset:s}})],1),a("div",{staticClass:"name_id"},[a("span",{staticClass:"name"},[t._v(t._s(t._f("nameOrID")(s))+" ")]),a("span",{staticClass:"collision"},[t._v(t._s(t.collisionHash(s)))])])])])]}},{key:"item.txCount_day",fn:function(e){var s=e.item;return[t.$vuetify.breakpoint.smAndUp?a("p",{staticClass:"supply"},[t._v(" "+t._s(s.txCount_day.toLocaleString())+" ")]):t._e()]}},{key:"item.volume_day",fn:function(e){var s=e.item;return[a("p",{staticClass:"volume_day"},[t._v(" "+t._s(s.volume_day.toLocaleString())+" "),t.$vuetify.breakpoint.xs?a("span",{staticClass:"unit"},[t._v(t._s(s.symbol))]):t._e()])]}},{key:"item.nft",fn:function(e){var s=e.item;return[t.$vuetify.breakpoint.smAndUp?a("p",{staticClass:"nft"},[t._v(" "+t._s(t.type(s))+" ")]):t._e()]}},{key:"item.currentSupply",fn:function(e){var s=e.item;return[t.$vuetify.breakpoint.smAndUp?a("p",{staticClass:"supply"},[t._v(" "+t._s(s.currentSupply.toLocaleString(s.denomination))+" "),a("span",[t._v(t._s(s.symbol))])]):t._e()]}},{key:"item.chainID",fn:function(e){var s=e.item;return[t.$vuetify.breakpoint.smAndUp?a("p",{staticClass:"chain"},[t._v(" "+t._s(t._f("blockchain")(s.chainID))+" ")]):t._e()]}}])})],1)},O=[],j=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{staticClass:"logo_image",attrs:{src:t.logo,alt:""}})}),g=[],C=a("594b"),x=a("cd48"),k=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"logo",get:function(){return x["b"][this.asset.id]?x["b"][this.asset.id].logo:"/hex_ava_".concat(this.hexColor,".svg")}},{key:"hexColor",get:function(){return 1===C["a"]?"mainnet":"testnet"}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],k.prototype,"asset",void 0),k=Object(l["a"])([Object(u["a"])({components:{}})],k);var w=k,T=w,$=Object(y["a"])(T,j,g,!1,null,"444f7cf8",null),L=$.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nft_container"},[t.payloads?[t.payloads.length>0?a("NFTLogoPayload",{attrs:{payload:t.payloads[0][0],"asset-i-d":t.asset.id,"group-i-d":t.payloads[0][1]}}):a("LogoFallback")]:a("LogoFallback")],2)},N=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.payload?a("div",[a("NFTLogoPayloadView",{attrs:{payload:t.payloadBase}})],1):t._e()},F=[],A=a("13ec"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.viewer,{tag:"Component",staticClass:"nft_payload_view",attrs:{payload:t.payload}})},P=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.img_types.includes(t.fileType)?a("img",{attrs:{src:t.url}}):a("LogoFallback")},V=[],U=(a("99af"),a("caad"),a("d3b7"),a("25f0"),a("2532"),a("1276"),function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.img_types=["jpeg","jpg","gif","png","apng","svg","bmp","ico","webp"],t.valid_types=t.img_types.concat(["pdf"]),t}return Object(i["a"])(a,[{key:"url",get:function(){return this.payload.getContent().toString()}},{key:"fileType",get:function(){var t=this.url.split(".");if(1===t.length)return null;var e=t[t.length-1];return this.valid_types.includes(e)?e:null}}]),a}(u["d"]));Object(l["a"])([Object(u["c"])()],U.prototype,"payload",void 0),U=Object(l["a"])([u["a"]],U);var J=U,R=J,G=(a("3de2"),Object(y["a"])(R,I,V,!1,null,"4e7dbd89",null)),B=G.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"view",staticClass:"utf_payload_view",on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}},[a("p",{staticClass:"icon"},[a("fa",{attrs:{icon:"font"}})],1),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isText,expression:"isText"}],ref:"text",staticClass:"hover_text"},[t._v(t._s(t.text))])])},M=[],z=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.isText=!1,t}return Object(i["a"])(a,[{key:"mouseEnter",value:function(){this.showText()}},{key:"mouseLeave",value:function(){this.isText=!1}},{key:"showText",value:function(){var t=this.$refs.view,e=t.getBoundingClientRect();this.$refs.text.style.top=e.y+e.height+"px",this.$refs.text.style.left=e.x+"px",this.isText=!0}},{key:"text",get:function(){return this.payload.getContent()}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],z.prototype,"payload",void 0),z=Object(l["a"])([u["a"]],z);var q=z,K=q,Q=(a("3047"),Object(y["a"])(K,H,M,!1,null,"4379c612",null)),W=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isGeneric?a("GenericPayloadViewSmall",{attrs:{payload:t.payload}}):a("LogoFallback")},Y=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("img",{staticClass:"logo_image",attrs:{src:t.logo,alt:""}})},tt=[],et=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"logo",get:function(){return"/hex_ava_".concat(this.hexColor,".svg")}},{key:"hexColor",get:function(){return 1===C["a"]?"mainnet":"testnet"}}]),a}(u["d"]);et=Object(l["a"])([Object(u["a"])({})],et);var at=et,st=at,nt=Object(y["a"])(st,Z,tt,!1,null,"3ce19af9",null),ot=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isError?a("LogoFallback"):a("img",{attrs:{src:t.img}})},rt=[],ct=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.isError=!1,t.jsonData=null,t}return Object(i["a"])(a,[{key:"mounted",value:function(){try{this.jsonData=JSON.parse(this.content).avalanche}catch(t){this.isError=!0}}},{key:"onPayloadChange",value:function(){try{this.jsonData=JSON.parse(this.content).avalanche}catch(t){this.isError=!0}}},{key:"content",get:function(){return this.payload.getContent().toString()}},{key:"img",get:function(){var t;return null===(t=this.jsonData)||void 0===t?void 0:t.img}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],ct.prototype,"payload",void 0),Object(l["a"])([Object(u["e"])("payload")],ct.prototype,"onPayloadChange",null),ct=Object(l["a"])([Object(u["a"])({components:{LogoFallback:ot}})],ct);var lt=ct,ut=lt,pt=(a("d782"),Object(y["a"])(ut,it,rt,!1,null,"0e17934f",null)),dt=pt.exports,ft=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.val="",t}return Object(i["a"])(a,[{key:"updateText",value:function(){this.val=this.jsonText}},{key:"onPayloadChange",value:function(){this.updateText()}},{key:"mounted",value:function(){this.updateText()}},{key:"jsonText",get:function(){var t=this.text;try{var e=JSON.parse(t);return JSON.stringify(e,void 0,4)}catch(a){return t}}},{key:"text",get:function(){return this.payload.getContent().toString()}},{key:"isGeneric",get:function(){var t=this.text;try{return!!Object.prototype.hasOwnProperty.call(JSON.parse(t),"avalanche")}catch(e){return!1}}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],ft.prototype,"payload",void 0),Object(l["a"])([Object(u["e"])("payload")],ft.prototype,"onPayloadChange",null),ft=Object(l["a"])([Object(u["a"])({components:{GenericPayloadViewSmall:dt,LogoFallback:ot}})],ft);var vt=ft,bt=vt,yt=Object(y["a"])(bt,X,Y,!1,null,"e56f36ea",null),ht=yt.exports,_t=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"viewer",get:function(){switch(this.payload.typeID()){case 1:return W;case 24:return ht;case 27:return B;default:return W}}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],_t.prototype,"payload",void 0),_t=Object(l["a"])([Object(u["a"])({components:{Url:B,Utf:W,Json:ht}})],_t);var mt=_t,Ot=mt,jt=(a("bb5e"),Object(y["a"])(Ot,D,P,!1,null,"28493026",null)),gt=jt.exports,Ct=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"payloadBase",get:function(){if(this.payload){var t=Object(A["l"])(this.payload,this.assetID,this.groupID);return t[this.groupID][0]}}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],Ct.prototype,"payload",void 0),Object(l["a"])([Object(u["c"])()],Ct.prototype,"assetID",void 0),Object(l["a"])([Object(u["c"])()],Ct.prototype,"groupID",void 0),Ct=Object(l["a"])([Object(u["a"])({components:{NFTLogoPayloadView:gt}})],Ct);var xt=Ct,kt=xt,wt=(a("e2f1"),Object(y["a"])(kt,E,F,!1,null,"580f23b6",null)),Tt=wt.exports,$t=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.loading=!0,t.payloads=null,t.payload=null,t}return Object(i["a"])(a,[{key:"created",value:function(){this.getPayloads()}},{key:"getPayloads",value:function(){var t=this;this.loading=!0,this.$store.dispatch("Transactions/getNFTPayloads",{id:this.asset.id}).then((function(e){t.payloads=e,t.loading=!1})).catch((function(t){console.log(t)}))}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],$t.prototype,"asset",void 0),$t=Object(l["a"])([Object(u["a"])({components:{NFTLogoPayload:Tt,LogoFallback:ot}})],$t);var Lt=$t,St=Lt,Nt=(a("b692e"),Object(y["a"])(St,S,N,!1,null,"7130f22e",null)),Et=Nt.exports,Ft=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.search="",t}return Object(i["a"])(a,[{key:"collisionHash",value:function(t){return this.collisionMap[t.symbol]?"".concat(t.id.substring(0,8)):null}},{key:"type",value:function(t){return 1===t.nft?"NFT":1===t.variableCap?"Variable Cap":"Fixed Cap"}},{key:"headers",get:function(){return[{text:"Symbol",value:"symbol",width:100},{text:"Name",value:"name"},{text:"24h Tx",value:"txCount_day",width:100},{text:"24h Volume",value:"volume_day",width:200},{text:"Type",value:"nft",width:120,sortable:!1},{text:"Supply",value:"currentSupply",width:250},{text:"Issuance",value:"chainID",width:80,sortable:!1}]}},{key:"collisionMap",get:function(){return this.$store.state.collisionMap}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],Ft.prototype,"assets",void 0),Ft=Object(l["a"])([Object(u["a"])({components:{AssetLogoRenderer:L,NFTLogoRenderer:Et}})],Ft);var At=Ft,Dt=At,Pt=(a("c41b"),a("5eeb"),a("70c8"),a("6544")),It=a.n(Pt),Vt=a("8fea"),Ut=Object(y["a"])(Dt,m,O,!1,null,"6230cc88",null),Jt=Ut.exports;It()(Ut,{VDataTable:Vt["a"]});var Rt=a("b170"),Gt=a("1866"),Bt=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"assetsLoaded",get:function(){return this.$store.state.assetsLoaded}},{key:"assets",get:function(){var t=this.$store.getters.assetsArrayNonProfane,e=t.find((function(t){return t.id===x["a"]}));return t=t.filter((function(t){return t.id!==x["a"]})),t.sort((function(t,e){return e.txCount_day-t.txCount_day})),t.unshift(e),t}},{key:"assetNames",get:function(){return this.assets.map((function(t){return{name:t.name,value:1}}))}}]),a}(u["d"]);Bt=Object(l["a"])([Object(u["a"])({components:{Tooltip:Rt["a"],TooltipHeading:Gt["a"],AssetRow:_,AssetsDataTable:Jt}})],Bt);var Ht=Bt,Mt=Ht,zt=(a("c73d"),a("490a")),qt=Object(y["a"])(Mt,s,n,!1,null,"58b74ab1",null);e["default"]=qt.exports;It()(qt,{VProgressCircular:zt["a"]})},"4f2f":function(t,e,a){},"5eeb":function(t,e,a){"use strict";var s=a("6af7"),n=a.n(s);n.a},6633:function(t,e,a){},"6af7":function(t,e,a){},"70c8":function(t,e,a){"use strict";var s=a("2297"),n=a.n(s);n.a},9155:function(t,e,a){},"978c":function(t,e,a){},"99b2":function(t,e,a){},ab76:function(t,e,a){},b692e:function(t,e,a){"use strict";var s=a("f26f"),n=a.n(s);n.a},bb5e:function(t,e,a){"use strict";var s=a("4f2f"),n=a.n(s);n.a},c41b:function(t,e,a){"use strict";var s=a("9155"),n=a.n(s);n.a},c659:function(t,e,a){},c73d:function(t,e,a){"use strict";var s=a("978c"),n=a.n(s);n.a},d782:function(t,e,a){"use strict";var s=a("99b2"),n=a.n(s);n.a},e2f1:function(t,e,a){"use strict";var s=a("2ad6"),n=a.n(s);n.a},f26f:function(t,e,a){},fc0d:function(t,e,a){"use strict";var s=a("6633"),n=a.n(s);n.a}}]);
//# sourceMappingURL=assets.e6d3eb71.js.map