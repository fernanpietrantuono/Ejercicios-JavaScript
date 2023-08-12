class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const formulario = document.getElementById("form1");

function extraeDatos() {
    let nombre = formulario.elements["nombre"].value;
    let apellido = formulario.elements["apellido"].value;
    console.log("Nombre = " + nombre.trim() + "\nApellido = " + apellido.trim());
    return new Persona(nombre, apellido);
}

formulario.onsubmit = (evento) => {
    evento.preventDefault();
    let persona = extraeDatos();
    nombrePersona.textContent = persona.nombre;
    apellidoPersona.textContent = persona.apellido;
};