// Array of Object
let arrayOfObject: Object[];
arrayOfObject = [{name: "Tasib"}, {name: "Rafi"}];
// arrayOfObject = {name: "Tasib"} // Error
console.log(arrayOfObject);

// Object
let obj: Object;
obj = {
  userName: 'Tasib',
  userId: 101,
}
console.log(obj);

// user object
let user1: {userName: string, userId: number};
user1 = {
  userName: 'Tasib',
  userId: 101
}
// let user2: {userName: string, userId?: number};
// user2 = {
//   userName: 'Tasib',
// }
console.log(user1);

