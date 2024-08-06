// singleton //or with the help of constructors

// const tinderUser = new Object()       // singleton object

const tinderUser ={}
 // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Lucid"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gamil.com",
    fullname: {
        userfullname:{
        firstname: "hardik",
        lastname: "neolia"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1 :"a" , 2 : "b"}
const obj2 = { 3 :"a" , 4 : "b"}

// const obj3 ={ obj1 , obj2 }
//const obj3 = Object.assign( {} ,obj1,obj2)
const obj3 ={...obj1,...obj2}
// console.log(obj3);

const users =[
    {
    },
    {
    },
    {
    id : 1,
    email : "h@gmail.com"
    },
]

//users.[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hardik"
}

//course.courseInstructor

const {courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);


//{
//    "name "": "hardik",
//    "coursename" : "javascript",
//    "price" : "free"
//}

