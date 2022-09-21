// "1. Implement the selection and insertion sorting algorithms to arrange a sequence of numbers from 1..100 in decreasing order. Analyze the time taken by each algorithm. 2. Perform the Time complexity analysis of all the two sorting algorithms. Submit the link on codepen, jsfiddle or codesandbox"


// Input array 1-100 numbers.
const inputNumbers = function () {
    let output = [];
    for (let i = 1; i <= 100; i++) {
        output.push(i);
    }
    return output;
}


// Selection Sort in descending order.
console.log(`_Selection Sort (Desc)_`);

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let last = arr.length - i - 1;
        let maxIndex = getMaxIndex(arr, 0, last);
        swap(arr, maxIndex, last);
    }
    return arr;

}

const getMaxIndex = function (arr, start, end) {
    let max = start;
    for (let i = start; i <= end; i++) {
        if (arr[max] > arr[i]) {
            max = i;
        }
    }
    return max;
}

const swap = function (arr, first, second) {
    temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(selectionSort(inputNumbers()));


// Insertion Sort in descending order.
console.log(`\n_Insertion Sort (Desc)_`);

const insertionSort = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] > arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSort(inputNumbers()));


// Worst case time complexity for both sorting algorithm is O(N^2).