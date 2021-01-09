const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,ground,ball;









function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var ground1={

    isStatic:true
  }

  ground=Bodies.rectangle(400,380,400,50,ground1)
  World.add(world,ground)
  var ball1={

    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball1);
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
}