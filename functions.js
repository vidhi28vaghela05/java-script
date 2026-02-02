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

// function can be passed as arguments to other functions

// function can be returned from other functions
