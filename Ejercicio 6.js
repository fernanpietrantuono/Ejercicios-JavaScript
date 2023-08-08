/*
Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. 
*/
function esPar(num) {
  if (num % 2 == 0 && num != 0) {
    return "El número es par";
  } else if (num % 2 != 0 && num != 0) {
    return "El número es impar";
  } else {
    return "El número no es par ni impar";
  }
}
var num = prompt("Introduzca un número para saber si es par o impar");
alert(esPar(num));
