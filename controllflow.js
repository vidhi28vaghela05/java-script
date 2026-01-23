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
