//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

//Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

let mixedArray = [2,"banana",6,"grapes",false,"apple",10,true];


let stringsArray = mixedArray.filter(item => typeof item === "string");
console.log(stringsArray);