//Question 133: Write a JavaScript object and convert it into a JSON string.
//Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
// Defines a javascript object
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};
// converts the object into a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString);
// demonstrates converting an object to a JSON string,making it easy to store and transmit.
