// let, const and var 

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"    // don't do this, use let or const
let accountState;

// accountId = 2   gives error because variable declared as const can't be changed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*

Prefer not to use var
Because of issue in block scope and functional scope

*/