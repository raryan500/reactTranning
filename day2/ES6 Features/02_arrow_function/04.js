/* 

function declaration
let add = function (x, y) {
    return x + y;
}

Arrow function 
1. we can replace function with => symbol
2. Whenever we have a single line in arrow fucntion then curly braces and return is not needed
*/

let add = (x, y) => x + y;
// calling function
console.log(add(4, 5)); // ReferenceError: Cannot access 'add' before initialization
