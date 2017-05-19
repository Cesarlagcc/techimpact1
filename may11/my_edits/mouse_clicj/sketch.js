/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
Created by Dawn C. Hayes March 2017. 
*/


function setup() {
	createCanvas(600, 400);
}
var value = 0;
function draw() {
	background(14, 56, 105);

	var value = 0;
	while (value <= width) {
		stroke(0);
		fill(255);
		rect(value, 200, 100, 50);
		value = value + 50;
	}


  fill(value);
  rect(25, 25, 50, 50);

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}



// 	for (y = 0; y <= height; y += 50) {
// 		stroke(255);
// 		fill(0);
// 		rect(300, y, 50, 50);
// 	}
}