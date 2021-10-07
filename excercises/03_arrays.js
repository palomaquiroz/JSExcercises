// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4], months[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(months.sort());

// Agregar un elemento al principio y al final del array (utilizar unshift y push).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift('FirstMonth');
months.push('LastMonth');
console.log(months);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log(months);

// Invertir el orden del array (utilizar reverse).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months.reverse());

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log(months.join('-'));

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months.slice(4, 11));