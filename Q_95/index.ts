//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

//Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filterGreatorThanTen(numbers:number[]):number[]{
    return numbers.filter(number => number > 10);
}

const numbers : number []= [2,5,3,10,25,50,15];
console.log(filterGreatorThanTen(numbers));

// output [ 25, 50, 15 ]  // prints only greator than 10