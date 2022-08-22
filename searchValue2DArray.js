/* Write an efficient algorithm to search a value in a 2D matrix in which the rows are in sorted order and the first integer of each row is greater than the last integer of the previous row */


// Using binary search to find a value.

const usingBinarySearch = function (matrix, target) {


    var row = 0;
    var col = matrix[row].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) {
            return [row, col];
        }


        if (matrix[row][col] < target) {
            row++;
        }


        else {
            col--;
        }
    }
    return [-1, -1];
}

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const output = usingBinarySearch(matrix, 4);
console.log(output);