/**************************************
 * CODING CHALLENGE NUMBER 4
 **************************************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and the respective BMI.
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 69,
  height: 1.76,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};

var mark = {
  firstName: 'Mark',
  lastName: 'Wahlberg',
  mass: 80,
  height: 1.82,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};

function whoHasTheHighestBMI(johnBMI, markBMI) {
  if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' ' + john.lastName + ' has the highest score, with a BMI of ' + john.bmi + '.');
  } else if (john.bmi === mark.bmi) {
    console.log(john.firstName + ' ' + john.lastName + ' and ' + mark.firstName + ' ' + mark.lastName + ' have the same BMI\'s');
    console.log('of ' + john.bmi);
  } else {
    console.log(mark.firstName + ' ' + mark.lastName + ' has the highest score, with a BMI of ' + mark.bmi + '.');
  }
}

whoHasTheHighestBMI(john.calcBMI(), mark.calcBMI());

// SOLUTION

var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have the same BMI.');
}