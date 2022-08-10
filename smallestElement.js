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





