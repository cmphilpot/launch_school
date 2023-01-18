function displayBoard() {
console.log("");
console.log('     |     |');
console.log(` ${board['1']}   |     |`);
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log(` ${board['4']}   |     |`);
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log('     |     |');
console.log('     |     |');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = ' ';
  }

  return board;
}

let board = initializeBoard();

displayBoard(board);
