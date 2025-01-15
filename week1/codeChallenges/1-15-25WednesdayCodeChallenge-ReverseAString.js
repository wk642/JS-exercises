/* ------
    Date: 1-15-25
    Code Challenge
    Reverse a string
------ */

// Reverse the provided string and return the reversed string. For example, "hello" should become "olleh".

/* --- Method 1, using .split(), .reverse(), . join() --- 
//write a function to reverse the string, pass in one string parameter.
function reverseString(str){
    // create something to store the string that we split. 
    let splitString = str.split('');
    // check to make sure that str is actually split
    console.debug(`split string = ${splitString}`);
    // create something to store what we reversed.
    let reversedSplitString = splitString.reverse();
    // check to see what's reversed    
    console.debug(`reversed split string = ${reversedSplitString}`);

    // use .join() to combine it back to a string, 
    let reversedString = reversedSplitString.join('');
    // check to see what's reversed    
    console.debug(`reversed string = ${reversedString}`);
    // return the string.
    return reversedString;
}

------ End of Method 1 ------ */

/* ------ Start of Method 2 - simpllify method 1 
    // combine all three .split, .reverse and .join into one line
//write a function that takes in one string parameter
function reverseString(method2str){
    // store the result into a variable
    let reversedString = method2str.split('').reverse().join('');
    // check to see what our results would be
    console.debug(`Method 2 reversed string = ${reversedString}`);
    // return it
}

------ End of Method 2 ------ */

/* --- Start of Method 3 - For loop ---*/
//write a function that takes in a string
function reverseString(method3str){
    // create results to store the answer
    let method3Results = " ";
    //console.debug(`begining: ${method3Results}`);
    // create an itterate to go through the length of the string
        // condition would be that it the index has to be greater than 0
        // index deduct one to move through the string backwards.
    // check to make sure string is passed in 
    console.debug(`String that is being passed in: ${method3str}`);
    for( let i = method3str.length; i >= 0; i--){
        // add the letter in that index to results
        method3Results 
    }
    // check to make sure this works
    console.debug(`Method 3 : ${method3Results}`);

}

//------ End of Method 3 ------ */

//turn off console.debug output
//console.debug=function(){};
//test cases
reverseString("hello"); //should return a string.
reverseString("hello"); //should return the string olleh.
reverseString("Howdy"); //should return the string ydwoH.
reverseString("Greetings from Earth"); //should return the string htraE morf sgniteerG.