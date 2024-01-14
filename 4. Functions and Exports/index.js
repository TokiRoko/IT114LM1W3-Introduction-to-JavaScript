/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name){
    console.log(name);
}

greet("Greetings!");
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: The difference between the two is how they are defined and when they are hoisted.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

const calculateArea = function(length, width){
    return length * width;
}

const rectLength = 4;
const rectWidth = 6;

const area = calculateArea(rectLength, rectWidth);
console.log(`The area of a rectangle is: ${area}`);   

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: a callback function is a function passed as an argument to another function.
/* Example:
function greet(name, callName){
    let fName = "Jack";
    console.log(name);
    callName(fName);
}

function yourName(fullName){
    console.log(fullname);
}

greet("Greetings", yourName)
*/ 

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

//Higher-order function
function modifyArray(arr, modifierFunction){
    return arr.map(modifierFunction);
}

//Example array
let numbers = [1,2,3,4,5];

//Function that increment each element in an array to 1.
function incrementByOne(number){
    return number + 1;
}

let modifiedNumbers = modifyArray(numbers, incrementByOne);

//Displays the original and modified arrays
console.log(`Original Array: ${numbers}`);
console.log(`Modified Array (incremented by 1): ${modifiedNumbers}`);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
// import * as mathUtils from "./mathUtils";

// console.log(mathUtils.add(4, 8));
// console.log(mathUtils.pi);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
// import isPalindrome from "./isPalindrome";

// const word1 = "racecar";
// console.log(`${word1} is a palindrome: ${isPalindrome(word1)}`);
// const word2 = "Hello";
// console.log(`${word2} is a palindrome: ${isPalindrome(word2)}`);


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The require function is used to import modules in CommonJS. The module.exports variable is used to define the public API of a module.
