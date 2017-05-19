var circX = 300;
var circY = 300;

var speedX = 2;
var speedY = 3;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background('blue');
  stroke('white');
  strokeWeight(2);
  fill('green');
  rect(150, 200, 80, 80);

  rect(350, 200, 80, 80);

  if (mouseX > 150 && mouseX < 230 && mouseY <= 280 && mouseY >= 200) {
    if (mouseIsPressed) {
      noStroke();
      fill(random(255), random(255), random(255));
      ellipse(circX, circY, 50, 50);

      circX = circX + speedX;
      circY = circY + speedY;

      if (circX > width || circX < 0) {
        speedX = speedX * -1;
      }

      if (circY > height || circY < 0) {
        speedY = speedY * -1;
      }

    }
  }
}