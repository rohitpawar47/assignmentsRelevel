// Write a function Astroguru.

console.log(`_Astroguru_`);

const astrguru = function (numOfChildren, spousesName, location, job) {

    console.log("You will be working as a " + job + " in " + location + " and married to " + spousesName + " with " + numOfChildren + " children.");
}

astrguru(2, `Rebecca`, `New York`, `Developer`);
astrguru(4, `Geeta`, `Mumbai`, `Software Engineer`);
astrguru(1, `Jennifer`, `Pune`, `Data Analyst`);
astrguru(3, `Shweta`, `Indore`, `Bank Manager`);




// Write a function that compares two numbers and returns the larger of the two.

console.log(`\n_Compare two numbers, Find maximum_`);

const findMaxNumber = function (x, y) {

    if (x > y) {
        return x;
    }

    else if (y > x) {
        return y;
    }

    else {
        return `Equal values cannot be compared`;
    }

}

console.log(findMaxNumber(2, 3));
console.log(findMaxNumber(100, 3));
console.log(findMaxNumber(-200, 1));
console.log(findMaxNumber(-9, 0));
console.log(findMaxNumber(5, 5));