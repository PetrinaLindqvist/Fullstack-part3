(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),u=t.n(r),c=t(4),l=t(3),i=function(e){var n=e.addPerson,t=e.handleNoteChange,a=e.handleNumberChange,r=e.name,u=e.number;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:r,onChange:t})," "),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:u,onChange:a})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.newFilter,t=e.handleFilterChange;return o.a.createElement("div",null,"filter shown with ",o.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.persons,t=e.newFilter,a=e.deletePerson,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",null,r.map((function(e){return o.a.createElement("li",{key:e.name},e.name," ",e.number,o.a.createElement("button",{onClick:function(){return a(e.id)}},"delete"))}))," ")},d=t(2),f=t.n(d),h="http://localhost:3001/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},v=function(e){return f.a.post(h,e).then((function(e){return e.data}))},g=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},E=(t(37),function(e){var n=e.message,t=e.error;return null===n&&null===t?null:null!==n?o.a.createElement("div",{className:"message"},n):null!==t?o.a.createElement("div",{className:"error"},t):void 0}),w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),f=d[0],h=d[1],w=Object(a.useState)(""),C=Object(l.a)(w,2),O=C[0],j=C[1],k=Object(a.useState)(""),S=Object(l.a)(k,2),N=S[0],y=S[1],L=Object(a.useState)(null),F=Object(l.a)(L,2),P=F[0],T=F[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),A=I[0],J=I[1];Object(a.useEffect)((function(){b().then((function(e){r(e)}))}),[]);var M=function(e){var n=t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})).id;e=Object(c.a)(Object(c.a)({},e),{},{id:n}),g(n,e).then((function(e){r(t.map((function(t){return t.id!==n?t:e}))),h(""),j(""),T("Changed ".concat(e.name," number to ").concat(O)),setTimeout((function(){T(null)}),2e3)})).catch((function(a){400===a.response.status?(J(a.response.data.errorMessage),setTimeout((function(){J(null)}),3e3)):(r(t.filter((function(e){return e.id!==n}))),J("Information of ".concat(e.name," has already been removed from the server")),setTimeout((function(){J(null)}),3e3),j(""),h(""))}))};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{message:P,error:A}),o.a.createElement(s,{value:N,handleFilterChange:function(e){console.log(e.target.value),y(e.target.value)}}),o.a.createElement("h2",null,"Add a new"),o.a.createElement(i,{name:f,handleNoteChange:function(e){console.log(e.target.value),h(e.target.value)},number:O,handleNumberChange:function(e){console.log(e.target.value),j(e.target.value)},addPerson:function(e){e.preventDefault(),console.log("button clicked",e.target);var n={name:f,number:O,date:(new Date).toISOString()};t.every((function(e){return e.name.toLowerCase()!==f.toLowerCase()}))?v(n).then((function(e){r(t.concat(e)),h(""),j(""),T("Added ".concat(e.name)),setTimeout((function(){T(null)}),2e3)})).catch((function(e){J(e.response.data.errorMessage),setTimeout((function(){J(null)}),2e3)})):window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&M(n)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(m,{persons:t,newFilter:N,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(console.log("delete"),p(e).then(),r(t.filter((function(n){return e!==n.id}))))}}))};f.a.get("http://localhost:3001/persons").then((function(e){console.log(e)})),u.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.14618b51.chunk.js.map