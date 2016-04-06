 

function setup() {
  createCanvas(300, 300);

}

function draw() {
	background(255);
	var mouse = createVector(mouseX,mouseY);
	var center = createVector(width/2, height/2);

	mouse.sub(center);
	mouse.mult(0.5);//multiply by 0.5

	var mag = mouse.mag();
	

	translate(width/2, height/2);
	strokeWeight(mag/10);
	line(0,0,mouse.x, mouse.y);


}

