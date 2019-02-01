/**************************************
 * Arrays
 **************************************/

 // Initialize new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);
 
 console.log(names[0]);
 console.log(names.length);
 
 // Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);
 
 // Different data types
 var john = ['John', 'Smith', 1990, 'teacher', false];
 
 john.push('blue');
 john.unshift('Mr.');
 console.log(john);
 
 john.pop(); // delete the last element of the array
 john.pop();
 john.shift(); // delete the first element of the array
 console.log(john);
 
 console.log(john.indexOf(1990)); // position of the element, if position === -1, then don't exist
 
 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
 console.log(isDesigner);