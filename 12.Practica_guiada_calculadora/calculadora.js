/* esta es una prueba de una calculadora, no es una calculadora real y solo se programa los botonoes de suma y resta junto con el de resultado.no tiene aun programado el boton de multiplicar ni dividir. se realizará posteriormente*/

var cifra = ""; //sirve para acumular los digitos del numero
var acumulado = 0; // para la suma
var sumar = false; //esto se hace para sumar y dar el resultado
var restar = false;
var p_operacion = true;

function display_numeros(numero) {
  // con esta funcion hacemos que el display escriba el numero que deseamos
  document.getElementById("display").value = cifra + numero;
  cifra = document.getElementById("display").value; //sirve para acumular los digitos del numero
}
function suma() {
  if (restar) {
    acumulado = acumulado - parseInt(cifra);
    document.getElementById("display").value = acumulado;
  } else {
    acumulado = acumulado + parseInt(cifra);
    document.getElementById("display").value = acumulado;
  }
  acumulado = acumulado + parseInt(cifra); //guarda los numeros de la suma
  document.getElementById("display").value = acumulado;
  cifra = ""; //borra el numero que hay en el diplay
  sumar = true; // le cambia al valor a verdadero cuando pasa por la suma
  p_operacion = false;
}
function resta() {
  if (p_operacion == false) {
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      document.getElementById("display").value = acumulado;
    } else {
      acumulado = acumulado - parseInt(cifra);
      document.getElementById("display").value = acumulado;
    }
    cifra = "";
    sumar = false;
    restar = true;
  } else {
    acumulado = parseInt(cifra);
    p_operacion = false;
  }
}
function resultado() {
  if (sumar == true) {
    document.getElementById("display").value = acumulado + parseInt(cifra);
  } else if (restar == true) {
    document.getElementById("display").value = acumulado - parseInt(cifra);
  }
  acumulado = parseInt(document.getElementById("display").value);
  cifra = 0;
}
