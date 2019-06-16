/*Fixing isLess function with switch(a < b) case statement*/
function isLess(a, b) {
  // Fix this code
  var res;
  switch(a < b) {
    case true:
      res = true;
      break;
    case false:
      res = false;
      break;
  }

  return res;
}

// Change these values to test
isLess(10, 15);
