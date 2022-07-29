/**
 * interface as types
 */
// Without interface
var users = [];
var user1 = {
    name: "Tasib",
    age: 20
};
var user2 = {
    name: "Rafi",
    age: 24
};
users.push(user1);
users.push(user2);
var displayUser = function (user) {
    console.log("User name ".concat(user.name, " and user age ").concat(user.age));
};
users.forEach(function (user) { return displayUser(user); });
;
var users = [];
var user1 = {
    name: "Tasib",
    age: 20
};
var user2 = {
    name: "Rafi",
    age: 24
};
users.push(user1);
users.push(user2);
var displayUser = function (user) {
    console.log("User name ".concat(user.name, " and user age ").concat(user.age));
};
users.forEach(function (user) { return displayUser(user); });
