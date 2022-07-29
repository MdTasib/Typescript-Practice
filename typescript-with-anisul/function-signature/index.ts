/**
 * Function signature
 */

let func1: () => void;
let func2: (name: string) => void;
let func3: (name: string, age: number) => string;

func1 = () => {
    console.log("Hello func1");
}
func2 = (name: string) => {
    console.log(`${name} is good person`);
}
func3 = (name: string, age: number) => {
 return `${name} is ${age} years old`;
}

func1();
func2("Tasib");
console.log(func3("Rafi", 24));;