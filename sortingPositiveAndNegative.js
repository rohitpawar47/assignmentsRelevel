/* Move all negative numbers to the end and positive to the beginning of the array without using any predefined sorting method*/


const sortingPositiveAndNegative = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                swap = arr[j];
                arr[j] = arr[i];
                arr[i] = swap;
            }
        }
    }
    console.log("Sorted array: ", arr);
}


sortingPositiveAndNegative([4, -6, 7, -2, 5, 8, -1, 9, -3]);

