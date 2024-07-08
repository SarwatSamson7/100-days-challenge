//uestion 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

//Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.


function calculateSum(numbers:number[]):number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Calculating the sum of an array of numbers

const numbers : number[] = [1,2,3,4,5];
console.log(calculateSum(numbers));

// it adds up all the numbers in an array