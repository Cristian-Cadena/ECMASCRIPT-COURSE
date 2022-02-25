//Operador de reposo --- 
// REST/SPREAD PROPERTIES

const obj = {
    ame: 'CRCM',
    age: 25,
    country: 'CO'
};

let { ame, ...all} = obj;
console.log(ame, all);

//Propagation Properties: Unir 2 Objetos.

const obj = {
    name: 'CRCM',
    age: 25
}

const obj1 = {
    ...obj,
    country: 'CO'
}

console.log(obj1);

//Promise Finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));


// Regex

 const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
 const match = regexData.exec('2018-04-28');
 const { year, month, day } = match.groups; //Aceden a un objeto.
//  const year = match[1];
//  const month = match[2];
//  const day = match[3];
 console.log('Date -> ', year, month, day);



