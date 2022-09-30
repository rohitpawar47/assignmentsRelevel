// Write a program to find the Kth largest element in the array using quick select.

console.log(`_Find Kth Largest Element (Quick Select)_`);

const quickSelect = function (arr, low, high, k) {
    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;
    let m = Math.ceil(s + (e - s) / 2);
    let p = arr[m];


    while (s <= e) {

        while (p > arr[s]) s++;

        while (p < arr[e]) e--;

        if (s <= e) {
            temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
    }
    quickSelect(arr, low, e, k);
    quickSelect(arr, s, high, k);
}

const findKthLargestElement = function (arr, k) {
    k = arr.length - k;
    quickSelect(arr, 0, arr.length - 1, k);
    console.log(arr[k]);
}

// var arr = [15, 2, 13, 40, 5]; // 2,5,13,15,40
const k = 3;
const arr = [15, 13, 0, 17, 17, 9, 12, 1, 4];
findKthLargestElement(arr, k);
