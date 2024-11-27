// Function to check if a number is a Prime Number
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false; 
    }
    return true; 
}

// Variable that is the limit of the prime numbers to print
const limit = 237;
//going over the numbers until we reach the limit and printing each number that is prime
for (let i = 1; i < limit; i++) {
    if (isPrime(i)) {
        console.log(i); 
    }
}