let boids = [];

function setup() {
  createCanvas(500, 600);
  for (let i = 0; i < 100; i++) {
    boids.push(new Boid(width/2, height/2));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < boids.length; i++) {
    let b = boids[i];
    b.separate(boids);
    b.update();
    b.checkEdges();
    b.display();
  }
}