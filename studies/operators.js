// Operators - JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more.

// 1. Assignment operators - Assignment operators are used to assign values to JavaScript variables.
// operator sign     Example
//  =               var myNum = "Austin";	// Assigning the string "Austin" to myName variable.

// +=	            myNum += 4;      same as >>> myNum = myNum + 4;

// -=	            a -= b;	         same as >>>  a = a - b

// *=	            x *= y;	         same as >>>  x = x * y

// /=	            num1 /= y;	     same as >>>  num1 = num1 / y

// 2. Arithmetic operators - Arithmetic operators are used to perform task in our code, that allow us to perform mathematical calculations on numbers. 
//    +             5 + 5	    Returns 5 plus 5 = 10
//    -             b - a 	    Returns b minus a.
//    *            myNum * num2	Returns myNum times num2.
//    /            18 / 2	    Returns 18 divided by 2.
//    %            40 % 3	    Returns the remainder of 40 / 3,  so 3 goes into 40, 13 times with the remainder of 1;
//    ++           i++ or ++i	Returns i then increments i by 1.  or Increments i by 1 then returns i;
//    --           n-- or --n   Returns n then decrements n by 1. or Decrements n by 1 then returns n.

// 3. Comparison operators - Comparison operators are used in logical statements to determine equality or difference between variables or values.
//   == 	        Equal Returns true if  a and b are the same value. a = "5", b = 5 will return true
//                  Type coercion means that two values are compared only after attempting to convert them into a common type.

//   != 	        Not equal                Returns true if num1 and num2 are not equal. Type conversion occurs as necessary.

//   === 	        Strictly equal           Returns true if myName and myName are of the same type, and are equal.

//   !== 	        Strict not equal         Returns true if myName and myNumare of different types, or are of the same type but not equal.

//   > 	            Greater than             Returns true if expr1 is greater than expr2. Type conversion occurs as necessary.

//   >= 	        Greater than or equal to Returns true if num1 is greater than or equal to num2. Type conversion occurs as necessary.

//   <          	Less than                Returns true if var1 is less than var2. Type conversion occurs as necessary.

//  <=  	        Less than or equal to    Returns true if 40 is less than or equal to 49. Type conversion occurs as necessary.




// 4. Logical Operators -    Logical operators are used to determine the logic between variables or values.
//   &&	 (and)              && is used with two or more values, and only evaluates to true if all the values are truthy. 
//                          The value returned will be the last truthy value if they are all true, but it will return the first falsy value if at least one value is false.
                            // (10 > 8 && 80 < 100) // true
                            // (15 === 15 && 20 > 30) // that is false because they arent both true

//   ||	 (or)               OR also is used with two or more values, but it evaluates to true if any of the values are true, so only evaluates to false if both operands are falsy.
                            // (20 === 20 || 15 > 60) returns true because at least one is true

//   !	(not)               Using the ! operator in front of a value will convert it to a Boolean and return an opposite value. It means that a truthy value will return false, and a falsy will return true



// 5. Unary operators (!, typeOf, -) - A unary operation is an operation with only one operand. This operand comes either before or after the operator. Unary operators are more efficient than standard JavaScript function calls. Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
// A unary operator is one that takes a single operand/argument and performs an operation.
// Unary plus (+) .  
// Unary negation (-) 
// Logical Not (!)    Converts to boolean value then negates it
// Increment (++)     Adds one to its operand
// Decrement (--)     Decrements by one from its operand
// typeof             The typeof operator returns the type of a variable, object, function or expression:
// delete             The delete operator deletes a property from an object:
// 6. Ternary operator (a ? b : c)
// Ternary operators allow us to really quickly write shorter **if statements 
// example of an if statement 
/*
        // if statement without a ternary operator
        let name = "Austin";
        
        if (name === 'Austin') {
          console.log("my name is " + name);
        } else {
          console.log("my name is something else")
        }
*/
// The syntax is: condition ? expression1 : expression2
// same statemnt but with ternary operator 

// name === "Austin" ? console.log("my name is " + name) : console.log("my name is something else");
// returns my name is Austin.