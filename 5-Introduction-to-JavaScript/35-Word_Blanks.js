/*defining functions in JS (use function keyword) and passing arguments (strings) to build a sentence*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "It was really " + myAdjective + " " + myNoun + ", and we " + myVerb + " " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
wordBlanks("cat", "little", "hit", "slowly");
