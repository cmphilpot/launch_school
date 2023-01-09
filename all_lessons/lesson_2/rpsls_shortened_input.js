// ask the user for their move
// computer will choose its move
// winner will be displayed
// r = r
// p = ps
// ss = scissors
// l = l
// sp = spock


const readline = require('readline-sync');
VALID_CHOICES = ['r', 'p', 'ss', 'l', 'sp'];

function prompt(msg) {
    console.log(`=> ${msg}`);
}

while (true) {

    prompt(`Best of 5! Choose one: ${VALID_CHOICES.join(', ')}.\n r for rock, p for paper, ss for scissors,\n l for lizard, sp for spock`);
    let choice = readline.question();

    while(!VALID_CHOICES.includes(choice)) {
        prompt("That's not a valid choice.");
        choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

    if ((choice === 'r' && computerChoice === 'ss') ||
        (choice === 'ss' && computerChoice === 'p') ||
        (choice === 'p' && computerChoice === 'r') ||
        (choice === 'sp' && computerChoice === 'r') ||
        (choice === 'sp' && computerChoice === 'ss') ||
        (choice === 'l' && computerChoice === 'p') ||
        (choice === 'l' && computerChoice === 'sp') ||
        (choice === 'r' && computerChoice === 'l') ||
        (choice === 'ss' && computerChoice === 'l') ||
        (choice === 'p' && computerChoice === 'sp')) {

    function tabulateScore(userCount) {
            console.log(`=> ${msg}`);
        }
            let counter = 0;
            let limit = 3;
            while (counter < limit) {
                counter = counter + 1;
            }


    prompt(`You won! ${userCount} out of 5!`);
    } else if ((choice === 'ss' && computerChoice === 'r') ||
        (choice === 'p' && computerChoice === 'ss') ||
        (choice === 'r' && computerChoice === 'p') ||
        (choice === 'r' && computerChoice === 'sp') ||
        (choice === 'ss' && computerChoice === 'sp') ||
        (choice === 'p' && computerChoice === 'l') ||
        (choice === 'sp' && computerChoice === 'l') ||
        (choice === 'l' && computerChoice === 'r') ||
        (choice === 'l' && computerChoice === 'ss') ||
        (choice === 'sp' && computerChoice === 'p')) {
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
