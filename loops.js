// loops -- repeating code blocks
// 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10 -> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe -> kaya sudhi javanu chhe -> kevi rite javanu chhe
// for (ex. 1 -> 50 -> increment by 1)
// (start; change; change)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let k = 9; k >= -1; k--) {
//     console.log(k);
// }

// for (let j = 1; j <= 10; j++) {
//     console.log("Hello");
// }
// for (let j = 1; j <= 10; j++) {
//     document.writeln("Hello");
// }




// while loop -- do while loop
// kaya thi javanu chhe --> kaya rokavanu chhe --> kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)
// start
// while (end) {
//   code
//   change
// }

let d = 1;
while (d <= 10) {
    console.log("While Loop:", d);
    d++;
}


// make it true loops 
let k = 50;
while (k <= 60) {
    console.log(k);
    k++;
}



let a = 10;
while (a <= 20) {
    console.log(a);
    a++;
}


let c = 30;
while (c > 20) {
    console.log(c);
    c--;
}

let da = 1;
while (da <= 5) {
    console.log("Hello");
    da++;
}


let f = 50;
while (f <= 60) {
    console.log(f);
    f++;
}



let q = 50;
while (q <= 60) {
    console.log(q);
    q++;
}

// break
for (let k=1; k<=201; k++) {
    console.log(k);
    if (k === 32) {
        break;
    }
}



// do while loop
// do {} while (end);

// start
// do{
//   code
//   change
// } while(end);

let j = 12;  // start
do {
    console.log("do while loop:", j); // code
    j++; // change (condition)
} while (j < 20); // while check after executing code block (end)


// // break
for (let k = 1; k <= 201; k++) {
    console.log("Loop with break", k);
    if (k == "30") {
        break;
    }
}


// // continue
for (let a = 1; a <= 10; a++) {
    if (a === 5) {
        continue;
    }
    console.log(a);
}


// // for-of, forEach for Arrays
