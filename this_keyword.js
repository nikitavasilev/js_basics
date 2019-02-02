/**************************************
 * The 'this' keyword
 **************************************/

console.log(this); // By default in the browser => Window object

// calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this); // global object
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    // innerFunction(); // global object because it is a regular function
  }
};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();