/*******************************************
    Iteration 1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let concatenatedSentence = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string
console.log(concatenatedSentence);

/*******************************************
    Iteration 2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const camelTailedPart1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const camelTailedPart2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const camelTailedWord = camelTailedPart1 + camelTailedPart2;

// Print the cameLtaiL-formatted string

console.log(camelTailedWord);

/*******************************************
    Iteration 3 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * (15 / 100);

// Print out the tipAmount
console.log(tipAmount);

/*******************************************
    Iteration 4 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomInteger = Math.floor(Math.random() * 10) + 1;

// Print the generated random number

console.log(randomInteger);

/*******************************************
    Iteration 5 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // ==> false
console.log(expression1);

const expression2 = a || b; // ==> true
console.log(expression2);

const expression3 = !a && b; // ==> false
console.log(expression3);

const expression4 = !(a && b); // ==> true
console.log(expression4);

const expression5 = !a || !b; // ==> true
console.log(expression5);

const expression6 = !(a || b); // ==> false
console.log(expression6);

const expression7 = a && a; // ==> true
console.log(expression7);
