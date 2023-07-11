// function sum(a, b) {
//     return a + b;
// };

// console.log(sum(2, 3));

//can also be re-written as an arrow function

// let sum = (a, b) => {
//     return a + b;
// };

// console.log(sum(2, 3));

//can also be made smaller as follows:

// function substract(func, val){
//     consols.log[""]
// } 

//announymous function, function that do not have a name
//arrow function
function sum(a, b){
    return a + b;
}

let sumOnceAgain = (a, b) => a + b;

function outer(func, val) {
    console.log("in outer function...");
    let result = func(5, val);
    return result;
}

console.log(outer(sumOnceAgain, 20));
//anonymous function
console.log(outer((a , b) => a + b, 20));

//first thinking principle (check it out later)
//write a function that returns a function and passes the result to a variable 
//and console log the result of the varaiable

//FUNCTION AS A RETURNED OBJECT


