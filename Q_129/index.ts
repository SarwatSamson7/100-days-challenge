//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

//Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.

const traditionalVsArrow = {
    value : "traditionalVsArrow value",
    traditionalFunction : function(){
        console.log("Traditional function:" , this.value); // this refers to traditionalVsArrow object
    },
    arrowFunction : () => {
      console.log("Arrow Function:" , this.value); // this is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
};

traditionalVsArrow.traditionalFunction(); // logs traditionalVsArrow value
traditionalVsArrow.arrowFunction(); // likely undefined, depending on the outer scope's "this.value"


// this code illustrates the difference in how "this" is determined in traditional functions versus arrow functions.`