// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function exercise1(){
  // create variable i to go through the loop
  let i = 1;
  // start of the while loop
  while(i <= 5){
    //print out 1, 2, 3, 4, 5
    console.log("exercise 1 : " + i);
    //increase i, to print through the numbers
    i++;
  }
}
//call the function for exercise1
exercise1();

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function exercise2(){
  // create variable i to go through the loop
  let i = 1; 
  do {
    //print the intergers: 1, 2, 3, 4, 5
    console.log("exercise 2 : " + i);
    //increase i everytime to go through the loop
    i++;
  } while ( i <= 5 );
}

//calls the function exercise2 
exercise2();
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function exercise3(){
  for( i = 1; i <= 5; i++ ){
    //prints out 1, 2, 3, 4, 5
    console.log("exercise 3 : " + i);
  }
}
//calls the function exercise 3
exercise3();

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
function exercise4(){
  // create 3 loops to count down from 10 to 1
  // loop 1 : while
  let i = 10;
  while ( i >= 1){
    // print out each number
    console.log("exercise 4 while loop: " + i);
    // deduct 1 from i to go down the lists
    i--;
  }

  //loop 2 : do while
  let j = 10;
  do {
    //print each nubmer
    console.log( "exercise 4 do while loop: " + j);
    //deduct 1 from i to go through the lists
    j--;
  } while ( j >= 1);

  //loop 3: for
  for( i = 10; i >= 1; i--){
    //prints each number
    console.log( "exercise 4 for loop: " + i);
  }
}

//calls exercise4
exercise4();

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
function exercise5(){
  //3 loops to go from 7-27
  // loop 1 : while
  //declare i 
  let i = 7;
  while( i <= 27){
    //print out each integer
    console.log("exercise 5 while loop : " + i);
    //increase i by 1 to go through the loop
    i++;
  }
  //reset i 
  i = 7;
  //loop 2 : do while
  do{
    //print out each number
    console.log("exercise 5 do while loop : " + i);
    // increase i by 1 to go through the loop
    i++;
  } while (i >= 27);

  //loop 3: for loop
  for( i = 7; i <= 27; i++){
    //print out each number
    console.log("exercise 5 for loop : " + i);
  } 
}

//calls exercise5
exercise5();
// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
/*
let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
} */

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

//for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; ) {
  //console.log("counting down from", outsideCounter);
  //for (let insideCounter = outsideCounter /*???*/ /*???*/; ; ) {
    //console.log("inside" /*???*/);
  //}
  //console.log("***********************************");
//} 

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.
