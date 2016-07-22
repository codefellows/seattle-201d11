// July 21
// Sam's functions demo

'use strict';

//WHAT IS A FUNCTION?
// Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements). (Duckett, p.88)

// ++++++++++++++++++++++++++++++++++++++++

//Function declaration vs. function call

function woo() {    // This is the function declaration
  alert('Wooooooo!!!!');
  console.log('Wooooooo!!!!');
}

// woo(); // This is a function call

// We'll start with this commented out, then check it in the console, first by entering only the function name 'woo' in the console, then by entering the function call 'woo()' in the console.

// These statements in the function will execute in order. Note that each statement has a semicolon, and that the code block itself does not.

// Note that some functions, like the one above do not need to be provided any information. They either contain the information that they need, or they use information that is available to them. However...

// ++++++++++++++++++++++++++++++++++++++++

// Some functions need information to be passed into them. (p.92)

// In those cases, the functions are declared with PARAMETERS and are called with ARGUMENTS.

// Declared with three parameters
function clue(who, where, weapon) {
  console.log('The murder was committed by ' + who + ' in the ' + where + ' with the ' + weapon + '.');
}

// Called with three arguments
// clue('Munir', 'bathroom', 'CSS');

// We can also call this in the console with different arguments.

// Think of the parameter names as variables that belong only to the function. The names do not have any meaning outside of the function.

// Note that we can also pass in the values of externally declared variables when the function is called:

var murderer = 'Colonel Mustard';
var crimeScene = 'library';
var toolOfDeath = 'candlestick';
//
// clue(murderer, crimeScene, toolOfDeath);

// ++++++++++++++++++++++++++++++++++++++++

// Getting values out of functions (p.94)

// What if we want the function to return information to the code that called it? For that, we use a 'return' statement.

function mathsAreHard(numOne, numTwo, numThree) {
  // console.log('numOne is ', numOne);
  // console.log('numTwo is ', numTwo);
  // console.log('numThree is ', numThree);
  var sum = numOne + numTwo + numThree;
  // console.log('The sum of these numbers is ' + sum);
  return sum;
  // console.log('IF this shows I will give Munir $1000');
}

// console.log(mathsAreHard(2, 5, 9));

// Let's also inspect what each of the following gives us in the console: mathsAreHard, mathsAreHard(), and mathsAreHard(3, -5, Math.PI).

// What if we want multiple values out of a function? Let's create a new version of our previous function that shows that...

function mathsGetHarder(numOne, numTwo, numThree) {
  // numOne = 0;
  var oneTimesTwo = numOne * numTwo;
  var twoOverThree = numTwo / numThree;
  var sum = numOne + numTwo + numThree;
  var results = [sum, oneTimesTwo, twoOverThree];
  // var commanderRiker;
  return results;
  // return 'WHAAAAAAAAA';
}

// var numOne = 99999;
// console.log(mathsGetHarder(9, 5, 3) + ' is the output of mathsGetHarder(9, 5, 3)');

// ++++++++++++++++++++++++++++++++++++++++

// Function Scope (we'll live code through this part)

var dan = 'schwartz'; // GLOBAL

function fire() {
  var katie = 'kayeon'; // LOCAL VARIABLE
  console.log('katie\'s korean name is ' + katie);
  console.log('dan\'s old global name is ' + dan);
  var dan = 'dieter';
  console.log('dan\'s new local name is ' + dan);
  return 'THIS IS THE RETURN STATEMENT OUTPUT';
}
console.log('But, outside of the function, dan\s name is ' + dan);

// function ice(snow) {  // PARAMETERS BEHAVE LIKE LOCALS
//   var t = 'yeah';    // LOCAL VARIABLE
//   return t;
// }
