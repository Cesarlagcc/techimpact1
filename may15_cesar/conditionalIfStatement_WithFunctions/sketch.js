var square1 = {
  x: 20,
  y: 100,
  xspeed: 10,
  
  
}

var circle1 ={
  x:0,
  y:200,
  xspeed:4,
}

var square2= {
  x: 600,
  y:200,
  xpeed: 5,
}

var squareSize = {
  width:200,
  height:200,
}



function setup() {
  createCanvas(600, 400);
	background(0);
}

function draw() {
  move(); 
	display();
	square1(square1.x = 0, square1.y, squareSize, SquareSize);
}

function move(){
  square1.x = square1.x + square1.xspeed;
  circle1.x = circle1.x + circle1.xspeed;
  square2.x = square1.x - square1.xspeed;
}

function display() {
	strokeWeight(2);
	stroke(255, 200, 255);
	//rect(200,200,200,200);
	// an array and for loop could be used so point does not have to be called repeatedly.
	point(square1.x, square1.y);
// 	point(blip2.x, blip2.y);
// 	point(blip3.x, blip3.y);
// 	point(blip4.x, blip4.y);
}