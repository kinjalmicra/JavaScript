// var – Function-scoped, can be re-declared and updated.
// let – Block-scoped, can be updated, but not re-declared.
// const – Block-scoped, cannot be re-declared or updated (constant values).



var x = 10;  // Global/function-scoped
let y = 20;  // Block-scoped
const z = 30; // Block-scoped, cannot be changed

console.log(x, y, z); // Output: 10 20 30


function testScope() {
    var a = "I am var"; // Function-scoped
    let b = "I am let"; // Block-scoped
    const c = "I am const"; // Block-scoped

    if (true) {
        var d = "Var inside block"; // Still accessible outside
        let e = "Let inside block"; // Only inside this block
        const f = "Const inside block"; // Only inside this block
        console.log(e, f); // Accessible
    }

    console.log(d); // Accessible (var is function-scoped)
    // console.log(e, f); // ❌ Error!  e is not defined
}

testScope();


// JavaScript Operators

// Arithmetic Operators
// Used for mathematical calculations:
// + (add), - (subtract), * (multiply), / (divide), % (modulus), ** (exponentiation)

// let a = 10, b = 5;
// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2
// console.log(a % b); // 0
// console.log(a ** b); // 100000



// Comparison Operators
// Used to compare values:
// == (equal), === (strict equal), != (not equal), !== (strict not equal), >, <, >=, <=

// console.log(10 == "10");  // true (checks value, not type)
// console.log(10 === "10"); // false (checks value and type)
// console.log(10 != 5);     // true
// console.log(10 !== "10"); // true
// console.log(10 > 5);      // true
// console.log(10 <= 5);     // false


// Logical Operators
// Used for conditional logic:
// && (AND), || (OR), ! (NOT)

console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false



// Assignment Operators
// Used for assigning values:
// =, +=, -=, *=, /=, %=, **=

let num = 10;
num += 5;  // num = num + 5
console.log(num); // 15



// Create a Simple JavaScript Calculator

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

// Test the calculator
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 0, "/")); // Cannot divide by zero
console.log(calculator(10, 5, "%")); // Invalid operator






