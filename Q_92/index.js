//Question 92: Write a function to remove the last element from an array and return the removed element.
//Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
function removeLastElement(arr) {
    return arr.pop();
}
var fruits = ["Mango", "Banana", "Watermelon"];
console.log(removeLastElement(fruits));
console.log(fruits);
