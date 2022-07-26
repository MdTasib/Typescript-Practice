var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("Person is ".concat(this.name, ". He is ").concat(this.age, " years old"));
    };
    return Person;
}());
var rafi = new Person("Rafi", 24);
rafi.display();
var rakib = new Person("Rakib", 19);
rakib.display();
