class Person {
  name: string;
  age : number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  display(): void{
    console.log(`Person is ${this.name}. He is ${this.age} years old`);
  }
}

const rafi = new Person("Rafi", 24);
rafi.display();

const rakib = new Person("Rakib", 19);
rakib.display();