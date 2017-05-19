//var speed = 2;

function setup() {
  createCanvas(600,400);// the canvas is set to a width of 600 and a height of 400.
}

function draw() {
  background(14, 56, 105);// background color set to a rgb of 14, 56, and 105
  
  
  var y = 10; // the value of x is 10 in this case.
  while(y <= width) {//its stating that while Y is less than or greater than the width of the canvas, to loop the following code. 
   noStroke();//no stroke is added to the following shapes under it.
   fill(180,230,190);// a stroke spectrum of greenish tint on the rgb.
   ellipse(100, y, 100, 100);// the x and the width and height share a value of 100. 
   y= y + 110;// Y equals the value the variable is assigned but then added by 110 only if its less than or equal to the width. 
   
   
   
  // fill(255,62,124);
  // ellipse(x, 400, 100, 100);
   
  }
  
  
  /*
  for (y = 0; y<= height; y+= 50){
    stroke(255);
    fill(255.255,0);
    rect(300, y, 50, 50);
    rect(400, y, 50, 50);
    rect(100, y, 50, 50);
  }*/
  //var circX = 0;
  
  //circX = circX + speed;
  
  
  //   for (circX = 0; circX <= width; circX = circX + 30){
  //     stroke(50);
  //     fill('#f89');
  
  //     ellipse(circX,100,50,50);
      
  //   fill('#fe3');
  //     ellipse(circX,200,50,50);
  //     ellipse(circX, 300, 50,50);
       
  // }
  

}
