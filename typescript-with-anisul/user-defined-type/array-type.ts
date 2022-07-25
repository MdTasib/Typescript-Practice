/**
 * 
 * class ( 06 )
 * Array Data Type
 * 
 */

// let userNames: string[];
let userNames: Array<string>;

userNames = ['Ohidul', "Alam", "Tasib"];
// userNames = [20, "Alam", "Tasib"]; // Error

console.log(userNames[0]);

// Array multiply types
let multiplyTypes: (string | number)[];
multiplyTypes = ["Tasib", "Rafi", 100];

console.log(multiplyTypes);
console.log(multiplyTypes.sort());

multiplyTypes.push("Mohammad");
console.log(multiplyTypes);
