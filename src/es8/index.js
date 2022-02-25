/*object.entries: Metodo añadido a object,
recibe de parametro un objeto, y nos devuelve un array.
*/

const data = {
    frontend: 'CRCM',
    backend: 'JFMG',
    design: 'Karla',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/*Object.values: Otro metodo de Object, recibe
un objeto como parametro, y devuelve, los valores
de las propiedades del objeto pasado.
*/

const data = {
    frontend: 'CRCM',
    backend: 'JFMG',
    design: 'Karla',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


/*PadEnd: Nos permite rellenar una cadena de texto,
al final de la cadena(Ultimo Caracter)
*/

const string = 'Hello';
console.log(string.padEnd(8,' Hi'));


/*PadStart: Nos permite rellenar una cadena de texto,
al inicio de la cadena(Primer Caracter)
*/
const string = 'Hello';
console.log(string.padStart(8,'Hi '));






// Async Y Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) //Hacer que pase
        ? setTimeout(() => resolve('Hello World'), 3000) //Delay
        : reject(new Error('Test Error'))
    })
   
};


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//New Propuesta de ejecucion: Para manejar correctamente los errores.

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};



















