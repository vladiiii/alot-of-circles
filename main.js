
var canvas;

var particles = [];

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for(var i = 0; i < 1000; i++){
    particles[i] = new Particle(15, random(windowWidth), random(windowHeight));
  }
}

function draw(){
  background(0);
  for(var i = 0; i < particles.length; i++){
  particles[i].update();
  particles[i].display();
}
}

function Particle(size, x, y){
  this.size = size;
  this.x = x;
  this.y = y;
  this.pos = createVector(this.x, this.y);
  this.vel = createVector(0, 0);


  this.update = function(){
    let mouse = createVector(mouseX, mouseY);
    this.acc = createVector(0, 0);

    if(mouseIsPressed){
      this.acc = p5.Vector.sub(mouse, this.pos);
      this.acc.setMag(0.06);
    }

      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.vel.mult(0.95);

      if(this.pos.y > height){
        this.vel.y *= -1;
        this.pos.y = height;
      }else if(this.pos.y < 0){
        this.vel.y *= -1;
        this.pos.y = 0;
      }

      if(this.pos.x > width){
        this.vel.x *= -1;
        this.pos.x = width;
      }else if(this.pos.x < 0){
        this.vel.x *= -1;
        this.pos.x = 0;
      }

  }
  this.display = function(){
    fill(102, 0, 153);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size * 2, this.size * 2);
  }
}
