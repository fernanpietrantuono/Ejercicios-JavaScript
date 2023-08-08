/*
Escribir una función flecha que reciba una palabra y la devuelva al revés. 
*/

const alreves = (frase) => {
    const arrayfrase = frase.split("");
    let invertido = arrayfrase.reverse().join("");
    return invertido;
}
var arrayinv = [];
var pregunta = prompt("Introduzca la frase a invertir");
arrayinv = alreves(pregunta);
console.log(arrayinv);