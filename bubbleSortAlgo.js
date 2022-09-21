// "1. Implement the bubble sort algorithm to arrange a sequence of numbers from 1..100 in decreasing order. Analyze the time taken by the algorithm. 2. Perform the Time complexity analysis of bubble sort algorithm. Submit the link on codepen, jsfiddle or codesandbox"

// Sorting in descending order.
console.log(`_Bubble Sort 1 to 100 (desc)_`);

const bubbleSortDesc = function (arr) {
    let swapped;

    for (let i = 0; i < arr.length; i++) {

        swapped = false;

        for (j = 1; j < arr.length - i; j++) {
            if (arr[j] > arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;

}
// Worst case time complexity is O(N^2).

const inputNumbers = function () {
    let output = [];
    for (let i = 1; i <= 100; i++) {
        output.push(i);
    }
    return output;
}

console.log(bubbleSortDesc(inputNumbers()));
