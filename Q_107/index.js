//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
//Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.
function isDivisibleByBothTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0; // using the modulus operator to check for no remainder
}
console.log(isDivisibleByBothTwoAndThree(12)); // true
console.log(isDivisibleByBothTwoAndThree(14)); // false
