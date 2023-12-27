const fetch = require('node-fetch');

const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve() 
        // console.log("Async Promise Executed");
        
    },1000)
})

promiseone.then(function(){
    // console.log("Promiseone Called");
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sumit",email:"Sumitteerthani@gmail.com"})
    },1000)
})

promisethree.then(function(user){
  // console.log(user);
})

// const promisefour=new Promise(function(resolve,reject){ error=true
//     if(!error){
//         resolve({username:"Sumit",password:"12345"})
//     }
//     else{
//         reject("Something Went Wrong ")
//     }
// })
// promisefour
// .then(function(user){
//     username=user.username
//     return username
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(`  ${error}`);
// })
// .finally(function(){
//     console.log("Promise Either resolved or rejected finally");
// })



const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
           resolve({username:"JavaScript", password:"09876"})
         }
         else{
           reject("ERR:Something Went Wrong")
         }
    },1000)
   
});

// async function consumepromfive(){
//     const  kyahua= await promisefive
//     console.log(kyahua);
// }
//The Function Given Above does not work for Error So to handle Error We need to have
// try and catch statement in async and await function 
//eg of try and catch is given below


// async function consumepromfive(){
//     try {
//         const kyahua=await promisefive
//         console.log(kyahua);
//     } catch (error) {
//         console.log(error);
//     }
// }
//consumepromfive()


async function callingjson(){
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await result.json()  //idhr await isliye lagaya kyuki ismein bhi time lagta hai 
    console.log(data);
    } catch (error) {
        console.log("E is",error);
    }
}

callingjson()