let arregloA = [];
let arregloB = [];
for (let i = 0; i < 50; i++) {
    arregloA.push((Math.random()*99.9).toFixed(2));
}
let arrayA = document.getElementById("arrayA");
console.log(arregloA);
arrayA.innerHTML = arrayA.textContent + arregloA;
arregloA = arregloA.sort((a, b) => a-b);
arregloB = arregloA.slice(0, 10);
arregloB.push(0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
arrayA.innerHTML = arrayA.textContent + " Arreglo A ordenado: " + arregloA;
let arrayB = document.getElementById("arrayB");
console.log(arregloB);
arrayB.innerHTML = arrayB.textContent + arregloB;