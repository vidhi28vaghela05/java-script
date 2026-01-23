// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) -> condition true hoy to {} code run
if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run

if (!12) {
    console.log("number");
}

if (!0) {
    console.log("number");
}


// ------------------------------------------------------------------------------



// if-else Statement
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} 
// condition is false that why if statement not run
else {
    console.log(false); // if if statement condition is false then run this code
}

if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}


// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else {
}
*/

let loggedin = true;
let admin = true;

if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}


let amount = 5400;

if (amount >= 5000) {
  console.log("30% discount");
} 
else if (amount >= 3000) {
  console.log("20% discount");
} 
else if (amount >= 1000) {
  console.log("10% discount");
} 
else {
  console.log("No discount");
}

let isLoggedIn = true;
let membership = "gold"; // gold, silver, none

if (isLoggedIn && membership === "gold") {
  console.log("Welcome Gold Member! You get 30% discount.");
} 
else if (isLoggedIn && membership === "silver") {
  console.log("Welcome Silver Member! You get 20% discount.");
} 
else if (isLoggedIn) {
  console.log("Welcome! You get 10% discount.");
} 
else {
  console.log("Please login to get a discount.");
}


// Switch case Statement
switch ("BOGO") // value -> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;

    case "BOGO":
        console.log("Buy one get one");
        break;

    case "BlackFriday":
        console.log("It's black Friday Sale - get at Rs. 50");
        break;

    default:
        console.log("Offer Not Vaild");
}



let userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("Welcome Admin Dashboard");
        break;

    case "manager":
        console.log("Welcome Manager Dashboard");
        break;

    case "user":
        console.log("Welcome User Home Page");
        break;

    case "guest":
        console.log("Please Login or Register");
        break;

    default:
        console.log("Invalid Role");
}
