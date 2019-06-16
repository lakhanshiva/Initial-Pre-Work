/*Undefined return value - return;*/
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum+5;
  return;
}


// Only change code above this line
var returnedValue = addFive();
