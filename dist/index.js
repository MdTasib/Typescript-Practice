"use strict";
// function
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user1 = fullName('Ohidul', 'Alam');
console.log(user1);
// arrow function
// (1)
let multiply1;
multiply1 = (x, y) => x * y;
console.log(multiply1(5, 6));
// (2)
let multiply2 = (x, y) => x * y;
console.log(multiply2(5, 5));
// array
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
console.log(arr);
// object
// (1)
let player;
player = {
    name: 'Tamim',
    age: 35
};
console.log('player : ', player);
// (2)
let club = {
    name: 'FCB',
    player: 19
};
console.log('Club : ', club);
const tasib = {
    name: 'tasib',
    age: 19,
    programmer: true,
    friend: 'rafi',
};
console.log(tasib);
const rafi = {
    name: 'rafi',
    age: 22,
    programmer: true,
};
console.log(rafi);
