//Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
//Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
var favouriteMovies = ["Harry potter", "Titanic", "Rapunzel", "Find Nemo"];
for (var _i = 0, favouriteMovies_1 = favouriteMovies; _i < favouriteMovies_1.length; _i++) {
    var movie = favouriteMovies_1[_i];
    console.log(movie);
}
