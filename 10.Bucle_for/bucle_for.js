// for (var i = 0; i < 10; i++) {
//   //document.write(i + " ");
//   alert("saludo" + " " + i);
// }

// var meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];

// //document.write(meses[0] + "<br/>");

// for (var i; i < meses.length; i++) {
//   document.write(meses[i] + "<br/>");
// }

var trabajadores = new Array();
var persona = "";
var contador = 0;
while (persona != "salir") {
  persona = prompt("introduce trabajador");
  trabajadores[contador] = persona;
  contador++;
}
trabajadores.pop();
for (var i = 0; i < trabajadores.length; i++) {
  document.write(trabajadores[i] + "<br/>");
}
