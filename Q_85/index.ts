//Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

//Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.

function findCodePosition(str:string):number{
    return str.indexOf("code");
}

console.log(findCodePosition("JavaScript code is being compiled into TypeScript"));


// Output 11