/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const sqrNumbers = numbers.map(num => num * num);
console.log(`Squared Arrays: ${sqrNumbers}`);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(`Even Number Array: ${evenNumbers}`);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((prevVal, currVal) => prevVal + currVal);
console.log(`Sum of all array: ${sum}`);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upperWord = words.map(item => item.toUpperCase());
console.log(`Uppercase: ${upperWord}`);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
words.push("bake"); //example with four letters that pushed in the words array. Hence,  it is false. 
const modifiedWord = words.filter(item => item.length > 4);
console.log(`Modified Words: ${modifiedWord}`);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((prevVal, currVal) => prevVal + currVal, '');
console.log(`Single String: ${concatenatedString}`);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// Map method - It transforms each element of an array by applying a provided function, producing a new array with the transformed values.
// filter method - It creates a new array containing only the elements that satisfy a specified condition defined by a provided function.
// reduce method - reduces an array to a single value by iteratively applying a function to each element, accumulating the result.