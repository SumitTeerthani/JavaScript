function add(num1,num2){
    let result =num1+num2;
    return result;
}
 
let result1=add(7,8);
// console.log("The sum of the two numbers is "+result1);

function calculateCartPrice(...num){  //This is Called as rest operation 
    let totalprice=0;
    for (var i=0 ;i< num.length;i++){
        totalprice+=num[i];
    }
    return totalprice;
}
console.log(calculateCartPrice(200,300,350,650,400));