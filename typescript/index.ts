/*
// function
function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}
const user1: string = fullName('Ohidul', 'Alam');
console.log(user1);

// arrow function
// (1)
let multiply1: (x: number, y: number) => number;
multiply1 = (x, y) => x * y;
console.log(multiply1(5, 6));
// (2)
let multiply2 = (x: number, y: number): number => x * y;
console.log(multiply2(5, 5));

// array
const arr: number[] = [1, 2, 3, 4, 5, 6];
arr.push(7);
console.log(arr);

// object
// (1)
let player: { name: string, age: number };
player = {
    name: 'Tamim',
    age: 35
}
console.log('player : ', player);
// (2)
let club: {
    name: string,
    player: number
} = {
    name: 'FCB',
    player: 19
}
console.log('Club : ', club);

// Interface and use complex parameter type
interface Person {
    name: string,
    age: number,
    programmer: boolean,
    friend?: string
}
const tasib: Person = {
    name: 'tasib',
    age: 19,
    programmer: true,
    friend: 'rafi',
}
console.log(tasib);
const rafi: Person = {
    name: 'rafi',
    age: 22,
    programmer: true,
}
console.log(rafi);
*/

// Type Aliases
// (1)
// const userDetails = (
//     id: string | number,
//     user: {
//         name: string,
//         age: number
//     }
// ) => {
//     console.log(`User id is ${id}, name id ${user.name} and age is ${user.age}`);
// };
// const sayHello = (user: { name: string, age: number }) => {
//     console.log(`Hello ${user.age > 50 ? 'Sir.' : 'Mr.'} ${user.name}`);
// };
// (2)
// type userId = string | number;
// type userInfo = { name: string, age: number };
// const userDetails = (
//     id: userId,
//     user: userInfo,
// ) => {
//     console.log(`User id is ${id}, name id ${user.name} and age is ${user.age}`);
// };
// const sayHello = (user: userInfo) => {
//     console.log(`Hello ${user.age > 50 ? 'Sir.' : 'Mr.'} ${user.name}`);
// };

// Function Signatures
// let myFunc: (x: number, y: number, z: string) => number;
// myFunc = (a: number, b: number, c: string) => {
//     if (c === 'sum') {
//         return a + b;
//     } else {
//         return a - b;
//     }
// }
// console.log(myFunc(10, 5, 'sum'));

// class
// (1)
// class Person {
//     name: string;
//     age: number;
//     country: string;
//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play() {
//         console.log(`${this.name} from ${this.country} is playing..`);
//     }
// }
// const tasib = new Person('tasib', 19, 'bangladesh');
// console.log(tasib);
// tasib.play();
// tasib.name = 'Rafi';
// console.log(tasib);

// class Access Modifiers 
// (2)
// class Person {
//     constructor(
//         private name: string,
//         public age: number,
//         readonly country: string,
//     ) { }
//     play() {
//         console.log(`${this.name} from ${this.country} is playing..`);
//     }
// }
// const tasib = new Person('tasib', 19, 'bangladesh');
// console.log(tasib);
// tasib.play();
// console.log(tasib);

// Generics 
// interface hello<T> {
//     name: string;
//     age: number;
//     data: T;
// }
// const tasib: hello<object> = {
//     name: 'tasib',
//     age: 19,
//     data: {

//     },
// }
// const rafi: hello<string> = {
//     name: 'rafi',
//     age: 19,
//     data: 'hello world',
// }