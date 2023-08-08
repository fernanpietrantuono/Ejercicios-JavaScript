class Persona {
    constructor(nombre, edad, genero, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.altura = altura;
        this.peso = peso;
    }
}

let listaPersonas = new Set();

/*Extraer datos y asignarlos a un objeto Libro*/
function extraerDatos() {
    const formulario = document.getElementById("formulario");
    let nombre = formulario.elements["nombre"].value;
    let edad = formulario.elements["edad"].value;
    let genero = formulario.elements["genero"].value;
    let altura = formulario.elements["altura"].value;
    let peso = formulario.elements["peso"].value;

    let persona = crearPersona(nombre, edad, genero, altura, peso);
    return persona;
}

/*guardar  persona en un set */
function guardarPersona(persona) {
    const nombreExistente = validarNombre(persona.nombre);
    if (!nombreExistente) {
        listaPersonas.add(persona);
    } else {
        alert(`El usuario con nombre "${persona.nombre}" ya existe en la lista.`);
    }
}

/*validar que la persona no se haya cargado antes*/
function validarNombre(nombre) {
    return Array.from(listaPersonas).some(function (persona) {
        return persona.nombre === nombre;
    });
}

document.getElementById("boton").onclick = Enviar;

/*mostrar los libros almacenados en el set por consola*/
function mostrarPersona(listaPersonas) {
    listaPersonas.forEach(persona => {
        console.log(persona);
    });
}

/*mostrar la libreria por medio de un menú desplegable: select*/
function mostrarLista() {
    let personasSelect = document.getElementById("librosSelect");
    personasSelect.innerHTML = ""; //vacía el menú antes de cargarle el contenido del set
    if (listaPersonas.size > 0) { //si la libreria no está vacía, se muestra.
        listaPersonas.forEach(persona => {
            let opcion = document.createElement("option");
            opcion.textContent = persona.Persona; //muestra el título de los libros en el desplegable
            personasSelect.appendChild(opcion);
        })
    }
}

formulario.onsubmit = (evento) => {
    evento.preventDefault();
    let persona = extraerDatos();
    guardarPersona(persona);
    formulario.reset(); // Borrar los campos
    mostrarPersona(listaPersonas);
    mostrarLista();
    console.log(persona);
};