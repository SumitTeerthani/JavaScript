const id=Symbol('123');
const numid=Symbol('123');
console.log(id==numid)    //false


const myhero = function (){
    console.log("Iron Man");
}
console.log(typeof myhero);
myhero();