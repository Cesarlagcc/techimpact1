var rectangle = {// object created for the rectangle
  x:0,
  y:50,
  diam: 50,
  r: 255,
  g:123,
  b: 25,
}

var rectangle2 = {//top rectangle having its own object as well.
  x:0,
  y:0,
  diam: 50,
  r: 193,
  g:138,
  b: 3,
}

var rectangle3 = {//right side rectangle.
  x:350,
  y:0,
  diam: 50,
  r: 100,
  g:200,
  b: 3,
}

var rectangle4 = {//bottom rectangle
  x:0,
  y:350,
  diam: 50,
  r:110,
  g:20,
  b: 3,
}

var elli = {//ellipse placed in the middle with the values set.
  x:200,
  y:200,
  diam:100,
  r:255,
  g:35,
  b:64,
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(66,247,255);
  noStroke();
  
  fill (elli.r,elli.g,elli.b);
  ellipse(elli.x, elli.y, elli.diam, elli.diam);
  
  fill(rectangle.r,rectangle.g,rectangle.b);
  rect(rectangle.x,rectangle.y,rectangle.diam,rectangle.diam +250);
  
  fill(rectangle2.r,rectangle2.g,rectangle2.b);
  rect(rectangle2.x,rectangle2.y,rectangle2.diam+ 300,rectangle2.diam);

  fill(rectangle3.r,rectangle3.g,rectangle3.b);
  rect(rectangle3.x,rectangle3.y,rectangle3.diam,rectangle2.diam + 300);
  
  fill(rectangle4.r,rectangle4.g,rectangle4.b);
  rect(rectangle4.x,rectangle4.y,rectangle4.diam + 350,rectangle4.diam);
  
  
  
}
