"use strict";
//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Describing a circle using our shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
