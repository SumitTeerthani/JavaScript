const arr1=["Hemant","Sankalp"];
const arr2=["Hardik","Nikunj","Khushal Seth"];
//console.log(arr1);
 
const all_friends=[...arr1,...arr2]
//console.log(all_friends); //Concatenates both String


// console.log(Array.from("Sumit"));
// console.log(Array.from({name:"hitesh"}));  //empty array because cannot Convert it into an array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3,score1));