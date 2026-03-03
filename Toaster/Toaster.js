let d = 20;
function abc() {
  console.log(d);
}
function def() {
  let d = 25;
  abc();
}
def();

// clg ans -->  20

function parent() {
  let a = 12;
  return function () {
    console.log(a);
  };
}

let fnc1 = parent()();
console.log(fnc1);
// console.log()

// counter
function counter() {
  let a = 0;
  return function () {
    a++;
    console.log(a);
  };
}
let fnc = counter();
fnc(); //1
fnc(); //2
fnc(); //3
fnc(); //4
fnc(); //5

let fnc2 = counter();
fnc2(); //1
fnc2(); //2
fnc2(); //3
fnc2(); //4
fnc2(); //5

// create toaster
function CreateToaster(config) {
  let toast = document.querySelector(".toast");

  return function (noti) {
    let div = document.createElement("div");
    div.className = `toaster ${config.theme === "dark"? "bg-gray-800 text-white":"bg-white text-pink-600 border-2 border-pink-600"} px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none`;

    toast.className +=` ${config.positionX === "left"?"left-10":"right-10"} ${config.positionY === "bottom"?"bottom-10":"top-10"}`
    div.textContent = noti;

    toast.appendChild(div);

    setTimeout(() => {
        toast.removeChild(div);
    },config.duration * 1000);
  };
}


let toaster = CreateToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "ligth",
    duration: 3,

});
toaster("Welcome To DashBoard");
setTimeout(()=>{
    toaster("You Have 2 New Notification");
},2000);
setTimeout(()=>{
    toaster("Product Upload Successfully");
},4000);

