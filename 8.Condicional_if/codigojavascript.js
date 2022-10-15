var cuerpo = document.getElementById("cuerpo");

var colorWeb = prompt(
  "introduce el color de fondo. Azul/Verde/Rojo"
).toLowerCase();

/*if (colorWeb == "azul") {
  cuerpo.style.background = "blue";
} else if (colorWeb == "rojo") {
  cuerpo.style.background = "red";
} else if (colorWeb == "verde") {
  cuerpo.style.background = "green";
} else {
  alert("el color no está contemplado");
}*/
if (colorWeb != "azul" && colorWeb != "rojo" && colorWeb != "verde") {
  alert("El color no está contemplado");
} else if (colorWeb == "azul") {
  cuerpo.style.background = "blue";
} else if (colorWeb == "rojo") {
  cuerpo.style.background = "red";
} else if (colorWeb == "verde") {
  cuerpo.style.background = "green";
}
