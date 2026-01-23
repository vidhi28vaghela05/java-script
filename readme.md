Javascript Variable

<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Error (ReferenceError)</p>
<p>Why :let variables are not hoisted in a usable way.
They are in a Temporal Dead Zone (TDZ) from the start of the block until the declaration line is executed.
So accessing nm before declaration causes an error. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(m);</p>-
<p>var m = "username";</p>
<p>Answer or Error:Output: undefined </p>
<p>Why : var variables are hoisted and initialized with undefined.
So console.log(m) runs before assignment, but no error occurs.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error:Output: 2 </p>
<p>Why : var has function scope, not block scope.
The x inside the block overwrites the outer x.</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Output: Inside: 20
Outside: 10
</p>
<p>Why : let is block scoped.
The a inside {} is a different variable from the outer a.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: person.name = "user" → ✅ Works
person = {} → ❌ TypeError</p>
<p>Why : const prevents reassignment, not mutation.
Object properties can be changed
The reference cannot be changed</p>
</div>
 
<!-- --------------------------------------------------------------------------- -->

Javascript Datatype:

<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: Output: 1 </p>
<p>Why : true → 1
false → 0
JavaScript converts booleans to numbers in arithmetic. </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: Output: 1</p>
<p>Why : null → 0 (in numeric operations) </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error: Output: "1212"</p>
<p>Why : + with a string performs string concatenation
Number 12 is converted to string</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: Output: false</p>
<p>Why : undefined is a falsy value
!undefined → true
!!undefined → false
!! is used to convert a value to its boolean form.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: Output: 11</p>
<p>Why : - operator forces numeric conversion
"12" → 12</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: Output: "number"</p>
<p>Why : NaN means Not a Number
It is the result of a failed numeric operation
JavaScript still treats it as a number type</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>Answer or Error: Output: undefined</p>
<p>Why : Variable is declared but not assigned a value</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: Output: null</p>
<p>Why : null is an intentional empty value
Assigned by the programmer</p>
</div>
 





 
<!-- --------------------------------------------------------------------------- -->





 

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

<!-- --------------------------------------------------------------------------- -->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p></p>
</div>


<!-- --------------------------------------------------------------------------- -->


<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<div>