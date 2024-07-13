let numbers = [1,2,3,4];
// console.log(numbers);
// console.log(numbers[3]);
// numbers.push(23);
// console.log(numbers);
// numbers.unshift(34);
// console.log(numbers);
// numbers.splice(2,0,'a','b','c');
// console.log(numbers);
// console.log(numbers.indexOf(4));
// console.log(numbers.includes(4));
// console.log(numbers.indexOf(3,4));
// let courses = [
//   {  no1:1,naam:'sharad'},
//   {no2:2,naam:'hello'}
// ];
// console.log(courses);
// let c = courses.find(function(courses){
//     return courses.naam=='sharad';
// });
// console.log(c);
// let course = courses.find(function(course){
//     return course.naam =='sharad';
// });
// console.log(course);
// let d = courses.find(course => course.naam==='sharad');
// console.log(d);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(0,2);
console.log(numbers);
let num= [1,2,2,2,2,2];
let num2 = num;
num.length=0;
console.log(num);
console.log(num2);
let first= [3,4,4];
let second = [3,4];
let comb = first.concat(second);
console.log(comb);
let slice = comb.slice(2,3);
console.log(slice);
let first1= [1,2,3];
let first2= [2,3,4];
let ans = [...first1,...first2];
console.log(ans);
for(let val of ans){
    console.log(val);
}
ans.forEach(function(numbers){
console.log(numbers);
})
console.log();
let value = ans.forEach (numbers=> console.log(numbers));
let sorted =  [2,5,30,2,5];
sorted.sort();
console.log(sorted);
sorted.reverse();
console.log(sorted);
let nums = [1,2,-1,-4];
// let anss= nums.filter(function(value){
//     return value>=0;
// });
let anss = nums.filter(value=> value>=0);
console.log(anss);
let arr = [7,8,9,10];
// let items = arr.map(function(value){
//     return 'student_no'+value;
// });
let items = arr.map(value=>'students-no' +value);
console.log(items);
let marks = [1,2,-4,-24,52];
let filtered= marks.filter(value=>value>=0);
let itemss = filtered.map(num=> ({value:num}));
console.log(itemss);




