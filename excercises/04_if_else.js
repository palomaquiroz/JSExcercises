// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
// y sino un alerta con el mensaje “Lower than 0,5”.

var randomNum = Math.random();

if (randomNum >= 0,5) {
    alert('Greater than 0.5');
}
else {
    alert('Lower than 0.5')
}

// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
var age = 28;

if(age < 2) {
    alert('Bebé');
} else if (age >= 2 && age <= 12) {
    alert('Ninño');
} else if (age >= 13 && age <= 19) {
    alert('Adolescente');
} else if (age >= 20 && age <= 30) {
    alert('Joven');
} else if (age >= 31 && age <= 60) {
    alert('Adulto');
} else if (age >= 61 && age <= 75) {
    alert('Adulto Mayor');
} else {
    alert('Anciano');
}