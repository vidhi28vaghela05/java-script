// Objects vs Array
// Objects -- when you want to show all data based on
// one entity(k j entity mate all data jota hoy) (ex.
// one user data)

// Array -- when you want to show entity (ex. all
// users)

// create
// varabile = {}
// key : value --> key-value sturcture

let user ={
    name:"Test",
    email:"test@gmail.com",
    rollno:7
}


// access (dot vs square notation)

// variable_name.key;
user.name;
user.email;

// user.first-name;

// variable_name['key'];
// user['name'];

// user[first_name]

// let demo = "name"

// user[demo] --> convert into name (demo = 'name')

// --> output: abc


// Nesting and Deep Access
const user1 = {
  name: "test",
  address: {
    city: "Surat",
    pin: 395009,
    locations: {
      lat: 24.2,
      lng: 77.4,
    },
  },
  email: "test@gmail.com",
}; // -- nested Object
user1.address.locations.lat;  // --> Deep Access
// user1.address.location.lng;

// Object destructuring
let { lat, lng } = user1.address.locations;
let { name, email, address } = user1;
let { city } = user1.address;
let { lat: abc_lat } = user1.address.locations;




// destructure and rename variable name

let demo = {
  last_name: "User",
  age: 45,
  email: "demo@user.com",
};

// Looping (for-in loop)
// for (variable name in object_name){}
for (const key in demo) {
  // console.log(key);
  // obj.key --> not working
  // console.log(demo[key]);
  // console.log(key, ":", demo[key]); //--- log whole object
}

// Copying Objects: Spred, Object.assign, deep-clone
// Spred
// let user_data = { ...demo };


let user_data = { gender: "Male", role: "user", ...demo }  // add key-value and copy object
// Use case: State update
// const user = {
//   name: "Amit",
//   age: 30
// };
// const updatedUser = {
//   ...user,
//   age: 31
// };
// console.log(updatedUser);

// Object.assign — copy and add keys-value
let user_data_assign = Object.assign({}, demo);  // - nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number: 7894567894}, demo);  // - add and copy
// Use case: Default settings + user settings merge
// const defaultSettings = {
//   theme: "light",
//   language: "en"
// };
// const userSettings = {
//   theme: "dark"
// };
// const finalSettings = Object.assign({}, defaultSettings, userSettings);
// console.log(finalSettings);



// deep clone
let temp_user1_clone = { ...user1 }
// user1_clone.address.city = "Valsad" --> that will change value of user1 too
// issue : when you clone & copy nested object using spred or object.assign into new
// variable that copy all value but nested object pass only refrence not copy
// (jyare tame nested object(parent obj.) spred ma upyog thi copy karo tyare nested obj.
// (child obj.) reference pass karshe -- value copy thase nahi)
// How to clone that -- use deep clone
// first convert your object to string
// JSON - JavaScript Object Notation
// JSON.stringify(obj_name) -- convert object into string
// JSON.parse(stringify_Object) -- convert string to object
let clone_user1 = JSON.parse(JSON.stringify(user1))
// Deep clone = completely new memory
// use case:
// Real time use:
// API response handling
// Avoid data mutation bugs

// object.key -- add all keys into array formate
