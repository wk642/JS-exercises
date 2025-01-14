// Task 3 https://javascript.info/task/sum-object
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// create sumAllSalaries
let sumAllSalaries = 0;
// go through object
for (let x in salaries){
    // add salary to previous.
    sumAllSalaries += salaries[x];
    //check 
    console.log(sumAllSalaries);
}
//If salaries is empty, then the result must be 0.

