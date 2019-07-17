//Control flow - order that the instructions or statements or functions are executed.


// Conditional statements are used to perform different actions based on different conditions.


// 1. If - Use the if statement to specify a block of JavaScript code to be executed if a condition is true.


// 2. Else-if - Use the else if statement to specify a new condition if the first condition is false.


// 3. Else- Use the else statement to specify a block of code to be executed if the condition is false.

/* 4. Switch - The switch statement is used to perform different actions based on different conditions.
 A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.
*/

// Example of using if/else-if/else together

var name = "Holly"; // declared a variable named myName and assigned it the string of "Holly";

if (name === 'nick') {
  console.log("this is true"); //  not true so doesnt run 

} else if (name === 'Holly') { 
  console.log("I am a Holly"); // name does equal Holly so prints this is Holly

} else {
  console.log("Different person"); 
}
// Switch  Statement  

let a = 0 + 2;

switch (a) {
  case 1:
    console.log( 'Too small' );
    break;
  case 2:
    console.log( 'Exactly!' );
    break;
  case 3:
    console.log( 'Too large' );
    break;
  default:
    console.log( "I don't know such values" );
    break;
}