var b = 200;
b += 10;


function setup() {
  createCanvas(600, 400);
  background(0, 64,135);
}

function draw() {
  strokeWeight(4);// strokeweight applying to both shapes given on the screen. 
  //stroke(255);
  
  for(var i = 0; i<= width; i += 50 ){//This is the "For" loop intended for the longer rectangles that are horizontal on screen.
    	for (var j = 50; j <= height; j += 100) {//This tells the Y coordinate if its less than or equal to the height of the canvas, then increase by 100.
			fill(mouseX, random(255), mouseY)// The movement of the mouse when moved vertically and horizontally indicate the change in the color spectrum.
			rect(i, j, 105, 20); // the shape of rect is given an X of 0 and a Y of 50, with a width of 105 and a height of 20.
			stroke(255);//the stroke for this specific shape is meant to be at 255. 
		}
	}//this is the end bracket for the first FOR function
	
for (var a = 90; a <=width;a += 200){// This function is for the small squares in the demo.
  for (var b = 25;b <= height; b += 50){// here i state that for the Y of the shape, if less than the height then increase by 50.
  fill(mouseX,random(255),mouseY)// the mouse position throughout the screen affects the color that takes place.
  rect(a, b, 20,20);//the coordiantes and size of the shape that is used on the screen, in this case being the small sqaures.
  // b <= height;
    }
  }//end bracket for the small squares.
	
}//main draw bracket ending here