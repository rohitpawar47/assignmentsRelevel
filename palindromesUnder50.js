//  Create a program to print all prime palindromes under 50.

function palindromsUnder50(num) {

    var input = num;
    var reverse = 0;
    var digits;

    while (num > 0) {
        digits = num % 10;
        reverse = reverse * 10 + digits;
        num = parseInt(num / 10);
    }
    if (input == reverse) {
        console.log(reverse);
    }
}
function main() {
    for (let i = 0; i <= 50; i++) {
        palindromsUnder50(i);
    }
}

main();