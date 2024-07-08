//Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

//Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.

const myObject = {
    property : "Value",
    outerMethod : function (){
        console.log(this.property); // works as expected,logs "Value" 


    const innerMethod = () => {
        console.log(this.property); // still accesses myObjects "property" due to arrrow function capturing "this" from outer scope.
    }    ;

    innerMethod();
    },
};

myObject.outerMethod();

// this example shows that using an arrow function for thhe inner method preserves the "this" context from the outer method.