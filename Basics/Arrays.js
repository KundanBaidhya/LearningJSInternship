//Arrays(Lists) in js
const myArray = ["Kundan", "Baidhya", 21];

for(const i of myArray){ //getting values out of an array
    console.log(i);
}

console.log(myArray.map(myArray=> "Credentials : "+myArray));//using the map function in an array
console.log(myArray);//loggin the array again to check if the array override our main array or not

//map function doesn't override our previous array instead it creates a new array and returns it