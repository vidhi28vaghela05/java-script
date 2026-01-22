// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, *, **, %
// + --> Add and concatenation
// ex. 1+2 --> Add
// "user" + "name" --> concat
// 5 + "5" --> concat, 5 + 5 --> Add

// ex. 2 - 1
// /, *
// ex. 240/2, 25*2
// % (modulus) (sheshfal) (reminder)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (square)(exposination)
// ex. 2**3 --> 8



// ------------------------------------------------------------------------------



// Comparison (ans: true, false)

// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)

// ===
// ex. 12 === "12" (check type and value, strict comparaision)

// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)

// !==
// ex. 12 !== "12" (reverse of ===)

// >=
// ex. 22 >= 22

// <=
// ex. 13 <= 13

// <
// ex. 12 < 113, 12 < 9, 22 < 22

// >
// ex. 12 > 113, 12 > 9, 13 > 13




// ------------------------------------------------------------------------------




// assignment
// =
// give a value, value assignment operator
// ex. let a = 12;

// +=
// ex. a += 3; (add value into old value and save it into a)

// -=
// ex. a -= 4; (subtract value from old value and save it into a)

// *=
// ex. a *= 2;

// /=
// ex. a /= 2;

// %=
// ex. a %= 2; (give remainder)




// ------------------------------------------------------------------------------




// logical

// && (AND)
// ex. true && true  --> true   12<13 && 14<15 --> true
// false && true --> false  12<10 && 14<15 --> false
// ture && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// !false --> true
// !!12 --> false --> !!12 --> true


// ------------------------------------------------------------------------------



// Unary Oprator

// + - ! typeof ++ --

// +
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
// "5" + 5 --> 55
// +"5" + 5 --> 10

// -
// ex. -5

// !
// ex. !12 --> false

// typeof
// ex. typeof "name" --> string

// ++
// ex. let a = 12
// a++ --> 12  // post ex. a++ + a => 25
// ++a --> 13  // pre ex. ++a + a => 26
// --
// ex. let a = 3;
// a--
// a++



// ------------------------------------------------------------------------------



// Ternary
// ? :

// condition ? true thase to print thase : false thase to print thase
// let a = 12 > 13 ? console.log("true") : console.log("false");


// typeof null --> object
// typeof [] --> object, let a = []; a instanceof Array --> true

// instanceof --> check type of reference data type // don't use typeof for reference data type

// typeof NaN --> number

// typeof --> primitive data type mate use karvo
// instanceof --> reference data type mate use karvo




/* ------------------------------------------
   1) ASSIGNMENT OPERATORS
------------------------------------------ */

/*
Assignment operators are used to store or update values
inside a variable.
*/

let a = 10;     // = assigns a value to variable a.

a += 5;         // Adds 5 to a and stores result in a.
a -= 3;         // Subtracts 3 from a and stores result in a.
a *= 2;         // Multiplies a by 2 and stores result.
a /= 4;         // Divides a by 4 and stores result.
a %= 4;         // Stores remainder after dividing a by 4.


/* ------------------------------------------
   2) ARITHMETIC OPERATORS
------------------------------------------ */

/*
Arithmetic operators are used to perform mathematical
calculations on numbers.
*/

let x = 10;
let y = 3;

x + y;   // Addition: adds two numbers.
x - y;   // Subtraction: subtracts second number.
x * y;   // Multiplication: multiplies numbers.
x / y;   // Division: divides numbers.
x % y;   // Modulus: gives remainder.
x ** y;  // Exponentiation: raises x to power y.


/* ------------------------------------------
   3) COMPARISON OPERATORS
------------------------------------------ */

/*
Comparison operators compare two values and return
a boolean result (true or false).
*/

10 > 5;     // Greater than → true.
10 < 5;     // Less than → false.
10 >= 10;   // Greater than or equal to.
5 <= 2;     // Less than or equal to.

10 == "10";   // Loose equality (converts type).
10 === "10";  // Strict equality (checks value + type).

