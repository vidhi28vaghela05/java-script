// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588 ]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position / index]
arr[0]

// modify
// array_name[position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
let a = [1, 2, 3, 4, 5];

// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
a.push(700);

// use case -- enter new products into existing products list
console.log(a);
// pop --> remove last value into array
let b = [10,20,30,40,50];
b.pop();
// use case -- remove last product from existing products list
console.log(b);

// shift -- remove first value into Array
let c = [30, 40, 50, 60];
c.shift();
// use case -- remove old product automatic after sometimes
console.log(c);

// unshift -- add value into array -- first
let d = [52, 35, 65, 85];
d.unshift(20);
// use case -- add a value into top of that data you receive
console.log(d);


// splice - remove value into array -- specific position and
// specific number of values
// into () -- first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);

// e.splice(3, 0, 50, 100)

// use case -- select msg and remove multiple msg at on click
// slice - copy values from array -- specific position and
// specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);

// use case -- copy specific data and save it into new variable
// generate a report based on date and generate a file or save the
// file into your local machine

// splice vs slice

// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that
// hold the value that you can into
