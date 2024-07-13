// console.log('hello');
// var a = 10;
// var a = 13;
// console.log(a);
// let person = {
//     firstname: 'sharad',
//     lastname : 'tiwary',
//     age:19,
    // get fullname(){
    //   return new [this.firstname,tgis.lastname,this.age];
    // }
// };
// console.log(person);
// for(value in person){
// console.log(value);
// }
// console.log(person['age']);
// person['age']= 20;
// console.log(person['age']);
// console.log(person.fullname)
// let arr = [1,2,3,'sharad',4,5];
// console.log(arr);
// for(let value  of arr){
//     console.log(value);
// }
// let num = '1';
// let number = 1;
// console.log(num==number);
// let age = 19;
// let ans = (age>=18)? "you vote":"go home";
// console.log(ans);
// let ar = [12,4,5,2];
// let max = 0;
// for(let value of ar){
//    max= Math.max(max,value);
// }
// console.log(max);
// console.log(2|10);
// let a = 10+(2*2)/2;
// console.log(a);
// let b= 3;
// switch(b){
//     case 1: 
//        console.log("bhai ka bday");
//        break;
//     case 2:
//         console.log("bhai bhaad ma ja");
//         break;
// default:
//     console.log("ok");
//     break;
// }
// let k = 2;
// let l = 3;
// let f = 5;
// if(k>=l&&k>=f){
//     console.log("the largest number is " + k);
// }
// else if(l>=f&&l>=k){
//     console.log("the largest number is " + l);
// }
// else{
//     console.log("the largest number is " + f);
// }
// let nums = 22;
// for(let i = 0;i<=nums;i++){
//     console.log(i);
//     i++;
// }
// function objects(){
//   this.  length = 1,
//   this.  breadth = 2,
//    this. draw= function(){
//     console.log('draw');
//    }
       
    
// }
// let obj = new objects();
// let object = {
//     p :1,
//     c:2
// };
// object.d = 3;
// delete object.d;
// console.log(object);
// for(values in object){
//     console.log(values,object[values]);
// }
// for(let keys of Object.keys(object)){
//     console.log(keys);
// }
// if('p' in object){
//     console.log("present sir");
// }
// // let obj2 = {...object};
// // console.log(obj2);
// // let obj2 = Object.assign(object);
// // console.log(obj2);
// let obj2 = {};
// for(keys in object){
//     obj2[keys] = object[keys];
// }
// console.log(obj2);
// let str = new String("sharad is a good boy");
// console.log(str.includes("sh"));
// console.log(str.indexOf("h"));
// let a= str.toUpperCase()
// let b =  str.trim();
//  let replace = str.replace("s","a");
// console.log(replace);
// let d = str.split(' ');
// console.log(d);
// let names = "sharad";
// let f = `Hello my 
// name is ${names}`;
// console.log(f);
let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// arr.unshift(11);
arr.splice(2,0,'23');
console.log(arr);
let target = 10;
console.log(arr.includes(target));
let course = [
  {nam:"sharad",age:19},
  {nam2:"sharadbhai",age:20}
];
let p = course.find(course=>course.nam ==="sharad");
console.log(p);
arr.splice(0,1);
console.log(arr);
let sec = [1,2334];
let second = arr.concat(sec);
console.log(second);
console.log(arr.slice(0,4));
let comb = [...arr,...sec];
console.log(comb);
arr.forEach(function(number){
    console.log(number);
});
let sorts= arr.sort(function(a,b){
    return a-b;
})
console.log(sorts);
let values = arr.filter(values=>values>=5);
console.log(values);