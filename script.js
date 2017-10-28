start_game();


var grant_health = 10;
var user_health = 40;
var number_of_wins = 0;


function get_damage() {
  var damage = Math.floor((Math.random() * 5) + 1);
  return damage;
}

function start_game() {
var yes_or_no = prompt("Would you like to play a game?");
if (yes_or_no === "no") {
  alert("OK BRO CALM DOWN");
  return;
}
while (yes_or_no.toLowerCase() !== "yes") {
  yes_or_no = prompt("Would you like to play a game? SAY YES OR NO PLS");
  yes_or_no = yes_or_no.toLowerCase();
  if (yes_or_no === "no") {
    return;
  }
}
var character_name = prompt("Ok cool. Enter your character's name.");
var are_you_sure = prompt("Your character's name is " + character_name + ". Do you want to continue and play as " + character_name);
while (are_you_sure !== "yes") {
var character_name = prompt("Ok cool. Enter your character's name.");
  are_you_sure = prompt("Your character's name is " + character_name + ". Do you want to continue and play as " + character_name);
}
start_combat();
}


function start_combat() {
  alert("OK DUDE, LIKE WOW, YOU'RE ABOUT TO FIGHT GRANT");

for (var i = 1; i <=3; i++){

grant_health = 10;

while (grant_health > 0 && user_health > 0) {

  var attack_or_quit = prompt("Grant's health is now " + grant_health + " and your health is now " + user_health + " Would you like to attack or quit?")
  attack_or_quit = attack_or_quit.toLowerCase();
  if (attack_or_quit === "quit") {
  alert("Good effort");
    return;
  }
  while (attack_or_quit !== "attack") {
    attack_or_quit = prompt("Grant's health is now " + grant_health + " and your health is now " + user_health + " Would you like to attack or quit? Please enter attack or quit.");
    attack_or_quit = attack_or_quit.toLowerCase();
  }

  user_health = (user_health - get_damage());
  console.log("You have " + user_health + " health left.");
  grant_health = (grant_health - get_damage());
  console.log("Grant has " + grant_health + " health left.");
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
}
