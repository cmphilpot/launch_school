// ask the user for their move
// computer will choose its move
// winner will be displayed

const readline = require('readline-sync');
VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(msg) {
    console.log(`=> ${msg}`);
}

while (true) {

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while(!VALID_CHOICES.includes(choice)) {
        prompt("That's not a valid choice.");
        choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

    if ((choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'scissors' && computerChoice === 'paper') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'spock' && computerChoice === 'rock') ||
        (choice === 'spock' && computerChoice === 'scissors') ||
        (choice === 'lizard' && computerChoice === 'paper') ||
        (choice === 'lizard' && computerChoice === 'spock') ||
        (choice === 'rock' && computerChoice === 'lizard') ||
        (choice === 'scissors' && computerChoice === 'lizard') ||
        (choice === 'paper' && computerChoice === 'spock')) {
    prompt("You won!");
    } else if ((choice === 'scissors' && computerChoice === 'rock') ||
        (choice === 'paper' && computerChoice === 'scissors') ||
        (choice === 'rock' && computerChoice === 'paper') ||
        (choice === 'rock' && computerChoice === 'spock') ||
        (choice === 'scissors' && computerChoice === 'spock') ||
        (choice === 'paper' && computerChoice === 'lizard') ||
        (choice === 'spock' && computerChoice === 'lizard') ||
        (choice === 'lizard' && computerChoice === 'rock') ||
        (choice === 'lizard' && computerChoice === 'scissors') ||
        (choice === 'spock' && computerChoice === 'paper')) {
    prompt("Computer wins!");
    } else {
        prompt("It's a tie!");
    }

    prompt("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();

    while(answer[0] !== 'y' && answer[0] !== 'n') {
        prompt("Please enter 'y' or 'n'");
        answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y')
    break;
}
