var RESOLUTION = 50;
var angles = [];
var rows, cols;

var vehicles = [];

function setup() {
  createCanvas(500, 600);
  background(0);
  
  rows = ceil(width / RESOLUTION);
  cols = ceil(height / RESOLUTION);

  for (var i = 0; i < 300; i++) {
    vehicles.push(new Vehicle(width/2, height/2));
  }
}

function draw() {
  //background(255);

  // flow field
  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {

      var index = r + c * rows; // *** x + y * width

      var x = r * RESOLUTION;
      var y = c * RESOLUTION;
      
      var mouse = createVector(mouseX, mouseY);
      var position = createVector(x, y);
      var vector = p5.Vector.sub(mouse, position);
      
      var sinVal = sin(frameCount *0.01);
      sinVal = map(sinVal, -1, 1, -PI/2, PI/2);
      var val = vector.heading() +  sinVal;
      
      angles[index] = val;

      push();
      translate(x, y);

      // noFill();
      // stroke(200);
      // rect(0, 0, RESOLUTION, RESOLUTION);
      // text(index, 5, 15);

      // rotate(val);
      // stroke(200);
      // line(0, 0, RESOLUTION / 2, 0);

      pop();
    }
  }

  // vehicles
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];

    var r = floor(v.pos.x / RESOLUTION);
    var c = floor(v.pos.y / RESOLUTION);
    var index = r + c * rows;

    v.flow(angles[index]);
    v.update();
    v.checkEdges();
    v.display();
  }
}