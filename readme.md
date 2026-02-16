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



<!-- --------------------------------------------------------------------------- -->



1. Double daily steps count

Real life: Fitness app doubling step goal

const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);



2. Convert minutes to seconds

Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});



3. Add ₹50 delivery charge to prices

Real life: Food delivery app

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);



4. Convert exam marks to grades

Real life: Result system

const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);



5. Capitalize names

Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);



6. Apply 10% discount

Real life: Shopping sale

const prices = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);



7. Add bonus points to scores based on condition

Real life: Game scoring system

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});



8. Convert temperatures with formula

Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);



9. Generate table of numbers

Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);



10. Combine map with string formatting

Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);

<!-- --------------------------------------------------------------------------- -->


### 1. Get even numbers **Real life:** Find even roll numbers
js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
--- ### 2. Filter adults **Real life:** Allow only 3+ users
js
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
--- ### 3. Remove empty items **Real life:** Clean user input
js
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
--- ### 4. Filter passing marks **Real life:** Exam result system
js
const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
--- ### 5. Get affordable prices **Real life:** Shopping app price filter
js
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
--- ### 6. Filter long words **Real life:** Search keyword validation
js
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
### 7. Filter positive numbers **Real life:** Bank transaction validation
js
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
--- ### 8. Filter numbers within a range **Real life:** Score selection
js
const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);### 1. Get even numbers
**Real life:** Find even roll numbers
js const numbers = [1, 2, 3, 4, 5, 6]; const evenNumbers = numbers.filter(num => num % 2 === 0);
---

### 2. Filter adults
**Real life:** Allow only 3+ users
js const ages = [2, 1, 10, 16, 5]; function isAdult(age) { return age >= 18; } const adults = ages.filter(isAdult);
---

### 3. Remove empty items
**Real life:** Clean user input
js const inputs = ['Hello', '', 'World', '', 'JS']; const validInputs = inputs.filter(text => text !== '');
---

### 4. Filter passing marks
**Real life:** Exam result system
js const marks = [35, 72, 88, 40, 25]; const passedStudents = marks.filter(mark => mark >= 40);
---

### 5. Get affordable prices
**Real life:** Shopping app price filter
js const prices = [199, 499, 999, 1499, 299]; const affordable = prices.filter(price => price <= 500);
---

### 6. Filter long words
**Real life:** Search keyword validation
js const words = ['hi', 'hello', 'javascript', 'ok']; function isLongWord(word) { return word.length > 3; } const longWords = words.filter(isLongWord);
### 7. Filter positive numbers
**Real life:** Bank transaction validation
js const transactions = [200, -100, 500, -50, 300]; const credits = transactions.filter(amount => amount > 0);
---

### 8. Filter numbers within a range
**Real life:** Score selection
js const scores = [45, 60, 85, 30, 90]; const selectedScores = scores.filter(score => score >= 50 && score <= 90);


<!-- --------------------------------------------------------------------------- -->

### 1. Total money in wallet
**Real life:** Add all cash amounts
```js
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
```

---

### 2. Total steps walked in a week
**Real life:** Fitness tracker
```js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
```

---

### 3. Find total cart price
**Real life:** Shopping bill
```js
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
```

---

### 4. Find maximum score
**Real life:** Highest exam mark
```js
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
```
---

### 5. Count total characters
**Real life:** Text length calculation
```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
```

---

### 6. Combine words into a sentence
**Real life:** Message builder
```js
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
```
---

### 7. Count passed students
**Real life:** Result summary
```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
```

---

### 8. Calculate final balance
**Real life:** Bank account calculation
```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
```
---

---

### 10. Build comma-separated string
**Real life:** Display values in UI
```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);





// ---------------------------------------------------------------------------

console.log("filter example")


### Q1. Shopping App – Discounted Total



You are given a list of item prices.

**Tasks:**



1. Keep only items costing more than 500

2. Apply a 10% discount to those items

3. Find the total amount to pay



```js

const prices = [200, 800, 1200, 450, 700];

```



Ans: const total = prices

.filter(price => price > 500)

.map(price => price \* 0.9)

.reduce((sum, price) => sum + price, 0);



---



### Q2. Fitness App – Total Active Minutes



You are given daily activity minutes.

**Tasks:**



1. Keep only days with more than 30 minutes activity

2. Convert minutes to calories (1 min = 5 calories)

3. Calculate total calories burned



```js

