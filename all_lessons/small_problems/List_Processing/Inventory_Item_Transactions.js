// Write a function that takes two arguments,
// an inventory item ID and a list of transactions,
// and returns an array containing only the transactions
// for the specified inventory item.

/*
PEDAC

input = 2 arguments; ID, listOfTransactions
output = array of id specific transactions

thoughts:
outputArr = []; / iterate through array of objects / .map()

OR, just filter objects whose key === 101
return id.101

let desiredTransaction = [101];
let filteredTransactions = Object.keys(transactions)
      .filter(key => desiredTransaction.includes(101))

*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
{ id: 105, movement: 'in',  quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in',  quantity: 12 },
{ id: 103, movement: 'out', quantity: 20 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in',  quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in',  quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 }, ];


console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


/*

first attempt:

function transactionsFor() {
  let desiredTransaction = [101];
  let filteredTransactions = Object.values(transactions)
        .filter(value => desiredTransaction.includes(101))
        .reduce((obj, value) => {
          obj[value] = transactions[value];
          return obj;
      }, {});
}

let desired = {['id']};

let filtered = Object.keys(transactions)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = raw[key];
    return obj;
  }, {});


  function removePropFromObject(obj, prop) {
  const { [prop]: _, ...rest } = obj;
  return { ...rest };
}


// console.log(transactions);
console.log(Object.values(transactions));
transactions.forEach(index,)

*/
