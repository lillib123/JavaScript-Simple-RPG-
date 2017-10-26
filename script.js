var yes_or_no = prompt("Would you like to play a game?");
while (yes_or_no.toLowerCase() !== "yes") {
  yes_or_no = prompt("Would you like to play a game? SAY YES PLS");
}
// ^^^ prompts user to enter yes - only accepts yes
var character_name = prompt("Ok cool. Enter your character's name.");
var are_you_sure = prompt("Your character's name is " + character_name + ". Do you want to continue and play as " + character_name);
while (are_you_sure !== "yes") {
var character_name = prompt("Ok cool. Enter your character's name.");
  are_you_sure = prompt("Your character's name is " + character_name + ". Do you want to continue and play as " + character_name);
}
//^^^ prompts the user to enter a character name and keeps letting them change until they say yes

alert("OK DUDE, LIKE WOW, YOU'RE ABOUT TO FIGHT GRANT");

var grant_health = 10;
var user_health = 40;
var damage_dealt = null;
var number_of_wins = null;

for (var i = 1; i <=3; i++){

grant_health = 10;

while (grant_health > 0 && user_health > 0) {
  damage_dealt = Math.floor((Math.random() * 2) + 1);
  user_health = (user_health - damage_dealt);
  damage_dealt = Math.floor((Math.random() * 2) + 1);
  grant_health = (grant_health - damage_dealt);
}

if (grant_health <= 0) {
  number_of_wins++;
  alert("YOU BEAT GRANT! Your remaining health: " + user_health + ". Gran't remaining health: 0. You have " + number_of_wins + " win(s).");
}
else if (user_health <= 0) {
  alert("Sorry, Grant defeated you, you hoser! Your remaining health: 0. Grant's remaining health: " + grant_health + ".");
  break;
}
}
