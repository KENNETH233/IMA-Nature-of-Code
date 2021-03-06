let boids = [];

function setup() {
  createCanvas(1000, 600);
  for (let i = 0; i < 100; i++) {
    boids.push(new Boid(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < boids.length; i++) {
    let b = boids[i];
    b.flock(boids);
    b.update();
    b.checkEdges();
    b.display();
  }
}