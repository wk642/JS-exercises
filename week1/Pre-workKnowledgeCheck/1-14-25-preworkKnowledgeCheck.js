/* ------ 
    --- Basic JavaScript Practice ---
------ */

/* ------ 
    --- [Problem 1] - Convert Inches to Meters ---
    Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

    Hint: 1 meter equals 39.3701 inches.

    Results
    input	outputs
    metersToInches(0)	0
    metersToInches(1)	39.3701
    metersToInches(1.5)	59.05515
    metersToInches(15.6)	614.17356
------ */
// create a function called metersToInches() that takes number of meters
function metersToInches(meters){
    // check to make sure it is passed in correctly
    console.log(meters);

    //creat inches to store the answer (meters * 39.3701)
    let inches = meters * 39.3701;

    // print and return the results
    console.log( "Inches: " + inches );
}

// test poblem 1
metersToInches(0)	//0
metersToInches(1)	//39.3701
metersToInches(1.5)	//59.05515
metersToInches(15.6)	//614.17356

/* ------
    --- [Problem 2] - Loop n Times ---
    Write a function named loopThrough that takes an argument that is a number and loops through and prints a message “Hello World” that number of times.
    
    Bonus: After each "Hello world" exept the last add a comma. Example loopThrough(3) = Hello world, Hello world, Hello world

    Results
    input	outputs
    loopThrough(0)	Nothing displayed
    loopThrough(1)	Message displayed 1 time
    loopThrough(3)	Message displayed 3 times
------ */
// create a function, takes in a number 
function loopThrough(numberOfTimes){
    // check to make sure we passed in number
    console.log( "Number of times we will repeat the phrase: " + numberOfTimes );

    // create something to hold the msg (Hello world)
    let msg = "Hello World";
    // ceates result to hold the result
    let result = [];
    // create loop to go throught the number of times to repeat the msg
    for ( i=1; i <= numberOfTimes; i++){
        // add msg to result
        result.push(msg);
        // log to check it
        //console.log(result);

        // *** Bonus *** add a comma between each repetition.
        result.join(', ');
    }
    // log it out
    console.log("final result: " + result);
}
// test problem 2
loopThrough(0)	//Nothing displayed
loopThrough(1)	//Message displayed 1 time
loopThrough(3)	//Message displayed 3 times

/* ------
    --- [Problem 3] - Even or Odd ---
    Create a function that accepts an integer and checks if it's even or odd.

    Results
    input	outputs
    evenOrOdd(1)	Odd
    evenOrOdd(2)	Even
    evenOrOdd(5)	Odd
------ */
// create a function that takes in one integer
function evenOrOdd(num){
    let problem3result;
    // if number / 2 has a remainder of 0 
    if ( num % 2 === 0 ){
        // it is even
        problem3result = console.log(num + " is even");
        return problem3result;
    } else if ( num % 2 !== 0 ){
        // it is odd
        problem3result = console.log(num + " is odd");
        return problem3result;
    }
}

// test problem 3
evenOrOdd(1)	//Odd
evenOrOdd(2)	//Even
evenOrOdd(5)	//Odd

/* ------
    --- [Problem 4] - Working with Objects ---
    Create an object called Person which has the name of a person as a string, and their age as a number. The Person object should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
------ */
// create an object called person
const person = {
    // person has:
    // name (string)
    name: "John",
    // age (number)
    age: 19,
    // has a method called describe
    describe: function(){
        // returns a string with "name, age years old."
        console.log(`${this.name}, ${this.age} years old`);
    }
};
//calls the function describe()
person.describe();

/* ------
    --- [Problem 5] - Math.random ---
    Review the Math.random fuction here and write a function with an if statement that console.log's "Over 1.5" if Math.random returns a number greater than 1.5 Otherwise console.log "Under 1.5".
------ */
// create a function that takes a  number
function overOrUnder(problem5Num){
    // create problem5msg to store result
    let problem5msg = " ";
    // if number is over 1.5
    if(problem5Num >= 1.5){
        //log and returns "Over 1.5"
        problem5msg = console.log("Over 1.5");
        return problem5msg;
    } else{
        //log and returns "Under1.5"
        problem5msg = console.log("Under  1.5");
        return problem5msg;
    }
}
//test problem 5
overOrUnder(1); // under 1.5
overOrUnder(32); // over 1.5
/* ------
    [Problem 6] - Splice method
    In the examples below, use splice to convert the first array to the second array:

    [2, 3, 4, 5] ---> [2, 4, 5]

    ["alpha", "gamma", "delta"] ---> ["alpha", "beta", "gamma", "delta"]

    [10,-10,-5,-3,2,1] ---> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
------ */
// For [2, 3, 4, 5] ---> [2, 4, 5]
let array1 = [2, 3, 4, 5];
// remove 3
let array1splice = array1.splice(1, 1);
// log array1 [2, 4, 5] 
console.log(array1);

// For ["alpha", "gamma", "delta"] ---> ["alpha", "beta", "gamma", "delta"]
let array2  = ["alpha", "gamma", "delta"];
// add beta  inbetween  alpha and gamma
let array2splice = array2.splice(1, 0, "beta");
// log array2["alpha", "beta", "gamma", "delta"]
console.log(array2);

// For [10,-10,-5,-3,2,1] ---> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let array3 = [10,-10,-5,-3,2,1];
// remove everything except for 10 and add the rest of the numbers
let array3splice = array3.splice(1, array3.length -1, 9, 8, 7, 6, 5, 4, 3, 2,1);
//log array3 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(array3);

/* ------
    --- [Problem 7] - While Loops ---
    Write a function with a while loop that prints the multiples of 5 from 5 to 50 inclusive

    Results
    // 5, 10, 15, 20 ...
------ */
// create a function 
function whilePlus5(){
    // create problem7i starts at5
    let problem7index = 5;
    // while it is less than 50
    while (problem7index <= 50){
        // log the number
        console.log(problem7index);
        // add 5
        problem7index += 5;
    }
}
// test problem  7
whilePlus5();
/* ------
    --- [Problem 8] - String Manipulation ---
    Write a function that takes a string as a parameter and convert it from camelCase to Title Case

    Results
    input	outputs
    toTitleCase("myName")	My Name
    toTitleCase("helloWorld")	Hello World
    toTitleCase("countToTen")	Count to Ten
------ */
// create a function
function toTitleCase( string ){
    // check stringis passed in  correctly
    console.log("original string = " + string);
    // create somthing store results
    let results  = "  ";
    
    // change the first character to uppercase add to results
    results = string[0].toUpperCase();
    console.log(results);

    // create for loop to go through the string
    for ( let i = 1; i < string.length; i++ ){
        // if [i] is an uppercase
        if(string[i] === string[i].toUpperCase()){
            // add a space and the  letter to the results
            results += (" " + string[i]);
        } else{
            // if not, just add  the letter
            results += string[i];
        }
    }
    // log the results
    console.log("results: " + results);
}

//test problem8
toTitleCase("myName")	//My Name
toTitleCase("helloWorld")	//Hello World
toTitleCase("countToTen")	//Count to Ten