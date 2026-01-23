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



// Early Return Pattern
function score(value) {

    if (value > 90) {
        return "Value is more than 90";
    }

    if (value >= 80) {
        return "Value is between 80 and 90";
    }

    if (value >= 70) {
        return "Value is between 70 and 79";
    }

    if (value >= 60) {
        return "Value is between 60 and 69";
    }

    return "Value is less than 60";
}


score(100);
console.log(score(95)); // Value is more than 90
console.log(score(85)); // Value is between 80 and 90
console.log(score(72)); // Value is between 70 and 79
console.log(score(65)); // Value is between 60 and 69
console.log(score(40)); // Value is less than 60


function score1(value) {

    if (value > 90) return "Value is more than 90";
    if (value >= 80) return "Value is between 80 and 90";
    if (value >= 70) return "Value is between 70 and 79";
    if (value >= 60) return "Value is between 60 and 69";

    return "Value is less than 60";
}

score1(100);
console.log(score1(95)); // Value is more than 90
console.log(score1(85)); // Value is between 80 and 90
console.log(score1(72)); // Value is between 70 and 79
console.log(score1(65)); // Value is between 60 and 69
console.log(score1(40)); // Value is less than 60

// ---------------------------------------------------------------------------



let x = 2;

switch (x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}


// ---------------------------------------------------------------------------


function getGrade(score) {

    if (score < 0 || score > 100) return "Invalid Marks";

    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 33) return "D";

    return "Fail";
}


console.log(getGrade(95));   // A+
console.log(getGrade(85));   // A
console.log(getGrade(75));   // B
console.log(getGrade(65));   // C
console.log(getGrade(45));   // D
console.log(getGrade(20));   // Fail
console.log(getGrade(120));  // Invalid Marks

// ---------------------------------------------------------------------------

function rps(player1, player2) {

    if (player1 === player2) return "Draw";

    if (player1 === "rock" && player2 === "scissors") return "rock";
    if (player1 === "paper" && player2 === "rock") return "paper";
    if (player1 === "scissors" && player2 === "paper") return "scissors";

    return player2;
}

// ---------------------------------------------------------------------------

