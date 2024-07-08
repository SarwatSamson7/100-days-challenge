//Question 147: Explain how to handle errors in a callback pattern.
//Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.
function fetchData(callback) {
    // Simulating an error condition
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    // Simulate fetching data with a cahnce of error
    if (Math.random() > 0.5) {
        callback(null, data); // no error,data is fetched successfully
    }
    else {
        callback(error); // passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.log(error.message); // handles the error
    }
    else {
        console.log(data); // processes the data
    }
});
// demonstrates a callback pattern where errors are handled gracefully
