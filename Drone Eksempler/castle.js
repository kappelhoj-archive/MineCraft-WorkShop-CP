//Bygger et tårn
function tower(width,height, debth) {
if(typeof width =='undefined'){
  width  = 7;
}

if(typeof height =='undefined'){
  height = 20;
}
if(typeof debth =='undefined'){
  debth  = 7;
}
  this.chkpt('start');
  this.box0('1',width,height,debth);
  this.up(height-2);
  this.box('1',width,1,debth);
  this.up(1);
  this.box0('1',width,1,debth);
  this.up(1);

  for(var i=0;i<4;i++){
    this.box('1');
    this.fwd(width-1);
    this.turn();
  }

  this.move('start');
};

//Byg borg
function castle() {
  wallLength  = 12;
  wallHeight  = 5;

  towerWidth = 6;
  towerHeight= 10;
  towerDebth = 6;


  this.chkpt('start');
  for(var i=0;i<4;i++){
    this.tower(towerWidth,towerHeight, towerDebth);
    this.fwd(towerWidth);
    this.box('5',1,wallHeight, wallLength );
    this.fwd(wallLength+towerWidth-1);
    this.turn();
  }


  this.move('start');


};


//Tilføj begge funktioner til dronen.
var Drone = require('drone');
Drone.extend( tower );
Drone.extend( castle );
