"use strict";
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
//Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
// Using let for variable
let number = 15;
number = 20;
console.log(number); // works fine because 'let' allows reassignment
// Trying to reassign a const-declared variable
// const name1 = "Sarwat";
// try {
//     name1 = "Samson"
// }
// catch (error) {
//     console.log(error)
// }
