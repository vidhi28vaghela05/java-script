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
 