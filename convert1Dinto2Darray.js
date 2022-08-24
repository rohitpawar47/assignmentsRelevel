// Given a 1D array of size 10 , convert it into a 2D array of size 2x5..

const convertArrayToMatrix = function (arr) {
    output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr.splice(0, 5));
    }
    console.log(output);
}

convertArrayToMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);