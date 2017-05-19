
function setup() {
	createCanvas(600, 400);// the canvas size is set to a width of 600 and Y of 400.
}

function draw() {
	background(14, 56, 105);// rgb is set at 14,56,105 giving it a blue color.

	var y = 0;//the variable of Y is placed within the functions, making it a scope variable. And the Y is set to a value of 0.
	while (y <= height) {// This is stating tha tif the value of 0 is less than the height of the canvas than to take into affect that it be increaced by the Y + 50.
		stroke(0);// stroke color set at 0.
		fill(255);// the fill set at 255.
		rect(200, y, 50, 50);// the x of the shape is set at 200. the Y is 0. and the width and height at 50.
		y = y + 50;// this is stating to add the Y by 50.
	}

	for (y = 0; y <= height; y += 50) {// this is the for function that states the variable to 0. and if the Y is less than or equal to the height of 400 to also add the y by 50.
		stroke(255);// the stroke is set at 255.
		fill(0);// the fill is given a 0 makign it a white color I believe.
		rect(300, y, 50, 50);// the x is set to 300. the Y is a value of 0. the width and height is at 50.
	}
}