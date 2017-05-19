/*
one thing i notice about switching the functions from draw() into setup()
is that some rules don't transfer over as easily as when they were originally in the 
draw() function.

Also i believe one key feature of the setup function is that its designated purpose is that of a static rule, 
something that will not change over time. 
*/

function setup() {
  createCanvas(500, 500)
  background(47, 96, 174);
  
  stroke(249, 229, 248);//gave this rgb color of a light purple
  fill(182, 43, 242)//the fill is more of a darker purple
  ellipse(58, 55, 100, 100); // added another shape into the canvas which is a triangle
  
  stroke(92, 215, 249);// this stroke applies to both the ellipse and the triangle giving the stroke a dark green color
  fill(91, 186, 99)//the fill for this circle is more of a green color
  ellipse(58, 165, 100, 100); // added another shape into the canvas which is a triangle
  triangle(450, 250, 495, 0, 400, 0)// the triangle is set in a position that is heading down towards the canvas.
}


//I tried to place the elipse at the center of the canvas 
function draw() {

  //var colors = ['purple', 'green', 'yellow', 'blue']; //added a variable and an array with various colors
  //var color = random(colors); // select random word
  //background(color);  // draw the word
 //background(47, 96, 174); //the background color of the canvas is set to a black color

  stroke(83, 178, 237); //the color around the circle is set to red.
  strokeWeight(5); //made the stroke weight of the the circle to a thickness of 10.
  fill(163, 224, 49); // set the fill in color of the circle to a gray color
  //ellipse(250, 250, 100, 100); //I have given the x and y position of the circle to try and set it to the center of the canvas

/*
  stroke(249, 229, 248);//gave this rgb color of a light purple
  fill(182, 43, 242)//the fill is more of a darker purple
  ellipse(58, 55, 100, 100); // added another shape into the canvas which is a triangle
*/


/*  
  stroke(92, 215, 249);// this stroke applies to both the ellipse and the triangle giving the stroke a dark green color
  fill(91, 186, 99)//the fill for this circle is more of a green color
  ellipse(58, 165, 100, 100); // added another shape into the canvas which is a triangle
  triangle(450, 250, 495, 0, 400, 0)// the triangle is set in a position that is heading down towards the canvas.
*/
  stroke(252, 109, 0)//an auburn color is set as this ellipses stroke.
  fill(247, 190, 56)// the fill is set as an orange.
  triangle(500, 500, 498, -10, 400, 500)// this triangle is the one going upwards.


  stroke(252, 0, 0);// Red is set as the primary for the stroke
  fill(255, 204, 204)// a pinkish color is set for the inner fill
  ellipse(58, 275, 100, 100);// the ellipse is set third row

  stroke(66, 65, 61)//a dark gray is set as the stroke for this shape.
  fill(252, 248, 237);// a white tone is set for the fill in this ellipse.
  ellipse(58, 385, 100, 100);// this ellipse is positioned at the fourth from the top.

  stroke(255,255,255);//a basic white color is given as the stroke.
  fill(247, 243, 37);//a bright yellow is given for this ellipse.
  ellipse(58, 495, 100, 100);//this ellipse is the very last one, being cut out from the canvas.
}