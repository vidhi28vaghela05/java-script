// Object Oriented Javascript
// OOPS

// dar vakhat blueprint banavo ke objectr is kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming

// blueprint(object kevo dekhase object ma su method) --> based on blueprint create objects

// blueprint -- constructor
//  function based contructor --> Constructor Function --> function Name always start with Capital letter

function CreatePencil(name, price, qty, color){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.color= color ;
   
//  write 
this.write = function(msg){
    let h1 = document.createElement("h1");
    h1.textContent= msg;
    h1.style.color = color;
    console.log(this);

    document.querySelector("body").appendChild(h1);
};

// erase
this.erase = function(){
  document.querySelector("h1").remove();
};
}
 // blue print 
    let pencil = new CreatePencil("Doms", 100, 10, "black");
    let pencil1 = new CreatePencil("natraj", 100, 20, "red");
    // console.log("Doms Pencil",pencil);





























