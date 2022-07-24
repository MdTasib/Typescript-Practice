/**
 * Class - ( 04 )
 * Built in data type
 * 
 * Number
 * String
 * Boolean
 * Void
 * Undefined
 * Null
*/

let firstName: string;
let lastName: string;
let fullName: string;
let userId: number;
let isActive: boolean;

firstName = "Ohidul Alam";
lastName = " Tasib";
fullName = firstName.concat(lastName);
userId = 20;
isActive = true;

console.log(firstName, userId, isActive, fullName);
console.log(fullName.split(" "));

// Void data type - If the function returns nothing, then this function data type is void.
function message(): void{
  console.log('Hi Brother!');
}
message();