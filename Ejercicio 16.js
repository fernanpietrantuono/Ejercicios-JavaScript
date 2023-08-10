let arreglo1 = [];
let arreglo2 = [];

function ejecutar() {
    llenarArreglo(arreglo1);
    llenarArreglo(arreglo2);
    document.getElementById("informacion").innerHTML = `
        <p>Arreglo 1 = [${arreglo1}]</p>
        <p>Arreglo 2 = [${arreglo2}]</p>
    `;
}

function llenarArreglo(arr) {
    arr.splice(0, arr.length);
    for (let i = 0; i < 5; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
}

document.getElementById("button").onclick = ejecutar;