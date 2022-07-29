// Create a program to print all the palindromes under 50.


function numPalindrome(num) {
    var original_number = num;
    var reverse = 0;

    while (num != 0) {
        reverse = (reverse * 10) + (num % 10);
        num = parseInt(num / 10);
    }
    if (original_number == reverse) {
        return 1;
    }
    else {
        return 0;
    }
}

function main() {
    for (let i = 1; i <= 50; i++) {
        if (numPalindrome(i) == 1) {
            console.log(i);
        }
    }
}

main();


