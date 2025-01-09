// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'
let emptyVariable;
//log to just confirm my work
console.log("emptyVariable is : " + emptyVariable);

// Exercise 2. Declare a variable called 'myName'
let myName;
//log to just confirm my work
console.log("myName is : " + myName);

// Exercise 3. Assign your name as the value for 'myName'
myName  = "Winnie Kelley";
//log to just confirm my work
console.log("myName is : " + myName);
// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.
let dreamDestination = "A place that allows me to just sit, relax and play any video games I want.";
//log to just confirm my work
console.log("dreamDestination is : " + dreamDestination);

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
let num1 = 6;
//log to just confirm my work
console.log("num1 is : " + num1);

// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10
let num2 = 2
//log to just confirm my work
console.log("num2 is : " + num2);

// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?

// Valid values for num1 are 2, 3, 4, 5, 6, 7, 8, 9 and valid values for num2 would be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.


// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
num1 = 4;
num2 = 6; 
//log to just confirm my work
console.log("num1 is : " + num1 + " num2 is " + num2);

// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.

let theSum = num1 + num2;
//log to just confirm my work
console.log("theSum is : " + theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign

let theProduct = num1 * num2;
//log to just confirm my work
console.log("theProduct is : " + theProduct);

// the resulting value to 'theProduct'.

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"
let statement = ("Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination);
//log to just confirm my work
console.log("statement is : " + statement);

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

const myAnswerForExercise10 = "String";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "there is no variable named 'product', there is 'theProduct' which would be an integer";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "Can't multiple A to a number so it would be not a number or NaN";

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "true";

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";

// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// Once I understood what this was trying to do, it seemed easy. I feel like from the videos we learned other ways other than console.log to test things. But for this excersise, that is what I used for testing. I did not use additional references. 

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
