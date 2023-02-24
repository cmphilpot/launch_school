const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MAX_SCORE = 5;
const UP_FIRST = { choose: ' ' };
const scoreboard = {
  Player: {
    wins: 0,
    ties: 0
  },
  Computer: {
    wins: 0,
    ties: 0
  }
};

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function greeting() {
  console.clear();
  prompt('Welcome to Tic Tac Toe! \n It is you vs the computer. \n First to 5 wins! \n Press any key to start playing!');
  readline.question();
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

let getFirstPlayer = () => {
  prompt('Select who goes first: type "p" for Player, type "c" for Computer');
  UP_FIRST.choose = readline.question().toLowerCase()[0];

  if (UP_FIRST.choose === "p") {
    return 'Player';
  } else if (UP_FIRST.choose === "c") {
    return 'Computer';
  }
};

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'p') {
    playerChoosesSquare(board);
  }
  if (currentPlayer === 'c') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'p') return 'c';

  return 'p';
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function computerChoosesSquare(board) {
  let square;
  // offense
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  // pick square #5
  if (!square) {
    square = emptySquares(board)[5];
  }

  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;

}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  let WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

greeting();
getFirstPlayer();
let currentPlayer = UP_FIRST.choose;

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  function currentScore(scoreboard) {
    if (detectWinner(board) === "Player") {
      scoreboard.Player.wins++;
    } else if (detectWinner(board) === "Computer") {
      scoreboard.Computer.wins++;
    } else if (detectWinner(board) === null) {
      scoreboard.Player.ties++;
      scoreboard.Computer.ties++;
    }
    console.log(scoreboard);
  }

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  currentScore(scoreboard);

  if (scoreboard.Player.wins === MAX_SCORE) {
    prompt('Congrats! You win!');
  } else if (scoreboard.Computer.wins === MAX_SCORE) {
    prompt('Too bad, the computer wins...');
    break;
  }

  prompt('Play again? y/n');
  let answer;
  while (true) {
    answer = readline.question().toLowerCase();
    if (answer !== 'y' && answer !== 'n') prompt('Please enter either "y" or "n"');
    else break;
  }
  if (answer === 'n') break;
}


prompt('Thanks for playing Tic Tac Toe!');
