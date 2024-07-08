//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
//Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
var countries = new Map();
countries.set("USA", "Washington,D.C");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
// logs the Map with countries and their capitals
// This function checks for "canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map");
    }
}
;
logCapitalOfCanada(countries);
// checks if Canada is in our Map and logs the capital if it exists.
