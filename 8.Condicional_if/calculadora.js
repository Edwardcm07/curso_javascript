var num1 = prompt("introduce el primer número");
var num2 = prompt("introduce el segundo número");
var operacion = prompt(
  "¿Qué operación deseas utilizar? suma/resta/multiplicación/división"
);

if (operacion == "suma") {
  alert(parseInt(num1) + parseInt(num2));
} else if (operacion == "resta") {
  alert(parseInt(num1) - parseInt(num2));
} else if (operacion == "multiplicación" || operacion == "multiplicacion") {
  alert(parseInt(num1) * parseInt(num2));
} else if (operacion == "división" || operacion == "division") {
  alert(parseInt(num1) / parseInt(num2));
}
