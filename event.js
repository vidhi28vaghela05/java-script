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








