
/* A function to Calculate BMI */

function weightDescription() {
    if (bmi < 18.5) {
        console.log("Your BMI is " + bmi + ", so you are underweight.");
        } 
    if (bmi > 18.5 && bmi < 24.9) {
         console.log("Your BMI is " + bmi + ", so you have a normal.");
        } 
    if (bmi > 24.9 && bmi < 29.9) {
        console.log("Your BMI is " + bmi + ", so you are overweight.");
        } 
    if (bmi > 29.9 && bmi < 34.9) {
        console.log("Your BMI is " + bmi + ", so you are obese.");
        } 
    if (bmi > 34.9) {
        console.log("Your BMI is " + bmi + ", so you are extremely obese.");
        }
}

function bmiCalculator (weight, height) {
    var interpretation = weight / (height * height);
    return Math.round(interpretation);
}
var bmi = bmiCalculator(110,1.77);

weightDescription()