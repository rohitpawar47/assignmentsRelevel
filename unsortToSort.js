/* Write code for creating a new sorted array from two sorted arrays in O(n+m) time complexity where
n, m are the size of the unsorted arrays*/

const unsortedToSorted = function (input1, input2) {
    const result = input1.concat(input2);

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    console.log(result);
}

unsortedToSorted([9, 2, 3, 4, 5, 7], [4, 2, 3, 2, 1, 0]);
unsortedToSorted([6, 0, 2,], [7, 3, 4, 5, 1]);
unsortedToSorted([5, 4, 3, 2, 1, 0], [4, 2, 3, -1, 1, 0]);

