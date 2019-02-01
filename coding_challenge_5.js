/**************************************
 * CODING CHALLENGE NUMBER 5
 **************************************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants.
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and
2) an array containing final paid amounts (bill + tip).
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100,
10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalAmount = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 50) {
        percentage = .2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips.push(percentage * this.bills[i]);
      this.finalAmount.push(this.tips[i] + this.bills[i]);
    }
  }
};

john.calcTips();

var mark = {
  bills: [77, 375, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalAmount = [];
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 100) {
        percentage = .2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }
      this.tips.push(percentage * this.bills[i]);
      this.finalAmount.push(this.tips[i] + this.bills[i]);
    }
  }
};

mark.calcTips();

function calcAverageTip(tips) {
  var average = 0;
  for (i = 0; i < tips.length; i++) {
    average += tips[i];
  }
  return average / tips.length;
}

john.average = calcAverageTip(john.tips);
mark.average = calcAverageTip(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log('John\'s family have an average tip higher than Mark`s family.');
  console.log('The average tip is ' + john.average);
} else {
  console.log('Mark\'s family have an average tip higher than John`s family.');
  console.log('The average tip is ' + mark.average);
}

// SOLUTION

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
              
    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      
      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
            
    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];
      
      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }
      
      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}