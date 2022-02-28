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


/*
Funcion que nos permite trabajar con numeros enteros
Mayores a la 2 a la 253
*/

const aBigNumber = 9007199254740991n; // Para poder usarlo, se debia colocar esa n al final.

const anotherBigNumber = BigInt(9007199254740991); //Segundo Opcion

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// 🤝 Promise All Settled

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3]) //Nos devuelve todas las promesas, despues de que se halla ejecutado.
    .then(response => console.log(response));


// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string'; //Operador Logico: Izquierdo si es null o undefined.
console.log(fooo);

const fooo2 = 'not null' ?? 'default string'; // No seria NUll.
console.log(fooo2)


/* ⛓ Optional chaining: Esta sintaxis te permite acceder a propiedades anidadas
de objetos sin preocuparte de si la propiedad existe o no.
Si no existe la ‘prop’, devuelve “undefined”. */

const x = {
    prop1: {
        prop2: 100
    }
};

//

x.prop1?.prop2

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}

//Otro método de Es11 es matchAll() el cual devuelve un iterador con todos los resultados que coinciden con una expresión regular

const texto = "abcdefg";
const expRegular = /[a-c]/g;
const iterador = texto.matchAll(expRegular);
for (const match of iterador){
	console.log(match);
}
