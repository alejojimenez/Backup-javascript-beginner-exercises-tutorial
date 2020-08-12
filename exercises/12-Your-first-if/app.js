var total = prompt('How much money do you have in your pocket?');

// Your code below:
if (total > 100) {
   console.log("Give me your money!");
}  else if (total > 50 && total <= 100) {
   console.log("Buy me some coffee, you cheapskate!"); 
}  else if (total <= 50) {
   console.log("You are a poor guy, go away!");
}