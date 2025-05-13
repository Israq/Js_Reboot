'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  function printAge() {
    let output = `You are ${age}, born in ${birthyear}`;
    console.log(output);
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //Creating new variable with same name
      const firstName = 'Steven';

      //Reassigning outer scope variable
      output = 'NEW OUTPUT';
      const str = `You are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //console.log(add(2, 3));
    }
    console.log(millenial);
    // console.log(str);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  console.log(firstName);
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
