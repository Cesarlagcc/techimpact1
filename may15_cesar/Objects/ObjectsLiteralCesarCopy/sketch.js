var circle = {
	x: 200,
	y: 200,
	diam: 50,
	r: 255,
	g: 123,
	b: 25
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
background(34, 123, 218);
	noStroke();
	fill(circle.r, circle.g, circle.b);
	ellipse(circle.x, circle.y, circle.diam, circle.diam);
}