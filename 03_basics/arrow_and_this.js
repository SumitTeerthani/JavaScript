const user={
username:"Sumit",
age:21,

welcomeMessage: function(){
    console.log(`Welcome ${username} to this Website`);  // We have to use this.username otherwise it will not access the username
}

}

// user.welcomeMessage()
// user.username="Rohan";
// user.welcomeMessage()

// function chai(){
//     let username="Sam"
//     console.log(this.username);
// }
// chai()  //print undefined because this doesn't work inside a function  

// const chai = ()=>{        // arrow function 
//    let username="Sam";
//     console.log(this.username);
// }
// chai() ;
//In arrow function this keyword is generally not used 

// const addtwo =(num1,num2)=>{
//     return num1+num2;
// }

//const addtwo=(num1,num2)=>num1+num2; //will give same result as previous one 
const addtwo=(num1,num2)=>(num1+num2);  //this will also give same result .

//console.log(addtwo(2,6));


//IIFE immediately invoked function execution 
(function() {
    console.log("This is an IIFE!");
})();

//IIFEs are commonly used to avoid contaminating the global scope with temporary variables.
(function() {
    var temporaryVar = "I'm a local variable";
    console.log(temporaryVar); // Output: I'm a local variable
})();

// ReferenceError: temporaryVar is not defined
console.log(temporaryVar);
