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


// change -- when you chagne elements state
let select = document.querySelector(".sel");
let device = document.querySelector(".device")

select.addEventListener("change", (dets)=>{
    // console.log(dets);

    console.log(dets.target.value);
    device.textContent = dets.target.value;
})


let box1 = document.querySelector(".box")
let bg_imp = document.querySelector(".bg-imp")
let border_imp = document.querySelector(".border-imp")

bg_imp.addEventListener("change", (dets)=>{
    box1.style.backgroundColor=dets.target.value
})

border_imp.addEventListener("change", (dets)=>{
    box1.style.borderColor=dets.target.value
})



let form = document.querySelector("form");
form.addEventListener("submit",()=>{
    document.body.style.backgroundColor="red";
});

// mousemove and mouseout
let box2 =document.querySelector(".box2");

box2.addEventListener("mousemove",()=>{
    box2.style.backgroundColor="skyblue";
    box2.style.width = "300px"
});
box2.addEventListener("mouseout",()=>{
    box2.style.backgroundColor="darkgreen";
    box2.style.width = "100px"
});


//keydown 
let text = document.querySelector(".keydown");
text.addEventListener("keydown", ()=>{
    text.style.backgroundColor="black";
    text.style.color="white";
    text.style.width="5rem";

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




