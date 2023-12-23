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
// chai()

const chai = ()=>{
   let username="Sam";
    console.log(username);
}
chai() 