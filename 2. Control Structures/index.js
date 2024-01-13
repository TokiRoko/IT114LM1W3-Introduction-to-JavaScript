/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

if (randomNumber > 50){
    console.log("more than fifty.");
}
else{
    console.log("less than fifty.");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here

if (randomNumber % 2 === 0){
    console.log(randomNumber + " It is an even number");
}
else{
    console.log(randomNumber + " It is an odd number");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 === 0){
    console.log("fizz");
}
else if (randomNumber % 5 === 0){
    console.log("buzz");
}
else{
    console.log("fizzbuzz");
}


let toDisplay = randomNumber % 2 === 0 ? "Even":"Odd";
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log(randomNumber + " is " + toDisplay + ".");


console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: A switch statement in JavaScript is used to perform different actions based on different conditions. 
// It provides a way to express multiple branches of conditional logic in a more structured and readable format. 
// You would use switch statements when you have a single expression that you want to evaluate 
// against multiple possible values, and each value corresponds to a different set of actions or outcomes.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i=1; i <= n; i++){
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;

while (i < list.length){
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: In a while loop, the loop condition is evaluated before the loop body is executed. 
// If the condition is false initially, the loop body may not execute at all.
// In a do-while loop, the loop body is executed at least once, and then the condition is evaluated. 
// If the condition is true, the loop body will continue to execute; otherwise, the loop exits.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const value of list) {
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (const value in list) {
    console.log(value);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function(value) {
    console.log(value);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: Use the for...of loop when iterating over values in iterables, for...in when traversing enumerable properties of objects, 
// and the forEach method for a concise way to iterate through elements of arrays.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
}
catch (error){
    console.log("Error:", error.message);
}
finally{
    console.log("Cleaning up resources");
}




