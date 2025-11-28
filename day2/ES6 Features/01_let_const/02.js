// Block level scope
for (let index = 0; index < 5; index++) {
    console.log(index);
}
// ReferenceError: index is not defined

console.log("------------------------------------------");

const numbers = [1, 2, 3, 4, 5];
// Added in ES6, for of loop
for (const number of numbers) {
    console.log(number);
}

console.log("------------------------------------------");

for (const number in numbers) {
    console.log(numbers[number]);
}