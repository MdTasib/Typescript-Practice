/**
 * Abstraction
 */
 abstract class User {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  abstract display(): void;
}

class Student extends User {
  studentId: number;
  constructor(name: string, age: number, studentId: number){
    super(name, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(`Student is ${this.name}, id ${this.studentId}`);
  }
}

const tasib = new Student('Tasib', 20, 240);
tasib.display();