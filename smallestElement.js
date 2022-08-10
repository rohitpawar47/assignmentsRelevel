// Write code for finding the smallest element in an array.

const findSmallestElement = function (arr) {
    let small = 999999;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
    console.log(`Smallest number is ${small}`);
}

findSmallestElement([4, 2, 3, 1, 8, 15]); // 1
findSmallestElement([0, 2, 100, 1, -1, 15]); // -1
findSmallestElement([5, 24, 31, 1, 0, 15]); // 0
findSmallestElement([5, 24, 31, 8, 11, 2]); // 2


// const smallestElementInAnArray = function (num) {
//     let low = num[0];
//     for (let i = 1; i < num.length; i++) {
//         if (num[i] < low) {
//             low = num[i];
//         }
//     }
//     console.log(low);
// }
// smallestElementInAnArray([4, 2, 3, 1, 8, 15]); // 1
// smallestElementInAnArray([0, 2, 100, 1, -1, 15]); // -1
// smallestElementInAnArray([5, 24, 31, 1, 0, 15]); // 0
// smallestElementInAnArray([5, 24, 31, 8, 11, 2]); // 2


