let inp = document .querySelector("#task_inp");
let btn = document.querySelector(".add_task");
let ul = document.querySelector(".task_list");
let tasks= JSON.parse(localStorage.getItem("Tasks_Data")) || [];
console.log(tasks);
btn.addEventListener("click",()=>{
    console.log(inp.value);
    let new_task = inp.value;
    if(new_task !== ""){
    tasks.push({text: new_task, done:false});
    SaveData();
}else{
    let h1 = document.createElement("h1");
    h1.textContent = "You have input something to and  innto your  task list";
    document.body.prepend(h1);
    h1.style.color ="red";
  
}
});
// save data in local storage
function SaveData(){
    localStorage.setItem("Tasks_Data",JSON.stringify(tasks));
}
// show in tnto HTML
function ShowData(){
console.log(tasks);
// ul.innerHTML = "";
// create list
tasks.forEach((task)=>{
    console.log(task); // get single task
    // create list for every task (create li)
    const li = document.createElement("li");
    li.innerHTML = task.text;
    ul.appendChild(li);
});
}
ShowData();