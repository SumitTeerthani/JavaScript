//for of

const arr=[1,3,5,3,5,6,4]

// for(const num of arr) 
// {
//     console.log(num);
// }
//arr.map((num)=>console.log(num));
const greetings="Hello My Friend How are you"
for (const greet of greetings) {
    // if(greet== " ")
    //  continue
  //  console.log(greet);
}

//Map
const map=new Map();
map.set("IND","INDIA");
map.set("USA","Unites States of America");
map.set("AUS","Australia");
const map2 ={
  pak : "Pakistan",
  uae : "United Arab Emirates",
}
//console.log( map2);
for(const [key,value] of map)
    {
       // console.log(`Key is ${key} and Value is ${value}`);
    }

// For in Loop
const myObject={
    js:'JavaScript',
    cpp:'C++',
    rb:"Ruby",
   py:'python'
}
for(const key in myObject){
    console.log(`${key} is the Shortcut for ${myObject[key]}`);
}


//for each Loop
const arr2 = [20,8,12,15,10];
arr2.forEach((val)=>{
   // console.log(val)
})

//Handling Objects in an Array
const myGames=[
    {
        name: 'Uncharted 4',
        platform:'PlayStation 4',
    },
    {
        name:'The Last of us Remastered',
        platform:'PlayStation 3'
    },
    {
        name:'Gomander',
        platform:'PlayStation 2',
        Company:'FireGames'
    }
]

myGames.forEach((item)=>{
   // if(item.Company!=undefined)
//console.log(item.Company);
} 
);