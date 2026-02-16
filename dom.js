 // DOM --- Document Object Model
// All Website Code ---> DOM
// Website Output --> DOM
// DOM --- HTML body


// DOM Tree Structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem), comment


// DOM Manipulation - change body or website using
// select element from html
// change text
// change html
// change css
// change attribute
// event listeners



//selecting elements
//getelementbyid
let a = document.getElementById("abc");
console.log(a);
// console.dir(a);


// getElementsByClassName
let b = document.getElementsByClassName("abc");
console.dir(b);


// getElementsByTagName
let temp_c = document.getElementsByTagName("h1");
console.dir(temp_c);


// querySelector and querySelectorAll
// most used in project and used by company
let c = document.querySelector("h1"); // ---- only select first element that find in your html
console.dir(c);


let d = document.querySelector("h1"); // ---- only select first element that find in your html
console.dir(d);


// // Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);
e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

e.textContent = "h1 tag"

// e.innerHTML = "<i>first h1 tag</i>"
// e.outerHTML = "<i>h1 with outertext</i>"
// e.outerHTML = "h1 with outertext"

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

// ----------------------------------------------------
// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
// console.log("get Attribute", info) // -- give value of href attribute

link.href = "https://www.google.com/"
// element.setAttribute("name", "change")
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value



// ------------------------------------
// Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend
// createElement
let text_h1 = document.createElement("h1");
console.log(text_h1);
text_h1.textContent = "create h1 with JS"

// append / prepend
document.body.append(text_h1);
document.body.prepend(text_h1);

// appendChild

// append vs appendChild
// remove vs removeChild
// ------------------------------------
