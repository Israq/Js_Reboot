'use strict';

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'israq';
// let job = 'soft';
// const year = 1996;

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();

const israq = {
  firstName: 'Syed',
  lastName: 'Israq',
  age: 28,
  friends: ['Ba', 'as', 'te'],
};

//Deep copy

const israqClone = structuredClone(israq);
israqClone.friends.push('fa');
israqClone.friends.push('to');

console.log('Original:', israq);
console.log('Clone:', israqClone);
