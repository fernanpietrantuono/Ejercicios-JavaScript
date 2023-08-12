class Persona {
    constructor(nombre, edad, sexo, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
    }
}

const formulario = document.getElementById("formPers");

function cargarPersona() {
    let nombre = formulario.elements["nombre"].value;
    let edad = formulario.elements["edad"].value;
    let sexo = formulario.elements["sexo"].value;
    let altura = formulario.elements["altura"].value;
    let peso = formulario.elements["peso"].value;
    console.log("Nombre: " + nombre.trim() + "\nEdad: " + edad.trim() + "\nSexo: " + sexo.trim() + "\nAltura: " + altura.trim() + "\nPeso: " + peso.trim());
    return new Persona(nombre, edad, sexo, altura, peso);
}

formulario.onsubmit = (evento) => {
    evento.preventDefault();
    let persona = cargarPersona();
    nombrePersona.textContent = persona.nombre;
    edadPersona.textContent = persona.edad;
    sexoPersona.textContent = persona.sexo;
    alturaPersona.textContent = persona.altura;
    pesoPersona.textContent = persona.peso;
};