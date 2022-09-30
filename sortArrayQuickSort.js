// "Given an array. You need to sort an array using the iterative quick sort algorithm Input - [3,6,5,2,10] Output - [2,3,5,6,10] "

console.log(`_Sort the array using quick sort_`);

const quickSort = function (arr, low, high) {
    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;
    let m = Math.floor(s + (e - s) / 2);
    let p = arr[m];

    while (s <= e) {

        while (p > arr[s]) s++;

        while (p < arr[e]) e--;

        if (s <= e) {
            temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e++;
        }
    }
    quickSort(arr, low, e);
    quickSort(arr, s, high);
}

var arr = [3, 6, 5, 2, 10];
quickSort(arr, 0, arr.length - 1);
console.log(arr);