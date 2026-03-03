// 1. select -> Event --> Function (Change)
// 2. Show Form and Close Form
// 3. form validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show All data into HTML
// 7. Create UP and Down Btn
let add = document.querySelector("#add-note");
let close = document.querySelector(".closeForm");
let form = document.querySelector("form");
let formContainer = document.querySelector(".form-container");
add.addEventListener("click", () => {
  formContainer.style.display = "block";
});

close.addEventListener("click", () => {
  formContainer.style.display = "none";
});

//form - validation, submit, reset
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let photo = document.querySelector(
    'input[placeholder = "https://example.com/photo.jpg"]',
  );
  let username = document.querySelector(
    'input[placeholder = "Enter full name"]',
  );
  let home = document.querySelector('input[placeholder = "Enter home town"]');
  let note = document.querySelector(
    'input[placeholder = "e.g., Quick appointment note"]',
  );
  let category = document.querySelectorAll('input[name="category"]');
  console.log(username, photo, home, note, category);

  const imgUrl = photo.value.trim();
  const u_name = username.value.trim();
  const town = home.value.trim();
  const purpose = note.value.trim();
  let selectd = false;
  category.forEach((element) => {
    if (element.checked) {
      selectd = element.value;
    }
  });
  if (imgUrl === "") {
    alert("Please enter image url");
    return;
  }
  if (u_name === "") {
    alert("Please enter full name");
    return;
  }
  if (town === "") {
    alert("Please enter home town");
    return;
  }
  if (purpose === "") {
    alert("Please enter note");
    return;
  }
  saveData({
    imgUrl,
    u_name,
    town,
    purpose,
    selectd,
  });
  form.reset();
  formContainer.style.display = "none";
});
function saveData(note) {
  let data = JSON.parse(localStorage.getItem("notes")) || [];
  data.push(note);
  localStorage.setItem("notes", JSON.stringify(data));
}
let stack = document.querySelector(".stack");
function RenderUi(data) {
  let allData = JSON.parse(localStorage.getItem("notes"));
  allData.forEach((element) => {
    //div(card)
    let card = document.createElement("div");
    card.classList.add("card");
    //image(avatar)
    let img = document.createElement("img");
    img.classList.add("avatar");
    img.setAttribute("src", element.imgUrl);

    //h2
    let h2 = document.createElement("h2");
    h2.textContent = element.u_name;

    //div(info) ==>  span(home town)
    let info1 = document.createElement("div");
    info1.classList.add("info");

    let home = document.createElement("span");
    home.textContent = "Home town";
    let town = document.createElement("span");
    town.textContent = element.town;

    //div(info) ==>  span(purpose  , note(data))
    let info2 = document.createElement("div");
    info2.classList.add("info");

    let purpose = document.createElement("span");
    purpose.textContent = "Purpose";
    let note_msg = document.createElement("span");
    note_msg.textContent = element.purpose;

    //div (button) ==> button (call,msg)
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    let call = document.createElement("button");
    call.classList.add("call");
    call.innerHTML = `<i class="ri-phone-line"></i> Call`;
    let msg = document.createElement("button");
    msg.classList.add("msg");
    msg.innerHTML = `<i class="ri-message-line"></i> Message`;

    //APEND
    stack.appendChild(card);
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(info1);
    card.appendChild(info2);
    info2.appendChild(purpose);
    info2.appendChild(note_msg);
    info1.appendChild(home);
    info1.appendChild(town);

    card.appendChild(buttons);
    buttons.appendChild(call);
    buttons.appendChild(msg);
    console.log(stack);
  });
}

RenderUi();

//up btn
let upbtn = document.querySelector("#upBtn");
upbtn.addEventListener("click", () => {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.prepend(lastChild);
  }
});
let downBtn=document.querySelector("#downBtn");

downBtn.addEventListener('click',()=>{
    let firstChild=stack.firstElementChild;
if(firstChild){
    stack.append(firstChild,stack.firstElementChild);
}
});