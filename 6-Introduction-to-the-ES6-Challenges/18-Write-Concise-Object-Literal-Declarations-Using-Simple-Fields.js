/*const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

In ES6 we can do the same as below:
const getMousePosition = (x, y) => ({ x, y });
*/
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  {name, age, gender}
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
