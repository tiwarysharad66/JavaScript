let score = "33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);//NaN output 
// if null then output 0
//undefined then output NaN
//boolean true for 1 and false for 0
let isLoggedIn = "hello"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1 => true 0=> false
// ""=> false "sharad"=>true
let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);