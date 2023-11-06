
const mys=Symbol("keys");
const JsUser={
    name:"Sumit",
    age : 21,
    College:"NIT Jalandhar",
    [mys]:"Mykeys"
}

// console.log(JsUser);
// console.log(typeof(JsUser[mys]));
// JsUser.age=20;
// console.log(JsUser)
// Object.freeze(JsUser);  //It freze the object so no change Can Occur Now
// JsUser.age=23;
// console.log(JsUser);

JsUser.greetings=function(){
    console.log(`Hello Js User , ${this.name}`)
}
//JsUser.greetings();
JsUser.city="Jalandhar";
console.log(JsUser);