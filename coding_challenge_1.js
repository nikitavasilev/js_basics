/*********************************
 * Coding Challenge 1
 */

var johnHeight, johnMass, markHeight, markMass;
johnHeight = 180;
johnMass = 80;
markHeight = 176;
markMass = 69;

var johnBmi, markBmi;
johnBmi = johnMass / (johnHeight ** 2);
markBmi = markMass / (markHeight ** 2);

console.log('John\'s BMI is ' + johnBmi + '. And Mark\'s is ' + markBmi + '.');

isMarkHigher = markBmi > johnBmi;
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigher);

// SOLUTION

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);