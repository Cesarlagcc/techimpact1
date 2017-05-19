

var circX = 200;// x coordinate of the circle at 200. 
var circY = 200; // Y coordinate of the circle at 200.
var circStroke = 125; // stroke for the circle at 125.
var circR = 55; // red spectrum of circle at 55.
var circG = 135; //green spectrum of the circle at 135.
var circB = 225; //blue spectrum of the circle at 225.
var circSize = 75;//width and height of the circle at 75.
var recX = 100;//x coordinate of the rectangle at 100.
var recY = 300;//y coordinate of the rectangle at 300.
var recStroke = 35;//stroke of the rectangle at 35.
var recCol = 0;//color of the rectangle at 0.
var recSize = 75;//width and height of the rectangle at 75.
var canvBG;//canvBG set to a variable with a rgb at the bottom.
canvBG = 125, 55, 255; 
var speed = 2;//speed given value of 2.



function setup() {  
	createCanvas(400, 400); // canvas height and width set at 400.
}


function draw() {
	background(canvBG); //rgb set to background
	stroke(circStroke); //value of 125 is put into effect here.
	fill(circR, circG, circB);  
	stroke(circStroke);       
	ellipse(circX, circY, circSize, circSize);//a x coordinate of 200 and Y coordinate of 200. with the size both set 75. 
	ellipse(circX + 50, circY - 75, circSize, circSize); //the circles, have their coordinates added by 50 and the Y subtracted by 75.
	fill(circR, circG, circB, 135); 
	
	circX = circX + speed; // this is introducing that the value of the circX is to be added by the value of our speed which is set to 2.
					   
  stroke(recStroke);
  fill(recCol);
  rect(recX, recY, recSize, recSize);
    
    recY = recY - speed; //here our value of the rectangles Y is subtracted by the value of 2.
    
    if(circX > width || circX < 0) { // Here it states that that if the circle x coordinate is greater than the width of the canvas or if the x is less than 0. than to place the affect of the shapes to move to be true. 
    	speed = speed *-1;	
    } 					
}