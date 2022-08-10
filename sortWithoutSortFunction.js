/* Given an array having 0,1 as input( We need to write a function that sorts the array in ascending order without using inbuilt sort function */


const sortWithoutSortFunction = function (arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

sortWithoutSortFunction([0, 1, 0]);
sortWithoutSortFunction([9, 8, 7, 5, 4, 3, 2, 1, 0]);