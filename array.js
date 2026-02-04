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


// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
g.reverse();
// use case -- show latest update first into your fronted

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })




// ---------------------------------------------------------------------------




// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log('Q1:', tasks);


// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log('Q2:', notifications);


// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
console.log('Q3:', customers);


// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
console.log('Q4:', playlist);


// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log('Q5:', students);


// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log('Q6:', menu);


// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekendDays = days.slice(5, 7);
console.log('Q7:', weekendDays);


// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log('Q8:', levels);


// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log('Q9:', scores);


// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log('Q10:', prices);


// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThreeProducts = products.slice(0, 3);
console.log('Q11 (new array):', firstThreeProducts);
console.log('Q11 (original):', products);


// Q12. splice() complex
// Remove 'Blue' and add 'Purple' and 'Orange'
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log('Q12:', colors);


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log('Q13:', steps);


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log('Q14:', names);


// Q15. Combination Question
// Add 'Inception', remove first movie, sort alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
console.log('Q15:', movies);


// Q16. splice() return value
let nums1 = [1, 2, 3, 4];
let removedNums = nums1.splice(1, 2);
console.log('Q16 removed:', removedNums);
console.log('Q16 remaining:', nums1);


// Q17. slice() immutability check
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log('Q17 result:', result);
console.log('Q17 original:', nums2);


// Q19. reverse() mutation
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log('Q19 letters:', letters);
console.log('Q19 reversedLetters:', reversedLetters);
console.log('Same reference:', letters === reversedLetters);


// Q21. splice() edge case
let arrs = ['x', 'y', 'z'];
arrs.splice(1, 0, 'new');
console.log('Q21:', arrs);


// Q23. slice() negative index
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log('Q23:', sliced);


// Q24. splice() vs slice() decision
console.log('Q24: splice() -> update original, slice() -> keep original');


// Q25. Chained methods (brain teaser)
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log('Q25:', arr2);
