//Functions
/* 1. The two phases to using functions: First we must declare the function using function keyword_? Next we can execute (or two other words for executing a function?) a function by?

 There are two stages to creating a function:
 1. Function Declaration/Definition
 2. Function Call/invocation/Execution
*/
// Function – reusable blocks of code that accept inputs, process those inputs, and returns a new data value

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function?
 //parameter refers to the variables that are used in the functiondeclaration/definition to represent those arguments that were send to thefunction during the function call. 

//An argument in context with functionsis the actual value that is passed to thefunction ( as input) ,when it is called. 

// 3. What’s the syntax for a NAMED function?

// function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses () and finally the code of the function, also named “the function body”, between curly braces.

// 4. How do we assign a function to a variable
// functions can be stored in a variable

/* const squared = function(a) {
     return a * a;
   }
  console.log(squared(12));
*/

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
// parameters are like the placeholders for inputs in a function 
// we use agruments to specify the values of the placeholders.

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

// 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 