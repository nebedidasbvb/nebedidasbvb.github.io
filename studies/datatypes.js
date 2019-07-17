// DataTypes 

/* Data Types are the classifications we give to the different kinds 
   of data that we use in programming. Variables can hold many data types such as numbers, strings, objects,
   booleans and others. 
*/ 

// 1. Numbers - Can be any number, including numbers with decimals: 4, 18, 2236, 23.42.
//Ex. 
var myNum = 24;
console.log(myNum); // prints 24 to the console
// assgined the number 24 to myNum variable.

/* 2. Strings - Any grouping of characters on your keyboard (letters, numbers, spaces, symbols) surrounded by single quotes: '' or double quotes "". 
I perfer double quotes (""). Like to think of string as like text.
*/
//Ex. 
var myName = "Austin Nebe wants to learn how to code."; // strings can include cpatial and lowercase letters, spaces and punctuation.
console.log(myName); // prints the sentence "Austin Nebe wants to learn how to code."
//Ex.
var fruits = "apple"; // doesn't have to be a sentence, can be just a word.
console.log(fruits); // prints out apple

// 3. Booleans - The boolean type has only two values: true and false.
    var myBool = true;
    var myBool2 = false;
    if (myBool === myBool2) // = false
//This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// 4. Array - An array is an ordered collection of values: each value is called an element, and each element has a numeric position in the array, known as its index.
    var myArray = ["arrays", "can", "have", "different dataTypes", 20, true]
// 5. Object - In JavaScript, almost "everything" is an object.
    var myObject = {
        
        name: "Austin",
        age: 24,
        alias: "nebedidas"
    };
 //An object is a collection of properties, and a property is an association between a name (or key) and a value. 

// 6. Function - A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
 // use function keyword to declare 
 function myFirstFunction (param1, param2) {
     return param1 + param2;
 }
// call the function
myFirstFunction(1, 1)
// 7. undefined - The undefined property indicates that a variable has not been assigned a value, or not declared at all.
var myVariable;
// will give back undefined because nothing has been assigned to the variable


// 8. null - In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

// 9. NaN - The isNaN() function determines whether a value is an illegal number (Not-a-Number).

// This function returns true if the value equates to NaN. Otherwise it returns false.

// 10. Infinity and -Infinity (Google them if you don’t know!) The isNaN() function determines whether a value is an illegal number (Not-a-Number).

//Infinity is a numeric value that represents positive infinity.
//-Infinity is a numeric value that represents negative infinity. 

// 11. What is the difference between primitive/simple and complex data types
// A primitive is not an object and has no methods of its own. All primitives are immutable. (cannot be changed)
// mutable (can be changed).
// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
// That reference points to the object’s location in memory. The variables don’t actually contain the value.