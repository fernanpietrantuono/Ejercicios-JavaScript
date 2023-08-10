const parrafo = document.querySelector(".contenedor");
let texto = parrafo.textContent.split(" ");
let fragmento = [];
for (const palabra of texto) {
    if (palabra.length > 8) {
        fragmento.push(`<span>${palabra}</span>`)
    } else {
        fragmento.push(palabra);
    }
}
parrafo.innerHTML = fragmento.join(" ");