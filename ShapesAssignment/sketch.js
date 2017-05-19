/*
This is the sketch of only shapes not including 
colors. In this sketch, I tried to design a smiley face, wearing a party hat.
*/

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255,255,255);
 
  //fill(0);
  arc(250, 250, 250, 250, 150, PI + QUARTER_PI, OPEN); //positioned the arc shape to the center of the canvas according to the center of the screen, with the top half as an open piece.
  stroke(0,0,0);//the main stroke color for the entire image.
  //triangle(100,200,100,400,0,200);

  //noStroke();
  fill(255,255,255);
  triangle(340, 160, 250, 5, 160, 160); //these are the coordinates to simulate the party hat over the smiley face.

  /*this is an area of the right ear that I commented out
  fill('white');
  triangle(240, 170, 280, 10, 340, 170); //this triangle simulates the right ear of the character
  */
  
  //fill('red');
  
  ellipse(200,210,50,50);//The ellipse created here is used to simulate the left eye of the face.
  
  
  ellipse(300,210,50,50);//this ellipse was intended to be viewed as the right eye.
  
  curve(200,200,300,290,200,300,10,10);//Using a curve line, I aligned it so that it can appear as a smile.
}