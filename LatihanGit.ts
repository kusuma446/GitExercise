// PROBLEM 1
const input : number = 9;
const limit : number = 10;

for(let i = 1; i <= limit; i++){
    console.log(`${input} x ${i} = ${input * i}`);
}

// PROBLEM 2
let kata: string = "madam"
let j = kata.length - 1
let palindrome: boolean = true
for(let i = 0; i < kata.length / 2; i++){
    console.log(kata)
    console.log(kata[i])
    console.log(kata[j])
    if(kata[i] != kata[j]) {
        palindrome = false
    }
    j--;
}
console.log(palindrome)


// PROBLEM 3
const cm: number = 1200000;
let km: number = 0;
km = cm/100000;
console.log(`${km} km`);

//PROBLEM 4
const mataUang: number = 50000;
console.log(`Rp ${mataUang.toString()},00`);

//PROBLEM 5
const kata1: string = "Hello world";
console.log(kata1.slice(0,2) + (kata1.slice(5)));

//PROBLEM 6
const kata2: string = "hello world";
console.log(kata1.slice(0,1).toUpperCase() + kata1.slice(1,6) + kata1.slice(6,7).toUpperCase() + kata1.slice(7));

// PROBLEM 7
const kalimatAwal: string = "The QuiCk BrOwN Fox";
let kalimatAkhir: string = "";
for(let i = 0; i < kalimatAwal.length; i++){
    if (kalimatAwal[i] == kalimatAwal[i].toUpperCase()){
        kalimatAkhir += kalimatAwal[i].toLowerCase();
    } else {
        kalimatAkhir += kalimatAwal[i].toUpperCase();
    }
}
console.log(kalimatAkhir)

//PROBLEM 8
let num1: number = 42;
let num2: number = 90;
console.log(Math.max(num1,num2));

//PROBLEM 9
let urutanAngka = [42, 12, 90,];
console.log(urutanAngka.sort())


//PROBLEM 10
let data1 = 4;
if (typeof data1 === 'string') {
    console.log("1");
} else if (typeof data1 === 'number') {
    console.log("2");
} else {
    console.log("3");
}



//PROBLEM 11
let kalimat: string = "an apple a day keeps the doctor away";
console.log(kalimat.replace(/a/g, "*"));



