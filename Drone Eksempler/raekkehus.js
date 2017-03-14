function raekkehus() {
  var bredde = 10;
  var hoejde = 6;
  var dybde  = 8;

  var wallpaper = 5;
  var roof =1;
  this.up();


var antalHuse=0;
var maxHuse=10;
while(antalHuse<maxHuse){
  this.box0(wallpaper,bredde,hoejde,dybde);
  this.chkpt('houseStart');
  this.up(hoejde);
  this.prism(roof, bredde,dybde);
  this.move('houseStart');
  this.right(Math.floor(bredde/2));
  this.box(0,1,2,1);
  this.move('houseStart');
  this.right(bredde);
  antalHuse++;
}
/*
for(i=0; i<maxHuse;i++){
  this.box0(wallpaper,bredde,hoejde,dybde);
  this.chkpt('houseStart');
  this.up(hoejde);
  this.prism(roof, bredde,dybde);
  this.move('houseStart');
  this.right(Math.floor(bredde/2));
  this.box(0,1,2,1);
  this.move('houseStart');
  this.right(bredde);
}
*/


};

var Drone = require('drone');
Drone.extend( raekkehus );
