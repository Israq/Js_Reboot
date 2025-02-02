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

// const birthyear = 2001;

// let century;

// if (birthyear >= 2001) {
//     century = `${20}th century`
// } else {
//     century = `${21}st century`
// }

// console.log(century);
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// let print;
// if (BMIMark > BMIJohn) {
//     print = `Mark's BMI is higher than John's!`
// }  else {
//     print =`John's BMI is higher than Mark's!`
// }

// console.log(print);

// let print;
// if (BMIMark > BMIJohn) {
//     print = `Mark's BMI is higher than John's!`
// }  else {
//     print =`John's BMI is higher than Mark's!`
// }

// console.log(print);

// let print1;
// if (BMIMark > BMIJohn) {
//     print1 = `"Mark's BMI ${BMIMark - BMIJohn} is higher than John's ${BMIJohn} !"`
// } else {
//     print1 = `John's BMI ${BMIJohn - BMIMark} is higher than Mark's ${BMIMark}!`
// }

// console.log(print1);

// //type coercion
// console.log('I am ' + 23 + 'years old')

// const inputYear = '1996';
// const convert = (Number(inputYear));
// console.log(convert + 25);

// console.log(Number('Irsaq'));
// console.log(typeof(String(24)));

// let n = '1' + 1;// 11
// n = n - 1;
// console.log(n);

// console.log('10' - '4' - '4' + '3');

console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean("Jonas"));
console.log(Boolean(NaN));
console.log(Boolean(""));

// const money = 0;
const money = 100;
if (money) {
  console.log("Don't spend it");
} else {
  console.log("You should spend it");
}

let height;
if (height) {
  console.log("Defined");
} else {
  console.log("Undefined");
}

// const age = "18";
// if (age === 18) console.log("You just become adult");
// if (age == 18) console.log("Loose");

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log("23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also amazing number");
// } else {
//   console.log("23 or 7 nothing");
// }

// if (favourite !== 23) console.log("Why not 23");

//logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah Should Drive");
// } else {
//   console.log("Sarah should not drive");
// }

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah Should Drive");
} else {
  console.log("Sarah shouldn't Drive");
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (
  scoreDolphins < scoreKoalas &&
  scoreDolphins > scoreKoalas &&
  scoreKoalas >= 100
) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No team has won");
}
