// ## Challenge 2: Change machine (Medium)

// From an amount of money (e.g. [£]14.21) work out what coins are needed to make that amount.
function start(){

var input = Number(prompt(`Please Input Amount To Change:`));
var money = input.toFixed(2); // keep pounds a pence 10.11
var dispencedCoins = {}; //store for dispenced coins
money = money.replace(/[.]/g,""); // removes the decimal so working in pennies so all values correct

if (isNaN(input)) {  // error for is user puts on NaN
  //console.log(input); used for test
  alert ('Sorry this is not a valid number. Please try again. Example input 14.21');
  start();
}


// console.log(money); used for test


//  the objects coins have values for checking
const coins = [
    {name: 'Two Pound', value: 200},
    {name: 'One Pound', value: 100},
    {name: 'Fifty Pence', value: 50},
    {name: 'Twenty Pence', value: 20},
    {name: 'Ten Pence', value: 10},
    {name: 'Five Pence', value: 5},
    {name: 'Two Pence', value: 2},
    {name: 'One Pence', value: 1},
];

//keep track of coin working on
var coinIndex = 0;


// check if money is still to be changed and current coin is not the penny
while (money > 0 && coinIndex < coins.length) {
   // console.log('greater than index');
    var currentCoin = coins[coinIndex];
    // console.log(currentCoin);
    var coinCounter = Math.floor(money / currentCoin.value);
   // console.log(coinCounter);
    dispencedCoins[currentCoin.name] = coinCounter;
    // console.log(dispencedCoins);
    money -= coinCounter * currentCoin.value;
   // console.log(money);
   
   coinIndex++

}


// create output to html
const entries = Object.entries(dispencedCoins)
// console.log(entries)

for (const [money, count] of entries) {
    
    if (count !== 0) {
      var el = document.getElementById('output');
      elChild = document.createElement('li');
      elChild.innerHTML = `We have dispenced ${count} ${money}`;
      console.log(elChild);
      el.appendChild(elChild);
    }
  }

};

start();
//console.log(dispencedCoins);
//console.log(coins[0].value + coins[3].value);