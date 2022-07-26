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
/**
 * Abstraction
 */
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
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
    return Student;
}(User));
var tasib = new Student('Tasib', 20, 240);
tasib.display();
