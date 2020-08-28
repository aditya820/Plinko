const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bottom,roof, right, left;
var bottom2;

var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  bottom = new Ground(240,795,480,10,"darkred");
  roof = new Ground(240,5,480,10,"darkred");
  right = new Ground(475,400,10,800,"darkred");
  left = new Ground(5,400,10,800,"darkred");

  bottom2 = new Ground(240,785,460,10,"lightblue");

  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 50; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 75; j<= width; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 50; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 75; j<= width; j = j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background("lightyellow");  
  drawSprites();

  Engine.run(engine);

  bottom.display();
  roof.display();
  right.display();
  left.display();

  bottom2.display();

  for(var i = 0; i < plinkos.lengh; i++){
    plinkos[i].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(1,479),10,10));
  }

  for(var j = 0; j < particles; j++){
    particles[j].display();
  }

   for(var k = 0; k < divisions.lengh; k++){
    divisions[k].display();
  }
}