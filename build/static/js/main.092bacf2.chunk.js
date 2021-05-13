(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),c=a.n(r),s=a(4),l=a(5),i=a(8),u=a(6),d=a(9),m=a(14),h="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:b},k=function(e,t){return fetch("".concat(h,"/books/").concat(e.id),{method:"PUT",headers:Object(m.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},f=function(e){return fetch("".concat(h,"/search"),{method:"POST",headers:Object(m.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=(a(25),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.state,n=t.books;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},{currentlyReading:"Currently Reading",wantToRead:"Want to Read",read:"Read",none:"none"}[a]),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},n.map(function(t){return o.a.createElement("li",{key:t.id,id:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"imageLinks"in t?"url("+t.imageLinks.thumbnail+")":"url(https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg)"}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:a,id:t.id,onChange:function(a){e.props.update(t,a.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.authors)))}))))}}]),t}(n.Component)),E=a(7),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.componentDidMount=function(){a.setState(function(){return{books:[]}})},a.updateQuery=function(e){f(""===e?" ":e).then(function(e){void 0===e?a.setState(function(){return{books:[]}}):a.setState(function(){return{books:e}})})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.shelvedbooks,a=this.state.books;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(E.b,{to:"/MyReads./"},o.a.createElement("button",{className:"close-search",onClick:function(){return e.setState({showSearchPage:!1})}},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",defaultValue:"",onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},a.length>0?a.map(function(a){return o.a.createElement("li",{key:a.id,id:a.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"imageLinks"in a?"url("+a.imageLinks.thumbnail+")":"url(https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg)"}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{defaultValue:t.filter(function(e){return e.id===a.id}).length>0?t.filter(function(e){return e.id===a.id})[0].shelf:"none",id:a.id,onChange:function(t){e.props.update(a,t.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a.title),o.a.createElement("div",{className:"book-authors"},a.authors)))}):o.a.createElement("p",null))))}}]),t}(n.Component),y=a(0),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],showSearchPage:!0},a.updatebook=function(e,t){var n=e;n.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat(n)}}),k(e,t)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(h,"/books"),{headers:p}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState(function(){return{books:t}})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(y.a,{exact:!0,path:"/MyReads/search",render:function(){return o.a.createElement(g,{shelvedbooks:e.state.books,update:e.updatebook})}}),o.a.createElement(y.a,{exact:!0,path:"/MyReads/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(v,{books:e.state.books.filter(function(e){return"currentlyReading"===e.shelf}),update:e.updatebook,state:"currentlyReading"}),o.a.createElement(v,{books:e.state.books.filter(function(e){return"wantToRead"===e.shelf}),update:e.updatebook,state:"wantToRead"}),o.a.createElement(v,{books:e.state.books.filter(function(e){return"read"===e.shelf}),update:e.updatebook,state:"read"}))),o.a.createElement(E.b,{to:"/MyReads/search"},o.a.createElement("div",{className:"open-search"},o.a.createElement("button",{onClick:function(){return e.setState({showSearchPage:!0})}},"Add a book"))))}}))}}]),t}(o.a.Component);a(32);c.a.render(o.a.createElement(E.a,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.092bacf2.chunk.js.map