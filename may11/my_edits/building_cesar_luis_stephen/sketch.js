
var buildingRectX = 150; // x coordinate for building rectangle
var buildingRectY = 200; // y coordinate for building rectangle
var buildingSizeW = 300; // building width argument
var buildingSizeH = 500; //building height argument



function setup() {
  createCanvas(600, 600);
}

function draw() {
  rect(buildingRectX, buildingRectY, buildingSizeW,buildingSizeH);
  //rect(windowRectX, windowRectY);
  
  for (var i = 150; i <= width; i += 200) { // for every i add 60. Spaces rectangles out. 
		for (var j =200; j <= height; j += 100) { // for every j add 60. Spaces rectangles out.
			//fill(mouseX, random(255), mouseY); // fill based on a random value and the mouse position
			rect(i, j, 35, 35); // draw at i, j for each rectangle's x and y position. 
		}
	}
}