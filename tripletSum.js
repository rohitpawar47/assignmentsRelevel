// "Given an array. You need to find a triplet that will be having sum as a target. A Triplet is a set of 3 numbers. Input - [3,6,5,2,10] Target - 11 Output - [3,6,2] "

console.log(`_Triplet Sum Equals to Target_`);

const tripletSum = function (arr, target) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    ans.push(arr[i], arr[j], arr[k]);
                }
            }
        }
    }
    return ans;
}

console.log(tripletSum([3, 6, 5, 2, 10], 11));