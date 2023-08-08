/*
Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo. 
*/

function esmayor(edad) {
    if (edad > 21) {
        alert("El usuario es mayor");
    }
    else {
        alert("El usuario es menor");
    }
}

var edad = prompt("Introduzca su edad por favor");
esmayor(edad);