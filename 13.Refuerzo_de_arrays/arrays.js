// // let numbers = [2, 3, 4, 5, 10];
// // console.log(numbers[5]);
// // console.log(numbers.length);
// // console.log(numbers);
// // console.log(numbers.at(2));

// // for (let i = 0; i < numbers.length; i++) {
// //   //de menor a mayor
// //   console.log(numbers[i]);
// // }
// // for (let i = numbers.length - 1; i >= 0; i--) {
// //   //de mayor a menor
// //   console.log(numbers[i]);
// // }
// // function show(arr) {
// //   //una funcion para mostrar el array
// //   for (let i = 0; i < numbers.length; i++) {
// //     //de menor a mayor
// //     console.log(numbers[i]);
// //   }
// // }

// let names = ["hector", "pedro", "juan"];
// let secondname = ["perez", "cano", "mesa"];

// names.push("Alejo");
// names.unshift("Maria");
// names.splice(2, 0, "felipe");
// showDom("array"); //para mostrar en los cuadros

// function showDom(element, arr) {
//   document.getElementById(element).innerHTML = "";

//   for (let i = 0; i < arr.length; i++) {
//     document.getElementById(element).innerHTML += `<div>${arr[i]}<div>`;
//   } //esto es para mostrar en los cuadros
// }
let fn = function () {
  console.log("hola");
}; //funcion de primer orden

function some(f) {
  console.log("algo antes");
  f();
  console.log("algo despues");
} //funcion de orden superior

some(fn);
