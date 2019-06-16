/*Counting cards function - used num.toString(), case statements, if else if, incr, decr operators*/
var count = 0;

function cc(card) {
  // Only change code below this line
  var ans = "";
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'K':
    case 'Q':
    case 'A':
      count--;
      break;
  }

  if(count > 0){
    ans += count.toString();
    ans += " Bet";
  }
  else{
    ans += count.toString();
    ans += " Hold";
  }
  console.log(ans);
  return ans;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
