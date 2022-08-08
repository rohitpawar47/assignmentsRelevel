/* "Write a method that accepts an array of integers and updates every element with multiplication of previous and
next elements. */

function arrayMultiplicationOfPrevAndNext(arr, len) {
    if (len <= 1)
        return;

    // Preview element.
    let prev = arr[0];
    arr[0] = arr[0] * arr[1];

    // Middle elements.
    for (let i = 1; i < len - 1; i++) {

        let curr = arr[i];
        arr[i] = prev * arr[i + 1];
        prev = curr;

    }

    // Last element..
    arr[len - 1] = prev * arr[len - 1];
}

// Calling Program..
const callingFunction = function () {
    let arr = [1, 2, 3, 4, 5];
    let len = arr.length;
    arrayMultiplicationOfPrevAndNext(arr, len);
    for (let i = 0; i < len; i++)
        console.log(arr[i]);
}

callingFunction();