const minutes = [20, 45, 60, 15, 90];

```

Ans:

const totalCalories = minutes

.filter(min => min > 30)

.map(min => min * 5)

.reduce((total, cal) => total + cal, 0);



---



### Q3. Exam System – Average of Passed Marks



You are given marks of students.

**Tasks:**



1. Keep only passing marks (>= 40)

2. Calculate the average of passed marks



```js

const marks = [35, 72, 88, 40, 25, 90];

```

Ans:

const passed = marks.filter(mark => mark >= 40);

const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

---



### Q4. Salary System – Monthly Payout



You are given daily wages.

**Tasks:**



1. Keep wages greater than 500

2. Add a bonus of 100 to each

3. Calculate total payout



```js

const wages = [300, 800, 450, 1000, 600];

```

Ans: const totalPayout = wages

.filter(wage => wage > 500)

.map(wage => wage + 100)

.reduce((total, wage) => total + wage, 0);

---



### Q5. Online Course – Completion Points



You are given lesson completion percentages.

**Tasks:**



1. Keep only completed lessons (>= 50%)

2. Convert percentage into points (percentage × 2)

3. Calculate total points



```js

const progress = [20, 50, 75, 40, 100];

```

Ans: const totalPoints = progress

.filter(p => p >= 50)

.map(p => p * 2)

.reduce((sum, p) => sum + p, 0);



---



### Q6. Bank Transactions – Final Balance



You are given a list of transactions.

**Tasks:**



1. Keep only credit transactions (positive values)

2. Add 2% interest to each credit

3. Calculate final credited amount



```js

const transactions = [1000, -500, 2000, -300, 1500];

```

Ans: const creditedAmount = transactions

.filter(amount => amount > 0)

.map(amount => amount * 1.02)

.reduce((total, amount) => total + amount, 0);



---



### Q7. Game App – Final Score



You are given scores from multiple rounds.

**Tasks:**



1. Keep scores greater than 50

2. Add bonus points (+10)

3. Calculate final score



```js

const scores = [30, 60, 90, 45, 80];

```

Ans: const finalScore = scores

.filter(score => score > 50)

.map(score => score + 10)

.reduce((sum, score) => sum + score, 0);



---



### Q8. E-commerce – Total Taxed Amount



You are given item prices.

**Tasks:**



1. Keep items priced above 1000

2. Add 18% tax

3. Calculate final payable amount



```js

const prices = [500, 1200, 3000, 800, 1500];

```

Ans: const finalAmount = prices

.filter(price => price > 1000)

.map(price => price * 1.18)

.reduce((sum, price) => sum + price, 0);

---



### Q9. Attendance System – Reward Points



You are given daily attendance hours.



**Tasks:**



1. Keep days with attendance >= 8 hours

2. Convert hours into points (1 hour = 10 points)

3. Find total points earned



```js

const hours = [6, 8, 9, 7, 10];

```

ans: const totalPoints = hours

.filter(hour => hour >= 8)

.map(hour => hour * 10)

.reduce((sum, point) => sum + point, 0);

---



### Q10. Interview Brain Teaser ⭐



You are given a list of numbers.

**Tasks:**



1. Keep only even numbers

2. Square each number

3. Find the sum of squares



```js

const numbers = [1, 2, 3, 4, 5, 6];

