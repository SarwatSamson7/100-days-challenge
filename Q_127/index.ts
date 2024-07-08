//Question 127: Convert a traditional function expression to an arrow function.

//Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.

const traditionalFunction = function(a: number, b: number): number {
    return a + b;
};

// Converted to an arrow function with type annotations
const arrowFunction = (a: number, b: number): number => a + b;

console.log(traditionalFunction(3, 2)); // Output: 5
console.log(arrowFunction(3, 2)); // Output: 5