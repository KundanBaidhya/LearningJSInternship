//walk the dog
//clean the kitchen
//throw out the trash

function walkDog(){
    
    return new Promise((resolve, reject) => {
        
            setTimeout(()=>{
                const walked = true;
                if(walked){
                    resolve("Took the dog out for a walk🐕")
                }
                else{
                    reject("You didn't take the dog out for a walk❌");
                } 
            }, 5000);
        }
    );
}


function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        
            setTimeout(()=>{
                const cleaned = true;
                if(cleaned){
                    resolve("You cleaned out the kitchen🧹");
                }
                else{
                    reject("You didn't clean out the kitchen❌");
                }
            }, 7500);
    })
}

function throwTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const thrown = false;
            if(thrown){
                resolve("Went to throw out the trash🗑️");
            }
            else{
                reject("you didn't went to throw out the trash❌");
            }
        },3500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return throwTrash()})
         .then(value => {console.log(value)})
         .catch(value => console.log(value));