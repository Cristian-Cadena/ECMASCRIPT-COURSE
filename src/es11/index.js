/* 
Llamado dinamico: Forma de hacer llamado de una funcion;
Nos sirve para mejorar la sintaxis de desarrollo.
Y trabajar con codigos independientes.
*/

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const modulo = await import("./file.js");
    modulo.hello();
});