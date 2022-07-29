/**
 * interface as types
 */

// Without interface
const users: {name: string, age: number}[] = [];

const user1: {name: string, age: number} = {
    name: "Tasib",
    age: 20
};

const user2: {name: string, age: number} = {
    name: "Rafi",
    age: 24
};

users.push(user1);
users.push(user2);

const displayUser = (user: {name: string, age: number}) => {
    console.log(`User name ${user.name} and user age ${user.age}`);
}

users.forEach(user => displayUser(user));

// With interface
interface User {name: string, age: number};

const users: User[] = [];

const user1: User = {
    name: "Tasib",
    age: 20
};

const user2: User = {
    name: "Rafi",
    age: 24
};

users.push(user1);
users.push(user2);

const displayUser = (user: User) => {
    console.log(`User name ${user.name} and user age ${user.age}`);
}

users.forEach(user => displayUser(user));