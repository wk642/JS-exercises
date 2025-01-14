// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object 
function keys( obj ){
    //and returns an array of all of the keys in the object.
    // IMPORTANT: Do not use the built in Object.keys() function!
    // create the array we will return
    let arrayOfObjects = [];
    console.log(obj);
    for ( let x in obj ){
        // check to confirm work
        console.log(x);
        arrayOfObjects.push(x);
        // check array
        console.log(arrayOfObjects);
    }
    return arrayOfObjects;
}
let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]
let obj3 = {};
keys(obj3); // []

// Exercise 2. Write a function called values, which accepts an object and 
function values(object){
    // returns an array of all of the values in the object.
    // IMPORTANT: Do not use the built in Object.values() function!
    // create the array we will return
    let ex2arrayOfObject = [];
    // check to see what object is passed in
    console.log(object);
    for ( let x in object ){
        //check for the value
        if ( obj.hasOwnProperty(x));
        ex2arrayOfObject.push(object[x]);
        // check array
        console.log(ex2arrayOfObject);
    }
    return ex2arrayOfObject;
}

let ex2obj = { a: 1, b: 2, c: 3 };
values(ex2obj); // [1,2,3]
let ex2obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(ex2obj2); // ["Matt", "Lane", true]
let ex2obj3 = {};
values(ex2obj3); // []

// Exercise 3. Write a function called entries, which accepts an object and 
function entries(object){
    //returns an array of arrays of key-value pairs.
    // In other words, each sub-array is an "entry" in the object with two  elements: the first element is the key, and the second element is the value.
    // IMPORTANT: Do not use the built in Object.entries() function!
    // create an array to return
    let ex3array = [];
    // create for loop
    for (let x in object){
        //get the value and x
        if (object.hasOwnProperty(x)){
            ex3array.push([x, object[x]]);
            //check 
            console.log(ex3array);
        }
    }
    return ex3array;
}


let ex3obj = { a: 1, b: 2, c: 3 };
entries(ex3obj);
// [["a",1], ["b",2], ["c",3]]
let ex3obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(ex3obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
let ex3obj3 = {};
entries(ex3obj3); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
function pluck(object, name){
    // The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
    // create an array for return
    let ex4array = [];
    // go through the array
    for ( i = 0; i < ex4array.length; i++ ){
        // get the value if there's a value
        if ( name in object[i]){
            ex4array.push(object[i][name]);
        } // if it's empty return undefined
        else{
            ex4array.push(undefined);
        }
    }
    return ex4array;

} 
pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
function stringFromObject(object){
    // The format should be "key = value, key = value".
    // Each key/value pair should be separated by a comma and space except for the last pair.
    // create array to return
    let ex4array = [];
    // check
    console.log(object);
    // go through object
    for ( let x in object ){
        //check for the value
        if ( obj.hasOwnProperty(x)){
            //create key variable
            let key = x;
            // create value key
            let value = object[x];
        ex4array.push(key + " = " + value);
        // check array
        console.log(ex4array);  
        }
    }
    return ex4array;
}

stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false" **** need to come and debug this answer
stringFromObject({}); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
function minMaxKeyInObject(object){
    // The function should return an array with the following format: [lowestKey, highestKey]
    // create array to return
    let ex6array = [];
    // create array to store just the numbers3
    let arrayOfNums = [];
    
    for ( let x in object ){
        arrayOfNums.push(x);
        // check array
        console.log(arrayOfNums);
        // create lowestKey
        let lowestKey = arrayOfNums[0];
        let arrayLength = arrayOfNums.length - 1;
        let highestKey = arrayOfNums[arrayLength];
        console.log("Lowest: " + lowestKey);
        console.log("Highest: " + highestKey);
        ex6array = [lowestKey, highestKey];
        console.log("ex6: " + ex6array);
        
    }
    return ex6array;
}

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
