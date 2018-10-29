
var particle;


function setup(){
  createCanvas(1200,600);

  particle = new Particle(15, 600, 300);
}

function draw(){
  background(0);

  particle.update();
  particle.display();
}

function mousePressed(){
  background(0);
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
      this.acc.setMag(0.09);
    }

      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.vel.mult(0.99);

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
    stroke(255);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
