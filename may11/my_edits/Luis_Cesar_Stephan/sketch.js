/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
Created by Dawn C. Hayes March 2017. 
*/



function setup(){
  createCanvas(600,400);
}

var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50,80 );
}
function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
  
  
//   	var value = 0;
// 	while (value <= width) {
// 		stroke(0);
// 		fill(255);
// 		rect(200, 200, 50, 50);
// 		value = value + 50;
// 	}

	for (value = 0; value <= width; value += 50) {
		stroke(255);
		fill(0);
		rect(value, 25, 50, 100);
	}
}