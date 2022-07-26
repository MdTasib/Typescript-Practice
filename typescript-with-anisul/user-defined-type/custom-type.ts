// First Example
type User =  {name: string, id: number};
let users:User[] = []; // Accept Array of object - [{}, {}, {}];

let user1:User = {
  name: 'Tasib',
  id: 101
}
users.push(user1);

let user2: User = {
  name: 'Rafi',
  id: 102
}
users.push(user2);

console.log(users);

// Second Example
type RequestType = "GET" | "POST";

let getRequest: RequestType = "GET";
// let getRequest: RequestType = "DELETE"; // Error - Because Type '"DELETE"' is not assignable to type 'RequestType'. only use GET, POST.

function requestHandler(request: RequestType){
  console.log(request);
}
requestHandler("GET");
// requestHandler("PUT"); // Error