/**
 * Function signature
 */
var func1;
var func2;
var func3;
func1 = function () {
    console.log("Hello func1");
};
func2 = function (name) {
    console.log("".concat(name, " is good person"));
};
func3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
func1();
func2("Tasib");
console.log(func3("Rafi", 24));
;
