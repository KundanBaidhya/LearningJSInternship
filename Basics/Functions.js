var name = "Kundan";
var age = 21;
var hasHobbies = true;

//creating functions in js

function summarizeUser(userName, userAge, userHasHobbies){ // A function can take parameters and return values
    var mySummary = `Hey my name is ${userName} and I'm ${userAge} years old 
    and if you ask me if I have
    any hobbies, it'll be ${userHasHobbies}.`;

    return mySummary; //
}

console.log(summarizeUser(name, age, hasHobbies)); //calling the function and passing in parameters

//quick note : if it is hardcoded - argument, if it's not - parameter.
