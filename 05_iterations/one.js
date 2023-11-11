for(let i=0;i<10;i++){
    const element =i;
  //  console.log(element);
}

//All other loops you know like while loop ,do while loop , continue and break;

//Now we will do for of loop
const arr=[1,2,3,4,5];
const greetings =[ " Hello ","Welcome","How are You "]
for(const num of greetings){  //objects pr iterable nhi hai yh
   // console.log(num);
}

//Map

const map=new Map()  //unique vales hi enter krti hai
map.set('IN',"India");
map.set('USA',"United states of America");
map.set('FR',"France")
//console.log(map);
for (const value of map) {
    //console.log(value); //this prints as array
}

for (const [key,value] of map) {
   // console.log(`${key} -: ${value}`);
}
//object ke liye for in use krte hai

const myCode={
    js:"JavaScript",
    cpp:"C++",
    java:"JAVA"
}
for (const key in myCode) {
    //console.log(key);  //prints only keys of object
    
}

for (const key in myCode) {
   // console.log(key+"-:"+myCode[key]);  //prints only keys of object
    
}

const heros=["Spiderman","Iron_Man","Thor","Captain_America"]

heros.forEach(function(val){
    //console.log("Hero is "+val);
})

function printElement(value){
    //console.log(value);
}

heros.forEach(printElement); //here we passing refernce of function then also it is executing the same way .

const realDbValues=[
    {
        codingLanguage:"JavaScript",
        codingFolder:"js"
    },
    {
        codingLanguage:"Java",
        codingFolder:"java"
    },
    {
        codingLanguage:"Python",
        codingFolder:"py"
    }
]
realDbValues.forEach((item)=>{
    console.log(item.codingFolder+"-:"+item.codingLanguage);
})
