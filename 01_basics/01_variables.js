const accountId = 123
let accountEmail ="hardik@email.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountstate;

//accountId = 2// not  allowed

accountEmail = "hc@hc.com"
accountPassword ="121314"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue inblock scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])