```

ans: const sumOfSquares = numbers

.filter(num => num % 2 === 0)

.map(num => num * num)

.reduce((sum, num) => sum + num, 0);




// ---------------------------------------------------------------------------




### Q1. Grocery Store – Total Cost

1. Keep items costing more than 100
2. Add 5% tax
3. Find total cost

```js
const prices = [50, 120, 300, 80, 200];
```

---

### Q2. Fitness App – Weekly Calories

1. Keep days with workout minutes >= 20
2. Convert minutes to calories (1 min = 4 cal)
3. Find total calories

```js
const minutes = [10, 25, 40, 15, 60];
```

---

### Q3. Exam Results – Total Passed Marks

1. Keep passing marks (>= 40)
2. Find total marks

```js
const marks = [35, 55, 80, 20, 45];
```

---

### Q4. Bank App – Total Credits

1. Keep only positive transactions
2. Find total credited amount

```js
const transactions = [500, -200, 1000, -300, 700];
```

---

### Q5. Online Sale – Discounted Bill

1. Keep items above 1000
2. Apply 15% discount
3. Find total payable amount

```js
const prices = [800, 1500, 3000, 600, 1200];
```

---


### Q6. Attendance – Reward Points

1. Keep attendance hours >= 7
2. Convert hours to points (×10)
3. Find total points

```js
const hours = [5, 7, 8, 6, 9];
```

---

### Q7. Delivery App – Total Distance
1. Keep trips longer than 5 km
2. Add 1 km bonus per trip
3. Find total distance

```js
const distances = [3, 6, 10, 4, 8];
```

---

### Q8. Salary System – Final Salary

1. Keep salaries above 20,000
2. Add 2,000 bonus
3. Find total salary payout

```js
const salaries = [18000, 25000, 30000, 15000];
```

---

### Q9. Study App – Total Study Time

1. Keep sessions longer than 1 hour
2. Convert hours to minutes
3. Find total study minutes

```js
const hours = [0.5, 1.5, 2, 0.75, 3];
```

---

### Q10. Electricity Usage – Monthly Bill

1. Keep usage above 100 units
2. Multiply by cost per unit (₹6)
3. Find total bill

```js
const units = [80, 120, 200, 90, 150];
```

---
### Q11. Game Scores – Final Power Score

1. Keep scores above 40
2. Double each score
3. Find total power score

```js
const scores = [30, 50, 90, 20, 70];
```

---

### Q12. Travel App – Total Fare

1. Keep rides longer than 10 km
2. Add ₹50 service fee
3. Find total fare

```js
const rides = [5, 12, 20, 8, 15];
```

---

### Q13. Office Work – Productive Hours

1. Keep hours >= 6
2. Convert hours to minutes
3. Find total productive minutes

```js
const hours = [4, 6, 8, 5, 9];
```

---

### Q14. Shopping Cart – Reward Coins

1. Keep purchases above ₹500
2. Give 10 coins per purchase
3. Find total coins earned

```js
const purchases = [300, 800, 1200, 400];
```

---

### Q15. Fuel App – Total Fuel Cost

1. Keep fuel purchases above 5 liters
2. Multiply by ₹105 per liter
3. Find total cost

```js
const liters = [3, 6, 10, 4, 8];
```

---

### Q16. Interview Classic – Sum of Cubes
1. Keep odd numbers
2. Cube each number
3. Find total sum

```js
const numbers = [1, 2, 3, 4, 5];
```

---

### Q17. Performance Tracking – Bonus Points

1. Keep values above average
2. Add 5 bonus points
3. Find total score

```js
const scores = [10, 20, 30, 40, 50];
```

---

### Q18. Subscription App – Final Bill

1. Keep subscriptions above ₹300
2. Add 18% tax
3. Find final bill

```js
const plans = [199, 399, 599, 299];
```

---

### Q19. Learning App – Achievement Score

1. Keep scores >= 60
2. Square each score
3. Find total score

```js
const scores = [45, 60, 70, 30, 80];
```

---

### Q20. Interview Finisher ⭐

1. Keep numbers divisible by 3
2. Multiply by 10
3. Find total sum

```js
const numbers = [3, 6, 9, 10, 12];
```

---




// ---------------------------------------------------------------------------



/*****************************************************
 🟢 VARIABLES & DATA TYPES (1–15)
*****************************************************/

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

// 1
console.log(a == "a");   // true (value check)
console.log(a === "a");  // true (value + type same)

// 2
console.log(b == c);   // true (string "10" → number 10)
console.log(b === c);  // false (string !== number)
// ERROR REASON: == does type coercion, === does not.

// 3
b = Number(b);
console.log(b === c); // true

// 4
console.log(d === undefined); // true

// 5
if (d == null) console.log("d is null or undefined");
if (e == null) console.log("e is null or undefined");

// 6
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 7
console.log(c + "10"); // "1010" (string concat)
console.log(c + Number("10")); // 20 (fixed)

// 8
let result = c / "a";
console.log(Number.isNaN(result)); // true

// 9
let num1 = Number("10");
let num2 = +"10";

// 10
let str1 = String(c);
let str2 = c.toString();

// 11
console.log(Boolean(0)); // false
console.log(!!"hello");  // true

// 12
const pi = 3.14;
// pi = 3; ❌ ERROR: Assignment to constant variable

// 13
let x = 5;
let y = x;
y = 20;
console.log(x); // 5 (unchanged)

// 14
console.log(0 == false); // true (coercion)

// 15
console.log("5" === 5); // false (fixed using strict equality)



/*****************************************************
 🟢 OPERATORS (16–30)
*****************************************************/

// 16 Even without %
let n = 4;
console.log((n & 1) === 0);

// 17 Max without if or Math.max
let m1 = 5, m2 = 9;
let max = m1 > m2 ? m1 : m2;

// 18 Calculator
function calc(a,b,op){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="*") return a*b;
  if(op==="/") return a/b;
}

// 19 Default
let username = null;
console.log(username ?? "Guest");

// 20
let age = 18;
let status = age>=18 ? "Adult":"Minor";

// 21
let marks = 85;
let grade = marks>=90?"A":marks>=75?"B":"C";

// 22
true && console.log("Executed");

// 23
console.log(false && "Won’t run");

// 24
console.log("5" == 5);  // true
console.log("5" === 5); // false

// 25
let val = null;
console.log(val ?? "Default");

// 26
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

// 27
let arr1=[1,2], arr2=[3,4];
let merged=[...arr1,...arr2];

// 28
function sumAll(...nums){
  return nums.reduce((a,b)=>a+b,0);
}

// 29
let copy=[...arr1];
copy.push(99);

// 30
console.log(2+3*4); // 14 (multiplication first)



/*****************************************************
 🟡 CONTROL FLOW (31–45)
*****************************************************/

// 31
function gradeSys(m){
 if(m>=90) return "A";
 else if(m>=75) return "B";
 else return "C";
}

// 32
function gradeSwitch(g){
 switch(true){
  case g>=90: return "A";
  case g>=75: return "B";
  default: return "C";
 }
}

// 33
switch(2){
 case 1: console.log("One");
 case 2: console.log("Two"); // fall-through
}

// 34
let user="admin", pass="123";
if(user==="admin"){
 if(pass==="123") console.log("Login success");
}

// 35
if(user==="admin" && pass==="123") console.log("Login success");

// 36
if(true && true) console.log("Both true");

// 37
if(age>18 || age===18) console.log("Valid");

// 38
let choice=1;
switch(choice){
 case 1: console.log("Start"); break;
 case 2: console.log("Stop"); break;
}

// 39 Missing break shows fall-through

// 40 if-else equivalent of switch done above

// 41
let num=50;
if(num>=1 && num<=100) console.log("In range");

// 42
function test(val){
 if(!val) return "Invalid";
 return "Valid";
}

// 43
let light="red";
switch(light){
 case "red": console.log("Stop"); break;
 case "green": console.log("Go"); break;
}

// 44
let rain=true;
if(rain) console.log("Take umbrella");

// 45
function divide(a,b){
 if(b===0) return "Cannot divide by zero";
 return a/b;
}



/*****************************************************
 🟡 LOOPS (46–60)
*****************************************************/

// 46
for(let i=1;i<=100;i++) console.log(i);

// 47
for(let i=2;i<=100;i+=2) console.log(i);

// 48
for(let i=1;i<=10;i++){
 if(i===5) break;
}

// 49
for(let i=1;i<=10;i++){
 if(i%3===0) continue;
}

// 50
let sum=0;
for(let i=1;i<=5;i++) sum+=i;

// 51 Reverse number
let numRev=123, rev=0;
while(numRev>0){
 rev=rev*10+numRev%10;
 numRev=Math.floor(numRev/10);
}

// 52 Count digits
let count=0,temp=12345;
while(temp>0){ count++; temp=Math.floor(temp/10); }

// 53 Factorial
let fact=1;
for(let i=1;i<=5;i++) fact*=i;

// 54 Fibonacci
let f1=0,f2=1;
for(let i=0;i<5;i++){
 let next=f1+f2;
 f1=f2; f2=next;
}

// 55 Break nested
outer: for(let i=0;i<3;i++){
 for(let j=0;j<3;j++){
  break outer;
 }
}

// 56 continue shown above

// 57 Multiplication
for(let i=1;i<=10;i++) console.log(5*i);

// 58 Infinite loop fix
let k=0;
while(k<5){ k++; }

// 59 for vs while → for when count known

// 60
[1,2,3].forEach(n=>console.log(n));



/*****************************************************
 🟡 FUNCTIONS (61–80)
*****************************************************/

// 61
function sum(a,b){ return a+b; }

// 62
const sumArrow=(a,b)=>a+b;

// 63
function greet(name="Guest"){ return name; }

// 64
function outer(){ return function(){ return "Inner"; } }

// 65
function run(fn){ fn(); }

// 66
function process(cb){ cb("Done"); }

// 67 Pure
function add(a,b){ return a+b; }

// 68 Side effect
let counter=0;
function inc(){ counter++; }

// 69 Recursion
function factRec(n){
 if(n===1) return 1;
 return n*factRec(n-1);
}

// 70 Iterative
function factIter(n){
 let r=1;
 for(let i=1;i<=n;i++) r*=i;
 return r;
}

// 71
function total(...args){
 return args.reduce((a,b)=>a+b,0);
}

// 72
function hof(fn){ return fn(5); }

// 73 Closure
function counterFn(){
 let c=0;
 return ()=>++c;
}

// 74 Counter
let cnt=counterFn();

// 75 Currying
const multiply=a=>b=>a*b;

// 76 Memoization
function memo(){
 let cache={};
 return function(n){
  if(cache[n]) return cache[n];
  return cache[n]=n*n;
 }
}

// 77
function safe(a){
 if(typeof a!=="number") return "Invalid";
 return a*2;
}

// 78 Arrow doesn’t have own this

// 79 Run once
let once=(function(){
 let done=false;
 return function(){
  if(!done){ done=true; console.log("Run"); }
 }
})();

// 80 DRY
function square(n){ return n*n; }



/*****************************************************
 🔵 ARRAYS (81–101)
*****************************************************/

let arr=[1,2,3,4,5];

// 81
arr.reduce((a,b)=>a+b,0);

// 82
Math.max(...arr);

// 83
[...new Set([1,2,2,3])];

// 84
let sorted=[...arr].sort((a,b)=>b-a);
let second=sorted[1];

// 85
arr.filter(n=>n>0);

// 86
arr.map(n=>n*n);

// 87
arr.reduce((c)=>c+1,0);

// 88
arr.filter(n=>n>2).map(n=>n*2).reduce((a,b)=>a+b,0);

// 89
arr.find(n=>n>3);

// 90
arr.some(n=>n>4);

// 91
arr.every(n=>n>0);

// 92
let [first,...rest]=arr;

// 93
[...arr,...[6,7]];

// 94 Deep clone
JSON.parse(JSON.stringify(arr));

// 95 Bubble sort
function bubble(a){
 for(let i=0;i<a.length;i++){
  for(let j=0;j<a.length-1;j++){
   if(a[j]>a[j+1]){
    [a[j],a[j+1]]=[a[j+1],a[j]];
   }
  }
 }
 return a;
}

// 96 Rotate
function rotate(a){
 return [...a.slice(1),a[0]];
}

// 97 Flatten
function flat(a){
 return a.reduce((acc,val)=>
  Array.isArray(val)?acc.concat(flat(val)):acc.concat(val),[]);
}

// 98 Custom map
Array.prototype.myMap=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  res.push(cb(this[i],i,this));
 }
 return res;
}

// 99 Custom filter
Array.prototype.myFilter=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  if(cb(this[i])) res.push(this[i]);
 }
 return res;
}

// 100 Custom reduce
Array.prototype.myReduce=function(cb,acc){
 for(let i=0;i<this.length;i++){
  acc=cb(acc,this[i]);
 }
 return acc;
}

// 101 FINAL BOSS
let final = arr
 .filter(n=>n%2===0)
 .map(n=>n*10)
 .reduce((a,b)=>a+b,0);

console.log(final);



// ---------------------------------------------------------------------------

// object.key -- add all keys into array formate
let key_arr = Object.keys(demo);
// Use case: User profile form validation
// ex. website par thi user form ma data add kare chhe ane te data
// backend pase object formate ma aave chhe
// const userProfile = {
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   age: 25
// };
// // now check how many field user fill up
// const keys = Object.keys(userProfile);
// console.log(keys);# JavaScript Interview Questions & Answers

---

# 🟢 BEGINNER LEVEL (1–20)

### Q1. What is the difference between `var`, `let`, and `const`?
**Answer:**  
`var` is function-scoped and can be redeclared and reassigned.  
`let` is block-scoped and can be reassigned but not redeclared.  
`const` is block-scoped and cannot be reassigned.

---

### Q2. Name all primitive data types in JavaScript.
**Answer:**  
string, number, boolean, null, undefined, bigint, symbol

---

### Q3. How do you check the type of a variable?
**Answer:**  
Using the `typeof` operator.

---

### Q4. What is the difference between `==` and `===`?
**Answer:**  
`==` compares values only (allows type coercion).  
`===` compares value and type (strict comparison).

---

### Q5. What will be the output?
```js
let x = 10;
console.log(x + 5 * 2);
```
**Answer:** 20

---

### Q6. What is the output?
```js
console.log('5' + 2);
```
**Answer:** "52"

---

### Q7. What is the result?
```js
console.log(true && false);
```
**Answer:** false

---

### Q8. What is a function and why is it used?
**Answer:**  
A function is a reusable block of code used to perform a specific task.

---

### Q9. What will this return?
```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```
**Answer:** 5

---

### Q10. How do you create an array in JavaScript?
**Answer:**
```js
let arr = [1, 2, 3];
```

---

### Q11. What is the output?
```js
const arr = [10, 20, 30];
console.log(arr[1]);
```
**Answer:** 20

---

### Q12. What is an object in JavaScript?
**Answer:**  
An object is a collection of key-value pairs.

---

### Q13. What is the output?
```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```
**Answer:** 20

---

### Q14. What does an `if` statement do?
**Answer:**  
It executes code only if the given condition is true.

---

### Q15. What is the output?
```js
let x = 5;
if (x > 3) console.log('Yes');
```
**Answer:** Yes

---

### Q16. What is a loop and why is it used?
**Answer:**  
A loop is used to execute a block of code multiple times.

---

### Q17. What is the output?
```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
**Answer:**
0  
1  
2  

