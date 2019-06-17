/* When you declare a variable with the let keyword inside a block, statement, or expression,
its scope is limited to that block, statement, or expression
*/

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

console.log(checkScope())
