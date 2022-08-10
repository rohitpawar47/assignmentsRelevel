/*Write a program to find the second smallest number from array using loops concept*/

const findSecondSmallestNumber = function (arr) {
    let smallestNumber = 999999;
    let secondSmallestNumber = 999999;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        } else if (arr[i] < secondSmallestNumber) {
            secondSmallestNumber = arr[i];
        }

    }
    console.log(`Second smallest number is ${secondSmallestNumber}`);
}

findSecondSmallestNumber([9, 0, 2, 1, 4, 12]); // 1
findSecondSmallestNumber([9, 2, -12, 1, 0, 12]); // 0
findSecondSmallestNumber([9, 2, -12, 1, -4, 12]); // -4