/*
Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. 
*/

function leerHastaCero() {
    let ingresado = -1;
    let maximo = 0;
    ingresado1 = parseInt(prompt("Ingrese el primer número"));
    let minimo = ingresado1;
    let array = [];
    let suma = 0;
    while (ingresado != 0) {
        ingresado = parseInt(prompt("Ingrese un número"));
        if (ingresado != 0) {
            array.push(ingresado);
        }

        if (ingresado > maximo) {
            maximo = ingresado;
        }
        if (ingresado < minimo && ingresado != 0) {
            minimo = ingresado;
        }
    }
    alert(`El número máximo fué: ${maximo}
y el número mínimo fué: ${minimo}`)

    array.forEach(element => {
        suma += element
    });
    const promedio = suma / array.length;
    alert("El promedio es de " + promedio);
}
leerHastaCero();