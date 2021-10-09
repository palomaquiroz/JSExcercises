// Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function sum(a, b) {
    var result = a + b;
    return result;
}

console.log(sum(1, 2));

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
// mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function sum(a, b) {
    if (isNaN(a)) {
        alert('Error: ' + a + ' is not a number');
        return NaN;
    }
    else if (isNaN(b)) {
        alert ('Error: ' + b + ' is not a number');
        return NaN;
    }
    else {
        var result = a + b;
        return result;
    }
}

console.log(sum(2, 'four'));

// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(a) {
    if (Number.isInteger(a)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(validateInteger(60));

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
// En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function sum(a, b) {
    if (isNaN(a)) {
        alert('Error: ' + a + ' is not a number');
        return a;
    }
    else if (isNaN(b)) {
        alert('Error: ' + b + ' is not a number');
        return b;
    }
    else if (!Number.isInteger(a)) {
        alert('Error: ' + a + ' is not an integer');
        return parseInt(a, 10);
    }
    else if (!Number.isInteger(b)) {
        alert('Error: ' + b + ' is not a integer');
        return parseInt(b, 10);
    }
    else {
        var result = a + b;
        return result;
    }
}

console.log(sum(2.9, 3));