/* ------
    Date: 1-14-25
    Code Challenge
    Slice & Splice
------ */

/* ------
    --- Instructions ---
    You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

    --- Examples ---
    frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
    
    frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
    
    frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

    frankenSpice([1, 2, 3], [], 1) should return [1, 2, 3]

    All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].

    The first array should remain the same after the function runs.
    The second array should remain the same after the function runs.

    sandwhich (second array is the buns, first array is filling) / zipper
    starting index is final param 
------ */

// create a function frankenSplice() that takes in first array, second array, insert element spot. 
function frankenSplice( firstArry, secondArry, insertElementSpotIndex ){
    // make sure everything is passed in correctly
    console.log( "first array: " + firstArry );
    console.log( "second array: " + secondArry );
    console.log( "insert element spot index: " + insertElementSpotIndex );

    // create an array to store the result
    let result = [];

    // make a copy of the second array and store it into results
    result = secondArry.slice();
    // check result
    console.log( "result so far " + result );

    // add first array into the second array store it in the result array
    result.splice(insertElementSpotIndex, 0, firstArry);
    console.log( "final results: " + result + "\n ------");
    return result;
}
//test function
frankenSplice([1, 2, 3], [4, 5], 1) //return [4, 1, 2, 3, 5].
    
frankenSplice([1, 2], ["a", "b"], 1) //return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)  //return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

frankenSplice([1, 2, 3], [], 1) //return [1, 2, 3]