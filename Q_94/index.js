//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
//Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
var words = ["Hello", "Typescript", "Computer", "Laptop"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
