// First way
import { userAge, userName } from "./variable";

function displayUser():void{
  console.log(`User - ${userName}, Age - ${userAge}`);
}

// Second way
import { userAge as name, userName as age } from "./variable";

function displayUser():void{
  console.log(`User - ${name}, Age - ${age}`);
}

// Third way
import * as user from "./variable";

function displayUser():void{
  console.log(`User - ${user.userName}, Age - ${user.userAge}`);
}

displayUser();