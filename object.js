// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}
const person1 = {
    firstName: "Spnogebob",
    lastName: "SquarePants",
    age: 30 + "Yrs old",
    sayHello: () => console.log("HeY i am Spongebob"),
    eat: function(){console.log("Hey i eat lobsters")},
}

person1.sayHello();
console.log(person1.firstName);
console.log(person1.lastName);

