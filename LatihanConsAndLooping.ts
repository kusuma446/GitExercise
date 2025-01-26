// PROBLEM 1

const bilangan: number = 99;
if (bilangan % 2 === 0 ) {
    console.log(`${bilangan} adalah bilangan genap`);
} else {
    console.log(`${bilangan} adalah bilangan ganjil`);
};

// PROBLEM 2
// CARA 1
const bilangan1: number = 9
let pembagi = 0;
for(let i = 1; i <= bilangan1; i++) {
    if(bilangan1 % i == 0) {
        console.log(i)
        pembagi++
    }
}
if(pembagi == 2) {
    console.log(`${bilangan1} adalah bilangan Prima`)
} else {
    console.log(`${bilangan1} adalah bukan bilangan Prima`)
};
//CARA 2
const n1: number = 3;
let prima: boolean = n1 > 1 ? true : false;

for(let i = 2; i < n1; i++) {
    if (n1 % i ===0 ) {
        prima = false;
        break;
    }
}
console.log(prima ? "bilangan prima" : "bukan bilangan prima")
// PROBLEM 3

const bilangan2: number = 5;
let totalPenjumlahan: number = 0;
for(let i = 1; i <= bilangan2; i++) {
    console.log(i);
    totalPenjumlahan += i 
        if( i == bilangan2)
    console.log(totalPenjumlahan)
}

// PROBLEM 4

const bilangan3: number = 4;
let faktorial: number = 1;
for(let i = 1; i <= bilangan3; i++) {
    console.log(i); 
    faktorial = faktorial * i
        if( i == bilangan3)
    console.log(faktorial)
}

// PROBLEM 5