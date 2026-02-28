let inp = document.querySelector("#task_inp");
let btn = document.querySelector(".add_task");
let ul = document.querySelector(".task_list");

let tasks = JSON.parse(localStorage.getItem("Tasks_Data")) || [];

btn.addEventListener("click", () => {
  let new_task = inp.value;

  if (new_task !== "") {
    tasks.push({ text: new_task, done: false });
    SaveData();
  } else {
    let h1 = document.createElement("h1");
    h1.textContent = "You Have Input Something to Add into Your Task List";
    document.body.prepend(h1);
    h1.style.color = "red";
  }

  inp.value = "";
  console.log(tasks);
  ShowData();
});

// save data into Local Storage
function SaveData() {
  localStorage.setItem("Tasks_Data", JSON.stringify(tasks));
}

// Show into HTML
function ShowData() {
  console.log(tasks);
  ul.innerHTML = "";

  //create list
  tasks.forEach((task) => {
    console.log(task); // get single task
    // create list for every task (create li)
    const li = document.createElement("li");
    li.innerHTML = ` <input type="checkbox" ${task.done ? "checked" : ""} /><span class= "${task.done ? "line" : ""}">${task.text}</span><button class="delete">Delete</button>`;
    ul.appendChild(li);
  });
}

ul.addEventListener("click", (e) => {
  const li = e.target.closest("li"); // target ni najik na li ni value
  const index = [...ul.children].indexOf(li);

  // remove Task
  console.log(e.target);
  if (e.target.classList.contains("delete")) {
    tasks.splice(index, 1);
  }

  // checked Task
  if (e.target.type === "checkbox") {
    tasks[index].done = e.target.checked;
  }

  SaveData();
  ShowData();
});

ShowData();
