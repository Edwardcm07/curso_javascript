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
// var contador = 0;
// while (contador < meses.length) {
//   document.write(meses[contador] + "<br/> ");
//   contador++;
// }

var nombre, edad, poblacion;
//nombre = prompt("introduce tu nombre, por favor", "Escribe aquí tu nombre");

do {
  nombre = prompt("por favor ingresa un nombre valido");
} while (!isNaN(nombre));
//edad = prompt("introduce tu edad, por favor", "Escribe aquí tu edad");

do {
  edad = prompt("introduce una edad valida");
} while (edad <= 0 || edad > 105 || isNaN(edad));
// poblacion = prompt(
//   "introduce tu población, por favor",
//   "Escribe aquí tu población"
// );
do {
  poblacion = prompt("introduce una poblacion correcta");
} while (!isNaN(poblacion));
