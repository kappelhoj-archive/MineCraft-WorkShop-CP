function mystarterhouse() {

  this.left(5);
  this.back(5);

  //Sætter en checkpoint som man kan vende tilbage til.
  this.chkpt('mystarterhouse');

  //Lav huset:
  this.box('5',9,1,9);
  this.up();
  this.box0('5',9,3,9);
  this.up(3);
  this.prism('1',9,9);

  //Går til checkpointet 'mystarterhouse'
  this.move('mystarterhouse');

  //lav et hul til døren.
  this.up();
  this.right(4);
  this.box('0',1,2,1);

  //Går til checkpointet 'mystarterhouse'
  this.move('mystarterhouse');

  //Lav to vinduer.
  this.up(2);
  this.right(2);
  this.box('102');
  this.right(4);
  this.box('102');

  //Går til checkpointet 'mystarterhouse'
  this.move('mystarterhouse');

  //Lav indvendige ting.
  this.up();
  this.right(1);
  this.fwd(7);
//  this.turn();
  this.box('58');
  this.fwd();
  this.box('61');
  this.fwd();
  this.box('54');
  this.turn(3);
  this.up();
  this.hangtorch();


  //Går til checkpointet 'mystarterhouse'
  this.move('mystarterhouse');
};

var Drone = require('drone');
Drone.extend( mystarterhouse );
