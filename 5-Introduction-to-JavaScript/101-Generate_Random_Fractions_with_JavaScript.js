/*Using while loop to generate a random number that is not zero*/
function randomFraction() {

  // Only change code below this line.
  var rand = Math.random();
  while(rand == 0){
    rand = Math.random();
  }
  return rand;

  // Only change code above this line.
}
