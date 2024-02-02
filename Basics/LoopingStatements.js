//loops in js
x=0;
y=0;

//while loop
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~while loop log~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
while(x<20){
    console.log(x);
    x++;
}

//do-while loop
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~do while loop log~~~~~~~~~~~~~~~~~~~~~~~~~~");
do{
    console.log(y);
    y++
}
while(y<20);

//for loop
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~for loop log~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
for(i=0;i<20;i++){
    console.log(i);
}


//for in and for of loop, basically like for each but for keys and values of an array
const arr = [3,5,7];
arr.key = "value";

//for in loop
for(const i in arr){
    console.log(i);
}

//for in loop
for(const i of arr){
    console.log(i);
}