// const details ={
//     name:'Souptik',
//     age:23
// }
// details.phone=7278662190
// details.email='souptik@gmail.com'

// console.log(details)

console.log("Merge multiple array using spread operator ")
const array1=[1,2,3,4,5]
const array2=[6,7,8,9,10]
const array3=[...array1,...array2]
console.log(array3)

console.log("Copy an array")
const array4=[1,2,3,4,5]
const array5=[...array4]
console.log(array5)

console.log("Find sum of array using reduce")
const array6 = [10, 20, 30, 40];
const sum = array6.reduce((a, b) => a + b, 0);
console.log(sum);

console.log("[1,[2,3],[4,5]] -> get in 1 level")
const array7 = [1, [2, 3], [4, 5]];
const array8 = array7.reduce((a, b) => a.concat(b), []);
console.log(array8);
