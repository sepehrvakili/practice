

function Kaprekars() {}

Kaprekars.prototype.constant = function(num) {

  var counter = 0;
  if ( num === 6174 ) {
    return counter;
  } else {
    counter += 1;
  }
  var num = num.toString().split('');
  var descArray = num.sort(function(a, b) { return parseInt(b) - parseInt(a) });
  while ( descArray.length < 4 ) {
    descArray.push(0);
  }
  var ascArray = descArray.slice().sort();

  var desc = parseInt(descArray.join(''));
  var asc = parseInt(ascArray.join(''));
  var diff = desc - asc;
  return counter += this.kConstant(diff);

};

// Context:
//
// The function above should be able to take in a num between 1 - 9999 that will return
// the correct output.
//
// Your program should perform the following routine on the number: 
//
// 1. Arrange the digits in descending AND ascending order to fit it to a 4-digit number.
//   a. If num is not a 4-digit number, add zeroes to the end until it is, and then repeat step 1.
//      Example: 1732 becomes 7321 (desc) and 1237 (asc) || 21 becomes 2100 and 0012, etc.
//
// 2. Get the difference of the bigger and smaller number. Repeat step 1 with the difference.
//
// The function should return the number of times this routine must be performed before reaching 6174,
// aka 'Kaprekars Constant'. The reason is 6174 will always result in 6174 with this routine (7641 - 1467 = 6174). 
//
// For example: if num is 3524, your program should return 3 because of the following steps: 
//
// 1st call: 5432 - 2345 = 3087
// 2nd call: 8730 - 0378 = 8352 
// 3rd call: 8532 - 2358 = 6174


/* ------------------------------------------ */

function BlackjackHighest() {}

BlackjackHighest.prototype.hitMe = function(array) {
  
//Write the algorithm in here!

};

// Context: 
//
// Create the hitMe function to take in an array of numbers and letters
// representing blackjack cards which will be written out (eg ['two', 'three']). 
// The array can have any number of cards.
//
// The function should output "below", "above", or "blackjack", signifying
// that all numbers add up to 21, along with the highest card in that set. 
// IE: ["ten, "five", "six"] should output "blackjack ten", because ten is
// the highest in the set. 
//
// If lower than 21, then the output should be below 21, along with the highest
// card in that set. IE: ["eight", "six"] should output "below eight".
//
// If higher than 21, then the output should be above 21, along with the highest
// card in that set. IE: ["three", "four", "queen", "nine"] should output
// "above queen".
//
// If you have multiple face cards, the order from of importance is jack, queen,
// and king, with king being the highest (even though their value in blackjack is 10).
//
// You must account for the ace as well, which in blackjack can be either 1
// or 11. Your ace cannot be 11 if it puts you over 21. If it puts you at exactly
// 21, such as with input ['ace', 'five', 'six'], your output should be 
// "blackjack ace", since ace is your highest card.

/* ------------------------------------------ */

function StockPicker() {}

StockPicker.prototype.highestProfit = function (array) {

//Write the algorithm in here.
         
};

//Context: 
//
//Very straightforward: write a function that will determine the highest profit.
//
//The input will be an array of stock prices for. Using [40, 45, 60] as an example,
//stock price was 40 on day one, 45 on day two, 60 on day three, etc.
//
//Your goal is to calculate the highest profit possible. In the example above,
//the highest profit is 20 because you bought the stock at 40, and then it risen
//to 60. 60 - 40 = 20.
//
//If there is no profit, then return -1. Example of no profit: [5, 4, 3, 2, 1],
//because the stock price kept going down.

/* ------------------------------------------ */