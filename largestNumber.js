//  Write a function that compares two numbers and returns the larger of the two.

function largestNumber(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        console.log("Invalid input");
    }
    else if (num1 === num2) {
        console.log("Both numbers are similar.");
    }
    else if (num1 > num2) {
        console.log(num1 + " is largest number.");
    }
    else {
        console.log(num2 + " is largest number.");
    }

}

largestNumber(2, 4);
largestNumber(18, 90);
largestNumber(0, 0);
largestNumber(7, 8);
largestNumber(9, 9);
largestNumber(0, 5);