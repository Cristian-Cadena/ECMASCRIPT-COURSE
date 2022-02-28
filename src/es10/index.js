let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)) //Metodo para aplanar arreglos.

let array = [1,2,3,4,5]; 

console.log(array.flatMap (value => [value,value *2])); // Metodo para modificar arreglo y aplanarlo.

let hello = '     Hello World!';
console.log(hello)
console.log(hello.trimStart()); //Permite quitar los espacios al inicio o al final dependiendo de la funcion.

let hello = 'Hello World!     ';
console.log(hello)
console.log(hello.trimEnd()); //Permite quitar los espacios al inicio o al final dependiendo de la funcion.

try {

} catch { //Se puede usar sin necesidad de especificarlo.
    error;
}

let entries = [["name", "oscar"],["age",32]]; //Arreglo
console.log(Object.fromEntries(entries)); //Convertir a Objeto.

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description); //Obtener la descripcion de un elemento de tipo simbolo.

