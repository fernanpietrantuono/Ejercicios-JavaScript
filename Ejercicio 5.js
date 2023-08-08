/*
Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 
*/
function calculadora(num1, num2, oper) {
  switch (oper) {
    case "S":
      return `La suma es ${parseInt(num1) + parseInt(num2)}`;
      break;
    case "R":
      return `La resta es ${parseInt(num1) - parseInt(num2)}`;
      break;
    case "M":
      return `La multiplicación es ${parseInt(num1) * parseInt(num2)}`;
      break;
    case "D":
      return `La división es ${parseInt(num1) / parseInt(num2)}`;
      break;
    default:
      alert("La opción ingresada es incorrecta");
      break;
  }
}
var oper = prompt("Ingrese una operación matemática (S, R, M, D)");
var num1 = prompt("Ingrese un primer número");
var num2 = prompt("Ingrese un segundo número");
alert(calculadora(num1, num2, oper));
