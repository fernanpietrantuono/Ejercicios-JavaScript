/*
Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial. 
*/
function toTheLimit(limite){
    let suma = 0;
    while (suma < limite) {
        suma = parseInt(prompt("Ingrese un número:"));
        suma++;
    }
}
var limite = prompt("Ingrese un número límite");
alert(toTheLimit(limite));