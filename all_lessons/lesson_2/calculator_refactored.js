const readline = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNumber(number){
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)){
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
}

console.log("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)){
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
}

console.log("Which op doc?\n 1) Add\n 2) Subtract\n 3) Multiply\n 4) Divide ");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
}

let ouput;
switch (operation) {
    case '1':
        output = Number(number1) + Number(number2);
        break;
    case '2':
        output = Number(number1) - Number(number2);
        break;
    case '3':
        output = Number(number1) * Number(number2);
        break;
    case '4':
        output = Number(number1) / Number(number2);
        break;
    }

    console.log(`The result is: ${output}`);
