/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log("First Item: " + numbers[0]);
console.log("Fifth Item: " + numbers[4]);
console.log("Last Item: " + numbers[14]);
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

let min = Math.min(...numbers);
let max = Math.max(...numbers);
let sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log("Smallest number in an array: " + min);
console.log("Biggest number in an array: " + max);
console.log("Total sum in an array: " + sum);

let avg = sum / numbers.length;
console.log("Average: " + avg);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Python lists and JavaScript arrays allow iteration over elements using loops 
// and provide a property to get the number of elements in the collection (len() in Python and length in JavaScript).

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let info = {
    "courseCode": "IT114L",
    "courseName": "Web system of programming",
    "unit": 3,
    "numberOfStudents": 40
};

// console.log(info);
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
let info1 = {
    "courseCode": "IT114L",
    "courseName": "Web system of programming",
    "unit": 3,
    "numberOfStudents": 40,
    "professorName": "Sir Job Lipat"
};

console.log("Professor's name: " + info1.professorName);
// Todo 3.5 Declare an array of objects with information about the courses you are taking this term
// Your code here

let courses = [
    "STRUCTURE OF PROGRAMMING LANGUAGES",
    "ETHICS",
    "WEB SYSTEMS AND TECHNOLOGIES / LAB",
    "SCIENCE, TECHNOLOGY AND SOCIETY",
    "PURPOSIVE COMMUNICATION",
    "DATA STRUCTURES AND ALGORITHMS ANALYSIS"
];

// console.log(courses);

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let units = [2, 3, 3, 3, 2, 1, 3];

let sum_units = units.reduce((accumulate, curr) => accumulate + curr, 0);
console.log("Total Units Combined: " + sum_units);
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: the equivalent when calculating the total is the sum() function. They have their own syntax and methods, but the fundamental idea is the same.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let newNumber = [...numbers, 20];

console.log(newNumber);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

let {courseCode, unit, ...rest} = info;

console.log("Course Code: " + courseCode);
console.log("Unit: " + unit);


