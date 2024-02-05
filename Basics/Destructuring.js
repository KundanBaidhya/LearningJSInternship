/*destructuring is done using a {} symbol, it takes a object or an array
and pulls out a property or an element from it */

const person={
    fname : "kundan",
    age : 21,
    hobby : true
}

const myFunc = (personData) => personData.fname;
console.log(myFunc(person));//we can do it like this or

const myFunc1 = ({fname}) => fname;//we can use object destructing to pull out a property or element from the incoming object
console.log(myFunc1(person));      //or array using it's key or position and it stores it by making a local variable 
                                   //and drop other properties and elements.

const {fname, age} = person;//we don't necessarily have to create a function instead we can take elements or properties
console.log(fname, age);    //from an incoming object like this

//for array

const myArray = ["Kundan", 21, true];

const [name, myage, hobby] = myArray;//takes out elements from from the incoming array and assignes it to the local variable
console.log(myage);
