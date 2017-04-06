
events.blockBreak( harDuVundet );
/*
diamantLokationer er en liste der bruges til at gemme hvor hver brugers
diamanter er gemt.
data bliver gemt spillerNavn : diamantBlok.x, og z
*/
var diamantLokationer = {};
/* ErDerEnVinder bliver brugt til at check om der er en vinder */
ErDerEnVinder = "NEJ";
/* VinderNavn bliver brugt til at sende vinder navnet ud til alle brugerne
 når der er en vinder
 */
VinderNavn = "";

// Denne function bliver brugt til at checke om der er er vinder.
function harDuVundet( event ){
  if (ErDerEnVinder == "NEJ") {
    echo (event.player, event.player.name);
    echo (event.player, diamantLokationer[event.player].x);
    if (event.block.location.x == diamantLokationer[event.player].x) {
      ErDerEnVinder = "JA"
      var utils = require('utils');
      players = utils.players();
      i = 0;
      for ( ; i < players.length; i++ ) {
        echo(players[i], event.player + " Har vundet.")
      }
      echo (event.player, "Du har vundet Haha!");
    }
  }
};

exports.startSpil = function(){
  ErDerEnVinder = "NEJ"
  var utils = require('utils');
  players = utils.players();
  i = 0;
  for ( ; i < players.length; i++ ) {
    bygTrappe(players[i])
  }
};


exports.bygTrappe = function(bruger){
  var inventory = require('inventory');
  var items = require('items');
  var utils = require('utils');
  var Drone = require('drone');
  var recipient = utils.player( bruger );
  playerDrone = new Drone(recipient.location);
  playerDrone.fwd(5);
  var diamantBlok = recipient.location;
  op = recipient.location.y;
  opSlut = op + 20;
  while (op < opSlut) {
    playerDrone.box(109,1,1,1);
    playerDrone.fwd(1);
    playerDrone.up(1);
    op++;
  }
  playerDrone.box(57,1,1,1);
  diamantBlok.x = Math.floor(playerDrone.x);
  diamantBlok.y = playerDrone.y;
  diamantBlok.z = playerDrone.z;
  diamantLokationer[recipient] = diamantBlok;
  inventory(recipient)
    .add( items.diamondPickaxe(1) )
};
