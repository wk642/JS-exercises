// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".
function exercise1(num1) {
  let answer1 = "";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
  // just using this to make sure we are in the function
  console.log("In exercise1 function");
  // make sure num1 is passed in correctly
  console.log("num1 is : " + num1);
  // First reassign the value of `answer1` so that it has the value of: "num1 is small"
  answer1 = "num1 is small";
  // Write an if statement that checks if a variable `num1` is greater than 10.
  if(num1 > 10){
      // If it is, then within your if statement code change the value of answer1 so that its new value would be a string that says: "The value of num1 is <num1 value> and is greater than 10".
      answer1 = "The value of num1 is " + num1 + " and is greater than 10";
  }
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  return answer1;
}
/* test case for exercise1
exercise1(23); */

// EXERCISE 2.
// Write an if/else conditional statement that if given a number will assign
// a string value of:
// "<num2 value> is even" to `answer2`,
// if `num2` is even
// and a value of "<num2 value> is odd" to `answer2`,
// if `num2` is odd.
// ie. if num2 has a value of 4 then the message should read:
// "4 is even"
function exercise2(num2) {
  let answer2;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // Write an if/else conditional statement that if given a number will assign a string value of: "<num2 value> is even" to `answer2`,

  // if `num2` is even and a value of "<num2 value> is odd" to `answer2`,
  if ( num2 % 2 !== 0 ){
    answer2 = ( num2 + " is odd" );
  } else if ( num2 % 2 === 0 ){
    // if `num2` is odd. ie. if num2 has a value of 4 then the message should read: "4 is even"
    answer2 = ( num2 + " is even" );
  }

  //log answer2 to confirm
  console.log(answer2);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer2;
}
/* test cases for exercise2
exercise2(1);
exercise2(4); */

// EXERCISE 3.
// Write an if/else if/else block such that if `num3` is positive, then
// answer3 is assigned the string value of:
// "<num3 value> is positive"
// if `num3` is negative, then the value should be:
// "<num3 value> is negative"
// otherwise if the value is zero it should return
// "<num3 value> is zero"

function exercise3(num3) {
  console.log("In function2");

  let answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // Write an if/else if/else block such that if `num3` is positive, 
  if ( num3 > 0 ) {
    // then answer3 is assigned the string value of:
    // "<num3 value> is positive"
    answer3 = (num3 + " is positive");
  } else if ( num3 < 0 ){
    // if `num3` is negative, then the value should be:
    // "<num3 value> is negative"
    answer3 = (num3 + " is negative");
  } else {
    answer3 = (num3 + " is zero");
  }
  //log out answer3 to make sure it works
  console.log(answer3);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer3;
}
/* test cases for exercise3
exercise3(1);
exercise3(3);
exercise3(-3);
exercise3(0); */

// EXERCISE 4.
// Write an if/else statement such that if `varA` and `varB` are strings or
// numbers and they have equal values, then change the value of answer4 to
// "varA and varB are equal"
// otherwise assign a value of "varA and varB differ"

function exercise4(varA, varB) {
  let answer4;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // Write an if/else statement such that if `varA` and `varB` are strings or numbers and they have equal values,
  if ( varA == varB ) {    
    // then change the value of answer4 to "varA and varB are equal"
    answer4 = ("varA and varB are equal");
  } else {
    // otherwise assign a value of "varA and varB differ"
    answer4 = ("varA and varB differ");
  }
  //log answer4 to confirm 
  console.log(answer4);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer4;
}
/* test cases for exercise 4 
exercise4(10, "10");
exercise4(1, 4);
exercise4("six", 6);
exercise4("five", 2);*/

// EXERCISE 5.
// In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// seemed like they are equal, but would not pass the tests? In your analysis
// consider other data types beside strings and variables.
//At first I thought that six and 6 would still be considered as the same, but it was different instead. 

// EXERCISE 6.
// Here, assign the value of true to answer6 if:
// `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
// Here, assign the value of true to answer6 if:
  // `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
  if ( varA === varB && varA != varC && varB != varC ){
    answer6 = true;
  } else {
    // in the event this is not the case, change the value of answer6 to false
    answer6 = false;
  }
  console.log(answer6)
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer6;
}
/* test cases for exercise6
exercise6( 1, 2, 4 );
exercise6( 2, 2, 3 );
exercise6( 2, 3, 2 );
exercise6( 2, 3, 3 ); */

// EXERCISE 7.
// Use a switch conditional statement with case clauses such that if `num7` is
// a number and it has a value of 1 that `answer7` is assigned the string:
// "You won!"
// if num7 is 7, then answer7 should be:
// "You are lucky!"
// if num7 is 101, then answer7 should be:
// "Welcome to coding 101!"
// if num7 is 1000000, then answer7 should be:
// "You are one in a million!"
// Othewise, assign answer7 a value of:
// "Thanks for that!"

