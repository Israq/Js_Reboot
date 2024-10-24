// let js = 'amazing';
// if(js === 'amazing') alert('right')
//     else
// alert ('wrong');
// let define = 40+9+6+7;
// console.log(define);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let PI = 3.1415;

// let javascriptIsFun = true;
// const instructr = typeof(javascriptIsFun);
// console.log(instructr);

// const firstName = 'Israq';
// const profession = 'developer';
// const birthyear = 1996;
// const year = 2024;

// const introduction = `I'm ${firstName}, 
// ${year - birthyear} yrs old, working as a 
// ${profession}!`;
// console.log(introduction);


// const age =17;

// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log('Sarah is good enough to drive')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is not old enough wait untill ${yearsLeft} years`)
// }

const birthyear = 2001;

let century;

if (birthyear >= 2001) {
    century = `${20}th century`
} else {
    century = `${21}st century`
}

console.log(century);
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// let print;
// if (BMIMark > BMIJohn) {
//     print = `Mark's BMI is higher than John's!`
// }  else {
//     print =`John's BMI is higher than Mark's!`
// }

// console.log(print);

let print;
if (BMIMark > BMIJohn) {
    print = `Mark's BMI is higher than John's!`
}  else {
    print =`John's BMI is higher than Mark's!`
}

console.log(print);

let print1;
if (BMIMark > BMIJohn) {
    print1 = `"Mark's BMI ${BMIMark - BMIJohn} is higher than John's ${BMIJohn} !"`
} else {
    print1 = `John's BMI ${BMIJohn - BMIMark} is higher than Mark's ${BMIMark}!`
}

console.log(print1);