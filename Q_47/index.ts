//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

//Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.


let laptops = [
    {make : "Dell", model: "E5540",year : 2019},
    {make : "HP", model: "Spectre x360",year : 2021},
    {make : "Apple", model: "MacBook",year : 2020},
];

let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);