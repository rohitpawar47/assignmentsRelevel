// Write a program to sort the elements in the array by descending order using a random pivot.

console.log(`_Sort The Array By Descending Order_`);

const sortArray = function (arr, low, high) {

    let s = low;
    let e = high;
    let m = Math.floor(s + (e - s) / 2);
    let p = arr[m];

    if (s >= e) {
        return;
    }

    while (s <= e) {

        while (p < arr[s]) s++;

        while (p > arr[e]) e--;

        if (s <= e) {
            temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
    }
    sortArray(arr, low, e);
    sortArray(arr, s, high);
}

var arr = [15, 2, 13, 40, 5];
sortArray(arr, 0, arr.length - 1);
console.log(arr);