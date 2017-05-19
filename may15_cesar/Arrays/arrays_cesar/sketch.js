var playlist = ["Spoken for","Beautiful","Flawless","The Generous Mr.Lovewell","So Long Self","greater","Welcome to the New","I Can Only Imagine"]

function setup() {
  createCanvas(1200, 800);
  background(255,0,0);
  
  for (i = 0; i < 8; i++){// Use a for loop() to go through the array by index starting with 0.
    stroke(255);
    fill(255);
    textSize(50);
    text(playlist[i], i *100 + 50, i * 100 + 50);//the string is placed here by its variable, with the x and y coordinates of the text. 
  }
}

function draw() {
  
}