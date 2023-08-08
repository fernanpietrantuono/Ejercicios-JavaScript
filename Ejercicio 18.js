var valores = [true, 5, false, "hola", "adios", 2];
let textoLargo = "";
let booleanos = [];
let numeros = [];
valores.forEach(element => {
    if (typeof(element) == 'string') {
        if (element.length > textoLargo.length) {
            textoLargo = element;
        }
    }else if (typeof(element) == 'boolean') {
            booleanos.push(element);
        }else{
            if (!isNaN(element)) {
                numeros.push(element);
            }
    }
});
alert(`El texto mas largo es: ${textoLargo}`);
let verdadero = booleanos[0] || booleanos[1];
let falso = booleanos[0] && booleanos[1];
alert(`${verdadero} y ${falso}`);
alert(`Suma: ${numeros[0]+numeros[1]}`);
alert(`Resta: ${numeros[0]-numeros[1]}`);
alert(`Multiplicación: ${numeros[0]*numeros[1]}`);
alert(`División: ${numeros[0]/numeros[1]}`);
alert(`Módulo: ${numeros[0]%numeros[1]}`);