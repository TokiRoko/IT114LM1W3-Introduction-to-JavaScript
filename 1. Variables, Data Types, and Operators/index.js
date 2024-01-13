/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(name);
var name = "Namae-wa";
console.log(name);
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let name_ex = "Name";

// if (name_ex === "Name"){
//     name_ex = "Harold";
//     console.log(name_ex);
// }
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const number = 10;

// number = 21; It will have an error since the variable has a const and it connot be reassigned unless if you use the let function replacing the const.
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: the difference between the three statements is the functioning of the variables and the reassigning of the variables. They have their own block-scoped functionality with limited access.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
// Assignment Operator
let x = 2;
const y = 10;

// console.log(x);
// Expected Output: 2

// console.log(y);
// Expected Output: 10

// Addition Operator
let a = "Washing";
let b = "ton";
let c = " Machine";

// console.log(a+=c);
// Expected Output: Washing Machine

// Subtract Operator
let num1 = 20;

// console.log(num1 -= 9);
// Expected Output: 11

// Multiplication Operator
let num2 = 4;

// console.log(num1 *= num2);
// Expected Output: 80

//Division Operator
let num3 = 2;

// console.log(num1 /= num3);
//Expected Output: 10

// Checkpoint 1.2 What operators did you use?
// Answer: I use the assignment, addition, subtraction, multiplication and division.
// Your code here
// console.log(a+=c); addition operator
// let x = 2;
// const y = 10; Assignment operators
// console.log(num1 -= 9);
// console.log(num1 *= num2);
// console.log(num1 /= num3);

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

// console.log(a+=b);
// Expected Output: "Washington"
let washington= " D.C.";
let fullName = a + b + washington;
console.log(fullName);
//Expected Output: Washington D.C.

let greetings = "Good Afternoon friends,";
let message = " I am now " + num1 + " years old.";
console.log(greetings + message);
//Expected Output: Good Afternoon friends, I am now 20 years old.


// Checkpoint 1.3 What operators did you use?
// Answer: I only use the addition operator to combine the words.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a1 = true && true; // returns true
const a2 = true && false; // returns false
const a3 = false && false; // returns false
const b1 = true || true; // returns true
const b2 = true || false; // returns true
const b3 = false || false; // returns false
const c1 = !true && false; // returns false
const c2 = !true && !false; // returns false
const c3 = !false || true; // returns true
const c4 = !true || true; // returns true

// Checkpoint 1.4 What operators did you use?
// Answer: AND, OR, and NOR operators


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

const fruits = ["apple", "grapes", "orange", "peach", "blueberry"];

0 in fruits; //returns true
"apple" in fruits; // returns false


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: According to developer.mozilla.org, when comparing an array with a boolean using the loose equal sign,
// it returns to true since we are comparing if the array and the boolean are, for example false, then the console will return a statement which is true.
// but if the equal sign has 3 then it will return to false according to my observation.
// Your code here

const array = [];

console.log(array == false); //returns true
console.log(array === false); //returns false
