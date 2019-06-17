//Keyword let introduced in ES6
//Problem with var keyword is you can override variable declarations without an console.error
//This is fixed by introducing let keyword
//"use strict" enables strict mode - catches common coding mistakes and unsafe actions
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
