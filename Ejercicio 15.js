
function ejecutar() {
    let radio = Number.parseFloat(document.getElementById("radio").value);
    if (radio <= 0) {
        document.getElementById("informacion").innerHTML = `
    <p>El numero no puede ser negativo</p>
    `;
        return;
    }
    document.getElementById("informacion").innerHTML = `
    <p>El area es ${area(radio)} cm^2</p>
    <p>El perimetro es ${perimetro(radio)} cm</p>
    `;
}


let area = radio => (Math.PI * Math.pow(radio, 2)).toFixed(2);
let perimetro = radio => (2 * Math.PI * radio).toFixed(2);

document.getElementById("button").onclick = ejecutar;