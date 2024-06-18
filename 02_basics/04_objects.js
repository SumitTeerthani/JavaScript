const tinderUser=new Object();

tinderUser.name="Manan"
tinderUser.age=21;

//console.log(tinderUser) //Gives simple object Output


const course={
    name:"Web Development",
    duration:3,
    courseInstructor:"Hitesh Chaudhary"
}

const {courseInstructor:instructor}=course  /*This is called as object destructuring and we are
 using object destructuring with an alias to extract a property from the course object and 
 assign it to a new variable with a different name.  */
console.log(`The instructor of the ${course.name} is ${instructor}`);
console.log(`The instructor of the ${course.name} is ${course.courseInstructor}`);


//JSON -:
// { }  this is JSON Format 
