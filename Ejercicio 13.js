/*Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/

const persona = {
  nombre: "Lionel",
  sexo: "H",
  peso: 78,
  altura: 1.81,
};


for (const clave in persona) {
  const valor = persona[clave];
  console.log(clave + ":", valor);
}