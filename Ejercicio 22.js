const fraseria = ["Goodbye, goodbye, goodbye, you were bigger than the whole sky", "Time slows down, whenever you're around", "It's me, hi, and the problem it's me, at teatime everybody agrees", "Hey, it's all me, in my head, I'm the one who burn us down, but it's not what I meant, sorry that I hurt you", "I don't trust nobody and nobody trusts me, I'll be the actress starring in your bad dreams", "Say you'll remember me, standin' in a nice dress, starin' at the sunset babe", "I don't know 'bout you, but I'm feelin' 22"];

function ejecutar() {
    const indiceAleatorio = Math.floor(Math.random() * fraseria.length);
    const fraseSeleccionada = fraseria[indiceAleatorio];
    document.getElementById("informacion").textContent = fraseSeleccionada;
}

document.getElementById("button").onclick = ejecutar;