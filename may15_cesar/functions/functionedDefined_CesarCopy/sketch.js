var blip = {
  x: 0,
  y: 100,
  xspeed: 4,
}

var blip2 = {
  x:0,
  y:200,
  xspeed: 4,
}

var blip3 = {
  x: 600,
  y:200,
  xspeed: 4,
}

var blip4 = {
  x: 600,
  y: 300,
  xspeed: 4,
}

function setup(){
  createCanvas(600, 400);
  background(0);
}

function draw(){
  move();
  display();
}

function move(){
  blip.x = blip.x + blip.xspeed;
  blip2.x = blip2.x + blip2.xspeed;
	blip3.x = blip3.x - blip3.xspeed; // use - to move the x position to the left.
	blip4.x = blip4.x - blip4.xspeed;
}

function display() {
	strokeWeight(2);
	stroke(255, 0, 255);
	// an array and for loop could be used so point does not have to be called repeatedly.
	point(blip.x, blip.y);
	point(blip2.x, blip2.y);
	point(blip3.x, blip3.y);
	point(blip4.x, blip4.y);
}