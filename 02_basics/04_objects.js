const tinderUser=new Object();

tinderUser.name="Manan"
tinderUser.age=21;

//console.log(tinderUser) //Gives simple object Output


const course={
    name:"Web Development",
    duration:3,
    courseInstructor:"Hitesh Chaudhary"
}

const {courseInstructor:instructor}=course
console.log(`The instructor of the ${course.name} is ${instructor}`);



//JSON -:
// { }  this is JSON Format 
