const name = "Kundan"; //use const as frequently as possible instead of let or var.
const age = 21;
const hasHobbies = true;

//creating functions in js

function summarizeUser(userName, userAge, userHasHobbies){ // A function can take parameters and return values
    var mySummary = `Hey my name is ${userName} and I'm ${userAge} years old 
    and if you ask me if I have
    any hobbies, it'll be ${userHasHobbies}.`;

    return mySummary; //
}

console.log(summarizeUser(name, age, hasHobbies)); //calling the function and passing in parameters

//quick note : if it is hardcoded - argument, if it's not - parameter.

//Arrow Functions in js

const a = 12;
const b = 45;

const add = (x,y) => a+b; //defining an arrow function in js
const addOne = x => a+1; //if there's only one parameter, () brackets are not needed
const addRandomNumbers = () => 3+5; //if there's no parameter, just empty line will cause an error

console.log(add(a,b));
console.log(addOne(a));
console.log(addRandomNumbers());

