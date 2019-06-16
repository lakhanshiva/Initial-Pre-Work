/*Strict equality operator does not perform type conversion
  Equality operator converts both values being compared to a common type*/
  // Setup
  function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  // Change this value to test
  testStrict(10);
