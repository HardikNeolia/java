const name = "hardik"
const repoCount = 10

// console.log(name + repoCount + " value");
// console.log(`hello my name is ${name} and my repo Count is ${repoCount} `);


const gameName = new String('hardikn')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4) 
console.log(newString);

const anotherString = gameName.slice(-6, 2)
console.log(anotherString);


const newStringOne = "   hardik    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hardik.com/hardik%20neolia"

console.log(url.replace('%20', '-' ));

console.log(url.includes('kartik'));

console.log(gameName.split('-'));
