const username: string | number = 'nicobytes';

const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 3);

// Otro truco para las funciones en typescript es que pueden especificar que tipo de dato van a devolver de manera explicita
// despues de los parametros y antes de las flechas de la arrow function
const suma = (a: number, b: number): number => a + b;
const saludar = (nombre: string, edad: number): string =>
  `Hola me llamo ${nombre} y tengo ${edad} años`;

//POO
// class Person {
//   age: number;
//   private lastName: string;

//   constructor(age: number, lastname: string) {
//     this.age = age;
//     this.lastName = lastname;
//   }
// }

class Person {
  constructor(public age: number, private lastname: string) {}
}

const nico = new Person(15, 'Molina');
console.log(nico.age);
