//var intro = ["Hello","fsjfsd"]
var playlist = ["Hello","I'm","Cesar","Cesar","So Long Self","greater","Welcome to the New","I Can Only Imagine",]


function setup() {
  createCanvas(500, 500);
  background(31,104,75);
  
  for (i = 0; i < 8; i++){// Use a for loop() to go through the array by index starting with 0.
    stroke(255);
    fill('white');
    textSize(30);
    text(playlist[i], i * 0 + 10, i * 200 + 50);//the string is placed here by its variable, with the x and y coordinates of the text. 
  }
}

function draw() {
  
 
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