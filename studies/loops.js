//Loops - loops are a way to repeat the same code multiple times

//Explain while, for, and for-in loops
// 1. While loops - A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.
// Syntax - 
/*
var x = 0
while (x < 6) {
 x++;
 } 
*/





/* 2. for loops - for loop provides a concise way of writing the loop structure. Unlike a while loop, a for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
-Initialization condition: Here, we initialize the variable in use. It marks the start of a for loop. An already declared variable can be used or a variable can be declared, local to loop only.
// Syntax -

for ([initialExpression]; [condition]; [incrementExpression]) {
  // code block to be executed
}



-Testing Condition: It is used for testing the exit condition for a loop. It must return a boolean value. It is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.

-Statement execution: Once the condition is evaluated to true, the statements in the loop body are executed.

-Increment/ Decrement: It is used for updating the variable for next iteration.

-Loop termination:When the condition becomes false, the loop terminates marking the end of its life cycle.
*/

// 3. for-in loops -  The for..in loop provides a simpler way to iterate through the properties of an object. This will be more clear after leaning objects in JavaScript. But this loop is seen to be very useful while working with objects.

//Be able to loop any number of times, forward counting up to some limit, backward counting down to 0

//Loop over an Array, forwards and backwards

var myArray = ["one", "two", "three", "four"];
//forwards
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
// output: one, two, three, four
// backwards

for(let i = myArray.length -1; i >= 0; i--){
    console.log(myArray[i]);
}
// output: four, three, two, one

//Loop over an Object

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

for (var key in fruits) {
    console.log(key // output: apple, orange, pear
    console.log(fruits[key]); // output: 28, 17, 54
}