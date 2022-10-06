// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:


const saludar = () => { return "hola" };
console.log(saludar())

// Convierte la siguiente función en una función flecha en línea:

const division = (a, b) => { return a / b }
console.log(division(6, 3))

// Convierte la siguiente función en una función flecha:



const miNombre = (nombre) => { return `Mi nombre es ${nombre}` }
console.log(miNombre())

// Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }

const test2 = () => console.log("Función test 2 ejecutada.");

// / function test1(callback) {
//   callback();
// }

const test1 = (callback) => callback();
test1(test2);





let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];


//   / Crea un array con la gente mayor de 25 años y muéstralo por consola.


const genteMayor25 = gente.map((per)=>{
    if(per.edad > 25){
        return per
    }
})

console.log(genteMayor25)

const olderThan25 = gente.filter(persona => persona.edad > 25)

console.log(olderThan25);

// Foreach

let mayores25 = []

gente.forEach((person) => {
    if(person.edad > 25){
        mayores25.push(person)
    }
});

console.log(mayores25)


// 4. Filter


// Crea un array con la gente que empieza por J. 

const conJ = gente.filter(persona => persona.nombre.startsWith("J"))
console.log(conJ)





// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const numbersElevado = numbers.map(number => { return number ** number })
console.log(numbersElevado)

// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:


const numeros = [39, 2, 4, 25, 62];
const numberMulti = numeros.reduce((a, b) => a * b)
console.log(numberMulti)

  








    



























































   


