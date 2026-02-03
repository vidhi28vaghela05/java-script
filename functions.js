// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement


// type of functions
// function name(params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression
let fnc = function () {};
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {};



function temp_cart() {
  console.log("Adding Producat");
}


temp_cart();
temp_cart();
temp_cart();


// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli (pass) kareli values)

function cart(producat, price) {
    // product -- params 
  console.log("product ", producat, ": price", price)
}

cart("tablet", 1000 );
cart("mobile", 50000);
cart("laptop", 90000);

// convert into array function
let cart2 = (producat, price) => {
    // product -- params 
  console.log("product ", producat, ": price", price)
}
cart2("tablet", 1000 );
cart2("mobile", 50000);
cart2("laptop", 90000);

// Default, rest and spread parameters in function

// default
function abc(v1, v2){
  console.log(v1, v2);
}

abc(20, 21);

function cart3(product="product", price="price"){
  console.log(product, price)
}
cart3("laptop", 50000);





// rest --> Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest --> ... jo function na parameters ni andar lakhvana aave chhe)

function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
  console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function cart4(a, b, ...product) {
  console.log(a, b, product);
}

cart4("p1", "p2", "p3", "p4", "p5");

function abcd1(...numbers) {
  console.log(numbers);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2(v1, v2, ...numbers) {
  console.log(v1, v2, numbers);
}

abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// return or early return 
// return --> function mathoi thi value bahar mokalva mate use kariye chhiye.

function getValue1(value) {
  if (value < 25) return "Value is less than 25";
  else if (value < 50) return "Value is less than 50";
  else if (value < 75) return "Value is less than 75";
  return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);


// first Class Function
// function can be treated as variables
// let fnc = function (){} --> function expression
// let fnc = {}=> {} --> arrow function
let buynow1 = function(product, price) {
  console.log(product,  price)
}
buynow1("mobile", 50000);
let buynow2 = (product, price) => {
  console.log(product,  price)
} 
buynow2("laptop", 90000);
// covert into arrow function

// function can be passed as arguments to other functions
// let fnc = function (){} --> function expression
// fnc(function(){})
// function abc1(v1){
//   return v1();
// }


function abc1(v1, v2){
    console.log(v2);
    return v1();
}

abc1(function(){
  console.log("first class function");
},"hello");



function abc2(v1, v2){
  
    console.log(v2);
      return v1();
}

abc2(function(){
    console.log("second class function")
}, "hello")


// function can be returned from other functions

function abc3(){
    return function (){
        console.log("function within function")
    }
}

abc3()();

function abc4(){
    return () => {
        console.log("arrow function within function")
    }
}

abc4()();



// higher order function (HOF)
// function that takes another function as an argument or returns a
// function as a result (eva function je return kare ek function athava
// accept kare ek function params ma)

// function abcd(val){ val(); }
// --> abcd(function(){ console.log("hello") })
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher order

// pure vs impure function
// pure function --> je function same input par same output aapse ane te koi bahar na state ne modify na kare(pure function --> je function bahar na state ne modify na kare )
let a= 20;
function change_a(){
  return "a not change(pure function): " + a;
} // --> pure function
console.log(change_a());

// impure function --> je function same input par alag alag output aapse athava te bahar na state ne modify kare(impure function --> je function bahar na state ne modify kare )
function change_a1(){
  a++;
   a++;
   a+=3;
  return "a changed(impure function): " + a;
} // --> impure function
console.log(change_a1());
console.log(change_a1());


// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
// function outer(){
//     let outer_var = "Outer Function Variable";
//     function inner(){
//         console.log(outer_var);
//     }
//     inner();
// }
// outer();

// lexical scope --> nested function can access variables declared in their outer scope
function outer1(){
    let outer_var = "Outer Function Variable ";
    function inner1(){
        console.log(outer_var);
    let inner_var = "Inner Function Variable ";
    function most_inner(){
        console.log(outer_var);
        console.log(inner_var);
    }
    most_inner();
}
    inner1();
}
outer1();


// Hoisting in function
// use case --> show project structure

temp_fnc();

function temp_fnc(){
    console.log("hoisting in function")
}
// function declaration is hoisted

// temp_fnc1(); // error  
let temp_fnc1 = function(){
    console.log("hoisting in function expression")
};
temp_fnc1();

// function expression is not hoisted

// temp_fnc2(); // error  
let temp_fnc2 = () => {
    console.log("hoisting in arrow function")
};
temp_fnc2();
// arrow function is not hoisted    
