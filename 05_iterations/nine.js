const myNums=[1,2,4,5,6,7,22]
// const myTotal=myNums.reduce(function(acc,current){
//     console.log(`Accumulator Value : ${acc}, Current Value: ${current}`);
//     return acc+current
// },5)

const myTotal=myNums.reduce((acc,curr)=> acc+curr,5)
console.log(myTotal);