// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var tenCharacters = 'La pizza de Don Cangrejo es la mejor pizza';
var tenCharactersUpper = tenCharacters.toUpperCase();
console.log(tenCharactersUpper);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable (utilizar substring).

var elAnimale = 'Alexis Lionel Maximiliano Pucheta';
var elAnimaleName = elAnimale.substring(0, 5);
console.log(elAnimaleName);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
// y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var radiumString = 'Radium Rocket';
var radiumSub = radiumString.substring(10, 13);
console.log(radiumSub);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
// y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var ironMaiden = 'fear Of The Dark';
var ironUpper = ironMaiden.substring(0, 1).toUpperCase();
var ironLower = ironMaiden.substring(1, 16).toLowerCase();
var ironMaidenSong = ironUpper + ironLower;
console.log(ironMaidenSong);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var pantera = 'Cowboys from Hell';
console.log(pantera.indexOf(' '));

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
// palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var longName = 'leonardo diCaprio';
var longNameUpperOne = longName.substring(0, 1).toUpperCase();
var longNameUpperTwo = longName.substring(9, 10).toUpperCase();
var longNameLowerOne = longName.substring(1, 8).toLowerCase();
var longNameLowerTwo = longName.substring(10, 17).toLowerCase();
console.log(longNameUpperOne + longNameLowerOne + ' ' + longNameUpperTwo + longNameLowerTwo);

