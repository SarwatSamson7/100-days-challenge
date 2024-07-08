//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

//Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.

{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
  
  console.log(blockLet);
  console.log(blockConst);
  }
  
  
  // try{
  //     console.log(blockLet) // this will fail
  // }
  // catch (error){
  // console.log("blockLet is not accessible outside the block")
  // }
  
  
  
  
  // try {
  //     console.log(blockConst); // this will also fail
  // }
  // catch (error) {
  //     console.log("blockConst is not accessible outside the block")
  //}
  