class RadioClase {
    constructor(diametro, radio) {
        this.diametro = diametro;
        this.radio = radio;
    }
}

const circunf = document.getElementById("circunferencia");

function hallarRadio() {
    let diametro = circunf.elements["diametro"].value;
    console.log("radio = " + diametro.trim() + " / 2");
    const radio = diametro / 2;
    console.log("radio = " + radio + " cm");
    return new RadioClase(diametro, radio);
}

circunf.onsubmit = (evento) => {
    evento.preventDefault();
    let diametro = hallarRadio();
    radioCir.textContent = diametro.diametro;
};
