
var character = {
  name: name,
  health: 40,
  heals_remaining: 2,
  wins: 0,
  generate_attack_damage: function() {
    var damage = Math.floor((Math.random() * 3) + 1);
    return damage;
  },
  heal: function() {
    var heal = Math.floor((Math.random() * 10) + 1);
    character.heals_remaining = (character.heals_remaining - 1);
    return heal;
  }
};

var grant = {
  name: "Grant",
  health: 10,
  generate_attack_damage: function () {
    var damage = Math.floor((Math.random() * 3) + 1);
    return damage;
  }
};

var start = document.getElementById("start");
start.onclick = function() {
  start_game();
}

//---------------------------------------------------------------------
function start_game() {
  start.style.visibility = "hidden";
  character.name = prompt("Please enter your name.");
  what_is_happening.innerText = "Okay " + character.name + ", your game has started! Click Attack, Heal, or Quit.";
  start_combat();
}
//-----------------------
var what_is_happening = document.getElementById("what_is_happening");
var attack_heal_quit = document.getElementById("attack_heal_quit");
var number_of_wins = 0;
heals_remaining = 2;
//-----------------------


function start_combat(attack_heal_quit) {

  if (grant.health <=0 && number_of_wins === 4) {
    what_is_happening.innerText = "Yay! You won all five rounds!";
    attack.style.visibility = "hidden";
    heal.style.visibility = "hidden";
    quit.style.visibility = "hidden";
    return;
  }
  else if (grant.health <= 0) {
    number_of_wins++;
    what_is_happening.innerText = ("YOU BEAT GRANT ...this round. Your remaining health: " + character.health + ". Grant's remaining health: 0. You have " + number_of_wins + " win(s).");
    grant.health = 10;
    return;
  }

  else if (character.health <= 0) {
    attack.style.visibility = "hidden";
    heal.style.visibility = "hidden";
    quit.style.visibility = "hidden";
    what_is_happening.innerText = "You have been defeated. Darn."
    return;
  }

  if (attack_heal_quit === "attack") {
    //attack
    character.health = (character.health - character.generate_attack_damage());
    console.log("You have " + character.health + " health left.");
    grant.health = (grant.health - character.generate_attack_damage());
    console.log("Grant has " + grant.health + " health left.");
    what_is_happening.innerText = character.name + " has " + character.health + " health. Grant has " + grant.health + " health.";


  } else if (attack_heal_quit === "heal") {
    //heal
    if (character.heals_remaining >0){
      character.health = (character.health + character.heal());
      heals_remaining = heals_remaining - 1;
      what_is_happening.innerText = ("You healed yourself! Your health is now " + (character.health) + ". And you have " + character.heals_remaining + " heal remaining.");
    } else
    what_is_happening.innerText = ("Oops! You used all of your heals.");

  } else if (attack_heal_quit === "quit") {
    //quit
    what_is_happening.innerText = ("Good effort");
    attack.style.visibility = "hidden";
    heal.style.visibility = "hidden";
    quit.style.visibility = "hidden";
    console.log("You quit the game.");
    return;
  }
}
