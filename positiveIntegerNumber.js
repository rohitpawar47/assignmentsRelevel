// "Given a positive integer NUM, find a pair of integers a, G such thatF a and b ae positiveF..

function numberPair(num) {

    for (let a = 1; a <= num; a++) {
        for (let b = 1; b <= num; b++) {
            if (a * a + b * b == num && a <= b) {
                console.log(a + "," + b);
            }
        }
    }
}
numberPair(50);
numberPair(70);
numberPair(25);
numberPair(9);
numberPair(10);
numberPair(0);
numberPair(2);
numberPair(3);
numberPair(1);
numberPair(4);
numberPair(5);
