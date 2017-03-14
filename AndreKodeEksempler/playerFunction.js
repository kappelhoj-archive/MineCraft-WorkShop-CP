
function playerFunction() {
  var SECOND =1000;
  var utils = require('utils');
  var name = 'lunar_skunk';
  var player = utils.player(name);
  echo(player.location.yaw);

  task=null;
  i=0
  var fun = function() {
    echo(player.location.yaw);
    if(i>10){
      clearInterval(task);
    }
    i++;
  };

  task = setInterval(fun, 1 * SECOND);




};

var Drone = require('drone');
Drone.extend( playerFunction );
