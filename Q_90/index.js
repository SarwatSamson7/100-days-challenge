//Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
//Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("Maria Khan")); // output true because it is not a number
console.log(isValueNaN(123)); // output false because its a number
