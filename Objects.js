// Objects can be created using two methods.

/*
    1. Object Literals Method
    2. Constructor Method (Contains singleton object)
*/

// 1. Object Literals
const user = {
    name: "Naman",
    age: 22,
    email: "nam@ggg.com",
    "location prefer": "Bng",
    attendance: true
}

// Printing the values has two methods

// 1.1
console.log(user.name);
/* 
    The above method cannot be used if the "key" has space between the words.
    For eg, see below method;
*/

// 1.2
console.log(user["location prefer"]);



// Using Symbol Datatype
const sym = Symbol("key1");

const test = {
    name: "Naman",
    age: 22,
    email: "nam@ggg.com",
    [sym]: "Mykey1", // Syntax for using Symbol
    "location prefer": "Bng",
    attendance: true
}

console.log(test[sym]); // Syntax for printing Symbol

console.log(user);
console.log(test);