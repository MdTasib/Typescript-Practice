"use strict";
exports.__esModule = true;
// First way
var variable_1 = require("./variable");
function displayUser() {
    console.log("User - ".concat(variable_1.userName, ", Age - ").concat(variable_1.userAge));
}
// Second way
var variable_2 = require("./variable");
function displayUser() {
    console.log("User - ".concat(variable_2.userAge, ", Age - ").concat(variable_2.userName));
}
// Third way
var user = require("./variable");
function displayUser() {
    console.log("User - ".concat(user.userName, ", Age - ").concat(user.userAge));
}
displayUser();
