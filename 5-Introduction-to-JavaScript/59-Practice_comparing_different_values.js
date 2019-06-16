/*Example to show the difference between == and ===
  When using === the comparision 10 === "10" returns false
  whereas == returns true*/
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
