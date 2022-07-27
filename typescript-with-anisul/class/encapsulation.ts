/**
 * Encapsulation
 * Access modifiers - ( public, private, protected, readonly )
 * 
 */

class User {
  public name: string;
  readonly age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(`User is ${this.name}, age ${this.age}`);
  };
}

class Student extends User {
  private studentId: number;

  constructor(name: string, age: number, studentId: number){
    super(name, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`Student is ${this.name}, id ${this.studentId}`);
  }

  setStudentId(id: number){
    this.studentId = id;
  }

  getStudentId(): number{
    return this.studentId;
  }
}

const tasib = new Student('Tasib', 20, 240);
tasib.display();

// public property can be the modifier
const rafi = new User("Rafi", 24);
rafi.name = "Shajalal Rafi";

// private property can't access outside
const rakib = new Student("Rakib", 19, 111);
// console.log(rakib.studentId); // Eroror
// So in that case, how can i access and modifi autside?
rakib.setStudentId(222);
console.log("Student Id - ", rakib.getStudentId());

// Readonly
// rafi.age = 40; // Error
console.log(rafi.age)

console.log(rafi);