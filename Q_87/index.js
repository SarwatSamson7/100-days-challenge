//Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
//Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
function extractFirstTenChars(str) {
    return str.substring(0, 10);
}
console.log(extractFirstTenChars("Right Now I am working on one of my projects"));
console.log(extractFirstTenChars("Hello, Javascript world"));
