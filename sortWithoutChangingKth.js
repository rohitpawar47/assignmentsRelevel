// "Given an array, and an index k, sort the elements in ascending order, without changing the position of the kth element."

console.log(`_Sort An Array Without Changing Kth Element_`);

const sortWithoutChangingKth = function (arr, k) {
    let n = arr.length - 1;
    let temp = arr[k];
    arr[k] = arr[n];
    arr[n] = temp;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let s = k;
    let e = n;
    while (s < e) {
        temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
    }

    return arr;
}

console.log(sortWithoutChangingKth([10, 4, 11, 7, 6, 20], 2));
console.log(sortWithoutChangingKth([30, 20, 10], 0));
console.log(sortWithoutChangingKth([12, 7, 4, 1, 10], 2)); 