//  const myNums=[2,4,5,3,5,32,46,6]
//  const newNums=myNums.filter( (num)=>{ return num>4})
//  console.log(newNums);

const arr=[1,2,3,4,5,6,7,8,9,10]
const newarr=arr.map((num)=>num*10).map((nu)=>nu+1).filter((nums)=>nums>51);
console.log(newarr);
