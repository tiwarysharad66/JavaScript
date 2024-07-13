// console.log("helloj");
// let rectangle=  {
//     length:1,
//     breadth : 1,
//     draw:function(){
// console.log("hey");
//     }
// };
// console.log(rectangle.draw());
//factory function
// function createRectangle(length,breadth){
//   return   rectangle=  {
//      length,
//      breadth,
//     draw(){
//         console.log("hey");
//     }
//     draw:function(){
// console.log("hey");
//     }
// };
// return rectangle;

// }
// let rectangleobj1 = createRectangle(5,4);
// let rectangleobj2 = createRectangle(42,4);
// console.log(rectangleobj1);
// console.log(rectangleobj2);
// function Object(len,bre){
//     this.length = len,
//     this.breadth = bre,
//   this.draw= function(){
//         console.log("drawing");
//     };
// };
// let obj =new Object(2,43333);
// // console.log(obj);
//  obj.color = 'yellow';
//  console.log(obj);
//  delete obj.color;  
//  console.log(obj);
// obj.constructor;
// Object.constructor;
let obj = {
    a:10,
    b:20,
    c:30
};
let dest = {};
// for(let key in obj){
//     dest[key] = obj[key];
// }

Object.assign(dest,obj);
console.log(dest);
obj.a++;
console.log(dest);
console.log(obj);
let des = {...obj};
console.log(des);

