const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1));
    [array[first], array[second]] = [array[second], array[first]];
  }
  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }
  return shuffle(deck);
}

function total(cards) {
  // cards == [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log('---------------');
  prompt('Do you want to play again? (y or no)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

while (true) {
  prompt('Welcome to Twenty-One!');

  // declare and initialize vars
  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${total(playerCards)}.`);

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, must enter 'h' or 's'.");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${total(playerCards)}`);
  }

  // dealer turn
  prompt('Dealer turn...');

  while (total(dealerCards) < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards now: ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${total(dealerCards)}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}`);
  }

  // both player and dealer stays - compare cards!
  console.log('============');
  prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
  console.log('===========');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}

/*
function hitOrStay(string) {
  if (string === 'h') {
    hit(playerCardValue)
  } else {
    // continue; // ????
  }
}

function hit(){}
hitOrStay = readline.question()

while (true) {
  console.log("hit or stay");
  let answer = readline.question();
  if (answer === 'stay' || busted())  break;
}

if (busted()) {
  // asked the user to play again
} else {
  console.log("You chose to stay!");
}

function detectWinner(playerScore, dealerScore) {
  if (playerScore > dealerScore) {
    console.log("Player wins!")
  } else if (dealerScore > playerScore) {
    console.log("Dealer wins!")
  } else {
    console.log("It's a tie!")
  }
}

ending
('Would you like to play again? y/n');
let answer = readline.question().toLowerCase()[0];
if (answer !== 'y') break;
*/
/* PEDAC

Start:
- randomly assign two card values to each player & computer;
  - Math.random()
- 1 of 2 computer values is visible to player, 1 is unknown;

"Dealer has: Ace and unknown card
You have: 2 and 8"

Card values
- assign implicit value of 10 to Jack, Queen, King
- program ace worth 2 or 11? 2nd ace worth 2 or 11? 3rd ace?

Player turn:
- player chooses between two options: hit or stay
- hit can continue until total sum of card values > 21

Dealer turn:
- hit until the total is at least 17
- if above, bust, play wins
- if stay

Compare:
- reveal player #, reveal dealer #, accounce winner
*/
// const CARD_SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
// nested array = [['H', '2'], ['S', 'J'], ['D','A']];
