//Primitive values such as String, Number, Bool, Undefined, Null
/*They are stored in the stack memory where every reference is pointed to an individual value on the stack
thus when one value is changed the other remains the same.*/
let firstName = "kundan";
let secondName = firstName;

firstName = "shristi";
console.log(secondName);


//Reference values such as Object, Array
/*They are large values which are stored in the heap memory and only the location of the heap memory is
stored in the stack. Therefore when two same values are created, both the values in the stack memory
point to the same location in the stack memory thus when one is changed, the other changed too.*/
const personone = {fname : "Kundan", lname :"baidhya"};
const persontwo = personone;

personone.fname="Shristi";
personone.lname="Awal";

console.log(persontwo); 