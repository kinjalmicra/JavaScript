function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("siri")); // Output: Hello, siri!


// Function Expression
// A function assigned to a variable (not hoisted).

const greetExpression = function(name) {
    return "Hello, " + name + "!";
};

console.log(greetExpression("Kinjalmicra")); // Output: Hello, Kinjalmicra!


// Function Declaration
function addNumbers(a, b) {
    return a + b;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(addNumbers(5, 10)); // Output: 15
console.log(add(5, 10)); // Output: 15
console.log(addArrow(5, 10)); // Output: 15



// Higher-Order Function with Callback

// Higher-order function
function operate(a, b, callback) {
    return callback(a, b);
}

// Callbacks for different operations
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;

// Using the higher-order function
console.log(operate(5, 10, addNumbers)); // Output: 15
console.log(operate(5, 10, multiply)); // Output: 50
console.log(operate(5, 10, subtract)); // Output: -5
