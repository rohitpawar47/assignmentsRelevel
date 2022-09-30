// "We have two lists of pairwise disjoint and sorted intervals. We need to return the intersection of the two lists."

console.log(`_Find the intersection of two list_`);

const intersectionOfTwoList = function (list1, list2) {
    let arr = [...list1, ...list2];
    let s = 0;
    let e = arr.length - 1;
    let mid = Math.floor(s + (e - s) / 2);
    arr.sort((a, b) => a - b);
    // console.log(arr);
    if (arr.length % 2 === 0) {
        return Math.floor((arr[mid] + arr[mid + 1]) / 2);
    } else {
        return arr[mid];
    }
}

var list1 = [1, 2, 6, 11, 15];
var list2 = [6, 7, 8, 9, 10];
console.log(intersectionOfTwoList(list1, list2));