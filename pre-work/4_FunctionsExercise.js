// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
function logGreeting(){
  console.log( "Hello" );
}
// Underneath the function, write the line of code that runs the function.
logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
function getName(){
  return "Winnie Kelley"
}
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
function logGreeting2(){
  // that prints a full sentence that contains your name: "Hello! My name is <name>."
  // logGreeting2 should call myName() to get your name. We did not declare a function called myName(), but we did use getName(). I believe that is what this might mean?
  console.log( "Hello! My name is " + getName() );
}
// Then print your greeting to the console by calling logGreeting2().
logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
function getNumbers(num1, num2, num3){
  // The function should return the sum of the 3 numbers.
  // print for testing first
  console.log(num1 + num2 + num3);
  // return it.
  return num1 + num2 + num3;
}
// Then write some function calls you would use to test your function.
getNumbers(1, 2, 3); //should be 6

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
function getDiscount(age){
  //if age is under 14 or over 65
  if( age <= 14 || age >= 65 ){
    // logging to test:
    console.log( "Get Discount");
    //return true
    return true;
  } else {
    // log to test
    console.log( "no discount" ); 
    // Otherwise it should return false.
    return false;
  }
}
// Then write some function calls you would use to test your function.
getDiscount(14);
getDiscount(65);
getDiscount(10);
getDiscount(78);
getDiscount(42);

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
function printRepeatedString(num, string){
  // The function should print the string the given number of times.
  for( let i =0; i <= num; i++ ){
    console.log(string);
  }
}
// Then write some function calls you would use to test your function.
printRepeatedString(3, "Hi there!");
printRepeatedString(5, "Print this");

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// 2. What prints out for the value of y
// 3. What prints out for the value of z
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// 2. What prints out for the value of a
// 3. What prints out for the value of b
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
