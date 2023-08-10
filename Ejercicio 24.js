function hallarRadio() {
    const radio = diametro/2;
    document.getElementById("informacion").textContent = radio;
}
document.getElementById("button").onclick = hallarRadio;