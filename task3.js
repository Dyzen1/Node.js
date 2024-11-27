const values = [0, 7, 0, -3, 12, 0, 4, 0, 0, 8]; //  array of numbers 

let zeroCount = 0; // count variable 

for (let index = 0; index < values.length; index++) {
    zeroCount += (values[index] === 0 ? 1:0); // Checking if the number is zero, incrementing count if true
}

console.log(`Number of zeros in the array: ${zeroCount}`); // Updated message
