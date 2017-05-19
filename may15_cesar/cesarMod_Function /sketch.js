var circX = 200;// the coordinate of X for the circle is at 200.
var circY = 50;// the coordinate for the Y of the circle is at 50.
var circStroke = 125;//the stroke value set to 125.
var circR = 28;//the Red spectrum of RGB set to 28.
var circG = 178;// the Green spectrum of the RGB set to 178.
var circB = 138;//the Blue spectrum of the RGB set 138.
var circSize = 75;// the size of the width and height set to 75.
var recX = 255;// the x coordinate of the rect shape is set to 255.
var recY = 100;// the Y coordinate of the rect shape is set to 100.
var recStroke = 35;// the stroke for the rect shape is set to 35.
var recCol = 255;// the color is at 255 for the rectangle shape.
var recSizeX = 100;// the width is set to 100.
var recSizeY = 100;// the height is also set to 100.
var canvBG;// canvBG is created into a variable.
canvBG = 125, 55, 255;// the color is set to 125, 55, 255.
//var speed = 1;// the value of the speed is set up to 10.


var float1 = {
  x1 : 0,// x coordinate.
  y1 : 0,//y coordiante of the rectangle shape
  x2 : 100,//width of the rectangle shape
  y2 : 100,//height of the rectangle shape.
  speed : 5,
    display: function(){
      //stroke(random(255), random(255), random(255));
		  strokeWeight(2);
		  rect(this.x1, this.y1,this.x2,this.y2);
    },
    move: function(){
      this.x1 = this.x1 + this.speed;
      //this.x2 = this.x2 + this.speed;
		  //this.y1 = this.y1 + this.speed;
		  //this.y2 = this.y2 + this.speed;
    }
}


var float2 = {
  x1: 0,
	y1: 400,
	x2: 100,
	y2: 100,
	speed:5,
	display: function() {
		//stroke(random(255), random(255), random(255));
		strokeWeight(2);
		rect(this.x1, this.y1, this.x2, this.y2);
	},
	move: function() {
		this.x1 = this.x1 + this.speed;
		//this.y1 = this.y1 + this.speed;
		//this.y2 = this.y2 + this.speed;
	}
}

var float3 = {
  x1:500,
	y1:250,
	x2: 100,
	y2: 100,
	speed:5,
	display: function() {
		//stroke(random(255), random(255), random(255));
		strokeWeight(2);
		ellipse(this.x1, this.y1, this.x2, this.y2);
	},
	move: function() {
		this.x1 = this.x1 - this.speed;
		//this.y1 = this.y1 + this.speed;
		//this.y2 = this.y2 + this.speed;
	}
}



function setup() {
  createCanvas(500, 500)
 
}

function draw() {
  //background(canvBG);// the variable is placed within, with the rgb of 125,55,255.
  // stroke(circStroke);//the stroke variable is put into effect here as well.
  // fill(circR, circG, circB);//the variet of variables stated in the global function, are placed within the parenthesis.
  // ellipse(circX, circY, circSize, circSize);// a x position of 200 and a Y of 50 make this circular shape positioned at the top of the canvas.
  // ellipse(circX + 0, circY + 400, circSize, circSize);// The Y coordinate is being added by a 400 plus value to its original 50 coordinate position.

  // fill(circR, circG, circB, 135);//

  // circX = circX + speed;//this is stating that the x position of the circle is to be added by the reserve keyword.

  // stroke(recStroke);// value of 35 is placed into the variable of recStroke.
  // fill(recCol);//a rgb color of 255 is placed into the fill for this rectangle shape.
  // rect(recX, recY, recSizeX, recSizeY);//the x and Y are both set to 255 and 100. with the size of width and height at 100.

  // recX = recX - speed;// the width of the rectangle should be subtracted by speed in order for the shape to go in the opposite direction.

  // if (circX > width || circX < 0) {// this is stating that if the circle is greater than or if the circle is less than the speed times that of a negative 1. then to take into affect and move. 

  //   speed = speed * -1;
  
  /* 
  the code below this is all code from involving the use of functions
  */
background(canvBG);
	float1.move();
	float1.display();
	float2.move();
	float2.display();
	float3.move();
	float3.display();
  }



