/*
var, let and const to define variables

let 
    block level scope 
    Cannot redeclare block-scoped variable, but we can update value

const 
    block level scope
    cannot update const variable value
*/

if (true) {
    let address = "Mumbai";
}

console.log(address); // ReferenceError: address is not defined
