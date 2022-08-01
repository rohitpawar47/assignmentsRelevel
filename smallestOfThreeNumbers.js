// Given 3 numbers. You need to find the smallest of three numbers without using comparison operators..

function smallestOfThree(firstNumber, secondNumber, thirdNumber) {

    var output = Math.min(firstNumber, secondNumber, thirdNumber);
    console.log(output + " is a smallest number.");

}


smallestOfThree(12, 44, 2);
smallestOfThree(12, 25, 3);
smallestOfThree(1, 44, 2);
smallestOfThree(20, 8, 82);
smallestOfThree(2, 4, 6);
smallestOfThree(89, 55, 6);
smallestOfThree(76, 4, 12);
smallestOfThree(2, 0, 1);
