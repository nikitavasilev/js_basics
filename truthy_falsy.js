/******************************
 * Truthy and falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truth values: NOT falsy values

var height;

height = 23;
if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// equality operators
if (height == '23') {
  console.log('The == operator does type coercion!');
}