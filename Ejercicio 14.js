function Libro(ISBN, titulo, autor, numPag) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
}
function CargarLibro() {
    let ISBN = document.getElementById("isbn").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let numPag = document.getElementById("paginas").value;
    let libro = new Libro(ISBN, titulo, autor, numPag);
    mostrarLibro(libro);
}
function mostrarLibro(libro) {
    document.getElementById("informacion").innerHTML = `<p>${libro.ISBN}</p><p>${libro.titulo}</p><p>${libro.autor}</p><p>${libro.numPag}</p>`;
}
document.getElementById("button").onclick = CargarLibro;