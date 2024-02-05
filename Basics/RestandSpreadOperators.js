//The spread operator takes out elements and properties of an array or object.

const hobbies = ["basketball", "baking"];

const copiedArray = [hobbies];//creates a nested array
console.log(copiedArray);

const anotherCopiedArray = [...hobbies];//doesn't create a nested array instead takes out the elements of an array
console.log(anotherCopiedArray);

const person = {
    name : "kundan",
    age : 21,
    sports : "true"
}

const copiedPerson = {person};//creates a nested object
console.log(copiedPerson);

const anotherCopiedPerson = {...person};//doesn't create a nested object instead takes out the properties of an object
console.log(anotherCopiedPerson);

//The rest operator takes elements and forms an array
const myarray =(...myargs) => myargs;

console.log(myarray(3,2,3,4));

//P.S. the rest and spread operators looks the same, it differ on where you use them