function exercise7(num7) {
  let answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // Use a switch conditional statement with case clauses such that if `num7` is
  switch ( num7 ){
    // a number and it has a value of 1 that `answer7` is assigned the string: "You won!"
    case ( num7 = 1 ):
      answer7 = "You won!";
      break;

    // if num7 is 7, then answer7 should be: "You are lucky!"
    case ( num7 = 7 ):
      answer7 = "You are lucky!";
      break;
      
    // if num7 is 101, then answer7 should be: "Welcome to coding 101!"
    case ( num7 = 101 ):
      answer7 = "Welcome to coding 101!";
      break;
      
    // if num7 is 1000000, then answer7 should be: "You are one in a million!"
    case ( num7 = 1000000 ):
      answer7 = "You are one in a million";
      break;

    // Othewise, assign answer7 a value of: "Thanks for that!"
    default: 
      answer7 = "Thanks for that!";
      break;
  }
  console.log(answer7);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer7;
}
/* test cases for exercise 7 
exercise7(1);
exercise7(7);
exercise7(101);
exercise7(1000000);
exercise7("one");
exercise7(3); */

// EXERCISE 8.
// Using any conditional assign the value of true to answer8 if:
// the values of amount1 and amount2 are between the values of
// minimum and maximum
// if not, assign a value of false to answer8
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // Using any conditional assign the value of true to answer8 if: the values of amount1 and amount2 are between the values of minimum and maximum
  if ( amount1 < maximum && amount1 > minimum && amount2 < maximum && amount2 > minimum){
    answer8 = true;
  } else{
    answer8 = false;
  }
  //logging answer8 to confirm
  console.log(answer8);
  // if not, assign a value of false to answer8
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer8;
}
/* test cases exercise8
exercise8(1, 3, 0, 6);
exercise8(1234, 4, 100); */

// EXERCISE 9.
// In this exercise, if `item` is a number, follow the rules given in Exercise 7
// except that `answer7` is replaced by `answer9`
// If `item` is not a number, then assign a value to answer9 of:
// "Please send a number, that was a <data type>."
// for example, if item===true, the value should be:
// "Please send a number, that was a boolean."
function exercise9(item) {
  let answer9;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // In this exercise, if `item` is a number, follow the rules given in Exercise 7 except that `answer7` is replaced by `answer9`
    // Use a switch conditional statement with case clauses such that if `item` is
    switch ( item ){
      // If `item` is not a number, then assign a value to answer9 of: "Please send a number, that was a <data type>."
      case ( typeof item !== "number" ):
          answer9 = ("Please send a number, that was a " + (typeof item));
          console.log("the answer is " + answer9);
          break;
      // for example, if item===true, the value should be: "Please send a number, that was a boolean."
      case ( item === true ): 
        answer9 = "Please send a number, that was a boolean";

      // a number and it has a value of 1 that `answer9` is assigned the string: "You won!"
      case ( item = 1 ):
        answer9 = "You won!";
        break;
  
      // if item is 7, then answer9 should be: "You are lucky!"
      case ( item = 7 ):
        answer9 = "You are lucky!";
        break;
        
      // if item is 101, then answer9 should be: "Welcome to coding 101!"
      case ( item = 101 ):
        answer9 = "Welcome to coding 101!";
        break;
        
      // if item is 1000000, then answer9 should be: "You are one in a million!"
      case ( item = 1000000 ):
        answer9 = "You are one in a million";
        break;
  
      // Othewise, assign answer9 a value of: "Thanks for that!"
      default: 
        answer9 = "Thanks for that!";
        break;
    }
    console.log(answer9);


  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer9;
}
/*test cases for exercise9
exercise9("Yes");
exercise9(1);
exercise9(7);
exercise9(1000000);
exercise9(true);
exercise9(false);*/

// EXERCISE 10.
// This question is a modified version of a classic programming question
// called "Fizz Buzz"
// Using a conditional, assign a value of:
// "Fizz" to `answer10` if the value of `num10` is divisible by 3
// "Buzz" to `answer10` if the value of `num10` is divisible by 5
// "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// and if none of these conditions are satisfied, then assign the value of
// `num10` to `answer10`

function exercise10(num10) {
  let answer10;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  // This question is a modified version of a classic programming question called "Fizz Buzz"
  // Using a conditional, assign a value of:
  // "Fizz" to `answer10` if the value of `num10` is divisible by 3
  if ( num10 % 3 === 0 ){
    answer10 = "Fizz";
  } else if ( num10 % 5 === 0 ){
    // "Buzz" to `answer10` if the value of `num10` is divisible by 5
    answer10 = "Buzz";
  } else if ( num10 % 15 === 0){
    // "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
    answer10 = "Fizz Buzz";
  } else {
    // and if none of these conditions are satisfied, then assign the value of `num10` to `answer10`
    answer10 = num10;
  }

  console.log(answer10);
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer10;
}
exercise10(9);
exercise10(10);
exercise10(30);
exercise10(2);
// Congrats, you made it to the end! You rock!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This was relatively easy. I am seeing that in exercise 10, I am unable to check for divisible 15. I thought that it is going to go by whichever line goes first, so I attempted to swith divisible 15 up to divisible by 5, but that did not work as expected. 
// I did use this resource. https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/ for clarifying formatt of switch and if I needed to declare that we are comparing an integer rather than a string in exercise 7.

// Email your file to us or commit your file to GitHub and email us a link.