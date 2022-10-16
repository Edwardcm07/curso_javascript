var repetir = "si";

function suma(num1, num2) {
  alert("la suma es: " + (num1 + num2));
}
function resta(num1, num2) {
  alert("la resta es: " + (num1 - num2));
}
function multiplicar(num1, num2) {
  alert("la multiplicación es: " + num1 * num2);
}
function dividir(num1, num2) {
  alert("la división es: " + num1 / num2);
}

do {
  var operacion = prompt("¿Qué operación quieres realizar?");
  var operador1 = parseInt(prompt("introduce el primer número"));
  var operador2 = parseInt(prompt("introduce el segundo número"));

  if (operacion == "suma") {
    suma(operador1 + operador2);
  } else if (operacion == "resta") {
    resta(operador1, operador2);
  } else if (operacion == "multiplicar") {
    multiplicar(operador1, operador2);
  } else if (operacion == "dividir") {
    dividir(operador1, operador2);
  } else {
    alert("lo siemnto operación no definida");
  }

  repetir = prompt("¿deceas hacer otra operacion?");
} while (repetir == "si");
