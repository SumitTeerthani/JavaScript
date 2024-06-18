/* In JavaScript, hoisting refers to the built-in behavior of the language 
through which declarations of functions, variables, and classes are moved to
 the top of their scope – all before code execution. In turn, this allows us 
 to use functions, variables, and classes before they are declared. */

console.log(addone(8)); // functions are hoisted at the top  
function addone(num){
   return num+1;
}
console.log(addtwo(8)); //let and const are hoisted but not initialised that why this shows reference error 
const addtwo=function(num){
    return num+2;
}
