// function print(n){
//      while(n!=0){
//         console.log(n);
//         n--;
//      }
// }
// print(5);
//function assignment 
// let val = function walk(){
//     console.log('walking');
// }
//  function sum(){
//     let total = 0;
//     for(values of arguments){
//         total+=values;
//     }
//     return total;
//  }
//  let ans = sum(1,2,3,4);
//  console.log(ans);
//  function sum2(...args){
//     let total = 0;
//     for(values of args){
//         total+=values;
//     }
//     return total;
//  }
//  let value = sum2(1,2,3);
//  console.log(value);
//  let person =  {
//     firstname:'sharad',
//     lastname:'kumar',
//     get fullname(){
// return `${person.firstname} ${person.lastname}`
//     },
//     set  fullname(value){
//         if(typeof value!=String){
// throw new Error("you have not sent a string")
//         }
//       let part = value.split(' ');
//       this.firstname = part[0];
//       this.lastname = part[1];
//     }
//  };
//  console.log(person.fullname);
//  person.fullname = 'nishant kumar';
//  console.log(person.fullname);
// console.log(person.fullname);
// try{
//     person.fullname = '1';
// }
// catch(e){
    // alert('you have sent a number in fullname');
    // alert(e);
    // console.log(e);
// }
let arr= [1,2,3,4];
let anss = arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(anss);
const x= 5;
const y = 6;
console.log(`the sum of x and {y} is ${x+y}.`);
console.log(arr.Arra)
