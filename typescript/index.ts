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
