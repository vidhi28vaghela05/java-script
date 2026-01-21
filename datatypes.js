// Data Types:

// Two Type of Data Types:

// 1. Primitive Data Types
// copy --> real value
let a = 5;
let b = a;

// types: string, number, boolean, null, undefined, symbol, bigint

// 2. Non-Primitive Data Types (Reference Data Types) [], (), {}
// copy --> give refrence of parent
let temp_d = [1, 2, 3];
let temp_e = temp_d;

// types: arrays [], objects {}, functions ()



// ------------------------------------------------------------------------------

console.log(
  " ------------------------------------------------------------------------------",
);


// <-- Primitive Data Types -->

// types: string, number, boolean, null, undefined, symbol, bigint

// string:
// ''  - single quotes
// ""  - double quotes
// ``  - backticks
let d = "name";
d = "username";
d = `firstname`;

// number:
let e = 12;
e = 12.25;
e = -25;

//boolean:
let f = true;
f=false;

// null
// you give a value
let g = null;

// underfined:
// you don't give a value, by defualt value
let h;


// ------------------------------------------------------------------------------


// symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");

// check u1===u2
let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = "uid";
let u4 = Symbol("uid");

// obj[u3] = "001";

// bigint:
// check range of number , Number.Max_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;

let num2 = 9007199254740991n;
num2 + 4n;


// ------------------------------------------------------------------------------


// <----Non-Primitive Data Types---->
// types: arrays [], objects {}, functions ()

let temp_array = ["user1", "user2", "user3"];

let temp_obj = {name: "test", age: 9, phone_number: 558998554 };

let profiles = [
  { name: "test1", age: 10, phone_number: 98989775 },
  { name: "test2", age: 15, phone_number: 989889775 },
  { name: "test3", age: 11, phone_number: 9898975575 }
];

function name(params) {}



// ------------------------------------------------------------------------------


// Dynamic Typing
let u_name = "username"; // string
u_name = 123; // number
u_name = {}; // object

// javascript --> typescript

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof
// null, 1 + "1" = "11", 1 == "1"
// why typeof NaN --> number
// NaN is a failed number operations that why that type is
// number
// ex. "hello" - 5 --> NaN