5 != "5";     // Loose not equal.
5 !== "5";    // Strict not equal.


/* ------------------------------------------
   4) LOGICAL OPERATORS
------------------------------------------ */

/*
Logical operators are mostly used in conditions and
decision making.
*/

true && false;   // AND → true only when both are true.
true || false;   // OR → true if at least one is true.
!true;           // NOT → reverses boolean value.


/* ------------------------------------------
   5) UNARY OPERATORS
------------------------------------------ */

/*
Unary operators work on a single value.
They include +, -, typeof, ++, -- and !.
*/

// Unary + converts string to number.
+"5";        // becomes number 5.
+"hello";    // NaN because string is not numeric.

// Unary - converts to negative.
-"10";       // -10.

// typeof tells the data type of a value.
typeof 10;       // "number"
typeof "hi";     // "string"

// Increment and decrement change value by 1.
let n = 5;

n++;  // Post increment: returns old value first, then increases.
++n;  // Pre increment: increases first, then returns new value.

n--;  // Post decrement.
--n;  // Pre decrement.


/* ------------------------------------------
   6) DOUBLE NOT (!!) & TRIPLE NOT (!!!)
------------------------------------------ */

/*
!! is a popular JavaScript trick used to convert
any value into a strict boolean.
*/

!!1;          // true because 1 is truthy.
!!0;          // false because 0 is falsy.
!!"hello";    // true because non-empty string is truthy.
!!"";         // false because empty string is falsy.
!!null;       // false.
!!undefined;  // false.

// !!! simply negates the boolean result again.
!!!1;   // false.
!!!0;   // true.


/* ------------------------------------------
   7) TERNARY OPERATOR (? :)
------------------------------------------ */

/*
The ternary operator is a short form of if-else.
It executes one expression if condition is true,
otherwise executes another.
*/

// Syntax:
// condition ? expressionIfTrue : expressionIfFalse;

let age = 19;

let result = age >= 18
  ? "Eligible for vote"
  : "Not eligible";

console.log(result);


// Using ternary to check even or odd.
let num = 5;

num % 2 === 0
  ? console.log("Even")
  : console.log("Odd");


// Nested ternary is used when multiple conditions
// need to be checked in compact form.
let marks = 72;

let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 60 ? "C" :
  "Fail";

console.log(grade);


/* ------------------------------------------
   8) TYPE CHECKING – typeof & instanceof
------------------------------------------ */

/*
typeof is mainly used for primitive data types,
while instanceof is used for reference types.
*/

typeof 100;         // number
typeof true;        // boolean
typeof undefined;  // undefined

typeof null;       // object (this is a known JS bug).

let arr = [];
arr instanceof Array;   // true.

let obj = {};
obj instanceof Object;  // true.


/* ------------------------------------------
   9) SMART JAVASCRIPT SHORTCUT TECHNIQUES
------------------------------------------ */

/*
These techniques are frequently used by developers
to write clean and efficient code.
*/

// Convert string to number quickly.
let str = "25";
let num2 = +str;

// Boolean existence check.
if (!!num2) {
  console.log("Value exists");
}

// Default value using OR operator.
let username = "";
let name = username || "Guest";

// Execute statement only if condition is true.
true && console.log("Runs because true");

// Ternary used directly for assignment.
let isLogin = true;

let msg = isLogin ? "Welcome" : "Please Login";


/* ------------------------------------------
   10) NULLISH COALESCING OPERATOR (??)
------------------------------------------ */

/*
?? returns the right value only when the left side
is null or undefined.
*/

let score = null;

let finalScore = score ?? 50;

console.log(finalScore);


/* ------------------------------------------
   11) OPTIONAL CHAINING (?.)
------------------------------------------ */

/*
Optional chaining safely accesses nested properties
without throwing an error.
*/

let user = {};

console.log(user.profile?.name);


/* ======================================================
              END OF THEORY FILE
====================================================== */
