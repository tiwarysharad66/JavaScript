// const accountId = 14453;
// let accountEmail = "tiwaryshara66@gmail.com";
// var accountPassword = "12345";
// accountCity = "Jaipur";
// // accountId = 2;
// accountEmail = "wrw";
// accountPassword = "22233";
// accountCity = "Bengaluru";
// console.table([accountId,accountEmail,accountPassword,accountCity]);
// console.log(accountId);
const accountId = 14453; // Declaring a constant variable accountId with value 14453
let accountEmail = "tiwaryshara66@gmail.com"; // Declaring a variable accountEmail with initial value "tiwaryshara66@gmail.com"
var accountPassword = "12345"; // Declaring a variable accountPassword with initial value "12345"
accountCity = "Jaipur"; // Declaring a global variable accountCity with value "Jaipur"

// Reassigning values to variables
accountEmail = "wrw"; // Changing the value of accountEmail to "wrw"
accountPassword = "22233"; // Changing the value of accountPassword to "22233"
accountCity = "Bengaluru"; // Changing the value of accountCity to "Bengaluru"
/* dont use var because in issue with block scope and  functional scope */
// Logging the values of all variables using console.table
console.table([accountId, accountEmail, accountPassword, accountCity]);
