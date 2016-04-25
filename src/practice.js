function Practice() {
}

Practice.prototype.kConstant = function(num) {

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



/*
Context:

The function above should be able to take in a num between 1 - 9999 that will return
the correct output.

Your program should perform the following routine on the number: 

1. Arrange the digits in descending AND ascending order to fit it to a 4-digit number.
  a. If num is not a 4-digit number, add zeroes to the end until it is, and then repeat step 1.
     Example: 1732 becomes 7321 (desc) and 1237 (asc) || 21 becomes 2100 and 0012, etc.

2. Get the difference of the bigger and smaller number. Repeat step 1 with the difference.

The function should return the number of times this routine must be performed before reaching 6174,
aka 'Kaprekars Constant'. The reason is 6174 will always result in 6174 with this routine (7641 - 1467 = 6174). 

For example: if num is 3524, your program should return 3 because of the following steps: 

1st call: 5432 - 2345 = 3087
2nd call: 8730 - 0378 = 8352 
3rd call: 8532 - 2358 = 6174

*/