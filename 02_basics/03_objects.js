 // singleton
// object.create

// object literals

const mySym = Symbol("key1")


 const Jsuser = {
    name : "Hardik",
    "full name": "hardik neolia",
    [mySym]:"mykey1",
    age : 19,
    location : "delhi",
    email : "hardik@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturday"]
} 

//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//console.log(Jsuser["full name"]);
//console.log(Jsuser[mySym]);
//console.log(typeof Jsuser[mySym]);

Jsuser.email= "hardikneolia@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "hardiknnneolia@gmail.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
}
Jsuser.greetingTwo= function(){
    console.log(`hello JS user,${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






 