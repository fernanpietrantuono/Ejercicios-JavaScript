/*
Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. 
*/
function eseEne(dato) {
    if (dato == "S" || dato == "N") {
        alert("CORRECTO!");
    }
    else {
        alert("INCORRECTO!");
    }
}
var dato = prompt("Introduzca S o N por favor");
eseEne(dato);