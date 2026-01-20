// word vs Keywords
// variable -- temp data Store
// var , let and const
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
// var 123 = "number";
b = 24;
// let temp = "abc";
const temp_const = "Hello World !!";
console.log(a, _123, $123, b);

// declaration and initialization
var d; // declare
var temp_d = 12;
// var add value into window
// var is function
// var can be redeclared and ressigned
var name = "user name";
let name1 = "user name";
console.log(d, name1, temp_d);

// reassignment, redeclaration
var temp = 12;
temp = "number"; // reassignment
var temp = "text"; // redeclaration

// let temp_a ="24";
// var temp_a ="34";  // you can't redeclare let variable

const temp_b = "name";
// temp_b = "username"; // you can't ressign const variable

console.log(temp, temp_b);

console.log(
  " ------------------------------------------------------------------------------",
);

// scope using var variable(global, block, functional)
var e = 23; // global scope
console.log("global scope var variable" + e);
{
  var e = 25; // block scope
  console.log("block scope var variable" + e);
}
function abc() {
  var e = 30; // functional scope
  console.log("function scope var variable" + e);
}
abc();
console.log("Outside " + e);

console.log(
  " ------------------------------------------------------------------------------",
);

// scope using let variable

let f = 23; // global scope
console.log("global scope let variable" + f);
{
  let f = 25; // block scope
  console.log("block scope let variable" + f);
}
function abc() {
  let f = 30; // functional scope
  console.log("function scope let variable" + f);
}
abc();
console.log("Outside " + f);

console.log(
  " ------------------------------------------------------------------------------",
);

// scope using const variable

const F = 23; // global scope
console.log("global scope const variable" + F);
{
  const F = 25; // block scope
  // const F= 23;
  console.log("block scope const variable" + F);
}
function abc() {
  const F = 30; // functional scope
  console.log("function scope const variable" + F);
}
// const F= 23;
abc();
console.log("Outside " + F);

console.log(
  " ------------------------------------------------------------------------------",
);

// Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

// console.log(g);
// console.log(j);
let j = 12;

// Hoisting Imapact
// Hoisting --> when your create a vaiable into js that braek
// into two part first is declare part that go to up and there
// initialization part that go down

var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefind;

// ------------------------------------------------------------------------------

console.log(
  " ------------------------------------------------------------------------------",
);

// ===============================
// Example 1: let (Temporal Dead Zone)
// ===============================
console.log("Example 1:");

// console.log(nm);
let nm = "name";

// ===============================
// Example 2: var hoisting
// ===============================
console.log("\nExample 2:");

console.log(m);
var m = "username";

// ===============================
// Example 3: var block scope issue
// ===============================
console.log("\nExample 3:");

var x = 1;
{
  var x = 2;
}
console.log(x);

// ===============================
// Example 4: let block scope
// ===============================
console.log("\nExample 4:");

let ab = 10;
{
  let ab = 20;
  console.log("Inside:", ab);
}
console.log("Outside:", ab);

// ===============================
// Example 5: const object
// ===============================
console.log("\nExample 5:");
const person = { name: "demo" };
console.log(person);
console.log(person.name);

// on console.log
person.name = "user"; // ✅
// person = {}; // ❌
console.log(person);
console.log(person.name);