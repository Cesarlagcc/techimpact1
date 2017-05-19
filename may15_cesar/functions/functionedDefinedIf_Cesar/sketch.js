var blip = {
  x: 0,
  y: 40,
  xspeed: 4,
  yspeed: -3,
}


function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  move();
  bounce();
  display();
}

function bounce(){
  if (blip.x > width || blip.x < 0){
    blip.xspeed = blip.xspeed * -1;
    background(random(255), random(255), random(255));
  }
  
  if(blip.y > height || blip.y < 0){
    blip.yspeed = blip.yspeed * -1;
    background(random(255),random(255), random(255));
    }
}

function move(){
  blip.x = blip.x + blip.xspeed;
  blip.y = blip.y + blip.yspeed;
}

function display(){
  strokeWeight(2);
  stroke(255);
  point(blip.x,blip.y);
}