---

### Q18. When should you use a `while` loop?
**Answer:**  
When the number of iterations is not known beforehand.

---

### Q19. What is the result?
```js
let a = 5;
a++;
console.log(a);
```
**Answer:** 6

---

### Q20. How do you write comments?
**Answer:**  
Single-line: `// comment`  
Multi-line: `/* comment */`

---

# 🟡 INTERMEDIATE LEVEL (21–35)

### Q21. What is block scope?
**Answer:**  
Variables declared with `let` and `const` are accessible only inside `{}`.

---

### Q22. What is hoisting?
**Answer:**  
JavaScript moves variable and function declarations to the top of their scope before execution.

---

### Q23. Difference between `undefined` and `null`?
**Answer:**  
`undefined` means a variable is declared but not assigned.  
`null` means an intentional empty value.

---

### Q24. List all falsy values.
**Answer:**  
false, 0, "", null, undefined, NaN

---

### Q25. Difference between normal and arrow functions?
**Answer:**  
Arrow functions do not have their own `this`, have shorter syntax, and cannot be used as constructors.

---

### Q26. Parameters vs Arguments?
**Answer:**
```js
function add(a, b) {} // parameters
add(2, 3); // arguments
```
Parameters are variables in function definition.  
Arguments are values passed during function call.

---

