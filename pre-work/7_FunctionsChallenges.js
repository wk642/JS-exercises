// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
function prependToString( str1, str2 ){
    // The function should return a new string with the second string prepended to the first string.
    // Examples:
    // prependToString('awesome', 'very') // --> 'veryawesome'  
    // prependToString('world', 'hello ') // --> 'hello world'
    // prependToString('nothing', '') // --> 'nothing'
    // test
    console.debug( str2+ " " + str1 );
    // return it
    return ( str2+ " " + str1 );
}
prependToString("awesome", "very");
prependToString("world", "hello");
prependToString("nothing", " ");

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// create function that passes in a word and a character
function stringIncludes( word, character ){
    // The function should return true if the first string includes the character, otherwise it should return false.
    // IMPORTANT: Do not use the built in string.includes() function!
    // create a for loop to go through the word 
    for ( let i = 0; i < word.length; i++ ){
        // if there the letter of the word matches the character
        if ( word[i] === character ){
            // test to make sure it works 
            console.debug( "it matches" );
            // return true
            return true;
        } 
    }
    // otherwise return false
    console.debug( "does not match" );
    return false;
}
stringIncludes('awesome', 'e'); // --> true
stringIncludes('awesome', 'z'); // --> false

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// create a function that takes one word and one character
function stringLastIndexOf( word, singleCharacter ){
    // The function should return the last index at which the character exists or -1 if the character is not found.
    // IMPORTANT: Do not use the built in "string".lastIndexOf() function!
    // create a for loop to go through each letter in word
    for ( i = 0; i < word.length; i++ ){
        // check to see if the letter in the word matches the single character
        if (word[i] === singleCharacter ){
            // check to make sure 
            console.debug( "Match at index " + i );
            return i;
        }
    }
    // otherwise return -1
    // check to make sure
    console.debug( "No Match! -1" );
    return -1;
}

stringLastIndexOf('awesome', 'e'); // --> 6
stringLastIndexOf('awesome', 'z'); // --> -1

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
function removeFromString( string, stringIndex, numOfCharactersToRemove ){
    // The function should return a new string with the characters removed.
    // get the string at the stringIndex
    let startOfString = string.slice( 0, stringIndex );
    // check to make sure we have the right amount of letters as the start
    console.debug( "start of string = " + startOfString );
    //get the second part, remove the number of characters passed in by adding it to the startIndex, so we remove the correct number from the correct index
    let endOfString = string.slice( stringIndex + numOfCharactersToRemove );
    // check to make sure 
    console.debug( "end of string = " + endOfString );
    // combine both so we can print out the full thing
    let results = startOfString + endOfString;
    // check before we return it
    console.debug( "final answer is " + results); // works
    // return results
    return results;
}

removeFromString('Elie', 2, 2) // --> 'El'
removeFromString('Elie', 0, 1) // --> 'lie'
removeFromString('Hello School', 0, 6) // --> 'School'
removeFromString('Hello School', 2, 4) // --> 'HeSchool'
removeFromString('Hello School', 6, 400) // --> 'Hello '

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
function indexOf( arr, num ){
    // The function should return the first index at which the value exists or -1 if the value is not found.
    // IMPORTANT: Do not use the built in array.indexOf() function!
    // create for loop to go through array
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] === num ){
            // check to make sure we are in this if statement
            console.debug( arr[i] + " is a match!");
            return i;
        }
    }
    // otherwise return -1
    // check to make sure that there is no match
    console.debug( "No match -1" );
    return -1;
}

let arr = [5, 10, 15, 20];
indexOf(arr, 20); // --> 3
let arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // --> 1
let arr3 = [1, 2];
indexOf(arr3, 10); // --> -1

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
function includes( collection, value, optionalStartingIndex=0 ){
    // The collection can be a string, an array, or an object. 
    // If the collection is a string or array, the third parameter is a starting index for where to search from. 
    // string or array: 
    if ( typeof collection === "string" || Array.isArray(collection) ){
        // check to make sure we are in string or array
        console.debug( " string / array " );
        // start at 3rd parameter (optionalStartingIndex)
        // ??0 means if null automatically 0 [null coalescing operator]
        for ( i = optionalStartingIndex; i < collection.length; i++ ){
            console.debug(`  In string /array for loop  ${collection[i]}`);
            //check
            if (collection[i] === value){
                console.debug( "   string / array a match, true" );
                // return true
                return true;
            }
        } 
        // otherwise check, return false
        console.debug( " string /array not a match, false" );
        return false;
    } // object: 
    else if ( typeof collection === "object"){
        // If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
        for ( let x in collection){
            // if matches, 
            if (collection[x] === value){
                // check
                console.debug( "   Object Matches, true" ) ;
                return true;
            }
        } // otherwise check and return false
        console.debug( " Object does not match, false" ) ;
        return false;
    }

}

// need to come back to this exercise to debug what's wrong, when it is in string / array
//turn off console.debug output
console.debug=function(){};
console.assert(true==includes([1, 2, 3], 1),"01 array does contain"); 
console.assert(false==includes([1, 2, 3], 1, 2),"02 array with start index"); 
console.log(`03: expected false:  ${includes([1, 2, 3], 6)}`); //array does not contain 
console.log(`4: expected true:  ${includes({ 'a': 1, 'b': 2 }, 1)}`); 
console.log(`5: expected false:  ${includes({ 'a': 1, 'b': 2 }, 'a')}`);
console.log(`6: expected true:  ${includes('abcd', 'b')}`); 
console.log(`7: expected false:  ${includes('abcd', 'e')}`); 
console.log(`8: expected false:  ${includes('abcd', 'a', 2)}`); 