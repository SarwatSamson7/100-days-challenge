//Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

//Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.

function convertCase(str:string){
    let upperStr = str.toUpperCase();
    let lowerStr = str.toLowerCase();
    console.log("Uppercase:",upperStr,"Lowercase:",lowerStr);
} 

convertCase("Hello World");