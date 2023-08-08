/*
Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring(). 
*/

function meteEspacios(frase) {
    const espaciado = frase.split("");
    let conespacios = "";
    espaciado.forEach(element => {
        conespacios+=element+" ";
    });
    return conespacios;
}
var frase = prompt("Introduzca una palabra o frase");
console.log(meteEspacios(frase));