/* 
Example with shapes across the canvas/window using object literal notation.
Created by Dawn C. Hayes March 2017. 
*/

// the code below creates a circle using object literal notation. Everything inside the brackets is local in scope
// and is accessed with dot syntax. 
var circle = {// object created for the circle
	x: 200,
	y: 200,
	diam: 50,
	r: 0,
	g: 153,
	b: 153,
}

var rectangle = {// the rectangle wasnt used in this file, but an object variable was also created for it. 
  x: 300,
  y: 200,
  diam: 40,
  r:5,
  g:200,
  b:144,
  
}






/*
the same circle could be drawn using variables, but objects enable modularity and resuability in code. 
code can also be written in fewer lines. for instance:*/

// var circlex = 200;
// var circley = 200;
// var diam = 50;
// var circler = 255;
// var circleg = 123;
// var circleb = 25;


// compare this to code organized with an object.


function setup() {
	createCanvas(400, 400);
}


function draw() {
	background(34, 123, 218);
	noStroke();
	fill(circle.r, circle.g, circle.b);
	ellipse(circle.x, circle.y, circle.diam, circle.diam);


  
  if (circle.x < width) {// this code is originally written in the file created by Professor D.
    circle.diam -= 1
   }  else {
     if (circle.x > width){
       speed = speed* + -1;
       circle.diam *= -1;
     }
   }
  
}



