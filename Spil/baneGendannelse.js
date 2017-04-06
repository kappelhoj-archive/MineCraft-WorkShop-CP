
events.blockBreak( gendanKlods );
events.blockPlace( fjernBlok );
SKALGENDANNE = "JA"
SPAWNER = ""

function fjernBlok( event ) {
  var teleport = require('teleport');
  echo (event.player, SPAWNER );
  teleport (event.player, SPAWNER);
  var Drone = require('drone');
  playerDrone = new Drone(event.block.location);
  if ( SKALGENDANNE == "JA"){
    playerDrone.box(0,1,1,1);
  }
};

function gendanKlods( event ) {
  var Drone = require('drone');
  playerDrone = new Drone(event.block.location);
  SPAWNER = playerDrone.location
  var inventory = require('inventory');
  var items = require('items');
  var utils = require('utils');
  echo (event.player, "fishtank");
  if ( SKALGENDANNE == "JA"){
    playerDrone.box(event.block.type,1,1,1);
  }
};

exports.triggerGendan = function(){
  if (SKALGENDANNE == "JA"){
    SKALGENDANNE = "NEJ";
  } else {
    SKALGENDANNE = "JA";
  }
};
