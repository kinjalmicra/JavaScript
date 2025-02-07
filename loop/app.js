// 1. CONDITIONAL STATEMENTS

// Function to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

console.log("Checking numbers:");
checkNumber(10);
checkNumber(-5);
checkNumber(0);

console.log("\n------------------------------\n");

// Switch statement: Checking the day of the week
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Enter a number between 1 and 7.");
    }
}

console.log("Checking day of the week:");
getDayName(3);
getDayName(7);
getDayName(9);

console.log("\n------------------------------\n");

// 2. LOOPS

// (A) FOR LOOP: Print first 10 numbers of Fibonacci sequence
function printFibonacci(n) {
    let a = 0, b = 1;
    console.log("Fibonacci Sequence:");
    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

printFibonacci(10);

console.log("\n------------------------------\n");

// (B) WHILE LOOP: Countdown from 5 to 1
let count = 5;
console.log("Countdown using while loop:");
while (count > 0) {
    console.log(count);
    count--;
}

console.log("\n------------------------------\n");

// (C) DO...WHILE LOOP: Keep asking for a positive number until entered correctly
function getPositiveNumber() {
    let num;
    do {
        num = parseInt(prompt("Enter a positive number: "), 10);
    } while (isNaN(num) || num <= 0);
    console.log(`You entered: ${num}`);
}

// getPositiveNumber();

console.log("\n------------------------------\n");

// 3. ERROR HANDLING

// Function for division with error handling
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        console.log(`Result: ${a / b}`);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Division operation attempted.");
    }
}

console.log("\nTesting division:");
divideNumbers(10, 2);
divideNumbers(8, 0);
