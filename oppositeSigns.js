// Given 2 numbers as input. You need to find if they have opposite signs or not.

function oppositeSigns(x, y) {

    if (x > y || x < y) {
        return true;
    } else {
        return false;
    }
}

console.log(oppositeSigns(-12, 9));
console.log(oppositeSigns(-12, -12));
console.log(oppositeSigns(-90, 34));
console.log(oppositeSigns(0, 0));
console.log(oppositeSigns(0, -1));

