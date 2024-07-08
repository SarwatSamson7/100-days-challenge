//Question 127: Convert a traditional function expression to an arrow function.
//Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
var traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to an arrow function with type annotations
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(3, 2)); // Output: 5
console.log(arrowFunction(3, 2)); // Output: 5
