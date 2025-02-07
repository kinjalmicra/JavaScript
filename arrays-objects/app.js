// Array Methods

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push 
numbers.push(11);
console.log("After push:", numbers);

// pop 
numbers.pop();
console.log("After pop:", numbers);

// Filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Mapp
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// Find
let firstGreaterThanFive = numbers.find(num => num > 5);
console.log("First number greater than 5:", firstGreaterThanFive);

// Slice
let firstFiveNumbers = numbers.slice(0, 5);
console.log("First five numbers:", firstFiveNumbers);

// included
let includesSeven = numbers.includes(7);
console.log("Includes 7:", includesSeven);

// some
let someGreaterThanEight = numbers.some(num => num > 8);
console.log("Some numbers are greater than 8:", someGreaterThanEight);


// Object 

// Creating an object
let person = {
    name: "Alice",
    age: 25,
    city: "New York",
    job: "Software Engineer"
};

// Function to print all key-value pairs
function printObjectDetails(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Calling the function
printObjectDetails(person);


// Loop Arrays and Objects

// Looping through an array using forEach
console.log("Looping through array:");
numbers.forEach(num => console.log(num));

// Looping through an array using for...of
console.log("Looping through array using for...of:");
for (let num of numbers) {
    console.log(num);
}

// Looping through an object using for...in
console.log("Looping through object:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
