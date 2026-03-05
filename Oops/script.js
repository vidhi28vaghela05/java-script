// Object Oriented Javascript
// OOPS

// dar vakhat blueprint banavo ke objectr is kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming

// blueprint(object kevo dekhase object ma su method) --> based on blueprint create objects

// blueprint -- constructor
//  function based contructor --> Constructor Function --> function Name always start with Capital letter

function CreatePencil(name, price, qty, color) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.color = color;

  //  write
  this.write = function (msg) {
    let h1 = document.createElement("h1");
    h1.textContent = msg;
    h1.style.color = color;
    console.log(this);

    document.querySelector("body").appendChild(h1);
  };

  // erase
  this.erase = function () {
    document.querySelector("h1").remove();
  };
}
// blue print
let pencil = new CreatePencil("Doms", 100, 10, "black");
let pencil1 = new CreatePencil("natraj", 100, 20, "red");
// console.log("Doms Pencil",pencil);

// jo construction function koi field tena prototype ma add attach kari de to te field badha object ma available thase

CreatePencil.prototype.shape = "round";

// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function

// Class in JavaScipt
// class is a syntactical sugar over construction function, class ma apde construction function no upyog kariye chhiye

// why use class : class is more readable and easier to understand than construction function

class CreatePen {
  constructor(name, price, qty, color) {
    // what is constructor: constructor is a special method which is called when an object is created, it is used to initialize the object
    // why use constructor: constructor is used to initialize the object, it is called automatically when an object is created, is used to set the initial values of the object

    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color = color;

    //  write
    this.write = function (msg) {
      let h1 = document.createElement("h1");
      h1.textContent = msg;
      h1.style.color = color;
      console.log(this);

      document.querySelector("body").appendChild(h1);
    };
    // erase
    this.erase = function () {
    document.querySelector("h1").remove();
  };
  }
}

let pen = new CreatePen("Cell", 160,10, "green");
let pen1 = new CreatePen("Reynold", 200,10, "red");

// extends ---> super
// create a new class that hold old class value and also have some new values
// copy old class and add new value

class User {
    constructor(name, email, password){
        this.name =  name;
        this.email= email;
        this.password= password;
        this.role = "user";
    }
}
let user = new User("test", "test@gamil.com", "abc@123");
console.log("user", user);

class Admin extends User{
     constructor(name, email, password, rigths){
       super(name, email, password) // extends class constrouctor -->super
       this.role = "admin";
       this.rigths= rigths;
    }
}
let admin = new Admin("admin", "admin@gamil.com", "abc@123","delete user, edit user, create user",);
console.log("admin", admin);



// prototypal inheritance vs classical inheritance
// classical Inheritance --> create a classes and extends their classes

// inheritance meaning --> class to class inheritance (copy one class into another class)

// prototypal inheritance --> object to object ek object che tene tame all props/methods ne inherit kari cho ne nava object ma

// create form that can save data into local storage with help of using OOPS (only)







