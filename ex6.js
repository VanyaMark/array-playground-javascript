/**
 * Poniéndolo todo junto
 */

/**
 * Ejecuta el código.
 * La variable 'pezEncontrado' acabará valiendo true si encontramos 
 * Sin embargo devuelve false. Hay DOS errores:
 *
 * 1. Un error lógico; que hace que el código no funcione como esperamos, puesto que "Estrella" SI está en el array de peces
 *
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 */


let listaPeces = ["Dory", "Nemo", "Shipho", "Estrella"];
let pezBuscado = "Estrella";
let pezEncontrado = false;
let i = 0;

while (!pezEncontrado && i < listaPeces.length) {
  if (listaPeces[i] == pezBuscado) {
    pezEncontrado = true;
  }
  i++;
}

console.log("He encontrado al pez?: " + pezEncontrado);

let arr = [45,67,87,23,5,32,60];

// Your code here
const newArr = arr.map((el)=> typeof el)
console.log(newArr)

let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

/*let hello = [];
for(let i = 0; i < myArray.length; i++) {
    let item = myArray[i];
    // MAGIC HAPPENS HERE
}
*/

const hello =myArray.filter(el => typeof el == "object" )
console.log(hello)