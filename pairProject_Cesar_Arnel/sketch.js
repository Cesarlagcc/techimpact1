var welcome = ["Welcome to TechImpact"]; // String array created to display on center screen. 
var pressHere = ["Press", "Screen"];
//var speed = 2;
//var textX=100;original
var textX = 150;//The x parameter of the text value

var rectangle = { // object created for the rectangle
  x: 0,// 0 designated for the positon of the x parameter.
  y: 250,//250 desingated for the positon of the Y parameter 
  rectanW: 600,// 600 set up for the width of the rectangle.
  rectanH: 60,//the height set at 60
  r: 255,// the color spectrum of red at 255
  g: 123,// the color spectrum of green set at 123
  b: 25,// the color spectrum of blue set at 25
}

var square1 = {// Object created for the bottom shape with text inserted stating "press and hold"
  x:0,// x set at 0 for the paramter of the square.
  y: 450,// the y parameter of the shape set to 450 down the y axis
  squareSizeW:600,// the width of the bottom green shape at 600 width
  squareSizeH: 200,// the height set to 200
  r:66,// the red spectrum set at 66.
  g:244,//the green spectrum set at 244.
  b:110,//the blue spectrum set at 110. 
}


function setup() {
  createCanvas(600, 600); //canvas width by 600, canvas height by 600.
  
  
}

function draw() {
  
  background(179, 9, 9);// 
  fill(82,181,25);// fill of the bottom square set to a lightish green 
  rect(square1.x,square1.y,square1.squareSizeW,square1.squareSizeH);// object values placed into the rect parameters.
  
  
  
  fill('white');
  text("Press & Hold", 150, 590);//text value placed into parenthis for the it to be present. while the x and y are placed at 150 and 590.
  textSize(50);// size of Press and Hold set to 50.
  
  
   if (mouseIsPressed) {//if mouse is pressed and held these following actions should take place.
    fill(random(255), random(255), random(255));// fill for the square should be set to random.
    noStroke();// no stroke applying to the shape.
    rect(rectangle.x, rectangle.y, rectangle.rectanW, rectangle.rectanH);// premade parameters inserted into the values.
    //rect(0,250,600,60)

    for (i = 0; i < 6; i++) {// this is saying meanwhile the mouse is pressed, for when the value of i is less than 6 increase the increment.
      //stroke(255);
      fill('white');//when these rules are played out the fill of the text in the pop up text should be white.
      textSize(25);//the textSize should be at 25.
      text(welcome, textX * 1.1, 290);//the text should pop out with the x increment being multiplied by 1 with a height of 290.
      //text(welcome[i], i*textX+20, 300); original
      
     
}
  
  } else {}
//else go back to normal screen.

} // final bracket to draw function.





