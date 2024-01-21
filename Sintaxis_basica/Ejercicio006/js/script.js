/** Sintaxis Básica V Arrays, Matrices, Arreglos */

// declarando un array
// var articulos = ["zapatillas","pantalon","camiseta","calcetines"];

/**
 * Propiedad Length =  retorna la cantidad de elementos de un arreglo
 * Metodo push() = agrega un nuevo elemento al final del arreglo
 * Metodo unshift = agrega un nuevo elemento al comienzo del arreglo
 * Metodo pop() = Elimina un nuevo elemento al final del arreglo
 * Metodo shift() = Elimina un nuevo elemento al comienzo del arreglo
 */

var articulos = ["zapatillas","pantalon","camiseta","calcetines"];

//alert(articulos[1]);

console.log("el tamaño actual del arreglo es de : " +articulos.length +" elementos [ "+ articulos + " ]");

console.log("============================================");
console.log("Agregando Elementos del Arreglo");
console.log("============================================");

articulos.push("cinturon");
console.log("el nuevo tamaño del arreglo es de : " +articulos.length +" elementos [ "+ articulos + " ]");
articulos.unshift("corbata");
console.log("el nuevo tamaño del arreglo es de : " +articulos.length +" elementos [ "+ articulos + " ]");

console.log("============================================");
console.log("Eliminando Elementos del Arreglo");
console.log("============================================");
articulos.pop();
console.log("el nuevo tamaño del arreglo es de : " +articulos.length +" elementos [ "+ articulos + " ]");
articulos.shift();
console.log("el nuevo tamaño del arreglo es de : " +articulos.length +" elementos [ "+ articulos + " ]");

console.log("============================================");
console.log("Accediendo a Elementos especificos del Arreglo");
console.log("============================================");

console.log("el nuevo tamaño del arreglo es de : " +articulos.length +" elementos [ "+ articulos + " ]" + 
" y estoy obteniendo el elemeto ===>  [ "+ articulos[3]+" ]");