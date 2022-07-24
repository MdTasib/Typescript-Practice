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
var firstName;
var lastName;
var fullName;
var userId;
var isActive;
firstName = "Ohidul Alam";
lastName = " Tasib";
fullName = firstName.concat(lastName);
userId = 20;
isActive = true;
console.log(firstName, userId, isActive, fullName);
console.log(fullName.split(" "));
// Void data type - If the function returns nothing, then this function data type is void.
function message() {
    console.log('Hi Brother!');
}
message();
