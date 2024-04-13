// Function to generate a random number between 1 to 50
function generateRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

// Function to create a promise
function generateRandomNumberPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 5 === 0) {
            resolve(randomNumber);
        } else {
            reject(new Error("Number is not a multiple of 5"));
        }
    });
}

// Consume the promise object
generateRandomNumberPromise()
    .then((result) => {
        console.log("Success! Random number is:", result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

/*----------output----------- 
Error: Number is not a multiple of 5
Success! Random number is: 25
*/