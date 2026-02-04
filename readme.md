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



<!-- --------------------------------------------------------------------------- -->


<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>








<!-- --------------------------------------------------------------------------- -->





## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Function declarations are stored in memory during the creation phase, expressions are not.</p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
</div>





<!-- --------------------------------------------------------------------------- -->




<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>


<!-- --------------------------------------------------------------------------- -->

Q1. push()
Question: Add a new task 'Buy milk' to the tasks array.
Code: tasks.push('Buy milk')
Answer: ['Wake up', 'Brush teeth', 'Buy milk']
Why: push() adds an element to the end of the array.

Q2. pop()
Question: Remove the last notification.
Code: notifications.pop()
Answer: ['Email', 'Message']
Why: pop() removes the last element of the array.

Q3. shift()
Question: Remove the first customer.
Code: customers.shift()
Answer: ['Customer2', 'Customer3']
Why: shift() removes the first element of the array.

Q4. unshift()
Question: Add a song at the beginning of the playlist.
Code: playlist.unshift('Song A')
Answer: ['Song A', 'Song B', 'Song C']
Why: unshift() adds an element at the start of the array.

Q5. splice()
Question: Remove 'Alex' and add 'John' and 'Sara'.
Code: students.splice(1, 1, 'John', 'Sara')
Answer: ['Mike', 'John', 'Sara', 'Emma', 'Sophia']
Why: splice() can remove and insert elements at a specific index.

Q6. splice()
Question: Remove 2 items from index 1.
Code: menu.splice(1, 2)
Answer: ['Burger', 'Salad']
Why: Removes two elements starting at index 1.

Q7. slice()
Question: Get weekend days.
Code: days.slice(5, 7)
Answer: ['Saturday', 'Sunday']
Why: slice() returns a new array without modifying the original.

Q8. reverse()
Question: Reverse levels.
Code: levels.reverse()
Answer: ['Hard', 'Medium', 'Easy']
Why: reverse() mutates the array by reversing its order.

Q9. sort()
Question: Sort scores ascending.
Code: scores.sort((a, b) => a - b)
Answer: [12, 34, 45, 78, 89]
Why: Numeric sorting requires a compare function.

Q10. sort() with numbers
Question: Sort prices ascending.
Code: prices.sort((a, b) => a - b)
Answer: [49, 149, 199, 299, 999]
Why: Default sort converts numbers to strings; compare function is required.

Q11. slice() vs splice()
Question: First 3 products without changing original.
Code: products.slice(0, 3)
Answer: ['Laptop', 'Phone', 'Tablet']
Why: slice() does not mutate the original array.

Q12. splice() complex
Question: Remove 'Blue', add 'Purple' and 'Orange'.
Code: colors.splice(2, 1, 'Purple', 'Orange')
Answer: ['Red', 'Green', 'Purple', 'Orange', 'Yellow']
Why: splice() removes 1 element and inserts 2 at the same index.

Q13. reverse() + push()
Question: Reverse steps and add 'Final Step'.
Code: steps.reverse(); steps.push('Final Step')
Answer: ['Step 3', 'Step 2', 'Step 1', 'Final Step']
Why: reverse() changes order; push() adds at the end.

Q14. sort() strings
Question: Sort names alphabetically ignoring case.
Code: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
Answer: ['alice', 'Bob', 'charlie', 'David']
Why: Case-insensitive sorting using toLowerCase().

Q15. Combination
Question: Add 'Inception', remove first, sort alphabetically.
Code: movies.push('Inception'); movies.shift(); movies.sort()
Answer: ['Gladiator', 'Inception', 'Titanic']
Why: Each step performs one operation in sequence.

Q16. splice() return value
Question: What does splice return?
Code: nums1.splice(1, 2)
Answer: [2, 3]
Why: splice() returns the removed elements.

Q17. slice() immutability
Question: Does slice change the original?
Code: nums2.slice(1, 3)
Answer: [20, 30]
Why: Original array remains unchanged.

Q19. reverse() mutation
Question: Effect on original reference?
Code: let reversedLetters = letters.reverse()
Answer: ['c', 'b', 'a']
Why: reverse() mutates the original array; same reference is returned.

Q21. splice() edge case
Question: deleteCount = 0
Code: arr.splice(1, 0, 'new')
Answer: ['x', 'new', 'y', 'z']
Why: Only insertion occurs, no deletion.

Q23. slice() negative index
Question: Return elements with negative index.
Code: values.slice(-3, -1)
Answer: [300, 400]
Why: Negative indexes count from the end.

Q24. splice() vs slice()
Question: Update original or keep unchanged?
Answer: splice() → updates original, slice() → keeps original unchanged.
Why: splice() mutates, slice() is immutable.

Q25. Chained methods
Question: What is final array?
Code: arr2.push(arr2.shift())
Answer: [2, 3, 1]
Why: shift() removes first element and push() appends it at the end.