
function setup() {
	createCanvas(600, 400);// the canvas given a width of 600 and height of 400.
	background(0, 64, 135);//the background set into setup because its something that is meant as a static piece not to change.
}

function draw() {
	strokeWeight(4);//the weight that is intended for the shape is set to 4.
	stroke(255);// the stroke of the outlines should be set to 255.

	for (var i = 0; i <= width; i += 60) { // This is stating that that variable for the x is at 0.If less than or equal to the width of the canvas than add by 60.. 
		for (var j = 0; j <= height; j += 60) { // Here the line says the value of the y coordinate is at 0. and if the value is les than or equal to the height then to  seperate by 60.
			fill(mouseX, random(255), mouseY); // the colors change here due to the positioning of the mouse across the screen. 
			rect(i, j, 35, 35); // draw at i, j for each rectangle's x and y position. 
		}
	}
}


