//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

//Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.

function replaceBananaWithMango(fruits:string[]):void {
    const index = fruits.indexOf("Banana"); // finds the index of banana
    
    if (index !== -1) fruits[index] = "Mango"; // replaces "Banana" with "mango" if found
    }
    
    const fruits : string[] = ["Apple","Banana","Cherry"];
    
    replaceBananaWithMango(fruits);
    console.log(fruits);
    
    
    
    // output [ 'Apple', 'Mango', 'Cherry' ]