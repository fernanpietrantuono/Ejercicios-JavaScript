/*
Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio 
*/

function calculaArea(radio) {
  var area = Math.PI * Math.pow(radio, 2);
  return "El area es de " + area + " cm^2";
}

function calculaPerimetro(radio) {
  var perimetro = 2 * Math.PI * radio;
  return "El perimetro es de " + perimetro + " cm";
}

var inputRadio = parseFloat(prompt("Introduzca el radio de su circunferencia"));

var resultados =
  "" + calculaArea(inputRadio) + "\n" + calculaPerimetro(inputRadio);

alert(resultados);
