(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(87)},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),l=a(9),s=a(7),o=a(40),m=a(31),u=a(30),p=a(4),d=Object(n.createContext)({hidden:!0,toggleHidden:function(){},addItem:function(){},removeItem:function(){},clearItemFromCart:function(){},cartItemsCount:0}),b=function(e){var t=e.children,a=Object(n.useState)(!0),i=Object(m.a)(a,2),c=i[0],l=i[1],s=Object(n.useState)([]),o=Object(m.a)(s,2),b=o[0],g=o[1],h=Object(n.useState)(0),f=Object(m.a)(h,2),v=f[0],E=f[1];return Object(n.useEffect)(function(){E(function(e){return e.reduce(function(e,t){return e+t.quantity},0)}(b))},[b]),r.a.createElement(d.Provider,{value:{hidden:c,toggleHidden:function(){return l(!c)},cartItems:b,addItem:function(e){return g(function(e,t){return e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(u.a)(e),[Object(p.a)({},t,{quantity:1})])}(b,e))},removeItem:function(e){return g(function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity-1}):e})}(b,e))},cartItemsCount:v,clearItemFromCart:function(e){return g(function(e,t){return e.filter(function(e){return e.id!==t.id})}(b,e))}}},t)},g=a(11),h=a(26),f=(a(53),a(41)),v="SET_CURRENT_USER",E={currentUser:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)({},e,{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},w=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity-1}):e})},O={hidden:!0,cartItems:[]},j=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y.TOGGLE_CART_HIDDEN:return Object(p.a)({},a,{hidden:!a.hidden});case y.ADD_ITEM:return Object(p.a)({},a,{cartItems:(e=a.cartItems,t=n.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(p.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(u.a)(e),[Object(p.a)({},t,{quantity:1})]))});case y.REMOVE_ITEM:return Object(p.a)({},a,{cartItems:w(a.cartItems,n.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(p.a)({},a,{cartItems:a.cartItems.filter(function(e){return e.id!==n.payload.id})});default:return a}},N={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return(arguments.length>1?arguments[1]:void 0).type,e},C={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return(arguments.length>1?arguments[1]:void 0).type,e},I={key:"root",storage:a.n(f).a,whitelist:["cart"]},B=Object(g.c)({user:k,cart:j,directory:U,shop:S}),T=Object(h.a)(I,B);var x=Object(g.d)(T,g.a.apply(void 0,[])),R=Object(h.b)(x),M=(h.b,a(56),a(8)),P=a.n(M),A=a(14),W=a(19),J=a(20),D=a(22),G=a(21),q=a(23),V=a(16),_=Object(n.createContext)(void 0),F=(a(58),a(15)),L=a(3),H=Object(L.a)([function(e){return e.directory}],function(e){return e.sections}),z=(a(59),Object(V.f)(function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),Y=(a(65),Object(L.b)({sections:H})),K=Object(s.b)(Y)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,a=Object(F.a)(e,["id"]);return r.a.createElement(z,Object.assign({key:t},a))}))}),Q=(a(66),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(K,null))}),X=(a(67),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,i=Object(F.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},i),t)}),Z=(a(68),function(e){var t=e.item,a=t.name,i=t.price,c=t.imageUrl,l=Object(n.useContext)(d).addItem;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},i)),r.a.createElement(X,{onClick:function(){return l(t)},inverted:!0},"Add to cart"))}),$=(a(69),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(Z,{key:e.id,item:e})})))}),ee=Object(L.a)([function(e){return e.shop}],function(e){return e.collections}),te=Object(L.a)([ee],function(e){return Object.keys(e).map(function(t){return e[t]})}),ae=(a(70),Object(L.b)({collections:te})),ne=Object(s.b)(ae)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,a=Object(F.a)(e,["id"]);return r.a.createElement($,Object.assign({key:t},a))}))}),re={hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}},ie=Object(n.createContext)(re),ce=(a(71),function(e){var t=e.match,a=Object(n.useContext)(ie)[t.params.collectionId],i=a.title,c=a.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},i),r.a.createElement("div",{className:"items"},c.map(function(e){return r.a.createElement(Z,{key:e.id,item:e})})))}),le=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(V.b,{exact:!0,path:"".concat(t.path),component:ne}),r.a.createElement(V.b,{path:"".concat(t.path,"/:collectionId"),component:ce}))},se=a(18),oe=(a(72),function(e){var t=e.handleChange,a=e.label,n=Object(F.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),me=a(24),ue=a.n(me);a(73),a(76);ue.a.initializeApp({apiKey:"AIzaSyAImcK8GbaanJc7YVFUEaeRDlnogcVEF3c",authDomain:"crwn-db-e00b1.firebaseapp.com",databaseURL:"https://crwn-db-e00b1.firebaseio.com",projectId:"crwn-db-e00b1",storageBucket:"crwn-db-e00b1.appspot.com",messagingSenderId:"1057338552185",appId:"1:1057338552185:web:aee36a760e7f34f12389a8",measurementId:"G-EZ4R7WGE8Z"});var pe=function(){var e=Object(A.a)(P.a.mark(function e(t,a){var n,r,i,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=be.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(p.a)({displayName:r,email:i,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,a){return e.apply(this,arguments)}}(),de=ue.a.auth(),be=ue.a.firestore(),ge=new ue.a.auth.GoogleAuthProvider;ge.setCustomParameters({prompt:"select_account"});var he=function(){return de.signInWithPopup(ge)},fe=(ue.a,a(78),function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(D.a)(this,Object(G.a)(t).call(this,e))).handleSubmit=function(){var e=Object(A.a)(P.a.mark(function e(t){var n,r,i;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,i=n.password,e.prev=2,e.next=5,de.signInWithEmailAndPassword(r,i);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(se.a)({},r,n))},a.state={email:"",password:""},a}return Object(q.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(oe,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(oe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(X,{type:"submit"}," Sign in "),r.a.createElement(X,{onClick:he,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(r.a.Component)),ve=(a(79),function(e){function t(){var e;return Object(W.a)(this,t),(e=Object(D.a)(this,Object(G.a)(t).call(this))).handleSubmit=function(){var t=Object(A.a)(P.a.mark(function t(a){var n,r,i,c,l,s,o;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,i=n.email,c=n.password,l=n.confirmPassword,c===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,de.createUserWithEmailAndPassword(i,c);case 8:return s=t.sent,o=s.user,t.next=12,pe(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}},t,null,[[5,15]])}));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(se.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(q.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(oe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(oe,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(oe,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(oe,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(X,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),Ee=(a(80),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(fe,null),r.a.createElement(ve,null))}),ke=(a(81),Object(s.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))}}})(function(e){var t=e.cartItem,a=t.name,i=t.imageUrl,c=t.price,l=t.quantity,s=Object(n.useContext)(d),o=s.addItem,m=s.removeItem,u=s.clearItemFromCart;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:"item"})),r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return m(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return o(t)}},"\u276f")),r.a.createElement("span",{className:"price"},c),r.a.createElement("div",{className:"remove-button",onClick:function(){return u(t)}},"\u2715"))})),ye=a(43),we=a.n(ye),Oe=function(e){var t=e.price,a=100*t;return r.a.createElement(we.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_WBqax2FWVzS9QlpJScO07iuL"})},je=function(e){return e.cart},Ne=Object(L.a)([je],function(e){return e.cartItems}),Ue=Object(L.a)([je],function(e){return e.hidden}),Ce=(Object(L.a)([Ne],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),Object(L.a)([Ne],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)})),Se=(a(82),Object(L.b)({total:Ce})),Ie=Object(s.b)(Se)(function(e){var t=e.total,a=Object(n.useContext)(d).cartItems;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),a.map(function(e){return r.a.createElement(ke,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: $",t),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(Oe,{price:t}))});function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Te(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var xe=r.a.createElement("g",null),Re=r.a.createElement("g",null),Me=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Ae=r.a.createElement("g",null),We=r.a.createElement("g",null),Je=r.a.createElement("g",null),De=r.a.createElement("g",null),Ge=r.a.createElement("g",null),qe=r.a.createElement("g",null),Ve=r.a.createElement("g",null),_e=r.a.createElement("g",null),Fe=r.a.createElement("g",null),Le=r.a.createElement("g",null),He=r.a.createElement("g",null),ze=function(e){var t=e.svgRef,a=Te(e,["svgRef"]);return r.a.createElement("svg",Be({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),xe,Re,Me,Pe,Ae,We,Je,De,Ge,qe,Ve,_e,Fe,Le,He)},Ye=r.a.forwardRef(function(e,t){return r.a.createElement(ze,Be({svgRef:t},e))}),Ke=(a.p,a(83),function(){var e=Object(n.useContext)(d),t=e.toggleHidden,a=e.cartItemsCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ye,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))}),Qe=(a(84),function(e){var t=e.item,a=t.imageUrl,n=t.price,i=t.name,c=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"price"},c," x $",n)))}),Xe=(a(85),Object(V.f)(function(e){var t=e.history,a=Object(n.useContext)(d),i=a.cartItems,c=a.toggleHidden;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},i.length?i.map(function(e){return r.a.createElement(Qe,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(X,{onClick:function(){t.push("/checkout"),c()}},"GO TO CHECKOUT"))}));function Ze(){return(Ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function $e(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var et=r.a.createElement("title",null,"Group"),tt=r.a.createElement("desc",null,"Created with Sketch."),at=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),nt=function(e){var t=e.svgRef,a=$e(e,["svgRef"]);return r.a.createElement("svg",Ze({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),et,tt,at)},rt=r.a.forwardRef(function(e,t){return r.a.createElement(nt,Ze({svgRef:t},e))}),it=(a.p,a(86),Object(L.b)({hidden:Ue})),ct=Object(s.b)(it)(function(){var e=Object(n.useContext)(_),t=Object(n.useContext)(d).hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(rt,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),e?r.a.createElement("div",{className:"option",onClick:function(){return de.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Ke,null)),t?null:r.a.createElement(Xe,null))}),lt=function(e){function t(){var e;return Object(W.a)(this,t),(e=Object(D.a)(this,Object(G.a)(t).call(this))).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(q.a)(t,e),Object(J.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=de.onAuthStateChanged(function(){var t=Object(A.a)(P.a.mark(function t(a){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,pe(a);case 3:t.sent.onSnapshot(function(t){e.setState({currentUser:Object(p.a)({id:t.id},t.data())})});case 5:e.setState({currentUser:a});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_.Provider,{value:this.state.currentUser},r.a.createElement(ct,null)),r.a.createElement(V.d,null,r.a.createElement(V.b,{exact:!0,path:"/",component:Q}),r.a.createElement(V.b,{path:"/shop",component:le}),r.a.createElement(V.b,{exact:!0,path:"/checkout",component:Ie}),r.a.createElement(V.b,{exact:!0,path:"/signin",render:function(){return e.state.currentUser?r.a.createElement(V.a,{to:"/"}):r.a.createElement(Ee,null)}})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(b,null,r.a.createElement(s.a,{store:x},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:R},r.a.createElement(lt,null))))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.51f8ed66.chunk.js.map