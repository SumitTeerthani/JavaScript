// function add(num1,num2){
//     let result =num1+num2;
//     return result;
// }
 
// let result1=add(7,8);
// // console.log("The sum of the two numbers is "+result1);

function calculateCartPrice(...num){  //This is Called as rest operation 
    // let totalprice=0;
    // for (var i=0 ;i< num.length;i++){
    //     totalprice+=num[i];
    // }
    return num;
}
console.log(calculateCartPrice(200,400));


function one(){
    const name="Sumit"
    function two(){
        const role="Software Developer Engineer";
        console.log(`My name is ${name} and My Role is ${role}`);
    }
    two();
}
 //two() //This Shows Error 
 one();
