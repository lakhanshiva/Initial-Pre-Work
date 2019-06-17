// ...arr returns an unpacked array in other words it spreads the array
// The spread operator only works in-place like in an argument to a function or in an array literal
// In this problem we copy contents of arr1 to arr2 using spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
