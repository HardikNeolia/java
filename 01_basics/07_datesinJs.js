//  Dates

let myDate = new Date()
// console.log(myDate.toString());
// tue jun 25 2024 5:10:14 GMT (COORDINATED UNIVERSAL TIME)
// console.log(myDate.toDateString());
// tue jun 25 2024
// console.log(myDate.toISOString());
// 2024-06-25T05:10:14.099Z
// console.log(myDate.toLocaleDateString());
// 6/25/25
// console.log(myDate.toLocaleString());
// 6/25/2024, 5:10:14 AM 

// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    
})
