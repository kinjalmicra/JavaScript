// function delayedOperation(message, delay, callback) {
//     setTimeout(() => {
//         callback(message);
//     }, delay);
// }

// delayedOperation("Hello, this is delayed!", 2000, (msg) => {
//     console.log(msg);
// });

// **********************************************

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3");
//         callback();
//     }, 1000);
// }

// // Nested Callbacks (Callback Hell)
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });

// ******************************************************

// Creating and Using a Promise

// function delayedOperationPromise(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// }

// delayedOperationPromise("Hello, this is delayed with a Promise!", 2000)
//     .then((msg) => console.log(msg))'
//     .catch((error) => console.error(error));

// ***********************************************************************

// Chaining Promises (Avoid Callback Hell)

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1");
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2");
//       resolve();
//     }, 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3");
//       resolve();
//     }, 1000);
//   });
// }

// // Chaining Promises
// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => console.log("All steps completed"));

// *************************************************************************************

// Async/Await

// async function delayedOperationAsync(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// }

// async function executeAsync() {
//     try {
//         const message = await delayedOperationAsync("Hello, this is async/await!", 2000);
//         console.log(message);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Example usage:
// executeAsync();

// *****************************************************************************************

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
}

// Example usage:
fetchData();


// ***********************************************************

async function getUserDataAsync(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = { id, name: "John Doe" };
            resolve(user);
        }, 1000);
    });
}

async function displayUserData() {
    try {
        const user = await getUserDataAsync(1);
        console.log("User fetched (Async/Await):", user);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage:
displayUserData();



