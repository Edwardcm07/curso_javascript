var aleatorio = Math.round(Math.random() * 100);
//alert(aleatorio);
var minum, intentos;

minum = 0;
intentos = 0;

var mensaje = document.getElementById("c_mensaje");
var intentos_consumidos = document.getElementById("c_intentos");

do {
  minum = prompt("introduce un # entre 0 y 100");
  if (aleatorio > minum) {
    mensaje.value = "mas alto";
    mensaje.style.fontSize = "18px";
    //alert("el numero es mas alto");
    document.write("El numero es mas alto" + "<br/>");
  }
  if (aleatorio < minum) {
    intentos_consumidos.value = "mas bajo";
    intentos_consumidos.style.fontSize = "18px";
    intentos_consumidos.style.color = "red";
    intentos_consumidos.style.textAlign = "center";

    //alert("el numero es mas bajo");
    document.write("El numero es mas bajo" + "<br/>");
  }
  intentos++;
  intentos_consumidos++;
} while (aleatorio != minum);

//alert("Correcto. Lo has hecho en: " + intentos + " intentos");
mensaje.value = "correcto";
mensaje.style.color = "red";
