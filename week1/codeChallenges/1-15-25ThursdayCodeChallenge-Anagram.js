/*

An anagram is a word formed by rearranging the letters of a different word using all the original letters exactly once. The function is given two strings: s - to search in, p - a template word. Find the starting indexes of anagrams of p among substrings of the given s.

Examples ==> function (p, s)
findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"

findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"

*/
//creating a function that pases in p & s 
function findAnagrams(p, s){
    //create a variable to store results
    let results = [];
    // create a variable to store p & s split
    let sSplit = s.slice('');
    console.log( "sSplit(")
    // create a variable for s anagrams
    let sAnagrams = s.length;

    //itterate 
    for (let i = 0; i <= (p.length); i++){
        console.log([i]);
    }
        // return indexes that matches the anagrams
}


// test cases
// console.log(findAnagrams("cbaebabacd", "abc"));// [0, 6];
// console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
// console.log(findAnagrams('a', 'ab')); // [];
console.log("01 - test case " + findAnagrams('racecar', 'ace')); 
