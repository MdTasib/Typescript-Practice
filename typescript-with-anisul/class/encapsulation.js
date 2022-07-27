/**
 * Encapsulation
 * Access modifiers - ( public, private, protected, readonly )
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("User is ".concat(this.name, ", age ").concat(this.age));
    };
    ;
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Student is ".concat(this.name, ", id ").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (id) {
        this.studentId = id;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
var tasib = new Student('Tasib', 20, 240);
tasib.display();
// public property can be the modifier
var rafi = new User("Rafi", 24);
rafi.name = "Shajalal Rafi";
// private property can't access outside
var rakib = new Student("Rakib", 19, 111);
// console.log(rakib.studentId); // Eroror
// So in that case, how can i access and modifi autside?
rakib.setStudentId(222);
console.log("Student Id - ", rakib.getStudentId());
// Readonly
// rafi.age = 40; // Error
console.log(rafi.age);
console.log(rafi);
