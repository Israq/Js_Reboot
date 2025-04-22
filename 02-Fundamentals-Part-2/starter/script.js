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

//Array Operation

//Add elements
const friendList = ["Micheal", "Steven", "Peter"];
friendList.push("Jay");
console.log(friendList);

friendList.unshift("John");
console.log(friendList);

//Remove Element

friendList.pop();
console.log(friendList);
//pop removes the last item

friendList.shift();
console.log(friendList);
//Shift removes the 1st item

console.log(friendList.indexOf("Steven"));
// shows the index of item

console.log(friendList.includes("Steven"));
console.log(friendList.includes("Ketty"));
// shows present/not boolean

// const jonas = {
//   firstName: "Jonasjonas",
//   lastName: "Schmedment",
//   age: 2025 - 1996,
//   job: "teacher",
//   friends: ["Micheal", "Steven", "Peter"],
// };

const interestedIn =
  "Want to know more about jonas? choose between firstName, lastName, age, job and friends";

// console.log(jonas[prompt(interestedIn)]);

//adding new objects

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasscmhmedment";
// console.log(jonas);

//challenge
//"Jonas has 3 friends, and his best friend is called Micheal"

// const friendsTotal = jonas.friends.length;
// console.log(friendsTotal);
// const bestFriend = jonas.friends[0];
// console.log(bestFriend);
// console.log(
//   `Jonas has ${friendsTotal} friends, and his best friend is called ${bestFriend}`
// );

//object method

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedment",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Steven", "Peter"],
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getLicenseStatus() {
    return jonas.age > 18 ? "has License" : "does not have License";
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);

//challenge
//"Jonas is a 46 years old teacher, and he has a drivers license"

// const license = function (age) {
//   if (jonas.age > 18) {
//     return `has driversLicense`;
//   } else {
//     return `doesn't have driversLicense`;
//   }
// };
// jonas.calcAge();

console.log(
  `${jonas.firstName} is a ${jonas.age} years old ${
    jonas.job
  } and he ${jonas.getLicenseStatus()} `
);

//object method coding challenge
/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

const higherBMI = function higherbmi() {
  return mark.calcBMI() > john.calcBMI()
    ? console.log(
        `${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${
          john.fullName
        }'s ${john.calcBMI()}!`
      )
    : console.log(
        `${john.fullName}'s BMI ${john.calcBMI()} is higher than ${
          mark.fullName
        }'s ${mark.calcBMI()}!`
      );
};

higherBMI();

//For loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//Looping arrays, breaking and continue

const jonasArray = [
  "Jonas",
  "Schmedment",
  1991,
  "teacher",
  ["Micheal", "Steven", "Peter"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  //Filling the array pushing at the end of the array
  types.push(typeof jonasArray[i]);
}

console.log(types);

const birthYears = [1991, 2020, 1996, 2000, 2011];
const calcAges = [];

for (let index = 0; index < birthYears.length; index++) {
  calcAges.push(2037 - birthYears[index]);
}
console.log(calcAges);

//Continue and Break
console.log("--ONLY STRINGS--");
const jonasArray2 = [
  "Jonas",
  "Schmedment",
  1991,
  "teacher",
  ["Micheal", "Steven", "Peter"],
];
console.log("--ONLY STRINGS will print and !strings will ignore--");
for (let i = 0; i < jonasArray2.length; i++) {
  if (typeof jonasArray2[i] !== "string") continue;
  console.log(jonasArray2[i], typeof jonasArray2[i]);
}
console.log("--When Number Comes the loop will break--");
for (let i = 0; i < jonasArray2.length; i++) {
  if (typeof jonasArray2[i] === "number") break;
  console.log(jonasArray2[i], typeof jonasArray2[i]);
}
