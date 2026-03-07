// Design Patterns:
// to make a scalable project or write a thousand lines of code you have to learn about design pattern

// Module Pattern (IIFE)
// Module Pattern ek design pattern chhe, jema aapde code ek self executing function (IIFE) ni andar lakhiye chhiye, jethi variable and fnc private rahe

// in this fnc we can only return that values or fnc that we want to use outside

// main fecture or this pattern is data hidding(encapsulation) and clean structure, secure code, reusable and manageable code

// IIFE
let bank = (function () {
  let bankbalanace = 10000;

  function CheckBalance() {
    console.log(bankbalance);
  }

  function SetBalance(val) {
    bankbalanace += val;
  }

  function withdraw(val) {
    if (val < bankbalanace) {
      bankbalanace -= val;
      console.log("New Balance", bankbalanace);
    } else {
      console.log("Insufficient Balance", bankbalance);
    }
  }

  return {
    CheckBalance,
    SetBalance,
    withdraw,
  };
})();

// in Module pattern --> we create a IIFE --> IIFE return --> we create an object that return function

// Revealing Module Pattern

// Factory Function Pattern
// Ek function banavo chho, je objects create kare chhe (factory = objects banava nu machine)

// factory function pattern ek aevi design chhe jema aapde ek simple function banaviye chhiye, je nava objects create kari ne return kare chhe

// aa pattern no main idea chhe --> object creation ne ek function na through control karvu

// every time will call a factory funtion, tyare ek new object malse jema aapade methods and private data rakhi sakye chhiye

// aa pattern tyare use karva ma aave chhe jayre, ek j type na multiple objects create karvana hoy, jeva ke users, products, tasks, etc.

function createProduct(name, price,  CompanyName){
    let stock =10;
    return{
        name,
        price,
        CompanyName,
        buy(qty){
            if(qty < stock){
                stock-=qty;
                console.log(`Booked ${name}, left stock are : ${stock}`);
            }else{
                console.error(`We Don't have these many pieces. we only have : ${stock}`,);
            }
        },
        refillStock(qty){
            stock+=qty;
            console.log(`Stock Updated. New Stock ${stock}`);
        },
    };
}

let samsung = createProduct("S26 Ultra", 140000, "Samsung");
let kitkat = createProduct("kitkat",20, "Nestle");

//observer pattern (basic pub-sub) (Class)

class Youtube {
    constructor() {
        this.subscribers = [];
    }
    CountUser(){
        let total = this.subscribers.length;
        console.log("You Have Total ",total, " Subscribers")
    }
    Subscribe(user){
        this.subscribers.push(user);
        console.log(`You New Subscriber ${user.name}`);
    }
}

class User {
    constructor(name) {
        this.name= name;
    }
    update(data){
        console.log(data);
    }
}
let laminds = new Youtube();
let sub = new User("test_user");


























