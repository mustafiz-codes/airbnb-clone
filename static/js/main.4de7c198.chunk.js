(this.webpackJsonpairbnb=this.webpackJsonpairbnb||[]).push([[0],{54:function(e,t,a){e.exports=a(83)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),c=a.n(r);a(59),a(60),a(61);var o=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"\xa9 2020 Airbnb Clone! No rights reserved - this is a demo "),i.a.createElement("p",null,"Privacy - Terms - Sitemap - Company Details"))},l=a(20),s=a(41),m=a.n(s),u=a(47),d=a.n(u),p=a(45),h=a.n(p),g=a(46),E=a.n(g);a(62);var b=function(){return i.a.createElement("div",{className:"header"},i.a.createElement(l.b,{to:"/"},i.a.createElement("img",{className:"header_icon",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.spekless.com%2Fwp-content%2Fuploads%2F2018%2F03%2FAirbnb-Logo.png&f=1&nofb=1",alt:"airbunb logo"})),i.a.createElement("div",{className:"header_center"},i.a.createElement("input",{placeholder:"Start your search...",type:"text"}),i.a.createElement(m.a,null)),i.a.createElement("div",{className:"header_right"},i.a.createElement("p",null,"Become a host"),i.a.createElement(h.a,null),i.a.createElement(E.a,null),i.a.createElement(d.a,null)))},f=a(26),v=(a(69),a(97)),k=(a(70),a(71),a(72),a(48)),y=a(49),N=a.n(y),F=a(4);var _=function(){var e=Object(F.f)(),t=Object(n.useState)(new Date),a=Object(f.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(new Date),l=Object(f.a)(o,2),s=l[0],m=l[1],u={startDate:r,endDate:s,key:"selection"};return i.a.createElement("div",{className:"search"},i.a.createElement(k.DateRangePicker,{class:"dateRangePicker",ranges:[u],onChange:function(e){c(e.selection.startDate),m(e.selection.endDate)}}),i.a.createElement("div",{className:"searchGuestNumber"},i.a.createElement("h2",null,"Number of guests"),i.a.createElement(N.a,null)),i.a.createElement("input",{className:"searchInput",min:0,defaultValue:1,type:"number"}),i.a.createElement(v.a,{onClick:function(){return e.push("/search")},className:"searchButton"},"Search Airbnb"))};var j=function(){var e=Object(F.f)(),t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],c=a[1];return i.a.createElement("div",{className:"banner"},i.a.createElement("div",{className:"banner_search"},i.a.createElement(v.a,{onClick:function(){return c(!r)},className:"banner_searchButton",variant:"outlined"},r?"Hide":"Search Dates"),r&&i.a.createElement(_,null)),i.a.createElement("div",{className:"banner_info"},i.a.createElement("h1",null,"Get out and stretch your imagination"),i.a.createElement("h5",null,"Plan a different kind of getaway to uncover the hidden gems near you"),i.a.createElement(v.a,{onClick:function(){return e.push("/search")},variant:"outlined"},"Explore Nearby")))};a(79);var W=function(e){var t=e.src,a=e.title,n=e.description,r=e.price;return i.a.createElement("div",{className:"card"},i.a.createElement("img",{src:t}),i.a.createElement("div",{className:"cardInfo"},i.a.createElement("h2",null,a),i.a.createElement("p",null,n),i.a.createElement("h2",null,r)))};a(80);var P=function(){return i.a.createElement("div",{className:"home"},i.a.createElement(j,null),i.a.createElement("div",{className:"homeSection"},i.a.createElement(W,{src:"https://a0.muscache.com/pictures/46251622-d87d-430e-b4a9-33c22a26f620.jpg",title:"Surprise Stays Next Door",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.a.createElement(W,{src:"https://a0.muscache.com/pictures/09d3634f-575c-4930-a51c-32d49528fc42.jpg",title:"Instant Book some serendipty",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.a.createElement(W,{src:"https://a0.muscache.com/pictures/a88e5857-39fc-4e05-a9fe-75e846a89651.jpg",title:"Remote discoveries for two",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.a.createElement(W,{src:"https://a0.muscache.com/pictures/9188933d-6b73-4195-8de9-c855cad4c97d.jpg",title:"Otherworldly national parks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})),i.a.createElement("div",{className:"homeSection"},i.a.createElement(W,{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WYVahHADo1FYFb6SXJ4vigHaEo%26pid%3DApi&f=1",title:"3 Bedroom Newyork House",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:"70$"}),i.a.createElement(W,{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OLcgyNX2o358zOacZCLUgQHaFj%26pid%3DApi&f=1",title:"2 Bedroom Montreal House",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:"60$"}),i.a.createElement(W,{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zsPuuMRiSVaHaV1R4pwPagHaEK%26pid%3DApi&f=1",title:"5 Bedroom London House",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:"110$"})))},L=(a(81),a(82),a(50)),S=a.n(L),w=a(51),H=a.n(w);var D=function(e){var t=e.img,a=e.location,n=e.title,r=e.description,c=e.star,o=e.price,l=e.total;return i.a.createElement("div",{className:"searchResult"},i.a.createElement("img",{src:t,alt:""}),i.a.createElement(S.a,{className:"searchResult_heart"}),i.a.createElement("div",{className:"searchResult_info"},i.a.createElement("div",{className:"searchResult_infoTop"},i.a.createElement("p",null,a),i.a.createElement("h2",null,n),i.a.createElement("p",null,"_______"),i.a.createElement("p",null,r)),i.a.createElement("div",{className:"searchResult_infoBottom"},i.a.createElement("div",{className:"searchResult_stars"},i.a.createElement(H.a,{className:"searchResult_star"}),i.a.createElement("strong",null,c)),i.a.createElement("div",{className:"searchResult_price"},i.a.createElement("h3",null,o),i.a.createElement("h3",null,l)))))};var x=function(){return i.a.createElement("div",{className:"searchPage"},i.a.createElement("div",{className:"searchPage_info"},i.a.createElement("p",null,"62 stays - 26 August to 30 August - 2 guest"),i.a.createElement("h1",null,"Stays nearby"),i.a.createElement(v.a,{className:"",variant:"outlined"},"Cancellation Flexibility"),i.a.createElement(v.a,{className:"",variant:"outlined"},"Type of place"),i.a.createElement(v.a,{className:"",variant:"outlined"},"Price"),i.a.createElement(v.a,{className:"",variant:"outlined"},"Rooms and beds"),i.a.createElement(v.a,{className:"",variant:"outlined"},"More filters")),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large",location:"Private room in center of London",title:"Stay at Home Heaven",description:"1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"4.75",price:"30$ / night",total:"117"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large",location:"Private room in center of London",title:"Independent luxury studio apartment",description:"2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"3.9",price:"40$ / night",total:"157"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large",location:"Private room in center of London",title:"Stay at Home Heaven",description:"1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"4.75",price:"30$ / night",total:"117"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large",location:"Private room in center of London",title:"Independent luxury studio apartment",description:"2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"3.9",price:"40$ / night",total:"157"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large",location:"Private room in center of London",title:"Stay at Home Heaven",description:"1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"4.75",price:"30$ / night",total:"117"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large",location:"Private room in center of London",title:"Independent luxury studio apartment",description:"2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"3.9",price:"40$ / night",total:"157"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large",location:"Private room in center of London",title:"Stay at Home Heaven",description:"1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"4.75",price:"30$ / night",total:"117"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large",location:"Private room in center of London",title:"Independent luxury studio apartment",description:"2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"3.9",price:"40$ / night",total:"157"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/5a1543ea-e5ea-49fb-bc13-4fcd478a02e1.jpg?aki_policy=large",location:"Private room in center of London",title:"Stay at Home Heaven",description:"1 Guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"4.75",price:"30$ / night",total:"117"}),i.a.createElement(D,{img:"https://a0.muscache.com/im/pictures/c7341932-7d4e-4e67-89a4-e4ae9fe8d9b6.jpg?aki_policy=large",location:"Private room in center of London",title:"Independent luxury studio apartment",description:"2 Guest - 2 bedroom - 1 bed - 2 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",star:"3.9",price:"40$ / night",total:"157"}))};var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l.a,null,i.a.createElement(b,null),i.a.createElement(F.c,null,i.a.createElement(F.a,{path:"/search"},i.a.createElement(x,null)),i.a.createElement(F.a,{path:"/"},i.a.createElement(P,null))),i.a.createElement(o,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.4de7c198.chunk.js.map