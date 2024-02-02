/*creating an object in js
an object takes key value pair and it not only takes data types but
functions and arrays too as a value*/

const person = {name: "Kundan", age: 21, greet: function(){return 'hey Im ' + this.name}};

console.log(person.name, person.age, person.greet());