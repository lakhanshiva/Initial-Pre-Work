/*Vergy good problem that explains how to use inline functions, map, filter and reduce in JavaScript*/
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  var squaredIntegers;
  squaredIntegers = arr.filter((num) => num > 0 && Number.isInteger(num))
  squaredIntegers = squaredIntegers.map((num) => num*num);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
