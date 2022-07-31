//  Create a program to print all prime palindromes under 50.

function primePalindromsUnder50(num) {

    var input = num;
    var reverse = 0;
    var digits;

    while (num > 0) {
        digits = num % 10;
        reverse = reverse * 10 + digits;
        num = parseInt(num / 10);
    }
    if (input == reverse && (input % input === 0 && input % 1 === 0)) {
        console.log(reverse);
    }
}

function main() {
    for (var i = 2; i <= 50; i++) {
        var isPrime = true;
        for (var divident = 2; divident <= Math.sqrt(i); divident++) {
            if (i % divident === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primePalindromsUnder50(i);
        }
    }
}

main();