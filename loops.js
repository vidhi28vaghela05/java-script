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

// ---------------------------------------------------------------------------

console.log(" ------------------ Exercises ------------------ ");
console.log("  ");
console.log(" example 1 ");
console.log("  ");
// example 1   
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("  ");
console.log(" example 2 ");
console.log("  ");
// example 2
let ja = 10;
while (ja >= 1) {
    console.log(ja);
    ja--;
}
console.log("  ");
console.log(" example 3 ");
console.log("  ");
// example 3
for (let n = 1; n <= 20; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}
console.log("  ");
console.log(" example 4 ");
console.log("  ");
// example 4
let x = 1;
while (x <= 15) {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x++;
}
console.log("  ");
console.log(" example 5 ");
console.log("  ");
// example 5
for (let t = 1; t <= 10; t++) {
    console.log(`5 x ${t} = ${5 * t}`);
}
console.log("  ");
console.log(" example 6 ");
console.log("  ");
// example 6
let sum = 0;
for (let k = 1; k <= 100; k++) {
    sum += k;
}
console.log(sum);
console.log("  ");
console.log(" example 7 ");
console.log("  ");
// example 7
for (let m = 1; m <= 50; m++) {
    if (m % 3 === 0) {
        console.log(m);
    }
}
console.log("  ");
console.log(" example 8 ");
console.log("  ");
// example 8
let num = prompt("Give a number");

for (let p = 1; p <= num; p++) {
    if (p % 2 === 0) {
        console.log(p, "is even");
    } else {
        console.log(p, "is odd");
    }
}
console.log("  ");
console.log(" example 9 ");
console.log("  ");
// example 9
let count = 0;
for (let q = 1; q <= 100; q++) {
    if (q % 3 === 0 || q % 5 === 0) {
        count++;
    }
}
console.log(count);
console.log("  ");
console.log(" example 10 ");
console.log("  ");
// example 10
for (let r = 1; r <= 100; r++) {
    console.log(r);
    if (r % 7 === 0) {
        break;
    }
}
console.log("  ");
console.log(" example 11 ");
console.log("  ");
// example 11
for (let s = 1; s <= 20; s++) {
    if (s % 3 === 0) {
        continue;
    }
    console.log(s);
}
console.log("  ");
console.log(" example 12 ");
console.log("  ");
// example 12
let countOdd = 0;

for (let z = 1; z <= 100; z++) {
    if (z % 2 === 0) {
        continue;
    }

    console.log(z);
    countOdd++;

    if (countOdd === 5) {
        break;
    }
}


