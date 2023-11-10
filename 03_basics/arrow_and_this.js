const user={
username:"sumit",
age:21,

welcomeMessage: function(){
    console.log(`Welcome ${this.username} to this Website`);  // We have to use this.username otherwise it will not access the username
}

}

user.welcomeMessage()
user.username="Rohan";
user.welcomeMessage()