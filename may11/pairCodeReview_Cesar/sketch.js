/*
I am Cesar Andon. This was the project where Luis came up with the idea to make a keyboard that had press on 
keyboard commands that would trigger a short sound after each piano key is hit. The intial key in the demo screen
is mean't to simulate part of the piano that, when pressed would do another action. In the code given below, 
the var value is given a value of 0, so the intial "IF" statement says if the value is eqaul to 0 which it is when
the mouse is clicked once then change its color to the 255 spectrum. If not then give the color specturm at 0.

In the "For" statement, it indicates that is under the mouseClicked function, so when that is in action, the code
adds increments of the X coordinates by 50.
*/



function setup() {
  createCanvas(600, 400);
}

var value = 0;

function draw() {
  fill(value); //Also could have added a variable to give shortcut to quick color changes.
  rect(25, 25, 50, 80); //Possibily we could have given the main body of the keyboard its own variable to have easy access to the coordinates.
}

function mouseClicked() { //I feel like this if else statement was a great use when it came to the mouseclick funtion due to the action it takes when we hit the key. 
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }

  for (value = 0; value <= width; value += 50) { // we could have possibly added a if statement so that when clicking off the mouse, the fill would also switch like the keys.
    stroke(255);
    fill(0);
    rect(value, 25, 50, 100);
  }


  //   	var value = 0;
  // 	while (value <= width) {
  // 		stroke(0);
  // 		fill(255);
  // 		rect(200, 200, 50, 50);
  // 		value = value + 50;
  // 	}

  
}