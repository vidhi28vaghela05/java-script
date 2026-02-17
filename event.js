// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are even

// Event Listener - event nu reaction -- give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})

// ==============================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
   
   if(btn.textContent === "Dark mode"){
    btn.textContent = "Light mode"
    document.body.style.backgroundColor ="black";
}
else{
    
    btn.textContent = "Dark mode"
    document.body.style.backgroundColor ="white";
}
})
let btn1 = document.querySelector(".btn1");
let box = document.querySelector(".color-card");
btn1.addEventListener("click",()=>{
   
   if(btn1.textContent === "Dark mode"){
    btn1.textContent = "Light mode"
    box.style.backgroundColor ="red";
}
else{
    
    btn1.textContent = "Dark mode"
    box.style.backgroundColor ="white";
}
})

//input
//how to know which is typed ?
let inp =document.querySelector("input");
inp.addEventListener("input",(dets)=>{
    if(dets.data!=null){

    console.log(dets.data);
    }
})

// ---------------------------------------------------------------------------


// 1️⃣ Change heading text
let headingBtn = document.getElementById("changeText");
let heading = document.getElementById("main-heading");

headingBtn.addEventListener("click", () => {
    heading.textContent = "Welcome to JS DOM";
});


// 2️⃣ Add new task
let addBtn = document.getElementById("addTask");
let ul = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "New Task";
    ul.appendChild(li);
});


// 3️⃣ Delete first task
let deleteBtn = document.getElementById("deleteFirst");

deleteBtn.addEventListener("click", () => {
    let firstItem = document.querySelector("#task-list li");
    if (firstItem) {
        firstItem.remove();
    }
});


// 4️⃣ Highlight even items
let highlightBtn = document.getElementById("highlightEven");

highlightBtn.addEventListener("click", () => {
    let items = document.querySelectorAll("#task-list li:nth-child(2n)");
    
    items.forEach((item) => {
        item.classList.toggle("highlight");
    });
});


// 5️⃣ Change paragraph font size
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p) => {
    p.style.fontSize = "18px";
});


// 6️⃣ Dark Mode Toggle
let darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (darkBtn.textContent === "Dark Mode") {
        darkBtn.textContent = "Light Mode";
    } else {
        darkBtn.textContent = "Dark Mode";
    }
});


// 7️⃣ Add Image at Top
let imgBtn = document.getElementById("addImage");

imgBtn.addEventListener("click", () => {
    let img = document.createElement("img");
    img.src = "https://via.placeholder.com/150";
    img.style.display = "block";
    img.style.marginBottom = "10px";

    document.body.prepend(img);
});




11111
