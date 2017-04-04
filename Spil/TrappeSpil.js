exports.bygTrappe = function(bruger){
  var inventory = require('inventory');
  var items = require('items');
  var utils = require('utils');
  var Drone = require('drone');
  var recipient = utils.player( bruger );

  playerDrone = new Drone(recipient.location);
  playerDrone.fwd(5);
  op = recipient.location.y;
  opSlut = op + 20;
  while (op < opSlut) {
    playerDrone.box(109,1,1,1);
    playerDrone.fwd(1);
    playerDrone.up(1);
    op++;
  }
  playerDrone.box(57,1,1,1);

  inventory(recipient)
    .add( items.diamondPickaxe(1) )
};
