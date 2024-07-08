//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

//Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.

// Simple function 

function calculateArea(width:number,height:number):number{
    return width * height
}
console.log(calculateArea(4,8))




// Refactored into an Arrow Function

let calculateAreaArrow = (width:number,height:number) :number => width * height
console.log(calculateAreaArrow(4,8));