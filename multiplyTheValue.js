// "Write a program to multiply the value in the given array and return a result (use array functions) Array = [2,3,4,5,6,7,8]"

// Using arrow & reduce method..
const arr = [2, 3, 4, 5, 6, 7, 8];

const mul = arr.reduce((acc, curr) => acc *= curr);
console.log(mul);



// Traditional function.
// const multiplyArrayValues = function (arr) {
//     let mul = 1;

//     for (let i = 0; i < arr.length; i++) {

//         mul *= arr[i];
//     }
//     console.log(mul);
// }

// multiplyArrayValues([2, 3, 4, 5, 6, 7, 8]);