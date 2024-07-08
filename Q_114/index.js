//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
//Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
var students = new Map();
students.set(1, "Sarwat");
students.set(2, "Aniqa");
students.set(3, "Sumaira");
students.forEach(function (name, id) {
    console.log("Student ID : ".concat(id, ", Name: ").concat(name));
});
