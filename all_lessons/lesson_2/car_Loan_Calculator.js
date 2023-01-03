// Overview: This program creates a command line interface monthly mortgage payment calculator
// that dynamically outputs a monthly mortgage payment based on user input.

const readline = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNumber(number){
    return number.trimStart() === '' ||
    Number(number) < 0 ||
    Number.isNaN(Number(number));
}

// Start of interface
console.log("Welcome to the CLI monthly mortgage payment calculator!");

while (true) {

prompt("Please enter your loan amount in numerical format without any commas \n(for example: 10000): ");
let loanAmount = readline.question();
while (invalidNumber(loanAmount)){
    prompt("Hmm... that doesn't look like a valid number.");
    loanAmount = readline.question();
}

prompt("Please enter your annual percentage rate (APR): ");
prompt("(For example: 5 for 5% or 2.5 for 2.5%)");
let interestRate = readline.question();

while (invalidNumber(interestRate)){
    prompt("Hmm... that doesn't look like a valid number.");
    interestRate = readline.question();
}

prompt("Please enter your loan duration in years: ");
let durationYears = readline.question();

while (invalidNumber(durationYears)){
    prompt("Hmm... that doesn't look like a valid number.");
    durationYears = readline.question();
}

let annualInterestRate = Number(interestRate) / 100;
let monthlyRate = annualInterestRate / 12;
let durationMonths = Number(durationYears) * 12;

let monthlyPayment = Number(loanAmount) * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-Number(durationMonths)))));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

prompt("Shall we make another calculation?");
let answer = readline.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "no".');
    answer = readline.question().toLowerCase();
}

if (answer[0] === 'n') break;
}
