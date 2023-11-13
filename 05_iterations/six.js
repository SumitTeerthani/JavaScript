const names=["Agrim","Anupam","Gaurav","Vinay"];

// const printNames= names.forEach((item)=>{
//     //console.log(item );
//     return item;
// })
// console.log(printNames); //undefined


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const values= myNums.filter((item)=> item>2)

// console.log(values);//This will print greater than 2

// const values2= myNums.filter((item)=> {item>2}) // this will return empty array we have to use return keyword to make it properly work
// console.log(values2);

// const values3= myNums.filter((item)=> { return item>=2})
// console.log(values3);

// let add=myNums.map((nums)=> nums+10)
// console.log(add);
 const increasedNumbers=myNums.forEach((item)=>{
    console.log(item+10);
 });

 