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

//Codeing challenge funtion

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (scoreKoalas >= scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    return scoreKoalas;
  } else if (scoreDolphins >= scoreKoalas * 2) {
    console.log(`Koalas win (${scoreDolphins} vs. ${scoreKoalas})`);
    return scoreDolphins;
  } else {
    console.log("No team wins...");
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));

//Array

const friends = ["a", "b", "c", "d"];
console.log(friends.length);
friends[2] = "g";
console.log(friends);

const firstName = "Israq";
const israq = [firstName, "syed", 2025 - 1996, friends];
console.log(israq);

console.log(israq.length);

const calcAge = function (birthYear) {
  const age = 2025 - birthYear;
  return age;
};

const years = [1991, 1887, 1900, 2000, 1971];

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 2]),
];

console.log(ages);
