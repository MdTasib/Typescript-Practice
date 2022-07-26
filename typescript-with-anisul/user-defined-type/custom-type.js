var users = []; // Accept Array of object - [{}, {}, {}];
var user1 = {
    name: 'Tasib',
    id: 101
};
users.push(user1);
var user2 = {
    name: 'Rafi',
    id: 102
};
users.push(user2);
console.log(users);
var getRequest = "GET";
// let getRequest: RequestType = "DELETE"; // Error - Because Type '"DELETE"' is not assignable to type 'RequestType'. only use GET, POST.
function requestHandler(request) {
    console.log(request);
}
requestHandler("GET");
// requestHandler("PUT"); // Error
