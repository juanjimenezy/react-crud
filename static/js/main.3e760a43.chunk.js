(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(20),c=a.n(r),o=(a(34),a(36),a(14),a(3)),i=a(9),m=a(11),u=a(7),d=a(8),s=a(13),E=Object(s.b)({name:"registros",initialState:[{id:1,nombre:"Juan",apellido:"Jimenez"},{id:2,nombre:"Benjamin",apellido:"Nieto"},{id:3,nombre:"Jhonatan",apellido:"Facete"},{id:4,nombre:"Roiner",apellido:"Escobar"},{id:5,nombre:"Jose",apellido:"Rodriguez"}],reducers:{addRegistro:function(e,t){e.push(t.payload)},editRegistro:function(e,t){var a=t.payload,n=a.id,l=a.nombre,r=a.apellido,c=e.find(function(e){return e.id===n});c&&(c.nombre=l,c.apellido=r)},deleteRegistro:function(e,t){var a=e.find(function(e){return e.id===t.payload});a&&e.splice(e.indexOf(a),1)}}}),b=E.actions,p=b.addRegistro,f=b.editRegistro,g=b.deleteRegistro,v=E.reducer,j=a(54);var y=function(){var e=l.a.useState({id:"",nombre:"",apellido:""}),t=Object(u.a)(e,2),a=t[0],n=t[1],r=l.a.useState(!1),c=Object(u.a)(r,2),s=c[0],E=c[1],b=Object(d.b)(),f=function(e){n(Object(m.a)({},a,Object(i.a)({},e.target.name,e.target.value)))},g=function(){E(!s)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(o.e,null,l.a.createElement("div",{className:"my-2 text-center"},l.a.createElement(o.a,{color:"success",onClick:function(){return g()}},"nuevo")))),l.a.createElement("div",null,l.a.createElement(o.g,{isOpen:s},l.a.createElement(o.j,null,l.a.createElement("div",null,l.a.createElement("h3",null,"Insertar Personaje"))),l.a.createElement(o.h,null,l.a.createElement(o.f,null,l.a.createElement("label",null,"Nombre:"),l.a.createElement("input",{className:"form-control",name:"nombre",type:"text",onChange:f,value:a.nombre,required:!0})),l.a.createElement(o.f,null,l.a.createElement("label",null,"Apellido:"),l.a.createElement("input",{className:"form-control",name:"apellido",type:"text",onChange:f,value:a.apellido,required:!0}))),l.a.createElement(o.i,null,l.a.createElement(o.a,{color:"primary",onClick:function(){return console.log("insertar:"),console.log(a.nombre),void(a.nombre?a.apellido?(b(p(Object(m.a)({},a,{id:Object(j.a)()}))),n({id:"",nombre:"",apellido:""}),E(!s)):window.alert("Campo apellido vacio."):window.alert("Campo nombre vacio."))}}," Insertar "),l.a.createElement(o.a,{className:"btn btn-danger",onClick:function(){return g()}},"Cancelar")))))};var O=function(){var e=Object(d.c)(function(e){return e.registros}),t=l.a.useState({id:"",nombre:"",apellido:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],c=l.a.useState(!1),s=Object(u.a)(c,2),E=s[0],b=s[1],p=Object(d.b)(),v=function(e){r(Object(m.a)({},n,Object(i.a)({},e.target.name,e.target.value)))},j=function(e){b(!E),console.log(e),e&&r({id:e.id,nombre:e.nombre,apellido:e.apellido})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-2 text-center"},l.a.createElement(o.e,null,l.a.createElement("div",{className:"my-5 text-center"},l.a.createElement(o.k,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nombre"),l.a.createElement("th",null,"Apellido"),l.a.createElement("th",null,"Acciones"))),l.a.createElement("tbody",null,e.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.nombre),l.a.createElement("td",null,e.apellido),l.a.createElement("td",null,l.a.createElement(o.a,{color:"primary",onClick:function(){return j(e)}},"Editar")," ",l.a.createElement(o.a,{color:"danger",onClick:function(){return function(e){!0===window.confirm("Est\xe1s Seguro que deseas a "+e.nombre)&&(p(g(e.id)),r({id:"",nombre:"",apellido:""}))}(e)}},"Eliminar")))})))))),l.a.createElement(o.g,{isOpen:E},l.a.createElement(o.j,null,l.a.createElement("div",null,l.a.createElement("h3",null,"Editar Registro"))),l.a.createElement(o.h,null,l.a.createElement(o.f,null,l.a.createElement("label",null,"Id:"),l.a.createElement("input",{className:"form-control",readOnly:!0,type:"text",value:n.id})),l.a.createElement(o.f,null,l.a.createElement("label",null,"Nombre: "),l.a.createElement("input",{className:"form-control",name:"nombre",type:"text",onChange:v,value:n.nombre,required:!0})),l.a.createElement(o.f,null,l.a.createElement("label",null,"Apellido:"),l.a.createElement("input",{className:"form-control",name:"apellido",type:"text",onChange:v,value:n.apellido,required:!0}))),l.a.createElement(o.i,null,l.a.createElement(o.a,{color:"primary",onClick:function(){n.nombre?n.apellido?(p(f(Object(m.a)({},n,{id:n.id}))),b(!E)):window.alert("Campo apellido vacio."):window.alert("Campo nombre vacio.")}},"Editar"),l.a.createElement(o.a,{color:"danger",onClick:function(){return j(null)}},"Cancelar"))))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-5 justify-content-center d-flex align-items-center"},l.a.createElement(o.b,{className:"col-md-2"},l.a.createElement(o.d,{className:"text-center"},"Insertar Registro"),l.a.createElement(o.c,null,l.a.createElement(y,null)))),l.a.createElement("div",{className:"my-5 justify-content-center d-flex align-items-center p-2"},l.a.createElement(o.b,{className:"col-md-4"},l.a.createElement(o.d,{className:"text-center"},"Registros"),l.a.createElement(o.c,null,l.a.createElement(O,null)))))};var C=function(){return l.a.createElement("div",null,l.a.createElement(N,null))},w=Object(s.a)({reducer:{registros:v}});c.a.createRoot(document.getElementById("root")).render(l.a.createElement(d.a,{store:w},l.a.createElement(C,null)))}},[[27,2,1]]]);
//# sourceMappingURL=main.3e760a43.chunk.js.map