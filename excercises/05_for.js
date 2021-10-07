// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
// una alerta utilizando cada una de las palabras.

var myCats = ['dexter', 'artemis', 'frodo', 'cleo'];

for(var i = 0; i < myCats.length; i++) {
    alert(myCats[i]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

for(var i = 0; i < myCats.length; i++) {
    var upper = myCats[i].substring(0, 1).toUpperCase();
    var lower = myCats[i].substring(1);
    alert(upper + lower);
}

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for
// para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

    var sentence = ' ';

    for(var i = 0; i < myCats.length; i++) {
        sentence += myCats[i] + ' ';
    }
    alert(sentence);

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
// es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
// Mostrar por la consola del navegador el array final (utilizar console.log).
    var myArray = [];
    for(var i = 0; i < 10; i++) {
        myArray.push(i);
    }
    console.log(myArray);