### Q27. What happens if a function does not return anything?
**Answer:**  
It returns `undefined`.

---

### Q28. Difference between `push()` and `pop()`?
**Answer:**  
`push()` adds element at end.  
`pop()` removes last element.

---

### Q29. When should you use loops instead of array methods?
**Answer:**  
When you need more control like `break` or `continue`.

---

### Q30. How to loop through object properties?
**Answer:**
```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

### Q31. Explain `break` and `continue`.
**Answer:**  
`break` stops the loop.  
`continue` skips the current iteration.

---

### Q32. What is the result?
```js
console.log(0 == false);
console.log(0 === false);
```
**Answer:**  
true  
false  

---

### Q33. Rewrite using ternary:
```js
if (age >= 18) {
  status = 'adult';
}
```
**Answer:**
```js
status = age >= 18 ? 'adult' : status;
```

---

### Q34. What is array destructuring?
**Answer:**
```js
let [a, b] = [1, 2];
```
It extracts values from arrays into variables.

---

### Q35. What does spread operator do?
**Answer:**
```js
let newArr = [...arr];
```
It copies or merges arrays.

---

# 🔵 ADVANCED LEVEL (36–50)

### Q36. What is a closure?
**Answer:**
A function that remembers its outer scope even after outer function executes.

---

### Q37. What is execution context?
**Answer:**  
The environment where JavaScript code runs.

---

### Q38. What is the call stack?
**Answer:**  
A stack that keeps track of function execution (LIFO).

---

### Q39. Pass by value vs reference?
**Answer:**  
Primitives → copied by value.  
Objects/Arrays → copied by reference.

---

### Q40. Shallow vs Deep Copy?
**Answer:**  
Shallow copy copies reference.  
Deep copy copies full nested structure.

---

### Q41. What is a higher-order function?
**Answer:**  
A function that takes or returns another function.

---

### Q42. What is a callback function?
**Answer:**  
A function passed as an argument to another function.

---

### Q43. Why is immutability important?
**Answer:**  
It prevents accidental data changes and makes code predictable.

---

### Q44. What is the event loop?
**Answer:**  
It handles asynchronous operations by managing call stack and callback queue.

---

### Q45. Difference between synchronous and asynchronous?
**Answer:**  
Synchronous runs line by line.  
Asynchronous runs without blocking execution.

---

### Q46. Difference between `forEach` and `map`?
**Answer:**  
`forEach()` does not return a new array.  
`map()` returns a new array.

---

### Q47. What is the output?
```js
console.log([] == []);
```
**Answer:** false

---

### Q48. What is the output?
```js
console.log(typeof null);
```
**Answer:** "object"

---

### Q49. How do you check if a value is NaN?
**Answer:**
```js
Number.isNaN(value);
```

---

### Q50. Explain how JavaScript runs from start to finish.
**Answer:**  
1. Global Execution Context is created.  
2. Hoisting happens.  
3. Code runs line by line (Call Stack).  
4. Functions are pushed/popped from stack.  
5. Async tasks handled by Web APIs.  
6. Event Loop moves callbacks to stack.  
7. Execution completes.

---

## ✅ Complete JavaScript Interview Guide

// console.log(keys.length);

// Object.entries -- add key and value into array formate
// give array of arrays




// ---------------------------------------------------------------------------


// Tasks:
// 1. What is the DOM ? How Does it represent the HTML Structure?
// 2. Name the types of nodes in the DOM tree.
// 3. What's the difference between an element node and text node?
// 4. Inspect the following HTML in the browser and identify each node:
// <div>Hello<span>World</span></div>
// 5. What is Difference between getElementById and querySelector?
// 6. What does getElementsByClassName return? Is it an array?
// 7. Use querySelectorAll to select all buttons with class "buy-now".
// 8. T1: Select the heading of a page by ID and change its text to "Welcome to JS DOM"
// 9. T2: Select all <li> elements and print their text using a loop.
// let list = documnet.querySelectorAll("li");
// list.forEach((val)=>{
    // console.log(val.textContext)
    // })


    // for(let i=0; i < list.length; i++){
    //     console.log(list[i].textContent)
    // }


// 10. What's the differnce between innerText, textContent and innerHTML?
// 11. When should you use textContent instend of innerHTML?
// 12. T3: Select a Paragraph and replace its content with: <b> Updated </b> by JavaScript
// 13. How do you get the src of an image using JavaScript?
// 14. what does setAttribute() do?
// 15. Add a title attribute to a div dyanmically.
// 16. Remove the disabled attribute from a button.
// 17. what does createElement() do ? what's retured?
// 18. What's the difference between appendChild() and prepend()?
// 19. can you remove an element using removeChild() ?
// 20. create a new list item <li> New Task</li> and add it to the end of a <ul>.
// 21. create a new image element with a placeholder source and add it at the top of a div.
// 22. Select the first item in a list and delete it from the DOM.
// 23. How do you change the background color of an element?
// 24. What's the difference between .classList.add() and classList.toggle()?
// 25. Add hightlight class to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((elem)=>{
    // elem.classList.add("highlight")
    // })
// 26. Set the font size of all <p> elements to 18px using .style
 