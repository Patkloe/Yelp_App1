(this.webpackJsonpYelp_App=this.webpackJsonpYelp_App||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=(n(14),n(1)),c=n(2),l=n(4),u=n(3),h=n(6),m=n(5),d=(n(15),n(16),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.name,a=e.address,o=e.city,i=e.state,s=e.zipCode,c=e.category,l=e.rating,u=e.reviewCount,h=e.url;return r.a.createElement("div",{className:"Business"},r.a.createElement("div",{className:"image-container"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:h},r.a.createElement("img",{src:t,alt:n}))),r.a.createElement("h2",null,n),r.a.createElement("div",{className:"Business-information"},r.a.createElement("div",{className:"Business-address"},r.a.createElement("p",null,a),r.a.createElement("p",null,o),r.a.createElement("p",null,i,", ",s)),r.a.createElement("div",{className:"Business-reviews"},r.a.createElement("h3",null,c),r.a.createElement("h3",{className:"rating"},"Rating: ",l,"/5"),r.a.createElement("p",null,"Reviews: ",u))))}}]),t}(r.a.Component)),p=(n(17),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.businesses.map((function(e){var t=e.name,n=e.imageSrc,a=e.address,o=e.city,i=e.state,s=e.zipCode,c=e.rating,l=e.reviewCount,u=e.url;return r.a.createElement(d,{key:e.id,image:n,name:t,address:a,city:o,state:i,zipCode:s,rating:c,reviewCount:l,url:u})})),t=e.length;return console.log(e),console.log(t),r.a.createElement("div",{className:"BusinessList"},e)}}]),t}(r.a.Component)),f=(n(18),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._renderSortByOptions=function(e){return Object.keys(n.sortByOptions).map((function(e){var t=n.sortByOptions[e];return r.a.createElement("li",{className:n._getSortByClass(t),onClick:n._handleSortByChange.bind(Object(h.a)(n),t),key:t},e)}))},n._getSortByClass=function(e){return n.state.sortBy===e?"active":""},n._handleTermChange=function(e){n.setState({term:e.target.value})},n._handleLocationChange=function(e){n.setState({location:e.target.value})},n._handleSearch=function(e){var t=n.state.location,a=n.state.term;if(""==t||""==a)return alert("Missing informations");n.props.searchYelp(n.state.term,n.state.location,n.state.sortBy),e.preventDefault()},n.state={term:"",location:"",sortBy:"best_match"},n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("div",{className:"SearchBar-sort-options"},r.a.createElement("ul",null,this._renderSortByOptions(this.sortByOptions))),r.a.createElement("div",{className:"SearchBar-fields"},r.a.createElement("input",{onChange:this._handleTermChange,placeholder:"What are you in the mood for?"}),r.a.createElement("input",{onChange:this._handleLocationChange,placeholder:"Where?"})),r.a.createElement("div",{onClick:this._handleSearch,className:"SearchBar-submit"},r.a.createElement("a",null,"Let\u2019s Go!")))}},{key:"_handleSortByChange",value:function(e){this.setState({sortBy:e})}}]),t}(r.a.Component)),g=(a.Component,{search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("OgdR0x5YyRiBgtXgMi1J9TDBB76B4nOJh3Sq3Ry1Dft9GkowCyi76VQVVmmjmRmpOodNbqBeLv3SH_3mJOM6gIWOlMapj6gkzG5JZUpm06ZNv2Q9QEwGht3-cH6CXnYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}}),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"searchYelp",value:function(e,t,n){var a=this;g.search(e,t,n).then((function(e){a.setState({businesses:e})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"PARIS DeLiCiOuS"),r.a.createElement(f,{searchYelp:this.searchYelp}),r.a.createElement(p,{businesses:this.state.businesses}),r.a.createElement("h5",null,r.a.createElement("u",null,"\xae Patrick Motsebo through Tech901 2020")))}}]),t}(r.a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Yelp_App1",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Yelp_App1","/service-worker.js");b?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.a7d3c01f.chunk.js.map