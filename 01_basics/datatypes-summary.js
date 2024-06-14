// # PRIMITIVE

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

// const bigNumber =345678901233345555765655688n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]
let myObj ={
    name: "hardik",
    age: 18,
}



const myfunction = function(){
    console.log("hello world");
}

// console.log(typeof anotherId);



/* 1)  PRIMITIVE DATATYPES
       NUMBER => number
       STRING => string
       BOOLEAN => boolean
       NULL => object
       UNDEFINED => undefined
       SYMBOL => symbol
       BIGINT =>  bigint


   2)  NON-PRIMITIVE DATATYPES
       ARRAYS => object
       FUNCTIONS => function
       OBJECT => object

       */


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hardikneolia"

let anothername = myYoutubename
anothername = "iamlucid"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hardik@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);