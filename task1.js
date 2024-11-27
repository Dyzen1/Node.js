// Random number
const num = 1;


const DivBy2 = Number(num % 2 === 0);
const DivBy3 = Number(num % 3 === 0);
const DivBy5 = Number(num % 5 === 0);


const answer = DivBy2 + DivBy3 + DivBy5;

// Print the result based on the conditions
(answer === 1 && console.log("The number is divisible by only one number."));
(answer === 2 && console.log("The number is divisible by two numbers."));
(answer === 3 && console.log("The number is divisible by all three numbers."));
(answer === 0 && console.log("The number is not divisible by 2, 3, or 5."));