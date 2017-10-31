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

start_game();

//---------------------------------------------------------------------
function start_game() {
  var yes_or_no = prompt("Would you like to play a game?");
  if (yes_or_no === "no") {
    alert("OK");
    return;
  }
  while (yes_or_no.toLowerCase() !== "yes") {
    yes_or_no = prompt("Would you like to play a game? SAY YES OR NO PLS");
    yes_or_no = yes_or_no.toLowerCase();
    if (yes_or_no === "no") {
      alert("OK");
      return;
    }
  }
  character.name = prompt("Please enter your name.");

  start_combat();
}
//------------------------------------------------------------------------
function start_combat() {
  alert("YOU'RE GONNA FIGHT GRANT NOW");
  var number_of_wins = 0;

  for (var i = 0; i<=5; i++){

    while (grant.health > 0 && character.health > 0) {

      var attack_or_quit = prompt("Grant's health is "  + (grant.health) + " and " + (character.name) + "'s health is "  + (character.health) + ". Would you like to attack, quit, or heal?");
      attack_or_quit = attack_or_quit.toLowerCase();
      if (attack_or_quit === "quit") {
        alert("Good effort");
        return;
      } else if (attack_or_quit === "heal" && character.heals_remaining > 0) {
        character.health = (character.health + character.heal());
        alert("You healed yourself! Your health is now " + (character.health) + ". And you have " + character.heals_remaining + " heals remaining.");

      } else if (attack_or_quit === "heal" && character.heals_remaining === 0) {
        alert("Oops, you used all of your heals!");
      } else if (attack_or_quit === "attack"){

        character.health = (character.health - character.generate_attack_damage());
        console.log("You have " + character.health + " health left.");
        grant.health = (grant.health - character.generate_attack_damage());
        console.log("Grant has " + grant.health + " health left.");


      }
      while (attack_or_quit !== "attack" && attack_or_quit !== "heal") {
        attack_or_quit = prompt("Grant's health is " + (grant.health) + " and " + (character.name) + "'s health is " + (character.health) +  " Would you like to attack, quit, or heal? Please enter attack, quit, or heal.");
        attack_or_quit = attack_or_quit.toLowerCase();
        if (attack_or_quit === "quit") {
          alert("Good effort");
          return;
        }
      }
    }
    if (grant.health <= 0) {
      number_of_wins++;
      alert("YOU BEAT GRANT! Your remaining health: " + character.health + ". Gran't remaining health: 0. You have " + number_of_wins + " win(s).");
      grant.health = 10;
    }
    else if (character.health <= 0) {
      alert("Sorry, Grant defeated you, ya dang hoser! Your remaining health: 0. Grant's remaining health: " + grant.health + ".");
      break;
    }
  }
}
