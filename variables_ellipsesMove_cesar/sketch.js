var circX; //creating a variable called circX
circX = 200; // Here I am giving the circX the value of 200.
var circY; // This is the creation of a variable called circY which will position the y-axis of the circle
circY = 200; // The value for circY is 200.
var circStroke = 125; // This is the other method of creating a variable, which is shorter than the previous version.
var circR = 255; //Assigning the intensity of the color under red.
var circG = 86; //assigning the intensity of the color under green.
var circB = 73; //assigning the intensity of the color under blue.
var circSize = 75; // The variable here is intended for the size of the ellipse.
//canvBG = 92, 105, 0;
canvR = 95; //the intensity of the red again, this time for the main background of the canvas.
canvG = 105; //this number being set for the green variant of the rgb spectrum.
canvB = 0; //No intensity set under the blue color.

midR = 66;// created a new variable for the color intensity of the center circles.
midG = 244;// this is the green parameter for the center circles.
midB = 155;//this is the blue parameter for the center circles.

sidR = 249;//added the intensity of 249 for the red spectrum.
sidG = 210;//added the intensity of 210 for the green spectrum.
sidB = 32;// added the intensity of the blue spectrum for the side by side circles.




function setup() {
  createCanvas(400, 400); //size of the canvas is set at 400 by 400.
}

function draw() {
  background(canvR, canvG, canvB);//the background is set to a olive color.
  stroke(circStroke);//the variable is put into place here, where the stroke value is already set to 125.
  fill(circR, circG, circB);//I assigned each color parameter to a different intensity as seen from above.
  
  stroke(circStroke, circStroke, circStroke);// again the stroke value is put to affect as seen from the global function.
  ellipse(circX, circY, circSize, circSize);//each value is preset from the variable above, with the circ x and y equal to 200 and the size to 75
  
  fill(midR, midG, midB);
  ellipse(circX - 0, circY - 75, circSize, circSize);//this is the first offset circle on top of the middle ellipse.
  
  fill(sidR, sidG, sidB);// this fill funtion shares the sid variables to give it the same colors as the opposite side circles.
  ellipse(circX - 68, circY - 35, circSize, circSize);//the second ellipse on the left heading down.
  ellipse(circX - 65, circY + 40, circSize, circSize);//this is the ellipse to the bottom left of the main ellipse.
  
  fill(midR, midG, midB);
  ellipse(circX + 2 ,circY + 77, circSize, circSize);//this is the ellipse exactly at the bottom of the main middle circle.
  
  fill(sidR, sidG, sidB);// creating a specific color for the side circles.
  noStroke(circStroke);// added no stroke onto the following ellipses.
  ellipse(circX + 68 , circY + 35, circSize, circSize);//ellipse placed at the bottom right of the middle circle;
  ellipse(circX + 68, circY - 40, circSize, circSize);//the ellipse placed at the top right of the main circle.
  
  fill(circR, circG, circB, 135);//

  //circX = circX + 3;//first movement of the x coordinates added by 3
  circY = circY - 8;// the - 8 to the originial 200 coordinates given makes the image push up
  circX = circX - 5;// another rule to the image set the coordinates to reroute to corner shoot.
  
  
  


}