let flakes = [];
let inc = 0.01;
let gravity;
let r;

function setup() {
  const cnv = createCanvas(400, 400);
  cnv.position(displayWidth / 2 - width / 2, 0);
  
  rectMode(CENTER);
  
  for (let i = 0; i < random(100, 150); i ++) {
    flakes[i] = new Snowflake();
  }
  
  gravity = createVector(0, 0.03);
  r = floor(random(width));
}

function draw() {
  background(0);
  
  //drawSnowman(width / 2, height / 2);
  
  for (let i = 0; i < flakes.length; i++) {
    flakes[i].applyForce(gravity);
    flakes[i].update();
    flakes[i].borders();
    flakes[i].show();
  }
  
  noFill();
  stroke(255);
  strokeWeight(2);
  
  let xoff = 0;
  
  beginShape();
  
  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), -0.5, 1, 0, height);
    
    if (r == x) { 
      drawSnowman(x, y - 5);
    }
    
    vertex(x, y);
    line(x, y, x, height);
    xoff += inc;
  }
  
  endShape();
}

function drawSnowman(x, y) {
  push();
  noStroke();
  fill(255);
  scale(0.5);
  translate(x * 2, y * 2);
  noStroke();
  ellipse(0, 0, 50);
  ellipse(0, -25, 40);
  ellipse(0, -50, 25);
  fill(255, 165, 0);
  triangle(0, -50, 0, -45, 10, -47.5);
  stroke(51);
  fill(0);
  rect(0, 0 - 70, 25, 25);
  line(-20, -57, 20, -57);
  pop();
}
