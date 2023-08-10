/* class Persona {
    constructor(nombre, edad, genero, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.altura = altura;
        this.peso = peso;
    }
}

// let listaPersonas = new Set();

// Extraer datos y asignarlos a un objeto Libro
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



// validar que la persona no se haya cargado antes
function validarNombre(nombre) {
    return Array.from(listaPersonas).some(function (Persona) {
        return persona.nombre === nombre;
    });
}

document.getElementById("boton").onclick = Enviar;

// mostrar los libros almacenados en el set por consola
function mostrarPersona(listaPersonas) {
    listaPersonas.forEach(Persona => {
        console.log(Persona);
    });
}

//mostrar la libreria por medio de un menú desplegable: select
function mostrarLista() {
    let personasSelect = document.getElementById("librosSelect");
    personasSelect.innerHTML = ""; //vacía el menú antes de cargarle el contenido del set
    if (listaPersonas.size > 0) { //si la libreria no está vacía, se muestra.
        listaPersonas.forEach(Persona => {
            let opcion = document.createElement("option");
            opcion.textContent = Persona.Persona; //muestra el título de los libros en el desplegable
            personasSelect.appendChild(opcion);
        })
    }
}

formulario.onsubmit = (evento) => {
    evento.preventDefault();
    let persona = extraerDatos();
    guardarPersona(personaersona);
    formulario.reset(); // Borrar los campos
    mostrarPersona(listaPersonas);
    mostrarLista();
    console.log(Persona);
};

const propiedades = Object.keys(Persona);
var mostrar = propiedades(Persona);
console.log(mostrar);
 */

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

function cargarPersona() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let persona = new Persona(nombre, edad, sexo, altura, peso);
    guardarPersona(persona);
}

/*guardar  persona en un set */
function guardarPersona(persona) {
    const nombreExistente = validarNombre(persona.nombre);
    formulario.addEventListener('submit', validarNombre(nombreExistente));
    if (!nombreExistente) {
        listaPersonas.add(persona);
        alert(`Se ha agregado exitosamente la persona a la lista.`);
    } else {
        alert(`El usuario con nombre "${persona.nombre}" ya existe en la lista.`);
    }
}
document.getElementById("button").onclick = cargarPersona;