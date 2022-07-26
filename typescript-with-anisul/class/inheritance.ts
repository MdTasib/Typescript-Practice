/**
 * Inheritance
 */
class User {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  display(): void{
    console.log(`User ${this.name}, age is ${this.age}`);
  }
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

const rafi = new User('Rafi', 24);
rafi.display();

const tasib = new Student('Tasib', 20, 240);
tasib.display();