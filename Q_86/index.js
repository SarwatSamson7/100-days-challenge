//Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
//Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
function hasJavascript(str) {
    return str.includes("Javascript");
}
console.log(hasJavascript("I Love coding in Javascript"));
// Output true
