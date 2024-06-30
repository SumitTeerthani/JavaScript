// //False values

// false,0,-0,BigInt 0n ,"",undefined,null,NaN

// //inke alava sbko true mana jata hai


// //truthy value
// "0",'false'," ",[],{} function(){},
const empty={}

if(Object.keys(empty).length==0){
    console.log("Empty Object");
}

//Nullish Coalescing Operator   -> null or undefined
//Hello How are you
const iceTeaPrice=90;
iceTeaPrice<=80 ? console.log("Ice Tea Price is less than 80") : console.log("Ice Tea Price is greater than 80")
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));