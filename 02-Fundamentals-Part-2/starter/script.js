"use strict";

// let hasDriversLicense = false;
// const passTest = true
//   ? ((hasDriverLicense = true), console.log("I have license"))
//   : console.log("I can drive");

// const private = 534;

// const present = 2025;
// const birth = 1996;

// function logger() {
//   console.log(`My age is ${present - birth} years old`);
// }
// // invoking the function
// logger();

//Function declaration
function ageCalc(present, birth) {
  console.log(2025, 1996);
  const eligibility = `My age is now ${present - birth} years old`;
  return eligibility;
}

console.log(ageCalc(2025, 1996));

//Function expression

const ageCalc2 = function (present, birth) {
  return present - birth;
};

const age2 = ageCalc2(2025, 1996);
console.log(`In age2 I am ${age2} years old`);

//Arrow function

const ageCalc3 = (present, birth) => {
  return present - birth;
};

const age3 = ageCalc3(2025, 1996);
console.log(`At age3 my age is ${age3} years old`);

const yearsUntilRetirement = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  const retirement = 65 - age;
  return `Bob is ${age} years old and retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 2025));

//Function calling another function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `For juice we need ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;

  return juice;
}

console.log(fruitProcessor(4, 8));
