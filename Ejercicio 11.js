/* Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

function masLarga(frase) {
    const palabras = frase.split(" ");
    let palabraMasLarga = palabras[0];
    palabras.forEach(palabra => {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra
        }
    });
    return palabraMasLarga;
}
const frase = prompt("Ingresa una frase");
alert(`La palabra mas larga es ${masLarga(frase)}`)